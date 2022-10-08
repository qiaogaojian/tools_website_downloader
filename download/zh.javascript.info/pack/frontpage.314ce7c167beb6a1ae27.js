var frontpage = function(e) {
var t = {};
function n(r) {
if (t[r]) return t[r].exports;
var o = t[r] = {
i: r,
l: !1,
exports: {}
};
return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
}
return n.m = e, n.c = t, n.d = function(e, t, r) {
n.o(e, t) || Object.defineProperty(e, t, {
enumerable: !0,
get: r
});
}, n.r = function(e) {
"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
value: "Module"
}), Object.defineProperty(e, "__esModule", {
value: !0
});
}, n.t = function(e, t) {
if (1 & t && (e = n(e)), 8 & t) return e;
if (4 & t && "object" == typeof e && e && e.__esModule) return e;
var r = Object.create(null);
if (n.r(r), Object.defineProperty(r, "default", {
enumerable: !0,
value: e
}), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o, function(t) {
return e[t];
}.bind(null, o));
return r;
}, n.n = function(e) {
var t = e && e.__esModule ? function() {
return e.default;
} : function() {
return e;
};
return n.d(t, "a", t), t;
}, n.o = function(e, t) {
return Object.prototype.hasOwnProperty.call(e, t);
}, n.p = "/pack/", n(n.s = 5);
}([ function(e, t) {
e.exports = {
lang: "zh",
currency: {
code: "CNY",
sign: "元"
},
env: "production",
ordersMail: "orders@javascript.info",
providers: [ {
name: "Facebook",
id: "facebook"
}, {
name: "Google",
id: "google"
}, {
name: "Github",
id: "github"
} ],
stripeKey: "pk_live_51HXm0nFjeNqw1p5a3mjFxSeNHh8OL94IyGcp3PHbZVoNuYUYjlM57YtZMIAM1zrEd1F6WIKfFs67KbTemRdNIySo00KfWS1yhr",
lookatCodeUrlBase: "https://lookatcode.com"
};
}, function(e, t, n) {
"use strict";
const r = new (n(12))("en");
let o = console.error;
function s(e) {
return r.hasPhrase(i, e) || o("No such phrase", e), r.t(i, ...arguments);
}
e.exports = s;
const i = n(0).lang;
"en" !== i && r.setFallback(i, "en"), r.add = (...e) => r.addPhrase(i, ...e), s.i18n = r;
}, function(e, t, n) {
"use strict";
n.r(t), n.d(t, "init", (function() {
return s;
})), n.d(t, "Info", (function() {
return c;
})), n.d(t, "Warning", (function() {
return a;
})), n.d(t, "Success", (function() {
return u;
})), n.d(t, "Error", (function() {
return l;
}));
let r = n(10);
class o {
constructor(e = {}) {
this.notifications = [], this.verticalSpace = e.verticalSpace || 8;
}
register(e) {
this.notifications.unshift(e), setTimeout((() => this.recalculate()), 20);
}
unregister(e) {
let t = this.notifications.indexOf(e);
this.notifications.splice(t, 1), this.recalculate();
}
recalculate() {
let e = this.verticalSpace;
this.notifications.forEach((t => {
t.top = e, e += t.height + this.verticalSpace;
}));
}
}
function s(e) {
window.notificationManager || (window.notificationManager = new o(e));
}
class i {
constructor(e, t, n) {
let r = '<div class="notification notification_popup notification_'.concat(t, '">\n    <div class="notification__content">').concat(e, '</div>\n    <button title="Закрыть" class="notification__close"></button></div>');
switch (document.body.insertAdjacentHTML("beforeEnd", r), this.elem = document.body.lastElementChild, 
n) {
case void 0:
this.timeout = this.TIMEOUT_DEFAULT;
break;

case "slow":
this.timeout = this.TIMEOUT_SLOW;
break;

case "fast":
this.timeout = this.TIMEOUT_FAST;
break;

default:
this.timeout = n;
}
window.notificationManager.register(this), this.setupCloseHandler(), this.setupCloseTimeout();
}
get TIMEOUT_DEFAULT() {
return 3e3;
}
get TIMEOUT_SLOW() {
return 5e3;
}
get TIMEOUT_FAST() {
return 1500;
}
close() {
this.elem.parentNode && (this.elem.remove(), window.notificationManager.unregister(this));
}
setupCloseHandler() {
this.delegate(".notification__close", "click", (() => this.close()));
}
setupCloseTimeout() {
this.timeout && setTimeout((() => this.close()), this.timeout);
}
get height() {
return this.elem.offsetHeight;
}
set top(e) {
this.elem.style.transform = "translateY(" + e + "px)";
}
}
r.delegateMixin(i.prototype);
class c extends i {
constructor(e, t) {
super(e, "info", t);
}
}
class a extends i {
constructor(e, t) {
super(e, "warning", t);
}
}
class u extends i {
constructor(e, t) {
super(e, "success", t);
}
}
class l extends i {
constructor(e, t) {
super(e, "error", t);
}
get TIMEOUT_DEFAULT() {
return 5e3;
}
}
}, function(e, t, n) {
let r = n(4);
e.exports = class {
constructor(e) {
this.elem = e, this.renderPromise = new Promise(((e, t) => {
this.renderPromiseResolve = e, this.renderPromiseReject = t;
})), this.render();
}
async render() {
if (!window.RECAPTCHA_ID) return;
if (void 0 !== this.widgetId) return;
await r();
let e = document.createElement("div");
this.elem.append(e), this.widgetId = grecaptcha.render(e, {
sitekey: window.RECAPTCHA_ID,
size: "invisible",
callback: this.renderPromiseResolve
});
}
async execute() {
if (!window.RECAPTCHA_ID) return "";
await this.render();
let e = grecaptcha.getResponse(this.widgetId);
return e || (grecaptcha.execute(this.widgetId), this.renderPromise);
}
async validateForm(e) {
if (!window.RECAPTCHA_ID) return;
let t = await this.execute(), n = e.elements["g-recaptcha-response"];
n || (n = document.createElement("input"), n.name = "g-recaptcha-response", n.type = "hidden", 
e.append(n)), n.value = t;
}
};
}, function(e, t) {
let n;
e.exports = async function() {
if (window.RECAPTCHA_ID) return n || (n = new Promise(((e, t) => {
window.recaptchaCallback = e;
let n = document.createElement("script");
n.src = "https://www.google.com/recaptcha/api.js?onload=recaptchaCallback&render=explicit", 
n.onerror = t, document.head.appendChild(n);
})), n);
};
}, function(e, t, n) {
n(6), e.exports = n(26);
}, function(e, t, n) {
n(7).initNewsletterForm(), function() {
function e(e, t, n) {
let r = e.length;
for (;--r && window.scrollY + n < e[r].offsetTop; ) ;
t.forEach((e => e.classList.remove("active"))), t[r].classList.add("active");
}
document.addEventListener("click", (e => {
if (e.target.closest(".frontpage-content")) {
let t, n = e.target.closest(".tabs__menu-button");
if (!n) return;
e.preventDefault(), t = document.getElementsByClassName("tabs__menu-button"), document.querySelector(n.getAttribute("href")).scrollIntoView({
behavior: "smooth"
});
}
})), document.addEventListener("DOMContentLoaded", (() => {
const t = document.querySelectorAll(".tabs__content"), n = document.querySelector(".tabs__menu"), r = n.querySelectorAll(".tabs__menu-button");
new IntersectionObserver((e => {
e[0].target.classList.toggle("sticky", !e[0].isIntersecting);
}), {
rootMargin: "-".concat(n.offsetHeight + 1, "px"),
threshold: 0
}).observe(n), e(t, r, n.offsetHeight), window.addEventListener("scroll", (() => e(t, r, n.offsetHeight)));
}));
}();
}, function(e, t, n) {
const r = n(8), o = n(9), s = n(2), i = n(20), {Recaptcha: c} = n(22), a = n(1), u = n(0).lang;
function l(e, t) {
if (!e.elements.email.value) return;
const n = e.elements.slug;
let i, c = [ ...n.querySelectorAll("option:checked") ].map((e => e.value));
if (c.length || (c = n.value), e.elements["subscribe-email"] && (i = !0), !i && !c.length) return void new s.Error(a("newsletter.client.choose_newsletter"));
const u = {
email: e.elements.email.value,
slug: c
};
e.elements["g-recaptcha-response"] && (u["g-recaptcha-response"] = e.elements["g-recaptcha-response"].value), 
i && (u.replace = !0);
const l = o({
method: "POST",
url: e.action,
body: u
}), f = e.querySelector('[type="submit"]'), h = new r({
elem: f,
size: "small",
elemClass: "button_loading"
});
h.start(), f.disabled = !0, l.addEventListener("loadend", (() => {
h.stop(), f.disabled = !1;
})), l.addEventListener("success", (function(n) {
if (200 == this.status) {
new s.Success(n.result.message, "slow");
let r = e.elements.gaEvent && JSON.parse(e.elements.gaEvent.value);
r && window.ga("send", "event", r), t && t();
} else new s.Error(n.result.message);
}));
}
a.i18n.add("newsletter.client", n(24)("./" + u + ".yml")), t.initNewsletterForm = function() {
let e = document.querySelectorAll("[data-newsletter-subscribe-form]");
for (let t of e) {
const e = "hidden" === t.elements.email.type, n = t.querySelector(".multiselect");
if (n) {
const r = new i({
elem: n
}), o = t.querySelector('button[type="submit"]'), s = o.querySelector("span");
t.elements.slug && t.elements.slug.addEventListener("change", (() => {
o.disabled = !r.getValues().length && !e, !r.getValues().length && e ? s.textContent = a("site.subscribe.button_unsubscribe") : s.textContent = a("site.subscribe.button");
}));
}
let r = new c(t);
t.onsubmit = async function(e) {
e.preventDefault(), await r.validateForm(t), l(t);
};
}
}, t.submitSubscribeForm = l;
}, function(e, t) {
function n(e) {
if (e = e || {}, this.elem = e.elem, this.size = e.size || "medium", this.class = e.class ? " " + e.class : "", 
this.elemClass = e.elemClass, "medium" != this.size && "small" != this.size && "large" != this.size) throw new Error("Unsupported size: " + this.size);
this.elem || (this.elem = document.createElement("div"));
}
n.prototype.start = function() {
this.elemClass && this.elem.classList.toggle(this.elemClass), this.elem.insertAdjacentHTML("beforeend", '<span class="spinner spinner_active spinner_' + this.size + this.class + '"><span class="spinner__dot spinner__dot_1"></span><span class="spinner__dot spinner__dot_2"></span><span class="spinner__dot spinner__dot_3"></span></span>');
}, n.prototype.stop = function() {
let e = this.elem.querySelector(".spinner");
e && (e.remove(), this.elemClass && this.elem.classList.toggle(this.elemClass));
}, window.Spinner = n, e.exports = n;
}, function(e, t, n) {
let r = n(2), o = n(11);
const s = n(0).lang, i = n(1);
i.i18n.add("", n(16)("./" + s + ".yml")), i.i18n.add("error.network", n(18)("./" + s + ".yml")), 
document.addEventListener("xhrfail", (function(e) {
new r.Error(e.reason);
})), e.exports = function(e) {
let t = new XMLHttpRequest, n = e.method || "GET", r = e.body, s = e.url;
t.open(n, s, !e.sync), t.method = n;
let c = o();
c && !e.skipCsrf && t.setRequestHeader("X-XSRF-TOKEN", c), e.responseType && (t.responseType = e.responseType), 
"[object Object]" == {}.toString.call(r) && (t.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), 
r = JSON.stringify(r)), e.noDocumentEvents || (t.addEventListener("loadstart", (e => {
t.timeStart = Date.now();
let n = u("xhrstart", e);
document.dispatchEvent(n);
})), t.addEventListener("loadend", (e => {
let t = u("xhrend", e);
document.dispatchEvent(t);
})), t.addEventListener("success", (e => {
let t = u("xhrsuccess", e);
t.result = e.result, document.dispatchEvent(t);
})), t.addEventListener("fail", (e => {
let t = u("xhrfail", e);
t.reason = e.reason, document.dispatchEvent(t);
}))), e.raw || t.setRequestHeader("Accept", "application/json"), t.setRequestHeader("X-Requested-With", "XMLHttpRequest");
let a = e.normalStatuses || [ 200 ];
function u(e, t) {
let n = new CustomEvent(e);
return n.originalEvent = t, n;
}
function l(e, n) {
let r = u("fail", n);
r.reason = e, t.dispatchEvent(r);
}
return t.addEventListener("error", (e => {
l(i("error.network.server_connection_error"), e);
})), t.addEventListener("timeout", (e => {
l(i("error.network.server_request_timeout"), e);
})), t.addEventListener("abort", (e => {
l(i("error.network.request_aborted"), e);
})), t.addEventListener("load", (n => {
if (!t.status) return void l(i("error.network.no_response"), n);
if (!a.includes(t.status)) return void l(i("error.network.server_error", {
status: t.status
}), n);
let r = e.responseType && "text" !== e.responseType ? t.response : t.responseText;
if ((t.getResponseHeader("Content-Type") || "").match(/^application\/json/) || e.json) try {
r = JSON.parse(r);
} catch (n) {
return void l(i("error.network.invalid_format"), n);
}
!function(e, n) {
let r = u("success", n);
r.result = e, t.dispatchEvent(r);
}(r, n);
})), setTimeout((function() {
t.send(r);
}), 0), t;
};
}, function(e, t) {
function n(e, t, n, r, o) {
e.addEventListener(n, (function(e) {
let n = function(e, t) {
let n = e.target;
for (;n; ) {
if (n.matches(t)) return n;
if (n == e.currentTarget) break;
n = n.parentElement;
}
return null;
}(e, t);
e.delegateTarget = n, n && r.call(o || this, e);
}));
}
n.delegateMixin = function(e) {
e.delegate = function(e, t, r) {
n(this.elem, e, t, r, this);
};
}, e.exports = n;
}, function(e, t) {
e.exports = function() {
let e = document.cookie.match(/XSRF-TOKEN=([\w-]+)/);
return e ? e[1] : null;
};
}, function(e, t, n) {
e.exports = n(13);
}, function(e, t, n) {
"use strict";
var r = n(14), o = n(15);
function s(e) {
return Object.prototype.toString.call(e);
}
function i(e) {
return "[object String]" === s(e);
}
function c(e) {
return !isNaN(e) && isFinite(e);
}
function a(e) {
return !0 === e || !1 === e;
}
function u(e) {
return "[object Object]" === s(e);
}
var l = Array.isArray || function(e) {
return "[object Array]" === s(e);
}, f = Array.prototype.forEach;
function h(e, t, n) {
if (null !== e) if (f && e.forEach === f) e.forEach(t, n); else if (e.length === +e.length) for (var r = 0, o = e.length; r < o; r += 1) t.call(n, e[r], r, e); else for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.call(n, e[s], s, e);
}
var p = /%[sdj%]/g;
function d(e) {
var t = 1, n = arguments, r = n.length, o = String(e).replace(p, (function(e) {
if ("%%" === e) return "%";
if (t >= r) return e;
switch (e) {
case "%s":
return String(n[t++]);

case "%d":
return Number(n[t++]);

case "%j":
return JSON.stringify(n[t++]);

default:
return e;
}
}));
return o;
}
function m(e) {
var t = {};
return h(e || {}, (function(e, n) {
e && "object" == typeof e ? h(m(e), (function(e, r) {
t[n + "." + r] = e;
})) : t[n] = e;
})), t;
}
var v = "#@$";
function g(e, t) {
return e + v + t;
}
function _(e, t, n) {
var r = g(t, n), o = e._storage;
if (o.hasOwnProperty(r)) return r;
if (t === e._defaultLocale) return null;
var s = e._fallbacks_cache;
if (s.hasOwnProperty(r)) return s[r];
for (var i, c = e._fallbacks[t] || [ e._defaultLocale ], a = 0, u = c.length; a < u; a++) if (i = g(c[a], n), 
o.hasOwnProperty(i)) return s[r] = i, s[r];
return s[r] = null, null;
}
function b(e, t, n) {
var r = o.indexOf(e, t);
return -1 === r ? d('[pluralizer for "%s" locale not found]', e) : void 0 === n[r] ? d('[plural form %d ("%s") not found in translation]', r, o.forms(e)[r]) : n[r];
}
function y(e) {
if (!(this instanceof y)) return new y(e);
this._defaultLocale = e ? String(e) : "en", this._fallbacks = {}, this._fallbacks_cache = {}, 
this._storage = {}, this._plurals_cache = {};
}
y.prototype.addPhrase = function(e, t, n, r) {
var o, s = this;
if (a(r)) o = r ? 1 / 0 : 0; else if (c(r)) {
if ((o = Math.floor(r)) < 0) throw new TypeError("Invalid flatten level (should be >= 0).");
} else o = 1 / 0;
if (u(n) && o > 0) return h(n, (function(n, r) {
s.addPhrase(e, (t ? t + "." : "") + r, n, o - 1);
})), this;
if (i(n)) this._storage[g(e, t)] = {
translation: n,
locale: e,
raw: !1
}; else {
if (!(l(n) || c(n) || a(n) || 0 === o && u(n))) throw new TypeError("Invalid translation - [String|Object|Array|Number|Boolean] expected.");
this._storage[g(e, t)] = {
translation: n,
locale: e,
raw: !0
};
}
return s._fallbacks_cache = {}, this;
}, y.prototype.setFallback = function(e, t) {
var n = this._defaultLocale;
if (n === e) throw new Error("Default locale can't have fallbacks");
var r = l(t) ? t.slice() : [ t ];
return r[r.length - 1] !== n && r.push(n), this._fallbacks[e] = r, this._fallbacks_cache = {}, 
this;
};
var w = /#\{|\(\(|\\\\/;
y.prototype.translate = function(e, t, n) {
var o, a = _(this, e, t);
return a ? (o = this._storage[a]).raw ? o.translation : (o.hasOwnProperty("compiled") || (o.compiled = function(e, t, n) {
var o, s, i, c, a, u;
return w.test(t) ? 1 === (o = r.parse(t)).length && "literal" === o[0].type ? o[0].text : (e._plurals_cache[n] || (e._plurals_cache[n] = new y(n)), 
u = e._plurals_cache[n], (s = []).push([ 'var str = "", strict, strict_exec, forms, forms_exec, plrl, cache, loc, loc_plzr, anchor;' ]), 
s.push("params = flatten(params);"), h(o, (function(e) {
if ("literal" !== e.type) {
if ("variable" === e.type) return i = e.anchor, void s.push(d('str += ("undefined" === typeof (params[%j])) ? "[missed variable: %s]" : params[%j];', i, i, i));
if ("plural" !== e.type) throw new Error("Unknown node type");
i = e.anchor, c = {}, h(e.strict, (function(t, o) {
var s = r.parse(t);
if (1 === s.length && "literal" === s[0].type) return c[o] = !1, void (e.strict[o] = s[0].text);
c[o] = !0, u.hasPhrase(n, t, !0) || u.addPhrase(n, t, t);
})), a = {}, h(e.forms, (function(t, o) {
var s, i = r.parse(t);
if (1 === i.length && "literal" === i[0].type) return s = i[0].text, e.forms[o] = s, 
void (a[s] = !1);
a[t] = !0, u.hasPhrase(n, t, !0) || u.addPhrase(n, t, t);
})), s.push(d("loc = %j;", n)), s.push(d("loc_plzr = %j;", n.split(/[-_]/)[0])), 
s.push(d("anchor = params[%j];", i)), s.push(d("cache = this._plurals_cache[loc];")), 
s.push(d("strict = %j;", e.strict)), s.push(d("strict_exec = %j;", c)), s.push(d("forms = %j;", e.forms)), 
s.push(d("forms_exec = %j;", a)), s.push("if (+(anchor) != anchor) {"), s.push(d('  str += "[invalid plurals amount: %s(" + anchor + ")]";', i)), 
s.push("} else {"), s.push("  if (strict[anchor] !== undefined) {"), s.push("    plrl = strict[anchor];"), 
s.push("    str += strict_exec[anchor] ? cache.t(loc, plrl, params) : plrl;"), s.push("  } else {"), 
s.push("    plrl = pluralizer(loc_plzr, +anchor, forms);"), s.push("    str += forms_exec[plrl] ? cache.t(loc, plrl, params) : plrl;"), 
s.push("  }"), s.push("}");
} else s.push(d("str += %j;", e.text));
})), s.push("return str;"), new Function("params", "flatten", "pluralizer", s.join("\n"))) : t;
}(this, o.translation, o.locale)), "[object Function]" !== s(o.compiled) ? o.compiled : ((c(n) || i(n)) && (n = {
count: n,
value: n
}), o.compiled.call(this, n, m, b))) : e + ": No translation for [" + t + "]";
}, y.prototype.hasPhrase = function(e, t, n) {
return n ? this._storage.hasOwnProperty(g(e, t)) : !!_(this, e, t);
}, y.prototype.getLocale = function(e, t, n) {
if (n) return this._storage.hasOwnProperty(g(e, t)) ? e : null;
var r = _(this, e, t);
return r ? r.split(v, 2)[0] : null;
}, y.prototype.t = y.prototype.translate, y.prototype.stringify = function(e) {
var t = this, n = {};
h(this._storage, (function(e, t) {
n[t.split(v)[1]] = !0;
}));
var r = {};
h(n, (function(n, o) {
var s = _(t, e, o);
if (s) {
var i = t._storage[s].locale;
r[i] || (r[i] = {}), r[i][o] = t._storage[s].translation;
}
}));
var o = {
fallback: {},
locales: r
}, s = (t._fallbacks[e] || []).slice(0, -1);
return s.length && (o.fallback[e] = s), JSON.stringify(o);
}, y.prototype.load = function(e) {
var t = this;
return i(e) && (e = JSON.parse(e)), h(e.locales, (function(e, n) {
h(e, (function(e, r) {
t.addPhrase(n, r, e, 0);
}));
})), h(e.fallback, (function(e, n) {
t.setFallback(n, e);
})), this;
}, e.exports = y;
}, function(e, t) {
e.exports = function() {
function e(e, t, n, r, o, s) {
this.message = e, this.expected = t, this.found = n, this.offset = r, this.line = o, 
this.column = s, this.name = "SyntaxError";
}
return function(e, t) {
function n() {
this.constructor = e;
}
n.prototype = t.prototype, e.prototype = new n;
}(e, Error), {
SyntaxError: e,
parse: function(t) {
var n, r = arguments.length > 1 ? arguments[1] : {}, o = {}, s = {
start: le
}, i = le, c = o, a = "((", u = {
type: "literal",
value: "((",
description: '"(("'
}, l = "))", f = {
type: "literal",
value: "))",
description: '"))"'
}, h = null, p = function(e, t) {
return {
type: "plural",
forms: we(e),
strict: Fe(e),
anchor: t || "count"
};
}, d = "|", m = {
type: "literal",
value: "|",
description: '"|"'
}, v = function(e, t) {
return [ e ].concat(t);
}, g = function(e) {
return [ e ];
}, _ = "=", b = {
type: "literal",
value: "=",
description: '"="'
}, y = /^[0-9]/, w = {
type: "class",
value: "[0-9]",
description: "[0-9]"
}, F = " ", x = {
type: "literal",
value: " ",
description: '" "'
}, k = function(e, t) {
return {
strict: e.join(""),
text: t.join("")
};
}, E = function() {
return {
text: ie()
};
}, C = "\\", A = {
type: "literal",
value: "\\",
description: '"\\\\"'
}, j = /^[\\|)(]/, S = {
type: "class",
value: "[\\\\|)(]",
description: "[\\\\|)(]"
}, O = function(e) {
return e;
}, T = void 0, L = {
type: "any",
description: "any character"
}, P = function() {
return ie();
}, z = ":", q = {
type: "literal",
value: ":",
description: '":"'
}, M = function(e) {
return e;
}, D = "#{", R = {
type: "literal",
value: "#{",
description: '"#{"'
}, N = "}", H = {
type: "literal",
value: "}",
description: '"}"'
}, I = function(e) {
return {
type: "variable",
anchor: e
};
}, U = ".", V = {
type: "literal",
value: ".",
description: '"."'
}, B = function() {
return ie();
}, J = /^[a-zA-Z_$]/, $ = {
type: "class",
value: "[a-zA-Z_$]",
description: "[a-zA-Z_$]"
}, Z = /^[a-zA-Z0-9_$]/, K = {
type: "class",
value: "[a-zA-Z0-9_$]",
description: "[a-zA-Z0-9_$]"
}, X = function(e) {
return e;
}, Y = function(e) {
return {
type: "literal",
text: e.join("")
};
}, G = /^[\\#()|]/, W = {
type: "class",
value: "[\\\\#()|]",
description: "[\\\\#()|]"
}, Q = 0, ee = 0, te = 0, ne = {
line: 1,
column: 1,
seenCR: !1
}, re = 0, oe = [], se = 0;
if ("startRule" in r) {
if (!(r.startRule in s)) throw new Error("Can't start parsing from rule \"" + r.startRule + '".');
i = s[r.startRule];
}
function ie() {
return t.substring(ee, Q);
}
function ce(e) {
return te !== e && (te > e && (te = 0, ne = {
line: 1,
column: 1,
seenCR: !1
}), function(e, n, r) {
var o, s;
for (o = n; o < r; o++) "\n" === (s = t.charAt(o)) ? (e.seenCR || e.line++, e.column = 1, 
e.seenCR = !1) : "\r" === s || "\u2028" === s || "\u2029" === s ? (e.line++, e.column = 1, 
e.seenCR = !0) : (e.column++, e.seenCR = !1);
}(ne, te, e), te = e), ne;
}
function ae(e) {
Q < re || (Q > re && (re = Q, oe = []), oe.push(e));
}
function ue(n, r, o) {
var s = ce(o), i = o < t.length ? t.charAt(o) : null;
return null !== r && function(e) {
var t = 1;
for (e.sort((function(e, t) {
return e.description < t.description ? -1 : e.description > t.description ? 1 : 0;
})); t < e.length; ) e[t - 1] === e[t] ? e.splice(t, 1) : t++;
}(r), new e(null !== n ? n : function(e, t) {
var n, r = new Array(e.length);
for (n = 0; n < e.length; n++) r[n] = e[n].description;
return "Expected " + (e.length > 1 ? r.slice(0, -1).join(", ") + " or " + r[e.length - 1] : r[0]) + " but " + (t ? '"' + function(e) {
function t(e) {
return e.charCodeAt(0).toString(16).toUpperCase();
}
return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\f/g, "\\f").replace(/\r/g, "\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g, (function(e) {
return "\\x0" + t(e);
})).replace(/[\x10-\x1F\x80-\xFF]/g, (function(e) {
return "\\x" + t(e);
})).replace(/[\u0180-\u0FFF]/g, (function(e) {
return "\\u0" + t(e);
})).replace(/[\u1080-\uFFFF]/g, (function(e) {
return "\\u" + t(e);
}));
}(t) + '"' : "end of input") + " found.";
}(r, i), r, i, o, s.line, s.column);
}
function le() {
var e, t;
for (e = [], (t = be()) === o && (t = fe()) === o && (t = ve()); t !== o; ) e.push(t), 
(t = be()) === o && (t = fe()) === o && (t = ve());
return e;
}
function fe() {
var e, n, r, s, i;
return e = Q, t.substr(Q, 2) === a ? (n = a, Q += 2) : (n = o, 0 === se && ae(u)), 
n !== o && (r = he()) !== o ? (t.substr(Q, 2) === l ? (s = l, Q += 2) : (s = o, 
0 === se && ae(f)), s !== o ? ((i = me()) === o && (i = h), i !== o ? (ee = e, e = n = p(r, i)) : (Q = e, 
e = c)) : (Q = e, e = c)) : (Q = e, e = c), e;
}
function he() {
var e, n, r, s;
return e = Q, (n = pe()) !== o ? (124 === t.charCodeAt(Q) ? (r = d, Q++) : (r = o, 
0 === se && ae(m)), r !== o && (s = he()) !== o ? (ee = e, e = n = v(n, s)) : (Q = e, 
e = c)) : (Q = e, e = c), e === o && (e = Q, (n = pe()) !== o && (ee = e, n = g(n)), 
e = n), e;
}
function pe() {
var e, n, r, s, i, a;
if (e = Q, 61 === t.charCodeAt(Q) ? (n = _, Q++) : (n = o, 0 === se && ae(b)), n !== o) {
if (r = [], y.test(t.charAt(Q)) ? (s = t.charAt(Q), Q++) : (s = o, 0 === se && ae(w)), 
s !== o) for (;s !== o; ) r.push(s), y.test(t.charAt(Q)) ? (s = t.charAt(Q), Q++) : (s = o, 
0 === se && ae(w)); else r = c;
if (r !== o) if (32 === t.charCodeAt(Q) ? (s = F, Q++) : (s = o, 0 === se && ae(x)), 
s === o && (s = h), s !== o) {
if (i = [], (a = de()) !== o) for (;a !== o; ) i.push(a), a = de(); else i = c;
i !== o ? (ee = e, e = n = k(r, i)) : (Q = e, e = c);
} else Q = e, e = c; else Q = e, e = c;
} else Q = e, e = c;
if (e === o) {
if (e = Q, n = [], (r = de()) !== o) for (;r !== o; ) n.push(r), r = de(); else n = c;
n !== o && (ee = e, n = E()), e = n;
}
return e;
}
function de() {
var e, n, r;
return e = Q, 92 === t.charCodeAt(Q) ? (n = C, Q++) : (n = o, 0 === se && ae(A)), 
n !== o ? (j.test(t.charAt(Q)) ? (r = t.charAt(Q), Q++) : (r = o, 0 === se && ae(S)), 
r !== o ? (ee = e, e = n = O(r)) : (Q = e, e = c)) : (Q = e, e = c), e === o && (e = Q, 
n = Q, se++, 124 === t.charCodeAt(Q) ? (r = d, Q++) : (r = o, 0 === se && ae(m)), 
r === o && (t.substr(Q, 2) === l ? (r = l, Q += 2) : (r = o, 0 === se && ae(f))), 
se--, r === o ? n = T : (Q = n, n = c), n !== o ? (t.length > Q ? (r = t.charAt(Q), 
Q++) : (r = o, 0 === se && ae(L)), r !== o ? (ee = e, e = n = P()) : (Q = e, e = c)) : (Q = e, 
e = c)), e;
}
function me() {
var e, n, r;
return e = Q, 58 === t.charCodeAt(Q) ? (n = z, Q++) : (n = o, 0 === se && ae(q)), 
n !== o && (r = ge()) !== o ? (ee = e, e = n = M(r)) : (Q = e, e = c), e;
}
function ve() {
var e, n, r, s;
return e = Q, t.substr(Q, 2) === D ? (n = D, Q += 2) : (n = o, 0 === se && ae(R)), 
n !== o && (r = ge()) !== o ? (125 === t.charCodeAt(Q) ? (s = N, Q++) : (s = o, 
0 === se && ae(H)), s !== o ? (ee = e, e = n = I(r)) : (Q = e, e = c)) : (Q = e, 
e = c), e;
}
function ge() {
var e, n, r, s;
if (e = Q, _e() !== o) if (46 === t.charCodeAt(Q) ? (n = U, Q++) : (n = o, 0 === se && ae(V)), 
n !== o) {
if (r = [], (s = ge()) !== o) for (;s !== o; ) r.push(s), s = ge(); else r = c;
r !== o ? (ee = e, e = B()) : (Q = e, e = c);
} else Q = e, e = c; else Q = e, e = c;
return e === o && (e = _e()), e;
}
function _e() {
var e, n, r, s;
if (e = Q, J.test(t.charAt(Q)) ? (n = t.charAt(Q), Q++) : (n = o, 0 === se && ae($)), 
n !== o) {
for (r = [], Z.test(t.charAt(Q)) ? (s = t.charAt(Q), Q++) : (s = o, 0 === se && ae(K)); s !== o; ) r.push(s), 
Z.test(t.charAt(Q)) ? (s = t.charAt(Q), Q++) : (s = o, 0 === se && ae(K));
r !== o ? (ee = e, e = n = P()) : (Q = e, e = c);
} else Q = e, e = c;
return e;
}
function be() {
var e, t, n, r, s;
if (e = Q, t = [], n = Q, r = Q, se++, (s = fe()) === o && (s = ve()), se--, s === o ? r = T : (Q = r, 
r = c), r !== o && (s = ye()) !== o ? (ee = n, n = r = X(s)) : (Q = n, n = c), n !== o) for (;n !== o; ) t.push(n), 
n = Q, r = Q, se++, (s = fe()) === o && (s = ve()), se--, s === o ? r = T : (Q = r, 
r = c), r !== o && (s = ye()) !== o ? (ee = n, n = r = X(s)) : (Q = n, n = c); else t = c;
return t !== o && (ee = e, t = Y(t)), e = t;
}
function ye() {
var e, n, r;
return e = Q, 92 === t.charCodeAt(Q) ? (n = C, Q++) : (n = o, 0 === se && ae(A)), 
n !== o ? (G.test(t.charAt(Q)) ? (r = t.charAt(Q), Q++) : (r = o, 0 === se && ae(W)), 
r !== o ? (ee = e, e = n = O(r)) : (Q = e, e = c)) : (Q = e, e = c), e === o && (t.length > Q ? (e = t.charAt(Q), 
Q++) : (e = o, 0 === se && ae(L))), e;
}
function we(e) {
for (var t = [], n = 0; n < e.length; n++) void 0 === e[n].strict && t.push(e[n].text);
return t;
}
function Fe(e) {
for (var t = {}, n = 0; n < e.length; n++) void 0 !== e[n].strict && (t[e[n].strict] = e[n].text);
return t;
}
if ((n = i()) !== o && Q === t.length) return n;
throw n !== o && Q < t.length && ae({
type: "end",
description: "end of input"
}), ue(null, oe, re);
}
};
}();
}, function(e, t, n) {
"use strict";
var r = {};
function o(e) {
var t;
return r[e] ? e : (t = e.toLowerCase().replace("_", "-"), r[t] ? t : (t = t.split("-")[0], 
r[t] ? t : null));
}
function s(e, t) {
var n = o(e);
if (!n) return -1;
if (!r[n].cFn) return 0;
var s = String(t), i = s.indexOf(".") < 0 ? "" : s.split(".")[1], c = i.length, a = +t, u = +s.split(".")[0], l = 0 === i.length ? 0 : +i.replace(/0+$/, "");
return r[n].cFn(a, u, c, +i, l);
}
function i(e, t) {
var n = o(e);
if (!n) return -1;
if (!r[n].oFn) return 0;
var s = String(t), i = s.indexOf(".") < 0 ? "" : s.split(".")[1], c = i.length, a = +t, u = +s.split(".")[0], l = 0 === i.length ? 0 : +i.replace(/0+$/, "");
return r[n].oFn(a, u, c, +i, l);
}
e.exports = function(e, t) {
var n = o(e);
return n ? r[n].c[s(n, t)] : null;
}, e.exports.indexOf = s, e.exports.forms = function(e) {
var t = o(e);
return r[t] ? r[t].c : null;
}, e.exports.ordinal = function(e, t) {
var n = o(e);
return r[n] ? r[n].o[i(n, t)] : null;
}, e.exports.ordinal.indexOf = i, e.exports.ordinal.forms = function(e) {
var t = o(e);
return r[t] ? r[t].o : null;
};
var c = [ "zero", "one", "two", "few", "many", "other" ];
function a(e) {
return c[e];
}
function u(e, t) {
var n;
for (t.c = t.c ? t.c.map(a) : [ "other" ], t.o = t.o ? t.o.map(a) : [ "other" ], 
n = 0; n < e.length; n++) r[e[n]] = t;
}
function l(e, t, n) {
return e <= n && n <= t && n % 1 == 0;
}
function f(e, t) {
return e.indexOf(t) >= 0;
}
u([ "af", "asa", "bem", "bez", "bg", "brx", "ce", "cgg", "chr", "ckb", "dv", "ee", "el", "eo", "es", "eu", "fo", "fur", "gsw", "ha", "haw", "jgo", "jmc", "kaj", "kcg", "kkj", "kl", "ks", "ksb", "ku", "ky", "lb", "lg", "mas", "mgo", "ml", "mn", "nah", "nb", "nd", "nn", "nnh", "no", "nr", "ny", "nyn", "om", "or", "os", "pap", "ps", "rm", "rof", "rwk", "saq", "sdh", "seh", "sn", "so", "ss", "ssy", "st", "syr", "ta", "te", "teo", "tig", "tk", "tn", "tr", "ts", "ug", "uz", "ve", "vo", "vun", "wae", "xh", "xog" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
}
}), u([ "ak", "bh", "guw", "ln", "mg", "nso", "pa", "ti", "wa" ], {
c: [ 1, 5 ],
cFn: function(e) {
return l(0, 1, e) ? 0 : 1;
}
}), u([ "am", "fa", "kn", "zu" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : 1;
}
}), u([ "ar", "ars" ], {
c: [ 0, 1, 2, 3, 4, 5 ],
cFn: function(e) {
var t = e % 100;
return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : l(3, 10, t) ? 3 : l(11, 99, t) ? 4 : 5;
}
}), u([ "as", "bn" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : 1;
},
o: [ 1, 2, 3, 4, 5 ],
oFn: function(e) {
return f([ 1, 5, 7, 8, 9, 10 ], e) ? 0 : f([ 2, 3 ], e) ? 1 : 4 === e ? 2 : 6 === e ? 3 : 4;
}
}), u([ "ast", "de", "et", "fi", "fy", "gl", "ji", "nl", "sw", "ur", "yi" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
}
}), u([ "az" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 3, 4, 5 ],
oFn: function(e, t) {
var n = t % 10, r = t % 100, o = t % 1e3;
return f([ 1, 2, 5, 7, 8 ], n) || f([ 20, 50, 70, 80 ], r) ? 0 : f([ 3, 4 ], n) || f([ 100, 200, 300, 400, 500, 600, 700, 800, 900 ], o) ? 1 : 0 === t || 6 === n || f([ 40, 60, 90 ], r) ? 2 : 3;
}
}), u([ "be" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e) {
var t = e % 10, n = e % 100;
return 1 === t && 11 !== n ? 0 : l(2, 4, t) && !l(12, 14, n) ? 1 : 0 === t || l(5, 9, t) || l(11, 14, n) ? 2 : 3;
},
o: [ 3, 5 ],
oFn: function(e) {
var t = e % 100;
return f([ 2, 3 ], e % 10) && !f([ 12, 13 ], t) ? 0 : 1;
}
}), u([ "bm", "bo", "dz", "id", "ig", "ii", "in", "ja", "jbo", "jv", "jw", "kde", "kea", "km", "ko", "lkt", "my", "nqo", "root", "sah", "ses", "sg", "th", "to", "wo", "yo", "yue", "zh" ], {}), 
u([ "br" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(e) {
var t = e % 10, n = e % 100, r = e % 1e6;
return 1 !== t || f([ 11, 71, 91 ], n) ? 2 !== t || f([ 12, 72, 92 ], n) ? !l(3, 4, t) && 9 !== t || l(10, 19, n) || l(70, 79, n) || l(90, 99, n) ? 0 !== e && 0 === r ? 3 : 4 : 2 : 1 : 0;
}
}), u([ "bs", "hr", "sh", "sr" ], {
c: [ 1, 3, 5 ],
cFn: function(e, t, n, r) {
var o = t % 10, s = t % 100, i = r % 10, c = r % 100;
return 0 === n && 1 === o && 11 !== s || 1 === i && 11 !== c ? 0 : 0 === n && l(2, 4, o) && !l(12, 14, s) || l(2, 4, i) && !l(12, 14, c) ? 1 : 2;
}
}), u([ "ca" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(e) {
return f([ 1, 3 ], e) ? 0 : 2 === e ? 1 : 4 === e ? 2 : 3;
}
}), u([ "cs", "sk" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : l(2, 4, t) && 0 === n ? 1 : 0 !== n ? 2 : 3;
}
}), u([ "cy" ], {
c: [ 0, 1, 2, 3, 4, 5 ],
cFn: function(e) {
return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : 3 === e ? 3 : 6 === e ? 4 : 5;
},
o: [ 0, 1, 2, 3, 4, 5 ],
oFn: function(e) {
return f([ 0, 7, 8, 9 ], e) ? 0 : 1 === e ? 1 : 2 === e ? 2 : f([ 3, 4 ], e) ? 3 : f([ 5, 6 ], e) ? 4 : 5;
}
}), u([ "da" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r, o) {
return 1 === e || 0 !== o && f([ 0, 1 ], t) ? 0 : 1;
}
}), u([ "dsb", "hsb" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(e, t, n, r) {
var o = t % 100, s = r % 100;
return 0 === n && 1 === o || 1 === s ? 0 : 0 === n && 2 === o || 2 === s ? 1 : 0 === n && l(3, 4, o) || l(3, 4, s) ? 2 : 3;
}
}), u([ "en" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(e) {
var t = e % 10, n = e % 100;
return 1 === t && 11 !== n ? 0 : 2 === t && 12 !== n ? 1 : 3 === t && 13 !== n ? 2 : 3;
}
}), u([ "ff", "kab" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return f([ 0, 1 ], t) ? 0 : 1;
}
}), u([ "fil", "tl" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r) {
var o = t % 10, s = r % 10;
return 0 === n && f([ 1, 2, 3 ], t) || 0 === n && !f([ 4, 6, 9 ], o) || 0 !== n && !f([ 4, 6, 9 ], s) ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), u([ "fr", "hy" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return f([ 0, 1 ], t) ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), u([ "ga" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 2 === e ? 1 : l(3, 6, e) ? 2 : l(7, 10, e) ? 3 : 4;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), u([ "gd" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(e) {
return f([ 1, 11 ], e) ? 0 : f([ 2, 12 ], e) ? 1 : l(3, 10, e) || l(13, 19, e) ? 2 : 3;
}
}), u([ "gu", "hi" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : 1;
},
o: [ 1, 2, 3, 4, 5 ],
oFn: function(e) {
return 1 === e ? 0 : f([ 2, 3 ], e) ? 1 : 4 === e ? 2 : 6 === e ? 3 : 4;
}
}), u([ "gv" ], {
c: [ 1, 2, 3, 4, 5 ],
cFn: function(e, t, n) {
var r = t % 10;
return 0 === n && 1 === r ? 0 : 0 === n && 2 === r ? 1 : 0 === n && f([ 0, 20, 40, 60, 80 ], t % 100) ? 2 : 0 !== n ? 3 : 4;
}
}), u([ "he", "iw" ], {
c: [ 1, 2, 4, 5 ],
cFn: function(e, t, n) {
var r = e % 10;
return 1 === t && 0 === n ? 0 : 2 === t && 0 === n ? 1 : 0 !== n || l(0, 10, e) || 0 !== r ? 3 : 2;
}
}), u([ "hu" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return f([ 1, 5 ], e) ? 0 : 1;
}
}), u([ "is" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r, o) {
return 0 === o && 1 === t % 10 && 11 !== t % 100 || 0 !== o ? 0 : 1;
}
}), u([ "it" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
},
o: [ 4, 5 ],
oFn: function(e) {
return f([ 11, 8, 80, 800 ], e) ? 0 : 1;
}
}), u([ "iu", "kw", "naq", "se", "sma", "smi", "smj", "smn", "sms" ], {
c: [ 1, 2, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 2 === e ? 1 : 2;
}
}), u([ "ka" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 4, 5 ],
oFn: function(e, t) {
var n = t % 100;
return 1 === t ? 0 : 0 === t || l(2, 20, n) || 40 === n || 60 === n || 80 === n ? 1 : 2;
}
}), u([ "kk" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 4, 5 ],
oFn: function(e) {
var t = e % 10;
return 6 === t || 9 === t || 0 === t && 0 !== e ? 0 : 1;
}
}), u([ "ksh" ], {
c: [ 0, 1, 5 ],
cFn: function(e) {
return 0 === e ? 0 : 1 === e ? 1 : 2;
}
}), u([ "lag" ], {
c: [ 0, 1, 5 ],
cFn: function(e, t) {
return 0 === e ? 0 : f([ 0, 1 ], t) && 0 !== e ? 1 : 2;
}
}), u([ "lo", "ms", "vi" ], {
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), u([ "lt" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n, r) {
var o = e % 10, s = e % 100;
return 1 !== o || l(11, 19, s) ? l(2, 9, o) && !l(11, 19, s) ? 1 : 0 !== r ? 2 : 3 : 0;
}
}), u([ "lv", "prg" ], {
c: [ 0, 1, 5 ],
cFn: function(e, t, n, r) {
var o = e % 10, s = e % 100, i = r % 100, c = r % 10;
return 0 === o || l(11, 19, s) || 2 === n && l(11, 19, i) ? 0 : 1 === o && 11 !== s || 2 === n && 1 === c && 11 !== i || 2 !== n && 1 === c ? 1 : 2;
}
}), u([ "mk" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r) {
return 0 === n && 1 === t % 10 || 1 === r % 10 ? 0 : 1;
},
o: [ 1, 2, 4, 5 ],
oFn: function(e, t) {
var n = t % 10, r = t % 100;
return 1 === n && 11 !== r ? 0 : 2 === n && 12 !== r ? 1 : f([ 7, 8 ], n) && !f([ 17, 18 ], r) ? 2 : 3;
}
}), u([ "mo", "ro" ], {
c: [ 1, 3, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 0 !== n || 0 === e || 1 !== e && l(1, 19, e % 100) ? 1 : 2;
},
o: [ 1, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 1;
}
}), u([ "mr" ], {
c: [ 1, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : 1;
},
o: [ 1, 2, 3, 5 ],
oFn: function(e) {
return 1 === e ? 0 : f([ 2, 3 ], e) ? 1 : 4 === e ? 2 : 3;
}
}), u([ "mt" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e) {
var t = e % 100;
return 1 === e ? 0 : 0 === e || l(2, 10, t) ? 1 : l(11, 19, t) ? 2 : 3;
}
}), u([ "ne" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
return l(1, 4, e) ? 0 : 1;
}
}), u([ "pl" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n) {
var r = t % 10, o = t % 100;
return 1 === t && 0 === n ? 0 : 0 === n && l(2, 4, r) && !l(12, 14, o) ? 1 : 0 === n && 1 !== t && l(0, 1, r) || 0 === n && l(5, 9, r) || 0 === n && l(12, 14, o) ? 2 : 3;
}
}), u([ "pt" ], {
c: [ 1, 5 ],
cFn: function(e) {
return l(0, 2, e) && 2 !== e ? 0 : 1;
}
}), u([ "pt-pt" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === e && 0 === n ? 0 : 1;
}
}), u([ "ru" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n) {
var r = t % 10, o = t % 100;
return 0 === n && 1 === r && 11 !== o ? 0 : 0 === n && l(2, 4, r) && !l(12, 14, o) ? 1 : 0 === n && 0 === r || 0 === n && l(5, 9, r) || 0 === n && l(11, 14, o) ? 2 : 3;
}
}), u([ "shi" ], {
c: [ 1, 3, 5 ],
cFn: function(e, t) {
return 0 === t || 1 === e ? 0 : l(2, 10, e) ? 1 : 2;
}
}), u([ "si" ], {
c: [ 1, 5 ],
cFn: function(e, t, n, r) {
return f([ 0, 1 ], e) || 0 === t && 1 === r ? 0 : 1;
}
}), u([ "sl" ], {
c: [ 1, 2, 3, 5 ],
cFn: function(e, t, n) {
var r = t % 100;
return 0 === n && 1 === r ? 0 : 0 === n && 2 === r ? 1 : 0 === n && l(3, 4, r) || 0 !== n ? 2 : 3;
}
}), u([ "sq" ], {
c: [ 1, 5 ],
cFn: function(e) {
return 1 === e ? 0 : 1;
},
o: [ 1, 4, 5 ],
oFn: function(e) {
return 1 === e ? 0 : 4 === e % 10 && 14 !== e % 100 ? 1 : 2;
}
}), u([ "sv" ], {
c: [ 1, 5 ],
cFn: function(e, t, n) {
return 1 === t && 0 === n ? 0 : 1;
},
o: [ 1, 5 ],
oFn: function(e) {
var t = e % 100;
return f([ 1, 2 ], e % 10) && !f([ 11, 12 ], t) ? 0 : 1;
}
}), u([ "tzm" ], {
c: [ 1, 5 ],
cFn: function(e) {
return l(0, 1, e) || l(11, 99, e) ? 0 : 1;
}
}), u([ "uk" ], {
c: [ 1, 3, 4, 5 ],
cFn: function(e, t, n) {
var r = t % 10, o = t % 100;
return 0 === n && 1 === r && 11 !== o ? 0 : 0 === n && l(2, 4, r) && !l(12, 14, o) ? 1 : 0 === n && 0 === r || 0 === n && l(5, 9, r) || 0 === n && l(11, 14, o) ? 2 : 3;
},
o: [ 3, 5 ],
oFn: function(e) {
return 3 === e % 10 && 13 !== e % 100 ? 0 : 1;
}
});
}, function(e, t, n) {
var r = {
"./zh.yml": 17
};
function o(e) {
var t = s(e);
return n(t);
}
function s(e) {
var t = r[e];
if (!(t + 1)) {
var n = new Error("Cannot find module '" + e + "'");
throw n.code = "MODULE_NOT_FOUND", n;
}
return t;
}
o.keys = function() {
return Object.keys(r);
}, o.resolve = s, e.exports = o, o.id = 16;
}, function(e, t) {
e.exports = {
site: {
privacy_policy: "隐私政策",
terms: "terms of usage",
gdpr_dialog: {
title: "本网站使用 cookie",
text: '我们使用 cookie 和本地存储等浏览器技术来存储你的偏好设置。你需要接受我们的 <a href="/privacy">隐私政策</a> 和本网站的 <a href="/terms">其他条款</a>。',
accept: "接受",
cancel: "取消"
},
theme: {
light: "Light theme",
dark: "Dark theme",
change: "Change theme"
},
toolbar: {
lang_switcher: {
cta_text: '我们希望将这个开源项目提供给全世界的人。请帮助我们将教程的内容 <a href="https://github.com/javascript-tutorial/translate" rel="noopener noreferrer" target="_blank">翻译为你所掌握的语言</a> 对应的版本。',
footer_text: "多少比重的内容已经被翻译成了相应的语言。",
old_version: "旧版本已发布，需要向后移植。"
},
logo: {
normal: {
svg: "sitetoolbar__logo_en.svg",
width: 200
},
"normal-white": {
svg: "sitetoolbar__logo_en-white.svg"
},
small: {
svg: "sitetoolbar__logo_small_en.svg",
width: 70
},
"small-white": {
svg: "sitetoolbar__logo_small_en-white.svg"
}
},
sections: [],
buy_ebook_extra: "购买",
buy_ebook: "EPUB/PDF",
search_placeholder: "在 Javascript.info 网站中搜索",
search_button: "搜索",
public_profile: "公开资料",
account: "账号",
notifications: "通知",
admin: "管理员",
logout: "登出"
},
sorry_old_browser: "很抱歉，我们不支持 Internet Explorer 等浏览器，请使用一个更新版本的浏览器。",
contact_us: "联系我们",
about_the_project: "关于本项目",
ilya_kantor: "Ilya Kantor",
comments: "评论",
loading: "加载中...",
search: "搜索",
share: "分享",
read_before_commenting: "在评论之前先阅读本内容…",
last_updated_at: "最后修改在 #{date}",
meta: {
description: "现代 JavaScript 教程：有关示例和任务的简单但详细的解释包括：闭包、文档和事件，以及面向对象编程等。"
},
"tablet-menu": {
choose_section: "选择章节",
search_placeholder: "在教程中搜索",
search_button: "搜索"
},
comment: {
help: [ '如果你发现教程有错误，或者有其他需要修改和提升的地方 — 请 <a href="https://github.com/javascript-tutorial/zh.javascript.info/issues">提交一个 GitHub issue</a> 或 pull request，而不是在这评论。', "如果你对教程的内容有不理解的地方 — 请详细说明。", "使用 <code>&lt;code&gt;</code> 标签插入只有几个词的代码，插入多行代码可以使用 <code>&lt;pre&gt;</code> 标签，对于超过 10 行的代码，建议你使用沙箱（<a href='https://plnkr.co/edit/?p=preview'>plnkr</a>，<a href='https://jsbin.com'>JSBin</a>，<a href='http://codepen.io'>codepen</a>…）" ]
},
edit_on_github: "在 GitHub 上编辑",
error: "错误",
close: "关闭",
hide_forever: "永久隐藏",
hidden_forever: "此信息将不再显示。"
}
};
}, function(e, t, n) {
var r = {
"./zh.yml": 19
};
function o(e) {
var t = s(e);
return n(t);
}
function s(e) {
var t = r[e];
if (!(t + 1)) {
var n = new Error("Cannot find module '" + e + "'");
throw n.code = "MODULE_NOT_FOUND", n;
}
return t;
}
o.keys = function() {
return Object.keys(r);
}, o.resolve = s, e.exports = o, o.id = 18;
}, function(e, t) {
e.exports = {
server_connection_error: "服务器连接错误。",
server_request_timeout: "服务器请求超时。",
request_aborted: "请求已终止。",
no_response: "服务器没有响应。",
server_error: "服务器错误（code #{status}），请稍后再试。",
invalid_format: "响应格式无效。"
};
}, function(e, t, n) {
const r = n(1), o = n(21);
e.exports = class {
constructor(e) {
this.elem = e.elem, this.select = this.elem.querySelector("select"), this.textContainer = this.elem.querySelector(".multiselect__active-button"), 
this.options = [ ...this.select.querySelectorAll("option") ], this.defaultValue = this.textContainer.textContent, 
this.status = "closed", this.elem.querySelector(".multiselect__container").insertAdjacentHTML("beforeend", this.createDropdown()), 
this.setButtonTitle(), this.bindHandlers();
}
createDropdown() {
return "\n      <div class='multiselect__dropdown-container'>\n        <div class='multiselect__dropdown'>\n          ".concat(this.options.map((e => "<div class='multiselect__item".concat(e.selected ? " multiselect__item_checked" : "", "' data-value='").concat(e.value, "'>\n                <span class='multiselect__item-title'>").concat(e.textContent + ("advanced" === e.value ? "<span class='multiselect__greyed-text'>".concat(r("site.subscribe.common_updates_text"), "</span>") : ""), "</span>\n              </div>"))).join(""), "\n        </div>\n      </div>\n    ");
}
bindHandlers() {
this.textContainer.addEventListener("click", this.toggleDropdown.bind(this));
for (let e of this.elem.querySelectorAll(".multiselect__item")) e.addEventListener("click", this.onChange.bind(this));
this.select.addEventListener("change", this.setButtonTitle.bind(this));
}
toggleDropdown(e) {
e.stopPropagation(), this.elem.classList.toggle("multiselect_opened"), this.toggleStatus(), 
"opened" === this.status && (this.boundCloseDropdown = this.closeDropdown.bind(this), 
document.addEventListener("click", this.boundCloseDropdown));
}
toggleStatus() {
"closed" === this.status ? this.status = "opened" : this.status = "closed";
}
closeDropdown(e) {
e.target.closest(".multiselect__dropdown-container") || (this.status = "closed", 
this.elem.classList.remove("multiselect_opened"), document.removeEventListener("click", this.boundCloseDropdown));
}
onChange(e) {
const t = e.target.closest(".multiselect__item");
t.classList.toggle("multiselect__item_checked");
this.options.filter((e => e.value === t.getAttribute("data-value"))).pop().selected = t.classList.contains("multiselect__item_checked"), 
this.select.dispatchEvent(new Event("change"));
}
setButtonTitle() {
const e = this.getValues();
1 === e.length && e.includes("advanced") ? this.textContainer.textContent = this.defaultValue : e.length ? this.textContainer.textContent = e.length + " " + o(e.length, r("site.subscribe.newsletters")) : this.textContainer.textContent = r("site.subscribe.no_selected");
}
getValues() {
return this.options.filter((e => e.selected)).map((e => e.value));
}
};
}, function(e, t) {
e.exports = function(e, t) {
var n, r = (n = e) % 10 == 1 && n % 100 != 11 ? "one" : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) && n == Math.floor(n) ? "few" : n % 10 == 0 || n % 10 >= 5 && n % 10 <= 9 || n % 100 >= 11 && n % 100 <= 14 && n == Math.floor(n) ? "many" : "other", o = t.split(",");
switch (r) {
case "one":
return o[0];

case "few":
return o[1];

case "many":
return o[2];

default:
throw new Error("Unsupported count: " + e);
}
};
}, function(e, t, n) {
t.Recaptcha = n(3), t.initForms = n(23);
}, function(e, t, n) {
let r = n(4), o = n(3);
e.exports = async function() {
let e = document.querySelectorAll("[data-recaptcha-submit]");
if (e.length) {
for (let t of e) t.disabled = !0;
await r();
for (let t of e) {
let e = t.form, n = new o(e);
e.onsubmit = async t => {
t.preventDefault(), await n.validateForm(e), e.checkValidity() ? e.submit() : e.reportValidity();
}, t.disabled = !1;
}
}
};
}, function(e, t, n) {
var r = {
"./zh.yml": 25
};
function o(e) {
var t = s(e);
return n(t);
}
function s(e) {
var t = r[e];
if (!(t + 1)) {
var n = new Error("Cannot find module '" + e + "'");
throw n.code = "MODULE_NOT_FOUND", n;
}
return t;
}
o.keys = function() {
return Object.keys(r);
}, o.resolve = s, e.exports = o, o.id = 24;
}, function(e, t) {
e.exports = {
choose_newsletter: "Choose newsletters in the list.",
email_please: "Your e-mail?"
};
}, function(e, t, n) {} ]);
//# sourceMappingURL=frontpage.314ce7c167beb6a1ae27.js.map