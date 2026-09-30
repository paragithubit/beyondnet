import {
    V as Oe,
    n as Ae,
    a as Ye,
    v as _e
} from "./main.d82f623b.js";

function ye(e) {
    return e !== null && typeof e == "object" && "constructor" in e && e.constructor === Object
}

function ve(e, t) {
    e === void 0 && (e = {}), t === void 0 && (t = {}), Object.keys(t).forEach(function(s) {
        typeof e[s] == "undefined" ? e[s] = t[s] : ye(t[s]) && ye(e[s]) && Object.keys(t[s]).length > 0 && ve(e[s], t[s])
    })
}
var C = typeof document != "undefined" ? document : {},
    Be = {
        body: {},
        addEventListener: function() {},
        removeEventListener: function() {},
        activeElement: {
            blur: function() {},
            nodeName: ""
        },
        querySelector: function() {
            return null
        },
        querySelectorAll: function() {
            return []
        },
        getElementById: function() {
            return null
        },
        createEvent: function() {
            return {
                initEvent: function() {}
            }
        },
        createElement: function() {
            return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function() {},
                getElementsByTagName: function() {
                    return []
                }
            }
        },
        createElementNS: function() {
            return {}
        },
        importNode: function() {
            return null
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        }
    };
ve(C, Be);
var b = typeof window != "undefined" ? window : {},
    Fe = {
        document: Be,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState: function() {},
            pushState: function() {},
            go: function() {},
            back: function() {}
        },
        CustomEvent: function() {
            return this
        },
        addEventListener: function() {},
        removeEventListener: function() {},
        getComputedStyle: function() {
            return {
                getPropertyValue: function() {
                    return ""
                }
            }
        },
        Image: function() {},
        Date: function() {},
        screen: {},
        setTimeout: function() {},
        clearTimeout: function() {},
        matchMedia: function() {
            return {}
        }
    };
ve(b, Fe);
class z {
    constructor(t) {
        const s = this;
        for (let i = 0; i < t.length; i += 1) s[i] = t[i];
        return s.length = t.length, this
    }
}

function w(e, t) {
    const s = [];
    let i = 0;
    if (e && !t && e instanceof z) return e;
    if (e) {
        if (typeof e == "string") {
            let a, n;
            const r = e.trim();
            if (r.indexOf("<") >= 0 && r.indexOf(">") >= 0) {
                let l = "div";
                for (r.indexOf("<li") === 0 && (l = "ul"), r.indexOf("<tr") === 0 && (l = "tbody"), (r.indexOf("<td") === 0 || r.indexOf("<th") === 0) && (l = "tr"), r.indexOf("<tbody") === 0 && (l = "table"), r.indexOf("<option") === 0 && (l = "select"), n = C.createElement(l), n.innerHTML = r, i = 0; i < n.childNodes.length; i += 1) s.push(n.childNodes[i])
            } else
                for (!t && e[0] === "#" && !e.match(/[ .<>:~]/) ? a = [C.getElementById(e.trim().split("#")[1])] : a = (t || C).querySelectorAll(e.trim()), i = 0; i < a.length; i += 1) a[i] && s.push(a[i])
        } else if (e.nodeType || e === b || e === C) s.push(e);
        else if (e.length > 0 && e[0].nodeType)
            for (i = 0; i < e.length; i += 1) s.push(e[i])
    }
    return new z(s)
}
w.fn = z.prototype;
w.Class = z;
w.Dom7 = z;

function we(e) {
    const t = [];
    for (let s = 0; s < e.length; s += 1) t.indexOf(e[s]) === -1 && t.push(e[s]);
    return t
}

function Re(e) {
    if (typeof e == "undefined") return this;
    const t = e.split(" ");
    for (let s = 0; s < t.length; s += 1)
        for (let i = 0; i < this.length; i += 1) typeof this[i] != "undefined" && typeof this[i].classList != "undefined" && this[i].classList.add(t[s]);
    return this
}

function We(e) {
    const t = e.split(" ");
    for (let s = 0; s < t.length; s += 1)
        for (let i = 0; i < this.length; i += 1) typeof this[i] != "undefined" && typeof this[i].classList != "undefined" && this[i].classList.remove(t[s]);
    return this
}

function qe(e) {
    return this[0] ? this[0].classList.contains(e) : !1
}

function je(e) {
    const t = e.split(" ");
    for (let s = 0; s < t.length; s += 1)
        for (let i = 0; i < this.length; i += 1) typeof this[i] != "undefined" && typeof this[i].classList != "undefined" && this[i].classList.toggle(t[s]);
    return this
}

function Ue(e, t) {
    if (arguments.length === 1 && typeof e == "string") return this[0] ? this[0].getAttribute(e) : void 0;
    for (let s = 0; s < this.length; s += 1)
        if (arguments.length === 2) this[s].setAttribute(e, t);
        else
            for (const i in e) this[s][i] = e[i], this[s].setAttribute(i, e[i]);
    return this
}

function Ke(e) {
    for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
    return this
}

function Ze(e, t) {
    let s;
    if (typeof t == "undefined") {
        if (s = this[0], s) {
            if (s.dom7ElementDataStorage && e in s.dom7ElementDataStorage) return s.dom7ElementDataStorage[e];
            const i = s.getAttribute(`data-${e}`);
            return i || void 0
        }
        return
    }
    for (let i = 0; i < this.length; i += 1) s = this[i], s.dom7ElementDataStorage || (s.dom7ElementDataStorage = {}), s.dom7ElementDataStorage[e] = t;
    return this
}

function Qe(e) {
    for (let t = 0; t < this.length; t += 1) {
        const s = this[t].style;
        s.webkitTransform = e, s.transform = e
    }
    return this
}

function Je(e) {
    typeof e != "string" && (e = `${e}ms`);
    for (let t = 0; t < this.length; t += 1) {
        const s = this[t].style;
        s.webkitTransitionDuration = e, s.transitionDuration = e
    }
    return this
}

function et(...e) {
    let [t, s, i, a] = e;
    typeof e[1] == "function" && ([t, i, a] = e, s = void 0), a || (a = !1);

    function n(d) {
        const c = d.target;
        if (!c) return;
        const p = d.target.dom7EventData || [];
        if (p.indexOf(d) < 0 && p.unshift(d), w(c).is(s)) i.apply(c, p);
        else {
            const u = w(c).parents();
            for (let m = 0; m < u.length; m += 1) w(u[m]).is(s) && i.apply(u[m], p)
        }
    }

    function r(d) {
        const c = d && d.target ? d.target.dom7EventData || [] : [];
        c.indexOf(d) < 0 && c.unshift(d), i.apply(this, c)
    }
    const l = t.split(" ");
    let o;
    for (let d = 0; d < this.length; d += 1) {
        const c = this[d];
        if (s)
            for (o = 0; o < l.length; o += 1) {
                const p = l[o];
                c.dom7LiveListeners || (c.dom7LiveListeners = {}), c.dom7LiveListeners[p] || (c.dom7LiveListeners[p] = []), c.dom7LiveListeners[p].push({
                    listener: i,
                    proxyListener: n
                }), c.addEventListener(p, n, a)
            } else
                for (o = 0; o < l.length; o += 1) {
                    const p = l[o];
                    c.dom7Listeners || (c.dom7Listeners = {}), c.dom7Listeners[p] || (c.dom7Listeners[p] = []), c.dom7Listeners[p].push({
                        listener: i,
                        proxyListener: r
                    }), c.addEventListener(p, r, a)
                }
    }
    return this
}

function tt(...e) {
    let [t, s, i, a] = e;
    typeof e[1] == "function" && ([t, i, a] = e, s = void 0), a || (a = !1);
    const n = t.split(" ");
    for (let r = 0; r < n.length; r += 1) {
        const l = n[r];
        for (let o = 0; o < this.length; o += 1) {
            const d = this[o];
            let c;
            if (!s && d.dom7Listeners ? c = d.dom7Listeners[l] : s && d.dom7LiveListeners && (c = d.dom7LiveListeners[l]), c && c.length)
                for (let p = c.length - 1; p >= 0; p -= 1) {
                    const u = c[p];
                    i && u.listener === i || i && u.listener && u.listener.dom7proxy && u.listener.dom7proxy === i ? (d.removeEventListener(l, u.proxyListener, a), c.splice(p, 1)) : i || (d.removeEventListener(l, u.proxyListener, a), c.splice(p, 1))
                }
        }
    }
    return this
}

function st(...e) {
    const t = e[0].split(" "),
        s = e[1];
    for (let i = 0; i < t.length; i += 1) {
        const a = t[i];
        for (let n = 0; n < this.length; n += 1) {
            const r = this[n];
            let l;
            try {
                l = new b.CustomEvent(a, {
                    detail: s,
                    bubbles: !0,
                    cancelable: !0
                })
            } catch {
                l = C.createEvent("Event"), l.initEvent(a, !0, !0), l.detail = s
            }
            r.dom7EventData = e.filter((o, d) => d > 0), r.dispatchEvent(l), r.dom7EventData = [], delete r.dom7EventData
        }
    }
    return this
}

function it(e) {
    const t = ["webkitTransitionEnd", "transitionend"],
        s = this;
    let i;

    function a(n) {
        if (n.target === this)
            for (e.call(this, n), i = 0; i < t.length; i += 1) s.off(t[i], a)
    }
    if (e)
        for (i = 0; i < t.length; i += 1) s.on(t[i], a);
    return this
}

function at(e) {
    if (this.length > 0) {
        if (e) {
            const t = this.styles();
            return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
        }
        return this[0].offsetWidth
    }
    return null
}

function nt(e) {
    if (this.length > 0) {
        if (e) {
            const t = this.styles();
            return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
        }
        return this[0].offsetHeight
    }
    return null
}

function rt() {
    if (this.length > 0) {
        const e = this[0],
            t = e.getBoundingClientRect(),
            s = C.body,
            i = e.clientTop || s.clientTop || 0,
            a = e.clientLeft || s.clientLeft || 0,
            n = e === b ? b.scrollY : e.scrollTop,
            r = e === b ? b.scrollX : e.scrollLeft;
        return {
            top: t.top + n - i,
            left: t.left + r - a
        }
    }
    return null
}

function lt() {
    return this[0] ? b.getComputedStyle(this[0], null) : {}
}

function ot(e, t) {
    let s;
    if (arguments.length === 1)
        if (typeof e == "string") {
            if (this[0]) return b.getComputedStyle(this[0], null).getPropertyValue(e)
        } else {
            for (s = 0; s < this.length; s += 1)
                for (let i in e) this[s].style[i] = e[i];
            return this
        }
    if (arguments.length === 2 && typeof e == "string") {
        for (s = 0; s < this.length; s += 1) this[s].style[e] = t;
        return this
    }
    return this
}

function dt(e) {
    if (!e) return this;
    for (let t = 0; t < this.length; t += 1)
        if (e.call(this[t], t, this[t]) === !1) return this;
    return this
}

function ct(e) {
    const t = [],
        s = this;
    for (let i = 0; i < s.length; i += 1) e.call(s[i], i, s[i]) && t.push(s[i]);
    return new z(t)
}

function pt(e) {
    if (typeof e == "undefined") return this[0] ? this[0].innerHTML : void 0;
    for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
    return this
}

function ut(e) {
    if (typeof e == "undefined") return this[0] ? this[0].textContent.trim() : null;
    for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
    return this
}

function ft(e) {
    const t = this[0];
    let s, i;
    if (!t || typeof e == "undefined") return !1;
    if (typeof e == "string") {
        if (t.matches) return t.matches(e);
        if (t.webkitMatchesSelector) return t.webkitMatchesSelector(e);
        if (t.msMatchesSelector) return t.msMatchesSelector(e);
        for (s = w(e), i = 0; i < s.length; i += 1)
            if (s[i] === t) return !0;
        return !1
    } else {
        if (e === C) return t === C;
        if (e === b) return t === b
    }
    if (e.nodeType || e instanceof z) {
        for (s = e.nodeType ? [e] : e, i = 0; i < s.length; i += 1)
            if (s[i] === t) return !0;
        return !1
    }
    return !1
}

function ht() {
    let e = this[0],
        t;
    if (e) {
        for (t = 0;
            (e = e.previousSibling) !== null;) e.nodeType === 1 && (t += 1);
        return t
    }
}

function mt(e) {
    if (typeof e == "undefined") return this;
    const t = this.length;
    let s;
    return e > t - 1 ? new z([]) : e < 0 ? (s = t + e, s < 0 ? new z([]) : new z([this[s]])) : new z([this[e]])
}

function gt(...e) {
    let t;
    for (let s = 0; s < e.length; s += 1) {
        t = e[s];
        for (let i = 0; i < this.length; i += 1)
            if (typeof t == "string") {
                const a = C.createElement("div");
                for (a.innerHTML = t; a.firstChild;) this[i].appendChild(a.firstChild)
            } else if (t instanceof z)
            for (let a = 0; a < t.length; a += 1) this[i].appendChild(t[a]);
        else this[i].appendChild(t)
    }
    return this
}

function vt(e) {
    let t, s;
    for (t = 0; t < this.length; t += 1)
        if (typeof e == "string") {
            const i = C.createElement("div");
            for (i.innerHTML = e, s = i.childNodes.length - 1; s >= 0; s -= 1) this[t].insertBefore(i.childNodes[s], this[t].childNodes[0])
        } else if (e instanceof z)
        for (s = 0; s < e.length; s += 1) this[t].insertBefore(e[s], this[t].childNodes[0]);
    else this[t].insertBefore(e, this[t].childNodes[0]);
    return this
}

function wt(e) {
    return this.length > 0 ? e ? this[0].nextElementSibling && w(this[0].nextElementSibling).is(e) ? new z([this[0].nextElementSibling]) : new z([]) : this[0].nextElementSibling ? new z([this[0].nextElementSibling]) : new z([]) : new z([])
}

function bt(e) {
    const t = [];
    let s = this[0];
    if (!s) return new z([]);
    for (; s.nextElementSibling;) {
        const i = s.nextElementSibling;
        e ? w(i).is(e) && t.push(i) : t.push(i), s = i
    }
    return new z(t)
}

function yt(e) {
    if (this.length > 0) {
        const t = this[0];
        return e ? t.previousElementSibling && w(t.previousElementSibling).is(e) ? new z([t.previousElementSibling]) : new z([]) : t.previousElementSibling ? new z([t.previousElementSibling]) : new z([])
    }
    return new z([])
}

function xt(e) {
    const t = [];
    let s = this[0];
    if (!s) return new z([]);
    for (; s.previousElementSibling;) {
        const i = s.previousElementSibling;
        e ? w(i).is(e) && t.push(i) : t.push(i), s = i
    }
    return new z(t)
}

function St(e) {
    const t = [];
    for (let s = 0; s < this.length; s += 1) this[s].parentNode !== null && (e ? w(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode));
    return w(we(t))
}

function Et(e) {
    const t = [];
    for (let s = 0; s < this.length; s += 1) {
        let i = this[s].parentNode;
        for (; i;) e ? w(i).is(e) && t.push(i) : t.push(i), i = i.parentNode
    }
    return w(we(t))
}

function Tt(e) {
    let t = this;
    return typeof e == "undefined" ? new z([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
}

function Ct(e) {
    const t = [];
    for (let s = 0; s < this.length; s += 1) {
        const i = this[s].querySelectorAll(e);
        for (let a = 0; a < i.length; a += 1) t.push(i[a])
    }
    return new z(t)
}

function $t(e) {
    const t = [];
    for (let s = 0; s < this.length; s += 1) {
        const i = this[s].childNodes;
        for (let a = 0; a < i.length; a += 1) e ? i[a].nodeType === 1 && w(i[a]).is(e) && t.push(i[a]) : i[a].nodeType === 1 && t.push(i[a])
    }
    return new z(we(t))
}

function Mt() {
    for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
    return this
}

function Pt(...e) {
    const t = this;
    let s, i;
    for (s = 0; s < e.length; s += 1) {
        const a = w(e[s]);
        for (i = 0; i < a.length; i += 1) t[t.length] = a[i], t.length += 1
    }
    return t
}
const xe = {
    addClass: Re,
    removeClass: We,
    hasClass: qe,
    toggleClass: je,
    attr: Ue,
    removeAttr: Ke,
    data: Ze,
    transform: Qe,
    transition: Je,
    on: et,
    off: tt,
    trigger: st,
    transitionEnd: it,
    outerWidth: at,
    outerHeight: nt,
    offset: rt,
    css: ot,
    each: dt,
    html: pt,
    text: ut,
    is: ft,
    index: ht,
    eq: mt,
    append: gt,
    prepend: vt,
    next: wt,
    nextAll: bt,
    prev: yt,
    prevAll: xt,
    parent: St,
    parents: Et,
    closest: Tt,
    find: Ct,
    children: $t,
    filter: ct,
    remove: Mt,
    add: Pt,
    styles: lt
};
Object.keys(xe).forEach(e => {
    w.fn[e] = w.fn[e] || xe[e]
});
const v = {
        deleteProps(e) {
            const t = e;
            Object.keys(t).forEach(s => {
                try {
                    t[s] = null
                } catch {}
                try {
                    delete t[s]
                } catch {}
            })
        },
        nextTick(e, t = 0) {
            return setTimeout(e, t)
        },
        now() {
            return Date.now()
        },
        getTranslate(e, t = "x") {
            let s, i, a;
            const n = b.getComputedStyle(e, null);
            return b.WebKitCSSMatrix ? (i = n.transform || n.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map(r => r.replace(",", ".")).join(", ")), a = new b.WebKitCSSMatrix(i === "none" ? "" : i)) : (a = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), s = a.toString().split(",")), t === "x" && (b.WebKitCSSMatrix ? i = a.m41 : s.length === 16 ? i = parseFloat(s[12]) : i = parseFloat(s[4])), t === "y" && (b.WebKitCSSMatrix ? i = a.m42 : s.length === 16 ? i = parseFloat(s[13]) : i = parseFloat(s[5])), i || 0
        },
        parseUrlQuery(e) {
            const t = {};
            let s = e || b.location.href,
                i, a, n, r;
            if (typeof s == "string" && s.length)
                for (s = s.indexOf("?") > -1 ? s.replace(/\S*\?/, "") : "", a = s.split("&").filter(l => l !== ""), r = a.length, i = 0; i < r; i += 1) n = a[i].replace(/#\S+/g, "").split("="), t[decodeURIComponent(n[0])] = typeof n[1] == "undefined" ? void 0 : decodeURIComponent(n[1]) || "";
            return t
        },
        isObject(e) {
            return typeof e == "object" && e !== null && e.constructor && e.constructor === Object
        },
        extend(...e) {
            const t = Object(e[0]);
            for (let s = 1; s < e.length; s += 1) {
                const i = e[s];
                if (i != null) {
                    const a = Object.keys(Object(i));
                    for (let n = 0, r = a.length; n < r; n += 1) {
                        const l = a[n],
                            o = Object.getOwnPropertyDescriptor(i, l);
                        o !== void 0 && o.enumerable && (v.isObject(t[l]) && v.isObject(i[l]) ? v.extend(t[l], i[l]) : !v.isObject(t[l]) && v.isObject(i[l]) ? (t[l] = {}, v.extend(t[l], i[l])) : t[l] = i[l])
                    }
                }
            }
            return t
        }
    },
    $ = function() {
        return {
            touch: !!("ontouchstart" in b || b.DocumentTouch && C instanceof b.DocumentTouch),
            pointerEvents: !!b.PointerEvent && "maxTouchPoints" in b.navigator && b.navigator.maxTouchPoints >= 0,
            observer: function() {
                return "MutationObserver" in b || "WebkitMutationObserver" in b
            }(),
            passiveListener: function() {
                let s = !1;
                try {
                    const i = Object.defineProperty({}, "passive", {
                        get() {
                            s = !0
                        }
                    });
                    b.addEventListener("testPassiveListener", null, i)
                } catch {}
                return s
            }(),
            gestures: function() {
                return "ongesturestart" in b
            }()
        }
    }();
class Se {
    constructor(t = {}) {
        const s = this;
        s.params = t, s.eventsListeners = {}, s.params && s.params.on && Object.keys(s.params.on).forEach(i => {
            s.on(i, s.params.on[i])
        })
    }
    on(t, s, i) {
        const a = this;
        if (typeof s != "function") return a;
        const n = i ? "unshift" : "push";
        return t.split(" ").forEach(r => {
            a.eventsListeners[r] || (a.eventsListeners[r] = []), a.eventsListeners[r][n](s)
        }), a
    }
    once(t, s, i) {
        const a = this;
        if (typeof s != "function") return a;

        function n(...r) {
            a.off(t, n), n.f7proxy && delete n.f7proxy, s.apply(a, r)
        }
        return n.f7proxy = s, a.on(t, n, i)
    }
    off(t, s) {
        const i = this;
        return i.eventsListeners && t.split(" ").forEach(a => {
            typeof s == "undefined" ? i.eventsListeners[a] = [] : i.eventsListeners[a] && i.eventsListeners[a].length && i.eventsListeners[a].forEach((n, r) => {
                (n === s || n.f7proxy && n.f7proxy === s) && i.eventsListeners[a].splice(r, 1)
            })
        }), i
    }
    emit(...t) {
        const s = this;
        if (!s.eventsListeners) return s;
        let i, a, n;
        return typeof t[0] == "string" || Array.isArray(t[0]) ? (i = t[0], a = t.slice(1, t.length), n = s) : (i = t[0].events, a = t[0].data, n = t[0].context || s), (Array.isArray(i) ? i : i.split(" ")).forEach(l => {
            if (s.eventsListeners && s.eventsListeners[l]) {
                const o = [];
                s.eventsListeners[l].forEach(d => {
                    o.push(d)
                }), o.forEach(d => {
                    d.apply(n, a)
                })
            }
        }), s
    }
    useModulesParams(t) {
        const s = this;
        !s.modules || Object.keys(s.modules).forEach(i => {
            const a = s.modules[i];
            a.params && v.extend(t, a.params)
        })
    }
    useModules(t = {}) {
        const s = this;
        !s.modules || Object.keys(s.modules).forEach(i => {
            const a = s.modules[i],
                n = t[i] || {};
            a.instance && Object.keys(a.instance).forEach(r => {
                const l = a.instance[r];
                typeof l == "function" ? s[r] = l.bind(s) : s[r] = l
            }), a.on && s.on && Object.keys(a.on).forEach(r => {
                s.on(r, a.on[r])
            }), a.create && a.create.bind(s)(n)
        })
    }
    static set components(t) {
        const s = this;
        !s.use || s.use(t)
    }
    static installModule(t, ...s) {
        const i = this;
        i.prototype.modules || (i.prototype.modules = {});
        const a = t.name || `${Object.keys(i.prototype.modules).length}_${v.now()}`;
        return i.prototype.modules[a] = t, t.proto && Object.keys(t.proto).forEach(n => {
            i.prototype[n] = t.proto[n]
        }), t.static && Object.keys(t.static).forEach(n => {
            i[n] = t.static[n]
        }), t.install && t.install.apply(i, s), i
    }
    static use(t, ...s) {
        const i = this;
        return Array.isArray(t) ? (t.forEach(a => i.installModule(a)), i) : i.installModule(t, ...s)
    }
}

function kt() {
    const e = this;
    let t, s;
    const i = e.$el;
    typeof e.params.width != "undefined" ? t = e.params.width : t = i[0].clientWidth, typeof e.params.height != "undefined" ? s = e.params.height : s = i[0].clientHeight, !(t === 0 && e.isHorizontal() || s === 0 && e.isVertical()) && (t = t - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), s = s - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), v.extend(e, {
        width: t,
        height: s,
        size: e.isHorizontal() ? t : s
    }))
}

