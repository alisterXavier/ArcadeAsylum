(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Ya(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const B0="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",U0=Ya(B0);function io(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Be(s)?q0(s):io(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Be(t))return t;if(De(t))return t}}const V0=/;(?![^(]*\))/g,j0=/:([^]+)/,z0=/\/\*.*?\*\//gs;function q0(t){const e={};return t.replace(z0,"").split(V0).forEach(n=>{if(n){const s=n.split(j0);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Ge(t){let e="";if(Be(t))e=t;else if(Q(t))for(let n=0;n<t.length;n++){const s=Ge(t[n]);s&&(e+=s+" ")}else if(De(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function H0(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Be(e)&&(t.class=Ge(e)),n&&(t.style=io(n)),t}const G0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",K0=Ya(G0);function Lm(t){return!!t||t===""}function W0(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=ms(t[s],e[s]);return n}function ms(t,e){if(t===e)return!0;let n=Yh(t),s=Yh(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Dr(t),s=Dr(e),n||s)return t===e;if(n=Q(t),s=Q(e),n||s)return n&&s?W0(t,e):!1;if(n=De(t),s=De(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!ms(t[o],e[o]))return!1}}return String(t)===String(e)}function Qa(t,e){return t.findIndex(n=>ms(n,e))}const je=t=>Be(t)?t:t==null?"":Q(t)||De(t)&&(t.toString===Nm||!ce(t.toString))?JSON.stringify(t,Mm,2):String(t),Mm=(t,e)=>e&&e.__v_isRef?Mm(t,e.value):_i(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:si(e)?{[`Set(${e.size})`]:[...e.values()]}:De(e)&&!Q(e)&&!Fm(e)?String(e):e,Oe={},wi=[],nn=()=>{},Y0=()=>!1,Q0=/^on[^a-z]/,ro=t=>Q0.test(t),Xu=t=>t.startsWith("onUpdate:"),qe=Object.assign,Ju=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},X0=Object.prototype.hasOwnProperty,Ie=(t,e)=>X0.call(t,e),Q=Array.isArray,_i=t=>Gi(t)==="[object Map]",si=t=>Gi(t)==="[object Set]",Yh=t=>Gi(t)==="[object Date]",J0=t=>Gi(t)==="[object RegExp]",ce=t=>typeof t=="function",Be=t=>typeof t=="string",Dr=t=>typeof t=="symbol",De=t=>t!==null&&typeof t=="object",Zu=t=>De(t)&&ce(t.then)&&ce(t.catch),Nm=Object.prototype.toString,Gi=t=>Nm.call(t),Z0=t=>Gi(t).slice(8,-1),Fm=t=>Gi(t)==="[object Object]",ed=t=>Be(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,gr=Ya(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},e_=/-(\w)/g,Ot=Xa(t=>t.replace(e_,(e,n)=>n?n.toUpperCase():"")),t_=/\B([A-Z])/g,Qt=Xa(t=>t.replace(t_,"-$1").toLowerCase()),oo=Xa(t=>t.charAt(0).toUpperCase()+t.slice(1)),yr=Xa(t=>t?`on${oo(t)}`:""),ki=(t,e)=>!Object.is(t,e),Si=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ma=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ga=t=>{const e=parseFloat(t);return isNaN(e)?t:e},ya=t=>{const e=Be(t)?Number(t):NaN;return isNaN(e)?t:e};let Qh;const n_=()=>Qh||(Qh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Nt;class td{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Nt,!e&&Nt&&(this.index=(Nt.scopes||(Nt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Nt;try{return Nt=this,e()}finally{Nt=n}}}on(){Nt=this}off(){Nt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function nd(t){return new td(t)}function $m(t,e=Nt){e&&e.active&&e.effects.push(t)}function sd(){return Nt}function Bm(t){Nt&&Nt.cleanups.push(t)}const id=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Um=t=>(t.w&gs)>0,Vm=t=>(t.n&gs)>0,s_=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=gs},i_=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Um(i)&&!Vm(i)?i.delete(t):e[n++]=i,i.w&=~gs,i.n&=~gs}e.length=n}},va=new WeakMap;let ur=0,gs=1;const jc=30;let en;const Bs=Symbol(""),zc=Symbol("");class ao{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,$m(this,s)}run(){if(!this.active)return this.fn();let e=en,n=cs;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=en,en=this,cs=!0,gs=1<<++ur,ur<=jc?s_(this):Xh(this),this.fn()}finally{ur<=jc&&i_(this),gs=1<<--ur,en=this.parent,cs=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){en===this?this.deferStop=!0:this.active&&(Xh(this),this.onStop&&this.onStop(),this.active=!1)}}function Xh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}function r_(t,e){t.effect&&(t=t.effect.fn);const n=new ao(t);e&&(qe(n,e),e.scope&&$m(n,e.scope)),(!e||!e.lazy)&&n.run();const s=n.run.bind(n);return s.effect=n,s}function o_(t){t.effect.stop()}let cs=!0;const jm=[];function Ki(){jm.push(cs),cs=!1}function Wi(){const t=jm.pop();cs=t===void 0?!0:t}function Pt(t,e,n){if(cs&&en){let s=va.get(t);s||va.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=id()),zm(i)}}function zm(t,e){let n=!1;ur<=jc?Vm(t)||(t.n|=gs,n=!Um(t)):n=!t.has(en),n&&(t.add(en),en.deps.push(t))}function Mn(t,e,n,s,i,r){const o=va.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Q(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Q(t)?ed(n)&&a.push(o.get("length")):(a.push(o.get(Bs)),_i(t)&&a.push(o.get(zc)));break;case"delete":Q(t)||(a.push(o.get(Bs)),_i(t)&&a.push(o.get(zc)));break;case"set":_i(t)&&a.push(o.get(Bs));break}if(a.length===1)a[0]&&qc(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);qc(id(l))}}function qc(t,e){const n=Q(t)?t:[...t];for(const s of n)s.computed&&Jh(s);for(const s of n)s.computed||Jh(s)}function Jh(t,e){(t!==en||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function a_(t,e){var n;return(n=va.get(t))===null||n===void 0?void 0:n.get(e)}const l_=Ya("__proto__,__v_isRef,__isVue"),qm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Dr)),c_=Ja(),u_=Ja(!1,!0),d_=Ja(!0),h_=Ja(!0,!0),Zh=f_();function f_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ve(this);for(let r=0,o=this.length;r<o;r++)Pt(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(ve)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ki();const s=ve(this)[e].apply(this,n);return Wi(),s}}),t}function p_(t){const e=ve(this);return Pt(e,"has",t),e.hasOwnProperty(t)}function Ja(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?Xm:Qm:e?Ym:Wm).get(s))return s;const o=Q(s);if(!t){if(o&&Ie(Zh,i))return Reflect.get(Zh,i,r);if(i==="hasOwnProperty")return p_}const a=Reflect.get(s,i,r);return(Dr(i)?qm.has(i):l_(i))||(t||Pt(s,"get",i),e)?a:Ve(a)?o&&ed(i)?a:a.value:De(a)?t?od(a):ii(a):a}}const m_=Hm(),g_=Hm(!0);function Hm(t=!1){return function(n,s,i,r){let o=n[s];if(Hs(o)&&Ve(o)&&!Ve(i))return!1;if(!t&&(!Pr(i)&&!Hs(i)&&(o=ve(o),i=ve(i)),!Q(n)&&Ve(o)&&!Ve(i)))return o.value=i,!0;const a=Q(n)&&ed(s)?Number(s)<n.length:Ie(n,s),l=Reflect.set(n,s,i,r);return n===ve(r)&&(a?ki(i,o)&&Mn(n,"set",s,i):Mn(n,"add",s,i)),l}}function y_(t,e){const n=Ie(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Mn(t,"delete",e,void 0),s}function v_(t,e){const n=Reflect.has(t,e);return(!Dr(e)||!qm.has(e))&&Pt(t,"has",e),n}function b_(t){return Pt(t,"iterate",Q(t)?"length":Bs),Reflect.ownKeys(t)}const Gm={get:c_,set:m_,deleteProperty:y_,has:v_,ownKeys:b_},Km={get:d_,set(t,e){return!0},deleteProperty(t,e){return!0}},w_=qe({},Gm,{get:u_,set:g_}),__=qe({},Km,{get:h_}),rd=t=>t,Za=t=>Reflect.getPrototypeOf(t);function $o(t,e,n=!1,s=!1){t=t.__v_raw;const i=ve(t),r=ve(e);n||(e!==r&&Pt(i,"get",e),Pt(i,"get",r));const{has:o}=Za(i),a=s?rd:n?ld:Lr;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function Bo(t,e=!1){const n=this.__v_raw,s=ve(n),i=ve(t);return e||(t!==i&&Pt(s,"has",t),Pt(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Uo(t,e=!1){return t=t.__v_raw,!e&&Pt(ve(t),"iterate",Bs),Reflect.get(t,"size",t)}function ef(t){t=ve(t);const e=ve(this);return Za(e).has.call(e,t)||(e.add(t),Mn(e,"add",t,t)),this}function tf(t,e){e=ve(e);const n=ve(this),{has:s,get:i}=Za(n);let r=s.call(n,t);r||(t=ve(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?ki(e,o)&&Mn(n,"set",t,e):Mn(n,"add",t,e),this}function nf(t){const e=ve(this),{has:n,get:s}=Za(e);let i=n.call(e,t);i||(t=ve(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Mn(e,"delete",t,void 0),r}function sf(){const t=ve(this),e=t.size!==0,n=t.clear();return e&&Mn(t,"clear",void 0,void 0),n}function Vo(t,e){return function(s,i){const r=this,o=r.__v_raw,a=ve(o),l=e?rd:t?ld:Lr;return!t&&Pt(a,"iterate",Bs),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function jo(t,e,n){return function(...s){const i=this.__v_raw,r=ve(i),o=_i(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?rd:e?ld:Lr;return!e&&Pt(r,"iterate",l?zc:Bs),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function Wn(t){return function(...e){return t==="delete"?!1:this}}function S_(){const t={get(r){return $o(this,r)},get size(){return Uo(this)},has:Bo,add:ef,set:tf,delete:nf,clear:sf,forEach:Vo(!1,!1)},e={get(r){return $o(this,r,!1,!0)},get size(){return Uo(this)},has:Bo,add:ef,set:tf,delete:nf,clear:sf,forEach:Vo(!1,!0)},n={get(r){return $o(this,r,!0)},get size(){return Uo(this,!0)},has(r){return Bo.call(this,r,!0)},add:Wn("add"),set:Wn("set"),delete:Wn("delete"),clear:Wn("clear"),forEach:Vo(!0,!1)},s={get(r){return $o(this,r,!0,!0)},get size(){return Uo(this,!0)},has(r){return Bo.call(this,r,!0)},add:Wn("add"),set:Wn("set"),delete:Wn("delete"),clear:Wn("clear"),forEach:Vo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=jo(r,!1,!1),n[r]=jo(r,!0,!1),e[r]=jo(r,!1,!0),s[r]=jo(r,!0,!0)}),[t,n,e,s]}const[T_,E_,I_,C_]=S_();function el(t,e){const n=e?t?C_:I_:t?E_:T_;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(Ie(n,i)&&i in s?n:s,i,r)}const x_={get:el(!1,!1)},A_={get:el(!1,!0)},k_={get:el(!0,!1)},R_={get:el(!0,!0)},Wm=new WeakMap,Ym=new WeakMap,Qm=new WeakMap,Xm=new WeakMap;function O_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function D_(t){return t.__v_skip||!Object.isExtensible(t)?0:O_(Z0(t))}function ii(t){return Hs(t)?t:tl(t,!1,Gm,x_,Wm)}function Jm(t){return tl(t,!1,w_,A_,Ym)}function od(t){return tl(t,!0,Km,k_,Qm)}function P_(t){return tl(t,!0,__,R_,Xm)}function tl(t,e,n,s,i){if(!De(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=D_(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function fn(t){return Hs(t)?fn(t.__v_raw):!!(t&&t.__v_isReactive)}function Hs(t){return!!(t&&t.__v_isReadonly)}function Pr(t){return!!(t&&t.__v_isShallow)}function ad(t){return fn(t)||Hs(t)}function ve(t){const e=t&&t.__v_raw;return e?ve(e):t}function Gs(t){return ma(t,"__v_skip",!0),t}const Lr=t=>De(t)?ii(t):t,ld=t=>De(t)?od(t):t;function cd(t){cs&&en&&(t=ve(t),zm(t.dep||(t.dep=id())))}function nl(t,e){t=ve(t);const n=t.dep;n&&qc(n)}function Ve(t){return!!(t&&t.__v_isRef===!0)}function Te(t){return eg(t,!1)}function Zm(t){return eg(t,!0)}function eg(t,e){return Ve(t)?t:new L_(t,e)}class L_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ve(e),this._value=n?e:Lr(e)}get value(){return cd(this),this._value}set value(e){const n=this.__v_isShallow||Pr(e)||Hs(e);e=n?e:ve(e),ki(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Lr(e),nl(this))}}function M_(t){nl(t)}function pe(t){return Ve(t)?t.value:t}const N_={get:(t,e,n)=>pe(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Ve(i)&&!Ve(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function ud(t){return fn(t)?t:new Proxy(t,N_)}class F_{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:s}=e(()=>cd(this),()=>nl(this));this._get=n,this._set=s}get value(){return this._get()}set value(e){this._set(e)}}function $_(t){return new F_(t)}function tg(t){const e=Q(t)?new Array(t.length):{};for(const n in t)e[n]=dd(t,n);return e}class B_{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return a_(ve(this._object),this._key)}}function dd(t,e,n){const s=t[e];return Ve(s)?s:new B_(t,e,n)}var ng;class U_{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[ng]=!1,this._dirty=!0,this.effect=new ao(e,()=>{this._dirty||(this._dirty=!0,nl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=ve(this);return cd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}ng="__v_isReadonly";function V_(t,e,n=!1){let s,i;const r=ce(t);return r?(s=t,i=nn):(s=t.get,i=t.set),new U_(s,i,r||!i,n)}function j_(t,...e){}function z_(t,e){}function On(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){ri(r,e,n)}return i}function zt(t,e,n,s){if(ce(t)){const r=On(t,e,n,s);return r&&Zu(r)&&r.catch(o=>{ri(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(zt(t[r],e,n,s));return i}function ri(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){On(l,null,10,[t,o,a]);return}}q_(t,n,i,s)}function q_(t,e,n,s=!0){console.error(t)}let Mr=!1,Hc=!1;const gt=[];let dn=0;const Ti=[];let In=null,Os=0;const sg=Promise.resolve();let hd=null;function qt(t){const e=hd||sg;return t?e.then(this?t.bind(this):t):e}function H_(t){let e=dn+1,n=gt.length;for(;e<n;){const s=e+n>>>1;Nr(gt[s])<t?e=s+1:n=s}return e}function sl(t){(!gt.length||!gt.includes(t,Mr&&t.allowRecurse?dn+1:dn))&&(t.id==null?gt.push(t):gt.splice(H_(t.id),0,t),ig())}function ig(){!Mr&&!Hc&&(Hc=!0,hd=sg.then(rg))}function G_(t){const e=gt.indexOf(t);e>dn&&gt.splice(e,1)}function fd(t){Q(t)?Ti.push(...t):(!In||!In.includes(t,t.allowRecurse?Os+1:Os))&&Ti.push(t),ig()}function rf(t,e=Mr?dn+1:0){for(;e<gt.length;e++){const n=gt[e];n&&n.pre&&(gt.splice(e,1),e--,n())}}function ba(t){if(Ti.length){const e=[...new Set(Ti)];if(Ti.length=0,In){In.push(...e);return}for(In=e,In.sort((n,s)=>Nr(n)-Nr(s)),Os=0;Os<In.length;Os++)In[Os]();In=null,Os=0}}const Nr=t=>t.id==null?1/0:t.id,K_=(t,e)=>{const n=Nr(t)-Nr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function rg(t){Hc=!1,Mr=!0,gt.sort(K_);const e=nn;try{for(dn=0;dn<gt.length;dn++){const n=gt[dn];n&&n.active!==!1&&On(n,null,14)}}finally{dn=0,gt.length=0,ba(),Mr=!1,hd=null,(gt.length||Ti.length)&&rg()}}let mi,zo=[];function og(t,e){var n,s;mi=t,mi?(mi.enabled=!0,zo.forEach(({event:i,args:r})=>mi.emit(i,...r)),zo=[]):typeof window<"u"&&window.HTMLElement&&!(!((s=(n=window.navigator)===null||n===void 0?void 0:n.userAgent)===null||s===void 0)&&s.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{og(r,e)}),setTimeout(()=>{mi||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,zo=[])},3e3)):zo=[]}function W_(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Oe;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=s[u]||Oe;h&&(i=n.map(f=>Be(f)?f.trim():f)),d&&(i=n.map(ga))}let a,l=s[a=yr(e)]||s[a=yr(Ot(e))];!l&&r&&(l=s[a=yr(Qt(e))]),l&&zt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,zt(c,t,6,i)}}function ag(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!ce(t)){const l=c=>{const u=ag(c,e,!0);u&&(a=!0,qe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(De(t)&&s.set(t,null),null):(Q(r)?r.forEach(l=>o[l]=null):qe(o,r),De(t)&&s.set(t,o),o)}function il(t,e){return!t||!ro(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ie(t,e[0].toLowerCase()+e.slice(1))||Ie(t,Qt(e))||Ie(t,e))}let ct=null,rl=null;function Fr(t){const e=ct;return ct=t,rl=t&&t.type.__scopeId||null,e}function Y_(t){rl=t}function Q_(){rl=null}const X_=t=>Le;function Le(t,e=ct,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Jc(-1);const r=Fr(e);let o;try{o=t(...i)}finally{Fr(r),s._d&&Jc(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function ia(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:h,setupState:f,ctx:g,inheritAttrs:y}=t;let _,m;const p=Fr(t);try{if(n.shapeFlag&4){const T=i||s;_=Ut(u.call(T,T,d,r,f,h,g)),m=l}else{const T=e;_=Ut(T.length>1?T(r,{attrs:l,slots:a,emit:c}):T(r,null)),m=e.props?l:Z_(l)}}catch(T){wr.length=0,ri(T,t,1),_=ne(bt)}let v=_;if(m&&y!==!1){const T=Object.keys(m),{shapeFlag:E}=v;T.length&&E&7&&(o&&T.some(Xu)&&(m=eS(m,o)),v=rn(v,m))}return n.dirs&&(v=rn(v),v.dirs=v.dirs?v.dirs.concat(n.dirs):n.dirs),n.transition&&(v.transition=n.transition),_=v,Fr(p),_}function J_(t){let e;for(let n=0;n<t.length;n++){const s=t[n];if(ys(s)){if(s.type!==bt||s.children==="v-if"){if(e)return;e=s}}else return}return e}const Z_=t=>{let e;for(const n in t)(n==="class"||n==="style"||ro(n))&&((e||(e={}))[n]=t[n]);return e},eS=(t,e)=>{const n={};for(const s in t)(!Xu(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function tS(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?of(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==s[h]&&!il(c,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?of(s,o,c):!0:!!o;return!1}function of(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!il(n,r))return!0}return!1}function pd({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const lg=t=>t.__isSuspense,nS={name:"Suspense",__isSuspense:!0,process(t,e,n,s,i,r,o,a,l,c){t==null?iS(e,n,s,i,r,o,a,l,c):rS(t,e,n,s,i,o,a,l,c)},hydrate:oS,create:md,normalize:aS},sS=nS;function $r(t,e){const n=t.props&&t.props[e];ce(n)&&n()}function iS(t,e,n,s,i,r,o,a,l){const{p:c,o:{createElement:u}}=l,d=u("div"),h=t.suspense=md(t,i,s,e,d,n,r,o,a,l);c(null,h.pendingBranch=t.ssContent,d,null,s,h,r,o),h.deps>0?($r(t,"onPending"),$r(t,"onFallback"),c(null,t.ssFallback,e,n,s,null,r,o),Ei(h,t.ssFallback)):h.resolve()}function rS(t,e,n,s,i,r,o,a,{p:l,um:c,o:{createElement:u}}){const d=e.suspense=t.suspense;d.vnode=e,e.el=t.el;const h=e.ssContent,f=e.ssFallback,{activeBranch:g,pendingBranch:y,isInFallback:_,isHydrating:m}=d;if(y)d.pendingBranch=h,tn(h,y)?(l(y,h,d.hiddenContainer,null,i,d,r,o,a),d.deps<=0?d.resolve():_&&(l(g,f,n,s,i,null,r,o,a),Ei(d,f))):(d.pendingId++,m?(d.isHydrating=!1,d.activeBranch=y):c(y,i,d),d.deps=0,d.effects.length=0,d.hiddenContainer=u("div"),_?(l(null,h,d.hiddenContainer,null,i,d,r,o,a),d.deps<=0?d.resolve():(l(g,f,n,s,i,null,r,o,a),Ei(d,f))):g&&tn(h,g)?(l(g,h,n,s,i,d,r,o,a),d.resolve(!0)):(l(null,h,d.hiddenContainer,null,i,d,r,o,a),d.deps<=0&&d.resolve()));else if(g&&tn(h,g))l(g,h,n,s,i,d,r,o,a),Ei(d,h);else if($r(e,"onPending"),d.pendingBranch=h,d.pendingId++,l(null,h,d.hiddenContainer,null,i,d,r,o,a),d.deps<=0)d.resolve();else{const{timeout:p,pendingId:v}=d;p>0?setTimeout(()=>{d.pendingId===v&&d.fallback(f)},p):p===0&&d.fallback(f)}}function md(t,e,n,s,i,r,o,a,l,c,u=!1){const{p:d,m:h,um:f,n:g,o:{parentNode:y,remove:_}}=c,m=t.props?ya(t.props.timeout):void 0,p={vnode:t,parent:e,parentComponent:n,isSVG:o,container:s,hiddenContainer:i,anchor:r,deps:0,pendingId:0,timeout:typeof m=="number"?m:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(v=!1){const{vnode:T,activeBranch:E,pendingBranch:I,pendingId:C,effects:S,parentComponent:A,container:B}=p;if(p.isHydrating)p.isHydrating=!1;else if(!v){const V=E&&I.transition&&I.transition.mode==="out-in";V&&(E.transition.afterLeave=()=>{C===p.pendingId&&h(I,B,$,0)});let{anchor:$}=p;E&&($=g(E),f(E,A,p,!0)),V||h(I,B,$,0)}Ei(p,I),p.pendingBranch=null,p.isInFallback=!1;let x=p.parent,k=!1;for(;x;){if(x.pendingBranch){x.effects.push(...S),k=!0;break}x=x.parent}k||fd(S),p.effects=[],$r(T,"onResolve")},fallback(v){if(!p.pendingBranch)return;const{vnode:T,activeBranch:E,parentComponent:I,container:C,isSVG:S}=p;$r(T,"onFallback");const A=g(E),B=()=>{p.isInFallback&&(d(null,v,C,A,I,null,S,a,l),Ei(p,v))},x=v.transition&&v.transition.mode==="out-in";x&&(E.transition.afterLeave=B),p.isInFallback=!0,f(E,I,null,!0),x||B()},move(v,T,E){p.activeBranch&&h(p.activeBranch,v,T,E),p.container=v},next(){return p.activeBranch&&g(p.activeBranch)},registerDep(v,T){const E=!!p.pendingBranch;E&&p.deps++;const I=v.vnode.el;v.asyncDep.catch(C=>{ri(C,v,0)}).then(C=>{if(v.isUnmounted||p.isUnmounted||p.pendingId!==v.suspenseId)return;v.asyncResolved=!0;const{vnode:S}=v;Zc(v,C,!1),I&&(S.el=I);const A=!I&&v.subTree.el;T(v,S,y(I||v.subTree.el),I?null:g(v.subTree),p,o,l),A&&_(A),pd(v,S.el),E&&--p.deps===0&&p.resolve()})},unmount(v,T){p.isUnmounted=!0,p.activeBranch&&f(p.activeBranch,n,v,T),p.pendingBranch&&f(p.pendingBranch,n,v,T)}};return p}function oS(t,e,n,s,i,r,o,a,l){const c=e.suspense=md(e,s,n,t.parentNode,document.createElement("div"),null,i,r,o,a,!0),u=l(t,c.pendingBranch=e.ssContent,n,c,r,o);return c.deps===0&&c.resolve(),u}function aS(t){const{shapeFlag:e,children:n}=t,s=e&32;t.ssContent=af(s?n.default:n),t.ssFallback=s?af(n.fallback):ne(bt)}function af(t){let e;if(ce(t)){const n=Ys&&t._c;n&&(t._d=!1,H()),t=t(),n&&(t._d=!0,e=Rt,Lg())}return Q(t)&&(t=J_(t)),t=Ut(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function cg(t,e){e&&e.pendingBranch?Q(t)?e.effects.push(...t):e.effects.push(t):fd(t)}function Ei(t,e){t.activeBranch=e;const{vnode:n,parentComponent:s}=t,i=n.el=e.el;s&&s.subTree===n&&(s.vnode.el=i,pd(s,i))}function Dn(t,e){if(ze){let n=ze.provides;const s=ze.parent&&ze.parent.provides;s===n&&(n=ze.provides=Object.create(s)),n[t]=e}}function Dt(t,e,n=!1){const s=ze||ct;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ce(e)?e.call(s.proxy):e}}function lo(t,e){return co(t,null,e)}function ug(t,e){return co(t,null,{flush:"post"})}function lS(t,e){return co(t,null,{flush:"sync"})}const qo={};function us(t,e,n){return co(t,e,n)}function co(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=Oe){const a=sd()===(ze==null?void 0:ze.scope)?ze:null;let l,c=!1,u=!1;if(Ve(t)?(l=()=>t.value,c=Pr(t)):fn(t)?(l=()=>t,s=!0):Q(t)?(u=!0,c=t.some(v=>fn(v)||Pr(v)),l=()=>t.map(v=>{if(Ve(v))return v.value;if(fn(v))return Ps(v);if(ce(v))return On(v,a,2)})):ce(t)?e?l=()=>On(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return d&&d(),zt(t,a,3,[h])}:l=nn,e&&s){const v=l;l=()=>Ps(v())}let d,h=v=>{d=m.onStop=()=>{On(v,a,4)}},f;if(Oi)if(h=nn,e?n&&zt(e,a,3,[l(),u?[]:void 0,h]):l(),i==="sync"){const v=Gg();f=v.__watcherHandles||(v.__watcherHandles=[])}else return nn;let g=u?new Array(t.length).fill(qo):qo;const y=()=>{if(m.active)if(e){const v=m.run();(s||c||(u?v.some((T,E)=>ki(T,g[E])):ki(v,g)))&&(d&&d(),zt(e,a,3,[v,g===qo?void 0:u&&g[0]===qo?[]:g,h]),g=v)}else m.run()};y.allowRecurse=!!e;let _;i==="sync"?_=y:i==="post"?_=()=>ot(y,a&&a.suspense):(y.pre=!0,a&&(y.id=a.uid),_=()=>sl(y));const m=new ao(l,_);e?n?y():g=m.run():i==="post"?ot(m.run.bind(m),a&&a.suspense):m.run();const p=()=>{m.stop(),a&&a.scope&&Ju(a.scope.effects,m)};return f&&f.push(p),p}function cS(t,e,n){const s=this.proxy,i=Be(t)?t.includes(".")?dg(s,t):()=>s[t]:t.bind(s,s);let r;ce(e)?r=e:(r=e.handler,n=e);const o=ze;vs(this);const a=co(i,r.bind(s),n);return o?vs(o):ds(),a}function dg(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Ps(t,e){if(!De(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ve(t))Ps(t.value,e);else if(Q(t))for(let n=0;n<t.length;n++)Ps(t[n],e);else if(si(t)||_i(t))t.forEach(n=>{Ps(n,e)});else if(Fm(t))for(const n in t)Ps(t[n],e);return t}function gd(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return sn(()=>{t.isMounted=!0}),Qi(()=>{t.isUnmounting=!0}),t}const Yt=[Function,Array],uS={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Yt,onEnter:Yt,onAfterEnter:Yt,onEnterCancelled:Yt,onBeforeLeave:Yt,onLeave:Yt,onAfterLeave:Yt,onLeaveCancelled:Yt,onBeforeAppear:Yt,onAppear:Yt,onAfterAppear:Yt,onAppearCancelled:Yt},setup(t,{slots:e}){const n=Gn(),s=gd();let i;return()=>{const r=e.default&&ol(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const y of r)if(y.type!==bt){o=y;break}}const a=ve(t),{mode:l}=a;if(s.isLeaving)return nc(o);const c=lf(o);if(!c)return nc(o);const u=Ri(c,a,s,n);Ks(c,u);const d=n.subTree,h=d&&lf(d);let f=!1;const{getTransitionKey:g}=c.type;if(g){const y=g();i===void 0?i=y:y!==i&&(i=y,f=!0)}if(h&&h.type!==bt&&(!tn(c,h)||f)){const y=Ri(h,a,s,n);if(Ks(h,y),l==="out-in")return s.isLeaving=!0,y.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},nc(o);l==="in-out"&&c.type!==bt&&(y.delayLeave=(_,m,p)=>{const v=hg(s,h);v[String(h.key)]=h,_._leaveCb=()=>{m(),_._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=p})}return o}}},yd=uS;function hg(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Ri(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:d,onLeave:h,onAfterLeave:f,onLeaveCancelled:g,onBeforeAppear:y,onAppear:_,onAfterAppear:m,onAppearCancelled:p}=e,v=String(t.key),T=hg(n,t),E=(S,A)=>{S&&zt(S,s,9,A)},I=(S,A)=>{const B=A[1];E(S,A),Q(S)?S.every(x=>x.length<=1)&&B():S.length<=1&&B()},C={mode:r,persisted:o,beforeEnter(S){let A=a;if(!n.isMounted)if(i)A=y||a;else return;S._leaveCb&&S._leaveCb(!0);const B=T[v];B&&tn(t,B)&&B.el._leaveCb&&B.el._leaveCb(),E(A,[S])},enter(S){let A=l,B=c,x=u;if(!n.isMounted)if(i)A=_||l,B=m||c,x=p||u;else return;let k=!1;const V=S._enterCb=$=>{k||(k=!0,$?E(x,[S]):E(B,[S]),C.delayedLeave&&C.delayedLeave(),S._enterCb=void 0)};A?I(A,[S,V]):V()},leave(S,A){const B=String(t.key);if(S._enterCb&&S._enterCb(!0),n.isUnmounting)return A();E(d,[S]);let x=!1;const k=S._leaveCb=V=>{x||(x=!0,A(),V?E(g,[S]):E(f,[S]),S._leaveCb=void 0,T[B]===t&&delete T[B])};T[B]=t,h?I(h,[S,k]):k()},clone(S){return Ri(S,e,n,s)}};return C}function nc(t){if(uo(t))return t=rn(t),t.children=null,t}function lf(t){return uo(t)?t.children?t.children[0]:void 0:t}function Ks(t,e){t.shapeFlag&6&&t.component?Ks(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ol(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Me?(o.patchFlag&128&&i++,s=s.concat(ol(o.children,e,a))):(e||o.type!==bt)&&s.push(a!=null?rn(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function qn(t){return ce(t)?{setup:t,name:t.name}:t}const Us=t=>!!t.type.__asyncLoader;function dS(t){ce(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:s,delay:i=200,timeout:r,suspensible:o=!0,onError:a}=t;let l=null,c,u=0;const d=()=>(u++,l=null,h()),h=()=>{let f;return l||(f=l=e().catch(g=>{if(g=g instanceof Error?g:new Error(String(g)),a)return new Promise((y,_)=>{a(g,()=>y(d()),()=>_(g),u+1)});throw g}).then(g=>f!==l&&l?l:(g&&(g.__esModule||g[Symbol.toStringTag]==="Module")&&(g=g.default),c=g,g)))};return qn({name:"AsyncComponentWrapper",__asyncLoader:h,get __asyncResolved(){return c},setup(){const f=ze;if(c)return()=>sc(c,f);const g=p=>{l=null,ri(p,f,13,!s)};if(o&&f.suspense||Oi)return h().then(p=>()=>sc(p,f)).catch(p=>(g(p),()=>s?ne(s,{error:p}):null));const y=Te(!1),_=Te(),m=Te(!!i);return i&&setTimeout(()=>{m.value=!1},i),r!=null&&setTimeout(()=>{if(!y.value&&!_.value){const p=new Error(`Async component timed out after ${r}ms.`);g(p),_.value=p}},r),h().then(()=>{y.value=!0,f.parent&&uo(f.parent.vnode)&&sl(f.parent.update)}).catch(p=>{g(p),_.value=p}),()=>{if(y.value&&c)return sc(c,f);if(_.value&&s)return ne(s,{error:_.value});if(n&&!m.value)return ne(n)}}})}function sc(t,e){const{ref:n,props:s,children:i,ce:r}=e.vnode,o=ne(t,s,i);return o.ref=n,o.ce=r,delete e.vnode.ce,o}const uo=t=>t.type.__isKeepAlive,hS={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Gn(),s=n.ctx;if(!s.renderer)return()=>{const p=e.default&&e.default();return p&&p.length===1?p[0]:p};const i=new Map,r=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:d}}}=s,h=d("div");s.activate=(p,v,T,E,I)=>{const C=p.component;c(p,v,T,0,a),l(C.vnode,p,v,T,C,a,E,p.slotScopeIds,I),ot(()=>{C.isDeactivated=!1,C.a&&Si(C.a);const S=p.props&&p.props.onVnodeMounted;S&&At(S,C.parent,p)},a)},s.deactivate=p=>{const v=p.component;c(p,h,null,1,a),ot(()=>{v.da&&Si(v.da);const T=p.props&&p.props.onVnodeUnmounted;T&&At(T,v.parent,p),v.isDeactivated=!0},a)};function f(p){ic(p),u(p,n,a,!0)}function g(p){i.forEach((v,T)=>{const E=tu(v.type);E&&(!p||!p(E))&&y(T)})}function y(p){const v=i.get(p);!o||!tn(v,o)?f(v):o&&ic(o),i.delete(p),r.delete(p)}us(()=>[t.include,t.exclude],([p,v])=>{p&&g(T=>dr(p,T)),v&&g(T=>!dr(v,T))},{flush:"post",deep:!0});let _=null;const m=()=>{_!=null&&i.set(_,rc(n.subTree))};return sn(m),Yi(m),Qi(()=>{i.forEach(p=>{const{subTree:v,suspense:T}=n,E=rc(v);if(p.type===E.type&&p.key===E.key){ic(E);const I=E.component.da;I&&ot(I,T);return}f(p)})}),()=>{if(_=null,!e.default)return null;const p=e.default(),v=p[0];if(p.length>1)return o=null,p;if(!ys(v)||!(v.shapeFlag&4)&&!(v.shapeFlag&128))return o=null,v;let T=rc(v);const E=T.type,I=tu(Us(T)?T.type.__asyncResolved||{}:E),{include:C,exclude:S,max:A}=t;if(C&&(!I||!dr(C,I))||S&&I&&dr(S,I))return o=T,v;const B=T.key==null?E:T.key,x=i.get(B);return T.el&&(T=rn(T),v.shapeFlag&128&&(v.ssContent=T)),_=B,x?(T.el=x.el,T.component=x.component,T.transition&&Ks(T,T.transition),T.shapeFlag|=512,r.delete(B),r.add(B)):(r.add(B),A&&r.size>parseInt(A,10)&&y(r.values().next().value)),T.shapeFlag|=256,o=T,lg(v.type)?v:T}}},fS=hS;function dr(t,e){return Q(t)?t.some(n=>dr(n,e)):Be(t)?t.split(",").includes(e):J0(t)?t.test(e):!1}function fg(t,e){mg(t,"a",e)}function pg(t,e){mg(t,"da",e)}function mg(t,e,n=ze){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(al(e,s,n),n){let i=n.parent;for(;i&&i.parent;)uo(i.parent.vnode)&&pS(s,e,n,i),i=i.parent}}function pS(t,e,n,s){const i=al(e,t,s,!0);ho(()=>{Ju(s[e],i)},n)}function ic(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function rc(t){return t.shapeFlag&128?t.ssContent:t}function al(t,e,n=ze,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ki(),vs(n);const a=zt(e,n,t,o);return ds(),Wi(),a});return s?i.unshift(r):i.push(r),r}}const Hn=t=>(e,n=ze)=>(!Oi||t==="sp")&&al(t,(...s)=>e(...s),n),gg=Hn("bm"),sn=Hn("m"),vd=Hn("bu"),Yi=Hn("u"),Qi=Hn("bum"),ho=Hn("um"),yg=Hn("sp"),vg=Hn("rtg"),bg=Hn("rtc");function wg(t,e=ze){al("ec",t,e)}function mS(t,e){const n=ct;if(n===null)return t;const s=cl(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=Oe]=e[r];o&&(ce(o)&&(o={mounted:o,updated:o}),o.deep&&Ps(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function un(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(Ki(),zt(l,n,8,[t.el,a,t,e]),Wi())}}const bd="components",gS="directives";function st(t,e){return wd(bd,t,!0,e)||t}const _g=Symbol();function yS(t){return Be(t)?wd(bd,t,!1)||t:t||_g}function vS(t){return wd(gS,t)}function wd(t,e,n=!0,s=!1){const i=ct||ze;if(i){const r=i.type;if(t===bd){const a=tu(r,!1);if(a&&(a===e||a===Ot(e)||a===oo(Ot(e))))return r}const o=cf(i[t]||r[t],e)||cf(i.appContext[t],e);return!o&&s?r:o}}function cf(t,e){return t&&(t[e]||t[Ot(e)]||t[oo(Ot(e))])}function Nn(t,e,n,s){let i;const r=n&&n[s];if(Q(t)||Be(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(De(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}function bS(t,e){for(let n=0;n<e.length;n++){const s=e[n];if(Q(s))for(let i=0;i<s.length;i++)t[s[i].name]=s[i].fn;else s&&(t[s.name]=s.key?(...i)=>{const r=s.fn(...i);return r&&(r.key=s.key),r}:s.fn)}return t}function wS(t,e,n={},s,i){if(ct.isCE||ct.parent&&Us(ct.parent)&&ct.parent.isCE)return e!=="default"&&(n.name=e),ne("slot",n,s&&s());let r=t[e];r&&r._c&&(r._d=!1),H();const o=r&&Sg(r(n)),a=vt(Me,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function Sg(t){return t.some(e=>ys(e)?!(e.type===bt||e.type===Me&&!Sg(e.children)):!0)?t:null}function _S(t,e){const n={};for(const s in t)n[e&&/[A-Z]/.test(s)?`on:${s}`:yr(s)]=t[s];return n}const Gc=t=>t?Ug(t)?cl(t)||t.proxy:Gc(t.parent):null,vr=qe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Gc(t.parent),$root:t=>Gc(t.root),$emit:t=>t.emit,$options:t=>_d(t),$forceUpdate:t=>t.f||(t.f=()=>sl(t.update)),$nextTick:t=>t.n||(t.n=qt.bind(t.proxy)),$watch:t=>cS.bind(t)}),oc=(t,e)=>t!==Oe&&!t.__isScriptSetup&&Ie(t,e),Kc={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(oc(s,e))return o[e]=1,s[e];if(i!==Oe&&Ie(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&Ie(c,e))return o[e]=3,r[e];if(n!==Oe&&Ie(n,e))return o[e]=4,n[e];Wc&&(o[e]=0)}}const u=vr[e];let d,h;if(u)return e==="$attrs"&&Pt(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==Oe&&Ie(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,Ie(h,e))return h[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return oc(i,e)?(i[e]=n,!0):s!==Oe&&Ie(s,e)?(s[e]=n,!0):Ie(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Oe&&Ie(t,o)||oc(e,o)||(a=r[0])&&Ie(a,o)||Ie(s,o)||Ie(vr,o)||Ie(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ie(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},SS=qe({},Kc,{get(t,e){if(e!==Symbol.unscopables)return Kc.get(t,e,t)},has(t,e){return e[0]!=="_"&&!U0(e)}});let Wc=!0;function TS(t){const e=_d(t),n=t.proxy,s=t.ctx;Wc=!1,e.beforeCreate&&uf(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:h,beforeUpdate:f,updated:g,activated:y,deactivated:_,beforeDestroy:m,beforeUnmount:p,destroyed:v,unmounted:T,render:E,renderTracked:I,renderTriggered:C,errorCaptured:S,serverPrefetch:A,expose:B,inheritAttrs:x,components:k,directives:V,filters:$}=e;if(c&&ES(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const ge in o){const he=o[ge];ce(he)&&(s[ge]=he.bind(n))}if(i){const ge=i.call(n,n);De(ge)&&(t.data=ii(ge))}if(Wc=!0,r)for(const ge in r){const he=r[ge],We=ce(he)?he.bind(n,n):ce(he.get)?he.get.bind(n,n):nn,Lt=!ce(he)&&ce(he.set)?he.set.bind(n):nn,xt=Ce({get:We,set:Lt});Object.defineProperty(s,ge,{enumerable:!0,configurable:!0,get:()=>xt.value,set:ht=>xt.value=ht})}if(a)for(const ge in a)Tg(a[ge],s,n,ge);if(l){const ge=ce(l)?l.call(n):l;Reflect.ownKeys(ge).forEach(he=>{Dn(he,ge[he])})}u&&uf(u,t,"c");function Y(ge,he){Q(he)?he.forEach(We=>ge(We.bind(n))):he&&ge(he.bind(n))}if(Y(gg,d),Y(sn,h),Y(vd,f),Y(Yi,g),Y(fg,y),Y(pg,_),Y(wg,S),Y(bg,I),Y(vg,C),Y(Qi,p),Y(ho,T),Y(yg,A),Q(B))if(B.length){const ge=t.exposed||(t.exposed={});B.forEach(he=>{Object.defineProperty(ge,he,{get:()=>n[he],set:We=>n[he]=We})})}else t.exposed||(t.exposed={});E&&t.render===nn&&(t.render=E),x!=null&&(t.inheritAttrs=x),k&&(t.components=k),V&&(t.directives=V)}function ES(t,e,n=nn,s=!1){Q(t)&&(t=Yc(t));for(const i in t){const r=t[i];let o;De(r)?"default"in r?o=Dt(r.from||i,r.default,!0):o=Dt(r.from||i):o=Dt(r),Ve(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function uf(t,e,n){zt(Q(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Tg(t,e,n,s){const i=s.includes(".")?dg(n,s):()=>n[s];if(Be(t)){const r=e[t];ce(r)&&us(i,r)}else if(ce(t))us(i,t.bind(n));else if(De(t))if(Q(t))t.forEach(r=>Tg(r,e,n,s));else{const r=ce(t.handler)?t.handler.bind(n):e[t.handler];ce(r)&&us(i,r,t)}}function _d(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>wa(l,c,o,!0)),wa(l,e,o)),De(e)&&r.set(e,l),l}function wa(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&wa(t,r,n,!0),i&&i.forEach(o=>wa(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=IS[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const IS={data:df,props:ks,emits:ks,methods:ks,computed:ks,beforeCreate:Et,created:Et,beforeMount:Et,mounted:Et,beforeUpdate:Et,updated:Et,beforeDestroy:Et,beforeUnmount:Et,destroyed:Et,unmounted:Et,activated:Et,deactivated:Et,errorCaptured:Et,serverPrefetch:Et,components:ks,directives:ks,watch:xS,provide:df,inject:CS};function df(t,e){return e?t?function(){return qe(ce(t)?t.call(this,this):t,ce(e)?e.call(this,this):e)}:e:t}function CS(t,e){return ks(Yc(t),Yc(e))}function Yc(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Et(t,e){return t?[...new Set([].concat(t,e))]:e}function ks(t,e){return t?qe(qe(Object.create(null),t),e):e}function xS(t,e){if(!t)return e;if(!e)return t;const n=qe(Object.create(null),t);for(const s in e)n[s]=Et(t[s],e[s]);return n}function AS(t,e,n,s=!1){const i={},r={};ma(r,ll,1),t.propsDefaults=Object.create(null),Eg(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Jm(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function kS(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=ve(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(il(t.emitsOptions,h))continue;const f=e[h];if(l)if(Ie(r,h))f!==r[h]&&(r[h]=f,c=!0);else{const g=Ot(h);i[g]=Qc(l,a,g,f,t,!1)}else f!==r[h]&&(r[h]=f,c=!0)}}}else{Eg(t,e,i,r)&&(c=!0);let u;for(const d in a)(!e||!Ie(e,d)&&((u=Qt(d))===d||!Ie(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=Qc(l,a,d,void 0,t,!0)):delete i[d]);if(r!==a)for(const d in r)(!e||!Ie(e,d))&&(delete r[d],c=!0)}c&&Mn(t,"set","$attrs")}function Eg(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(gr(l))continue;const c=e[l];let u;i&&Ie(i,u=Ot(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:il(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=ve(n),c=a||Oe;for(let u=0;u<r.length;u++){const d=r[u];n[d]=Qc(i,l,d,c[d],t,!Ie(c,d))}}return o}function Qc(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=Ie(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&ce(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(vs(i),s=c[n]=l.call(null,e),ds())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Qt(n))&&(s=!0))}return s}function Ig(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!ce(t)){const u=d=>{l=!0;const[h,f]=Ig(d,e,!0);qe(o,h),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return De(t)&&s.set(t,wi),wi;if(Q(r))for(let u=0;u<r.length;u++){const d=Ot(r[u]);hf(d)&&(o[d]=Oe)}else if(r)for(const u in r){const d=Ot(u);if(hf(d)){const h=r[u],f=o[d]=Q(h)||ce(h)?{type:h}:Object.assign({},h);if(f){const g=mf(Boolean,f.type),y=mf(String,f.type);f[0]=g>-1,f[1]=y<0||g<y,(g>-1||Ie(f,"default"))&&a.push(d)}}}const c=[o,a];return De(t)&&s.set(t,c),c}function hf(t){return t[0]!=="$"}function ff(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function pf(t,e){return ff(t)===ff(e)}function mf(t,e){return Q(e)?e.findIndex(n=>pf(n,t)):ce(e)&&pf(e,t)?0:-1}const Cg=t=>t[0]==="_"||t==="$stable",Sd=t=>Q(t)?t.map(Ut):[Ut(t)],RS=(t,e,n)=>{if(e._n)return e;const s=Le((...i)=>Sd(e(...i)),n);return s._c=!1,s},xg=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Cg(i))continue;const r=t[i];if(ce(r))e[i]=RS(i,r,s);else if(r!=null){const o=Sd(r);e[i]=()=>o}}},Ag=(t,e)=>{const n=Sd(e);t.slots.default=()=>n},OS=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ve(e),ma(e,"_",n)):xg(e,t.slots={})}else t.slots={},e&&Ag(t,e);ma(t.slots,ll,1)},DS=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Oe;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(qe(i,e),!n&&a===1&&delete i._):(r=!e.$stable,xg(e,i)),o=e}else e&&(Ag(t,e),o={default:1});if(r)for(const a in i)!Cg(a)&&!(a in o)&&delete i[a]};function kg(){return{app:null,config:{isNativeTag:Y0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let PS=0;function LS(t,e){return function(s,i=null){ce(s)||(s=Object.assign({},s)),i!=null&&!De(i)&&(i=null);const r=kg(),o=new Set;let a=!1;const l=r.app={_uid:PS++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Wg,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&ce(c.install)?(o.add(c),c.install(l,...u)):ce(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,d){if(!a){const h=ne(s,i);return h.appContext=r,u&&e?e(h,c):t(h,c,d),a=!0,l._container=c,c.__vue_app__=l,cl(h.component)||h.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function _a(t,e,n,s,i=!1){if(Q(t)){t.forEach((h,f)=>_a(h,e&&(Q(e)?e[f]:e),n,s,i));return}if(Us(s)&&!i)return;const r=s.shapeFlag&4?cl(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Oe?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(Be(c)?(u[c]=null,Ie(d,c)&&(d[c]=null)):Ve(c)&&(c.value=null)),ce(l))On(l,a,12,[o,u]);else{const h=Be(l),f=Ve(l);if(h||f){const g=()=>{if(t.f){const y=h?Ie(d,l)?d[l]:u[l]:l.value;i?Q(y)&&Ju(y,r):Q(y)?y.includes(r)||y.push(r):h?(u[l]=[r],Ie(d,l)&&(d[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else h?(u[l]=o,Ie(d,l)&&(d[l]=o)):f&&(l.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,ot(g,n)):g()}}}let Yn=!1;const Ho=t=>/svg/.test(t.namespaceURI)&&t.tagName!=="foreignObject",Go=t=>t.nodeType===8;function MS(t){const{mt:e,p:n,o:{patchProp:s,createText:i,nextSibling:r,parentNode:o,remove:a,insert:l,createComment:c}}=t,u=(m,p)=>{if(!p.hasChildNodes()){n(null,m,p),ba(),p._vnode=m;return}Yn=!1,d(p.firstChild,m,null,null,null),ba(),p._vnode=m,Yn&&console.error("Hydration completed but contains mismatches.")},d=(m,p,v,T,E,I=!1)=>{const C=Go(m)&&m.data==="[",S=()=>y(m,p,v,T,E,C),{type:A,ref:B,shapeFlag:x,patchFlag:k}=p;let V=m.nodeType;p.el=m,k===-2&&(I=!1,p.dynamicChildren=null);let $=null;switch(A){case Ws:V!==3?p.children===""?(l(p.el=i(""),o(m),m),$=m):$=S():(m.data!==p.children&&(Yn=!0,m.data=p.children),$=r(m));break;case bt:V!==8||C?$=S():$=r(m);break;case Vs:if(C&&(m=r(m),V=m.nodeType),V===1||V===3){$=m;const _e=!p.children.length;for(let Y=0;Y<p.staticCount;Y++)_e&&(p.children+=$.nodeType===1?$.outerHTML:$.data),Y===p.staticCount-1&&(p.anchor=$),$=r($);return C?r($):$}else S();break;case Me:C?$=g(m,p,v,T,E,I):$=S();break;default:if(x&1)V!==1||p.type.toLowerCase()!==m.tagName.toLowerCase()?$=S():$=h(m,p,v,T,E,I);else if(x&6){p.slotScopeIds=E;const _e=o(m);if(e(p,_e,null,v,T,Ho(_e),I),$=C?_(m):r(m),$&&Go($)&&$.data==="teleport end"&&($=r($)),Us(p)){let Y;C?(Y=ne(Me),Y.anchor=$?$.previousSibling:_e.lastChild):Y=m.nodeType===3?Ft(""):ne("div"),Y.el=m,p.component.subTree=Y}}else x&64?V!==8?$=S():$=p.type.hydrate(m,p,v,T,E,I,t,f):x&128&&($=p.type.hydrate(m,p,v,T,Ho(o(m)),E,I,t,d))}return B!=null&&_a(B,null,T,p),$},h=(m,p,v,T,E,I)=>{I=I||!!p.dynamicChildren;const{type:C,props:S,patchFlag:A,shapeFlag:B,dirs:x}=p,k=C==="input"&&x||C==="option";if(k||A!==-1){if(x&&un(p,null,v,"created"),S)if(k||!I||A&48)for(const $ in S)(k&&$.endsWith("value")||ro($)&&!gr($))&&s(m,$,null,S[$],!1,void 0,v);else S.onClick&&s(m,"onClick",null,S.onClick,!1,void 0,v);let V;if((V=S&&S.onVnodeBeforeMount)&&At(V,v,p),x&&un(p,null,v,"beforeMount"),((V=S&&S.onVnodeMounted)||x)&&cg(()=>{V&&At(V,v,p),x&&un(p,null,v,"mounted")},T),B&16&&!(S&&(S.innerHTML||S.textContent))){let $=f(m.firstChild,p,m,v,T,E,I);for(;$;){Yn=!0;const _e=$;$=$.nextSibling,a(_e)}}else B&8&&m.textContent!==p.children&&(Yn=!0,m.textContent=p.children)}return m.nextSibling},f=(m,p,v,T,E,I,C)=>{C=C||!!p.dynamicChildren;const S=p.children,A=S.length;for(let B=0;B<A;B++){const x=C?S[B]:S[B]=Ut(S[B]);if(m)m=d(m,x,T,E,I,C);else{if(x.type===Ws&&!x.children)continue;Yn=!0,n(null,x,v,null,T,E,Ho(v),I)}}return m},g=(m,p,v,T,E,I)=>{const{slotScopeIds:C}=p;C&&(E=E?E.concat(C):C);const S=o(m),A=f(r(m),p,S,v,T,E,I);return A&&Go(A)&&A.data==="]"?r(p.anchor=A):(Yn=!0,l(p.anchor=c("]"),S,A),A)},y=(m,p,v,T,E,I)=>{if(Yn=!0,p.el=null,I){const A=_(m);for(;;){const B=r(m);if(B&&B!==A)a(B);else break}}const C=r(m),S=o(m);return a(m),n(null,p,S,C,v,T,Ho(S),E),C},_=m=>{let p=0;for(;m;)if(m=r(m),m&&Go(m)&&(m.data==="["&&p++,m.data==="]")){if(p===0)return r(m);p--}return m};return[u,d]}const ot=cg;function Rg(t){return Dg(t)}function Og(t){return Dg(t,MS)}function Dg(t,e){const n=n_();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:h,setScopeId:f=nn,insertStaticContent:g}=t,y=(b,w,R,O=null,L=null,j=null,G=!1,U=null,z=!!w.dynamicChildren)=>{if(b===w)return;b&&!tn(b,w)&&(O=q(b),ht(b,L,j,!0),b=null),w.patchFlag===-2&&(z=!1,w.dynamicChildren=null);const{type:N,ref:ie,shapeFlag:X}=w;switch(N){case Ws:_(b,w,R,O);break;case bt:m(b,w,R,O);break;case Vs:b==null&&p(w,R,O,G);break;case Me:k(b,w,R,O,L,j,G,U,z);break;default:X&1?E(b,w,R,O,L,j,G,U,z):X&6?V(b,w,R,O,L,j,G,U,z):(X&64||X&128)&&N.process(b,w,R,O,L,j,G,U,z,Ee)}ie!=null&&L&&_a(ie,b&&b.ref,j,w||b,!w)},_=(b,w,R,O)=>{if(b==null)s(w.el=a(w.children),R,O);else{const L=w.el=b.el;w.children!==b.children&&c(L,w.children)}},m=(b,w,R,O)=>{b==null?s(w.el=l(w.children||""),R,O):w.el=b.el},p=(b,w,R,O)=>{[b.el,b.anchor]=g(b.children,w,R,O,b.el,b.anchor)},v=({el:b,anchor:w},R,O)=>{let L;for(;b&&b!==w;)L=h(b),s(b,R,O),b=L;s(w,R,O)},T=({el:b,anchor:w})=>{let R;for(;b&&b!==w;)R=h(b),i(b),b=R;i(w)},E=(b,w,R,O,L,j,G,U,z)=>{G=G||w.type==="svg",b==null?I(w,R,O,L,j,G,U,z):A(b,w,L,j,G,U,z)},I=(b,w,R,O,L,j,G,U)=>{let z,N;const{type:ie,props:X,shapeFlag:re,transition:de,dirs:be}=b;if(z=b.el=o(b.type,j,X&&X.is,X),re&8?u(z,b.children):re&16&&S(b.children,z,null,O,L,j&&ie!=="foreignObject",G,U),be&&un(b,null,O,"created"),C(z,b,b.scopeId,G,O),X){for(const Re in X)Re!=="value"&&!gr(Re)&&r(z,Re,null,X[Re],j,b.children,O,L,K);"value"in X&&r(z,"value",null,X.value),(N=X.onVnodeBeforeMount)&&At(N,O,b)}be&&un(b,null,O,"beforeMount");const Pe=(!L||L&&!L.pendingBranch)&&de&&!de.persisted;Pe&&de.beforeEnter(z),s(z,w,R),((N=X&&X.onVnodeMounted)||Pe||be)&&ot(()=>{N&&At(N,O,b),Pe&&de.enter(z),be&&un(b,null,O,"mounted")},L)},C=(b,w,R,O,L)=>{if(R&&f(b,R),O)for(let j=0;j<O.length;j++)f(b,O[j]);if(L){let j=L.subTree;if(w===j){const G=L.vnode;C(b,G,G.scopeId,G.slotScopeIds,L.parent)}}},S=(b,w,R,O,L,j,G,U,z=0)=>{for(let N=z;N<b.length;N++){const ie=b[N]=U?es(b[N]):Ut(b[N]);y(null,ie,w,R,O,L,j,G,U)}},A=(b,w,R,O,L,j,G)=>{const U=w.el=b.el;let{patchFlag:z,dynamicChildren:N,dirs:ie}=w;z|=b.patchFlag&16;const X=b.props||Oe,re=w.props||Oe;let de;R&&xs(R,!1),(de=re.onVnodeBeforeUpdate)&&At(de,R,w,b),ie&&un(w,b,R,"beforeUpdate"),R&&xs(R,!0);const be=L&&w.type!=="foreignObject";if(N?B(b.dynamicChildren,N,U,R,O,be,j):G||he(b,w,U,null,R,O,be,j,!1),z>0){if(z&16)x(U,w,X,re,R,O,L);else if(z&2&&X.class!==re.class&&r(U,"class",null,re.class,L),z&4&&r(U,"style",X.style,re.style,L),z&8){const Pe=w.dynamicProps;for(let Re=0;Re<Pe.length;Re++){const Ye=Pe[Re],Zt=X[Ye],hi=re[Ye];(hi!==Zt||Ye==="value")&&r(U,Ye,Zt,hi,L,b.children,R,O,K)}}z&1&&b.children!==w.children&&u(U,w.children)}else!G&&N==null&&x(U,w,X,re,R,O,L);((de=re.onVnodeUpdated)||ie)&&ot(()=>{de&&At(de,R,w,b),ie&&un(w,b,R,"updated")},O)},B=(b,w,R,O,L,j,G)=>{for(let U=0;U<w.length;U++){const z=b[U],N=w[U],ie=z.el&&(z.type===Me||!tn(z,N)||z.shapeFlag&70)?d(z.el):R;y(z,N,ie,null,O,L,j,G,!0)}},x=(b,w,R,O,L,j,G)=>{if(R!==O){if(R!==Oe)for(const U in R)!gr(U)&&!(U in O)&&r(b,U,R[U],null,G,w.children,L,j,K);for(const U in O){if(gr(U))continue;const z=O[U],N=R[U];z!==N&&U!=="value"&&r(b,U,N,z,G,w.children,L,j,K)}"value"in O&&r(b,"value",R.value,O.value)}},k=(b,w,R,O,L,j,G,U,z)=>{const N=w.el=b?b.el:a(""),ie=w.anchor=b?b.anchor:a("");let{patchFlag:X,dynamicChildren:re,slotScopeIds:de}=w;de&&(U=U?U.concat(de):de),b==null?(s(N,R,O),s(ie,R,O),S(w.children,R,ie,L,j,G,U,z)):X>0&&X&64&&re&&b.dynamicChildren?(B(b.dynamicChildren,re,R,L,j,G,U),(w.key!=null||L&&w===L.subTree)&&Td(b,w,!0)):he(b,w,R,ie,L,j,G,U,z)},V=(b,w,R,O,L,j,G,U,z)=>{w.slotScopeIds=U,b==null?w.shapeFlag&512?L.ctx.activate(w,R,O,G,z):$(w,R,O,L,j,G,z):_e(b,w,z)},$=(b,w,R,O,L,j,G)=>{const U=b.component=Bg(b,O,L);if(uo(b)&&(U.ctx.renderer=Ee),Vg(U),U.asyncDep){if(L&&L.registerDep(U,Y),!b.el){const z=U.subTree=ne(bt);m(null,z,w,R)}return}Y(U,b,w,R,L,j,G)},_e=(b,w,R)=>{const O=w.component=b.component;if(tS(b,w,R))if(O.asyncDep&&!O.asyncResolved){ge(O,w,R);return}else O.next=w,G_(O.update),O.update();else w.el=b.el,O.vnode=w},Y=(b,w,R,O,L,j,G)=>{const U=()=>{if(b.isMounted){let{next:ie,bu:X,u:re,parent:de,vnode:be}=b,Pe=ie,Re;xs(b,!1),ie?(ie.el=be.el,ge(b,ie,G)):ie=be,X&&Si(X),(Re=ie.props&&ie.props.onVnodeBeforeUpdate)&&At(Re,de,ie,be),xs(b,!0);const Ye=ia(b),Zt=b.subTree;b.subTree=Ye,y(Zt,Ye,d(Zt.el),q(Zt),b,L,j),ie.el=Ye.el,Pe===null&&pd(b,Ye.el),re&&ot(re,L),(Re=ie.props&&ie.props.onVnodeUpdated)&&ot(()=>At(Re,de,ie,be),L)}else{let ie;const{el:X,props:re}=w,{bm:de,m:be,parent:Pe}=b,Re=Us(w);if(xs(b,!1),de&&Si(de),!Re&&(ie=re&&re.onVnodeBeforeMount)&&At(ie,Pe,w),xs(b,!0),X&&ye){const Ye=()=>{b.subTree=ia(b),ye(X,b.subTree,b,L,null)};Re?w.type.__asyncLoader().then(()=>!b.isUnmounted&&Ye()):Ye()}else{const Ye=b.subTree=ia(b);y(null,Ye,R,O,b,L,j),w.el=Ye.el}if(be&&ot(be,L),!Re&&(ie=re&&re.onVnodeMounted)){const Ye=w;ot(()=>At(ie,Pe,Ye),L)}(w.shapeFlag&256||Pe&&Us(Pe.vnode)&&Pe.vnode.shapeFlag&256)&&b.a&&ot(b.a,L),b.isMounted=!0,w=R=O=null}},z=b.effect=new ao(U,()=>sl(N),b.scope),N=b.update=()=>z.run();N.id=b.uid,xs(b,!0),N()},ge=(b,w,R)=>{w.component=b;const O=b.vnode.props;b.vnode=w,b.next=null,kS(b,w.props,O,R),DS(b,w.children,R),Ki(),rf(),Wi()},he=(b,w,R,O,L,j,G,U,z=!1)=>{const N=b&&b.children,ie=b?b.shapeFlag:0,X=w.children,{patchFlag:re,shapeFlag:de}=w;if(re>0){if(re&128){Lt(N,X,R,O,L,j,G,U,z);return}else if(re&256){We(N,X,R,O,L,j,G,U,z);return}}de&8?(ie&16&&K(N,L,j),X!==N&&u(R,X)):ie&16?de&16?Lt(N,X,R,O,L,j,G,U,z):K(N,L,j,!0):(ie&8&&u(R,""),de&16&&S(X,R,O,L,j,G,U,z))},We=(b,w,R,O,L,j,G,U,z)=>{b=b||wi,w=w||wi;const N=b.length,ie=w.length,X=Math.min(N,ie);let re;for(re=0;re<X;re++){const de=w[re]=z?es(w[re]):Ut(w[re]);y(b[re],de,R,null,L,j,G,U,z)}N>ie?K(b,L,j,!0,!1,X):S(w,R,O,L,j,G,U,z,X)},Lt=(b,w,R,O,L,j,G,U,z)=>{let N=0;const ie=w.length;let X=b.length-1,re=ie-1;for(;N<=X&&N<=re;){const de=b[N],be=w[N]=z?es(w[N]):Ut(w[N]);if(tn(de,be))y(de,be,R,null,L,j,G,U,z);else break;N++}for(;N<=X&&N<=re;){const de=b[X],be=w[re]=z?es(w[re]):Ut(w[re]);if(tn(de,be))y(de,be,R,null,L,j,G,U,z);else break;X--,re--}if(N>X){if(N<=re){const de=re+1,be=de<ie?w[de].el:O;for(;N<=re;)y(null,w[N]=z?es(w[N]):Ut(w[N]),R,be,L,j,G,U,z),N++}}else if(N>re)for(;N<=X;)ht(b[N],L,j,!0),N++;else{const de=N,be=N,Pe=new Map;for(N=be;N<=re;N++){const Mt=w[N]=z?es(w[N]):Ut(w[N]);Mt.key!=null&&Pe.set(Mt.key,N)}let Re,Ye=0;const Zt=re-be+1;let hi=!1,Gh=0;const ir=new Array(Zt);for(N=0;N<Zt;N++)ir[N]=0;for(N=de;N<=X;N++){const Mt=b[N];if(Ye>=Zt){ht(Mt,L,j,!0);continue}let cn;if(Mt.key!=null)cn=Pe.get(Mt.key);else for(Re=be;Re<=re;Re++)if(ir[Re-be]===0&&tn(Mt,w[Re])){cn=Re;break}cn===void 0?ht(Mt,L,j,!0):(ir[cn-be]=N+1,cn>=Gh?Gh=cn:hi=!0,y(Mt,w[cn],R,null,L,j,G,U,z),Ye++)}const Kh=hi?NS(ir):wi;for(Re=Kh.length-1,N=Zt-1;N>=0;N--){const Mt=be+N,cn=w[Mt],Wh=Mt+1<ie?w[Mt+1].el:O;ir[N]===0?y(null,cn,R,Wh,L,j,G,U,z):hi&&(Re<0||N!==Kh[Re]?xt(cn,R,Wh,2):Re--)}}},xt=(b,w,R,O,L=null)=>{const{el:j,type:G,transition:U,children:z,shapeFlag:N}=b;if(N&6){xt(b.component.subTree,w,R,O);return}if(N&128){b.suspense.move(w,R,O);return}if(N&64){G.move(b,w,R,Ee);return}if(G===Me){s(j,w,R);for(let X=0;X<z.length;X++)xt(z[X],w,R,O);s(b.anchor,w,R);return}if(G===Vs){v(b,w,R);return}if(O!==2&&N&1&&U)if(O===0)U.beforeEnter(j),s(j,w,R),ot(()=>U.enter(j),L);else{const{leave:X,delayLeave:re,afterLeave:de}=U,be=()=>s(j,w,R),Pe=()=>{X(j,()=>{be(),de&&de()})};re?re(j,be,Pe):Pe()}else s(j,w,R)},ht=(b,w,R,O=!1,L=!1)=>{const{type:j,props:G,ref:U,children:z,dynamicChildren:N,shapeFlag:ie,patchFlag:X,dirs:re}=b;if(U!=null&&_a(U,null,R,b,!0),ie&256){w.ctx.deactivate(b);return}const de=ie&1&&re,be=!Us(b);let Pe;if(be&&(Pe=G&&G.onVnodeBeforeUnmount)&&At(Pe,w,b),ie&6)P(b.component,R,O);else{if(ie&128){b.suspense.unmount(R,O);return}de&&un(b,null,w,"beforeUnmount"),ie&64?b.type.remove(b,w,R,L,Ee,O):N&&(j!==Me||X>0&&X&64)?K(N,w,R,!1,!0):(j===Me&&X&384||!L&&ie&16)&&K(z,w,R),O&&Kn(b)}(be&&(Pe=G&&G.onVnodeUnmounted)||de)&&ot(()=>{Pe&&At(Pe,w,b),de&&un(b,null,w,"unmounted")},R)},Kn=b=>{const{type:w,el:R,anchor:O,transition:L}=b;if(w===Me){Fo(R,O);return}if(w===Vs){T(b);return}const j=()=>{i(R),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(b.shapeFlag&1&&L&&!L.persisted){const{leave:G,delayLeave:U}=L,z=()=>G(R,j);U?U(b.el,j,z):z()}else j()},Fo=(b,w)=>{let R;for(;b!==w;)R=h(b),i(b),b=R;i(w)},P=(b,w,R)=>{const{bum:O,scope:L,update:j,subTree:G,um:U}=b;O&&Si(O),L.stop(),j&&(j.active=!1,ht(G,b,w,R)),U&&ot(U,w),ot(()=>{b.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&b.asyncDep&&!b.asyncResolved&&b.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},K=(b,w,R,O=!1,L=!1,j=0)=>{for(let G=j;G<b.length;G++)ht(b[G],w,R,O,L)},q=b=>b.shapeFlag&6?q(b.component.subTree):b.shapeFlag&128?b.suspense.next():h(b.anchor||b.el),te=(b,w,R)=>{b==null?w._vnode&&ht(w._vnode,null,null,!0):y(w._vnode||null,b,w,null,null,null,R),rf(),ba(),w._vnode=b},Ee={p:y,um:ht,m:xt,r:Kn,mt:$,mc:S,pc:he,pbc:B,n:q,o:t};let Ue,ye;return e&&([Ue,ye]=e(Ee)),{render:te,hydrate:Ue,createApp:LS(te,Ue)}}function xs({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Td(t,e,n=!1){const s=t.children,i=e.children;if(Q(s)&&Q(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=es(i[r]),a.el=o.el),n||Td(o,a)),a.type===Ws&&(a.el=o.el)}}function NS(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const FS=t=>t.__isTeleport,br=t=>t&&(t.disabled||t.disabled===""),gf=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Xc=(t,e)=>{const n=t&&t.to;return Be(n)?e?e(n):null:n},$S={__isTeleport:!0,process(t,e,n,s,i,r,o,a,l,c){const{mc:u,pc:d,pbc:h,o:{insert:f,querySelector:g,createText:y,createComment:_}}=c,m=br(e.props);let{shapeFlag:p,children:v,dynamicChildren:T}=e;if(t==null){const E=e.el=y(""),I=e.anchor=y("");f(E,n,s),f(I,n,s);const C=e.target=Xc(e.props,g),S=e.targetAnchor=y("");C&&(f(S,C),o=o||gf(C));const A=(B,x)=>{p&16&&u(v,B,x,i,r,o,a,l)};m?A(n,I):C&&A(C,S)}else{e.el=t.el;const E=e.anchor=t.anchor,I=e.target=t.target,C=e.targetAnchor=t.targetAnchor,S=br(t.props),A=S?n:I,B=S?E:C;if(o=o||gf(I),T?(h(t.dynamicChildren,T,A,i,r,o,a),Td(t,e,!0)):l||d(t,e,A,B,i,r,o,a,!1),m)S||Ko(e,n,E,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const x=e.target=Xc(e.props,g);x&&Ko(e,x,null,c,0)}else S&&Ko(e,I,C,c,1)}Pg(e)},remove(t,e,n,s,{um:i,o:{remove:r}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:d,props:h}=t;if(d&&r(u),(o||!br(h))&&(r(c),a&16))for(let f=0;f<l.length;f++){const g=l[f];i(g,e,n,!0,!!g.dynamicChildren)}},move:Ko,hydrate:BS};function Ko(t,e,n,{o:{insert:s},m:i},r=2){r===0&&s(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,d=r===2;if(d&&s(o,e,n),(!d||br(u))&&l&16)for(let h=0;h<c.length;h++)i(c[h],e,n,2);d&&s(a,e,n)}function BS(t,e,n,s,i,r,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=e.target=Xc(e.props,l);if(u){const d=u._lpa||u.firstChild;if(e.shapeFlag&16)if(br(e.props))e.anchor=c(o(t),e,a(t),n,s,i,r),e.targetAnchor=d;else{e.anchor=o(t);let h=d;for(;h;)if(h=o(h),h&&h.nodeType===8&&h.data==="teleport anchor"){e.targetAnchor=h,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}c(d,e,u,n,s,i,r)}Pg(e)}return e.anchor&&o(e.anchor)}const US=$S;function Pg(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const Me=Symbol(void 0),Ws=Symbol(void 0),bt=Symbol(void 0),Vs=Symbol(void 0),wr=[];let Rt=null;function H(t=!1){wr.push(Rt=t?null:[])}function Lg(){wr.pop(),Rt=wr[wr.length-1]||null}let Ys=1;function Jc(t){Ys+=t}function Mg(t){return t.dynamicChildren=Ys>0?Rt||wi:null,Lg(),Ys>0&&Rt&&Rt.push(t),t}function ee(t,e,n,s,i,r){return Mg(M(t,e,n,s,i,r,!0))}function vt(t,e,n,s,i){return Mg(ne(t,e,n,s,i,!0))}function ys(t){return t?t.__v_isVNode===!0:!1}function tn(t,e){return t.type===e.type&&t.key===e.key}function VS(t){}const ll="__vInternal",Ng=({key:t})=>t??null,ra=({ref:t,ref_key:e,ref_for:n})=>t!=null?Be(t)||Ve(t)||ce(t)?{i:ct,r:t,k:e,f:!!n}:t:null;function M(t,e=null,n=null,s=0,i=null,r=t===Me?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ng(e),ref:e&&ra(e),scopeId:rl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:ct};return a?(Ed(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Be(n)?8:16),Ys>0&&!o&&Rt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Rt.push(l),l}const ne=jS;function jS(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===_g)&&(t=bt),ys(t)){const a=rn(t,e,!0);return n&&Ed(a,n),Ys>0&&!r&&Rt&&(a.shapeFlag&6?Rt[Rt.indexOf(t)]=a:Rt.push(a)),a.patchFlag|=-2,a}if(QS(t)&&(t=t.__vccOpts),e){e=Fg(e);let{class:a,style:l}=e;a&&!Be(a)&&(e.class=Ge(a)),De(l)&&(ad(l)&&!Q(l)&&(l=qe({},l)),e.style=io(l))}const o=Be(t)?1:lg(t)?128:FS(t)?64:De(t)?4:ce(t)?2:0;return M(t,e,n,s,i,o,r,!0)}function Fg(t){return t?ad(t)||ll in t?qe({},t):t:null}function rn(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?$g(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Ng(a),ref:e&&e.ref?n&&i?Q(i)?i.concat(ra(e)):[i,ra(e)]:ra(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Me?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&rn(t.ssContent),ssFallback:t.ssFallback&&rn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Ft(t=" ",e=0){return ne(Ws,null,t,e)}function zS(t,e){const n=ne(Vs,null,t);return n.staticCount=e,n}function $t(t="",e=!1){return e?(H(),vt(bt,null,t)):ne(bt,null,t)}function Ut(t){return t==null||typeof t=="boolean"?ne(bt):Q(t)?ne(Me,null,t.slice()):typeof t=="object"?es(t):ne(Ws,null,String(t))}function es(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:rn(t)}function Ed(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(Q(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Ed(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(ll in e)?e._ctx=ct:i===3&&ct&&(ct.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ce(e)?(e={default:e,_ctx:ct},n=32):(e=String(e),s&64?(n=16,e=[Ft(e)]):n=8);t.children=e,t.shapeFlag|=n}function $g(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Ge([e.class,s.class]));else if(i==="style")e.style=io([e.style,s.style]);else if(ro(i)){const r=e[i],o=s[i];o&&r!==o&&!(Q(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function At(t,e,n,s=null){zt(t,e,7,[n,s])}const qS=kg();let HS=0;function Bg(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||qS,r={uid:HS++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new td(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ig(s,i),emitsOptions:ag(s,i),emit:null,emitted:null,propsDefaults:Oe,inheritAttrs:s.inheritAttrs,ctx:Oe,data:Oe,props:Oe,attrs:Oe,slots:Oe,refs:Oe,setupState:Oe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=W_.bind(null,r),t.ce&&t.ce(r),r}let ze=null;const Gn=()=>ze||ct,vs=t=>{ze=t,t.scope.on()},ds=()=>{ze&&ze.scope.off(),ze=null};function Ug(t){return t.vnode.shapeFlag&4}let Oi=!1;function Vg(t,e=!1){Oi=e;const{props:n,children:s}=t.vnode,i=Ug(t);AS(t,n,i,e),OS(t,s);const r=i?GS(t,e):void 0;return Oi=!1,r}function GS(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Gs(new Proxy(t.ctx,Kc));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?zg(t):null;vs(t),Ki();const r=On(s,t,0,[t.props,i]);if(Wi(),ds(),Zu(r)){if(r.then(ds,ds),e)return r.then(o=>{Zc(t,o,e)}).catch(o=>{ri(o,t,0)});t.asyncDep=r}else Zc(t,r,e)}else jg(t,e)}function Zc(t,e,n){ce(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:De(e)&&(t.setupState=ud(e)),jg(t,n)}let Sa,eu;function KS(t){Sa=t,eu=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,SS))}}const WS=()=>!Sa;function jg(t,e,n){const s=t.type;if(!t.render){if(!e&&Sa&&!s.render){const i=s.template||_d(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=qe(qe({isCustomElement:r,delimiters:a},o),l);s.render=Sa(i,c)}}t.render=s.render||nn,eu&&eu(t)}vs(t),Ki(),TS(t),Wi(),ds()}function YS(t){return new Proxy(t.attrs,{get(e,n){return Pt(t,"get","$attrs"),e[n]}})}function zg(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=YS(t))},slots:t.slots,emit:t.emit,expose:e}}function cl(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ud(Gs(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in vr)return vr[n](t)},has(e,n){return n in e||n in vr}}))}function tu(t,e=!0){return ce(t)?t.displayName||t.name:t.name||e&&t.__name}function QS(t){return ce(t)&&"__vccOpts"in t}const Ce=(t,e)=>V_(t,e,Oi);function XS(){return null}function JS(){return null}function ZS(t){}function eT(t,e){return null}function tT(){return qg().slots}function nT(){return qg().attrs}function qg(){const t=Gn();return t.setupContext||(t.setupContext=zg(t))}function sT(t,e){const n=Q(t)?t.reduce((s,i)=>(s[i]={},s),{}):t;for(const s in e){const i=n[s];i?Q(i)||ce(i)?n[s]={type:i,default:e[s]}:i.default=e[s]:i===null&&(n[s]={default:e[s]})}return n}function iT(t,e){const n={};for(const s in t)e.includes(s)||Object.defineProperty(n,s,{enumerable:!0,get:()=>t[s]});return n}function rT(t){const e=Gn();let n=t();return ds(),Zu(n)&&(n=n.catch(s=>{throw vs(e),s})),[n,()=>vs(e)]}function pt(t,e,n){const s=arguments.length;return s===2?De(e)&&!Q(e)?ys(e)?ne(t,null,[e]):ne(t,e):ne(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&ys(n)&&(n=[n]),ne(t,e,n))}const Hg=Symbol(""),Gg=()=>Dt(Hg);function oT(){}function aT(t,e,n,s){const i=n[s];if(i&&Kg(i,t))return i;const r=e();return r.memo=t.slice(),n[s]=r}function Kg(t,e){const n=t.memo;if(n.length!=e.length)return!1;for(let s=0;s<n.length;s++)if(ki(n[s],e[s]))return!1;return Ys>0&&Rt&&Rt.push(t),!0}const Wg="3.2.47",lT={createComponentInstance:Bg,setupComponent:Vg,renderComponentRoot:ia,setCurrentRenderingInstance:Fr,isVNode:ys,normalizeVNode:Ut},cT=lT,uT=null,dT=null,hT="http://www.w3.org/2000/svg",Ds=typeof document<"u"?document:null,yf=Ds&&Ds.createElement("template"),fT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Ds.createElementNS(hT,t):Ds.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Ds.createTextNode(t),createComment:t=>Ds.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ds.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{yf.innerHTML=s?`<svg>${t}</svg>`:t;const a=yf.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function pT(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function mT(t,e,n){const s=t.style,i=Be(n);if(n&&!i){if(e&&!Be(e))for(const r in e)n[r]==null&&nu(s,r,"");for(const r in n)nu(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const vf=/\s*!important$/;function nu(t,e,n){if(Q(n))n.forEach(s=>nu(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=gT(t,e);vf.test(n)?t.setProperty(Qt(s),n.replace(vf,""),"important"):t[s]=n}}const bf=["Webkit","Moz","ms"],ac={};function gT(t,e){const n=ac[e];if(n)return n;let s=Ot(e);if(s!=="filter"&&s in t)return ac[e]=s;s=oo(s);for(let i=0;i<bf.length;i++){const r=bf[i]+s;if(r in t)return ac[e]=r}return e}const wf="http://www.w3.org/1999/xlink";function yT(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(wf,e.slice(6,e.length)):t.setAttributeNS(wf,e,n);else{const r=K0(e);n==null||r&&!Lm(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function vT(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n??"";(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Lm(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Cn(t,e,n,s){t.addEventListener(e,n,s)}function bT(t,e,n,s){t.removeEventListener(e,n,s)}function wT(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=_T(e);if(s){const c=r[e]=ET(s,i);Cn(t,a,c,l)}else o&&(bT(t,a,o,l),r[e]=void 0)}}const _f=/(?:Once|Passive|Capture)$/;function _T(t){let e;if(_f.test(t)){e={};let s;for(;s=t.match(_f);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Qt(t.slice(2)),e]}let lc=0;const ST=Promise.resolve(),TT=()=>lc||(ST.then(()=>lc=0),lc=Date.now());function ET(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;zt(IT(s,n.value),e,5,[s])};return n.value=t,n.attached=TT(),n}function IT(t,e){if(Q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Sf=/^on[a-z]/,CT=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?pT(t,s,i):e==="style"?mT(t,n,s):ro(e)?Xu(e)||wT(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):xT(t,e,s,i))?vT(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),yT(t,e,s,i))};function xT(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Sf.test(e)&&ce(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Sf.test(e)&&Be(n)?!1:e in t}function Yg(t,e){const n=qn(t);class s extends ul{constructor(r){super(n,r,e)}}return s.def=n,s}const AT=t=>Yg(t,fy),kT=typeof HTMLElement<"u"?HTMLElement:class{};class ul extends kT{constructor(e,n={},s){super(),this._def=e,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&s?s(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,qt(()=>{this._connected||(ru(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let s=0;s<this.attributes.length;s++)this._setAttr(this.attributes[s].name);new MutationObserver(s=>{for(const i of s)this._setAttr(i.attributeName)}).observe(this,{attributes:!0});const e=(s,i=!1)=>{const{props:r,styles:o}=s;let a;if(r&&!Q(r))for(const l in r){const c=r[l];(c===Number||c&&c.type===Number)&&(l in this._props&&(this._props[l]=ya(this._props[l])),(a||(a=Object.create(null)))[Ot(l)]=!0)}this._numberProps=a,i&&this._resolveProps(s),this._applyStyles(o),this._update()},n=this._def.__asyncLoader;n?n().then(s=>e(s,!0)):e(this._def)}_resolveProps(e){const{props:n}=e,s=Q(n)?n:Object.keys(n||{});for(const i of Object.keys(this))i[0]!=="_"&&s.includes(i)&&this._setProp(i,this[i],!0,!1);for(const i of s.map(Ot))Object.defineProperty(this,i,{get(){return this._getProp(i)},set(r){this._setProp(i,r)}})}_setAttr(e){let n=this.getAttribute(e);const s=Ot(e);this._numberProps&&this._numberProps[s]&&(n=ya(n)),this._setProp(s,n,!1)}_getProp(e){return this._props[e]}_setProp(e,n,s=!0,i=!0){n!==this._props[e]&&(this._props[e]=n,i&&this._instance&&this._update(),s&&(n===!0?this.setAttribute(Qt(e),""):typeof n=="string"||typeof n=="number"?this.setAttribute(Qt(e),n+""):n||this.removeAttribute(Qt(e))))}_update(){ru(this._createVNode(),this.shadowRoot)}_createVNode(){const e=ne(this._def,qe({},this._props));return this._instance||(e.ce=n=>{this._instance=n,n.isCE=!0;const s=(r,o)=>{this.dispatchEvent(new CustomEvent(r,{detail:o}))};n.emit=(r,...o)=>{s(r,o),Qt(r)!==r&&s(Qt(r),o)};let i=this;for(;i=i&&(i.parentNode||i.host);)if(i instanceof ul){n.parent=i._instance,n.provides=i._instance.provides;break}}),e}_applyStyles(e){e&&e.forEach(n=>{const s=document.createElement("style");s.textContent=n,this.shadowRoot.appendChild(s)})}}function RT(t="$style"){{const e=Gn();if(!e)return Oe;const n=e.type.__cssModules;if(!n)return Oe;const s=n[t];return s||Oe}}function Qg(t){const e=Gn();if(!e)return;const n=e.ut=(i=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(r=>iu(r,i))},s=()=>{const i=t(e.proxy);su(e.subTree,i),n(i)};ug(s),sn(()=>{const i=new MutationObserver(s);i.observe(e.subTree.el.parentNode,{childList:!0}),ho(()=>i.disconnect())})}function su(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{su(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)iu(t.el,e);else if(t.type===Me)t.children.forEach(n=>su(n,e));else if(t.type===Vs){let{el:n,anchor:s}=t;for(;n&&(iu(n,e),n!==s);)n=n.nextSibling}}function iu(t,e){if(t.nodeType===1){const n=t.style;for(const s in e)n.setProperty(`--${s}`,e[s])}}const Qn="transition",rr="animation",dl=(t,{slots:e})=>pt(yd,Jg(t),e);dl.displayName="Transition";const Xg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},OT=dl.props=qe({},yd.props,Xg),As=(t,e=[])=>{Q(t)?t.forEach(n=>n(...e)):t&&t(...e)},Tf=t=>t?Q(t)?t.some(e=>e.length>1):t.length>1:!1;function Jg(t){const e={};for(const k in t)k in Xg||(e[k]=t[k]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,g=DT(i),y=g&&g[0],_=g&&g[1],{onBeforeEnter:m,onEnter:p,onEnterCancelled:v,onLeave:T,onLeaveCancelled:E,onBeforeAppear:I=m,onAppear:C=p,onAppearCancelled:S=v}=e,A=(k,V,$)=>{Zn(k,V?u:a),Zn(k,V?c:o),$&&$()},B=(k,V)=>{k._isLeaving=!1,Zn(k,d),Zn(k,f),Zn(k,h),V&&V()},x=k=>(V,$)=>{const _e=k?C:p,Y=()=>A(V,k,$);As(_e,[V,Y]),Ef(()=>{Zn(V,k?l:r),Tn(V,k?u:a),Tf(_e)||If(V,s,y,Y)})};return qe(e,{onBeforeEnter(k){As(m,[k]),Tn(k,r),Tn(k,o)},onBeforeAppear(k){As(I,[k]),Tn(k,l),Tn(k,c)},onEnter:x(!1),onAppear:x(!0),onLeave(k,V){k._isLeaving=!0;const $=()=>B(k,V);Tn(k,d),ey(),Tn(k,h),Ef(()=>{k._isLeaving&&(Zn(k,d),Tn(k,f),Tf(T)||If(k,s,_,$))}),As(T,[k,$])},onEnterCancelled(k){A(k,!1),As(v,[k])},onAppearCancelled(k){A(k,!0),As(S,[k])},onLeaveCancelled(k){B(k),As(E,[k])}})}function DT(t){if(t==null)return null;if(De(t))return[cc(t.enter),cc(t.leave)];{const e=cc(t);return[e,e]}}function cc(t){return ya(t)}function Tn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Zn(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Ef(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let PT=0;function If(t,e,n,s){const i=t._endId=++PT,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=Zg(t,e);if(!o)return s();const c=o+"end";let u=0;const d=()=>{t.removeEventListener(c,h),r()},h=f=>{f.target===t&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),t.addEventListener(c,h)}function Zg(t,e){const n=window.getComputedStyle(t),s=g=>(n[g]||"").split(", "),i=s(`${Qn}Delay`),r=s(`${Qn}Duration`),o=Cf(i,r),a=s(`${rr}Delay`),l=s(`${rr}Duration`),c=Cf(a,l);let u=null,d=0,h=0;e===Qn?o>0&&(u=Qn,d=o,h=r.length):e===rr?c>0&&(u=rr,d=c,h=l.length):(d=Math.max(o,c),u=d>0?o>c?Qn:rr:null,h=u?u===Qn?r.length:l.length:0);const f=u===Qn&&/\b(transform|all)(,|$)/.test(s(`${Qn}Property`).toString());return{type:u,timeout:d,propCount:h,hasTransform:f}}function Cf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>xf(n)+xf(t[s])))}function xf(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function ey(){return document.body.offsetHeight}const ty=new WeakMap,ny=new WeakMap,sy={name:"TransitionGroup",props:qe({},OT,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Gn(),s=gd();let i,r;return Yi(()=>{if(!i.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!BT(i[0].el,n.vnode.el,o))return;i.forEach(NT),i.forEach(FT);const a=i.filter($T);ey(),a.forEach(l=>{const c=l.el,u=c.style;Tn(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const d=c._moveCb=h=>{h&&h.target!==c||(!h||/transform$/.test(h.propertyName))&&(c.removeEventListener("transitionend",d),c._moveCb=null,Zn(c,o))};c.addEventListener("transitionend",d)})}),()=>{const o=ve(t),a=Jg(o);let l=o.tag||Me;i=r,r=e.default?ol(e.default()):[];for(let c=0;c<r.length;c++){const u=r[c];u.key!=null&&Ks(u,Ri(u,a,s,n))}if(i)for(let c=0;c<i.length;c++){const u=i[c];Ks(u,Ri(u,a,s,n)),ty.set(u,u.el.getBoundingClientRect())}return ne(l,null,r)}}},LT=t=>delete t.mode;sy.props;const MT=sy;function NT(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function FT(t){ny.set(t,t.el.getBoundingClientRect())}function $T(t){const e=ty.get(t),n=ny.get(t),s=e.left-n.left,i=e.top-n.top;if(s||i){const r=t.el.style;return r.transform=r.webkitTransform=`translate(${s}px,${i}px)`,r.transitionDuration="0s",t}}function BT(t,e,n){const s=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&s.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&s.classList.add(o)),s.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(s);const{hasTransform:r}=Zg(s);return i.removeChild(s),r}const bs=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Q(e)?n=>Si(e,n):e};function UT(t){t.target.composing=!0}function Af(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ta={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=bs(i);const r=s||i.props&&i.props.type==="number";Cn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=ga(a)),t._assign(a)}),n&&Cn(t,"change",()=>{t.value=t.value.trim()}),e||(Cn(t,"compositionstart",UT),Cn(t,"compositionend",Af),Cn(t,"change",Af))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=bs(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&ga(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Id={deep:!0,created(t,e,n){t._assign=bs(n),Cn(t,"change",()=>{const s=t._modelValue,i=Di(t),r=t.checked,o=t._assign;if(Q(s)){const a=Qa(s,i),l=a!==-1;if(r&&!l)o(s.concat(i));else if(!r&&l){const c=[...s];c.splice(a,1),o(c)}}else if(si(s)){const a=new Set(s);r?a.add(i):a.delete(i),o(a)}else o(ry(t,r))})},mounted:kf,beforeUpdate(t,e,n){t._assign=bs(n),kf(t,e,n)}};function kf(t,{value:e,oldValue:n},s){t._modelValue=e,Q(e)?t.checked=Qa(e,s.props.value)>-1:si(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=ms(e,ry(t,!0)))}const Cd={created(t,{value:e},n){t.checked=ms(e,n.props.value),t._assign=bs(n),Cn(t,"change",()=>{t._assign(Di(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t._assign=bs(s),e!==n&&(t.checked=ms(e,s.props.value))}},iy={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=si(e);Cn(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?ga(Di(o)):Di(o));t._assign(t.multiple?i?new Set(r):r:r[0])}),t._assign=bs(s)},mounted(t,{value:e}){Rf(t,e)},beforeUpdate(t,e,n){t._assign=bs(n)},updated(t,{value:e}){Rf(t,e)}};function Rf(t,e){const n=t.multiple;if(!(n&&!Q(e)&&!si(e))){for(let s=0,i=t.options.length;s<i;s++){const r=t.options[s],o=Di(r);if(n)Q(e)?r.selected=Qa(e,o)>-1:r.selected=e.has(o);else if(ms(Di(r),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Di(t){return"_value"in t?t._value:t.value}function ry(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const oy={created(t,e,n){Wo(t,e,n,null,"created")},mounted(t,e,n){Wo(t,e,n,null,"mounted")},beforeUpdate(t,e,n,s){Wo(t,e,n,s,"beforeUpdate")},updated(t,e,n,s){Wo(t,e,n,s,"updated")}};function ay(t,e){switch(t){case"SELECT":return iy;case"TEXTAREA":return Ta;default:switch(e){case"checkbox":return Id;case"radio":return Cd;default:return Ta}}}function Wo(t,e,n,s,i){const o=ay(t.tagName,n.props&&n.props.type)[i];o&&o(t,e,n,s)}function VT(){Ta.getSSRProps=({value:t})=>({value:t}),Cd.getSSRProps=({value:t},e)=>{if(e.props&&ms(e.props.value,t))return{checked:!0}},Id.getSSRProps=({value:t},e)=>{if(Q(t)){if(e.props&&Qa(t,e.props.value)>-1)return{checked:!0}}else if(si(t)){if(e.props&&t.has(e.props.value))return{checked:!0}}else if(t)return{checked:!0}},oy.getSSRProps=(t,e)=>{if(typeof e.type!="string")return;const n=ay(e.type.toUpperCase(),e.props&&e.props.type);if(n.getSSRProps)return n.getSSRProps(t,e)}}const jT=["ctrl","shift","alt","meta"],zT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>jT.some(n=>t[`${n}Key`]&&!e.includes(n))},qT=(t,e)=>(n,...s)=>{for(let i=0;i<e.length;i++){const r=zT[e[i]];if(r&&r(n,e))return}return t(n,...s)},HT={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ly=(t,e)=>n=>{if(!("key"in n))return;const s=Qt(n.key);if(e.some(i=>i===s||HT[i]===s))return t(n)},cy={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):or(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),or(t,!0),s.enter(t)):s.leave(t,()=>{or(t,!1)}):or(t,e))},beforeUnmount(t,{value:e}){or(t,e)}};function or(t,e){t.style.display=e?t._vod:"none"}function GT(){cy.getSSRProps=({value:t})=>{if(!t)return{style:{display:"none"}}}}const uy=qe({patchProp:CT},fT);let _r,Of=!1;function dy(){return _r||(_r=Rg(uy))}function hy(){return _r=Of?_r:Og(uy),Of=!0,_r}const ru=(...t)=>{dy().render(...t)},fy=(...t)=>{hy().hydrate(...t)},py=(...t)=>{const e=dy().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=my(s);if(!i)return;const r=e._component;!ce(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e},KT=(...t)=>{const e=hy().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=my(s);if(i)return n(i,!0,i instanceof SVGElement)},e};function my(t){return Be(t)?document.querySelector(t):t}let Df=!1;const WT=()=>{Df||(Df=!0,VT(),GT())},YT=()=>{},QT=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:yd,Comment:bt,EffectScope:td,Fragment:Me,KeepAlive:fS,ReactiveEffect:ao,Static:Vs,Suspense:sS,Teleport:US,Text:Ws,Transition:dl,TransitionGroup:MT,VueElement:ul,assertNumber:z_,callWithAsyncErrorHandling:zt,callWithErrorHandling:On,camelize:Ot,capitalize:oo,cloneVNode:rn,compatUtils:dT,compile:YT,computed:Ce,createApp:py,createBlock:vt,createCommentVNode:$t,createElementBlock:ee,createElementVNode:M,createHydrationRenderer:Og,createPropsRestProxy:iT,createRenderer:Rg,createSSRApp:KT,createSlots:bS,createStaticVNode:zS,createTextVNode:Ft,createVNode:ne,customRef:$_,defineAsyncComponent:dS,defineComponent:qn,defineCustomElement:Yg,defineEmits:JS,defineExpose:ZS,defineProps:XS,defineSSRCustomElement:AT,get devtools(){return mi},effect:r_,effectScope:nd,getCurrentInstance:Gn,getCurrentScope:sd,getTransitionRawChildren:ol,guardReactiveProps:Fg,h:pt,handleError:ri,hydrate:fy,initCustomFormatter:oT,initDirectivesForSSR:WT,inject:Dt,isMemoSame:Kg,isProxy:ad,isReactive:fn,isReadonly:Hs,isRef:Ve,isRuntimeOnly:WS,isShallow:Pr,isVNode:ys,markRaw:Gs,mergeDefaults:sT,mergeProps:$g,nextTick:qt,normalizeClass:Ge,normalizeProps:H0,normalizeStyle:io,onActivated:fg,onBeforeMount:gg,onBeforeUnmount:Qi,onBeforeUpdate:vd,onDeactivated:pg,onErrorCaptured:wg,onMounted:sn,onRenderTracked:bg,onRenderTriggered:vg,onScopeDispose:Bm,onServerPrefetch:yg,onUnmounted:ho,onUpdated:Yi,openBlock:H,popScopeId:Q_,provide:Dn,proxyRefs:ud,pushScopeId:Y_,queuePostFlushCb:fd,reactive:ii,readonly:od,ref:Te,registerRuntimeCompiler:KS,render:ru,renderList:Nn,renderSlot:wS,resolveComponent:st,resolveDirective:vS,resolveDynamicComponent:yS,resolveFilter:uT,resolveTransitionHooks:Ri,setBlockTracking:Jc,setDevtoolsHook:og,setTransitionHooks:Ks,shallowReactive:Jm,shallowReadonly:P_,shallowRef:Zm,ssrContextKey:Hg,ssrUtils:cT,stop:o_,toDisplayString:je,toHandlerKey:yr,toHandlers:_S,toRaw:ve,toRef:dd,toRefs:tg,transformVNodeArgs:VS,triggerRef:M_,unref:pe,useAttrs:nT,useCssModule:RT,useCssVars:Qg,useSSRContext:Gg,useSlots:tT,useTransitionState:gd,vModelCheckbox:Id,vModelDynamic:oy,vModelRadio:Cd,vModelSelect:iy,vModelText:Ta,vShow:cy,version:Wg,warn:j_,watch:us,watchEffect:lo,watchPostEffect:ug,watchSyncEffect:lS,withAsyncContext:rT,withCtx:Le,withDefaults:eT,withDirectives:mS,withKeys:ly,withMemo:aT,withModifiers:qT,withScopeId:X_},Symbol.toStringTag,{value:"Module"}));var XT=!1;/*!
  * pinia v2.0.32
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let gy;const hl=t=>gy=t,yy=Symbol();function ou(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Sr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Sr||(Sr={}));function JT(){const t=nd(!0),e=t.run(()=>Te({}));let n=[],s=[];const i=Gs({install(r){hl(i),i._a=r,r.provide(yy,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!XT?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const vy=()=>{};function Pf(t,e,n,s=vy){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&sd()&&Bm(i),i}function fi(t,...e){t.slice().forEach(n=>{n(...e)})}function au(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];ou(i)&&ou(s)&&t.hasOwnProperty(n)&&!Ve(s)&&!fn(s)?t[n]=au(i,s):t[n]=s}return t}const ZT=Symbol();function eE(t){return!ou(t)||!t.hasOwnProperty(ZT)}const{assign:ts}=Object;function tE(t){return!!(Ve(t)&&t.effect)}function nE(t,e,n,s){const{state:i,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=i?i():{});const u=tg(n.state.value[t]);return ts(u,r,Object.keys(o||{}).reduce((d,h)=>(d[h]=Gs(Ce(()=>{hl(n);const f=n._s.get(t);return o[h].call(f,f)})),d),{}))}return l=by(t,c,e,n,s,!0),l.$reset=function(){const d=i?i():{};this.$patch(h=>{ts(h,d)})},l}function by(t,e,n={},s,i,r){let o;const a=ts({actions:{}},n),l={deep:!0};let c,u,d=Gs([]),h=Gs([]),f;const g=s.state.value[t];!r&&!g&&(s.state.value[t]={}),Te({});let y;function _(C){let S;c=u=!1,typeof C=="function"?(C(s.state.value[t]),S={type:Sr.patchFunction,storeId:t,events:f}):(au(s.state.value[t],C),S={type:Sr.patchObject,payload:C,storeId:t,events:f});const A=y=Symbol();qt().then(()=>{y===A&&(c=!0)}),u=!0,fi(d,S,s.state.value[t])}const m=vy;function p(){o.stop(),d=[],h=[],s._s.delete(t)}function v(C,S){return function(){hl(s);const A=Array.from(arguments),B=[],x=[];function k(_e){B.push(_e)}function V(_e){x.push(_e)}fi(h,{args:A,name:C,store:E,after:k,onError:V});let $;try{$=S.apply(this&&this.$id===t?this:E,A)}catch(_e){throw fi(x,_e),_e}return $ instanceof Promise?$.then(_e=>(fi(B,_e),_e)).catch(_e=>(fi(x,_e),Promise.reject(_e))):(fi(B,$),$)}}const T={_p:s,$id:t,$onAction:Pf.bind(null,h),$patch:_,$reset:m,$subscribe(C,S={}){const A=Pf(d,C,S.detached,()=>B()),B=o.run(()=>us(()=>s.state.value[t],x=>{(S.flush==="sync"?u:c)&&C({storeId:t,type:Sr.direct,events:f},x)},ts({},l,S)));return A},$dispose:p},E=ii(T);s._s.set(t,E);const I=s._e.run(()=>(o=nd(),o.run(()=>e())));for(const C in I){const S=I[C];if(Ve(S)&&!tE(S)||fn(S))r||(g&&eE(S)&&(Ve(S)?S.value=g[C]:au(S,g[C])),s.state.value[t][C]=S);else if(typeof S=="function"){const A=v(C,S);I[C]=A,a.actions[C]=S}}return ts(E,I),ts(ve(E),I),Object.defineProperty(E,"$state",{get:()=>s.state.value[t],set:C=>{_(S=>{ts(S,C)})}}),s._p.forEach(C=>{ts(E,o.run(()=>C({store:E,app:s._a,pinia:s,options:a})))}),g&&r&&n.hydrate&&n.hydrate(E.$state,g),c=!0,u=!0,E}function sE(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(a,l){const c=Gn();return a=a||c&&Dt(yy,null),a&&hl(a),a=gy,a._s.has(s)||(r?by(s,e,i,a):nE(s,i,a)),a._s.get(s)}return o.$id=s,o}function iE(t){{t=ve(t);const e={};for(const n in t){const s=t[n];(Ve(s)||fn(s))&&(e[n]=dd(t,n))}return e}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const gi=typeof window<"u";function rE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ke=Object.assign;function uc(t,e){const n={};for(const s in e){const i=e[s];n[s]=on(i)?i.map(t):t(i)}return n}const Tr=()=>{},on=Array.isArray,oE=/\/$/,aE=t=>t.replace(oE,"");function dc(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=dE(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function lE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Lf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function cE(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Pi(e.matched[s],n.matched[i])&&wy(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Pi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function wy(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!uE(t[n],e[n]))return!1;return!0}function uE(t,e){return on(t)?Mf(t,e):on(e)?Mf(e,t):t===e}function Mf(t,e){return on(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function dE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var Br;(function(t){t.pop="pop",t.push="push"})(Br||(Br={}));var Er;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Er||(Er={}));function hE(t){if(!t)if(gi){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),aE(t)}const fE=/^[^#]+#/;function pE(t,e){return t.replace(fE,"#")+e}function mE(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const fl=()=>({left:window.pageXOffset,top:window.pageYOffset});function gE(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=mE(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Nf(t,e){return(history.state?history.state.position-e:-1)+t}const lu=new Map;function yE(t,e){lu.set(t,e)}function vE(t){const e=lu.get(t);return lu.delete(t),e}let bE=()=>location.protocol+"//"+location.host;function _y(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Lf(l,"")}return Lf(n,t)+s+i}function wE(t,e,n,s){let i=[],r=[],o=null;const a=({state:h})=>{const f=_y(t,location),g=n.value,y=e.value;let _=0;if(h){if(n.value=f,e.value=h,o&&o===g){o=null;return}_=y?h.position-y.position:0}else s(f);i.forEach(m=>{m(n.value,g,{delta:_,type:Br.pop,direction:_?_>0?Er.forward:Er.back:Er.unknown})})};function l(){o=n.value}function c(h){i.push(h);const f=()=>{const g=i.indexOf(h);g>-1&&i.splice(g,1)};return r.push(f),f}function u(){const{history:h}=window;h.state&&h.replaceState(ke({},h.state,{scroll:fl()}),"")}function d(){for(const h of r)h();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:d}}function Ff(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?fl():null}}function _E(t){const{history:e,location:n}=window,s={value:_y(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const d=t.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:bE()+t+l;try{e[u?"replaceState":"pushState"](c,"",h),i.value=c}catch(f){console.error(f),n[u?"replace":"assign"](h)}}function o(l,c){const u=ke({},e.state,Ff(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=ke({},i.value,e.state,{forward:l,scroll:fl()});r(u.current,u,!0);const d=ke({},Ff(s.value,l,null),{position:u.position+1},c);r(l,d,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function SE(t){t=hE(t);const e=_E(t),n=wE(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=ke({location:"",base:t,go:s,createHref:pE.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function TE(t){return typeof t=="string"||t&&typeof t=="object"}function Sy(t){return typeof t=="string"||typeof t=="symbol"}const Xn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ty=Symbol("");var $f;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})($f||($f={}));function Li(t,e){return ke(new Error,{type:t,[Ty]:!0},e)}function Sn(t,e){return t instanceof Error&&Ty in t&&(e==null||!!(t.type&e))}const Bf="[^/]+?",EE={sensitive:!1,strict:!1,start:!0,end:!0},IE=/[.+*?^${}()[\]/\\]/g;function CE(t,e){const n=ke({},EE,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let d=0;d<c.length;d++){const h=c[d];let f=40+(n.sensitive?.25:0);if(h.type===0)d||(i+="/"),i+=h.value.replace(IE,"\\$&"),f+=40;else if(h.type===1){const{value:g,repeatable:y,optional:_,regexp:m}=h;r.push({name:g,repeatable:y,optional:_});const p=m||Bf;if(p!==Bf){f+=10;try{new RegExp(`(${p})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${g}" (${p}): `+T.message)}}let v=y?`((?:${p})(?:/(?:${p}))*)`:`(${p})`;d||(v=_&&c.length<2?`(?:/${v})`:"/"+v),_&&(v+="?"),i+=v,f+=20,_&&(f+=-8),y&&(f+=-20),p===".*"&&(f+=-50)}u.push(f)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let h=1;h<u.length;h++){const f=u[h]||"",g=r[h-1];d[g.name]=f&&g.repeatable?f.split("/"):f}return d}function l(c){let u="",d=!1;for(const h of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const f of h)if(f.type===0)u+=f.value;else if(f.type===1){const{value:g,repeatable:y,optional:_}=f,m=g in c?c[g]:"";if(on(m)&&!y)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const p=on(m)?m.join("/"):m;if(!p)if(_)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${g}"`);u+=p}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function xE(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function AE(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=xE(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Uf(s))return 1;if(Uf(i))return-1}return i.length-s.length}function Uf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const kE={type:0,value:""},RE=/[a-zA-Z0-9_]/;function OE(t){if(!t)return[[]];if(t==="/")return[[kE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function d(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):h();break;case 4:h(),n=s;break;case 1:l==="("?n=2:RE.test(l)?h():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),i}function DE(t,e,n){const s=CE(OE(t.path),n),i=ke(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function PE(t,e){const n=[],s=new Map;e=zf({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,d,h){const f=!h,g=LE(u);g.aliasOf=h&&h.record;const y=zf(e,u),_=[g];if("alias"in u){const v=typeof u.alias=="string"?[u.alias]:u.alias;for(const T of v)_.push(ke({},g,{components:h?h.record.components:g.components,path:T,aliasOf:h?h.record:g}))}let m,p;for(const v of _){const{path:T}=v;if(d&&T[0]!=="/"){const E=d.record.path,I=E[E.length-1]==="/"?"":"/";v.path=d.record.path+(T&&I+T)}if(m=DE(v,d,y),h?h.alias.push(m):(p=p||m,p!==m&&p.alias.push(m),f&&u.name&&!jf(m)&&o(u.name)),g.children){const E=g.children;for(let I=0;I<E.length;I++)r(E[I],m,h&&h.children[I])}h=h||m,(m.record.components&&Object.keys(m.record.components).length||m.record.name||m.record.redirect)&&l(m)}return p?()=>{o(p)}:Tr}function o(u){if(Sy(u)){const d=s.get(u);d&&(s.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let d=0;for(;d<n.length&&AE(u,n[d])>=0&&(u.record.path!==n[d].record.path||!Ey(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!jf(u)&&s.set(u.record.name,u)}function c(u,d){let h,f={},g,y;if("name"in u&&u.name){if(h=s.get(u.name),!h)throw Li(1,{location:u});y=h.record.name,f=ke(Vf(d.params,h.keys.filter(p=>!p.optional).map(p=>p.name)),u.params&&Vf(u.params,h.keys.map(p=>p.name))),g=h.stringify(f)}else if("path"in u)g=u.path,h=n.find(p=>p.re.test(g)),h&&(f=h.parse(g),y=h.record.name);else{if(h=d.name?s.get(d.name):n.find(p=>p.re.test(d.path)),!h)throw Li(1,{location:u,currentLocation:d});y=h.record.name,f=ke({},d.params,u.params),g=h.stringify(f)}const _=[];let m=h;for(;m;)_.unshift(m.record),m=m.parent;return{name:y,path:g,params:f,matched:_,meta:NE(_)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Vf(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function LE(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:ME(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function ME(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function jf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function NE(t){return t.reduce((e,n)=>ke(e,n.meta),{})}function zf(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Ey(t,e){return e.children.some(n=>n===t||Ey(t,n))}const Iy=/#/g,FE=/&/g,$E=/\//g,BE=/=/g,UE=/\?/g,Cy=/\+/g,VE=/%5B/g,jE=/%5D/g,xy=/%5E/g,zE=/%60/g,Ay=/%7B/g,qE=/%7C/g,ky=/%7D/g,HE=/%20/g;function xd(t){return encodeURI(""+t).replace(qE,"|").replace(VE,"[").replace(jE,"]")}function GE(t){return xd(t).replace(Ay,"{").replace(ky,"}").replace(xy,"^")}function cu(t){return xd(t).replace(Cy,"%2B").replace(HE,"+").replace(Iy,"%23").replace(FE,"%26").replace(zE,"`").replace(Ay,"{").replace(ky,"}").replace(xy,"^")}function KE(t){return cu(t).replace(BE,"%3D")}function WE(t){return xd(t).replace(Iy,"%23").replace(UE,"%3F")}function YE(t){return t==null?"":WE(t).replace($E,"%2F")}function Ea(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function QE(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Cy," "),o=r.indexOf("="),a=Ea(o<0?r:r.slice(0,o)),l=o<0?null:Ea(r.slice(o+1));if(a in e){let c=e[a];on(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function qf(t){let e="";for(let n in t){const s=t[n];if(n=KE(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(on(s)?s.map(r=>r&&cu(r)):[s&&cu(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function XE(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=on(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const JE=Symbol(""),Hf=Symbol(""),Ad=Symbol(""),kd=Symbol(""),uu=Symbol("");function ar(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function ns(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=d=>{d===!1?a(Li(4,{from:n,to:e})):d instanceof Error?a(d):TE(d)?a(Li(2,{from:e,to:d})):(r&&s.enterCallbacks[i]===r&&typeof d=="function"&&r.push(d),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(d=>a(d))})}function hc(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(ZE(a)){const c=(a.__vccOpts||a)[e];c&&i.push(ns(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=rE(c)?c.default:c;r.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&ns(h,n,s,r,o)()}))}}return i}function ZE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Gf(t){const e=Dt(Ad),n=Dt(kd),s=Ce(()=>e.resolve(pe(t.to))),i=Ce(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const h=d.findIndex(Pi.bind(null,u));if(h>-1)return h;const f=Kf(l[c-2]);return c>1&&Kf(u)===f&&d[d.length-1].path!==f?d.findIndex(Pi.bind(null,l[c-2])):h}),r=Ce(()=>i.value>-1&&sI(n.params,s.value.params)),o=Ce(()=>i.value>-1&&i.value===n.matched.length-1&&wy(n.params,s.value.params));function a(l={}){return nI(l)?e[pe(t.replace)?"replace":"push"](pe(t.to)).catch(Tr):Promise.resolve()}return{route:s,href:Ce(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const eI=qn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Gf,setup(t,{slots:e}){const n=ii(Gf(t)),{options:s}=Dt(Ad),i=Ce(()=>({[Wf(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Wf(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:pt("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),tI=eI;function nI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function sI(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!on(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Kf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Wf=(t,e,n)=>t??e??n,iI=qn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Dt(uu),i=Ce(()=>t.route||s.value),r=Dt(Hf,0),o=Ce(()=>{let c=pe(r);const{matched:u}=i.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=Ce(()=>i.value.matched[o.value]);Dn(Hf,Ce(()=>o.value+1)),Dn(JE,a),Dn(uu,i);const l=Te();return us(()=>[l.value,a.value,t.name],([c,u,d],[h,f,g])=>{u&&(u.instances[d]=c,f&&f!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!Pi(u,f)||!h)&&(u.enterCallbacks[d]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,d=a.value,h=d&&d.components[u];if(!h)return Yf(n.default,{Component:h,route:c});const f=d.props[u],g=f?f===!0?c.params:typeof f=="function"?f(c):f:null,_=pt(h,ke({},g,e,{onVnodeUnmounted:m=>{m.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return Yf(n.default,{Component:_,route:c})||_}}});function Yf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Ry=iI;function rI(t){const e=PE(t.routes,t),n=t.parseQuery||QE,s=t.stringifyQuery||qf,i=t.history,r=ar(),o=ar(),a=ar(),l=Zm(Xn);let c=Xn;gi&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=uc.bind(null,P=>""+P),d=uc.bind(null,YE),h=uc.bind(null,Ea);function f(P,K){let q,te;return Sy(P)?(q=e.getRecordMatcher(P),te=K):te=P,e.addRoute(te,q)}function g(P){const K=e.getRecordMatcher(P);K&&e.removeRoute(K)}function y(){return e.getRoutes().map(P=>P.record)}function _(P){return!!e.getRecordMatcher(P)}function m(P,K){if(K=ke({},K||l.value),typeof P=="string"){const b=dc(n,P,K.path),w=e.resolve({path:b.path},K),R=i.createHref(b.fullPath);return ke(b,w,{params:h(w.params),hash:Ea(b.hash),redirectedFrom:void 0,href:R})}let q;if("path"in P)q=ke({},P,{path:dc(n,P.path,K.path).path});else{const b=ke({},P.params);for(const w in b)b[w]==null&&delete b[w];q=ke({},P,{params:d(P.params)}),K.params=d(K.params)}const te=e.resolve(q,K),Ee=P.hash||"";te.params=u(h(te.params));const Ue=lE(s,ke({},P,{hash:GE(Ee),path:te.path})),ye=i.createHref(Ue);return ke({fullPath:Ue,hash:Ee,query:s===qf?XE(P.query):P.query||{}},te,{redirectedFrom:void 0,href:ye})}function p(P){return typeof P=="string"?dc(n,P,l.value.path):ke({},P)}function v(P,K){if(c!==P)return Li(8,{from:K,to:P})}function T(P){return C(P)}function E(P){return T(ke(p(P),{replace:!0}))}function I(P){const K=P.matched[P.matched.length-1];if(K&&K.redirect){const{redirect:q}=K;let te=typeof q=="function"?q(P):q;return typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=p(te):{path:te},te.params={}),ke({query:P.query,hash:P.hash,params:"path"in te?{}:P.params},te)}}function C(P,K){const q=c=m(P),te=l.value,Ee=P.state,Ue=P.force,ye=P.replace===!0,b=I(q);if(b)return C(ke(p(b),{state:typeof b=="object"?ke({},Ee,b.state):Ee,force:Ue,replace:ye}),K||q);const w=q;w.redirectedFrom=K;let R;return!Ue&&cE(s,te,q)&&(R=Li(16,{to:w,from:te}),Lt(te,te,!0,!1)),(R?Promise.resolve(R):A(w,te)).catch(O=>Sn(O)?Sn(O,2)?O:We(O):ge(O,w,te)).then(O=>{if(O){if(Sn(O,2))return C(ke({replace:ye},p(O.to),{state:typeof O.to=="object"?ke({},Ee,O.to.state):Ee,force:Ue}),K||w)}else O=x(w,te,!0,ye,Ee);return B(w,te,O),O})}function S(P,K){const q=v(P,K);return q?Promise.reject(q):Promise.resolve()}function A(P,K){let q;const[te,Ee,Ue]=oI(P,K);q=hc(te.reverse(),"beforeRouteLeave",P,K);for(const b of te)b.leaveGuards.forEach(w=>{q.push(ns(w,P,K))});const ye=S.bind(null,P,K);return q.push(ye),pi(q).then(()=>{q=[];for(const b of r.list())q.push(ns(b,P,K));return q.push(ye),pi(q)}).then(()=>{q=hc(Ee,"beforeRouteUpdate",P,K);for(const b of Ee)b.updateGuards.forEach(w=>{q.push(ns(w,P,K))});return q.push(ye),pi(q)}).then(()=>{q=[];for(const b of P.matched)if(b.beforeEnter&&!K.matched.includes(b))if(on(b.beforeEnter))for(const w of b.beforeEnter)q.push(ns(w,P,K));else q.push(ns(b.beforeEnter,P,K));return q.push(ye),pi(q)}).then(()=>(P.matched.forEach(b=>b.enterCallbacks={}),q=hc(Ue,"beforeRouteEnter",P,K),q.push(ye),pi(q))).then(()=>{q=[];for(const b of o.list())q.push(ns(b,P,K));return q.push(ye),pi(q)}).catch(b=>Sn(b,8)?b:Promise.reject(b))}function B(P,K,q){for(const te of a.list())te(P,K,q)}function x(P,K,q,te,Ee){const Ue=v(P,K);if(Ue)return Ue;const ye=K===Xn,b=gi?history.state:{};q&&(te||ye?i.replace(P.fullPath,ke({scroll:ye&&b&&b.scroll},Ee)):i.push(P.fullPath,Ee)),l.value=P,Lt(P,K,q,ye),We()}let k;function V(){k||(k=i.listen((P,K,q)=>{if(!Fo.listening)return;const te=m(P),Ee=I(te);if(Ee){C(ke(Ee,{replace:!0}),te).catch(Tr);return}c=te;const Ue=l.value;gi&&yE(Nf(Ue.fullPath,q.delta),fl()),A(te,Ue).catch(ye=>Sn(ye,12)?ye:Sn(ye,2)?(C(ye.to,te).then(b=>{Sn(b,20)&&!q.delta&&q.type===Br.pop&&i.go(-1,!1)}).catch(Tr),Promise.reject()):(q.delta&&i.go(-q.delta,!1),ge(ye,te,Ue))).then(ye=>{ye=ye||x(te,Ue,!1),ye&&(q.delta&&!Sn(ye,8)?i.go(-q.delta,!1):q.type===Br.pop&&Sn(ye,20)&&i.go(-1,!1)),B(te,Ue,ye)}).catch(Tr)}))}let $=ar(),_e=ar(),Y;function ge(P,K,q){We(P);const te=_e.list();return te.length?te.forEach(Ee=>Ee(P,K,q)):console.error(P),Promise.reject(P)}function he(){return Y&&l.value!==Xn?Promise.resolve():new Promise((P,K)=>{$.add([P,K])})}function We(P){return Y||(Y=!P,V(),$.list().forEach(([K,q])=>P?q(P):K()),$.reset()),P}function Lt(P,K,q,te){const{scrollBehavior:Ee}=t;if(!gi||!Ee)return Promise.resolve();const Ue=!q&&vE(Nf(P.fullPath,0))||(te||!q)&&history.state&&history.state.scroll||null;return qt().then(()=>Ee(P,K,Ue)).then(ye=>ye&&gE(ye)).catch(ye=>ge(ye,P,K))}const xt=P=>i.go(P);let ht;const Kn=new Set,Fo={currentRoute:l,listening:!0,addRoute:f,removeRoute:g,hasRoute:_,getRoutes:y,resolve:m,options:t,push:T,replace:E,go:xt,back:()=>xt(-1),forward:()=>xt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:_e.add,isReady:he,install(P){const K=this;P.component("RouterLink",tI),P.component("RouterView",Ry),P.config.globalProperties.$router=K,Object.defineProperty(P.config.globalProperties,"$route",{enumerable:!0,get:()=>pe(l)}),gi&&!ht&&l.value===Xn&&(ht=!0,T(i.location).catch(Ee=>{}));const q={};for(const Ee in Xn)q[Ee]=Ce(()=>l.value[Ee]);P.provide(Ad,K),P.provide(kd,ii(q)),P.provide(uu,l);const te=P.unmount;Kn.add(P),P.unmount=function(){Kn.delete(P),Kn.size<1&&(c=Xn,k&&k(),k=null,l.value=Xn,ht=!1,Y=!1),te()}}};return Fo}function pi(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function oI(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Pi(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Pi(c,l))||i.push(l))}return[n,s,i]}function Oy(){return Dt(kd)}const aI="/assets/house-34673a06.svg",lI="/assets/basket-47df7538.svg",cI="/assets/books-8e6af424.svg",uI="/assets/log-0523a230.svg",dI="/assets/google-3d3eec27.svg";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},hI=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Py={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let h=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(h=64)),s.push(n[u],n[d],n[h],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Dy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):hI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||d==null)throw Error();const h=r<<2|a>>4;if(s.push(h),c!==64){const f=a<<4&240|c>>2;if(s.push(f),d!==64){const g=c<<6&192|d;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},fI=function(t){const e=Dy(t);return Py.encodeByteArray(e,!0)},Ia=function(t){return fI(t).replace(/\./g,"")},Ly=function(t){try{return Py.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI=()=>pI().__FIREBASE_DEFAULTS__,gI=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},yI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ly(t[1]);return e&&JSON.parse(e)},Rd=()=>{try{return mI()||gI()||yI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},My=t=>{var e,n;return(n=(e=Rd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},vI=t=>{const e=My(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},bI=()=>{var t;return(t=Rd())===null||t===void 0?void 0:t.config},Ny=t=>{var e;return(e=Rd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _I(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ia(JSON.stringify(n)),Ia(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function SI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(St())}function Fy(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function TI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function EI(){const t=St();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function $y(){try{return typeof indexedDB=="object"}catch{return!1}}function By(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function II(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CI="FirebaseError";class ln extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=CI,Object.setPrototypeOf(this,ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,oi.prototype.create)}}class oi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?xI(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ln(i,a,s)}}function xI(t,e){return t.replace(AI,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const AI=/\{\$([^}]+)}/g;function kI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ur(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Qf(r)&&Qf(o)){if(!Ur(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Qf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function RI(t,e){const n=new OI(t,e);return n.subscribe.bind(n)}class OI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");DI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=fc),i.error===void 0&&(i.error=fc),i.complete===void 0&&(i.complete=fc);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function DI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function fc(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI=1e3,LI=2,MI=4*60*60*1e3,NI=.5;function Xf(t,e=PI,n=LI){const s=e*Math.pow(n,t),i=Math.round(NI*s*(Math.random()-.5)*2);return Math.min(MI,s+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(t){return t&&t._delegate?t._delegate:t}class an{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new wI;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(BI(e))try{this.getOrInitializeService({instanceIdentifier:Rs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Rs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rs){return this.instances.has(e)}getOptions(e=Rs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:$I(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Rs){return this.component?this.component.multipleInstances?e:Rs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $I(t){return t===Rs?void 0:t}function BI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new FI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(xe||(xe={}));const VI={debug:xe.DEBUG,verbose:xe.VERBOSE,info:xe.INFO,warn:xe.WARN,error:xe.ERROR,silent:xe.SILENT},jI=xe.INFO,zI={[xe.DEBUG]:"log",[xe.VERBOSE]:"log",[xe.INFO]:"info",[xe.WARN]:"warn",[xe.ERROR]:"error"},qI=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=zI[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pl{constructor(e){this.name=e,this._logLevel=jI,this._logHandler=qI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in xe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?VI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,xe.DEBUG,...e),this._logHandler(this,xe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,xe.VERBOSE,...e),this._logHandler(this,xe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,xe.INFO,...e),this._logHandler(this,xe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,xe.WARN,...e),this._logHandler(this,xe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,xe.ERROR,...e),this._logHandler(this,xe.ERROR,...e)}}const HI=(t,e)=>e.some(n=>t instanceof n);let Jf,Zf;function GI(){return Jf||(Jf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function KI(){return Zf||(Zf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Uy=new WeakMap,du=new WeakMap,Vy=new WeakMap,pc=new WeakMap,Od=new WeakMap;function WI(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(hs(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Uy.set(n,t)}).catch(()=>{}),Od.set(e,t),e}function YI(t){if(du.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});du.set(t,e)}let hu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return du.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Vy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hs(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function QI(t){hu=t(hu)}function XI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(mc(this),e,...n);return Vy.set(s,e.sort?e.sort():[e]),hs(s)}:KI().includes(t)?function(...e){return t.apply(mc(this),e),hs(Uy.get(this))}:function(...e){return hs(t.apply(mc(this),e))}}function JI(t){return typeof t=="function"?XI(t):(t instanceof IDBTransaction&&YI(t),HI(t,GI())?new Proxy(t,hu):t)}function hs(t){if(t instanceof IDBRequest)return WI(t);if(pc.has(t))return pc.get(t);const e=JI(t);return e!==t&&(pc.set(t,e),Od.set(e,t)),e}const mc=t=>Od.get(t);function jy(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=hs(o);return s&&o.addEventListener("upgradeneeded",l=>{s(hs(o.result),l.oldVersion,l.newVersion,hs(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const ZI=["get","getKey","getAll","getAllKeys","count"],eC=["put","add","delete","clear"],gc=new Map;function ep(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(gc.get(e))return gc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=eC.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||ZI.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return gc.set(e,r),r}QI(t=>({...t,get:(e,n,s)=>ep(e,n)||t.get(e,n,s),has:(e,n)=>!!ep(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(nC(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function nC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fu="@firebase/app",tp="0.9.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs=new pl("@firebase/app"),sC="@firebase/app-compat",iC="@firebase/analytics-compat",rC="@firebase/analytics",oC="@firebase/app-check-compat",aC="@firebase/app-check",lC="@firebase/auth",cC="@firebase/auth-compat",uC="@firebase/database",dC="@firebase/database-compat",hC="@firebase/functions",fC="@firebase/functions-compat",pC="@firebase/installations",mC="@firebase/installations-compat",gC="@firebase/messaging",yC="@firebase/messaging-compat",vC="@firebase/performance",bC="@firebase/performance-compat",wC="@firebase/remote-config",_C="@firebase/remote-config-compat",SC="@firebase/storage",TC="@firebase/storage-compat",EC="@firebase/firestore",IC="@firebase/firestore-compat",CC="firebase",xC="9.17.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pu="[DEFAULT]",AC={[fu]:"fire-core",[sC]:"fire-core-compat",[rC]:"fire-analytics",[iC]:"fire-analytics-compat",[aC]:"fire-app-check",[oC]:"fire-app-check-compat",[lC]:"fire-auth",[cC]:"fire-auth-compat",[uC]:"fire-rtdb",[dC]:"fire-rtdb-compat",[hC]:"fire-fn",[fC]:"fire-fn-compat",[pC]:"fire-iid",[mC]:"fire-iid-compat",[gC]:"fire-fcm",[yC]:"fire-fcm-compat",[vC]:"fire-perf",[bC]:"fire-perf-compat",[wC]:"fire-rc",[_C]:"fire-rc-compat",[SC]:"fire-gcs",[TC]:"fire-gcs-compat",[EC]:"fire-fst",[IC]:"fire-fst-compat","fire-js":"fire-js",[CC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca=new Map,mu=new Map;function kC(t,e){try{t.container.addComponent(e)}catch(n){Qs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function bn(t){const e=t.name;if(mu.has(e))return Qs.debug(`There were multiple attempts to register component ${e}.`),!1;mu.set(e,t);for(const n of Ca.values())kC(n,t);return!0}function ai(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},fs=new oi("app","Firebase",RC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new an("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fs.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po=xC;function zy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:pu,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw fs.create("bad-app-name",{appName:String(i)});if(n||(n=bI()),!n)throw fs.create("no-options");const r=Ca.get(i);if(r){if(Ur(n,r.options)&&Ur(s,r.config))return r;throw fs.create("duplicate-app",{appName:i})}const o=new UI(i);for(const l of mu.values())o.addComponent(l);const a=new OC(n,s,o);return Ca.set(i,a),a}function Dd(t=pu){const e=Ca.get(t);if(!e&&t===pu)return zy();if(!e)throw fs.create("no-app",{appName:t});return e}function Xt(t,e,n){var s;let i=(s=AC[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qs.warn(a.join(" "));return}bn(new an(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DC="firebase-heartbeat-database",PC=1,Vr="firebase-heartbeat-store";let yc=null;function qy(){return yc||(yc=jy(DC,PC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Vr)}}}).catch(t=>{throw fs.create("idb-open",{originalErrorMessage:t.message})})),yc}async function LC(t){try{return(await qy()).transaction(Vr).objectStore(Vr).get(Hy(t))}catch(e){if(e instanceof ln)Qs.warn(e.message);else{const n=fs.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qs.warn(n.message)}}}async function np(t,e){try{const s=(await qy()).transaction(Vr,"readwrite");return await s.objectStore(Vr).put(e,Hy(t)),s.done}catch(n){if(n instanceof ln)Qs.warn(n.message);else{const s=fs.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qs.warn(s.message)}}}function Hy(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MC=1024,NC=30*24*60*60*1e3;class FC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new BC(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=sp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=NC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=sp(),{heartbeatsToSend:n,unsentEntries:s}=$C(this._heartbeatsCache.heartbeats),i=Ia(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function sp(){return new Date().toISOString().substring(0,10)}function $C(t,e=MC){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),ip(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ip(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class BC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $y()?By().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await LC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return np(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return np(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ip(t){return Ia(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UC(t){bn(new an("platform-logger",e=>new tC(e),"PRIVATE")),bn(new an("heartbeat",e=>new FC(e),"PRIVATE")),Xt(fu,tp,t),Xt(fu,tp,"esm2017"),Xt("fire-js","")}UC("");var VC="firebase",jC="9.17.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xt(VC,jC,"app");const Gy="@firebase/installations",Pd="0.6.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky=1e4,Wy=`w:${Pd}`,Yy="FIS_v2",zC="https://firebaseinstallations.googleapis.com/v1",qC=60*60*1e3,HC="installations",GC="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KC={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Xs=new oi(HC,GC,KC);function Qy(t){return t instanceof ln&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xy({projectId:t}){return`${zC}/projects/${t}/installations`}function Jy(t){return{token:t.token,requestStatus:2,expiresIn:YC(t.expiresIn),creationTime:Date.now()}}async function Zy(t,e){const s=(await e.json()).error;return Xs.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function ev({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function WC(t,{refreshToken:e}){const n=ev(t);return n.append("Authorization",QC(e)),n}async function tv(t){const e=await t();return e.status>=500&&e.status<600?t():e}function YC(t){return Number(t.replace("s","000"))}function QC(t){return`${Yy} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XC({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=Xy(t),i=ev(t),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:Yy,appId:t.appId,sdkVersion:Wy},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await tv(()=>fetch(s,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:Jy(c.authToken)}}else throw await Zy("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nv(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JC(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZC=/^[cdef][\w-]{21}$/,gu="";function ex(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=tx(t);return ZC.test(n)?n:gu}catch{return gu}}function tx(t){return JC(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sv=new Map;function iv(t,e){const n=ml(t);rv(n,e),nx(n,e)}function rv(t,e){const n=sv.get(t);if(n)for(const s of n)s(e)}function nx(t,e){const n=sx();n&&n.postMessage({key:t,fid:e}),ix()}let Ls=null;function sx(){return!Ls&&"BroadcastChannel"in self&&(Ls=new BroadcastChannel("[Firebase] FID Change"),Ls.onmessage=t=>{rv(t.data.key,t.data.fid)}),Ls}function ix(){sv.size===0&&Ls&&(Ls.close(),Ls=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rx="firebase-installations-database",ox=1,Js="firebase-installations-store";let vc=null;function Ld(){return vc||(vc=jy(rx,ox,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Js)}}})),vc}async function xa(t,e){const n=ml(t),i=(await Ld()).transaction(Js,"readwrite"),r=i.objectStore(Js),o=await r.get(n);return await r.put(e,n),await i.done,(!o||o.fid!==e.fid)&&iv(t,e.fid),e}async function ov(t){const e=ml(t),s=(await Ld()).transaction(Js,"readwrite");await s.objectStore(Js).delete(e),await s.done}async function gl(t,e){const n=ml(t),i=(await Ld()).transaction(Js,"readwrite"),r=i.objectStore(Js),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&iv(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Md(t){let e;const n=await gl(t.appConfig,s=>{const i=ax(s),r=lx(t,i);return e=r.registrationPromise,r.installationEntry});return n.fid===gu?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function ax(t){const e=t||{fid:ex(),registrationStatus:0};return av(e)}function lx(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Xs.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=cx(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:ux(t)}:{installationEntry:e}}async function cx(t,e){try{const n=await XC(t,e);return xa(t.appConfig,n)}catch(n){throw Qy(n)&&n.customData.serverCode===409?await ov(t.appConfig):await xa(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function ux(t){let e=await rp(t.appConfig);for(;e.registrationStatus===1;)await nv(100),e=await rp(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Md(t);return s||n}return e}function rp(t){return gl(t,e=>{if(!e)throw Xs.create("installation-not-found");return av(e)})}function av(t){return dx(t)?{fid:t.fid,registrationStatus:0}:t}function dx(t){return t.registrationStatus===1&&t.registrationTime+Ky<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hx({appConfig:t,heartbeatServiceProvider:e},n){const s=fx(t,n),i=WC(t,n),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:Wy,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await tv(()=>fetch(s,a));if(l.ok){const c=await l.json();return Jy(c)}else throw await Zy("Generate Auth Token",l)}function fx(t,{fid:e}){return`${Xy(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nd(t,e=!1){let n;const s=await gl(t.appConfig,r=>{if(!lv(r))throw Xs.create("not-registered");const o=r.authToken;if(!e&&gx(o))return r;if(o.requestStatus===1)return n=px(t,e),r;{if(!navigator.onLine)throw Xs.create("app-offline");const a=vx(r);return n=mx(t,a),a}});return n?await n:s.authToken}async function px(t,e){let n=await op(t.appConfig);for(;n.authToken.requestStatus===1;)await nv(100),n=await op(t.appConfig);const s=n.authToken;return s.requestStatus===0?Nd(t,e):s}function op(t){return gl(t,e=>{if(!lv(e))throw Xs.create("not-registered");const n=e.authToken;return bx(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function mx(t,e){try{const n=await hx(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await xa(t.appConfig,s),n}catch(n){if(Qy(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ov(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await xa(t.appConfig,s)}throw n}}function lv(t){return t!==void 0&&t.registrationStatus===2}function gx(t){return t.requestStatus===2&&!yx(t)}function yx(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+qC}function vx(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function bx(t){return t.requestStatus===1&&t.requestTime+Ky<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wx(t){const e=t,{installationEntry:n,registrationPromise:s}=await Md(e);return s?s.catch(console.error):Nd(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _x(t,e=!1){const n=t;return await Sx(n),(await Nd(n,e)).token}async function Sx(t){const{registrationPromise:e}=await Md(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tx(t){if(!t||!t.options)throw bc("App Configuration");if(!t.name)throw bc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw bc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function bc(t){return Xs.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cv="installations",Ex="installations-internal",Ix=t=>{const e=t.getProvider("app").getImmediate(),n=Tx(e),s=ai(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},Cx=t=>{const e=t.getProvider("app").getImmediate(),n=ai(e,cv).getImmediate();return{getId:()=>wx(n),getToken:i=>_x(n,i)}};function xx(){bn(new an(cv,Ix,"PUBLIC")),bn(new an(Ex,Cx,"PRIVATE"))}xx();Xt(Gy,Pd);Xt(Gy,Pd,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa="analytics",Ax="firebase_id",kx="origin",Rx=60*1e3,Ox="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",uv="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht=new pl("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dv(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Dx(t,e){const n=document.createElement("script");n.src=`${uv}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function Px(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Lx(t,e,n,s,i,r){const o=s[i];try{if(o)await e[o];else{const l=(await dv(n)).find(c=>c.measurementId===i);l&&await e[l.appId]}}catch(a){Ht.error(a)}t("config",i,r)}async function Mx(t,e,n,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await dv(n);for(const l of o){const c=a.find(d=>d.measurementId===l),u=c&&e[c.appId];if(u)r.push(u);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",s,i||{})}catch(r){Ht.error(r)}}function Nx(t,e,n,s){async function i(r,o,a){try{r==="event"?await Mx(t,e,n,o,a):r==="config"?await Lx(t,e,n,s,o,a):r==="consent"?t("consent","update",a):t("set",o)}catch(l){Ht.error(l)}}return i}function Fx(t,e,n,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=Nx(r,t,e,n),{gtagCore:r,wrappedGtag:window[i]}}function $x(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(uv)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bx={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Jt=new oi("analytics","Analytics",Bx);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ux=30,Vx=1e3;class jx{constructor(e={},n=Vx){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const hv=new jx;function zx(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function qx(t){var e;const{appId:n,apiKey:s}=t,i={method:"GET",headers:zx(s)},r=Ox.replace("{app-id}",n),o=await fetch(r,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw Jt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Hx(t,e=hv,n){const{appId:s,apiKey:i,measurementId:r}=t.options;if(!s)throw Jt.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw Jt.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Wx;return setTimeout(async()=>{a.abort()},n!==void 0?n:Rx),fv({appId:s,apiKey:i,measurementId:r},o,a,e)}async function fv(t,{throttleEndTimeMillis:e,backoffCount:n},s,i=hv){var r;const{appId:o,measurementId:a}=t;try{await Gx(s,e)}catch(l){if(a)return Ht.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await qx(t);return i.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!Kx(c)){if(i.deleteThrottleMetadata(o),a)return Ht.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const u=Number((r=c==null?void 0:c.customData)===null||r===void 0?void 0:r.httpStatus)===503?Xf(n,i.intervalMillis,Ux):Xf(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,d),Ht.debug(`Calling attemptFetch again in ${u} millis`),fv(t,d,s,i)}}function Gx(t,e){return new Promise((n,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(r),s(Jt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Kx(t){if(!(t instanceof ln)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Wx{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Yx(t,e,n,s,i){if(i&&i.global){t("event",n,s);return}else{const r=await e,o=Object.assign(Object.assign({},s),{send_to:r});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qx(){if($y())try{await By()}catch(t){return Ht.warn(Jt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Ht.warn(Jt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Xx(t,e,n,s,i,r,o){var a;const l=Hx(t);l.then(f=>{n[f.measurementId]=f.appId,t.options.measurementId&&f.measurementId!==t.options.measurementId&&Ht.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>Ht.error(f)),e.push(l);const c=Qx().then(f=>{if(f)return s.getId()}),[u,d]=await Promise.all([l,c]);$x(r)||Dx(r,u.measurementId),i("js",new Date);const h=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return h[kx]="firebase",h.update=!0,d!=null&&(h[Ax]=d),i("config",u.measurementId,h),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx{constructor(e){this.app=e}_delete(){return delete Ir[this.app.options.appId],Promise.resolve()}}let Ir={},ap=[];const lp={};let wc="dataLayer",Zx="gtag",cp,pv,up=!1;function e1(){const t=[];if(Fy()&&t.push("This is a browser extension environment."),II()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=Jt.create("invalid-analytics-context",{errorInfo:e});Ht.warn(n.message)}}function t1(t,e,n){e1();const s=t.options.appId;if(!s)throw Jt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ht.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Jt.create("no-api-key");if(Ir[s]!=null)throw Jt.create("already-exists",{id:s});if(!up){Px(wc);const{wrappedGtag:r,gtagCore:o}=Fx(Ir,ap,lp,wc,Zx);pv=r,cp=o,up=!0}return Ir[s]=Xx(t,ap,lp,e,cp,wc,n),new Jx(t)}function n1(t=Dd()){t=it(t);const e=ai(t,Aa);return e.isInitialized()?e.getImmediate():s1(t)}function s1(t,e={}){const n=ai(t,Aa);if(n.isInitialized()){const i=n.getImmediate();if(Ur(e,n.getOptions()))return i;throw Jt.create("already-initialized")}return n.initialize({options:e})}function i1(t,e,n,s){t=it(t),Yx(pv,Ir[t.app.options.appId],e,n,s).catch(i=>Ht.error(i))}const dp="@firebase/analytics",hp="0.9.3";function r1(){bn(new an(Aa,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return t1(s,i,n)},"PUBLIC")),bn(new an("analytics-internal",t,"PRIVATE")),Xt(dp,hp),Xt(dp,hp,"esm2017");function t(e){try{const n=e.getProvider(Aa).getImmediate();return{logEvent:(s,i,r)=>i1(n,s,i,r)}}catch(n){throw Jt.create("interop-component-reg-failed",{reason:n})}}}r1();function Fd(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function mv(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const o1=mv,gv=new oi("auth","Firebase",mv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp=new pl("@firebase/auth");function oa(t,...e){fp.logLevel<=xe.ERROR&&fp.error(`Auth (${po}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(t,...e){throw $d(t,...e)}function pn(t,...e){return $d(t,...e)}function yv(t,e,n){const s=Object.assign(Object.assign({},o1()),{[e]:n});return new oi("auth","Firebase",s).create(e,{appName:t.name})}function a1(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&wn(t,"argument-error"),yv(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function $d(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return gv.create(t,...e)}function le(t,e,...n){if(!t)throw $d(e,...n)}function An(t){const e="INTERNAL ASSERTION FAILED: "+t;throw oa(e),new Error(e)}function Fn(t,e){t||An(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp=new Map;function kn(t){Fn(t instanceof Function,"Expected a class definition");let e=pp.get(t);return e?(Fn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,pp.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l1(t,e){const n=ai(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Ur(r,e??{}))return i;wn(i,"already-initialized")}return n.initialize({options:e})}function c1(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(kn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function u1(){return mp()==="http:"||mp()==="https:"}function mp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(u1()||Fy()||"connection"in navigator)?navigator.onLine:!0}function h1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Fn(n>e,"Short delay should be less than long delay!"),this.isMobile=SI()||TI()}get(){return d1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bd(t,e){Fn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;An("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;An("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;An("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p1=new mo(3e4,6e4);function m1(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function yl(t,e,n,s,i={}){return bv(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=fo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),vv.fetch()(wv(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function bv(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},f1),e);try{const i=new y1(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Yo(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Yo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Yo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Yo(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw yv(t,u,c);wn(t,u)}}catch(i){if(i instanceof ln)throw i;wn(t,"network-request-failed")}}async function g1(t,e,n,s,i={}){const r=await yl(t,e,n,s,i);return"mfaPendingCredential"in r&&wn(t,"multi-factor-auth-required",{_serverResponse:r}),r}function wv(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Bd(t.config,i):`${t.config.apiScheme}://${i}`}class y1{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(pn(this.auth,"network-request-failed")),p1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Yo(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=pn(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v1(t,e){return yl(t,"POST","/v1/accounts:delete",e)}async function b1(t,e){return yl(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function w1(t,e=!1){const n=it(t),s=await n.getIdToken(e),i=Ud(s);le(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Cr(_c(i.auth_time)),issuedAtTime:Cr(_c(i.iat)),expirationTime:Cr(_c(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function _c(t){return Number(t)*1e3}function Ud(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return oa("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ly(n);return i?JSON.parse(i):(oa("Failed to decode base64 JWT payload"),null)}catch(i){return oa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function _1(t){const e=Ud(t);return le(e,"internal-error"),le(typeof e.exp<"u","internal-error"),le(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof ln&&S1(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function S1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Cr(this.lastLoginAt),this.creationTime=Cr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ka(t){var e;const n=t.auth,s=await t.getIdToken(),i=await jr(t,b1(n,{idToken:s}));le(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?C1(r.providerUserInfo):[],a=I1(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new _v(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function E1(t){const e=it(t);await ka(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function I1(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function C1(t){return t.map(e=>{var{providerId:n}=e,s=Fd(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x1(t,e){const n=await bv(t,{},async()=>{const s=fo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=wv(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",vv.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){le(e.idToken,"internal-error"),le(typeof e.idToken<"u","internal-error"),le(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_1(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return le(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await x1(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new zr;return s&&(le(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(le(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(le(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zr,this.toJSON())}_performRefresh(){return An("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(t,e){le(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class js{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Fd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new T1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new _v(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await jr(this,this.stsTokenManager.getToken(this.auth,e));return le(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return w1(this,e)}reload(){return E1(this)}_assign(e){this!==e&&(le(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new js(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){le(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ka(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await jr(this,v1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,f=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(c=n.createdAt)!==null&&c!==void 0?c:void 0,p=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:v,emailVerified:T,isAnonymous:E,providerData:I,stsTokenManager:C}=n;le(v&&C,e,"internal-error");const S=zr.fromJSON(this.name,C);le(typeof v=="string",e,"internal-error"),Jn(d,e.name),Jn(h,e.name),le(typeof T=="boolean",e,"internal-error"),le(typeof E=="boolean",e,"internal-error"),Jn(f,e.name),Jn(g,e.name),Jn(y,e.name),Jn(_,e.name),Jn(m,e.name),Jn(p,e.name);const A=new js({uid:v,auth:e,email:h,emailVerified:T,displayName:d,isAnonymous:E,photoURL:g,phoneNumber:f,tenantId:y,stsTokenManager:S,createdAt:m,lastLoginAt:p});return I&&Array.isArray(I)&&(A.providerData=I.map(B=>Object.assign({},B))),_&&(A._redirectEventId=_),A}static async _fromIdTokenResponse(e,n,s=!1){const i=new zr;i.updateFromServerResponse(n);const r=new js({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await ka(r),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Sv.type="NONE";const gp=Sv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(t,e,n){return`firebase:${t}:${e}:${n}`}class Ii{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=aa(this.userKey,i.apiKey,r),this.fullPersistenceKey=aa("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?js._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Ii(kn(gp),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||kn(gp);const o=aa(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=js._fromJSON(e,u);c!==r&&(a=d),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Ii(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Ii(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Iv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Tv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xv(e))return"Blackberry";if(Av(e))return"Webos";if(Vd(e))return"Safari";if((e.includes("chrome/")||Ev(e))&&!e.includes("edge/"))return"Chrome";if(Cv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Tv(t=St()){return/firefox\//i.test(t)}function Vd(t=St()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ev(t=St()){return/crios\//i.test(t)}function Iv(t=St()){return/iemobile/i.test(t)}function Cv(t=St()){return/android/i.test(t)}function xv(t=St()){return/blackberry/i.test(t)}function Av(t=St()){return/webos/i.test(t)}function vl(t=St()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function A1(t=St()){var e;return vl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function k1(){return EI()&&document.documentMode===10}function kv(t=St()){return vl(t)||Cv(t)||Av(t)||xv(t)||/windows phone/i.test(t)||Iv(t)}function R1(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rv(t,e=[]){let n;switch(t){case"Browser":n=yp(St());break;case"Worker":n=`${yp(St())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${po}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vp(this),this.idTokenSubscription=new vp(this),this.beforeStateQueue=new O1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gv,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=kn(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Ii.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return le(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ka(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=h1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?it(e):null;return n&&le(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&le(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(kn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new oi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&kn(e)||this._popupRedirectResolver;le(n,this,"argument-error"),this.redirectPersistenceManager=await Ii.create(this,[kn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return le(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return le(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Rv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function bl(t){return it(t)}class vp{constructor(e){this.auth=e,this.observer=null,this.addObserver=RI(n=>this.observer=n)}get next(){return le(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function P1(t,e,n){const s=bl(t);le(s._canInitEmulator,s,"emulator-config-failed"),le(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=Ov(e),{host:o,port:a}=L1(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||M1()}function Ov(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function L1(t){const e=Ov(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:bp(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:bp(o)}}}function bp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function M1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return An("not implemented")}_getIdTokenResponse(e){return An("not implemented")}_linkToIdToken(e,n){return An("not implemented")}_getReauthenticationResolver(e){return An("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ci(t,e){return g1(t,"POST","/v1/accounts:signInWithIdp",m1(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N1="http://localhost";class Zs extends Dv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Zs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):wn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Fd(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Zs(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ci(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ci(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ci(e,n)}buildRequest(){const e={requestUri:N1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=fo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go extends jd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss extends go{constructor(){super("facebook.com")}static credential(e){return Zs._fromParams({providerId:ss.PROVIDER_ID,signInMethod:ss.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ss.credentialFromTaggedObject(e)}static credentialFromError(e){return ss.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ss.credential(e.oauthAccessToken)}catch{return null}}}ss.FACEBOOK_SIGN_IN_METHOD="facebook.com";ss.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends go{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Zs._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return xn.credential(n,s)}catch{return null}}}xn.GOOGLE_SIGN_IN_METHOD="google.com";xn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is extends go{constructor(){super("github.com")}static credential(e){return Zs._fromParams({providerId:is.PROVIDER_ID,signInMethod:is.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return is.credentialFromTaggedObject(e)}static credentialFromError(e){return is.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return is.credential(e.oauthAccessToken)}catch{return null}}}is.GITHUB_SIGN_IN_METHOD="github.com";is.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs extends go{constructor(){super("twitter.com")}static credential(e,n){return Zs._fromParams({providerId:rs.PROVIDER_ID,signInMethod:rs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return rs.credentialFromTaggedObject(e)}static credentialFromError(e){return rs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return rs.credential(n,s)}catch{return null}}}rs.TWITTER_SIGN_IN_METHOD="twitter.com";rs.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await js._fromIdTokenResponse(e,s,i),o=wp(s);return new Mi({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=wp(s);return new Mi({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function wp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra extends ln{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Ra.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Ra(e,n,s,i)}}function Pv(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Ra._fromErrorAndOperation(t,r,e,s):r})}async function F1(t,e,n=!1){const s=await jr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Mi._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $1(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await jr(t,Pv(s,i,e,t),n);le(r.idToken,s,"internal-error");const o=Ud(r.idToken);le(o,s,"internal-error");const{sub:a}=o;return le(t.uid===a,s,"user-mismatch"),Mi._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&wn(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B1(t,e,n=!1){const s="signIn",i=await Pv(t,s,e),r=await Mi._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}function U1(t,e,n,s){return it(t).onIdTokenChanged(e,n,s)}function V1(t,e,n){return it(t).beforeAuthStateChanged(e,n)}function j1(t,e,n,s){return it(t).onAuthStateChanged(e,n,s)}const Oa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Oa,"1"),this.storage.removeItem(Oa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z1(){const t=St();return Vd(t)||vl(t)}const q1=1e3,H1=10;class Mv extends Lv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=z1()&&R1(),this.fallbackToPolling=kv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);k1()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,H1):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},q1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Mv.type="LOCAL";const G1=Mv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv extends Lv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Nv.type="SESSION";const Fv=Nv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new wl(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await K1(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=zd("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(h.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(){return window}function Y1(t){mn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $v(){return typeof mn().WorkerGlobalScope<"u"&&typeof mn().importScripts=="function"}async function Q1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function X1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function J1(){return $v()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv="firebaseLocalStorageDb",Z1=1,Da="firebaseLocalStorage",Uv="fbase_key";class yo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function _l(t,e){return t.transaction([Da],e?"readwrite":"readonly").objectStore(Da)}function eA(){const t=indexedDB.deleteDatabase(Bv);return new yo(t).toPromise()}function vu(){const t=indexedDB.open(Bv,Z1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Da,{keyPath:Uv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Da)?e(s):(s.close(),await eA(),e(await vu()))})})}async function _p(t,e,n){const s=_l(t,!0).put({[Uv]:e,value:n});return new yo(s).toPromise()}async function tA(t,e){const n=_l(t,!1).get(e),s=await new yo(n).toPromise();return s===void 0?null:s.value}function Sp(t,e){const n=_l(t,!0).delete(e);return new yo(n).toPromise()}const nA=800,sA=3;class Vv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>sA)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $v()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wl._getInstance(J1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Q1(),!this.activeServiceWorker)return;this.sender=new W1(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||X1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vu();return await _p(e,Oa,"1"),await Sp(e,Oa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>_p(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>tA(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Sp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=_l(i,!1).getAll();return new yo(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Vv.type="LOCAL";const iA=Vv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function oA(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=pn("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",rA().appendChild(s)})}function aA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new mo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jv(t,e){return e?kn(e):(le(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd extends Dv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ci(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ci(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ci(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function lA(t){return B1(t.auth,new qd(t),t.bypassAuthState)}function cA(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),$1(n,new qd(t),t.bypassAuthState)}async function uA(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),F1(n,new qd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lA;case"linkViaPopup":case"linkViaRedirect":return uA;case"reauthViaPopup":case"reauthViaRedirect":return cA;default:wn(this.auth,"internal-error")}}resolve(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dA=new mo(2e3,1e4);async function hA(t,e,n){const s=bl(t);a1(t,e,jd);const i=jv(s,n);return new Ms(s,"signInViaPopup",e,i).executeNotNull()}class Ms extends zv{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Ms.currentPopupAction&&Ms.currentPopupAction.cancel(),Ms.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return le(e,this.auth,"internal-error"),e}async onExecution(){Fn(this.filter.length===1,"Popup operations only handle one event");const e=zd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(pn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(pn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ms.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,dA.get())};e()}}Ms.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fA="pendingRedirect",la=new Map;class pA extends zv{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=la.get(this.auth._key());if(!e){try{const s=await mA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}la.set(this.auth._key(),e)}return this.bypassAuthState||la.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function mA(t,e){const n=vA(e),s=yA(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function gA(t,e){la.set(t._key(),e)}function yA(t){return kn(t._redirectPersistence)}function vA(t){return aa(fA,t.config.apiKey,t.name)}async function bA(t,e,n=!1){const s=bl(t),i=jv(s,e),o=await new pA(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA=10*60*1e3;class _A{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!SA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!qv(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(pn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=wA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Tp(e))}saveEventToCache(e){this.cachedEventUids.add(Tp(e)),this.lastProcessedEventTime=Date.now()}}function Tp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function qv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function SA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TA(t,e={}){return yl(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,IA=/^https?/;async function CA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await TA(t);for(const n of e)try{if(xA(n))return}catch{}wn(t,"unauthorized-domain")}function xA(t){const e=yu(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!IA.test(n))return!1;if(EA.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA=new mo(3e4,6e4);function Ep(){const t=mn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function kA(t){return new Promise((e,n)=>{var s,i,r;function o(){Ep(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ep(),n(pn(t,"network-request-failed"))},timeout:AA.get()})}if(!((i=(s=mn().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=mn().gapi)===null||r===void 0)&&r.load)o();else{const a=aA("iframefcb");return mn()[a]=()=>{gapi.load?o():n(pn(t,"network-request-failed"))},oA(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ca=null,e})}let ca=null;function RA(t){return ca=ca||kA(t),ca}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OA=new mo(5e3,15e3),DA="__/auth/iframe",PA="emulator/auth/iframe",LA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},MA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function NA(t){const e=t.config;le(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Bd(e,PA):`https://${t.config.authDomain}/${DA}`,s={apiKey:e.apiKey,appName:t.name,v:po},i=MA.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${fo(s).slice(1)}`}async function FA(t){const e=await RA(t),n=mn().gapi;return le(n,t,"internal-error"),e.open({where:document.body,url:NA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:LA,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=pn(t,"network-request-failed"),a=mn().setTimeout(()=>{r(o)},OA.get());function l(){mn().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},BA=500,UA=600,VA="_blank",jA="http://localhost";class Ip{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zA(t,e,n,s=BA,i=UA){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},$A),{width:s.toString(),height:i.toString(),top:r,left:o}),c=St().toLowerCase();n&&(a=Ev(c)?VA:n),Tv(c)&&(e=e||jA,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[f,g])=>`${h}${f}=${g},`,"");if(A1(c)&&a!=="_self")return qA(e||"",a),new Ip(null);const d=window.open(e||"",a,u);le(d,t,"popup-blocked");try{d.focus()}catch{}return new Ip(d)}function qA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HA="__/auth/handler",GA="emulator/auth/handler";function Cp(t,e,n,s,i,r){le(t.config.authDomain,t,"auth-domain-config-required"),le(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:po,eventId:i};if(e instanceof jd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",kI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof go){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${KA(t)}?${fo(a).slice(1)}`}function KA({config:t}){return t.emulator?Bd(t,GA):`https://${t.authDomain}/${HA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc="webStorageSupport";class WA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fv,this._completeRedirectFn=bA,this._overrideRedirectResult=gA}async _openPopup(e,n,s,i){var r;Fn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=Cp(e,n,s,yu(),i);return zA(e,o,zd())}async _openRedirect(e,n,s,i){return await this._originValidation(e),Y1(Cp(e,n,s,yu(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Fn(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await FA(e),s=new _A(e);return n.register("authEvent",i=>(le(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Sc,{type:Sc},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Sc];o!==void 0&&n(!!o),wn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=CA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return kv()||Vd()||vl()}}const YA=WA;var xp="@firebase/auth",Ap="0.21.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){le(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function JA(t){bn(new an("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,l)=>{le(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),le(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Rv(t)},u=new D1(a,l,c);return c1(u,n),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),bn(new an("auth-internal",e=>{const n=bl(e.getProvider("auth").getImmediate());return(s=>new QA(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xt(xp,Ap,XA(t)),Xt(xp,Ap,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZA=5*60,ek=Ny("authIdTokenMaxAge")||ZA;let kp=null;const tk=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>ek)return;const i=n==null?void 0:n.token;kp!==i&&(kp=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function nk(t=Dd()){const e=ai(t,"auth");if(e.isInitialized())return e.getImmediate();const n=l1(t,{popupRedirectResolver:YA,persistence:[iA,G1,Fv]}),s=Ny("authTokenSyncURL");if(s){const r=tk(s);V1(n,r,()=>r(n.currentUser)),U1(n,o=>r(o))}const i=My("auth");return i&&P1(n,`http://${i}`),n}JA("Browser");var sk=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},J,Hd=Hd||{},ue=sk||self;function Pa(){}function Sl(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function vo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function ik(t){return Object.prototype.hasOwnProperty.call(t,Tc)&&t[Tc]||(t[Tc]=++rk)}var Tc="closure_uid_"+(1e9*Math.random()>>>0),rk=0;function ok(t,e,n){return t.call.apply(t.bind,arguments)}function ak(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function wt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?wt=ok:wt=ak,wt.apply(null,arguments)}function Qo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function dt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function Es(){this.s=this.s,this.o=this.o}var lk=0;Es.prototype.s=!1;Es.prototype.na=function(){!this.s&&(this.s=!0,this.M(),lk!=0)&&ik(this)};Es.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Hv=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Gd(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Rp(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Sl(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function _t(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}_t.prototype.h=function(){this.defaultPrevented=!0};var ck=function(){if(!ue.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ue.addEventListener("test",Pa,e),ue.removeEventListener("test",Pa,e)}catch{}return t}();function La(t){return/^[\s\xa0]*$/.test(t)}var Op=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ec(t,e){return t<e?-1:t>e?1:0}function Tl(){var t=ue.navigator;return t&&(t=t.userAgent)?t:""}function hn(t){return Tl().indexOf(t)!=-1}function Kd(t){return Kd[" "](t),t}Kd[" "]=Pa;function uk(t){var e=fk;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var dk=hn("Opera"),Ni=hn("Trident")||hn("MSIE"),Gv=hn("Edge"),bu=Gv||Ni,Kv=hn("Gecko")&&!(Tl().toLowerCase().indexOf("webkit")!=-1&&!hn("Edge"))&&!(hn("Trident")||hn("MSIE"))&&!hn("Edge"),hk=Tl().toLowerCase().indexOf("webkit")!=-1&&!hn("Edge");function Wv(){var t=ue.document;return t?t.documentMode:void 0}var Ma;e:{var Ic="",Cc=function(){var t=Tl();if(Kv)return/rv:([^\);]+)(\)|;)/.exec(t);if(Gv)return/Edge\/([\d\.]+)/.exec(t);if(Ni)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(hk)return/WebKit\/(\S+)/.exec(t);if(dk)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Cc&&(Ic=Cc?Cc[1]:""),Ni){var xc=Wv();if(xc!=null&&xc>parseFloat(Ic)){Ma=String(xc);break e}}Ma=Ic}var fk={};function pk(){return uk(function(){let t=0;const e=Op(String(Ma)).split("."),n=Op("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=Ec(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Ec(i[2].length==0,r[2].length==0)||Ec(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var wu;if(ue.document&&Ni){var Dp=Wv();wu=Dp||parseInt(Ma,10)||void 0}else wu=void 0;var mk=wu;function qr(t,e){if(_t.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Kv){e:{try{Kd(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:gk[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&qr.X.h.call(this)}}dt(qr,_t);var gk={2:"touch",3:"pen",4:"mouse"};qr.prototype.h=function(){qr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var bo="closure_listenable_"+(1e6*Math.random()|0),yk=0;function vk(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++yk,this.ba=this.ea=!1}function El(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Wd(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Yv(t){const e={};for(const n in t)e[n]=t[n];return e}const Pp="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Qv(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<Pp.length;r++)n=Pp[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Il(t){this.src=t,this.g={},this.h=0}Il.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Su(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new vk(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function _u(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=Hv(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(El(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Su(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var Yd="closure_lm_"+(1e6*Math.random()|0),Ac={};function Xv(t,e,n,s,i){if(s&&s.once)return Zv(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Xv(t,e[r],n,s,i);return null}return n=Jd(n),t&&t[bo]?t.N(e,n,vo(s)?!!s.capture:!!s,i):Jv(t,e,n,!1,s,i)}function Jv(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=vo(i)?!!i.capture:!!i,a=Xd(t);if(a||(t[Yd]=a=new Il(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=bk(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)ck||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(tb(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function bk(){function t(n){return e.call(t.src,t.listener,n)}const e=wk;return t}function Zv(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Zv(t,e[r],n,s,i);return null}return n=Jd(n),t&&t[bo]?t.O(e,n,vo(s)?!!s.capture:!!s,i):Jv(t,e,n,!0,s,i)}function eb(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)eb(t,e[r],n,s,i);else s=vo(s)?!!s.capture:!!s,n=Jd(n),t&&t[bo]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Su(r,n,s,i),-1<n&&(El(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Xd(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Su(e,n,s,i)),(n=-1<t?e[t]:null)&&Qd(n))}function Qd(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[bo])_u(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(tb(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Xd(e))?(_u(n,t),n.h==0&&(n.src=null,e[Yd]=null)):El(t)}}}function tb(t){return t in Ac?Ac[t]:Ac[t]="on"+t}function wk(t,e){if(t.ba)t=!0;else{e=new qr(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Qd(t),t=n.call(s,e)}return t}function Xd(t){return t=t[Yd],t instanceof Il?t:null}var kc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Jd(t){return typeof t=="function"?t:(t[kc]||(t[kc]=function(e){return t.handleEvent(e)}),t[kc])}function rt(){Es.call(this),this.i=new Il(this),this.P=this,this.I=null}dt(rt,Es);rt.prototype[bo]=!0;rt.prototype.removeEventListener=function(t,e,n,s){eb(this,t,e,n,s)};function ut(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new _t(e,t);else if(e instanceof _t)e.target=e.target||t;else{var i=e;e=new _t(s,t),Qv(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Xo(o,s,!0,e)&&i}if(o=e.g=t,i=Xo(o,s,!0,e)&&i,i=Xo(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Xo(o,s,!1,e)&&i}rt.prototype.M=function(){if(rt.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)El(n[s]);delete t.g[e],t.h--}}this.I=null};rt.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};rt.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Xo(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&_u(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var Zd=ue.JSON.stringify;function _k(){var t=ib;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Sk{constructor(){this.h=this.g=null}add(e,n){const s=nb.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var nb=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Tk,t=>t.reset());class Tk{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Ek(t){ue.setTimeout(()=>{throw t},0)}function sb(t,e){Tu||Ik(),Eu||(Tu(),Eu=!0),ib.add(t,e)}var Tu;function Ik(){var t=ue.Promise.resolve(void 0);Tu=function(){t.then(Ck)}}var Eu=!1,ib=new Sk;function Ck(){for(var t;t=_k();){try{t.h.call(t.g)}catch(n){Ek(n)}var e=nb;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Eu=!1}function Cl(t,e){rt.call(this),this.h=t||1,this.g=e||ue,this.j=wt(this.lb,this),this.l=Date.now()}dt(Cl,rt);J=Cl.prototype;J.ca=!1;J.R=null;J.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ut(this,"tick"),this.ca&&(eh(this),this.start()))}};J.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function eh(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}J.M=function(){Cl.X.M.call(this),eh(this),delete this.g};function th(t,e,n){if(typeof t=="function")n&&(t=wt(t,n));else if(t&&typeof t.handleEvent=="function")t=wt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ue.setTimeout(t,e||0)}function rb(t){t.g=th(()=>{t.g=null,t.i&&(t.i=!1,rb(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class xk extends Es{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:rb(this)}M(){super.M(),this.g&&(ue.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Hr(t){Es.call(this),this.h=t,this.g={}}dt(Hr,Es);var Lp=[];function ob(t,e,n,s){Array.isArray(n)||(n&&(Lp[0]=n.toString()),n=Lp);for(var i=0;i<n.length;i++){var r=Xv(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function ab(t){Wd(t.g,function(e,n){this.g.hasOwnProperty(n)&&Qd(e)},t),t.g={}}Hr.prototype.M=function(){Hr.X.M.call(this),ab(this)};Hr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function xl(){this.g=!0}xl.prototype.Aa=function(){this.g=!1};function Ak(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var d=u.split("_");o=2<=d.length&&d[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function kk(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function bi(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Ok(t,n)+(s?" "+s:"")})}function Rk(t,e){t.info(function(){return"TIMEOUT: "+e})}xl.prototype.info=function(){};function Ok(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Zd(n)}catch{return e}}var li={},Mp=null;function Al(){return Mp=Mp||new rt}li.Pa="serverreachability";function lb(t){_t.call(this,li.Pa,t)}dt(lb,_t);function Gr(t){const e=Al();ut(e,new lb(e))}li.STAT_EVENT="statevent";function cb(t,e){_t.call(this,li.STAT_EVENT,t),this.stat=e}dt(cb,_t);function It(t){const e=Al();ut(e,new cb(e,t))}li.Qa="timingevent";function ub(t,e){_t.call(this,li.Qa,t),this.size=e}dt(ub,_t);function wo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ue.setTimeout(function(){t()},e)}var kl={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},db={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function nh(){}nh.prototype.h=null;function Np(t){return t.h||(t.h=t.i())}function hb(){}var _o={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function sh(){_t.call(this,"d")}dt(sh,_t);function ih(){_t.call(this,"c")}dt(ih,_t);var Iu;function Rl(){}dt(Rl,nh);Rl.prototype.g=function(){return new XMLHttpRequest};Rl.prototype.i=function(){return{}};Iu=new Rl;function So(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Hr(this),this.O=Dk,t=bu?125:void 0,this.T=new Cl(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new fb}function fb(){this.i=null,this.g="",this.h=!1}var Dk=45e3,Cu={},Na={};J=So.prototype;J.setTimeout=function(t){this.O=t};function xu(t,e,n){t.K=1,t.v=Dl($n(e)),t.s=n,t.P=!0,pb(t,null)}function pb(t,e){t.F=Date.now(),To(t),t.A=$n(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Sb(n.i,"t",s),t.C=0,n=t.l.H,t.h=new fb,t.g=zb(t.l,n?e:null,!t.s),0<t.N&&(t.L=new xk(wt(t.La,t,t.g),t.N)),ob(t.S,t.g,"readystatechange",t.ib),e=t.H?Yv(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Gr(),Ak(t.j,t.u,t.A,t.m,t.U,t.s)}J.ib=function(t){t=t.target;const e=this.L;e&&Rn(t)==3?e.l():this.La(t)};J.La=function(t){try{if(t==this.g)e:{const u=Rn(this.g);var e=this.g.Ea();const d=this.g.aa();if(!(3>u)&&(u!=3||bu||this.g&&(this.h.h||this.g.fa()||Up(this.g)))){this.I||u!=4||e==7||(e==8||0>=d?Gr(3):Gr(2)),Ol(this);var n=this.g.aa();this.Y=n;t:if(mb(this)){var s=Up(this.g);t="";var i=s.length,r=Rn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ns(this),xr(this);var o="";break t}this.h.i=new ue.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,kk(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!La(a)){var c=a;break t}}c=null}if(n=c)bi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Au(this,n);else{this.i=!1,this.o=3,It(12),Ns(this),xr(this);break e}}this.P?(gb(this,u,o),bu&&this.i&&u==3&&(ob(this.S,this.T,"tick",this.hb),this.T.start())):(bi(this.j,this.m,o,null),Au(this,o)),u==4&&Ns(this),this.i&&!this.I&&(u==4?Bb(this.l,this):(this.i=!1,To(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,It(12)):(this.o=0,It(13)),Ns(this),xr(this)}}}catch{}finally{}};function mb(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function gb(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=Pk(t,n),i==Na){e==4&&(t.o=4,It(14),s=!1),bi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Cu){t.o=4,It(15),bi(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else bi(t.j,t.m,i,null),Au(t,i);mb(t)&&i!=Na&&i!=Cu&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,It(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),dh(e),e.K=!0,It(11))):(bi(t.j,t.m,n,"[Invalid Chunked Response]"),Ns(t),xr(t))}J.hb=function(){if(this.g){var t=Rn(this.g),e=this.g.fa();this.C<e.length&&(Ol(this),gb(this,t,e),this.i&&t!=4&&To(this))}};function Pk(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Na:(n=Number(e.substring(n,s)),isNaN(n)?Cu:(s+=1,s+n>e.length?Na:(e=e.substr(s,n),t.C=s+n,e)))}J.cancel=function(){this.I=!0,Ns(this)};function To(t){t.V=Date.now()+t.O,yb(t,t.O)}function yb(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=wo(wt(t.gb,t),e)}function Ol(t){t.B&&(ue.clearTimeout(t.B),t.B=null)}J.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Rk(this.j,this.A),this.K!=2&&(Gr(),It(17)),Ns(this),this.o=2,xr(this)):yb(this,this.V-t)};function xr(t){t.l.G==0||t.I||Bb(t.l,t)}function Ns(t){Ol(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,eh(t.T),ab(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Au(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||ku(n.h,t))){if(!t.J&&ku(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ba(n),Ml(n);else break e;uh(n),It(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=wo(wt(n.cb,n),6e3));if(1>=Ib(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Fs(n,11)}else if((t.J||n.g==t)&&Ba(n),!La(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const u=c[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const d=c[4];d!=null&&(n.Ca=d,n.j.info("SVER="+n.Ca));const h=c[5];h!=null&&typeof h=="number"&&0<h&&(s=1.5*h,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const f=t.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var r=s.h;r.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(rh(r,r.h),r.h=null))}if(s.D){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(s.za=y,$e(s.F,s.D,y))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=jb(s,s.H?s.ka:null,s.V),o.J){Cb(s.h,o);var a=o,l=s.J;l&&a.setTimeout(l),a.B&&(Ol(a),To(a)),s.g=o}else Fb(s);0<n.i.length&&Nl(n)}else c[0]!="stop"&&c[0]!="close"||Fs(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Fs(n,7):ch(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}Gr(4)}catch{}}function Lk(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Sl(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Mk(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Sl(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function vb(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Sl(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Mk(t),s=Lk(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var bb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Nk(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function zs(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof zs){this.h=e!==void 0?e:t.h,Fa(this,t.j),this.s=t.s,this.g=t.g,$a(this,t.m),this.l=t.l,e=t.i;var n=new Kr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Fp(this,n),this.o=t.o}else t&&(n=String(t).match(bb))?(this.h=!!e,Fa(this,n[1]||"",!0),this.s=hr(n[2]||""),this.g=hr(n[3]||"",!0),$a(this,n[4]),this.l=hr(n[5]||"",!0),Fp(this,n[6]||"",!0),this.o=hr(n[7]||"")):(this.h=!!e,this.i=new Kr(null,this.h))}zs.prototype.toString=function(){var t=[],e=this.j;e&&t.push(fr(e,$p,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(fr(e,$p,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(fr(n,n.charAt(0)=="/"?Bk:$k,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",fr(n,Vk)),t.join("")};function $n(t){return new zs(t)}function Fa(t,e,n){t.j=n?hr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function $a(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Fp(t,e,n){e instanceof Kr?(t.i=e,jk(t.i,t.h)):(n||(e=fr(e,Uk)),t.i=new Kr(e,t.h))}function $e(t,e,n){t.i.set(e,n)}function Dl(t){return $e(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function hr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function fr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Fk),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Fk(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var $p=/[#\/\?@]/g,$k=/[#\?:]/g,Bk=/[#\?]/g,Uk=/[#\?@]/g,Vk=/#/g;function Kr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Is(t){t.g||(t.g=new Map,t.h=0,t.i&&Nk(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}J=Kr.prototype;J.add=function(t,e){Is(this),this.i=null,t=Xi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function wb(t,e){Is(t),e=Xi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function _b(t,e){return Is(t),e=Xi(t,e),t.g.has(e)}J.forEach=function(t,e){Is(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};J.oa=function(){Is(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};J.W=function(t){Is(this);let e=[];if(typeof t=="string")_b(this,t)&&(e=e.concat(this.g.get(Xi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};J.set=function(t,e){return Is(this),this.i=null,t=Xi(this,t),_b(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};J.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Sb(t,e,n){wb(t,e),0<n.length&&(t.i=null,t.g.set(Xi(t,e),Gd(n)),t.h+=n.length)}J.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Xi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function jk(t,e){e&&!t.j&&(Is(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(wb(this,s),Sb(this,i,n))},t)),t.j=e}var zk=class{constructor(e,n){this.h=e,this.g=n}};function Tb(t){this.l=t||qk,ue.PerformanceNavigationTiming?(t=ue.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ue.g&&ue.g.Ga&&ue.g.Ga()&&ue.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var qk=10;function Eb(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Ib(t){return t.h?1:t.g?t.g.size:0}function ku(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function rh(t,e){t.g?t.g.add(e):t.h=e}function Cb(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Tb.prototype.cancel=function(){if(this.i=xb(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function xb(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Gd(t.i)}function oh(){}oh.prototype.stringify=function(t){return ue.JSON.stringify(t,void 0)};oh.prototype.parse=function(t){return ue.JSON.parse(t,void 0)};function Hk(){this.g=new oh}function Gk(t,e,n){const s=n||"";try{vb(t,function(i,r){let o=i;vo(i)&&(o=Zd(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function Kk(t,e){const n=new xl;if(ue.Image){const s=new Image;s.onload=Qo(Jo,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Qo(Jo,n,s,"TestLoadImage: error",!1,e),s.onabort=Qo(Jo,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Qo(Jo,n,s,"TestLoadImage: timeout",!1,e),ue.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Jo(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Eo(t){this.l=t.ac||null,this.j=t.jb||!1}dt(Eo,nh);Eo.prototype.g=function(){return new Pl(this.l,this.j)};Eo.prototype.i=function(t){return function(){return t}}({});function Pl(t,e){rt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ah,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}dt(Pl,rt);var ah=0;J=Pl.prototype;J.open=function(t,e){if(this.readyState!=ah)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Wr(this)};J.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||ue).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};J.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Io(this)),this.readyState=ah};J.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Wr(this)),this.g&&(this.readyState=3,Wr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof ue.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ab(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Ab(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}J.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Io(this):Wr(this),this.readyState==3&&Ab(this)}};J.Va=function(t){this.g&&(this.response=this.responseText=t,Io(this))};J.Ua=function(t){this.g&&(this.response=t,Io(this))};J.ga=function(){this.g&&Io(this)};function Io(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Wr(t)}J.setRequestHeader=function(t,e){this.v.append(t,e)};J.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};J.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Wr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Pl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Wk=ue.JSON.parse;function He(t){rt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=kb,this.K=this.L=!1}dt(He,rt);var kb="",Yk=/^https?$/i,Qk=["POST","PUT"];J=He.prototype;J.Ka=function(t){this.L=t};J.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Iu.g(),this.C=this.u?Np(this.u):Np(Iu),this.g.onreadystatechange=wt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){Bp(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=ue.FormData&&t instanceof ue.FormData,!(0<=Hv(Qk,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Db(this),0<this.B&&((this.K=Xk(this.g))?(this.g.timeout=this.B,this.g.ontimeout=wt(this.qa,this)):this.A=th(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Bp(this,r)}};function Xk(t){return Ni&&pk()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}J.qa=function(){typeof Hd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ut(this,"timeout"),this.abort(8))};function Bp(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Rb(t),Ll(t)}function Rb(t){t.D||(t.D=!0,ut(t,"complete"),ut(t,"error"))}J.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ut(this,"complete"),ut(this,"abort"),Ll(this))};J.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ll(this,!0)),He.X.M.call(this)};J.Ha=function(){this.s||(this.F||this.v||this.l?Ob(this):this.fb())};J.fb=function(){Ob(this)};function Ob(t){if(t.h&&typeof Hd<"u"&&(!t.C[1]||Rn(t)!=4||t.aa()!=2)){if(t.v&&Rn(t)==4)th(t.Ha,0,t);else if(ut(t,"readystatechange"),Rn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(bb)[1]||null;if(!i&&ue.self&&ue.self.location){var r=ue.self.location.protocol;i=r.substr(0,r.length-1)}s=!Yk.test(i?i.toLowerCase():"")}n=s}if(n)ut(t,"complete"),ut(t,"success");else{t.m=6;try{var o=2<Rn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Rb(t)}}finally{Ll(t)}}}}function Ll(t,e){if(t.g){Db(t);const n=t.g,s=t.C[0]?Pa:null;t.g=null,t.C=null,e||ut(t,"ready");try{n.onreadystatechange=s}catch{}}}function Db(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(ue.clearTimeout(t.A),t.A=null)}function Rn(t){return t.g?t.g.readyState:0}J.aa=function(){try{return 2<Rn(this)?this.g.status:-1}catch{return-1}};J.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};J.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Wk(e)}};function Up(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case kb:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}J.Ea=function(){return this.m};J.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Pb(t){let e="";return Wd(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function lh(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Pb(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):$e(t,e,n))}function lr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Lb(t){this.Ca=0,this.i=[],this.j=new xl,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=lr("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=lr("baseRetryDelayMs",5e3,t),this.bb=lr("retryDelaySeedMs",1e4,t),this.$a=lr("forwardChannelMaxRetries",2,t),this.ta=lr("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Tb(t&&t.concurrentRequestLimit),this.Fa=new Hk,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}J=Lb.prototype;J.ma=8;J.G=1;function ch(t){if(Mb(t),t.G==3){var e=t.U++,n=$n(t.F);$e(n,"SID",t.I),$e(n,"RID",e),$e(n,"TYPE","terminate"),Co(t,n),e=new So(t,t.j,e,void 0),e.K=2,e.v=Dl($n(n)),n=!1,ue.navigator&&ue.navigator.sendBeacon&&(n=ue.navigator.sendBeacon(e.v.toString(),"")),!n&&ue.Image&&(new Image().src=e.v,n=!0),n||(e.g=zb(e.l,null),e.g.da(e.v)),e.F=Date.now(),To(e)}Vb(t)}function Ml(t){t.g&&(dh(t),t.g.cancel(),t.g=null)}function Mb(t){Ml(t),t.u&&(ue.clearTimeout(t.u),t.u=null),Ba(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&ue.clearTimeout(t.m),t.m=null)}function Nl(t){Eb(t.h)||t.m||(t.m=!0,sb(t.Ja,t),t.C=0)}function Jk(t,e){return Ib(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=wo(wt(t.Ja,t,e),Ub(t,t.C)),t.C++,!0)}J.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new So(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=Yv(r),Qv(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Nb(this,i,e),n=$n(this.F),$e(n,"RID",t),$e(n,"CVER",22),this.D&&$e(n,"X-HTTP-Session-Id",this.D),Co(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(Pb(r)))+"&"+e:this.o&&lh(n,this.o,r)),rh(this.h,i),this.Ya&&$e(n,"TYPE","init"),this.O?($e(n,"$req",e),$e(n,"SID","null"),i.Z=!0,xu(i,n,null)):xu(i,n,e),this.G=2}}else this.G==3&&(t?Vp(this,t):this.i.length==0||Eb(this.h)||Vp(this))};function Vp(t,e){var n;e?n=e.m:n=t.U++;const s=$n(t.F);$e(s,"SID",t.I),$e(s,"RID",n),$e(s,"AID",t.T),Co(t,s),t.o&&t.s&&lh(s,t.o,t.s),n=new So(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Nb(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),rh(t.h,n),xu(n,s,e)}function Co(t,e){t.ia&&Wd(t.ia,function(n,s){$e(e,s,n)}),t.l&&vb({},function(n,s){$e(e,s,n)})}function Nb(t,e,n){n=Math.min(t.i.length,n);var s=t.l?wt(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const u=i[l].g;if(c-=r,0>c)r=Math.max(0,i[l].h-100),a=!1;else try{Gk(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Fb(t){t.g||t.u||(t.Z=1,sb(t.Ia,t),t.A=0)}function uh(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=wo(wt(t.Ia,t),Ub(t,t.A)),t.A++,!0)}J.Ia=function(){if(this.u=null,$b(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=wo(wt(this.eb,this),t)}};J.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,It(10),Ml(this),$b(this))};function dh(t){t.B!=null&&(ue.clearTimeout(t.B),t.B=null)}function $b(t){t.g=new So(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=$n(t.sa);$e(e,"RID","rpc"),$e(e,"SID",t.I),$e(e,"CI",t.L?"0":"1"),$e(e,"AID",t.T),$e(e,"TYPE","xmlhttp"),Co(t,e),t.o&&t.s&&lh(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Dl($n(e)),n.s=null,n.P=!0,pb(n,t)}J.cb=function(){this.v!=null&&(this.v=null,Ml(this),uh(this),It(19))};function Ba(t){t.v!=null&&(ue.clearTimeout(t.v),t.v=null)}function Bb(t,e){var n=null;if(t.g==e){Ba(t),dh(t),t.g=null;var s=2}else if(ku(t.h,e))n=e.D,Cb(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=Al(),ut(s,new ub(s,n)),Nl(t)}else Fb(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&Jk(t,e)||s==2&&uh(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Fs(t,5);break;case 4:Fs(t,10);break;case 3:Fs(t,6);break;default:Fs(t,2)}}}function Ub(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Fs(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=wt(t.kb,t);n||(n=new zs("//www.google.com/images/cleardot.gif"),ue.location&&ue.location.protocol=="http"||Fa(n,"https"),Dl(n)),Kk(n.toString(),s)}else It(2);t.G=0,t.l&&t.l.va(e),Vb(t),Mb(t)}J.kb=function(t){t?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))};function Vb(t){if(t.G=0,t.la=[],t.l){const e=xb(t.h);(e.length!=0||t.i.length!=0)&&(Rp(t.la,e),Rp(t.la,t.i),t.h.i.length=0,Gd(t.i),t.i.length=0),t.l.ua()}}function jb(t,e,n){var s=n instanceof zs?$n(n):new zs(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),$a(s,s.m);else{var i=ue.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new zs(null,void 0);s&&Fa(r,s),e&&(r.g=e),i&&$a(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&$e(s,n,e),$e(s,"VER",t.ma),Co(t,s),s}function zb(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new He(new Eo({jb:!0})):new He(t.ra),e.Ka(t.H),e}function qb(){}J=qb.prototype;J.xa=function(){};J.wa=function(){};J.va=function(){};J.ua=function(){};J.Ra=function(){};function Ua(){if(Ni&&!(10<=Number(mk)))throw Error("Environmental error: no available transport.")}Ua.prototype.g=function(t,e){return new Gt(t,e)};function Gt(t,e){rt.call(this),this.g=new Lb(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!La(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!La(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ji(this)}dt(Gt,rt);Gt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;It(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=jb(t,null,t.V),Nl(t)};Gt.prototype.close=function(){ch(this.g)};Gt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Zd(t),t=n);e.i.push(new zk(e.ab++,t)),e.G==3&&Nl(e)};Gt.prototype.M=function(){this.g.l=null,delete this.j,ch(this.g),delete this.g,Gt.X.M.call(this)};function Hb(t){sh.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}dt(Hb,sh);function Gb(){ih.call(this),this.status=1}dt(Gb,ih);function Ji(t){this.g=t}dt(Ji,qb);Ji.prototype.xa=function(){ut(this.g,"a")};Ji.prototype.wa=function(t){ut(this.g,new Hb(t))};Ji.prototype.va=function(t){ut(this.g,new Gb)};Ji.prototype.ua=function(){ut(this.g,"b")};Ua.prototype.createWebChannel=Ua.prototype.g;Gt.prototype.send=Gt.prototype.u;Gt.prototype.open=Gt.prototype.m;Gt.prototype.close=Gt.prototype.close;kl.NO_ERROR=0;kl.TIMEOUT=8;kl.HTTP_ERROR=6;db.COMPLETE="complete";hb.EventType=_o;_o.OPEN="a";_o.CLOSE="b";_o.ERROR="c";_o.MESSAGE="d";rt.prototype.listen=rt.prototype.N;He.prototype.listenOnce=He.prototype.O;He.prototype.getLastError=He.prototype.Oa;He.prototype.getLastErrorCode=He.prototype.Ea;He.prototype.getStatus=He.prototype.aa;He.prototype.getResponseJson=He.prototype.Sa;He.prototype.getResponseText=He.prototype.fa;He.prototype.send=He.prototype.da;He.prototype.setWithCredentials=He.prototype.Ka;var Zk=function(){return new Ua},eR=function(){return Al()},Rc=kl,tR=db,nR=li,jp={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},sR=Eo,Zo=hb,iR=He;const zp="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ft=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zi="9.17.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei=new pl("@firebase/firestore");function qp(){return ei.logLevel}function Z(t,...e){if(ei.logLevel<=xe.DEBUG){const n=e.map(hh);ei.debug(`Firestore (${Zi}): ${t}`,...n)}}function Bn(t,...e){if(ei.logLevel<=xe.ERROR){const n=e.map(hh);ei.error(`Firestore (${Zi}): ${t}`,...n)}}function Ru(t,...e){if(ei.logLevel<=xe.WARN){const n=e.map(hh);ei.warn(`Firestore (${Zi}): ${t}`,...n)}}function hh(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(t="Unexpected state"){const e=`FIRESTORE (${Zi}) INTERNAL ASSERTION FAILED: `+t;throw Bn(e),new Error(e)}function Ne(t,e){t||ae()}function me(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends ln{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ft.UNAUTHENTICATED))}shutdown(){}}class oR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class aR{constructor(e){this.t=e,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new Pn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Pn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Pn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ne(typeof s.accessToken=="string"),new Kb(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ne(e===null||typeof e=="string"),new ft(e)}}let lR=class{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Ne(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}};class cR{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new lR(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class uR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}let dR=class{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=r=>{r.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ne(typeof n.token=="string"),this.A=n.token,new uR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wb=class{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=hR(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}};function Ae(t,e){return t<e?-1:t>e?1:0}function Fi(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ze.fromMillis(Date.now())}static fromDate(e){return Ze.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Ze(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new fe(e)}static min(){return new fe(new Ze(0,0))}static max(){return new fe(new Ze(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,n,s){n===void 0?n=0:n>e.length&&ae(),s===void 0?s=e.length-n:s>e.length-n&&ae(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Yr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Yr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Fe extends Yr{construct(e,n,s){return new Fe(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new W(D.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new Fe(n)}static emptyPath(){return new Fe([])}}const fR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yt extends Yr{construct(e,n,s){return new yt(e,n,s)}static isValidIdentifier(e){return fR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new yt(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new W(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new W(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new W(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new W(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new yt(n)}static emptyPath(){return new yt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.path=e}static fromPath(e){return new se(Fe.fromString(e))}static fromName(e){return new se(Fe.fromString(e).popFirst(5))}static empty(){return new se(Fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new Fe(e.slice()))}}function pR(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=fe.fromTimestamp(s===1e9?new Ze(n+1,0):new Ze(n,s));return new ws(i,se.empty(),e)}function mR(t){return new ws(t.readTime,t.key,-1)}class ws{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new ws(fe.min(),se.empty(),-1)}static max(){return new ws(fe.max(),se.empty(),-1)}}function gR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=se.comparator(t.documentKey,e.documentKey),n!==0?n:Ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class vR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xo(t){if(t.code!==D.FAILED_PRECONDITION||t.message!==yR)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ae(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,s)=>{n(e)})}static reject(e){return new F((n,s)=>{s(e)})}static waitFor(e){return new F((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=F.resolve(!1);for(const s of e)n=n.next(i=>i?F.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new F((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new F((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Ao(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}fh.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(e,n,s,i,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Qr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Qr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Qr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ci(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Yb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(t){return t==null}function Va(t){return t===0&&1/t==-1/0}function wR(t){return typeof t=="number"&&Number.isInteger(t)&&!Va(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Tt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new Tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Tt.EMPTY_BYTE_STRING=new Tt("");const _R=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _s(t){if(Ne(!!t),typeof t=="string"){let e=0;const n=_R.exec(t);if(Ne(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Xe(t.seconds),nanos:Xe(t.nanos)}}function Xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function $i(t){return typeof t=="string"?Tt.fromBase64String(t):Tt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qb(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Xb(t){const e=t.mapValue.fields.__previous_value__;return Qb(e)?Xb(e):e}function Xr(t){const e=_s(t.mapValue.fields.__local_write_time__.timestampValue);return new Ze(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ti(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Qb(t)?4:SR(t)?9007199254740991:10:ae()}function _n(t,e){if(t===e)return!0;const n=ti(t);if(n!==ti(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Xr(t).isEqual(Xr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=_s(s.timestampValue),o=_s(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return $i(s.bytesValue).isEqual($i(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Xe(s.geoPointValue.latitude)===Xe(i.geoPointValue.latitude)&&Xe(s.geoPointValue.longitude)===Xe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Xe(s.integerValue)===Xe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=Xe(s.doubleValue),o=Xe(i.doubleValue);return r===o?Va(r)===Va(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Fi(t.arrayValue.values||[],e.arrayValue.values||[],_n);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Hp(r)!==Hp(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!_n(r[a],o[a])))return!1;return!0}(t,e);default:return ae()}}function Jr(t,e){return(t.values||[]).find(n=>_n(n,e))!==void 0}function Bi(t,e){if(t===e)return 0;const n=ti(t),s=ti(e);if(n!==s)return Ae(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ae(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=Xe(i.integerValue||i.doubleValue),a=Xe(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Gp(t.timestampValue,e.timestampValue);case 4:return Gp(Xr(t),Xr(e));case 5:return Ae(t.stringValue,e.stringValue);case 6:return function(i,r){const o=$i(i),a=$i(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=Ae(o[l],a[l]);if(c!==0)return c}return Ae(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=Ae(Xe(i.latitude),Xe(r.latitude));return o!==0?o:Ae(Xe(i.longitude),Xe(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=Bi(o[l],a[l]);if(c)return c}return Ae(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===ea.mapValue&&r===ea.mapValue)return 0;if(i===ea.mapValue)return 1;if(r===ea.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const d=Ae(a[u],c[u]);if(d!==0)return d;const h=Bi(o[a[u]],l[c[u]]);if(h!==0)return h}return Ae(a.length,c.length)}(t.mapValue,e.mapValue);default:throw ae()}}function Gp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ae(t,e);const n=_s(t),s=_s(e),i=Ae(n.seconds,s.seconds);return i!==0?i:Ae(n.nanos,s.nanos)}function Ui(t){return Ou(t)}function Ou(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=_s(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?$i(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,se.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Ou(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Ou(s.fields[a])}`;return r+"}"}(t.mapValue):ae();var e,n}function Kp(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Du(t){return!!t&&"integerValue"in t}function ph(t){return!!t&&"arrayValue"in t}function Wp(t){return!!t&&"nullValue"in t}function Yp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ua(t){return!!t&&"mapValue"in t}function Ar(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ci(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Ar(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ar(t.arrayValue.values[n]);return e}return Object.assign({},t)}function SR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,n){this.position=e,this.inclusive=n}}function Qp(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=se.comparator(se.fromName(o.referenceValue),n.key):s=Bi(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Xp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!_n(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{}class Je extends Jb{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new ER(e,n,s):n==="array-contains"?new xR(e,s):n==="in"?new AR(e,s):n==="not-in"?new kR(e,s):n==="array-contains-any"?new RR(e,s):new Je(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new IR(e,s):new CR(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Bi(n,this.value)):n!==null&&ti(this.value)===ti(n)&&this.matchesComparison(Bi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ae()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}let Un=class Zb extends Jb{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Zb(e,n)}matches(e){return ew(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}};function ew(t){return t.op==="and"}function tw(t){return TR(t)&&ew(t)}function TR(t){for(const e of t.filters)if(e instanceof Un)return!1;return!0}function Pu(t){if(t instanceof Je)return t.field.canonicalString()+t.op.toString()+Ui(t.value);if(tw(t))return t.filters.map(e=>Pu(e)).join(",");{const e=t.filters.map(n=>Pu(n)).join(",");return`${t.op}(${e})`}}function nw(t,e){return t instanceof Je?function(n,s){return s instanceof Je&&n.op===s.op&&n.field.isEqual(s.field)&&_n(n.value,s.value)}(t,e):t instanceof Un?function(n,s){return s instanceof Un&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&nw(r,s.filters[o]),!0):!1}(t,e):void ae()}function sw(t){return t instanceof Je?function(e){return`${e.field.canonicalString()} ${e.op} ${Ui(e.value)}`}(t):t instanceof Un?function(e){return e.op.toString()+" {"+e.getFilters().map(sw).join(" ,")+"}"}(t):"Filter"}class ER extends Je{constructor(e,n,s){super(e,n,s),this.key=se.fromName(s.referenceValue)}matches(e){const n=se.comparator(e.key,this.key);return this.matchesComparison(n)}}class IR extends Je{constructor(e,n){super(e,"in",n),this.keys=iw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}let CR=class extends Je{constructor(e,n){super(e,"not-in",n),this.keys=iw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}};function iw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>se.fromName(s.referenceValue))}class xR extends Je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ph(n)&&Jr(n.arrayValue,this.value)}}class AR extends Je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Jr(this.value.arrayValue,n)}}class kR extends Je{constructor(e,n){super(e,"not-in",n)}matches(e){if(Jr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Jr(this.value.arrayValue,n)}}class RR extends Je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ph(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Jr(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,n="asc"){this.field=e,this.dir=n}}function OR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,n){this.comparator=e,this.root=n||lt.EMPTY}insert(e,n){return new tt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(e){return new tt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,lt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ta(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ta(this.root,e,this.comparator,!1)}getReverseIterator(){return new ta(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ta(this.root,e,this.comparator,!0)}}class ta{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class lt{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??lt.RED,this.left=i??lt.EMPTY,this.right=r??lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new lt(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return lt.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ae();const e=this.left.check();if(e!==this.right.check())throw ae();return e+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw ae()}get value(){throw ae()}get color(){throw ae()}get left(){throw ae()}get right(){throw ae()}copy(t,e,n,s,i){return this}insert(t,e,n){return new lt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.comparator=e,this.data=new tt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Jp(this.data.getIterator())}getIteratorFrom(e){return new Jp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof et)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new et(this.comparator);return n.data=e,n}}class Jp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.fields=e,e.sort(yt.comparator)}static empty(){return new Vt([])}unionWith(e){let n=new et(yt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Vt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Fi(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.value=e}static empty(){return new kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!ua(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ar(n)}setAll(e){let n=yt.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Ar(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());ua(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return _n(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];ua(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){ci(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new kt(Ar(this.value))}}function rw(t){const e=[];return ci(t.fields,(n,s)=>{const i=new yt([n]);if(ua(s)){const r=rw(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Vt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new mt(e,0,fe.min(),fe.min(),fe.min(),kt.empty(),0)}static newFoundDocument(e,n,s,i){return new mt(e,1,n,fe.min(),s,i,0)}static newNoDocument(e,n){return new mt(e,2,n,fe.min(),fe.min(),kt.empty(),0)}static newUnknownDocument(e,n){return new mt(e,3,n,fe.min(),fe.min(),kt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(fe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=fe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function Zp(t,e=null,n=[],s=[],i=null,r=null,o=null){return new DR(t,e,n,s,i,r,o)}function mh(t){const e=me(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Pu(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Fl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ui(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ui(s)).join(",")),e.ft=n}return e.ft}function gh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!OR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!nw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Xp(t.startAt,e.startAt)&&Xp(t.endAt,e.endAt)}function Lu(t){return se.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this._t=null,this.startAt,this.endAt}}function PR(t,e,n,s,i,r,o,a){return new ko(t,e,n,s,i,r,o,a)}function yh(t){return new ko(t)}function em(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ow(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function vh(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function aw(t){return t.collectionGroup!==null}function xi(t){const e=me(t);if(e.dt===null){e.dt=[];const n=vh(e),s=ow(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new kr(n)),e.dt.push(new kr(yt.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.dt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new kr(yt.keyField(),r))}}}return e.dt}function Vn(t){const e=me(t);if(!e._t)if(e.limitType==="F")e._t=Zp(e.path,e.collectionGroup,xi(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of xi(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new kr(r.field,o))}const s=e.endAt?new ja(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new ja(e.startAt.position,e.startAt.inclusive):null;e._t=Zp(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e._t}function Mu(t,e){e.getFirstInequalityField(),vh(t);const n=t.filters.concat([e]);return new ko(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Nu(t,e,n){return new ko(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function $l(t,e){return gh(Vn(t),Vn(e))&&t.limitType===e.limitType}function lw(t){return`${mh(Vn(t))}|lt:${t.limitType}`}function Fu(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>sw(s)).join(", ")}]`),Fl(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ui(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ui(s)).join(",")),`Target(${n})`}(Vn(t))}; limitType=${t.limitType})`}function Bl(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):se.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of xi(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Qp(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,xi(n),s)||n.endAt&&!function(i,r,o){const a=Qp(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,xi(n),s))}(t,e)}function LR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function cw(t){return(e,n)=>{let s=!1;for(const i of xi(t)){const r=MR(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function MR(t,e,n){const s=t.field.isKeyField()?se.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Bi(a,l):ae()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return ae()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uw(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Va(e)?"-0":e}}function dw(t){return{integerValue:""+t}}function NR(t,e){return wR(e)?dw(e):uw(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(){this._=void 0}}function FR(t,e,n){return t instanceof za?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof Vi?fw(t,e):t instanceof ji?pw(t,e):function(s,i){const r=hw(s,i),o=tm(r)+tm(s.gt);return Du(r)&&Du(s.gt)?dw(o):uw(s.yt,o)}(t,e)}function $R(t,e,n){return t instanceof Vi?fw(t,e):t instanceof ji?pw(t,e):n}function hw(t,e){return t instanceof qa?Du(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class za extends Ul{}class Vi extends Ul{constructor(e){super(),this.elements=e}}function fw(t,e){const n=mw(e);for(const s of t.elements)n.some(i=>_n(i,s))||n.push(s);return{arrayValue:{values:n}}}class ji extends Ul{constructor(e){super(),this.elements=e}}function pw(t,e){let n=mw(e);for(const s of t.elements)n=n.filter(i=>!_n(i,s));return{arrayValue:{values:n}}}class qa extends Ul{constructor(e,n){super(),this.yt=e,this.gt=n}}function tm(t){return Xe(t.integerValue||t.doubleValue)}function mw(t){return ph(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e,n){this.field=e,this.transform=n}}function BR(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Vi&&s instanceof Vi||n instanceof ji&&s instanceof ji?Fi(n.elements,s.elements,_n):n instanceof qa&&s instanceof qa?_n(n.gt,s.gt):n instanceof za&&s instanceof za}(t.transform,e.transform)}class UR{constructor(e,n){this.version=e,this.transformResults=n}}class gn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new gn}static exists(e){return new gn(void 0,e)}static updateTime(e){return new gn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function da(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Vl{}function yw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new bw(t.key,gn.none()):new Ro(t.key,t.data,gn.none());{const n=t.data,s=kt.empty();let i=new et(yt.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Cs(t.key,s,new Vt(i.toArray()),gn.none())}}function VR(t,e,n){t instanceof Ro?function(s,i,r){const o=s.value.clone(),a=sm(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Cs?function(s,i,r){if(!da(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=sm(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(vw(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function Rr(t,e,n,s){return t instanceof Ro?function(i,r,o,a){if(!da(i.precondition,r))return o;const l=i.value.clone(),c=im(i.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof Cs?function(i,r,o,a){if(!da(i.precondition,r))return o;const l=im(i.fieldTransforms,a,r),c=r.data;return c.setAll(vw(i)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(i,r,o){return da(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function jR(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=hw(s.transform,i||null);r!=null&&(n===null&&(n=kt.empty()),n.set(s.field,r))}return n||null}function nm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Fi(n,s,(i,r)=>BR(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ro extends Vl{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Cs extends Vl{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function vw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function sm(t,e,n){const s=new Map;Ne(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,$R(o,a,n[i]))}return s}function im(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,FR(r,o,e))}return s}class bw extends Vl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zR extends Vl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qe,Se;function HR(t){switch(t){default:return ae();case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0}}function ww(t){if(t===void 0)return Bn("GRPC error has no .code"),D.UNKNOWN;switch(t){case Qe.OK:return D.OK;case Qe.CANCELLED:return D.CANCELLED;case Qe.UNKNOWN:return D.UNKNOWN;case Qe.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case Qe.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case Qe.INTERNAL:return D.INTERNAL;case Qe.UNAVAILABLE:return D.UNAVAILABLE;case Qe.UNAUTHENTICATED:return D.UNAUTHENTICATED;case Qe.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case Qe.NOT_FOUND:return D.NOT_FOUND;case Qe.ALREADY_EXISTS:return D.ALREADY_EXISTS;case Qe.PERMISSION_DENIED:return D.PERMISSION_DENIED;case Qe.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case Qe.ABORTED:return D.ABORTED;case Qe.OUT_OF_RANGE:return D.OUT_OF_RANGE;case Qe.UNIMPLEMENTED:return D.UNIMPLEMENTED;case Qe.DATA_LOSS:return D.DATA_LOSS;default:return ae()}}(Se=Qe||(Qe={}))[Se.OK=0]="OK",Se[Se.CANCELLED=1]="CANCELLED",Se[Se.UNKNOWN=2]="UNKNOWN",Se[Se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Se[Se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Se[Se.NOT_FOUND=5]="NOT_FOUND",Se[Se.ALREADY_EXISTS=6]="ALREADY_EXISTS",Se[Se.PERMISSION_DENIED=7]="PERMISSION_DENIED",Se[Se.UNAUTHENTICATED=16]="UNAUTHENTICATED",Se[Se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Se[Se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Se[Se.ABORTED=10]="ABORTED",Se[Se.OUT_OF_RANGE=11]="OUT_OF_RANGE",Se[Se.UNIMPLEMENTED=12]="UNIMPLEMENTED",Se[Se.INTERNAL=13]="INTERNAL",Se[Se.UNAVAILABLE=14]="UNAVAILABLE",Se[Se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ci(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return Yb(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GR=new tt(se.comparator);function jn(){return GR}const _w=new tt(se.comparator);function pr(...t){let e=_w;for(const n of t)e=e.insert(n.key,n);return e}function Sw(t){let e=_w;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function $s(){return Or()}function Tw(){return Or()}function Or(){return new er(t=>t.toString(),(t,e)=>t.isEqual(e))}const KR=new tt(se.comparator),WR=new et(se.comparator);function we(...t){let e=WR;for(const n of t)e=e.add(n);return e}const YR=new et(Ae);function Ew(){return YR}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,Oo.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new jl(fe.min(),i,Ew(),jn(),we())}}class Oo{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Oo(s,n,we(),we(),we())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e,n,s,i){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=i}}class Iw{constructor(e,n){this.targetId=e,this.Et=n}}class Cw{constructor(e,n,s=Tt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class rm{constructor(){this.At=0,this.Rt=am(),this.bt=Tt.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=we(),n=we(),s=we();return this.Rt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:ae()}}),new Oo(this.bt,this.Pt,e,n,s)}xt(){this.vt=!1,this.Rt=am()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class QR{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=jn(),this.qt=om(),this.Ut=new et(Ae)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const s=this.Wt(n);switch(e.state){case 0:this.zt(n)&&s.Dt(e.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(s.Ft(),s.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:ae()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,i)=>{this.zt(i)&&n(i)})}Jt(e){const n=e.targetId,s=e.Et.count,i=this.Yt(n);if(i){const r=i.target;if(Lu(r))if(s===0){const o=new se(r.path);this.Qt(n,o,mt.newNoDocument(o,fe.min()))}else Ne(s===1);else this.Xt(n)!==s&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((r,o)=>{const a=this.Yt(o);if(a){if(r.current&&Lu(a.target)){const l=new se(a.target.path);this.Lt.get(l)!==null||this.te(o,l)||this.Qt(o,l,mt.newNoDocument(l,e))}r.St&&(n.set(o,r.Ct()),r.xt())}});let s=we();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Yt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Lt.forEach((r,o)=>o.setReadTime(e));const i=new jl(e,n,this.Ut,this.Lt,s);return this.Lt=jn(),this.qt=om(),this.Ut=new et(Ae),i}Gt(e,n){if(!this.zt(e))return;const s=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.zt(e))return;const i=this.Wt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new rm,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new et(Ae),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new rm),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function om(){return new tt(se.comparator)}function am(){return new tt(se.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XR=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),JR=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),ZR=(()=>({and:"AND",or:"OR"}))();class eO{constructor(e,n){this.databaseId=e,this.wt=n}}function Ha(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xw(t,e){return t.wt?e.toBase64():e.toUint8Array()}function tO(t,e){return Ha(t,e.toTimestamp())}function yn(t){return Ne(!!t),fe.fromTimestamp(function(e){const n=_s(e);return new Ze(n.seconds,n.nanos)}(t))}function bh(t,e){return function(n){return new Fe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Aw(t){const e=Fe.fromString(t);return Ne(Dw(e)),e}function $u(t,e){return bh(t.databaseId,e.path)}function Oc(t,e){const n=Aw(e);if(n.get(1)!==t.databaseId.projectId)throw new W(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new se(kw(n))}function Bu(t,e){return bh(t.databaseId,e)}function nO(t){const e=Aw(t);return e.length===4?Fe.emptyPath():kw(e)}function Uu(t){return new Fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function kw(t){return Ne(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function lm(t,e,n){return{name:$u(t,e),fields:n.value.mapValue.fields}}function sO(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:ae()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(l,c){return l.wt?(Ne(c===void 0||typeof c=="string"),Tt.fromBase64String(c||"")):(Ne(c===void 0||c instanceof Uint8Array),Tt.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?D.UNKNOWN:ww(l.code);return new W(c,l.message||"")}(o);n=new Cw(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Oc(t,s.document.name),r=yn(s.document.updateTime),o=s.document.createTime?yn(s.document.createTime):fe.min(),a=new kt({mapValue:{fields:s.document.fields}}),l=mt.newFoundDocument(i,r,o,a),c=s.targetIds||[],u=s.removedTargetIds||[];n=new ha(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Oc(t,s.document),r=s.readTime?yn(s.readTime):fe.min(),o=mt.newNoDocument(i,r),a=s.removedTargetIds||[];n=new ha([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Oc(t,s.document),r=s.removedTargetIds||[];n=new ha([],r,i,null)}else{if(!("filter"in e))return ae();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new qR(i),o=s.targetId;n=new Iw(o,r)}}return n}function iO(t,e){let n;if(e instanceof Ro)n={update:lm(t,e.key,e.value)};else if(e instanceof bw)n={delete:$u(t,e.key)};else if(e instanceof Cs)n={update:lm(t,e.key,e.data),updateMask:fO(e.fieldMask)};else{if(!(e instanceof zR))return ae();n={verify:$u(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof za)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Vi)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ji)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof qa)return{fieldPath:r.field.canonicalString(),increment:o.gt};throw ae()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:tO(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ae()}(t,e.precondition)),n}function rO(t,e){return t&&t.length>0?(Ne(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?yn(s.updateTime):yn(i);return r.isEqual(fe.min())&&(r=yn(i)),new UR(r,s.transformResults||[])}(n,e))):[]}function oO(t,e){return{documents:[Bu(t,e.path)]}}function aO(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Bu(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Bu(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length!==0)return Ow(Un.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:yi(u.field),direction:uO(u.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(l,c){return l.wt||Fl(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function lO(t){let e=nO(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Ne(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const d=Rw(u);return d instanceof Un&&tw(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(d){return new kr(vi(d.field),function(h){switch(h){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(u)));let a=null;n.limit&&(a=function(u){let d;return d=typeof u=="object"?u.value:u,Fl(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(u){const d=!!u.before,h=u.values||[];return new ja(h,d)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const d=!u.before,h=u.values||[];return new ja(h,d)}(n.endAt)),PR(e,i,o,r,a,"F",l,c)}function cO(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ae()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Rw(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=vi(e.unaryFilter.field);return Je.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=vi(e.unaryFilter.field);return Je.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=vi(e.unaryFilter.field);return Je.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=vi(e.unaryFilter.field);return Je.create(r,"!=",{nullValue:"NULL_VALUE"});default:return ae()}}(t):t.fieldFilter!==void 0?function(e){return Je.create(vi(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ae()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Un.create(e.compositeFilter.filters.map(n=>Rw(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return ae()}}(e.compositeFilter.op))}(t):ae()}function uO(t){return XR[t]}function dO(t){return JR[t]}function hO(t){return ZR[t]}function yi(t){return{fieldPath:t.canonicalString()}}function vi(t){return yt.fromServerFormat(t.fieldPath)}function Ow(t){return t instanceof Je?function(e){if(e.op==="=="){if(Yp(e.value))return{unaryFilter:{field:yi(e.field),op:"IS_NAN"}};if(Wp(e.value))return{unaryFilter:{field:yi(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Yp(e.value))return{unaryFilter:{field:yi(e.field),op:"IS_NOT_NAN"}};if(Wp(e.value))return{unaryFilter:{field:yi(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:yi(e.field),op:dO(e.op),value:e.value}}}(t):t instanceof Un?function(e){const n=e.getFilters().map(s=>Ow(s));return n.length===1?n[0]:{compositeFilter:{op:hO(e.op),filters:n}}}(t):ae()}function fO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Dw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pO{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&VR(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Rr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Rr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Tw();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=yw(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(fe.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),we())}isEqual(e){return this.batchId===e.batchId&&Fi(this.mutations,e.mutations,(n,s)=>nm(n,s))&&Fi(this.baseMutations,e.baseMutations,(n,s)=>nm(n,s))}}class wh{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){Ne(e.mutations.length===s.length);let i=KR;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new wh(e,n,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,n,s,i,r=fe.min(),o=fe.min(),a=Tt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new qs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new qs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new qs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gO{constructor(e){this.ie=e}}function yO(t){const e=lO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Nu(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO{constructor(){this.Je=new bO}addToCollectionParentIndex(e,n){return this.Je.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(ws.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(ws.min())}updateCollectionGroup(e,n,s){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class bO{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new et(Fe.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new et(Fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new zi(0)}static vn(){return new zi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wO{constructor(){this.changes=new er(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,mt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?F.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _O{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SO{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&Rr(s.mutation,i,Vt.empty(),Ze.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,we()).next(()=>s))}getLocalViewOfDocuments(e,n,s=we()){const i=$s();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=pr();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=$s();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,we()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=jn();const o=Or(),a=Or();return n.forEach((l,c)=>{const u=s.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof Cs)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Rr(u.mutation,c,u.mutation.getFieldMask(),Ze.now())):o.set(c.key,Vt.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var d;return a.set(c,new _O(u,(d=o.get(c))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Or();let i=new tt((o,a)=>o-a),r=we();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||Vt.empty();u=a.applyToLocalView(c,u),s.set(l,u);const d=(i.get(a.batchId)||we()).add(l);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,d=Tw();u.forEach(h=>{if(!r.has(h)){const f=yw(n.get(h),s.get(h));f!==null&&d.set(h,f),r=r.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,d))}return F.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return se.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):aw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):F.resolve($s());let a=-1,l=r;return o.next(c=>F.forEach(c,(u,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),r.get(u)?F.resolve():this.remoteDocumentCache.getEntry(e,u).next(h=>{l=l.insert(u,h)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,we())).next(u=>({batchId:a,changes:Sw(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new se(n)).next(s=>{let i=pr();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=pr();return this.indexManager.getCollectionParents(e,i).next(o=>F.forEach(o,a=>{const l=function(c,u){return new ko(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((u,d)=>{r=r.insert(u,d)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,mt.newInvalidDocument(c)))});let o=pr();return r.forEach((a,l)=>{const c=i.get(a);c!==void 0&&Rr(c.mutation,l,Vt.empty(),Ze.now()),Bl(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TO{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return F.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:yn(s.createTime)}),F.resolve()}getNamedQuery(e,n){return F.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:yO(s.bundledQuery),readTime:yn(s.readTime)}}(n)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EO{constructor(){this.overlays=new tt(se.comparator),this.es=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const s=$s();return F.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.oe(e,n,r)}),F.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.es.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(s)),F.resolve()}getOverlaysForCollection(e,n,s){const i=$s(),r=n.length+1,o=new se(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return F.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new tt((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=r.get(c.largestBatchId);u===null&&(u=$s(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=$s(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return F.resolve(a)}oe(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(s.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new mO(n,s));let r=this.es.get(n);r===void 0&&(r=we(),this.es.set(n,r)),this.es.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(){this.ns=new et(nt.ss),this.rs=new et(nt.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new nt(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new nt(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new se(new Fe([])),s=new nt(n,e),i=new nt(n,e+1),r=[];return this.rs.forEachInRange([s,i],o=>{this.cs(o),r.push(o.key)}),r}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new se(new Fe([])),s=new nt(n,e),i=new nt(n,e+1);let r=we();return this.rs.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new nt(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class nt{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return se.comparator(e.key,n.key)||Ae(e._s,n._s)}static os(e,n){return Ae(e._s,n._s)||se.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new et(nt.ss)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new pO(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new nt(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ps(s),r=i<0?0:i;return F.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new nt(n,0),i=new nt(n,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([s,i],o=>{const a=this.ys(o._s);r.push(a)}),F.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new et(Ae);return n.forEach(i=>{const r=new nt(i,0),o=new nt(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,o],a=>{s=s.add(a._s)})}),F.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;se.isDocumentKey(r)||(r=r.child(""));const o=new nt(new se(r),0);let a=new et(Ae);return this.gs.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l._s)),!0)},o),F.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const i=this.ys(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ne(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return F.forEach(n.mutations,i=>{const r=new nt(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new nt(n,0),i=this.gs.firstAfterOrEqual(s);return F.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CO{constructor(e){this.Es=e,this.docs=new tt(se.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return F.resolve(s?s.document.mutableCopy():mt.newInvalidDocument(n))}getEntries(e,n){let s=jn();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():mt.newInvalidDocument(i))}),F.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=jn();const o=n.path,a=new se(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||gR(mR(u),s)<=0||(i.has(u.key)||Bl(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return F.resolve(r)}getAllFromCollectionGroup(e,n,s,i){ae()}As(e,n){return F.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new xO(this)}getSize(e){return F.resolve(this.size)}}class xO extends wO{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(s)}),F.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AO{constructor(e){this.persistence=e,this.Rs=new er(n=>mh(n),gh),this.lastRemoteSnapshotVersion=fe.min(),this.highestTargetId=0,this.bs=0,this.Ps=new _h,this.targetCount=0,this.vs=zi.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,i)=>n(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),F.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new zi(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Dn(n),F.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),F.waitFor(r).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return F.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),F.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),F.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),F.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return F.resolve(s)}containsKey(e,n){return F.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kO{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new fh(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new AO(this),this.indexManager=new vO,this.remoteDocumentCache=function(s){return new CO(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new gO(n),this.Ns=new TO(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new EO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new IO(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){Z("MemoryPersistence","Starting transaction:",e);const i=new RO(this.Ss.next());return this.referenceDelegate.ks(),s(i).next(r=>this.referenceDelegate.Os(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ms(e,n){return F.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class RO extends vR{constructor(e){super(),this.currentSequenceNumber=e}}class Sh{constructor(e){this.persistence=e,this.Fs=new _h,this.$s=null}static Bs(e){return new Sh(e)}get Ls(){if(this.$s)return this.$s;throw ae()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),F.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),F.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Ls.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Ls,s=>{const i=se.fromPath(s);return this.qs(e,i).next(r=>{r||n.removeEntry(i,fe.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return F.or([()=>F.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=i}static Ci(e,n){let s=we(),i=we();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Th(e,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OO{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,i){return this.ki(e,n).next(r=>r||this.Oi(e,n,i,s)).next(r=>r||this.Mi(e,n))}ki(e,n){if(em(n))return F.resolve(null);let s=Vn(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Nu(n,null,"F"),s=Vn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=we(...r);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.Fi(n,a);return this.$i(n,c,o,l.readTime)?this.ki(e,Nu(n,null,"F")):this.Bi(e,c,n,l)}))})))}Oi(e,n,s,i){return em(n)||i.isEqual(fe.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(r=>{const o=this.Fi(n,r);return this.$i(n,o,s,i)?this.Mi(e,n):(qp()<=xe.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Fu(n)),this.Bi(e,o,n,pR(i,-1)))})}Fi(e,n){let s=new et(cw(e));return n.forEach((i,r)=>{Bl(e,r)&&(s=s.add(r))}),s}$i(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Mi(e,n){return qp()<=xe.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",Fu(n)),this.Ni.getDocumentsMatchingQuery(e,n,ws.min())}Bi(e,n,s,i){return this.Ni.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DO{constructor(e,n,s,i){this.persistence=e,this.Li=n,this.yt=i,this.qi=new tt(Ae),this.Ui=new er(r=>mh(r),gh),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new SO(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function PO(t,e,n,s){return new DO(t,e,n,s)}async function Pw(t,e){const n=me(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=we();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({ji:c,removedBatchIds:o,addedBatchIds:a}))})})}function LO(t,e){const n=me(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,d=u.keys();let h=F.resolve();return d.forEach(f=>{h=h.next(()=>c.getEntry(a,f)).next(g=>{const y=l.docVersions.get(f);Ne(y!==null),g.version.compareTo(y)<0&&(u.applyToRemoteDocument(g,l),g.isValidDocument()&&(g.setReadTime(l.commitVersion),c.addEntry(g)))})}),h.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=we();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function Lw(t){const e=me(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function MO(t,e){const n=me(t),s=e.snapshotVersion;let i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;const a=[];e.targetChanges.forEach((u,d)=>{const h=i.get(d);if(!h)return;a.push(n.Cs.removeMatchingKeys(r,u.removedDocuments,d).next(()=>n.Cs.addMatchingKeys(r,u.addedDocuments,d)));let f=h.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(d)?f=f.withResumeToken(Tt.EMPTY_BYTE_STRING,fe.min()).withLastLimboFreeSnapshotVersion(fe.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,s)),i=i.insert(d,f),function(g,y,_){return g.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(h,f,u)&&a.push(n.Cs.updateTargetData(r,f))});let l=jn(),c=we();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(NO(r,o,e.documentUpdates).next(u=>{l=u.Wi,c=u.zi})),!s.isEqual(fe.min())){const u=n.Cs.getLastRemoteSnapshotVersion(r).next(d=>n.Cs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return F.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.qi=i,r))}function NO(t,e,n){let s=we(),i=we();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=jn();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(fe.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):Z("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function FO(t,e){const n=me(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function $O(t,e){const n=me(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Cs.getTargetData(s,e).next(r=>r?(i=r,F.resolve(i)):n.Cs.allocateTargetId(s).next(o=>(i=new qs(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.qi.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qi=n.qi.insert(s.targetId,s),n.Ui.set(e,s.targetId)),s})}async function Vu(t,e,n){const s=me(t),i=s.qi.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ao(o))throw o;Z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.qi=s.qi.remove(e),s.Ui.delete(i.target)}function cm(t,e,n){const s=me(t);let i=fe.min(),r=we();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=me(a),d=u.Ui.get(c);return d!==void 0?F.resolve(u.qi.get(d)):u.Cs.getTargetData(l,c)}(s,o,Vn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?i:fe.min(),n?r:we())).next(a=>(BO(s,LR(e),a),{documents:a,Hi:r})))}function BO(t,e,n){let s=t.Ki.get(e)||fe.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Ki.set(e,s)}class um{constructor(){this.activeTargetIds=Ew()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class UO{constructor(){this.Lr=new um,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,s){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new um,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VO{Ur(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){Z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){Z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zO{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qO extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,i,r){const o=this.ho(e,n);Z("RestConnection","Sending: ",o,s);const a={};return this.lo(a,i,r),this.fo(e,o,a,s).then(l=>(Z("RestConnection","Received: ",l),l),l=>{throw Ru("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",s),l})}_o(e,n,s,i,r,o){return this.ao(e,n,s,i,r)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Zi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}ho(e,n){const s=jO[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,i){return new Promise((r,o)=>{const a=new iR;a.setWithCredentials(!0),a.listenOnce(tR.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Rc.NO_ERROR:const c=a.getResponseJson();Z("Connection","XHR received:",JSON.stringify(c)),r(c);break;case Rc.TIMEOUT:Z("Connection",'RPC "'+e+'" timed out'),o(new W(D.DEADLINE_EXCEEDED,"Request time out"));break;case Rc.HTTP_ERROR:const u=a.getStatus();if(Z("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let d=a.getResponseJson();Array.isArray(d)&&(d=d[0]);const h=d==null?void 0:d.error;if(h&&h.status&&h.message){const f=function(g){const y=g.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(y)>=0?y:D.UNKNOWN}(h.status);o(new W(f,h.message))}else o(new W(D.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new W(D.UNAVAILABLE,"Connection failed."));break;default:ae()}}finally{Z("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,s,15)})}wo(e,n,s){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=Zk(),o=eR(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new sR({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const l=i.join("");Z("Connection","Creating WebChannel: "+l,a);const c=r.createWebChannel(l,a);let u=!1,d=!1;const h=new zO({Hr:g=>{d?Z("Connection","Not sending because WebChannel is closed:",g):(u||(Z("Connection","Opening WebChannel transport."),c.open(),u=!0),Z("Connection","WebChannel sending:",g),c.send(g))},Jr:()=>c.close()}),f=(g,y,_)=>{g.listen(y,m=>{try{_(m)}catch(p){setTimeout(()=>{throw p},0)}})};return f(c,Zo.EventType.OPEN,()=>{d||Z("Connection","WebChannel transport opened.")}),f(c,Zo.EventType.CLOSE,()=>{d||(d=!0,Z("Connection","WebChannel transport closed"),h.io())}),f(c,Zo.EventType.ERROR,g=>{d||(d=!0,Ru("Connection","WebChannel transport errored:",g),h.io(new W(D.UNAVAILABLE,"The operation could not be completed")))}),f(c,Zo.EventType.MESSAGE,g=>{var y;if(!d){const _=g.data[0];Ne(!!_);const m=_,p=m.error||((y=m[0])===null||y===void 0?void 0:y.error);if(p){Z("Connection","WebChannel received error:",p);const v=p.status;let T=function(I){const C=Qe[I];if(C!==void 0)return ww(C)}(v),E=p.message;T===void 0&&(T=D.INTERNAL,E="Unknown error status: "+v+" with message "+p.message),d=!0,h.io(new W(T,E)),c.close()}else Z("Connection","WebChannel received:",_),h.ro(_)}}),f(o,nR.STAT_EVENT,g=>{g.stat===jp.PROXY?Z("Connection","Detected buffering proxy"):g.stat===jp.NOPROXY&&Z("Connection","Detected no buffering proxy")}),setTimeout(()=>{h.so()},0),h}}function Dc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(t){return new eO(t,!0)}class Mw{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-s);i>0&&Z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e,n,s,i,r,o,a,l){this.Hs=e,this.vo=s,this.Vo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Mw(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===D.RESOURCE_EXHAUSTED?(Bn(n.toString()),Bn("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.So===n&&this.Go(s,i)},s=>{e(()=>{const i=new W(D.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(i)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{s(()=>this.Qo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return Z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(Z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class HO extends Nw{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.yt=r}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=sO(this.yt,e),s=function(i){if(!("targetChange"in i))return fe.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?fe.min():r.readTime?yn(r.readTime):fe.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=Uu(this.yt),n.addTarget=function(i,r){let o;const a=r.target;return o=Lu(a)?{documents:oO(i,a)}:{query:aO(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=xw(i,r.resumeToken):r.snapshotVersion.compareTo(fe.min())>0&&(o.readTime=Ha(i,r.snapshotVersion.toTimestamp())),o}(this.yt,e);const s=cO(this.yt,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=Uu(this.yt),n.removeTarget=e,this.Bo(n)}}class GO extends Nw{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.yt=r,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=rO(e.writeResults,e.commitTime),s=yn(e.commitTime);return this.listener.Zo(s,n)}return Ne(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Uu(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>iO(this.yt,s))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KO extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.yt=i,this.nu=!1}su(){if(this.nu)throw new W(D.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.ao(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(D.UNKNOWN,i.toString())})}_o(e,n,s,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection._o(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new W(D.UNKNOWN,r.toString())})}terminate(){this.nu=!0}}class WO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Bn(n),this.ou=!1):Z("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YO{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=r,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{ui(this)&&(Z("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=me(a);l._u.add(4),await Do(l),l.gu.set("Unknown"),l._u.delete(4),await ql(l)}(this))})}),this.gu=new WO(s,i)}}async function ql(t){if(ui(t))for(const e of t.wu)await e(!0)}async function Do(t){for(const e of t.wu)await e(!1)}function Fw(t,e){const n=me(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Ch(n)?Ih(n):tr(n).ko()&&Eh(n,e))}function $w(t,e){const n=me(t),s=tr(n);n.du.delete(e),s.ko()&&Bw(n,e),n.du.size===0&&(s.ko()?s.Fo():ui(n)&&n.gu.set("Unknown"))}function Eh(t,e){t.yu.Ot(e.targetId),tr(t).zo(e)}function Bw(t,e){t.yu.Ot(e),tr(t).Ho(e)}function Ih(t){t.yu=new QR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),tr(t).start(),t.gu.uu()}function Ch(t){return ui(t)&&!tr(t).No()&&t.du.size>0}function ui(t){return me(t)._u.size===0}function Uw(t){t.yu=void 0}async function QO(t){t.du.forEach((e,n)=>{Eh(t,e)})}async function XO(t,e){Uw(t),Ch(t)?(t.gu.hu(e),Ih(t)):t.gu.set("Unknown")}async function JO(t,e,n){if(t.gu.set("Online"),e instanceof Cw&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){Z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ga(t,s)}else if(e instanceof ha?t.yu.Kt(e):e instanceof Iw?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(fe.min()))try{const s=await Lw(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.yu.Zt(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=i.du.get(l);c&&i.du.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=i.du.get(a);if(!l)return;i.du.set(a,l.withResumeToken(Tt.EMPTY_BYTE_STRING,l.snapshotVersion)),Bw(i,a);const c=new qs(l.target,a,1,l.sequenceNumber);Eh(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){Z("RemoteStore","Failed to raise snapshot:",s),await Ga(t,s)}}async function Ga(t,e,n){if(!Ao(e))throw e;t._u.add(1),await Do(t),t.gu.set("Offline"),n||(n=()=>Lw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await ql(t)})}function Vw(t,e){return e().catch(n=>Ga(t,n,e))}async function Hl(t){const e=me(t),n=Ss(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;ZO(e);)try{const i=await FO(e.localStore,s);if(i===null){e.fu.length===0&&n.Fo();break}s=i.batchId,eD(e,i)}catch(i){await Ga(e,i)}jw(e)&&zw(e)}function ZO(t){return ui(t)&&t.fu.length<10}function eD(t,e){t.fu.push(e);const n=Ss(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function jw(t){return ui(t)&&!Ss(t).No()&&t.fu.length>0}function zw(t){Ss(t).start()}async function tD(t){Ss(t).eu()}async function nD(t){const e=Ss(t);for(const n of t.fu)e.Xo(n.mutations)}async function sD(t,e,n){const s=t.fu.shift(),i=wh.from(s,e,n);await Vw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Hl(t)}async function iD(t,e){e&&Ss(t).Yo&&await async function(n,s){if(i=s.code,HR(i)&&i!==D.ABORTED){const r=n.fu.shift();Ss(n).Mo(),await Vw(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Hl(n)}var i}(t,e),jw(t)&&zw(t)}async function hm(t,e){const n=me(t);n.asyncQueue.verifyOperationInProgress(),Z("RemoteStore","RemoteStore received new credentials");const s=ui(n);n._u.add(3),await Do(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await ql(n)}async function rD(t,e){const n=me(t);e?(n._u.delete(2),await ql(n)):e||(n._u.add(2),await Do(n),n.gu.set("Unknown"))}function tr(t){return t.pu||(t.pu=function(e,n,s){const i=me(e);return i.su(),new HO(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,s)}(t.datastore,t.asyncQueue,{Yr:QO.bind(null,t),Zr:XO.bind(null,t),Wo:JO.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Ch(t)?Ih(t):t.gu.set("Unknown")):(await t.pu.stop(),Uw(t))})),t.pu}function Ss(t){return t.Iu||(t.Iu=function(e,n,s){const i=me(e);return i.su(),new GO(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,s)}(t.datastore,t.asyncQueue,{Yr:tD.bind(null,t),Zr:iD.bind(null,t),tu:nD.bind(null,t),Zo:sD.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await Hl(t)):(await t.Iu.stop(),t.fu.length>0&&(Z("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Pn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new xh(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ah(t,e){if(Bn("AsyncQueue",`${e}: ${t}`),Ao(t))return new W(D.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e){this.comparator=e?(n,s)=>e(n,s)||se.comparator(n.key,s.key):(n,s)=>se.comparator(n.key,s.key),this.keyedMap=pr(),this.sortedSet=new tt(this.comparator)}static emptySet(e){return new Ai(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ai)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Ai;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(){this.Tu=new tt(se.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):ae():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class qi{constructor(e,n,s,i,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new qi(e,n,Ai.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$l(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oD{constructor(){this.Au=void 0,this.listeners=[]}}class aD{constructor(){this.queries=new er(e=>lw(e),$l),this.onlineState="Unknown",this.Ru=new Set}}async function qw(t,e){const n=me(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new oD),i)try{r.Au=await n.onListen(s)}catch(o){const a=Ah(o,`Initialization of query '${Fu(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.bu(n.onlineState),r.Au&&e.Pu(r.Au)&&kh(n)}async function Hw(t,e){const n=me(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function lD(t,e){const n=me(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Pu(i)&&(s=!0);o.Au=i}}s&&kh(n)}function cD(t,e,n){const s=me(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function kh(t){t.Ru.forEach(e=>{e.next()})}class Gw{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new qi(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=qi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(e){this.key=e}}class Ww{constructor(e){this.key=e}}class uD{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=we(),this.mutatedKeys=we(),this.Gu=cw(e),this.Qu=new Ai(this.Gu)}get ju(){return this.qu}Wu(e,n){const s=n?n.zu:new fm,i=n?n.Qu:this.Qu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,d)=>{const h=i.get(u),f=Bl(this.query,d)?d:null,g=!!h&&this.mutatedKeys.has(h.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let _=!1;h&&f?h.data.isEqual(f.data)?g!==y&&(s.track({type:3,doc:f}),_=!0):this.Hu(h,f)||(s.track({type:2,doc:f}),_=!0,(l&&this.Gu(f,l)>0||c&&this.Gu(f,c)<0)&&(a=!0)):!h&&f?(s.track({type:0,doc:f}),_=!0):h&&!f&&(s.track({type:1,doc:h}),_=!0,(l||c)&&(a=!0)),_&&(f?(o=o.add(f),r=y?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{Qu:o,zu:s,$i:a,mutatedKeys:r}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const r=e.zu.Eu();r.sort((c,u)=>function(d,h){const f=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ae()}};return f(d)-f(h)}(c.type,u.type)||this.Gu(c.doc,u.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.Uu;return this.Uu=a,r.length!==0||l?{snapshot:new qi(this.query,e.Qu,i,r,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new fm,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=we(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new Ww(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new Kw(s))}),n}tc(e){this.qu=e.Hi,this.Ku=we();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return qi.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class dD{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class hD{constructor(e){this.key=e,this.nc=!1}}class fD{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new er(a=>lw(a),$l),this.rc=new Map,this.oc=new Set,this.uc=new tt(se.comparator),this.cc=new Map,this.ac=new _h,this.hc={},this.lc=new Map,this.fc=zi.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function pD(t,e){const n=ED(t);let s,i;const r=n.ic.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.ec();else{const o=await $O(n.localStore,Vn(e));n.isPrimaryClient&&Fw(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await mD(n,e,s,a==="current",o.resumeToken)}return i}async function mD(t,e,n,s,i){t._c=(d,h,f)=>async function(g,y,_,m){let p=y.view.Wu(_);p.$i&&(p=await cm(g.localStore,y.query,!1).then(({documents:E})=>y.view.Wu(E,p)));const v=m&&m.targetChanges.get(y.targetId),T=y.view.applyChanges(p,g.isPrimaryClient,v);return mm(g,y.targetId,T.Xu),T.snapshot}(t,d,h,f);const r=await cm(t.localStore,e,!0),o=new uD(e,r.Hi),a=o.Wu(r.documents),l=Oo.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);mm(t,n,c.Xu);const u=new dD(e,n,o);return t.ic.set(e,u),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),c.snapshot}async function gD(t,e){const n=me(t),s=n.ic.get(e),i=n.rc.get(s.targetId);if(i.length>1)return n.rc.set(s.targetId,i.filter(r=>!$l(r,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Vu(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),$w(n.remoteStore,s.targetId),ju(n,s.targetId)}).catch(xo)):(ju(n,s.targetId),await Vu(n.localStore,s.targetId,!0))}async function yD(t,e,n){const s=ID(t);try{const i=await function(r,o){const a=me(r),l=Ze.now(),c=o.reduce((h,f)=>h.add(f.key),we());let u,d;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>{let f=jn(),g=we();return a.Gi.getEntries(h,c).next(y=>{f=y,f.forEach((_,m)=>{m.isValidDocument()||(g=g.add(_))})}).next(()=>a.localDocuments.getOverlayedDocuments(h,f)).next(y=>{u=y;const _=[];for(const m of o){const p=jR(m,u.get(m.key).overlayedDocument);p!=null&&_.push(new Cs(m.key,p,rw(p.value.mapValue),gn.exists(!0)))}return a.mutationQueue.addMutationBatch(h,l,_,o)}).next(y=>{d=y;const _=y.applyToLocalDocumentSet(u,g);return a.documentOverlayCache.saveOverlays(h,y.batchId,_)})}).then(()=>({batchId:d.batchId,changes:Sw(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let l=r.hc[r.currentUser.toKey()];l||(l=new tt(Ae)),l=l.insert(o,a),r.hc[r.currentUser.toKey()]=l}(s,i.batchId,n),await Po(s,i.changes),await Hl(s.remoteStore)}catch(i){const r=Ah(i,"Failed to persist write");n.reject(r)}}async function Yw(t,e){const n=me(t);try{const s=await MO(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.cc.get(r);o&&(Ne(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?Ne(o.nc):i.removedDocuments.size>0&&(Ne(o.nc),o.nc=!1))}),await Po(n,s,e)}catch(s){await xo(s)}}function pm(t,e,n){const s=me(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.ic.forEach((r,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=me(r);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const d of u.listeners)d.bu(o)&&(l=!0)}),l&&kh(a)}(s.eventManager,e),i.length&&s.sc.Wo(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function vD(t,e,n){const s=me(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.cc.get(e),r=i&&i.key;if(r){let o=new tt(se.comparator);o=o.insert(r,mt.newNoDocument(r,fe.min()));const a=we().add(r),l=new jl(fe.min(),new Map,new et(Ae),o,a);await Yw(s,l),s.uc=s.uc.remove(r),s.cc.delete(e),Rh(s)}else await Vu(s.localStore,e,!1).then(()=>ju(s,e,n)).catch(xo)}async function bD(t,e){const n=me(t),s=e.batch.batchId;try{const i=await LO(n.localStore,e);Xw(n,s,null),Qw(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Po(n,i)}catch(i){await xo(i)}}async function wD(t,e,n){const s=me(t);try{const i=await function(r,o){const a=me(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(Ne(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(s.localStore,e);Xw(s,e,n),Qw(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Po(s,i)}catch(i){await xo(i)}}function Qw(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function Xw(t,e,n){const s=me(t);let i=s.hc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.hc[s.currentUser.toKey()]=i}}function ju(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||Jw(t,s)})}function Jw(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&($w(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Rh(t))}function mm(t,e,n){for(const s of n)s instanceof Kw?(t.ac.addReference(s.key,e),_D(t,s)):s instanceof Ww?(Z("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||Jw(t,s.key)):ae()}function _D(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(Z("SyncEngine","New document in limbo: "+n),t.oc.add(s),Rh(t))}function Rh(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new se(Fe.fromString(e)),s=t.fc.next();t.cc.set(s,new hD(n)),t.uc=t.uc.insert(n,s),Fw(t.remoteStore,new qs(Vn(yh(n.path)),s,2,fh.at))}}async function Po(t,e,n){const s=me(t),i=[],r=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,l)=>{o.push(s._c(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=Th.Ci(l.targetId,c);r.push(u)}}))}),await Promise.all(o),s.sc.Wo(i),await async function(a,l){const c=me(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>F.forEach(l,d=>F.forEach(d.Si,h=>c.persistence.referenceDelegate.addReference(u,d.targetId,h)).next(()=>F.forEach(d.Di,h=>c.persistence.referenceDelegate.removeReference(u,d.targetId,h)))))}catch(u){if(!Ao(u))throw u;Z("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const d=u.targetId;if(!u.fromCache){const h=c.qi.get(d),f=h.snapshotVersion,g=h.withLastLimboFreeSnapshotVersion(f);c.qi=c.qi.insert(d,g)}}}(s.localStore,r))}async function SD(t,e){const n=me(t);if(!n.currentUser.isEqual(e)){Z("SyncEngine","User change. New user:",e.toKey());const s=await Pw(n.localStore,e);n.currentUser=e,function(i,r){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new W(D.CANCELLED,r))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Po(n,s.ji)}}function TD(t,e){const n=me(t),s=n.cc.get(e);if(s&&s.nc)return we().add(s.key);{let i=we();const r=n.rc.get(e);if(!r)return i;for(const o of r){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function ED(t){const e=me(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Yw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=TD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=vD.bind(null,e),e.sc.Wo=lD.bind(null,e.eventManager),e.sc.wc=cD.bind(null,e.eventManager),e}function ID(t){const e=me(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=bD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=wD.bind(null,e),e}class CD{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=zl(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return PO(this.persistence,new OO,e.initialUser,this.yt)}yc(e){return new kO(Sh.Bs,this.yt)}gc(e){return new UO}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class xD{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>pm(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=SD.bind(null,this.syncEngine),await rD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new aD}createDatastore(e){const n=zl(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new qO(i));var i;return function(r,o,a,l){return new KO(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>pm(this.syncEngine,a,0),o=dm.C()?new dm:new VO,new YO(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,l,c){const u=new fD(s,i,r,o,a,l);return c&&(u.dc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=me(e);Z("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Do(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zw(t,e,n){if(!n)throw new W(D.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function AD(t,e,n,s){if(e===!0&&s===!0)throw new W(D.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function gm(t){if(!se.isDocumentKey(t))throw new W(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ym(t){if(se.isDocumentKey(t))throw new W(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Gl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ae()}function zn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Gl(t);throw new W(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm=new Map;class bm{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new W(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,AD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bm({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new W(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new W(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bm(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new rR;switch(n.type){case"gapi":const s=n.client;return new cR(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new W(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=vm.get(e);n&&(Z("ComponentProvider","Removing Datastore"),vm.delete(e),n.terminate())}(this),Promise.resolve()}}function kD(t,e,n,s={}){var i;const r=(t=zn(t,Kl))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&Ru("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=ft.MOCK_USER;else{o=_I(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new W(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ft(l)}t._authCredentials=new oR(new Kb(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ps(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ct(this.firestore,e,this._key)}}class nr{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new nr(this.firestore,e,this._query)}}class ps extends nr{constructor(e,n,s){super(e,n,yh(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ct(this.firestore,null,new se(e))}withConverter(e){return new ps(this.firestore,e,this._path)}}function Ka(t,e,...n){if(t=it(t),Zw("collection","path",e),t instanceof Kl){const s=Fe.fromString(e,...n);return ym(s),new ps(t,null,s)}{if(!(t instanceof Ct||t instanceof ps))throw new W(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Fe.fromString(e,...n));return ym(s),new ps(t.firestore,null,s)}}function Zr(t,e,...n){if(t=it(t),arguments.length===1&&(e=Wb.R()),Zw("doc","path",e),t instanceof Kl){const s=Fe.fromString(e,...n);return gm(s),new Ct(t,null,new se(s))}{if(!(t instanceof Ct||t instanceof ps))throw new W(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Fe.fromString(e,...n));return gm(s),new Ct(t.firestore,t instanceof ps?t.converter:null,new se(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Bn("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RD{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=ft.UNAUTHENTICATED,this.clientId=Wb.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{Z("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(Z("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new W(D.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Ah(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function OD(t,e){t.asyncQueue.verifyOperationInProgress(),Z("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Pw(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function DD(t,e){t.asyncQueue.verifyOperationInProgress();const n=await PD(t);Z("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>hm(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>hm(e.remoteStore,r)),t.onlineComponents=e}async function PD(t){return t.offlineComponents||(Z("FirestoreClient","Using default OfflineComponentProvider"),await OD(t,new CD)),t.offlineComponents}async function t0(t){return t.onlineComponents||(Z("FirestoreClient","Using default OnlineComponentProvider"),await DD(t,new xD)),t.onlineComponents}function LD(t){return t0(t).then(e=>e.syncEngine)}async function n0(t){const e=await t0(t),n=e.eventManager;return n.onListen=pD.bind(null,e.syncEngine),n.onUnlisten=gD.bind(null,e.syncEngine),n}function MD(t,e,n={}){const s=new Pn;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,l){const c=new e0({next:d=>{r.enqueueAndForget(()=>Hw(i,u));const h=d.docs.has(o);!h&&d.fromCache?l.reject(new W(D.UNAVAILABLE,"Failed to get document because the client is offline.")):h&&d.fromCache&&a&&a.source==="server"?l.reject(new W(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),u=new Gw(yh(o.path),c,{includeMetadataChanges:!0,Nu:!0});return qw(i,u)}(await n0(t),t.asyncQueue,e,n,s)),s.promise}function ND(t,e,n={}){const s=new Pn;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,l){const c=new e0({next:d=>{r.enqueueAndForget(()=>Hw(i,u)),d.fromCache&&a.source==="server"?l.reject(new W(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),u=new Gw(o,c,{includeMetadataChanges:!0,Nu:!0});return qw(i,u)}(await n0(t),t.asyncQueue,e,n,s)),s.promise}class FD{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Mw(this,"async_queue_retry"),this.Wc=()=>{const n=Dc();n&&Z("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Dc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=Dc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new Pn;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!Ao(e))throw e;Z("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Bn("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=xh.createAndSchedule(this,e,n,s,r=>this.Yc(r));return this.Uc.push(i),i}zc(){this.Kc&&ae()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}class Lo extends Kl{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new FD,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||s0(this),this._firestoreClient.terminate()}}function $D(t,e){const n=typeof t=="object"?t:Dd(),s=typeof t=="string"?t:e||"(default)",i=ai(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=vI("firestore");r&&kD(i,...r)}return i}function Oh(t){return t._firestoreClient||s0(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function s0(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new bR(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new RD(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Hi(Tt.fromBase64String(e))}catch(n){throw new W(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Hi(Tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BD=/^__.*__$/;class UD{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Cs(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ro(e,this.data,n,this.fieldTransforms)}}class i0{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Cs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function r0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ae()}}class Yl{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.yt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.na(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Yl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.ua(e),i}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Wa(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(r0(this.sa)&&BD.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class VD{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=s||zl(e)}da(e,n,s,i=!1){return new Yl({sa:e,methodName:n,fa:s,path:yt.emptyPath(),oa:!1,la:i},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function Ph(t){const e=t._freezeSettings(),n=zl(t._databaseId);return new VD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function jD(t,e,n,s,i,r={}){const o=t.da(r.merge||r.mergeFields?2:0,e,n,i);Lh("Data must be an object, but it was:",o,s);const a=a0(s,o);let l,c;if(r.merge)l=new Vt(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const d of r.mergeFields){const h=zu(e,d,n);if(!o.contains(h))throw new W(D.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);c0(u,h)||u.push(h)}l=new Vt(u),c=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,c=o.fieldTransforms;return new UD(new kt(a),l,c)}class Ql extends Mo{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ql}}function o0(t,e,n){return new Yl({sa:3,fa:e.settings.fa,methodName:t._methodName,oa:n},e.databaseId,e.yt,e.ignoreUndefinedProperties)}class zD extends Mo{constructor(e,n){super(e),this._a=n}_toFieldTransform(e){const n=o0(this,e,!0),s=this._a.map(r=>di(r,n)),i=new Vi(s);return new gw(e.path,i)}isEqual(e){return this===e}}class qD extends Mo{constructor(e,n){super(e),this._a=n}_toFieldTransform(e){const n=o0(this,e,!0),s=this._a.map(r=>di(r,n)),i=new ji(s);return new gw(e.path,i)}isEqual(e){return this===e}}function HD(t,e,n,s){const i=t.da(1,e,n);Lh("Data must be an object, but it was:",i,s);const r=[],o=kt.empty();ci(s,(l,c)=>{const u=Mh(e,l,n);c=it(c);const d=i.ca(u);if(c instanceof Ql)r.push(u);else{const h=di(c,d);h!=null&&(r.push(u),o.set(u,h))}});const a=new Vt(r);return new i0(o,a,i.fieldTransforms)}function GD(t,e,n,s,i,r){const o=t.da(1,e,n),a=[zu(e,s,n)],l=[i];if(r.length%2!=0)throw new W(D.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<r.length;h+=2)a.push(zu(e,r[h])),l.push(r[h+1]);const c=[],u=kt.empty();for(let h=a.length-1;h>=0;--h)if(!c0(c,a[h])){const f=a[h];let g=l[h];g=it(g);const y=o.ca(f);if(g instanceof Ql)c.push(f);else{const _=di(g,y);_!=null&&(c.push(f),u.set(f,_))}}const d=new Vt(c);return new i0(u,d,o.fieldTransforms)}function KD(t,e,n,s=!1){return di(n,t.da(s?4:3,e))}function di(t,e){if(l0(t=it(t)))return Lh("Unsupported field value:",e,t),a0(t,e);if(t instanceof Mo)return function(n,s){if(!r0(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=di(o,s.aa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=it(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return NR(s.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Ze.fromDate(n);return{timestampValue:Ha(s.yt,i)}}if(n instanceof Ze){const i=new Ze(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ha(s.yt,i)}}if(n instanceof Dh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Hi)return{bytesValue:xw(s.yt,n._byteString)};if(n instanceof Ct){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:bh(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${Gl(n)}`)}(t,e)}function a0(t,e){const n={};return Yb(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ci(t,(s,i)=>{const r=di(i,e.ra(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function l0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ze||t instanceof Dh||t instanceof Hi||t instanceof Ct||t instanceof Mo)}function Lh(t,e,n){if(!l0(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Gl(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function zu(t,e,n){if((e=it(e))instanceof Wl)return e._internalPath;if(typeof e=="string")return Mh(t,e);throw Wa("Field path arguments must be of type string or ",t,!1,void 0,n)}const WD=new RegExp("[~\\*/\\[\\]]");function Mh(t,e,n){if(e.search(WD)>=0)throw Wa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Wl(...e.split("."))._internalPath}catch{throw Wa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Wa(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new W(D.INVALID_ARGUMENT,a+t+l)}function c0(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new YD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Nh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class YD extends u0{data(){return super.data()}}function Nh(t,e){return typeof e=="string"?Mh(t,e):e instanceof Wl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Fh{}class XD extends Fh{}function d0(t,e,...n){let s=[];e instanceof Fh&&s.push(e),s=s.concat(n),function(i){const r=i.filter(a=>a instanceof $h).length,o=i.filter(a=>a instanceof Xl).length;if(r>1||r>0&&o>0)throw new W(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)t=i._apply(t);return t}class Xl extends XD{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new Xl(e,n,s)}_apply(e){const n=this._parse(e);return h0(e._query,n),new nr(e.firestore,e.converter,Mu(e._query,n))}_parse(e){const n=Ph(e.firestore);return function(i,r,o,a,l,c,u){let d;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new W(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){_m(u,c);const h=[];for(const f of u)h.push(wm(a,i,f));d={arrayValue:{values:h}}}else d=wm(a,i,u)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||_m(u,c),d=KD(o,r,u,c==="in"||c==="not-in");return Je.create(l,c,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function qu(t,e,n){const s=e,i=Nh("where",t);return Xl._create(i,s,n)}class $h extends Fh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new $h(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Un.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let r=s;const o=i.getFlattenedFilters();for(const a of o)h0(r,a),r=Mu(r,a)}(e._query,n),new nr(e.firestore,e.converter,Mu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function wm(t,e,n){if(typeof(n=it(n))=="string"){if(n==="")throw new W(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!aw(e)&&n.indexOf("/")!==-1)throw new W(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Fe.fromString(n));if(!se.isDocumentKey(s))throw new W(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Kp(t,new se(s))}if(n instanceof Ct)return Kp(t,n._key);throw new W(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Gl(n)}.`)}function _m(t,e){if(!Array.isArray(t)||t.length===0)throw new W(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new W(D.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function h0(t,e){if(e.isInequality()){const s=vh(t),i=e.field;if(s!==null&&!s.isEqual(i))throw new W(D.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${i.toString()}'`);const r=ow(t);r!==null&&JD(t,i,r)}const n=function(s,i){for(const r of s)for(const o of r.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function JD(t,e,n){if(!n.isEqual(e))throw new W(D.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class ZD{convertValue(e,n="none"){switch(ti(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes($i(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ae()}}convertObject(e,n){const s={};return ci(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new Dh(Xe(e.latitude),Xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Xb(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Xr(e));default:return null}}convertTimestamp(e){const n=_s(e);return new Ze(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Fe.fromString(e);Ne(Dw(s));const i=new Qr(s.get(1),s.get(3)),r=new se(s.popFirst(5));return i.isEqual(n)||Bn(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eP(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class f0 extends u0{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new fa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Nh("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class fa extends f0{data(e={}){return super.data(e)}}class tP{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new mr(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new fa(this._firestore,this._userDataWriter,s.key,s,new mr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new fa(s._firestore,s._userDataWriter,o.doc.key,o.doc,new mr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new fa(s._firestore,s._userDataWriter,o.doc.key,o.doc,new mr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,c=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:nP(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function nP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ae()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sP(t){t=zn(t,Ct);const e=zn(t.firestore,Lo);return MD(Oh(e),t._key).then(n=>iP(e,t,n))}class p0 extends ZD{constructor(e){super(),this.firestore=e}convertBytes(e){return new Hi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ct(this.firestore,null,n)}}function Hu(t){t=zn(t,nr);const e=zn(t.firestore,Lo),n=Oh(e),s=new p0(e);return QD(t._query),ND(n,t._query).then(i=>new tP(e,s,t,i))}function m0(t,e,n){t=zn(t,Ct);const s=zn(t.firestore,Lo),i=eP(t.converter,e,n);return g0(s,[jD(Ph(s),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,gn.none())])}function Sm(t,e,n,...s){t=zn(t,Ct);const i=zn(t.firestore,Lo),r=Ph(i);let o;return o=typeof(e=it(e))=="string"||e instanceof Wl?GD(r,"updateDoc",t._key,e,n,s):HD(r,"updateDoc",t._key,e),g0(i,[o.toMutation(t._key,gn.exists(!0))])}function g0(t,e){return function(n,s){const i=new Pn;return n.asyncQueue.enqueueAndForget(async()=>yD(await LD(n),s,i)),i.promise}(Oh(t),e)}function iP(t,e,n){const s=n.docs.get(e._key),i=new p0(t);return new f0(t,i,e._key,s,new mr(n.hasPendingWrites,n.fromCache),e.converter)}function rP(...t){return new zD("arrayUnion",t)}function oP(...t){return new qD("arrayRemove",t)}(function(t,e=!0){(function(n){Zi=n})(po),bn(new an("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new Lo(new aR(n.getProvider("auth-internal")),new dR(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new W(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qr(a.options.projectId,l)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Xt(zp,"3.8.3",t),Xt(zp,"3.8.3","esm2017")})();const aP={apiKey:"AIzaSyBWa7DHExtQ3KI_fAjy__BEKPh-HiJhwNU",authDomain:"arcadeasylum-46375.firebaseapp.com",projectId:"arcadeasylum-46375",storageBucket:"arcadeasylum-46375.appspot.com",messagingSenderId:"101550926492",appId:"1:101550926492:web:0d053dd8341f76b07b9b59",measurementId:"G-4YWLWLF3RB"},Bh=zy(aP);n1(Bh);const Jl=nk(Bh),lP=new xn,os=$D(Bh),Tm=()=>{hA(Jl,lP).then(t=>{const e={userId:t.user.uid,username:t.user.displayName,email:t.user.email,photo:t.user.photoURL,library:[],basket:[]};cP(e)})},cP=async t=>{const e=Ka(os,"users"),n=d0(e,qu("email","==",t.email)),s=await Hu(n);let i=!1;if(s.forEach(()=>{i=!0}),!i){const r=Zr(os,"users",t.userId);m0(r,t)}},Kt=sE("asylumState",{state:()=>({userProfile:{},HomeState:[],PurchaseState:[]}),getters:{count:function(){return this.userProfile.basket?this.userProfile.basket.length:void 0},logged:function(){return Object.keys(this.userProfile).length===0?void 0:this.userProfile}},actions:{init:async function(){const t=await Hu(Ka(os,"products")),e=[];t.forEach(n=>{e.push(n.data())}),this.HomeState=e},userInit:async function(t){t.basket=this.HomeState.filter(i=>t.basket.some(r=>r===i.id)),this.userProfile=t;const e=Ka(os,"checkouts"),n=await Hu(d0(e,qu("uid","==",t.userId),qu("payment","==",200))),s=[];n.forEach(i=>{s.push(i.data())}),this.PurchaseState=s},addTobasket:async function(t){const e=Zr(os,"users",this.userProfile.userId);await Sm(e,{basket:rP(t.id)}),this.userProfile.basket.push(t)},removefromBasket:async function(t){await Sm(Zr(os,"users",this.userProfile.userId),{basket:oP(t.id)}),this.userProfile.basket=this.userProfile.basket.filter(e=>e.id!==t.id)},getGenre:function(t){return this.HomeState.filter(e=>e.genres.includes(t))},getSearch:function(t){return this.HomeState.filter(e=>new RegExp(t).test(e.title.toLowerCase()))},getSale:function(){return this.HomeState.filter(t=>t.discount)},inBasket:function(t){if(this.userProfile.basket)return this.userProfile.basket.some(e=>e.id===t)},inLibrary:function(t){if(this.userProfile.library)return this.userProfile.library.some(e=>e.id===t)}}});const uP={class:"nav-wrapper w-[100vw] h-[10vh] lg:w-[15vw] lg:h-[100vh] flex items-center justify-center lg:sticky lg:top-0"},dP={class:"nav shadow h-full lg:h-[90%] w-full lg:w-[50%] justify-center lg:rounded-lg flex items-center lg:justify-between lg:flex-col"},hP={class:"nav-section w-[] lg:h-[40%] lg:w-fit"},fP=M("img",{src:aI},null,-1),pP=[fP],mP=M("img",{src:lI},null,-1),gP={key:0,class:"absolute -right-2 -top-2 bg-black rounded-full w-[20px] h-[20px] flex items-center justify-center"},yP={class:"text-xs"},vP=M("img",{src:cI},null,-1),bP=[vP],wP={key:0,class:"nav-section h-[35px] lg:h-[30%] lg:w-fit flex lg:flex-col justify-evenly items-center"},_P=["src"],SP=M("img",{src:uI},null,-1),TP=[SP],EP={key:1,class:"nav-section lg:h-[35%]"},IP=M("img",{src:dI},null,-1),CP=[IP],xP={__name:"NavView",setup(t){const e=Kt(),n=Ce(()=>e.logged);return(s,i)=>(H(),ee("nav",uP,[M("div",dP,[M("div",hP,[M("div",{class:"nav-item h-[25px] lg:w-[30px] lg:h-[30px]",onClick:i[0]||(i[0]=()=>s.$router.push({path:"/"}))},pP),M("div",{class:"nav-item relative h-[25px] lg:w-[30px] lg:h-[30px]",onClick:i[1]||(i[1]=()=>s.$router.push({path:"/basket",replace:!0}))},[mP,pe(e).count&&pe(e).count>0?(H(),ee("div",gP,[M("p",yP,je(pe(e).count),1)])):$t("",!0)]),M("div",{class:"nav-item h-[25px] lg:w-[30px] lg:h-[30px]",onClick:i[2]||(i[2]=()=>s.$router.push({path:"/library",replace:!0}))},bP)]),pe(n)?(H(),ee("div",wP,[M("div",{class:"nav-item flex justify-center items-center h-[35px] lg:w-[30px] lg:h-[30px] profile",onClick:i[3]||(i[3]=()=>s.$router.push({path:"/profile",replace:!0}))},[M("img",{src:pe(e).userProfile.photo,class:"rounded w-[35px]"},null,8,_P)]),M("div",{class:"nav-item h-[25px] lg:w-[30px] lg:h-[30px] log",onClick:i[4]||(i[4]=()=>{pe(Jl).signOut(),pe(e).userProfile={}})},TP)])):(H(),ee("div",EP,[M("div",{class:"nav-item h-[25px] lg:w-[30px] lg:h-[30px]",onClick:i[5]||(i[5]=(...r)=>pe(Tm)&&pe(Tm)(...r))},CP)]))])]))}};function Zl(t,e,...n){if(t in e){let i=e[t];return typeof i=="function"?i(...n):i}let s=new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(e).map(i=>`"${i}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(s,Zl),s}var Gu=(t=>(t[t.None=0]="None",t[t.RenderStrategy=1]="RenderStrategy",t[t.Static=2]="Static",t))(Gu||{}),AP=(t=>(t[t.Unmount=0]="Unmount",t[t.Hidden=1]="Hidden",t))(AP||{});function ec({visible:t=!0,features:e=0,ourProps:n,theirProps:s,...i}){var r;let o=v0(s,n),a=Object.assign(i,{props:o});if(t||e&2&&o.static)return Pc(a);if(e&1){let l=(r=o.unmount)==null||r?0:1;return Zl(l,{[0](){return null},[1](){return Pc({...i,props:{...o,hidden:!0,style:{display:"none"}}})}})}return Pc(a)}function Pc({props:t,attrs:e,slots:n,slot:s,name:i}){var r,o;let{as:a,...l}=kP(t,["unmount","static"]),c=(r=n.default)==null?void 0:r.call(n,s),u={};if(s){let d=!1,h=[];for(let[f,g]of Object.entries(s))typeof g=="boolean"&&(d=!0),g===!0&&h.push(f);d&&(u["data-headlessui-state"]=h.join(" "))}if(a==="template"){if(c=y0(c??[]),Object.keys(l).length>0||Object.keys(e).length>0){let[d,...h]=c??[];if(!RP(d)||h.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${i} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(l).concat(Object.keys(e)).map(y=>y.trim()).filter((y,_,m)=>m.indexOf(y)===_).sort((y,_)=>y.localeCompare(_)).map(y=>`  - ${y}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(y=>`  - ${y}`).join(`
`)].join(`
`));let f=v0((o=d.props)!=null?o:{},l),g=rn(d,f);for(let y in f)y.startsWith("on")&&(g.props||(g.props={}),g.props[y]=f[y]);return g}return Array.isArray(c)&&c.length===1?c[0]:c}return pt(a,Object.assign({},l,u),{default:()=>c})}function y0(t){return t.flatMap(e=>e.type===Me?y0(e.children):[e])}function v0(...t){if(t.length===0)return{};if(t.length===1)return t[0];let e={},n={};for(let s of t)for(let i in s)i.startsWith("on")&&typeof s[i]=="function"?(n[i]!=null||(n[i]=[]),n[i].push(s[i])):e[i]=s[i];if(e.disabled||e["aria-disabled"])return Object.assign(e,Object.fromEntries(Object.keys(n).map(s=>[s,void 0])));for(let s in n)Object.assign(e,{[s](i,...r){let o=n[s];for(let a of o){if(i instanceof Event&&i.defaultPrevented)return;a(i,...r)}}});return e}function kP(t,e=[]){let n=Object.assign({},t);for(let s of e)s in n&&delete n[s];return n}function RP(t){return t==null?!1:typeof t.type=="string"||typeof t.type=="object"||typeof t.type=="function"}let OP=0;function DP(){return++OP}function Uh(){return DP()}var at=(t=>(t.Space=" ",t.Enter="Enter",t.Escape="Escape",t.Backspace="Backspace",t.Delete="Delete",t.ArrowLeft="ArrowLeft",t.ArrowUp="ArrowUp",t.ArrowRight="ArrowRight",t.ArrowDown="ArrowDown",t.Home="Home",t.End="End",t.PageUp="PageUp",t.PageDown="PageDown",t.Tab="Tab",t))(at||{});function PP(t){throw new Error("Unexpected object: "+t)}var jt=(t=>(t[t.First=0]="First",t[t.Previous=1]="Previous",t[t.Next=2]="Next",t[t.Last=3]="Last",t[t.Specific=4]="Specific",t[t.Nothing=5]="Nothing",t))(jt||{});function LP(t,e){let n=e.resolveItems();if(n.length<=0)return null;let s=e.resolveActiveIndex(),i=s??-1,r=(()=>{switch(t.focus){case 0:return n.findIndex(o=>!e.resolveDisabled(o));case 1:{let o=n.slice().reverse().findIndex((a,l,c)=>i!==-1&&c.length-l-1>=i?!1:!e.resolveDisabled(a));return o===-1?o:n.length-1-o}case 2:return n.findIndex((o,a)=>a<=i?!1:!e.resolveDisabled(o));case 3:{let o=n.slice().reverse().findIndex(a=>!e.resolveDisabled(a));return o===-1?o:n.length-1-o}case 4:return n.findIndex(o=>e.resolveId(o)===t.id);case 5:return null;default:PP(t)}})();return r===-1?s:r}function Ke(t){var e;return t==null||t.value==null?null:(e=t.value.$el)!=null?e:t.value}let b0=Symbol("Context");var eo=(t=>(t[t.Open=1]="Open",t[t.Closed=2]="Closed",t[t.Closing=4]="Closing",t[t.Opening=8]="Opening",t))(eo||{});function MP(){return Dt(b0,null)}function NP(t){Dn(b0,t)}function Em(t,e){if(t)return t;let n=e??"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function FP(t,e){let n=Te(Em(t.value.type,t.value.as));return sn(()=>{n.value=Em(t.value.type,t.value.as)}),lo(()=>{var s;n.value||Ke(e)&&Ke(e)instanceof HTMLButtonElement&&!((s=Ke(e))!=null&&s.hasAttribute("type"))&&(n.value="button")}),n}class $P{constructor(){this.current=this.detect(),this.currentId=0}set(e){this.current!==e&&(this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let w0=new $P;function Vh(t){if(w0.isServer)return null;if(t instanceof Node)return t.ownerDocument;if(t!=null&&t.hasOwnProperty("value")){let e=Ke(t);if(e)return e.ownerDocument}return document}function BP({container:t,accept:e,walk:n,enabled:s}){lo(()=>{let i=t.value;if(!i||s!==void 0&&!s.value)return;let r=Vh(t);if(!r)return;let o=Object.assign(l=>e(l),{acceptNode:e}),a=r.createTreeWalker(i,NodeFilter.SHOW_ELEMENT,o,!1);for(;a.nextNode();)n(a.currentNode)})}let Ku=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(t=>`${t}:not([tabindex='-1'])`).join(",");var Wu=(t=>(t[t.First=1]="First",t[t.Previous=2]="Previous",t[t.Next=4]="Next",t[t.Last=8]="Last",t[t.WrapAround=16]="WrapAround",t[t.NoScroll=32]="NoScroll",t))(Wu||{}),UP=(t=>(t[t.Error=0]="Error",t[t.Overflow=1]="Overflow",t[t.Success=2]="Success",t[t.Underflow=3]="Underflow",t))(UP||{}),VP=(t=>(t[t.Previous=-1]="Previous",t[t.Next=1]="Next",t))(VP||{});function _0(t=document.body){return t==null?[]:Array.from(t.querySelectorAll(Ku)).sort((e,n)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var jh=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))(jh||{});function zh(t,e=0){var n;return t===((n=Vh(t))==null?void 0:n.body)?!1:Zl(e,{[0](){return t.matches(Ku)},[1](){let s=t;for(;s!==null;){if(s.matches(Ku))return!0;s=s.parentElement}return!1}})}function S0(t){let e=Vh(t);qt(()=>{e&&!zh(e.activeElement,0)&&jP(t)})}function jP(t){t==null||t.focus({preventScroll:!0})}let zP=["textarea","input"].join(",");function qP(t){var e,n;return(n=(e=t==null?void 0:t.matches)==null?void 0:e.call(t,zP))!=null?n:!1}function T0(t,e=n=>n){return t.slice().sort((n,s)=>{let i=e(n),r=e(s);if(i===null||r===null)return 0;let o=i.compareDocumentPosition(r);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function HP(t,e){return GP(_0(),e,{relativeTo:t})}function GP(t,e,{sorted:n=!0,relativeTo:s=null,skipElements:i=[]}={}){var r;let o=(r=Array.isArray(t)?t.length>0?t[0].ownerDocument:document:t==null?void 0:t.ownerDocument)!=null?r:document,a=Array.isArray(t)?n?T0(t):t:_0(t);i.length>0&&a.length>1&&(a=a.filter(g=>!i.includes(g))),s=s??o.activeElement;let l=(()=>{if(e&5)return 1;if(e&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(e&1)return 0;if(e&2)return Math.max(0,a.indexOf(s))-1;if(e&4)return Math.max(0,a.indexOf(s))+1;if(e&8)return a.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=e&32?{preventScroll:!0}:{},d=0,h=a.length,f;do{if(d>=h||d+h<=0)return 0;let g=c+d;if(e&16)g=(g+h)%h;else{if(g<0)return 3;if(g>=h)return 1}f=a[g],f==null||f.focus(u),d+=l}while(f!==o.activeElement);return e&6&&qP(f)&&f.select(),f.hasAttribute("tabindex")||f.setAttribute("tabindex","0"),2}function Lc(t,e,n){w0.isServer||lo(s=>{document.addEventListener(t,e,n),s(()=>document.removeEventListener(t,e,n))})}function KP(t,e,n=Ce(()=>!0)){function s(r,o){if(!n.value||r.defaultPrevented)return;let a=o(r);if(a===null||!a.getRootNode().contains(a))return;let l=function c(u){return typeof u=="function"?c(u()):Array.isArray(u)||u instanceof Set?u:[u]}(t);for(let c of l){if(c===null)continue;let u=c instanceof HTMLElement?c:Ke(c);if(u!=null&&u.contains(a)||r.composed&&r.composedPath().includes(u))return}return!zh(a,jh.Loose)&&a.tabIndex!==-1&&r.preventDefault(),e(r,a)}let i=Te(null);Lc("mousedown",r=>{var o,a;n.value&&(i.value=((a=(o=r.composedPath)==null?void 0:o.call(r))==null?void 0:a[0])||r.target)},!0),Lc("click",r=>{i.value&&(s(r,()=>i.value),i.value=null)},!0),Lc("blur",r=>s(r,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function Im(t){return[t.screenX,t.screenY]}function WP(){let t=Te([-1,-1]);return{wasMoved(e){let n=Im(e);return t.value[0]===n[0]&&t.value[1]===n[1]?!1:(t.value=n,!0)},update(e){t.value=Im(e)}}}var YP=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(YP||{}),QP=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(QP||{});function XP(t){requestAnimationFrame(()=>requestAnimationFrame(t))}let E0=Symbol("MenuContext");function tc(t){let e=Dt(E0,null);if(e===null){let n=new Error(`<${t} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,tc),n}return e}let JP=qn({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(t,{slots:e,attrs:n}){let s=Te(1),i=Te(null),r=Te(null),o=Te([]),a=Te(""),l=Te(null),c=Te(1);function u(h=f=>f){let f=l.value!==null?o.value[l.value]:null,g=T0(h(o.value.slice()),_=>Ke(_.dataRef.domRef)),y=f?g.indexOf(f):null;return y===-1&&(y=null),{items:g,activeItemIndex:y}}let d={menuState:s,buttonRef:i,itemsRef:r,items:o,searchQuery:a,activeItemIndex:l,activationTrigger:c,closeMenu:()=>{s.value=1,l.value=null},openMenu:()=>s.value=0,goToItem(h,f,g){let y=u(),_=LP(h===jt.Specific?{focus:jt.Specific,id:f}:{focus:h},{resolveItems:()=>y.items,resolveActiveIndex:()=>y.activeItemIndex,resolveId:m=>m.id,resolveDisabled:m=>m.dataRef.disabled});a.value="",l.value=_,c.value=g??1,o.value=y.items},search(h){let f=a.value!==""?0:1;a.value+=h.toLowerCase();let g=(l.value!==null?o.value.slice(l.value+f).concat(o.value.slice(0,l.value+f)):o.value).find(_=>_.dataRef.textValue.startsWith(a.value)&&!_.dataRef.disabled),y=g?o.value.indexOf(g):-1;y===-1||y===l.value||(l.value=y,c.value=1)},clearSearch(){a.value=""},registerItem(h,f){let g=u(y=>[...y,{id:h,dataRef:f}]);o.value=g.items,l.value=g.activeItemIndex,c.value=1},unregisterItem(h){let f=u(g=>{let y=g.findIndex(_=>_.id===h);return y!==-1&&g.splice(y,1),g});o.value=f.items,l.value=f.activeItemIndex,c.value=1}};return KP([i,r],(h,f)=>{var g;d.closeMenu(),zh(f,jh.Loose)||(h.preventDefault(),(g=Ke(i))==null||g.focus())},Ce(()=>s.value===0)),Dn(E0,d),NP(Ce(()=>Zl(s.value,{[0]:eo.Open,[1]:eo.Closed}))),()=>{let h={open:s.value===0,close:d.closeMenu};return ec({ourProps:{},theirProps:t,slot:h,slots:e,attrs:n,name:"Menu"})}}}),ZP=qn({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-menu-button-${Uh()}`}},setup(t,{attrs:e,slots:n,expose:s}){let i=tc("MenuButton");s({el:i.buttonRef,$el:i.buttonRef});function r(c){switch(c.key){case at.Space:case at.Enter:case at.ArrowDown:c.preventDefault(),c.stopPropagation(),i.openMenu(),qt(()=>{var u;(u=Ke(i.itemsRef))==null||u.focus({preventScroll:!0}),i.goToItem(jt.First)});break;case at.ArrowUp:c.preventDefault(),c.stopPropagation(),i.openMenu(),qt(()=>{var u;(u=Ke(i.itemsRef))==null||u.focus({preventScroll:!0}),i.goToItem(jt.Last)});break}}function o(c){switch(c.key){case at.Space:c.preventDefault();break}}function a(c){t.disabled||(i.menuState.value===0?(i.closeMenu(),qt(()=>{var u;return(u=Ke(i.buttonRef))==null?void 0:u.focus({preventScroll:!0})})):(c.preventDefault(),i.openMenu(),XP(()=>{var u;return(u=Ke(i.itemsRef))==null?void 0:u.focus({preventScroll:!0})})))}let l=FP(Ce(()=>({as:t.as,type:e.type})),i.buttonRef);return()=>{var c;let u={open:i.menuState.value===0},{id:d,...h}=t,f={ref:i.buttonRef,id:d,type:l.value,"aria-haspopup":"menu","aria-controls":(c=Ke(i.itemsRef))==null?void 0:c.id,"aria-expanded":t.disabled?void 0:i.menuState.value===0,onKeydown:r,onKeyup:o,onClick:a};return ec({ourProps:f,theirProps:h,slot:u,attrs:e,slots:n,name:"MenuButton"})}}}),eL=qn({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-menu-items-${Uh()}`}},setup(t,{attrs:e,slots:n,expose:s}){let i=tc("MenuItems"),r=Te(null);s({el:i.itemsRef,$el:i.itemsRef}),BP({container:Ce(()=>Ke(i.itemsRef)),enabled:Ce(()=>i.menuState.value===0),accept(u){return u.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:u.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(u){u.setAttribute("role","none")}});function o(u){var d;switch(r.value&&clearTimeout(r.value),u.key){case at.Space:if(i.searchQuery.value!=="")return u.preventDefault(),u.stopPropagation(),i.search(u.key);case at.Enter:if(u.preventDefault(),u.stopPropagation(),i.activeItemIndex.value!==null){let h=i.items.value[i.activeItemIndex.value];(d=Ke(h.dataRef.domRef))==null||d.click()}i.closeMenu(),S0(Ke(i.buttonRef));break;case at.ArrowDown:return u.preventDefault(),u.stopPropagation(),i.goToItem(jt.Next);case at.ArrowUp:return u.preventDefault(),u.stopPropagation(),i.goToItem(jt.Previous);case at.Home:case at.PageUp:return u.preventDefault(),u.stopPropagation(),i.goToItem(jt.First);case at.End:case at.PageDown:return u.preventDefault(),u.stopPropagation(),i.goToItem(jt.Last);case at.Escape:u.preventDefault(),u.stopPropagation(),i.closeMenu(),qt(()=>{var h;return(h=Ke(i.buttonRef))==null?void 0:h.focus({preventScroll:!0})});break;case at.Tab:u.preventDefault(),u.stopPropagation(),i.closeMenu(),qt(()=>HP(Ke(i.buttonRef),u.shiftKey?Wu.Previous:Wu.Next));break;default:u.key.length===1&&(i.search(u.key),r.value=setTimeout(()=>i.clearSearch(),350));break}}function a(u){switch(u.key){case at.Space:u.preventDefault();break}}let l=MP(),c=Ce(()=>l!==null?(l.value&eo.Open)===eo.Open:i.menuState.value===0);return()=>{var u,d;let h={open:i.menuState.value===0},{id:f,...g}=t,y={"aria-activedescendant":i.activeItemIndex.value===null||(u=i.items.value[i.activeItemIndex.value])==null?void 0:u.id,"aria-labelledby":(d=Ke(i.buttonRef))==null?void 0:d.id,id:f,onKeydown:o,onKeyup:a,role:"menu",tabIndex:0,ref:i.itemsRef};return ec({ourProps:y,theirProps:g,slot:h,attrs:e,slots:n,features:Gu.RenderStrategy|Gu.Static,visible:c.value,name:"MenuItems"})}}}),tL=qn({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-menu-item-${Uh()}`}},setup(t,{slots:e,attrs:n,expose:s}){let i=tc("MenuItem"),r=Te(null);s({el:r,$el:r});let o=Ce(()=>i.activeItemIndex.value!==null?i.items.value[i.activeItemIndex.value].id===t.id:!1),a=Ce(()=>({disabled:t.disabled,textValue:"",domRef:r}));sn(()=>{var g,y;let _=(y=(g=Ke(r))==null?void 0:g.textContent)==null?void 0:y.toLowerCase().trim();_!==void 0&&(a.value.textValue=_)}),sn(()=>i.registerItem(t.id,a)),ho(()=>i.unregisterItem(t.id)),lo(()=>{i.menuState.value===0&&o.value&&i.activationTrigger.value!==0&&qt(()=>{var g,y;return(y=(g=Ke(r))==null?void 0:g.scrollIntoView)==null?void 0:y.call(g,{block:"nearest"})})});function l(g){if(t.disabled)return g.preventDefault();i.closeMenu(),S0(Ke(i.buttonRef))}function c(){if(t.disabled)return i.goToItem(jt.Nothing);i.goToItem(jt.Specific,t.id)}let u=WP();function d(g){u.update(g)}function h(g){u.wasMoved(g)&&(t.disabled||o.value||i.goToItem(jt.Specific,t.id,0))}function f(g){u.wasMoved(g)&&(t.disabled||o.value&&i.goToItem(jt.Nothing))}return()=>{let{disabled:g}=t,y={active:o.value,disabled:g,close:i.closeMenu},{id:_,...m}=t;return ec({ourProps:{id:_,ref:r,role:"menuitem",tabIndex:g===!0?void 0:-1,"aria-disabled":g===!0?!0:void 0,disabled:void 0,onClick:l,onFocus:c,onPointerenter:d,onMouseenter:d,onPointermove:h,onMousemove:h,onPointerleave:f,onMouseleave:f},theirProps:{...n,...m},slot:y,attrs:n,slots:e,name:"MenuItem"})}}});function nL(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function s(){if(this instanceof s){var i=[null];i.push.apply(i,arguments);var r=Function.bind.apply(e,i);return new r}return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(s){var i=Object.getOwnPropertyDescriptor(t,s);Object.defineProperty(n,s,i.get?i:{enumerable:!0,get:function(){return t[s]}})}),n}const sL=nL(QT),{createElementVNode:iL,openBlock:rL,createElementBlock:oL}=sL;var aL=function(e,n){return rL(),oL("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[iL("path",{"fill-rule":"evenodd",d:"M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z","clip-rule":"evenodd"})])},lL=aL;const No=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},cL={components:{ChevronDownIcon:lL,CustomMenu:JP,MenuButton:ZP,MenuItem:tL,MenuItems:eL},data(){return{store:Kt(),searchRes:void 0}},methods:{handleSearchRes:function(t){this.$router.push({path:`/search/${t}`}),this.$refs.searchRef.value="",this.searchRes=void 0},handleSearch:function(t){let{value:e}=t.currentTarget;e.length>0&&(this.$router.push({path:`/search/${e}`}),this.$refs.searchRef.value="")},handleSearchResFilter:function(){const{value:t}=this.$refs.searchRef;this.searchRes=t.length>0?this.store.HomeState.filter(e=>e.title.toLowerCase().includes(t)):void 0}}},uL={class:"search-wrapper relative z-20 w-full lg:w-[50%]"},dL={class:"search rounded-lg bg-glass flex items-center"},hL={class:"w-[80%] h-full relative"},fL={class:"absolute left-0 origin-top-right mt-2 w-full h-fit bg-white text-black rounded-md overflow-hidden"},pL=["onClick"],mL={class:"py-1"},gL={class:"py-1"},yL={class:"py-1"},vL={class:"py-1"};function bL(t,e,n,s,i,r){const o=st("ChevronDownIcon"),a=st("MenuButton"),l=st("router-link"),c=st("MenuItem"),u=st("MenuItems"),d=st("CustomMenu");return H(),ee("div",uL,[M("div",dL,[M("div",hL,[M("input",{type:"text",onKeyup:e[0]||(e[0]=ly((...h)=>r.handleSearch&&r.handleSearch(...h),["enter"])),class:"rounded-lg bg-transparent pl-3 text-white w-full",placeholder:"Search for a game",onInput:e[1]||(e[1]=(...h)=>r.handleSearchResFilter&&r.handleSearchResFilter(...h)),ref:"searchRef"},null,544),M("div",fL,[(H(!0),ee(Me,null,Nn(i.searchRes,(h,f)=>(H(),ee("p",{class:Ge(["p-3 hover:bg-gray-200 cursor-pointer",f>0&&"border-t"]),key:f,onClick:()=>r.handleSearchRes(h.title)},je(h.title),11,pL))),128))])]),ne(d,{as:"div",class:"select w-[15%] h-fit relative inline-block text-left"},{default:Le(()=>[M("div",null,[ne(a,{class:"inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium shadow-sm focus:outline-none"},{default:Le(()=>[Ft(" Genres "),ne(o,{class:"-mr-1 ml-2 h-5 w-5","aria-hidden":"true"})]),_:1})]),ne(dl,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:Le(()=>[ne(u,{class:"absolute bg-white right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md shadow-lg"},{default:Le(()=>[M("div",mL,[ne(c,null,{default:Le(({active:h})=>[ne(l,{to:"/search/genre/Action",class:Ge([h?"bg-gray-200 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"])},{default:Le(()=>[Ft("Action")]),_:2},1032,["class"])]),_:1}),ne(c,null,{default:Le(({active:h})=>[ne(l,{to:"/search/genre/Adventure",class:Ge([h?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"])},{default:Le(()=>[Ft("Adventure")]),_:2},1032,["class"])]),_:1})]),M("div",gL,[ne(c,null,{default:Le(({active:h})=>[ne(l,{to:"/search/genre/Horror",class:Ge([h?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"])},{default:Le(()=>[Ft("Horror")]),_:2},1032,["class"])]),_:1}),ne(c,null,{default:Le(({active:h})=>[ne(l,{to:"/search/genre/Driving",class:Ge([h?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"])},{default:Le(()=>[Ft("Driving")]),_:2},1032,["class"])]),_:1})]),M("div",yL,[ne(c,null,{default:Le(({active:h})=>[ne(l,{to:"/search/genre/Strategy",class:Ge([h?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"])},{default:Le(()=>[Ft("Strategy")]),_:2},1032,["class"])]),_:1}),ne(c,null,{default:Le(({active:h})=>[ne(l,{to:"/search/genre/Sport",class:Ge([h?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"])},{default:Le(()=>[Ft("Sport")]),_:2},1032,["class"])]),_:1})]),M("div",vL,[ne(c,null,{default:Le(({active:h})=>[ne(l,{to:"/search/genre/Fighting",class:Ge([h?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"])},{default:Le(()=>[Ft("Fighting")]),_:2},1032,["class"])]),_:1}),ne(c,null,{default:Le(({active:h})=>[ne(l,{to:"/search/genre/Fantasy",class:Ge([h?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"])},{default:Le(()=>[Ft("Fantasy")]),_:2},1032,["class"])]),_:1})])]),_:1})]),_:1})]),_:1})])])}const wL=No(cL,[["render",bL]]);function _L(t){return[(t>>16&255)/255,(t>>8&255)/255,(255&t)/255]}["SCREEN","LINEAR_LIGHT"].reduce((t,e,n)=>Object.assign(t,{[e]:n}),{});class SL{constructor(e,n,s,i=!1){const r=this,o=document.location.search.toLowerCase().indexOf("debug=webgl")!==-1;r.canvas=e,r.gl=r.canvas.getContext("webgl",{antialias:!0}),r.meshes=[];const a=r.gl;n&&s&&this.setSize(n,s),r.lastDebugMsg,r.debug=i&&o?function(c){const u=new Date;u-r.lastDebugMsg>1e3&&console.log("---"),console.log(u.toLocaleTimeString()+Array(Math.max(0,32-c.length)).join(" ")+c+": ",...Array.from(arguments).slice(1)),r.lastDebugMsg=u}:()=>{},Object.defineProperties(r,{Material:{enumerable:!1,value:class{constructor(c,u,d={}){const h=this;function f(_,m){const p=a.createShader(_);return a.shaderSource(p,m),a.compileShader(p),a.getShaderParameter(p,a.COMPILE_STATUS)||console.error(a.getShaderInfoLog(p)),r.debug("Material.compileShaderSource",{source:m}),p}function g(_,m){return Object.entries(_).map(([p,v])=>v.getDeclaration(p,m)).join(`
`)}h.uniforms=d,h.uniformInstances=[];const y=`
              precision highp float;
            `;h.vertexSource=`
              ${y}
              attribute vec4 position;
              attribute vec2 uv;
              attribute vec2 uvNorm;
              ${g(r.commonUniforms,"vertex")}
              ${g(d,"vertex")}
              ${c}
            `,h.Source=`
              ${y}
              ${g(r.commonUniforms,"fragment")}
              ${g(d,"fragment")}
              ${u}
            `,h.vertexShader=f(a.VERTEX_SHADER,h.vertexSource),h.fragmentShader=f(a.FRAGMENT_SHADER,h.Source),h.program=a.createProgram(),a.attachShader(h.program,h.vertexShader),a.attachShader(h.program,h.fragmentShader),a.linkProgram(h.program),a.getProgramParameter(h.program,a.LINK_STATUS)||console.error(a.getProgramInfoLog(h.program)),a.useProgram(h.program),h.attachUniforms(void 0,r.commonUniforms),h.attachUniforms(void 0,h.uniforms)}attachUniforms(c,u){const d=this;c===void 0?Object.entries(u).forEach(([h,f])=>{d.attachUniforms(h,f)}):u.type=="array"?u.value.forEach((h,f)=>d.attachUniforms(`${c}[${f}]`,h)):u.type=="struct"?Object.entries(u.value).forEach(([h,f])=>d.attachUniforms(`${c}.${h}`,f)):(r.debug("Material.attachUniforms",{name:c,uniform:u}),d.uniformInstances.push({uniform:u,location:a.getUniformLocation(d.program,c)}))}}},Uniform:{enumerable:!1,value:class{constructor(c){this.type="float",Object.assign(this,c),this.typeFn={float:"1f",int:"1i",vec2:"2fv",vec3:"3fv",vec4:"4fv",mat4:"Matrix4fv"}[this.type]||"1f",this.update()}update(c){this.value!==void 0&&a[`uniform${this.typeFn}`](c,this.typeFn.indexOf("Matrix")===0?this.transpose:this.value,this.typeFn.indexOf("Matrix")===0?this.value:null)}getDeclaration(c,u,d){const h=this;if(h.excludeFrom!==u){if(h.type==="array")return h.value[0].getDeclaration(c,u,h.value.length)+`
const int ${c}_length = ${h.value.length};`;if(h.type==="struct"){let f=c.replace("u_","");return f=f.charAt(0).toUpperCase()+f.slice(1),`uniform struct ${f} 
                                {
`+Object.entries(h.value).map(([g,y])=>y.getDeclaration(g,u).replace(/^uniform/,"")).join("")+`
} ${c}${d>0?`[${d}]`:""};`}return`uniform ${h.type} ${c}${d>0?`[${d}]`:""};`}}}},PlaneGeometry:{enumerable:!1,value:class{constructor(c,u,d,h,f){a.createBuffer(),this.attributes={position:new r.Attribute({target:a.ARRAY_BUFFER,size:3}),uv:new r.Attribute({target:a.ARRAY_BUFFER,size:2}),uvNorm:new r.Attribute({target:a.ARRAY_BUFFER,size:2}),index:new r.Attribute({target:a.ELEMENT_ARRAY_BUFFER,size:3,type:a.UNSIGNED_SHORT})},this.setTopology(d,h),this.setSize(c,u,f)}setTopology(c=1,u=1){const d=this;d.xSegCount=c,d.ySegCount=u,d.vertexCount=(d.xSegCount+1)*(d.ySegCount+1),d.quadCount=d.xSegCount*d.ySegCount*2,d.attributes.uv.values=new Float32Array(2*d.vertexCount),d.attributes.uvNorm.values=new Float32Array(2*d.vertexCount),d.attributes.index.values=new Uint16Array(3*d.quadCount);for(let h=0;h<=d.ySegCount;h++)for(let f=0;f<=d.xSegCount;f++){const g=h*(d.xSegCount+1)+f;if(d.attributes.uv.values[2*g]=f/d.xSegCount,d.attributes.uv.values[2*g+1]=1-h/d.ySegCount,d.attributes.uvNorm.values[2*g]=f/d.xSegCount*2-1,d.attributes.uvNorm.values[2*g+1]=1-h/d.ySegCount*2,f<d.xSegCount&&h<d.ySegCount){const y=h*d.xSegCount+f;d.attributes.index.values[6*y]=g,d.attributes.index.values[6*y+1]=g+1+d.xSegCount,d.attributes.index.values[6*y+2]=g+1,d.attributes.index.values[6*y+3]=g+1,d.attributes.index.values[6*y+4]=g+1+d.xSegCount,d.attributes.index.values[6*y+5]=g+2+d.xSegCount}}d.attributes.uv.update(),d.attributes.uvNorm.update(),d.attributes.index.update(),r.debug("Geometry.setTopology",{uv:d.attributes.uv,uvNorm:d.attributes.uvNorm,index:d.attributes.index})}setSize(c=1,u=1,d="xz"){const h=this;h.width=c,h.height=u,h.orientation=d,h.attributes.position.values&&h.attributes.position.values.length===3*h.vertexCount||(h.attributes.position.values=new Float32Array(3*h.vertexCount));const f=c/-2,g=u/-2,y=c/h.xSegCount,_=u/h.ySegCount;for(let m=0;m<=h.ySegCount;m++){const p=g+m*_;for(let v=0;v<=h.xSegCount;v++){const T=f+v*y,E=m*(h.xSegCount+1)+v;h.attributes.position.values[3*E+"xyz".indexOf(d[0])]=T,h.attributes.position.values[3*E+"xyz".indexOf(d[1])]=-p}}h.attributes.position.update(),r.debug("Geometry.setSize",{position:h.attributes.position})}}},Mesh:{enumerable:!1,value:class{constructor(c,u){const d=this;d.geometry=c,d.material=u,d.wireframe=!1,d.attributeInstances=[],Object.entries(d.geometry.attributes).forEach(([h,f])=>{d.attributeInstances.push({attribute:f,location:f.attach(h,d.material.program)})}),r.meshes.push(d),r.debug("Mesh.constructor",{mesh:d})}draw(){a.useProgram(this.material.program),this.material.uniformInstances.forEach(({uniform:c,location:u})=>c.update(u)),this.attributeInstances.forEach(({attribute:c,location:u})=>c.use(u)),a.drawElements(this.wireframe?a.LINES:a.TRIANGLES,this.geometry.attributes.index.values.length,a.UNSIGNED_SHORT,0)}remove(){r.meshes=r.meshes.filter(c=>c!=this)}}},Attribute:{enumerable:!1,value:class{constructor(c){this.type=a.FLOAT,this.normalized=!1,this.buffer=a.createBuffer(),Object.assign(this,c),this.update()}update(){this.values!==void 0&&(a.bindBuffer(this.target,this.buffer),a.bufferData(this.target,this.values,a.STATIC_DRAW))}attach(c,u){const d=a.getAttribLocation(u,c);return this.target===a.ARRAY_BUFFER&&(a.enableVertexAttribArray(d),a.vertexAttribPointer(d,this.size,this.type,this.normalized,0,0)),d}use(c){a.bindBuffer(this.target,this.buffer),this.target===a.ARRAY_BUFFER&&(a.enableVertexAttribArray(c),a.vertexAttribPointer(c,this.size,this.type,this.normalized,0,0))}}}});const l=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];r.commonUniforms={projectionMatrix:new r.Uniform({type:"mat4",value:l}),modelViewMatrix:new r.Uniform({type:"mat4",value:l}),resolution:new r.Uniform({type:"vec2",value:[1,1]}),aspectRatio:new r.Uniform({type:"float",value:1})}}setSize(e=640,n=480){this.width=e,this.height=n,this.canvas.width=e,this.canvas.height=n,this.gl.viewport(0,0,e,n),this.commonUniforms.resolution.value=[e,n],this.commonUniforms.aspectRatio.value=e/n,this.debug("MiniGL.setSize",{width:e,height:n})}setOrthographicCamera(e=0,n=0,s=0,i=-2e3,r=2e3){this.commonUniforms.projectionMatrix.value=[2/this.width,0,0,0,0,2/this.height,0,0,0,0,2/(i-r),0,e,n,s,1],this.debug("setOrthographicCamera",this.commonUniforms.projectionMatrix.value)}render(){this.gl.clearColor(0,0,0,0),this.gl.clearDepth(1),this.meshes.forEach(e=>e.draw())}}function oe(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class TL{constructor(...e){oe(this,"el",void 0),oe(this,"cssVarRetries",0),oe(this,"maxCssVarRetries",200),oe(this,"angle",0),oe(this,"isLoadedClass",!1),oe(this,"isScrolling",!1),oe(this,"scrollingTimeout",void 0),oe(this,"scrollingRefreshDelay",200),oe(this,"isIntersecting",!1),oe(this,"shaderFiles",void 0),oe(this,"vertexShader",void 0),oe(this,"sectionColors",void 0),oe(this,"computedCanvasStyle",void 0),oe(this,"conf",void 0),oe(this,"uniforms",void 0),oe(this,"t",1253106),oe(this,"last",0),oe(this,"width",void 0),oe(this,"minWidth",1111),oe(this,"height",600),oe(this,"xSegCount",void 0),oe(this,"ySegCount",void 0),oe(this,"mesh",void 0),oe(this,"material",void 0),oe(this,"geometry",void 0),oe(this,"minigl",void 0),oe(this,"scrollObserver",void 0),oe(this,"amp",320),oe(this,"seed",5),oe(this,"freqX",14e-5),oe(this,"freqY",29e-5),oe(this,"freqDelta",1e-5),oe(this,"activeColors",[1,1,1,1]),oe(this,"isMetaKey",!1),oe(this,"isGradientLegendVisible",!1),oe(this,"isMouseDown",!1),oe(this,"handleScroll",()=>{clearTimeout(this.scrollingTimeout),this.scrollingTimeout=setTimeout(this.handleScrollEnd,this.scrollingRefreshDelay),this.isGradientLegendVisible&&this.hideGradientLegend(),this.conf.playing&&(this.isScrolling=!0,this.pause())}),oe(this,"handleScrollEnd",()=>{this.isScrolling=!1,this.isIntersecting&&this.play()}),oe(this,"resize",()=>{this.width=window.innerWidth,this.minigl.setSize(this.width,this.height),this.minigl.setOrthographicCamera(),this.xSegCount=Math.ceil(this.width*this.conf.density[0]),this.ySegCount=Math.ceil(this.height*this.conf.density[1]),this.mesh.geometry.setTopology(this.xSegCount,this.ySegCount),this.mesh.geometry.setSize(this.width,this.height),this.mesh.material.uniforms.u_shadow_power.value=this.width<600?5:6}),oe(this,"handleMouseDown",n=>{this.isGradientLegendVisible&&(this.isMetaKey=n.metaKey,this.isMouseDown=!0,this.conf.playing===!1&&requestAnimationFrame(this.animate))}),oe(this,"handleMouseUp",()=>{this.isMouseDown=!1}),oe(this,"animate",n=>{if(!this.shouldSkipFrame(n)||this.isMouseDown){if(this.t+=Math.min(n-this.last,1e3/15),this.last=n,this.isMouseDown){let s=160;this.isMetaKey&&(s=-160),this.t+=s}this.mesh.material.uniforms.u_time.value=this.t,this.minigl.render()}if(this.last!==0&&this.isStatic)return this.minigl.render(),void this.disconnect();(this.conf.playing||this.isMouseDown)&&requestAnimationFrame(this.animate)}),oe(this,"addIsLoadedClass",()=>{!this.isLoadedClass&&(this.isLoadedClass=!0,this.el.classList.add("isLoaded"),setTimeout(()=>{this.el.parentElement.classList.add("isLoaded")},3e3))}),oe(this,"pause",()=>{this.conf.playing=!1}),oe(this,"play",()=>{requestAnimationFrame(this.animate),this.conf.playing=!0}),oe(this,"initGradient",n=>(this.el=document.querySelector(n),this.connect(),this))}async connect(){this.shaderFiles={vertex:`varying vec3 v_color;

void main() {
  float time = u_time * u_global.noiseSpeed;

  vec2 noiseCoord = resolution * uvNorm * u_global.noiseFreq;

  vec2 st = 1. - uvNorm.xy;

  //
  // Tilting the plane
  //

  // Front-to-back tilt
  float tilt = resolution.y / 2.0 * uvNorm.y;

  // Left-to-right angle
  float incline = resolution.x * uvNorm.x / 2.0 * u_vertDeform.incline;

  // Up-down shift to offset incline
  float offset = resolution.x / 2.0 * u_vertDeform.incline * mix(u_vertDeform.offsetBottom, u_vertDeform.offsetTop, uv.y);

  //
  // Vertex noise
  //

  float noise = snoise(vec3(
    noiseCoord.x * u_vertDeform.noiseFreq.x + time * u_vertDeform.noiseFlow,
    noiseCoord.y * u_vertDeform.noiseFreq.y,
    time * u_vertDeform.noiseSpeed + u_vertDeform.noiseSeed
  )) * u_vertDeform.noiseAmp;

  // Fade noise to zero at edges
  noise *= 1.0 - pow(abs(uvNorm.y), 2.0);

  // Clamp to 0
  noise = max(0.0, noise);

  vec3 pos = vec3(
    position.x,
    position.y + tilt + incline + noise - offset,
    position.z
  );

  //
  // Vertex color, to be passed to fragment shader
  //

  if (u_active_colors[0] == 1.) {
    v_color = u_baseColor;
  }

  for (int i = 0; i < u_waveLayers_length; i++) {
    if (u_active_colors[i + 1] == 1.) {
      WaveLayers layer = u_waveLayers[i];

      float noise = smoothstep(
        layer.noiseFloor,
        layer.noiseCeil,
        snoise(vec3(
          noiseCoord.x * layer.noiseFreq.x + time * layer.noiseFlow,
          noiseCoord.y * layer.noiseFreq.y,
          time * layer.noiseSpeed + layer.noiseSeed
        )) / 2.0 + 0.5
      );

      v_color = blendNormal(v_color, layer.color, pow(noise, 4.));
    }
  }

  //
  // Finish
  //

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}`,noise:`//
// Description : Array and textureless GLSL 2D/3D/4D simplex
//               noise functions.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : stegu
//     Lastmod : 20110822 (ijm)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//               https://github.com/stegu/webgl-noise
//

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
    return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v)
{
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

// Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
  //   x1 = x0 - i1  + 1.0 * C.xxx;
  //   x2 = x0 - i2  + 2.0 * C.xxx;
  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

// Permutations
  i = mod289(i);
  vec4 p = permute( permute( permute(
            i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
          + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
          + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// Gradients: 7x7 points over a square, mapped onto an octahedron.
// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
}`,blend:`//
// https://github.com/jamieowen/glsl-blend
//

// Normal

vec3 blendNormal(vec3 base, vec3 blend) {
	return blend;
}

vec3 blendNormal(vec3 base, vec3 blend, float opacity) {
	return (blendNormal(base, blend) * opacity + base * (1.0 - opacity));
}

// Screen

float blendScreen(float base, float blend) {
	return 1.0-((1.0-base)*(1.0-blend));
}

vec3 blendScreen(vec3 base, vec3 blend) {
	return vec3(blendScreen(base.r,blend.r),blendScreen(base.g,blend.g),blendScreen(base.b,blend.b));
}

vec3 blendScreen(vec3 base, vec3 blend, float opacity) {
	return (blendScreen(base, blend) * opacity + base * (1.0 - opacity));
}

// Multiply

vec3 blendMultiply(vec3 base, vec3 blend) {
	return base*blend;
}

vec3 blendMultiply(vec3 base, vec3 blend, float opacity) {
	return (blendMultiply(base, blend) * opacity + base * (1.0 - opacity));
}

// Overlay

float blendOverlay(float base, float blend) {
	return base<0.5?(2.0*base*blend):(1.0-2.0*(1.0-base)*(1.0-blend));
}

vec3 blendOverlay(vec3 base, vec3 blend) {
	return vec3(blendOverlay(base.r,blend.r),blendOverlay(base.g,blend.g),blendOverlay(base.b,blend.b));
}

vec3 blendOverlay(vec3 base, vec3 blend, float opacity) {
	return (blendOverlay(base, blend) * opacity + base * (1.0 - opacity));
}

// Hard light

vec3 blendHardLight(vec3 base, vec3 blend) {
	return blendOverlay(blend,base);
}

vec3 blendHardLight(vec3 base, vec3 blend, float opacity) {
	return (blendHardLight(base, blend) * opacity + base * (1.0 - opacity));
}

// Soft light

float blendSoftLight(float base, float blend) {
	return (blend<0.5)?(2.0*base*blend+base*base*(1.0-2.0*blend)):(sqrt(base)*(2.0*blend-1.0)+2.0*base*(1.0-blend));
}

vec3 blendSoftLight(vec3 base, vec3 blend) {
	return vec3(blendSoftLight(base.r,blend.r),blendSoftLight(base.g,blend.g),blendSoftLight(base.b,blend.b));
}

vec3 blendSoftLight(vec3 base, vec3 blend, float opacity) {
	return (blendSoftLight(base, blend) * opacity + base * (1.0 - opacity));
}

// Color dodge

float blendColorDodge(float base, float blend) {
	return (blend==1.0)?blend:min(base/(1.0-blend),1.0);
}

vec3 blendColorDodge(vec3 base, vec3 blend) {
	return vec3(blendColorDodge(base.r,blend.r),blendColorDodge(base.g,blend.g),blendColorDodge(base.b,blend.b));
}

vec3 blendColorDodge(vec3 base, vec3 blend, float opacity) {
	return (blendColorDodge(base, blend) * opacity + base * (1.0 - opacity));
}

// Color burn

float blendColorBurn(float base, float blend) {
	return (blend==0.0)?blend:max((1.0-((1.0-base)/blend)),0.0);
}

vec3 blendColorBurn(vec3 base, vec3 blend) {
	return vec3(blendColorBurn(base.r,blend.r),blendColorBurn(base.g,blend.g),blendColorBurn(base.b,blend.b));
}

vec3 blendColorBurn(vec3 base, vec3 blend, float opacity) {
	return (blendColorBurn(base, blend) * opacity + base * (1.0 - opacity));
}

// Vivid Light

float blendVividLight(float base, float blend) {
	return (blend<0.5)?blendColorBurn(base,(2.0*blend)):blendColorDodge(base,(2.0*(blend-0.5)));
}

vec3 blendVividLight(vec3 base, vec3 blend) {
	return vec3(blendVividLight(base.r,blend.r),blendVividLight(base.g,blend.g),blendVividLight(base.b,blend.b));
}

vec3 blendVividLight(vec3 base, vec3 blend, float opacity) {
	return (blendVividLight(base, blend) * opacity + base * (1.0 - opacity));
}

// Lighten

float blendLighten(float base, float blend) {
	return max(blend,base);
}

vec3 blendLighten(vec3 base, vec3 blend) {
	return vec3(blendLighten(base.r,blend.r),blendLighten(base.g,blend.g),blendLighten(base.b,blend.b));
}

vec3 blendLighten(vec3 base, vec3 blend, float opacity) {
	return (blendLighten(base, blend) * opacity + base * (1.0 - opacity));
}

// Linear burn

float blendLinearBurn(float base, float blend) {
	// Note : Same implementation as BlendSubtractf
	return max(base+blend-1.0,0.0);
}

vec3 blendLinearBurn(vec3 base, vec3 blend) {
	// Note : Same implementation as BlendSubtract
	return max(base+blend-vec3(1.0),vec3(0.0));
}

vec3 blendLinearBurn(vec3 base, vec3 blend, float opacity) {
	return (blendLinearBurn(base, blend) * opacity + base * (1.0 - opacity));
}

// Linear dodge

float blendLinearDodge(float base, float blend) {
	// Note : Same implementation as BlendAddf
	return min(base+blend,1.0);
}

vec3 blendLinearDodge(vec3 base, vec3 blend) {
	// Note : Same implementation as BlendAdd
	return min(base+blend,vec3(1.0));
}

vec3 blendLinearDodge(vec3 base, vec3 blend, float opacity) {
	return (blendLinearDodge(base, blend) * opacity + base * (1.0 - opacity));
}

// Linear light

float blendLinearLight(float base, float blend) {
	return blend<0.5?blendLinearBurn(base,(2.0*blend)):blendLinearDodge(base,(2.0*(blend-0.5)));
}

vec3 blendLinearLight(vec3 base, vec3 blend) {
	return vec3(blendLinearLight(base.r,blend.r),blendLinearLight(base.g,blend.g),blendLinearLight(base.b,blend.b));
}

vec3 blendLinearLight(vec3 base, vec3 blend, float opacity) {
	return (blendLinearLight(base, blend) * opacity + base * (1.0 - opacity));
}`,fragment:`varying vec3 v_color;

void main() {
  vec3 color = v_color;
  if (u_darken_top == 1.0) {
    vec2 st = gl_FragCoord.xy/resolution.xy;
    color.g -= pow(st.y + sin(-12.0) * st.x, u_shadow_power) * 0.4;
  }
  gl_FragColor = vec4(color, 1.0);
}`},this.conf={presetName:"",wireframe:!1,density:[.06,.16],zoom:1,rotation:0,playing:!0},document.querySelectorAll("canvas").length<1?console.log("DID NOT LOAD HERO STRIPE CANVAS"):(this.minigl=new SL(this.el,null,null,!0),requestAnimationFrame(()=>{this.el&&(this.computedCanvasStyle=getComputedStyle(this.el),this.waitForCssVars())}))}disconnect(){this.scrollObserver&&(window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("mousedown",this.handleMouseDown),window.removeEventListener("mouseup",this.handleMouseUp),window.removeEventListener("keydown",this.handleKeyDown),this.scrollObserver.disconnect()),window.removeEventListener("resize",this.resize)}initMaterial(){this.uniforms={u_time:new this.minigl.Uniform({value:0}),u_shadow_power:new this.minigl.Uniform({value:5}),u_darken_top:new this.minigl.Uniform({value:this.el.dataset.jsDarkenTop===""?1:0}),u_active_colors:new this.minigl.Uniform({value:this.activeColors,type:"vec4"}),u_global:new this.minigl.Uniform({value:{noiseFreq:new this.minigl.Uniform({value:[this.freqX,this.freqY],type:"vec2"}),noiseSpeed:new this.minigl.Uniform({value:5e-6})},type:"struct"}),u_vertDeform:new this.minigl.Uniform({value:{incline:new this.minigl.Uniform({value:Math.sin(this.angle)/Math.cos(this.angle)}),offsetTop:new this.minigl.Uniform({value:-.5}),offsetBottom:new this.minigl.Uniform({value:-.5}),noiseFreq:new this.minigl.Uniform({value:[3,4],type:"vec2"}),noiseAmp:new this.minigl.Uniform({value:this.amp}),noiseSpeed:new this.minigl.Uniform({value:10}),noiseFlow:new this.minigl.Uniform({value:3}),noiseSeed:new this.minigl.Uniform({value:this.seed})},type:"struct",excludeFrom:"fragment"}),u_baseColor:new this.minigl.Uniform({value:this.sectionColors[0],type:"vec3",excludeFrom:"fragment"}),u_waveLayers:new this.minigl.Uniform({value:[],excludeFrom:"fragment",type:"array"})};for(let e=1;e<this.sectionColors.length;e+=1)this.uniforms.u_waveLayers.value.push(new this.minigl.Uniform({value:{color:new this.minigl.Uniform({value:this.sectionColors[e],type:"vec3"}),noiseFreq:new this.minigl.Uniform({value:[2+e/this.sectionColors.length,3+e/this.sectionColors.length],type:"vec2"}),noiseSpeed:new this.minigl.Uniform({value:11+.3*e}),noiseFlow:new this.minigl.Uniform({value:6.5+.3*e}),noiseSeed:new this.minigl.Uniform({value:this.seed+10*e}),noiseFloor:new this.minigl.Uniform({value:.1}),noiseCeil:new this.minigl.Uniform({value:.63+.07*e})},type:"struct"}));return this.vertexShader=[this.shaderFiles.noise,this.shaderFiles.blend,this.shaderFiles.vertex].join(`

`),new this.minigl.Material(this.vertexShader,this.shaderFiles.fragment,this.uniforms)}initMesh(){this.material=this.initMaterial(),this.geometry=new this.minigl.PlaneGeometry,this.mesh=new this.minigl.Mesh(this.geometry,this.material)}shouldSkipFrame(e){return!!window.document.hidden||!this.conf.playing||parseInt(e,10)%2==0||void 0}updateFrequency(e){this.freqX+=e,this.freqY+=e}toggleColor(e){this.activeColors[e]=this.activeColors[e]===0?1:0}showGradientLegend(){this.width>this.minWidth&&(this.isGradientLegendVisible=!0,document.body.classList.add("isGradientLegendVisible"))}hideGradientLegend(){this.isGradientLegendVisible=!1,document.body.classList.remove("isGradientLegendVisible")}init(){this.initGradientColors(),this.initMesh(),this.resize(),requestAnimationFrame(this.animate),window.addEventListener("resize",this.resize)}waitForCssVars(){if(this.computedCanvasStyle&&this.computedCanvasStyle.getPropertyValue("--gradient-color-1").indexOf("#")!==-1)this.init(),this.addIsLoadedClass();else{if(this.cssVarRetries+=1,this.cssVarRetries>this.maxCssVarRetries)return this.sectionColors=[16711680,16711680,16711935,65280,255],void this.init();requestAnimationFrame(()=>this.waitForCssVars())}}initGradientColors(){this.sectionColors=["--gradient-color-1","--gradient-color-2","--gradient-color-3","--gradient-color-4"].map(e=>{let n=this.computedCanvasStyle.getPropertyValue(e).trim();return n.length===4&&(n=`#${n.substr(1).split("").map(i=>i+i).join("")}`),n&&`0x${n.substr(1)}`}).filter(Boolean).map(_L)}}const EL={name:"app",data(){return{store:Kt()}},components:{NavView:xP,RouterView:Ry,SearchComponent:wL},setup(){sn(()=>{new TL().initGradient("#gradient-canvas")})},async mounted(){await this.store.init(),j1(Jl,async t=>{if(t){const e=t.uid,n=Ka(os,"users"),s=await sP(Zr(n,e));if(s.exists()){const i={userId:s.data().userId,username:s.data().username,email:s.data().email,photo:s.data().photo,library:s.data().library,basket:s.data().basket};await this.store.userInit(i)}}})}},IL={class:"main-wrapper flex"},CL={class:"section-wrapper w-full lg:w-[80vw] p-4 lg:pt-[40px]"},xL=M("canvas",{id:"gradient-canvas","data-transition-in":""},null,-1);function AL(t,e,n,s,i,r){const o=st("NavView"),a=st("search-component"),l=st("RouterView");return H(),ee("main",IL,[ne(o),M("div",CL,[ne(a),ne(l)]),xL])}const kL=No(EL,[["render",AL]]);const to={__name:"SkeletonLoading",props:{classList:{type:String},times:{type:String}},setup(t){return Qg(e=>({a5b49140:e.height,14324726:e.width,"29bd7e75":e.marginRight,"70f116e4":e.marginLeft,"54a6d357":e.borderRadius})),(e,n)=>(H(!0),ee(Me,null,Nn(Number(t.times),s=>(H(),ee("div",{class:Ge(["skeletonLoading",t.classList]),key:s},null,2))),128))}},RL="/assets/add-395bcc8a.svg",OL="/assets/remove-c3e0f3a2.svg";let Mc;const I0=t=>{Mc&&clearTimeout(Mc),Mc=setTimeout(t,1e3)};const DL={class:"w-full h-[84%]"},PL={class:"gameCover w-full h-full relative z-10"},LL=["src"],ML={class:"flex items-center px-3 py-2"},NL={class:"text-sm invisible whitespace-nowrap w-full text-ellipsis overflow-hidden lg:visible text-white"},FL={class:"flex justify-between items-center text-sm text-gray-200"},$L=M("img",{src:RL,class:""},null,-1),BL=[$L],UL=M("img",{src:OL,class:""},null,-1),VL=[UL],jL={key:2,class:"text-sm text-gray-300"},zL={__name:"GameItem",props:["game","displayPrice"],setup(t){const e=t,n=Kt();var s=Ce(()=>n.inBasket(e.game.id)),i=Ce(()=>n.inLibrary(e.game.id));return(r,o)=>(H(),ee("div",DL,[M("figure",PL,[M("img",{class:"w-full h-full",src:t.game.imageCover},null,8,LL)]),M("div",ML,[M("div",{class:Ge(["game-details w-[110px]",e.displayPrice&&"w-full"])},[M("p",NL,je(t.game.title),1),M("div",FL,[M("p",{class:Ge(e.displayPrice&&"hidden")},[M("span",null,je(t.game.price),1),t.game.discount?(H(),ee("span",{key:0,class:Ge(["ml-2 relative",t.game.discount&&"price font-bold"])}," -"+je(t.game.discount)+"% ",3)):$t("",!0)],2)])],2),pe(s)!==void 0&&t.game.price!=="TBA"?(H(),ee("div",{key:0,class:Ge(["ml-auto",e.displayPrice&&"hidden"])},[!pe(s)&&!pe(i)?(H(),ee("figure",{key:0,class:"w-[40px] list-shadow bg-red-500 rounded-md transition ease-in active:shadow-none",onClick:o[0]||(o[0]=a=>{a.stopPropagation(),pe(I0)(()=>pe(n).addTobasket(e.game))})},BL)):pe(i)?(H(),ee("p",jL,"In Library")):(H(),ee("figure",{key:1,class:"w-[40px] list-shadow bg-red-500 rounded-md transition ease-in active:shadow-none",onClick:o[1]||(o[1]=a=>{a.stopPropagation(),pe(n).removefromBasket(e.game)})},VL))],2)):$t("",!0)])]))}},qL={name:"GameList",props:["gameList","displayPrice"],data(){return{store:Kt()}},components:{SkeletonLoading:to,GameItem:zL},methods:{handleSelectGame(t){this.$router.push({path:`/game/${t.id}`,replace:!0})}}},HL={class:"flex flex-wrap"},GL={key:0,class:"flex flex-wrap"},KL=["onClick"];function WL(t,e,n,s,i,r){const o=st("GameItem"),a=st("SkeletonLoading");return H(),ee("div",HL,[Object.keys(i.store.HomeState).length>0?(H(),ee("div",GL,[(H(!0),ee(Me,null,Nn(this.gameList,l=>(H(),ee("div",{class:"game-item relative list-shadow rounded-md w-[45%] h-[200px] md:w-[30%] md:h-[300px] my-2 mr-[9px] lg:my-[15px] lg:w-[230px] lg:h-[380px]",key:l.id,onClick:()=>r.handleSelectGame(l)},[ne(o,{game:l,displayPrice:n.displayPrice},null,8,["game","displayPrice"])],8,KL))),128))])):(H(),vt(a,{key:1,classList:"rounded-lg w-[150px] h-[200px] md:w-[230px] md:h-[300px] my-2 mx-[5px] lg:my-[15px] lg:mr-[15px] lg:w-[215px] lg:h-[280px]",times:"5"}))])}const sr=No(qL,[["render",WL]]);function Cm(t){return t!==null&&typeof t=="object"&&"constructor"in t&&t.constructor===Object}function qh(t={},e={}){Object.keys(e).forEach(n=>{typeof t[n]>"u"?t[n]=e[n]:Cm(e[n])&&Cm(t[n])&&Object.keys(e[n]).length>0&&qh(t[n],e[n])})}const C0={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function vn(){const t=typeof document<"u"?document:{};return qh(t,C0),t}const YL={document:C0,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(t){return typeof setTimeout>"u"?(t(),null):setTimeout(t,0)},cancelAnimationFrame(t){typeof setTimeout>"u"||clearTimeout(t)}};function Wt(){const t=typeof window<"u"?window:{};return qh(t,YL),t}function QL(t){const e=t;Object.keys(e).forEach(n=>{try{e[n]=null}catch{}try{delete e[n]}catch{}})}function Yu(t,e=0){return setTimeout(t,e)}function no(){return Date.now()}function XL(t){const e=Wt();let n;return e.getComputedStyle&&(n=e.getComputedStyle(t,null)),!n&&t.currentStyle&&(n=t.currentStyle),n||(n=t.style),n}function JL(t,e="x"){const n=Wt();let s,i,r;const o=XL(t);return n.WebKitCSSMatrix?(i=o.transform||o.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(a=>a.replace(",",".")).join(", ")),r=new n.WebKitCSSMatrix(i==="none"?"":i)):(r=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),s=r.toString().split(",")),e==="x"&&(n.WebKitCSSMatrix?i=r.m41:s.length===16?i=parseFloat(s[12]):i=parseFloat(s[4])),e==="y"&&(n.WebKitCSSMatrix?i=r.m42:s.length===16?i=parseFloat(s[13]):i=parseFloat(s[5])),i||0}function na(t){return typeof t=="object"&&t!==null&&t.constructor&&Object.prototype.toString.call(t).slice(8,-1)==="Object"}function ZL(t){return typeof window<"u"&&typeof window.HTMLElement<"u"?t instanceof HTMLElement:t&&(t.nodeType===1||t.nodeType===11)}function Bt(...t){const e=Object(t[0]),n=["__proto__","constructor","prototype"];for(let s=1;s<t.length;s+=1){const i=t[s];if(i!=null&&!ZL(i)){const r=Object.keys(Object(i)).filter(o=>n.indexOf(o)<0);for(let o=0,a=r.length;o<a;o+=1){const l=r[o],c=Object.getOwnPropertyDescriptor(i,l);c!==void 0&&c.enumerable&&(na(e[l])&&na(i[l])?i[l].__swiper__?e[l]=i[l]:Bt(e[l],i[l]):!na(e[l])&&na(i[l])?(e[l]={},i[l].__swiper__?e[l]=i[l]:Bt(e[l],i[l])):e[l]=i[l])}}}return e}function sa(t,e,n){t.style.setProperty(e,n)}function x0({swiper:t,targetPosition:e,side:n}){const s=Wt(),i=-t.translate;let r=null,o;const a=t.params.speed;t.wrapperEl.style.scrollSnapType="none",s.cancelAnimationFrame(t.cssModeFrameID);const l=e>i?"next":"prev",c=(d,h)=>l==="next"&&d>=h||l==="prev"&&d<=h,u=()=>{o=new Date().getTime(),r===null&&(r=o);const d=Math.max(Math.min((o-r)/a,1),0),h=.5-Math.cos(d*Math.PI)/2;let f=i+h*(e-i);if(c(f,e)&&(f=e),t.wrapperEl.scrollTo({[n]:f}),c(f,e)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[n]:f})}),s.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=s.requestAnimationFrame(u)};u()}function Ln(t,e=""){return[...t.children].filter(n=>n.matches(e))}function A0(t,e=[]){const n=document.createElement(t);return n.classList.add(...Array.isArray(e)?e:[e]),n}function eM(t,e){const n=[];for(;t.previousElementSibling;){const s=t.previousElementSibling;e?s.matches(e)&&n.push(s):n.push(s),t=s}return n}function tM(t,e){const n=[];for(;t.nextElementSibling;){const s=t.nextElementSibling;e?s.matches(e)&&n.push(s):n.push(s),t=s}return n}function as(t,e){return Wt().getComputedStyle(t,null).getPropertyValue(e)}function Ts(t){let e=t,n;if(e){for(n=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(n+=1);return n}}function k0(t,e){const n=[];let s=t.parentElement;for(;s;)e?s.matches(e)&&n.push(s):n.push(s),s=s.parentElement;return n}function Qu(t,e,n){const s=Wt();return n?t[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(s.getComputedStyle(t,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(s.getComputedStyle(t,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom")):t.offsetWidth}let Nc;function nM(){const t=Wt(),e=vn();return{smoothScroll:e.documentElement&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in t||t.DocumentTouch&&e instanceof t.DocumentTouch)}}function R0(){return Nc||(Nc=nM()),Nc}let Fc;function sM({userAgent:t}={}){const e=R0(),n=Wt(),s=n.navigator.platform,i=t||n.navigator.userAgent,r={ios:!1,android:!1},o=n.screen.width,a=n.screen.height,l=i.match(/(Android);?[\s\/]+([\d.]+)?/);let c=i.match(/(iPad).*OS\s([\d_]+)/);const u=i.match(/(iPod)(.*OS\s([\d_]+))?/),d=!c&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),h=s==="Win32";let f=s==="MacIntel";const g=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!c&&f&&e.touch&&g.indexOf(`${o}x${a}`)>=0&&(c=i.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),f=!1),l&&!h&&(r.os="android",r.android=!0),(c||d||u)&&(r.os="ios",r.ios=!0),r}function iM(t={}){return Fc||(Fc=sM(t)),Fc}let $c;function rM(){const t=Wt();let e=!1;function n(){const s=t.navigator.userAgent.toLowerCase();return s.indexOf("safari")>=0&&s.indexOf("chrome")<0&&s.indexOf("android")<0}if(n()){const s=String(t.navigator.userAgent);if(s.includes("Version/")){const[i,r]=s.split("Version/")[1].split(" ")[0].split(".").map(o=>Number(o));e=i<16||i===16&&r<2}}return{isSafari:e||n(),needPerspectiveFix:e,isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)}}function oM(){return $c||($c=rM()),$c}function aM({swiper:t,on:e,emit:n}){const s=Wt();let i=null,r=null;const o=()=>{!t||t.destroyed||!t.initialized||(n("beforeResize"),n("resize"))},a=()=>{!t||t.destroyed||!t.initialized||(i=new ResizeObserver(u=>{r=s.requestAnimationFrame(()=>{const{width:d,height:h}=t;let f=d,g=h;u.forEach(({contentBoxSize:y,contentRect:_,target:m})=>{m&&m!==t.el||(f=_?_.width:(y[0]||y).inlineSize,g=_?_.height:(y[0]||y).blockSize)}),(f!==d||g!==h)&&o()})}),i.observe(t.el))},l=()=>{r&&s.cancelAnimationFrame(r),i&&i.unobserve&&t.el&&(i.unobserve(t.el),i=null)},c=()=>{!t||t.destroyed||!t.initialized||n("orientationchange")};e("init",()=>{if(t.params.resizeObserver&&typeof s.ResizeObserver<"u"){a();return}s.addEventListener("resize",o),s.addEventListener("orientationchange",c)}),e("destroy",()=>{l(),s.removeEventListener("resize",o),s.removeEventListener("orientationchange",c)})}function lM({swiper:t,extendParams:e,on:n,emit:s}){const i=[],r=Wt(),o=(c,u={})=>{const d=r.MutationObserver||r.WebkitMutationObserver,h=new d(f=>{if(f.length===1){s("observerUpdate",f[0]);return}const g=function(){s("observerUpdate",f[0])};r.requestAnimationFrame?r.requestAnimationFrame(g):r.setTimeout(g,0)});h.observe(c,{attributes:typeof u.attributes>"u"?!0:u.attributes,childList:typeof u.childList>"u"?!0:u.childList,characterData:typeof u.characterData>"u"?!0:u.characterData}),i.push(h)},a=()=>{if(t.params.observer){if(t.params.observeParents){const c=k0(t.el);for(let u=0;u<c.length;u+=1)o(c[u])}o(t.el,{childList:t.params.observeSlideChildren}),o(t.wrapperEl,{attributes:!1})}},l=()=>{i.forEach(c=>{c.disconnect()}),i.splice(0,i.length)};e({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",a),n("destroy",l)}const cM={on(t,e,n){const s=this;if(!s.eventsListeners||s.destroyed||typeof e!="function")return s;const i=n?"unshift":"push";return t.split(" ").forEach(r=>{s.eventsListeners[r]||(s.eventsListeners[r]=[]),s.eventsListeners[r][i](e)}),s},once(t,e,n){const s=this;if(!s.eventsListeners||s.destroyed||typeof e!="function")return s;function i(...r){s.off(t,i),i.__emitterProxy&&delete i.__emitterProxy,e.apply(s,r)}return i.__emitterProxy=e,s.on(t,i,n)},onAny(t,e){const n=this;if(!n.eventsListeners||n.destroyed||typeof t!="function")return n;const s=e?"unshift":"push";return n.eventsAnyListeners.indexOf(t)<0&&n.eventsAnyListeners[s](t),n},offAny(t){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const n=e.eventsAnyListeners.indexOf(t);return n>=0&&e.eventsAnyListeners.splice(n,1),e},off(t,e){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||t.split(" ").forEach(s=>{typeof e>"u"?n.eventsListeners[s]=[]:n.eventsListeners[s]&&n.eventsListeners[s].forEach((i,r)=>{(i===e||i.__emitterProxy&&i.__emitterProxy===e)&&n.eventsListeners[s].splice(r,1)})}),n},emit(...t){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let n,s,i;return typeof t[0]=="string"||Array.isArray(t[0])?(n=t[0],s=t.slice(1,t.length),i=e):(n=t[0].events,s=t[0].data,i=t[0].context||e),s.unshift(i),(Array.isArray(n)?n:n.split(" ")).forEach(o=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(a=>{a.apply(i,[o,...s])}),e.eventsListeners&&e.eventsListeners[o]&&e.eventsListeners[o].forEach(a=>{a.apply(i,s)})}),e}};function uM(){const t=this;let e,n;const s=t.el;typeof t.params.width<"u"&&t.params.width!==null?e=t.params.width:e=s.clientWidth,typeof t.params.height<"u"&&t.params.height!==null?n=t.params.height:n=s.clientHeight,!(e===0&&t.isHorizontal()||n===0&&t.isVertical())&&(e=e-parseInt(as(s,"padding-left")||0,10)-parseInt(as(s,"padding-right")||0,10),n=n-parseInt(as(s,"padding-top")||0,10)-parseInt(as(s,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(n)&&(n=0),Object.assign(t,{width:e,height:n,size:t.isHorizontal()?e:n}))}function dM(){const t=this;function e(x){return t.isHorizontal()?x:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[x]}function n(x,k){return parseFloat(x.getPropertyValue(e(k))||0)}const s=t.params,{wrapperEl:i,slidesEl:r,size:o,rtlTranslate:a,wrongRTL:l}=t,c=t.virtual&&s.virtual.enabled,u=c?t.virtual.slides.length:t.slides.length,d=Ln(r,`.${t.params.slideClass}, swiper-slide`),h=c?t.virtual.slides.length:d.length;let f=[];const g=[],y=[];let _=s.slidesOffsetBefore;typeof _=="function"&&(_=s.slidesOffsetBefore.call(t));let m=s.slidesOffsetAfter;typeof m=="function"&&(m=s.slidesOffsetAfter.call(t));const p=t.snapGrid.length,v=t.slidesGrid.length;let T=s.spaceBetween,E=-_,I=0,C=0;if(typeof o>"u")return;typeof T=="string"&&T.indexOf("%")>=0&&(T=parseFloat(T.replace("%",""))/100*o),t.virtualSize=-T,d.forEach(x=>{a?x.style.marginLeft="":x.style.marginRight="",x.style.marginBottom="",x.style.marginTop=""}),s.centeredSlides&&s.cssMode&&(sa(i,"--swiper-centered-offset-before",""),sa(i,"--swiper-centered-offset-after",""));const S=s.grid&&s.grid.rows>1&&t.grid;S&&t.grid.initSlides(h);let A;const B=s.slidesPerView==="auto"&&s.breakpoints&&Object.keys(s.breakpoints).filter(x=>typeof s.breakpoints[x].slidesPerView<"u").length>0;for(let x=0;x<h;x+=1){A=0;let k;if(d[x]&&(k=d[x]),S&&t.grid.updateSlide(x,k,h,e),!(d[x]&&as(k,"display")==="none")){if(s.slidesPerView==="auto"){B&&(d[x].style[e("width")]="");const V=getComputedStyle(k),$=k.style.transform,_e=k.style.webkitTransform;if($&&(k.style.transform="none"),_e&&(k.style.webkitTransform="none"),s.roundLengths)A=t.isHorizontal()?Qu(k,"width",!0):Qu(k,"height",!0);else{const Y=n(V,"width"),ge=n(V,"padding-left"),he=n(V,"padding-right"),We=n(V,"margin-left"),Lt=n(V,"margin-right"),xt=V.getPropertyValue("box-sizing");if(xt&&xt==="border-box")A=Y+We+Lt;else{const{clientWidth:ht,offsetWidth:Kn}=k;A=Y+ge+he+We+Lt+(Kn-ht)}}$&&(k.style.transform=$),_e&&(k.style.webkitTransform=_e),s.roundLengths&&(A=Math.floor(A))}else A=(o-(s.slidesPerView-1)*T)/s.slidesPerView,s.roundLengths&&(A=Math.floor(A)),d[x]&&(d[x].style[e("width")]=`${A}px`);d[x]&&(d[x].swiperSlideSize=A),y.push(A),s.centeredSlides?(E=E+A/2+I/2+T,I===0&&x!==0&&(E=E-o/2-T),x===0&&(E=E-o/2-T),Math.abs(E)<1/1e3&&(E=0),s.roundLengths&&(E=Math.floor(E)),C%s.slidesPerGroup===0&&f.push(E),g.push(E)):(s.roundLengths&&(E=Math.floor(E)),(C-Math.min(t.params.slidesPerGroupSkip,C))%t.params.slidesPerGroup===0&&f.push(E),g.push(E),E=E+A+T),t.virtualSize+=A+T,I=A,C+=1}}if(t.virtualSize=Math.max(t.virtualSize,o)+m,a&&l&&(s.effect==="slide"||s.effect==="coverflow")&&(i.style.width=`${t.virtualSize+s.spaceBetween}px`),s.setWrapperSize&&(i.style[e("width")]=`${t.virtualSize+s.spaceBetween}px`),S&&t.grid.updateWrapperSize(A,f,e),!s.centeredSlides){const x=[];for(let k=0;k<f.length;k+=1){let V=f[k];s.roundLengths&&(V=Math.floor(V)),f[k]<=t.virtualSize-o&&x.push(V)}f=x,Math.floor(t.virtualSize-o)-Math.floor(f[f.length-1])>1&&f.push(t.virtualSize-o)}if(c&&s.loop){const x=y[0]+T;if(s.slidesPerGroup>1){const k=Math.ceil((t.virtual.slidesBefore+t.virtual.slidesAfter)/s.slidesPerGroup),V=x*s.slidesPerGroup;for(let $=0;$<k;$+=1)f.push(f[f.length-1]+V)}for(let k=0;k<t.virtual.slidesBefore+t.virtual.slidesAfter;k+=1)s.slidesPerGroup===1&&f.push(f[f.length-1]+x),g.push(g[g.length-1]+x),t.virtualSize+=x}if(f.length===0&&(f=[0]),s.spaceBetween!==0){const x=t.isHorizontal()&&a?"marginLeft":e("marginRight");d.filter((k,V)=>!s.cssMode||s.loop?!0:V!==d.length-1).forEach(k=>{k.style[x]=`${T}px`})}if(s.centeredSlides&&s.centeredSlidesBounds){let x=0;y.forEach(V=>{x+=V+(s.spaceBetween?s.spaceBetween:0)}),x-=s.spaceBetween;const k=x-o;f=f.map(V=>V<0?-_:V>k?k+m:V)}if(s.centerInsufficientSlides){let x=0;if(y.forEach(k=>{x+=k+(s.spaceBetween?s.spaceBetween:0)}),x-=s.spaceBetween,x<o){const k=(o-x)/2;f.forEach((V,$)=>{f[$]=V-k}),g.forEach((V,$)=>{g[$]=V+k})}}if(Object.assign(t,{slides:d,snapGrid:f,slidesGrid:g,slidesSizesGrid:y}),s.centeredSlides&&s.cssMode&&!s.centeredSlidesBounds){sa(i,"--swiper-centered-offset-before",`${-f[0]}px`),sa(i,"--swiper-centered-offset-after",`${t.size/2-y[y.length-1]/2}px`);const x=-t.snapGrid[0],k=-t.slidesGrid[0];t.snapGrid=t.snapGrid.map(V=>V+x),t.slidesGrid=t.slidesGrid.map(V=>V+k)}if(h!==u&&t.emit("slidesLengthChange"),f.length!==p&&(t.params.watchOverflow&&t.checkOverflow(),t.emit("snapGridLengthChange")),g.length!==v&&t.emit("slidesGridLengthChange"),s.watchSlidesProgress&&t.updateSlidesOffset(),!c&&!s.cssMode&&(s.effect==="slide"||s.effect==="fade")){const x=`${s.containerModifierClass}backface-hidden`,k=t.el.classList.contains(x);h<=s.maxBackfaceHiddenSlides?k||t.el.classList.add(x):k&&t.el.classList.remove(x)}}function hM(t){const e=this,n=[],s=e.virtual&&e.params.virtual.enabled;let i=0,r;typeof t=="number"?e.setTransition(t):t===!0&&e.setTransition(e.params.speed);const o=a=>s?e.slides.filter(l=>parseInt(l.getAttribute("data-swiper-slide-index"),10)===a)[0]:e.slides[a];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(a=>{n.push(a)});else for(r=0;r<Math.ceil(e.params.slidesPerView);r+=1){const a=e.activeIndex+r;if(a>e.slides.length&&!s)break;n.push(o(a))}else n.push(o(e.activeIndex));for(r=0;r<n.length;r+=1)if(typeof n[r]<"u"){const a=n[r].offsetHeight;i=a>i?a:i}(i||i===0)&&(e.wrapperEl.style.height=`${i}px`)}function fM(){const t=this,e=t.slides,n=t.isElement?t.isHorizontal()?t.wrapperEl.offsetLeft:t.wrapperEl.offsetTop:0;for(let s=0;s<e.length;s+=1)e[s].swiperSlideOffset=(t.isHorizontal()?e[s].offsetLeft:e[s].offsetTop)-n}function pM(t=this&&this.translate||0){const e=this,n=e.params,{slides:s,rtlTranslate:i,snapGrid:r}=e;if(s.length===0)return;typeof s[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let o=-t;i&&(o=t),s.forEach(a=>{a.classList.remove(n.slideVisibleClass)}),e.visibleSlidesIndexes=[],e.visibleSlides=[];for(let a=0;a<s.length;a+=1){const l=s[a];let c=l.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(c-=s[0].swiperSlideOffset);const u=(o+(n.centeredSlides?e.minTranslate():0)-c)/(l.swiperSlideSize+n.spaceBetween),d=(o-r[0]+(n.centeredSlides?e.minTranslate():0)-c)/(l.swiperSlideSize+n.spaceBetween),h=-(o-c),f=h+e.slidesSizesGrid[a];(h>=0&&h<e.size-1||f>1&&f<=e.size||h<=0&&f>=e.size)&&(e.visibleSlides.push(l),e.visibleSlidesIndexes.push(a),s[a].classList.add(n.slideVisibleClass)),l.progress=i?-u:u,l.originalProgress=i?-d:d}}function mM(t){const e=this;if(typeof t>"u"){const u=e.rtlTranslate?-1:1;t=e&&e.translate&&e.translate*u||0}const n=e.params,s=e.maxTranslate()-e.minTranslate();let{progress:i,isBeginning:r,isEnd:o,progressLoop:a}=e;const l=r,c=o;if(s===0)i=0,r=!0,o=!0;else{i=(t-e.minTranslate())/s;const u=Math.abs(t-e.minTranslate())<1,d=Math.abs(t-e.maxTranslate())<1;r=u||i<=0,o=d||i>=1,u&&(i=0),d&&(i=1)}if(n.loop){const u=Ts(e.slides.filter(_=>_.getAttribute("data-swiper-slide-index")==="0")[0]),d=Ts(e.slides.filter(_=>_.getAttribute("data-swiper-slide-index")*1===e.slides.length-1)[0]),h=e.slidesGrid[u],f=e.slidesGrid[d],g=e.slidesGrid[e.slidesGrid.length-1],y=Math.abs(t);y>=h?a=(y-h)/g:a=(y+g-f)/g,a>1&&(a-=1)}Object.assign(e,{progress:i,progressLoop:a,isBeginning:r,isEnd:o}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&e.updateSlidesProgress(t),r&&!l&&e.emit("reachBeginning toEdge"),o&&!c&&e.emit("reachEnd toEdge"),(l&&!r||c&&!o)&&e.emit("fromEdge"),e.emit("progress",i)}function gM(){const t=this,{slides:e,params:n,slidesEl:s,activeIndex:i}=t,r=t.virtual&&n.virtual.enabled,o=l=>Ln(s,`.${n.slideClass}${l}, swiper-slide${l}`)[0];e.forEach(l=>{l.classList.remove(n.slideActiveClass,n.slideNextClass,n.slidePrevClass)});let a;if(r)if(n.loop){let l=i-t.virtual.slidesBefore;l<0&&(l=t.virtual.slides.length+l),l>=t.virtual.slides.length&&(l-=t.virtual.slides.length),a=o(`[data-swiper-slide-index="${l}"]`)}else a=o(`[data-swiper-slide-index="${i}"]`);else a=e[i];if(a){a.classList.add(n.slideActiveClass);let l=tM(a,`.${n.slideClass}, swiper-slide`)[0];n.loop&&!l&&(l=e[0]),l&&l.classList.add(n.slideNextClass);let c=eM(a,`.${n.slideClass}, swiper-slide`)[0];n.loop&&!c===0&&(c=e[e.length-1]),c&&c.classList.add(n.slidePrevClass)}t.emitSlidesClasses()}function yM(t){const{slidesGrid:e,params:n}=t,s=t.rtlTranslate?t.translate:-t.translate;let i;for(let r=0;r<e.length;r+=1)typeof e[r+1]<"u"?s>=e[r]&&s<e[r+1]-(e[r+1]-e[r])/2?i=r:s>=e[r]&&s<e[r+1]&&(i=r+1):s>=e[r]&&(i=r);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function vM(t){const e=this,n=e.rtlTranslate?e.translate:-e.translate,{snapGrid:s,params:i,activeIndex:r,realIndex:o,snapIndex:a}=e;let l=t,c;const u=h=>{let f=h-e.virtual.slidesBefore;return f<0&&(f=e.virtual.slides.length+f),f>=e.virtual.slides.length&&(f-=e.virtual.slides.length),f};if(typeof l>"u"&&(l=yM(e)),s.indexOf(n)>=0)c=s.indexOf(n);else{const h=Math.min(i.slidesPerGroupSkip,l);c=h+Math.floor((l-h)/i.slidesPerGroup)}if(c>=s.length&&(c=s.length-1),l===r){c!==a&&(e.snapIndex=c,e.emit("snapIndexChange")),e.params.loop&&e.virtual&&e.params.virtual.enabled&&(e.realIndex=u(l));return}let d;e.virtual&&i.virtual.enabled&&i.loop?d=u(l):e.slides[l]?d=parseInt(e.slides[l].getAttribute("data-swiper-slide-index")||l,10):d=l,Object.assign(e,{snapIndex:c,realIndex:d,previousIndex:r,activeIndex:l}),e.emit("activeIndexChange"),e.emit("snapIndexChange"),o!==d&&e.emit("realIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&e.emit("slideChange")}function bM(t){const e=this,n=e.params,s=t.closest(`.${n.slideClass}, swiper-slide`);let i=!1,r;if(s){for(let o=0;o<e.slides.length;o+=1)if(e.slides[o]===s){i=!0,r=o;break}}if(s&&i)e.clickedSlide=s,e.virtual&&e.params.virtual.enabled?e.clickedIndex=parseInt(s.getAttribute("data-swiper-slide-index"),10):e.clickedIndex=r;else{e.clickedSlide=void 0,e.clickedIndex=void 0;return}n.slideToClickedSlide&&e.clickedIndex!==void 0&&e.clickedIndex!==e.activeIndex&&e.slideToClickedSlide()}const wM={updateSize:uM,updateSlides:dM,updateAutoHeight:hM,updateSlidesOffset:fM,updateSlidesProgress:pM,updateProgress:mM,updateSlidesClasses:gM,updateActiveIndex:vM,updateClickedSlide:bM};function _M(t=this.isHorizontal()?"x":"y"){const e=this,{params:n,rtlTranslate:s,translate:i,wrapperEl:r}=e;if(n.virtualTranslate)return s?-i:i;if(n.cssMode)return i;let o=JL(r,t);return s&&(o=-o),o||0}function SM(t,e){const n=this,{rtlTranslate:s,params:i,wrapperEl:r,progress:o}=n;let a=0,l=0;const c=0;n.isHorizontal()?a=s?-t:t:l=t,i.roundLengths&&(a=Math.floor(a),l=Math.floor(l)),i.cssMode?r[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-a:-l:i.virtualTranslate||(r.style.transform=`translate3d(${a}px, ${l}px, ${c}px)`),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?a:l;let u;const d=n.maxTranslate()-n.minTranslate();d===0?u=0:u=(t-n.minTranslate())/d,u!==o&&n.updateProgress(t),n.emit("setTranslate",n.translate,e)}function TM(){return-this.snapGrid[0]}function EM(){return-this.snapGrid[this.snapGrid.length-1]}function IM(t=0,e=this.params.speed,n=!0,s=!0,i){const r=this,{params:o,wrapperEl:a}=r;if(r.animating&&o.preventInteractionOnTransition)return!1;const l=r.minTranslate(),c=r.maxTranslate();let u;if(s&&t>l?u=l:s&&t<c?u=c:u=t,r.updateProgress(u),o.cssMode){const d=r.isHorizontal();if(e===0)a[d?"scrollLeft":"scrollTop"]=-u;else{if(!r.support.smoothScroll)return x0({swiper:r,targetPosition:-u,side:d?"left":"top"}),!0;a.scrollTo({[d?"left":"top"]:-u,behavior:"smooth"})}return!0}return e===0?(r.setTransition(0),r.setTranslate(u),n&&(r.emit("beforeTransitionStart",e,i),r.emit("transitionEnd"))):(r.setTransition(e),r.setTranslate(u),n&&(r.emit("beforeTransitionStart",e,i),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(h){!r||r.destroyed||h.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,n&&r.emit("transitionEnd"))}),r.wrapperEl.addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd))),!0}const CM={getTranslate:_M,setTranslate:SM,minTranslate:TM,maxTranslate:EM,translateTo:IM};function xM(t,e){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${t}ms`),n.emit("setTransition",t,e)}function O0({swiper:t,runCallbacks:e,direction:n,step:s}){const{activeIndex:i,previousIndex:r}=t;let o=n;if(o||(i>r?o="next":i<r?o="prev":o="reset"),t.emit(`transition${s}`),e&&i!==r){if(o==="reset"){t.emit(`slideResetTransition${s}`);return}t.emit(`slideChangeTransition${s}`),o==="next"?t.emit(`slideNextTransition${s}`):t.emit(`slidePrevTransition${s}`)}}function AM(t=!0,e){const n=this,{params:s}=n;s.cssMode||(s.autoHeight&&n.updateAutoHeight(),O0({swiper:n,runCallbacks:t,direction:e,step:"Start"}))}function kM(t=!0,e){const n=this,{params:s}=n;n.animating=!1,!s.cssMode&&(n.setTransition(0),O0({swiper:n,runCallbacks:t,direction:e,step:"End"}))}const RM={setTransition:xM,transitionStart:AM,transitionEnd:kM};function OM(t=0,e=this.params.speed,n=!0,s,i){typeof t=="string"&&(t=parseInt(t,10));const r=this;let o=t;o<0&&(o=0);const{params:a,snapGrid:l,slidesGrid:c,previousIndex:u,activeIndex:d,rtlTranslate:h,wrapperEl:f,enabled:g}=r;if(r.animating&&a.preventInteractionOnTransition||!g&&!s&&!i)return!1;const y=Math.min(r.params.slidesPerGroupSkip,o);let _=y+Math.floor((o-y)/r.params.slidesPerGroup);_>=l.length&&(_=l.length-1);const m=-l[_];if(a.normalizeSlideIndex)for(let v=0;v<c.length;v+=1){const T=-Math.floor(m*100),E=Math.floor(c[v]*100),I=Math.floor(c[v+1]*100);typeof c[v+1]<"u"?T>=E&&T<I-(I-E)/2?o=v:T>=E&&T<I&&(o=v+1):T>=E&&(o=v)}if(r.initialized&&o!==d&&(!r.allowSlideNext&&m<r.translate&&m<r.minTranslate()||!r.allowSlidePrev&&m>r.translate&&m>r.maxTranslate()&&(d||0)!==o))return!1;o!==(u||0)&&n&&r.emit("beforeSlideChangeStart"),r.updateProgress(m);let p;if(o>d?p="next":o<d?p="prev":p="reset",h&&-m===r.translate||!h&&m===r.translate)return r.updateActiveIndex(o),a.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),a.effect!=="slide"&&r.setTranslate(m),p!=="reset"&&(r.transitionStart(n,p),r.transitionEnd(n,p)),!1;if(a.cssMode){const v=r.isHorizontal(),T=h?m:-m;if(e===0){const E=r.virtual&&r.params.virtual.enabled;E&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),E&&!r._cssModeVirtualInitialSet&&r.params.initialSlide>0?(r._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{f[v?"scrollLeft":"scrollTop"]=T})):f[v?"scrollLeft":"scrollTop"]=T,E&&requestAnimationFrame(()=>{r.wrapperEl.style.scrollSnapType="",r._immediateVirtual=!1})}else{if(!r.support.smoothScroll)return x0({swiper:r,targetPosition:T,side:v?"left":"top"}),!0;f.scrollTo({[v?"left":"top"]:T,behavior:"smooth"})}return!0}return r.setTransition(e),r.setTranslate(m),r.updateActiveIndex(o),r.updateSlidesClasses(),r.emit("beforeTransitionStart",e,s),r.transitionStart(n,p),e===0?r.transitionEnd(n,p):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(T){!r||r.destroyed||T.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(n,p))}),r.wrapperEl.addEventListener("transitionend",r.onSlideToWrapperTransitionEnd)),!0}function DM(t=0,e=this.params.speed,n=!0,s){typeof t=="string"&&(t=parseInt(t,10));const i=this;let r=t;return i.params.loop&&(i.virtual&&i.params.virtual.enabled?r=r+i.virtual.slidesBefore:r=Ts(i.slides.filter(o=>o.getAttribute("data-swiper-slide-index")*1===r)[0])),i.slideTo(r,e,n,s)}function PM(t=this.params.speed,e=!0,n){const s=this,{enabled:i,params:r,animating:o}=s;if(!i)return s;let a=r.slidesPerGroup;r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(a=Math.max(s.slidesPerViewDynamic("current",!0),1));const l=s.activeIndex<r.slidesPerGroupSkip?1:a,c=s.virtual&&r.virtual.enabled;if(r.loop){if(o&&!c&&r.loopPreventsSliding)return!1;s.loopFix({direction:"next"}),s._clientLeft=s.wrapperEl.clientLeft}return r.rewind&&s.isEnd?s.slideTo(0,t,e,n):s.slideTo(s.activeIndex+l,t,e,n)}function LM(t=this.params.speed,e=!0,n){const s=this,{params:i,snapGrid:r,slidesGrid:o,rtlTranslate:a,enabled:l,animating:c}=s;if(!l)return s;const u=s.virtual&&i.virtual.enabled;if(i.loop){if(c&&!u&&i.loopPreventsSliding)return!1;s.loopFix({direction:"prev"}),s._clientLeft=s.wrapperEl.clientLeft}const d=a?s.translate:-s.translate;function h(m){return m<0?-Math.floor(Math.abs(m)):Math.floor(m)}const f=h(d),g=r.map(m=>h(m));let y=r[g.indexOf(f)-1];if(typeof y>"u"&&i.cssMode){let m;r.forEach((p,v)=>{f>=p&&(m=v)}),typeof m<"u"&&(y=r[m>0?m-1:m])}let _=0;if(typeof y<"u"&&(_=o.indexOf(y),_<0&&(_=s.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(_=_-s.slidesPerViewDynamic("previous",!0)+1,_=Math.max(_,0))),i.rewind&&s.isBeginning){const m=s.params.virtual&&s.params.virtual.enabled&&s.virtual?s.virtual.slides.length-1:s.slides.length-1;return s.slideTo(m,t,e,n)}return s.slideTo(_,t,e,n)}function MM(t=this.params.speed,e=!0,n){const s=this;return s.slideTo(s.activeIndex,t,e,n)}function NM(t=this.params.speed,e=!0,n,s=.5){const i=this;let r=i.activeIndex;const o=Math.min(i.params.slidesPerGroupSkip,r),a=o+Math.floor((r-o)/i.params.slidesPerGroup),l=i.rtlTranslate?i.translate:-i.translate;if(l>=i.snapGrid[a]){const c=i.snapGrid[a],u=i.snapGrid[a+1];l-c>(u-c)*s&&(r+=i.params.slidesPerGroup)}else{const c=i.snapGrid[a-1],u=i.snapGrid[a];l-c<=(u-c)*s&&(r-=i.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,i.slidesGrid.length-1),i.slideTo(r,t,e,n)}function FM(){const t=this,{params:e,slidesEl:n}=t,s=e.slidesPerView==="auto"?t.slidesPerViewDynamic():e.slidesPerView;let i=t.clickedIndex,r;const o=t.isElement?"swiper-slide":`.${e.slideClass}`;if(e.loop){if(t.animating)return;r=parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?i<t.loopedSlides-s/2||i>t.slides.length-t.loopedSlides+s/2?(t.loopFix(),i=Ts(Ln(n,`${o}[data-swiper-slide-index="${r}"]`)[0]),Yu(()=>{t.slideTo(i)})):t.slideTo(i):i>t.slides.length-s?(t.loopFix(),i=Ts(Ln(n,`${o}[data-swiper-slide-index="${r}"]`)[0]),Yu(()=>{t.slideTo(i)})):t.slideTo(i)}else t.slideTo(i)}const $M={slideTo:OM,slideToLoop:DM,slideNext:PM,slidePrev:LM,slideReset:MM,slideToClosest:NM,slideToClickedSlide:FM};function BM(t){const e=this,{params:n,slidesEl:s}=e;if(!n.loop||e.virtual&&e.params.virtual.enabled)return;Ln(s,`.${n.slideClass}, swiper-slide`).forEach((r,o)=>{r.setAttribute("data-swiper-slide-index",o)}),e.loopFix({slideRealIndex:t,direction:n.centeredSlides?void 0:"next"})}function UM({slideRealIndex:t,slideTo:e=!0,direction:n,setTranslate:s,activeSlideIndex:i,byController:r,byMousewheel:o}={}){const a=this;if(!a.params.loop)return;a.emit("beforeLoopFix");const{slides:l,allowSlidePrev:c,allowSlideNext:u,slidesEl:d,params:h}=a;if(a.allowSlidePrev=!0,a.allowSlideNext=!0,a.virtual&&h.virtual.enabled){e&&(!h.centeredSlides&&a.snapIndex===0?a.slideTo(a.virtual.slides.length,0,!1,!0):h.centeredSlides&&a.snapIndex<h.slidesPerView?a.slideTo(a.virtual.slides.length+a.snapIndex,0,!1,!0):a.snapIndex===a.snapGrid.length-1&&a.slideTo(a.virtual.slidesBefore,0,!1,!0)),a.allowSlidePrev=c,a.allowSlideNext=u,a.emit("loopFix");return}const f=h.slidesPerView==="auto"?a.slidesPerViewDynamic():Math.ceil(parseFloat(h.slidesPerView,10));let g=h.loopedSlides||f;g%h.slidesPerGroup!==0&&(g+=h.slidesPerGroup-g%h.slidesPerGroup),a.loopedSlides=g;const y=[],_=[];let m=a.activeIndex;typeof i>"u"?i=Ts(a.slides.filter(I=>I.classList.contains("swiper-slide-active"))[0]):m=i;const p=n==="next"||!n,v=n==="prev"||!n;let T=0,E=0;if(i<g){T=g-i;for(let I=0;I<g-i;I+=1){const C=I-Math.floor(I/l.length)*l.length;y.push(l.length-C-1)}}else if(i>a.slides.length-g*2){E=i-(a.slides.length-g*2);for(let I=0;I<E;I+=1){const C=I-Math.floor(I/l.length)*l.length;_.push(C)}}if(v&&y.forEach(I=>{d.prepend(a.slides[I])}),p&&_.forEach(I=>{d.append(a.slides[I])}),a.recalcSlides(),h.watchSlidesProgress&&a.updateSlidesOffset(),e){if(y.length>0&&v)if(typeof t>"u"){const I=a.slidesGrid[m],S=a.slidesGrid[m+T]-I;o?a.setTranslate(a.translate-S):(a.slideTo(m+T,0,!1,!0),s&&(a.touches[a.isHorizontal()?"startX":"startY"]+=S))}else s&&a.slideToLoop(t,0,!1,!0);else if(_.length>0&&p)if(typeof t>"u"){const I=a.slidesGrid[m],S=a.slidesGrid[m-E]-I;o?a.setTranslate(a.translate-S):(a.slideTo(m-E,0,!1,!0),s&&(a.touches[a.isHorizontal()?"startX":"startY"]+=S))}else a.slideToLoop(t,0,!1,!0)}if(a.allowSlidePrev=c,a.allowSlideNext=u,a.controller&&a.controller.control&&!r){const I={slideRealIndex:t,slideTo:!1,direction:n,setTranslate:s,activeSlideIndex:i,byController:!0};Array.isArray(a.controller.control)?a.controller.control.forEach(C=>{C.params.loop&&C.loopFix(I)}):a.controller.control instanceof a.constructor&&a.controller.control.params.loop&&a.controller.control.loopFix(I)}a.emit("loopFix")}function VM(){const t=this,{slides:e,params:n,slidesEl:s}=t;if(!n.loop||t.virtual&&t.params.virtual.enabled)return;t.recalcSlides();const i=[];e.forEach(r=>{const o=typeof r.swiperSlideIndex>"u"?r.getAttribute("data-swiper-slide-index")*1:r.swiperSlideIndex;i[o]=r}),e.forEach(r=>{r.removeAttribute("data-swiper-slide-index")}),i.forEach(r=>{s.append(r)}),t.recalcSlides(),t.slideTo(t.realIndex,0)}const jM={loopCreate:BM,loopFix:UM,loopDestroy:VM};function zM(t){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const n=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;n.style.cursor="move",n.style.cursor=t?"grabbing":"grab"}function qM(){const t=this;t.params.watchOverflow&&t.isLocked||t.params.cssMode||(t[t.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="")}const HM={setGrabCursor:zM,unsetGrabCursor:qM};function GM(t,e=this){function n(s){if(!s||s===vn()||s===Wt())return null;s.assignedSlot&&(s=s.assignedSlot);const i=s.closest(t);return!i&&!s.getRootNode?null:i||n(s.getRootNode().host)}return n(e)}function KM(t){const e=this,n=vn(),s=Wt(),i=e.touchEventsData;i.evCache.push(t);const{params:r,touches:o,enabled:a}=e;if(!a||!r.simulateTouch&&t.pointerType==="mouse"||e.animating&&r.preventInteractionOnTransition)return;!e.animating&&r.cssMode&&r.loop&&e.loopFix();let l=t;l.originalEvent&&(l=l.originalEvent);let c=l.target;if(r.touchEventsTarget==="wrapper"&&!e.wrapperEl.contains(c)||"which"in l&&l.which===3||"button"in l&&l.button>0||i.isTouched&&i.isMoved)return;const u=!!r.noSwipingClass&&r.noSwipingClass!=="",d=t.composedPath?t.composedPath():t.path;u&&l.target&&l.target.shadowRoot&&d&&(c=d[0]);const h=r.noSwipingSelector?r.noSwipingSelector:`.${r.noSwipingClass}`,f=!!(l.target&&l.target.shadowRoot);if(r.noSwiping&&(f?GM(h,c):c.closest(h))){e.allowClick=!0;return}if(r.swipeHandler&&!c.closest(r.swipeHandler))return;o.currentX=l.pageX,o.currentY=l.pageY;const g=o.currentX,y=o.currentY,_=r.edgeSwipeDetection||r.iOSEdgeSwipeDetection,m=r.edgeSwipeThreshold||r.iOSEdgeSwipeThreshold;if(_&&(g<=m||g>=s.innerWidth-m))if(_==="prevent")t.preventDefault();else return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=g,o.startY=y,i.touchStartTime=no(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,r.threshold>0&&(i.allowThresholdMove=!1);let p=!0;c.matches(i.focusableElements)&&(p=!1,c.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==c&&n.activeElement.blur();const v=p&&e.allowTouchMove&&r.touchStartPreventDefault;(r.touchStartForcePreventDefault||v)&&!c.isContentEditable&&l.preventDefault(),e.params.freeMode&&e.params.freeMode.enabled&&e.freeMode&&e.animating&&!r.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",l)}function WM(t){const e=vn(),n=this,s=n.touchEventsData,{params:i,touches:r,rtlTranslate:o,enabled:a}=n;if(!a||!i.simulateTouch&&t.pointerType==="mouse")return;let l=t;if(l.originalEvent&&(l=l.originalEvent),!s.isTouched){s.startMoving&&s.isScrolling&&n.emit("touchMoveOpposite",l);return}const c=s.evCache.findIndex(I=>I.pointerId===l.pointerId);c>=0&&(s.evCache[c]=l);const u=s.evCache.length>1?s.evCache[0]:l,d=u.pageX,h=u.pageY;if(l.preventedByNestedSwiper){r.startX=d,r.startY=h;return}if(!n.allowTouchMove){l.target.matches(s.focusableElements)||(n.allowClick=!1),s.isTouched&&(Object.assign(r,{startX:d,startY:h,prevX:n.touches.currentX,prevY:n.touches.currentY,currentX:d,currentY:h}),s.touchStartTime=no());return}if(i.touchReleaseOnEdges&&!i.loop){if(n.isVertical()){if(h<r.startY&&n.translate<=n.maxTranslate()||h>r.startY&&n.translate>=n.minTranslate()){s.isTouched=!1,s.isMoved=!1;return}}else if(d<r.startX&&n.translate<=n.maxTranslate()||d>r.startX&&n.translate>=n.minTranslate())return}if(e.activeElement&&l.target===e.activeElement&&l.target.matches(s.focusableElements)){s.isMoved=!0,n.allowClick=!1;return}if(s.allowTouchCallbacks&&n.emit("touchMove",l),l.targetTouches&&l.targetTouches.length>1)return;r.currentX=d,r.currentY=h;const f=r.currentX-r.startX,g=r.currentY-r.startY;if(n.params.threshold&&Math.sqrt(f**2+g**2)<n.params.threshold)return;if(typeof s.isScrolling>"u"){let I;n.isHorizontal()&&r.currentY===r.startY||n.isVertical()&&r.currentX===r.startX?s.isScrolling=!1:f*f+g*g>=25&&(I=Math.atan2(Math.abs(g),Math.abs(f))*180/Math.PI,s.isScrolling=n.isHorizontal()?I>i.touchAngle:90-I>i.touchAngle)}if(s.isScrolling&&n.emit("touchMoveOpposite",l),typeof s.startMoving>"u"&&(r.currentX!==r.startX||r.currentY!==r.startY)&&(s.startMoving=!0),s.isScrolling||n.zoom&&n.params.zoom&&n.params.zoom.enabled&&s.evCache.length>1){s.isTouched=!1;return}if(!s.startMoving)return;n.allowClick=!1,!i.cssMode&&l.cancelable&&l.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&l.stopPropagation();let y=n.isHorizontal()?f:g,_=n.isHorizontal()?r.currentX-r.previousX:r.currentY-r.previousY;i.oneWayMovement&&(y=Math.abs(y)*(o?1:-1),_=Math.abs(_)*(o?1:-1)),r.diff=y,y*=i.touchRatio,o&&(y=-y,_=-_);const m=n.touchesDirection;n.swipeDirection=y>0?"prev":"next",n.touchesDirection=_>0?"prev":"next";const p=n.params.loop&&!i.cssMode;if(!s.isMoved){if(p&&n.loopFix({direction:n.swipeDirection}),s.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const I=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});n.wrapperEl.dispatchEvent(I)}s.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",l)}let v;s.isMoved&&m!==n.touchesDirection&&p&&Math.abs(y)>=1&&(n.loopFix({direction:n.swipeDirection,setTranslate:!0}),v=!0),n.emit("sliderMove",l),s.isMoved=!0,s.currentTranslate=y+s.startTranslate;let T=!0,E=i.resistanceRatio;if(i.touchReleaseOnEdges&&(E=0),y>0?(p&&!v&&s.currentTranslate>(i.centeredSlides?n.minTranslate()-n.size/2:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),s.currentTranslate>n.minTranslate()&&(T=!1,i.resistance&&(s.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+s.startTranslate+y)**E))):y<0&&(p&&!v&&s.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.size/2:n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),s.currentTranslate<n.maxTranslate()&&(T=!1,i.resistance&&(s.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-s.startTranslate-y)**E))),T&&(l.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&s.currentTranslate<s.startTranslate&&(s.currentTranslate=s.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&s.currentTranslate>s.startTranslate&&(s.currentTranslate=s.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(s.currentTranslate=s.startTranslate),i.threshold>0)if(Math.abs(y)>i.threshold||s.allowThresholdMove){if(!s.allowThresholdMove){s.allowThresholdMove=!0,r.startX=r.currentX,r.startY=r.currentY,s.currentTranslate=s.startTranslate,r.diff=n.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY;return}}else{s.currentTranslate=s.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),n.params.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(s.currentTranslate),n.setTranslate(s.currentTranslate))}function YM(t){const e=this,n=e.touchEventsData,s=n.evCache.findIndex(v=>v.pointerId===t.pointerId);if(s>=0&&n.evCache.splice(s,1),["pointercancel","pointerout","pointerleave"].includes(t.type))return;const{params:i,touches:r,rtlTranslate:o,slidesGrid:a,enabled:l}=e;if(!l||!i.simulateTouch&&t.pointerType==="mouse")return;let c=t;if(c.originalEvent&&(c=c.originalEvent),n.allowTouchCallbacks&&e.emit("touchEnd",c),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&i.grabCursor&&e.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}i.grabCursor&&n.isMoved&&n.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const u=no(),d=u-n.touchStartTime;if(e.allowClick){const v=c.path||c.composedPath&&c.composedPath();e.updateClickedSlide(v&&v[0]||c.target),e.emit("tap click",c),d<300&&u-n.lastClickTime<300&&e.emit("doubleTap doubleClick",c)}if(n.lastClickTime=no(),Yu(()=>{e.destroyed||(e.allowClick=!0)}),!n.isTouched||!n.isMoved||!e.swipeDirection||r.diff===0||n.currentTranslate===n.startTranslate){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let h;if(i.followFinger?h=o?e.translate:-e.translate:h=-n.currentTranslate,i.cssMode)return;if(e.params.freeMode&&i.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:h});return}let f=0,g=e.slidesSizesGrid[0];for(let v=0;v<a.length;v+=v<i.slidesPerGroupSkip?1:i.slidesPerGroup){const T=v<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;typeof a[v+T]<"u"?h>=a[v]&&h<a[v+T]&&(f=v,g=a[v+T]-a[v]):h>=a[v]&&(f=v,g=a[a.length-1]-a[a.length-2])}let y=null,_=null;i.rewind&&(e.isBeginning?_=e.params.virtual&&e.params.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(y=0));const m=(h-a[f])/g,p=f<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;if(d>i.longSwipesMs){if(!i.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(m>=i.longSwipesRatio?e.slideTo(i.rewind&&e.isEnd?y:f+p):e.slideTo(f)),e.swipeDirection==="prev"&&(m>1-i.longSwipesRatio?e.slideTo(f+p):_!==null&&m<0&&Math.abs(m)>i.longSwipesRatio?e.slideTo(_):e.slideTo(f))}else{if(!i.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(c.target===e.navigation.nextEl||c.target===e.navigation.prevEl)?c.target===e.navigation.nextEl?e.slideTo(f+p):e.slideTo(f):(e.swipeDirection==="next"&&e.slideTo(y!==null?y:f+p),e.swipeDirection==="prev"&&e.slideTo(_!==null?_:f))}}let xm;function Am(){const t=this,{params:e,el:n}=t;if(n&&n.offsetWidth===0)return;e.breakpoints&&t.setBreakpoint();const{allowSlideNext:s,allowSlidePrev:i,snapGrid:r}=t,o=t.virtual&&t.params.virtual.enabled;t.allowSlideNext=!0,t.allowSlidePrev=!0,t.updateSize(),t.updateSlides(),t.updateSlidesClasses();const a=o&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&t.isEnd&&!t.isBeginning&&!t.params.centeredSlides&&!a?t.slideTo(t.slides.length-1,0,!1,!0):t.params.loop&&!o?t.slideToLoop(t.realIndex,0,!1,!0):t.slideTo(t.activeIndex,0,!1,!0),t.autoplay&&t.autoplay.running&&t.autoplay.paused&&(clearTimeout(xm),xm=setTimeout(()=>{t.autoplay.resume()},500)),t.allowSlidePrev=i,t.allowSlideNext=s,t.params.watchOverflow&&r!==t.snapGrid&&t.checkOverflow()}function QM(t){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&t.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(t.stopPropagation(),t.stopImmediatePropagation())))}function XM(){const t=this,{wrapperEl:e,rtlTranslate:n,enabled:s}=t;if(!s)return;t.previousTranslate=t.translate,t.isHorizontal()?t.translate=-e.scrollLeft:t.translate=-e.scrollTop,t.translate===0&&(t.translate=0),t.updateActiveIndex(),t.updateSlidesClasses();let i;const r=t.maxTranslate()-t.minTranslate();r===0?i=0:i=(t.translate-t.minTranslate())/r,i!==t.progress&&t.updateProgress(n?-t.translate:t.translate),t.emit("setTranslate",t.translate,!1)}const pa=(t,e)=>{if(!t||t.destroyed||!t.params)return;const n=()=>t.isElement?"swiper-slide":`.${t.params.slideClass}`,s=e.closest(n());if(s){const i=s.querySelector(`.${t.params.lazyPreloaderClass}`);i&&i.remove()}};function JM(t){const e=this;pa(e,t.target),e.update()}let km=!1;function ZM(){}const D0=(t,e)=>{const n=vn(),{params:s,el:i,wrapperEl:r,device:o}=t,a=!!s.nested,l=e==="on"?"addEventListener":"removeEventListener",c=e;i[l]("pointerdown",t.onTouchStart,{passive:!1}),n[l]("pointermove",t.onTouchMove,{passive:!1,capture:a}),n[l]("pointerup",t.onTouchEnd,{passive:!0}),n[l]("pointercancel",t.onTouchEnd,{passive:!0}),n[l]("pointerout",t.onTouchEnd,{passive:!0}),n[l]("pointerleave",t.onTouchEnd,{passive:!0}),(s.preventClicks||s.preventClicksPropagation)&&i[l]("click",t.onClick,!0),s.cssMode&&r[l]("scroll",t.onScroll),s.updateOnWindowResize?t[c](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",Am,!0):t[c]("observerUpdate",Am,!0),i[l]("load",t.onLoad,{capture:!0})};function eN(){const t=this,e=vn(),{params:n}=t;t.onTouchStart=KM.bind(t),t.onTouchMove=WM.bind(t),t.onTouchEnd=YM.bind(t),n.cssMode&&(t.onScroll=XM.bind(t)),t.onClick=QM.bind(t),t.onLoad=JM.bind(t),km||(e.addEventListener("touchstart",ZM),km=!0),D0(t,"on")}function tN(){D0(this,"off")}const nN={attachEvents:eN,detachEvents:tN},Rm=(t,e)=>t.grid&&e.grid&&e.grid.rows>1;function sN(){const t=this,{realIndex:e,initialized:n,params:s,el:i}=t,r=s.breakpoints;if(!r||r&&Object.keys(r).length===0)return;const o=t.getBreakpoint(r,t.params.breakpointsBase,t.el);if(!o||t.currentBreakpoint===o)return;const l=(o in r?r[o]:void 0)||t.originalParams,c=Rm(t,s),u=Rm(t,l),d=s.enabled;c&&!u?(i.classList.remove(`${s.containerModifierClass}grid`,`${s.containerModifierClass}grid-column`),t.emitContainerClasses()):!c&&u&&(i.classList.add(`${s.containerModifierClass}grid`),(l.grid.fill&&l.grid.fill==="column"||!l.grid.fill&&s.grid.fill==="column")&&i.classList.add(`${s.containerModifierClass}grid-column`),t.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach(y=>{const _=s[y]&&s[y].enabled,m=l[y]&&l[y].enabled;_&&!m&&t[y].disable(),!_&&m&&t[y].enable()});const h=l.direction&&l.direction!==s.direction,f=s.loop&&(l.slidesPerView!==s.slidesPerView||h);h&&n&&t.changeDirection(),Bt(t.params,l);const g=t.params.enabled;Object.assign(t,{allowTouchMove:t.params.allowTouchMove,allowSlideNext:t.params.allowSlideNext,allowSlidePrev:t.params.allowSlidePrev}),d&&!g?t.disable():!d&&g&&t.enable(),t.currentBreakpoint=o,t.emit("_beforeBreakpoint",l),f&&n&&(t.loopDestroy(),t.loopCreate(e),t.updateSlides()),t.emit("breakpoint",l)}function iN(t,e="window",n){if(!t||e==="container"&&!n)return;let s=!1;const i=Wt(),r=e==="window"?i.innerHeight:n.clientHeight,o=Object.keys(t).map(a=>{if(typeof a=="string"&&a.indexOf("@")===0){const l=parseFloat(a.substr(1));return{value:r*l,point:a}}return{value:a,point:a}});o.sort((a,l)=>parseInt(a.value,10)-parseInt(l.value,10));for(let a=0;a<o.length;a+=1){const{point:l,value:c}=o[a];e==="window"?i.matchMedia(`(min-width: ${c}px)`).matches&&(s=l):c<=n.clientWidth&&(s=l)}return s||"max"}const rN={setBreakpoint:sN,getBreakpoint:iN};function oN(t,e){const n=[];return t.forEach(s=>{typeof s=="object"?Object.keys(s).forEach(i=>{s[i]&&n.push(e+i)}):typeof s=="string"&&n.push(e+s)}),n}function aN(){const t=this,{classNames:e,params:n,rtl:s,el:i,device:r}=t,o=oN(["initialized",n.direction,{"free-mode":t.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:s},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:r.android},{ios:r.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);e.push(...o),i.classList.add(...e),t.emitContainerClasses()}function lN(){const t=this,{el:e,classNames:n}=t;e.classList.remove(...n),t.emitContainerClasses()}const cN={addClasses:aN,removeClasses:lN};function uN(){const t=this,{isLocked:e,params:n}=t,{slidesOffsetBefore:s}=n;if(s){const i=t.slides.length-1,r=t.slidesGrid[i]+t.slidesSizesGrid[i]+s*2;t.isLocked=t.size>r}else t.isLocked=t.snapGrid.length===1;n.allowSlideNext===!0&&(t.allowSlideNext=!t.isLocked),n.allowSlidePrev===!0&&(t.allowSlidePrev=!t.isLocked),e&&e!==t.isLocked&&(t.isEnd=!1),e!==t.isLocked&&t.emit(t.isLocked?"lock":"unlock")}const dN={checkOverflow:uN},Om={init:!0,direction:"horizontal",oneWayMovement:!1,touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopedSlides:null,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",runCallbacksOnInit:!0,_emitClasses:!1};function hN(t,e){return function(s={}){const i=Object.keys(s)[0],r=s[i];if(typeof r!="object"||r===null){Bt(e,s);return}if(["navigation","pagination","scrollbar"].indexOf(i)>=0&&t[i]===!0&&(t[i]={auto:!0}),!(i in t&&"enabled"in r)){Bt(e,s);return}t[i]===!0&&(t[i]={enabled:!0}),typeof t[i]=="object"&&!("enabled"in t[i])&&(t[i].enabled=!0),t[i]||(t[i]={enabled:!1}),Bt(e,s)}}const Bc={eventsEmitter:cM,update:wM,translate:CM,transition:RM,slide:$M,loop:jM,grabCursor:HM,events:nN,breakpoints:rN,checkOverflow:dN,classes:cN},Uc={};let so=class En{constructor(...e){let n,s;e.length===1&&e[0].constructor&&Object.prototype.toString.call(e[0]).slice(8,-1)==="Object"?s=e[0]:[n,s]=e,s||(s={}),s=Bt({},s),n&&!s.el&&(s.el=n);const i=vn();if(s.el&&typeof s.el=="string"&&i.querySelectorAll(s.el).length>1){const l=[];return i.querySelectorAll(s.el).forEach(c=>{const u=Bt({},s,{el:c});l.push(new En(u))}),l}const r=this;r.__swiper__=!0,r.support=R0(),r.device=iM({userAgent:s.userAgent}),r.browser=oM(),r.eventsListeners={},r.eventsAnyListeners=[],r.modules=[...r.__modules__],s.modules&&Array.isArray(s.modules)&&r.modules.push(...s.modules);const o={};r.modules.forEach(l=>{l({params:s,swiper:r,extendParams:hN(s,o),on:r.on.bind(r),once:r.once.bind(r),off:r.off.bind(r),emit:r.emit.bind(r)})});const a=Bt({},Om,o);return r.params=Bt({},a,Uc,s),r.originalParams=Bt({},r.params),r.passedParams=Bt({},s),r.params&&r.params.on&&Object.keys(r.params.on).forEach(l=>{r.on(l,r.params.on[l])}),r.params&&r.params.onAny&&r.onAny(r.params.onAny),Object.assign(r,{enabled:r.params.enabled,el:n,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return r.params.direction==="horizontal"},isVertical(){return r.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:r.params.focusableElements,lastClickTime:no(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,evCache:[]},allowClick:!0,allowTouchMove:r.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),r.emit("_swiper"),r.params.init&&r.init(),r}recalcSlides(){const e=this,{slidesEl:n,params:s}=e;e.slides=Ln(n,`.${s.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,n){const s=this;e=Math.min(Math.max(e,0),1);const i=s.minTranslate(),o=(s.maxTranslate()-i)*e+i;s.translateTo(o,typeof n>"u"?0:n),s.updateActiveIndex(),s.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const n=e.el.className.split(" ").filter(s=>s.indexOf("swiper")===0||s.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",n.join(" "))}getSlideClasses(e){const n=this;return n.destroyed?"":e.className.split(" ").filter(s=>s.indexOf("swiper-slide")===0||s.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const n=[];e.slides.forEach(s=>{const i=e.getSlideClasses(s);n.push({slideEl:s,classNames:i}),e.emit("_slideClass",s,i)}),e.emit("_slideClasses",n)}slidesPerViewDynamic(e="current",n=!1){const s=this,{params:i,slides:r,slidesGrid:o,slidesSizesGrid:a,size:l,activeIndex:c}=s;let u=1;if(i.centeredSlides){let d=r[c].swiperSlideSize,h;for(let f=c+1;f<r.length;f+=1)r[f]&&!h&&(d+=r[f].swiperSlideSize,u+=1,d>l&&(h=!0));for(let f=c-1;f>=0;f-=1)r[f]&&!h&&(d+=r[f].swiperSlideSize,u+=1,d>l&&(h=!0))}else if(e==="current")for(let d=c+1;d<r.length;d+=1)(n?o[d]+a[d]-o[c]<l:o[d]-o[c]<l)&&(u+=1);else for(let d=c-1;d>=0;d-=1)o[c]-o[d]<l&&(u+=1);return u}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:n,params:s}=e;s.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&pa(e,o)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function i(){const o=e.rtlTranslate?e.translate*-1:e.translate,a=Math.min(Math.max(o,e.maxTranslate()),e.minTranslate());e.setTranslate(a),e.updateActiveIndex(),e.updateSlidesClasses()}let r;e.params.freeMode&&e.params.freeMode.enabled?(i(),e.params.autoHeight&&e.updateAutoHeight()):((e.params.slidesPerView==="auto"||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?r=e.slideTo(e.slides.length-1,0,!1,!0):r=e.slideTo(e.activeIndex,0,!1,!0),r||i()),s.watchOverflow&&n!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,n=!0){const s=this,i=s.params.direction;return e||(e=i==="horizontal"?"vertical":"horizontal"),e===i||e!=="horizontal"&&e!=="vertical"||(s.el.classList.remove(`${s.params.containerModifierClass}${i}`),s.el.classList.add(`${s.params.containerModifierClass}${e}`),s.emitContainerClasses(),s.params.direction=e,s.slides.forEach(r=>{e==="vertical"?r.style.width="":r.style.height=""}),s.emit("changeDirection"),n&&s.update()),s}changeLanguageDirection(e){const n=this;n.rtl&&e==="rtl"||!n.rtl&&e==="ltr"||(n.rtl=e==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(e){const n=this;if(n.mounted)return!0;let s=e||n.params.el;if(typeof s=="string"&&(s=document.querySelector(s)),!s)return!1;s.swiper=n,s.shadowEl&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=(()=>s&&s.shadowRoot&&s.shadowRoot.querySelector?s.shadowRoot.querySelector(i()):Ln(s,i())[0])();return!o&&n.params.createElements&&(o=A0("div",n.params.wrapperClass),s.append(o),Ln(s,`.${n.params.slideClass}`).forEach(a=>{o.append(a)})),Object.assign(n,{el:s,wrapperEl:o,slidesEl:n.isElement?s:o,mounted:!0,rtl:s.dir.toLowerCase()==="rtl"||as(s,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(s.dir.toLowerCase()==="rtl"||as(s,"direction")==="rtl"),wrongRTL:as(o,"display")==="-webkit-box"}),!0}init(e){const n=this;return n.initialized||n.mount(e)===!1||(n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(),n.attachEvents(),[...n.el.querySelectorAll('[loading="lazy"]')].forEach(i=>{i.complete?pa(n,i):i.addEventListener("load",r=>{pa(n,r.target)})}),n.initialized=!0,n.emit("init"),n.emit("afterInit")),n}destroy(e=!0,n=!0){const s=this,{params:i,el:r,wrapperEl:o,slides:a}=s;return typeof s.params>"u"||s.destroyed||(s.emit("beforeDestroy"),s.initialized=!1,s.detachEvents(),i.loop&&s.loopDestroy(),n&&(s.removeClasses(),r.removeAttribute("style"),o.removeAttribute("style"),a&&a.length&&a.forEach(l=>{l.classList.remove(i.slideVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),s.emit("destroy"),Object.keys(s.eventsListeners).forEach(l=>{s.off(l)}),e!==!1&&(s.el.swiper=null,QL(s)),s.destroyed=!0),null}static extendDefaults(e){Bt(Uc,e)}static get extendedDefaults(){return Uc}static get defaults(){return Om}static installModule(e){En.prototype.__modules__||(En.prototype.__modules__=[]);const n=En.prototype.__modules__;typeof e=="function"&&n.indexOf(e)<0&&n.push(e)}static use(e){return Array.isArray(e)?(e.forEach(n=>En.installModule(n)),En):(En.installModule(e),En)}};Object.keys(Bc).forEach(t=>{Object.keys(Bc[t]).forEach(e=>{so.prototype[e]=Bc[t][e]})});so.use([aM,lM]);function fN(t,e,n,s){return t.params.createElements&&Object.keys(s).forEach(i=>{if(!n[i]&&n.auto===!0){let r=Ln(t.el,`.${s[i]}`)[0];r||(r=A0("div",s[i]),r.className=s[i],t.el.append(r)),n[i]=r,e[i]=r}}),n}function cr(t=""){return`.${t.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}function pN({swiper:t,extendParams:e,on:n,emit:s}){const i="swiper-pagination";e({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:m=>m,formatFractionTotal:m=>m,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`,paginationDisabledClass:`${i}-disabled`}}),t.pagination={el:null,bullets:[]};let r,o=0;const a=m=>(Array.isArray(m)||(m=[m].filter(p=>!!p)),m);function l(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&t.pagination.el.length===0}function c(m,p){const{bulletActiveClass:v}=t.params.pagination;m&&(m=m[`${p==="prev"?"previous":"next"}ElementSibling`],m&&(m.classList.add(`${v}-${p}`),m=m[`${p==="prev"?"previous":"next"}ElementSibling`],m&&m.classList.add(`${v}-${p}-${p}`)))}function u(m){const p=m.target.closest(cr(t.params.pagination.bulletClass));if(!p)return;m.preventDefault();const v=Ts(p)*t.params.slidesPerGroup;t.params.loop?t.slideToLoop(v):t.slideTo(v)}function d(){const m=t.rtl,p=t.params.pagination;if(l())return;let v=t.pagination.el;v=a(v);let T;const E=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,I=t.params.loop?Math.ceil(E/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?T=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex:typeof t.snapIndex<"u"?T=t.snapIndex:T=t.activeIndex||0,p.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){const C=t.pagination.bullets;let S,A,B;if(p.dynamicBullets&&(r=Qu(C[0],t.isHorizontal()?"width":"height",!0),v.forEach(x=>{x.style[t.isHorizontal()?"width":"height"]=`${r*(p.dynamicMainBullets+4)}px`}),p.dynamicMainBullets>1&&t.previousIndex!==void 0&&(o+=T-(t.previousIndex||0),o>p.dynamicMainBullets-1?o=p.dynamicMainBullets-1:o<0&&(o=0)),S=Math.max(T-o,0),A=S+(Math.min(C.length,p.dynamicMainBullets)-1),B=(A+S)/2),C.forEach(x=>{x.classList.remove(...["","-next","-next-next","-prev","-prev-prev","-main"].map(k=>`${p.bulletActiveClass}${k}`))}),v.length>1)C.forEach(x=>{const k=Ts(x);k===T&&x.classList.add(p.bulletActiveClass),p.dynamicBullets&&(k>=S&&k<=A&&x.classList.add(`${p.bulletActiveClass}-main`),k===S&&c(x,"prev"),k===A&&c(x,"next"))});else{const x=C[T];if(x&&x.classList.add(p.bulletActiveClass),p.dynamicBullets){const k=C[S],V=C[A];for(let $=S;$<=A;$+=1)C[$].classList.add(`${p.bulletActiveClass}-main`);c(k,"prev"),c(V,"next")}}if(p.dynamicBullets){const x=Math.min(C.length,p.dynamicMainBullets+4),k=(r*x-r)/2-B*r,V=m?"right":"left";C.forEach($=>{$.style[t.isHorizontal()?V:"top"]=`${k}px`})}}v.forEach((C,S)=>{if(p.type==="fraction"&&(C.querySelectorAll(cr(p.currentClass)).forEach(A=>{A.textContent=p.formatFractionCurrent(T+1)}),C.querySelectorAll(cr(p.totalClass)).forEach(A=>{A.textContent=p.formatFractionTotal(I)})),p.type==="progressbar"){let A;p.progressbarOpposite?A=t.isHorizontal()?"vertical":"horizontal":A=t.isHorizontal()?"horizontal":"vertical";const B=(T+1)/I;let x=1,k=1;A==="horizontal"?x=B:k=B,C.querySelectorAll(cr(p.progressbarFillClass)).forEach(V=>{V.style.transform=`translate3d(0,0,0) scaleX(${x}) scaleY(${k})`,V.style.transitionDuration=`${t.params.speed}ms`})}p.type==="custom"&&p.renderCustom?(C.innerHTML=p.renderCustom(t,T+1,I),S===0&&s("paginationRender",C)):(S===0&&s("paginationRender",C),s("paginationUpdate",C)),t.params.watchOverflow&&t.enabled&&C.classList[t.isLocked?"add":"remove"](p.lockClass)})}function h(){const m=t.params.pagination;if(l())return;const p=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length;let v=t.pagination.el;v=a(v);let T="";if(m.type==="bullets"){let E=t.params.loop?Math.ceil(p/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&E>p&&(E=p);for(let I=0;I<E;I+=1)m.renderBullet?T+=m.renderBullet.call(t,I,m.bulletClass):T+=`<${m.bulletElement} class="${m.bulletClass}"></${m.bulletElement}>`}m.type==="fraction"&&(m.renderFraction?T=m.renderFraction.call(t,m.currentClass,m.totalClass):T=`<span class="${m.currentClass}"></span> / <span class="${m.totalClass}"></span>`),m.type==="progressbar"&&(m.renderProgressbar?T=m.renderProgressbar.call(t,m.progressbarFillClass):T=`<span class="${m.progressbarFillClass}"></span>`),v.forEach(E=>{m.type!=="custom"&&(E.innerHTML=T||""),m.type==="bullets"&&(t.pagination.bullets=[...E.querySelectorAll(cr(m.bulletClass))])}),m.type!=="custom"&&s("paginationRender",v[0])}function f(){t.params.pagination=fN(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const m=t.params.pagination;if(!m.el)return;let p;typeof m.el=="string"&&t.isElement&&(p=t.el.shadowRoot.querySelector(m.el)),!p&&typeof m.el=="string"&&(p=[...document.querySelectorAll(m.el)]),p||(p=m.el),!(!p||p.length===0)&&(t.params.uniqueNavElements&&typeof m.el=="string"&&Array.isArray(p)&&p.length>1&&(p=[...t.el.querySelectorAll(m.el)],p.length>1&&(p=p.filter(v=>k0(v,".swiper")[0]===t.el)[0])),Array.isArray(p)&&p.length===1&&(p=p[0]),Object.assign(t.pagination,{el:p}),p=a(p),p.forEach(v=>{m.type==="bullets"&&m.clickable&&v.classList.add(m.clickableClass),v.classList.add(m.modifierClass+m.type),v.classList.add(t.isHorizontal()?m.horizontalClass:m.verticalClass),m.type==="bullets"&&m.dynamicBullets&&(v.classList.add(`${m.modifierClass}${m.type}-dynamic`),o=0,m.dynamicMainBullets<1&&(m.dynamicMainBullets=1)),m.type==="progressbar"&&m.progressbarOpposite&&v.classList.add(m.progressbarOppositeClass),m.clickable&&v.addEventListener("click",u),t.enabled||v.classList.add(m.lockClass)}))}function g(){const m=t.params.pagination;if(l())return;let p=t.pagination.el;p&&(p=a(p),p.forEach(v=>{v.classList.remove(m.hiddenClass),v.classList.remove(m.modifierClass+m.type),v.classList.remove(t.isHorizontal()?m.horizontalClass:m.verticalClass),m.clickable&&v.removeEventListener("click",u)})),t.pagination.bullets&&t.pagination.bullets.forEach(v=>v.classList.remove(m.bulletActiveClass))}n("init",()=>{t.params.pagination.enabled===!1?_():(f(),h(),d())}),n("activeIndexChange",()=>{typeof t.snapIndex>"u"&&d()}),n("snapIndexChange",()=>{d()}),n("snapGridLengthChange",()=>{h(),d()}),n("destroy",()=>{g()}),n("enable disable",()=>{let{el:m}=t.pagination;m&&(m=a(m),m.forEach(p=>p.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass)))}),n("lock unlock",()=>{d()}),n("click",(m,p)=>{const v=p.target;let{el:T}=t.pagination;if(Array.isArray(T)||(T=[T].filter(E=>!!E)),t.params.pagination.el&&t.params.pagination.hideOnClick&&T&&T.length>0&&!v.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&v===t.navigation.nextEl||t.navigation.prevEl&&v===t.navigation.prevEl))return;const E=T[0].classList.contains(t.params.pagination.hiddenClass);s(E===!0?"paginationShow":"paginationHide"),T.forEach(I=>I.classList.toggle(t.params.pagination.hiddenClass))}});const y=()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:m}=t.pagination;m&&(m=a(m),m.forEach(p=>p.classList.remove(t.params.pagination.paginationDisabledClass))),f(),h(),d()},_=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:m}=t.pagination;m&&(m=a(m),m.forEach(p=>p.classList.add(t.params.pagination.paginationDisabledClass))),g()};Object.assign(t.pagination,{enable:y,disable:_,render:h,update:d,init:f,destroy:g})}function mN({swiper:t,extendParams:e,on:n,emit:s,params:i}){t.autoplay={running:!1,paused:!1,timeLeft:0},e({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let r,o,a=i&&i.autoplay?i.autoplay.delay:3e3,l=i&&i.autoplay?i.autoplay.delay:3e3,c,u=new Date().getTime,d,h,f,g,y,_;function m(Y){!t||t.destroyed||!t.wrapperEl||Y.target===t.wrapperEl&&(t.wrapperEl.removeEventListener("transitionend",m),S())}const p=()=>{if(t.destroyed||!t.autoplay.running)return;t.autoplay.paused?d=!0:d&&(l=c,d=!1);const Y=t.autoplay.paused?c:u+l-new Date().getTime();t.autoplay.timeLeft=Y,s("autoplayTimeLeft",Y,Y/a),o=requestAnimationFrame(()=>{p()})},v=()=>{let Y;return t.virtual&&t.params.virtual.enabled?Y=t.slides.filter(he=>he.classList.contains("swiper-slide-active"))[0]:Y=t.slides[t.activeIndex],Y?parseInt(Y.getAttribute("data-swiper-autoplay"),10):void 0},T=Y=>{if(t.destroyed||!t.autoplay.running)return;cancelAnimationFrame(o),p();let ge=typeof Y>"u"?t.params.autoplay.delay:Y;a=t.params.autoplay.delay,l=t.params.autoplay.delay;const he=v();!Number.isNaN(he)&&he>0&&typeof Y>"u"&&(ge=he,a=he,l=he),c=ge;const We=t.params.speed,Lt=()=>{!t||t.destroyed||(t.params.autoplay.reverseDirection?!t.isBeginning||t.params.loop||t.params.rewind?(t.slidePrev(We,!0,!0),s("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(t.slides.length-1,We,!0,!0),s("autoplay")):!t.isEnd||t.params.loop||t.params.rewind?(t.slideNext(We,!0,!0),s("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(0,We,!0,!0),s("autoplay")),t.params.cssMode&&(u=new Date().getTime(),requestAnimationFrame(()=>{T()})))};return ge>0?(clearTimeout(r),r=setTimeout(()=>{Lt()},ge)):requestAnimationFrame(()=>{Lt()}),ge},E=()=>{t.autoplay.running=!0,T(),s("autoplayStart")},I=()=>{t.autoplay.running=!1,clearTimeout(r),cancelAnimationFrame(o),s("autoplayStop")},C=(Y,ge)=>{if(t.destroyed||!t.autoplay.running)return;clearTimeout(r),Y||(_=!0);const he=()=>{s("autoplayPause"),t.params.autoplay.waitForTransition?t.wrapperEl.addEventListener("transitionend",m):S()};if(t.autoplay.paused=!0,ge){y&&(c=t.params.autoplay.delay),y=!1,he();return}c=(c||t.params.autoplay.delay)-(new Date().getTime()-u),!(t.isEnd&&c<0&&!t.params.loop)&&(c<0&&(c=0),he())},S=()=>{t.isEnd&&c<0&&!t.params.loop||t.destroyed||!t.autoplay.running||(u=new Date().getTime(),_?(_=!1,T(c)):T(),t.autoplay.paused=!1,s("autoplayResume"))},A=()=>{if(t.destroyed||!t.autoplay.running)return;const Y=vn();Y.visibilityState==="hidden"&&(_=!0,C(!0)),Y.visibilityState==="visible"&&S()},B=Y=>{Y.pointerType==="mouse"&&(_=!0,C(!0))},x=Y=>{Y.pointerType==="mouse"&&t.autoplay.paused&&S()},k=()=>{t.params.autoplay.pauseOnMouseEnter&&(t.el.addEventListener("pointerenter",B),t.el.addEventListener("pointerleave",x))},V=()=>{t.el.removeEventListener("pointerenter",B),t.el.removeEventListener("pointerleave",x)},$=()=>{vn().addEventListener("visibilitychange",A)},_e=()=>{vn().removeEventListener("visibilitychange",A)};n("init",()=>{t.params.autoplay.enabled&&(k(),$(),u=new Date().getTime(),E())}),n("destroy",()=>{V(),_e(),t.autoplay.running&&I()}),n("beforeTransitionStart",(Y,ge,he)=>{t.destroyed||!t.autoplay.running||(he||!t.params.autoplay.disableOnInteraction?C(!0,!0):I())}),n("sliderFirstMove",()=>{if(!(t.destroyed||!t.autoplay.running)){if(t.params.autoplay.disableOnInteraction){I();return}h=!0,f=!1,_=!1,g=setTimeout(()=>{_=!0,f=!0,C(!0)},200)}}),n("touchEnd",()=>{if(!(t.destroyed||!t.autoplay.running||!h)){if(clearTimeout(g),clearTimeout(r),t.params.autoplay.disableOnInteraction){f=!1,h=!1;return}f&&t.params.cssMode&&S(),f=!1,h=!1}}),n("slideChange",()=>{t.destroyed||!t.autoplay.running||(y=!0)}),Object.assign(t.autoplay,{start:E,stop:I,pause:C,resume:S})}function ni(t){return typeof t=="object"&&t!==null&&t.constructor&&Object.prototype.toString.call(t).slice(8,-1)==="Object"}function ls(t,e){const n=["__proto__","constructor","prototype"];Object.keys(e).filter(s=>n.indexOf(s)<0).forEach(s=>{typeof t[s]>"u"?t[s]=e[s]:ni(e[s])&&ni(t[s])&&Object.keys(e[s]).length>0?e[s].__swiper__?t[s]=e[s]:ls(t[s],e[s]):t[s]=e[s]})}function P0(t={}){return t.navigation&&typeof t.navigation.nextEl>"u"&&typeof t.navigation.prevEl>"u"}function L0(t={}){return t.pagination&&typeof t.pagination.el>"u"}function M0(t={}){return t.scrollbar&&typeof t.scrollbar.el>"u"}function N0(t=""){const e=t.split(" ").map(s=>s.trim()).filter(s=>!!s),n=[];return e.forEach(s=>{n.indexOf(s)<0&&n.push(s)}),n.join(" ")}function gN(t=""){return t?t.includes("swiper-wrapper")?t:`swiper-wrapper ${t}`:"swiper-wrapper"}const F0=["modules","init","_direction","oneWayMovement","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopedSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideNextClass","slidePrevClass","wrapperClass","lazyPreloaderClass","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control","injectStyles","injectStylesUrls"];function Dm(t={},e=!0){const n={on:{}},s={},i={};ls(n,so.defaults),ls(n,so.extendedDefaults),n._emitClasses=!0,n.init=!1;const r={},o=F0.map(l=>l.replace(/_/,"")),a=Object.assign({},t);return Object.keys(a).forEach(l=>{typeof t[l]>"u"||(o.indexOf(l)>=0?ni(t[l])?(n[l]={},i[l]={},ls(n[l],t[l]),ls(i[l],t[l])):(n[l]=t[l],i[l]=t[l]):l.search(/on[A-Z]/)===0&&typeof t[l]=="function"?e?s[`${l[2].toLowerCase()}${l.substr(3)}`]=t[l]:n.on[`${l[2].toLowerCase()}${l.substr(3)}`]=t[l]:r[l]=t[l])}),["navigation","pagination","scrollbar"].forEach(l=>{n[l]===!0&&(n[l]={}),n[l]===!1&&delete n[l]}),{params:n,passedParams:i,rest:r,events:s}}function yN({el:t,nextEl:e,prevEl:n,paginationEl:s,scrollbarEl:i,swiper:r},o){P0(o)&&e&&n&&(r.params.navigation.nextEl=e,r.originalParams.navigation.nextEl=e,r.params.navigation.prevEl=n,r.originalParams.navigation.prevEl=n),L0(o)&&s&&(r.params.pagination.el=s,r.originalParams.pagination.el=s),M0(o)&&i&&(r.params.scrollbar.el=i,r.originalParams.scrollbar.el=i),r.init(t)}function vN(t,e,n,s,i){const r=[];if(!e)return r;const o=l=>{r.indexOf(l)<0&&r.push(l)};if(n&&s){const l=s.map(i),c=n.map(i);l.join("")!==c.join("")&&o("children"),s.length!==n.length&&o("children")}return F0.filter(l=>l[0]==="_").map(l=>l.replace(/_/,"")).forEach(l=>{if(l in t&&l in e)if(ni(t[l])&&ni(e[l])){const c=Object.keys(t[l]),u=Object.keys(e[l]);c.length!==u.length?o(l):(c.forEach(d=>{t[l][d]!==e[l][d]&&o(l)}),u.forEach(d=>{t[l][d]!==e[l][d]&&o(l)}))}else t[l]!==e[l]&&o(l)}),r}function Vc(t,e,n){t===void 0&&(t={});const s=[],i={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]},r=(o,a)=>{Array.isArray(o)&&o.forEach(l=>{const c=typeof l.type=="symbol";a==="default"&&(a="container-end"),c&&l.children?r(l.children,"default"):l.type&&(l.type.name==="SwiperSlide"||l.type.name==="AsyncComponentWrapper")?s.push(l):i[a]&&i[a].push(l)})};return Object.keys(t).forEach(o=>{if(typeof t[o]!="function")return;const a=t[o]();r(a,o)}),n.value=e.value,e.value=s,{slides:s,slots:i}}function bN({swiper:t,slides:e,passedParams:n,changedParams:s,nextEl:i,prevEl:r,scrollbarEl:o,paginationEl:a}){const l=s.filter(S=>S!=="children"&&S!=="direction"&&S!=="wrapperClass"),{params:c,pagination:u,navigation:d,scrollbar:h,virtual:f,thumbs:g}=t;let y,_,m,p,v,T,E,I;s.includes("thumbs")&&n.thumbs&&n.thumbs.swiper&&c.thumbs&&!c.thumbs.swiper&&(y=!0),s.includes("controller")&&n.controller&&n.controller.control&&c.controller&&!c.controller.control&&(_=!0),s.includes("pagination")&&n.pagination&&(n.pagination.el||a)&&(c.pagination||c.pagination===!1)&&u&&!u.el&&(m=!0),s.includes("scrollbar")&&n.scrollbar&&(n.scrollbar.el||o)&&(c.scrollbar||c.scrollbar===!1)&&h&&!h.el&&(p=!0),s.includes("navigation")&&n.navigation&&(n.navigation.prevEl||r)&&(n.navigation.nextEl||i)&&(c.navigation||c.navigation===!1)&&d&&!d.prevEl&&!d.nextEl&&(v=!0);const C=S=>{t[S]&&(t[S].destroy(),S==="navigation"?(t.isElement&&(t[S].prevEl.remove(),t[S].nextEl.remove()),c[S].prevEl=void 0,c[S].nextEl=void 0,t[S].prevEl=void 0,t[S].nextEl=void 0):(t.isElement&&t[S].el.remove(),c[S].el=void 0,t[S].el=void 0))};s.includes("loop")&&t.isElement&&(c.loop&&!n.loop?T=!0:!c.loop&&n.loop?E=!0:I=!0),l.forEach(S=>{if(ni(c[S])&&ni(n[S]))ls(c[S],n[S]);else{const A=n[S];(A===!0||A===!1)&&(S==="navigation"||S==="pagination"||S==="scrollbar")?A===!1&&C(S):c[S]=n[S]}}),l.includes("controller")&&!_&&t.controller&&t.controller.control&&c.controller&&c.controller.control&&(t.controller.control=c.controller.control),s.includes("children")&&e&&f&&c.virtual.enabled&&(f.slides=e,f.update(!0)),s.includes("children")&&e&&c.loop&&(I=!0),y&&g.init()&&g.update(!0),_&&(t.controller.control=c.controller.control),m&&(t.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-pagination"),t.el.shadowEl.appendChild(a)),a&&(c.pagination.el=a),u.init(),u.render(),u.update()),p&&(t.isElement&&(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-scrollbar"),t.el.shadowEl.appendChild(o)),o&&(c.scrollbar.el=o),h.init(),h.updateSize(),h.setTranslate()),v&&(t.isElement&&((!i||typeof i=="string")&&(i=document.createElement("div"),i.classList.add("swiper-button-next"),t.el.shadowEl.appendChild(i)),(!r||typeof r=="string")&&(r=document.createElement("div"),r.classList.add("swiper-button-prev"),t.el.shadowEl.appendChild(r))),i&&(c.navigation.nextEl=i),r&&(c.navigation.prevEl=r),d.init(),d.update()),s.includes("allowSlideNext")&&(t.allowSlideNext=n.allowSlideNext),s.includes("allowSlidePrev")&&(t.allowSlidePrev=n.allowSlidePrev),s.includes("direction")&&t.changeDirection(n.direction,!1),(T||I)&&t.loopDestroy(),(E||I)&&t.loopCreate(),t.update()}function wN(t,e,n){if(!n)return null;const s=u=>{let d=u;return u<0?d=e.length+u:d>=e.length&&(d=d-e.length),d},i=t.value.isHorizontal()?{[t.value.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:r,to:o}=n,a=t.value.params.loop?-e.length:0,l=t.value.params.loop?e.length*2:e.length,c=[];for(let u=a;u<l;u+=1)u>=r&&u<=o&&c.push(e[s(u)]);return c.map(u=>(u.props||(u.props={}),u.props.style||(u.props.style={}),u.props.swiperRef=t,u.props.style=i,pt(u.type,{...u.props},u.children)))}const _N=t=>{!t||t.destroyed||!t.params.virtual||t.params.virtual&&!t.params.virtual.enabled||(t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.parallax&&t.params.parallax&&t.params.parallax.enabled&&t.parallax.setTranslate())},SN={name:"Swiper",props:{tag:{type:String,default:"div"},wrapperTag:{type:String,default:"div"},modules:{type:Array,default:void 0},init:{type:Boolean,default:void 0},direction:{type:String,default:void 0},oneWayMovement:{type:Boolean,default:void 0},touchEventsTarget:{type:String,default:void 0},initialSlide:{type:Number,default:void 0},speed:{type:Number,default:void 0},cssMode:{type:Boolean,default:void 0},updateOnWindowResize:{type:Boolean,default:void 0},resizeObserver:{type:Boolean,default:void 0},nested:{type:Boolean,default:void 0},focusableElements:{type:String,default:void 0},width:{type:Number,default:void 0},height:{type:Number,default:void 0},preventInteractionOnTransition:{type:Boolean,default:void 0},userAgent:{type:String,default:void 0},url:{type:String,default:void 0},edgeSwipeDetection:{type:[Boolean,String],default:void 0},edgeSwipeThreshold:{type:Number,default:void 0},autoHeight:{type:Boolean,default:void 0},setWrapperSize:{type:Boolean,default:void 0},virtualTranslate:{type:Boolean,default:void 0},effect:{type:String,default:void 0},breakpoints:{type:Object,default:void 0},spaceBetween:{type:[Number,String],default:void 0},slidesPerView:{type:[Number,String],default:void 0},maxBackfaceHiddenSlides:{type:Number,default:void 0},slidesPerGroup:{type:Number,default:void 0},slidesPerGroupSkip:{type:Number,default:void 0},slidesPerGroupAuto:{type:Boolean,default:void 0},centeredSlides:{type:Boolean,default:void 0},centeredSlidesBounds:{type:Boolean,default:void 0},slidesOffsetBefore:{type:Number,default:void 0},slidesOffsetAfter:{type:Number,default:void 0},normalizeSlideIndex:{type:Boolean,default:void 0},centerInsufficientSlides:{type:Boolean,default:void 0},watchOverflow:{type:Boolean,default:void 0},roundLengths:{type:Boolean,default:void 0},touchRatio:{type:Number,default:void 0},touchAngle:{type:Number,default:void 0},simulateTouch:{type:Boolean,default:void 0},shortSwipes:{type:Boolean,default:void 0},longSwipes:{type:Boolean,default:void 0},longSwipesRatio:{type:Number,default:void 0},longSwipesMs:{type:Number,default:void 0},followFinger:{type:Boolean,default:void 0},allowTouchMove:{type:Boolean,default:void 0},threshold:{type:Number,default:void 0},touchMoveStopPropagation:{type:Boolean,default:void 0},touchStartPreventDefault:{type:Boolean,default:void 0},touchStartForcePreventDefault:{type:Boolean,default:void 0},touchReleaseOnEdges:{type:Boolean,default:void 0},uniqueNavElements:{type:Boolean,default:void 0},resistance:{type:Boolean,default:void 0},resistanceRatio:{type:Number,default:void 0},watchSlidesProgress:{type:Boolean,default:void 0},grabCursor:{type:Boolean,default:void 0},preventClicks:{type:Boolean,default:void 0},preventClicksPropagation:{type:Boolean,default:void 0},slideToClickedSlide:{type:Boolean,default:void 0},loop:{type:Boolean,default:void 0},loopedSlides:{type:Number,default:void 0},loopPreventsSliding:{type:Boolean,default:void 0},rewind:{type:Boolean,default:void 0},allowSlidePrev:{type:Boolean,default:void 0},allowSlideNext:{type:Boolean,default:void 0},swipeHandler:{type:Boolean,default:void 0},noSwiping:{type:Boolean,default:void 0},noSwipingClass:{type:String,default:void 0},noSwipingSelector:{type:String,default:void 0},passiveListeners:{type:Boolean,default:void 0},containerModifierClass:{type:String,default:void 0},slideClass:{type:String,default:void 0},slideActiveClass:{type:String,default:void 0},slideVisibleClass:{type:String,default:void 0},slideNextClass:{type:String,default:void 0},slidePrevClass:{type:String,default:void 0},wrapperClass:{type:String,default:void 0},lazyPreloaderClass:{type:String,default:void 0},runCallbacksOnInit:{type:Boolean,default:void 0},observer:{type:Boolean,default:void 0},observeParents:{type:Boolean,default:void 0},observeSlideChildren:{type:Boolean,default:void 0},a11y:{type:[Boolean,Object],default:void 0},autoplay:{type:[Boolean,Object],default:void 0},controller:{type:Object,default:void 0},coverflowEffect:{type:Object,default:void 0},cubeEffect:{type:Object,default:void 0},fadeEffect:{type:Object,default:void 0},flipEffect:{type:Object,default:void 0},creativeEffect:{type:Object,default:void 0},cardsEffect:{type:Object,default:void 0},hashNavigation:{type:[Boolean,Object],default:void 0},history:{type:[Boolean,Object],default:void 0},keyboard:{type:[Boolean,Object],default:void 0},mousewheel:{type:[Boolean,Object],default:void 0},navigation:{type:[Boolean,Object],default:void 0},pagination:{type:[Boolean,Object],default:void 0},parallax:{type:[Boolean,Object],default:void 0},scrollbar:{type:[Boolean,Object],default:void 0},thumbs:{type:Object,default:void 0},virtual:{type:[Boolean,Object],default:void 0},zoom:{type:[Boolean,Object],default:void 0},grid:{type:[Object],default:void 0},freeMode:{type:[Boolean,Object],default:void 0},enabled:{type:Boolean,default:void 0}},emits:["_beforeBreakpoint","_containerClasses","_slideClass","_slideClasses","_swiper","_freeModeNoMomentumRelease","activeIndexChange","afterInit","autoplay","autoplayStart","autoplayStop","autoplayPause","autoplayResume","autoplayTimeLeft","beforeDestroy","beforeInit","beforeLoopFix","beforeResize","beforeSlideChangeStart","beforeTransitionStart","breakpoint","changeDirection","click","disable","doubleTap","doubleClick","destroy","enable","fromEdge","hashChange","hashSet","init","keyPress","lock","loopFix","momentumBounce","navigationHide","navigationShow","navigationPrev","navigationNext","observerUpdate","orientationchange","paginationHide","paginationRender","paginationShow","paginationUpdate","progress","reachBeginning","reachEnd","realIndexChange","resize","scroll","scrollbarDragEnd","scrollbarDragMove","scrollbarDragStart","setTransition","setTranslate","slideChange","slideChangeTransitionEnd","slideChangeTransitionStart","slideNextTransitionEnd","slideNextTransitionStart","slidePrevTransitionEnd","slidePrevTransitionStart","slideResetTransitionStart","slideResetTransitionEnd","sliderMove","sliderFirstMove","slidesLengthChange","slidesGridLengthChange","snapGridLengthChange","snapIndexChange","swiper","tap","toEdge","touchEnd","touchMove","touchMoveOpposite","touchStart","transitionEnd","transitionStart","unlock","update","virtualUpdate","zoomChange"],setup(t,e){let{slots:n,emit:s}=e;const{tag:i,wrapperTag:r}=t,o=Te("swiper"),a=Te(null),l=Te(!1),c=Te(!1),u=Te(null),d=Te(null),h=Te(null),f={value:[]},g={value:[]},y=Te(null),_=Te(null),m=Te(null),p=Te(null),{params:v,passedParams:T}=Dm(t,!1);Vc(n,f,g),h.value=T,g.value=f.value;const E=()=>{Vc(n,f,g),l.value=!0};v.onAny=function(S){for(var A=arguments.length,B=new Array(A>1?A-1:0),x=1;x<A;x++)B[x-1]=arguments[x];s(S,...B)},Object.assign(v.on,{_beforeBreakpoint:E,_containerClasses(S,A){o.value=A}});const I={...v};if(delete I.wrapperClass,d.value=new so(I),d.value.virtual&&d.value.params.virtual.enabled){d.value.virtual.slides=f.value;const S={cache:!1,slides:f.value,renderExternal:A=>{a.value=A},renderExternalUpdate:!1};ls(d.value.params.virtual,S),ls(d.value.originalParams.virtual,S)}Yi(()=>{!c.value&&d.value&&(d.value.emitSlidesClasses(),c.value=!0);const{passedParams:S}=Dm(t,!1),A=vN(S,h.value,f.value,g.value,B=>B.props&&B.props.key);h.value=S,(A.length||l.value)&&d.value&&!d.value.destroyed&&bN({swiper:d.value,slides:f.value,passedParams:S,changedParams:A,nextEl:y.value,prevEl:_.value,scrollbarEl:p.value,paginationEl:m.value}),l.value=!1}),Dn("swiper",d),us(a,()=>{qt(()=>{_N(d.value)})}),sn(()=>{u.value&&(yN({el:u.value,nextEl:y.value,prevEl:_.value,paginationEl:m.value,scrollbarEl:p.value,swiper:d.value},v),s("swiper",d.value))}),Qi(()=>{d.value&&!d.value.destroyed&&d.value.destroy(!0,!1)});function C(S){return v.virtual?wN(d,S,a.value):(S.forEach((A,B)=>{A.props||(A.props={}),A.props.swiperRef=d,A.props.swiperSlideIndex=B}),S)}return()=>{const{slides:S,slots:A}=Vc(n,f,g);return pt(i,{ref:u,class:N0(o.value)},[A["container-start"],pt(r,{class:gN(v.wrapperClass)},[A["wrapper-start"],C(S),A["wrapper-end"]]),P0(t)&&[pt("div",{ref:_,class:"swiper-button-prev"}),pt("div",{ref:y,class:"swiper-button-next"})],M0(t)&&pt("div",{ref:p,class:"swiper-scrollbar"}),L0(t)&&pt("div",{ref:m,class:"swiper-pagination"}),A["container-end"]])}}},TN={name:"SwiperSlide",props:{tag:{type:String,default:"div"},swiperRef:{type:Object,required:!1},swiperSlideIndex:{type:Number,default:void 0,required:!1},zoom:{type:Boolean,default:void 0,required:!1},lazy:{type:Boolean,default:!1,required:!1},virtualIndex:{type:[String,Number],default:void 0}},setup(t,e){let{slots:n}=e,s=!1;const{swiperRef:i}=t,r=Te(null),o=Te("swiper-slide"),a=Te(!1);function l(d,h,f){h===r.value&&(o.value=f)}sn(()=>{!i||!i.value||(i.value.on("_slideClass",l),s=!0)}),vd(()=>{s||!i||!i.value||(i.value.on("_slideClass",l),s=!0)}),Yi(()=>{!r.value||!i||!i.value||(typeof t.swiperSlideIndex<"u"&&(r.value.swiperSlideIndex=t.swiperSlideIndex),i.value.destroyed&&o.value!=="swiper-slide"&&(o.value="swiper-slide"))}),Qi(()=>{!i||!i.value||i.value.off("_slideClass",l)});const c=Ce(()=>({isActive:o.value.indexOf("swiper-slide-active")>=0,isVisible:o.value.indexOf("swiper-slide-visible")>=0,isPrev:o.value.indexOf("swiper-slide-prev")>=0,isNext:o.value.indexOf("swiper-slide-next")>=0}));Dn("swiperSlide",c);const u=()=>{a.value=!0};return()=>pt(t.tag,{class:N0(`${o.value}`),ref:r,"data-swiper-slide-index":typeof t.virtualIndex>"u"&&i&&i.value&&i.value.params.loop?t.swiperSlideIndex:t.virtualIndex,onLoadCapture:u},t.zoom?pt("div",{class:"swiper-zoom-container","data-swiper-zoom":typeof t.zoom=="number"?t.zoom:void 0},[n.default&&n.default(c.value),t.lazy&&!a.value&&pt("div",{class:"swiper-lazy-preloader"})]):[n.default&&n.default(c.value),t.lazy&&!a.value&&pt("div",{class:"swiper-lazy-preloader"})])}};const EN="/assets/sale-67b962ac.jpg";const IN={components:{GameList:sr,Swiper:SN,SwiperSlide:TN,SkeletonLoading:to},data(){return{store:Kt()}},setup(){return{modules:[pN,mN]}},computed:{gameData:function(){return this.store.HomeState}},methods:{handleSelectGame(t){this.$router.push({path:`/game/${t.id}`,replace:!0})}},mounted(){var t,e;(t=document.querySelector(".nav"))==null||t.classList.add("shadow"),(e=document.querySelector(".nav"))==null||e.classList.remove("bg-gradient")}},CN={class:"w-full h-full"},xN={class:"flex items-center justify-center flex-col lg:justify-start lg:flex-row lg:h-[50vh] py-5"},AN={class:"swiper-hero cursor-pointer w-full h-[200px] md:h-[350px] lg:w-[50%] lg:h-full my-3 lg:mr-3 rounded-lg overflow-hidden"},kN=["src"],RN={key:0},ON=M("img",{src:EN},null,-1),DN=[ON],PN={class:"home justify-center lg:justify-start mb-16 lg:m-0"};function LN(t,e,n,s,i,r){const o=st("swiper-slide"),a=st("swiper"),l=st("SkeletonLoading"),c=st("GameList");return H(),ee("div",CN,[M("div",xN,[M("div",AN,[Object.keys(r.gameData).length>0?(H(),vt(a,{key:0,"slides-per-view":1,modules:s.modules,pagination:!0,loop:!0,autoplay:{delay:2500,disableOnInteraction:!1}},{default:Le(()=>[(H(!0),ee(Me,null,Nn(r.gameData.slice(0,3),u=>(H(),vt(o,{key:u.id,onClick:()=>r.handleSelectGame(u)},{default:Le(()=>[M("figure",null,[M("img",{src:u.imageBackground},null,8,kN)])]),_:2},1032,["onClick"]))),128))]),_:1},8,["modules"])):(H(),vt(l,{key:1,classList:"w-full h-full",times:"1"}))]),M("div",{class:"w-full h-[200px] md:h-[350px] lg:w-[50%] lg:h-full hover:ring ring-orange-400 rounded-lg overflow-hidden cursor-pointer",onClick:e[0]||(e[0]=()=>t.$router.push({path:"/search/sale",replace:!0}))},[Object.keys(r.gameData).length>0?(H(),ee("figure",RN,DN)):(H(),vt(l,{key:1,classList:"w-full h-full",times:"1"}))])]),M("div",PN,[ne(c,{gameList:r.gameData},null,8,["gameList"])])])}const MN=No(IN,[["render",LN]]);async function NN(t,e){const s=await(await fetch("https://api.stripe.com/v1/checkout/sessions",{method:"POST",headers:{Authorization:"Bearer sk_test_51Mf0GxB2S7WCM7TJ67zQHgN9y7Oh6WiY5TaCuZua1Jp9c47Bs2E9E0AGCf5XFfbiD28lEIBqvL8tlPYs3Tz1d5kU00pwgVEBtf","Content-type":"application/x-www-form-urlencoded"},body:$0({payment_method_types:["card"],mode:"payment",success_url:"https://arcade-asylum.vercel.app/api/success?id={CHECKOUT_SESSION_ID}",cancel_url:"https://arcade-asylum.vercel.app/api/cancel?id={CHECKOUT_SESSION_ID}",line_items:t})})).json(),i=s.url.split("/").pop().split("#")[0];await FN(e,i),window.location.href=s.url}async function FN(t,e){var n;await m0(Zr(os,"checkouts",e),{id:e,uid:(n=Jl.currentUser)==null?void 0:n.uid,items:t.list,payment:null,total:t.total,date:null})}function $0(t,e=""){const n=Object.prototype.toString.call(t).slice(8,-1).toLowerCase();return Object.keys(t).map(function(s,i){const r=t[s];return n==="array"?s=e+"["+i+"]":n==="object"&&(s=e?e+"["+s+"]":s),typeof r=="object"?$0(r,s):s+"="+encodeURIComponent(r)}).join("&")}const $N={class:"w-full h-full"},BN={key:0,class:"flex flex-col lg:flex-row"},UN={class:"w-[70%] h-fit"},VN={key:1,class:"w-[300px] h-[300px] mt-5 flex items-center"},jN=M("img",{src:"https://media.tenor.com/CMpNQO7SBWIAAAAC/no-money-donald-duck.gif"},null,-1),zN=[jN],qN={class:"checkout-section rounded-lg w-full lg:w-[25%] h-[80%] shadow p-10 text-white flex flex-col justify-between"},HN={class:"checkout-list w-full relative z-10"},GN={class:"w-[70%]"},KN={class:"w-[25%] text-right"},WN={class:"flex justify-between border-t-2"},YN=M("p",{class:"w-[70%]"},"Total",-1),QN={class:"w-[25%] text-right"},XN={key:0,class:"col s12 place-order-button-block"},JN={key:1,class:"w-full h-full flex items-center justify-center"},ZN=M("h1",{class:"text-3xl text-white"}," Please log in to add items to your basket. ",-1),eF=[ZN],tF={__name:"BasketView",setup(t){const e=Kt(),n=Ce(()=>e.userProfile.basket),s=()=>{const i=n.value.map(o=>({price:o.priceId,quantity:1})),r={list:n.value,total:n.value.reduce((o,a)=>o+Number(a.price.substring(1)),0)};I0(()=>NN(i,r))};return(i,r)=>(H(),ee("div",$N,[pe(n)?(H(),ee("div",BN,[M("div",UN,[pe(n).length>0?(H(),vt(sr,{key:0,gameList:pe(n)},null,8,["gameList"])):(H(),ee("div",VN,zN))]),M("div",qN,[M("div",HN,[(H(!0),ee(Me,null,Nn(pe(n),o=>(H(),ee("div",{class:"flex items-end justify-between my-3",key:o.id},[M("p",GN,je(o.title),1),M("p",KN,je(o.price),1)]))),128)),M("div",WN,[YN,M("p",QN," $"+je(pe(n).reduce((o,a)=>o+Number(a.price.substring(1)),0).toFixed(2)),1)])]),pe(n).length>0?(H(),ee("div",XN,[M("button",{class:"btn-shadow w-full p-3 mt-5",onClick:s}," Order ")])):$t("",!0)])])):(H(),ee("div",JN,eF))]))}},nF={class:"w-full h-full"},sF={key:0},iF={key:1},rF=M("img",{src:"https://media.tenor.com/RxbXY3mB_KIAAAAi/winnie-the.gif",class:"w-[300px] h-[300px]"},null,-1),oF=[rF],aF={key:1,class:"w-full h-full flex items-center justify-center"},lF=M("h1",{class:"text-3xl text-white"},"Please log in to view your library.",-1),cF=[lF],uF={__name:"LibraryView",setup(t){const e=Kt(),n=Ce(()=>e.userProfile.library);return(s,i)=>(H(),ee("div",nF,[pe(n)?(H(),ee("div",sF,[pe(n).length>0?(H(),vt(sr,{key:0,gameList:pe(n),displayPrice:!0},null,8,["gameList"])):(H(),ee("div",iF,oF))])):(H(),ee("div",aF,cF))]))}},dF={class:"w-full h-full"},hF={class:"text-3xl my-5 text-white"},fF={__name:"SearchView",setup(t){const e=Oy(),n=Kt(),s=Ce(()=>n.getSearch(e.params.id.toLowerCase()));return(i,r)=>(H(),ee("div",dF,[M("h1",hF,"Search results for "+je(pe(e).params.id)+":",1),ne(sr,{gameList:pe(s)},null,8,["gameList"])]))}},pF={class:"w-full h-full"},mF={class:"text-3xl my-5 text-white"},gF={__name:"GenreView",setup(t){const e=Oy(),n=Kt(),s=Ce(()=>n.getGenre(e.params.id));return(i,r)=>(H(),ee("div",pF,[M("h1",mF,je(pe(e).params.id),1),ne(sr,{gameList:pe(s)},null,8,["gameList"])]))}};const yF={components:{SkeletonLoading:to},data(){return{store:Kt(),Id:void 0,basketStore:{}}},computed:{gameData:function(){return this.store.HomeState.find(t=>t.id===this.$route.params.id)},inCart:function(){return this.store.userProfile.basket.some(t=>t.id===this.$route.params.id)},inLibrary:function(){return this.store.userProfile.library.some(t=>t.id===this.$route.params.id)}},mounted(){var t,e;this.basketStore=iE(this.store),(t=document.querySelector(".nav"))==null||t.classList.remove("shadow"),(e=document.querySelector(".nav"))==null||e.classList.add("bg-glass")},methods:{AddToCart:function(){this.store.addTobasket(this.gameData)},RemoveFromCart:function(){this.store.removefromBasket(this.gameData)}}},vF={class:"w-full h-[90%]"},bF={key:0,class:"game w-full h-full flex items-center"},wF=["src"],_F={class:"w-full lg:h-[65%] relative z-10 lg:flex items-start mb-20 lg:mb-0"},SF={class:"w-[150px] lg:w-[300px] lg:h-full"},TF=["src"],EF={class:"game-details lg:ml-5 mt-5 lg:mt-0 text-white flex flex-col w-full lg:w-[70%]"},IF={class:"flex flex-col lg:w-[70%]"},CF={class:"text-4xl font-bold"},xF={class:"text-1xl my-5"},AF={class:"flex my-1"},kF=M("p",null,"Developers:",-1),RF={class:"ml-2"},OF={class:"genre flex my-3"},DF=M("p",null,"Genre:",-1),PF={class:"ml-2"},LF={key:0},MF={key:0,class:"flex justify-between lg:w-[70%] my-3"},NF={key:0,class:"flex items-center"},FF={class:"ml-3"},$F={key:1},BF=M("h1",null,"Price: TBA",-1),UF=[BF],VF={key:2,class:"flex justify-between lg:w-[70%] my-3"},jF=M("div",{class:"flex items-center"},[M("p",{class:"p-2"},"In Library")],-1),zF=[jF];function qF(t,e,n,s,i,r){const o=st("SkeletonLoading"),a=st("router-link");return H(),ee("div",vF,[r.gameData?(H(),ee("div",bF,[M("img",{class:"background invisible lg:visible",src:r.gameData.imageBackground},null,8,wF),M("div",_F,[M("figure",SF,[M("img",{src:r.gameData.imageCover},null,8,TF),r.gameData?$t("",!0):(H(),vt(o,{key:0,classList:"w-[150px] lg:w-[300px] lg:h-[400px]"}))]),M("div",EF,[M("div",IF,[M("div",CF,je(r.gameData.title),1),M("div",xF,je(r.gameData.description),1),r.gameData?$t("",!0):(H(),vt(o,{key:0,classList:"lg:w-[70%] h-[20%]"})),r.gameData?$t("",!0):(H(),vt(o,{key:1,classList:"lg:w-[70%] h-[50%] my-5"}))]),M("div",AF,[kF,M("p",RF,je(r.gameData.developers),1)]),M("div",OF,[DF,M("div",PF,[(H(!0),ee(Me,null,Nn(r.gameData.genres,(l,c)=>(H(),vt(a,{class:"ml-1 underline",key:c,to:`/search/genre/${l}`},{default:Le(()=>[Ft(je(l),1),c<r.gameData.genres.length-1?(H(),ee("span",LF,",")):$t("",!0)]),_:2},1032,["to"]))),128))])]),i.store.logged?(H(),ee("div",MF,[r.gameData.price!=="TBA"&&!r.inLibrary?(H(),ee("div",NF,[r.inCart?(H(),ee("button",{key:0,class:"bg-gradient p-2 rounded ring-2",onClick:e[0]||(e[0]=()=>r.RemoveFromCart())}," Remove from Cart ")):(H(),ee("button",{key:1,class:"bg-gradient p-2 rounded ring-2",onClick:e[1]||(e[1]=()=>r.AddToCart())}," Add To Cart ")),M("p",FF,je(r.gameData.price),1)])):r.inLibrary?$t("",!0):(H(),ee("div",$F,UF)),r.inLibrary?(H(),ee("div",VF,zF)):$t("",!0),M("p",null,je(r.gameData.released),1)])):$t("",!0)])])])):$t("",!0)])}const HF=No(yF,[["render",qF]]),GF=M("h1",{class:"text-3xl text-white"},"Games on sale",-1),KF={__name:"SaleView",setup(t){const n=Kt().getSale();return(s,i)=>(H(),ee("div",null,[GF,ne(sr,{gameList:pe(n)},null,8,["gameList"])]))}},Pm="/assets/arrow-8db3c837.svg",WF={class:"my-10"},YF={class:"w-[150px] h-[150px] rounded-md overflow-hidden"},QF=["src"],XF={key:0,class:"text-2xl text-white my-2"},JF={class:"my-5 text-white"},ZF=M("h1",{class:"text-3xl"},"Purchases",-1),e$={class:"my-5 flex"},t$={class:"lg:w-[80%] rounded-md overflow-hidden"},n$={class:"flex items-center text-sm justify-evenly border-b bg-black"},s$=M("p",{class:"w-[40px] hidden lg:block"},"Sno",-1),i$=M("div",{class:"w-[450px] flex items-center p-2 mx-1",id:"title"},[M("p",null,"Title")],-1),r$=M("p",{class:""},"Price",-1),o$=M("p",{class:""},"Date",-1),a$={class:"w-[40px] p-2 mx-1 hidden lg:block"},l$={class:"w-[450px] p-2 mx-1 flex flex-col justify-center"},c$={class:"h-full w-[200px] p-2 mx-1"},u$={class:"h-full p-2 mx-1 w-[100px]"},d$={__name:"ProfileView",setup(t){const e=Te({price:null,date:null}),n=Kt(),s=Ce(()=>n.userProfile),i=Ce(function(){var o=[...n.PurchaseState];return e.value.price===!1?o.sort((a,l)=>l.total-a.total):e.value.price===!0?o.sort((a,l)=>a.total-l.total):e.value.date===!1?o.sort((a,l)=>new Date(l.date)-new Date(a.date)):e.value.date===!0&&o.sort((a,l)=>new Date(a.date)-new Date(l.date)),o}),r=o=>{const{id:a}=o.currentTarget,{price:l,date:c}=e.value;Object.keys(e.value).forEach(u=>e.value[u]=null),a==="price"?e.value.price=l===null?!0:l?!1:null:e.value.date=c===null?!0:c?!1:null};return(o,a)=>(H(),ee("div",WF,[M("div",null,[M("figure",YF,[pe(s).photo?(H(),ee("img",{key:0,src:pe(s).photo},null,8,QF)):(H(),vt(to,{key:1,classList:"w-full h-full",times:"1"}))]),pe(s).username?(H(),ee("p",XF,je(pe(s).username),1)):(H(),vt(to,{key:1,classList:"w-[200px] h-[30px] my-2",times:"1"}))]),M("div",JF,[ZF,M("div",e$,[M("div",t$,[M("div",n$,[s$,i$,M("div",{class:"w-[200px] flex items-center p-2 mx-1 cursor-pointer",id:"price",onClick:r},[r$,M("img",{class:Ge(["w-[20px]",e.value.price===null?"hidden":!e.value.price&&"rotate-180"]),src:Pm},null,2)]),M("div",{class:"flex items-center p-2 mx-1 w-[100px] cursor-pointer",id:"date",onClick:r},[o$,M("img",{class:Ge(["w-[20px]",e.value.date===null?"hidden":!e.value.date&&"rotate-180"]),src:Pm},null,2)])]),(H(!0),ee(Me,null,Nn(pe(i),(l,c)=>(H(),ee("div",{key:c,class:"border-b text-sm flex items-center justify-evenly"},[M("p",a$,je(c+1),1),M("div",l$,[(H(!0),ee(Me,null,Nn(l.items,(u,d)=>(H(),ee("p",{key:d},je(u.title),1))),128))]),M("p",c$," $"+je(Number(l.total).toFixed(2)),1),M("p",u$,je(l.date),1)]))),128))])])])]))}},h$=rI({history:SE("/"),routes:[{path:"/",name:"home",component:MN},{path:"/basket",name:"basket",component:tF},{path:"/library",name:"library",component:uF},{path:"/game/:id",name:"Game",component:HF},{path:"/search/",name:"search",children:[{path:"sale",name:"sale",component:KF},{path:":id",name:"search",component:fF},{path:"genre/:id",name:"genre",component:gF}]},{path:"/profile",name:"Profile",component:d$}]});const Hh=py(kL);Hh.use(JT());Hh.use(h$);Hh.mount("#app");
