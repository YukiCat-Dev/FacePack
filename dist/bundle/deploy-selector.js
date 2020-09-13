(function () {
    var me = {};
    Object.defineProperty(me, "__esModule", {
        value: !0
    });
    var ne = void 0;
    async function Qk(r) {
        return fetch(r, {
            method: "GET"
        }).then(r => {
            if (r.ok) return r.json();
            throw new Error("Fetch Error:Return HTTP ".concat(r.status, ", ").concat(r.statusText))
        })
    }
    me.importJSON = ne, ne = Qk, me.importJSON = ne;
    var cd = {};
    Object.defineProperty(cd, "__esModule", {
        value: !0
    });
    var oe = void 0;
    cd.processTemplate = oe;
    class Rk {
        constructor(e, t, a) {
            this.replacePlaceHolder = a, this.LEFT_BRACKET = e, this.RIGHT_BRACKET = t
        }
        async process(e) {
            let t = !1,
                a = "",
                p = "";
            for (const r of e) switch (r) {
                case this.LEFT_BRACKET:
                    t ? this.LEFT_BRACKET == this.RIGHT_BRACKET ? (t = !1, a += await this.replacePlaceHolder(p), p = "") : (t = !1, a += "".concat(this.LEFT_BRACKET, "bracketContent").concat(this.LEFT_BRACKET), p = "") : t = !0;
                    break;
                case this.RIGHT_BRACKET:
                    t ? (t = !1, a += await this.replacePlaceHolder(p), p = "") : a += r;
                    break;
                default:
                    t ? p += r : a += r;
            }
            return "" != p && (a += this.LEFT_BRACKET + p), a
        }
    }
    var Sk = Rk;

    function Tk(e, t, a, p) {
        let r = !1,
            s = "",
            o = "";
        for (const $ of p) switch ($) {
            case e:
                r ? e == t ? (r = !1, s += a(o), o = "") : (r = !1, s += "".concat(e, "bracketContent").concat(e), o = "") : r = !0;
                break;
            case t:
                r ? (r = !1, s += a(o), o = "") : s += $;
                break;
            default:
                r ? o += $ : s += $;
        }
        return "" != o && (s += e + o), s
    }
    cd.default = Sk, oe = Tk, cd.processTemplate = oe;
    var pe = {};
    Object.defineProperty(pe, "__esModule", {
        value: !0
    });
    var qe = void 0;
    pe.getFaceFullUrl = qe;

    function Uk(r, e) {
        return oe("{", "}", r => "p_url" == r ? e.p_url : "{".concat(r, "}"), r.url)
    }
    qe = Uk, pe.getFaceFullUrl = qe;
    var re = {};
    Object.defineProperty(re, "__esModule", {
        value: !0
    });
    var se = void 0;
    re.importExternalFacePacks = se;
    async function Vk(r) {
        const a = await ne(r);
        if (a) {
            for (const r of a) r.faces.forEach(a => {
                a.url = qe(a, r)
            });
            return a
        }
        throw new Error("Try to load FacePacks from '".concat(r, "' failed."))
    }
    se = Vk, re.importExternalFacePacks = se;

    function Wk(e, t, r) {
        void 0 === r && (r = !1);
        var $ = lb(t),
            o = jc(e),
            l = Ra(t),
            a = {
                scrollLeft: 0,
                scrollTop: 0
            },
            i = {
                x: 0,
                y: 0
            };
        return (l || !l && !r) && (("body" !== _a(t) || we($)) && (a = Xk(t)), Ra(t) ? ((i = jc(t)).x += t.clientLeft, i.y += t.clientTop) : $ && (i.x = ve($))), {
            x: o.left + a.scrollLeft - i.x,
            y: o.top + a.scrollTop - i.y,
            width: o.width,
            height: o.height
        }
    }

    function jc(t) {
        var e = t.getBoundingClientRect();
        return {
            width: e.width,
            height: e.height,
            top: e.top,
            right: e.right,
            bottom: e.bottom,
            left: e.left,
            x: e.left,
            y: e.top
        }
    }

    function Xk(e) {
        return e !== Qa(e) && Ra(e) ? Yk(e) : ue(e)
    }

    function ue(e) {
        var o = Qa(e);
        return {
            scrollLeft: o.pageXOffset,
            scrollTop: o.pageYOffset
        }
    }

    function Qa(t) {
        if ("[object Window]" !== t.toString()) {
            var e = t.ownerDocument;
            return e ? e.defaultView : window
        }
        return t
    }

    function kc(e) {
        return e instanceof Qa(e).Element || e instanceof Element
    }

    function Ra(e) {
        return e instanceof Qa(e).HTMLElement || e instanceof HTMLElement
    }

    function Yk(l) {
        return {
            scrollLeft: l.scrollLeft,
            scrollTop: l.scrollTop
        }
    }

    function _a(e) {
        return e ? (e.nodeName || "").toLowerCase() : null
    }

    function ve(e) {
        return jc(lb(e)).left + ue(e).scrollLeft
    }

    function lb(e) {
        return (kc(e) ? e.ownerDocument : e.document).documentElement
    }

    function we(e) {
        var t = yb(e),
            o = t.overflow,
            r = t.overflowX,
            $ = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(o + $ + r)
    }

    function yb(r) {
        return Qa(r).getComputedStyle(r)
    }

    function xe(t) {
        return {
            x: t.offsetLeft,
            y: t.offsetTop,
            width: t.offsetWidth,
            height: t.offsetHeight
        }
    }

    function lc(e, r) {
        void 0 === r && (r = []);
        var $ = Ig(e),
            t = "body" === _a($),
            o = Qa($),
            a = t ? [o].concat(o.visualViewport || [], we($) ? $ : []) : $,
            m = r.concat(a);
        return t ? m : m.concat(lc(ye(a)))
    }

    function Ig(r) {
        return ["html", "body", "#document"].indexOf(_a(r)) >= 0 ? r.ownerDocument.body : Ra(r) && we(r) ? r : Ig(ye(r))
    }

    function ye(e) {
        return "html" === _a(e) ? e : e.assignedSlot || e.parentNode || e.host || lb(e)
    }

    function Jg(e) {
        return Ra(e) && "fixed" !== yb(e).position ? e.offsetParent : null
    }

    function Zk(e) {
        for (var t = ye(e); Ra(t) && ["html", "body"].indexOf(_a(t)) < 0;) {
            var $ = yb(t);
            if ("none" !== $.transform || "none" !== $.perspective || "auto" !== $.willChange) return t;
            t = t.parentNode
        }
        return null
    }

    function mc(e) {
        for (var t = Qa(e), $ = Jg(e); $ && $k($) && "static" === yb($).position;) $ = Jg($);
        return $ && "body" === _a($) && "static" === yb($).position ? t : $ || Zk(e) || t
    }

    function $k(e) {
        return ["table", "td", "th"].indexOf(_a(e)) >= 0
    }

    function _k(r) {
        var e = new Map,
            t = new Set,
            n = [];
        return r.forEach(function (r) {
            e.set(r.name, r)
        }), r.forEach(function (r) {
            t.has(r.name) || function r(a) {
                t.add(a.name), [].concat(a.requires || [], a.requiresIfExists || []).forEach(function (n) {
                    if (!t.has(n)) {
                        var a = e.get(n);
                        a && r(a)
                    }
                }), n.push(a)
            }(r)
        }), n
    }

    function al(r) {
        var e = _k(r);
        return ml.reduce(function (r, t) {
            return r.concat(e.filter(function (r) {
                return r.phase === t
            }))
        }, [])
    }
    var ya = "top";
    var Ja = "bottom";
    var Ka = "right";
    var za = "left";
    var ze = "auto";
    var nc = [ya, Ja, Ka, za];
    var Rb = "start";
    var Ae = "end";
    var bl = "clippingParents";
    var Kg = "viewport";
    var oc = "popper";
    var cl = "reference";
    var Lg = nc.reduce(function ($, e) {
        return $.concat([e + "-" + Rb, e + "-" + Ae])
    }, []);
    var Mg = [].concat(nc, [ze]).reduce(function ($, e) {
        return $.concat([e, e + "-" + Rb, e + "-" + Ae])
    }, []);
    var dl = "beforeRead";
    var el = "read";
    var fl = "afterRead";
    var gl = "beforeMain";
    var hl = "main";
    var il = "afterMain";
    var jl = "beforeWrite";
    var kl = "write";
    var ll = "afterWrite";
    var ml = [dl, el, fl, gl, hl, il, jl, kl, ll];

    function nl(e) {
        var t;
        return function () {
            return t || (t = new Promise(function (r) {
                Promise.resolve().then(function () {
                    t = void 0, r(e())
                })
            })), t
        }
    }

    function Sa(e) {
        return e.split("-")[0]
    }

    function ol(t) {
        var e = t.reduce(function (t, e) {
            var a = t[e.name];
            return t[e.name] = a ? Object.assign(Object.assign(Object.assign({}, a), e), {}, {
                options: Object.assign(Object.assign({}, a.options), e.options),
                data: Object.assign(Object.assign({}, a.data), e.data)
            }) : e, t
        }, {});
        return Object.keys(e).map(function (t) {
            return e[t]
        })
    }
    var Ng = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };

    function Og() {
        for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++) r[t] = arguments[t];
        return !r.some(function (e) {
            return !(e && "function" == typeof e.getBoundingClientRect)
        })
    }

    function Pg(e) {
        void 0 === e && (e = {});
        var r = e,
            t = r.defaultModifiers,
            o = void 0 === t ? [] : t,
            i = r.defaultOptions,
            n = void 0 === i ? Ng : i;
        return function (e, r, t) {
            void 0 === t && (t = n);
            var i = {
                    placement: "bottom",
                    orderedModifiers: [],
                    options: Object.assign(Object.assign({}, Ng), n),
                    modifiersData: {},
                    elements: {
                        reference: e,
                        popper: r
                    },
                    attributes: {},
                    styles: {}
                },
                s = [],
                a = !1,
                $ = {
                    state: i,
                    setOptions: function (t) {
                        p(), i.options = Object.assign(Object.assign(Object.assign({}, n), i.options), t), i.scrollParents = {
                            reference: kc(e) ? lc(e) : e.contextElement ? lc(e.contextElement) : [],
                            popper: lc(r)
                        };
                        var a = al(ol([].concat(o, i.options.modifiers)));
                        return i.orderedModifiers = a.filter(function (e) {
                            return e.enabled
                        }), i.orderedModifiers.forEach(function (e) {
                            var r = e.name,
                                t = e.options,
                                o = void 0 === t ? {} : t,
                                n = e.effect;
                            if ("function" == typeof n) {
                                var a = n({
                                    state: i,
                                    name: r,
                                    instance: $,
                                    options: o
                                });
                                s.push(a || function () {})
                            }
                        }), $.update()
                    },
                    forceUpdate: function () {
                        if (!a) {
                            var e = i.elements,
                                r = e.reference,
                                t = e.popper;
                            if (Og(r, t)) {
                                i.rects = {
                                    reference: Wk(r, mc(t), "fixed" === i.options.strategy),
                                    popper: xe(t)
                                }, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach(function (e) {
                                    return i.modifiersData[e.name] = Object.assign({}, e.data)
                                });
                                for (var o = 0; o < i.orderedModifiers.length; o++)
                                    if (!0 !== i.reset) {
                                        var n = i.orderedModifiers[o],
                                            s = n.fn,
                                            p = n.options,
                                            c = void 0 === p ? {} : p,
                                            l = n.name;
                                        "function" == typeof s && (i = s({
                                            state: i,
                                            options: c,
                                            name: l,
                                            instance: $
                                        }) || i)
                                    } else i.reset = !1, o = -1
                            }
                        }
                    },
                    update: nl(function () {
                        return new Promise(function (e) {
                            $.forceUpdate(), e(i)
                        })
                    }),
                    destroy: function () {
                        p(), a = !0
                    }
                };
            if (!Og(e, r)) return $;

            function p() {
                s.forEach(function (e) {
                    return e()
                }), s = []
            }
            return $.setOptions(t).then(function (e) {
                !a && t.onFirstUpdate && t.onFirstUpdate(e)
            }), $
        }
    }
    var a = Pg();
    var dd = {
        passive: !0
    };

    function pl(e) {
        var s = e.state,
            r = e.instance,
            t = e.options,
            a = t.scroll,
            p = void 0 === a || a,
            $ = t.resize,
            n = void 0 === $ || $,
            i = Qa(s.elements.popper),
            o = [].concat(s.scrollParents.reference, s.scrollParents.popper);
        return p && o.forEach(function (e) {
                e.addEventListener("scroll", r.update, dd)
            }), n && i.addEventListener("resize", r.update, dd),
            function () {
                p && o.forEach(function (e) {
                    e.removeEventListener("scroll", r.update, dd)
                }), n && i.removeEventListener("resize", r.update, dd)
            }
    }
    var ql = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function () {},
        effect: pl,
        data: {}
    };

    function rl(e) {
        var t = e.state,
            f = e.name;
        t.modifiersData[f] = Qg({
            reference: t.rects.reference,
            element: t.rects.popper,
            strategy: "absolute",
            placement: t.placement
        })
    }

    function Qg(e) {
        var t, r = e.reference,
            $ = e.element,
            a = e.placement,
            i = a ? Sa(a) : null,
            f = a ? pc(a) : null,
            d = r.x + r.width / 2 - $.width / 2,
            l = r.y + r.height / 2 - $.height / 2;
        switch (i) {
            case ya:
                t = {
                    x: d,
                    y: r.y - $.height
                };
                break;
            case Ja:
                t = {
                    x: d,
                    y: r.y + r.height
                };
                break;
            case Ka:
                t = {
                    x: r.x + r.width,
                    y: l
                };
                break;
            case za:
                t = {
                    x: r.x - $.width,
                    y: l
                };
                break;
            default:
                t = {
                    x: r.x,
                    y: r.y
                };
        }
        var o = i ? Be(i) : null;
        if (null != o) {
            var h = "y" === o ? "height" : "width";
            switch (f) {
                case Rb:
                    t[o] = Math.floor(t[o]) - Math.floor(r[h] / 2 - $[h] / 2);
                    break;
                case Ae:
                    t[o] = Math.floor(t[o]) + Math.ceil(r[h] / 2 - $[h] / 2);
            }
        }
        return t
    }

    function pc(t) {
        return t.split("-")[1]
    }

    function Be(t) {
        return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
    }
    var sl = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: rl,
        data: {}
    };
    var tl = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    };

    function ul(t) {
        var e = t.x,
            r = t.y,
            s = window.devicePixelRatio || 1;
        return {
            x: Math.round(e * s) / s || 0,
            y: Math.round(r * s) / s || 0
        }
    }

    function Rg(t) {
        var e, r = t.popper,
            s = t.popperRect,
            a = t.placement,
            o = t.offsets,
            p = t.position,
            i = t.gpuAcceleration,
            $ = t.adaptive,
            n = ul(o),
            l = n.x,
            b = n.y,
            c = o.hasOwnProperty("x"),
            m = o.hasOwnProperty("y"),
            u = za,
            d = ya,
            f = window;
        if ($) {
            var g = mc(r);
            g === Qa(r) && (g = lb(r)), a === ya && (d = Ja, b -= g.clientHeight - s.height, b *= i ? 1 : -1), a === za && (u = Ka, l -= g.clientWidth - s.width, l *= i ? 1 : -1)
        }
        var O, v = Object.assign({
            position: p
        }, $ && tl);
        return i ? Object.assign(Object.assign({}, v), {}, ((O = {})[d] = m ? "0" : "", O[u] = c ? "0" : "", O.transform = (f.devicePixelRatio || 1) < 2 ? "translate(" + l + "px, " + b + "px)" : "translate3d(" + l + "px, " + b + "px, 0)", O)) : Object.assign(Object.assign({}, v), {}, ((e = {})[d] = m ? b + "px" : "", e[u] = c ? l + "px" : "", e.transform = "", e))
    }

    function vl(t) {
        var e = t.state,
            r = t.options,
            s = r.gpuAcceleration,
            a = void 0 === s || s,
            o = r.adaptive,
            p = void 0 === o || o,
            i = {
                placement: Sa(e.placement),
                popper: e.elements.popper,
                popperRect: e.rects.popper,
                gpuAcceleration: a
            };
        null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign(Object.assign({}, e.styles.popper), Rg(Object.assign(Object.assign({}, i), {}, {
            offsets: e.modifiersData.popperOffsets,
            position: e.options.strategy,
            adaptive: p
        })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign(Object.assign({}, e.styles.arrow), Rg(Object.assign(Object.assign({}, i), {}, {
            offsets: e.modifiersData.arrow,
            position: "absolute",
            adaptive: !1
        })))), e.attributes.popper = Object.assign(Object.assign({}, e.attributes.popper), {}, {
            "data-popper-placement": e.placement
        })
    }
    var wl = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: vl,
        data: {}
    };

    function xl(e) {
        var t = e.state;
        Object.keys(t.elements).forEach(function (e) {
            var r = t.styles[e] || {},
                n = t.attributes[e] || {},
                s = t.elements[e];
            Ra(s) && _a(s) && (Object.assign(s.style, r), Object.keys(n).forEach(function (e) {
                var t = n[e];
                !1 === t ? s.removeAttribute(e) : s.setAttribute(e, !0 === t ? "" : t)
            }))
        })
    }

    function yl(e) {
        var t = e.state,
            r = {
                popper: {
                    position: t.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0"
                },
                arrow: {
                    position: "absolute"
                },
                reference: {}
            };
        return Object.assign(t.elements.popper.style, r.popper), t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow),
            function () {
                Object.keys(t.elements).forEach(function (e) {
                    var n = t.elements[e],
                        s = t.attributes[e] || {},
                        a = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : r[e]).reduce(function (e, t) {
                            return e[t] = "", e
                        }, {});
                    Ra(n) && _a(n) && (Object.assign(n.style, a), Object.keys(s).forEach(function (e) {
                        n.removeAttribute(e)
                    }))
                })
            }
    }
    var zl = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: xl,
        effect: yl,
        requires: ["computeStyles"]
    };

    function Al(e, t, a) {
        var $ = Sa(e),
            r = [za, ya].indexOf($) >= 0 ? -1 : 1,
            i = "function" == typeof a ? a(Object.assign(Object.assign({}, t), {}, {
                placement: e
            })) : a,
            n = i[0],
            o = i[1];
        return n = n || 0, o = (o || 0) * r, [za, Ka].indexOf($) >= 0 ? {
            x: o,
            y: n
        } : {
            x: n,
            y: o
        }
    }

    function Bl(e) {
        var t = e.state,
            a = e.options,
            $ = e.name,
            r = a.offset,
            i = void 0 === r ? [0, 0] : r,
            n = Mg.reduce(function (e, a) {
                return e[a] = Al(a, t.rects, i), e
            }, {}),
            o = n[t.placement],
            s = o.x,
            c = o.y;
        null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += s, t.modifiersData.popperOffsets.y += c), t.modifiersData[$] = n
    }
    var Cl = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: Bl
    };

    function Dl(e) {
        if (Sa(e) === ze) return [];
        var r = ed(e);
        return [Sg(e), r, Sg(r)]
    }

    function El(e) {
        var r = e.state,
            t = e.options,
            o = e.name;
        if (!r.modifiersData[o]._skip) {
            for (var a = t.mainAxis, i = void 0 === a || a, $ = t.altAxis, n = void 0 === $ || $, p = t.fallbackPlacements, N = t.padding, l = t.boundary, s = t.rootBoundary, m = t.altBoundary, c = t.flipVariations, u = void 0 === c || c, f = t.allowedAutoPlacements, d = r.options.placement, g = Sa(d), v = p || (g === d || !u ? [ed(d)] : Dl(d)), P = [d].concat(v).reduce(function (e, t) {
                    return e.concat(Sa(t) === ze ? Ml(r, {
                        placement: t,
                        boundary: l,
                        rootBoundary: s,
                        padding: N,
                        flipVariations: u,
                        allowedAutoPlacements: f
                    }) : t)
                }, []), b = r.rects.reference, O = r.rects.popper, k = new Map, x = !0, y = P[0], B = 0; B < P.length; B++) {
                var h = P[B],
                    q = Sa(h),
                    j = pc(h) === Rb,
                    V = [ya, Ja].indexOf(q) >= 0,
                    w = V ? "width" : "height",
                    A = qc(r, {
                        placement: h,
                        boundary: l,
                        rootBoundary: s,
                        altBoundary: m,
                        padding: N
                    }),
                    E = V ? j ? Ka : za : j ? Ja : ya;
                b[w] > O[w] && (E = ed(E));
                var _ = ed(E),
                    D = [];
                if (i && D.push(A[q] <= 0), n && D.push(A[E] <= 0, A[_] <= 0), D.every(function (e) {
                        return e
                    })) {
                    y = h, x = !1;
                    break
                }
                k.set(h, D)
            }
            if (x)
                for (var F = function (e) {
                        var r = P.find(function (r) {
                            var t = k.get(r);
                            if (t) return t.slice(0, e).every(function (e) {
                                return e
                            })
                        });
                        if (r) return y = r, "break"
                    }, I = u ? 3 : 1; I > 0; I--) {
                    if ("break" === F(I)) break
                }
            r.placement !== y && (r.modifiersData[o]._skip = !0, r.placement = y, r.reset = !0)
        }
    }
    var Fl = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };

    function ed(t) {
        return t.replace(/left|right|bottom|top/g, function (t) {
            return Fl[t]
        })
    }
    var Gl = {
        start: "end",
        end: "start"
    };

    function Sg(t) {
        return t.replace(/start|end/g, function (t) {
            return Gl[t]
        })
    }

    function qc(e, o) {
        void 0 === o && (o = {});
        var t = o,
            r = t.placement,
            $ = void 0 === r ? e.placement : r,
            p = t.boundary,
            i = void 0 === p ? bl : p,
            m = t.rootBoundary,
            n = void 0 === m ? Kg : m,
            a = t.elementContext,
            l = void 0 === a ? oc : a,
            c = t.altBoundary,
            s = void 0 !== c && c,
            M = t.padding,
            k = void 0 === M ? 0 : M,
            u = Vg("number" != typeof k ? k : Xg(k, nc)),
            d = l === oc ? cl : oc,
            f = e.elements.reference,
            g = e.rects.popper,
            b = e.elements[s ? d : l],
            j = Jl(kc(b) ? b : b.contextElement || lb(e.elements.popper), i, n),
            v = jc(f),
            x = Qg({
                reference: v,
                element: g,
                strategy: "absolute",
                placement: $
            }),
            O = Ce(Object.assign(Object.assign({}, g), x)),
            q = l === oc ? O : v,
            h = {
                top: j.top - q.top + u.top,
                bottom: q.bottom - j.bottom + u.bottom,
                left: j.left - q.left + u.left,
                right: q.right - j.right + u.right
            },
            y = e.modifiersData.offset;
        if (l === oc && y) {
            var C = y[$];
            Object.keys(h).forEach(function (e) {
                var o = [Ka, Ja].indexOf(e) >= 0 ? 1 : -1,
                    t = [ya, Ja].indexOf(e) >= 0 ? "y" : "x";
                h[e] += C[t] * o
            })
        }
        return h
    }

    function Hl(t) {
        var e = jc(t);
        return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e
    }

    function Tg(t, e) {
        return e === Kg ? Ce(Kl(t)) : Ra(e) ? Hl(e) : Ce(Ll(lb(t)))
    }

    function Il(t) {
        var e = lc(t),
            r = ["absolute", "fixed"].indexOf(yb(t).position) >= 0 && Ra(t) ? mc(t) : t;
        return kc(r) ? e.filter(function (t) {
            return kc(t) && Ug(t, r)
        }) : []
    }

    function Jl(t, e, r) {
        var $ = "clippingParents" === e ? Il(t) : [].concat(e),
            i = [].concat($, [r]),
            n = i[0],
            o = i.reduce(function (e, r) {
                var $ = Tg(t, r);
                return e.top = Math.max($.top, e.top), e.right = Math.min($.right, e.right), e.bottom = Math.min($.bottom, e.bottom), e.left = Math.max($.left, e.left), e
            }, Tg(t, n));
        return o.width = o.right - o.left, o.height = o.bottom - o.top, o.x = o.left, o.y = o.top, o
    }

    function Kl(e) {
        var t = Qa(e),
            r = lb(e),
            i = t.visualViewport,
            l = r.clientWidth,
            $ = r.clientHeight,
            o = 0,
            w = 0;
        return i && (l = i.width, $ = i.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (o = i.offsetLeft, w = i.offsetTop)), {
            width: l,
            height: $,
            x: o + ve(e),
            y: w
        }
    }

    function Ll(e) {
        var t = lb(e),
            r = ue(e),
            l = e.ownerDocument.body,
            i = Math.max(t.scrollWidth, t.clientWidth, l ? l.scrollWidth : 0, l ? l.clientWidth : 0),
            o = Math.max(t.scrollHeight, t.clientHeight, l ? l.scrollHeight : 0, l ? l.clientHeight : 0),
            $ = -r.scrollLeft + ve(e),
            c = -r.scrollTop;
        return "rtl" === yb(l || t).direction && ($ += Math.max(t.clientWidth, l ? l.clientWidth : 0) - i), {
            width: i,
            height: o,
            x: $,
            y: c
        }
    }

    function Ug(e, o) {
        var t = Boolean(o.getRootNode && o.getRootNode().host);
        if (e.contains(o)) return !0;
        if (t) {
            var a = o;
            do {
                if (a && e.isSameNode(a)) return !0;
                a = a.parentNode || a.host
            } while (a)
        }
        return !1
    }

    function Ce(t) {
        return Object.assign(Object.assign({}, t), {}, {
            left: t.x,
            top: t.y,
            right: t.x + t.width,
            bottom: t.y + t.height
        })
    }

    function Vg(e) {
        return Object.assign(Object.assign({}, Wg()), e)
    }

    function Wg() {
        return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    }

    function Xg(e, t) {
        return t.reduce(function (t, r) {
            return t[r] = e, t
        }, {})
    }

    function Ml(e, t) {
        void 0 === t && (t = {});
        var r = t,
            i = r.placement,
            $ = r.boundary,
            a = r.rootBoundary,
            n = r.padding,
            o = r.flipVariations,
            l = r.allowedAutoPlacements,
            u = void 0 === l ? Mg : l,
            c = pc(i),
            p = (c ? o ? Lg : Lg.filter(function (e) {
                return pc(e) === c
            }) : nc).filter(function (e) {
                return u.indexOf(e) >= 0
            }).reduce(function (t, r) {
                return t[r] = qc(e, {
                    placement: r,
                    boundary: $,
                    rootBoundary: a,
                    padding: n
                })[Sa(r)], t
            }, {});
        return Object.keys(p).sort(function (e, t) {
            return p[e] - p[t]
        })
    }
    var Nl = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: El,
        requiresIfExists: ["offset"],
        data: {
            _skip: !1
        }
    };

    function Ol(e) {
        var t = e.state,
            r = e.options,
            i = e.name,
            $ = r.mainAxis,
            a = void 0 === $ || $,
            o = r.altAxis,
            s = void 0 !== o && o,
            p = r.boundary,
            n = r.rootBoundary,
            w = r.altBoundary,
            m = r.padding,
            l = r.tether,
            f = void 0 === l || l,
            R = r.tetherOffset,
            k = void 0 === R ? 0 : R,
            X = qc(t, {
                boundary: p,
                rootBoundary: n,
                padding: m,
                altBoundary: w
            }),
            c = Sa(t.placement),
            d = pc(t.placement),
            u = !d,
            g = Be(c),
            h = Pl(g),
            v = t.modifiersData.popperOffsets,
            x = t.rects.reference,
            j = t.rects.popper,
            y = "function" == typeof k ? k(Object.assign(Object.assign({}, t.rects), {}, {
                placement: t.placement
            })) : k,
            O = {
                x: 0,
                y: 0
            };
        if (v) {
            if (a) {
                var q = "y" === g ? ya : za,
                    b = "y" === g ? Ja : Ka,
                    A = "y" === g ? "height" : "width",
                    B = v[g],
                    D = v[g] + X[q],
                    P = v[g] - X[b],
                    F = f ? -j[A] / 2 : 0,
                    M = d === Rb ? x[A] : j[A],
                    L = d === Rb ? -j[A] : -x[A],
                    S = t.elements.arrow,
                    V = f && S ? xe(S) : {
                        width: 0,
                        height: 0
                    },
                    E = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Wg(),
                    I = E[q],
                    T = E[b],
                    z = fd(0, x[A], V[A]),
                    C = u ? x[A] / 2 - F - z - I - y : M - z - I - y,
                    G = u ? -x[A] / 2 + F + z + T + y : L + z + T + y,
                    H = t.elements.arrow && mc(t.elements.arrow),
                    J = H ? "y" === g ? H.clientTop || 0 : H.clientLeft || 0 : 0,
                    K = t.modifiersData.offset ? t.modifiersData.offset[t.placement][g] : 0,
                    N = v[g] + C - K - J,
                    Q = v[g] + G - K,
                    U = fd(f ? Math.min(D, N) : D, B, f ? Math.max(P, Q) : P);
                v[g] = U, O[g] = U - B
            }
            if (s) {
                var W = "x" === g ? ya : za,
                    Y = "x" === g ? Ja : Ka,
                    Z = v[h],
                    _ = Z + X[W],
                    ee = Z - X[Y],
                    te = fd(_, Z, ee);
                v[h] = te, O[h] = te - Z
            }
            t.modifiersData[i] = O
        }
    }

    function Pl($) {
        return "x" === $ ? "y" : "x"
    }

    function fd(t, $, u) {
        return Math.max(t, Math.min($, u))
    }
    var Ql = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: Ol,
        requiresIfExists: ["offset"]
    };

    function Rl(e) {
        var r, t = e.state,
            $ = e.name,
            i = t.elements.arrow,
            a = t.modifiersData.popperOffsets,
            l = Sa(t.placement),
            s = Be(l),
            p = [za, Ka].indexOf(l) >= 0 ? "height" : "width";
        if (i && a) {
            var o = t.modifiersData[$ + "#persistent"].padding,
                n = xe(i),
                m = "y" === s ? ya : za,
                c = "y" === s ? Ja : Ka,
                f = t.rects.reference[p] + t.rects.reference[s] - a[s] - t.rects.popper[p],
                D = a[s] - t.rects.reference[s],
                z = mc(i),
                J = z ? "y" === s ? z.clientHeight || 0 : z.clientWidth || 0 : 0,
                u = f / 2 - D / 2,
                d = o[m],
                g = J - n[p] - o[c],
                q = J / 2 - n[p] / 2 + u,
                v = fd(d, q, g),
                h = s;
            t.modifiersData[$] = ((r = {})[h] = v, r.centerOffset = v - q, r)
        }
    }

    function Sl(e) {
        var r = e.state,
            t = e.options,
            $ = e.name,
            i = t.element,
            a = void 0 === i ? "[data-popper-arrow]" : i,
            l = t.padding,
            s = void 0 === l ? 0 : l;
        null != a && ("string" != typeof a || (a = r.elements.popper.querySelector(a))) && Ug(r.elements.popper, a) && (r.elements.arrow = a, r.modifiersData[$ + "#persistent"] = {
            padding: Vg("number" != typeof s ? s : Xg(s, nc))
        })
    }
    var Tl = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: Rl,
        effect: Sl,
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"]
    };

    function Yg(e, t, r) {
        return void 0 === r && (r = {
            x: 0,
            y: 0
        }), {
            top: e.top - t.height - r.y,
            right: e.right - t.width + r.x,
            bottom: e.bottom - t.height + r.y,
            left: e.left - t.width - r.x
        }
    }

    function Zg(e) {
        return [ya, Ka, Ja, za].some(function (t) {
            return e[t] >= 0
        })
    }

    function Ul(e) {
        var t = e.state,
            r = e.name,
            a = t.rects.reference,
            $ = t.rects.popper,
            i = t.modifiersData.preventOverflow,
            p = qc(t, {
                elementContext: "reference"
            }),
            o = qc(t, {
                altBoundary: !0
            }),
            s = Yg(p, a),
            h = Yg(o, $, i),
            n = Zg(s),
            f = Zg(h);
        t.modifiersData[r] = {
            referenceClippingOffsets: s,
            popperEscapeOffsets: h,
            isReferenceHidden: n,
            hasPopperEscaped: f
        }, t.attributes.popper = Object.assign(Object.assign({}, t.attributes.popper), {}, {
            "data-popper-reference-hidden": n,
            "data-popper-escaped": f
        })
    }
    var Vl = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: Ul
    };
    var Wl = [ql, sl, wl, zl, Cl, Nl, Ql, Tl, Vl],
        $g = Pg({
            defaultModifiers: Wl
        });
    var _g, ah, Xl, Yl, Zl = false;

    function $l(r) {
        if (null == r) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(r)
    }

    function _l() {
        try {
            if (!Object.assign) return !1;
            var r = new String("abc");
            if (r[5] = "de", "5" === Object.getOwnPropertyNames(r)[0]) return !1;
            for (var e = {}, t = 0; t < 10; t++) e["_" + String.fromCharCode(t)] = t;
            if ("0123456789" !== Object.getOwnPropertyNames(e).map(function (r) {
                    return e[r]
                }).join("")) return !1;
            var n = {};
            return "abcdefghijklmnopqrst".split("").forEach(function (r) {
                n[r] = r
            }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
        } catch (o) {
            return !1
        }
    }

    function bh() {
        if (Zl) return;
        Zl = true;
        _g = {};
        ah = Object.getOwnPropertySymbols;
        Xl = Object.prototype.hasOwnProperty;
        Yl = Object.prototype.propertyIsEnumerable;
        _g = _l() ? Object.assign : function (r, e) {
            for (var t, n, o = $l(r), a = 1; a < arguments.length; a++) {
                for (var $ in t = Object(arguments[a])) Xl.call(t, $) && (o[$] = t[$]);
                if (ah) {
                    n = ah(t);
                    for (var s = 0; s < n.length; s++) Yl.call(t, n[s]) && (o[n[s]] = t[n[s]])
                }
            }
            return o
        }
    }
    var da, De, La, rc, am, bm, cm, dm, em, fm, gm, hm, im, jm, ch, dh, eh, Ee, Fe, fh, gh, hh, gd, ih, km, lm, mm, nm, om, pm, qm, rm, sm, tm, um, vm, wm, xm, ym, zm, Am, Bm, Cm, Dm, Em, Fm, Gm, Hm, Im, Jm, Km, Lm, Mm, Nm = false;

    function sc($) {
        for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + $, e = 1; e < arguments.length; e++) r += "&args[]=" + encodeURIComponent(arguments[e]);
        return "Minified React error #" + $ + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function Sb($, r, e) {
        this.props = $, this.context = r, this.refs = eh, this.updater = e || dh
    }

    function jh() {}

    function Ge($, r, e) {
        this.props = $, this.context = r, this.refs = eh, this.updater = e || dh
    }

    function kh($, r, e) {
        var a, t = {},
            i = null,
            o = null;
        if (null != r)
            for (a in void 0 !== r.ref && (o = r.ref), void 0 !== r.key && (i = "" + r.key), r) fh.call(r, a) && !gh.hasOwnProperty(a) && (t[a] = r[a]);
        var n = arguments.length - 2;
        if (1 === n) t.children = e;
        else if (1 < n) {
            for (var u = Array(n), w = 0; w < n; w++) u[w] = arguments[w + 2];
            t.children = u
        }
        if ($ && $.defaultProps)
            for (a in n = $.defaultProps) void 0 === t[a] && (t[a] = n[a]);
        return {
            $$typeof: rc,
            type: $,
            key: i,
            ref: o,
            props: t,
            _owner: Fe.current
        }
    }

    function Om($, r) {
        return {
            $$typeof: rc,
            type: $.type,
            key: r,
            ref: $.ref,
            props: $.props,
            _owner: $._owner
        }
    }

    function He($) {
        return "object" == typeof $ && null !== $ && $.$$typeof === rc
    }

    function Pm($) {
        var r = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + ("" + $).replace(/[=:]/g, function ($) {
            return r[$]
        })
    }

    function lh($, r, e, a) {
        if (gd.length) {
            var t = gd.pop();
            return t.result = $, t.keyPrefix = r, t.func = e, t.context = a, t.count = 0, t
        }
        return {
            result: $,
            keyPrefix: r,
            func: e,
            context: a,
            count: 0
        }
    }

    function mh($) {
        $.result = null, $.keyPrefix = null, $.func = null, $.context = null, $.count = 0, 10 > gd.length && gd.push($)
    }

    function Ie($, r, e, a) {
        var t = typeof $;
        "undefined" !== t && "boolean" !== t || ($ = null);
        var i = !1;
        if (null === $) i = !0;
        else switch (t) {
            case "string":
            case "number":
                i = !0;
                break;
            case "object":
                switch ($.$$typeof) {
                    case rc:
                    case am:
                        i = !0;
                }
        }
        if (i) return e(a, $, "" === r ? "." + Ke($, 0) : r), 1;
        if (i = 0, r = "" === r ? "." : r + ":", Array.isArray($))
            for (var o = 0; o < $.length; o++) {
                var n = r + Ke(t = $[o], o);
                i += Ie(t, n, e, a)
            } else if (null === $ || "object" != typeof $ ? n = null : n = "function" == typeof (n = ch && $[ch] || $["@@iterator"]) ? n : null, "function" == typeof n)
                for ($ = n.call($), o = 0; !(t = $.next()).done;) i += Ie(t = t.value, n = r + Ke(t, o++), e, a);
            else if ("object" === t) throw e = "" + $, Error(sc(31, "[object Object]" === e ? "object with keys {" + Object.keys($).join(", ") + "}" : e, ""));
        return i
    }

    function Je($, r, e) {
        return null == $ ? 0 : Ie($, "", r, e)
    }

    function Ke($, r) {
        return "object" == typeof $ && null !== $ && null != $.key ? Pm($.key) : r.toString(36)
    }

    function Qm($, r) {
        $.func.call($.context, r, $.count++)
    }

    function Rm($, r, e) {
        var a = $.result,
            t = $.keyPrefix;
        $ = $.func.call($.context, r, $.count++), Array.isArray($) ? Le($, a, e, function ($) {
            return $
        }) : null != $ && (He($) && ($ = Om($, t + (!$.key || r && r.key === $.key ? "" : ("" + $.key).replace(hh, "$&/") + "/") + e)), a.push($))
    }

    function Le($, r, e, a, t) {
        var i = "";
        null != e && (i = ("" + e).replace(hh, "$&/") + "/"), Je($, Rm, r = lh(r, i, a, t)), mh(r)
    }

    function ab() {
        var $ = ih.current;
        if (null === $) throw Error(sc(321));
        return $
    }

    function Sm() {
        if (Nm) return;
        Nm = true;
        da = {};
        De = (bh(), _g);
        La = "function" == typeof Symbol && Symbol.for;
        rc = La ? Symbol.for("react.element") : 60103;
        am = La ? Symbol.for("react.portal") : 60106;
        bm = La ? Symbol.for("react.fragment") : 60107;
        cm = La ? Symbol.for("react.strict_mode") : 60108;
        dm = La ? Symbol.for("react.profiler") : 60114;
        em = La ? Symbol.for("react.provider") : 60109;
        fm = La ? Symbol.for("react.context") : 60110;
        gm = La ? Symbol.for("react.forward_ref") : 60112;
        hm = La ? Symbol.for("react.suspense") : 60113;
        im = La ? Symbol.for("react.memo") : 60115;
        jm = La ? Symbol.for("react.lazy") : 60116;
        ch = "function" == typeof Symbol && Symbol.iterator;
        dh = {
            isMounted: function () {
                return !1
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {}
        };
        eh = {};
        Sb.prototype.isReactComponent = {}, Sb.prototype.setState = function ($, r) {
            if ("object" != typeof $ && "function" != typeof $ && null != $) throw Error(sc(85));
            this.updater.enqueueSetState(this, $, r, "setState")
        }, Sb.prototype.forceUpdate = function ($) {
            this.updater.enqueueForceUpdate(this, $, "forceUpdate")
        }, jh.prototype = Sb.prototype;
        Ee = Ge.prototype = new jh;
        Ee.constructor = Ge, De(Ee, Sb.prototype), Ee.isPureReactComponent = !0;
        Fe = {
            current: null
        };
        fh = Object.prototype.hasOwnProperty;
        gh = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };
        hh = /\/+/g;
        gd = [];
        ih = {
            current: null
        };
        km = {
            ReactCurrentDispatcher: ih,
            ReactCurrentBatchConfig: {
                suspense: null
            },
            ReactCurrentOwner: Fe,
            IsSomeRendererActing: {
                current: !1
            },
            assign: De
        };
        lm = {
            map: function ($, r, e) {
                if (null == $) return $;
                var a = [];
                return Le($, a, null, r, e), a
            },
            forEach: function ($, r, e) {
                if (null == $) return $;
                Je($, Qm, r = lh(null, null, r, e)), mh(r)
            },
            count: function ($) {
                return Je($, function () {
                    return null
                }, null)
            },
            toArray: function ($) {
                var r = [];
                return Le($, r, null, function ($) {
                    return $
                }), r
            },
            only: function ($) {
                if (!He($)) throw Error(sc(143));
                return $
            }
        };
        da.Children = lm;
        mm = Sb;
        da.Component = mm;
        nm = bm;
        da.Fragment = nm;
        om = dm;
        da.Profiler = om;
        pm = Ge;
        da.PureComponent = pm;
        qm = cm;
        da.StrictMode = qm;
        rm = hm;
        da.Suspense = rm;
        sm = km;
        da.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sm;
        tm = function ($, r, e) {
            if (null == $) throw Error(sc(267, $));
            var a = De({}, $.props),
                t = $.key,
                i = $.ref,
                o = $._owner;
            if (null != r) {
                if (void 0 !== r.ref && (i = r.ref, o = Fe.current), void 0 !== r.key && (t = "" + r.key), $.type && $.type.defaultProps) var n = $.type.defaultProps;
                for (u in r) fh.call(r, u) && !gh.hasOwnProperty(u) && (a[u] = void 0 === r[u] && void 0 !== n ? n[u] : r[u])
            }
            var u = arguments.length - 2;
            if (1 === u) a.children = e;
            else if (1 < u) {
                n = Array(u);
                for (var w = 0; w < u; w++) n[w] = arguments[w + 2];
                a.children = n
            }
            return {
                $$typeof: rc,
                type: $.type,
                key: t,
                ref: i,
                props: a,
                _owner: o
            }
        };
        da.cloneElement = tm;
        um = function ($, r) {
            return void 0 === r && (r = null), ($ = {
                $$typeof: fm,
                _calculateChangedBits: r,
                _currentValue: $,
                _currentValue2: $,
                _threadCount: 0,
                Provider: null,
                Consumer: null
            }).Provider = {
                $$typeof: em,
                _context: $
            }, $.Consumer = $
        };
        da.createContext = um;
        vm = kh;
        da.createElement = vm;
        wm = function ($) {
            var r = kh.bind(null, $);
            return r.type = $, r
        };
        da.createFactory = wm;
        xm = function () {
            return {
                current: null
            }
        };
        da.createRef = xm;
        ym = function ($) {
            return {
                $$typeof: gm,
                render: $
            }
        };
        da.forwardRef = ym;
        zm = He;
        da.isValidElement = zm;
        Am = function ($) {
            return {
                $$typeof: jm,
                _ctor: $,
                _status: -1,
                _result: null
            }
        };
        da.lazy = Am;
        Bm = function ($, r) {
            return {
                $$typeof: im,
                type: $,
                compare: void 0 === r ? null : r
            }
        };
        da.memo = Bm;
        Cm = function ($, r) {
            return ab().useCallback($, r)
        };
        da.useCallback = Cm;
        Dm = function ($, r) {
            return ab().useContext($, r)
        };
        da.useContext = Dm;
        Em = function () {};
        da.useDebugValue = Em;
        Fm = function ($, r) {
            return ab().useEffect($, r)
        };
        da.useEffect = Fm;
        Gm = function ($, r, e) {
            return ab().useImperativeHandle($, r, e)
        };
        da.useImperativeHandle = Gm;
        Hm = function ($, r) {
            return ab().useLayoutEffect($, r)
        };
        da.useLayoutEffect = Hm;
        Im = function ($, r) {
            return ab().useMemo($, r)
        };
        da.useMemo = Im;
        Jm = function ($, r, e) {
            return ab().useReducer($, r, e)
        };
        da.useReducer = Jm;
        Km = function ($) {
            return ab().useRef($)
        };
        da.useRef = Km;
        Lm = function ($) {
            return ab().useState($)
        };
        da.useState = Lm;
        Mm = "16.13.1";
        da.version = Mm
    }
    var bb, Tm = false;

    function cb() {
        if (Tm) return;
        Tm = true;
        bb = {};
        bb = (Sm(), da)
    }
    var zb = {},
        Um = zb && zb.__importDefault || function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(zb, "__esModule", {
        value: !0
    });
    var Me = void 0;
    zb.IndicateLevel = Me;
    const Vm = Um((cb(), bb)),
        Wm = "https://cdn.jsdelivr.net/gh/YukiCat-Dev/FacePack/static/Ripple-1.3s-237px.svg",
        Xm = "https://cdn.jsdelivr.net/gh/YukiCat-Dev/FacePack/static/error.svg";
    var b;
    ! function (e) {
        e[e.PRELOAD = 0] = "PRELOAD", e[e.ERROR = 1] = "ERROR"
    }(b = Me || (Me = {}, zb.IndicateLevel = Me));
    const Ym = [Wm, Xm],
        Zm = e => Vm.default.createElement("img", {
            src: Ym[e.level],
            alt: e.description,
            style: e.style
        });
    var $m = Zm;
    zb.default = $m;
    var db = {},
        c = arguments[0];

    function nh(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            r && (o = o.filter(function (r) {
                return Object.getOwnPropertyDescriptor(e, r).enumerable
            })), t.push.apply(t, o)
        }
        return t
    }

    function Ne(e) {
        for (var r = 1; r < arguments.length; r++) {
            var t = null != arguments[r] ? arguments[r] : {};
            r % 2 ? nh(Object(t), !0).forEach(function (r) {
                _m(e, r, t[r])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : nh(Object(t)).forEach(function (r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
            })
        }
        return e
    }

    function _m(e, r, t) {
        return r in e ? Object.defineProperty(e, r, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[r] = t, e
    }
    var an = db && db.__createBinding || (Object.create ? function (e, r, t, o) {
            void 0 === o && (o = t), Object.defineProperty(e, o, {
                enumerable: !0,
                get: function () {
                    return r[t]
                }
            })
        } : function (e, r, t, o) {
            void 0 === o && (o = t), e[o] = r[t]
        }),
        bn = db && db.__setModuleDefault || (Object.create ? function (e, r) {
            Object.defineProperty(e, "default", {
                enumerable: !0,
                value: r
            })
        } : function (e, r) {
            e.default = r
        }),
        oh = db && db.__importStar || function (e) {
            if (e && e.__esModule) return e;
            var r = {};
            if (null != e)
                for (var t in e) "default" !== t && Object.hasOwnProperty.call(e, t) && an(r, e, t);
            return bn(r, e), r
        };
    Object.defineProperty(db, "__esModule", {
        value: !0
    });
    const Ab = oh((cb(), bb)),
        Oe = oh(zb);

    function cn(e) {
        const [r, t] = Ab.useState(!1), [o, a] = Ab.useState({
            level: Oe.IndicateLevel.PRELOAD
        }), $ = Ab.useContext(Gg);
        return Ab.default.createElement(Ab.default.Fragment, null, o && Ab.default.createElement(Oe.default, Object.assign({}, o, {
            style: Ne(Ne({}, e.style), {}, {
                transition: "opacity 2s ease"
            }),
            className: e.className
        })), Ab.default.createElement("img", {
            src: e.src,
            onClick: r => e.onClick(r, e.face_pos),
            onPointerEnter: () => $.showPeak(e.src, e.alt),
            onPointerOut: () => $.hidePeak(),
            alt: e.alt,
            style: Ne({}, e.style),
            className: e.className,
            onLoad: () => {
                a(null), t(!0)
            },
            hidden: !r,
            onError: () => {
                t(!1), a({
                    level: Oe.IndicateLevel.ERROR
                })
            }
        }))
    }
    var dn = cn;
    db.default = dn;
    var tc = {},
        ph = tc && tc.__importDefault || function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(tc, "__esModule", {
        value: !0
    });
    const Bb = ph((cb(), bb)),
        en = ph(db);
    class fn extends Bb.default.Component {
        handleImageClick(e, a) {
            this.props.onImageSelected(a)
        }
        render() {
            const e = this.props.facePackage.id,
                a = this.props.facePackage.faces.map((a, t) => Bb.default.createElement("td", {
                    key: e + "_" + t,
                    style: {
                        textAlign: "center",
                        border: "1pt solid"
                    }
                }, Bb.default.createElement(en.default, {
                    src: a.url,
                    alt: a.id,
                    face_pos: t,
                    style: {
                        width: "40px",
                        height: "40px"
                    },
                    onClick: this.handleImageClick.bind(this)
                }))),
                t = this.props.colCount,
                r = Math.ceil(a.length / t),
                $ = [];
            for (let l = 0; l < r; l++) $.push(Bb.default.createElement("tr", {
                key: l
            }, a.slice(l * t, l * t + t)));
            return Bb.default.createElement("div", {
                style: {
                    maxHeight: "20vh",
                    overflow: "auto"
                }
            }, Bb.default.createElement("table", null, Bb.default.createElement("tbody", null, $)))
        }
    }
    var gn = fn;
    tc.default = gn;
    var uc = {};

    function qh(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            r && (o = o.filter(function (r) {
                return Object.getOwnPropertyDescriptor(e, r).enumerable
            })), t.push.apply(t, o)
        }
        return t
    }

    function hn(e) {
        for (var r = 1; r < arguments.length; r++) {
            var t = null != arguments[r] ? arguments[r] : {};
            r % 2 ? qh(Object(t), !0).forEach(function (r) {
                jn(e, r, t[r])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : qh(Object(t)).forEach(function (r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
            })
        }
        return e
    }

    function jn(e, r, t) {
        return r in e ? Object.defineProperty(e, r, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[r] = t, e
    }
    var kn = uc && uc.__importDefault || function (e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
    Object.defineProperty(uc, "__esModule", {
        value: !0
    });
    const ln = kn((cb(), bb));

    function mn(e) {
        return ln.default.createElement("div", {
            style: hn({
                borderRight: "1pt solid",
                backgroundColor: e.selected ? "#1559ed" : void 0,
                color: e.selected ? "white" : void 0
            }, e.style),
            className: e.className,
            onClick: () => {
                e.onClick(e.pos)
            }
        }, e.name)
    }
    var nn = mn;
    uc.default = nn;
    var vc = {},
        rh = vc && vc.__importDefault || function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(vc, "__esModule", {
        value: !0
    });
    const Pe = rh((cb(), bb)),
        on = rh(uc),
        pn = Pe.default.memo(e => Pe.default.createElement("div", null, e.facePackages.map((a, $) => Pe.default.createElement(on.default, {
            key: a.id,
            pos: $,
            name: a.name,
            selected: $ === e.selectedPos,
            onClick: a => e.onSelected(a)
        }))));
    var qn = pn;
    vc.default = qn;
    var eb = {};

    function sh(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            r && (a = a.filter(function (r) {
                return Object.getOwnPropertyDescriptor(e, r).enumerable
            })), t.push.apply(t, a)
        }
        return t
    }

    function th(e) {
        for (var r = 1; r < arguments.length; r++) {
            var t = null != arguments[r] ? arguments[r] : {};
            r % 2 ? sh(Object(t), !0).forEach(function (r) {
                rn(e, r, t[r])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : sh(Object(t)).forEach(function (r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
            })
        }
        return e
    }

    function rn(e, r, t) {
        return r in e ? Object.defineProperty(e, r, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[r] = t, e
    }
    var sn = eb && eb.__createBinding || (Object.create ? function (e, r, t, a) {
            void 0 === a && (a = t), Object.defineProperty(e, a, {
                enumerable: !0,
                get: function () {
                    return r[t]
                }
            })
        } : function (e, r, t, a) {
            void 0 === a && (a = t), e[a] = r[t]
        }),
        tn = eb && eb.__setModuleDefault || (Object.create ? function (e, r) {
            Object.defineProperty(e, "default", {
                enumerable: !0,
                value: r
            })
        } : function (e, r) {
            e.default = r
        }),
        un = eb && eb.__importStar || function (e) {
            if (e && e.__esModule) return e;
            var r = {};
            if (null != e)
                for (var t in e) "default" !== t && Object.hasOwnProperty.call(e, t) && sn(r, e, t);
            return tn(r, e), r
        };
    Object.defineProperty(eb, "__esModule", {
        value: !0
    });
    const wc = un((cb(), bb));
    const vn = wc.memo(e => wc.createElement("figure", {
        className: "fp-border-shadow " + (e.className ? e.className : "")
    }, wc.createElement("img", {
        src: e.imgUrl,
        style: th(th({}, e.style), {}, {
            height: "200px"
        })
    }), wc.createElement("hr", {
        style: {
            marginTop: "0",
            marginBottom: "0"
        }
    }), wc.createElement("figcaption", {
        style: {
            textAlign: "center",
            marginBottom: "3px",
            backgroundColor: "#FFFFFF"
        }
    }, e.imgCaption)));
    var wn = vn;
    eb.default = wn;
    var Ta, uh, hd, Qe, vh, wh, xn, ea, Ma, mb, yn, Aa, nb, xh, Re, yh, zn, An, Bn, Cn, Dn, En, Fn, Gn, Hn, In, Jn, Kn, Ln, Mn, Nn, On, Pn, Qn, Rn = false;

    function Se($, v) {
        var r = $.length;
        $.push(v);
        $: for (;;) {
            var a = r - 1 >>> 1,
                e = $[a];
            if (!(void 0 !== e && 0 < jd(e, v))) break $;
            $[a] = v, $[r] = e, r = a
        }
    }

    function Ba($) {
        return void 0 === ($ = $[0]) ? null : $
    }

    function id($) {
        var v = $[0];
        if (void 0 !== v) {
            var r = $.pop();
            if (r !== v) {
                $[0] = r;
                $: for (var a = 0, e = $.length; a < e;) {
                    var t = 2 * (a + 1) - 1,
                        b = $[t],
                        n = t + 1,
                        P = $[n];
                    if (void 0 !== b && 0 > jd(b, r)) void 0 !== P && 0 > jd(P, b) ? ($[a] = P, $[n] = r, a = n) : ($[a] = b, $[t] = r, a = t);
                    else {
                        if (!(void 0 !== P && 0 > jd(P, r))) break $;
                        $[a] = P, $[n] = r, a = n
                    }
                }
            }
            return v
        }
        return null
    }

    function jd($, v) {
        var r = $.sortIndex - v.sortIndex;
        return 0 !== r ? r : $.id - v.id
    }

    function kd($) {
        for (var v = Ba(mb); null !== v;) {
            if (null === v.callback) id(mb);
            else {
                if (!(v.startTime <= $)) break;
                id(mb), v.sortIndex = v.expirationTime, Se(Ma, v)
            }
            v = Ba(mb)
        }
    }

    function Te($) {
        if (yh = !1, kd($), !Re)
            if (null !== Ba(Ma)) Re = !0, hd(Ue);
            else {
                var v = Ba(mb);
                null !== v && Qe(Te, v.startTime - $)
            }
    }

    function Ue($, v) {
        Re = !1, yh && (yh = !1, vh()), xh = !0;
        var r = nb;
        try {
            for (kd(v), Aa = Ba(Ma); null !== Aa && (!(Aa.expirationTime > v) || $ && !wh());) {
                var a = Aa.callback;
                if (null !== a) {
                    Aa.callback = null, nb = Aa.priorityLevel;
                    var e = a(Aa.expirationTime <= v);
                    v = Ta(), "function" == typeof e ? Aa.callback = e : Aa === Ba(Ma) && id(Ma), kd(v)
                } else id(Ma);
                Aa = Ba(Ma)
            }
            if (null !== Aa) var t = !0;
            else {
                var b = Ba(mb);
                null !== b && Qe(Te, b.startTime - v), t = !1
            }
            return t
        } finally {
            Aa = null, nb = r, xh = !1
        }
    }

    function zh($) {
        switch ($) {
            case 1:
                return -1;
            case 2:
                return 250;
            case 5:
                return 1073741823;
            case 4:
                return 1e4;
            default:
                return 5e3;
        }
    }

    function Sn() {
        if (Rn) return;
        Rn = true;
        ea = {};
        if ("undefined" == typeof window || "function" != typeof MessageChannel) {
            var $IvPb$var$p = null,
                $IvPb$var$q = null,
                $IvPb$var$t = function () {
                    if (null !== $IvPb$var$p) try {
                        var $ = Ta();
                        $IvPb$var$p(!0, $), $IvPb$var$p = null
                    } catch (v) {
                        throw setTimeout($IvPb$var$t, 0), v
                    }
                },
                $IvPb$var$u = Date.now();
            Ta = function () {
                return Date.now() - $IvPb$var$u
            }, ea.unstable_now = Ta, hd = function ($) {
                null !== $IvPb$var$p ? setTimeout(hd, 0, $) : ($IvPb$var$p = $, setTimeout($IvPb$var$t, 0))
            }, Qe = function ($, v) {
                $IvPb$var$q = setTimeout($, v)
            }, vh = function () {
                clearTimeout($IvPb$var$q)
            }, wh = function () {
                return !1
            }, uh = function () {}, xn = ea.unstable_forceFrameRate = uh
        } else {
            var $IvPb$var$w = window.performance,
                $IvPb$var$x = window.Date,
                $IvPb$var$y = window.setTimeout,
                $IvPb$var$z = window.clearTimeout;
            if ("undefined" != typeof console) {
                var $IvPb$var$A = window.cancelAnimationFrame;
                "function" != typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), "function" != typeof $IvPb$var$A && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")
            }
            if ("object" == typeof $IvPb$var$w && "function" == typeof $IvPb$var$w.now) Ta = function () {
                return $IvPb$var$w.now()
            }, ea.unstable_now = Ta;
            else {
                var $IvPb$var$B = $IvPb$var$x.now();
                Ta = function () {
                    return $IvPb$var$x.now() - $IvPb$var$B
                }, ea.unstable_now = Ta
            }
            var $IvPb$var$C = !1,
                $IvPb$var$D = null,
                $IvPb$var$E = -1,
                $IvPb$var$F = 5,
                $IvPb$var$G = 0;
            wh = function () {
                return Ta() >= $IvPb$var$G
            }, xn = function () {}, uh = function ($) {
                0 > $ || 125 < $ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : $IvPb$var$F = 0 < $ ? Math.floor(1e3 / $) : 5
            }, ea.unstable_forceFrameRate = uh;
            var $IvPb$var$H = new MessageChannel,
                $IvPb$var$I = $IvPb$var$H.port2;
            $IvPb$var$H.port1.onmessage = function () {
                if (null !== $IvPb$var$D) {
                    var $ = Ta();
                    $IvPb$var$G = $ + $IvPb$var$F;
                    try {
                        $IvPb$var$D(!0, $) ? $IvPb$var$I.postMessage(null) : ($IvPb$var$C = !1, $IvPb$var$D = null)
                    } catch (v) {
                        throw $IvPb$var$I.postMessage(null), v
                    }
                } else $IvPb$var$C = !1
            }, hd = function ($) {
                $IvPb$var$D = $, $IvPb$var$C || ($IvPb$var$C = !0, $IvPb$var$I.postMessage(null))
            }, Qe = function ($, v) {
                $IvPb$var$E = $IvPb$var$y(function () {
                    $(Ta())
                }, v)
            }, vh = function () {
                $IvPb$var$z($IvPb$var$E), $IvPb$var$E = -1
            }
        }
        Ma = [];
        mb = [];
        yn = 1;
        Aa = null;
        nb = 3;
        xh = !1;
        Re = !1;
        yh = !1;
        zn = xn;
        An = 5;
        ea.unstable_IdlePriority = An;
        Bn = 1;
        ea.unstable_ImmediatePriority = Bn;
        Cn = 4;
        ea.unstable_LowPriority = Cn;
        Dn = 3;
        ea.unstable_NormalPriority = Dn;
        En = null;
        ea.unstable_Profiling = En;
        Fn = 2;
        ea.unstable_UserBlockingPriority = Fn;
        Gn = function ($) {
            $.callback = null
        };
        ea.unstable_cancelCallback = Gn;
        Hn = function () {
            Re || xh || (Re = !0, hd(Ue))
        };
        ea.unstable_continueExecution = Hn;
        In = function () {
            return nb
        };
        ea.unstable_getCurrentPriorityLevel = In;
        Jn = function () {
            return Ba(Ma)
        };
        ea.unstable_getFirstCallbackNode = Jn;
        Kn = function ($) {
            switch (nb) {
                case 1:
                case 2:
                case 3:
                    var v = 3;
                    break;
                default:
                    v = nb;
            }
            var r = nb;
            nb = v;
            try {
                return $()
            } finally {
                nb = r
            }
        };
        ea.unstable_next = Kn;
        Ln = function () {};
        ea.unstable_pauseExecution = Ln;
        Mn = zn;
        ea.unstable_requestPaint = Mn;
        Nn = function ($, v) {
            switch ($) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    $ = 3;
            }
            var r = nb;
            nb = $;
            try {
                return v()
            } finally {
                nb = r
            }
        };
        ea.unstable_runWithPriority = Nn;
        On = function ($, v, r) {
            var a = Ta();
            if ("object" == typeof r && null !== r) {
                var e = r.delay;
                e = "number" == typeof e && 0 < e ? a + e : a, r = "number" == typeof r.timeout ? r.timeout : zh($)
            } else r = zh($), e = a;
            return $ = {
                id: yn++,
                callback: v,
                priorityLevel: $,
                startTime: e,
                expirationTime: r = e + r,
                sortIndex: -1
            }, e > a ? ($.sortIndex = e, Se(mb, $), null === Ba(Ma) && $ === Ba(mb) && (yh ? vh() : yh = !0, Qe(Te, e - a))) : ($.sortIndex = r, Se(Ma, $), Re || xh || (Re = !0, hd(Ue))), $
        };
        ea.unstable_scheduleCallback = On;
        Pn = function () {
            var $ = Ta();
            kd($);
            var v = Ba(Ma);
            return v !== Aa && null !== Aa && null !== v && null !== v.callback && v.startTime <= $ && v.expirationTime < Aa.expirationTime || wh()
        };
        ea.unstable_shouldYield = Pn;
        Qn = function ($) {
            var v = nb;
            return function () {
                var r = nb;
                nb = v;
                try {
                    return $.apply(this, arguments)
                } finally {
                    nb = r
                }
            }
        };
        ea.unstable_wrapCallback = Qn
    }
    var Tn, Un = false;

    function Vn() {
        if (Un) return;
        Un = true;
        Tn = {};
        Tn = (Sn(), ea)
    }
    var Ca, ld, pa, la, Ah, Wn, Bh, Xn, Yn, Ch, Zn, $n, Ve, Tb, md, We, Ub, Xe, ob, Dh, nd, od, _n, Ye, ao, bo, Eh, Fh, Gh, ma, Ze, Na, co, ra, pd, Vb, Cb, Hh, qd, Ih, Jh, eo, $e, rd, _e, af, Kh, Lh, Mh, Nh, Oh, Ph, Wb, bf, fo, Qh, Rh, Sh, Th, xc, Uh, cf, sd, go, Vh, ho, io, Ua, yc, zc, Ac, Bc, Cc, Dc, df, jo, Wh, Xh, ef, ko, lo, mo, Yh, Ec, no, oo, Zh, $h, _h, ff, gf, po, qo, hf, ro, jf, pb, td, Fc, Gc, so, ai, to, uo, vo, kf, ud, wo, bi, ci, fb, xo, vd, yo, zo, di, ei, lf, fi, Ao, Hc, Bo, Co, Do, Eo, Fo, Ic, gi, Jc, Go, Db, Ho, Io, hi, wd, Jo, ii, Ko, Lo, Mo, No, Oo, Po, Qo, Ro, So, To, Uo, Vo, Wo, Xo, mf, Kc, qb, na, sa, Xb, Yo, nf, ji, ki, of , Zo, xd, li, mi, ni, oi, pi, $o, _o, Yb, qi, ap, ri, Da, yd, si, ti, bp, zd, Lc, ui, Ad, Bd, Zb, pf, Mc, Va, Nc, Oc, ia, Cd, Ea, Pc, oa, Wa, rb, cp, Dd, dp, ep, fp, qf, vi, wi, gp, xi, hp, yi, ip, jp, rf, kp, lp, mp, np, Ed, zi, ka, sf, Oa, Xa, Eb, Fd, Ai, Gd, Hd, tf, ha, gb, ca, Fa, Ga, Bi, Fb, uf, Ci, vf, Di, Ei, Fi, ba, Gi, op, $b, Hi, wf, xf, Qc, Ii, pp, Ji, Ki, Li, qp, rp, sp, tp, up, vp, wp, xp, yp, zp, Ap, Bp, Cp = false;

    function aa(t) {
        for (var $ = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, e = 1; e < arguments.length; e++) $ += "&args[]=" + encodeURIComponent(arguments[e]);
        return "Minified React error #" + t + "; visit " + $ + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function Dp(t, $, e, r, i, a, n, l, v) {
        var o = Array.prototype.slice.call(arguments, 3);
        try {
            $.apply(e, o)
        } catch (u) {
            this.onError(u)
        }
    }

    function Ep(t, $, e, r, i, a, n, l, v) {
        Ah = !1, Wn = null, Dp.apply(Yn, arguments)
    }

    function Fp(t, $, e, r, i, a, n, l, v) {
        if (Ep.apply(this, arguments), Ah) {
            if (!Ah) throw Error(aa(198));
            var o = Wn;
            Ah = !1, Wn = null, Bh || (Bh = !0, Xn = o)
        }
    }

    function Mi(t, $, e) {
        var r = t.type || "unknown-event";
        t.currentTarget = $n(e), Fp(r, $, void 0, t), t.currentTarget = null
    }

    function Ni() {
        if (Ve)
            for (var t in Tb) {
                var $ = Tb[t],
                    e = Ve.indexOf(t);
                if (!(-1 < e)) throw Error(aa(96, t));
                if (!md[e]) {
                    if (!$.extractEvents) throw Error(aa(97, t));
                    for (var r in md[e] = $, e = $.eventTypes) {
                        var i = void 0,
                            a = e[r],
                            n = $,
                            l = r;
                        if (We.hasOwnProperty(l)) throw Error(aa(99, l));
                        We[l] = a;
                        var v = a.phasedRegistrationNames;
                        if (v) {
                            for (i in v) v.hasOwnProperty(i) && Oi(v[i], n, l);
                            i = !0
                        } else a.registrationName ? (Oi(a.registrationName, n, l), i = !0) : i = !1;
                        if (!i) throw Error(aa(98, r, t))
                    }
                }
            }
    }

    function Oi(t, $, e) {
        if (Ub[t]) throw Error(aa(100, t));
        Ub[t] = $, Xe[t] = $.eventTypes[e].dependencies
    }

    function Pi(t) {
        var $, e = !1;
        for ($ in t)
            if (t.hasOwnProperty($)) {
                var r = t[$];
                if (!Tb.hasOwnProperty($) || Tb[$] !== r) {
                    if (Tb[$]) throw Error(aa(102, $));
                    Tb[$] = r, e = !0
                }
            } e && Ni()
    }

    function Qi(t) {
        if (t = Zn(t)) {
            if ("function" != typeof Dh) throw Error(aa(280));
            var $ = t.stateNode;
            $ && ($ = Ch($), Dh(t.stateNode, t.type, $))
        }
    }

    function Ri(t) {
        nd ? od ? od.push(t) : od = [t] : nd = t
    }

    function Si() {
        if (nd) {
            var t = nd,
                $ = od;
            if (od = nd = null, Qi(t), $)
                for (t = 0; t < $.length; t++) Qi($[t])
        }
    }

    function Ti(t, $) {
        return t($)
    }

    function Gp(t, $, e, r, i) {
        return t($, e, r, i)
    }

    function Ui() {}

    function yf() {
        null === nd && null === od || (Ui(), Si())
    }

    function Vi(t, $, e) {
        if (ao) return t($, e);
        ao = !0;
        try {
            return _n(t, $, e)
        } finally {
            ao = !1, yf()
        }
    }

    function Hp(t) {
        return !!Eh.call(Gh, t) || !Eh.call(Fh, t) && (bo.test(t) ? Gh[t] = !0 : (Fh[t] = !0, !1))
    }

    function Ip(t, $, e, r) {
        if (null !== e && 0 === e.type) return !1;
        switch (typeof $) {
            case "function":
            case "symbol":
                return !0;
            case "boolean":
                return !r && (null !== e ? !e.acceptsBooleans : "data-" !== (t = t.toLowerCase().slice(0, 5)) && "aria-" !== t);
            default:
                return !1;
        }
    }

    function Jp(t, $, e, r) {
        if (null == $ || Ip(t, $, e, r)) return !0;
        if (r) return !1;
        if (null !== e) switch (e.type) {
            case 3:
                return !$;
            case 4:
                return !1 === $;
            case 5:
                return isNaN($);
            case 6:
                return isNaN($) || 1 > $;
        }
        return !1
    }

    function qa(t, $, e, r, i, a) {
        this.acceptsBooleans = 2 === $ || 3 === $ || 4 === $, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = e, this.propertyName = t, this.type = $, this.sanitizeURL = a
    }

    function zf(t) {
        return t[1].toUpperCase()
    }

    function Af(t, $, e, r) {
        var i = ma.hasOwnProperty($) ? ma[$] : null;
        (null !== i ? 0 === i.type : !r && 2 < $.length && ("o" === $[0] || "O" === $[0]) && ("n" === $[1] || "N" === $[1])) || (Jp($, e, i, r) && (e = null), r || null === i ? Hp($) && (null === e ? t.removeAttribute($) : t.setAttribute($, "" + e)) : i.mustUseProperty ? t[i.propertyName] = null === e ? 3 !== i.type && "" : e : ($ = i.attributeName, r = i.attributeNamespace, null === e ? t.removeAttribute($) : (e = 3 === (i = i.type) || 4 === i && !0 === e ? "" : "" + e, r ? t.setAttributeNS(r, $, e) : t.setAttribute($, e))))
    }

    function Rc(t) {
        return null === t || "object" != typeof t ? null : "function" == typeof (t = Mh && t[Mh] || t["@@iterator"]) ? t : null
    }

    function Kp(t) {
        if (-1 === t._status) {
            t._status = 0;
            var $ = t._ctor;
            $ = $(), t._result = $, $.then(function ($) {
                0 === t._status && ($ = $.default, t._status = 1, t._result = $)
            }, function ($) {
                0 === t._status && (t._status = 2, t._result = $)
            })
        }
    }

    function hb(t) {
        if (null == t) return null;
        if ("function" == typeof t) return t.displayName || t.name || null;
        if ("string" == typeof t) return t;
        switch (t) {
            case Cb:
                return "Fragment";
            case Vb:
                return "Portal";
            case qd:
                return "Profiler";
            case Hh:
                return "StrictMode";
            case rd:
                return "Suspense";
            case _e:
                return "SuspenseList";
        }
        if ("object" == typeof t) switch (t.$$typeof) {
            case Jh:
                return "Context.Consumer";
            case Ih:
                return "Context.Provider";
            case $e:
                var $ = t.render;
                return $ = $.displayName || $.name || "", t.displayName || ("" !== $ ? "ForwardRef(" + $ + ")" : "ForwardRef");
            case af:
                return hb(t.type);
            case Lh:
                return hb(t.render);
            case Kh:
                if (t = 1 === t._status ? t._result : null) return hb(t);
        }
        return null
    }

    function Bf(t) {
        var $ = "";
        do {
            t: switch (t.tag) {
                case 3:
                case 4:
                case 6:
                case 7:
                case 10:
                case 9:
                    var e = "";
                    break t;
                default:
                    var r = t._debugOwner,
                        i = t._debugSource,
                        a = hb(t.type);
                    e = null, r && (e = hb(r.type)), r = a, a = "", i ? a = " (at " + i.fileName.replace(co, "") + ":" + i.lineNumber + ")" : e && (a = " (created by " + e + ")"), e = "\n    in " + (r || "Unknown") + a;
            }
            $ += e,
            t = t.return
        } while (t);
        return $
    }

    function sb(t) {
        switch (typeof t) {
            case "boolean":
            case "number":
            case "object":
            case "string":
            case "undefined":
                return t;
            default:
                return "";
        }
    }

    function Wi(t) {
        var $ = t.type;
        return (t = t.nodeName) && "input" === t.toLowerCase() && ("checkbox" === $ || "radio" === $)
    }

    function Lp(t) {
        var $ = Wi(t) ? "checked" : "value",
            e = Object.getOwnPropertyDescriptor(t.constructor.prototype, $),
            r = "" + t[$];
        if (!t.hasOwnProperty($) && void 0 !== e && "function" == typeof e.get && "function" == typeof e.set) {
            var i = e.get,
                a = e.set;
            return Object.defineProperty(t, $, {
                configurable: !0,
                get: function () {
                    return i.call(this)
                },
                set: function (t) {
                    r = "" + t, a.call(this, t)
                }
            }), Object.defineProperty(t, $, {
                enumerable: e.enumerable
            }), {
                getValue: function () {
                    return r
                },
                setValue: function (t) {
                    r = "" + t
                },
                stopTracking: function () {
                    t._valueTracker = null, delete t[$]
                }
            }
        }
    }

    function Id(t) {
        t._valueTracker || (t._valueTracker = Lp(t))
    }

    function Xi(t) {
        if (!t) return !1;
        var $ = t._valueTracker;
        if (!$) return !0;
        var e = $.getValue(),
            r = "";
        return t && (r = Wi(t) ? t.checked ? "true" : "false" : t.value), (t = r) !== e && ($.setValue(t), !0)
    }

    function Cf(t, $) {
        var e = $.checked;
        return pa({}, $, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != e ? e : t._wrapperState.initialChecked
        })
    }

    function Yi(t, $) {
        var e = null == $.defaultValue ? "" : $.defaultValue,
            r = null != $.checked ? $.checked : $.defaultChecked;
        e = sb(null != $.value ? $.value : e), t._wrapperState = {
            initialChecked: r,
            initialValue: e,
            controlled: "checkbox" === $.type || "radio" === $.type ? null != $.checked : null != $.value
        }
    }

    function Zi(t, $) {
        null != ($ = $.checked) && Af(t, "checked", $, !1)
    }

    function Df(t, $) {
        Zi(t, $);
        var e = sb($.value),
            r = $.type;
        if (null != e) "number" === r ? (0 === e && "" === t.value || t.value != e) && (t.value = "" + e) : t.value !== "" + e && (t.value = "" + e);
        else if ("submit" === r || "reset" === r) return void t.removeAttribute("value");
        $.hasOwnProperty("value") ? Ef(t, $.type, e) : $.hasOwnProperty("defaultValue") && Ef(t, $.type, sb($.defaultValue)), null == $.checked && null != $.defaultChecked && (t.defaultChecked = !!$.defaultChecked)
    }

    function $i(t, $, e) {
        if ($.hasOwnProperty("value") || $.hasOwnProperty("defaultValue")) {
            var r = $.type;
            if (!("submit" !== r && "reset" !== r || void 0 !== $.value && null !== $.value)) return;
            $ = "" + t._wrapperState.initialValue, e || $ === t.value || (t.value = $), t.defaultValue = $
        }
        "" !== (e = t.name) && (t.name = ""), t.defaultChecked = !!t._wrapperState.initialChecked, "" !== e && (t.name = e)
    }

    function Ef(t, $, e) {
        "number" === $ && t.ownerDocument.activeElement === t || (null == e ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + e && (t.defaultValue = "" + e))
    }

    function Mp(t) {
        var $ = "";
        return ld.Children.forEach(t, function (t) {
            null != t && ($ += t)
        }), $
    }

    function Ff(t, $) {
        return t = pa({
            children: void 0
        }, $), ($ = Mp($.children)) && (t.children = $), t
    }

    function _b(t, $, e, r) {
        if (t = t.options, $) {
            $ = {};
            for (var i = 0; i < e.length; i++) $["$" + e[i]] = !0;
            for (e = 0; e < t.length; e++) i = $.hasOwnProperty("$" + t[e].value), t[e].selected !== i && (t[e].selected = i), i && r && (t[e].defaultSelected = !0)
        } else {
            for (e = "" + sb(e), $ = null, i = 0; i < t.length; i++) {
                if (t[i].value === e) return t[i].selected = !0, void(r && (t[i].defaultSelected = !0));
                null !== $ || t[i].disabled || ($ = t[i])
            }
            null !== $ && ($.selected = !0)
        }
    }

    function Gf(t, $) {
        if (null != $.dangerouslySetInnerHTML) throw Error(aa(91));
        return pa({}, $, {
            value: void 0,
            defaultValue: void 0,
            children: "" + t._wrapperState.initialValue
        })
    }

    function _i(t, $) {
        var e = $.value;
        if (null == e) {
            if (e = $.children, $ = $.defaultValue, null != e) {
                if (null != $) throw Error(aa(92));
                if (Array.isArray(e)) {
                    if (!(1 >= e.length)) throw Error(aa(93));
                    e = e[0]
                }
                $ = e
            }
            null == $ && ($ = ""), e = $
        }
        t._wrapperState = {
            initialValue: sb(e)
        }
    }

    function aj(t, $) {
        var e = sb($.value),
            r = sb($.defaultValue);
        null != e && ((e = "" + e) !== t.value && (t.value = e), null == $.defaultValue && t.defaultValue !== e && (t.defaultValue = e)), null != r && (t.defaultValue = "" + r)
    }

    function bj(t) {
        var $ = t.textContent;
        $ === t._wrapperState.initialValue && "" !== $ && null !== $ && (t.value = $)
    }

    function cj(t) {
        switch (t) {
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml";
        }
    }

    function Hf(t, $) {
        return null == t || "http://www.w3.org/1999/xhtml" === t ? cj($) : "http://www.w3.org/2000/svg" === t && "foreignObject" === $ ? "http://www.w3.org/1999/xhtml" : t
    }

    function Sc(t, $) {
        if ($) {
            var e = t.firstChild;
            if (e && e === t.lastChild && 3 === e.nodeType) return void(e.nodeValue = $)
        }
        t.textContent = $
    }

    function Jd(t, $) {
        var e = {};
        return e[t.toLowerCase()] = $.toLowerCase(), e["Webkit" + t] = "webkit" + $, e["Moz" + t] = "moz" + $, e
    }

    function Kd(t) {
        if (bf[t]) return bf[t];
        if (!Wb[t]) return t;
        var $, e = Wb[t];
        for ($ in e)
            if (e.hasOwnProperty($) && $ in fo) return bf[t] = e[$];
        return t
    }

    function If(t) {
        var $ = Uh.get(t);
        return void 0 === $ && ($ = new Map, Uh.set(t, $)), $
    }

    function Gb(t) {
        var $ = t,
            e = t;
        if (t.alternate)
            for (; $.return;) $ = $.return;
        else {
            t = $;
            do {
                0 != (1026 & ($ = t).effectTag) && (e = $.return), t = $.return
            } while (t)
        }
        return 3 === $.tag ? e : null
    }

    function dj(t) {
        if (13 === t.tag) {
            var $ = t.memoizedState;
            if (null === $ && null !== (t = t.alternate) && ($ = t.memoizedState), null !== $) return $.dehydrated
        }
        return null
    }

    function ej(t) {
        if (Gb(t) !== t) throw Error(aa(188))
    }

    function Np(t) {
        var $ = t.alternate;
        if (!$) {
            if (null === ($ = Gb(t))) throw Error(aa(188));
            return $ !== t ? null : t
        }
        for (var e = t, r = $;;) {
            var i = e.return;
            if (null === i) break;
            var a = i.alternate;
            if (null === a) {
                if (null !== (r = i.return)) {
                    e = r;
                    continue
                }
                break
            }
            if (i.child === a.child) {
                for (a = i.child; a;) {
                    if (a === e) return ej(i), t;
                    if (a === r) return ej(i), $;
                    a = a.sibling
                }
                throw Error(aa(188))
            }
            if (e.return !== r.return) e = i, r = a;
            else {
                for (var n = !1, l = i.child; l;) {
                    if (l === e) {
                        n = !0, e = i, r = a;
                        break
                    }
                    if (l === r) {
                        n = !0, r = i, e = a;
                        break
                    }
                    l = l.sibling
                }
                if (!n) {
                    for (l = a.child; l;) {
                        if (l === e) {
                            n = !0, e = a, r = i;
                            break
                        }
                        if (l === r) {
                            n = !0, r = a, e = i;
                            break
                        }
                        l = l.sibling
                    }
                    if (!n) throw Error(aa(189))
                }
            }
            if (e.alternate !== r) throw Error(aa(190))
        }
        if (3 !== e.tag) throw Error(aa(188));
        return e.stateNode.current === e ? t : $
    }

    function fj(t) {
        if (!(t = Np(t))) return null;
        for (var $ = t;;) {
            if (5 === $.tag || 6 === $.tag) return $;
            if ($.child) $.child.return = $, $ = $.child;
            else {
                if ($ === t) break;
                for (; !$.sibling;) {
                    if (!$.return || $.return === t) return null;
                    $ = $.return
                }
                $.sibling.return = $.return, $ = $.sibling
            }
        }
        return null
    }

    function ac(t, $) {
        if (null == $) throw Error(aa(30));
        return null == t ? $ : Array.isArray(t) ? Array.isArray($) ? (t.push.apply(t, $), t) : (t.push($), t) : Array.isArray($) ? [t].concat($) : [t, $]
    }

    function Jf(t, $, e) {
        Array.isArray(t) ? t.forEach($, e) : t && $.call(e, t)
    }

    function Op(t) {
        if (t) {
            var $ = t._dispatchListeners,
                e = t._dispatchInstances;
            if (Array.isArray($))
                for (var r = 0; r < $.length && !t.isPropagationStopped(); r++) Mi(t, $[r], e[r]);
            else $ && Mi(t, $, e);
            t._dispatchListeners = null, t._dispatchInstances = null, t.isPersistent() || t.constructor.release(t)
        }
    }

    function Ld(t) {
        if (null !== t && (cf = ac(cf, t)), t = cf, cf = null, t) {
            if (Jf(t, Op), cf) throw Error(aa(95));
            if (Bh) throw t = Xn, Bh = !1, Xn = null, t
        }
    }

    function Kf(t) {
        return (t = t.target || t.srcElement || window).correspondingUseElement && (t = t.correspondingUseElement), 3 === t.nodeType ? t.parentNode : t
    }

    function gj(t) {
        if (!ob) return !1;
        var $ = ((t = "on" + t) in document);
        return $ || (($ = document.createElement("div")).setAttribute(t, "return;"), $ = "function" == typeof $[t]), $
    }

    function hj(t) {
        t.topLevelType = null, t.nativeEvent = null, t.targetInst = null, t.ancestors.length = 0, 10 > sd.length && sd.push(t)
    }

    function ij(t, $, e, r) {
        if (sd.length) {
            var i = sd.pop();
            return i.topLevelType = t, i.eventSystemFlags = r, i.nativeEvent = $, i.targetInst = e, i
        }
        return {
            topLevelType: t,
            eventSystemFlags: r,
            nativeEvent: $,
            targetInst: e,
            ancestors: []
        }
    }

    function jj(t) {
        var $ = t.targetInst,
            e = $;
        do {
            if (!e) {
                t.ancestors.push(e);
                break
            }
            var r = e;
            if (3 === r.tag) r = r.stateNode.containerInfo;
            else {
                for (; r.return;) r = r.return;
                r = 3 !== r.tag ? null : r.stateNode.containerInfo
            }
            if (!r) break;
            5 !== ($ = e.tag) && 6 !== $ || t.ancestors.push(e), e = Wc(r)
        } while (e);
        for (e = 0; e < t.ancestors.length; e++) {
            $ = t.ancestors[e];
            var i = Kf(t.nativeEvent);
            r = t.topLevelType;
            var a = t.nativeEvent,
                n = t.eventSystemFlags;
            0 === e && (n |= 64);
            for (var l = null, v = 0; v < md.length; v++) {
                var o = md[v];
                o && (o = o.extractEvents(r, $, a, i, n)) && (l = ac(l, o))
            }
            Ld(l)
        }
    }

    function Lf(t, $, e) {
        if (!e.has(t)) {
            switch (t) {
                case "scroll":
                    Vc($, "scroll", !0);
                    break;
                case "focus":
                case "blur":
                    Vc($, "focus", !0), Vc($, "blur", !0), e.set("blur", null), e.set("focus", null);
                    break;
                case "cancel":
                case "close":
                    gj(t) && Vc($, t, !0);
                    break;
                case "invalid":
                case "submit":
                case "reset":
                    break;
                default:
                    -1 === xc.indexOf(t) && fa(t, $);
            }
            e.set(t, null)
        }
    }

    function Pp(t, $) {
        var e = If($);
        df.forEach(function (t) {
            Lf(t, $, e)
        }), jo.forEach(function (t) {
            Lf(t, $, e)
        })
    }

    function Mf(t, $, e, r, i) {
        return {
            blockedOn: t,
            topLevelType: $,
            eventSystemFlags: 32 | e,
            nativeEvent: i,
            container: r
        }
    }

    function kj(t, $) {
        switch (t) {
            case "focus":
            case "blur":
                yc = null;
                break;
            case "dragenter":
            case "dragleave":
                zc = null;
                break;
            case "mouseover":
            case "mouseout":
                Ac = null;
                break;
            case "pointerover":
            case "pointerout":
                Bc.delete($.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                Cc.delete($.pointerId);
        }
    }

    function Tc(t, $, e, r, i, a) {
        return null === t || t.nativeEvent !== a ? (t = Mf($, e, r, i, a), null !== $ && null !== ($ = Xc($)) && Vh($), t) : (t.eventSystemFlags |= r, t)
    }

    function Qp(t, $, e, r, i) {
        switch ($) {
            case "focus":
                return yc = Tc(yc, t, $, e, r, i), !0;
            case "dragenter":
                return zc = Tc(zc, t, $, e, r, i), !0;
            case "mouseover":
                return Ac = Tc(Ac, t, $, e, r, i), !0;
            case "pointerover":
                var a = i.pointerId;
                return Bc.set(a, Tc(Bc.get(a) || null, t, $, e, r, i)), !0;
            case "gotpointercapture":
                return a = i.pointerId, Cc.set(a, Tc(Cc.get(a) || null, t, $, e, r, i)), !0;
        }
        return !1
    }

    function Rp(t) {
        var $ = Wc(t.target);
        if (null !== $) {
            var e = Gb($);
            if (null !== e)
                if (13 === ($ = e.tag)) {
                    if (null !== ($ = dj(e))) return t.blockedOn = $, void la.unstable_runWithPriority(t.priority, function () {
                        ho(e)
                    })
                } else if (3 === $ && e.stateNode.hydrate) return void(t.blockedOn = 3 === e.tag ? e.stateNode.containerInfo : null)
        }
        t.blockedOn = null
    }

    function Md(t) {
        if (null !== t.blockedOn) return !1;
        var $ = Of(t.topLevelType, t.eventSystemFlags, t.container, t.nativeEvent);
        if (null !== $) {
            var e = Xc($);
            return null !== e && Vh(e), t.blockedOn = $, !1
        }
        return !0
    }

    function lj(t, $, e) {
        Md(t) && e.delete($)
    }

    function Sp() {
        for (io = !1; 0 < Ua.length;) {
            var t = Ua[0];
            if (null !== t.blockedOn) {
                null !== (t = Xc(t.blockedOn)) && go(t);
                break
            }
            var $ = Of(t.topLevelType, t.eventSystemFlags, t.container, t.nativeEvent);
            null !== $ ? t.blockedOn = $ : Ua.shift()
        }
        null !== yc && Md(yc) && (yc = null), null !== zc && Md(zc) && (zc = null), null !== Ac && Md(Ac) && (Ac = null), Bc.forEach(lj), Cc.forEach(lj)
    }

    function Uc(t, $) {
        t.blockedOn === $ && (t.blockedOn = null, io || (io = !0, la.unstable_scheduleCallback(la.unstable_NormalPriority, Sp)))
    }

    function mj(t) {
        function $($) {
            return Uc($, t)
        }
        if (0 < Ua.length) {
            Uc(Ua[0], t);
            for (var e = 1; e < Ua.length; e++) {
                var r = Ua[e];
                r.blockedOn === t && (r.blockedOn = null)
            }
        }
        for (null !== yc && Uc(yc, t), null !== zc && Uc(zc, t), null !== Ac && Uc(Ac, t), Bc.forEach($), Cc.forEach($), e = 0; e < Dc.length; e++)(r = Dc[e]).blockedOn === t && (r.blockedOn = null);
        for (; 0 < Dc.length && null === (e = Dc[0]).blockedOn;) Rp(e), null === e.blockedOn && Dc.shift()
    }

    function Nf(t, $) {
        for (var e = 0; e < t.length; e += 2) {
            var r = t[e],
                i = t[e + 1],
                a = "on" + (i[0].toUpperCase() + i.slice(1));
            a = {
                phasedRegistrationNames: {
                    bubbled: a,
                    captured: a + "Capture"
                },
                dependencies: [r],
                eventPriority: $
            }, ef.set(r, $), Xh.set(r, a), Wh[i] = a
        }
    }

    function fa(t, $) {
        Vc($, t, !1)
    }

    function Vc(t, $, e) {
        var r = ef.get($);
        switch (void 0 === r ? 2 : r) {
            case 0:
                r = Tp.bind(null, $, 1, t);
                break;
            case 1:
                r = Up.bind(null, $, 1, t);
                break;
            default:
                r = Nd.bind(null, $, 1, t);
        }
        e ? t.addEventListener($, r, !0) : t.addEventListener($, r, !1)
    }

    function Tp(t, $, e, r) {
        Ye || Ui();
        var i = Nd,
            a = Ye;
        Ye = !0;
        try {
            Gp(i, t, $, e, r)
        } finally {
            (Ye = a) || yf()
        }
    }

    function Up(t, $, e, r) {
        mo(lo, Nd.bind(null, t, $, e, r))
    }

    function Nd(t, $, e, r) {
        if (Yh)
            if (0 < Ua.length && -1 < df.indexOf(t)) t = Mf(null, t, $, e, r), Ua.push(t);
            else {
                var i = Of(t, $, e, r);
                if (null === i) kj(t, r);
                else if (-1 < df.indexOf(t)) t = Mf(i, t, $, e, r), Ua.push(t);
                else if (!Qp(i, t, $, e, r)) {
                    kj(t, r), t = ij(t, r, null, $);
                    try {
                        Vi(jj, t)
                    } finally {
                        hj(t)
                    }
                }
            }
    }

    function Of(t, $, e, r) {
        if (null !== (e = Wc(e = Kf(r)))) {
            var i = Gb(e);
            if (null === i) e = null;
            else {
                var a = i.tag;
                if (13 === a) {
                    if (null !== (e = dj(i))) return e;
                    e = null
                } else if (3 === a) {
                    if (i.stateNode.hydrate) return 3 === i.tag ? i.stateNode.containerInfo : null;
                    e = null
                } else i !== e && (e = null)
            }
        }
        t = ij(t, r, e, $);
        try {
            Vi(jj, t)
        } finally {
            hj(t)
        }
        return null
    }

    function nj(t, $, e) {
        return null == $ || "boolean" == typeof $ || "" === $ ? "" : e || "number" != typeof $ || 0 === $ || Ec.hasOwnProperty(t) && Ec[t] ? ("" + $).trim() : $ + "px"
    }

    function oj(t, $) {
        for (var e in t = t.style, $)
            if ($.hasOwnProperty(e)) {
                var r = 0 === e.indexOf("--"),
                    i = nj(e, $[e], r);
                "float" === e && (e = "cssFloat"), r ? t.setProperty(e, i) : t[e] = i
            }
    }

    function Pf(t, $) {
        if ($) {
            if (oo[t] && (null != $.children || null != $.dangerouslySetInnerHTML)) throw Error(aa(137, t, ""));
            if (null != $.dangerouslySetInnerHTML) {
                if (null != $.children) throw Error(aa(60));
                if (!("object" == typeof $.dangerouslySetInnerHTML && "__html" in $.dangerouslySetInnerHTML)) throw Error(aa(61))
            }
            if (null != $.style && "object" != typeof $.style) throw Error(aa(62, ""))
        }
    }

    function Qf(t, $) {
        if (-1 === t.indexOf("-")) return "string" == typeof $.is;
        switch (t) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0;
        }
    }

    function ib(t, $) {
        var e = If(t = 9 === t.nodeType || 11 === t.nodeType ? t : t.ownerDocument);
        $ = Xe[$];
        for (var r = 0; r < $.length; r++) Lf($[r], t, e)
    }

    function Od() {}

    function Rf(t) {
        if (void 0 === (t = t || ("undefined" != typeof document ? document : void 0))) return null;
        try {
            return t.activeElement || t.body
        } catch ($) {
            return t.body
        }
    }

    function pj(t) {
        for (; t && t.firstChild;) t = t.firstChild;
        return t
    }

    function qj(t, $) {
        var e, r = pj(t);
        for (t = 0; r;) {
            if (3 === r.nodeType) {
                if (e = t + r.textContent.length, t <= $ && e >= $) return {
                    node: r,
                    offset: $ - t
                };
                t = e
            }
            t: {
                for (; r;) {
                    if (r.nextSibling) {
                        r = r.nextSibling;
                        break t
                    }
                    r = r.parentNode
                }
                r = void 0
            }
            r = pj(r)
        }
    }

    function rj(t, $) {
        return !(!t || !$) && (t === $ || (!t || 3 !== t.nodeType) && ($ && 3 === $.nodeType ? rj(t, $.parentNode) : "contains" in t ? t.contains($) : !!t.compareDocumentPosition && !!(16 & t.compareDocumentPosition($))))
    }

    function sj() {
        for (var t = window, $ = Rf(); $ instanceof t.HTMLIFrameElement;) {
            try {
                var e = "string" == typeof $.contentWindow.location.href
            } catch (r) {
                e = !1
            }
            if (!e) break;
            $ = Rf((t = $.contentWindow).document)
        }
        return $
    }

    function Sf(t) {
        var $ = t && t.nodeName && t.nodeName.toLowerCase();
        return $ && ("input" === $ && ("text" === t.type || "search" === t.type || "tel" === t.type || "url" === t.type || "password" === t.type) || "textarea" === $ || "true" === t.contentEditable)
    }

    function tj(t, $) {
        switch (t) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                return !!$.autoFocus;
        }
        return !1
    }

    function Tf(t, $) {
        return "textarea" === t || "option" === t || "noscript" === t || "string" == typeof $.children || "number" == typeof $.children || "object" == typeof $.dangerouslySetInnerHTML && null !== $.dangerouslySetInnerHTML && null != $.dangerouslySetInnerHTML.__html
    }

    function bc(t) {
        for (; null != t; t = t.nextSibling) {
            var $ = t.nodeType;
            if (1 === $ || 3 === $) break
        }
        return t
    }

    function uj(t) {
        t = t.previousSibling;
        for (var $ = 0; t;) {
            if (8 === t.nodeType) {
                var e = t.data;
                if (e === $h || e === gf || e === ff) {
                    if (0 === $) return t;
                    $--
                } else e === _h && $++
            }
            t = t.previousSibling
        }
        return null
    }

    function Wc(t) {
        var $ = t[pb];
        if ($) return $;
        for (var e = t.parentNode; e;) {
            if ($ = e[Fc] || e[pb]) {
                if (e = $.alternate, null !== $.child || null !== e && null !== e.child)
                    for (t = uj(t); null !== t;) {
                        if (e = t[pb]) return e;
                        t = uj(t)
                    }
                return $
            }
            e = (t = e).parentNode
        }
        return null
    }

    function Xc(t) {
        return !(t = t[pb] || t[Fc]) || 5 !== t.tag && 6 !== t.tag && 13 !== t.tag && 3 !== t.tag ? null : t
    }

    function Hb(t) {
        if (5 === t.tag || 6 === t.tag) return t.stateNode;
        throw Error(aa(33))
    }

    function Uf(t) {
        return t[td] || null
    }

    function jb(t) {
        do {
            t = t.return
        } while (t && 5 !== t.tag);
        return t || null
    }

    function vj(t, $) {
        var e = t.stateNode;
        if (!e) return null;
        var r = Ch(e);
        if (!r) return null;
        e = r[$];
        t: switch ($) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (r = !r.disabled) || (r = !("button" === (t = t.type) || "input" === t || "select" === t || "textarea" === t)), t = !r;
                break t;
            default:
                t = !1;
        }
        if (t) return null;
        if (e && "function" != typeof e) throw Error(aa(231, $, typeof e));
        return e
    }

    function wj(t, $, e) {
        ($ = vj(t, e.dispatchConfig.phasedRegistrationNames[$])) && (e._dispatchListeners = ac(e._dispatchListeners, $), e._dispatchInstances = ac(e._dispatchInstances, t))
    }

    function Vp(t) {
        if (t && t.dispatchConfig.phasedRegistrationNames) {
            for (var $ = t._targetInst, e = []; $;) e.push($), $ = jb($);
            for ($ = e.length; 0 < $--;) wj(e[$], "captured", t);
            for ($ = 0; $ < e.length; $++) wj(e[$], "bubbled", t)
        }
    }

    function Vf(t, $, e) {
        t && e && e.dispatchConfig.registrationName && ($ = vj(t, e.dispatchConfig.registrationName)) && (e._dispatchListeners = ac(e._dispatchListeners, $), e._dispatchInstances = ac(e._dispatchInstances, t))
    }

    function Wp(t) {
        t && t.dispatchConfig.registrationName && Vf(t._targetInst, null, t)
    }

    function cc(t) {
        Jf(t, Vp)
    }

    function xj() {
        if (ai) return ai;
        var t, $, e = so,
            r = e.length,
            i = "value" in Gc ? Gc.value : Gc.textContent,
            a = i.length;
        for (t = 0; t < r && e[t] === i[t]; t++);
        var n = r - t;
        for ($ = 1; $ <= n && e[r - $] === i[a - $]; $++);
        return ai = i.slice(t, 1 < $ ? 1 - $ : void 0)
    }

    function Pd() {
        return !0
    }

    function Qd() {
        return !1
    }

    function ua(t, $, e, r) {
        for (var i in this.dispatchConfig = t, this._targetInst = $, this.nativeEvent = e, t = this.constructor.Interface) t.hasOwnProperty(i) && (($ = t[i]) ? this[i] = $(e) : "target" === i ? this.target = r : this[i] = e[i]);
        return this.isDefaultPrevented = (null != e.defaultPrevented ? e.defaultPrevented : !1 === e.returnValue) ? Pd : Qd, this.isPropagationStopped = Qd, this
    }

    function Xp(t, $, e, r) {
        if (this.eventPool.length) {
            var i = this.eventPool.pop();
            return this.call(i, t, $, e, r), i
        }
        return new this(t, $, e, r)
    }

    function Yp(t) {
        if (!(t instanceof this)) throw Error(aa(279));
        t.destructor(), 10 > this.eventPool.length && this.eventPool.push(t)
    }

    function yj(t) {
        t.eventPool = [], t.getPooled = Xp, t.release = Yp
    }

    function zj(t, $) {
        switch (t) {
            case "keyup":
                return -1 !== vo.indexOf($.keyCode);
            case "keydown":
                return 229 !== $.keyCode;
            case "keypress":
            case "mousedown":
            case "blur":
                return !0;
            default:
                return !1;
        }
    }

    function Aj(t) {
        return "object" == typeof (t = t.detail) && "data" in t ? t.data : null
    }

    function Zp(t, $) {
        switch (t) {
            case "compositionend":
                return Aj($);
            case "keypress":
                return 32 !== $.which ? null : (xo = !0, ci);
            case "textInput":
                return (t = $.data) === ci && xo ? null : t;
            default:
                return null;
        }
    }

    function $p(t, $) {
        if (vd) return "compositionend" === t || !kf && zj(t, $) ? (t = xj(), ai = so = Gc = null, vd = !1, t) : null;
        switch (t) {
            case "paste":
                return null;
            case "keypress":
                if (!($.ctrlKey || $.altKey || $.metaKey) || $.ctrlKey && $.altKey) {
                    if ($.char && 1 < $.char.length) return $.char;
                    if ($.which) return String.fromCharCode($.which)
                }
                return null;
            case "compositionend":
                return bi && "ko" !== $.locale ? null : $.data;
            default:
                return null;
        }
    }

    function Bj(t) {
        var $ = t && t.nodeName && t.nodeName.toLowerCase();
        return "input" === $ ? !!zo[t.type] : "textarea" === $
    }

    function Cj(t, $, e) {
        return (t = ua.getPooled(di.change, t, $, e)).type = "change", Ri(e), cc(t), t
    }

    function _p(t) {
        Ld(t)
    }

    function Rd(t) {
        if (Xi(Hb(t))) return t
    }

    function aq(t, $) {
        if ("change" === t) return $
    }

    function Dj() {
        ei && (ei.detachEvent("onpropertychange", Ej), lf = ei = null)
    }

    function Ej(t) {
        if ("value" === t.propertyName && Rd(lf))
            if (t = Cj(lf, t, Kf(t)), Ye) Ld(t);
            else {
                Ye = !0;
                try {
                    Ti(_p, t)
                } finally {
                    Ye = !1, yf()
                }
            }
    }

    function bq(t, $, e) {
        "focus" === t ? (Dj(), lf = e, (ei = $).attachEvent("onpropertychange", Ej)) : "blur" === t && Dj()
    }

    function cq(t) {
        if ("selectionchange" === t || "keyup" === t || "keydown" === t) return Rd(lf)
    }

    function dq(t, $) {
        if ("click" === t) return Rd($)
    }

    function eq(t, $) {
        if ("input" === t || "change" === t) return Rd($)
    }

    function fq(t) {
        var $ = this.nativeEvent;
        return $.getModifierState ? $.getModifierState(t) : !!(t = Bo[t]) && !!$[t]
    }

    function Wf() {
        return fq
    }

    function gq(t, $) {
        return t === $ && (0 !== t || 1 / t == 1 / $) || t != t && $ != $
    }

    function Yc(t, $) {
        if (Db(t, $)) return !0;
        if ("object" != typeof t || null === t || "object" != typeof $ || null === $) return !1;
        var e = Object.keys(t),
            r = Object.keys($);
        if (e.length !== r.length) return !1;
        for (r = 0; r < e.length; r++)
            if (!Ho.call($, e[r]) || !Db(t[e[r]], $[e[r]])) return !1;
        return !0
    }

    function Fj(t, $) {
        var e = $.window === $ ? $.document : 9 === $.nodeType ? $ : $.ownerDocument;
        return Ko || null == wd || wd !== Rf(e) ? null : ("selectionStart" in (e = wd) && Sf(e) ? e = {
            start: e.selectionStart,
            end: e.selectionEnd
        } : e = {
            anchorNode: (e = (e.ownerDocument && e.ownerDocument.defaultView || window).getSelection()).anchorNode,
            anchorOffset: e.anchorOffset,
            focusNode: e.focusNode,
            focusOffset: e.focusOffset
        }, ii && Yc(ii, e) ? null : (ii = e, (t = ua.getPooled(hi.select, Jo, t, $)).type = "select", t.target = wd, cc(t), t))
    }

    function Sd(t) {
        var $ = t.keyCode;
        return "charCode" in t ? 0 === (t = t.charCode) && 13 === $ && (t = 13) : t = $, 10 === t && (t = 13), 32 <= t || 13 === t ? t : 0
    }

    function ga(t) {
        0 > Kc || (t.current = mf[Kc], mf[Kc] = null, Kc--)
    }

    function ja(t, $) {
        mf[++Kc] = t.current, t.current = $
    }

    function dc(t, $) {
        var e = t.type.contextTypes;
        if (!e) return qb;
        var r = t.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === $) return r.__reactInternalMemoizedMaskedChildContext;
        var i, a = {};
        for (i in e) a[i] = $[i];
        return r && ((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext = $, t.__reactInternalMemoizedMaskedChildContext = a), a
    }

    function ta(t) {
        return null != (t = t.childContextTypes)
    }

    function Td() {
        ga(sa), ga(na)
    }

    function Gj(t, $, e) {
        if (na.current !== qb) throw Error(aa(168));
        ja(na, $), ja(sa, e)
    }

    function Hj(t, $, e) {
        var r = t.stateNode;
        if (t = $.childContextTypes, "function" != typeof r.getChildContext) return e;
        for (var i in r = r.getChildContext())
            if (!(i in t)) throw Error(aa(108, hb($) || "Unknown", i));
        return pa({}, e, {}, r)
    }

    function Ud(t) {
        return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || qb, Xb = na.current, ja(na, t), ja(sa, sa.current), !0
    }

    function Ij(t, $, e) {
        var r = t.stateNode;
        if (!r) throw Error(aa(169));
        e ? (t = Hj(t, $, Xb), r.__reactInternalMemoizedMergedChildContext = t, ga(sa), ga(na), ja(na, t)) : ga(sa), ja(sa, e)
    }

    function Vd() {
        switch (Zo()) {
            case xd:
                return 99;
            case li:
                return 98;
            case mi:
                return 97;
            case ni:
                return 96;
            case oi:
                return 95;
            default:
                throw Error(aa(332));
        }
    }

    function Jj(t) {
        switch (t) {
            case 99:
                return xd;
            case 98:
                return li;
            case 97:
                return mi;
            case 96:
                return ni;
            case 95:
                return oi;
            default:
                throw Error(aa(332));
        }
    }

    function tb(t, $) {
        return t = Jj(t), Yo(t, $)
    }

    function Kj(t, $, e) {
        return t = Jj(t), nf(t, $, e)
    }

    function Lj(t) {
        return null === Yb ? (Yb = [t], qi = nf(xd, Mj)) : Yb.push(t), pi
    }

    function Ya() {
        if (null !== qi) {
            var t = qi;
            qi = null, ji(t)
        }
        Mj()
    }

    function Mj() {
        if (!ap && null !== Yb) {
            ap = !0;
            var t = 0;
            try {
                var $ = Yb;
                tb(99, function () {
                    for (; t < $.length; t++) {
                        var e = $[t];
                        do {
                            e = e(!0)
                        } while (null !== e)
                    }
                }), Yb = null
            } catch (e) {
                throw null !== Yb && (Yb = Yb.slice(t + 1)), nf(xd, Ya), e
            } finally {
                ap = !1
            }
        }
    }

    function Wd(t, $, e) {
        return 1073741821 - (1 + ((1073741821 - t + $ / 10) / (e /= 10) | 0)) * e
    }

    function Pa(t, $) {
        if (t && t.defaultProps)
            for (var e in $ = pa({}, $), t = t.defaultProps) void 0 === $[e] && ($[e] = t[e]);
        return $
    }

    function Xf() {
        bp = ti = si = null
    }

    function Yf(t) {
        var $ = yd.current;
        ga(yd), t.type._context._currentValue = $
    }

    function Nj(t, $) {
        for (; null !== t;) {
            var e = t.alternate;
            if (t.childExpirationTime < $) t.childExpirationTime = $, null !== e && e.childExpirationTime < $ && (e.childExpirationTime = $);
            else {
                if (!(null !== e && e.childExpirationTime < $)) break;
                e.childExpirationTime = $
            }
            t = t.return
        }
    }

    function ec(t, $) {
        si = t, bp = ti = null, null !== (t = t.dependencies) && null !== t.firstContext && (t.expirationTime >= $ && (xi = !0), t.firstContext = null)
    }

    function Ha(t, $) {
        if (bp !== t && !1 !== $ && 0 !== $)
            if ("number" == typeof $ && 1073741823 !== $ || (bp = t, $ = 1073741823), $ = {
                    context: t,
                    observedBits: $,
                    next: null
                }, null === ti) {
                if (null === si) throw Error(aa(308));
                ti = $, si.dependencies = {
                    expirationTime: 0,
                    firstContext: $,
                    responders: null
                }
            } else ti = ti.next = $;
        return t._currentValue
    }

    function Zf(t) {
        t.updateQueue = {
            baseState: t.memoizedState,
            baseQueue: null,
            shared: {
                pending: null
            },
            effects: null
        }
    }

    function $f(t, $) {
        t = t.updateQueue, $.updateQueue === t && ($.updateQueue = {
            baseState: t.baseState,
            baseQueue: t.baseQueue,
            shared: t.shared,
            effects: t.effects
        })
    }

    function ub(t, $) {
        return (t = {
            expirationTime: t,
            suspenseConfig: $,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }).next = t
    }

    function vb(t, $) {
        if (null !== (t = t.updateQueue)) {
            var e = (t = t.shared).pending;
            null === e ? $.next = $ : ($.next = e.next, e.next = $), t.pending = $
        }
    }

    function Oj(t, $) {
        var e = t.alternate;
        null !== e && $f(e, t), null === (e = (t = t.updateQueue).baseQueue) ? (t.baseQueue = $.next = $, $.next = $) : ($.next = e.next, e.next = $)
    }

    function Zc(t, $, e, r) {
        var i = t.updateQueue;
        zd = !1;
        var a = i.baseQueue,
            n = i.shared.pending;
        if (null !== n) {
            if (null !== a) {
                var l = a.next;
                a.next = n.next, n.next = l
            }
            a = n, i.shared.pending = null, null !== (l = t.alternate) && null !== (l = l.updateQueue) && (l.baseQueue = n)
        }
        if (null !== a) {
            l = a.next;
            var v = i.baseState,
                o = 0,
                u = null,
                c = null,
                f = null;
            if (null !== l)
                for (var s = l;;) {
                    if ((n = s.expirationTime) < r) {
                        var d = {
                            expirationTime: s.expirationTime,
                            suspenseConfig: s.suspenseConfig,
                            tag: s.tag,
                            payload: s.payload,
                            callback: s.callback,
                            next: null
                        };
                        null === f ? (c = f = d, u = v) : f = f.next = d, n > o && (o = n)
                    } else {
                        null !== f && (f = f.next = {
                            expirationTime: 1073741823,
                            suspenseConfig: s.suspenseConfig,
                            tag: s.tag,
                            payload: s.payload,
                            callback: s.callback,
                            next: null
                        }), Dk(n, s.suspenseConfig);
                        t: {
                            var p = t,
                                h = s;
                            switch (n = $, d = e, h.tag) {
                                case 1:
                                    if ("function" == typeof (p = h.payload)) {
                                        v = p.call(d, v, n);
                                        break t
                                    }
                                    v = p;
                                    break t;
                                case 3:
                                    p.effectTag = -4097 & p.effectTag | 64;
                                case 0:
                                    if (null == (n = "function" == typeof (p = h.payload) ? p.call(d, v, n) : p)) break t;
                                    v = pa({}, v, n);
                                    break t;
                                case 2:
                                    zd = !0;
                            }
                        }
                        null !== s.callback && (t.effectTag |= 32, null === (n = i.effects) ? i.effects = [s] : n.push(s))
                    }
                    if (null === (s = s.next) || s === l) {
                        if (null === (n = i.shared.pending)) break;
                        s = a.next = n.next, n.next = l, i.baseQueue = a = n, i.shared.pending = null
                    }
                }
            null === f ? u = v : f.next = c, i.baseState = u, i.baseQueue = f, he(o), t.expirationTime = o, t.memoizedState = v
        }
    }

    function Pj(t, $, e) {
        if (t = $.effects, $.effects = null, null !== t)
            for ($ = 0; $ < t.length; $++) {
                var r = t[$],
                    i = r.callback;
                if (null !== i) {
                    if (r.callback = null, r = i, i = e, "function" != typeof r) throw Error(aa(191, r));
                    r.call(i)
                }
            }
    }

    function Xd(t, $, e, r) {
        e = null == (e = e(r, $ = t.memoizedState)) ? $ : pa({}, $, e), t.memoizedState = e, 0 === t.expirationTime && (t.updateQueue.baseState = e)
    }

    function Qj(t, $, e, r, i, a, n) {
        return "function" == typeof (t = t.stateNode).shouldComponentUpdate ? t.shouldComponentUpdate(r, a, n) : !$.prototype || !$.prototype.isPureReactComponent || !Yc(e, r) || !Yc(i, a)
    }

    function Rj(t, $, e) {
        var r = !1,
            i = qb,
            a = $.contextType;
        return "object" == typeof a && null !== a ? a = Ha(a) : (i = ta($) ? Xb : na.current, a = (r = null != (r = $.contextTypes)) ? dc(t, i) : qb), $ = new $(e, a), t.memoizedState = null !== $.state && void 0 !== $.state ? $.state : null, $.updater = Ad, t.stateNode = $, $._reactInternalFiber = t, r && ((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext = i, t.__reactInternalMemoizedMaskedChildContext = a), $
    }

    function Sj(t, $, e, r) {
        t = $.state, "function" == typeof $.componentWillReceiveProps && $.componentWillReceiveProps(e, r), "function" == typeof $.UNSAFE_componentWillReceiveProps && $.UNSAFE_componentWillReceiveProps(e, r), $.state !== t && Ad.enqueueReplaceState($, $.state, null)
    }

    function _f(t, $, e, r) {
        var i = t.stateNode;
        i.props = e, i.state = t.memoizedState, i.refs = ui, Zf(t);
        var a = $.contextType;
        "object" == typeof a && null !== a ? i.context = Ha(a) : (a = ta($) ? Xb : na.current, i.context = dc(t, a)), Zc(t, e, i, r), i.state = t.memoizedState, "function" == typeof (a = $.getDerivedStateFromProps) && (Xd(t, $, a, e), i.state = t.memoizedState), "function" == typeof $.getDerivedStateFromProps || "function" == typeof i.getSnapshotBeforeUpdate || "function" != typeof i.UNSAFE_componentWillMount && "function" != typeof i.componentWillMount || ($ = i.state, "function" == typeof i.componentWillMount && i.componentWillMount(), "function" == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount(), $ !== i.state && Ad.enqueueReplaceState(i, i.state, null), Zc(t, e, i, r), i.state = t.memoizedState), "function" == typeof i.componentDidMount && (t.effectTag |= 4)
    }

    function $c(t, $, e) {
        if (null !== (t = e.ref) && "function" != typeof t && "object" != typeof t) {
            if (e._owner) {
                if (e = e._owner) {
                    if (1 !== e.tag) throw Error(aa(309));
                    var r = e.stateNode
                }
                if (!r) throw Error(aa(147, t));
                var i = "" + t;
                return null !== $ && null !== $.ref && "function" == typeof $.ref && $.ref._stringRef === i ? $.ref : (($ = function (t) {
                    var $ = r.refs;
                    $ === ui && ($ = r.refs = {}), null === t ? delete $[i] : $[i] = t
                })._stringRef = i, $)
            }
            if ("string" != typeof t) throw Error(aa(284));
            if (!e._owner) throw Error(aa(290, t))
        }
        return t
    }

    function Yd(t, $) {
        if ("textarea" !== t.type) throw Error(aa(31, "[object Object]" === Object.prototype.toString.call($) ? "object with keys {" + Object.keys($).join(", ") + "}" : $, ""))
    }

    function Tj(t) {
        function $($, e) {
            if (t) {
                var r = $.lastEffect;
                null !== r ? (r.nextEffect = e, $.lastEffect = e) : $.firstEffect = $.lastEffect = e, e.nextEffect = null, e.effectTag = 8
            }
        }

        function e(e, r) {
            if (!t) return null;
            for (; null !== r;) $(e, r), r = r.sibling;
            return null
        }

        function r(t, $) {
            for (t = new Map; null !== $;) null !== $.key ? t.set($.key, $) : t.set($.index, $), $ = $.sibling;
            return t
        }

        function i(t, $) {
            return (t = Ob(t, $)).index = 0, t.sibling = null, t
        }

        function a($, e, r) {
            return $.index = r, t ? null !== (r = $.alternate) ? (r = r.index) < e ? ($.effectTag = 2, e) : r : ($.effectTag = 2, e) : e
        }

        function n($) {
            return t && null === $.alternate && ($.effectTag = 2), $
        }

        function l(t, $, e, r) {
            return null === $ || 6 !== $.tag ? (($ = yg(e, t.mode, r)).return = t, $) : (($ = i($, e)).return = t, $)
        }

        function v(t, $, e, r) {
            return null !== $ && $.elementType === e.type ? ((r = i($, e.props)).ref = $c(t, $, e), r.return = t, r) : ((r = ie(e.type, e.key, e.props, null, t.mode, r)).ref = $c(t, $, e), r.return = t, r)
        }

        function o(t, $, e, r) {
            return null === $ || 4 !== $.tag || $.stateNode.containerInfo !== e.containerInfo || $.stateNode.implementation !== e.implementation ? (($ = zg(e, t.mode, r)).return = t, $) : (($ = i($, e.children || [])).return = t, $)
        }

        function u(t, $, e, r, a) {
            return null === $ || 7 !== $.tag ? (($ = xb(e, t.mode, r, a)).return = t, $) : (($ = i($, e)).return = t, $)
        }

        function c(t, $, e) {
            if ("string" == typeof $ || "number" == typeof $) return ($ = yg("" + $, t.mode, e)).return = t, $;
            if ("object" == typeof $ && null !== $) {
                switch ($.$$typeof) {
                    case pd:
                        return (e = ie($.type, $.key, $.props, null, t.mode, e)).ref = $c(t, null, $), e.return = t, e;
                    case Vb:
                        return ($ = zg($, t.mode, e)).return = t, $;
                }
                if (Bd($) || Rc($)) return ($ = xb($, t.mode, e, null)).return = t, $;
                Yd(t, $)
            }
            return null
        }

        function f(t, $, e, r) {
            var i = null !== $ ? $.key : null;
            if ("string" == typeof e || "number" == typeof e) return null !== i ? null : l(t, $, "" + e, r);
            if ("object" == typeof e && null !== e) {
                switch (e.$$typeof) {
                    case pd:
                        return e.key === i ? e.type === Cb ? u(t, $, e.props.children, r, i) : v(t, $, e, r) : null;
                    case Vb:
                        return e.key === i ? o(t, $, e, r) : null;
                }
                if (Bd(e) || Rc(e)) return null !== i ? null : u(t, $, e, r, null);
                Yd(t, e)
            }
            return null
        }

        function s(t, $, e, r, i) {
            if ("string" == typeof r || "number" == typeof r) return l($, t = t.get(e) || null, "" + r, i);
            if ("object" == typeof r && null !== r) {
                switch (r.$$typeof) {
                    case pd:
                        return t = t.get(null === r.key ? e : r.key) || null, r.type === Cb ? u($, t, r.props.children, i, r.key) : v($, t, r, i);
                    case Vb:
                        return o($, t = t.get(null === r.key ? e : r.key) || null, r, i);
                }
                if (Bd(r) || Rc(r)) return u($, t = t.get(e) || null, r, i, null);
                Yd($, r)
            }
            return null
        }

        function d(i, n, l, v) {
            for (var o = null, u = null, d = n, p = n = 0, h = null; null !== d && p < l.length; p++) {
                d.index > p ? (h = d, d = null) : h = d.sibling;
                var g = f(i, d, l[p], v);
                if (null === g) {
                    null === d && (d = h);
                    break
                }
                t && d && null === g.alternate && $(i, d), n = a(g, n, p), null === u ? o = g : u.sibling = g, u = g, d = h
            }
            if (p === l.length) return e(i, d), o;
            if (null === d) {
                for (; p < l.length; p++) null !== (d = c(i, l[p], v)) && (n = a(d, n, p), null === u ? o = d : u.sibling = d, u = d);
                return o
            }
            for (d = r(i, d); p < l.length; p++) null !== (h = s(d, i, p, l[p], v)) && (t && null !== h.alternate && d.delete(null === h.key ? p : h.key), n = a(h, n, p), null === u ? o = h : u.sibling = h, u = h);
            return t && d.forEach(function (t) {
                return $(i, t)
            }), o
        }

        function p(i, n, l, v) {
            var o = Rc(l);
            if ("function" != typeof o) throw Error(aa(150));
            if (null == (l = o.call(l))) throw Error(aa(151));
            for (var u = o = null, d = n, p = n = 0, h = null, g = l.next(); null !== d && !g.done; p++, g = l.next()) {
                d.index > p ? (h = d, d = null) : h = d.sibling;
                var m = f(i, d, g.value, v);
                if (null === m) {
                    null === d && (d = h);
                    break
                }
                t && d && null === m.alternate && $(i, d), n = a(m, n, p), null === u ? o = m : u.sibling = m, u = m, d = h
            }
            if (g.done) return e(i, d), o;
            if (null === d) {
                for (; !g.done; p++, g = l.next()) null !== (g = c(i, g.value, v)) && (n = a(g, n, p), null === u ? o = g : u.sibling = g, u = g);
                return o
            }
            for (d = r(i, d); !g.done; p++, g = l.next()) null !== (g = s(d, i, p, g.value, v)) && (t && null !== g.alternate && d.delete(null === g.key ? p : g.key), n = a(g, n, p), null === u ? o = g : u.sibling = g, u = g);
            return t && d.forEach(function (t) {
                return $(i, t)
            }), o
        }
        return function (t, r, a, l) {
            var v = "object" == typeof a && null !== a && a.type === Cb && null === a.key;
            v && (a = a.props.children);
            var o = "object" == typeof a && null !== a;
            if (o) switch (a.$$typeof) {
                case pd:
                    t: {
                        for (o = a.key, v = r; null !== v;) {
                            if (v.key === o) {
                                switch (v.tag) {
                                    case 7:
                                        if (a.type === Cb) {
                                            e(t, v.sibling), (r = i(v, a.props.children)).return = t, t = r;
                                            break t
                                        }
                                        break;
                                    default:
                                        if (v.elementType === a.type) {
                                            e(t, v.sibling), (r = i(v, a.props)).ref = $c(t, v, a), r.return = t, t = r;
                                            break t
                                        }
                                }
                                e(t, v);
                                break
                            }
                            $(t, v), v = v.sibling
                        }
                        a.type === Cb ? ((r = xb(a.props.children, t.mode, l, a.key)).return = t, t = r) : ((l = ie(a.type, a.key, a.props, null, t.mode, l)).ref = $c(t, r, a), l.return = t, t = l)
                    }
                    return n(t);
                case Vb:
                    t: {
                        for (v = a.key; null !== r;) {
                            if (r.key === v) {
                                if (4 === r.tag && r.stateNode.containerInfo === a.containerInfo && r.stateNode.implementation === a.implementation) {
                                    e(t, r.sibling), (r = i(r, a.children || [])).return = t, t = r;
                                    break t
                                }
                                e(t, r);
                                break
                            }
                            $(t, r), r = r.sibling
                        }(r = zg(a, t.mode, l)).return = t,
                        t = r
                    }
                    return n(t);
            }
            if ("string" == typeof a || "number" == typeof a) return a = "" + a, null !== r && 6 === r.tag ? (e(t, r.sibling), (r = i(r, a)).return = t, t = r) : (e(t, r), (r = yg(a, t.mode, l)).return = t, t = r), n(t);
            if (Bd(a)) return d(t, r, a, l);
            if (Rc(a)) return p(t, r, a, l);
            if (o && Yd(t, a), void 0 === a && !v) switch (t.tag) {
                case 1:
                case 0:
                    throw t = t.type, Error(aa(152, t.displayName || t.name || "Component"));
            }
            return e(t, r)
        }
    }

    function Ib(t) {
        if (t === Mc) throw Error(aa(174));
        return t
    }

    function ag(t, $) {
        switch (ja(Oc, $), ja(Nc, t), ja(Va, Mc), t = $.nodeType) {
            case 9:
            case 11:
                $ = ($ = $.documentElement) ? $.namespaceURI : Hf(null, "");
                break;
            default:
                $ = Hf($ = (t = 8 === t ? $.parentNode : $).namespaceURI || null, t = t.tagName);
        }
        ga(Va), ja(Va, $)
    }

    function fc() {
        ga(Va), ga(Nc), ga(Oc)
    }

    function Uj(t) {
        Ib(Oc.current);
        var $ = Ib(Va.current),
            e = Hf($, t.type);
        $ !== e && (ja(Nc, t), ja(Va, e))
    }

    function bg(t) {
        Nc.current === t && (ga(Va), ga(Nc))
    }

    function Zd(t) {
        for (var $ = t; null !== $;) {
            if (13 === $.tag) {
                var e = $.memoizedState;
                if (null !== e && (null === (e = e.dehydrated) || e.data === ff || e.data === gf)) return $
            } else if (19 === $.tag && void 0 !== $.memoizedProps.revealOrder) {
                if (0 != (64 & $.effectTag)) return $
            } else if (null !== $.child) {
                $.child.return = $, $ = $.child;
                continue
            }
            if ($ === t) break;
            for (; null === $.sibling;) {
                if (null === $.return || $.return === t) return null;
                $ = $.return
            }
            $.sibling.return = $.return, $ = $.sibling
        }
        return null
    }

    function cg(t, $) {
        return {
            responder: t,
            props: $
        }
    }

    function va() {
        throw Error(aa(321))
    }

    function dg(t, $) {
        if (null === $) return !1;
        for (var e = 0; e < $.length && e < t.length; e++)
            if (!Db(t[e], $[e])) return !1;
        return !0
    }

    function eg(t, $, e, r, i, a) {
        if (Pc = a, oa = $, $.memoizedState = null, $.updateQueue = null, $.expirationTime = 0, Cd.current = null === t || null === t.memoizedState ? dp : ep, t = e(r, i), $.expirationTime === Pc) {
            a = 0;
            do {
                if ($.expirationTime = 0, !(25 > a)) throw Error(aa(301));
                a += 1, rb = Wa = null, $.updateQueue = null, Cd.current = fp, t = e(r, i)
            } while ($.expirationTime === Pc)
        }
        if (Cd.current = Dd, $ = null !== Wa && null !== Wa.next, Pc = 0, rb = Wa = oa = null, cp = !1, $) throw Error(aa(300));
        return t
    }

    function gc() {
        var t = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return null === rb ? oa.memoizedState = rb = t : rb = rb.next = t, rb
    }

    function hc() {
        if (null === Wa) {
            var t = oa.alternate;
            t = null !== t ? t.memoizedState : null
        } else t = Wa.next;
        var $ = null === rb ? oa.memoizedState : rb.next;
        if (null !== $) rb = $, Wa = t;
        else {
            if (null === t) throw Error(aa(310));
            t = {
                memoizedState: (Wa = t).memoizedState,
                baseState: Wa.baseState,
                baseQueue: Wa.baseQueue,
                queue: Wa.queue,
                next: null
            }, null === rb ? oa.memoizedState = rb = t : rb = rb.next = t
        }
        return rb
    }

    function Jb(t, $) {
        return "function" == typeof $ ? $(t) : $
    }

    function $d(t) {
        var $ = hc(),
            e = $.queue;
        if (null === e) throw Error(aa(311));
        e.lastRenderedReducer = t;
        var r = Wa,
            i = r.baseQueue,
            a = e.pending;
        if (null !== a) {
            if (null !== i) {
                var n = i.next;
                i.next = a.next, a.next = n
            }
            r.baseQueue = i = a, e.pending = null
        }
        if (null !== i) {
            i = i.next, r = r.baseState;
            var l = n = a = null,
                v = i;
            do {
                var o = v.expirationTime;
                if (o < Pc) {
                    var u = {
                        expirationTime: v.expirationTime,
                        suspenseConfig: v.suspenseConfig,
                        action: v.action,
                        eagerReducer: v.eagerReducer,
                        eagerState: v.eagerState,
                        next: null
                    };
                    null === l ? (n = l = u, a = r) : l = l.next = u, o > oa.expirationTime && (oa.expirationTime = o, he(o))
                } else null !== l && (l = l.next = {
                    expirationTime: 1073741823,
                    suspenseConfig: v.suspenseConfig,
                    action: v.action,
                    eagerReducer: v.eagerReducer,
                    eagerState: v.eagerState,
                    next: null
                }), Dk(o, v.suspenseConfig), r = v.eagerReducer === t ? v.eagerState : t(r, v.action);
                v = v.next
            } while (null !== v && v !== i);
            null === l ? a = r : l.next = n, Db(r, $.memoizedState) || (xi = !0), $.memoizedState = r, $.baseState = a, $.baseQueue = l, e.lastRenderedState = r
        }
        return [$.memoizedState, e.dispatch]
    }

    function _d(t) {
        var $ = hc(),
            e = $.queue;
        if (null === e) throw Error(aa(311));
        e.lastRenderedReducer = t;
        var r = e.dispatch,
            i = e.pending,
            a = $.memoizedState;
        if (null !== i) {
            e.pending = null;
            var n = i = i.next;
            do {
                a = t(a, n.action), n = n.next
            } while (n !== i);
            Db(a, $.memoizedState) || (xi = !0), $.memoizedState = a, null === $.baseQueue && ($.baseState = a), e.lastRenderedState = a
        }
        return [a, r]
    }

    function fg(t) {
        var $ = gc();
        return "function" == typeof t && (t = t()), $.memoizedState = $.baseState = t, t = (t = $.queue = {
            pending: null,
            dispatch: null,
            lastRenderedReducer: Jb,
            lastRenderedState: t
        }).dispatch = ak.bind(null, oa, t), [$.memoizedState, t]
    }

    function gg(t, $, e, r) {
        return t = {
            tag: t,
            create: $,
            destroy: e,
            deps: r,
            next: null
        }, null === ($ = oa.updateQueue) ? ($ = {
            lastEffect: null
        }, oa.updateQueue = $, $.lastEffect = t.next = t) : null === (e = $.lastEffect) ? $.lastEffect = t.next = t : (r = e.next, e.next = t, t.next = r, $.lastEffect = t), t
    }

    function Vj() {
        return hc().memoizedState
    }

    function hg(t, $, e, r) {
        var i = gc();
        oa.effectTag |= t, i.memoizedState = gg(1 | $, e, void 0, void 0 === r ? null : r)
    }

    function ig(t, $, e, r) {
        var i = hc();
        r = void 0 === r ? null : r;
        var a = void 0;
        if (null !== Wa) {
            var n = Wa.memoizedState;
            if (a = n.destroy, null !== r && dg(r, n.deps)) return void gg($, e, a, r)
        }
        oa.effectTag |= t, i.memoizedState = gg(1 | $, e, a, r)
    }

    function Wj(t, $) {
        return hg(516, 4, t, $)
    }

    function ae(t, $) {
        return ig(516, 4, t, $)
    }

    function Xj(t, $) {
        return ig(4, 2, t, $)
    }

    function Yj(t, $) {
        return "function" == typeof $ ? (t = t(), $(t), function () {
            $(null)
        }) : null != $ ? (t = t(), $.current = t, function () {
            $.current = null
        }) : void 0
    }

    function Zj(t, $, e) {
        return e = null != e ? e.concat([t]) : null, ig(4, 2, Yj.bind(null, $, t), e)
    }

    function jg() {}

    function $j(t, $) {
        return gc().memoizedState = [t, void 0 === $ ? null : $], t
    }

    function be(t, $) {
        var e = hc();
        $ = void 0 === $ ? null : $;
        var r = e.memoizedState;
        return null !== r && null !== $ && dg($, r[1]) ? r[0] : (e.memoizedState = [t, $], t)
    }

    function _j(t, $) {
        var e = hc();
        $ = void 0 === $ ? null : $;
        var r = e.memoizedState;
        return null !== r && null !== $ && dg($, r[1]) ? r[0] : (t = t(), e.memoizedState = [t, $], t)
    }

    function kg(t, $, e) {
        var r = Vd();
        tb(98 > r ? 98 : r, function () {
            t(!0)
        }), tb(97 < r ? 97 : r, function () {
            var r = Ea.suspense;
            Ea.suspense = void 0 === $ ? null : $;
            try {
                t(!1), e()
            } finally {
                Ea.suspense = r
            }
        })
    }

    function ak(t, $, e) {
        var r = Za(),
            i = Lc.suspense;
        i = {
            expirationTime: r = Kb(r, t, i),
            suspenseConfig: i,
            action: e,
            eagerReducer: null,
            eagerState: null,
            next: null
        };
        var a = $.pending;
        if (null === a ? i.next = i : (i.next = a.next, a.next = i), $.pending = i, a = t.alternate, t === oa || null !== a && a === oa) cp = !0, i.expirationTime = Pc, oa.expirationTime = Pc;
        else {
            if (0 === t.expirationTime && (null === a || 0 === a.expirationTime) && null !== (a = $.lastRenderedReducer)) try {
                var n = $.lastRenderedState,
                    l = a(n, e);
                if (i.eagerReducer = a, i.eagerState = l, Db(l, n)) return
            } catch (v) {}
            wb(t, r)
        }
    }

    function bk(t, $) {
        var e = $a(5, null, null, 0);
        e.elementType = "DELETED", e.type = "DELETED", e.stateNode = $, e.return = t, e.effectTag = 8, null !== t.lastEffect ? (t.lastEffect.nextEffect = e, t.lastEffect = e) : t.firstEffect = t.lastEffect = e
    }

    function ck(t, $) {
        switch (t.tag) {
            case 5:
                var e = t.type;
                return null !== ($ = 1 !== $.nodeType || e.toLowerCase() !== $.nodeName.toLowerCase() ? null : $) && (t.stateNode = $, !0);
            case 6:
                return null !== ($ = "" === t.pendingProps || 3 !== $.nodeType ? null : $) && (t.stateNode = $, !0);
            case 13:
            default:
                return !1;
        }
    }

    function lg(t) {
        if (wi) {
            var $ = vi;
            if ($) {
                var e = $;
                if (!ck(t, $)) {
                    if (!($ = bc(e.nextSibling)) || !ck(t, $)) return t.effectTag = -1025 & t.effectTag | 2, wi = !1, void(qf = t);
                    bk(qf, e)
                }
                qf = t, vi = bc($.firstChild)
            } else t.effectTag = -1025 & t.effectTag | 2, wi = !1, qf = t
        }
    }

    function dk(t) {
        for (t = t.return; null !== t && 5 !== t.tag && 3 !== t.tag && 13 !== t.tag;) t = t.return;
        qf = t
    }

    function ce(t) {
        if (t !== qf) return !1;
        if (!wi) return dk(t), wi = !0, !1;
        var $ = t.type;
        if (5 !== t.tag || "head" !== $ && "body" !== $ && !Tf($, t.memoizedProps))
            for ($ = vi; $;) bk(t, $), $ = bc($.nextSibling);
        if (dk(t), 13 === t.tag) {
            if (!(t = null !== (t = t.memoizedState) ? t.dehydrated : null)) throw Error(aa(317));
            t: {
                for (t = t.nextSibling, $ = 0; t;) {
                    if (8 === t.nodeType) {
                        var e = t.data;
                        if (e === _h) {
                            if (0 === $) {
                                vi = bc(t.nextSibling);
                                break t
                            }
                            $--
                        } else e !== $h && e !== gf && e !== ff || $++
                    }
                    t = t.nextSibling
                }
                vi = null
            }
        } else vi = qf ? bc(t.stateNode.nextSibling) : null;
        return !0
    }

    function mg() {
        vi = qf = null, wi = !1
    }

    function Ia(t, $, e, r) {
        $.child = null === t ? pf($, null, e, r) : Zb($, t.child, e, r)
    }

    function ek(t, $, e, r, i) {
        e = e.render;
        var a = $.ref;
        return ec($, i), r = eg(t, $, e, r, a, i), null === t || xi ? ($.effectTag |= 1, Ia(t, $, r, i), $.child) : ($.updateQueue = t.updateQueue, $.effectTag &= -517, t.expirationTime <= i && (t.expirationTime = 0), kb(t, $, i))
    }

    function fk(t, $, e, r, i, a) {
        if (null === t) {
            var n = e.type;
            return "function" != typeof n || xg(n) || void 0 !== n.defaultProps || null !== e.compare || void 0 !== e.defaultProps ? ((t = ie(e.type, null, r, null, $.mode, a)).ref = $.ref, t.return = $, $.child = t) : ($.tag = 15, $.type = n, gk(t, $, n, r, i, a))
        }
        return n = t.child, i < a && (i = n.memoizedProps, (e = null !== (e = e.compare) ? e : Yc)(i, r) && t.ref === $.ref) ? kb(t, $, a) : ($.effectTag |= 1, (t = Ob(n, r)).ref = $.ref, t.return = $, $.child = t)
    }

    function gk(t, $, e, r, i, a) {
        return null !== t && Yc(t.memoizedProps, r) && t.ref === $.ref && (xi = !1, i < a) ? ($.expirationTime = t.expirationTime, kb(t, $, a)) : ng(t, $, e, r, a)
    }

    function hk(t, $) {
        var e = $.ref;
        (null === t && null !== e || null !== t && t.ref !== e) && ($.effectTag |= 128)
    }

    function ng(t, $, e, r, i) {
        var a = ta(e) ? Xb : na.current;
        return a = dc($, a), ec($, i), e = eg(t, $, e, r, a, i), null === t || xi ? ($.effectTag |= 1, Ia(t, $, e, i), $.child) : ($.updateQueue = t.updateQueue, $.effectTag &= -517, t.expirationTime <= i && (t.expirationTime = 0), kb(t, $, i))
    }

    function ik(t, $, e, r, i) {
        if (ta(e)) {
            var a = !0;
            Ud($)
        } else a = !1;
        if (ec($, i), null === $.stateNode) null !== t && (t.alternate = null, $.alternate = null, $.effectTag |= 2), Rj($, e, r), _f($, e, r, i), r = !0;
        else if (null === t) {
            var n = $.stateNode,
                l = $.memoizedProps;
            n.props = l;
            var v = n.context,
                o = e.contextType;
            "object" == typeof o && null !== o ? o = Ha(o) : o = dc($, o = ta(e) ? Xb : na.current);
            var u = e.getDerivedStateFromProps,
                c = "function" == typeof u || "function" == typeof n.getSnapshotBeforeUpdate;
            c || "function" != typeof n.UNSAFE_componentWillReceiveProps && "function" != typeof n.componentWillReceiveProps || (l !== r || v !== o) && Sj($, n, r, o), zd = !1;
            var f = $.memoizedState;
            n.state = f, Zc($, r, n, i), v = $.memoizedState, l !== r || f !== v || sa.current || zd ? ("function" == typeof u && (Xd($, e, u, r), v = $.memoizedState), (l = zd || Qj($, e, l, r, f, v, o)) ? (c || "function" != typeof n.UNSAFE_componentWillMount && "function" != typeof n.componentWillMount || ("function" == typeof n.componentWillMount && n.componentWillMount(), "function" == typeof n.UNSAFE_componentWillMount && n.UNSAFE_componentWillMount()), "function" == typeof n.componentDidMount && ($.effectTag |= 4)) : ("function" == typeof n.componentDidMount && ($.effectTag |= 4), $.memoizedProps = r, $.memoizedState = v), n.props = r, n.state = v, n.context = o, r = l) : ("function" == typeof n.componentDidMount && ($.effectTag |= 4), r = !1)
        } else n = $.stateNode, $f(t, $), l = $.memoizedProps, n.props = $.type === $.elementType ? l : Pa($.type, l), v = n.context, "object" == typeof (o = e.contextType) && null !== o ? o = Ha(o) : o = dc($, o = ta(e) ? Xb : na.current), (c = "function" == typeof (u = e.getDerivedStateFromProps) || "function" == typeof n.getSnapshotBeforeUpdate) || "function" != typeof n.UNSAFE_componentWillReceiveProps && "function" != typeof n.componentWillReceiveProps || (l !== r || v !== o) && Sj($, n, r, o), zd = !1, v = $.memoizedState, n.state = v, Zc($, r, n, i), f = $.memoizedState, l !== r || v !== f || sa.current || zd ? ("function" == typeof u && (Xd($, e, u, r), f = $.memoizedState), (u = zd || Qj($, e, l, r, v, f, o)) ? (c || "function" != typeof n.UNSAFE_componentWillUpdate && "function" != typeof n.componentWillUpdate || ("function" == typeof n.componentWillUpdate && n.componentWillUpdate(r, f, o), "function" == typeof n.UNSAFE_componentWillUpdate && n.UNSAFE_componentWillUpdate(r, f, o)), "function" == typeof n.componentDidUpdate && ($.effectTag |= 4), "function" == typeof n.getSnapshotBeforeUpdate && ($.effectTag |= 256)) : ("function" != typeof n.componentDidUpdate || l === t.memoizedProps && v === t.memoizedState || ($.effectTag |= 4), "function" != typeof n.getSnapshotBeforeUpdate || l === t.memoizedProps && v === t.memoizedState || ($.effectTag |= 256), $.memoizedProps = r, $.memoizedState = f), n.props = r, n.state = f, n.context = o, r = u) : ("function" != typeof n.componentDidUpdate || l === t.memoizedProps && v === t.memoizedState || ($.effectTag |= 4), "function" != typeof n.getSnapshotBeforeUpdate || l === t.memoizedProps && v === t.memoizedState || ($.effectTag |= 256), r = !1);
        return og(t, $, e, r, a, i)
    }

    function og(t, $, e, r, i, a) {
        hk(t, $);
        var n = 0 != (64 & $.effectTag);
        if (!r && !n) return i && Ij($, e, !1), kb(t, $, a);
        r = $.stateNode, gp.current = $;
        var l = n && "function" != typeof e.getDerivedStateFromError ? null : r.render();
        return $.effectTag |= 1, null !== t && n ? ($.child = Zb($, t.child, null, a), $.child = Zb($, null, l, a)) : Ia(t, $, l, a), $.memoizedState = r.state, i && Ij($, e, !0), $.child
    }

    function jk(t) {
        var $ = t.stateNode;
        $.pendingContext ? Gj(t, $.pendingContext, $.pendingContext !== $.context) : $.context && Gj(t, $.context, !1), ag(t, $.containerInfo)
    }

    function kk(t, $, e) {
        var r, i = $.mode,
            a = $.pendingProps,
            n = ia.current,
            l = !1;
        if ((r = 0 != (64 & $.effectTag)) || (r = 0 != (2 & n) && (null === t || null !== t.memoizedState)), r ? (l = !0, $.effectTag &= -65) : null !== t && null === t.memoizedState || void 0 === a.fallback || !0 === a.unstable_avoidThisFallback || (n |= 1), ja(ia, 1 & n), null === t) {
            if (void 0 !== a.fallback && lg($), l) {
                if (l = a.fallback, (a = xb(null, i, 0, null)).return = $, 0 == (2 & $.mode))
                    for (t = null !== $.memoizedState ? $.child.child : $.child, a.child = t; null !== t;) t.return = a, t = t.sibling;
                return (e = xb(l, i, e, null)).return = $, a.sibling = e, $.memoizedState = rf, $.child = a, e
            }
            return i = a.children, $.memoizedState = null, $.child = pf($, null, i, e)
        }
        if (null !== t.memoizedState) {
            if (i = (t = t.child).sibling, l) {
                if (a = a.fallback, (e = Ob(t, t.pendingProps)).return = $, 0 == (2 & $.mode) && (l = null !== $.memoizedState ? $.child.child : $.child) !== t.child)
                    for (e.child = l; null !== l;) l.return = e, l = l.sibling;
                return (i = Ob(i, a)).return = $, e.sibling = i, e.childExpirationTime = 0, $.memoizedState = rf, $.child = e, i
            }
            return e = Zb($, t.child, a.children, e), $.memoizedState = null, $.child = e
        }
        if (t = t.child, l) {
            if (l = a.fallback, (a = xb(null, i, 0, null)).return = $, a.child = t, null !== t && (t.return = a), 0 == (2 & $.mode))
                for (t = null !== $.memoizedState ? $.child.child : $.child, a.child = t; null !== t;) t.return = a, t = t.sibling;
            return (e = xb(l, i, e, null)).return = $, a.sibling = e, e.effectTag |= 2, a.childExpirationTime = 0, $.memoizedState = rf, $.child = a, e
        }
        return $.memoizedState = null, $.child = Zb($, t, a.children, e)
    }

    function lk(t, $) {
        t.expirationTime < $ && (t.expirationTime = $);
        var e = t.alternate;
        null !== e && e.expirationTime < $ && (e.expirationTime = $), Nj(t.return, $)
    }

    function pg(t, $, e, r, i, a) {
        var n = t.memoizedState;
        null === n ? t.memoizedState = {
            isBackwards: $,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: e,
            tailExpiration: 0,
            tailMode: i,
            lastEffect: a
        } : (n.isBackwards = $, n.rendering = null, n.renderingStartTime = 0, n.last = r, n.tail = e, n.tailExpiration = 0, n.tailMode = i, n.lastEffect = a)
    }

    function mk(t, $, e) {
        var r = $.pendingProps,
            i = r.revealOrder,
            a = r.tail;
        if (Ia(t, $, r.children, e), 0 != (2 & (r = ia.current))) r = 1 & r | 2, $.effectTag |= 64;
        else {
            if (null !== t && 0 != (64 & t.effectTag)) t: for (t = $.child; null !== t;) {
                if (13 === t.tag) null !== t.memoizedState && lk(t, e);
                else if (19 === t.tag) lk(t, e);
                else if (null !== t.child) {
                    t.child.return = t, t = t.child;
                    continue
                }
                if (t === $) break t;
                for (; null === t.sibling;) {
                    if (null === t.return || t.return === $) break t;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
            r &= 1
        }
        if (ja(ia, r), 0 == (2 & $.mode)) $.memoizedState = null;
        else switch (i) {
            case "forwards":
                for (e = $.child, i = null; null !== e;) null !== (t = e.alternate) && null === Zd(t) && (i = e), e = e.sibling;
                null === (e = i) ? (i = $.child, $.child = null) : (i = e.sibling, e.sibling = null), pg($, !1, i, e, a, $.lastEffect);
                break;
            case "backwards":
                for (e = null, i = $.child, $.child = null; null !== i;) {
                    if (null !== (t = i.alternate) && null === Zd(t)) {
                        $.child = i;
                        break
                    }
                    t = i.sibling, i.sibling = e, e = i, i = t
                }
                pg($, !0, e, null, a, $.lastEffect);
                break;
            case "together":
                pg($, !1, null, null, void 0, $.lastEffect);
                break;
            default:
                $.memoizedState = null;
        }
        return $.child
    }

    function kb(t, $, e) {
        null !== t && ($.dependencies = t.dependencies);
        var r = $.expirationTime;
        if (0 !== r && he(r), $.childExpirationTime < e) return null;
        if (null !== t && $.child !== t.child) throw Error(aa(153));
        if (null !== $.child) {
            for (e = Ob(t = $.child, t.pendingProps), $.child = e, e.return = $; null !== t.sibling;) t = t.sibling, (e = e.sibling = Ob(t, t.pendingProps)).return = $;
            e.sibling = null
        }
        return $.child
    }

    function de(t, $) {
        switch (t.tailMode) {
            case "hidden":
                $ = t.tail;
                for (var e = null; null !== $;) null !== $.alternate && (e = $), $ = $.sibling;
                null === e ? t.tail = null : e.sibling = null;
                break;
            case "collapsed":
                e = t.tail;
                for (var r = null; null !== e;) null !== e.alternate && (r = e), e = e.sibling;
                null === r ? $ || null === t.tail ? t.tail = null : t.tail.sibling = null : r.sibling = null;
        }
    }

    function hq(t, $, e) {
        var r = $.pendingProps;
        switch ($.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return null;
            case 1:
                return ta($.type) && Td(), null;
            case 3:
                return fc(), ga(sa), ga(na), (e = $.stateNode).pendingContext && (e.context = e.pendingContext, e.pendingContext = null), null !== t && null !== t.child || !ce($) || ($.effectTag |= 4), yi($), null;
            case 5:
                bg($), e = Ib(Oc.current);
                var i = $.type;
                if (null !== t && null != $.stateNode) ip(t, $, i, r, e), t.ref !== $.ref && ($.effectTag |= 128);
                else {
                    if (!r) {
                        if (null === $.stateNode) throw Error(aa(166));
                        return null
                    }
                    if (t = Ib(Va.current), ce($)) {
                        r = $.stateNode, i = $.type;
                        var a = $.memoizedProps;
                        switch (r[pb] = $, r[td] = a, i) {
                            case "iframe":
                            case "object":
                            case "embed":
                                fa("load", r);
                                break;
                            case "video":
                            case "audio":
                                for (t = 0; t < xc.length; t++) fa(xc[t], r);
                                break;
                            case "source":
                                fa("error", r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                fa("error", r), fa("load", r);
                                break;
                            case "form":
                                fa("reset", r), fa("submit", r);
                                break;
                            case "details":
                                fa("toggle", r);
                                break;
                            case "input":
                                Yi(r, a), fa("invalid", r), ib(e, "onChange");
                                break;
                            case "select":
                                r._wrapperState = {
                                    wasMultiple: !!a.multiple
                                }, fa("invalid", r), ib(e, "onChange");
                                break;
                            case "textarea":
                                _i(r, a), fa("invalid", r), ib(e, "onChange");
                        }
                        for (var n in Pf(i, a), t = null, a)
                            if (a.hasOwnProperty(n)) {
                                var l = a[n];
                                "children" === n ? "string" == typeof l ? r.textContent !== l && (t = ["children", l]) : "number" == typeof l && r.textContent !== "" + l && (t = ["children", "" + l]) : Ub.hasOwnProperty(n) && null != l && ib(e, n)
                            } switch (i) {
                            case "input":
                                Id(r), $i(r, a, !0);
                                break;
                            case "textarea":
                                Id(r), bj(r);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                "function" == typeof a.onClick && (r.onclick = Od);
                        }
                        e = t, $.updateQueue = e, null !== e && ($.effectTag |= 4)
                    } else {
                        switch (n = 9 === e.nodeType ? e : e.ownerDocument, t === Zh && (t = cj(i)), t === Zh ? "script" === i ? ((t = n.createElement("div")).innerHTML = "<script></script>", t = t.removeChild(t.firstChild)) : "string" == typeof r.is ? t = n.createElement(i, {
                            is: r.is
                        }) : (t = n.createElement(i), "select" === i && (n = t, r.multiple ? n.multiple = !0 : r.size && (n.size = r.size))) : t = n.createElementNS(t, i), t[pb] = $, t[td] = r, hp(t, $, !1, !1), $.stateNode = t, n = Qf(i, r), i) {
                            case "iframe":
                            case "object":
                            case "embed":
                                fa("load", t), l = r;
                                break;
                            case "video":
                            case "audio":
                                for (l = 0; l < xc.length; l++) fa(xc[l], t);
                                l = r;
                                break;
                            case "source":
                                fa("error", t), l = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                fa("error", t), fa("load", t), l = r;
                                break;
                            case "form":
                                fa("reset", t), fa("submit", t), l = r;
                                break;
                            case "details":
                                fa("toggle", t), l = r;
                                break;
                            case "input":
                                Yi(t, r), l = Cf(t, r), fa("invalid", t), ib(e, "onChange");
                                break;
                            case "option":
                                l = Ff(t, r);
                                break;
                            case "select":
                                t._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, l = pa({}, r, {
                                    value: void 0
                                }), fa("invalid", t), ib(e, "onChange");
                                break;
                            case "textarea":
                                _i(t, r), l = Gf(t, r), fa("invalid", t), ib(e, "onChange");
                                break;
                            default:
                                l = r;
                        }
                        Pf(i, l);
                        var v = l;
                        for (a in v)
                            if (v.hasOwnProperty(a)) {
                                var o = v[a];
                                "style" === a ? oj(t, o) : "dangerouslySetInnerHTML" === a ? null != (o = o ? o.__html : void 0) && Ph(t, o) : "children" === a ? "string" == typeof o ? ("textarea" !== i || "" !== o) && Sc(t, o) : "number" == typeof o && Sc(t, "" + o) : "suppressContentEditableWarning" !== a && "suppressHydrationWarning" !== a && "autoFocus" !== a && (Ub.hasOwnProperty(a) ? null != o && ib(e, a) : null != o && Af(t, a, o, n))
                            } switch (i) {
                            case "input":
                                Id(t), $i(t, r, !1);
                                break;
                            case "textarea":
                                Id(t), bj(t);
                                break;
                            case "option":
                                null != r.value && t.setAttribute("value", "" + sb(r.value));
                                break;
                            case "select":
                                t.multiple = !!r.multiple, null != (e = r.value) ? _b(t, !!r.multiple, e, !1) : null != r.defaultValue && _b(t, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                "function" == typeof l.onClick && (t.onclick = Od);
                        }
                        tj(i, r) && ($.effectTag |= 4)
                    }
                    null !== $.ref && ($.effectTag |= 128)
                }
                return null;
            case 6:
                if (t && null != $.stateNode) jp(t, $, t.memoizedProps, r);
                else {
                    if ("string" != typeof r && null === $.stateNode) throw Error(aa(166));
                    e = Ib(Oc.current), Ib(Va.current), ce($) ? (e = $.stateNode, r = $.memoizedProps, e[pb] = $, e.nodeValue !== r && ($.effectTag |= 4)) : ((e = (9 === e.nodeType ? e : e.ownerDocument).createTextNode(r))[pb] = $, $.stateNode = e)
                }
                return null;
            case 13:
                return ga(ia), r = $.memoizedState, 0 != (64 & $.effectTag) ? ($.expirationTime = e, $) : (e = null !== r, r = !1, null === t ? void 0 !== $.memoizedProps.fallback && ce($) : (r = null !== (i = t.memoizedState), e || null === i || null !== (i = t.child.sibling) && (null !== (a = $.firstEffect) ? ($.firstEffect = i, i.nextEffect = a) : ($.firstEffect = $.lastEffect = i, i.nextEffect = null), i.effectTag = 8)), e && !r && 0 != (2 & $.mode) && (null === t && !0 !== $.memoizedProps.unstable_avoidThisFallback || 0 != (1 & ia.current) ? Ga === Eb && (Ga = Gd) : (Ga !== Eb && Ga !== Gd || (Ga = Hd), 0 !== vf && null !== gb && (Pb(gb, Fa), Ik(gb, vf)))), (e || r) && ($.effectTag |= 4), null);
            case 4:
                return fc(), yi($), null;
            case 10:
                return Yf($), null;
            case 17:
                return ta($.type) && Td(), null;
            case 19:
                if (ga(ia), null === (r = $.memoizedState)) return null;
                if (i = 0 != (64 & $.effectTag), null === (a = r.rendering)) {
                    if (i) de(r, !1);
                    else if (Ga !== Eb || null !== t && 0 != (64 & t.effectTag))
                        for (a = $.child; null !== a;) {
                            if (null !== (t = Zd(a))) {
                                for ($.effectTag |= 64, de(r, !1), null !== (i = t.updateQueue) && ($.updateQueue = i, $.effectTag |= 4), null === r.lastEffect && ($.firstEffect = null), $.lastEffect = r.lastEffect, r = $.child; null !== r;) a = e, (i = r).effectTag &= 2, i.nextEffect = null, i.firstEffect = null, i.lastEffect = null, null === (t = i.alternate) ? (i.childExpirationTime = 0, i.expirationTime = a, i.child = null, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null) : (i.childExpirationTime = t.childExpirationTime, i.expirationTime = t.expirationTime, i.child = t.child, i.memoizedProps = t.memoizedProps, i.memoizedState = t.memoizedState, i.updateQueue = t.updateQueue, a = t.dependencies, i.dependencies = null === a ? null : {
                                    expirationTime: a.expirationTime,
                                    firstContext: a.firstContext,
                                    responders: a.responders
                                }), r = r.sibling;
                                return ja(ia, 1 & ia.current | 2), $.child
                            }
                            a = a.sibling
                        }
                } else {
                    if (!i)
                        if (null !== (t = Zd(a))) {
                            if ($.effectTag |= 64, i = !0, null !== (e = t.updateQueue) && ($.updateQueue = e, $.effectTag |= 4), de(r, !0), null === r.tail && "hidden" === r.tailMode && !a.alternate) return null !== ($ = $.lastEffect = r.lastEffect) && ($.nextEffect = null), null
                        } else 2 * Da() - r.renderingStartTime > r.tailExpiration && 1 < e && ($.effectTag |= 64, i = !0, de(r, !1), $.expirationTime = $.childExpirationTime = e - 1);
                    r.isBackwards ? (a.sibling = $.child, $.child = a) : (null !== (e = r.last) ? e.sibling = a : $.child = a, r.last = a)
                }
                return null !== r.tail ? (0 === r.tailExpiration && (r.tailExpiration = Da() + 500), e = r.tail, r.rendering = e, r.tail = e.sibling, r.lastEffect = $.lastEffect, r.renderingStartTime = Da(), e.sibling = null, $ = ia.current, ja(ia, i ? 1 & $ | 2 : 1 & $), e) : null;
        }
        throw Error(aa(156, $.tag))
    }

    function iq(t) {
        switch (t.tag) {
            case 1:
                ta(t.type) && Td();
                var $ = t.effectTag;
                return 4096 & $ ? (t.effectTag = -4097 & $ | 64, t) : null;
            case 3:
                if (fc(), ga(sa), ga(na), 0 != (64 & ($ = t.effectTag))) throw Error(aa(285));
                return t.effectTag = -4097 & $ | 64, t;
            case 5:
                return bg(t), null;
            case 13:
                return ga(ia), 4096 & ($ = t.effectTag) ? (t.effectTag = -4097 & $ | 64, t) : null;
            case 19:
                return ga(ia), null;
            case 4:
                return fc(), null;
            case 10:
                return Yf(t), null;
            default:
                return null;
        }
    }

    function qg(t, $) {
        return {
            value: t,
            source: $,
            stack: Bf($)
        }
    }

    function rg(t, $) {
        var e = $.source,
            r = $.stack;
        null === r && null !== e && (r = Bf(e)), null !== e && hb(e.type), $ = $.value, null !== t && 1 === t.tag && hb(t.type);
        try {
            console.error($)
        } catch (i) {
            setTimeout(function () {
                throw i
            })
        }
    }

    function jq(t, $) {
        try {
            $.props = t.memoizedProps, $.state = t.memoizedState, $.componentWillUnmount()
        } catch (e) {
            Nb(t, e)
        }
    }

    function nk(t) {
        var $ = t.ref;
        if (null !== $)
            if ("function" == typeof $) try {
                $(null)
            } catch (e) {
                Nb(t, e)
            } else $.current = null
    }

    function kq(t, $) {
        switch ($.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
                return;
            case 1:
                if (256 & $.effectTag && null !== t) {
                    var e = t.memoizedProps,
                        r = t.memoizedState;
                    $ = (t = $.stateNode).getSnapshotBeforeUpdate($.elementType === $.type ? e : Pa($.type, e), r), t.__reactInternalSnapshotBeforeUpdate = $
                }
                return;
            case 3:
            case 5:
            case 6:
            case 4:
            case 17:
                return;
        }
        throw Error(aa(163))
    }

    function ok(t, $) {
        if (null !== ($ = null !== ($ = $.updateQueue) ? $.lastEffect : null)) {
            var e = $ = $.next;
            do {
                if ((e.tag & t) === t) {
                    var r = e.destroy;
                    e.destroy = void 0, void 0 !== r && r()
                }
                e = e.next
            } while (e !== $)
        }
    }

    function pk(t, $) {
        if (null !== ($ = null !== ($ = $.updateQueue) ? $.lastEffect : null)) {
            var e = $ = $.next;
            do {
                if ((e.tag & t) === t) {
                    var r = e.create;
                    e.destroy = r()
                }
                e = e.next
            } while (e !== $)
        }
    }

    function lq(t, $, e) {
        switch (e.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
                return void pk(3, e);
            case 1:
                if (t = e.stateNode, 4 & e.effectTag)
                    if (null === $) t.componentDidMount();
                    else {
                        var r = e.elementType === e.type ? $.memoizedProps : Pa(e.type, $.memoizedProps);
                        t.componentDidUpdate(r, $.memoizedState, t.__reactInternalSnapshotBeforeUpdate)
                    } return void(null !== ($ = e.updateQueue) && Pj(e, $, t));
            case 3:
                if (null !== ($ = e.updateQueue)) {
                    if (t = null, null !== e.child) switch (e.child.tag) {
                        case 5:
                            t = e.child.stateNode;
                            break;
                        case 1:
                            t = e.child.stateNode;
                    }
                    Pj(e, $, t)
                }
                return;
            case 5:
                return t = e.stateNode, void(null === $ && 4 & e.effectTag && tj(e.type, e.memoizedProps) && t.focus());
            case 6:
            case 4:
            case 12:
                return;
            case 13:
                return void(null === e.memoizedState && (e = e.alternate, null !== e && (e = e.memoizedState, null !== e && (e = e.dehydrated, null !== e && mj(e)))));
            case 19:
            case 17:
            case 20:
            case 21:
                return;
        }
        throw Error(aa(163))
    }

    function qk(t, $, e) {
        switch ("function" == typeof Li && Li($), $.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
                if (null !== (t = $.updateQueue) && null !== (t = t.lastEffect)) {
                    var r = t.next;
                    tb(97 < e ? 97 : e, function () {
                        var t = r;
                        do {
                            var e = t.destroy;
                            if (void 0 !== e) {
                                var i = $;
                                try {
                                    e()
                                } catch (a) {
                                    Nb(i, a)
                                }
                            }
                            t = t.next
                        } while (t !== r)
                    })
                }
                break;
            case 1:
                nk($), "function" == typeof (e = $.stateNode).componentWillUnmount && jq($, e);
                break;
            case 5:
                nk($);
                break;
            case 4:
                uk(t, $, e);
        }
    }

    function rk(t) {
        var $ = t.alternate;
        t.return = null, t.child = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.alternate = null, t.firstEffect = null, t.lastEffect = null, t.pendingProps = null, t.memoizedProps = null, t.stateNode = null, null !== $ && rk($)
    }

    function sk(t) {
        return 5 === t.tag || 3 === t.tag || 4 === t.tag
    }

    function tk(t) {
        t: {
            for (var $ = t.return; null !== $;) {
                if (sk($)) {
                    var e = $;
                    break t
                }
                $ = $.return
            }
            throw Error(aa(160))
        }
        switch ($ = e.stateNode, e.tag) {
            case 5:
                var r = !1;
                break;
            case 3:
            case 4:
                $ = $.containerInfo, r = !0;
                break;
            default:
                throw Error(aa(161));
        }
        16 & e.effectTag && (Sc($, ""), e.effectTag &= -17);t: $: for (e = t;;) {
            for (; null === e.sibling;) {
                if (null === e.return || sk(e.return)) {
                    e = null;
                    break t
                }
                e = e.return
            }
            for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
                if (2 & e.effectTag) continue $;
                if (null === e.child || 4 === e.tag) continue $;
                e.child.return = e, e = e.child
            }
            if (!(2 & e.effectTag)) {
                e = e.stateNode;
                break t
            }
        }
        r ? sg(t, e, $) : tg(t, e, $)
    }

    function sg(t, $, e) {
        var r = t.tag,
            i = 5 === r || 6 === r;
        if (i) t = i ? t.stateNode : t.stateNode.instance, $ ? 8 === e.nodeType ? e.parentNode.insertBefore(t, $) : e.insertBefore(t, $) : (8 === e.nodeType ? ($ = e.parentNode).insertBefore(t, e) : ($ = e).appendChild(t), null != (e = e._reactRootContainer) || null !== $.onclick || ($.onclick = Od));
        else if (4 !== r && null !== (t = t.child))
            for (sg(t, $, e), t = t.sibling; null !== t;) sg(t, $, e), t = t.sibling
    }

    function tg(t, $, e) {
        var r = t.tag,
            i = 5 === r || 6 === r;
        if (i) t = i ? t.stateNode : t.stateNode.instance, $ ? e.insertBefore(t, $) : e.appendChild(t);
        else if (4 !== r && null !== (t = t.child))
            for (tg(t, $, e), t = t.sibling; null !== t;) tg(t, $, e), t = t.sibling
    }

    function uk(t, $, e) {
        for (var r, i, a = $, n = !1;;) {
            if (!n) {
                n = a.return;
                t: for (;;) {
                    if (null === n) throw Error(aa(160));
                    switch (r = n.stateNode, n.tag) {
                        case 5:
                            i = !1;
                            break t;
                        case 3:
                        case 4:
                            r = r.containerInfo, i = !0;
                            break t;
                    }
                    n = n.return
                }
                n = !0
            }
            if (5 === a.tag || 6 === a.tag) {
                t: for (var l = t, v = a, o = e, u = v;;)
                    if (qk(l, u, o), null !== u.child && 4 !== u.tag) u.child.return = u, u = u.child;
                    else {
                        if (u === v) break t;
                        for (; null === u.sibling;) {
                            if (null === u.return || u.return === v) break t;
                            u = u.return
                        }
                        u.sibling.return = u.return, u = u.sibling
                    }i ? (l = r, v = a.stateNode, 8 === l.nodeType ? l.parentNode.removeChild(v) : l.removeChild(v)) : r.removeChild(a.stateNode)
            }
            else if (4 === a.tag) {
                if (null !== a.child) {
                    r = a.stateNode.containerInfo, i = !0, a.child.return = a, a = a.child;
                    continue
                }
            } else if (qk(t, a, e), null !== a.child) {
                a.child.return = a, a = a.child;
                continue
            }
            if (a === $) break;
            for (; null === a.sibling;) {
                if (null === a.return || a.return === $) return;
                4 === (a = a.return).tag && (n = !1)
            }
            a.sibling.return = a.return, a = a.sibling
        }
    }

    function ug(t, $) {
        switch ($.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
                return void ok(3, $);
            case 1:
                return;
            case 5:
                var e = $.stateNode;
                if (null != e) {
                    var r = $.memoizedProps,
                        i = null !== t ? t.memoizedProps : r;
                    t = $.type;
                    var a = $.updateQueue;
                    if ($.updateQueue = null, null !== a) {
                        for (e[td] = r, "input" === t && "radio" === r.type && null != r.name && Zi(e, r), Qf(t, i), $ = Qf(t, r), i = 0; i < a.length; i += 2) {
                            var n = a[i],
                                l = a[i + 1];
                            "style" === n ? oj(e, l) : "dangerouslySetInnerHTML" === n ? Ph(e, l) : "children" === n ? Sc(e, l) : Af(e, n, l, $)
                        }
                        switch (t) {
                            case "input":
                                Df(e, r);
                                break;
                            case "textarea":
                                aj(e, r);
                                break;
                            case "select":
                                $ = e._wrapperState.wasMultiple, e._wrapperState.wasMultiple = !!r.multiple, null != (t = r.value) ? _b(e, !!r.multiple, t, !1) : $ !== !!r.multiple && (null != r.defaultValue ? _b(e, !!r.multiple, r.defaultValue, !0) : _b(e, !!r.multiple, r.multiple ? [] : "", !1));
                        }
                    }
                }
                return;
            case 6:
                if (null === $.stateNode) throw Error(aa(162));
                return void($.stateNode.nodeValue = $.memoizedProps);
            case 3:
                return void(($ = $.stateNode).hydrate && ($.hydrate = !1, mj($.containerInfo)));
            case 12:
                return;
            case 13:
                if (e = $, null === $.memoizedState ? r = !1 : (r = !0, e = $.child, Ei = Da()), null !== e) t: for (t = e;;) {
                    if (5 === t.tag) a = t.stateNode, r ? "function" == typeof (a = a.style).setProperty ? a.setProperty("display", "none", "important") : a.display = "none" : (a = t.stateNode, i = null != (i = t.memoizedProps.style) && i.hasOwnProperty("display") ? i.display : null, a.style.display = nj("display", i));
                    else if (6 === t.tag) t.stateNode.nodeValue = r ? "" : t.memoizedProps;
                    else {
                        if (13 === t.tag && null !== t.memoizedState && null === t.memoizedState.dehydrated) {
                            (a = t.child.sibling).return = t, t = a;
                            continue
                        }
                        if (null !== t.child) {
                            t.child.return = t, t = t.child;
                            continue
                        }
                    }
                    if (t === e) break;
                    for (; null === t.sibling;) {
                        if (null === t.return || t.return === e) break t;
                        t = t.return
                    }
                    t.sibling.return = t.return, t = t.sibling
                }
                return void vk($);
            case 19:
                return void vk($);
            case 17:
                return;
        }
        throw Error(aa(163))
    }

    function vk(t) {
        var $ = t.updateQueue;
        if (null !== $) {
            t.updateQueue = null;
            var e = t.stateNode;
            null === e && (e = t.stateNode = new kp), $.forEach(function ($) {
                var r = tq.bind(null, t, $);
                e.has($) || (e.add($), $.then(r, r))
            })
        }
    }

    function wk(t, $, e) {
        (e = ub(e, null)).tag = 3, e.payload = {
            element: null
        };
        var r = $.value;
        return e.callback = function () {
            Gi || (Gi = !0, op = r), rg(t, $)
        }, e
    }

    function xk(t, $, e) {
        (e = ub(e, null)).tag = 3;
        var r = t.type.getDerivedStateFromError;
        if ("function" == typeof r) {
            var i = $.value;
            e.payload = function () {
                return rg(t, $), r(i)
            }
        }
        var a = t.stateNode;
        return null !== a && "function" == typeof a.componentDidCatch && (e.callback = function () {
            "function" != typeof r && (null === $b ? $b = new Set([this]) : $b.add(this), rg(t, $));
            var e = $.stack;
            this.componentDidCatch($.value, {
                componentStack: null !== e ? e : ""
            })
        }), e
    }

    function Za() {
        return (ha & (Oa | Xa)) !== ka ? 1073741821 - (Da() / 10 | 0) : 0 !== Ji ? Ji : Ji = 1073741821 - (Da() / 10 | 0)
    }

    function Kb(t, $, e) {
        if (0 == (2 & ($ = $.mode))) return 1073741823;
        var r = Vd();
        if (0 == (4 & $)) return 99 === r ? 1073741823 : 1073741822;
        if ((ha & Oa) !== ka) return Fa;
        if (null !== e) t = Wd(t, 0 | e.timeoutMs || 5e3, 250);
        else switch (r) {
            case 99:
                t = 1073741823;
                break;
            case 98:
                t = Wd(t, 150, 100);
                break;
            case 97:
            case 96:
                t = Wd(t, 5e3, 250);
                break;
            case 95:
                t = 2;
                break;
            default:
                throw Error(aa(326));
        }
        return null !== gb && t === Fa && --t, t
    }

    function wb(t, $) {
        if (50 < Ii) throw Ii = 0, pp = null, Error(aa(185));
        if (null !== (t = fe(t, $))) {
            var e = Vd();
            1073741823 === $ ? (ha & sf) !== ka && (ha & (Oa | Xa)) === ka ? vg(t) : (wa(t), ha === ka && Ya()) : wa(t), (4 & ha) === ka || 98 !== e && 99 !== e || (null === Qc ? Qc = new Map([
                [t, $]
            ]) : (void 0 === (e = Qc.get(t)) || e > $) && Qc.set(t, $))
        }
    }

    function fe(t, $) {
        t.expirationTime < $ && (t.expirationTime = $);
        var e = t.alternate;
        null !== e && e.expirationTime < $ && (e.expirationTime = $);
        var r = t.return,
            i = null;
        if (null === r && 3 === t.tag) i = t.stateNode;
        else
            for (; null !== r;) {
                if (e = r.alternate, r.childExpirationTime < $ && (r.childExpirationTime = $), null !== e && e.childExpirationTime < $ && (e.childExpirationTime = $), null === r.return && 3 === r.tag) {
                    i = r.stateNode;
                    break
                }
                r = r.return
            }
        return null !== i && (gb === i && (he($), Ga === Hd && Pb(i, Fa)), Ik(i, $)), i
    }

    function ge(t) {
        var $ = t.lastExpiredTime;
        if (0 !== $) return $;
        if (!Hk(t, $ = t.firstPendingTime)) return $;
        var e = t.lastPingedTime;
        return 2 >= (t = e > (t = t.nextKnownPendingLevel) ? e : t) && $ !== t ? 0 : t
    }

    function wa(t) {
        if (0 !== t.lastExpiredTime) t.callbackExpirationTime = 1073741823, t.callbackPriority = 99, t.callbackNode = Lj(vg.bind(null, t));
        else {
            var $ = ge(t),
                e = t.callbackNode;
            if (0 === $) null !== e && (t.callbackNode = null, t.callbackExpirationTime = 0, t.callbackPriority = 90);
            else {
                var r = Za();
                if (1073741823 === $ ? r = 99 : 1 === $ || 2 === $ ? r = 95 : r = 0 >= (r = 10 * (1073741821 - $) - 10 * (1073741821 - r)) ? 99 : 250 >= r ? 98 : 5250 >= r ? 97 : 95, null !== e) {
                    var i = t.callbackPriority;
                    if (t.callbackExpirationTime === $ && i >= r) return;
                    e !== pi && ji(e)
                }
                t.callbackExpirationTime = $, t.callbackPriority = r, $ = 1073741823 === $ ? Lj(vg.bind(null, t)) : Kj(r, yk.bind(null, t), {
                    timeout: 10 * (1073741821 - $) - Da()
                }), t.callbackNode = $
            }
        }
    }

    function yk(t, $) {
        if (Ji = 0, $) return Ag(t, $ = Za()), wa(t), null;
        var e = ge(t);
        if (0 !== e) {
            if ($ = t.callbackNode, (ha & (Oa | Xa)) !== ka) throw Error(aa(327));
            if (ic(), t === gb && e === Fa || Lb(t, e), null !== ca) {
                var r = ha;
                ha |= Oa;
                for (var i = Ck();;) try {
                    oq();
                    break
                } catch (l) {
                    Bk(t, l)
                }
                if (Xf(), ha = r, Ed.current = i, Ga === Fd) throw $ = Bi, Lb(t, e), Pb(t, e), wa(t), $;
                if (null === ca) switch (i = t.finishedWork = t.current.alternate, t.finishedExpirationTime = e, r = Ga, gb = null, r) {
                    case Eb:
                    case Fd:
                        throw Error(aa(345));
                    case Ai:
                        Ag(t, 2 < e ? 2 : e);
                        break;
                    case Gd:
                        if (Pb(t, e), e === (r = t.lastSuspendedTime) && (t.nextKnownPendingLevel = wg(i)), 1073741823 === Fb && 10 < (i = Ei + Fi - Da())) {
                            if (Di) {
                                var a = t.lastPingedTime;
                                if (0 === a || a >= e) {
                                    t.lastPingedTime = e, Lb(t, e);
                                    break
                                }
                            }
                            if (0 !== (a = ge(t)) && a !== e) break;
                            if (0 !== r && r !== e) {
                                t.lastPingedTime = r;
                                break
                            }
                            t.timeoutHandle = hf(Mb.bind(null, t), i);
                            break
                        }
                        Mb(t);
                        break;
                    case Hd:
                        if (Pb(t, e), e === (r = t.lastSuspendedTime) && (t.nextKnownPendingLevel = wg(i)), Di && (0 === (i = t.lastPingedTime) || i >= e)) {
                            t.lastPingedTime = e, Lb(t, e);
                            break
                        }
                        if (0 !== (i = ge(t)) && i !== e) break;
                        if (0 !== r && r !== e) {
                            t.lastPingedTime = r;
                            break
                        }
                        if (1073741823 !== uf ? r = 10 * (1073741821 - uf) - Da() : 1073741823 === Fb ? r = 0 : (r = 10 * (1073741821 - Fb) - 5e3, 0 > (r = (i = Da()) - r) && (r = 0), (e = 10 * (1073741821 - e) - i) < (r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * np(r / 1960)) - r) && (r = e)), 10 < r) {
                            t.timeoutHandle = hf(Mb.bind(null, t), r);
                            break
                        }
                        Mb(t);
                        break;
                    case tf:
                        if (1073741823 !== Fb && null !== Ci) {
                            a = Fb;
                            var n = Ci;
                            if (0 >= (r = 0 | n.busyMinDurationMs) ? r = 0 : (i = 0 | n.busyDelayMs, r = (a = Da() - (10 * (1073741821 - a) - (0 | n.timeoutMs || 5e3))) <= i ? 0 : i + r - a), 10 < r) {
                                Pb(t, e), t.timeoutHandle = hf(Mb.bind(null, t), r);
                                break
                            }
                        }
                        Mb(t);
                        break;
                    default:
                        throw Error(aa(329));
                }
                if (wa(t), t.callbackNode === $) return yk.bind(null, t)
            }
        }
        return null
    }

    function vg(t) {
        var $ = t.lastExpiredTime;
        if ($ = 0 !== $ ? $ : 1073741823, (ha & (Oa | Xa)) !== ka) throw Error(aa(327));
        if (ic(), t === gb && $ === Fa || Lb(t, $), null !== ca) {
            var e = ha;
            ha |= Oa;
            for (var r = Ck();;) try {
                nq();
                break
            } catch (i) {
                Bk(t, i)
            }
            if (Xf(), ha = e, Ed.current = r, Ga === Fd) throw e = Bi, Lb(t, $), Pb(t, $), wa(t), e;
            if (null !== ca) throw Error(aa(261));
            t.finishedWork = t.current.alternate, t.finishedExpirationTime = $, gb = null, Mb(t), wa(t)
        }
        return null
    }

    function mq() {
        if (null !== Qc) {
            var t = Qc;
            Qc = null, t.forEach(function (t, $) {
                Ag($, t), wa($)
            }), Ya()
        }
    }

    function zk(t, $) {
        var e = ha;
        ha |= 1;
        try {
            return t($)
        } finally {
            (ha = e) === ka && Ya()
        }
    }

    function Ak(t, $) {
        var e = ha;
        ha &= -2, ha |= sf;
        try {
            return t($)
        } finally {
            (ha = e) === ka && Ya()
        }
    }

    function Lb(t, $) {
        t.finishedWork = null, t.finishedExpirationTime = 0;
        var e = t.timeoutHandle;
        if (-1 !== e && (t.timeoutHandle = -1, ro(e)), null !== ca)
            for (e = ca.return; null !== e;) {
                var r = e;
                switch (r.tag) {
                    case 1:
                        null != (r = r.type.childContextTypes) && Td();
                        break;
                    case 3:
                        fc(), ga(sa), ga(na);
                        break;
                    case 5:
                        bg(r);
                        break;
                    case 4:
                        fc();
                        break;
                    case 13:
                    case 19:
                        ga(ia);
                        break;
                    case 10:
                        Yf(r);
                }
                e = e.return
            }
        gb = t, ca = Ob(t.current, null), Fa = $, Ga = Eb, Bi = null, uf = Fb = 1073741823, Ci = null, vf = 0, Di = !1
    }

    function Bk(t, $) {
        for (;;) {
            try {
                if (Xf(), Cd.current = Dd, cp)
                    for (var e = oa.memoizedState; null !== e;) {
                        var r = e.queue;
                        null !== r && (r.pending = null), e = e.next
                    }
                if (Pc = 0, rb = Wa = oa = null, cp = !1, null === ca || null === ca.return) return Ga = Fd, Bi = $, ca = null;
                t: {
                    var i = t,
                        a = ca.return,
                        n = ca,
                        l = $;
                    if ($ = Fa, n.effectTag |= 2048, n.firstEffect = n.lastEffect = null, null !== l && "object" == typeof l && "function" == typeof l.then) {
                        var v = l;
                        if (0 == (2 & n.mode)) {
                            var o = n.alternate;
                            o ? (n.updateQueue = o.updateQueue, n.memoizedState = o.memoizedState, n.expirationTime = o.expirationTime) : (n.updateQueue = null, n.memoizedState = null)
                        }
                        var u = 0 != (1 & ia.current),
                            c = a;
                        do {
                            var f;
                            if (f = 13 === c.tag) {
                                var s = c.memoizedState;
                                if (null !== s) f = null !== s.dehydrated;
                                else {
                                    var d = c.memoizedProps;
                                    f = void 0 !== d.fallback && (!0 !== d.unstable_avoidThisFallback || !u)
                                }
                            }
                            if (f) {
                                var p = c.updateQueue;
                                if (null === p) {
                                    var h = new Set;
                                    h.add(v), c.updateQueue = h
                                } else p.add(v);
                                if (0 == (2 & c.mode)) {
                                    if (c.effectTag |= 64, n.effectTag &= -2981, 1 === n.tag)
                                        if (null === n.alternate) n.tag = 17;
                                        else {
                                            var g = ub(1073741823, null);
                                            g.tag = 2, vb(n, g)
                                        } n.expirationTime = 1073741823;
                                    break t
                                }
                                l = void 0, n = $;
                                var m = i.pingCache;
                                if (null === m ? (m = i.pingCache = new lp, l = new Set, m.set(v, l)) : void 0 === (l = m.get(v)) && (l = new Set, m.set(v, l)), !l.has(n)) {
                                    l.add(n);
                                    var b = sq.bind(null, i, v, n);
                                    v.then(b, b)
                                }
                                c.effectTag |= 4096, c.expirationTime = $;
                                break t
                            }
                            c = c.return
                        } while (null !== c);
                        l = Error((hb(n.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + Bf(n))
                    }
                    Ga !== tf && (Ga = Ai),
                    l = qg(l, n),
                    c = a;do {
                        switch (c.tag) {
                            case 3:
                                v = l, c.effectTag |= 4096, c.expirationTime = $, Oj(c, wk(c, v, $));
                                break t;
                            case 1:
                                v = l;
                                var y = c.type,
                                    k = c.stateNode;
                                if (0 == (64 & c.effectTag) && ("function" == typeof y.getDerivedStateFromError || null !== k && "function" == typeof k.componentDidCatch && (null === $b || !$b.has(k)))) {
                                    c.effectTag |= 4096, c.expirationTime = $, Oj(c, xk(c, v, $));
                                    break t
                                }
                        }
                        c = c.return
                    } while (null !== c)
                }
                ca = Fk(ca)
            } catch (w) {
                $ = w;
                continue
            }
            break
        }
    }

    function Ck() {
        var t = Ed.current;
        return Ed.current = Dd, null === t ? Dd : t
    }

    function Dk(t, $) {
        t < Fb && 2 < t && (Fb = t), null !== $ && t < uf && 2 < t && (uf = t, Ci = $)
    }

    function he(t) {
        t > vf && (vf = t)
    }

    function nq() {
        for (; null !== ca;) ca = Ek(ca)
    }

    function oq() {
        for (; null !== ca && !$o();) ca = Ek(ca)
    }

    function Ek(t) {
        var $ = mp(t.alternate, t, Fa);
        return t.memoizedProps = t.pendingProps, null === $ && ($ = Fk(t)), zi.current = null, $
    }

    function Fk(t) {
        ca = t;
        do {
            var $ = ca.alternate;
            if (t = ca.return, 0 == (2048 & ca.effectTag)) {
                if ($ = hq($, ca, Fa), 1 === Fa || 1 !== ca.childExpirationTime) {
                    for (var e = 0, r = ca.child; null !== r;) {
                        var i = r.expirationTime,
                            a = r.childExpirationTime;
                        i > e && (e = i), a > e && (e = a), r = r.sibling
                    }
                    ca.childExpirationTime = e
                }
                if (null !== $) return $;
                null !== t && 0 == (2048 & t.effectTag) && (null === t.firstEffect && (t.firstEffect = ca.firstEffect), null !== ca.lastEffect && (null !== t.lastEffect && (t.lastEffect.nextEffect = ca.firstEffect), t.lastEffect = ca.lastEffect), 1 < ca.effectTag && (null !== t.lastEffect ? t.lastEffect.nextEffect = ca : t.firstEffect = ca, t.lastEffect = ca))
            } else {
                if (null !== ($ = iq(ca))) return $.effectTag &= 2047, $;
                null !== t && (t.firstEffect = t.lastEffect = null, t.effectTag |= 2048)
            }
            if (null !== ($ = ca.sibling)) return $;
            ca = t
        } while (null !== ca);
        return Ga === Eb && (Ga = tf), null
    }

    function wg(t) {
        var $ = t.expirationTime;
        return $ > (t = t.childExpirationTime) ? $ : t
    }

    function Mb(t) {
        var $ = Vd();
        return tb(99, pq.bind(null, t, $)), null
    }

    function pq(t, $) {
        do {
            ic()
        } while (null !== wf);
        if ((ha & (Oa | Xa)) !== ka) throw Error(aa(327));
        var e = t.finishedWork,
            r = t.finishedExpirationTime;
        if (null === e) return null;
        if (t.finishedWork = null, t.finishedExpirationTime = 0, e === t.current) throw Error(aa(177));
        t.callbackNode = null, t.callbackExpirationTime = 0, t.callbackPriority = 90, t.nextKnownPendingLevel = 0;
        var i = wg(e);
        if (t.firstPendingTime = i, r <= t.lastSuspendedTime ? t.firstSuspendedTime = t.lastSuspendedTime = t.nextKnownPendingLevel = 0 : r <= t.firstSuspendedTime && (t.firstSuspendedTime = r - 1), r <= t.lastPingedTime && (t.lastPingedTime = 0), r <= t.lastExpiredTime && (t.lastExpiredTime = 0), t === gb && (ca = gb = null, Fa = 0), 1 < e.effectTag ? null !== e.lastEffect ? (e.lastEffect.nextEffect = e, i = e.firstEffect) : i = e : i = e.firstEffect, null !== i) {
            var a = ha;
            ha |= Xa, zi.current = null, po = Yh;
            var n = sj();
            if (Sf(n)) {
                if ("selectionStart" in n) var l = {
                    start: n.selectionStart,
                    end: n.selectionEnd
                };
                else t: {
                    var v = (l = (l = n.ownerDocument) && l.defaultView || window).getSelection && l.getSelection();
                    if (v && 0 !== v.rangeCount) {
                        l = v.anchorNode;
                        var o = v.anchorOffset,
                            u = v.focusNode;
                        v = v.focusOffset;
                        try {
                            l.nodeType, u.nodeType
                        } catch (T) {
                            l = null;
                            break t
                        }
                        var c = 0,
                            f = -1,
                            s = -1,
                            d = 0,
                            p = 0,
                            h = n,
                            g = null;
                        $: for (;;) {
                            for (var m; h !== l || 0 !== o && 3 !== h.nodeType || (f = c + o), h !== u || 0 !== v && 3 !== h.nodeType || (s = c + v), 3 === h.nodeType && (c += h.nodeValue.length), null !== (m = h.firstChild);) g = h, h = m;
                            for (;;) {
                                if (h === n) break $;
                                if (g === l && ++d === o && (f = c), g === u && ++p === v && (s = c), null !== (m = h.nextSibling)) break;
                                g = (h = g).parentNode
                            }
                            h = m
                        }
                        l = -1 === f || -1 === s ? null : {
                            start: f,
                            end: s
                        }
                    } else l = null
                }
                l = l || {
                    start: 0,
                    end: 0
                }
            } else l = null;
            qo = {
                activeElementDetached: null,
                focusedElem: n,
                selectionRange: l
            }, Yh = !1, ba = i;
            do {
                try {
                    qq()
                } catch (T) {
                    if (null === ba) throw Error(aa(330));
                    Nb(ba, T), ba = ba.nextEffect
                }
            } while (null !== ba);
            ba = i;
            do {
                try {
                    for (n = t, l = $; null !== ba;) {
                        var b = ba.effectTag;
                        if (16 & b && Sc(ba.stateNode, ""), 128 & b) {
                            var y = ba.alternate;
                            if (null !== y) {
                                var k = y.ref;
                                null !== k && ("function" == typeof k ? k(null) : k.current = null)
                            }
                        }
                        switch (1038 & b) {
                            case 2:
                                tk(ba), ba.effectTag &= -3;
                                break;
                            case 6:
                                tk(ba), ba.effectTag &= -3, ug(ba.alternate, ba);
                                break;
                            case 1024:
                                ba.effectTag &= -1025;
                                break;
                            case 1028:
                                ba.effectTag &= -1025, ug(ba.alternate, ba);
                                break;
                            case 4:
                                ug(ba.alternate, ba);
                                break;
                            case 8:
                                uk(n, o = ba, l), rk(o);
                        }
                        ba = ba.nextEffect
                    }
                } catch (T) {
                    if (null === ba) throw Error(aa(330));
                    Nb(ba, T), ba = ba.nextEffect
                }
            } while (null !== ba);
            if (k = qo, y = sj(), b = k.focusedElem, l = k.selectionRange, y !== b && b && b.ownerDocument && rj(b.ownerDocument.documentElement, b)) {
                null !== l && Sf(b) && (y = l.start, void 0 === (k = l.end) && (k = y), "selectionStart" in b ? (b.selectionStart = y, b.selectionEnd = Math.min(k, b.value.length)) : (k = (y = b.ownerDocument || document) && y.defaultView || window).getSelection && (k = k.getSelection(), o = b.textContent.length, n = Math.min(l.start, o), l = void 0 === l.end ? n : Math.min(l.end, o), !k.extend && n > l && (o = l, l = n, n = o), o = qj(b, n), u = qj(b, l), o && u && (1 !== k.rangeCount || k.anchorNode !== o.node || k.anchorOffset !== o.offset || k.focusNode !== u.node || k.focusOffset !== u.offset) && ((y = y.createRange()).setStart(o.node, o.offset), k.removeAllRanges(), n > l ? (k.addRange(y), k.extend(u.node, u.offset)) : (y.setEnd(u.node, u.offset), k.addRange(y))))), y = [];
                for (k = b; k = k.parentNode;) 1 === k.nodeType && y.push({
                    element: k,
                    left: k.scrollLeft,
                    top: k.scrollTop
                });
                for ("function" == typeof b.focus && b.focus(), b = 0; b < y.length; b++)(k = y[b]).element.scrollLeft = k.left, k.element.scrollTop = k.top
            }
            Yh = !!po, qo = po = null, t.current = e, ba = i;
            do {
                try {
                    for (b = t; null !== ba;) {
                        var w = ba.effectTag;
                        if (36 & w && lq(b, ba.alternate, ba), 128 & w) {
                            y = void 0;
                            var x = ba.ref;
                            if (null !== x) {
                                var E = ba.stateNode;
                                switch (ba.tag) {
                                    case 5:
                                        y = E;
                                        break;
                                    default:
                                        y = E;
                                }
                                "function" == typeof x ? x(y) : x.current = y
                            }
                        }
                        ba = ba.nextEffect
                    }
                } catch (T) {
                    if (null === ba) throw Error(aa(330));
                    Nb(ba, T), ba = ba.nextEffect
                }
            } while (null !== ba);
            ba = null, _o(), ha = a
        } else t.current = e;
        if (Hi) Hi = !1, wf = t, xf = $;
        else
            for (ba = i; null !== ba;) $ = ba.nextEffect, ba.nextEffect = null, ba = $;
        if (0 === ($ = t.firstPendingTime) && ($b = null), 1073741823 === $ ? t === pp ? Ii++ : (Ii = 0, pp = t) : Ii = 0, "function" == typeof Ki && Ki(e.stateNode, r), wa(t), Gi) throw Gi = !1, t = op, op = null, t;
        return (ha & sf) !== ka ? null : (Ya(), null)
    }

    function qq() {
        for (; null !== ba;) {
            var t = ba.effectTag;
            0 != (256 & t) && kq(ba.alternate, ba), 0 == (512 & t) || Hi || (Hi = !0, Kj(97, function () {
                return ic(), null
            })), ba = ba.nextEffect
        }
    }

    function ic() {
        if (90 !== xf) {
            var t = 97 < xf ? 97 : xf;
            return xf = 90, tb(t, rq)
        }
    }

    function rq() {
        if (null === wf) return !1;
        var t = wf;
        if (wf = null, (ha & (Oa | Xa)) !== ka) throw Error(aa(331));
        var $ = ha;
        for (ha |= Xa, t = t.current.firstEffect; null !== t;) {
            try {
                var e = t;
                if (0 != (512 & e.effectTag)) switch (e.tag) {
                    case 0:
                    case 11:
                    case 15:
                    case 22:
                        ok(5, e), pk(5, e);
                }
            } catch (r) {
                if (null === t) throw Error(aa(330));
                Nb(t, r)
            }
            e = t.nextEffect, t.nextEffect = null, t = e
        }
        return ha = $, Ya(), !0
    }

    function Gk(t, $, e) {
        vb(t, $ = wk(t, $ = qg(e, $), 1073741823)), null !== (t = fe(t, 1073741823)) && wa(t)
    }

    function Nb(t, $) {
        if (3 === t.tag) Gk(t, t, $);
        else
            for (var e = t.return; null !== e;) {
                if (3 === e.tag) {
                    Gk(e, t, $);
                    break
                }
                if (1 === e.tag) {
                    var r = e.stateNode;
                    if ("function" == typeof e.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === $b || !$b.has(r))) {
                        vb(e, t = xk(e, t = qg($, t), 1073741823)), null !== (e = fe(e, 1073741823)) && wa(e);
                        break
                    }
                }
                e = e.return
            }
    }

    function sq(t, $, e) {
        var r = t.pingCache;
        null !== r && r.delete($), gb === t && Fa === e ? Ga === Hd || Ga === Gd && 1073741823 === Fb && Da() - Ei < Fi ? Lb(t, Fa) : Di = !0 : Hk(t, e) && (0 !== ($ = t.lastPingedTime) && $ < e || (t.lastPingedTime = e, wa(t)))
    }

    function tq(t, $) {
        var e = t.stateNode;
        null !== e && e.delete($), 0 === ($ = 0) && ($ = Kb($ = Za(), t, null)), null !== (t = fe(t, $)) && wa(t)
    }

    function uq(t) {
        if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
        var $ = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if ($.isDisabled || !$.supportsFiber) return !0;
        try {
            var e = $.inject(t);
            Ki = function (t) {
                try {
                    $.onCommitFiberRoot(e, t, void 0, 64 == (64 & t.current.effectTag))
                } catch (r) {}
            }, Li = function (t) {
                try {
                    $.onCommitFiberUnmount(e, t)
                } catch (r) {}
            }
        } catch (r) {}
        return !0
    }

    function vq(t, $, e, r) {
        this.tag = t, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = $, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.effectTag = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childExpirationTime = this.expirationTime = 0, this.alternate = null
    }

    function $a(t, $, e, r) {
        return new vq(t, $, e, r)
    }

    function xg(t) {
        return !(!(t = t.prototype) || !t.isReactComponent)
    }

    function wq(t) {
        if ("function" == typeof t) return xg(t) ? 1 : 0;
        if (null != t) {
            if ((t = t.$$typeof) === $e) return 11;
            if (t === af) return 14
        }
        return 2
    }

    function Ob(t, $) {
        var e = t.alternate;
        return null === e ? ((e = $a(t.tag, $, t.key, t.mode)).elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.alternate = t, t.alternate = e) : (e.pendingProps = $, e.effectTag = 0, e.nextEffect = null, e.firstEffect = null, e.lastEffect = null), e.childExpirationTime = t.childExpirationTime, e.expirationTime = t.expirationTime, e.child = t.child, e.memoizedProps = t.memoizedProps, e.memoizedState = t.memoizedState, e.updateQueue = t.updateQueue, $ = t.dependencies, e.dependencies = null === $ ? null : {
            expirationTime: $.expirationTime,
            firstContext: $.firstContext,
            responders: $.responders
        }, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e
    }

    function ie(t, $, e, r, i, a) {
        var n = 2;
        if (r = t, "function" == typeof t) xg(t) && (n = 1);
        else if ("string" == typeof t) n = 5;
        else t: switch (t) {
            case Cb:
                return xb(e.children, i, a, $);
            case eo:
                n = 8, i |= 7;
                break;
            case Hh:
                n = 8, i |= 1;
                break;
            case qd:
                return (t = $a(12, e, $, 8 | i)).elementType = qd, t.type = qd, t.expirationTime = a, t;
            case rd:
                return (t = $a(13, e, $, i)).type = rd, t.elementType = rd, t.expirationTime = a, t;
            case _e:
                return (t = $a(19, e, $, i)).elementType = _e, t.expirationTime = a, t;
            default:
                if ("object" == typeof t && null !== t) switch (t.$$typeof) {
                    case Ih:
                        n = 10;
                        break t;
                    case Jh:
                        n = 9;
                        break t;
                    case $e:
                        n = 11;
                        break t;
                    case af:
                        n = 14;
                        break t;
                    case Kh:
                        n = 16, r = null;
                        break t;
                    case Lh:
                        n = 22;
                        break t;
                }
                throw Error(aa(130, null == t ? t : typeof t, ""));
        }
        return ($ = $a(n, e, $, i)).elementType = t, $.type = r, $.expirationTime = a, $
    }

    function xb(t, $, e, r) {
        return (t = $a(7, t, r, $)).expirationTime = e, t
    }

    function yg(t, $, e) {
        return (t = $a(6, t, null, $)).expirationTime = e, t
    }

    function zg(t, $, e) {
        return ($ = $a(4, null !== t.children ? t.children : [], t.key, $)).expirationTime = e, $.stateNode = {
            containerInfo: t.containerInfo,
            pendingChildren: null,
            implementation: t.implementation
        }, $
    }

    function xq(t, $, e) {
        this.tag = $, this.current = null, this.containerInfo = t, this.pingCache = this.pendingChildren = null, this.finishedExpirationTime = 0, this.finishedWork = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = e, this.callbackNode = null, this.callbackPriority = 90, this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0
    }

    function Hk(t, $) {
        var e = t.firstSuspendedTime;
        return t = t.lastSuspendedTime, 0 !== e && e >= $ && t <= $
    }

    function Pb(t, $) {
        var e = t.firstSuspendedTime,
            r = t.lastSuspendedTime;
        e < $ && (t.firstSuspendedTime = $), (r > $ || 0 === e) && (t.lastSuspendedTime = $), $ <= t.lastPingedTime && (t.lastPingedTime = 0), $ <= t.lastExpiredTime && (t.lastExpiredTime = 0)
    }

    function Ik(t, $) {
        $ > t.firstPendingTime && (t.firstPendingTime = $);
        var e = t.firstSuspendedTime;
        0 !== e && ($ >= e ? t.firstSuspendedTime = t.lastSuspendedTime = t.nextKnownPendingLevel = 0 : $ >= t.lastSuspendedTime && (t.lastSuspendedTime = $ + 1), $ > t.nextKnownPendingLevel && (t.nextKnownPendingLevel = $))
    }

    function Ag(t, $) {
        var e = t.lastExpiredTime;
        (0 === e || e > $) && (t.lastExpiredTime = $)
    }

    function je(t, $, e, r) {
        var i = $.current,
            a = Za(),
            n = Lc.suspense;
        a = Kb(a, i, n);
        t: if (e) {
            $: {
                if (Gb(e = e._reactInternalFiber) !== e || 1 !== e.tag) throw Error(aa(170));
                var l = e;do {
                    switch (l.tag) {
                        case 3:
                            l = l.stateNode.context;
                            break $;
                        case 1:
                            if (ta(l.type)) {
                                l = l.stateNode.__reactInternalMemoizedMergedChildContext;
                                break $
                            }
                    }
                    l = l.return
                } while (null !== l);
                throw Error(aa(171))
            }
            if (1 === e.tag) {
                var v = e.type;
                if (ta(v)) {
                    e = Hj(e, v, l);
                    break t
                }
            }
            e = l
        }
        else e = qb;
        return null === $.context ? $.context = e : $.pendingContext = e, ($ = ub(a, n)).payload = {
            element: t
        }, null !== (r = void 0 === r ? null : r) && ($.callback = r), vb(i, $), wb(i, a), a
    }

    function Bg(t) {
        if (!(t = t.current).child) return null;
        switch (t.child.tag) {
            case 5:
            default:
                return t.child.stateNode;
        }
    }

    function Jk(t, $) {
        null !== (t = t.memoizedState) && null !== t.dehydrated && t.retryTime < $ && (t.retryTime = $)
    }

    function Cg(t, $) {
        Jk(t, $), (t = t.alternate) && Jk(t, $)
    }

    function Dg(t, $, e) {
        var r = new xq(t, $, e = null != e && !0 === e.hydrate),
            i = $a(3, null, null, 2 === $ ? 7 : 1 === $ ? 3 : 0);
        r.current = i, i.stateNode = r, Zf(i), t[Fc] = r.current, e && 0 !== $ && Pp(t, 9 === t.nodeType ? t : t.ownerDocument), this._internalRoot = r
    }

    function _c(t) {
        return !(!t || 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType && (8 !== t.nodeType || " react-mount-point-unstable " !== t.nodeValue))
    }

    function yq(t, $) {
        if ($ || ($ = !(!($ = t ? 9 === t.nodeType ? t.documentElement : t.firstChild : null) || 1 !== $.nodeType || !$.hasAttribute("data-reactroot"))), !$)
            for (var e; e = t.lastChild;) t.removeChild(e);
        return new Dg(t, 0, $ ? {
            hydrate: !0
        } : void 0)
    }

    function ke(t, $, e, r, i) {
        var a = e._reactRootContainer;
        if (a) {
            var n = a._internalRoot;
            if ("function" == typeof i) {
                var l = i;
                i = function () {
                    var t = Bg(n);
                    l.call(t)
                }
            }
            je($, n, t, i)
        } else {
            if (a = e._reactRootContainer = yq(e, r), n = a._internalRoot, "function" == typeof i) {
                var v = i;
                i = function () {
                    var t = Bg(n);
                    v.call(t)
                }
            }
            Ak(function () {
                je($, n, t, i)
            })
        }
        return Bg(n)
    }

    function zq(t, $, e) {
        var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return {
            $$typeof: Vb,
            key: null == r ? null : "" + r,
            children: t,
            containerInfo: $,
            implementation: e
        }
    }

    function Kk(t, $) {
        var e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!_c($)) throw Error(aa(200));
        return zq(t, $, null, e)
    }

    function Aq() {
        if (Cp) return;
        Cp = true;
        Ca = {};
        ld = (cb(), bb);
        pa = (bh(), _g);
        la = (Vn(), Tn);
        if (!ld) throw Error(aa(227));
        Ah = !1;
        Wn = null;
        Bh = !1;
        Xn = null;
        Yn = {
            onError: function (t) {
                Ah = !0, Wn = t
            }
        };
        Ch = null;
        Zn = null;
        $n = null;
        Ve = null;
        Tb = {};
        md = [];
        We = {};
        Ub = {};
        Xe = {};
        ob = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement);
        Dh = null;
        nd = null;
        od = null;
        _n = Ti;
        Ye = !1;
        ao = !1;
        bo = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
        Eh = Object.prototype.hasOwnProperty;
        Fh = {};
        Gh = {};
        ma = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (t) {
            ma[t] = new qa(t, 0, !1, t, null, !1)
        }), [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"]
        ].forEach(function (t) {
            var $ = t[0];
            ma[$] = new qa($, 1, !1, t[1], null, !1)
        }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (t) {
            ma[t] = new qa(t, 2, !1, t.toLowerCase(), null, !1)
        }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (t) {
            ma[t] = new qa(t, 2, !1, t, null, !1)
        }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (t) {
            ma[t] = new qa(t, 3, !1, t.toLowerCase(), null, !1)
        }), ["checked", "multiple", "muted", "selected"].forEach(function (t) {
            ma[t] = new qa(t, 3, !0, t, null, !1)
        }), ["capture", "download"].forEach(function (t) {
            ma[t] = new qa(t, 4, !1, t, null, !1)
        }), ["cols", "rows", "size", "span"].forEach(function (t) {
            ma[t] = new qa(t, 6, !1, t, null, !1)
        }), ["rowSpan", "start"].forEach(function (t) {
            ma[t] = new qa(t, 5, !1, t.toLowerCase(), null, !1)
        });
        Ze = /[\-:]([a-z])/g;
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (t) {
            var $ = t.replace(Ze, zf);
            ma[$] = new qa($, 1, !1, t, null, !1)
        }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (t) {
            var $ = t.replace(Ze, zf);
            ma[$] = new qa($, 1, !1, t, "http://www.w3.org/1999/xlink", !1)
        }), ["xml:base", "xml:lang", "xml:space"].forEach(function (t) {
            var $ = t.replace(Ze, zf);
            ma[$] = new qa($, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1)
        }), ["tabIndex", "crossOrigin"].forEach(function (t) {
            ma[t] = new qa(t, 1, !1, t.toLowerCase(), null, !1)
        }), ma.xlinkHref = new qa("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0), ["src", "href", "action", "formAction"].forEach(function (t) {
            ma[t] = new qa(t, 1, !1, t.toLowerCase(), null, !0)
        });
        Na = ld.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        Na.hasOwnProperty("ReactCurrentDispatcher") || (Na.ReactCurrentDispatcher = {
            current: null
        }), Na.hasOwnProperty("ReactCurrentBatchConfig") || (Na.ReactCurrentBatchConfig = {
            suspense: null
        });
        co = /^(.*)[\\\/]/;
        ra = "function" == typeof Symbol && Symbol.for;
        pd = ra ? Symbol.for("react.element") : 60103;
        Vb = ra ? Symbol.for("react.portal") : 60106;
        Cb = ra ? Symbol.for("react.fragment") : 60107;
        Hh = ra ? Symbol.for("react.strict_mode") : 60108;
        qd = ra ? Symbol.for("react.profiler") : 60114;
        Ih = ra ? Symbol.for("react.provider") : 60109;
        Jh = ra ? Symbol.for("react.context") : 60110;
        eo = ra ? Symbol.for("react.concurrent_mode") : 60111;
        $e = ra ? Symbol.for("react.forward_ref") : 60112;
        rd = ra ? Symbol.for("react.suspense") : 60113;
        _e = ra ? Symbol.for("react.suspense_list") : 60120;
        af = ra ? Symbol.for("react.memo") : 60115;
        Kh = ra ? Symbol.for("react.lazy") : 60116;
        Lh = ra ? Symbol.for("react.block") : 60121;
        Mh = "function" == typeof Symbol && Symbol.iterator;
        Nh = {
            html: "http://www.w3.org/1999/xhtml",
            mathml: "http://www.w3.org/1998/Math/MathML",
            svg: "http://www.w3.org/2000/svg"
        };
        Ph = function (t) {
            return "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function ($, e, r, i) {
                MSApp.execUnsafeLocalFunction(function () {
                    return t($, e)
                })
            } : t
        }(function (t, $) {
            if (t.namespaceURI !== Nh.svg || "innerHTML" in t) t.innerHTML = $;
            else {
                for ((Oh = Oh || document.createElement("div")).innerHTML = "<svg>" + $.valueOf().toString() + "</svg>", $ = Oh.firstChild; t.firstChild;) t.removeChild(t.firstChild);
                for (; $.firstChild;) t.appendChild($.firstChild)
            }
        });
        Wb = {
            animationend: Jd("Animation", "AnimationEnd"),
            animationiteration: Jd("Animation", "AnimationIteration"),
            animationstart: Jd("Animation", "AnimationStart"),
            transitionend: Jd("Transition", "TransitionEnd")
        };
        bf = {};
        fo = {};
        ob && (fo = document.createElement("div").style, "AnimationEvent" in window || (delete Wb.animationend.animation, delete Wb.animationiteration.animation, delete Wb.animationstart.animation), "TransitionEvent" in window || delete Wb.transitionend.transition);
        Qh = Kd("animationend");
        Rh = Kd("animationiteration");
        Sh = Kd("animationstart");
        Th = Kd("transitionend");
        xc = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
        Uh = new("function" == typeof WeakMap ? WeakMap : Map);
        cf = null;
        sd = [];
        io = !1;
        Ua = [];
        yc = null;
        zc = null;
        Ac = null;
        Bc = new Map;
        Cc = new Map;
        Dc = [];
        df = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" ");
        jo = "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");
        Wh = {};
        Xh = new Map;
        ef = new Map;
        ko = ["abort", "abort", Qh, "animationEnd", Rh, "animationIteration", Sh, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", Th, "transitionEnd", "waiting", "waiting"];
        Nf("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0), Nf("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1), Nf(ko, 2);
        for (var $i17t$var$bd = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), $i17t$var$cd = 0; $i17t$var$cd < $i17t$var$bd.length; $i17t$var$cd++) ef.set($i17t$var$bd[$i17t$var$cd], 0);
        lo = la.unstable_UserBlockingPriority;
        mo = la.unstable_runWithPriority;
        Yh = !0;
        Ec = {
            animationIterationCount: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0
        };
        no = ["Webkit", "ms", "Moz", "O"];
        Object.keys(Ec).forEach(function (t) {
            no.forEach(function ($) {
                $ = $ + t.charAt(0).toUpperCase() + t.substring(1), Ec[$] = Ec[t]
            })
        });
        oo = pa({
            menuitem: !0
        }, {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0
        });
        Zh = Nh.html;
        $h = "$";
        _h = "/$";
        ff = "$?";
        gf = "$!";
        po = null;
        qo = null;
        hf = "function" == typeof setTimeout ? setTimeout : void 0;
        ro = "function" == typeof clearTimeout ? clearTimeout : void 0;
        jf = Math.random().toString(36).slice(2);
        pb = "__reactInternalInstance$" + jf;
        td = "__reactEventHandlers$" + jf;
        Fc = "__reactContainere$" + jf;
        Gc = null;
        so = null;
        ai = null;
        pa(ua.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var t = this.nativeEvent;
                t && (t.preventDefault ? t.preventDefault() : "unknown" != typeof t.returnValue && (t.returnValue = !1), this.isDefaultPrevented = Pd)
            },
            stopPropagation: function () {
                var t = this.nativeEvent;
                t && (t.stopPropagation ? t.stopPropagation() : "unknown" != typeof t.cancelBubble && (t.cancelBubble = !0), this.isPropagationStopped = Pd)
            },
            persist: function () {
                this.isPersistent = Pd
            },
            isPersistent: Qd,
            destructor: function () {
                var t, $ = this.constructor.Interface;
                for (t in $) this[t] = null;
                this.nativeEvent = this._targetInst = this.dispatchConfig = null, this.isPropagationStopped = this.isDefaultPrevented = Qd, this._dispatchInstances = this._dispatchListeners = null
            }
        }), ua.Interface = {
            type: null,
            target: null,
            currentTarget: function () {
                return null
            },
            eventPhase: null,
            bubbles: null,
            cancelable: null,
            timeStamp: function (t) {
                return t.timeStamp || Date.now()
            },
            defaultPrevented: null,
            isTrusted: null
        }, ua.extend = function (t) {
            function $() {}

            function e() {
                return r.apply(this, arguments)
            }
            var r = this;
            $.prototype = r.prototype;
            var i = new $;
            return pa(i, e.prototype), e.prototype = i, e.prototype.constructor = e, e.Interface = pa({}, r.Interface, t), e.extend = r.extend, yj(e), e
        }, yj(ua);
        to = ua.extend({
            data: null
        });
        uo = ua.extend({
            data: null
        });
        vo = [9, 13, 27, 32];
        kf = ob && "CompositionEvent" in window;
        ud = null;
        ob && "documentMode" in document && (ud = document.documentMode);
        wo = ob && "TextEvent" in window && !ud;
        bi = ob && (!kf || ud && 8 < ud && 11 >= ud);
        ci = String.fromCharCode(32);
        fb = {
            beforeInput: {
                phasedRegistrationNames: {
                    bubbled: "onBeforeInput",
                    captured: "onBeforeInputCapture"
                },
                dependencies: ["compositionend", "keypress", "textInput", "paste"]
            },
            compositionEnd: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionEnd",
                    captured: "onCompositionEndCapture"
                },
                dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ")
            },
            compositionStart: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionStart",
                    captured: "onCompositionStartCapture"
                },
                dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ")
            },
            compositionUpdate: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionUpdate",
                    captured: "onCompositionUpdateCapture"
                },
                dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ")
            }
        };
        xo = !1;
        vd = !1;
        yo = {
            eventTypes: fb,
            extractEvents: function (t, $, e, r) {
                var i;
                if (kf) t: {
                    switch (t) {
                        case "compositionstart":
                            var a = fb.compositionStart;
                            break t;
                        case "compositionend":
                            a = fb.compositionEnd;
                            break t;
                        case "compositionupdate":
                            a = fb.compositionUpdate;
                            break t;
                    }
                    a = void 0
                }
                else vd ? zj(t, e) && (a = fb.compositionEnd) : "keydown" === t && 229 === e.keyCode && (a = fb.compositionStart);
                return a ? (bi && "ko" !== e.locale && (vd || a !== fb.compositionStart ? a === fb.compositionEnd && vd && (i = xj()) : (so = "value" in (Gc = r) ? Gc.value : Gc.textContent, vd = !0)), a = to.getPooled(a, $, e, r), i ? a.data = i : null !== (i = Aj(e)) && (a.data = i), cc(a), i = a) : i = null, (t = wo ? Zp(t, e) : $p(t, e)) ? (($ = uo.getPooled(fb.beforeInput, $, e, r)).data = t, cc($)) : $ = null, null === i ? $ : null === $ ? i : [i, $]
            }
        };
        zo = {
            color: !0,
            date: !0,
            datetime: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0
        };
        di = {
            change: {
                phasedRegistrationNames: {
                    bubbled: "onChange",
                    captured: "onChangeCapture"
                },
                dependencies: "blur change click focus input keydown keyup selectionchange".split(" ")
            }
        };
        ei = null;
        lf = null;
        fi = !1;
        ob && (fi = gj("input") && (!document.documentMode || 9 < document.documentMode));
        Ao = {
            eventTypes: di,
            _isInputEventSupported: fi,
            extractEvents: function (t, $, e, r) {
                var i = $ ? Hb($) : window,
                    a = i.nodeName && i.nodeName.toLowerCase();
                if ("select" === a || "input" === a && "file" === i.type) var n = aq;
                else if (Bj(i)) {
                    if (fi) n = eq;
                    else {
                        n = cq;
                        var l = bq
                    }
                } else(a = i.nodeName) && "input" === a.toLowerCase() && ("checkbox" === i.type || "radio" === i.type) && (n = dq);
                if (n && (n = n(t, $))) return Cj(n, e, r);
                l && l(t, i, $), "blur" === t && (t = i._wrapperState) && t.controlled && "number" === i.type && Ef(i, "number", i.value)
            }
        };
        Hc = ua.extend({
            view: null,
            detail: null
        });
        Bo = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };
        Co = 0;
        Do = 0;
        Eo = !1;
        Fo = !1;
        Ic = Hc.extend({
            screenX: null,
            screenY: null,
            clientX: null,
            clientY: null,
            pageX: null,
            pageY: null,
            ctrlKey: null,
            shiftKey: null,
            altKey: null,
            metaKey: null,
            getModifierState: Wf,
            button: null,
            buttons: null,
            relatedTarget: function (t) {
                return t.relatedTarget || (t.fromElement === t.srcElement ? t.toElement : t.fromElement)
            },
            movementX: function (t) {
                if ("movementX" in t) return t.movementX;
                var $ = Co;
                return Co = t.screenX, Eo ? "mousemove" === t.type ? t.screenX - $ : 0 : (Eo = !0, 0)
            },
            movementY: function (t) {
                if ("movementY" in t) return t.movementY;
                var $ = Do;
                return Do = t.screenY, Fo ? "mousemove" === t.type ? t.screenY - $ : 0 : (Fo = !0, 0)
            }
        });
        gi = Ic.extend({
            pointerId: null,
            width: null,
            height: null,
            pressure: null,
            tangentialPressure: null,
            tiltX: null,
            tiltY: null,
            twist: null,
            pointerType: null,
            isPrimary: null
        });
        Jc = {
            mouseEnter: {
                registrationName: "onMouseEnter",
                dependencies: ["mouseout", "mouseover"]
            },
            mouseLeave: {
                registrationName: "onMouseLeave",
                dependencies: ["mouseout", "mouseover"]
            },
            pointerEnter: {
                registrationName: "onPointerEnter",
                dependencies: ["pointerout", "pointerover"]
            },
            pointerLeave: {
                registrationName: "onPointerLeave",
                dependencies: ["pointerout", "pointerover"]
            }
        };
        Go = {
            eventTypes: Jc,
            extractEvents: function (t, $, e, r, i) {
                var a = "mouseover" === t || "pointerover" === t,
                    n = "mouseout" === t || "pointerout" === t;
                if (a && 0 == (32 & i) && (e.relatedTarget || e.fromElement) || !n && !a) return null;
                (a = r.window === r ? r : (a = r.ownerDocument) ? a.defaultView || a.parentWindow : window, n) ? (n = $, null !== ($ = ($ = e.relatedTarget || e.toElement) ? Wc($) : null) && ($ !== Gb($) || 5 !== $.tag && 6 !== $.tag) && ($ = null)) : n = null;
                if (n === $) return null;
                if ("mouseout" === t || "mouseover" === t) var l = Ic,
                    v = Jc.mouseLeave,
                    o = Jc.mouseEnter,
                    u = "mouse";
                else "pointerout" !== t && "pointerover" !== t || (l = gi, v = Jc.pointerLeave, o = Jc.pointerEnter, u = "pointer");
                if (t = null == n ? a : Hb(n), a = null == $ ? a : Hb($), (v = l.getPooled(v, n, e, r)).type = u + "leave", v.target = t, v.relatedTarget = a, (e = l.getPooled(o, $, e, r)).type = u + "enter", e.target = a, e.relatedTarget = t, u = $, (r = n) && u) t: {
                    for (o = u, n = 0, t = l = r; t; t = jb(t)) n++;
                    for (t = 0, $ = o; $; $ = jb($)) t++;
                    for (; 0 < n - t;) l = jb(l),
                    n--;
                    for (; 0 < t - n;) o = jb(o),
                    t--;
                    for (; n--;) {
                        if (l === o || l === o.alternate) break t;
                        l = jb(l), o = jb(o)
                    }
                    l = null
                }
                else l = null;
                for (o = l, l = []; r && r !== o && (null === (n = r.alternate) || n !== o);) l.push(r), r = jb(r);
                for (r = []; u && u !== o && (null === (n = u.alternate) || n !== o);) r.push(u), u = jb(u);
                for (u = 0; u < l.length; u++) Vf(l[u], "bubbled", v);
                for (u = r.length; 0 < u--;) Vf(r[u], "captured", e);
                return 0 == (64 & i) ? [v] : [v, e]
            }
        };
        Db = "function" == typeof Object.is ? Object.is : gq;
        Ho = Object.prototype.hasOwnProperty;
        Io = ob && "documentMode" in document && 11 >= document.documentMode;
        hi = {
            select: {
                phasedRegistrationNames: {
                    bubbled: "onSelect",
                    captured: "onSelectCapture"
                },
                dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")
            }
        };
        wd = null;
        Jo = null;
        ii = null;
        Ko = !1;
        Lo = {
            eventTypes: hi,
            extractEvents: function (t, $, e, r, i, a) {
                if (!(a = !(i = a || (r.window === r ? r.document : 9 === r.nodeType ? r : r.ownerDocument)))) {
                    t: {
                        i = If(i),
                        a = Xe.onSelect;
                        for (var n = 0; n < a.length; n++)
                            if (!i.has(a[n])) {
                                i = !1;
                                break t
                            } i = !0
                    }
                    a = !i
                }
                if (a) return null;
                switch (i = $ ? Hb($) : window, t) {
                    case "focus":
                        (Bj(i) || "true" === i.contentEditable) && (wd = i, Jo = $, ii = null);
                        break;
                    case "blur":
                        ii = Jo = wd = null;
                        break;
                    case "mousedown":
                        Ko = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        return Ko = !1, Fj(e, r);
                    case "selectionchange":
                        if (Io) break;
                    case "keydown":
                    case "keyup":
                        return Fj(e, r);
                }
                return null
            }
        };
        Mo = ua.extend({
            animationName: null,
            elapsedTime: null,
            pseudoElement: null
        });
        No = ua.extend({
            clipboardData: function (t) {
                return "clipboardData" in t ? t.clipboardData : window.clipboardData
            }
        });
        Oo = Hc.extend({
            relatedTarget: null
        });
        Po = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        };
        Qo = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        };
        Ro = Hc.extend({
            key: function (t) {
                if (t.key) {
                    var $ = Po[t.key] || t.key;
                    if ("Unidentified" !== $) return $
                }
                return "keypress" === t.type ? 13 === (t = Sd(t)) ? "Enter" : String.fromCharCode(t) : "keydown" === t.type || "keyup" === t.type ? Qo[t.keyCode] || "Unidentified" : ""
            },
            location: null,
            ctrlKey: null,
            shiftKey: null,
            altKey: null,
            metaKey: null,
            repeat: null,
            locale: null,
            getModifierState: Wf,
            charCode: function (t) {
                return "keypress" === t.type ? Sd(t) : 0
            },
            keyCode: function (t) {
                return "keydown" === t.type || "keyup" === t.type ? t.keyCode : 0
            },
            which: function (t) {
                return "keypress" === t.type ? Sd(t) : "keydown" === t.type || "keyup" === t.type ? t.keyCode : 0
            }
        });
        So = Ic.extend({
            dataTransfer: null
        });
        To = Hc.extend({
            touches: null,
            targetTouches: null,
            changedTouches: null,
            altKey: null,
            metaKey: null,
            ctrlKey: null,
            shiftKey: null,
            getModifierState: Wf
        });
        Uo = ua.extend({
            propertyName: null,
            elapsedTime: null,
            pseudoElement: null
        });
        Vo = Ic.extend({
            deltaX: function (t) {
                return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0
            },
            deltaY: function (t) {
                return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0
            },
            deltaZ: null,
            deltaMode: null
        });
        Wo = {
            eventTypes: Wh,
            extractEvents: function (t, $, e, r) {
                var i = Xh.get(t);
                if (!i) return null;
                switch (t) {
                    case "keypress":
                        if (0 === Sd(e)) return null;
                    case "keydown":
                    case "keyup":
                        t = Ro;
                        break;
                    case "blur":
                    case "focus":
                        t = Oo;
                        break;
                    case "click":
                        if (2 === e.button) return null;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        t = Ic;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        t = So;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        t = To;
                        break;
                    case Qh:
                    case Rh:
                    case Sh:
                        t = Mo;
                        break;
                    case Th:
                        t = Uo;
                        break;
                    case "scroll":
                        t = Hc;
                        break;
                    case "wheel":
                        t = Vo;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        t = No;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        t = gi;
                        break;
                    default:
                        t = ua;
                }
                return cc($ = t.getPooled(i, $, e, r)), $
            }
        };
        if (Ve) throw Error(aa(101));
        Ve = Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")), Ni();
        Xo = Xc;
        Ch = Uf, Zn = Xo, $n = Hb, Pi({
            SimpleEventPlugin: Wo,
            EnterLeaveEventPlugin: Go,
            ChangeEventPlugin: Ao,
            SelectEventPlugin: Lo,
            BeforeInputEventPlugin: yo
        });
        mf = [];
        Kc = -1;
        qb = {};
        na = {
            current: qb
        };
        sa = {
            current: !1
        };
        Xb = qb;
        Yo = la.unstable_runWithPriority;
        nf = la.unstable_scheduleCallback;
        ji = la.unstable_cancelCallback;
        ki = la.unstable_requestPaint; of = la.unstable_now;
        Zo = la.unstable_getCurrentPriorityLevel;
        xd = la.unstable_ImmediatePriority;
        li = la.unstable_UserBlockingPriority;
        mi = la.unstable_NormalPriority;
        ni = la.unstable_LowPriority;
        oi = la.unstable_IdlePriority;
        pi = {};
        $o = la.unstable_shouldYield;
        _o = void 0 !== ki ? ki : function () {};
        Yb = null;
        qi = null;
        ap = !1;
        ri = of ();
        Da = 1e4 > ri ? of : function () {
            return of() - ri
        };
        yd = {
            current: null
        };
        si = null;
        ti = null;
        bp = null;
        zd = !1;
        Lc = Na.ReactCurrentBatchConfig;
        ui = new ld.Component().refs;
        Ad = {
            isMounted: function (t) {
                return !!(t = t._reactInternalFiber) && Gb(t) === t
            },
            enqueueSetState: function (t, $, e) {
                t = t._reactInternalFiber;
                var r = Za(),
                    i = Lc.suspense;
                (i = ub(r = Kb(r, t, i), i)).payload = $, null != e && (i.callback = e), vb(t, i), wb(t, r)
            },
            enqueueReplaceState: function (t, $, e) {
                t = t._reactInternalFiber;
                var r = Za(),
                    i = Lc.suspense;
                (i = ub(r = Kb(r, t, i), i)).tag = 1, i.payload = $, null != e && (i.callback = e), vb(t, i), wb(t, r)
            },
            enqueueForceUpdate: function (t, $) {
                t = t._reactInternalFiber;
                var e = Za(),
                    r = Lc.suspense;
                (r = ub(e = Kb(e, t, r), r)).tag = 2, null != $ && (r.callback = $), vb(t, r), wb(t, e)
            }
        };
        Bd = Array.isArray;
        Zb = Tj(!0);
        pf = Tj(!1);
        Mc = {};
        Va = {
            current: Mc
        };
        Nc = {
            current: Mc
        };
        Oc = {
            current: Mc
        };
        ia = {
            current: 0
        };
        Cd = Na.ReactCurrentDispatcher;
        Ea = Na.ReactCurrentBatchConfig;
        Pc = 0;
        oa = null;
        Wa = null;
        rb = null;
        cp = !1;
        Dd = {
            readContext: Ha,
            useCallback: va,
            useContext: va,
            useEffect: va,
            useImperativeHandle: va,
            useLayoutEffect: va,
            useMemo: va,
            useReducer: va,
            useRef: va,
            useState: va,
            useDebugValue: va,
            useResponder: va,
            useDeferredValue: va,
            useTransition: va
        };
        dp = {
            readContext: Ha,
            useCallback: $j,
            useContext: Ha,
            useEffect: Wj,
            useImperativeHandle: function (t, $, e) {
                return e = null != e ? e.concat([t]) : null, hg(4, 2, Yj.bind(null, $, t), e)
            },
            useLayoutEffect: function (t, $) {
                return hg(4, 2, t, $)
            },
            useMemo: function (t, $) {
                var e = gc();
                return $ = void 0 === $ ? null : $, t = t(), e.memoizedState = [t, $], t
            },
            useReducer: function (t, $, e) {
                var r = gc();
                return $ = void 0 !== e ? e($) : $, r.memoizedState = r.baseState = $, t = (t = r.queue = {
                    pending: null,
                    dispatch: null,
                    lastRenderedReducer: t,
                    lastRenderedState: $
                }).dispatch = ak.bind(null, oa, t), [r.memoizedState, t]
            },
            useRef: function (t) {
                return t = {
                    current: t
                }, gc().memoizedState = t
            },
            useState: fg,
            useDebugValue: jg,
            useResponder: cg,
            useDeferredValue: function (t, $) {
                var e = fg(t),
                    r = e[0],
                    i = e[1];
                return Wj(function () {
                    var e = Ea.suspense;
                    Ea.suspense = void 0 === $ ? null : $;
                    try {
                        i(t)
                    } finally {
                        Ea.suspense = e
                    }
                }, [t, $]), r
            },
            useTransition: function (t) {
                var $ = fg(!1),
                    e = $[0];
                return $ = $[1], [$j(kg.bind(null, $, t), [$, t]), e]
            }
        };
        ep = {
            readContext: Ha,
            useCallback: be,
            useContext: Ha,
            useEffect: ae,
            useImperativeHandle: Zj,
            useLayoutEffect: Xj,
            useMemo: _j,
            useReducer: $d,
            useRef: Vj,
            useState: function () {
                return $d(Jb)
            },
            useDebugValue: jg,
            useResponder: cg,
            useDeferredValue: function (t, $) {
                var e = $d(Jb),
                    r = e[0],
                    i = e[1];
                return ae(function () {
                    var e = Ea.suspense;
                    Ea.suspense = void 0 === $ ? null : $;
                    try {
                        i(t)
                    } finally {
                        Ea.suspense = e
                    }
                }, [t, $]), r
            },
            useTransition: function (t) {
                var $ = $d(Jb),
                    e = $[0];
                return $ = $[1], [be(kg.bind(null, $, t), [$, t]), e]
            }
        };
        fp = {
            readContext: Ha,
            useCallback: be,
            useContext: Ha,
            useEffect: ae,
            useImperativeHandle: Zj,
            useLayoutEffect: Xj,
            useMemo: _j,
            useReducer: _d,
            useRef: Vj,
            useState: function () {
                return _d(Jb)
            },
            useDebugValue: jg,
            useResponder: cg,
            useDeferredValue: function (t, $) {
                var e = _d(Jb),
                    r = e[0],
                    i = e[1];
                return ae(function () {
                    var e = Ea.suspense;
                    Ea.suspense = void 0 === $ ? null : $;
                    try {
                        i(t)
                    } finally {
                        Ea.suspense = e
                    }
                }, [t, $]), r
            },
            useTransition: function (t) {
                var $ = _d(Jb),
                    e = $[0];
                return $ = $[1], [be(kg.bind(null, $, t), [$, t]), e]
            }
        };
        qf = null;
        vi = null;
        wi = !1;
        gp = Na.ReactCurrentOwner;
        xi = !1;
        rf = {
            dehydrated: null,
            retryTime: 0
        };
        hp = function (t, $) {
            for (var e = $.child; null !== e;) {
                if (5 === e.tag || 6 === e.tag) t.appendChild(e.stateNode);
                else if (4 !== e.tag && null !== e.child) {
                    e.child.return = e, e = e.child;
                    continue
                }
                if (e === $) break;
                for (; null === e.sibling;) {
                    if (null === e.return || e.return === $) return;
                    e = e.return
                }
                e.sibling.return = e.return, e = e.sibling
            }
        }, yi = function () {}, ip = function (t, $, e, r, i) {
            var a = t.memoizedProps;
            if (a !== r) {
                var n, l, v = $.stateNode;
                switch (Ib(Va.current), t = null, e) {
                    case "input":
                        a = Cf(v, a), r = Cf(v, r), t = [];
                        break;
                    case "option":
                        a = Ff(v, a), r = Ff(v, r), t = [];
                        break;
                    case "select":
                        a = pa({}, a, {
                            value: void 0
                        }), r = pa({}, r, {
                            value: void 0
                        }), t = [];
                        break;
                    case "textarea":
                        a = Gf(v, a), r = Gf(v, r), t = [];
                        break;
                    default:
                        "function" != typeof a.onClick && "function" == typeof r.onClick && (v.onclick = Od);
                }
                for (n in Pf(e, r), e = null, a)
                    if (!r.hasOwnProperty(n) && a.hasOwnProperty(n) && null != a[n])
                        if ("style" === n)
                            for (l in v = a[n]) v.hasOwnProperty(l) && (e || (e = {}), e[l] = "");
                        else "dangerouslySetInnerHTML" !== n && "children" !== n && "suppressContentEditableWarning" !== n && "suppressHydrationWarning" !== n && "autoFocus" !== n && (Ub.hasOwnProperty(n) ? t || (t = []) : (t = t || []).push(n, null));
                for (n in r) {
                    var o = r[n];
                    if (v = null != a ? a[n] : void 0, r.hasOwnProperty(n) && o !== v && (null != o || null != v))
                        if ("style" === n) {
                            if (v) {
                                for (l in v) !v.hasOwnProperty(l) || o && o.hasOwnProperty(l) || (e || (e = {}), e[l] = "");
                                for (l in o) o.hasOwnProperty(l) && v[l] !== o[l] && (e || (e = {}), e[l] = o[l])
                            } else e || (t || (t = []), t.push(n, e)), e = o;
                        } else "dangerouslySetInnerHTML" === n ? (o = o ? o.__html : void 0, v = v ? v.__html : void 0, null != o && v !== o && (t = t || []).push(n, o)) : "children" === n ? v === o || "string" != typeof o && "number" != typeof o || (t = t || []).push(n, "" + o) : "suppressContentEditableWarning" !== n && "suppressHydrationWarning" !== n && (Ub.hasOwnProperty(n) ? (null != o && ib(i, n), t || v === o || (t = [])) : (t = t || []).push(n, o))
                }
                e && (t = t || []).push("style", e), i = t, ($.updateQueue = i) && ($.effectTag |= 4)
            }
        }, jp = function (t, $, e, r) {
            e !== r && ($.effectTag |= 4)
        };
        kp = "function" == typeof WeakSet ? WeakSet : Set;
        lp = "function" == typeof WeakMap ? WeakMap : Map;
        np = Math.ceil;
        Ed = Na.ReactCurrentDispatcher;
        zi = Na.ReactCurrentOwner;
        ka = 0;
        sf = 8;
        Oa = 16;
        Xa = 32;
        Eb = 0;
        Fd = 1;
        Ai = 2;
        Gd = 3;
        Hd = 4;
        tf = 5;
        ha = ka;
        gb = null;
        ca = null;
        Fa = 0;
        Ga = Eb;
        Bi = null;
        Fb = 1073741823;
        uf = 1073741823;
        Ci = null;
        vf = 0;
        Di = !1;
        Ei = 0;
        Fi = 500;
        ba = null;
        Gi = !1;
        op = null;
        $b = null;
        Hi = !1;
        wf = null;
        xf = 90;
        Qc = null;
        Ii = 0;
        pp = null;
        Ji = 0;
        mp = function (t, $, e) {
            var r = $.expirationTime;
            if (null !== t) {
                var i = $.pendingProps;
                if (t.memoizedProps !== i || sa.current) xi = !0;
                else {
                    if (r < e) {
                        switch (xi = !1, $.tag) {
                            case 3:
                                jk($), mg();
                                break;
                            case 5:
                                if (Uj($), 4 & $.mode && 1 !== e && i.hidden) return $.expirationTime = $.childExpirationTime = 1, null;
                                break;
                            case 1:
                                ta($.type) && Ud($);
                                break;
                            case 4:
                                ag($, $.stateNode.containerInfo);
                                break;
                            case 10:
                                r = $.memoizedProps.value, i = $.type._context, ja(yd, i._currentValue), i._currentValue = r;
                                break;
                            case 13:
                                if (null !== $.memoizedState) return 0 !== (r = $.child.childExpirationTime) && r >= e ? kk(t, $, e) : (ja(ia, 1 & ia.current), null !== ($ = kb(t, $, e)) ? $.sibling : null);
                                ja(ia, 1 & ia.current);
                                break;
                            case 19:
                                if (r = $.childExpirationTime >= e, 0 != (64 & t.effectTag)) {
                                    if (r) return mk(t, $, e);
                                    $.effectTag |= 64
                                }
                                if (null !== (i = $.memoizedState) && (i.rendering = null, i.tail = null), ja(ia, ia.current), !r) return null;
                        }
                        return kb(t, $, e)
                    }
                    xi = !1
                }
            } else xi = !1;
            switch ($.expirationTime = 0, $.tag) {
                case 2:
                    if (r = $.type, null !== t && (t.alternate = null, $.alternate = null, $.effectTag |= 2), t = $.pendingProps, i = dc($, na.current), ec($, e), i = eg(null, $, r, t, i, e), $.effectTag |= 1, "object" == typeof i && null !== i && "function" == typeof i.render && void 0 === i.$$typeof) {
                        if ($.tag = 1, $.memoizedState = null, $.updateQueue = null, ta(r)) {
                            var a = !0;
                            Ud($)
                        } else a = !1;
                        $.memoizedState = null !== i.state && void 0 !== i.state ? i.state : null, Zf($);
                        var n = r.getDerivedStateFromProps;
                        "function" == typeof n && Xd($, r, n, t), i.updater = Ad, $.stateNode = i, i._reactInternalFiber = $, _f($, r, t, e), $ = og(null, $, r, !0, a, e)
                    } else $.tag = 0, Ia(null, $, i, e), $ = $.child;
                    return $;
                case 16:
                    t: {
                        if (i = $.elementType, null !== t && (t.alternate = null, $.alternate = null, $.effectTag |= 2), t = $.pendingProps, Kp(i), 1 !== i._status) throw i._result;
                        switch (i = i._result, $.type = i, a = $.tag = wq(i), t = Pa(i, t), a) {
                            case 0:
                                $ = ng(null, $, i, t, e);
                                break t;
                            case 1:
                                $ = ik(null, $, i, t, e);
                                break t;
                            case 11:
                                $ = ek(null, $, i, t, e);
                                break t;
                            case 14:
                                $ = fk(null, $, i, Pa(i.type, t), r, e);
                                break t;
                        }
                        throw Error(aa(306, i, ""))
                    }
                    return $;
                case 0:
                    return r = $.type, i = $.pendingProps, ng(t, $, r, i = $.elementType === r ? i : Pa(r, i), e);
                case 1:
                    return r = $.type, i = $.pendingProps, ik(t, $, r, i = $.elementType === r ? i : Pa(r, i), e);
                case 3:
                    if (jk($), r = $.updateQueue, null === t || null === r) throw Error(aa(282));
                    if (r = $.pendingProps, i = null !== (i = $.memoizedState) ? i.element : null, $f(t, $), Zc($, r, null, e), (r = $.memoizedState.element) === i) mg(), $ = kb(t, $, e);
                    else {
                        if ((i = $.stateNode.hydrate) && (vi = bc($.stateNode.containerInfo.firstChild), qf = $, i = wi = !0), i)
                            for (e = pf($, null, r, e), $.child = e; e;) e.effectTag = -3 & e.effectTag | 1024, e = e.sibling;
                        else Ia(t, $, r, e), mg();
                        $ = $.child
                    }
                    return $;
                case 5:
                    return Uj($), null === t && lg($), r = $.type, i = $.pendingProps, a = null !== t ? t.memoizedProps : null, n = i.children, Tf(r, i) ? n = null : null !== a && Tf(r, a) && ($.effectTag |= 16), hk(t, $), 4 & $.mode && 1 !== e && i.hidden ? ($.expirationTime = $.childExpirationTime = 1, $ = null) : (Ia(t, $, n, e), $ = $.child), $;
                case 6:
                    return null === t && lg($), null;
                case 13:
                    return kk(t, $, e);
                case 4:
                    return ag($, $.stateNode.containerInfo), r = $.pendingProps, null === t ? $.child = Zb($, null, r, e) : Ia(t, $, r, e), $.child;
                case 11:
                    return r = $.type, i = $.pendingProps, ek(t, $, r, i = $.elementType === r ? i : Pa(r, i), e);
                case 7:
                    return Ia(t, $, $.pendingProps, e), $.child;
                case 8:
                case 12:
                    return Ia(t, $, $.pendingProps.children, e), $.child;
                case 10:
                    t: {
                        r = $.type._context,
                        i = $.pendingProps,
                        n = $.memoizedProps,
                        a = i.value;
                        var l = $.type._context;
                        if (ja(yd, l._currentValue), l._currentValue = a, null !== n)
                            if (l = n.value, 0 === (a = Db(l, a) ? 0 : 0 | ("function" == typeof r._calculateChangedBits ? r._calculateChangedBits(l, a) : 1073741823))) {
                                if (n.children === i.children && !sa.current) {
                                    $ = kb(t, $, e);
                                    break t
                                }
                            } else
                                for (null !== (l = $.child) && (l.return = $); null !== l;) {
                                    var v = l.dependencies;
                                    if (null !== v) {
                                        n = l.child;
                                        for (var o = v.firstContext; null !== o;) {
                                            if (o.context === r && 0 != (o.observedBits & a)) {
                                                1 === l.tag && ((o = ub(e, null)).tag = 2, vb(l, o)), l.expirationTime < e && (l.expirationTime = e), null !== (o = l.alternate) && o.expirationTime < e && (o.expirationTime = e), Nj(l.return, e), v.expirationTime < e && (v.expirationTime = e);
                                                break
                                            }
                                            o = o.next
                                        }
                                    } else n = 10 === l.tag && l.type === $.type ? null : l.child;
                                    if (null !== n) n.return = l;
                                    else
                                        for (n = l; null !== n;) {
                                            if (n === $) {
                                                n = null;
                                                break
                                            }
                                            if (null !== (l = n.sibling)) {
                                                l.return = n.return, n = l;
                                                break
                                            }
                                            n = n.return
                                        }
                                    l = n
                                }
                        Ia(t, $, i.children, e),
                        $ = $.child
                    }
                    return $;
                case 9:
                    return i = $.type, r = (a = $.pendingProps).children, ec($, e), r = r(i = Ha(i, a.unstable_observedBits)), $.effectTag |= 1, Ia(t, $, r, e), $.child;
                case 14:
                    return a = Pa(i = $.type, $.pendingProps), fk(t, $, i, a = Pa(i.type, a), r, e);
                case 15:
                    return gk(t, $, $.type, $.pendingProps, r, e);
                case 17:
                    return r = $.type, i = $.pendingProps, i = $.elementType === r ? i : Pa(r, i), null !== t && (t.alternate = null, $.alternate = null, $.effectTag |= 2), $.tag = 1, ta(r) ? (t = !0, Ud($)) : t = !1, ec($, e), Rj($, r, i), _f($, r, i, e), og(null, $, r, !0, t, e);
                case 19:
                    return mk(t, $, e);
            }
            throw Error(aa(156, $.tag))
        };
        Ki = null;
        Li = null;
        Dg.prototype.render = function (t) {
            je(t, this._internalRoot, null, null)
        }, Dg.prototype.unmount = function () {
            var t = this._internalRoot,
                $ = t.containerInfo;
            je(null, t, null, function () {
                $[Fc] = null
            })
        }, go = function (t) {
            if (13 === t.tag) {
                var $ = Wd(Za(), 150, 100);
                wb(t, $), Cg(t, $)
            }
        }, Vh = function (t) {
            13 === t.tag && (wb(t, 3), Cg(t, 3))
        }, ho = function (t) {
            if (13 === t.tag) {
                var $ = Za();
                wb(t, $ = Kb($, t, null)), Cg(t, $)
            }
        }, Dh = function (t, $, e) {
            switch ($) {
                case "input":
                    if (Df(t, e), $ = e.name, "radio" === e.type && null != $) {
                        for (e = t; e.parentNode;) e = e.parentNode;
                        for (e = e.querySelectorAll("input[name=" + JSON.stringify("" + $) + "][type=\"radio\"]"), $ = 0; $ < e.length; $++) {
                            var r = e[$];
                            if (r !== t && r.form === t.form) {
                                var i = Uf(r);
                                if (!i) throw Error(aa(90));
                                Xi(r), Df(r, i)
                            }
                        }
                    }
                    break;
                case "textarea":
                    aj(t, e);
                    break;
                case "select":
                    null != ($ = e.value) && _b(t, !!e.multiple, $, !1);
            }
        }, Ti = zk, Gp = function (t, $, e, r, i) {
            var a = ha;
            ha |= 4;
            try {
                return tb(98, t.bind(null, $, e, r, i))
            } finally {
                (ha = a) === ka && Ya()
            }
        }, Ui = function () {
            (ha & (1 | Oa | Xa)) === ka && (mq(), ic())
        }, _n = function (t, $) {
            var e = ha;
            ha |= 2;
            try {
                return t($)
            } finally {
                (ha = e) === ka && Ya()
            }
        };
        qp = {
            Events: [Xc, Hb, Uf, Pi, We, cc, function (t) {
                Jf(t, Wp)
            }, Ri, Si, Nd, Ld, ic, {
                current: !1
            }]
        };
        ! function (t) {
            var $ = t.findFiberByHostInstance;
            uq(pa({}, t, {
                overrideHookState: null,
                overrideProps: null,
                setSuspenseHandler: null,
                scheduleUpdate: null,
                currentDispatcherRef: Na.ReactCurrentDispatcher,
                findHostInstanceByFiber: function (t) {
                    return null === (t = fj(t)) ? null : t.stateNode
                },
                findFiberByHostInstance: function (t) {
                    return $ ? $(t) : null
                },
                findHostInstancesForRefresh: null,
                scheduleRefresh: null,
                scheduleRoot: null,
                setRefreshHandler: null,
                getCurrentFiber: null
            }))
        }({
            findFiberByHostInstance: Wc,
            bundleType: 0,
            version: "16.13.1",
            rendererPackageName: "react-dom"
        });
        rp = qp;
        Ca.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rp;
        sp = Kk;
        Ca.createPortal = sp;
        tp = function (t) {
            if (null == t) return null;
            if (1 === t.nodeType) return t;
            var $ = t._reactInternalFiber;
            if (void 0 === $) {
                if ("function" == typeof t.render) throw Error(aa(188));
                throw Error(aa(268, Object.keys(t)))
            }
            return t = null === (t = fj($)) ? null : t.stateNode
        };
        Ca.findDOMNode = tp;
        up = function (t, $) {
            if ((ha & (Oa | Xa)) !== ka) throw Error(aa(187));
            var e = ha;
            ha |= 1;
            try {
                return tb(99, t.bind(null, $))
            } finally {
                ha = e, Ya()
            }
        };
        Ca.flushSync = up;
        vp = function (t, $, e) {
            if (!_c($)) throw Error(aa(200));
            return ke(null, t, $, !0, e)
        };
        Ca.hydrate = vp;
        wp = function (t, $, e) {
            if (!_c($)) throw Error(aa(200));
            return ke(null, t, $, !1, e)
        };
        Ca.render = wp;
        xp = function (t) {
            if (!_c(t)) throw Error(aa(40));
            return !!t._reactRootContainer && (Ak(function () {
                ke(null, null, t, !1, function () {
                    t._reactRootContainer = null, t[Fc] = null
                })
            }), !0)
        };
        Ca.unmountComponentAtNode = xp;
        yp = zk;
        Ca.unstable_batchedUpdates = yp;
        zp = function (t, $) {
            return Kk(t, $, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null)
        };
        Ca.unstable_createPortal = zp;
        Ap = function (t, $, e, r) {
            if (!_c(e)) throw Error(aa(200));
            if (null == t || void 0 === t._reactInternalFiber) throw Error(aa(38));
            return ke(t, $, e, !1, r)
        };
        Ca.unstable_renderSubtreeIntoContainer = Ap;
        Bp = "16.13.1";
        Ca.version = Bp
    }
    var Eg, Bq = false;

    function Lk() {
        if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) {
            0;
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lk)
            } catch (c) {
                console.error(c)
            }
        }
    }

    function Fg() {
        if (Bq) return;
        Bq = true;
        Eg = {};
        Lk(), Eg = (Aq(), Ca)
    }
    var xa = {};

    function Mk(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            t && (a = a.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), r.push.apply(r, a)
        }
        return r
    }

    function Cq(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Mk(Object(r), !0).forEach(function (t) {
                Dq(e, t, r[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Mk(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            })
        }
        return e
    }

    function Dq(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = r, e
    }
    var Eq = xa && xa.__createBinding || (Object.create ? function (e, t, r, a) {
            void 0 === a && (a = r), Object.defineProperty(e, a, {
                enumerable: !0,
                get: function () {
                    return t[r]
                }
            })
        } : function (e, t, r, a) {
            void 0 === a && (a = r), e[a] = t[r]
        }),
        Fq = xa && xa.__setModuleDefault || (Object.create ? function (e, t) {
            Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            })
        } : function (e, t) {
            e.default = t
        }),
        Nk = xa && xa.__importStar || function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) "default" !== r && Object.hasOwnProperty.call(e, r) && Eq(t, e, r);
            return Fq(t, e), t
        },
        le = xa && xa.__importDefault || function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(xa, "__esModule", {
        value: !0
    });
    var Gg = void 0;
    xa.Global = Gg;
    const Qb = Nk((cb(), bb)),
        Gq = le(tc),
        Hq = le(vc),
        Iq = le(eb);
    const Jq = le((Fg(), Eg)),
        Ok = Qb.createContext({});
    Gg = Ok, xa.Global = Gg;
    class Kq extends Qb.Component {
        constructor() {
            super(...arguments), this.state = {
                nowPackagePos: 0
            }
        }
        handleTabSelectionChange(e) {
            this.setState({
                nowPackagePos: e
            })
        }
        handleFaceSelected(e) {
            const t = this.props.facePacks[this.state.nowPackagePos];
            this.props.onFaceSelected(t, t.faces[e]), this.props.handleHide()
        }
        createPeakContainer() {
            this.peakContainer = document.createElement("div"), this.peakContainer.setAttribute("id", "peak-container"), this.hidePeak(), this.props.refRoot.append(this.peakContainer), this.peakPopper = $g(this.props.refRoot, this.peakContainer, this.props.peakPopperOptions)
        }
        removePeakContainer() {
            Promise.resolve().then(() => Nk((Fg(), Eg))).then(e => {
                e.unmountComponentAtNode(this.peakContainer), this.peakPopper.destroy(), this.peakPopper = void 0, document.removeChild(this.peakContainer), this.peakContainer = void 0
            })
        }
        renderPeak(e, t) {
            Jq.default.render(Qb.createElement(Iq.default, {
                imgUrl: e,
                imgCaption: t
            }), this.peakContainer)
        }
        hidePeak() {
            this.peakContainer.setAttribute("hidden", "hidden")
        }
        showPeak() {
            try {
                this.peakContainer.removeAttribute("hidden")
            } catch (e) {
                console.warn(e)
            }
        }
        componentDidMount() {
            this.createPeakContainer()
        }
        componentWillUnmount() {
            this.removePeakContainer()
        }
        render() {
            let e = this.state.nowPackagePos;
            const t = this.props.facePacks.length - 1;
            return e > t && (e = t), Qb.createElement("div", {
                style: Cq({}, this.props.style),
                className: "fp-border-shadow" + (this.props.className ? this.props.className : "")
            }, Qb.createElement(Hq.default, {
                facePackages: this.props.facePacks,
                onSelected: e => this.handleTabSelectionChange(e),
                selectedPos: this.state.nowPackagePos
            }), Qb.createElement(Ok.Provider, {
                value: {
                    showPeak: (e, t) => {
                        this.renderPeak(e, t), this.showPeak()
                    },
                    hidePeak: this.hidePeak.bind(this)
                }
            }, Qb.createElement(Gq.default, {
                facePackage: this.props.facePacks[e],
                colCount: this.props.colCount,
                onImageSelected: this.handleFaceSelected.bind(this)
            })))
        }
    }
    var Lq = Kq;
    xa.default = Lq;
    var ad = {},
        Hg = ad && ad.__importDefault || function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(ad, "__esModule", {
        value: !0
    });
    const Mq = Hg(xa),
        Pk = Hg((Fg(), Eg)),
        Nq = Hg((cb(), bb));
    class Oq {
        constructor(e) {
            this._displayed = !0, this._popcorn = e.popcorn, this._tooltip = e.tooltip, this._onFaceSelected = e.onFaceSelected || function () {}, this._facePacks = e.facePackages, this._popperOptions = e.popperOptions, this._style = e.style, this._className = e.className, this._peakPopperOptions = e.peakPopperOptions
        }
        render() {
            return Pk.default.render(Nq.default.createElement(Mq.default, {
                facePacks: this._facePacks,
                colCount: 3,
                handleHide: this.hide.bind(this),
                onFaceSelected: this._onFaceSelected,
                refRoot: this._tooltip,
                peakPopperOptions: this._peakPopperOptions,
                style: this._style,
                className: this._className
            }), this._tooltip), $g(this._popcorn, this._tooltip, this._popperOptions), this._popcorn.addEventListener("click", this._handlePopcornClick.bind(this)), this
        }
        _handlePopcornClick(e) {
            this.hide()
        }
        hide() {
            this._displayed ? (this._tooltip.setAttribute("hidden", "hidden"), this._displayed = !1) : (this._tooltip.removeAttribute("hidden"), this._displayed = !0)
        }
        unload() {
            return Pk.default.unmountComponentAtNode(this._tooltip), this._popcorn.removeEventListener("click", this._handlePopcornClick), this
        }
    }
    var Pq = Oq;
    ad.default = Pq;
    var bd = {},
        Qq = bd && bd.__importDefault || function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(bd, "__esModule", {
        value: !0
    });
    const Rq = Qq(ad);
    (async () => {
        const e = document.getElementById("comment");
        new Rq.default({
            popcorn: document.getElementById("show-fs"),
            tooltip: document.getElementById("fs-c"),
            facePackages: await se("https://cdn.jsdelivr.net/gh/YukiCat-Dev/yukicat.facepack/facepacks.json"),
            onFaceSelected: (t, r) => {
                e.value += ":".concat(t.id, ".").concat(r.id, ":")
            },
            popperOptions: {
                placement: "top"
            },
            peakPopperOptions: {
                placement: "right-start",
                modifiers: [{
                    name: "offset",
                    options: {
                        offset: [10, 20]
                    }
                }]
            },
            style: {
                backgroundColor: "#FFFFFF",
                padding: "2px",
                borderWidth: "3px"
            }
        }).render().hide()
    })();
    if (typeof exports === "object" && typeof module !== "undefined") {
        module.exports = bd
    } else if (typeof define === "function" && define.amd) {
        define(function () {
            return bd
        })
    }
})();