function zt() {
    const e = this,
        t = e.params,
        {
            $wrapperEl: s,
            size: i,
            rtlTranslate: a,
            wrongRTL: n
        } = e,
        r = e.virtual && t.virtual.enabled,
        l = r ? e.virtual.slides.length : e.slides.length,
        o = s.children(`.${e.params.slideClass}`),
        d = r ? e.virtual.slides.length : o.length;
    let c = [];
    const p = [],
        u = [];

    function m(M) {
        return t.cssMode ? M !== o.length - 1 : !0
    }
    let h = t.slidesOffsetBefore;
    typeof h == "function" && (h = t.slidesOffsetBefore.call(e));
    let f = t.slidesOffsetAfter;
    typeof f == "function" && (f = t.slidesOffsetAfter.call(e));
    const x = e.snapGrid.length,
        g = e.snapGrid.length;
    let S = t.spaceBetween,
        y = -h,
        k = 0,
        I = 0;
    if (typeof i == "undefined") return;
    typeof S == "string" && S.indexOf("%") >= 0 && (S = parseFloat(S.replace("%", "")) / 100 * i), e.virtualSize = -S, a ? o.css({
        marginLeft: "",
        marginTop: ""
    }) : o.css({
        marginRight: "",
        marginBottom: ""
    });
    let P;
    t.slidesPerColumn > 1 && (Math.floor(d / t.slidesPerColumn) === d / e.params.slidesPerColumn ? P = d : P = Math.ceil(d / t.slidesPerColumn) * t.slidesPerColumn, t.slidesPerView !== "auto" && t.slidesPerColumnFill === "row" && (P = Math.max(P, t.slidesPerView * t.slidesPerColumn)));
    let E;
    const T = t.slidesPerColumn,
        O = P / T,
        V = Math.floor(d / t.slidesPerColumn);
    for (let M = 0; M < d; M += 1) {
        E = 0;
        const D = o.eq(M);
        if (t.slidesPerColumn > 1) {
            let L, A, G;
            if (t.slidesPerColumnFill === "row" && t.slidesPerGroup > 1) {
                const F = Math.floor(M / (t.slidesPerGroup * t.slidesPerColumn)),
                    j = M - t.slidesPerColumn * t.slidesPerGroup * F,
                    U = F === 0 ? t.slidesPerGroup : Math.min(Math.ceil((d - F * T * t.slidesPerGroup) / T), t.slidesPerGroup);
                G = Math.floor(j / U), A = j - G * U + F * t.slidesPerGroup, L = A + G * P / T, D.css({
                    "-webkit-box-ordinal-group": L,
                    "-moz-box-ordinal-group": L,
                    "-ms-flex-order": L,
                    "-webkit-order": L,
                    order: L
                })
            } else t.slidesPerColumnFill === "column" ? (A = Math.floor(M / T), G = M - A * T, (A > V || A === V && G === T - 1) && (G += 1, G >= T && (G = 0, A += 1))) : (G = Math.floor(M / O), A = M - G * O);
            D.css(`margin-${e.isHorizontal()?"top":"left"}`, G !== 0 && t.spaceBetween && `${t.spaceBetween}px`)
        }
        if (D.css("display") !== "none") {
            if (t.slidesPerView === "auto") {
                const L = b.getComputedStyle(D[0], null),
                    A = D[0].style.transform,
                    G = D[0].style.webkitTransform;
                if (A && (D[0].style.transform = "none"), G && (D[0].style.webkitTransform = "none"), t.roundLengths) E = e.isHorizontal() ? D.outerWidth(!0) : D.outerHeight(!0);
                else if (e.isHorizontal()) {
                    const F = parseFloat(L.getPropertyValue("width")),
                        j = parseFloat(L.getPropertyValue("padding-left")),
                        U = parseFloat(L.getPropertyValue("padding-right")),
                        Q = parseFloat(L.getPropertyValue("margin-left")),
                        J = parseFloat(L.getPropertyValue("margin-right")),
                        ee = L.getPropertyValue("box-sizing");
                    ee && ee === "border-box" ? E = F + Q + J : E = F + j + U + Q + J
                } else {
                    const F = parseFloat(L.getPropertyValue("height")),
                        j = parseFloat(L.getPropertyValue("padding-top")),
                        U = parseFloat(L.getPropertyValue("padding-bottom")),
                        Q = parseFloat(L.getPropertyValue("margin-top")),
                        J = parseFloat(L.getPropertyValue("margin-bottom")),
                        ee = L.getPropertyValue("box-sizing");
                    ee && ee === "border-box" ? E = F + Q + J : E = F + j + U + Q + J
                }
                A && (D[0].style.transform = A), G && (D[0].style.webkitTransform = G), t.roundLengths && (E = Math.floor(E))
            } else E = (i - (t.slidesPerView - 1) * S) / t.slidesPerView, t.roundLengths && (E = Math.floor(E)), o[M] && (e.isHorizontal() ? o[M].style.width = `${E}px` : o[M].style.height = `${E}px`);
            o[M] && (o[M].swiperSlideSize = E), u.push(E), t.centeredSlides ? (y = y + E / 2 + k / 2 + S, k === 0 && M !== 0 && (y = y - i / 2 - S), M === 0 && (y = y - i / 2 - S), Math.abs(y) < 1 / 1e3 && (y = 0), t.roundLengths && (y = Math.floor(y)), I % t.slidesPerGroup === 0 && c.push(y), p.push(y)) : (t.roundLengths && (y = Math.floor(y)), (I - Math.min(e.params.slidesPerGroupSkip, I)) % e.params.slidesPerGroup === 0 && c.push(y), p.push(y), y = y + E + S), e.virtualSize += E + S, k = E, I += 1
        }
    }
    e.virtualSize = Math.max(e.virtualSize, i) + f;
    let H;
    if (a && n && (t.effect === "slide" || t.effect === "coverflow") && s.css({
            width: `${e.virtualSize+t.spaceBetween}px`
        }), t.setWrapperSize && (e.isHorizontal() ? s.css({
            width: `${e.virtualSize+t.spaceBetween}px`
        }) : s.css({
            height: `${e.virtualSize+t.spaceBetween}px`
        })), t.slidesPerColumn > 1 && (e.virtualSize = (E + t.spaceBetween) * P, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? s.css({
            width: `${e.virtualSize+t.spaceBetween}px`
        }) : s.css({
            height: `${e.virtualSize+t.spaceBetween}px`
        }), t.centeredSlides)) {
        H = [];
        for (let M = 0; M < c.length; M += 1) {
            let D = c[M];
            t.roundLengths && (D = Math.floor(D)), c[M] < e.virtualSize + c[0] && H.push(D)
        }
        c = H
    }
    if (!t.centeredSlides) {
        H = [];
        for (let M = 0; M < c.length; M += 1) {
            let D = c[M];
            t.roundLengths && (D = Math.floor(D)), c[M] <= e.virtualSize - i && H.push(D)
        }
        c = H, Math.floor(e.virtualSize - i) - Math.floor(c[c.length - 1]) > 1 && c.push(e.virtualSize - i)
    }
    if (c.length === 0 && (c = [0]), t.spaceBetween !== 0 && (e.isHorizontal() ? a ? o.filter(m).css({
            marginLeft: `${S}px`
        }) : o.filter(m).css({
            marginRight: `${S}px`
        }) : o.filter(m).css({
            marginBottom: `${S}px`
        })), t.centeredSlides && t.centeredSlidesBounds) {
        let M = 0;
        u.forEach(L => {
            M += L + (t.spaceBetween ? t.spaceBetween : 0)
        }), M -= t.spaceBetween;
        const D = M - i;
        c = c.map(L => L < 0 ? -h : L > D ? D + f : L)
    }
    if (t.centerInsufficientSlides) {
        let M = 0;
        if (u.forEach(D => {
                M += D + (t.spaceBetween ? t.spaceBetween : 0)
            }), M -= t.spaceBetween, M < i) {
            const D = (i - M) / 2;
            c.forEach((L, A) => {
                c[A] = L - D
            }), p.forEach((L, A) => {
                p[A] = L + D
            })
        }
    }
    v.extend(e, {
        slides: o,
        snapGrid: c,
        slidesGrid: p,
        slidesSizesGrid: u
    }), d !== l && e.emit("slidesLengthChange"), c.length !== x && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), p.length !== g && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
}

