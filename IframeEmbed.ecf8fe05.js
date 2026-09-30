import {
    n as We
} from "./main.d82f623b.js";
var Fe = {
    exports: {}
};
(function(O) {
    console.info(`
IFRAME-RESIZER

Iframe-Resizer 5 is now available via the following two packages:

 * @iframe-resizer/parent
 * @iframe-resizer/child

Additionally their are also new versions of iframe-resizer for React, Vue, and jQuery.

Version 5 of iframe-resizer has been extensively rewritten to use modern browser APIs, which has enabled significantly better performance and greater accuracy in the detection of content resizing events.

Please see https://iframe-resizer.com/upgrade for more details.
`),
        function(F) {
            if (typeof window == "undefined") return;
            var W = 0,
                j, ie = !1,
                re = !1,
                Me = "message",
                ze = Me.length,
                H = "[iFrameSizer]",
                B = H.length,
                v = null,
                N = window.requestAnimationFrame,
                Re = Object.freeze({
                    max: 1,
                    scroll: 1,
                    bodyScroll: 1,
                    documentElementScroll: 1
                }),
                n = {},
                V = null,
                A = Object.freeze({
                    autoResize: !0,
                    bodyBackground: null,
                    bodyMargin: null,
                    bodyMarginV1: 8,
                    bodyPadding: null,
                    checkOrigin: !0,
                    inPageLinks: !1,
                    enablePublicMethods: !0,
                    heightCalculationMethod: "bodyOffset",
                    id: "iFrameResizer",
                    interval: 32,
                    license: "1jqr0si6pnt",
                    log: !1,
                    maxHeight: 1 / 0,
                    maxWidth: 1 / 0,
                    minHeight: 0,
                    minWidth: 0,
                    mouseEvents: !0,
                    resizeFrom: "parent",
                    scrolling: !1,
                    sizeHeight: !0,
                    sizeWidth: !1,
                    warningTimeout: 5e3,
                    tolerance: 0,
                    widthCalculationMethod: "scroll",
                    onClose: function() {
                        return !0
                    },
                    onClosed: function() {},
                    onInit: function() {},
                    onMessage: function() {
                        M("onMessage function not defined")
                    },
                    onMouseEnter: function() {},
                    onMouseLeave: function() {},
                    onResized: function() {},
                    onScroll: function() {
                        return !0
                    }
                });

            function oe() {
                return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
            }

            function L(e, t, c) {
                e.addEventListener(t, c, !1)
            }

            function ke(e, t, c) {
                e.removeEventListener(t, c, !1)
            }

            function xe() {
                var e = ["moz", "webkit", "o", "ms"],
                    t;
                for (t = 0; t < e.length && !N; t += 1) N = window[e[t] + "RequestAnimationFrame"];
                N ? N = N.bind(window) : l("setup", "RequestAnimationFrame not supported")
            }

            function Oe(e) {
                var t = "Host page: " + e;
                return window.top !== window.self && (t = window.parentIFrame && window.parentIFrame.getId ? window.parentIFrame.getId() + ": " + e : "Nested host page: " + e), t
            }

            function Ee(e) {
                return H + "[" + Oe(e) + "]"
            }

            function ae(e) {
                return n[e] ? n[e].log : ie
            }

            function l(e, t) {
                U("log", e, t, ae(e))
            }

            function se(e, t) {
                U("info", e, t, ae(e))
            }

            function M(e, t) {
                U("warn", e, t, !0)
            }

            function U(e, t, c, o) {
                o === !0 && typeof window.console == "object" && console[e](Ee(t), c)
            }

            function Ie(e) {
                function t() {
                    function i() {
                        ge(g), fe(s), S("onResized", g)
                    }
                    f("Height"), f("Width"), me(i, g, "init")
                }

                function c() {
                    var i = R.slice(B).split(":"),
                        u = i[1] ? parseInt(i[1], 10) : 0,
                        m = n[i[0]] && n[i[0]].iframe,
                        h = getComputedStyle(m);
                    return {
                        iframe: m,
                        id: i[0],
                        height: u + o(h) + d(h),
                        width: i[2],
                        type: i[3]
                    }
                }

                function o(i) {
                    if (i.boxSizing !== "border-box") return 0;
                    var u = i.paddingTop ? parseInt(i.paddingTop, 10) : 0,
                        m = i.paddingBottom ? parseInt(i.paddingBottom, 10) : 0;
                    return u + m
                }

                function d(i) {
                    if (i.boxSizing !== "border-box") return 0;
                    var u = i.borderTopWidth ? parseInt(i.borderTopWidth, 10) : 0,
                        m = i.borderBottomWidth ? parseInt(i.borderBottomWidth, 10) : 0;
                    return u + m
                }

                function f(i) {
                    var u = Number(n[s]["max" + i]),
                        m = Number(n[s]["min" + i]),
                        h = i.toLowerCase(),
                        w = Number(g[h]);
                    l(s, "Checking " + h + " is in range " + m + "-" + u), w < m && (w = m, l(s, "Set " + h + " to min value")), w > u && (w = u, l(s, "Set " + h + " to max value")), g[h] = "" + w
                }

                function x() {
                    function i() {
                        function h() {
                            var y = 0,
                                T = !1;
                            for (l(s, "Checking connection is from allowed list of origins: " + m); y < m.length; y++)
                                if (m[y] === u) {
                                    T = !0;
                                    break
                                }
                            return T
                        }

                        function w() {
                            var y = n[s] && n[s].remoteHost;
                            return l(s, "Checking connection is from: " + y), u === y
                        }
                        return m.constructor === Array ? h() : w()
                    }
                    var u = e.origin,
                        m = n[s] && n[s].checkOrigin;
                    if (m && "" + u != "null" && !i()) throw new Error("Unexpected message received from: " + u + " for " + g.iframe.id + ". Message was: " + e.data + ". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");
                    return !0
                }

                function C() {
                    return H === ("" + R).slice(0, B) && R.slice(B).split(":")[0] in n
                }

                function E() {
                    var i = g.type in {
                        true: 1,
                        false: 1,
                        undefined: 1
                    };
                    return i && l(s, "Ignoring init message from meta parent page"), i
                }

                function I(i) {
                    return R.slice(R.indexOf(":") + ze + i)
                }

                function P(i) {
                    l(s, "onMessage passed: {iframe: " + g.iframe.id + ", message: " + i + "}"), S("onMessage", {
                        iframe: g.iframe,
                        message: JSON.parse(i)
                    }), l(s, "--")
                }

                function G() {
                    var i = document.body.getBoundingClientRect(),
                        u = g.iframe.getBoundingClientRect();
                    return JSON.stringify({
                        iframeHeight: u.height,
                        iframeWidth: u.width,
                        clientHeight: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
                        clientWidth: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
                        offsetTop: parseInt(u.top - i.top, 10),
                        offsetLeft: parseInt(u.left - i.left, 10),
                        scrollTop: window.pageYOffset,
                        scrollLeft: window.pageXOffset,
                        documentHeight: document.documentElement.clientHeight,
                        documentWidth: document.documentElement.clientWidth,
                        windowHeight: window.innerHeight,
                        windowWidth: window.innerWidth
                    })
                }

                function _(i, u) {
                    function m() {
                        k("Send Page Info", "pageInfo:" + G(), i, u)
                    }
                    Pe(m, 32, u)
                }

                function K() {
                    function i(w, y) {
                        function T() {
                            n[h] ? _(n[h].iframe, h) : u()
                        }["scroll", "resize"].forEach(function(ve) {
                            l(h, w + ve + " listener for sendPageInfo"), y(window, ve, T)
                        })
                    }

                    function u() {
                        i("Remove ", ke)
                    }

                    function m() {
                        i("Add ", L)
                    }
                    var h = s;
                    m(), n[h] && (n[h].stopPageInfo = u)
                }

                function D() {
                    n[s] && n[s].stopPageInfo && (n[s].stopPageInfo(), delete n[s].stopPageInfo)
                }

                function $() {
                    var i = !0;
                    return g.iframe === null && (M(s, "IFrame (" + g.id + ") not found"), i = !1), i
                }

                function r(i) {
                    var u = i.getBoundingClientRect();
                    return ce(s), {
                        x: Math.floor(Number(u.left) + Number(v.x)),
                        y: Math.floor(Number(u.top) + Number(v.y))
                    }
                }

                function a(i) {
                    function u() {
                        v = y, p(), l(s, "--")
                    }

                    function m() {
                        return {
                            x: Number(g.width) + w.x,
                            y: Number(g.height) + w.y
                        }
                    }

                    function h() {
                        window.parentIFrame ? window.parentIFrame["scrollTo" + (i ? "Offset" : "")](y.x, y.y) : M(s, "Unable to scroll to requested position, window.parentIFrame not found")
                    }
                    var w = i ? r(g.iframe) : {
                            x: 0,
                            y: 0
                        },
                        y = m();
                    l(s, "Reposition requested from iFrame (offset x:" + w.x + " y:" + w.y + ")"), window.top === window.self ? u() : h()
                }

                function p() {
                    S("onScroll", v) === !1 ? le() : fe(s)
                }

                function b(i) {
                    function u() {
                        var T = r(y);
                        l(s, "Moving to in page link (#" + h + ") at x: " + T.x + " y: " + T.y), v = {
                            x: T.x,
                            y: T.y
                        }, p(), l(s, "--")
                    }

                    function m() {
                        window.parentIFrame ? window.parentIFrame.moveToAnchor(h) : l(s, "In page link #" + h + " not found and window.parentIFrame not found")
                    }
                    var h = i.split("#")[1] || "",
                        w = decodeURIComponent(h),
                        y = document.getElementById(w) || document.getElementsByName(w)[0];
                    y ? u() : window.top === window.self ? l(s, "In page link #" + h + " not found") : m()
                }

                function z(i) {
                    var u = {};
                    if (Number(g.width) === 0 && Number(g.height) === 0) {
                        var m = I(9).split(":");
                        u = {
                            x: m[1],
                            y: m[0]
                        }
                    } else u = {
                        x: g.width,
                        y: g.height
                    };
                    S(i, {
                        iframe: g.iframe,
                        screenX: Number(u.x),
                        screenY: Number(u.y),
                        type: g.type
                    })
                }

                function S(i, u) {
                    return J(s, i, u)
                }

                function q() {
                    switch (n[s] && n[s].firstRun && te(), g.type) {
                        case "close":
                            {
                                Q(g.iframe);
                                break
                            }
                        case "message":
                            {
                                P(I(6));
                                break
                            }
                        case "mouseenter":
                            {
                                z("onMouseEnter");
                                break
                            }
                        case "mouseleave":
                            {
                                z("onMouseLeave");
                                break
                            }
                        case "autoResize":
                            {
                                n[s].autoResize = JSON.parse(I(9));
                                break
                            }
                        case "scrollTo":
                            {
                                a(!1);
                                break
                            }
                        case "scrollToOffset":
                            {
                                a(!0);
                                break
                            }
                        case "pageInfo":
                            {
                                _(n[s] && n[s].iframe, s),
                                K();
                                break
                            }
                        case "pageInfoStop":
                            {
                                D();
                                break
                            }
                        case "inPageLink":
                            {
                                b(I(9));
                                break
                            }
                        case "reset":
                            {
                                de(g);
                                break
                            }
                        case "init":
                            {
                                t(),
                                S("onInit", g.iframe);
                                break
                            }
                        default:
                            Number(g.width) === 0 && Number(g.height) === 0 ? M("Unsupported message received (" + g.type + "), this is likely due to the iframe containing a later version of iframe-resizer than the parent page") : t()
                    }
                }

                function ee(i) {
                    var u = !0;
                    return n[i] || (u = !1, M(g.type + " No settings for " + i + ". Message was: " + R)), u
                }

                function ne() {
                    for (var i in n) k("iFrame requested init", he(i), n[i].iframe, i)
                }

                function te() {
                    n[s] && (n[s].firstRun = !1)
                }
                var R = e.data,
                    g = {},
                    s = null;
                R === "[iFrameResizerChild]Ready" ? ne() : C() ? (g = c(), s = g.id, n[s] && (n[s].loaded = !0), !E() && ee(s) && (l(s, "Received: " + R), $() && x() && q())) : se(s, "Ignored: " + R)
            }

            function J(e, t, c) {
                var o = null,
                    d = null;
                if (n[e])
                    if (o = n[e][t], typeof o == "function") d = o(c);
                    else throw new TypeError(t + " on iFrame[" + e + "] is not a function");
                return d
            }

            function ue(e) {
                var t = e.id;
                delete n[t]
            }

            function Q(e) {
                var t = e.id;
                if (J(t, "onClose", t) === !1) {
                    l(t, "Close iframe cancelled by onClose event");
                    return
                }
                l(t, "Removing iFrame: " + t);
                try {
                    e.parentNode && e.parentNode.removeChild(e)
                } catch (c) {
                    M(c)
                }
                J(t, "onClosed", t), l(t, "--"), ue(e), j && (j.disconnect(), j = null)
            }

            function ce(e) {
                v === null && (v = {
                    x: window.pageXOffset === F ? document.documentElement.scrollLeft : window.pageXOffset,
                    y: window.pageYOffset === F ? document.documentElement.scrollTop : window.pageYOffset
                }, l(e, "Get page position: " + v.x + "," + v.y))
            }

            function fe(e) {
                v !== null && (window.scrollTo(v.x, v.y), l(e, "Set page position: " + v.x + "," + v.y), le())
            }

            function le() {
                v = null
            }

            function de(e) {
                function t() {
                    ge(e), k("reset", "reset", e.iframe, e.id)
                }
                l(e.id, "Size reset requested by " + (e.type === "init" ? "host page" : "iFrame")), ce(e.id), me(t, e, "reset")
            }

            function ge(e) {
                function t(f) {
                    if (!e.id) {
                        l("undefined", "messageData id not set");
                        return
                    }
                    e.iframe.style[f] = e[f] + "px", l(e.id, "IFrame (" + d + ") " + f + " set to " + e[f] + "px")
                }

                function c(f) {
                    !re && e[f] === "0" && (re = !0, l(d, "Hidden iFrame detected, creating visibility listener"), Ne())
                }

                function o(f) {
                    t(f), c(f)
                }
                var d = e.iframe.id;
                n[d] && (n[d].sizeHeight && o("height"), n[d].sizeWidth && o("width"))
            }

            function me(e, t, c) {
                c !== t.type && N && !window.jasmine ? (l(t.id, "Requesting animation frame"), N(e)) : e()
            }

            function k(e, t, c, o, d) {
                function f() {
                    var P = n[o] && n[o].targetOrigin;
                    l(o, "[" + e + "] Sending msg to iframe[" + o + "] (" + t + ") targetOrigin: " + P), c.contentWindow.postMessage(H + t, P)
                }

                function x() {
                    M(o, "[" + e + "] IFrame(" + o + ") not found")
                }

                function C() {
                    c && "contentWindow" in c && c.contentWindow !== null ? f() : x()
                }

                function E() {
                    function P() {
                        n[o] && !n[o].loaded && !I && (I = !0, M(o, "IFrame has not responded within " + n[o].warningTimeout / 1e3 + " seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."))
                    }!!d && n[o] && !!n[o].warningTimeout && (n[o].msgTimeout = setTimeout(P, n[o].warningTimeout))
                }
                var I = !1;
                o = o || c.id, n[o] && (C(), E())
            }

            function he(e) {
                return e + ":" + n[e].bodyMarginV1 + ":" + n[e].sizeWidth + ":" + n[e].log + ":" + n[e].interval + ":" + n[e].enablePublicMethods + ":" + n[e].autoResize + ":" + n[e].bodyMargin + ":" + n[e].heightCalculationMethod + ":" + n[e].bodyBackground + ":" + n[e].bodyPadding + ":" + n[e].tolerance + ":" + n[e].inPageLinks + ":" + n[e].resizeFrom + ":" + n[e].widthCalculationMethod + ":" + n[e].mouseEvents
            }

            function Te(e) {
                return typeof e == "number"
            }

            function pe(e, t) {
                function c() {
                    function a(b) {
                        var z = n[r][b];
                        z !== 1 / 0 && z !== 0 && (e.style[b] = Te(z) ? z + "px" : z, l(r, "Set " + b + " = " + e.style[b]))
                    }

                    function p(b) {
                        if (n[r]["min" + b] > n[r]["max" + b]) throw new Error("Value for min" + b + " can not be greater than max" + b)
                    }
                    p("Height"), p("Width"), a("maxHeight"), a("minHeight"), a("maxWidth"), a("minWidth")
                }

                function o() {
                    var a = t && t.id || A.id + W++;
                    return document.getElementById(a) !== null && (a += W++), a
                }

                function d(a) {
                    if (typeof a != "string") throw new TypeError("Invaild id for iFrame. Expected String");
                    return a === "" && (e.id = a = o(), ie = (t || {}).log, l(a, "Added missing iframe ID: " + a + " (" + e.src + ")")), a
                }

                function f() {
                    switch (l(r, "IFrame scrolling " + (n[r] && n[r].scrolling ? "enabled" : "disabled") + " for " + r), e.style.overflow = (n[r] && n[r].scrolling) === !1 ? "hidden" : "auto", n[r] && n[r].scrolling) {
                        case "omit":
                            break;
                        case !0:
                            {
                                e.scrolling = "yes";
                                break
                            }
                        case !1:
                            {
                                e.scrolling = "no";
                                break
                            }
                        default:
                            e.scrolling = n[r] ? n[r].scrolling : "no"
                    }
                }

                function x() {
                    (typeof(n[r] && n[r].bodyMargin) == "number" || (n[r] && n[r].bodyMargin) === "0") && (n[r].bodyMarginV1 = n[r].bodyMargin, n[r].bodyMargin = "" + n[r].bodyMargin + "px")
                }

                function C() {
                    var a = n[r] && n[r].firstRun,
                        p = n[r] && n[r].heightCalculationMethod in Re;
                    !a && p && de({
                        iframe: e,
                        height: 0,
                        width: 0,
                        type: "init"
                    })
                }

                function E() {
                    n[r] && (n[r].iframe.iFrameResizer = {
                        close: Q.bind(null, n[r].iframe),
                        removeListeners: ue.bind(null, n[r].iframe),
                        resize: k.bind(null, "Window resize", "resize", n[r].iframe),
                        moveToAnchor: function(a) {
                            k("Move to anchor", "moveToAnchor:" + a, n[r].iframe, r)
                        },
                        sendMessage: function(a) {
                            a = JSON.stringify(a), k("Send Message", "message:" + a, n[r].iframe, r)
                        }
                    })
                }

                function I(a) {
                    function p() {
                        k("iFrame.onload", a, e, F, !0), C()
                    }

                    function b(S) {
                        if (!e.parentNode) return null;
                        var q = new S(function(ee) {
                            ee.forEach(function(ne) {
                                var te = Array.prototype.slice.call(ne.removedNodes);
                                te.forEach(function(R) {
                                    R === e && Q(e)
                                })
                            })
                        });
                        return q.observe(e.parentNode, {
                            childList: !0
                        }), q
                    }
                    var z = oe();
                    z && (j = b(z)), L(e, "load", p), k("init", a, e, F, !0)
                }

                function P(a) {
                    if (typeof a != "object") throw new TypeError("Options is not an object")
                }

                function G(a) {
                    for (var p in A) Object.prototype.hasOwnProperty.call(A, p) && (n[r][p] = Object.prototype.hasOwnProperty.call(a, p) ? a[p] : A[p])
                }

                function _(a) {
                    return a === "" || a.match(/^(about:blank|javascript:|file:\/\/)/) !== null ? "*" : a
                }

                function K(a) {
                    var p = a.split("Callback");
                    if (p.length === 2) {
                        var b = "on" + p[0].charAt(0).toUpperCase() + p[0].slice(1);
                        this[b] = this[a], delete this[a], M(r, "Deprecated: '" + a + "' has been renamed '" + b + "'. The old method will be removed in the next major version.")
                    }
                }

                function D(a) {
                    a = a || {}, n[r] = Object.create(null), n[r].iframe = e, n[r].firstRun = !0, n[r].remoteHost = e.src && e.src.split("/").slice(0, 3).join("/"), P(a), Object.keys(a).forEach(K, a), G(a), n[r] && (n[r].targetOrigin = n[r].checkOrigin === !0 ? _(n[r].remoteHost) : "*")
                }

                function $() {
                    return r in n && "iFrameResizer" in e
                }
                var r = d(e.id);
                $() ? M(r, "Ignored iFrame, already setup.") : (D(t), f(), c(), x(), I(he(r)), E())
            }

            function X(e, t) {
                V === null && (V = setTimeout(function() {
                    V = null, e()
                }, t))
            }
            var Y = {};

            function Pe(e, t, c) {
                Y[c] || (Y[c] = setTimeout(function() {
                    Y[c] = null, e()
                }, t))
            }

            function Ne() {
                function e() {
                    function d(f) {
                        function x(E) {
                            return (n[f] && n[f].iframe.style[E]) === "0px"
                        }

                        function C(E) {
                            return E.offsetParent !== null
                        }
                        n[f] && C(n[f].iframe) && (x("height") || x("width")) && k("Visibility change", "resize", n[f].iframe, f)
                    }
                    Object.keys(n).forEach(function(f) {
                        d(f)
                    })
                }

                function t(d) {
                    l("window", "Mutation observed: " + d[0].target + " " + d[0].type), X(e, 16)
                }

                function c() {
                    var d = document.querySelector("body"),
                        f = {
                            attributes: !0,
                            attributeOldValue: !1,
                            characterData: !0,
                            characterDataOldValue: !1,
                            childList: !0,
                            subtree: !0
                        },
                        x = new o(t);
                    x.observe(d, f)
                }
                var o = oe();
                o && c()
            }

            function Ce(e) {
                function t() {
                    be("Window " + e, "resize")
                }
                l("window", "Trigger event: " + e), X(t, 16)
            }

            function we() {
                function e() {
                    be("Tab Visible", "resize")
                }
                document.visibilityState !== "hidden" && (l("document", "Trigger event: Visibility change"), X(e, 16))
            }

            function be(e, t) {
                function c(o) {
                    return n[o] && n[o].resizeFrom === "parent" && n[o].autoResize && !n[o].firstRun
                }
                Object.keys(n).forEach(function(o) {
                    c(o) && k(e, t, n[o].iframe, o)
                })
            }

            function Se() {
                L(window, "message", Ie), L(window, "resize", function() {
                    Ce("resize")
                }), L(document, "visibilitychange", we), L(document, "-webkit-visibilitychange", we)
            }

            function Z() {
                function e(o, d) {
                    function f() {
                        if (d.tagName) {
                            if (d.tagName.toUpperCase() !== "IFRAME") throw new TypeError("Expected <IFRAME> tag, found <" + d.tagName + ">")
                        } else throw new TypeError("Object is not a valid DOM element")
                    }
                    d && (f(), pe(d, o), c.push(d))
                }

                function t(o) {
                    o && o.enablePublicMethods && M("enablePublicMethods option has been removed, public methods are now always available in the iFrame")
                }
                var c;
                return xe(), Se(),
                    function(d, f) {
                        switch (c = [], t(d), typeof f) {
                            case "undefined":
                            case "string":
                                {
                                    Array.prototype.forEach.call(document.querySelectorAll(f || "iframe"), e.bind(F, d));
                                    break
                                }
                            case "object":
                                {
                                    e(d, f);
                                    break
                                }
                            default:
                                throw new TypeError("Unexpected data type (" + typeof f + ")")
                        }
                        return c
                    }
            }

            function Le(e) {
                e.fn ? e.fn.iFrameResize || (e.fn.iFrameResize = function(c) {
                    function o(d, f) {
                        pe(f, c)
                    }
                    return this.filter("iframe").each(o).end()
                }) : se("", "Unable to bind to jQuery, it is not fully loaded.")
            }
            window.jQuery !== F && Le(window.jQuery), typeof F == "function" && F.amd ? F([], Z) : O.exports = Z(), window.iFrameResize = window.iFrameResize || Z()
        }()
})(Fe);
var je = Fe.exports,
    He = function() {
        var O = this,
            F = O.$createElement,
            W = O._self._c || F;
        return W("div", {
            class: O.block + "__formWrapper " + O.modifier
        }, [W("div", {
            ref: "wrapper",
            class: O.block + "__form"
        }, [O._t("default")], 2)])
    },
    Ae = [];
const _e = {
        props: {
            block: {
                type: String,
                required: !1,
                default: "pardotForm"
            },
            modifier: {
                type: String,
                required: !1,
                default: ""
            }
        },
        mounted() {
            this.addResizer()
        },
        beforeDestroy() {
            this.removeResizer()
        },
        computed: {
            formIframe() {
                return this.$refs.wrapper.children[0]
            },
            options() {
                return {
                    log: !1
                }
            }
        },
        methods: {
            addResizer() {
                this.formIframe.addEventListener("load", () => je(this.options, this.formIframe))
            },
            removeResizer() {
                this.formIframe.iFrameResize.removeListeners()
            }
        }
    },
    ye = {};
var qe = We(_e, He, Ae, !1, Be, null, null, null);

function Be(O) {
    for (let F in ye) this[F] = ye[F]
}
var Ue = function() {
    return qe.exports
}();
export {
    Ue as
    default
};