function It(e) {
    const t = this,
        s = [];
    let i = 0,
        a;
    if (typeof e == "number" ? t.setTransition(e) : e === !0 && t.setTransition(t.params.speed), t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
        if (t.params.centeredSlides) t.visibleSlides.each((n, r) => {
            s.push(r)
        });
        else
            for (a = 0; a < Math.ceil(t.params.slidesPerView); a += 1) {
                const n = t.activeIndex + a;
                if (n > t.slides.length) break;
                s.push(t.slides.eq(n)[0])
            } else s.push(t.slides.eq(t.activeIndex)[0]);
    for (a = 0; a < s.length; a += 1)
        if (typeof s[a] != "undefined") {
            const n = s[a].offsetHeight;
            i = n > i ? n : i
        }
    i && t.$wrapperEl.css("height", `${i}px`)
}

function Lt() {
    const e = this,
        t = e.slides;
    for (let s = 0; s < t.length; s += 1) t[s].swiperSlideOffset = e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop
}

function Dt(e = this && this.translate || 0) {
    const t = this,
        s = t.params,
        {
            slides: i,
            rtlTranslate: a
        } = t;
    if (i.length === 0) return;
    typeof i[0].swiperSlideOffset == "undefined" && t.updateSlidesOffset();
    let n = -e;
    a && (n = e), i.removeClass(s.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
    for (let r = 0; r < i.length; r += 1) {
        const l = i[r],
            o = (n + (s.centeredSlides ? t.minTranslate() : 0) - l.swiperSlideOffset) / (l.swiperSlideSize + s.spaceBetween);
        if (s.watchSlidesVisibility || s.centeredSlides && s.autoHeight) {
            const d = -(n - l.swiperSlideOffset),
                c = d + t.slidesSizesGrid[r];
            (d >= 0 && d < t.size - 1 || c > 1 && c <= t.size || d <= 0 && c >= t.size) && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(r), i.eq(r).addClass(s.slideVisibleClass))
        }
        l.progress = a ? -o : o
    }
    t.visibleSlides = w(t.visibleSlides)
}

function Ot(e) {
    const t = this;
    if (typeof e == "undefined") {
        const d = t.rtlTranslate ? -1 : 1;
        e = t && t.translate && t.translate * d || 0
    }
    const s = t.params,
        i = t.maxTranslate() - t.minTranslate();
    let {
        progress: a,
        isBeginning: n,
        isEnd: r
    } = t;
    const l = n,
        o = r;
    i === 0 ? (a = 0, n = !0, r = !0) : (a = (e - t.minTranslate()) / i, n = a <= 0, r = a >= 1), v.extend(t, {
        progress: a,
        isBeginning: n,
        isEnd: r
    }), (s.watchSlidesProgress || s.watchSlidesVisibility || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), n && !l && t.emit("reachBeginning toEdge"), r && !o && t.emit("reachEnd toEdge"), (l && !n || o && !r) && t.emit("fromEdge"), t.emit("progress", a)
}

function At() {
    const e = this,
        {
            slides: t,
            params: s,
            $wrapperEl: i,
            activeIndex: a,
            realIndex: n
        } = e,
        r = e.virtual && s.virtual.enabled;
    t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`);
    let l;
    r ? l = e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${a}"]`) : l = t.eq(a), l.addClass(s.slideActiveClass), s.loop && (l.hasClass(s.slideDuplicateClass) ? i.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${n}"]`).addClass(s.slideDuplicateActiveClass) : i.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${n}"]`).addClass(s.slideDuplicateActiveClass));
    let o = l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
    s.loop && o.length === 0 && (o = t.eq(0), o.addClass(s.slideNextClass));
    let d = l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
    s.loop && d.length === 0 && (d = t.eq(-1), d.addClass(s.slidePrevClass)), s.loop && (o.hasClass(s.slideDuplicateClass) ? i.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass) : i.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass), d.hasClass(s.slideDuplicateClass) ? i.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass) : i.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass))
}

function Bt(e) {
    const t = this,
        s = t.rtlTranslate ? t.translate : -t.translate,
        {
            slidesGrid: i,
            snapGrid: a,
            params: n,
            activeIndex: r,
            realIndex: l,
            snapIndex: o
        } = t;
    let d = e,
        c;
    if (typeof d == "undefined") {
        for (let u = 0; u < i.length; u += 1) typeof i[u + 1] != "undefined" ? s >= i[u] && s < i[u + 1] - (i[u + 1] - i[u]) / 2 ? d = u : s >= i[u] && s < i[u + 1] && (d = u + 1) : s >= i[u] && (d = u);
        n.normalizeSlideIndex && (d < 0 || typeof d == "undefined") && (d = 0)
    }
    if (a.indexOf(s) >= 0) c = a.indexOf(s);
    else {
        const u = Math.min(n.slidesPerGroupSkip, d);
        c = u + Math.floor((d - u) / n.slidesPerGroup)
    }
    if (c >= a.length && (c = a.length - 1), d === r) {
        c !== o && (t.snapIndex = c, t.emit("snapIndexChange"));
        return
    }
    const p = parseInt(t.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
    v.extend(t, {
        snapIndex: c,
        realIndex: p,
        previousIndex: r,
        activeIndex: d
    }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), l !== p && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
}

function Ht(e) {
    const t = this,
        s = t.params,
        i = w(e.target).closest(`.${s.slideClass}`)[0];
    let a = !1;
    if (i)
        for (let n = 0; n < t.slides.length; n += 1) t.slides[n] === i && (a = !0);
    if (i && a) t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(w(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = w(i).index();
    else {
        t.clickedSlide = void 0, t.clickedIndex = void 0;
        return
    }
    s.slideToClickedSlide && t.clickedIndex !== void 0 && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
}
var Gt = {
    updateSize: kt,
    updateSlides: zt,
    updateAutoHeight: It,
    updateSlidesOffset: Lt,
    updateSlidesProgress: Dt,
    updateProgress: Ot,
    updateSlidesClasses: At,
    updateActiveIndex: Bt,
    updateClickedSlide: Ht
};

function Nt(e = this.isHorizontal() ? "x" : "y") {
    const t = this,
        {
            params: s,
            rtlTranslate: i,
            translate: a,
            $wrapperEl: n
        } = t;
    if (s.virtualTranslate) return i ? -a : a;
    if (s.cssMode) return a;
    let r = v.getTranslate(n[0], e);
    return i && (r = -r), r || 0
}

function Xt(e, t) {
    const s = this,
        {
            rtlTranslate: i,
            params: a,
            $wrapperEl: n,
            wrapperEl: r,
            progress: l
        } = s;
    let o = 0,
        d = 0;
    const c = 0;
    s.isHorizontal() ? o = i ? -e : e : d = e, a.roundLengths && (o = Math.floor(o), d = Math.floor(d)), a.cssMode ? r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -o : -d : a.virtualTranslate || n.transform(`translate3d(${o}px, ${d}px, ${c}px)`), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? o : d;
    let p;
    const u = s.maxTranslate() - s.minTranslate();
    u === 0 ? p = 0 : p = (e - s.minTranslate()) / u, p !== l && s.updateProgress(e), s.emit("setTranslate", s.translate, t)
}

function Vt() {
    return -this.snapGrid[0]
}

function Yt() {
    return -this.snapGrid[this.snapGrid.length - 1]
}

function _t(e = 0, t = this.params.speed, s = !0, i = !0, a) {
    const n = this,
        {
            params: r,
            wrapperEl: l
        } = n;
    if (n.animating && r.preventInteractionOnTransition) return !1;
    const o = n.minTranslate(),
        d = n.maxTranslate();
    let c;
    if (i && e > o ? c = o : i && e < d ? c = d : c = e, n.updateProgress(c), r.cssMode) {
        const p = n.isHorizontal();
        return t === 0 ? l[p ? "scrollLeft" : "scrollTop"] = -c : l.scrollTo ? l.scrollTo({
            [p ? "left" : "top"]: -c,
            behavior: "smooth"
        }) : l[p ? "scrollLeft" : "scrollTop"] = -c, !0
    }
    return t === 0 ? (n.setTransition(0), n.setTranslate(c), s && (n.emit("beforeTransitionStart", t, a), n.emit("transitionEnd"))) : (n.setTransition(t), n.setTranslate(c), s && (n.emit("beforeTransitionStart", t, a), n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function(u) {
        !n || n.destroyed || u.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, s && n.emit("transitionEnd"))
    }), n.$wrapperEl[0].addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd))), !0
}
var Ft = {
    getTranslate: Nt,
    setTranslate: Xt,
    minTranslate: Vt,
    maxTranslate: Yt,
    translateTo: _t
};

function Rt(e, t) {
    const s = this;
    s.params.cssMode || s.$wrapperEl.transition(e), s.emit("setTransition", e, t)
}

function Wt(e = !0, t) {
    const s = this,
        {
            activeIndex: i,
            params: a,
            previousIndex: n
        } = s;
    if (a.cssMode) return;
    a.autoHeight && s.updateAutoHeight();
    let r = t;
    if (r || (i > n ? r = "next" : i < n ? r = "prev" : r = "reset"), s.emit("transitionStart"), e && i !== n) {
        if (r === "reset") {
            s.emit("slideResetTransitionStart");
            return
        }
        s.emit("slideChangeTransitionStart"), r === "next" ? s.emit("slideNextTransitionStart") : s.emit("slidePrevTransitionStart")
    }
}

function qt(e = !0, t) {
    const s = this,
        {
            activeIndex: i,
            previousIndex: a,
            params: n
        } = s;
    if (s.animating = !1, n.cssMode) return;
    s.setTransition(0);
    let r = t;
    if (r || (i > a ? r = "next" : i < a ? r = "prev" : r = "reset"), s.emit("transitionEnd"), e && i !== a) {
        if (r === "reset") {
            s.emit("slideResetTransitionEnd");
            return
        }
        s.emit("slideChangeTransitionEnd"), r === "next" ? s.emit("slideNextTransitionEnd") : s.emit("slidePrevTransitionEnd")
    }
}
var jt = {
    setTransition: Rt,
    transitionStart: Wt,
    transitionEnd: qt
};

function Ut(e = 0, t = this.params.speed, s = !0, i) {
    const a = this;
    let n = e;
    n < 0 && (n = 0);
    const {
        params: r,
        snapGrid: l,
        slidesGrid: o,
        previousIndex: d,
        activeIndex: c,
        rtlTranslate: p,
        wrapperEl: u
    } = a;
    if (a.animating && r.preventInteractionOnTransition) return !1;
    const m = Math.min(a.params.slidesPerGroupSkip, n);
    let h = m + Math.floor((n - m) / a.params.slidesPerGroup);
    h >= l.length && (h = l.length - 1), (c || r.initialSlide || 0) === (d || 0) && s && a.emit("beforeSlideChangeStart");
    const f = -l[h];
    if (a.updateProgress(f), r.normalizeSlideIndex)
        for (let g = 0; g < o.length; g += 1) - Math.floor(f * 100) >= Math.floor(o[g] * 100) && (n = g);
    if (a.initialized && n !== c && (!a.allowSlideNext && f < a.translate && f < a.minTranslate() || !a.allowSlidePrev && f > a.translate && f > a.maxTranslate() && (c || 0) !== n)) return !1;
    let x;
    if (n > c ? x = "next" : n < c ? x = "prev" : x = "reset", p && -f === a.translate || !p && f === a.translate) return a.updateActiveIndex(n), r.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), r.effect !== "slide" && a.setTranslate(f), x !== "reset" && (a.transitionStart(s, x), a.transitionEnd(s, x)), !1;
    if (r.cssMode) {
        const g = a.isHorizontal();
        let S = -f;
        return p && (S = u.scrollWidth - u.offsetWidth - S), t === 0 ? u[g ? "scrollLeft" : "scrollTop"] = S : u.scrollTo ? u.scrollTo({
            [g ? "left" : "top"]: S,
            behavior: "smooth"
        }) : u[g ? "scrollLeft" : "scrollTop"] = S, !0
    }
    return t === 0 ? (a.setTransition(0), a.setTranslate(f), a.updateActiveIndex(n), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, i), a.transitionStart(s, x), a.transitionEnd(s, x)) : (a.setTransition(t), a.setTranslate(f), a.updateActiveIndex(n), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, i), a.transitionStart(s, x), a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function(S) {
        !a || a.destroyed || S.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd), a.onSlideToWrapperTransitionEnd = null, delete a.onSlideToWrapperTransitionEnd, a.transitionEnd(s, x))
    }), a.$wrapperEl[0].addEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd))), !0
}

function Kt(e = 0, t = this.params.speed, s = !0, i) {
    const a = this;
    let n = e;
    return a.params.loop && (n += a.loopedSlides), a.slideTo(n, t, s, i)
}

function Zt(e = this.params.speed, t = !0, s) {
    const i = this,
        {
            params: a,
            animating: n
        } = i,
        r = i.activeIndex < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup;
    if (a.loop) {
        if (n) return !1;
        i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
    }
    return i.slideTo(i.activeIndex + r, e, t, s)
}

function Qt(e = this.params.speed, t = !0, s) {
    const i = this,
        {
            params: a,
            animating: n,
            snapGrid: r,
            slidesGrid: l,
            rtlTranslate: o
        } = i;
    if (a.loop) {
        if (n) return !1;
        i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
    }
    const d = o ? i.translate : -i.translate;

    function c(f) {
        return f < 0 ? -Math.floor(Math.abs(f)) : Math.floor(f)
    }
    const p = c(d),
        u = r.map(f => c(f));
    l.map(f => c(f)), r[u.indexOf(p)];
    let m = r[u.indexOf(p) - 1];
    typeof m == "undefined" && a.cssMode && r.forEach(f => {
        !m && p >= f && (m = f)
    });
    let h;
    return typeof m != "undefined" && (h = l.indexOf(m), h < 0 && (h = i.activeIndex - 1)), i.slideTo(h, e, t, s)
}

function Jt(e = this.params.speed, t = !0, s) {
    const i = this;
    return i.slideTo(i.activeIndex, e, t, s)
}

function es(e = this.params.speed, t = !0, s, i = .5) {
    const a = this;
    let n = a.activeIndex;
    const r = Math.min(a.params.slidesPerGroupSkip, n),
        l = r + Math.floor((n - r) / a.params.slidesPerGroup),
        o = a.rtlTranslate ? a.translate : -a.translate;
    if (o >= a.snapGrid[l]) {
        const d = a.snapGrid[l],
            c = a.snapGrid[l + 1];
        o - d > (c - d) * i && (n += a.params.slidesPerGroup)
    } else {
        const d = a.snapGrid[l - 1],
            c = a.snapGrid[l];
        o - d <= (c - d) * i && (n -= a.params.slidesPerGroup)
    }
    return n = Math.max(n, 0), n = Math.min(n, a.slidesGrid.length - 1), a.slideTo(n, e, t, s)
}

function ts() {
    const e = this,
        {
            params: t,
            $wrapperEl: s
        } = e,
        i = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
    let a = e.clickedIndex,
        n;
    if (t.loop) {
        if (e.animating) return;
        n = parseInt(w(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? a < e.loopedSlides - i / 2 || a > e.slides.length - e.loopedSlides + i / 2 ? (e.loopFix(), a = s.children(`.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), v.nextTick(() => {
            e.slideTo(a)
        })) : e.slideTo(a) : a > e.slides.length - i ? (e.loopFix(), a = s.children(`.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), v.nextTick(() => {
            e.slideTo(a)
        })) : e.slideTo(a)
    } else e.slideTo(a)
}
var ss = {
    slideTo: Ut,
    slideToLoop: Kt,
    slideNext: Zt,
    slidePrev: Qt,
    slideReset: Jt,
    slideToClosest: es,
    slideToClickedSlide: ts
};

function is() {
    const e = this,
        {
            params: t,
            $wrapperEl: s
        } = e;
    s.children(`.${t.slideClass}.${t.slideDuplicateClass}`).remove();
    let i = s.children(`.${t.slideClass}`);
    if (t.loopFillGroupWithBlank) {
        const r = t.slidesPerGroup - i.length % t.slidesPerGroup;
        if (r !== t.slidesPerGroup) {
            for (let l = 0; l < r; l += 1) {
                const o = w(C.createElement("div")).addClass(`${t.slideClass} ${t.slideBlankClass}`);
                s.append(o)
            }
            i = s.children(`.${t.slideClass}`)
        }
    }
    t.slidesPerView === "auto" && !t.loopedSlides && (t.loopedSlides = i.length), e.loopedSlides = Math.ceil(parseFloat(t.loopedSlides || t.slidesPerView, 10)), e.loopedSlides += t.loopAdditionalSlides, e.loopedSlides > i.length && (e.loopedSlides = i.length);
    const a = [],
        n = [];
    i.each((r, l) => {
        const o = w(l);
        r < e.loopedSlides && n.push(l), r < i.length && r >= i.length - e.loopedSlides && a.push(l), o.attr("data-swiper-slide-index", r)
    });
    for (let r = 0; r < n.length; r += 1) s.append(w(n[r].cloneNode(!0)).addClass(t.slideDuplicateClass));
    for (let r = a.length - 1; r >= 0; r -= 1) s.prepend(w(a[r].cloneNode(!0)).addClass(t.slideDuplicateClass))
}

function as() {
    const e = this;
    e.emit("beforeLoopFix");
    const {
        activeIndex: t,
        slides: s,
        loopedSlides: i,
        allowSlidePrev: a,
        allowSlideNext: n,
        snapGrid: r,
        rtlTranslate: l
    } = e;
    let o;
    e.allowSlidePrev = !0, e.allowSlideNext = !0;
    const c = -r[t] - e.getTranslate();
    t < i ? (o = s.length - i * 3 + t, o += i, e.slideTo(o, 0, !1, !0) && c !== 0 && e.setTranslate((l ? -e.translate : e.translate) - c)) : t >= s.length - i && (o = -s.length + t + i, o += i, e.slideTo(o, 0, !1, !0) && c !== 0 && e.setTranslate((l ? -e.translate : e.translate) - c)), e.allowSlidePrev = a, e.allowSlideNext = n, e.emit("loopFix")
}

function ns() {
    const e = this,
        {
            $wrapperEl: t,
            params: s,
            slides: i
        } = e;
    t.children(`.${s.slideClass}.${s.slideDuplicateClass},.${s.slideClass}.${s.slideBlankClass}`).remove(), i.removeAttr("data-swiper-slide-index")
}
var rs = {
    loopCreate: is,
    loopFix: as,
    loopDestroy: ns
};

function ls(e) {
    const t = this;
    if ($.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
    const s = t.el;
    s.style.cursor = "move", s.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", s.style.cursor = e ? "-moz-grabbin" : "-moz-grab", s.style.cursor = e ? "grabbing" : "grab"
}

function os() {
    const e = this;
    $.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.el.style.cursor = "")
}
var ds = {
    setGrabCursor: ls,
    unsetGrabCursor: os
};

function cs(e) {
    const t = this,
        {
            $wrapperEl: s,
            params: i
        } = t;
    if (i.loop && t.loopDestroy(), typeof e == "object" && "length" in e)
        for (let a = 0; a < e.length; a += 1) e[a] && s.append(e[a]);
    else s.append(e);
    i.loop && t.loopCreate(), i.observer && $.observer || t.update()
}

function ps(e) {
    const t = this,
        {
            params: s,
            $wrapperEl: i,
            activeIndex: a
        } = t;
    s.loop && t.loopDestroy();
    let n = a + 1;
    if (typeof e == "object" && "length" in e) {
        for (let r = 0; r < e.length; r += 1) e[r] && i.prepend(e[r]);
        n = a + e.length
    } else i.prepend(e);
    s.loop && t.loopCreate(), s.observer && $.observer || t.update(), t.slideTo(n, 0, !1)
}

function us(e, t) {
    const s = this,
        {
            $wrapperEl: i,
            params: a,
            activeIndex: n
        } = s;
    let r = n;
    a.loop && (r -= s.loopedSlides, s.loopDestroy(), s.slides = i.children(`.${a.slideClass}`));
    const l = s.slides.length;
    if (e <= 0) {
        s.prependSlide(t);
        return
    }
    if (e >= l) {
        s.appendSlide(t);
        return
    }
    let o = r > e ? r + 1 : r;
    const d = [];
    for (let c = l - 1; c >= e; c -= 1) {
        const p = s.slides.eq(c);
        p.remove(), d.unshift(p)
    }
    if (typeof t == "object" && "length" in t) {
        for (let c = 0; c < t.length; c += 1) t[c] && i.append(t[c]);
        o = r > e ? r + t.length : r
    } else i.append(t);
    for (let c = 0; c < d.length; c += 1) i.append(d[c]);
    a.loop && s.loopCreate(), a.observer && $.observer || s.update(), a.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1)
}

function fs(e) {
    const t = this,
        {
            params: s,
            $wrapperEl: i,
            activeIndex: a
        } = t;
    let n = a;
    s.loop && (n -= t.loopedSlides, t.loopDestroy(), t.slides = i.children(`.${s.slideClass}`));
    let r = n,
        l;
    if (typeof e == "object" && "length" in e) {
        for (let o = 0; o < e.length; o += 1) l = e[o], t.slides[l] && t.slides.eq(l).remove(), l < r && (r -= 1);
        r = Math.max(r, 0)
    } else l = e, t.slides[l] && t.slides.eq(l).remove(), l < r && (r -= 1), r = Math.max(r, 0);
    s.loop && t.loopCreate(), s.observer && $.observer || t.update(), s.loop ? t.slideTo(r + t.loopedSlides, 0, !1) : t.slideTo(r, 0, !1)
}

function hs() {
    const e = this,
        t = [];
    for (let s = 0; s < e.slides.length; s += 1) t.push(s);
    e.removeSlide(t)
}
var ms = {
    appendSlide: cs,
    prependSlide: ps,
    addSlide: us,
    removeSlide: fs,
    removeAllSlides: hs
};
const B = function() {
    const t = b.navigator.platform,
        s = b.navigator.userAgent,
        i = {
            ios: !1,
            android: !1,
            androidChrome: !1,
            desktop: !1,
            iphone: !1,
            ipod: !1,
            ipad: !1,
            edge: !1,
            ie: !1,
            firefox: !1,
            macos: !1,
            windows: !1,
            cordova: !!(b.cordova || b.phonegap),
            phonegap: !!(b.cordova || b.phonegap),
            electron: !1
        },
        a = b.screen.width,
        n = b.screen.height,
        r = s.match(/(Android);?[\s\/]+([\d.]+)?/);
    let l = s.match(/(iPad).*OS\s([\d_]+)/);
    const o = s.match(/(iPod)(.*OS\s([\d_]+))?/),
        d = !l && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
        c = s.indexOf("MSIE ") >= 0 || s.indexOf("Trident/") >= 0,
        p = s.indexOf("Edge/") >= 0,
        u = s.indexOf("Gecko/") >= 0 && s.indexOf("Firefox/") >= 0,
        m = t === "Win32",
        h = s.toLowerCase().indexOf("electron") >= 0;
    let f = t === "MacIntel";
    return !l && f && $.touch && (a === 1024 && n === 1366 || a === 834 && n === 1194 || a === 834 && n === 1112 || a === 768 && n === 1024) && (l = s.match(/(Version)\/([\d.]+)/), f = !1), i.ie = c, i.edge = p, i.firefox = u, r && !m && (i.os = "android", i.osVersion = r[2], i.android = !0, i.androidChrome = s.toLowerCase().indexOf("chrome") >= 0), (l || d || o) && (i.os = "ios", i.ios = !0), d && !o && (i.osVersion = d[2].replace(/_/g, "."), i.iphone = !0), l && (i.osVersion = l[2].replace(/_/g, "."), i.ipad = !0), o && (i.osVersion = o[3] ? o[3].replace(/_/g, ".") : null, i.ipod = !0), i.ios && i.osVersion && s.indexOf("Version/") >= 0 && i.osVersion.split(".")[0] === "10" && (i.osVersion = s.toLowerCase().split("version/")[1].split(" ")[0]), i.webView = !!((d || l || o) && (s.match(/.*AppleWebKit(?!.*Safari)/i) || b.navigator.standalone)) || b.matchMedia && b.matchMedia("(display-mode: standalone)").matches, i.webview = i.webView, i.standalone = i.webView, i.desktop = !(i.ios || i.android) || h, i.desktop && (i.electron = h, i.macos = f, i.windows = m, i.macos && (i.os = "macos"), i.windows && (i.os = "windows")), i.pixelRatio = b.devicePixelRatio || 1, i
}();

function gs(e) {
    const t = this,
        s = t.touchEventsData,
        {
            params: i,
            touches: a
        } = t;
    if (t.animating && i.preventInteractionOnTransition) return;
    let n = e;
    n.originalEvent && (n = n.originalEvent);
    const r = w(n.target);
    if (i.touchEventsTarget === "wrapper" && !r.closest(t.wrapperEl).length || (s.isTouchEvent = n.type === "touchstart", !s.isTouchEvent && "which" in n && n.which === 3) || !s.isTouchEvent && "button" in n && n.button > 0 || s.isTouched && s.isMoved) return;
    if (i.noSwiping && r.closest(i.noSwipingSelector ? i.noSwipingSelector : `.${i.noSwipingClass}`)[0]) {
        t.allowClick = !0;
        return
    }
    if (i.swipeHandler && !r.closest(i.swipeHandler)[0]) return;
    a.currentX = n.type === "touchstart" ? n.targetTouches[0].pageX : n.pageX, a.currentY = n.type === "touchstart" ? n.targetTouches[0].pageY : n.pageY;
    const l = a.currentX,
        o = a.currentY,
        d = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection,
        c = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
    if (!(d && (l <= c || l >= b.screen.width - c))) {
        if (v.extend(s, {
                isTouched: !0,
                isMoved: !1,
                allowTouchCallbacks: !0,
                isScrolling: void 0,
                startMoving: void 0
            }), a.startX = l, a.startY = o, s.touchStartTime = v.now(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, i.threshold > 0 && (s.allowThresholdMove = !1), n.type !== "touchstart") {
            let p = !0;
            r.is(s.formElements) && (p = !1), C.activeElement && w(C.activeElement).is(s.formElements) && C.activeElement !== r[0] && C.activeElement.blur();
            const u = p && t.allowTouchMove && i.touchStartPreventDefault;
            (i.touchStartForcePreventDefault || u) && n.preventDefault()
        }
        t.emit("touchStart", n)
    }
}

function vs(e) {
    const t = this,
        s = t.touchEventsData,
        {
            params: i,
            touches: a,
            rtlTranslate: n
        } = t;
    let r = e;
    if (r.originalEvent && (r = r.originalEvent), !s.isTouched) {
        s.startMoving && s.isScrolling && t.emit("touchMoveOpposite", r);
        return
    }
    if (s.isTouchEvent && r.type !== "touchmove") return;
    const l = r.type === "touchmove" && r.targetTouches && (r.targetTouches[0] || r.changedTouches[0]),
        o = r.type === "touchmove" ? l.pageX : r.pageX,
        d = r.type === "touchmove" ? l.pageY : r.pageY;
    if (r.preventedByNestedSwiper) {
        a.startX = o, a.startY = d;
        return
    }
    if (!t.allowTouchMove) {
        t.allowClick = !1, s.isTouched && (v.extend(a, {
            startX: o,
            startY: d,
            currentX: o,
            currentY: d
        }), s.touchStartTime = v.now());
        return
    }
    if (s.isTouchEvent && i.touchReleaseOnEdges && !i.loop) {
        if (t.isVertical()) {
            if (d < a.startY && t.translate <= t.maxTranslate() || d > a.startY && t.translate >= t.minTranslate()) {
                s.isTouched = !1, s.isMoved = !1;
                return
            }
        } else if (o < a.startX && t.translate <= t.maxTranslate() || o > a.startX && t.translate >= t.minTranslate()) return
    }
    if (s.isTouchEvent && C.activeElement && r.target === C.activeElement && w(r.target).is(s.formElements)) {
        s.isMoved = !0, t.allowClick = !1;
        return
    }
    if (s.allowTouchCallbacks && t.emit("touchMove", r), r.targetTouches && r.targetTouches.length > 1) return;
    a.currentX = o, a.currentY = d;
    const c = a.currentX - a.startX,
        p = a.currentY - a.startY;
    if (t.params.threshold && Math.sqrt(c ** 2 + p ** 2) < t.params.threshold) return;
    if (typeof s.isScrolling == "undefined") {
        let f;
        t.isHorizontal() && a.currentY === a.startY || t.isVertical() && a.currentX === a.startX ? s.isScrolling = !1 : c * c + p * p >= 25 && (f = Math.atan2(Math.abs(p), Math.abs(c)) * 180 / Math.PI, s.isScrolling = t.isHorizontal() ? f > i.touchAngle : 90 - f > i.touchAngle)
    }
    if (s.isScrolling && t.emit("touchMoveOpposite", r), typeof s.startMoving == "undefined" && (a.currentX !== a.startX || a.currentY !== a.startY) && (s.startMoving = !0), s.isScrolling) {
        s.isTouched = !1;
        return
    }
    if (!s.startMoving) return;
    t.allowClick = !1, !i.cssMode && r.cancelable && r.preventDefault(), i.touchMoveStopPropagation && !i.nested && r.stopPropagation(), s.isMoved || (i.loop && t.loopFix(), s.startTranslate = t.getTranslate(), t.setTransition(0), t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"), s.allowMomentumBounce = !1, i.grabCursor && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!0), t.emit("sliderFirstMove", r)), t.emit("sliderMove", r), s.isMoved = !0;
    let u = t.isHorizontal() ? c : p;
    a.diff = u, u *= i.touchRatio, n && (u = -u), t.swipeDirection = u > 0 ? "prev" : "next", s.currentTranslate = u + s.startTranslate;
    let m = !0,
        h = i.resistanceRatio;
    if (i.touchReleaseOnEdges && (h = 0), u > 0 && s.currentTranslate > t.minTranslate() ? (m = !1, i.resistance && (s.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + s.startTranslate + u) ** h)) : u < 0 && s.currentTranslate < t.maxTranslate() && (m = !1, i.resistance && (s.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - s.startTranslate - u) ** h)), m && (r.preventedByNestedSwiper = !0), !t.allowSlideNext && t.swipeDirection === "next" && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate), !t.allowSlidePrev && t.swipeDirection === "prev" && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate), i.threshold > 0)
        if (Math.abs(u) > i.threshold || s.allowThresholdMove) {
            if (!s.allowThresholdMove) {
                s.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, s.currentTranslate = s.startTranslate, a.diff = t.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY;
                return
            }
        } else {
            s.currentTranslate = s.startTranslate;
            return
        }!i.followFinger || i.cssMode || ((i.freeMode || i.watchSlidesProgress || i.watchSlidesVisibility) && (t.updateActiveIndex(), t.updateSlidesClasses()), i.freeMode && (s.velocities.length === 0 && s.velocities.push({
        position: a[t.isHorizontal() ? "startX" : "startY"],
        time: s.touchStartTime
    }), s.velocities.push({
        position: a[t.isHorizontal() ? "currentX" : "currentY"],
        time: v.now()
    })), t.updateProgress(s.currentTranslate), t.setTranslate(s.currentTranslate))
}

function ws(e) {
    const t = this,
        s = t.touchEventsData,
        {
            params: i,
            touches: a,
            rtlTranslate: n,
            $wrapperEl: r,
            slidesGrid: l,
            snapGrid: o
        } = t;
    let d = e;
    if (d.originalEvent && (d = d.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", d), s.allowTouchCallbacks = !1, !s.isTouched) {
        s.isMoved && i.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, s.startMoving = !1;
        return
    }
    i.grabCursor && s.isMoved && s.isTouched && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!1);
    const c = v.now(),
        p = c - s.touchStartTime;
    if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap click", d), p < 300 && c - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", d)), s.lastClickTime = v.now(), v.nextTick(() => {
            t.destroyed || (t.allowClick = !0)
        }), !s.isTouched || !s.isMoved || !t.swipeDirection || a.diff === 0 || s.currentTranslate === s.startTranslate) {
        s.isTouched = !1, s.isMoved = !1, s.startMoving = !1;
        return
    }
    s.isTouched = !1, s.isMoved = !1, s.startMoving = !1;
    let u;
    if (i.followFinger ? u = n ? t.translate : -t.translate : u = -s.currentTranslate, i.cssMode) return;
    if (i.freeMode) {
        if (u < -t.minTranslate()) {
            t.slideTo(t.activeIndex);
            return
        }
        if (u > -t.maxTranslate()) {
            t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1);
            return
        }
        if (i.freeModeMomentum) {
            if (s.velocities.length > 1) {
                const T = s.velocities.pop(),
                    O = s.velocities.pop(),
                    V = T.position - O.position,
                    H = T.time - O.time;
                t.velocity = V / H, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (H > 150 || v.now() - T.time > 300) && (t.velocity = 0)
            } else t.velocity = 0;
            t.velocity *= i.freeModeMomentumVelocityRatio, s.velocities.length = 0;
            let g = 1e3 * i.freeModeMomentumRatio;
            const S = t.velocity * g;
            let y = t.translate + S;
            n && (y = -y);
            let k = !1,
                I;
            const P = Math.abs(t.velocity) * 20 * i.freeModeMomentumBounceRatio;
            let E;
            if (y < t.maxTranslate()) i.freeModeMomentumBounce ? (y + t.maxTranslate() < -P && (y = t.maxTranslate() - P), I = t.maxTranslate(), k = !0, s.allowMomentumBounce = !0) : y = t.maxTranslate(), i.loop && i.centeredSlides && (E = !0);
            else if (y > t.minTranslate()) i.freeModeMomentumBounce ? (y - t.minTranslate() > P && (y = t.minTranslate() + P), I = t.minTranslate(), k = !0, s.allowMomentumBounce = !0) : y = t.minTranslate(), i.loop && i.centeredSlides && (E = !0);
            else if (i.freeModeSticky) {
                let T;
                for (let O = 0; O < o.length; O += 1)
                    if (o[O] > -y) {
                        T = O;
                        break
                    }
                Math.abs(o[T] - y) < Math.abs(o[T - 1] - y) || t.swipeDirection === "next" ? y = o[T] : y = o[T - 1], y = -y
            }
            if (E && t.once("transitionEnd", () => {
                    t.loopFix()
                }), t.velocity !== 0) {
                if (n ? g = Math.abs((-y - t.translate) / t.velocity) : g = Math.abs((y - t.translate) / t.velocity), i.freeModeSticky) {
                    const T = Math.abs((n ? -y : y) - t.translate),
                        O = t.slidesSizesGrid[t.activeIndex];
                    T < O ? g = i.speed : T < 2 * O ? g = i.speed * 1.5 : g = i.speed * 2.5
                }
            } else if (i.freeModeSticky) {
                t.slideToClosest();
                return
            }
            i.freeModeMomentumBounce && k ? (t.updateProgress(I), t.setTransition(g), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating = !0, r.transitionEnd(() => {
                !t || t.destroyed || !s.allowMomentumBounce || (t.emit("momentumBounce"), t.setTransition(i.speed), setTimeout(() => {
                    t.setTranslate(I), r.transitionEnd(() => {
                        !t || t.destroyed || t.transitionEnd()
                    })
                }, 0))
            })) : t.velocity ? (t.updateProgress(y), t.setTransition(g), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, r.transitionEnd(() => {
                !t || t.destroyed || t.transitionEnd()
            }))) : t.updateProgress(y), t.updateActiveIndex(), t.updateSlidesClasses()
        } else if (i.freeModeSticky) {
            t.slideToClosest();
            return
        }(!i.freeModeMomentum || p >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
        return
    }
    let m = 0,
        h = t.slidesSizesGrid[0];
    for (let g = 0; g < l.length; g += g < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
        const S = g < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        typeof l[g + S] != "undefined" ? u >= l[g] && u < l[g + S] && (m = g, h = l[g + S] - l[g]) : u >= l[g] && (m = g, h = l[l.length - 1] - l[l.length - 2])
    }
    const f = (u - l[m]) / h,
        x = m < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
    if (p > i.longSwipesMs) {
        if (!i.longSwipes) {
            t.slideTo(t.activeIndex);
            return
        }
        t.swipeDirection === "next" && (f >= i.longSwipesRatio ? t.slideTo(m + x) : t.slideTo(m)), t.swipeDirection === "prev" && (f > 1 - i.longSwipesRatio ? t.slideTo(m + x) : t.slideTo(m))
    } else {
        if (!i.shortSwipes) {
            t.slideTo(t.activeIndex);
            return
        }
        t.navigation && (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl) ? d.target === t.navigation.nextEl ? t.slideTo(m + x) : t.slideTo(m) : (t.swipeDirection === "next" && t.slideTo(m + x), t.swipeDirection === "prev" && t.slideTo(m))
    }
}

function me() {
    const e = this,
        {
            params: t,
            el: s
        } = e;
    if (s && s.offsetWidth === 0) return;
    t.breakpoints && e.setBreakpoint();
    const {
        allowSlideNext: i,
        allowSlidePrev: a,
        snapGrid: n
    } = e;
    e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), (t.slidesPerView === "auto" || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = a, e.allowSlideNext = i, e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow()
}

function bs(e) {
    const t = this;
    t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
}

function ys() {
    const e = this,
        {
            wrapperEl: t,
            rtlTranslate: s
        } = e;
    e.previousTranslate = e.translate, e.isHorizontal() ? s ? e.translate = t.scrollWidth - t.offsetWidth - t.scrollLeft : e.translate = -t.scrollLeft : e.translate = -t.scrollTop, e.translate === -0 && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
    let i;
    const a = e.maxTranslate() - e.minTranslate();
    a === 0 ? i = 0 : i = (e.translate - e.minTranslate()) / a, i !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
}
let Ee = !1;

function xs() {}

function Ss() {
    const e = this,
        {
            params: t,
            touchEvents: s,
            el: i,
            wrapperEl: a
        } = e;
    e.onTouchStart = gs.bind(e), e.onTouchMove = vs.bind(e), e.onTouchEnd = ws.bind(e), t.cssMode && (e.onScroll = ys.bind(e)), e.onClick = bs.bind(e);
    const n = !!t.nested;
    if (!$.touch && $.pointerEvents) i.addEventListener(s.start, e.onTouchStart, !1), C.addEventListener(s.move, e.onTouchMove, n), C.addEventListener(s.end, e.onTouchEnd, !1);
    else {
        if ($.touch) {
            const r = s.start === "touchstart" && $.passiveListener && t.passiveListeners ? {
                passive: !0,
                capture: !1
            } : !1;
            i.addEventListener(s.start, e.onTouchStart, r), i.addEventListener(s.move, e.onTouchMove, $.passiveListener ? {
                passive: !1,
                capture: n
            } : n), i.addEventListener(s.end, e.onTouchEnd, r), s.cancel && i.addEventListener(s.cancel, e.onTouchEnd, r), Ee || (C.addEventListener("touchstart", xs), Ee = !0)
        }(t.simulateTouch && !B.ios && !B.android || t.simulateTouch && !$.touch && B.ios) && (i.addEventListener("mousedown", e.onTouchStart, !1), C.addEventListener("mousemove", e.onTouchMove, n), C.addEventListener("mouseup", e.onTouchEnd, !1))
    }(t.preventClicks || t.preventClicksPropagation) && i.addEventListener("click", e.onClick, !0), t.cssMode && a.addEventListener("scroll", e.onScroll), t.updateOnWindowResize ? e.on(B.ios || B.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", me, !0) : e.on("observerUpdate", me, !0)
}

function Es() {
    const e = this,
        {
            params: t,
            touchEvents: s,
            el: i,
            wrapperEl: a
        } = e,
        n = !!t.nested;
    if (!$.touch && $.pointerEvents) i.removeEventListener(s.start, e.onTouchStart, !1), C.removeEventListener(s.move, e.onTouchMove, n), C.removeEventListener(s.end, e.onTouchEnd, !1);
    else {
        if ($.touch) {
            const r = s.start === "onTouchStart" && $.passiveListener && t.passiveListeners ? {
                passive: !0,
                capture: !1
            } : !1;
            i.removeEventListener(s.start, e.onTouchStart, r), i.removeEventListener(s.move, e.onTouchMove, n), i.removeEventListener(s.end, e.onTouchEnd, r), s.cancel && i.removeEventListener(s.cancel, e.onTouchEnd, r)
        }(t.simulateTouch && !B.ios && !B.android || t.simulateTouch && !$.touch && B.ios) && (i.removeEventListener("mousedown", e.onTouchStart, !1), C.removeEventListener("mousemove", e.onTouchMove, n), C.removeEventListener("mouseup", e.onTouchEnd, !1))
    }(t.preventClicks || t.preventClicksPropagation) && i.removeEventListener("click", e.onClick, !0), t.cssMode && a.removeEventListener("scroll", e.onScroll), e.off(B.ios || B.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", me)
}
var Ts = {
    attachEvents: Ss,
    detachEvents: Es
};

function Cs() {
    const e = this,
        {
            activeIndex: t,
            initialized: s,
            loopedSlides: i = 0,
            params: a,
            $el: n
        } = e,
        r = a.breakpoints;
    if (!r || r && Object.keys(r).length === 0) return;
    const l = e.getBreakpoint(r);
    if (l && e.currentBreakpoint !== l) {
        const o = l in r ? r[l] : void 0;
        o && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach(h => {
            const f = o[h];
            typeof f != "undefined" && (h === "slidesPerView" && (f === "AUTO" || f === "auto") ? o[h] = "auto" : h === "slidesPerView" ? o[h] = parseFloat(f) : o[h] = parseInt(f, 10))
        });
        const d = o || e.originalParams,
            c = a.slidesPerColumn > 1,
            p = d.slidesPerColumn > 1;
        c && !p ? n.removeClass(`${a.containerModifierClass}multirow ${a.containerModifierClass}multirow-column`) : !c && p && (n.addClass(`${a.containerModifierClass}multirow`), d.slidesPerColumnFill === "column" && n.addClass(`${a.containerModifierClass}multirow-column`));
        const u = d.direction && d.direction !== a.direction,
            m = a.loop && (d.slidesPerView !== a.slidesPerView || u);
        u && s && e.changeDirection(), v.extend(e.params, d), v.extend(e, {
            allowTouchMove: e.params.allowTouchMove,
            allowSlideNext: e.params.allowSlideNext,
            allowSlidePrev: e.params.allowSlidePrev
        }), e.currentBreakpoint = l, m && s && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)), e.emit("breakpoint", d)
    }
}

function $s(e) {
    if (!e) return;
    let t = !1;
    const s = Object.keys(e).map(i => {
        if (typeof i == "string" && i.indexOf("@") === 0) {
            const a = parseFloat(i.substr(1));
            return {
                value: b.innerHeight * a,
                point: i
            }
        }
        return {
            value: i,
            point: i
        }
    });
    s.sort((i, a) => parseInt(i.value, 10) - parseInt(a.value, 10));
    for (let i = 0; i < s.length; i += 1) {
        const {
            point: a,
            value: n
        } = s[i];
        n <= b.innerWidth && (t = a)
    }
    return t || "max"
}
var Ms = {
    setBreakpoint: Cs,
    getBreakpoint: $s
};

function Ps() {
    const e = this,
        {
            classNames: t,
            params: s,
            rtl: i,
            $el: a
        } = e,
        n = [];
    n.push("initialized"), n.push(s.direction), s.freeMode && n.push("free-mode"), s.autoHeight && n.push("autoheight"), i && n.push("rtl"), s.slidesPerColumn > 1 && (n.push("multirow"), s.slidesPerColumnFill === "column" && n.push("multirow-column")), B.android && n.push("android"), B.ios && n.push("ios"), s.cssMode && n.push("css-mode"), n.forEach(r => {
        t.push(s.containerModifierClass + r)
    }), a.addClass(t.join(" "))
}

function ks() {
    const e = this,
        {
            $el: t,
            classNames: s
        } = e;
    t.removeClass(s.join(" "))
}
var zs = {
    addClasses: Ps,
    removeClasses: ks
};

function Is(e, t, s, i, a, n) {
    let r;

    function l() {
        n && n()
    }!w(e).parent("picture")[0] && (!e.complete || !a) && t ? (r = new b.Image, r.onload = l, r.onerror = l, i && (r.sizes = i), s && (r.srcset = s), t && (r.src = t)) : l()
}

function Ls() {
    const e = this;
    e.imagesToLoad = e.$el.find("img");

    function t() {
        typeof e == "undefined" || e === null || !e || e.destroyed || (e.imagesLoaded !== void 0 && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
    }
    for (let s = 0; s < e.imagesToLoad.length; s += 1) {
        const i = e.imagesToLoad[s];
        e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t)
    }
}
var Ds = {
    loadImage: Is,
    preloadImages: Ls
};

function Os() {
    const e = this,
        t = e.params,
        s = e.isLocked,
        i = e.slides.length > 0 && t.slidesOffsetBefore + t.spaceBetween * (e.slides.length - 1) + e.slides[0].offsetWidth * e.slides.length;
    t.slidesOffsetBefore && t.slidesOffsetAfter && i ? e.isLocked = i <= e.size : e.isLocked = e.snapGrid.length === 1, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, s !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), s && s !== e.isLocked && (e.isEnd = !1, e.navigation && e.navigation.update())
}
var As = {
        checkOverflow: Os
    },
    Te = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        preventInteractionOnTransition: !1,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: .02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0
    };
const ce = {
        update: Gt,
        translate: Ft,
        transition: jt,
        slide: ss,
        loop: rs,
        grabCursor: ds,
        manipulation: ms,
        events: Ts,
        breakpoints: Ms,
        checkOverflow: As,
        classes: zs,
        images: Ds
    },
    pe = {};
class X extends Se {
    constructor(...t) {
        let s, i;
        t.length === 1 && t[0].constructor && t[0].constructor === Object ? i = t[0] : [s, i] = t, i || (i = {}), i = v.extend({}, i), s && !i.el && (i.el = s), super(i), Object.keys(ce).forEach(o => {
            Object.keys(ce[o]).forEach(d => {
                X.prototype[d] || (X.prototype[d] = ce[o][d])
            })
        });
        const a = this;
        typeof a.modules == "undefined" && (a.modules = {}), Object.keys(a.modules).forEach(o => {
            const d = a.modules[o];
            if (d.params) {
                const c = Object.keys(d.params)[0],
                    p = d.params[c];
                if (typeof p != "object" || p === null || !(c in i && "enabled" in p)) return;
                i[c] === !0 && (i[c] = {
                    enabled: !0
                }), typeof i[c] == "object" && !("enabled" in i[c]) && (i[c].enabled = !0), i[c] || (i[c] = {
                    enabled: !1
                })
            }
        });
        const n = v.extend({}, Te);
        a.useModulesParams(n), a.params = v.extend({}, n, pe, i), a.originalParams = v.extend({}, a.params), a.passedParams = v.extend({}, i), a.$ = w;
        const r = w(a.params.el);
        if (s = r[0], !s) return;
        if (r.length > 1) {
            const o = [];
            return r.each((d, c) => {
                const p = v.extend({}, i, {
                    el: c
                });
                o.push(new X(p))
            }), o
        }
        s.swiper = a, r.data("swiper", a);
        let l;
        return s && s.shadowRoot && s.shadowRoot.querySelector ? (l = w(s.shadowRoot.querySelector(`.${a.params.wrapperClass}`)), l.children = o => r.children(o)) : l = r.children(`.${a.params.wrapperClass}`), v.extend(a, {
            $el: r,
            el: s,
            $wrapperEl: l,
            wrapperEl: l[0],
            classNames: [],
            slides: w(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal() {
                return a.params.direction === "horizontal"
            },
            isVertical() {
                return a.params.direction === "vertical"
            },
            rtl: s.dir.toLowerCase() === "rtl" || r.css("direction") === "rtl",
            rtlTranslate: a.params.direction === "horizontal" && (s.dir.toLowerCase() === "rtl" || r.css("direction") === "rtl"),
            wrongRTL: l.css("display") === "-webkit-box",
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: a.params.allowSlideNext,
            allowSlidePrev: a.params.allowSlidePrev,
            touchEvents: function() {
                const d = ["touchstart", "touchmove", "touchend", "touchcancel"];
                let c = ["mousedown", "mousemove", "mouseup"];
                return $.pointerEvents && (c = ["pointerdown", "pointermove", "pointerup"]), a.touchEventsTouch = {
                    start: d[0],
                    move: d[1],
                    end: d[2],
                    cancel: d[3]
                }, a.touchEventsDesktop = {
                    start: c[0],
                    move: c[1],
                    end: c[2]
                }, $.touch || !a.params.simulateTouch ? a.touchEventsTouch : a.touchEventsDesktop
            }(),
            touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                formElements: "input, select, option, textarea, button, video, label",
                lastClickTime: v.now(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0
            },
            allowClick: !0,
            allowTouchMove: a.params.allowTouchMove,
            touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
        }), a.useModules(), a.params.init && a.init(), a
    }
    slidesPerViewDynamic() {
        const t = this,
            {
                params: s,
                slides: i,
                slidesGrid: a,
                size: n,
                activeIndex: r
            } = t;
        let l = 1;
        if (s.centeredSlides) {
            let o = i[r].swiperSlideSize,
                d;
            for (let c = r + 1; c < i.length; c += 1) i[c] && !d && (o += i[c].swiperSlideSize, l += 1, o > n && (d = !0));
            for (let c = r - 1; c >= 0; c -= 1) i[c] && !d && (o += i[c].swiperSlideSize, l += 1, o > n && (d = !0))
        } else
            for (let o = r + 1; o < i.length; o += 1) a[o] - a[r] < n && (l += 1);
        return l
    }
    update() {
        const t = this;
        if (!t || t.destroyed) return;
        const {
            snapGrid: s,
            params: i
        } = t;
        i.breakpoints && t.setBreakpoint(), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses();

        function a() {
            const r = t.rtlTranslate ? t.translate * -1 : t.translate,
                l = Math.min(Math.max(r, t.maxTranslate()), t.minTranslate());
            t.setTranslate(l), t.updateActiveIndex(), t.updateSlidesClasses()
        }
        let n;
        t.params.freeMode ? (a(), t.params.autoHeight && t.updateAutoHeight()) : ((t.params.slidesPerView === "auto" || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides ? n = t.slideTo(t.slides.length - 1, 0, !1, !0) : n = t.slideTo(t.activeIndex, 0, !1, !0), n || a()), i.watchOverflow && s !== t.snapGrid && t.checkOverflow(), t.emit("update")
    }
    changeDirection(t, s = !0) {
        const i = this,
            a = i.params.direction;
        return t || (t = a === "horizontal" ? "vertical" : "horizontal"), t === a || t !== "horizontal" && t !== "vertical" || (i.$el.removeClass(`${i.params.containerModifierClass}${a}`).addClass(`${i.params.containerModifierClass}${t}`), i.params.direction = t, i.slides.each((n, r) => {
            t === "vertical" ? r.style.width = "" : r.style.height = ""
        }), i.emit("changeDirection"), s && i.update()), i
    }
    init() {
        const t = this;
        t.initialized || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit), t.attachEvents(), t.initialized = !0, t.emit("init"))
    }
    destroy(t = !0, s = !0) {
        const i = this,
            {
                params: a,
                $el: n,
                $wrapperEl: r,
                slides: l
            } = i;
        return typeof i.params == "undefined" || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), a.loop && i.loopDestroy(), s && (i.removeClasses(), n.removeAttr("style"), r.removeAttr("style"), l && l.length && l.removeClass([a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(o => {
            i.off(o)
        }), t !== !1 && (i.$el[0].swiper = null, i.$el.data("swiper", null), v.deleteProps(i)), i.destroyed = !0), null
    }
    static extendDefaults(t) {
        v.extend(pe, t)
    }
    static get extendedDefaults() {
        return pe
    }
    static get defaults() {
        return Te
    }
    static get Class() {
        return Se
    }
    static get $() {
        return w
    }
}
var Bs = {
        name: "device",
        proto: {
            device: B
        },
        static: {
            device: B
        }
    },
    Hs = {
        name: "support",
        proto: {
            support: $
        },
        static: {
            support: $
        }
    };
const de = function() {
    function t() {
        const s = b.navigator.userAgent.toLowerCase();
        return s.indexOf("safari") >= 0 && s.indexOf("chrome") < 0 && s.indexOf("android") < 0
    }
    return {
        isEdge: !!b.navigator.userAgent.match(/Edge/g),
        isSafari: t(),
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(b.navigator.userAgent)
    }
}();
var Gs = {
        name: "browser",
        proto: {
            browser: de
        },
        static: {
            browser: de
        }
    },
    Ns = {
        name: "resize",
        create() {
            const e = this;
            v.extend(e, {
                resize: {
                    resizeHandler() {
                        !e || e.destroyed || !e.initialized || (e.emit("beforeResize"), e.emit("resize"))
                    },
                    orientationChangeHandler() {
                        !e || e.destroyed || !e.initialized || e.emit("orientationchange")
                    }
                }
            })
        },
        on: {
            init() {
                const e = this;
                b.addEventListener("resize", e.resize.resizeHandler), b.addEventListener("orientationchange", e.resize.orientationChangeHandler)
            },
            destroy() {
                const e = this;
                b.removeEventListener("resize", e.resize.resizeHandler), b.removeEventListener("orientationchange", e.resize.orientationChangeHandler)
            }
        }
    };
const oe = {
    func: b.MutationObserver || b.WebkitMutationObserver,
    attach(e, t = {}) {
        const s = this,
            i = oe.func,
            a = new i(n => {
                if (n.length === 1) {
                    s.emit("observerUpdate", n[0]);
                    return
                }
                const r = function() {
                    s.emit("observerUpdate", n[0])
                };
                b.requestAnimationFrame ? b.requestAnimationFrame(r) : b.setTimeout(r, 0)
            });
        a.observe(e, {
            attributes: typeof t.attributes == "undefined" ? !0 : t.attributes,
            childList: typeof t.childList == "undefined" ? !0 : t.childList,
            characterData: typeof t.characterData == "undefined" ? !0 : t.characterData
        }), s.observer.observers.push(a)
    },
    init() {
        const e = this;
        if (!(!$.observer || !e.params.observer)) {
            if (e.params.observeParents) {
                const t = e.$el.parents();
                for (let s = 0; s < t.length; s += 1) e.observer.attach(t[s])
            }
            e.observer.attach(e.$el[0], {
                childList: e.params.observeSlideChildren
            }), e.observer.attach(e.$wrapperEl[0], {
                attributes: !1
            })
        }
    },
    destroy() {
        const e = this;
        e.observer.observers.forEach(t => {
            t.disconnect()
        }), e.observer.observers = []
    }
};
var Xs = {
    name: "observer",
    params: {
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
    },
    create() {
        const e = this;
        v.extend(e, {
            observer: {
                init: oe.init.bind(e),
                attach: oe.attach.bind(e),
                destroy: oe.destroy.bind(e),
                observers: []
            }
        })
    },
    on: {
        init() {
            this.observer.init()
        },
        destroy() {
            this.observer.destroy()
        }
    }
};
const K = {
    update(e) {
        const t = this,
            {
                slidesPerView: s,
                slidesPerGroup: i,
                centeredSlides: a
            } = t.params,
            {
                addSlidesBefore: n,
                addSlidesAfter: r
            } = t.params.virtual,
            {
                from: l,
                to: o,
                slides: d,
                slidesGrid: c,
                renderSlide: p,
                offset: u
            } = t.virtual;
        t.updateActiveIndex();
        const m = t.activeIndex || 0;
        let h;
        t.rtlTranslate ? h = "right" : h = t.isHorizontal() ? "left" : "top";
        let f, x;
        a ? (f = Math.floor(s / 2) + i + n, x = Math.floor(s / 2) + i + r) : (f = s + (i - 1) + n, x = i + r);
        const g = Math.max((m || 0) - x, 0),
            S = Math.min((m || 0) + f, d.length - 1),
            y = (t.slidesGrid[g] || 0) - (t.slidesGrid[0] || 0);
        v.extend(t.virtual, {
            from: g,
            to: S,
            offset: y,
            slidesGrid: t.slidesGrid
        });

        function k() {
            t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
        }
        if (l === g && o === S && !e) {
            t.slidesGrid !== c && y !== u && t.slides.css(h, `${y}px`), t.updateProgress();
            return
        }
        if (t.params.virtual.renderExternal) {
            t.params.virtual.renderExternal.call(t, {
                offset: y,
                from: g,
                to: S,
                slides: function() {
                    const T = [];
                    for (let O = g; O <= S; O += 1) T.push(d[O]);
                    return T
                }()
            }), k();
            return
        }
        const I = [],
            P = [];
        if (e) t.$wrapperEl.find(`.${t.params.slideClass}`).remove();
        else
            for (let E = l; E <= o; E += 1)(E < g || E > S) && t.$wrapperEl.find(`.${t.params.slideClass}[data-swiper-slide-index="${E}"]`).remove();
        for (let E = 0; E < d.length; E += 1) E >= g && E <= S && (typeof o == "undefined" || e ? P.push(E) : (E > o && P.push(E), E < l && I.push(E)));
        P.forEach(E => {
            t.$wrapperEl.append(p(d[E], E))
        }), I.sort((E, T) => T - E).forEach(E => {
            t.$wrapperEl.prepend(p(d[E], E))
        }), t.$wrapperEl.children(".swiper-slide").css(h, `${y}px`), k()
    },
    renderSlide(e, t) {
        const s = this,
            i = s.params.virtual;
        if (i.cache && s.virtual.cache[t]) return s.virtual.cache[t];
        const a = i.renderSlide ? w(i.renderSlide.call(s, e, t)) : w(`<div class="${s.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);
        return a.attr("data-swiper-slide-index") || a.attr("data-swiper-slide-index", t), i.cache && (s.virtual.cache[t] = a), a
    },
    appendSlide(e) {
        const t = this;
        if (typeof e == "object" && "length" in e)
            for (let s = 0; s < e.length; s += 1) e[s] && t.virtual.slides.push(e[s]);
        else t.virtual.slides.push(e);
        t.virtual.update(!0)
    },
    prependSlide(e) {
        const t = this,
            s = t.activeIndex;
        let i = s + 1,
            a = 1;
        if (Array.isArray(e)) {
            for (let n = 0; n < e.length; n += 1) e[n] && t.virtual.slides.unshift(e[n]);
            i = s + e.length, a = e.length
        } else t.virtual.slides.unshift(e);
        if (t.params.virtual.cache) {
            const n = t.virtual.cache,
                r = {};
            Object.keys(n).forEach(l => {
                const o = n[l],
                    d = o.attr("data-swiper-slide-index");
                d && o.attr("data-swiper-slide-index", parseInt(d, 10) + 1), r[parseInt(l, 10) + a] = o
            }), t.virtual.cache = r
        }
        t.virtual.update(!0), t.slideTo(i, 0)
    },
    removeSlide(e) {
        const t = this;
        if (typeof e == "undefined" || e === null) return;
        let s = t.activeIndex;
        if (Array.isArray(e))
            for (let i = e.length - 1; i >= 0; i -= 1) t.virtual.slides.splice(e[i], 1), t.params.virtual.cache && delete t.virtual.cache[e[i]], e[i] < s && (s -= 1), s = Math.max(s, 0);
        else t.virtual.slides.splice(e, 1), t.params.virtual.cache && delete t.virtual.cache[e], e < s && (s -= 1), s = Math.max(s, 0);
        t.virtual.update(!0), t.slideTo(s, 0)
    },
    removeAllSlides() {
        const e = this;
        e.virtual.slides = [], e.params.virtual.cache && (e.virtual.cache = {}), e.virtual.update(!0), e.slideTo(0, 0)
    }
};
var Vs = {
    name: "virtual",
    params: {
        virtual: {
            enabled: !1,
            slides: [],
            cache: !0,
            renderSlide: null,
            renderExternal: null,
            addSlidesBefore: 0,
            addSlidesAfter: 0
        }
    },
    create() {
        const e = this;
        v.extend(e, {
            virtual: {
                update: K.update.bind(e),
                appendSlide: K.appendSlide.bind(e),
                prependSlide: K.prependSlide.bind(e),
                removeSlide: K.removeSlide.bind(e),
                removeAllSlides: K.removeAllSlides.bind(e),
                renderSlide: K.renderSlide.bind(e),
                slides: e.params.virtual.slides,
                cache: {}
            }
        })
    },
    on: {
        beforeInit() {
            const e = this;
            if (!e.params.virtual.enabled) return;
            e.classNames.push(`${e.params.containerModifierClass}virtual`);
            const t = {
                watchSlidesProgress: !0
            };
            v.extend(e.params, t), v.extend(e.originalParams, t), e.params.initialSlide || e.virtual.update()
        },
        setTranslate() {
            const e = this;
            !e.params.virtual.enabled || e.virtual.update()
        }
    }
};
const ue = {
    handle(e) {
        const t = this,
            {
                rtlTranslate: s
            } = t;
        let i = e;
        i.originalEvent && (i = i.originalEvent);
        const a = i.keyCode || i.charCode,
            n = t.params.keyboard.pageUpDown,
            r = n && a === 33,
            l = n && a === 34,
            o = a === 37,
            d = a === 39,
            c = a === 38,
            p = a === 40;
        if (!t.allowSlideNext && (t.isHorizontal() && d || t.isVertical() && p || l) || !t.allowSlidePrev && (t.isHorizontal() && o || t.isVertical() && c || r)) return !1;
        if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey) && !(C.activeElement && C.activeElement.nodeName && (C.activeElement.nodeName.toLowerCase() === "input" || C.activeElement.nodeName.toLowerCase() === "textarea"))) {
            if (t.params.keyboard.onlyInViewport && (r || l || o || d || c || p)) {
                let u = !1;
                if (t.$el.parents(`.${t.params.slideClass}`).length > 0 && t.$el.parents(`.${t.params.slideActiveClass}`).length === 0) return;
                const m = b.innerWidth,
                    h = b.innerHeight,
                    f = t.$el.offset();
                s && (f.left -= t.$el[0].scrollLeft);
                const x = [
                    [f.left, f.top],
                    [f.left + t.width, f.top],
                    [f.left, f.top + t.height],
                    [f.left + t.width, f.top + t.height]
                ];
                for (let g = 0; g < x.length; g += 1) {
                    const S = x[g];
                    S[0] >= 0 && S[0] <= m && S[1] >= 0 && S[1] <= h && (u = !0)
                }
                if (!u) return
            }
            t.isHorizontal() ? ((r || l || o || d) && (i.preventDefault ? i.preventDefault() : i.returnValue = !1), ((l || d) && !s || (r || o) && s) && t.slideNext(), ((r || o) && !s || (l || d) && s) && t.slidePrev()) : ((r || l || c || p) && (i.preventDefault ? i.preventDefault() : i.returnValue = !1), (l || p) && t.slideNext(), (r || c) && t.slidePrev()), t.emit("keyPress", a)
        }
    },
    enable() {
        const e = this;
        e.keyboard.enabled || (w(C).on("keydown", e.keyboard.handle), e.keyboard.enabled = !0)
    },
    disable() {
        const e = this;
        !e.keyboard.enabled || (w(C).off("keydown", e.keyboard.handle), e.keyboard.enabled = !1)
    }
};
var Ys = {
    name: "keyboard",
    params: {
        keyboard: {
            enabled: !1,
            onlyInViewport: !0,
            pageUpDown: !0
        }
    },
    create() {
        const e = this;
        v.extend(e, {
            keyboard: {
                enabled: !1,
                enable: ue.enable.bind(e),
                disable: ue.disable.bind(e),
                handle: ue.handle.bind(e)
            }
        })
    },
    on: {
        init() {
            const e = this;
            e.params.keyboard.enabled && e.keyboard.enable()
        },
        destroy() {
            const e = this;
            e.keyboard.enabled && e.keyboard.disable()
        }
    }
};

function _s() {
    const e = "onwheel";
    let t = e in C;
    if (!t) {
        const s = C.createElement("div");
        s.setAttribute(e, "return;"), t = typeof s[e] == "function"
    }
    return !t && C.implementation && C.implementation.hasFeature && C.implementation.hasFeature("", "") !== !0 && (t = C.implementation.hasFeature("Events.wheel", "3.0")), t
}
const R = {
    lastScrollTime: v.now(),
    lastEventBeforeSnap: void 0,
    recentWheelEvents: [],
    event() {
        return b.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : _s() ? "wheel" : "mousewheel"
    },
    normalize(e) {
        let a = 0,
            n = 0,
            r = 0,
            l = 0;
        return "detail" in e && (n = e.detail), "wheelDelta" in e && (n = -e.wheelDelta / 120), "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (a = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (a = n, n = 0), r = a * 10, l = n * 10, "deltaY" in e && (l = e.deltaY), "deltaX" in e && (r = e.deltaX), e.shiftKey && !r && (r = l, l = 0), (r || l) && e.deltaMode && (e.deltaMode === 1 ? (r *= 40, l *= 40) : (r *= 800, l *= 800)), r && !a && (a = r < 1 ? -1 : 1), l && !n && (n = l < 1 ? -1 : 1), {
            spinX: a,
            spinY: n,
            pixelX: r,
            pixelY: l
        }
    },
    handleMouseEnter() {
        const e = this;
        e.mouseEntered = !0
    },
    handleMouseLeave() {
        const e = this;
        e.mouseEntered = !1
    },
    handle(e) {
        let t = e;
        const s = this,
            i = s.params.mousewheel;
        s.params.cssMode && t.preventDefault();
        let a = s.$el;
        if (s.params.mousewheel.eventsTarged !== "container" && (a = w(s.params.mousewheel.eventsTarged)), !s.mouseEntered && !a[0].contains(t.target) && !i.releaseOnEdges) return !0;
        t.originalEvent && (t = t.originalEvent);
        let n = 0;
        const r = s.rtlTranslate ? -1 : 1,
            l = R.normalize(t);
        if (i.forceToAxis)
            if (s.isHorizontal())
                if (Math.abs(l.pixelX) > Math.abs(l.pixelY)) n = -l.pixelX * r;
                else return !0;
        else if (Math.abs(l.pixelY) > Math.abs(l.pixelX)) n = -l.pixelY;
        else return !0;
        else n = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * r : -l.pixelY;
        if (n === 0) return !0;
        if (i.invert && (n = -n), s.params.freeMode) {
            const o = {
                    time: v.now(),
                    delta: Math.abs(n),
                    direction: Math.sign(n)
                },
                {
                    lastEventBeforeSnap: d
                } = s.mousewheel,
                c = d && o.time < d.time + 500 && o.delta <= d.delta && o.direction === d.direction;
            if (!c) {
                s.mousewheel.lastEventBeforeSnap = void 0, s.params.loop && s.loopFix();
                let p = s.getTranslate() + n * i.sensitivity;
                const u = s.isBeginning,
                    m = s.isEnd;
                if (p >= s.minTranslate() && (p = s.minTranslate()), p <= s.maxTranslate() && (p = s.maxTranslate()), s.setTransition(0), s.setTranslate(p), s.updateProgress(), s.updateActiveIndex(), s.updateSlidesClasses(), (!u && s.isBeginning || !m && s.isEnd) && s.updateSlidesClasses(), s.params.freeModeSticky) {
                    clearTimeout(s.mousewheel.timeout), s.mousewheel.timeout = void 0;
                    const h = s.mousewheel.recentWheelEvents;
                    h.length >= 15 && h.shift();
                    const f = h.length ? h[h.length - 1] : void 0,
                        x = h[0];
                    if (h.push(o), f && (o.delta > f.delta || o.direction !== f.direction)) h.splice(0);
                    else if (h.length >= 15 && o.time - x.time < 500 && x.delta - o.delta >= 1 && o.delta <= 6) {
                        const g = n > 0 ? .8 : .2;
                        s.mousewheel.lastEventBeforeSnap = o, h.splice(0), s.mousewheel.timeout = v.nextTick(() => {
                            s.slideToClosest(s.params.speed, !0, void 0, g)
                        }, 0)
                    }
                    s.mousewheel.timeout || (s.mousewheel.timeout = v.nextTick(() => {
                        s.mousewheel.lastEventBeforeSnap = o, h.splice(0), s.slideToClosest(s.params.speed, !0, void 0, .5)
                    }, 500))
                }
                if (c || s.emit("scroll", t), s.params.autoplay && s.params.autoplayDisableOnInteraction && s.autoplay.stop(), p === s.minTranslate() || p === s.maxTranslate()) return !0
            }
        } else {
            const o = {
                    time: v.now(),
                    delta: Math.abs(n),
                    direction: Math.sign(n),
                    raw: e
                },
                d = s.mousewheel.recentWheelEvents;
            d.length >= 2 && d.shift();
            const c = d.length ? d[d.length - 1] : void 0;
            if (d.push(o), c ? (o.direction !== c.direction || o.delta > c.delta || o.time > c.time + 150) && s.mousewheel.animateSlider(o) : s.mousewheel.animateSlider(o), s.mousewheel.releaseScroll(o)) return !0
        }
        return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
    },
    animateSlider(e) {
        const t = this;
        return e.delta >= 6 && v.now() - t.mousewheel.lastScrollTime < 60 ? !0 : (e.direction < 0 ? (!t.isEnd || t.params.loop) && !t.animating && (t.slideNext(), t.emit("scroll", e.raw)) : (!t.isBeginning || t.params.loop) && !t.animating && (t.slidePrev(), t.emit("scroll", e.raw)), t.mousewheel.lastScrollTime = new b.Date().getTime(), !1)
    },
    releaseScroll(e) {
        const t = this,
            s = t.params.mousewheel;
        if (e.direction < 0) {
            if (t.isEnd && !t.params.loop && s.releaseOnEdges) return !0
        } else if (t.isBeginning && !t.params.loop && s.releaseOnEdges) return !0;
        return !1
    },
    enable() {
        const e = this,
            t = R.event();
        if (e.params.cssMode) return e.wrapperEl.removeEventListener(t, e.mousewheel.handle), !0;
        if (!t || e.mousewheel.enabled) return !1;
        let s = e.$el;
        return e.params.mousewheel.eventsTarged !== "container" && (s = w(e.params.mousewheel.eventsTarged)), s.on("mouseenter", e.mousewheel.handleMouseEnter), s.on("mouseleave", e.mousewheel.handleMouseLeave), s.on(t, e.mousewheel.handle), e.mousewheel.enabled = !0, !0
    },
    disable() {
        const e = this,
            t = R.event();
        if (e.params.cssMode) return e.wrapperEl.addEventListener(t, e.mousewheel.handle), !0;
        if (!t || !e.mousewheel.enabled) return !1;
        let s = e.$el;
        return e.params.mousewheel.eventsTarged !== "container" && (s = w(e.params.mousewheel.eventsTarged)), s.off(t, e.mousewheel.handle), e.mousewheel.enabled = !1, !0
    }
};
var Fs = {
    name: "mousewheel",
    params: {
        mousewheel: {
            enabled: !1,
            releaseOnEdges: !1,
            invert: !1,
            forceToAxis: !1,
            sensitivity: 1,
            eventsTarged: "container"
        }
    },
    create() {
        const e = this;
        v.extend(e, {
            mousewheel: {
                enabled: !1,
                enable: R.enable.bind(e),
                disable: R.disable.bind(e),
                handle: R.handle.bind(e),
                handleMouseEnter: R.handleMouseEnter.bind(e),
                handleMouseLeave: R.handleMouseLeave.bind(e),
                animateSlider: R.animateSlider.bind(e),
                releaseScroll: R.releaseScroll.bind(e),
                lastScrollTime: v.now(),
                lastEventBeforeSnap: void 0,
                recentWheelEvents: []
            }
        })
    },
    on: {
        init() {
            const e = this;
            !e.params.mousewheel.enabled && e.params.cssMode && e.mousewheel.disable(), e.params.mousewheel.enabled && e.mousewheel.enable()
        },
        destroy() {
            const e = this;
            e.params.cssMode && e.mousewheel.enable(), e.mousewheel.enabled && e.mousewheel.disable()
        }
    }
};
const te = {
    update() {
        const e = this,
            t = e.params.navigation;
        if (e.params.loop) return;
        const {
            $nextEl: s,
            $prevEl: i
        } = e.navigation;
        i && i.length > 0 && (e.isBeginning ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), s && s.length > 0 && (e.isEnd ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass), s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass))
    },
    onPrevClick(e) {
        const t = this;
        e.preventDefault(), !(t.isBeginning && !t.params.loop) && t.slidePrev()
    },
    onNextClick(e) {
        const t = this;
        e.preventDefault(), !(t.isEnd && !t.params.loop) && t.slideNext()
    },
    init() {
        const e = this,
            t = e.params.navigation;
        if (!(t.nextEl || t.prevEl)) return;
        let s, i;
        t.nextEl && (s = w(t.nextEl), e.params.uniqueNavElements && typeof t.nextEl == "string" && s.length > 1 && e.$el.find(t.nextEl).length === 1 && (s = e.$el.find(t.nextEl))), t.prevEl && (i = w(t.prevEl), e.params.uniqueNavElements && typeof t.prevEl == "string" && i.length > 1 && e.$el.find(t.prevEl).length === 1 && (i = e.$el.find(t.prevEl))), s && s.length > 0 && s.on("click", e.navigation.onNextClick), i && i.length > 0 && i.on("click", e.navigation.onPrevClick), v.extend(e.navigation, {
            $nextEl: s,
            nextEl: s && s[0],
            $prevEl: i,
            prevEl: i && i[0]
        })
    },
    destroy() {
        const e = this,
            {
                $nextEl: t,
                $prevEl: s
            } = e.navigation;
        t && t.length && (t.off("click", e.navigation.onNextClick), t.removeClass(e.params.navigation.disabledClass)), s && s.length && (s.off("click", e.navigation.onPrevClick), s.removeClass(e.params.navigation.disabledClass))
    }
};
var Rs = {
    name: "navigation",
    params: {
        navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock"
        }
    },
    create() {
        const e = this;
        v.extend(e, {
            navigation: {
                init: te.init.bind(e),
                update: te.update.bind(e),
                destroy: te.destroy.bind(e),
                onNextClick: te.onNextClick.bind(e),
                onPrevClick: te.onPrevClick.bind(e)
            }
        })
    },
    on: {
        init() {
            const e = this;
            e.navigation.init(), e.navigation.update()
        },
        toEdge() {
            this.navigation.update()
        },
        fromEdge() {
            this.navigation.update()
        },
        destroy() {
            this.navigation.destroy()
        },
        click(e) {
            const t = this,
                {
                    $nextEl: s,
                    $prevEl: i
                } = t.navigation;
            if (t.params.navigation.hideOnClick && !w(e.target).is(i) && !w(e.target).is(s)) {
                let a;
                s ? a = s.hasClass(t.params.navigation.hiddenClass) : i && (a = i.hasClass(t.params.navigation.hiddenClass)), a === !0 ? t.emit("navigationShow", t) : t.emit("navigationHide", t), s && s.toggleClass(t.params.navigation.hiddenClass), i && i.toggleClass(t.params.navigation.hiddenClass)
            }
        }
    }
};
const ne = {
    update() {
        const e = this,
            t = e.rtl,
            s = e.params.pagination;
        if (!s.el || !e.pagination.el || !e.pagination.$el || e.pagination.$el.length === 0) return;
        const i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
            a = e.pagination.$el;
        let n;
        const r = e.params.loop ? Math.ceil((i - e.loopedSlides * 2) / e.params.slidesPerGroup) : e.snapGrid.length;
        if (e.params.loop ? (n = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup), n > i - 1 - e.loopedSlides * 2 && (n -= i - e.loopedSlides * 2), n > r - 1 && (n -= r), n < 0 && e.params.paginationType !== "bullets" && (n = r + n)) : typeof e.snapIndex != "undefined" ? n = e.snapIndex : n = e.activeIndex || 0, s.type === "bullets" && e.pagination.bullets && e.pagination.bullets.length > 0) {
            const l = e.pagination.bullets;
            let o, d, c;
            if (s.dynamicBullets && (e.pagination.bulletSize = l.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), a.css(e.isHorizontal() ? "width" : "height", `${e.pagination.bulletSize*(s.dynamicMainBullets+4)}px`), s.dynamicMainBullets > 1 && e.previousIndex !== void 0 && (e.pagination.dynamicBulletIndex += n - e.previousIndex, e.pagination.dynamicBulletIndex > s.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = s.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), o = n - e.pagination.dynamicBulletIndex, d = o + (Math.min(l.length, s.dynamicMainBullets) - 1), c = (d + o) / 2), l.removeClass(`${s.bulletActiveClass} ${s.bulletActiveClass}-next ${s.bulletActiveClass}-next-next ${s.bulletActiveClass}-prev ${s.bulletActiveClass}-prev-prev ${s.bulletActiveClass}-main`), a.length > 1) l.each((p, u) => {
                const m = w(u),
                    h = m.index();
                h === n && m.addClass(s.bulletActiveClass), s.dynamicBullets && (h >= o && h <= d && m.addClass(`${s.bulletActiveClass}-main`), h === o && m.prev().addClass(`${s.bulletActiveClass}-prev`).prev().addClass(`${s.bulletActiveClass}-prev-prev`), h === d && m.next().addClass(`${s.bulletActiveClass}-next`).next().addClass(`${s.bulletActiveClass}-next-next`))
            });
            else {
                const p = l.eq(n),
                    u = p.index();
                if (p.addClass(s.bulletActiveClass), s.dynamicBullets) {
                    const m = l.eq(o),
                        h = l.eq(d);
                    for (let f = o; f <= d; f += 1) l.eq(f).addClass(`${s.bulletActiveClass}-main`);
                    if (e.params.loop)
                        if (u >= l.length - s.dynamicMainBullets) {
                            for (let f = s.dynamicMainBullets; f >= 0; f -= 1) l.eq(l.length - f).addClass(`${s.bulletActiveClass}-main`);
                            l.eq(l.length - s.dynamicMainBullets - 1).addClass(`${s.bulletActiveClass}-prev`)
                        } else m.prev().addClass(`${s.bulletActiveClass}-prev`).prev().addClass(`${s.bulletActiveClass}-prev-prev`), h.next().addClass(`${s.bulletActiveClass}-next`).next().addClass(`${s.bulletActiveClass}-next-next`);
                    else m.prev().addClass(`${s.bulletActiveClass}-prev`).prev().addClass(`${s.bulletActiveClass}-prev-prev`), h.next().addClass(`${s.bulletActiveClass}-next`).next().addClass(`${s.bulletActiveClass}-next-next`)
                }
            }
            if (s.dynamicBullets) {
                const p = Math.min(l.length, s.dynamicMainBullets + 4),
                    u = (e.pagination.bulletSize * p - e.pagination.bulletSize) / 2 - c * e.pagination.bulletSize,
                    m = t ? "right" : "left";
                l.css(e.isHorizontal() ? m : "top", `${u}px`)
            }
        }
        if (s.type === "fraction" && (a.find(`.${s.currentClass}`).text(s.formatFractionCurrent(n + 1)), a.find(`.${s.totalClass}`).text(s.formatFractionTotal(r))), s.type === "progressbar") {
            let l;
            s.progressbarOpposite ? l = e.isHorizontal() ? "vertical" : "horizontal" : l = e.isHorizontal() ? "horizontal" : "vertical";
            const o = (n + 1) / r;
            let d = 1,
                c = 1;
            l === "horizontal" ? d = o : c = o, a.find(`.${s.progressbarFillClass}`).transform(`translate3d(0,0,0) scaleX(${d}) scaleY(${c})`).transition(e.params.speed)
        }
        s.type === "custom" && s.renderCustom ? (a.html(s.renderCustom(e, n + 1, r)), e.emit("paginationRender", e, a[0])) : e.emit("paginationUpdate", e, a[0]), a[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](s.lockClass)
    },
    render() {
        const e = this,
            t = e.params.pagination;
        if (!t.el || !e.pagination.el || !e.pagination.$el || e.pagination.$el.length === 0) return;
        const s = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
            i = e.pagination.$el;
        let a = "";
        if (t.type === "bullets") {
            const n = e.params.loop ? Math.ceil((s - e.loopedSlides * 2) / e.params.slidesPerGroup) : e.snapGrid.length;
            for (let r = 0; r < n; r += 1) t.renderBullet ? a += t.renderBullet.call(e, r, t.bulletClass) : a += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;
            i.html(a), e.pagination.bullets = i.find(`.${t.bulletClass}`)
        }
        t.type === "fraction" && (t.renderFraction ? a = t.renderFraction.call(e, t.currentClass, t.totalClass) : a = `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`, i.html(a)), t.type === "progressbar" && (t.renderProgressbar ? a = t.renderProgressbar.call(e, t.progressbarFillClass) : a = `<span class="${t.progressbarFillClass}"></span>`, i.html(a)), t.type !== "custom" && e.emit("paginationRender", e.pagination.$el[0])
    },
    init() {
        const e = this,
            t = e.params.pagination;
        if (!t.el) return;
        let s = w(t.el);
        s.length !== 0 && (e.params.uniqueNavElements && typeof t.el == "string" && s.length > 1 && (s = e.$el.find(t.el)), t.type === "bullets" && t.clickable && s.addClass(t.clickableClass), s.addClass(t.modifierClass + t.type), t.type === "bullets" && t.dynamicBullets && (s.addClass(`${t.modifierClass}${t.type}-dynamic`), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), t.type === "progressbar" && t.progressbarOpposite && s.addClass(t.progressbarOppositeClass), t.clickable && s.on("click", `.${t.bulletClass}`, function(a) {
            a.preventDefault();
            let n = w(this).index() * e.params.slidesPerGroup;
            e.params.loop && (n += e.loopedSlides), e.slideTo(n)
        }), v.extend(e.pagination, {
            $el: s,
            el: s[0]
        }))
    },
    destroy() {
        const e = this,
            t = e.params.pagination;
        if (!t.el || !e.pagination.el || !e.pagination.$el || e.pagination.$el.length === 0) return;
        const s = e.pagination.$el;
        s.removeClass(t.hiddenClass), s.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && s.off("click", `.${t.bulletClass}`)
    }
};
var Ws = {
    name: "pagination",
    params: {
        pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: e => e,
            formatFractionTotal: e => e,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            modifierClass: "swiper-pagination-",
            currentClass: "swiper-pagination-current",
            totalClass: "swiper-pagination-total",
            hiddenClass: "swiper-pagination-hidden",
            progressbarFillClass: "swiper-pagination-progressbar-fill",
            progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
            clickableClass: "swiper-pagination-clickable",
            lockClass: "swiper-pagination-lock"
        }
    },
    create() {
        const e = this;
        v.extend(e, {
            pagination: {
                init: ne.init.bind(e),
                render: ne.render.bind(e),
                update: ne.update.bind(e),
                destroy: ne.destroy.bind(e),
                dynamicBulletIndex: 0
            }
        })
    },
    on: {
        init() {
            const e = this;
            e.pagination.init(), e.pagination.render(), e.pagination.update()
        },
        activeIndexChange() {
            const e = this;
            (e.params.loop || typeof e.snapIndex == "undefined") && e.pagination.update()
        },
        snapIndexChange() {
            const e = this;
            e.params.loop || e.pagination.update()
        },
        slidesLengthChange() {
            const e = this;
            e.params.loop && (e.pagination.render(), e.pagination.update())
        },
        snapGridLengthChange() {
            const e = this;
            e.params.loop || (e.pagination.render(), e.pagination.update())
        },
        destroy() {
            this.pagination.destroy()
        },
        click(e) {
            const t = this;
            t.params.pagination.el && t.params.pagination.hideOnClick && t.pagination.$el.length > 0 && !w(e.target).hasClass(t.params.pagination.bulletClass) && (t.pagination.$el.hasClass(t.params.pagination.hiddenClass) === !0 ? t.emit("paginationShow", t) : t.emit("paginationHide", t), t.pagination.$el.toggleClass(t.params.pagination.hiddenClass))
        }
    }
};
const _ = {
    setTranslate() {
        const e = this;
        if (!e.params.scrollbar.el || !e.scrollbar.el) return;
        const {
            scrollbar: t,
            rtlTranslate: s,
            progress: i
        } = e, {
            dragSize: a,
            trackSize: n,
            $dragEl: r,
            $el: l
        } = t, o = e.params.scrollbar;
        let d = a,
            c = (n - a) * i;
        s ? (c = -c, c > 0 ? (d = a - c, c = 0) : -c + a > n && (d = n + c)) : c < 0 ? (d = a + c, c = 0) : c + a > n && (d = n - c), e.isHorizontal() ? (r.transform(`translate3d(${c}px, 0, 0)`), r[0].style.width = `${d}px`) : (r.transform(`translate3d(0px, ${c}px, 0)`), r[0].style.height = `${d}px`), o.hide && (clearTimeout(e.scrollbar.timeout), l[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(() => {
            l[0].style.opacity = 0, l.transition(400)
        }, 1e3))
    },
    setTransition(e) {
        const t = this;
        !t.params.scrollbar.el || !t.scrollbar.el || t.scrollbar.$dragEl.transition(e)
    },
    updateSize() {
        const e = this;
        if (!e.params.scrollbar.el || !e.scrollbar.el) return;
        const {
            scrollbar: t
        } = e, {
            $dragEl: s,
            $el: i
        } = t;
        s[0].style.width = "", s[0].style.height = "";
        const a = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
            n = e.size / e.virtualSize,
            r = n * (a / e.size);
        let l;
        e.params.scrollbar.dragSize === "auto" ? l = a * n : l = parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? s[0].style.width = `${l}px` : s[0].style.height = `${l}px`, n >= 1 ? i[0].style.display = "none" : i[0].style.display = "", e.params.scrollbar.hide && (i[0].style.opacity = 0), v.extend(t, {
            trackSize: a,
            divider: n,
            moveDivider: r,
            dragSize: l
        }), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
    },
    getPointerPosition(e) {
        return this.isHorizontal() ? e.type === "touchstart" || e.type === "touchmove" ? e.targetTouches[0].clientX : e.clientX : e.type === "touchstart" || e.type === "touchmove" ? e.targetTouches[0].clientY : e.clientY
    },
    setDragPosition(e) {
        const t = this,
            {
                scrollbar: s,
                rtlTranslate: i
            } = t,
            {
                $el: a,
                dragSize: n,
                trackSize: r,
                dragStartPos: l
            } = s;
        let o;
        o = (s.getPointerPosition(e) - a.offset()[t.isHorizontal() ? "left" : "top"] - (l !== null ? l : n / 2)) / (r - n), o = Math.max(Math.min(o, 1), 0), i && (o = 1 - o);
        const d = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * o;
        t.updateProgress(d), t.setTranslate(d), t.updateActiveIndex(), t.updateSlidesClasses()
    },
    onDragStart(e) {
        const t = this,
            s = t.params.scrollbar,
            {
                scrollbar: i,
                $wrapperEl: a
            } = t,
            {
                $el: n,
                $dragEl: r
            } = i;
        t.scrollbar.isTouched = !0, t.scrollbar.dragStartPos = e.target === r[0] || e.target === r ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), a.transition(100), r.transition(100), i.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), n.transition(0), s.hide && n.css("opacity", 1), t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"), t.emit("scrollbarDragStart", e)
    },
    onDragMove(e) {
        const t = this,
            {
                scrollbar: s,
                $wrapperEl: i
            } = t,
            {
                $el: a,
                $dragEl: n
            } = s;
        !t.scrollbar.isTouched || (e.preventDefault ? e.preventDefault() : e.returnValue = !1, s.setDragPosition(e), i.transition(0), a.transition(0), n.transition(0), t.emit("scrollbarDragMove", e))
    },
    onDragEnd(e) {
        const t = this,
            s = t.params.scrollbar,
            {
                scrollbar: i,
                $wrapperEl: a
            } = t,
            {
                $el: n
            } = i;
        !t.scrollbar.isTouched || (t.scrollbar.isTouched = !1, t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""), a.transition("")), s.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = v.nextTick(() => {
            n.css("opacity", 0), n.transition(400)
        }, 1e3)), t.emit("scrollbarDragEnd", e), s.snapOnRelease && t.slideToClosest())
    },
    enableDraggable() {
        const e = this;
        if (!e.params.scrollbar.el) return;
        const {
            scrollbar: t,
            touchEventsTouch: s,
            touchEventsDesktop: i,
            params: a
        } = e, r = t.$el[0], l = $.passiveListener && a.passiveListeners ? {
            passive: !1,
            capture: !1
        } : !1, o = $.passiveListener && a.passiveListeners ? {
            passive: !0,
            capture: !1
        } : !1;
        $.touch ? (r.addEventListener(s.start, e.scrollbar.onDragStart, l), r.addEventListener(s.move, e.scrollbar.onDragMove, l), r.addEventListener(s.end, e.scrollbar.onDragEnd, o)) : (r.addEventListener(i.start, e.scrollbar.onDragStart, l), C.addEventListener(i.move, e.scrollbar.onDragMove, l), C.addEventListener(i.end, e.scrollbar.onDragEnd, o))
    },
    disableDraggable() {
        const e = this;
        if (!e.params.scrollbar.el) return;
        const {
            scrollbar: t,
            touchEventsTouch: s,
            touchEventsDesktop: i,
            params: a
        } = e, r = t.$el[0], l = $.passiveListener && a.passiveListeners ? {
            passive: !1,
            capture: !1
        } : !1, o = $.passiveListener && a.passiveListeners ? {
            passive: !0,
            capture: !1
        } : !1;
        $.touch ? (r.removeEventListener(s.start, e.scrollbar.onDragStart, l), r.removeEventListener(s.move, e.scrollbar.onDragMove, l), r.removeEventListener(s.end, e.scrollbar.onDragEnd, o)) : (r.removeEventListener(i.start, e.scrollbar.onDragStart, l), C.removeEventListener(i.move, e.scrollbar.onDragMove, l), C.removeEventListener(i.end, e.scrollbar.onDragEnd, o))
    },
    init() {
        const e = this;
        if (!e.params.scrollbar.el) return;
        const {
            scrollbar: t,
            $el: s
        } = e, i = e.params.scrollbar;
        let a = w(i.el);
        e.params.uniqueNavElements && typeof i.el == "string" && a.length > 1 && s.find(i.el).length === 1 && (a = s.find(i.el));
        let n = a.find(`.${e.params.scrollbar.dragClass}`);
        n.length === 0 && (n = w(`<div class="${e.params.scrollbar.dragClass}"></div>`), a.append(n)), v.extend(t, {
            $el: a,
            el: a[0],
            $dragEl: n,
            dragEl: n[0]
        }), i.draggable && t.enableDraggable()
    },
    destroy() {
        this.scrollbar.disableDraggable()
    }
};
var qs = {
    name: "scrollbar",
    params: {
        scrollbar: {
            el: null,
            dragSize: "auto",
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: "swiper-scrollbar-lock",
            dragClass: "swiper-scrollbar-drag"
        }
    },
    create() {
        const e = this;
        v.extend(e, {
            scrollbar: {
                init: _.init.bind(e),
                destroy: _.destroy.bind(e),
                updateSize: _.updateSize.bind(e),
                setTranslate: _.setTranslate.bind(e),
                setTransition: _.setTransition.bind(e),
                enableDraggable: _.enableDraggable.bind(e),
                disableDraggable: _.disableDraggable.bind(e),
                setDragPosition: _.setDragPosition.bind(e),
                getPointerPosition: _.getPointerPosition.bind(e),
                onDragStart: _.onDragStart.bind(e),
                onDragMove: _.onDragMove.bind(e),
                onDragEnd: _.onDragEnd.bind(e),
                isTouched: !1,
                timeout: null,
                dragTimeout: null
            }
        })
    },
    on: {
        init() {
            const e = this;
            e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate()
        },
        update() {
            this.scrollbar.updateSize()
        },
        resize() {
            this.scrollbar.updateSize()
        },
        observerUpdate() {
            this.scrollbar.updateSize()
        },
        setTranslate() {
            this.scrollbar.setTranslate()
        },
        setTransition(e) {
            this.scrollbar.setTransition(e)
        },
        destroy() {
            this.scrollbar.destroy()
        }
    }
};
const fe = {
    setTransform(e, t) {
        const s = this,
            {
                rtl: i
            } = s,
            a = w(e),
            n = i ? -1 : 1,
            r = a.attr("data-swiper-parallax") || "0";
        let l = a.attr("data-swiper-parallax-x"),
            o = a.attr("data-swiper-parallax-y");
        const d = a.attr("data-swiper-parallax-scale"),
            c = a.attr("data-swiper-parallax-opacity");
        if (l || o ? (l = l || "0", o = o || "0") : s.isHorizontal() ? (l = r, o = "0") : (o = r, l = "0"), l.indexOf("%") >= 0 ? l = `${parseInt(l,10)*t*n}%` : l = `${l*t*n}px`, o.indexOf("%") >= 0 ? o = `${parseInt(o,10)*t}%` : o = `${o*t}px`, typeof c != "undefined" && c !== null) {
            const p = c - (c - 1) * (1 - Math.abs(t));
            a[0].style.opacity = p
        }
        if (typeof d == "undefined" || d === null) a.transform(`translate3d(${l}, ${o}, 0px)`);
        else {
            const p = d - (d - 1) * (1 - Math.abs(t));
            a.transform(`translate3d(${l}, ${o}, 0px) scale(${p})`)
        }
    },
    setTranslate() {
        const e = this,
            {
                $el: t,
                slides: s,
                progress: i,
                snapGrid: a
            } = e;
        t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((n, r) => {
            e.parallax.setTransform(r, i)
        }), s.each((n, r) => {
            let l = r.progress;
            e.params.slidesPerGroup > 1 && e.params.slidesPerView !== "auto" && (l += Math.ceil(n / 2) - i * (a.length - 1)), l = Math.min(Math.max(l, -1), 1), w(r).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((o, d) => {
                e.parallax.setTransform(d, l)
            })
        })
    },
    setTransition(e = this.params.speed) {
        const t = this,
            {
                $el: s
            } = t;
        s.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((i, a) => {
            const n = w(a);
            let r = parseInt(n.attr("data-swiper-parallax-duration"), 10) || e;
            e === 0 && (r = 0), n.transition(r)
        })
    }
};
var js = {
    name: "parallax",
    params: {
        parallax: {
            enabled: !1
        }
    },
    create() {
        const e = this;
        v.extend(e, {
            parallax: {
                setTransform: fe.setTransform.bind(e),
                setTranslate: fe.setTranslate.bind(e),
                setTransition: fe.setTransition.bind(e)
            }
        })
    },
    on: {
        beforeInit() {
            const e = this;
            !e.params.parallax.enabled || (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
        },
        init() {
            const e = this;
            !e.params.parallax.enabled || e.parallax.setTranslate()
        },
        setTranslate() {
            const e = this;
            !e.params.parallax.enabled || e.parallax.setTranslate()
        },
        setTransition(e) {
            const t = this;
            !t.params.parallax.enabled || t.parallax.setTransition(e)
        }
    }
};
const ge = {
    getDistanceBetweenTouches(e) {
        if (e.targetTouches.length < 2) return 1;
        const t = e.targetTouches[0].pageX,
            s = e.targetTouches[0].pageY,
            i = e.targetTouches[1].pageX,
            a = e.targetTouches[1].pageY;
        return Math.sqrt((i - t) ** 2 + (a - s) ** 2)
    },
    onGestureStart(e) {
        const t = this,
            s = t.params.zoom,
            i = t.zoom,
            {
                gesture: a
            } = i;
        if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !$.gestures) {
            if (e.type !== "touchstart" || e.type === "touchstart" && e.targetTouches.length < 2) return;
            i.fakeGestureTouched = !0, a.scaleStart = ge.getDistanceBetweenTouches(e)
        }
        if ((!a.$slideEl || !a.$slideEl.length) && (a.$slideEl = w(e.target).closest(`.${t.params.slideClass}`), a.$slideEl.length === 0 && (a.$slideEl = t.slides.eq(t.activeIndex)), a.$imageEl = a.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), a.$imageWrapEl = a.$imageEl.parent(`.${s.containerClass}`), a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio, a.$imageWrapEl.length === 0)) {
            a.$imageEl = void 0;
            return
        }
        a.$imageEl && a.$imageEl.transition(0), t.zoom.isScaling = !0
    },
    onGestureChange(e) {
        const t = this,
            s = t.params.zoom,
            i = t.zoom,
            {
                gesture: a
            } = i;
        if (!$.gestures) {
            if (e.type !== "touchmove" || e.type === "touchmove" && e.targetTouches.length < 2) return;
            i.fakeGestureMoved = !0, a.scaleMove = ge.getDistanceBetweenTouches(e)
        }!a.$imageEl || a.$imageEl.length === 0 || ($.gestures ? i.scale = e.scale * i.currentScale : i.scale = a.scaleMove / a.scaleStart * i.currentScale, i.scale > a.maxRatio && (i.scale = a.maxRatio - 1 + (i.scale - a.maxRatio + 1) ** .5), i.scale < s.minRatio && (i.scale = s.minRatio + 1 - (s.minRatio - i.scale + 1) ** .5), a.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`))
    },
    onGestureEnd(e) {
        const t = this,
            s = t.params.zoom,
            i = t.zoom,
            {
                gesture: a
            } = i;
        if (!$.gestures) {
            if (!i.fakeGestureTouched || !i.fakeGestureMoved || e.type !== "touchend" || e.type === "touchend" && e.changedTouches.length < 2 && !B.android) return;
            i.fakeGestureTouched = !1, i.fakeGestureMoved = !1
        }!a.$imageEl || a.$imageEl.length === 0 || (i.scale = Math.max(Math.min(i.scale, a.maxRatio), s.minRatio), a.$imageEl.transition(t.params.speed).transform(`translate3d(0,0,0) scale(${i.scale})`), i.currentScale = i.scale, i.isScaling = !1, i.scale === 1 && (a.$slideEl = void 0))
    },
    onTouchStart(e) {
        const s = this.zoom,
            {
                gesture: i,
                image: a
            } = s;
        !i.$imageEl || i.$imageEl.length === 0 || a.isTouched || (B.android && e.cancelable && e.preventDefault(), a.isTouched = !0, a.touchesStart.x = e.type === "touchstart" ? e.targetTouches[0].pageX : e.pageX, a.touchesStart.y = e.type === "touchstart" ? e.targetTouches[0].pageY : e.pageY)
    },
    onTouchMove(e) {
        const t = this,
            s = t.zoom,
            {
                gesture: i,
                image: a,
                velocity: n
            } = s;
        if (!i.$imageEl || i.$imageEl.length === 0 || (t.allowClick = !1, !a.isTouched || !i.$slideEl)) return;
        a.isMoved || (a.width = i.$imageEl[0].offsetWidth, a.height = i.$imageEl[0].offsetHeight, a.startX = v.getTranslate(i.$imageWrapEl[0], "x") || 0, a.startY = v.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), t.rtl && (a.startX = -a.startX, a.startY = -a.startY));
        const r = a.width * s.scale,
            l = a.height * s.scale;
        if (!(r < i.slideWidth && l < i.slideHeight)) {
            if (a.minX = Math.min(i.slideWidth / 2 - r / 2, 0), a.maxX = -a.minX, a.minY = Math.min(i.slideHeight / 2 - l / 2, 0), a.maxY = -a.minY, a.touchesCurrent.x = e.type === "touchmove" ? e.targetTouches[0].pageX : e.pageX, a.touchesCurrent.y = e.type === "touchmove" ? e.targetTouches[0].pageY : e.pageY, !a.isMoved && !s.isScaling) {
                if (t.isHorizontal() && (Math.floor(a.minX) === Math.floor(a.startX) && a.touchesCurrent.x < a.touchesStart.x || Math.floor(a.maxX) === Math.floor(a.startX) && a.touchesCurrent.x > a.touchesStart.x)) {
                    a.isTouched = !1;
                    return
                }
                if (!t.isHorizontal() && (Math.floor(a.minY) === Math.floor(a.startY) && a.touchesCurrent.y < a.touchesStart.y || Math.floor(a.maxY) === Math.floor(a.startY) && a.touchesCurrent.y > a.touchesStart.y)) {
                    a.isTouched = !1;
                    return
                }
            }
            e.cancelable && e.preventDefault(), e.stopPropagation(), a.isMoved = !0, a.currentX = a.touchesCurrent.x - a.touchesStart.x + a.startX, a.currentY = a.touchesCurrent.y - a.touchesStart.y + a.startY, a.currentX < a.minX && (a.currentX = a.minX + 1 - (a.minX - a.currentX + 1) ** .8), a.currentX > a.maxX && (a.currentX = a.maxX - 1 + (a.currentX - a.maxX + 1) ** .8), a.currentY < a.minY && (a.currentY = a.minY + 1 - (a.minY - a.currentY + 1) ** .8), a.currentY > a.maxY && (a.currentY = a.maxY - 1 + (a.currentY - a.maxY + 1) ** .8), n.prevPositionX || (n.prevPositionX = a.touchesCurrent.x), n.prevPositionY || (n.prevPositionY = a.touchesCurrent.y), n.prevTime || (n.prevTime = Date.now()), n.x = (a.touchesCurrent.x - n.prevPositionX) / (Date.now() - n.prevTime) / 2, n.y = (a.touchesCurrent.y - n.prevPositionY) / (Date.now() - n.prevTime) / 2, Math.abs(a.touchesCurrent.x - n.prevPositionX) < 2 && (n.x = 0), Math.abs(a.touchesCurrent.y - n.prevPositionY) < 2 && (n.y = 0), n.prevPositionX = a.touchesCurrent.x, n.prevPositionY = a.touchesCurrent.y, n.prevTime = Date.now(), i.$imageWrapEl.transform(`translate3d(${a.currentX}px, ${a.currentY}px,0)`)
        }
    },
    onTouchEnd() {
        const t = this.zoom,
            {
                gesture: s,
                image: i,
                velocity: a
            } = t;
        if (!s.$imageEl || s.$imageEl.length === 0) return;
        if (!i.isTouched || !i.isMoved) {
            i.isTouched = !1, i.isMoved = !1;
            return
        }
        i.isTouched = !1, i.isMoved = !1;
        let n = 300,
            r = 300;
        const l = a.x * n,
            o = i.currentX + l,
            d = a.y * r,
            c = i.currentY + d;
        a.x !== 0 && (n = Math.abs((o - i.currentX) / a.x)), a.y !== 0 && (r = Math.abs((c - i.currentY) / a.y));
        const p = Math.max(n, r);
        i.currentX = o, i.currentY = c;
        const u = i.width * t.scale,
            m = i.height * t.scale;
        i.minX = Math.min(s.slideWidth / 2 - u / 2, 0), i.maxX = -i.minX, i.minY = Math.min(s.slideHeight / 2 - m / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), s.$imageWrapEl.transition(p).transform(`translate3d(${i.currentX}px, ${i.currentY}px,0)`)
    },
    onTransitionEnd() {
        const e = this,
            t = e.zoom,
            {
                gesture: s
            } = t;
        s.$slideEl && e.previousIndex !== e.activeIndex && (s.$imageEl && s.$imageEl.transform("translate3d(0,0,0) scale(1)"), s.$imageWrapEl && s.$imageWrapEl.transform("translate3d(0,0,0)"), t.scale = 1, t.currentScale = 1, s.$slideEl = void 0, s.$imageEl = void 0, s.$imageWrapEl = void 0)
    },
    toggle(e) {
        const s = this.zoom;
        s.scale && s.scale !== 1 ? s.out() : s.in(e)
    },
    in (e) {
        const t = this,
            s = t.zoom,
            i = t.params.zoom,
            {
                gesture: a,
                image: n
            } = s;
        if (a.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? a.$slideEl = t.$wrapperEl.children(`.${t.params.slideActiveClass}`) : a.$slideEl = t.slides.eq(t.activeIndex), a.$imageEl = a.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), a.$imageWrapEl = a.$imageEl.parent(`.${i.containerClass}`)), !a.$imageEl || a.$imageEl.length === 0) return;
        a.$slideEl.addClass(`${i.zoomedSlideClass}`);
        let r, l, o, d, c, p, u, m, h, f, x, g, S, y, k, I, P, E;
        typeof n.touchesStart.x == "undefined" && e ? (r = e.type === "touchend" ? e.changedTouches[0].pageX : e.pageX, l = e.type === "touchend" ? e.changedTouches[0].pageY : e.pageY) : (r = n.touchesStart.x, l = n.touchesStart.y), s.scale = a.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, s.currentScale = a.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, e ? (P = a.$slideEl[0].offsetWidth, E = a.$slideEl[0].offsetHeight, o = a.$slideEl.offset().left, d = a.$slideEl.offset().top, c = o + P / 2 - r, p = d + E / 2 - l, h = a.$imageEl[0].offsetWidth, f = a.$imageEl[0].offsetHeight, x = h * s.scale, g = f * s.scale, S = Math.min(P / 2 - x / 2, 0), y = Math.min(E / 2 - g / 2, 0), k = -S, I = -y, u = c * s.scale, m = p * s.scale, u < S && (u = S), u > k && (u = k), m < y && (m = y), m > I && (m = I)) : (u = 0, m = 0), a.$imageWrapEl.transition(300).transform(`translate3d(${u}px, ${m}px,0)`), a.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s.scale})`)
    },
    out() {
        const e = this,
            t = e.zoom,
            s = e.params.zoom,
            {
                gesture: i
            } = t;
        i.$slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? i.$slideEl = e.$wrapperEl.children(`.${e.params.slideActiveClass}`) : i.$slideEl = e.slides.eq(e.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), i.$imageWrapEl = i.$imageEl.parent(`.${s.containerClass}`)), !(!i.$imageEl || i.$imageEl.length === 0) && (t.scale = 1, t.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass(`${s.zoomedSlideClass}`), i.$slideEl = void 0)
    },
    enable() {
        const e = this,
            t = e.zoom;
        if (t.enabled) return;
        t.enabled = !0;
        const s = e.touchEvents.start === "touchstart" && $.passiveListener && e.params.passiveListeners ? {
                passive: !0,
                capture: !1
            } : !1,
            i = $.passiveListener ? {
                passive: !1,
                capture: !0
            } : !0,
            a = `.${e.params.slideClass}`;
        $.gestures ? (e.$wrapperEl.on("gesturestart", a, t.onGestureStart, s), e.$wrapperEl.on("gesturechange", a, t.onGestureChange, s), e.$wrapperEl.on("gestureend", a, t.onGestureEnd, s)) : e.touchEvents.start === "touchstart" && (e.$wrapperEl.on(e.touchEvents.start, a, t.onGestureStart, s), e.$wrapperEl.on(e.touchEvents.move, a, t.onGestureChange, i), e.$wrapperEl.on(e.touchEvents.end, a, t.onGestureEnd, s), e.touchEvents.cancel && e.$wrapperEl.on(e.touchEvents.cancel, a, t.onGestureEnd, s)), e.$wrapperEl.on(e.touchEvents.move, `.${e.params.zoom.containerClass}`, t.onTouchMove, i)
    },
    disable() {
        const e = this,
            t = e.zoom;
        if (!t.enabled) return;
        e.zoom.enabled = !1;
        const s = e.touchEvents.start === "touchstart" && $.passiveListener && e.params.passiveListeners ? {
                passive: !0,
                capture: !1
            } : !1,
            i = $.passiveListener ? {
                passive: !1,
                capture: !0
            } : !0,
            a = `.${e.params.slideClass}`;
        $.gestures ? (e.$wrapperEl.off("gesturestart", a, t.onGestureStart, s), e.$wrapperEl.off("gesturechange", a, t.onGestureChange, s), e.$wrapperEl.off("gestureend", a, t.onGestureEnd, s)) : e.touchEvents.start === "touchstart" && (e.$wrapperEl.off(e.touchEvents.start, a, t.onGestureStart, s), e.$wrapperEl.off(e.touchEvents.move, a, t.onGestureChange, i), e.$wrapperEl.off(e.touchEvents.end, a, t.onGestureEnd, s), e.touchEvents.cancel && e.$wrapperEl.off(e.touchEvents.cancel, a, t.onGestureEnd, s)), e.$wrapperEl.off(e.touchEvents.move, `.${e.params.zoom.containerClass}`, t.onTouchMove, i)
    }
};
var Us = {
    name: "zoom",
    params: {
        zoom: {
            enabled: !1,
            maxRatio: 3,
            minRatio: 1,
            toggle: !0,
            containerClass: "swiper-zoom-container",
            zoomedSlideClass: "swiper-slide-zoomed"
        }
    },
    create() {
        const e = this,
            t = {
                enabled: !1,
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                    $slideEl: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    $imageEl: void 0,
                    $imageWrapEl: void 0,
                    maxRatio: 3
                },
                image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                },
                velocity: {
                    x: void 0,
                    y: void 0,
                    prevPositionX: void 0,
                    prevPositionY: void 0,
                    prevTime: void 0
                }
            };
        "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(i => {
            t[i] = ge[i].bind(e)
        }), v.extend(e, {
            zoom: t
        });
        let s = 1;
        Object.defineProperty(e.zoom, "scale", {
            get() {
                return s
            },
            set(i) {
                if (s !== i) {
                    const a = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                        n = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
                    e.emit("zoomChange", i, a, n)
                }
                s = i
            }
        })
    },
    on: {
        init() {
            const e = this;
            e.params.zoom.enabled && e.zoom.enable()
        },
        destroy() {
            this.zoom.disable()
        },
        touchStart(e) {
            const t = this;
            !t.zoom.enabled || t.zoom.onTouchStart(e)
        },
        touchEnd(e) {
            const t = this;
            !t.zoom.enabled || t.zoom.onTouchEnd(e)
        },
        doubleTap(e) {
            const t = this;
            t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && t.zoom.toggle(e)
        },
        transitionEnd() {
            const e = this;
            e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd()
        },
        slideChange() {
            const e = this;
            e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && e.zoom.onTransitionEnd()
        }
    }
};
const Ce = {
    loadInSlide(e, t = !0) {
        const s = this,
            i = s.params.lazy;
        if (typeof e == "undefined" || s.slides.length === 0) return;
        const n = s.virtual && s.params.virtual.enabled ? s.$wrapperEl.children(`.${s.params.slideClass}[data-swiper-slide-index="${e}"]`) : s.slides.eq(e);
        let r = n.find(`.${i.elementClass}:not(.${i.loadedClass}):not(.${i.loadingClass})`);
        n.hasClass(i.elementClass) && !n.hasClass(i.loadedClass) && !n.hasClass(i.loadingClass) && (r = r.add(n[0])), r.length !== 0 && r.each((l, o) => {
            const d = w(o);
            d.addClass(i.loadingClass);
            const c = d.attr("data-background"),
                p = d.attr("data-src"),
                u = d.attr("data-srcset"),
                m = d.attr("data-sizes"),
                h = d.parent("picture");
            s.loadImage(d[0], p || c, u, m, !1, () => {
                if (!(typeof s == "undefined" || s === null || !s || s && !s.params || s.destroyed)) {
                    if (c ? (d.css("background-image", `url("${c}")`), d.removeAttr("data-background")) : (u && (d.attr("srcset", u), d.removeAttr("data-srcset")), m && (d.attr("sizes", m), d.removeAttr("data-sizes")), h.length && h.children("source").each((f, x) => {
                            const g = w(x);
                            g.attr("data-srcset") && (g.attr("srcset", g.attr("data-srcset")), g.removeAttr("data-srcset"))
                        }), p && (d.attr("src", p), d.removeAttr("data-src"))), d.addClass(i.loadedClass).removeClass(i.loadingClass), n.find(`.${i.preloaderClass}`).remove(), s.params.loop && t) {
                        const f = n.attr("data-swiper-slide-index");
                        if (n.hasClass(s.params.slideDuplicateClass)) {
                            const x = s.$wrapperEl.children(`[data-swiper-slide-index="${f}"]:not(.${s.params.slideDuplicateClass})`);
                            s.lazy.loadInSlide(x.index(), !1)
                        } else {
                            const x = s.$wrapperEl.children(`.${s.params.slideDuplicateClass}[data-swiper-slide-index="${f}"]`);
                            s.lazy.loadInSlide(x.index(), !1)
                        }
                    }
                    s.emit("lazyImageReady", n[0], d[0]), s.params.autoHeight && s.updateAutoHeight()
                }
            }), s.emit("lazyImageLoad", n[0], d[0])
        })
    },
    load() {
        const e = this,
            {
                $wrapperEl: t,
                params: s,
                slides: i,
                activeIndex: a
            } = e,
            n = e.virtual && s.virtual.enabled,
            r = s.lazy;
        let l = s.slidesPerView;
        l === "auto" && (l = 0);

        function o(c) {
            if (n) {
                if (t.children(`.${s.slideClass}[data-swiper-slide-index="${c}"]`).length) return !0
            } else if (i[c]) return !0;
            return !1
        }

        function d(c) {
            return n ? w(c).attr("data-swiper-slide-index") : w(c).index()
        }
        if (e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children(`.${s.slideVisibleClass}`).each((c, p) => {
            const u = n ? w(p).attr("data-swiper-slide-index") : w(p).index();
            e.lazy.loadInSlide(u)
        });
        else if (l > 1)
            for (let c = a; c < a + l; c += 1) o(c) && e.lazy.loadInSlide(c);
        else e.lazy.loadInSlide(a);
        if (r.loadPrevNext)
            if (l > 1 || r.loadPrevNextAmount && r.loadPrevNextAmount > 1) {
                const c = r.loadPrevNextAmount,
                    p = l,
                    u = Math.min(a + p + Math.max(c, p), i.length),
                    m = Math.max(a - Math.max(p, c), 0);
                for (let h = a + l; h < u; h += 1) o(h) && e.lazy.loadInSlide(h);
                for (let h = m; h < a; h += 1) o(h) && e.lazy.loadInSlide(h)
            } else {
                const c = t.children(`.${s.slideNextClass}`);
                c.length > 0 && e.lazy.loadInSlide(d(c));
                const p = t.children(`.${s.slidePrevClass}`);
                p.length > 0 && e.lazy.loadInSlide(d(p))
            }
    }
};
var Ks = {
    name: "lazy",
    params: {
        lazy: {
            enabled: !1,
            loadPrevNext: !1,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: !1,
            elementClass: "swiper-lazy",
            loadingClass: "swiper-lazy-loading",
            loadedClass: "swiper-lazy-loaded",
            preloaderClass: "swiper-lazy-preloader"
        }
    },
    create() {
        const e = this;
        v.extend(e, {
            lazy: {
                initialImageLoaded: !1,
                load: Ce.load.bind(e),
                loadInSlide: Ce.loadInSlide.bind(e)
            }
        })
    },
    on: {
        beforeInit() {
            const e = this;
            e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1)
        },
        init() {
            const e = this;
            e.params.lazy.enabled && !e.params.loop && e.params.initialSlide === 0 && e.lazy.load()
        },
        scroll() {
            const e = this;
            e.params.freeMode && !e.params.freeModeSticky && e.lazy.load()
        },
        resize() {
            const e = this;
            e.params.lazy.enabled && e.lazy.load()
        },
        scrollbarDragMove() {
            const e = this;
            e.params.lazy.enabled && e.lazy.load()
        },
        transitionStart() {
            const e = this;
            e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
        },
        transitionEnd() {
            const e = this;
            e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load()
        },
        slideChange() {
            const e = this;
            e.params.lazy.enabled && e.params.cssMode && e.lazy.load()
        }
    }
};
const se = {
    LinearSpline: function(t, s) {
        const i = function() {
            let l, o, d;
            return (c, p) => {
                for (o = -1, l = c.length; l - o > 1;) d = l + o >> 1, c[d] <= p ? o = d : l = d;
                return l
            }
        }();
        this.x = t, this.y = s, this.lastIndex = t.length - 1;
        let a, n;
        return this.interpolate = function(l) {
            return l ? (n = i(this.x, l), a = n - 1, (l - this.x[a]) * (this.y[n] - this.y[a]) / (this.x[n] - this.x[a]) + this.y[a]) : 0
        }, this
    },
    getInterpolateFunction(e) {
        const t = this;
        t.controller.spline || (t.controller.spline = t.params.loop ? new se.LinearSpline(t.slidesGrid, e.slidesGrid) : new se.LinearSpline(t.snapGrid, e.snapGrid))
    },
    setTranslate(e, t) {
        const s = this,
            i = s.controller.control;
        let a, n;

        function r(l) {
            const o = s.rtlTranslate ? -s.translate : s.translate;
            s.params.controller.by === "slide" && (s.controller.getInterpolateFunction(l), n = -s.controller.spline.interpolate(-o)), (!n || s.params.controller.by === "container") && (a = (l.maxTranslate() - l.minTranslate()) / (s.maxTranslate() - s.minTranslate()), n = (o - s.minTranslate()) * a + l.minTranslate()), s.params.controller.inverse && (n = l.maxTranslate() - n), l.updateProgress(n), l.setTranslate(n, s), l.updateActiveIndex(), l.updateSlidesClasses()
        }
        if (Array.isArray(i))
            for (let l = 0; l < i.length; l += 1) i[l] !== t && i[l] instanceof X && r(i[l]);
        else i instanceof X && t !== i && r(i)
    },
    setTransition(e, t) {
        const s = this,
            i = s.controller.control;
        let a;

        function n(r) {
            r.setTransition(e, s), e !== 0 && (r.transitionStart(), r.params.autoHeight && v.nextTick(() => {
                r.updateAutoHeight()
            }), r.$wrapperEl.transitionEnd(() => {
                !i || (r.params.loop && s.params.controller.by === "slide" && r.loopFix(), r.transitionEnd())
            }))
        }
        if (Array.isArray(i))
            for (a = 0; a < i.length; a += 1) i[a] !== t && i[a] instanceof X && n(i[a]);
        else i instanceof X && t !== i && n(i)
    }
};
var Zs = {
    name: "controller",
    params: {
        controller: {
            control: void 0,
            inverse: !1,
            by: "slide"
        }
    },
    create() {
        const e = this;
        v.extend(e, {
            controller: {
                control: e.params.controller.control,
                getInterpolateFunction: se.getInterpolateFunction.bind(e),
                setTranslate: se.setTranslate.bind(e),
                setTransition: se.setTransition.bind(e)
            }
        })
    },
    on: {
        update() {
            const e = this;
            !e.controller.control || e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
        },
        resize() {
            const e = this;
            !e.controller.control || e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
        },
        observerUpdate() {
            const e = this;
            !e.controller.control || e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
        },
        setTranslate(e, t) {
            const s = this;
            !s.controller.control || s.controller.setTranslate(e, t)
        },
        setTransition(e, t) {
            const s = this;
            !s.controller.control || s.controller.setTransition(e, t)
        }
    }
};
const $e = {
    makeElFocusable(e) {
        return e.attr("tabIndex", "0"), e
    },
    makeElNotFocusable(e) {
        return e.attr("tabIndex", "-1"), e
    },
    addElRole(e, t) {
        return e.attr("role", t), e
    },
    addElLabel(e, t) {
        return e.attr("aria-label", t), e
    },
    disableEl(e) {
        return e.attr("aria-disabled", !0), e
    },
    enableEl(e) {
        return e.attr("aria-disabled", !1), e
    },
    onEnterKey(e) {
        const t = this,
            s = t.params.a11y;
        if (e.keyCode !== 13) return;
        const i = w(e.target);
        t.navigation && t.navigation.$nextEl && i.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(s.lastSlideMessage) : t.a11y.notify(s.nextSlideMessage)), t.navigation && t.navigation.$prevEl && i.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(s.firstSlideMessage) : t.a11y.notify(s.prevSlideMessage)), t.pagination && i.is(`.${t.params.pagination.bulletClass}`) && i[0].click()
    },
    notify(e) {
        const s = this.a11y.liveRegion;
        s.length !== 0 && (s.html(""), s.html(e))
    },
    updateNavigation() {
        const e = this;
        if (e.params.loop || !e.navigation) return;
        const {
            $nextEl: t,
            $prevEl: s
        } = e.navigation;
        s && s.length > 0 && (e.isBeginning ? (e.a11y.disableEl(s), e.a11y.makeElNotFocusable(s)) : (e.a11y.enableEl(s), e.a11y.makeElFocusable(s))), t && t.length > 0 && (e.isEnd ? (e.a11y.disableEl(t), e.a11y.makeElNotFocusable(t)) : (e.a11y.enableEl(t), e.a11y.makeElFocusable(t)))
    },
    updatePagination() {
        const e = this,
            t = e.params.a11y;
        e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each((s, i) => {
            const a = w(i);
            e.a11y.makeElFocusable(a), e.a11y.addElRole(a, "button"), e.a11y.addElLabel(a, t.paginationBulletMessage.replace(/\{\{index\}\}/, a.index() + 1))
        })
    },
    init() {
        const e = this;
        e.$el.append(e.a11y.liveRegion);
        const t = e.params.a11y;
        let s, i;
        e.navigation && e.navigation.$nextEl && (s = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (i = e.navigation.$prevEl), s && (e.a11y.makeElFocusable(s), e.a11y.addElRole(s, "button"), e.a11y.addElLabel(s, t.nextSlideMessage), s.on("keydown", e.a11y.onEnterKey)), i && (e.a11y.makeElFocusable(i), e.a11y.addElRole(i, "button"), e.a11y.addElLabel(i, t.prevSlideMessage), i.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", `.${e.params.pagination.bulletClass}`, e.a11y.onEnterKey)
    },
    destroy() {
        const e = this;
        e.a11y.liveRegion && e.a11y.liveRegion.length > 0 && e.a11y.liveRegion.remove();
        let t, s;
        e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (s = e.navigation.$prevEl), t && t.off("keydown", e.a11y.onEnterKey), s && s.off("keydown", e.a11y.onEnterKey), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.off("keydown", `.${e.params.pagination.bulletClass}`, e.a11y.onEnterKey)
    }
};
var Qs = {
    name: "a11y",
    params: {
        a11y: {
            enabled: !0,
            notificationClass: "swiper-notification",
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}"
        }
    },
    create() {
        const e = this;
        v.extend(e, {
            a11y: {
                liveRegion: w(`<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)
            }
        }), Object.keys($e).forEach(t => {
            e.a11y[t] = $e[t].bind(e)
        })
    },
    on: {
        init() {
            const e = this;
            !e.params.a11y.enabled || (e.a11y.init(), e.a11y.updateNavigation())
        },
        toEdge() {
            const e = this;
            !e.params.a11y.enabled || e.a11y.updateNavigation()
        },
        fromEdge() {
            const e = this;
            !e.params.a11y.enabled || e.a11y.updateNavigation()
        },
        paginationUpdate() {
            const e = this;
            !e.params.a11y.enabled || e.a11y.updatePagination()
        },
        destroy() {
            const e = this;
            !e.params.a11y.enabled || e.a11y.destroy()
        }
    }
};
const W = {
    init() {
        const e = this;
        if (!e.params.history) return;
        if (!b.history || !b.history.pushState) {
            e.params.history.enabled = !1, e.params.hashNavigation.enabled = !0;
            return
        }
        const t = e.history;
        t.initialized = !0, t.paths = W.getPathValues(), !(!t.paths.key && !t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || b.addEventListener("popstate", e.history.setHistoryPopState))
    },
    destroy() {
        const e = this;
        e.params.history.replaceState || b.removeEventListener("popstate", e.history.setHistoryPopState)
    },
    setHistoryPopState() {
        const e = this;
        e.history.paths = W.getPathValues(), e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1)
    },
    getPathValues() {
        const e = b.location.pathname.slice(1).split("/").filter(a => a !== ""),
            t = e.length,
            s = e[t - 2],
            i = e[t - 1];
        return {
            key: s,
            value: i
        }
    },
    setHistory(e, t) {
        const s = this;
        if (!s.history.initialized || !s.params.history.enabled) return;
        const i = s.slides.eq(t);
        let a = W.slugify(i.attr("data-history"));
        b.location.pathname.includes(e) || (a = `${e}/${a}`);
        const n = b.history.state;
        n && n.value === a || (s.params.history.replaceState ? b.history.replaceState({
            value: a
        }, null, a) : b.history.pushState({
            value: a
        }, null, a))
    },
    slugify(e) {
        return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
    },
    scrollToSlide(e, t, s) {
        const i = this;
        if (t)
            for (let a = 0, n = i.slides.length; a < n; a += 1) {
                const r = i.slides.eq(a);
                if (W.slugify(r.attr("data-history")) === t && !r.hasClass(i.params.slideDuplicateClass)) {
                    const o = r.index();
                    i.slideTo(o, e, s)
                }
            } else i.slideTo(0, e, s)
    }
};
var Js = {
    name: "history",
    params: {
        history: {
            enabled: !1,
            replaceState: !1,
            key: "slides"
        }
    },
    create() {
        const e = this;
        v.extend(e, {
            history: {
                init: W.init.bind(e),
                setHistory: W.setHistory.bind(e),
                setHistoryPopState: W.setHistoryPopState.bind(e),
                scrollToSlide: W.scrollToSlide.bind(e),
                destroy: W.destroy.bind(e)
            }
        })
    },
    on: {
        init() {
            const e = this;
            e.params.history.enabled && e.history.init()
        },
        destroy() {
            const e = this;
            e.params.history.enabled && e.history.destroy()
        },
        transitionEnd() {
            const e = this;
            e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex)
        },
        slideChange() {
            const e = this;
            e.history.initialized && e.params.cssMode && e.history.setHistory(e.params.history.key, e.activeIndex)
        }
    }
};
const re = {
    onHashCange() {
        const e = this;
        e.emit("hashChange");
        const t = C.location.hash.replace("#", ""),
            s = e.slides.eq(e.activeIndex).attr("data-hash");
        if (t !== s) {
            const i = e.$wrapperEl.children(`.${e.params.slideClass}[data-hash="${t}"]`).index();
            if (typeof i == "undefined") return;
            e.slideTo(i)
        }
    },
    setHash() {
        const e = this;
        if (!(!e.hashNavigation.initialized || !e.params.hashNavigation.enabled))
            if (e.params.hashNavigation.replaceState && b.history && b.history.replaceState) b.history.replaceState(null, null, `#${e.slides.eq(e.activeIndex).attr("data-hash")}` || ""), e.emit("hashSet");
            else {
                const t = e.slides.eq(e.activeIndex),
                    s = t.attr("data-hash") || t.attr("data-history");
                C.location.hash = s || "", e.emit("hashSet")
            }
    },
    init() {
        const e = this;
        if (!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled) return;
        e.hashNavigation.initialized = !0;
        const t = C.location.hash.replace("#", "");
        if (t)
            for (let i = 0, a = e.slides.length; i < a; i += 1) {
                const n = e.slides.eq(i);
                if ((n.attr("data-hash") || n.attr("data-history")) === t && !n.hasClass(e.params.slideDuplicateClass)) {
                    const l = n.index();
                    e.slideTo(l, 0, e.params.runCallbacksOnInit, !0)
                }
            }
        e.params.hashNavigation.watchState && w(b).on("hashchange", e.hashNavigation.onHashCange)
    },
    destroy() {
        const e = this;
        e.params.hashNavigation.watchState && w(b).off("hashchange", e.hashNavigation.onHashCange)
    }
};
var ei = {
    name: "hash-navigation",
    params: {
        hashNavigation: {
            enabled: !1,
            replaceState: !1,
            watchState: !1
        }
    },
    create() {
        const e = this;
        v.extend(e, {
            hashNavigation: {
                initialized: !1,
                init: re.init.bind(e),
                destroy: re.destroy.bind(e),
                setHash: re.setHash.bind(e),
                onHashCange: re.onHashCange.bind(e)
            }
        })
    },
    on: {
        init() {
            const e = this;
            e.params.hashNavigation.enabled && e.hashNavigation.init()
        },
        destroy() {
            const e = this;
            e.params.hashNavigation.enabled && e.hashNavigation.destroy()
        },
        transitionEnd() {
            const e = this;
            e.hashNavigation.initialized && e.hashNavigation.setHash()
        },
        slideChange() {
            const e = this;
            e.hashNavigation.initialized && e.params.cssMode && e.hashNavigation.setHash()
        }
    }
};
const le = {
    run() {
        const e = this,
            t = e.slides.eq(e.activeIndex);
        let s = e.params.autoplay.delay;
        t.attr("data-swiper-autoplay") && (s = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = v.nextTick(() => {
            e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")), e.params.cssMode && e.autoplay.running && e.autoplay.run()
        }, s)
    },
    start() {
        const e = this;
        return typeof e.autoplay.timeout != "undefined" || e.autoplay.running ? !1 : (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0)
    },
    stop() {
        const e = this;
        return !e.autoplay.running || typeof e.autoplay.timeout == "undefined" ? !1 : (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0)
    },
    pause(e) {
        const t = this;
        !t.autoplay.running || t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, e === 0 || !t.params.autoplay.waitForTransition ? (t.autoplay.paused = !1, t.autoplay.run()) : (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)))
    }
};
var ti = {
    name: "autoplay",
    params: {
        autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1
        }
    },
    create() {
        const e = this;
        v.extend(e, {
            autoplay: {
                running: !1,
                paused: !1,
                run: le.run.bind(e),
                start: le.start.bind(e),
                stop: le.stop.bind(e),
                pause: le.pause.bind(e),
                onVisibilityChange() {
                    document.visibilityState === "hidden" && e.autoplay.running && e.autoplay.pause(), document.visibilityState === "visible" && e.autoplay.paused && (e.autoplay.run(), e.autoplay.paused = !1)
                },
                onTransitionEnd(t) {
                    !e || e.destroyed || !e.$wrapperEl || t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
                }
            }
        })
    },
    on: {
        init() {
            const e = this;
            e.params.autoplay.enabled && (e.autoplay.start(), document.addEventListener("visibilitychange", e.autoplay.onVisibilityChange))
        },
        beforeTransitionStart(e, t) {
            const s = this;
            s.autoplay.running && (t || !s.params.autoplay.disableOnInteraction ? s.autoplay.pause(e) : s.autoplay.stop())
        },
        sliderFirstMove() {
            const e = this;
            e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause())
        },
        touchEnd() {
            const e = this;
            e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && e.autoplay.run()
        },
        destroy() {
            const e = this;
            e.autoplay.running && e.autoplay.stop(), document.removeEventListener("visibilitychange", e.autoplay.onVisibilityChange)
        }
    }
};
const Me = {
    setTranslate() {
        const e = this,
            {
                slides: t
            } = e;
        for (let s = 0; s < t.length; s += 1) {
            const i = e.slides.eq(s);
            let n = -i[0].swiperSlideOffset;
            e.params.virtualTranslate || (n -= e.translate);
            let r = 0;
            e.isHorizontal() || (r = n, n = 0);
            const l = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
            i.css({
                opacity: l
            }).transform(`translate3d(${n}px, ${r}px, 0px)`)
        }
    },
    setTransition(e) {
        const t = this,
            {
                slides: s,
                $wrapperEl: i
            } = t;
        if (s.transition(e), t.params.virtualTranslate && e !== 0) {
            let a = !1;
            s.transitionEnd(() => {
                if (a || !t || t.destroyed) return;
                a = !0, t.animating = !1;
                const n = ["webkitTransitionEnd", "transitionend"];
                for (let r = 0; r < n.length; r += 1) i.trigger(n[r])
            })
        }
    }
};
var si = {
    name: "effect-fade",
    params: {
        fadeEffect: {
            crossFade: !1
        }
    },
    create() {
        const e = this;
        v.extend(e, {
            fadeEffect: {
                setTranslate: Me.setTranslate.bind(e),
                setTransition: Me.setTransition.bind(e)
            }
        })
    },
    on: {
        beforeInit() {
            const e = this;
            if (e.params.effect !== "fade") return;
            e.classNames.push(`${e.params.containerModifierClass}fade`);
            const t = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0
            };
            v.extend(e.params, t), v.extend(e.originalParams, t)
        },
        setTranslate() {
            const e = this;
            e.params.effect === "fade" && e.fadeEffect.setTranslate()
        },
        setTransition(e) {
            const t = this;
            t.params.effect === "fade" && t.fadeEffect.setTransition(e)
        }
    }
};
const Pe = {
    setTranslate() {
        const e = this,
            {
                $el: t,
                $wrapperEl: s,
                slides: i,
                width: a,
                height: n,
                rtlTranslate: r,
                size: l
            } = e,
            o = e.params.cubeEffect,
            d = e.isHorizontal(),
            c = e.virtual && e.params.virtual.enabled;
        let p = 0,
            u;
        o.shadow && (d ? (u = s.find(".swiper-cube-shadow"), u.length === 0 && (u = w('<div class="swiper-cube-shadow"></div>'), s.append(u)), u.css({
            height: `${a}px`
        })) : (u = t.find(".swiper-cube-shadow"), u.length === 0 && (u = w('<div class="swiper-cube-shadow"></div>'), t.append(u))));
        for (let h = 0; h < i.length; h += 1) {
            const f = i.eq(h);
            let x = h;
            c && (x = parseInt(f.attr("data-swiper-slide-index"), 10));
            let g = x * 90,
                S = Math.floor(g / 360);
            r && (g = -g, S = Math.floor(-g / 360));
            const y = Math.max(Math.min(f[0].progress, 1), -1);
            let k = 0,
                I = 0,
                P = 0;
            x % 4 === 0 ? (k = -S * 4 * l, P = 0) : (x - 1) % 4 === 0 ? (k = 0, P = -S * 4 * l) : (x - 2) % 4 === 0 ? (k = l + S * 4 * l, P = l) : (x - 3) % 4 === 0 && (k = -l, P = 3 * l + l * 4 * S), r && (k = -k), d || (I = k, k = 0);
            const E = `rotateX(${d?0:-g}deg) rotateY(${d?g:0}deg) translate3d(${k}px, ${I}px, ${P}px)`;
            if (y <= 1 && y > -1 && (p = x * 90 + y * 90, r && (p = -x * 90 - y * 90)), f.transform(E), o.slideShadows) {
                let T = d ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
                    O = d ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                T.length === 0 && (T = w(`<div class="swiper-slide-shadow-${d?"left":"top"}"></div>`), f.append(T)), O.length === 0 && (O = w(`<div class="swiper-slide-shadow-${d?"right":"bottom"}"></div>`), f.append(O)), T.length && (T[0].style.opacity = Math.max(-y, 0)), O.length && (O[0].style.opacity = Math.max(y, 0))
            }
        }
        if (s.css({
                "-webkit-transform-origin": `50% 50% -${l/2}px`,
                "-moz-transform-origin": `50% 50% -${l/2}px`,
                "-ms-transform-origin": `50% 50% -${l/2}px`,
                "transform-origin": `50% 50% -${l/2}px`
            }), o.shadow)
            if (d) u.transform(`translate3d(0px, ${a/2+o.shadowOffset}px, ${-a/2}px) rotateX(90deg) rotateZ(0deg) scale(${o.shadowScale})`);
            else {
                const h = Math.abs(p) - Math.floor(Math.abs(p) / 90) * 90,
                    f = 1.5 - (Math.sin(h * 2 * Math.PI / 360) / 2 + Math.cos(h * 2 * Math.PI / 360) / 2),
                    x = o.shadowScale,
                    g = o.shadowScale / f,
                    S = o.shadowOffset;
                u.transform(`scale3d(${x}, 1, ${g}) translate3d(0px, ${n/2+S}px, ${-n/2/g}px) rotateX(-90deg)`)
            }
        const m = de.isSafari || de.isWebView ? -l / 2 : 0;
        s.transform(`translate3d(0px,0,${m}px) rotateX(${e.isHorizontal()?0:p}deg) rotateY(${e.isHorizontal()?-p:0}deg)`)
    },
    setTransition(e) {
        const t = this,
            {
                $el: s,
                slides: i
            } = t;
        i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.cubeEffect.shadow && !t.isHorizontal() && s.find(".swiper-cube-shadow").transition(e)
    }
};
var ii = {
    name: "effect-cube",
    params: {
        cubeEffect: {
            slideShadows: !0,
            shadow: !0,
            shadowOffset: 20,
            shadowScale: .94
        }
    },
    create() {
        const e = this;
        v.extend(e, {
            cubeEffect: {
                setTranslate: Pe.setTranslate.bind(e),
                setTransition: Pe.setTransition.bind(e)
            }
        })
    },
    on: {
        beforeInit() {
            const e = this;
            if (e.params.effect !== "cube") return;
            e.classNames.push(`${e.params.containerModifierClass}cube`), e.classNames.push(`${e.params.containerModifierClass}3d`);
            const t = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0
            };
            v.extend(e.params, t), v.extend(e.originalParams, t)
        },
        setTranslate() {
            const e = this;
            e.params.effect === "cube" && e.cubeEffect.setTranslate()
        },
        setTransition(e) {
            const t = this;
            t.params.effect === "cube" && t.cubeEffect.setTransition(e)
        }
    }
};
const ke = {
    setTranslate() {
        const e = this,
            {
                slides: t,
                rtlTranslate: s
            } = e;
        for (let i = 0; i < t.length; i += 1) {
            const a = t.eq(i);
            let n = a[0].progress;
            e.params.flipEffect.limitRotation && (n = Math.max(Math.min(a[0].progress, 1), -1));
            const r = a[0].swiperSlideOffset;
            let o = -180 * n,
                d = 0,
                c = -r,
                p = 0;
            if (e.isHorizontal() ? s && (o = -o) : (p = c, c = 0, d = -o, o = 0), a[0].style.zIndex = -Math.abs(Math.round(n)) + t.length, e.params.flipEffect.slideShadows) {
                let u = e.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top"),
                    m = e.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
                u.length === 0 && (u = w(`<div class="swiper-slide-shadow-${e.isHorizontal()?"left":"top"}"></div>`), a.append(u)), m.length === 0 && (m = w(`<div class="swiper-slide-shadow-${e.isHorizontal()?"right":"bottom"}"></div>`), a.append(m)), u.length && (u[0].style.opacity = Math.max(-n, 0)), m.length && (m[0].style.opacity = Math.max(n, 0))
            }
            a.transform(`translate3d(${c}px, ${p}px, 0px) rotateX(${d}deg) rotateY(${o}deg)`)
        }
    },
    setTransition(e) {
        const t = this,
            {
                slides: s,
                activeIndex: i,
                $wrapperEl: a
            } = t;
        if (s.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && e !== 0) {
            let n = !1;
            s.eq(i).transitionEnd(function() {
                if (n || !t || t.destroyed) return;
                n = !0, t.animating = !1;
                const l = ["webkitTransitionEnd", "transitionend"];
                for (let o = 0; o < l.length; o += 1) a.trigger(l[o])
            })
        }
    }
};
var ai = {
    name: "effect-flip",
    params: {
        flipEffect: {
            slideShadows: !0,
            limitRotation: !0
        }
    },
    create() {
        const e = this;
        v.extend(e, {
            flipEffect: {
                setTranslate: ke.setTranslate.bind(e),
                setTransition: ke.setTransition.bind(e)
            }
        })
    },
    on: {
        beforeInit() {
            const e = this;
            if (e.params.effect !== "flip") return;
            e.classNames.push(`${e.params.containerModifierClass}flip`), e.classNames.push(`${e.params.containerModifierClass}3d`);
            const t = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0
            };
            v.extend(e.params, t), v.extend(e.originalParams, t)
        },
        setTranslate() {
            const e = this;
            e.params.effect === "flip" && e.flipEffect.setTranslate()
        },
        setTransition(e) {
            const t = this;
            t.params.effect === "flip" && t.flipEffect.setTransition(e)
        }
    }
};
const ze = {
    setTranslate() {
        const e = this,
            {
                width: t,
                height: s,
                slides: i,
                $wrapperEl: a,
                slidesSizesGrid: n
            } = e,
            r = e.params.coverflowEffect,
            l = e.isHorizontal(),
            o = e.translate,
            d = l ? -o + t / 2 : -o + s / 2,
            c = l ? r.rotate : -r.rotate,
            p = r.depth;
        for (let u = 0, m = i.length; u < m; u += 1) {
            const h = i.eq(u),
                f = n[u],
                x = h[0].swiperSlideOffset,
                g = (d - x - f / 2) / f * r.modifier;
            let S = l ? c * g : 0,
                y = l ? 0 : c * g,
                k = -p * Math.abs(g),
                I = r.stretch;
            typeof I == "string" && I.indexOf("%") !== -1 && (I = parseFloat(r.stretch) / 100 * f);
            let P = l ? 0 : I * g,
                E = l ? I * g : 0,
                T = 1 - (1 - r.scale) * Math.abs(g);
            Math.abs(E) < .001 && (E = 0), Math.abs(P) < .001 && (P = 0), Math.abs(k) < .001 && (k = 0), Math.abs(S) < .001 && (S = 0), Math.abs(y) < .001 && (y = 0), Math.abs(T) < .001 && (T = 0);
            const O = `translate3d(${E}px,${P}px,${k}px)  rotateX(${y}deg) rotateY(${S}deg) scale(${T})`;
            if (h.transform(O), h[0].style.zIndex = -Math.abs(Math.round(g)) + 1, r.slideShadows) {
                let V = l ? h.find(".swiper-slide-shadow-left") : h.find(".swiper-slide-shadow-top"),
                    H = l ? h.find(".swiper-slide-shadow-right") : h.find(".swiper-slide-shadow-bottom");
                V.length === 0 && (V = w(`<div class="swiper-slide-shadow-${l?"left":"top"}"></div>`), h.append(V)), H.length === 0 && (H = w(`<div class="swiper-slide-shadow-${l?"right":"bottom"}"></div>`), h.append(H)), V.length && (V[0].style.opacity = g > 0 ? g : 0), H.length && (H[0].style.opacity = -g > 0 ? -g : 0)
            }
        }
        if ($.pointerEvents || $.prefixedPointerEvents) {
            const u = a[0].style;
            u.perspectiveOrigin = `${d}px 50%`
        }
    },
    setTransition(e) {
        this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
    }
};
var ni = {
    name: "effect-coverflow",
    params: {
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            scale: 1,
            modifier: 1,
            slideShadows: !0
        }
    },
    create() {
        const e = this;
        v.extend(e, {
            coverflowEffect: {
                setTranslate: ze.setTranslate.bind(e),
                setTransition: ze.setTransition.bind(e)
            }
        })
    },
    on: {
        beforeInit() {
            const e = this;
            e.params.effect === "coverflow" && (e.classNames.push(`${e.params.containerModifierClass}coverflow`), e.classNames.push(`${e.params.containerModifierClass}3d`), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
        },
        setTranslate() {
            const e = this;
            e.params.effect === "coverflow" && e.coverflowEffect.setTranslate()
        },
        setTransition(e) {
            const t = this;
            t.params.effect === "coverflow" && t.coverflowEffect.setTransition(e)
        }
    }
};
const he = {
    init() {
        const e = this,
            {
                thumbs: t
            } = e.params,
            s = e.constructor;
        t.swiper instanceof s ? (e.thumbs.swiper = t.swiper, v.extend(e.thumbs.swiper.originalParams, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1
        }), v.extend(e.thumbs.swiper.params, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1
        })) : v.isObject(t.swiper) && (e.thumbs.swiper = new s(v.extend({}, t.swiper, {
            watchSlidesVisibility: !0,
            watchSlidesProgress: !0,
            slideToClickedSlide: !1
        })), e.thumbs.swiperCreated = !0), e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick)
    },
    onThumbClick() {
        const e = this,
            t = e.thumbs.swiper;
        if (!t) return;
        const s = t.clickedIndex,
            i = t.clickedSlide;
        if (i && w(i).hasClass(e.params.thumbs.slideThumbActiveClass) || typeof s == "undefined" || s === null) return;
        let a;
        if (t.params.loop ? a = parseInt(w(t.clickedSlide).attr("data-swiper-slide-index"), 10) : a = s, e.params.loop) {
            let n = e.activeIndex;
            e.slides.eq(n).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, n = e.activeIndex);
            const r = e.slides.eq(n).prevAll(`[data-swiper-slide-index="${a}"]`).eq(0).index(),
                l = e.slides.eq(n).nextAll(`[data-swiper-slide-index="${a}"]`).eq(0).index();
            typeof r == "undefined" ? a = l : typeof l == "undefined" ? a = r : l - n < n - r ? a = l : a = r
        }
        e.slideTo(a)
    },
    update(e) {
        const t = this,
            s = t.thumbs.swiper;
        if (!s) return;
        const i = s.params.slidesPerView === "auto" ? s.slidesPerViewDynamic() : s.params.slidesPerView,
            a = t.params.thumbs.autoScrollOffset,
            n = a && !s.params.loop;
        if (t.realIndex !== s.realIndex || n) {
            let o = s.activeIndex,
                d, c;
            if (s.params.loop) {
                s.slides.eq(o).hasClass(s.params.slideDuplicateClass) && (s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft, o = s.activeIndex);
                const p = s.slides.eq(o).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index(),
                    u = s.slides.eq(o).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();
                typeof p == "undefined" ? d = u : typeof u == "undefined" ? d = p : u - o === o - p ? d = o : u - o < o - p ? d = u : d = p, c = t.activeIndex > t.previousIndex ? "next" : "prev"
            } else d = t.realIndex, c = d > t.previousIndex ? "next" : "prev";
            n && (d += c === "next" ? a : -1 * a), s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(d) < 0 && (s.params.centeredSlides ? d > o ? d = d - Math.floor(i / 2) + 1 : d = d + Math.floor(i / 2) - 1 : d > o && (d = d - i + 1), s.slideTo(d, e ? 0 : void 0))
        }
        let r = 1;
        const l = t.params.thumbs.slideThumbActiveClass;
        if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (r = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (r = 1), r = Math.floor(r), s.slides.removeClass(l), s.params.loop || s.params.virtual && s.params.virtual.enabled)
            for (let o = 0; o < r; o += 1) s.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex+o}"]`).addClass(l);
        else
            for (let o = 0; o < r; o += 1) s.slides.eq(t.realIndex + o).addClass(l)
    }
};
var ri = {
    name: "thumbs",
    params: {
        thumbs: {
            swiper: null,
            multipleActiveThumbs: !0,
            autoScrollOffset: 0,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-container-thumbs"
        }
    },
    create() {
        const e = this;
        v.extend(e, {
            thumbs: {
                swiper: null,
                init: he.init.bind(e),
                update: he.update.bind(e),
                onThumbClick: he.onThumbClick.bind(e)
            }
        })
    },
    on: {
        beforeInit() {
            const e = this,
                {
                    thumbs: t
                } = e.params;
            !t || !t.swiper || (e.thumbs.init(), e.thumbs.update(!0))
        },
        slideChange() {
            const e = this;
            !e.thumbs.swiper || e.thumbs.update()
        },
        update() {
            const e = this;
            !e.thumbs.swiper || e.thumbs.update()
        },
        resize() {
            const e = this;
            !e.thumbs.swiper || e.thumbs.update()
        },
        observerUpdate() {
            const e = this;
            !e.thumbs.swiper || e.thumbs.update()
        },
        setTransition(e) {
            const s = this.thumbs.swiper;
            !s || s.setTransition(e)
        },
        beforeDestroy() {
            const e = this,
                t = e.thumbs.swiper;
            !t || e.thumbs.swiperCreated && t && t.destroy()
        }
    }
};
const li = [Bs, Hs, Gs, Ns, Xs, Vs, Ys, Fs, Rs, Ws, qs, js, Us, Ks, Zs, Qs, Js, ei, ti, si, ii, ai, ni, ri];
typeof X.use == "undefined" && (X.use = X.Class.use, X.installModule = X.Class.installModule);
X.use(li);
var Y;
(function(e) {
    e.SwiperComponent = "Swiper", e.SwiperSlideComponent = "SwiperSlide", e.SwiperDirective = "swiper", e.SwiperInstance = "$swiper"
})(Y || (Y = {}));
var ie = Object.freeze({
        containerClass: "swiper-container",
        wrapperClass: "swiper-wrapper",
        slideClass: "swiper-slide"
    }),
    Z;
(function(e) {
    e.Ready = "ready", e.ClickSlide = "clickSlide"
})(Z || (Z = {}));
var N;
(function(e) {
    e.AutoUpdate = "autoUpdate", e.AutoDestroy = "autoDestroy", e.DeleteInstanceOnDestroy = "deleteInstanceOnDestroy", e.CleanupStylesOnDestroy = "cleanupStylesOnDestroy"
})(N || (N = {}));
var oi = ["init", "beforeDestroy", "slideChange", "slideChangeTransitionStart", "slideChangeTransitionEnd", "slideNextTransitionStart", "slideNextTransitionEnd", "slidePrevTransitionStart", "slidePrevTransitionEnd", "transitionStart", "transitionEnd", "touchStart", "touchMove", "touchMoveOpposite", "sliderMove", "touchEnd", "click", "tap", "doubleTap", "imagesReady", "progress", "reachBeginning", "reachEnd", "fromEdge", "setTranslate", "setTransition", "resize", "observerUpdate", "beforeLoopFix", "loopFix"];
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function Ie() {
    for (var e = 0, t = 0, s = arguments.length; t < s; t++) e += arguments[t].length;
    for (var i = Array(e), a = 0, t = 0; t < s; t++)
        for (var n = arguments[t], r = 0, l = n.length; r < l; r++, a++) i[a] = n[r];
    return i
}
var be = function(e) {
        return e.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/\s+/g, "-").toLowerCase()
    },
    He = function(e, t, s) {
        var i, a, n;
        if (e && !e.destroyed) {
            var r = ((i = t.composedPath) === null || i === void 0 ? void 0 : i.call(t)) || t.path;
            if ((t == null ? void 0 : t.target) && r) {
                var l = Array.from(e.slides),
                    o = Array.from(r);
                if (l.includes(t.target) || o.some(function(u) {
                        return l.includes(u)
                    })) {
                    var d = e.clickedIndex,
                        c = Number((n = (a = e.clickedSlide) === null || a === void 0 ? void 0 : a.dataset) === null || n === void 0 ? void 0 : n.swiperSlideIndex),
                        p = Number.isInteger(c) ? c : null;
                    s(Z.ClickSlide, d, p), s(be(Z.ClickSlide), d, p)
                }
            }
        }
    },
    Ge = function(e, t) {
        oi.forEach(function(s) {
            e.on(s, function() {
                for (var i = arguments, a = [], n = 0; n < arguments.length; n++) a[n] = i[n];
                t.apply(void 0, Ie([s], a));
                var r = be(s);
                r !== s && t.apply(void 0, Ie([r], a))
            })
        })
    },
    di = "instanceName";

function Ne(e, t) {
    var s = function(o, d) {
            var c, p, u, m, h = (p = (c = o.data) === null || c === void 0 ? void 0 : c.attrs) === null || p === void 0 ? void 0 : p[d];
            return h !== void 0 ? h : (m = (u = o.data) === null || u === void 0 ? void 0 : u.attrs) === null || m === void 0 ? void 0 : m[be(d)]
        },
        i = function(o, d, c) {
            return d.arg || s(c, di) || o.id || Y.SwiperInstance
        },
        a = function(o, d, c) {
            var p = i(o, d, c);
            return c.context[p] || null
        },
        n = function(o) {
            return o.value || t
        },
        r = function(o) {
            return [!0, void 0, null, ""].includes(o)
        },
        l = function(o) {
            var d, c, p = ((d = o.data) === null || d === void 0 ? void 0 : d.on) || ((c = o.componentOptions) === null || c === void 0 ? void 0 : c.listeners);
            return function(u) {
                for (var m = arguments, h = [], f = 1; f < arguments.length; f++) h[f - 1] = m[f];
                var x, g = (x = p) === null || x === void 0 ? void 0 : x[u];
                g && g.fns.apply(g, h)
            }
        };
    return {
        bind: function(o, d, c) {
            o.className.indexOf(ie.containerClass) === -1 && (o.className += (o.className ? " " : "") + ie.containerClass), o.addEventListener("click", function(p) {
                var u = l(c),
                    m = a(o, d, c);
                He(m, p, u)
            })
        },
        inserted: function(o, d, c) {
            var p = c.context,
                u = n(d),
                m = i(o, d, c),
                h = l(c),
                f = p,
                x = f == null ? void 0 : f[m];
            (!x || x.destroyed) && (x = new e(o, u), f[m] = x, Ge(x, h), h(Z.Ready, x))
        },
        componentUpdated: function(o, d, c) {
            var p, u, m, h, f, x, g, S, y, k, I, P, E = s(c, N.AutoUpdate);
            if (r(E)) {
                var T = a(o, d, c);
                if (T) {
                    var O = n(d),
                        V = O.loop;
                    V && ((u = (p = T) === null || p === void 0 ? void 0 : p.loopDestroy) === null || u === void 0 || u.call(p)), (m = T == null ? void 0 : T.update) === null || m === void 0 || m.call(T), (f = (h = T.navigation) === null || h === void 0 ? void 0 : h.update) === null || f === void 0 || f.call(h), (g = (x = T.pagination) === null || x === void 0 ? void 0 : x.render) === null || g === void 0 || g.call(x), (y = (S = T.pagination) === null || S === void 0 ? void 0 : S.update) === null || y === void 0 || y.call(S), V && ((I = (k = T) === null || k === void 0 ? void 0 : k.loopCreate) === null || I === void 0 || I.call(k), (P = T == null ? void 0 : T.update) === null || P === void 0 || P.call(T))
                }
            }
        },
        unbind: function(o, d, c) {
            var p, u = s(c, N.AutoDestroy);
            if (r(u)) {
                var m = a(o, d, c);
                m && m.initialized && ((p = m == null ? void 0 : m.destroy) === null || p === void 0 || p.call(m, r(s(c, N.DeleteInstanceOnDestroy)), r(s(c, N.CleanupStylesOnDestroy))))
            }
        }
    }
}
var q;
(function(e) {
    e.ParallaxBg = "parallax-bg", e.Pagination = "pagination", e.Scrollbar = "scrollbar", e.PrevButton = "button-prev", e.NextButton = "button-next"
})(q || (q = {}));

function Xe(e) {
    var t;
    return Oe.extend({
        name: Y.SwiperComponent,
        props: (t = {
            defaultOptions: {
                type: Object,
                required: !1,
                default: function() {
                    return {}
                }
            },
            options: {
                type: Object,
                required: !1
            }
        }, t[N.AutoUpdate] = {
            type: Boolean,
            default: !0
        }, t[N.AutoDestroy] = {
            type: Boolean,
            default: !0
        }, t[N.DeleteInstanceOnDestroy] = {
            type: Boolean,
            required: !1,
            default: !0
        }, t[N.CleanupStylesOnDestroy] = {
            type: Boolean,
            required: !1,
            default: !0
        }, t),
        data: function() {
            var s;
            return s = {}, s[Y.SwiperInstance] = null, s
        },
        computed: {
            swiperInstance: {
                cache: !1,
                set: function(s) {
                    this[Y.SwiperInstance] = s
                },
                get: function() {
                    return this[Y.SwiperInstance]
                }
            },
            swiperOptions: function() {
                return this.options || this.defaultOptions
            },
            wrapperClass: function() {
                return this.swiperOptions.wrapperClass || ie.wrapperClass
            }
        },
        methods: {
            handleSwiperClick: function(s) {
                He(this.swiperInstance, s, this.$emit.bind(this))
            },
            autoReLoopSwiper: function() {
                var s, i;
                if (this.swiperInstance && this.swiperOptions.loop) {
                    var a = this.swiperInstance;
                    (s = a == null ? void 0 : a.loopDestroy) === null || s === void 0 || s.call(a), (i = a == null ? void 0 : a.loopCreate) === null || i === void 0 || i.call(a)
                }
            },
            updateSwiper: function() {
                var s, i, a, n, r, l, o, d;
                this[N.AutoUpdate] && this.swiperInstance && (this.autoReLoopSwiper(), (i = (s = this.swiperInstance) === null || s === void 0 ? void 0 : s.update) === null || i === void 0 || i.call(s), (n = (a = this.swiperInstance.navigation) === null || a === void 0 ? void 0 : a.update) === null || n === void 0 || n.call(a), (l = (r = this.swiperInstance.pagination) === null || r === void 0 ? void 0 : r.render) === null || l === void 0 || l.call(r), (d = (o = this.swiperInstance.pagination) === null || o === void 0 ? void 0 : o.update) === null || d === void 0 || d.call(o))
            },
            destroySwiper: function() {
                var s, i;
                this[N.AutoDestroy] && this.swiperInstance && this.swiperInstance.initialized && ((i = (s = this.swiperInstance) === null || s === void 0 ? void 0 : s.destroy) === null || i === void 0 || i.call(s, this[N.DeleteInstanceOnDestroy], this[N.CleanupStylesOnDestroy]))
            },
            initSwiper: function() {
                this.swiperInstance = new e(this.$el, this.swiperOptions), Ge(this.swiperInstance, this.$emit.bind(this)), this.$emit(Z.Ready, this.swiperInstance)
            }
        },
        mounted: function() {
            this.swiperInstance || this.initSwiper()
        },
        activated: function() {
            this.updateSwiper()
        },
        updated: function() {
            this.updateSwiper()
        },
        beforeDestroy: function() {
            this.$nextTick(this.destroySwiper)
        },
        render: function(s) {
            return s("div", {
                staticClass: ie.containerClass,
                on: {
                    click: this.handleSwiperClick
                }
            }, [this.$slots[q.ParallaxBg], s("div", {
                class: this.wrapperClass
            }, this.$slots.default), this.$slots[q.Pagination], this.$slots[q.PrevButton], this.$slots[q.NextButton], this.$slots[q.Scrollbar]])
        }
    })
}
var Ve = Oe.extend({
        name: Y.SwiperSlideComponent,
        computed: {
            slideClass: function() {
                var e, t;
                return ((t = (e = this.$parent) === null || e === void 0 ? void 0 : e.swiperOptions) === null || t === void 0 ? void 0 : t.slideClass) || ie.slideClass
            }
        },
        methods: {
            update: function() {
                var e, t = this.$parent;
                t[N.AutoUpdate] && ((e = t == null ? void 0 : t.swiperInstance) === null || e === void 0 || e.update())
            }
        },
        mounted: function() {
            this.update()
        },
        updated: function() {
            this.update()
        },
        render: function(e) {
            return e("div", {
                class: this.slideClass
            }, this.$slots.default)
        }
    }),
    ci = function(e) {
        var t = function(s, i) {
            if (!t.installed) {
                var a = Xe(e);
                i && (a.options.props.defaultOptions.default = function() {
                    return i
                }), s.component(Y.SwiperComponent, a), s.component(Y.SwiperSlideComponent, Ve), s.directive(Y.SwiperDirective, Ne(e, i)), t.installed = !0
            }
        };
        return t
    };

function pi(e) {
    var t;
    return t = {
        version: "4.1.1",
        install: ci(e),
        directive: Ne(e)
    }, t[Y.SwiperComponent] = Xe(e), t[Y.SwiperSlideComponent] = Ve, t
}
var ae = pi(X);
ae.version;
ae.install;
var ui = ae.directive,
    fi = ae.Swiper,
    hi = ae.SwiperSlide,
    mi = function() {
        var e = this,
            t = e.$createElement,
            s = e._self._c || t;
        return s("svg", {
            class: [e.block + "__toggleArrow", {
                "-rotated": e.rotated
            }],
            attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 28 28",
                fill: "none",
                "aria-hidden": "true"
            }
        }, [s("g", {
            attrs: {
                transform: e.rotated ? "translate(28 0) scale(-1 1)" : void 0
            }
        }, [s("rect", {
            attrs: {
                x: "0.625",
                y: "0.625",
                width: "26.75",
                height: "26.75",
                rx: "13.375",
                stroke: "currentColor",
                "stroke-width": "1.25",
                fill: "none"
            }
        }), s("path", {
            attrs: {
                d: "M20.3568 14.2286C20.6009 13.9845 20.6009 13.5888 20.3568 13.3447L16.3793 9.3672C16.1353 9.12313 15.7395 9.12313 15.4955 9.3672C15.2514 9.61128 15.2514 10.007 15.4955 10.2511L19.031 13.7866L15.4955 17.3222C15.2514 17.5662 15.2514 17.962 15.4955 18.206C15.7395 18.4501 16.1353 18.4501 16.3793 18.206L20.3568 14.2286ZM7.66016 13.7866L7.66016 14.4116L19.9149 14.4116L19.9149 13.7866L19.9149 13.1616L7.66016 13.1616L7.66016 13.7866Z",
                fill: "currentColor"
            }
        })])])
    },
    gi = [];
const vi = {
        props: {
            block: {
                type: String,
                required: !1,
                default: "toggle"
            },
            rotated: {
                type: Boolean,
                required: !1,
                default: !1
            }
        }
    },
    Le = {};
var wi = Ae(vi, mi, gi, !1, bi, null, null, null);

function bi(e) {
    for (let t in Le) this[t] = Le[t]
}
var yi = function() {
        return wi.exports
    }(),
    xi = function() {
        var e = this,
            t = e.$createElement,
            s = e._self._c || t;
        return s("div", {
            class: e.block + "__sliderWrapper"
        }, [s("div", {
            ref: "slider",
            class: e.block + "__slider"
        }, [s("swiper", {
            ref: "carousel",
            class: {
                "has-overflow": e.hasOverflow
            },
            attrs: {
                options: e.carouselOptions
            },
            on: {
                slideChange: e.watchDisabledClass
            }
        }, e._l(e.numberOfSlides, function(i) {
            return s("swiper-slide", {
                key: i
            }, [s("div", {
                class: e.block + "__listItem"
            }, [e._t(i)], 2)])
        }), 1), s("div", {
            ref: "scrollbar",
            staticClass: "swiper-scrollbar"
        }), e.alternateArrows ? s("div", {
            class: e.block + "__buttons"
        }, [s("button", {
            ref: "prevButton",
            class: e.block + "__button arrowButton -previous",
            on: {
                click: function(i) {
                    return e.carousel.slidePrev()
                }
            }
        }, [s("IconSliderArrow", {
            attrs: {
                block: e.block,
                fill: "currentColor",
                title: "Previous Slide",
                direction: "left",
                rotated: !0
            }
        })], 1), s("button", {
            ref: "nextButton",
            class: e.block + "__button arrowButton -next",
            on: {
                click: function(i) {
                    return e.carousel.slideNext()
                }
            }
        }, [s("IconSliderArrow", {
            attrs: {
                block: e.block,
                fill: "currentColor",
                title: "Next Slide",
                direction: "right"
            }
        })], 1)]) : s("div", {
            class: e.block + "__buttons"
        }, [s("button", {
            ref: "button",
            class: e.block + "__button -next",
            on: {
                click: function(i) {
                    return e.carousel.slideNext()
                }
            }
        }, [s("IconToggleArrow", {
            attrs: {
                block: e.block,
                fill: "currentColor",
                title: "Next Slide",
                direction: "right"
            }
        })], 1), s("button", {
            ref: "button",
            class: e.block + "__button -previous",
            on: {
                click: function(i) {
                    return e.carousel.slidePrev()
                }
            }
        }, [s("IconToggleArrow", {
            attrs: {
                block: e.block,
                fill: "currentColor",
                title: "Previous Slide",
                direction: "left"
            }
        })], 1)])], 1)])
    },
    Si = [];
const Ei = {
        props: {
            options: {
                type: Object,
                required: !1,
                default: () => ({
                    navigation: {}
                })
            },
            numberOfSlides: {
                type: Number,
                required: !0
            },
            disabled: {
                type: Boolean,
                default: !1,
                required: !1
            },
            block: {
                type: String,
                required: !1,
                default: "testimonials"
            },
            alternateArrows: {
                type: Boolean,
                required: !1,
                default: !1
            },
            delay: {
                type: Boolean,
                required: !1,
                default: !1
            }
        },
        components: {
            Swiper: fi,
            SwiperSlide: hi,
            IconToggleArrow: Ye,
            IconSliderArrow: yi
        },
        directives: {
            swiper: ui
        },
        computed: {
            showCarousel() {
                return this.numberOfSlides > 1
            },
            carousel() {
                return this.$refs.carousel.$swiper
            },
            carouselOptions() {
                return this.options
            },
            hasOverflow() {
                return this.numberOfSlides > 3
            }
        },
        watch: {
            disabled(e) {
                e ? this.$nextTick(() => {
                    this.carousel.disable()
                }) : this.$nextTick(() => {
                    this.carousel.enable()
                })
            }
        },
        methods: {
            hideDuplicates() {
                this.$nextTick(() => {
                    this.carousel.slides.forEach(e => {
                        e.classList.contains("swiper-slide-duplicate") && this.removeChildrenFromTabIndex(e)
                    })
                })
            },
            removeChildrenFromTabIndex(e) {
                e.querySelectorAll("a").forEach(i => i.tabIndex = -1), e.querySelectorAll("button").forEach(i => i.tabIndex = -1)
            },
            watchDisabledClass() {
                this.$nextTick(() => {
                    let e = this.$refs.prevButton,
                        t = this.$refs.nextButton;
                    !e || !t || (this.carousel.isBeginning ? e.classList.add("swiper-button-disabled") : e.classList.remove("swiper-button-disabled"), this.carousel.isEnd ? t.classList.add("swiper-button-disabled") : t.classList.remove("swiper-button-disabled"))
                })
            }
        },
        mounted() {
            _e.exports.nextTick(() => {
                this.delay && setTimeout(() => {
                    this.$refs.carousel.$swiper.autoplay.run()
                }, 1500), this.watchDisabledClass()
            })
        }
    },
    De = {};
var Ti = Ae(Ei, xi, Si, !1, Ci, null, null, null);

function Ci(e) {
    for (let t in De) this[t] = De[t]
}
var Mi = function() {
    return Ti.exports
}();
export {
    Mi as
    default
};