(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Ka(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const M0="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",L0=Ka(M0);function so(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=$e(s)?B0(s):so(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if($e(t))return t;if(De(t))return t}}const N0=/;(?![^(]*\))/g,F0=/:([^]+)/,$0=/\/\*.*?\*\//gs;function B0(t){const e={};return t.replace($0,"").split(N0).forEach(n=>{if(n){const s=n.split(F0);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function xt(t){let e="";if($e(t))e=t;else if(Y(t))for(let n=0;n<t.length;n++){const s=xt(t[n]);s&&(e+=s+" ")}else if(De(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function U0(t){if(!t)return null;let{class:e,style:n}=t;return e&&!$e(e)&&(t.class=xt(e)),n&&(t.style=so(n)),t}const V0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",j0=Ka(V0);function km(t){return!!t||t===""}function z0(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=fs(t[s],e[s]);return n}function fs(t,e){if(t===e)return!0;let n=Hh(t),s=Hh(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Dr(t),s=Dr(e),n||s)return t===e;if(n=Y(t),s=Y(e),n||s)return n&&s?z0(t,e):!1;if(n=De(t),s=De(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!fs(t[o],e[o]))return!1}}return String(t)===String(e)}function Wa(t,e){return t.findIndex(n=>fs(n,e))}const dt=t=>$e(t)?t:t==null?"":Y(t)||De(t)&&(t.toString===Om||!le(t.toString))?JSON.stringify(t,Rm,2):String(t),Rm=(t,e)=>e&&e.__v_isRef?Rm(t,e.value):wi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:ni(e)?{[`Set(${e.size})`]:[...e.values()]}:De(e)&&!Y(e)&&!Dm(e)?String(e):e,Re={},bi=[],en=()=>{},q0=()=>!1,H0=/^on[^a-z]/,io=t=>H0.test(t),Hu=t=>t.startsWith("onUpdate:"),ze=Object.assign,Gu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},G0=Object.prototype.hasOwnProperty,Se=(t,e)=>G0.call(t,e),Y=Array.isArray,wi=t=>Hi(t)==="[object Map]",ni=t=>Hi(t)==="[object Set]",Hh=t=>Hi(t)==="[object Date]",K0=t=>Hi(t)==="[object RegExp]",le=t=>typeof t=="function",$e=t=>typeof t=="string",Dr=t=>typeof t=="symbol",De=t=>t!==null&&typeof t=="object",Ku=t=>De(t)&&le(t.then)&&le(t.catch),Om=Object.prototype.toString,Hi=t=>Om.call(t),W0=t=>Hi(t).slice(8,-1),Dm=t=>Hi(t)==="[object Object]",Wu=t=>$e(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,gr=Ka(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ya=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Y0=/-(\w)/g,Rt=Ya(t=>t.replace(Y0,(e,n)=>n?n.toUpperCase():"")),Q0=/\B([A-Z])/g,Kt=Ya(t=>t.replace(Q0,"-$1").toLowerCase()),ro=Ya(t=>t.charAt(0).toUpperCase()+t.slice(1)),yr=Ya(t=>t?`on${ro(t)}`:""),Ai=(t,e)=>!Object.is(t,e),_i=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},pa=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ma=t=>{const e=parseFloat(t);return isNaN(e)?t:e},ga=t=>{const e=$e(t)?Number(t):NaN;return isNaN(e)?t:e};let Gh;const X0=()=>Gh||(Gh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Lt;class Yu{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Lt,!e&&Lt&&(this.index=(Lt.scopes||(Lt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Lt;try{return Lt=this,e()}finally{Lt=n}}}on(){Lt=this}off(){Lt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Qu(t){return new Yu(t)}function Pm(t,e=Lt){e&&e.active&&e.effects.push(t)}function Xu(){return Lt}function Mm(t){Lt&&Lt.cleanups.push(t)}const Ju=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Lm=t=>(t.w&ps)>0,Nm=t=>(t.n&ps)>0,J0=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=ps},Z0=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Lm(i)&&!Nm(i)?i.delete(t):e[n++]=i,i.w&=~ps,i.n&=~ps}e.length=n}},ya=new WeakMap;let ur=0,ps=1;const $c=30;let Xt;const Fs=Symbol(""),Bc=Symbol("");class oo{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Pm(this,s)}run(){if(!this.active)return this.fn();let e=Xt,n=ls;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Xt,Xt=this,ls=!0,ps=1<<++ur,ur<=$c?J0(this):Kh(this),this.fn()}finally{ur<=$c&&Z0(this),ps=1<<--ur,Xt=this.parent,ls=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Xt===this?this.deferStop=!0:this.active&&(Kh(this),this.onStop&&this.onStop(),this.active=!1)}}function Kh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}function e_(t,e){t.effect&&(t=t.effect.fn);const n=new oo(t);e&&(ze(n,e),e.scope&&Pm(n,e.scope)),(!e||!e.lazy)&&n.run();const s=n.run.bind(n);return s.effect=n,s}function t_(t){t.effect.stop()}let ls=!0;const Fm=[];function Gi(){Fm.push(ls),ls=!1}function Ki(){const t=Fm.pop();ls=t===void 0?!0:t}function Dt(t,e,n){if(ls&&Xt){let s=ya.get(t);s||ya.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Ju()),$m(i)}}function $m(t,e){let n=!1;ur<=$c?Nm(t)||(t.n|=ps,n=!Lm(t)):n=!t.has(Xt),n&&(t.add(Xt),Xt.deps.push(t))}function Ln(t,e,n,s,i,r){const o=ya.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Y(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Y(t)?Wu(n)&&a.push(o.get("length")):(a.push(o.get(Fs)),wi(t)&&a.push(o.get(Bc)));break;case"delete":Y(t)||(a.push(o.get(Fs)),wi(t)&&a.push(o.get(Bc)));break;case"set":wi(t)&&a.push(o.get(Fs));break}if(a.length===1)a[0]&&Uc(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Uc(Ju(l))}}function Uc(t,e){const n=Y(t)?t:[...t];for(const s of n)s.computed&&Wh(s);for(const s of n)s.computed||Wh(s)}function Wh(t,e){(t!==Xt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function n_(t,e){var n;return(n=ya.get(t))===null||n===void 0?void 0:n.get(e)}const s_=Ka("__proto__,__v_isRef,__isVue"),Bm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Dr)),i_=Qa(),r_=Qa(!1,!0),o_=Qa(!0),a_=Qa(!0,!0),Yh=l_();function l_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ye(this);for(let r=0,o=this.length;r<o;r++)Dt(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(ye)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Gi();const s=ye(this)[e].apply(this,n);return Ki(),s}}),t}function c_(t){const e=ye(this);return Dt(e,"has",t),e.hasOwnProperty(t)}function Qa(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?Gm:Hm:e?qm:zm).get(s))return s;const o=Y(s);if(!t){if(o&&Se(Yh,i))return Reflect.get(Yh,i,r);if(i==="hasOwnProperty")return c_}const a=Reflect.get(s,i,r);return(Dr(i)?Bm.has(i):s_(i))||(t||Dt(s,"get",i),e)?a:Ve(a)?o&&Wu(i)?a:a.value:De(a)?t?ed(a):si(a):a}}const u_=Um(),d_=Um(!0);function Um(t=!1){return function(n,s,i,r){let o=n[s];if(qs(o)&&Ve(o)&&!Ve(i))return!1;if(!t&&(!Pr(i)&&!qs(i)&&(o=ye(o),i=ye(i)),!Y(n)&&Ve(o)&&!Ve(i)))return o.value=i,!0;const a=Y(n)&&Wu(s)?Number(s)<n.length:Se(n,s),l=Reflect.set(n,s,i,r);return n===ye(r)&&(a?Ai(i,o)&&Ln(n,"set",s,i):Ln(n,"add",s,i)),l}}function h_(t,e){const n=Se(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Ln(t,"delete",e,void 0),s}function f_(t,e){const n=Reflect.has(t,e);return(!Dr(e)||!Bm.has(e))&&Dt(t,"has",e),n}function p_(t){return Dt(t,"iterate",Y(t)?"length":Fs),Reflect.ownKeys(t)}const Vm={get:i_,set:u_,deleteProperty:h_,has:f_,ownKeys:p_},jm={get:o_,set(t,e){return!0},deleteProperty(t,e){return!0}},m_=ze({},Vm,{get:r_,set:d_}),g_=ze({},jm,{get:a_}),Zu=t=>t,Xa=t=>Reflect.getPrototypeOf(t);function Fo(t,e,n=!1,s=!1){t=t.__v_raw;const i=ye(t),r=ye(e);n||(e!==r&&Dt(i,"get",e),Dt(i,"get",r));const{has:o}=Xa(i),a=s?Zu:n?nd:Mr;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function $o(t,e=!1){const n=this.__v_raw,s=ye(n),i=ye(t);return e||(t!==i&&Dt(s,"has",t),Dt(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Bo(t,e=!1){return t=t.__v_raw,!e&&Dt(ye(t),"iterate",Fs),Reflect.get(t,"size",t)}function Qh(t){t=ye(t);const e=ye(this);return Xa(e).has.call(e,t)||(e.add(t),Ln(e,"add",t,t)),this}function Xh(t,e){e=ye(e);const n=ye(this),{has:s,get:i}=Xa(n);let r=s.call(n,t);r||(t=ye(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Ai(e,o)&&Ln(n,"set",t,e):Ln(n,"add",t,e),this}function Jh(t){const e=ye(this),{has:n,get:s}=Xa(e);let i=n.call(e,t);i||(t=ye(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Ln(e,"delete",t,void 0),r}function Zh(){const t=ye(this),e=t.size!==0,n=t.clear();return e&&Ln(t,"clear",void 0,void 0),n}function Uo(t,e){return function(s,i){const r=this,o=r.__v_raw,a=ye(o),l=e?Zu:t?nd:Mr;return!t&&Dt(a,"iterate",Fs),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function Vo(t,e,n){return function(...s){const i=this.__v_raw,r=ye(i),o=wi(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?Zu:e?nd:Mr;return!e&&Dt(r,"iterate",l?Bc:Fs),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function Kn(t){return function(...e){return t==="delete"?!1:this}}function y_(){const t={get(r){return Fo(this,r)},get size(){return Bo(this)},has:$o,add:Qh,set:Xh,delete:Jh,clear:Zh,forEach:Uo(!1,!1)},e={get(r){return Fo(this,r,!1,!0)},get size(){return Bo(this)},has:$o,add:Qh,set:Xh,delete:Jh,clear:Zh,forEach:Uo(!1,!0)},n={get(r){return Fo(this,r,!0)},get size(){return Bo(this,!0)},has(r){return $o.call(this,r,!0)},add:Kn("add"),set:Kn("set"),delete:Kn("delete"),clear:Kn("clear"),forEach:Uo(!0,!1)},s={get(r){return Fo(this,r,!0,!0)},get size(){return Bo(this,!0)},has(r){return $o.call(this,r,!0)},add:Kn("add"),set:Kn("set"),delete:Kn("delete"),clear:Kn("clear"),forEach:Uo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Vo(r,!1,!1),n[r]=Vo(r,!0,!1),e[r]=Vo(r,!1,!0),s[r]=Vo(r,!0,!0)}),[t,n,e,s]}const[v_,b_,w_,__]=y_();function Ja(t,e){const n=e?t?__:w_:t?b_:v_;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(Se(n,i)&&i in s?n:s,i,r)}const T_={get:Ja(!1,!1)},S_={get:Ja(!1,!0)},E_={get:Ja(!0,!1)},I_={get:Ja(!0,!0)},zm=new WeakMap,qm=new WeakMap,Hm=new WeakMap,Gm=new WeakMap;function C_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function x_(t){return t.__v_skip||!Object.isExtensible(t)?0:C_(W0(t))}function si(t){return qs(t)?t:Za(t,!1,Vm,T_,zm)}function Km(t){return Za(t,!1,m_,S_,qm)}function ed(t){return Za(t,!0,jm,E_,Hm)}function A_(t){return Za(t,!0,g_,I_,Gm)}function Za(t,e,n,s,i){if(!De(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=x_(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function dn(t){return qs(t)?dn(t.__v_raw):!!(t&&t.__v_isReactive)}function qs(t){return!!(t&&t.__v_isReadonly)}function Pr(t){return!!(t&&t.__v_isShallow)}function td(t){return dn(t)||qs(t)}function ye(t){const e=t&&t.__v_raw;return e?ye(e):t}function Hs(t){return pa(t,"__v_skip",!0),t}const Mr=t=>De(t)?si(t):t,nd=t=>De(t)?ed(t):t;function sd(t){ls&&Xt&&(t=ye(t),$m(t.dep||(t.dep=Ju())))}function el(t,e){t=ye(t);const n=t.dep;n&&Uc(n)}function Ve(t){return!!(t&&t.__v_isRef===!0)}function Ee(t){return Ym(t,!1)}function Wm(t){return Ym(t,!0)}function Ym(t,e){return Ve(t)?t:new k_(t,e)}class k_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ye(e),this._value=n?e:Mr(e)}get value(){return sd(this),this._value}set value(e){const n=this.__v_isShallow||Pr(e)||qs(e);e=n?e:ye(e),Ai(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Mr(e),el(this))}}function R_(t){el(t)}function Oe(t){return Ve(t)?t.value:t}const O_={get:(t,e,n)=>Oe(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Ve(i)&&!Ve(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function id(t){return dn(t)?t:new Proxy(t,O_)}class D_{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:s}=e(()=>sd(this),()=>el(this));this._get=n,this._set=s}get value(){return this._get()}set value(e){this._set(e)}}function P_(t){return new D_(t)}function Qm(t){const e=Y(t)?new Array(t.length):{};for(const n in t)e[n]=rd(t,n);return e}class M_{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return n_(ye(this._object),this._key)}}function rd(t,e,n){const s=t[e];return Ve(s)?s:new M_(t,e,n)}var Xm;class L_{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Xm]=!1,this._dirty=!0,this.effect=new oo(e,()=>{this._dirty||(this._dirty=!0,el(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=ye(this);return sd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Xm="__v_isReadonly";function N_(t,e,n=!1){let s,i;const r=le(t);return r?(s=t,i=en):(s=t.get,i=t.set),new L_(s,i,r||!i,n)}function F_(t,...e){}function $_(t,e){}function On(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){ii(r,e,n)}return i}function Vt(t,e,n,s){if(le(t)){const r=On(t,e,n,s);return r&&Ku(r)&&r.catch(o=>{ii(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Vt(t[r],e,n,s));return i}function ii(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){On(l,null,10,[t,o,a]);return}}B_(t,n,i,s)}function B_(t,e,n,s=!0){console.error(t)}let Lr=!1,Vc=!1;const mt=[];let cn=0;const Ti=[];let In=null,ks=0;const Jm=Promise.resolve();let od=null;function jt(t){const e=od||Jm;return t?e.then(this?t.bind(this):t):e}function U_(t){let e=cn+1,n=mt.length;for(;e<n;){const s=e+n>>>1;Nr(mt[s])<t?e=s+1:n=s}return e}function tl(t){(!mt.length||!mt.includes(t,Lr&&t.allowRecurse?cn+1:cn))&&(t.id==null?mt.push(t):mt.splice(U_(t.id),0,t),Zm())}function Zm(){!Lr&&!Vc&&(Vc=!0,od=Jm.then(eg))}function V_(t){const e=mt.indexOf(t);e>cn&&mt.splice(e,1)}function ad(t){Y(t)?Ti.push(...t):(!In||!In.includes(t,t.allowRecurse?ks+1:ks))&&Ti.push(t),Zm()}function ef(t,e=Lr?cn+1:0){for(;e<mt.length;e++){const n=mt[e];n&&n.pre&&(mt.splice(e,1),e--,n())}}function va(t){if(Ti.length){const e=[...new Set(Ti)];if(Ti.length=0,In){In.push(...e);return}for(In=e,In.sort((n,s)=>Nr(n)-Nr(s)),ks=0;ks<In.length;ks++)In[ks]();In=null,ks=0}}const Nr=t=>t.id==null?1/0:t.id,j_=(t,e)=>{const n=Nr(t)-Nr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function eg(t){Vc=!1,Lr=!0,mt.sort(j_);const e=en;try{for(cn=0;cn<mt.length;cn++){const n=mt[cn];n&&n.active!==!1&&On(n,null,14)}}finally{cn=0,mt.length=0,va(),Lr=!1,od=null,(mt.length||Ti.length)&&eg()}}let pi,jo=[];function tg(t,e){var n,s;pi=t,pi?(pi.enabled=!0,jo.forEach(({event:i,args:r})=>pi.emit(i,...r)),jo=[]):typeof window<"u"&&window.HTMLElement&&!(!((s=(n=window.navigator)===null||n===void 0?void 0:n.userAgent)===null||s===void 0)&&s.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{tg(r,e)}),setTimeout(()=>{pi||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,jo=[])},3e3)):jo=[]}function z_(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Re;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=s[u]||Re;h&&(i=n.map(f=>$e(f)?f.trim():f)),d&&(i=n.map(ma))}let a,l=s[a=yr(e)]||s[a=yr(Rt(e))];!l&&r&&(l=s[a=yr(Kt(e))]),l&&Vt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Vt(c,t,6,i)}}function ng(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!le(t)){const l=c=>{const u=ng(c,e,!0);u&&(a=!0,ze(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(De(t)&&s.set(t,null),null):(Y(r)?r.forEach(l=>o[l]=null):ze(o,r),De(t)&&s.set(t,o),o)}function nl(t,e){return!t||!io(e)?!1:(e=e.slice(2).replace(/Once$/,""),Se(t,e[0].toLowerCase()+e.slice(1))||Se(t,Kt(e))||Se(t,e))}let ot=null,sl=null;function Fr(t){const e=ot;return ot=t,sl=t&&t.type.__scopeId||null,e}function q_(t){sl=t}function H_(){sl=null}const G_=t=>Me;function Me(t,e=ot,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Wc(-1);const r=Fr(e);let o;try{o=t(...i)}finally{Fr(r),s._d&&Wc(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function sa(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:h,setupState:f,ctx:g,inheritAttrs:y}=t;let _,m;const p=Fr(t);try{if(n.shapeFlag&4){const S=i||s;_=$t(u.call(S,S,d,r,f,h,g)),m=l}else{const S=e;_=$t(S.length>1?S(r,{attrs:l,slots:a,emit:c}):S(r,null)),m=e.props?l:W_(l)}}catch(S){wr.length=0,ii(S,t,1),_=se(yt)}let v=_;if(m&&y!==!1){const S=Object.keys(m),{shapeFlag:E}=v;S.length&&E&7&&(o&&S.some(Hu)&&(m=Y_(m,o)),v=nn(v,m))}return n.dirs&&(v=nn(v),v.dirs=v.dirs?v.dirs.concat(n.dirs):n.dirs),n.transition&&(v.transition=n.transition),_=v,Fr(p),_}function K_(t){let e;for(let n=0;n<t.length;n++){const s=t[n];if(ms(s)){if(s.type!==yt||s.children==="v-if"){if(e)return;e=s}}else return}return e}const W_=t=>{let e;for(const n in t)(n==="class"||n==="style"||io(n))&&((e||(e={}))[n]=t[n]);return e},Y_=(t,e)=>{const n={};for(const s in t)(!Hu(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Q_(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?tf(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==s[h]&&!nl(c,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?tf(s,o,c):!0:!!o;return!1}function tf(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!nl(n,r))return!0}return!1}function ld({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const sg=t=>t.__isSuspense,X_={name:"Suspense",__isSuspense:!0,process(t,e,n,s,i,r,o,a,l,c){t==null?Z_(e,n,s,i,r,o,a,l,c):eT(t,e,n,s,i,o,a,l,c)},hydrate:tT,create:cd,normalize:nT},J_=X_;function $r(t,e){const n=t.props&&t.props[e];le(n)&&n()}function Z_(t,e,n,s,i,r,o,a,l){const{p:c,o:{createElement:u}}=l,d=u("div"),h=t.suspense=cd(t,i,s,e,d,n,r,o,a,l);c(null,h.pendingBranch=t.ssContent,d,null,s,h,r,o),h.deps>0?($r(t,"onPending"),$r(t,"onFallback"),c(null,t.ssFallback,e,n,s,null,r,o),Si(h,t.ssFallback)):h.resolve()}function eT(t,e,n,s,i,r,o,a,{p:l,um:c,o:{createElement:u}}){const d=e.suspense=t.suspense;d.vnode=e,e.el=t.el;const h=e.ssContent,f=e.ssFallback,{activeBranch:g,pendingBranch:y,isInFallback:_,isHydrating:m}=d;if(y)d.pendingBranch=h,Jt(h,y)?(l(y,h,d.hiddenContainer,null,i,d,r,o,a),d.deps<=0?d.resolve():_&&(l(g,f,n,s,i,null,r,o,a),Si(d,f))):(d.pendingId++,m?(d.isHydrating=!1,d.activeBranch=y):c(y,i,d),d.deps=0,d.effects.length=0,d.hiddenContainer=u("div"),_?(l(null,h,d.hiddenContainer,null,i,d,r,o,a),d.deps<=0?d.resolve():(l(g,f,n,s,i,null,r,o,a),Si(d,f))):g&&Jt(h,g)?(l(g,h,n,s,i,d,r,o,a),d.resolve(!0)):(l(null,h,d.hiddenContainer,null,i,d,r,o,a),d.deps<=0&&d.resolve()));else if(g&&Jt(h,g))l(g,h,n,s,i,d,r,o,a),Si(d,h);else if($r(e,"onPending"),d.pendingBranch=h,d.pendingId++,l(null,h,d.hiddenContainer,null,i,d,r,o,a),d.deps<=0)d.resolve();else{const{timeout:p,pendingId:v}=d;p>0?setTimeout(()=>{d.pendingId===v&&d.fallback(f)},p):p===0&&d.fallback(f)}}function cd(t,e,n,s,i,r,o,a,l,c,u=!1){const{p:d,m:h,um:f,n:g,o:{parentNode:y,remove:_}}=c,m=t.props?ga(t.props.timeout):void 0,p={vnode:t,parent:e,parentComponent:n,isSVG:o,container:s,hiddenContainer:i,anchor:r,deps:0,pendingId:0,timeout:typeof m=="number"?m:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(v=!1){const{vnode:S,activeBranch:E,pendingBranch:I,pendingId:C,effects:T,parentComponent:A,container:$}=p;if(p.isHydrating)p.isHydrating=!1;else if(!v){const U=E&&I.transition&&I.transition.mode==="out-in";U&&(E.transition.afterLeave=()=>{C===p.pendingId&&h(I,$,F,0)});let{anchor:F}=p;E&&(F=g(E),f(E,A,p,!0)),U||h(I,$,F,0)}Si(p,I),p.pendingBranch=null,p.isInFallback=!1;let x=p.parent,k=!1;for(;x;){if(x.pendingBranch){x.effects.push(...T),k=!0;break}x=x.parent}k||ad(T),p.effects=[],$r(S,"onResolve")},fallback(v){if(!p.pendingBranch)return;const{vnode:S,activeBranch:E,parentComponent:I,container:C,isSVG:T}=p;$r(S,"onFallback");const A=g(E),$=()=>{p.isInFallback&&(d(null,v,C,A,I,null,T,a,l),Si(p,v))},x=v.transition&&v.transition.mode==="out-in";x&&(E.transition.afterLeave=$),p.isInFallback=!0,f(E,I,null,!0),x||$()},move(v,S,E){p.activeBranch&&h(p.activeBranch,v,S,E),p.container=v},next(){return p.activeBranch&&g(p.activeBranch)},registerDep(v,S){const E=!!p.pendingBranch;E&&p.deps++;const I=v.vnode.el;v.asyncDep.catch(C=>{ii(C,v,0)}).then(C=>{if(v.isUnmounted||p.isUnmounted||p.pendingId!==v.suspenseId)return;v.asyncResolved=!0;const{vnode:T}=v;Yc(v,C,!1),I&&(T.el=I);const A=!I&&v.subTree.el;S(v,T,y(I||v.subTree.el),I?null:g(v.subTree),p,o,l),A&&_(A),ld(v,T.el),E&&--p.deps===0&&p.resolve()})},unmount(v,S){p.isUnmounted=!0,p.activeBranch&&f(p.activeBranch,n,v,S),p.pendingBranch&&f(p.pendingBranch,n,v,S)}};return p}function tT(t,e,n,s,i,r,o,a,l){const c=e.suspense=cd(e,s,n,t.parentNode,document.createElement("div"),null,i,r,o,a,!0),u=l(t,c.pendingBranch=e.ssContent,n,c,r,o);return c.deps===0&&c.resolve(),u}function nT(t){const{shapeFlag:e,children:n}=t,s=e&32;t.ssContent=nf(s?n.default:n),t.ssFallback=s?nf(n.fallback):se(yt)}function nf(t){let e;if(le(t)){const n=Ws&&t._c;n&&(t._d=!1,ie()),t=t(),n&&(t._d=!0,e=kt,kg())}return Y(t)&&(t=K_(t)),t=$t(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function ig(t,e){e&&e.pendingBranch?Y(t)?e.effects.push(...t):e.effects.push(t):ad(t)}function Si(t,e){t.activeBranch=e;const{vnode:n,parentComponent:s}=t,i=n.el=e.el;s&&s.subTree===n&&(s.vnode.el=i,ld(s,i))}function Dn(t,e){if(je){let n=je.provides;const s=je.parent&&je.parent.provides;s===n&&(n=je.provides=Object.create(s)),n[t]=e}}function Ot(t,e,n=!1){const s=je||ot;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&le(e)?e.call(s.proxy):e}}function ao(t,e){return lo(t,null,e)}function rg(t,e){return lo(t,null,{flush:"post"})}function sT(t,e){return lo(t,null,{flush:"sync"})}const zo={};function hn(t,e,n){return lo(t,e,n)}function lo(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=Re){const a=Xu()===(je==null?void 0:je.scope)?je:null;let l,c=!1,u=!1;if(Ve(t)?(l=()=>t.value,c=Pr(t)):dn(t)?(l=()=>t,s=!0):Y(t)?(u=!0,c=t.some(v=>dn(v)||Pr(v)),l=()=>t.map(v=>{if(Ve(v))return v.value;if(dn(v))return Os(v);if(le(v))return On(v,a,2)})):le(t)?e?l=()=>On(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return d&&d(),Vt(t,a,3,[h])}:l=en,e&&s){const v=l;l=()=>Os(v())}let d,h=v=>{d=m.onStop=()=>{On(v,a,4)}},f;if(Ri)if(h=en,e?n&&Vt(e,a,3,[l(),u?[]:void 0,h]):l(),i==="sync"){const v=Vg();f=v.__watcherHandles||(v.__watcherHandles=[])}else return en;let g=u?new Array(t.length).fill(zo):zo;const y=()=>{if(m.active)if(e){const v=m.run();(s||c||(u?v.some((S,E)=>Ai(S,g[E])):Ai(v,g)))&&(d&&d(),Vt(e,a,3,[v,g===zo?void 0:u&&g[0]===zo?[]:g,h]),g=v)}else m.run()};y.allowRecurse=!!e;let _;i==="sync"?_=y:i==="post"?_=()=>st(y,a&&a.suspense):(y.pre=!0,a&&(y.id=a.uid),_=()=>tl(y));const m=new oo(l,_);e?n?y():g=m.run():i==="post"?st(m.run.bind(m),a&&a.suspense):m.run();const p=()=>{m.stop(),a&&a.scope&&Gu(a.scope.effects,m)};return f&&f.push(p),p}function iT(t,e,n){const s=this.proxy,i=$e(t)?t.includes(".")?og(s,t):()=>s[t]:t.bind(s,s);let r;le(e)?r=e:(r=e.handler,n=e);const o=je;gs(this);const a=lo(i,r.bind(s),n);return o?gs(o):cs(),a}function og(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Os(t,e){if(!De(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ve(t))Os(t.value,e);else if(Y(t))for(let n=0;n<t.length;n++)Os(t[n],e);else if(ni(t)||wi(t))t.forEach(n=>{Os(n,e)});else if(Dm(t))for(const n in t)Os(t[n],e);return t}function ud(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return tn(()=>{t.isMounted=!0}),Yi(()=>{t.isUnmounting=!0}),t}const Gt=[Function,Array],rT={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Gt,onEnter:Gt,onAfterEnter:Gt,onEnterCancelled:Gt,onBeforeLeave:Gt,onLeave:Gt,onAfterLeave:Gt,onLeaveCancelled:Gt,onBeforeAppear:Gt,onAppear:Gt,onAfterAppear:Gt,onAppearCancelled:Gt},setup(t,{slots:e}){const n=Hn(),s=ud();let i;return()=>{const r=e.default&&il(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const y of r)if(y.type!==yt){o=y;break}}const a=ye(t),{mode:l}=a;if(s.isLeaving)return Zl(o);const c=sf(o);if(!c)return Zl(o);const u=ki(c,a,s,n);Gs(c,u);const d=n.subTree,h=d&&sf(d);let f=!1;const{getTransitionKey:g}=c.type;if(g){const y=g();i===void 0?i=y:y!==i&&(i=y,f=!0)}if(h&&h.type!==yt&&(!Jt(c,h)||f)){const y=ki(h,a,s,n);if(Gs(h,y),l==="out-in")return s.isLeaving=!0,y.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Zl(o);l==="in-out"&&c.type!==yt&&(y.delayLeave=(_,m,p)=>{const v=ag(s,h);v[String(h.key)]=h,_._leaveCb=()=>{m(),_._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=p})}return o}}},dd=rT;function ag(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function ki(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:d,onLeave:h,onAfterLeave:f,onLeaveCancelled:g,onBeforeAppear:y,onAppear:_,onAfterAppear:m,onAppearCancelled:p}=e,v=String(t.key),S=ag(n,t),E=(T,A)=>{T&&Vt(T,s,9,A)},I=(T,A)=>{const $=A[1];E(T,A),Y(T)?T.every(x=>x.length<=1)&&$():T.length<=1&&$()},C={mode:r,persisted:o,beforeEnter(T){let A=a;if(!n.isMounted)if(i)A=y||a;else return;T._leaveCb&&T._leaveCb(!0);const $=S[v];$&&Jt(t,$)&&$.el._leaveCb&&$.el._leaveCb(),E(A,[T])},enter(T){let A=l,$=c,x=u;if(!n.isMounted)if(i)A=_||l,$=m||c,x=p||u;else return;let k=!1;const U=T._enterCb=F=>{k||(k=!0,F?E(x,[T]):E($,[T]),C.delayedLeave&&C.delayedLeave(),T._enterCb=void 0)};A?I(A,[T,U]):U()},leave(T,A){const $=String(t.key);if(T._enterCb&&T._enterCb(!0),n.isUnmounting)return A();E(d,[T]);let x=!1;const k=T._leaveCb=U=>{x||(x=!0,A(),U?E(g,[T]):E(f,[T]),T._leaveCb=void 0,S[$]===t&&delete S[$])};S[$]=t,h?I(h,[T,k]):k()},clone(T){return ki(T,e,n,s)}};return C}function Zl(t){if(co(t))return t=nn(t),t.children=null,t}function sf(t){return co(t)?t.children?t.children[0]:void 0:t}function Gs(t,e){t.shapeFlag&6&&t.component?Gs(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function il(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Ue?(o.patchFlag&128&&i++,s=s.concat(il(o.children,e,a))):(e||o.type!==yt)&&s.push(a!=null?nn(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function zn(t){return le(t)?{setup:t,name:t.name}:t}const $s=t=>!!t.type.__asyncLoader;function oT(t){le(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:s,delay:i=200,timeout:r,suspensible:o=!0,onError:a}=t;let l=null,c,u=0;const d=()=>(u++,l=null,h()),h=()=>{let f;return l||(f=l=e().catch(g=>{if(g=g instanceof Error?g:new Error(String(g)),a)return new Promise((y,_)=>{a(g,()=>y(d()),()=>_(g),u+1)});throw g}).then(g=>f!==l&&l?l:(g&&(g.__esModule||g[Symbol.toStringTag]==="Module")&&(g=g.default),c=g,g)))};return zn({name:"AsyncComponentWrapper",__asyncLoader:h,get __asyncResolved(){return c},setup(){const f=je;if(c)return()=>ec(c,f);const g=p=>{l=null,ii(p,f,13,!s)};if(o&&f.suspense||Ri)return h().then(p=>()=>ec(p,f)).catch(p=>(g(p),()=>s?se(s,{error:p}):null));const y=Ee(!1),_=Ee(),m=Ee(!!i);return i&&setTimeout(()=>{m.value=!1},i),r!=null&&setTimeout(()=>{if(!y.value&&!_.value){const p=new Error(`Async component timed out after ${r}ms.`);g(p),_.value=p}},r),h().then(()=>{y.value=!0,f.parent&&co(f.parent.vnode)&&tl(f.parent.update)}).catch(p=>{g(p),_.value=p}),()=>{if(y.value&&c)return ec(c,f);if(_.value&&s)return se(s,{error:_.value});if(n&&!m.value)return se(n)}}})}function ec(t,e){const{ref:n,props:s,children:i,ce:r}=e.vnode,o=se(t,s,i);return o.ref=n,o.ce=r,delete e.vnode.ce,o}const co=t=>t.type.__isKeepAlive,aT={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Hn(),s=n.ctx;if(!s.renderer)return()=>{const p=e.default&&e.default();return p&&p.length===1?p[0]:p};const i=new Map,r=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:d}}}=s,h=d("div");s.activate=(p,v,S,E,I)=>{const C=p.component;c(p,v,S,0,a),l(C.vnode,p,v,S,C,a,E,p.slotScopeIds,I),st(()=>{C.isDeactivated=!1,C.a&&_i(C.a);const T=p.props&&p.props.onVnodeMounted;T&&Ct(T,C.parent,p)},a)},s.deactivate=p=>{const v=p.component;c(p,h,null,1,a),st(()=>{v.da&&_i(v.da);const S=p.props&&p.props.onVnodeUnmounted;S&&Ct(S,v.parent,p),v.isDeactivated=!0},a)};function f(p){tc(p),u(p,n,a,!0)}function g(p){i.forEach((v,S)=>{const E=Xc(v.type);E&&(!p||!p(E))&&y(S)})}function y(p){const v=i.get(p);!o||!Jt(v,o)?f(v):o&&tc(o),i.delete(p),r.delete(p)}hn(()=>[t.include,t.exclude],([p,v])=>{p&&g(S=>dr(p,S)),v&&g(S=>!dr(v,S))},{flush:"post",deep:!0});let _=null;const m=()=>{_!=null&&i.set(_,nc(n.subTree))};return tn(m),Wi(m),Yi(()=>{i.forEach(p=>{const{subTree:v,suspense:S}=n,E=nc(v);if(p.type===E.type&&p.key===E.key){tc(E);const I=E.component.da;I&&st(I,S);return}f(p)})}),()=>{if(_=null,!e.default)return null;const p=e.default(),v=p[0];if(p.length>1)return o=null,p;if(!ms(v)||!(v.shapeFlag&4)&&!(v.shapeFlag&128))return o=null,v;let S=nc(v);const E=S.type,I=Xc($s(S)?S.type.__asyncResolved||{}:E),{include:C,exclude:T,max:A}=t;if(C&&(!I||!dr(C,I))||T&&I&&dr(T,I))return o=S,v;const $=S.key==null?E:S.key,x=i.get($);return S.el&&(S=nn(S),v.shapeFlag&128&&(v.ssContent=S)),_=$,x?(S.el=x.el,S.component=x.component,S.transition&&Gs(S,S.transition),S.shapeFlag|=512,r.delete($),r.add($)):(r.add($),A&&r.size>parseInt(A,10)&&y(r.values().next().value)),S.shapeFlag|=256,o=S,sg(v.type)?v:S}}},lT=aT;function dr(t,e){return Y(t)?t.some(n=>dr(n,e)):$e(t)?t.split(",").includes(e):K0(t)?t.test(e):!1}function lg(t,e){ug(t,"a",e)}function cg(t,e){ug(t,"da",e)}function ug(t,e,n=je){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(rl(e,s,n),n){let i=n.parent;for(;i&&i.parent;)co(i.parent.vnode)&&cT(s,e,n,i),i=i.parent}}function cT(t,e,n,s){const i=rl(e,t,s,!0);uo(()=>{Gu(s[e],i)},n)}function tc(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function nc(t){return t.shapeFlag&128?t.ssContent:t}function rl(t,e,n=je,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Gi(),gs(n);const a=Vt(e,n,t,o);return cs(),Ki(),a});return s?i.unshift(r):i.push(r),r}}const qn=t=>(e,n=je)=>(!Ri||t==="sp")&&rl(t,(...s)=>e(...s),n),dg=qn("bm"),tn=qn("m"),hd=qn("bu"),Wi=qn("u"),Yi=qn("bum"),uo=qn("um"),hg=qn("sp"),fg=qn("rtg"),pg=qn("rtc");function mg(t,e=je){rl("ec",t,e)}function uT(t,e){const n=ot;if(n===null)return t;const s=al(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=Re]=e[r];o&&(le(o)&&(o={mounted:o,updated:o}),o.deep&&Os(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function ln(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(Gi(),Vt(l,n,8,[t.el,a,t,e]),Ki())}}const fd="components",dT="directives";function ht(t,e){return pd(fd,t,!0,e)||t}const gg=Symbol();function hT(t){return $e(t)?pd(fd,t,!1)||t:t||gg}function fT(t){return pd(dT,t)}function pd(t,e,n=!0,s=!1){const i=ot||je;if(i){const r=i.type;if(t===fd){const a=Xc(r,!1);if(a&&(a===e||a===Rt(e)||a===ro(Rt(e))))return r}const o=rf(i[t]||r[t],e)||rf(i.appContext[t],e);return!o&&s?r:o}}function rf(t,e){return t&&(t[e]||t[Rt(e)]||t[ro(Rt(e))])}function Qi(t,e,n,s){let i;const r=n&&n[s];if(Y(t)||$e(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(De(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}function pT(t,e){for(let n=0;n<e.length;n++){const s=e[n];if(Y(s))for(let i=0;i<s.length;i++)t[s[i].name]=s[i].fn;else s&&(t[s.name]=s.key?(...i)=>{const r=s.fn(...i);return r&&(r.key=s.key),r}:s.fn)}return t}function mT(t,e,n={},s,i){if(ot.isCE||ot.parent&&$s(ot.parent)&&ot.parent.isCE)return e!=="default"&&(n.name=e),se("slot",n,s&&s());let r=t[e];r&&r._c&&(r._d=!1),ie();const o=r&&yg(r(n)),a=Zt(Ue,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function yg(t){return t.some(e=>ms(e)?!(e.type===yt||e.type===Ue&&!yg(e.children)):!0)?t:null}function gT(t,e){const n={};for(const s in t)n[e&&/[A-Z]/.test(s)?`on:${s}`:yr(s)]=t[s];return n}const jc=t=>t?Lg(t)?al(t)||t.proxy:jc(t.parent):null,vr=ze(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>jc(t.parent),$root:t=>jc(t.root),$emit:t=>t.emit,$options:t=>md(t),$forceUpdate:t=>t.f||(t.f=()=>tl(t.update)),$nextTick:t=>t.n||(t.n=jt.bind(t.proxy)),$watch:t=>iT.bind(t)}),sc=(t,e)=>t!==Re&&!t.__isScriptSetup&&Se(t,e),zc={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(sc(s,e))return o[e]=1,s[e];if(i!==Re&&Se(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&Se(c,e))return o[e]=3,r[e];if(n!==Re&&Se(n,e))return o[e]=4,n[e];qc&&(o[e]=0)}}const u=vr[e];let d,h;if(u)return e==="$attrs"&&Dt(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==Re&&Se(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,Se(h,e))return h[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return sc(i,e)?(i[e]=n,!0):s!==Re&&Se(s,e)?(s[e]=n,!0):Se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Re&&Se(t,o)||sc(e,o)||(a=r[0])&&Se(a,o)||Se(s,o)||Se(vr,o)||Se(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},yT=ze({},zc,{get(t,e){if(e!==Symbol.unscopables)return zc.get(t,e,t)},has(t,e){return e[0]!=="_"&&!L0(e)}});let qc=!0;function vT(t){const e=md(t),n=t.proxy,s=t.ctx;qc=!1,e.beforeCreate&&of(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:h,beforeUpdate:f,updated:g,activated:y,deactivated:_,beforeDestroy:m,beforeUnmount:p,destroyed:v,unmounted:S,render:E,renderTracked:I,renderTriggered:C,errorCaptured:T,serverPrefetch:A,expose:$,inheritAttrs:x,components:k,directives:U,filters:F}=e;if(c&&bT(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const me in o){const de=o[me];le(de)&&(s[me]=de.bind(n))}if(i){const me=i.call(n,n);De(me)&&(t.data=si(me))}if(qc=!0,r)for(const me in r){const de=r[me],Ge=le(de)?de.bind(n,n):le(de.get)?de.get.bind(n,n):en,Pt=!le(de)&&le(de.set)?de.set.bind(n):en,It=Ae({get:Ge,set:Pt});Object.defineProperty(s,me,{enumerable:!0,configurable:!0,get:()=>It.value,set:ct=>It.value=ct})}if(a)for(const me in a)vg(a[me],s,n,me);if(l){const me=le(l)?l.call(n):l;Reflect.ownKeys(me).forEach(de=>{Dn(de,me[de])})}u&&of(u,t,"c");function W(me,de){Y(de)?de.forEach(Ge=>me(Ge.bind(n))):de&&me(de.bind(n))}if(W(dg,d),W(tn,h),W(hd,f),W(Wi,g),W(lg,y),W(cg,_),W(mg,T),W(pg,I),W(fg,C),W(Yi,p),W(uo,S),W(hg,A),Y($))if($.length){const me=t.exposed||(t.exposed={});$.forEach(de=>{Object.defineProperty(me,de,{get:()=>n[de],set:Ge=>n[de]=Ge})})}else t.exposed||(t.exposed={});E&&t.render===en&&(t.render=E),x!=null&&(t.inheritAttrs=x),k&&(t.components=k),U&&(t.directives=U)}function bT(t,e,n=en,s=!1){Y(t)&&(t=Hc(t));for(const i in t){const r=t[i];let o;De(r)?"default"in r?o=Ot(r.from||i,r.default,!0):o=Ot(r.from||i):o=Ot(r),Ve(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function of(t,e,n){Vt(Y(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function vg(t,e,n,s){const i=s.includes(".")?og(n,s):()=>n[s];if($e(t)){const r=e[t];le(r)&&hn(i,r)}else if(le(t))hn(i,t.bind(n));else if(De(t))if(Y(t))t.forEach(r=>vg(r,e,n,s));else{const r=le(t.handler)?t.handler.bind(n):e[t.handler];le(r)&&hn(i,r,t)}}function md(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>ba(l,c,o,!0)),ba(l,e,o)),De(e)&&r.set(e,l),l}function ba(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&ba(t,r,n,!0),i&&i.forEach(o=>ba(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=wT[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const wT={data:af,props:xs,emits:xs,methods:xs,computed:xs,beforeCreate:Tt,created:Tt,beforeMount:Tt,mounted:Tt,beforeUpdate:Tt,updated:Tt,beforeDestroy:Tt,beforeUnmount:Tt,destroyed:Tt,unmounted:Tt,activated:Tt,deactivated:Tt,errorCaptured:Tt,serverPrefetch:Tt,components:xs,directives:xs,watch:TT,provide:af,inject:_T};function af(t,e){return e?t?function(){return ze(le(t)?t.call(this,this):t,le(e)?e.call(this,this):e)}:e:t}function _T(t,e){return xs(Hc(t),Hc(e))}function Hc(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Tt(t,e){return t?[...new Set([].concat(t,e))]:e}function xs(t,e){return t?ze(ze(Object.create(null),t),e):e}function TT(t,e){if(!t)return e;if(!e)return t;const n=ze(Object.create(null),t);for(const s in e)n[s]=Tt(t[s],e[s]);return n}function ST(t,e,n,s=!1){const i={},r={};pa(r,ol,1),t.propsDefaults=Object.create(null),bg(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Km(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function ET(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=ye(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(nl(t.emitsOptions,h))continue;const f=e[h];if(l)if(Se(r,h))f!==r[h]&&(r[h]=f,c=!0);else{const g=Rt(h);i[g]=Gc(l,a,g,f,t,!1)}else f!==r[h]&&(r[h]=f,c=!0)}}}else{bg(t,e,i,r)&&(c=!0);let u;for(const d in a)(!e||!Se(e,d)&&((u=Kt(d))===d||!Se(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=Gc(l,a,d,void 0,t,!0)):delete i[d]);if(r!==a)for(const d in r)(!e||!Se(e,d))&&(delete r[d],c=!0)}c&&Ln(t,"set","$attrs")}function bg(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(gr(l))continue;const c=e[l];let u;i&&Se(i,u=Rt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:nl(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=ye(n),c=a||Re;for(let u=0;u<r.length;u++){const d=r[u];n[d]=Gc(i,l,d,c[d],t,!Se(c,d))}}return o}function Gc(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=Se(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&le(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(gs(i),s=c[n]=l.call(null,e),cs())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Kt(n))&&(s=!0))}return s}function wg(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!le(t)){const u=d=>{l=!0;const[h,f]=wg(d,e,!0);ze(o,h),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return De(t)&&s.set(t,bi),bi;if(Y(r))for(let u=0;u<r.length;u++){const d=Rt(r[u]);lf(d)&&(o[d]=Re)}else if(r)for(const u in r){const d=Rt(u);if(lf(d)){const h=r[u],f=o[d]=Y(h)||le(h)?{type:h}:Object.assign({},h);if(f){const g=df(Boolean,f.type),y=df(String,f.type);f[0]=g>-1,f[1]=y<0||g<y,(g>-1||Se(f,"default"))&&a.push(d)}}}const c=[o,a];return De(t)&&s.set(t,c),c}function lf(t){return t[0]!=="$"}function cf(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function uf(t,e){return cf(t)===cf(e)}function df(t,e){return Y(e)?e.findIndex(n=>uf(n,t)):le(e)&&uf(e,t)?0:-1}const _g=t=>t[0]==="_"||t==="$stable",gd=t=>Y(t)?t.map($t):[$t(t)],IT=(t,e,n)=>{if(e._n)return e;const s=Me((...i)=>gd(e(...i)),n);return s._c=!1,s},Tg=(t,e,n)=>{const s=t._ctx;for(const i in t){if(_g(i))continue;const r=t[i];if(le(r))e[i]=IT(i,r,s);else if(r!=null){const o=gd(r);e[i]=()=>o}}},Sg=(t,e)=>{const n=gd(e);t.slots.default=()=>n},CT=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ye(e),pa(e,"_",n)):Tg(e,t.slots={})}else t.slots={},e&&Sg(t,e);pa(t.slots,ol,1)},xT=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Re;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(ze(i,e),!n&&a===1&&delete i._):(r=!e.$stable,Tg(e,i)),o=e}else e&&(Sg(t,e),o={default:1});if(r)for(const a in i)!_g(a)&&!(a in o)&&delete i[a]};function Eg(){return{app:null,config:{isNativeTag:q0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let AT=0;function kT(t,e){return function(s,i=null){le(s)||(s=Object.assign({},s)),i!=null&&!De(i)&&(i=null);const r=Eg(),o=new Set;let a=!1;const l=r.app={_uid:AT++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:zg,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&le(c.install)?(o.add(c),c.install(l,...u)):le(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,d){if(!a){const h=se(s,i);return h.appContext=r,u&&e?e(h,c):t(h,c,d),a=!0,l._container=c,c.__vue_app__=l,al(h.component)||h.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function wa(t,e,n,s,i=!1){if(Y(t)){t.forEach((h,f)=>wa(h,e&&(Y(e)?e[f]:e),n,s,i));return}if($s(s)&&!i)return;const r=s.shapeFlag&4?al(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Re?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&($e(c)?(u[c]=null,Se(d,c)&&(d[c]=null)):Ve(c)&&(c.value=null)),le(l))On(l,a,12,[o,u]);else{const h=$e(l),f=Ve(l);if(h||f){const g=()=>{if(t.f){const y=h?Se(d,l)?d[l]:u[l]:l.value;i?Y(y)&&Gu(y,r):Y(y)?y.includes(r)||y.push(r):h?(u[l]=[r],Se(d,l)&&(d[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else h?(u[l]=o,Se(d,l)&&(d[l]=o)):f&&(l.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,st(g,n)):g()}}}let Wn=!1;const qo=t=>/svg/.test(t.namespaceURI)&&t.tagName!=="foreignObject",Ho=t=>t.nodeType===8;function RT(t){const{mt:e,p:n,o:{patchProp:s,createText:i,nextSibling:r,parentNode:o,remove:a,insert:l,createComment:c}}=t,u=(m,p)=>{if(!p.hasChildNodes()){n(null,m,p),va(),p._vnode=m;return}Wn=!1,d(p.firstChild,m,null,null,null),va(),p._vnode=m,Wn&&console.error("Hydration completed but contains mismatches.")},d=(m,p,v,S,E,I=!1)=>{const C=Ho(m)&&m.data==="[",T=()=>y(m,p,v,S,E,C),{type:A,ref:$,shapeFlag:x,patchFlag:k}=p;let U=m.nodeType;p.el=m,k===-2&&(I=!1,p.dynamicChildren=null);let F=null;switch(A){case Ks:U!==3?p.children===""?(l(p.el=i(""),o(m),m),F=m):F=T():(m.data!==p.children&&(Wn=!0,m.data=p.children),F=r(m));break;case yt:U!==8||C?F=T():F=r(m);break;case Bs:if(C&&(m=r(m),U=m.nodeType),U===1||U===3){F=m;const we=!p.children.length;for(let W=0;W<p.staticCount;W++)we&&(p.children+=F.nodeType===1?F.outerHTML:F.data),W===p.staticCount-1&&(p.anchor=F),F=r(F);return C?r(F):F}else T();break;case Ue:C?F=g(m,p,v,S,E,I):F=T();break;default:if(x&1)U!==1||p.type.toLowerCase()!==m.tagName.toLowerCase()?F=T():F=h(m,p,v,S,E,I);else if(x&6){p.slotScopeIds=E;const we=o(m);if(e(p,we,null,v,S,qo(we),I),F=C?_(m):r(m),F&&Ho(F)&&F.data==="teleport end"&&(F=r(F)),$s(p)){let W;C?(W=se(Ue),W.anchor=F?F.previousSibling:we.lastChild):W=m.nodeType===3?Nt(""):se("div"),W.el=m,p.component.subTree=W}}else x&64?U!==8?F=T():F=p.type.hydrate(m,p,v,S,E,I,t,f):x&128&&(F=p.type.hydrate(m,p,v,S,qo(o(m)),E,I,t,d))}return $!=null&&wa($,null,S,p),F},h=(m,p,v,S,E,I)=>{I=I||!!p.dynamicChildren;const{type:C,props:T,patchFlag:A,shapeFlag:$,dirs:x}=p,k=C==="input"&&x||C==="option";if(k||A!==-1){if(x&&ln(p,null,v,"created"),T)if(k||!I||A&48)for(const F in T)(k&&F.endsWith("value")||io(F)&&!gr(F))&&s(m,F,null,T[F],!1,void 0,v);else T.onClick&&s(m,"onClick",null,T.onClick,!1,void 0,v);let U;if((U=T&&T.onVnodeBeforeMount)&&Ct(U,v,p),x&&ln(p,null,v,"beforeMount"),((U=T&&T.onVnodeMounted)||x)&&ig(()=>{U&&Ct(U,v,p),x&&ln(p,null,v,"mounted")},S),$&16&&!(T&&(T.innerHTML||T.textContent))){let F=f(m.firstChild,p,m,v,S,E,I);for(;F;){Wn=!0;const we=F;F=F.nextSibling,a(we)}}else $&8&&m.textContent!==p.children&&(Wn=!0,m.textContent=p.children)}return m.nextSibling},f=(m,p,v,S,E,I,C)=>{C=C||!!p.dynamicChildren;const T=p.children,A=T.length;for(let $=0;$<A;$++){const x=C?T[$]:T[$]=$t(T[$]);if(m)m=d(m,x,S,E,I,C);else{if(x.type===Ks&&!x.children)continue;Wn=!0,n(null,x,v,null,S,E,qo(v),I)}}return m},g=(m,p,v,S,E,I)=>{const{slotScopeIds:C}=p;C&&(E=E?E.concat(C):C);const T=o(m),A=f(r(m),p,T,v,S,E,I);return A&&Ho(A)&&A.data==="]"?r(p.anchor=A):(Wn=!0,l(p.anchor=c("]"),T,A),A)},y=(m,p,v,S,E,I)=>{if(Wn=!0,p.el=null,I){const A=_(m);for(;;){const $=r(m);if($&&$!==A)a($);else break}}const C=r(m),T=o(m);return a(m),n(null,p,T,C,v,S,qo(T),E),C},_=m=>{let p=0;for(;m;)if(m=r(m),m&&Ho(m)&&(m.data==="["&&p++,m.data==="]")){if(p===0)return r(m);p--}return m};return[u,d]}const st=ig;function Ig(t){return xg(t)}function Cg(t){return xg(t,RT)}function xg(t,e){const n=X0();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:h,setScopeId:f=en,insertStaticContent:g}=t,y=(b,w,R,O=null,M=null,V=null,H=!1,B=null,j=!!w.dynamicChildren)=>{if(b===w)return;b&&!Jt(b,w)&&(O=q(b),ct(b,M,V,!0),b=null),w.patchFlag===-2&&(j=!1,w.dynamicChildren=null);const{type:L,ref:te,shapeFlag:Q}=w;switch(L){case Ks:_(b,w,R,O);break;case yt:m(b,w,R,O);break;case Bs:b==null&&p(w,R,O,H);break;case Ue:k(b,w,R,O,M,V,H,B,j);break;default:Q&1?E(b,w,R,O,M,V,H,B,j):Q&6?U(b,w,R,O,M,V,H,B,j):(Q&64||Q&128)&&L.process(b,w,R,O,M,V,H,B,j,Te)}te!=null&&M&&wa(te,b&&b.ref,V,w||b,!w)},_=(b,w,R,O)=>{if(b==null)s(w.el=a(w.children),R,O);else{const M=w.el=b.el;w.children!==b.children&&c(M,w.children)}},m=(b,w,R,O)=>{b==null?s(w.el=l(w.children||""),R,O):w.el=b.el},p=(b,w,R,O)=>{[b.el,b.anchor]=g(b.children,w,R,O,b.el,b.anchor)},v=({el:b,anchor:w},R,O)=>{let M;for(;b&&b!==w;)M=h(b),s(b,R,O),b=M;s(w,R,O)},S=({el:b,anchor:w})=>{let R;for(;b&&b!==w;)R=h(b),i(b),b=R;i(w)},E=(b,w,R,O,M,V,H,B,j)=>{H=H||w.type==="svg",b==null?I(w,R,O,M,V,H,B,j):A(b,w,M,V,H,B,j)},I=(b,w,R,O,M,V,H,B)=>{let j,L;const{type:te,props:Q,shapeFlag:ne,transition:ue,dirs:ve}=b;if(j=b.el=o(b.type,V,Q&&Q.is,Q),ne&8?u(j,b.children):ne&16&&T(b.children,j,null,O,M,V&&te!=="foreignObject",H,B),ve&&ln(b,null,O,"created"),C(j,b,b.scopeId,H,O),Q){for(const ke in Q)ke!=="value"&&!gr(ke)&&r(j,ke,null,Q[ke],V,b.children,O,M,G);"value"in Q&&r(j,"value",null,Q.value),(L=Q.onVnodeBeforeMount)&&Ct(L,O,b)}ve&&ln(b,null,O,"beforeMount");const Pe=(!M||M&&!M.pendingBranch)&&ue&&!ue.persisted;Pe&&ue.beforeEnter(j),s(j,w,R),((L=Q&&Q.onVnodeMounted)||Pe||ve)&&st(()=>{L&&Ct(L,O,b),Pe&&ue.enter(j),ve&&ln(b,null,O,"mounted")},M)},C=(b,w,R,O,M)=>{if(R&&f(b,R),O)for(let V=0;V<O.length;V++)f(b,O[V]);if(M){let V=M.subTree;if(w===V){const H=M.vnode;C(b,H,H.scopeId,H.slotScopeIds,M.parent)}}},T=(b,w,R,O,M,V,H,B,j=0)=>{for(let L=j;L<b.length;L++){const te=b[L]=B?Zn(b[L]):$t(b[L]);y(null,te,w,R,O,M,V,H,B)}},A=(b,w,R,O,M,V,H)=>{const B=w.el=b.el;let{patchFlag:j,dynamicChildren:L,dirs:te}=w;j|=b.patchFlag&16;const Q=b.props||Re,ne=w.props||Re;let ue;R&&Is(R,!1),(ue=ne.onVnodeBeforeUpdate)&&Ct(ue,R,w,b),te&&ln(w,b,R,"beforeUpdate"),R&&Is(R,!0);const ve=M&&w.type!=="foreignObject";if(L?$(b.dynamicChildren,L,B,R,O,ve,V):H||de(b,w,B,null,R,O,ve,V,!1),j>0){if(j&16)x(B,w,Q,ne,R,O,M);else if(j&2&&Q.class!==ne.class&&r(B,"class",null,ne.class,M),j&4&&r(B,"style",Q.style,ne.style,M),j&8){const Pe=w.dynamicProps;for(let ke=0;ke<Pe.length;ke++){const Ke=Pe[ke],Qt=Q[Ke],di=ne[Ke];(di!==Qt||Ke==="value")&&r(B,Ke,Qt,di,M,b.children,R,O,G)}}j&1&&b.children!==w.children&&u(B,w.children)}else!H&&L==null&&x(B,w,Q,ne,R,O,M);((ue=ne.onVnodeUpdated)||te)&&st(()=>{ue&&Ct(ue,R,w,b),te&&ln(w,b,R,"updated")},O)},$=(b,w,R,O,M,V,H)=>{for(let B=0;B<w.length;B++){const j=b[B],L=w[B],te=j.el&&(j.type===Ue||!Jt(j,L)||j.shapeFlag&70)?d(j.el):R;y(j,L,te,null,O,M,V,H,!0)}},x=(b,w,R,O,M,V,H)=>{if(R!==O){if(R!==Re)for(const B in R)!gr(B)&&!(B in O)&&r(b,B,R[B],null,H,w.children,M,V,G);for(const B in O){if(gr(B))continue;const j=O[B],L=R[B];j!==L&&B!=="value"&&r(b,B,L,j,H,w.children,M,V,G)}"value"in O&&r(b,"value",R.value,O.value)}},k=(b,w,R,O,M,V,H,B,j)=>{const L=w.el=b?b.el:a(""),te=w.anchor=b?b.anchor:a("");let{patchFlag:Q,dynamicChildren:ne,slotScopeIds:ue}=w;ue&&(B=B?B.concat(ue):ue),b==null?(s(L,R,O),s(te,R,O),T(w.children,R,te,M,V,H,B,j)):Q>0&&Q&64&&ne&&b.dynamicChildren?($(b.dynamicChildren,ne,R,M,V,H,B),(w.key!=null||M&&w===M.subTree)&&yd(b,w,!0)):de(b,w,R,te,M,V,H,B,j)},U=(b,w,R,O,M,V,H,B,j)=>{w.slotScopeIds=B,b==null?w.shapeFlag&512?M.ctx.activate(w,R,O,H,j):F(w,R,O,M,V,H,j):we(b,w,j)},F=(b,w,R,O,M,V,H)=>{const B=b.component=Mg(b,O,M);if(co(b)&&(B.ctx.renderer=Te),Ng(B),B.asyncDep){if(M&&M.registerDep(B,W),!b.el){const j=B.subTree=se(yt);m(null,j,w,R)}return}W(B,b,w,R,M,V,H)},we=(b,w,R)=>{const O=w.component=b.component;if(Q_(b,w,R))if(O.asyncDep&&!O.asyncResolved){me(O,w,R);return}else O.next=w,V_(O.update),O.update();else w.el=b.el,O.vnode=w},W=(b,w,R,O,M,V,H)=>{const B=()=>{if(b.isMounted){let{next:te,bu:Q,u:ne,parent:ue,vnode:ve}=b,Pe=te,ke;Is(b,!1),te?(te.el=ve.el,me(b,te,H)):te=ve,Q&&_i(Q),(ke=te.props&&te.props.onVnodeBeforeUpdate)&&Ct(ke,ue,te,ve),Is(b,!0);const Ke=sa(b),Qt=b.subTree;b.subTree=Ke,y(Qt,Ke,d(Qt.el),q(Qt),b,M,V),te.el=Ke.el,Pe===null&&ld(b,Ke.el),ne&&st(ne,M),(ke=te.props&&te.props.onVnodeUpdated)&&st(()=>Ct(ke,ue,te,ve),M)}else{let te;const{el:Q,props:ne}=w,{bm:ue,m:ve,parent:Pe}=b,ke=$s(w);if(Is(b,!1),ue&&_i(ue),!ke&&(te=ne&&ne.onVnodeBeforeMount)&&Ct(te,Pe,w),Is(b,!0),Q&&ge){const Ke=()=>{b.subTree=sa(b),ge(Q,b.subTree,b,M,null)};ke?w.type.__asyncLoader().then(()=>!b.isUnmounted&&Ke()):Ke()}else{const Ke=b.subTree=sa(b);y(null,Ke,R,O,b,M,V),w.el=Ke.el}if(ve&&st(ve,M),!ke&&(te=ne&&ne.onVnodeMounted)){const Ke=w;st(()=>Ct(te,Pe,Ke),M)}(w.shapeFlag&256||Pe&&$s(Pe.vnode)&&Pe.vnode.shapeFlag&256)&&b.a&&st(b.a,M),b.isMounted=!0,w=R=O=null}},j=b.effect=new oo(B,()=>tl(L),b.scope),L=b.update=()=>j.run();L.id=b.uid,Is(b,!0),L()},me=(b,w,R)=>{w.component=b;const O=b.vnode.props;b.vnode=w,b.next=null,ET(b,w.props,O,R),xT(b,w.children,R),Gi(),ef(),Ki()},de=(b,w,R,O,M,V,H,B,j=!1)=>{const L=b&&b.children,te=b?b.shapeFlag:0,Q=w.children,{patchFlag:ne,shapeFlag:ue}=w;if(ne>0){if(ne&128){Pt(L,Q,R,O,M,V,H,B,j);return}else if(ne&256){Ge(L,Q,R,O,M,V,H,B,j);return}}ue&8?(te&16&&G(L,M,V),Q!==L&&u(R,Q)):te&16?ue&16?Pt(L,Q,R,O,M,V,H,B,j):G(L,M,V,!0):(te&8&&u(R,""),ue&16&&T(Q,R,O,M,V,H,B,j))},Ge=(b,w,R,O,M,V,H,B,j)=>{b=b||bi,w=w||bi;const L=b.length,te=w.length,Q=Math.min(L,te);let ne;for(ne=0;ne<Q;ne++){const ue=w[ne]=j?Zn(w[ne]):$t(w[ne]);y(b[ne],ue,R,null,M,V,H,B,j)}L>te?G(b,M,V,!0,!1,Q):T(w,R,O,M,V,H,B,j,Q)},Pt=(b,w,R,O,M,V,H,B,j)=>{let L=0;const te=w.length;let Q=b.length-1,ne=te-1;for(;L<=Q&&L<=ne;){const ue=b[L],ve=w[L]=j?Zn(w[L]):$t(w[L]);if(Jt(ue,ve))y(ue,ve,R,null,M,V,H,B,j);else break;L++}for(;L<=Q&&L<=ne;){const ue=b[Q],ve=w[ne]=j?Zn(w[ne]):$t(w[ne]);if(Jt(ue,ve))y(ue,ve,R,null,M,V,H,B,j);else break;Q--,ne--}if(L>Q){if(L<=ne){const ue=ne+1,ve=ue<te?w[ue].el:O;for(;L<=ne;)y(null,w[L]=j?Zn(w[L]):$t(w[L]),R,ve,M,V,H,B,j),L++}}else if(L>ne)for(;L<=Q;)ct(b[L],M,V,!0),L++;else{const ue=L,ve=L,Pe=new Map;for(L=ve;L<=ne;L++){const Mt=w[L]=j?Zn(w[L]):$t(w[L]);Mt.key!=null&&Pe.set(Mt.key,L)}let ke,Ke=0;const Qt=ne-ve+1;let di=!1,jh=0;const ir=new Array(Qt);for(L=0;L<Qt;L++)ir[L]=0;for(L=ue;L<=Q;L++){const Mt=b[L];if(Ke>=Qt){ct(Mt,M,V,!0);continue}let an;if(Mt.key!=null)an=Pe.get(Mt.key);else for(ke=ve;ke<=ne;ke++)if(ir[ke-ve]===0&&Jt(Mt,w[ke])){an=ke;break}an===void 0?ct(Mt,M,V,!0):(ir[an-ve]=L+1,an>=jh?jh=an:di=!0,y(Mt,w[an],R,null,M,V,H,B,j),Ke++)}const zh=di?OT(ir):bi;for(ke=zh.length-1,L=Qt-1;L>=0;L--){const Mt=ve+L,an=w[Mt],qh=Mt+1<te?w[Mt+1].el:O;ir[L]===0?y(null,an,R,qh,M,V,H,B,j):di&&(ke<0||L!==zh[ke]?It(an,R,qh,2):ke--)}}},It=(b,w,R,O,M=null)=>{const{el:V,type:H,transition:B,children:j,shapeFlag:L}=b;if(L&6){It(b.component.subTree,w,R,O);return}if(L&128){b.suspense.move(w,R,O);return}if(L&64){H.move(b,w,R,Te);return}if(H===Ue){s(V,w,R);for(let Q=0;Q<j.length;Q++)It(j[Q],w,R,O);s(b.anchor,w,R);return}if(H===Bs){v(b,w,R);return}if(O!==2&&L&1&&B)if(O===0)B.beforeEnter(V),s(V,w,R),st(()=>B.enter(V),M);else{const{leave:Q,delayLeave:ne,afterLeave:ue}=B,ve=()=>s(V,w,R),Pe=()=>{Q(V,()=>{ve(),ue&&ue()})};ne?ne(V,ve,Pe):Pe()}else s(V,w,R)},ct=(b,w,R,O=!1,M=!1)=>{const{type:V,props:H,ref:B,children:j,dynamicChildren:L,shapeFlag:te,patchFlag:Q,dirs:ne}=b;if(B!=null&&wa(B,null,R,b,!0),te&256){w.ctx.deactivate(b);return}const ue=te&1&&ne,ve=!$s(b);let Pe;if(ve&&(Pe=H&&H.onVnodeBeforeUnmount)&&Ct(Pe,w,b),te&6)P(b.component,R,O);else{if(te&128){b.suspense.unmount(R,O);return}ue&&ln(b,null,w,"beforeUnmount"),te&64?b.type.remove(b,w,R,M,Te,O):L&&(V!==Ue||Q>0&&Q&64)?G(L,w,R,!1,!0):(V===Ue&&Q&384||!M&&te&16)&&G(j,w,R),O&&Gn(b)}(ve&&(Pe=H&&H.onVnodeUnmounted)||ue)&&st(()=>{Pe&&Ct(Pe,w,b),ue&&ln(b,null,w,"unmounted")},R)},Gn=b=>{const{type:w,el:R,anchor:O,transition:M}=b;if(w===Ue){No(R,O);return}if(w===Bs){S(b);return}const V=()=>{i(R),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(b.shapeFlag&1&&M&&!M.persisted){const{leave:H,delayLeave:B}=M,j=()=>H(R,V);B?B(b.el,V,j):j()}else V()},No=(b,w)=>{let R;for(;b!==w;)R=h(b),i(b),b=R;i(w)},P=(b,w,R)=>{const{bum:O,scope:M,update:V,subTree:H,um:B}=b;O&&_i(O),M.stop(),V&&(V.active=!1,ct(H,b,w,R)),B&&st(B,w),st(()=>{b.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&b.asyncDep&&!b.asyncResolved&&b.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},G=(b,w,R,O=!1,M=!1,V=0)=>{for(let H=V;H<b.length;H++)ct(b[H],w,R,O,M)},q=b=>b.shapeFlag&6?q(b.component.subTree):b.shapeFlag&128?b.suspense.next():h(b.anchor||b.el),Z=(b,w,R)=>{b==null?w._vnode&&ct(w._vnode,null,null,!0):y(w._vnode||null,b,w,null,null,null,R),ef(),va(),w._vnode=b},Te={p:y,um:ct,m:It,r:Gn,mt:F,mc:T,pc:de,pbc:$,n:q,o:t};let Be,ge;return e&&([Be,ge]=e(Te)),{render:Z,hydrate:Be,createApp:kT(Z,Be)}}function Is({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function yd(t,e,n=!1){const s=t.children,i=e.children;if(Y(s)&&Y(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Zn(i[r]),a.el=o.el),n||yd(o,a)),a.type===Ks&&(a.el=o.el)}}function OT(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const DT=t=>t.__isTeleport,br=t=>t&&(t.disabled||t.disabled===""),hf=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Kc=(t,e)=>{const n=t&&t.to;return $e(n)?e?e(n):null:n},PT={__isTeleport:!0,process(t,e,n,s,i,r,o,a,l,c){const{mc:u,pc:d,pbc:h,o:{insert:f,querySelector:g,createText:y,createComment:_}}=c,m=br(e.props);let{shapeFlag:p,children:v,dynamicChildren:S}=e;if(t==null){const E=e.el=y(""),I=e.anchor=y("");f(E,n,s),f(I,n,s);const C=e.target=Kc(e.props,g),T=e.targetAnchor=y("");C&&(f(T,C),o=o||hf(C));const A=($,x)=>{p&16&&u(v,$,x,i,r,o,a,l)};m?A(n,I):C&&A(C,T)}else{e.el=t.el;const E=e.anchor=t.anchor,I=e.target=t.target,C=e.targetAnchor=t.targetAnchor,T=br(t.props),A=T?n:I,$=T?E:C;if(o=o||hf(I),S?(h(t.dynamicChildren,S,A,i,r,o,a),yd(t,e,!0)):l||d(t,e,A,$,i,r,o,a,!1),m)T||Go(e,n,E,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const x=e.target=Kc(e.props,g);x&&Go(e,x,null,c,0)}else T&&Go(e,I,C,c,1)}Ag(e)},remove(t,e,n,s,{um:i,o:{remove:r}},o){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:d,props:h}=t;if(d&&r(u),(o||!br(h))&&(r(c),a&16))for(let f=0;f<l.length;f++){const g=l[f];i(g,e,n,!0,!!g.dynamicChildren)}},move:Go,hydrate:MT};function Go(t,e,n,{o:{insert:s},m:i},r=2){r===0&&s(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,d=r===2;if(d&&s(o,e,n),(!d||br(u))&&l&16)for(let h=0;h<c.length;h++)i(c[h],e,n,2);d&&s(a,e,n)}function MT(t,e,n,s,i,r,{o:{nextSibling:o,parentNode:a,querySelector:l}},c){const u=e.target=Kc(e.props,l);if(u){const d=u._lpa||u.firstChild;if(e.shapeFlag&16)if(br(e.props))e.anchor=c(o(t),e,a(t),n,s,i,r),e.targetAnchor=d;else{e.anchor=o(t);let h=d;for(;h;)if(h=o(h),h&&h.nodeType===8&&h.data==="teleport anchor"){e.targetAnchor=h,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}c(d,e,u,n,s,i,r)}Ag(e)}return e.anchor&&o(e.anchor)}const LT=PT;function Ag(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const Ue=Symbol(void 0),Ks=Symbol(void 0),yt=Symbol(void 0),Bs=Symbol(void 0),wr=[];let kt=null;function ie(t=!1){wr.push(kt=t?null:[])}function kg(){wr.pop(),kt=wr[wr.length-1]||null}let Ws=1;function Wc(t){Ws+=t}function Rg(t){return t.dynamicChildren=Ws>0?kt||bi:null,kg(),Ws>0&&kt&&kt.push(t),t}function pe(t,e,n,s,i,r){return Rg(z(t,e,n,s,i,r,!0))}function Zt(t,e,n,s,i){return Rg(se(t,e,n,s,i,!0))}function ms(t){return t?t.__v_isVNode===!0:!1}function Jt(t,e){return t.type===e.type&&t.key===e.key}function NT(t){}const ol="__vInternal",Og=({key:t})=>t??null,ia=({ref:t,ref_key:e,ref_for:n})=>t!=null?$e(t)||Ve(t)||le(t)?{i:ot,r:t,k:e,f:!!n}:t:null;function z(t,e=null,n=null,s=0,i=null,r=t===Ue?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Og(e),ref:e&&ia(e),scopeId:sl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:ot};return a?(vd(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=$e(n)?8:16),Ws>0&&!o&&kt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&kt.push(l),l}const se=FT;function FT(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===gg)&&(t=yt),ms(t)){const a=nn(t,e,!0);return n&&vd(a,n),Ws>0&&!r&&kt&&(a.shapeFlag&6?kt[kt.indexOf(t)]=a:kt.push(a)),a.patchFlag|=-2,a}if(HT(t)&&(t=t.__vccOpts),e){e=Dg(e);let{class:a,style:l}=e;a&&!$e(a)&&(e.class=xt(a)),De(l)&&(td(l)&&!Y(l)&&(l=ze({},l)),e.style=so(l))}const o=$e(t)?1:sg(t)?128:DT(t)?64:De(t)?4:le(t)?2:0;return z(t,e,n,s,i,o,r,!0)}function Dg(t){return t?td(t)||ol in t?ze({},t):t:null}function nn(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?Pg(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Og(a),ref:e&&e.ref?n&&i?Y(i)?i.concat(ia(e)):[i,ia(e)]:ia(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ue?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&nn(t.ssContent),ssFallback:t.ssFallback&&nn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Nt(t=" ",e=0){return se(Ks,null,t,e)}function $T(t,e){const n=se(Bs,null,t);return n.staticCount=e,n}function ns(t="",e=!1){return e?(ie(),Zt(yt,null,t)):se(yt,null,t)}function $t(t){return t==null||typeof t=="boolean"?se(yt):Y(t)?se(Ue,null,t.slice()):typeof t=="object"?Zn(t):se(Ks,null,String(t))}function Zn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:nn(t)}function vd(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(Y(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),vd(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(ol in e)?e._ctx=ot:i===3&&ot&&(ot.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else le(e)?(e={default:e,_ctx:ot},n=32):(e=String(e),s&64?(n=16,e=[Nt(e)]):n=8);t.children=e,t.shapeFlag|=n}function Pg(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=xt([e.class,s.class]));else if(i==="style")e.style=so([e.style,s.style]);else if(io(i)){const r=e[i],o=s[i];o&&r!==o&&!(Y(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Ct(t,e,n,s=null){Vt(t,e,7,[n,s])}const BT=Eg();let UT=0;function Mg(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||BT,r={uid:UT++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Yu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wg(s,i),emitsOptions:ng(s,i),emit:null,emitted:null,propsDefaults:Re,inheritAttrs:s.inheritAttrs,ctx:Re,data:Re,props:Re,attrs:Re,slots:Re,refs:Re,setupState:Re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=z_.bind(null,r),t.ce&&t.ce(r),r}let je=null;const Hn=()=>je||ot,gs=t=>{je=t,t.scope.on()},cs=()=>{je&&je.scope.off(),je=null};function Lg(t){return t.vnode.shapeFlag&4}let Ri=!1;function Ng(t,e=!1){Ri=e;const{props:n,children:s}=t.vnode,i=Lg(t);ST(t,n,i,e),CT(t,s);const r=i?VT(t,e):void 0;return Ri=!1,r}function VT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Hs(new Proxy(t.ctx,zc));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?$g(t):null;gs(t),Gi();const r=On(s,t,0,[t.props,i]);if(Ki(),cs(),Ku(r)){if(r.then(cs,cs),e)return r.then(o=>{Yc(t,o,e)}).catch(o=>{ii(o,t,0)});t.asyncDep=r}else Yc(t,r,e)}else Fg(t,e)}function Yc(t,e,n){le(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:De(e)&&(t.setupState=id(e)),Fg(t,n)}let _a,Qc;function jT(t){_a=t,Qc=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,yT))}}const zT=()=>!_a;function Fg(t,e,n){const s=t.type;if(!t.render){if(!e&&_a&&!s.render){const i=s.template||md(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=ze(ze({isCustomElement:r,delimiters:a},o),l);s.render=_a(i,c)}}t.render=s.render||en,Qc&&Qc(t)}gs(t),Gi(),vT(t),Ki(),cs()}function qT(t){return new Proxy(t.attrs,{get(e,n){return Dt(t,"get","$attrs"),e[n]}})}function $g(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=qT(t))},slots:t.slots,emit:t.emit,expose:e}}function al(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(id(Hs(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in vr)return vr[n](t)},has(e,n){return n in e||n in vr}}))}function Xc(t,e=!0){return le(t)?t.displayName||t.name:t.name||e&&t.__name}function HT(t){return le(t)&&"__vccOpts"in t}const Ae=(t,e)=>N_(t,e,Ri);function GT(){return null}function KT(){return null}function WT(t){}function YT(t,e){return null}function QT(){return Bg().slots}function XT(){return Bg().attrs}function Bg(){const t=Hn();return t.setupContext||(t.setupContext=$g(t))}function JT(t,e){const n=Y(t)?t.reduce((s,i)=>(s[i]={},s),{}):t;for(const s in e){const i=n[s];i?Y(i)||le(i)?n[s]={type:i,default:e[s]}:i.default=e[s]:i===null&&(n[s]={default:e[s]})}return n}function ZT(t,e){const n={};for(const s in t)e.includes(s)||Object.defineProperty(n,s,{enumerable:!0,get:()=>t[s]});return n}function eS(t){const e=Hn();let n=t();return cs(),Ku(n)&&(n=n.catch(s=>{throw gs(e),s})),[n,()=>gs(e)]}function ft(t,e,n){const s=arguments.length;return s===2?De(e)&&!Y(e)?ms(e)?se(t,null,[e]):se(t,e):se(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&ms(n)&&(n=[n]),se(t,e,n))}const Ug=Symbol(""),Vg=()=>Ot(Ug);function tS(){}function nS(t,e,n,s){const i=n[s];if(i&&jg(i,t))return i;const r=e();return r.memo=t.slice(),n[s]=r}function jg(t,e){const n=t.memo;if(n.length!=e.length)return!1;for(let s=0;s<n.length;s++)if(Ai(n[s],e[s]))return!1;return Ws>0&&kt&&kt.push(t),!0}const zg="3.2.47",sS={createComponentInstance:Mg,setupComponent:Ng,renderComponentRoot:sa,setCurrentRenderingInstance:Fr,isVNode:ms,normalizeVNode:$t},iS=sS,rS=null,oS=null,aS="http://www.w3.org/2000/svg",Rs=typeof document<"u"?document:null,ff=Rs&&Rs.createElement("template"),lS={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Rs.createElementNS(aS,t):Rs.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Rs.createTextNode(t),createComment:t=>Rs.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Rs.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{ff.innerHTML=s?`<svg>${t}</svg>`:t;const a=ff.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function cS(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function uS(t,e,n){const s=t.style,i=$e(n);if(n&&!i){if(e&&!$e(e))for(const r in e)n[r]==null&&Jc(s,r,"");for(const r in n)Jc(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const pf=/\s*!important$/;function Jc(t,e,n){if(Y(n))n.forEach(s=>Jc(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=dS(t,e);pf.test(n)?t.setProperty(Kt(s),n.replace(pf,""),"important"):t[s]=n}}const mf=["Webkit","Moz","ms"],ic={};function dS(t,e){const n=ic[e];if(n)return n;let s=Rt(e);if(s!=="filter"&&s in t)return ic[e]=s;s=ro(s);for(let i=0;i<mf.length;i++){const r=mf[i]+s;if(r in t)return ic[e]=r}return e}const gf="http://www.w3.org/1999/xlink";function hS(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(gf,e.slice(6,e.length)):t.setAttributeNS(gf,e,n);else{const r=j0(e);n==null||r&&!km(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function fS(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n??"";(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=km(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Cn(t,e,n,s){t.addEventListener(e,n,s)}function pS(t,e,n,s){t.removeEventListener(e,n,s)}function mS(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=gS(e);if(s){const c=r[e]=bS(s,i);Cn(t,a,c,l)}else o&&(pS(t,a,o,l),r[e]=void 0)}}const yf=/(?:Once|Passive|Capture)$/;function gS(t){let e;if(yf.test(t)){e={};let s;for(;s=t.match(yf);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Kt(t.slice(2)),e]}let rc=0;const yS=Promise.resolve(),vS=()=>rc||(yS.then(()=>rc=0),rc=Date.now());function bS(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Vt(wS(s,n.value),e,5,[s])};return n.value=t,n.attached=vS(),n}function wS(t,e){if(Y(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const vf=/^on[a-z]/,_S=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?cS(t,s,i):e==="style"?uS(t,n,s):io(e)?Hu(e)||mS(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):TS(t,e,s,i))?fS(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),hS(t,e,s,i))};function TS(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&vf.test(e)&&le(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||vf.test(e)&&$e(n)?!1:e in t}function qg(t,e){const n=zn(t);class s extends ll{constructor(r){super(n,r,e)}}return s.def=n,s}const SS=t=>qg(t,ly),ES=typeof HTMLElement<"u"?HTMLElement:class{};class ll extends ES{constructor(e,n={},s){super(),this._def=e,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&s?s(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,jt(()=>{this._connected||(tu(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let s=0;s<this.attributes.length;s++)this._setAttr(this.attributes[s].name);new MutationObserver(s=>{for(const i of s)this._setAttr(i.attributeName)}).observe(this,{attributes:!0});const e=(s,i=!1)=>{const{props:r,styles:o}=s;let a;if(r&&!Y(r))for(const l in r){const c=r[l];(c===Number||c&&c.type===Number)&&(l in this._props&&(this._props[l]=ga(this._props[l])),(a||(a=Object.create(null)))[Rt(l)]=!0)}this._numberProps=a,i&&this._resolveProps(s),this._applyStyles(o),this._update()},n=this._def.__asyncLoader;n?n().then(s=>e(s,!0)):e(this._def)}_resolveProps(e){const{props:n}=e,s=Y(n)?n:Object.keys(n||{});for(const i of Object.keys(this))i[0]!=="_"&&s.includes(i)&&this._setProp(i,this[i],!0,!1);for(const i of s.map(Rt))Object.defineProperty(this,i,{get(){return this._getProp(i)},set(r){this._setProp(i,r)}})}_setAttr(e){let n=this.getAttribute(e);const s=Rt(e);this._numberProps&&this._numberProps[s]&&(n=ga(n)),this._setProp(s,n,!1)}_getProp(e){return this._props[e]}_setProp(e,n,s=!0,i=!0){n!==this._props[e]&&(this._props[e]=n,i&&this._instance&&this._update(),s&&(n===!0?this.setAttribute(Kt(e),""):typeof n=="string"||typeof n=="number"?this.setAttribute(Kt(e),n+""):n||this.removeAttribute(Kt(e))))}_update(){tu(this._createVNode(),this.shadowRoot)}_createVNode(){const e=se(this._def,ze({},this._props));return this._instance||(e.ce=n=>{this._instance=n,n.isCE=!0;const s=(r,o)=>{this.dispatchEvent(new CustomEvent(r,{detail:o}))};n.emit=(r,...o)=>{s(r,o),Kt(r)!==r&&s(Kt(r),o)};let i=this;for(;i=i&&(i.parentNode||i.host);)if(i instanceof ll){n.parent=i._instance,n.provides=i._instance.provides;break}}),e}_applyStyles(e){e&&e.forEach(n=>{const s=document.createElement("style");s.textContent=n,this.shadowRoot.appendChild(s)})}}function IS(t="$style"){{const e=Hn();if(!e)return Re;const n=e.type.__cssModules;if(!n)return Re;const s=n[t];return s||Re}}function Hg(t){const e=Hn();if(!e)return;const n=e.ut=(i=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(r=>eu(r,i))},s=()=>{const i=t(e.proxy);Zc(e.subTree,i),n(i)};rg(s),tn(()=>{const i=new MutationObserver(s);i.observe(e.subTree.el.parentNode,{childList:!0}),uo(()=>i.disconnect())})}function Zc(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{Zc(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)eu(t.el,e);else if(t.type===Ue)t.children.forEach(n=>Zc(n,e));else if(t.type===Bs){let{el:n,anchor:s}=t;for(;n&&(eu(n,e),n!==s);)n=n.nextSibling}}function eu(t,e){if(t.nodeType===1){const n=t.style;for(const s in e)n.setProperty(`--${s}`,e[s])}}const Yn="transition",rr="animation",cl=(t,{slots:e})=>ft(dd,Kg(t),e);cl.displayName="Transition";const Gg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},CS=cl.props=ze({},dd.props,Gg),Cs=(t,e=[])=>{Y(t)?t.forEach(n=>n(...e)):t&&t(...e)},bf=t=>t?Y(t)?t.some(e=>e.length>1):t.length>1:!1;function Kg(t){const e={};for(const k in t)k in Gg||(e[k]=t[k]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,g=xS(i),y=g&&g[0],_=g&&g[1],{onBeforeEnter:m,onEnter:p,onEnterCancelled:v,onLeave:S,onLeaveCancelled:E,onBeforeAppear:I=m,onAppear:C=p,onAppearCancelled:T=v}=e,A=(k,U,F)=>{Jn(k,U?u:a),Jn(k,U?c:o),F&&F()},$=(k,U)=>{k._isLeaving=!1,Jn(k,d),Jn(k,f),Jn(k,h),U&&U()},x=k=>(U,F)=>{const we=k?C:p,W=()=>A(U,k,F);Cs(we,[U,W]),wf(()=>{Jn(U,k?l:r),Sn(U,k?u:a),bf(we)||_f(U,s,y,W)})};return ze(e,{onBeforeEnter(k){Cs(m,[k]),Sn(k,r),Sn(k,o)},onBeforeAppear(k){Cs(I,[k]),Sn(k,l),Sn(k,c)},onEnter:x(!1),onAppear:x(!0),onLeave(k,U){k._isLeaving=!0;const F=()=>$(k,U);Sn(k,d),Yg(),Sn(k,h),wf(()=>{k._isLeaving&&(Jn(k,d),Sn(k,f),bf(S)||_f(k,s,_,F))}),Cs(S,[k,F])},onEnterCancelled(k){A(k,!1),Cs(v,[k])},onAppearCancelled(k){A(k,!0),Cs(T,[k])},onLeaveCancelled(k){$(k),Cs(E,[k])}})}function xS(t){if(t==null)return null;if(De(t))return[oc(t.enter),oc(t.leave)];{const e=oc(t);return[e,e]}}function oc(t){return ga(t)}function Sn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Jn(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function wf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let AS=0;function _f(t,e,n,s){const i=t._endId=++AS,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=Wg(t,e);if(!o)return s();const c=o+"end";let u=0;const d=()=>{t.removeEventListener(c,h),r()},h=f=>{f.target===t&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),t.addEventListener(c,h)}function Wg(t,e){const n=window.getComputedStyle(t),s=g=>(n[g]||"").split(", "),i=s(`${Yn}Delay`),r=s(`${Yn}Duration`),o=Tf(i,r),a=s(`${rr}Delay`),l=s(`${rr}Duration`),c=Tf(a,l);let u=null,d=0,h=0;e===Yn?o>0&&(u=Yn,d=o,h=r.length):e===rr?c>0&&(u=rr,d=c,h=l.length):(d=Math.max(o,c),u=d>0?o>c?Yn:rr:null,h=u?u===Yn?r.length:l.length:0);const f=u===Yn&&/\b(transform|all)(,|$)/.test(s(`${Yn}Property`).toString());return{type:u,timeout:d,propCount:h,hasTransform:f}}function Tf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Sf(n)+Sf(t[s])))}function Sf(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Yg(){return document.body.offsetHeight}const Qg=new WeakMap,Xg=new WeakMap,Jg={name:"TransitionGroup",props:ze({},CS,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Hn(),s=ud();let i,r;return Wi(()=>{if(!i.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!MS(i[0].el,n.vnode.el,o))return;i.forEach(OS),i.forEach(DS);const a=i.filter(PS);Yg(),a.forEach(l=>{const c=l.el,u=c.style;Sn(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const d=c._moveCb=h=>{h&&h.target!==c||(!h||/transform$/.test(h.propertyName))&&(c.removeEventListener("transitionend",d),c._moveCb=null,Jn(c,o))};c.addEventListener("transitionend",d)})}),()=>{const o=ye(t),a=Kg(o);let l=o.tag||Ue;i=r,r=e.default?il(e.default()):[];for(let c=0;c<r.length;c++){const u=r[c];u.key!=null&&Gs(u,ki(u,a,s,n))}if(i)for(let c=0;c<i.length;c++){const u=i[c];Gs(u,ki(u,a,s,n)),Qg.set(u,u.el.getBoundingClientRect())}return se(l,null,r)}}},kS=t=>delete t.mode;Jg.props;const RS=Jg;function OS(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function DS(t){Xg.set(t,t.el.getBoundingClientRect())}function PS(t){const e=Qg.get(t),n=Xg.get(t),s=e.left-n.left,i=e.top-n.top;if(s||i){const r=t.el.style;return r.transform=r.webkitTransform=`translate(${s}px,${i}px)`,r.transitionDuration="0s",t}}function MS(t,e,n){const s=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&s.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&s.classList.add(o)),s.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(s);const{hasTransform:r}=Wg(s);return i.removeChild(s),r}const ys=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Y(e)?n=>_i(e,n):e};function LS(t){t.target.composing=!0}function Ef(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ta={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=ys(i);const r=s||i.props&&i.props.type==="number";Cn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=ma(a)),t._assign(a)}),n&&Cn(t,"change",()=>{t.value=t.value.trim()}),e||(Cn(t,"compositionstart",LS),Cn(t,"compositionend",Ef),Cn(t,"change",Ef))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=ys(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&ma(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},bd={deep:!0,created(t,e,n){t._assign=ys(n),Cn(t,"change",()=>{const s=t._modelValue,i=Oi(t),r=t.checked,o=t._assign;if(Y(s)){const a=Wa(s,i),l=a!==-1;if(r&&!l)o(s.concat(i));else if(!r&&l){const c=[...s];c.splice(a,1),o(c)}}else if(ni(s)){const a=new Set(s);r?a.add(i):a.delete(i),o(a)}else o(ey(t,r))})},mounted:If,beforeUpdate(t,e,n){t._assign=ys(n),If(t,e,n)}};function If(t,{value:e,oldValue:n},s){t._modelValue=e,Y(e)?t.checked=Wa(e,s.props.value)>-1:ni(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=fs(e,ey(t,!0)))}const wd={created(t,{value:e},n){t.checked=fs(e,n.props.value),t._assign=ys(n),Cn(t,"change",()=>{t._assign(Oi(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t._assign=ys(s),e!==n&&(t.checked=fs(e,s.props.value))}},Zg={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=ni(e);Cn(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?ma(Oi(o)):Oi(o));t._assign(t.multiple?i?new Set(r):r:r[0])}),t._assign=ys(s)},mounted(t,{value:e}){Cf(t,e)},beforeUpdate(t,e,n){t._assign=ys(n)},updated(t,{value:e}){Cf(t,e)}};function Cf(t,e){const n=t.multiple;if(!(n&&!Y(e)&&!ni(e))){for(let s=0,i=t.options.length;s<i;s++){const r=t.options[s],o=Oi(r);if(n)Y(e)?r.selected=Wa(e,o)>-1:r.selected=e.has(o);else if(fs(Oi(r),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Oi(t){return"_value"in t?t._value:t.value}function ey(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const ty={created(t,e,n){Ko(t,e,n,null,"created")},mounted(t,e,n){Ko(t,e,n,null,"mounted")},beforeUpdate(t,e,n,s){Ko(t,e,n,s,"beforeUpdate")},updated(t,e,n,s){Ko(t,e,n,s,"updated")}};function ny(t,e){switch(t){case"SELECT":return Zg;case"TEXTAREA":return Ta;default:switch(e){case"checkbox":return bd;case"radio":return wd;default:return Ta}}}function Ko(t,e,n,s,i){const o=ny(t.tagName,n.props&&n.props.type)[i];o&&o(t,e,n,s)}function NS(){Ta.getSSRProps=({value:t})=>({value:t}),wd.getSSRProps=({value:t},e)=>{if(e.props&&fs(e.props.value,t))return{checked:!0}},bd.getSSRProps=({value:t},e)=>{if(Y(t)){if(e.props&&Wa(t,e.props.value)>-1)return{checked:!0}}else if(ni(t)){if(e.props&&t.has(e.props.value))return{checked:!0}}else if(t)return{checked:!0}},ty.getSSRProps=(t,e)=>{if(typeof e.type!="string")return;const n=ny(e.type.toUpperCase(),e.props&&e.props.type);if(n.getSSRProps)return n.getSSRProps(t,e)}}const FS=["ctrl","shift","alt","meta"],$S={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>FS.some(n=>t[`${n}Key`]&&!e.includes(n))},BS=(t,e)=>(n,...s)=>{for(let i=0;i<e.length;i++){const r=$S[e[i]];if(r&&r(n,e))return}return t(n,...s)},US={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},sy=(t,e)=>n=>{if(!("key"in n))return;const s=Kt(n.key);if(e.some(i=>i===s||US[i]===s))return t(n)},iy={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):or(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),or(t,!0),s.enter(t)):s.leave(t,()=>{or(t,!1)}):or(t,e))},beforeUnmount(t,{value:e}){or(t,e)}};function or(t,e){t.style.display=e?t._vod:"none"}function VS(){iy.getSSRProps=({value:t})=>{if(!t)return{style:{display:"none"}}}}const ry=ze({patchProp:_S},lS);let _r,xf=!1;function oy(){return _r||(_r=Ig(ry))}function ay(){return _r=xf?_r:Cg(ry),xf=!0,_r}const tu=(...t)=>{oy().render(...t)},ly=(...t)=>{ay().hydrate(...t)},cy=(...t)=>{const e=oy().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=uy(s);if(!i)return;const r=e._component;!le(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e},jS=(...t)=>{const e=ay().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=uy(s);if(i)return n(i,!0,i instanceof SVGElement)},e};function uy(t){return $e(t)?document.querySelector(t):t}let Af=!1;const zS=()=>{Af||(Af=!0,NS(),VS())},qS=()=>{},HS=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:dd,Comment:yt,EffectScope:Yu,Fragment:Ue,KeepAlive:lT,ReactiveEffect:oo,Static:Bs,Suspense:J_,Teleport:LT,Text:Ks,Transition:cl,TransitionGroup:RS,VueElement:ll,assertNumber:$_,callWithAsyncErrorHandling:Vt,callWithErrorHandling:On,camelize:Rt,capitalize:ro,cloneVNode:nn,compatUtils:oS,compile:qS,computed:Ae,createApp:cy,createBlock:Zt,createCommentVNode:ns,createElementBlock:pe,createElementVNode:z,createHydrationRenderer:Cg,createPropsRestProxy:ZT,createRenderer:Ig,createSSRApp:jS,createSlots:pT,createStaticVNode:$T,createTextVNode:Nt,createVNode:se,customRef:P_,defineAsyncComponent:oT,defineComponent:zn,defineCustomElement:qg,defineEmits:KT,defineExpose:WT,defineProps:GT,defineSSRCustomElement:SS,get devtools(){return pi},effect:e_,effectScope:Qu,getCurrentInstance:Hn,getCurrentScope:Xu,getTransitionRawChildren:il,guardReactiveProps:Dg,h:ft,handleError:ii,hydrate:ly,initCustomFormatter:tS,initDirectivesForSSR:zS,inject:Ot,isMemoSame:jg,isProxy:td,isReactive:dn,isReadonly:qs,isRef:Ve,isRuntimeOnly:zT,isShallow:Pr,isVNode:ms,markRaw:Hs,mergeDefaults:JT,mergeProps:Pg,nextTick:jt,normalizeClass:xt,normalizeProps:U0,normalizeStyle:so,onActivated:lg,onBeforeMount:dg,onBeforeUnmount:Yi,onBeforeUpdate:hd,onDeactivated:cg,onErrorCaptured:mg,onMounted:tn,onRenderTracked:pg,onRenderTriggered:fg,onScopeDispose:Mm,onServerPrefetch:hg,onUnmounted:uo,onUpdated:Wi,openBlock:ie,popScopeId:H_,provide:Dn,proxyRefs:id,pushScopeId:q_,queuePostFlushCb:ad,reactive:si,readonly:ed,ref:Ee,registerRuntimeCompiler:jT,render:tu,renderList:Qi,renderSlot:mT,resolveComponent:ht,resolveDirective:fT,resolveDynamicComponent:hT,resolveFilter:rS,resolveTransitionHooks:ki,setBlockTracking:Wc,setDevtoolsHook:tg,setTransitionHooks:Gs,shallowReactive:Km,shallowReadonly:A_,shallowRef:Wm,ssrContextKey:Ug,ssrUtils:iS,stop:t_,toDisplayString:dt,toHandlerKey:yr,toHandlers:gT,toRaw:ye,toRef:rd,toRefs:Qm,transformVNodeArgs:NT,triggerRef:R_,unref:Oe,useAttrs:XT,useCssModule:IS,useCssVars:Hg,useSSRContext:Vg,useSlots:QT,useTransitionState:ud,vModelCheckbox:bd,vModelDynamic:ty,vModelRadio:wd,vModelSelect:Zg,vModelText:Ta,vShow:iy,version:zg,warn:F_,watch:hn,watchEffect:ao,watchPostEffect:rg,watchSyncEffect:sT,withAsyncContext:eS,withCtx:Me,withDefaults:YT,withDirectives:uT,withKeys:sy,withMemo:nS,withModifiers:BS,withScopeId:G_},Symbol.toStringTag,{value:"Module"}));var GS=!1;/*!
  * pinia v2.0.32
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let dy;const ul=t=>dy=t,hy=Symbol();function nu(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Tr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Tr||(Tr={}));function KS(){const t=Qu(!0),e=t.run(()=>Ee({}));let n=[],s=[];const i=Hs({install(r){ul(i),i._a=r,r.provide(hy,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!GS?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const fy=()=>{};function kf(t,e,n,s=fy){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&Xu()&&Mm(i),i}function hi(t,...e){t.slice().forEach(n=>{n(...e)})}function su(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];nu(i)&&nu(s)&&t.hasOwnProperty(n)&&!Ve(s)&&!dn(s)?t[n]=su(i,s):t[n]=s}return t}const WS=Symbol();function YS(t){return!nu(t)||!t.hasOwnProperty(WS)}const{assign:es}=Object;function QS(t){return!!(Ve(t)&&t.effect)}function XS(t,e,n,s){const{state:i,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=i?i():{});const u=Qm(n.state.value[t]);return es(u,r,Object.keys(o||{}).reduce((d,h)=>(d[h]=Hs(Ae(()=>{ul(n);const f=n._s.get(t);return o[h].call(f,f)})),d),{}))}return l=py(t,c,e,n,s,!0),l.$reset=function(){const d=i?i():{};this.$patch(h=>{es(h,d)})},l}function py(t,e,n={},s,i,r){let o;const a=es({actions:{}},n),l={deep:!0};let c,u,d=Hs([]),h=Hs([]),f;const g=s.state.value[t];!r&&!g&&(s.state.value[t]={}),Ee({});let y;function _(C){let T;c=u=!1,typeof C=="function"?(C(s.state.value[t]),T={type:Tr.patchFunction,storeId:t,events:f}):(su(s.state.value[t],C),T={type:Tr.patchObject,payload:C,storeId:t,events:f});const A=y=Symbol();jt().then(()=>{y===A&&(c=!0)}),u=!0,hi(d,T,s.state.value[t])}const m=fy;function p(){o.stop(),d=[],h=[],s._s.delete(t)}function v(C,T){return function(){ul(s);const A=Array.from(arguments),$=[],x=[];function k(we){$.push(we)}function U(we){x.push(we)}hi(h,{args:A,name:C,store:E,after:k,onError:U});let F;try{F=T.apply(this&&this.$id===t?this:E,A)}catch(we){throw hi(x,we),we}return F instanceof Promise?F.then(we=>(hi($,we),we)).catch(we=>(hi(x,we),Promise.reject(we))):(hi($,F),F)}}const S={_p:s,$id:t,$onAction:kf.bind(null,h),$patch:_,$reset:m,$subscribe(C,T={}){const A=kf(d,C,T.detached,()=>$()),$=o.run(()=>hn(()=>s.state.value[t],x=>{(T.flush==="sync"?u:c)&&C({storeId:t,type:Tr.direct,events:f},x)},es({},l,T)));return A},$dispose:p},E=si(S);s._s.set(t,E);const I=s._e.run(()=>(o=Qu(),o.run(()=>e())));for(const C in I){const T=I[C];if(Ve(T)&&!QS(T)||dn(T))r||(g&&YS(T)&&(Ve(T)?T.value=g[C]:su(T,g[C])),s.state.value[t][C]=T);else if(typeof T=="function"){const A=v(C,T);I[C]=A,a.actions[C]=T}}return es(E,I),es(ye(E),I),Object.defineProperty(E,"$state",{get:()=>s.state.value[t],set:C=>{_(T=>{es(T,C)})}}),s._p.forEach(C=>{es(E,o.run(()=>C({store:E,app:s._a,pinia:s,options:a})))}),g&&r&&n.hydrate&&n.hydrate(E.$state,g),c=!0,u=!0,E}function JS(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(a,l){const c=Hn();return a=a||c&&Ot(hy,null),a&&ul(a),a=dy,a._s.has(s)||(r?py(s,e,i,a):XS(s,i,a)),a._s.get(s)}return o.$id=s,o}function ZS(t){{t=ye(t);const e={};for(const n in t){const s=t[n];(Ve(s)||dn(s))&&(e[n]=rd(t,n))}return e}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const mi=typeof window<"u";function eE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const xe=Object.assign;function ac(t,e){const n={};for(const s in e){const i=e[s];n[s]=sn(i)?i.map(t):t(i)}return n}const Sr=()=>{},sn=Array.isArray,tE=/\/$/,nE=t=>t.replace(tE,"");function lc(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=oE(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function sE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Rf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function iE(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Di(e.matched[s],n.matched[i])&&my(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Di(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function my(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!rE(t[n],e[n]))return!1;return!0}function rE(t,e){return sn(t)?Of(t,e):sn(e)?Of(e,t):t===e}function Of(t,e){return sn(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function oE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var Br;(function(t){t.pop="pop",t.push="push"})(Br||(Br={}));var Er;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Er||(Er={}));function aE(t){if(!t)if(mi){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),nE(t)}const lE=/^[^#]+#/;function cE(t,e){return t.replace(lE,"#")+e}function uE(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const dl=()=>({left:window.pageXOffset,top:window.pageYOffset});function dE(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=uE(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Df(t,e){return(history.state?history.state.position-e:-1)+t}const iu=new Map;function hE(t,e){iu.set(t,e)}function fE(t){const e=iu.get(t);return iu.delete(t),e}let pE=()=>location.protocol+"//"+location.host;function gy(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Rf(l,"")}return Rf(n,t)+s+i}function mE(t,e,n,s){let i=[],r=[],o=null;const a=({state:h})=>{const f=gy(t,location),g=n.value,y=e.value;let _=0;if(h){if(n.value=f,e.value=h,o&&o===g){o=null;return}_=y?h.position-y.position:0}else s(f);i.forEach(m=>{m(n.value,g,{delta:_,type:Br.pop,direction:_?_>0?Er.forward:Er.back:Er.unknown})})};function l(){o=n.value}function c(h){i.push(h);const f=()=>{const g=i.indexOf(h);g>-1&&i.splice(g,1)};return r.push(f),f}function u(){const{history:h}=window;h.state&&h.replaceState(xe({},h.state,{scroll:dl()}),"")}function d(){for(const h of r)h();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:d}}function Pf(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?dl():null}}function gE(t){const{history:e,location:n}=window,s={value:gy(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const d=t.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:pE()+t+l;try{e[u?"replaceState":"pushState"](c,"",h),i.value=c}catch(f){console.error(f),n[u?"replace":"assign"](h)}}function o(l,c){const u=xe({},e.state,Pf(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=xe({},i.value,e.state,{forward:l,scroll:dl()});r(u.current,u,!0);const d=xe({},Pf(s.value,l,null),{position:u.position+1},c);r(l,d,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function yE(t){t=aE(t);const e=gE(t),n=mE(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=xe({location:"",base:t,go:s,createHref:cE.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function vE(t){return typeof t=="string"||t&&typeof t=="object"}function yy(t){return typeof t=="string"||typeof t=="symbol"}const Qn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},vy=Symbol("");var Mf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Mf||(Mf={}));function Pi(t,e){return xe(new Error,{type:t,[vy]:!0},e)}function Tn(t,e){return t instanceof Error&&vy in t&&(e==null||!!(t.type&e))}const Lf="[^/]+?",bE={sensitive:!1,strict:!1,start:!0,end:!0},wE=/[.+*?^${}()[\]/\\]/g;function _E(t,e){const n=xe({},bE,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let d=0;d<c.length;d++){const h=c[d];let f=40+(n.sensitive?.25:0);if(h.type===0)d||(i+="/"),i+=h.value.replace(wE,"\\$&"),f+=40;else if(h.type===1){const{value:g,repeatable:y,optional:_,regexp:m}=h;r.push({name:g,repeatable:y,optional:_});const p=m||Lf;if(p!==Lf){f+=10;try{new RegExp(`(${p})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${g}" (${p}): `+S.message)}}let v=y?`((?:${p})(?:/(?:${p}))*)`:`(${p})`;d||(v=_&&c.length<2?`(?:/${v})`:"/"+v),_&&(v+="?"),i+=v,f+=20,_&&(f+=-8),y&&(f+=-20),p===".*"&&(f+=-50)}u.push(f)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let h=1;h<u.length;h++){const f=u[h]||"",g=r[h-1];d[g.name]=f&&g.repeatable?f.split("/"):f}return d}function l(c){let u="",d=!1;for(const h of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const f of h)if(f.type===0)u+=f.value;else if(f.type===1){const{value:g,repeatable:y,optional:_}=f,m=g in c?c[g]:"";if(sn(m)&&!y)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const p=sn(m)?m.join("/"):m;if(!p)if(_)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${g}"`);u+=p}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function TE(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function SE(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=TE(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Nf(s))return 1;if(Nf(i))return-1}return i.length-s.length}function Nf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const EE={type:0,value:""},IE=/[a-zA-Z0-9_]/;function CE(t){if(!t)return[[]];if(t==="/")return[[EE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function d(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):h();break;case 4:h(),n=s;break;case 1:l==="("?n=2:IE.test(l)?h():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),i}function xE(t,e,n){const s=_E(CE(t.path),n),i=xe(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function AE(t,e){const n=[],s=new Map;e=Bf({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,d,h){const f=!h,g=kE(u);g.aliasOf=h&&h.record;const y=Bf(e,u),_=[g];if("alias"in u){const v=typeof u.alias=="string"?[u.alias]:u.alias;for(const S of v)_.push(xe({},g,{components:h?h.record.components:g.components,path:S,aliasOf:h?h.record:g}))}let m,p;for(const v of _){const{path:S}=v;if(d&&S[0]!=="/"){const E=d.record.path,I=E[E.length-1]==="/"?"":"/";v.path=d.record.path+(S&&I+S)}if(m=xE(v,d,y),h?h.alias.push(m):(p=p||m,p!==m&&p.alias.push(m),f&&u.name&&!$f(m)&&o(u.name)),g.children){const E=g.children;for(let I=0;I<E.length;I++)r(E[I],m,h&&h.children[I])}h=h||m,(m.record.components&&Object.keys(m.record.components).length||m.record.name||m.record.redirect)&&l(m)}return p?()=>{o(p)}:Sr}function o(u){if(yy(u)){const d=s.get(u);d&&(s.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let d=0;for(;d<n.length&&SE(u,n[d])>=0&&(u.record.path!==n[d].record.path||!by(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!$f(u)&&s.set(u.record.name,u)}function c(u,d){let h,f={},g,y;if("name"in u&&u.name){if(h=s.get(u.name),!h)throw Pi(1,{location:u});y=h.record.name,f=xe(Ff(d.params,h.keys.filter(p=>!p.optional).map(p=>p.name)),u.params&&Ff(u.params,h.keys.map(p=>p.name))),g=h.stringify(f)}else if("path"in u)g=u.path,h=n.find(p=>p.re.test(g)),h&&(f=h.parse(g),y=h.record.name);else{if(h=d.name?s.get(d.name):n.find(p=>p.re.test(d.path)),!h)throw Pi(1,{location:u,currentLocation:d});y=h.record.name,f=xe({},d.params,u.params),g=h.stringify(f)}const _=[];let m=h;for(;m;)_.unshift(m.record),m=m.parent;return{name:y,path:g,params:f,matched:_,meta:OE(_)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Ff(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function kE(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:RE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function RE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function $f(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function OE(t){return t.reduce((e,n)=>xe(e,n.meta),{})}function Bf(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function by(t,e){return e.children.some(n=>n===t||by(t,n))}const wy=/#/g,DE=/&/g,PE=/\//g,ME=/=/g,LE=/\?/g,_y=/\+/g,NE=/%5B/g,FE=/%5D/g,Ty=/%5E/g,$E=/%60/g,Sy=/%7B/g,BE=/%7C/g,Ey=/%7D/g,UE=/%20/g;function _d(t){return encodeURI(""+t).replace(BE,"|").replace(NE,"[").replace(FE,"]")}function VE(t){return _d(t).replace(Sy,"{").replace(Ey,"}").replace(Ty,"^")}function ru(t){return _d(t).replace(_y,"%2B").replace(UE,"+").replace(wy,"%23").replace(DE,"%26").replace($E,"`").replace(Sy,"{").replace(Ey,"}").replace(Ty,"^")}function jE(t){return ru(t).replace(ME,"%3D")}function zE(t){return _d(t).replace(wy,"%23").replace(LE,"%3F")}function qE(t){return t==null?"":zE(t).replace(PE,"%2F")}function Sa(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function HE(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(_y," "),o=r.indexOf("="),a=Sa(o<0?r:r.slice(0,o)),l=o<0?null:Sa(r.slice(o+1));if(a in e){let c=e[a];sn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Uf(t){let e="";for(let n in t){const s=t[n];if(n=jE(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(sn(s)?s.map(r=>r&&ru(r)):[s&&ru(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function GE(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=sn(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const KE=Symbol(""),Vf=Symbol(""),Td=Symbol(""),Sd=Symbol(""),ou=Symbol("");function ar(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function ts(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=d=>{d===!1?a(Pi(4,{from:n,to:e})):d instanceof Error?a(d):vE(d)?a(Pi(2,{from:e,to:d})):(r&&s.enterCallbacks[i]===r&&typeof d=="function"&&r.push(d),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(d=>a(d))})}function cc(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(WE(a)){const c=(a.__vccOpts||a)[e];c&&i.push(ts(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=eE(c)?c.default:c;r.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&ts(h,n,s,r,o)()}))}}return i}function WE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function jf(t){const e=Ot(Td),n=Ot(Sd),s=Ae(()=>e.resolve(Oe(t.to))),i=Ae(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const h=d.findIndex(Di.bind(null,u));if(h>-1)return h;const f=zf(l[c-2]);return c>1&&zf(u)===f&&d[d.length-1].path!==f?d.findIndex(Di.bind(null,l[c-2])):h}),r=Ae(()=>i.value>-1&&JE(n.params,s.value.params)),o=Ae(()=>i.value>-1&&i.value===n.matched.length-1&&my(n.params,s.value.params));function a(l={}){return XE(l)?e[Oe(t.replace)?"replace":"push"](Oe(t.to)).catch(Sr):Promise.resolve()}return{route:s,href:Ae(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const YE=zn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:jf,setup(t,{slots:e}){const n=si(jf(t)),{options:s}=Ot(Td),i=Ae(()=>({[qf(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[qf(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:ft("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),QE=YE;function XE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function JE(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!sn(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function zf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const qf=(t,e,n)=>t??e??n,ZE=zn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Ot(ou),i=Ae(()=>t.route||s.value),r=Ot(Vf,0),o=Ae(()=>{let c=Oe(r);const{matched:u}=i.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=Ae(()=>i.value.matched[o.value]);Dn(Vf,Ae(()=>o.value+1)),Dn(KE,a),Dn(ou,i);const l=Ee();return hn(()=>[l.value,a.value,t.name],([c,u,d],[h,f,g])=>{u&&(u.instances[d]=c,f&&f!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!Di(u,f)||!h)&&(u.enterCallbacks[d]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,d=a.value,h=d&&d.components[u];if(!h)return Hf(n.default,{Component:h,route:c});const f=d.props[u],g=f?f===!0?c.params:typeof f=="function"?f(c):f:null,_=ft(h,xe({},g,e,{onVnodeUnmounted:m=>{m.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return Hf(n.default,{Component:_,route:c})||_}}});function Hf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Iy=ZE;function eI(t){const e=AE(t.routes,t),n=t.parseQuery||HE,s=t.stringifyQuery||Uf,i=t.history,r=ar(),o=ar(),a=ar(),l=Wm(Qn);let c=Qn;mi&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ac.bind(null,P=>""+P),d=ac.bind(null,qE),h=ac.bind(null,Sa);function f(P,G){let q,Z;return yy(P)?(q=e.getRecordMatcher(P),Z=G):Z=P,e.addRoute(Z,q)}function g(P){const G=e.getRecordMatcher(P);G&&e.removeRoute(G)}function y(){return e.getRoutes().map(P=>P.record)}function _(P){return!!e.getRecordMatcher(P)}function m(P,G){if(G=xe({},G||l.value),typeof P=="string"){const b=lc(n,P,G.path),w=e.resolve({path:b.path},G),R=i.createHref(b.fullPath);return xe(b,w,{params:h(w.params),hash:Sa(b.hash),redirectedFrom:void 0,href:R})}let q;if("path"in P)q=xe({},P,{path:lc(n,P.path,G.path).path});else{const b=xe({},P.params);for(const w in b)b[w]==null&&delete b[w];q=xe({},P,{params:d(P.params)}),G.params=d(G.params)}const Z=e.resolve(q,G),Te=P.hash||"";Z.params=u(h(Z.params));const Be=sE(s,xe({},P,{hash:VE(Te),path:Z.path})),ge=i.createHref(Be);return xe({fullPath:Be,hash:Te,query:s===Uf?GE(P.query):P.query||{}},Z,{redirectedFrom:void 0,href:ge})}function p(P){return typeof P=="string"?lc(n,P,l.value.path):xe({},P)}function v(P,G){if(c!==P)return Pi(8,{from:G,to:P})}function S(P){return C(P)}function E(P){return S(xe(p(P),{replace:!0}))}function I(P){const G=P.matched[P.matched.length-1];if(G&&G.redirect){const{redirect:q}=G;let Z=typeof q=="function"?q(P):q;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=p(Z):{path:Z},Z.params={}),xe({query:P.query,hash:P.hash,params:"path"in Z?{}:P.params},Z)}}function C(P,G){const q=c=m(P),Z=l.value,Te=P.state,Be=P.force,ge=P.replace===!0,b=I(q);if(b)return C(xe(p(b),{state:typeof b=="object"?xe({},Te,b.state):Te,force:Be,replace:ge}),G||q);const w=q;w.redirectedFrom=G;let R;return!Be&&iE(s,Z,q)&&(R=Pi(16,{to:w,from:Z}),Pt(Z,Z,!0,!1)),(R?Promise.resolve(R):A(w,Z)).catch(O=>Tn(O)?Tn(O,2)?O:Ge(O):me(O,w,Z)).then(O=>{if(O){if(Tn(O,2))return C(xe({replace:ge},p(O.to),{state:typeof O.to=="object"?xe({},Te,O.to.state):Te,force:Be}),G||w)}else O=x(w,Z,!0,ge,Te);return $(w,Z,O),O})}function T(P,G){const q=v(P,G);return q?Promise.reject(q):Promise.resolve()}function A(P,G){let q;const[Z,Te,Be]=tI(P,G);q=cc(Z.reverse(),"beforeRouteLeave",P,G);for(const b of Z)b.leaveGuards.forEach(w=>{q.push(ts(w,P,G))});const ge=T.bind(null,P,G);return q.push(ge),fi(q).then(()=>{q=[];for(const b of r.list())q.push(ts(b,P,G));return q.push(ge),fi(q)}).then(()=>{q=cc(Te,"beforeRouteUpdate",P,G);for(const b of Te)b.updateGuards.forEach(w=>{q.push(ts(w,P,G))});return q.push(ge),fi(q)}).then(()=>{q=[];for(const b of P.matched)if(b.beforeEnter&&!G.matched.includes(b))if(sn(b.beforeEnter))for(const w of b.beforeEnter)q.push(ts(w,P,G));else q.push(ts(b.beforeEnter,P,G));return q.push(ge),fi(q)}).then(()=>(P.matched.forEach(b=>b.enterCallbacks={}),q=cc(Be,"beforeRouteEnter",P,G),q.push(ge),fi(q))).then(()=>{q=[];for(const b of o.list())q.push(ts(b,P,G));return q.push(ge),fi(q)}).catch(b=>Tn(b,8)?b:Promise.reject(b))}function $(P,G,q){for(const Z of a.list())Z(P,G,q)}function x(P,G,q,Z,Te){const Be=v(P,G);if(Be)return Be;const ge=G===Qn,b=mi?history.state:{};q&&(Z||ge?i.replace(P.fullPath,xe({scroll:ge&&b&&b.scroll},Te)):i.push(P.fullPath,Te)),l.value=P,Pt(P,G,q,ge),Ge()}let k;function U(){k||(k=i.listen((P,G,q)=>{if(!No.listening)return;const Z=m(P),Te=I(Z);if(Te){C(xe(Te,{replace:!0}),Z).catch(Sr);return}c=Z;const Be=l.value;mi&&hE(Df(Be.fullPath,q.delta),dl()),A(Z,Be).catch(ge=>Tn(ge,12)?ge:Tn(ge,2)?(C(ge.to,Z).then(b=>{Tn(b,20)&&!q.delta&&q.type===Br.pop&&i.go(-1,!1)}).catch(Sr),Promise.reject()):(q.delta&&i.go(-q.delta,!1),me(ge,Z,Be))).then(ge=>{ge=ge||x(Z,Be,!1),ge&&(q.delta&&!Tn(ge,8)?i.go(-q.delta,!1):q.type===Br.pop&&Tn(ge,20)&&i.go(-1,!1)),$(Z,Be,ge)}).catch(Sr)}))}let F=ar(),we=ar(),W;function me(P,G,q){Ge(P);const Z=we.list();return Z.length?Z.forEach(Te=>Te(P,G,q)):console.error(P),Promise.reject(P)}function de(){return W&&l.value!==Qn?Promise.resolve():new Promise((P,G)=>{F.add([P,G])})}function Ge(P){return W||(W=!P,U(),F.list().forEach(([G,q])=>P?q(P):G()),F.reset()),P}function Pt(P,G,q,Z){const{scrollBehavior:Te}=t;if(!mi||!Te)return Promise.resolve();const Be=!q&&fE(Df(P.fullPath,0))||(Z||!q)&&history.state&&history.state.scroll||null;return jt().then(()=>Te(P,G,Be)).then(ge=>ge&&dE(ge)).catch(ge=>me(ge,P,G))}const It=P=>i.go(P);let ct;const Gn=new Set,No={currentRoute:l,listening:!0,addRoute:f,removeRoute:g,hasRoute:_,getRoutes:y,resolve:m,options:t,push:S,replace:E,go:It,back:()=>It(-1),forward:()=>It(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:we.add,isReady:de,install(P){const G=this;P.component("RouterLink",QE),P.component("RouterView",Iy),P.config.globalProperties.$router=G,Object.defineProperty(P.config.globalProperties,"$route",{enumerable:!0,get:()=>Oe(l)}),mi&&!ct&&l.value===Qn&&(ct=!0,S(i.location).catch(Te=>{}));const q={};for(const Te in Qn)q[Te]=Ae(()=>l.value[Te]);P.provide(Td,G),P.provide(Sd,si(q)),P.provide(ou,l);const Z=P.unmount;Gn.add(P),P.unmount=function(){Gn.delete(P),Gn.size<1&&(c=Qn,k&&k(),k=null,l.value=Qn,ct=!1,W=!1),Z()}}};return No}function fi(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function tI(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Di(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Di(c,l))||i.push(l))}return[n,s,i]}function Cy(){return Ot(Sd)}const nI="/assets/house-34673a06.svg",sI="/assets/basket-47df7538.svg",iI="/assets/books-8e6af424.svg",rI="/assets/user-fbc1991a.svg",oI="/assets/log-0523a230.svg",aI="/assets/google-3d3eec27.svg";/**
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
 */const xy=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},lI=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ay={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let h=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(h=64)),s.push(n[u],n[d],n[h],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):lI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||d==null)throw Error();const h=r<<2|a>>4;if(s.push(h),c!==64){const f=a<<4&240|c>>2;if(s.push(f),d!==64){const g=c<<6&192|d;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},cI=function(t){const e=xy(t);return Ay.encodeByteArray(e,!0)},Ea=function(t){return cI(t).replace(/\./g,"")},ky=function(t){try{return Ay.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function uI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const dI=()=>uI().__FIREBASE_DEFAULTS__,hI=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},fI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ky(t[1]);return e&&JSON.parse(e)},Ed=()=>{try{return dI()||hI()||fI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ry=t=>{var e,n;return(n=(e=Ed())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},pI=t=>{const e=Ry(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},mI=()=>{var t;return(t=Ed())===null||t===void 0?void 0:t.config},Oy=t=>{var e;return(e=Ed())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class gI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function yI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ea(JSON.stringify(n)),Ea(JSON.stringify(o)),a].join(".")}/**
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
 */function wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wt())}function Dy(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function bI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wI(){const t=wt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Py(){try{return typeof indexedDB=="object"}catch{return!1}}function My(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function _I(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const TI="FirebaseError";class on extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=TI,Object.setPrototypeOf(this,on.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ri.prototype.create)}}class ri{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?SI(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new on(i,a,s)}}function SI(t,e){return t.replace(EI,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const EI=/\{\$([^}]+)}/g;function II(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ur(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Gf(r)&&Gf(o)){if(!Ur(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Gf(t){return t!==null&&typeof t=="object"}/**
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
 */function ho(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function CI(t,e){const n=new xI(t,e);return n.subscribe.bind(n)}class xI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");AI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=uc),i.error===void 0&&(i.error=uc),i.complete===void 0&&(i.complete=uc);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function AI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function uc(){}/**
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
 */const kI=1e3,RI=2,OI=4*60*60*1e3,DI=.5;function Kf(t,e=kI,n=RI){const s=e*Math.pow(n,t),i=Math.round(DI*s*(Math.random()-.5)*2);return Math.min(OI,s+i)}/**
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
 */function tt(t){return t&&t._delegate?t._delegate:t}class rn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const As="[DEFAULT]";/**
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
 */class PI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new gI;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(LI(e))try{this.getOrInitializeService({instanceIdentifier:As})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=As){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=As){return this.instances.has(e)}getOptions(e=As){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:MI(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=As){return this.component?this.component.multipleInstances?e:As:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function MI(t){return t===As?void 0:t}function LI(t){return t.instantiationMode==="EAGER"}/**
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
 */class NI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new PI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ie||(Ie={}));const FI={debug:Ie.DEBUG,verbose:Ie.VERBOSE,info:Ie.INFO,warn:Ie.WARN,error:Ie.ERROR,silent:Ie.SILENT},$I=Ie.INFO,BI={[Ie.DEBUG]:"log",[Ie.VERBOSE]:"log",[Ie.INFO]:"info",[Ie.WARN]:"warn",[Ie.ERROR]:"error"},UI=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=BI[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hl{constructor(e){this.name=e,this._logLevel=$I,this._logHandler=UI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?FI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ie.DEBUG,...e),this._logHandler(this,Ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ie.VERBOSE,...e),this._logHandler(this,Ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ie.INFO,...e),this._logHandler(this,Ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ie.WARN,...e),this._logHandler(this,Ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ie.ERROR,...e),this._logHandler(this,Ie.ERROR,...e)}}const VI=(t,e)=>e.some(n=>t instanceof n);let Wf,Yf;function jI(){return Wf||(Wf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zI(){return Yf||(Yf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ly=new WeakMap,au=new WeakMap,Ny=new WeakMap,dc=new WeakMap,Id=new WeakMap;function qI(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(us(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ly.set(n,t)}).catch(()=>{}),Id.set(e,t),e}function HI(t){if(au.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});au.set(t,e)}let lu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return au.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ny.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return us(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function GI(t){lu=t(lu)}function KI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(hc(this),e,...n);return Ny.set(s,e.sort?e.sort():[e]),us(s)}:zI().includes(t)?function(...e){return t.apply(hc(this),e),us(Ly.get(this))}:function(...e){return us(t.apply(hc(this),e))}}function WI(t){return typeof t=="function"?KI(t):(t instanceof IDBTransaction&&HI(t),VI(t,jI())?new Proxy(t,lu):t)}function us(t){if(t instanceof IDBRequest)return qI(t);if(dc.has(t))return dc.get(t);const e=WI(t);return e!==t&&(dc.set(t,e),Id.set(e,t)),e}const hc=t=>Id.get(t);function Fy(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=us(o);return s&&o.addEventListener("upgradeneeded",l=>{s(us(o.result),l.oldVersion,l.newVersion,us(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const YI=["get","getKey","getAll","getAllKeys","count"],QI=["put","add","delete","clear"],fc=new Map;function Qf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fc.get(e))return fc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=QI.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||YI.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return fc.set(e,r),r}GI(t=>({...t,get:(e,n,s)=>Qf(e,n)||t.get(e,n,s),has:(e,n)=>!!Qf(e,n)||t.has(e,n)}));/**
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
 */class XI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(JI(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function JI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const cu="@firebase/app",Xf="0.9.3";/**
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
 */const Ys=new hl("@firebase/app"),ZI="@firebase/app-compat",eC="@firebase/analytics-compat",tC="@firebase/analytics",nC="@firebase/app-check-compat",sC="@firebase/app-check",iC="@firebase/auth",rC="@firebase/auth-compat",oC="@firebase/database",aC="@firebase/database-compat",lC="@firebase/functions",cC="@firebase/functions-compat",uC="@firebase/installations",dC="@firebase/installations-compat",hC="@firebase/messaging",fC="@firebase/messaging-compat",pC="@firebase/performance",mC="@firebase/performance-compat",gC="@firebase/remote-config",yC="@firebase/remote-config-compat",vC="@firebase/storage",bC="@firebase/storage-compat",wC="@firebase/firestore",_C="@firebase/firestore-compat",TC="firebase",SC="9.17.1";/**
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
 */const uu="[DEFAULT]",EC={[cu]:"fire-core",[ZI]:"fire-core-compat",[tC]:"fire-analytics",[eC]:"fire-analytics-compat",[sC]:"fire-app-check",[nC]:"fire-app-check-compat",[iC]:"fire-auth",[rC]:"fire-auth-compat",[oC]:"fire-rtdb",[aC]:"fire-rtdb-compat",[lC]:"fire-fn",[cC]:"fire-fn-compat",[uC]:"fire-iid",[dC]:"fire-iid-compat",[hC]:"fire-fcm",[fC]:"fire-fcm-compat",[pC]:"fire-perf",[mC]:"fire-perf-compat",[gC]:"fire-rc",[yC]:"fire-rc-compat",[vC]:"fire-gcs",[bC]:"fire-gcs-compat",[wC]:"fire-fst",[_C]:"fire-fst-compat","fire-js":"fire-js",[TC]:"fire-js-all"};/**
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
 */const Ia=new Map,du=new Map;function IC(t,e){try{t.container.addComponent(e)}catch(n){Ys.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function vn(t){const e=t.name;if(du.has(e))return Ys.debug(`There were multiple attempts to register component ${e}.`),!1;du.set(e,t);for(const n of Ia.values())IC(n,t);return!0}function oi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const CC={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ds=new ri("app","Firebase",CC);/**
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
 */class xC{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ds.create("app-deleted",{appName:this._name})}}/**
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
 */const fo=SC;function $y(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:uu,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw ds.create("bad-app-name",{appName:String(i)});if(n||(n=mI()),!n)throw ds.create("no-options");const r=Ia.get(i);if(r){if(Ur(n,r.options)&&Ur(s,r.config))return r;throw ds.create("duplicate-app",{appName:i})}const o=new NI(i);for(const l of du.values())o.addComponent(l);const a=new xC(n,s,o);return Ia.set(i,a),a}function Cd(t=uu){const e=Ia.get(t);if(!e&&t===uu)return $y();if(!e)throw ds.create("no-app",{appName:t});return e}function Wt(t,e,n){var s;let i=(s=EC[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ys.warn(a.join(" "));return}vn(new rn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const AC="firebase-heartbeat-database",kC=1,Vr="firebase-heartbeat-store";let pc=null;function By(){return pc||(pc=Fy(AC,kC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Vr)}}}).catch(t=>{throw ds.create("idb-open",{originalErrorMessage:t.message})})),pc}async function RC(t){try{return(await By()).transaction(Vr).objectStore(Vr).get(Uy(t))}catch(e){if(e instanceof on)Ys.warn(e.message);else{const n=ds.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ys.warn(n.message)}}}async function Jf(t,e){try{const s=(await By()).transaction(Vr,"readwrite");return await s.objectStore(Vr).put(e,Uy(t)),s.done}catch(n){if(n instanceof on)Ys.warn(n.message);else{const s=ds.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ys.warn(s.message)}}}function Uy(t){return`${t.name}!${t.options.appId}`}/**
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
 */const OC=1024,DC=30*24*60*60*1e3;class PC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new LC(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Zf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=DC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Zf(),{heartbeatsToSend:n,unsentEntries:s}=MC(this._heartbeatsCache.heartbeats),i=Ea(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Zf(){return new Date().toISOString().substring(0,10)}function MC(t,e=OC){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),ep(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ep(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class LC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Py()?My().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await RC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Jf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Jf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ep(t){return Ea(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function NC(t){vn(new rn("platform-logger",e=>new XI(e),"PRIVATE")),vn(new rn("heartbeat",e=>new PC(e),"PRIVATE")),Wt(cu,Xf,t),Wt(cu,Xf,"esm2017"),Wt("fire-js","")}NC("");var FC="firebase",$C="9.17.1";/**
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
 */Wt(FC,$C,"app");const Vy="@firebase/installations",xd="0.6.3";/**
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
 */const jy=1e4,zy=`w:${xd}`,qy="FIS_v2",BC="https://firebaseinstallations.googleapis.com/v1",UC=60*60*1e3,VC="installations",jC="Installations";/**
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
 */const zC={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Qs=new ri(VC,jC,zC);function Hy(t){return t instanceof on&&t.code.includes("request-failed")}/**
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
 */function Gy({projectId:t}){return`${BC}/projects/${t}/installations`}function Ky(t){return{token:t.token,requestStatus:2,expiresIn:HC(t.expiresIn),creationTime:Date.now()}}async function Wy(t,e){const s=(await e.json()).error;return Qs.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Yy({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function qC(t,{refreshToken:e}){const n=Yy(t);return n.append("Authorization",GC(e)),n}async function Qy(t){const e=await t();return e.status>=500&&e.status<600?t():e}function HC(t){return Number(t.replace("s","000"))}function GC(t){return`${qy} ${t}`}/**
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
 */async function KC({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=Gy(t),i=Yy(t),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:qy,appId:t.appId,sdkVersion:zy},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Qy(()=>fetch(s,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:Ky(c.authToken)}}else throw await Wy("Create Installation",l)}/**
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
 */function Xy(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function WC(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const YC=/^[cdef][\w-]{21}$/,hu="";function QC(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=XC(t);return YC.test(n)?n:hu}catch{return hu}}function XC(t){return WC(t).substr(0,22)}/**
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
 */function fl(t){return`${t.appName}!${t.appId}`}/**
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
 */const Jy=new Map;function Zy(t,e){const n=fl(t);ev(n,e),JC(n,e)}function ev(t,e){const n=Jy.get(t);if(n)for(const s of n)s(e)}function JC(t,e){const n=ZC();n&&n.postMessage({key:t,fid:e}),ex()}let Ds=null;function ZC(){return!Ds&&"BroadcastChannel"in self&&(Ds=new BroadcastChannel("[Firebase] FID Change"),Ds.onmessage=t=>{ev(t.data.key,t.data.fid)}),Ds}function ex(){Jy.size===0&&Ds&&(Ds.close(),Ds=null)}/**
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
 */const tx="firebase-installations-database",nx=1,Xs="firebase-installations-store";let mc=null;function Ad(){return mc||(mc=Fy(tx,nx,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Xs)}}})),mc}async function Ca(t,e){const n=fl(t),i=(await Ad()).transaction(Xs,"readwrite"),r=i.objectStore(Xs),o=await r.get(n);return await r.put(e,n),await i.done,(!o||o.fid!==e.fid)&&Zy(t,e.fid),e}async function tv(t){const e=fl(t),s=(await Ad()).transaction(Xs,"readwrite");await s.objectStore(Xs).delete(e),await s.done}async function pl(t,e){const n=fl(t),i=(await Ad()).transaction(Xs,"readwrite"),r=i.objectStore(Xs),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&Zy(t,a.fid),a}/**
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
 */async function kd(t){let e;const n=await pl(t.appConfig,s=>{const i=sx(s),r=ix(t,i);return e=r.registrationPromise,r.installationEntry});return n.fid===hu?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function sx(t){const e=t||{fid:QC(),registrationStatus:0};return nv(e)}function ix(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Qs.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=rx(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:ox(t)}:{installationEntry:e}}async function rx(t,e){try{const n=await KC(t,e);return Ca(t.appConfig,n)}catch(n){throw Hy(n)&&n.customData.serverCode===409?await tv(t.appConfig):await Ca(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function ox(t){let e=await tp(t.appConfig);for(;e.registrationStatus===1;)await Xy(100),e=await tp(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await kd(t);return s||n}return e}function tp(t){return pl(t,e=>{if(!e)throw Qs.create("installation-not-found");return nv(e)})}function nv(t){return ax(t)?{fid:t.fid,registrationStatus:0}:t}function ax(t){return t.registrationStatus===1&&t.registrationTime+jy<Date.now()}/**
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
 */async function lx({appConfig:t,heartbeatServiceProvider:e},n){const s=cx(t,n),i=qC(t,n),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:zy,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Qy(()=>fetch(s,a));if(l.ok){const c=await l.json();return Ky(c)}else throw await Wy("Generate Auth Token",l)}function cx(t,{fid:e}){return`${Gy(t)}/${e}/authTokens:generate`}/**
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
 */async function Rd(t,e=!1){let n;const s=await pl(t.appConfig,r=>{if(!sv(r))throw Qs.create("not-registered");const o=r.authToken;if(!e&&hx(o))return r;if(o.requestStatus===1)return n=ux(t,e),r;{if(!navigator.onLine)throw Qs.create("app-offline");const a=px(r);return n=dx(t,a),a}});return n?await n:s.authToken}async function ux(t,e){let n=await np(t.appConfig);for(;n.authToken.requestStatus===1;)await Xy(100),n=await np(t.appConfig);const s=n.authToken;return s.requestStatus===0?Rd(t,e):s}function np(t){return pl(t,e=>{if(!sv(e))throw Qs.create("not-registered");const n=e.authToken;return mx(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function dx(t,e){try{const n=await lx(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Ca(t.appConfig,s),n}catch(n){if(Hy(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await tv(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ca(t.appConfig,s)}throw n}}function sv(t){return t!==void 0&&t.registrationStatus===2}function hx(t){return t.requestStatus===2&&!fx(t)}function fx(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+UC}function px(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function mx(t){return t.requestStatus===1&&t.requestTime+jy<Date.now()}/**
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
 */async function gx(t){const e=t,{installationEntry:n,registrationPromise:s}=await kd(e);return s?s.catch(console.error):Rd(e).catch(console.error),n.fid}/**
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
 */async function yx(t,e=!1){const n=t;return await vx(n),(await Rd(n,e)).token}async function vx(t){const{registrationPromise:e}=await kd(t);e&&await e}/**
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
 */function bx(t){if(!t||!t.options)throw gc("App Configuration");if(!t.name)throw gc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw gc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function gc(t){return Qs.create("missing-app-config-values",{valueName:t})}/**
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
 */const iv="installations",wx="installations-internal",_x=t=>{const e=t.getProvider("app").getImmediate(),n=bx(e),s=oi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},Tx=t=>{const e=t.getProvider("app").getImmediate(),n=oi(e,iv).getImmediate();return{getId:()=>gx(n),getToken:i=>yx(n,i)}};function Sx(){vn(new rn(iv,_x,"PUBLIC")),vn(new rn(wx,Tx,"PRIVATE"))}Sx();Wt(Vy,xd);Wt(Vy,xd,"esm2017");/**
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
 */const xa="analytics",Ex="firebase_id",Ix="origin",Cx=60*1e3,xx="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",rv="https://www.googletagmanager.com/gtag/js";/**
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
 */const zt=new hl("@firebase/analytics");/**
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
 */function ov(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Ax(t,e){const n=document.createElement("script");n.src=`${rv}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function kx(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Rx(t,e,n,s,i,r){const o=s[i];try{if(o)await e[o];else{const l=(await ov(n)).find(c=>c.measurementId===i);l&&await e[l.appId]}}catch(a){zt.error(a)}t("config",i,r)}async function Ox(t,e,n,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await ov(n);for(const l of o){const c=a.find(d=>d.measurementId===l),u=c&&e[c.appId];if(u)r.push(u);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",s,i||{})}catch(r){zt.error(r)}}function Dx(t,e,n,s){async function i(r,o,a){try{r==="event"?await Ox(t,e,n,o,a):r==="config"?await Rx(t,e,n,s,o,a):r==="consent"?t("consent","update",a):t("set",o)}catch(l){zt.error(l)}}return i}function Px(t,e,n,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=Dx(r,t,e,n),{gtagCore:r,wrappedGtag:window[i]}}function Mx(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(rv)&&n.src.includes(t))return n;return null}/**
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
 */const Lx={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Yt=new ri("analytics","Analytics",Lx);/**
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
 */const Nx=30,Fx=1e3;class $x{constructor(e={},n=Fx){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const av=new $x;function Bx(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Ux(t){var e;const{appId:n,apiKey:s}=t,i={method:"GET",headers:Bx(s)},r=xx.replace("{app-id}",n),o=await fetch(r,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw Yt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Vx(t,e=av,n){const{appId:s,apiKey:i,measurementId:r}=t.options;if(!s)throw Yt.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw Yt.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new qx;return setTimeout(async()=>{a.abort()},n!==void 0?n:Cx),lv({appId:s,apiKey:i,measurementId:r},o,a,e)}async function lv(t,{throttleEndTimeMillis:e,backoffCount:n},s,i=av){var r;const{appId:o,measurementId:a}=t;try{await jx(s,e)}catch(l){if(a)return zt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await Ux(t);return i.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!zx(c)){if(i.deleteThrottleMetadata(o),a)return zt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const u=Number((r=c==null?void 0:c.customData)===null||r===void 0?void 0:r.httpStatus)===503?Kf(n,i.intervalMillis,Nx):Kf(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,d),zt.debug(`Calling attemptFetch again in ${u} millis`),lv(t,d,s,i)}}function jx(t,e){return new Promise((n,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(r),s(Yt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function zx(t){if(!(t instanceof on)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class qx{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Hx(t,e,n,s,i){if(i&&i.global){t("event",n,s);return}else{const r=await e,o=Object.assign(Object.assign({},s),{send_to:r});t("event",n,o)}}/**
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
 */async function Gx(){if(Py())try{await My()}catch(t){return zt.warn(Yt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return zt.warn(Yt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Kx(t,e,n,s,i,r,o){var a;const l=Vx(t);l.then(f=>{n[f.measurementId]=f.appId,t.options.measurementId&&f.measurementId!==t.options.measurementId&&zt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>zt.error(f)),e.push(l);const c=Gx().then(f=>{if(f)return s.getId()}),[u,d]=await Promise.all([l,c]);Mx(r)||Ax(r,u.measurementId),i("js",new Date);const h=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return h[Ix]="firebase",h.update=!0,d!=null&&(h[Ex]=d),i("config",u.measurementId,h),u.measurementId}/**
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
 */class Wx{constructor(e){this.app=e}_delete(){return delete Ir[this.app.options.appId],Promise.resolve()}}let Ir={},sp=[];const ip={};let yc="dataLayer",Yx="gtag",rp,cv,op=!1;function Qx(){const t=[];if(Dy()&&t.push("This is a browser extension environment."),_I()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=Yt.create("invalid-analytics-context",{errorInfo:e});zt.warn(n.message)}}function Xx(t,e,n){Qx();const s=t.options.appId;if(!s)throw Yt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)zt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Yt.create("no-api-key");if(Ir[s]!=null)throw Yt.create("already-exists",{id:s});if(!op){kx(yc);const{wrappedGtag:r,gtagCore:o}=Px(Ir,sp,ip,yc,Yx);cv=r,rp=o,op=!0}return Ir[s]=Kx(t,sp,ip,e,rp,yc,n),new Wx(t)}function Jx(t=Cd()){t=tt(t);const e=oi(t,xa);return e.isInitialized()?e.getImmediate():Zx(t)}function Zx(t,e={}){const n=oi(t,xa);if(n.isInitialized()){const i=n.getImmediate();if(Ur(e,n.getOptions()))return i;throw Yt.create("already-initialized")}return n.initialize({options:e})}function e1(t,e,n,s){t=tt(t),Hx(cv,Ir[t.app.options.appId],e,n,s).catch(i=>zt.error(i))}const ap="@firebase/analytics",lp="0.9.3";function t1(){vn(new rn(xa,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return Xx(s,i,n)},"PUBLIC")),vn(new rn("analytics-internal",t,"PRIVATE")),Wt(ap,lp),Wt(ap,lp,"esm2017");function t(e){try{const n=e.getProvider(xa).getImmediate();return{logEvent:(s,i,r)=>e1(n,s,i,r)}}catch(n){throw Yt.create("interop-component-reg-failed",{reason:n})}}}t1();function Od(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function uv(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const n1=uv,dv=new ri("auth","Firebase",uv());/**
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
 */const cp=new hl("@firebase/auth");function ra(t,...e){cp.logLevel<=Ie.ERROR&&cp.error(`Auth (${fo}): ${t}`,...e)}/**
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
 */function bn(t,...e){throw Dd(t,...e)}function fn(t,...e){return Dd(t,...e)}function hv(t,e,n){const s=Object.assign(Object.assign({},n1()),{[e]:n});return new ri("auth","Firebase",s).create(e,{appName:t.name})}function s1(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&bn(t,"argument-error"),hv(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Dd(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return dv.create(t,...e)}function ae(t,e,...n){if(!t)throw Dd(e,...n)}function An(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ra(e),new Error(e)}function Nn(t,e){t||An(e)}/**
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
 */const up=new Map;function kn(t){Nn(t instanceof Function,"Expected a class definition");let e=up.get(t);return e?(Nn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,up.set(t,e),e)}/**
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
 */function i1(t,e){const n=oi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Ur(r,e??{}))return i;bn(i,"already-initialized")}return n.initialize({options:e})}function r1(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(kn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function fu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function o1(){return dp()==="http:"||dp()==="https:"}function dp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function a1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(o1()||Dy()||"connection"in navigator)?navigator.onLine:!0}function l1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class po{constructor(e,n){this.shortDelay=e,this.longDelay=n,Nn(n>e,"Short delay should be less than long delay!"),this.isMobile=vI()||bI()}get(){return a1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Pd(t,e){Nn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class fv{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;An("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;An("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;An("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const c1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const u1=new po(3e4,6e4);function d1(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ml(t,e,n,s,i={}){return pv(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=ho(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),fv.fetch()(mv(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function pv(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},c1),e);try{const i=new f1(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Wo(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Wo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Wo(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw hv(t,u,c);bn(t,u)}}catch(i){if(i instanceof on)throw i;bn(t,"network-request-failed")}}async function h1(t,e,n,s,i={}){const r=await ml(t,e,n,s,i);return"mfaPendingCredential"in r&&bn(t,"multi-factor-auth-required",{_serverResponse:r}),r}function mv(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Pd(t.config,i):`${t.config.apiScheme}://${i}`}class f1{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(fn(this.auth,"network-request-failed")),u1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Wo(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=fn(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function p1(t,e){return ml(t,"POST","/v1/accounts:delete",e)}async function m1(t,e){return ml(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Cr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function g1(t,e=!1){const n=tt(t),s=await n.getIdToken(e),i=Md(s);ae(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Cr(vc(i.auth_time)),issuedAtTime:Cr(vc(i.iat)),expirationTime:Cr(vc(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function vc(t){return Number(t)*1e3}function Md(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ra("JWT malformed, contained fewer than 3 sections"),null;try{const i=ky(n);return i?JSON.parse(i):(ra("Failed to decode base64 JWT payload"),null)}catch(i){return ra("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function y1(t){const e=Md(t);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function jr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof on&&v1(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function v1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class b1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class gv{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Cr(this.lastLoginAt),this.creationTime=Cr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Aa(t){var e;const n=t.auth,s=await t.getIdToken(),i=await jr(t,m1(n,{idToken:s}));ae(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?T1(r.providerUserInfo):[],a=_1(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new gv(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function w1(t){const e=tt(t);await Aa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _1(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function T1(t){return t.map(e=>{var{providerId:n}=e,s=Od(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function S1(t,e){const n=await pv(t,{},async()=>{const s=ho({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=mv(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",fv.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class zr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):y1(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ae(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await S1(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new zr;return s&&(ae(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(ae(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(ae(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zr,this.toJSON())}_performRefresh(){return An("not implemented")}}/**
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
 */function Xn(t,e){ae(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Us{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Od(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new b1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new gv(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await jr(this,this.stsTokenManager.getToken(this.auth,e));return ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return g1(this,e)}reload(){return w1(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Us(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Aa(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await jr(this,p1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,f=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(c=n.createdAt)!==null&&c!==void 0?c:void 0,p=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:v,emailVerified:S,isAnonymous:E,providerData:I,stsTokenManager:C}=n;ae(v&&C,e,"internal-error");const T=zr.fromJSON(this.name,C);ae(typeof v=="string",e,"internal-error"),Xn(d,e.name),Xn(h,e.name),ae(typeof S=="boolean",e,"internal-error"),ae(typeof E=="boolean",e,"internal-error"),Xn(f,e.name),Xn(g,e.name),Xn(y,e.name),Xn(_,e.name),Xn(m,e.name),Xn(p,e.name);const A=new Us({uid:v,auth:e,email:h,emailVerified:S,displayName:d,isAnonymous:E,photoURL:g,phoneNumber:f,tenantId:y,stsTokenManager:T,createdAt:m,lastLoginAt:p});return I&&Array.isArray(I)&&(A.providerData=I.map($=>Object.assign({},$))),_&&(A._redirectEventId=_),A}static async _fromIdTokenResponse(e,n,s=!1){const i=new zr;i.updateFromServerResponse(n);const r=new Us({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Aa(r),r}}/**
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
 */class yv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}yv.type="NONE";const hp=yv;/**
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
 */function oa(t,e,n){return`firebase:${t}:${e}:${n}`}class Ei{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=oa(this.userKey,i.apiKey,r),this.fullPersistenceKey=oa("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Us._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Ei(kn(hp),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||kn(hp);const o=oa(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=Us._fromJSON(e,u);c!==r&&(a=d),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Ei(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Ei(r,e,s))}}/**
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
 */function fp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(wv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Tv(e))return"Blackberry";if(Sv(e))return"Webos";if(Ld(e))return"Safari";if((e.includes("chrome/")||bv(e))&&!e.includes("edge/"))return"Chrome";if(_v(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function vv(t=wt()){return/firefox\//i.test(t)}function Ld(t=wt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function bv(t=wt()){return/crios\//i.test(t)}function wv(t=wt()){return/iemobile/i.test(t)}function _v(t=wt()){return/android/i.test(t)}function Tv(t=wt()){return/blackberry/i.test(t)}function Sv(t=wt()){return/webos/i.test(t)}function gl(t=wt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function E1(t=wt()){var e;return gl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function I1(){return wI()&&document.documentMode===10}function Ev(t=wt()){return gl(t)||_v(t)||Sv(t)||Tv(t)||/windows phone/i.test(t)||wv(t)}function C1(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Iv(t,e=[]){let n;switch(t){case"Browser":n=fp(wt());break;case"Worker":n=`${fp(wt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${fo}/${s}`}/**
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
 */class x1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class A1{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pp(this),this.idTokenSubscription=new pp(this),this.beforeStateQueue=new x1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dv,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=kn(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Ei.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Aa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=l1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?tt(e):null;return n&&ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(kn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ri("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&kn(e)||this._popupRedirectResolver;ae(n,this,"argument-error"),this.redirectPersistenceManager=await Ei.create(this,[kn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ae(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Iv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function yl(t){return tt(t)}class pp{constructor(e){this.auth=e,this.observer=null,this.addObserver=CI(n=>this.observer=n)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function k1(t,e,n){const s=yl(t);ae(s._canInitEmulator,s,"emulator-config-failed"),ae(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=Cv(e),{host:o,port:a}=R1(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||O1()}function Cv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function R1(t){const e=Cv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:mp(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:mp(o)}}}function mp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function O1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class xv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return An("not implemented")}_getIdTokenResponse(e){return An("not implemented")}_linkToIdToken(e,n){return An("not implemented")}_getReauthenticationResolver(e){return An("not implemented")}}/**
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
 */async function Ii(t,e){return h1(t,"POST","/v1/accounts:signInWithIdp",d1(t,e))}/**
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
 */const D1="http://localhost";class Js extends xv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Js(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):bn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Od(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Js(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ii(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ii(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ii(e,n)}buildRequest(){const e={requestUri:D1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ho(n)}return e}}/**
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
 */class Nd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class mo extends Nd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ss extends mo{constructor(){super("facebook.com")}static credential(e){return Js._fromParams({providerId:ss.PROVIDER_ID,signInMethod:ss.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ss.credentialFromTaggedObject(e)}static credentialFromError(e){return ss.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ss.credential(e.oauthAccessToken)}catch{return null}}}ss.FACEBOOK_SIGN_IN_METHOD="facebook.com";ss.PROVIDER_ID="facebook.com";/**
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
 */class xn extends mo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Js._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return xn.credential(n,s)}catch{return null}}}xn.GOOGLE_SIGN_IN_METHOD="google.com";xn.PROVIDER_ID="google.com";/**
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
 */class is extends mo{constructor(){super("github.com")}static credential(e){return Js._fromParams({providerId:is.PROVIDER_ID,signInMethod:is.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return is.credentialFromTaggedObject(e)}static credentialFromError(e){return is.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return is.credential(e.oauthAccessToken)}catch{return null}}}is.GITHUB_SIGN_IN_METHOD="github.com";is.PROVIDER_ID="github.com";/**
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
 */class rs extends mo{constructor(){super("twitter.com")}static credential(e,n){return Js._fromParams({providerId:rs.PROVIDER_ID,signInMethod:rs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return rs.credentialFromTaggedObject(e)}static credentialFromError(e){return rs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return rs.credential(n,s)}catch{return null}}}rs.TWITTER_SIGN_IN_METHOD="twitter.com";rs.PROVIDER_ID="twitter.com";/**
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
 */class Mi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Us._fromIdTokenResponse(e,s,i),o=gp(s);return new Mi({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=gp(s);return new Mi({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function gp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ka extends on{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,ka.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new ka(e,n,s,i)}}function Av(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?ka._fromErrorAndOperation(t,r,e,s):r})}async function P1(t,e,n=!1){const s=await jr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Mi._forOperation(t,"link",s)}/**
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
 */async function M1(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await jr(t,Av(s,i,e,t),n);ae(r.idToken,s,"internal-error");const o=Md(r.idToken);ae(o,s,"internal-error");const{sub:a}=o;return ae(t.uid===a,s,"user-mismatch"),Mi._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&bn(s,"user-mismatch"),r}}/**
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
 */async function L1(t,e,n=!1){const s="signIn",i=await Av(t,s,e),r=await Mi._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}function N1(t,e,n,s){return tt(t).onIdTokenChanged(e,n,s)}function F1(t,e,n){return tt(t).beforeAuthStateChanged(e,n)}function $1(t,e,n,s){return tt(t).onAuthStateChanged(e,n,s)}const Ra="__sak";/**
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
 */class kv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ra,"1"),this.storage.removeItem(Ra),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function B1(){const t=wt();return Ld(t)||gl(t)}const U1=1e3,V1=10;class Rv extends kv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=B1()&&C1(),this.fallbackToPolling=Ev(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);I1()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,V1):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},U1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Rv.type="LOCAL";const j1=Rv;/**
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
 */class Ov extends kv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ov.type="SESSION";const Dv=Ov;/**
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
 */function z1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class vl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new vl(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await z1(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vl.receivers=[];/**
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
 */function Fd(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class q1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Fd("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(h.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function pn(){return window}function H1(t){pn().location.href=t}/**
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
 */function Pv(){return typeof pn().WorkerGlobalScope<"u"&&typeof pn().importScripts=="function"}async function G1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function K1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function W1(){return Pv()?self:null}/**
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
 */const Mv="firebaseLocalStorageDb",Y1=1,Oa="firebaseLocalStorage",Lv="fbase_key";class go{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function bl(t,e){return t.transaction([Oa],e?"readwrite":"readonly").objectStore(Oa)}function Q1(){const t=indexedDB.deleteDatabase(Mv);return new go(t).toPromise()}function pu(){const t=indexedDB.open(Mv,Y1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Oa,{keyPath:Lv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Oa)?e(s):(s.close(),await Q1(),e(await pu()))})})}async function yp(t,e,n){const s=bl(t,!0).put({[Lv]:e,value:n});return new go(s).toPromise()}async function X1(t,e){const n=bl(t,!1).get(e),s=await new go(n).toPromise();return s===void 0?null:s.value}function vp(t,e){const n=bl(t,!0).delete(e);return new go(n).toPromise()}const J1=800,Z1=3;class Nv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await pu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Z1)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Pv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vl._getInstance(W1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await G1(),!this.activeServiceWorker)return;this.sender=new q1(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||K1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await pu();return await yp(e,Ra,"1"),await vp(e,Ra),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>yp(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>X1(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>vp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=bl(i,!1).getAll();return new go(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),J1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Nv.type="LOCAL";const eA=Nv;/**
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
 */function tA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function nA(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=fn("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",tA().appendChild(s)})}function sA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new po(3e4,6e4);/**
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
 */function Fv(t,e){return e?kn(e):(ae(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class $d extends xv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ii(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ii(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ii(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function iA(t){return L1(t.auth,new $d(t),t.bypassAuthState)}function rA(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),M1(n,new $d(t),t.bypassAuthState)}async function oA(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),P1(n,new $d(t),t.bypassAuthState)}/**
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
 */class $v{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return iA;case"linkViaPopup":case"linkViaRedirect":return oA;case"reauthViaPopup":case"reauthViaRedirect":return rA;default:bn(this.auth,"internal-error")}}resolve(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const aA=new po(2e3,1e4);async function lA(t,e,n){const s=yl(t);s1(t,e,Nd);const i=Fv(s,n);return new Ps(s,"signInViaPopup",e,i).executeNotNull()}class Ps extends $v{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Ps.currentPopupAction&&Ps.currentPopupAction.cancel(),Ps.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){Nn(this.filter.length===1,"Popup operations only handle one event");const e=Fd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ps.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,aA.get())};e()}}Ps.currentPopupAction=null;/**
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
 */const cA="pendingRedirect",aa=new Map;class uA extends $v{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=aa.get(this.auth._key());if(!e){try{const s=await dA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}aa.set(this.auth._key(),e)}return this.bypassAuthState||aa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dA(t,e){const n=pA(e),s=fA(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function hA(t,e){aa.set(t._key(),e)}function fA(t){return kn(t._redirectPersistence)}function pA(t){return oa(cA,t.config.apiKey,t.name)}async function mA(t,e,n=!1){const s=yl(t),i=Fv(s,e),o=await new uA(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const gA=10*60*1e3;class yA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Bv(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(fn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gA&&this.cachedEventUids.clear(),this.cachedEventUids.has(bp(e))}saveEventToCache(e){this.cachedEventUids.add(bp(e)),this.lastProcessedEventTime=Date.now()}}function bp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Bv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bv(t);default:return!1}}/**
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
 */async function bA(t,e={}){return ml(t,"GET","/v1/projects",e)}/**
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
 */const wA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_A=/^https?/;async function TA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await bA(t);for(const n of e)try{if(SA(n))return}catch{}bn(t,"unauthorized-domain")}function SA(t){const e=fu(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!_A.test(n))return!1;if(wA.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const EA=new po(3e4,6e4);function wp(){const t=pn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function IA(t){return new Promise((e,n)=>{var s,i,r;function o(){wp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wp(),n(fn(t,"network-request-failed"))},timeout:EA.get()})}if(!((i=(s=pn().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=pn().gapi)===null||r===void 0)&&r.load)o();else{const a=sA("iframefcb");return pn()[a]=()=>{gapi.load?o():n(fn(t,"network-request-failed"))},nA(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw la=null,e})}let la=null;function CA(t){return la=la||IA(t),la}/**
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
 */const xA=new po(5e3,15e3),AA="__/auth/iframe",kA="emulator/auth/iframe",RA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},OA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function DA(t){const e=t.config;ae(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Pd(e,kA):`https://${t.config.authDomain}/${AA}`,s={apiKey:e.apiKey,appName:t.name,v:fo},i=OA.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${ho(s).slice(1)}`}async function PA(t){const e=await CA(t),n=pn().gapi;return ae(n,t,"internal-error"),e.open({where:document.body,url:DA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:RA,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=fn(t,"network-request-failed"),a=pn().setTimeout(()=>{r(o)},xA.get());function l(){pn().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const MA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},LA=500,NA=600,FA="_blank",$A="http://localhost";class _p{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function BA(t,e,n,s=LA,i=NA){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},MA),{width:s.toString(),height:i.toString(),top:r,left:o}),c=wt().toLowerCase();n&&(a=bv(c)?FA:n),vv(c)&&(e=e||$A,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[f,g])=>`${h}${f}=${g},`,"");if(E1(c)&&a!=="_self")return UA(e||"",a),new _p(null);const d=window.open(e||"",a,u);ae(d,t,"popup-blocked");try{d.focus()}catch{}return new _p(d)}function UA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const VA="__/auth/handler",jA="emulator/auth/handler";function Tp(t,e,n,s,i,r){ae(t.config.authDomain,t,"auth-domain-config-required"),ae(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:fo,eventId:i};if(e instanceof Nd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",II(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof mo){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${zA(t)}?${ho(a).slice(1)}`}function zA({config:t}){return t.emulator?Pd(t,jA):`https://${t.authDomain}/${VA}`}/**
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
 */const bc="webStorageSupport";class qA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Dv,this._completeRedirectFn=mA,this._overrideRedirectResult=hA}async _openPopup(e,n,s,i){var r;Nn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=Tp(e,n,s,fu(),i);return BA(e,o,Fd())}async _openRedirect(e,n,s,i){return await this._originValidation(e),H1(Tp(e,n,s,fu(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Nn(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await PA(e),s=new yA(e);return n.register("authEvent",i=>(ae(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(bc,{type:bc},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[bc];o!==void 0&&n(!!o),bn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=TA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ev()||Ld()||gl()}}const HA=qA;var Sp="@firebase/auth",Ep="0.21.3";/**
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
 */class GA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function KA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function WA(t){vn(new rn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,l)=>{ae(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),ae(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Iv(t)},u=new A1(a,l,c);return r1(u,n),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),vn(new rn("auth-internal",e=>{const n=yl(e.getProvider("auth").getImmediate());return(s=>new GA(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Wt(Sp,Ep,KA(t)),Wt(Sp,Ep,"esm2017")}/**
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
 */const YA=5*60,QA=Oy("authIdTokenMaxAge")||YA;let Ip=null;const XA=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>QA)return;const i=n==null?void 0:n.token;Ip!==i&&(Ip=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function JA(t=Cd()){const e=oi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=i1(t,{popupRedirectResolver:HA,persistence:[eA,j1,Dv]}),s=Oy("authTokenSyncURL");if(s){const r=XA(s);F1(n,r,()=>r(n.currentUser)),N1(n,o=>r(o))}const i=Ry("auth");return i&&k1(n,`http://${i}`),n}WA("Browser");var ZA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},X,Bd=Bd||{},ce=ZA||self;function Da(){}function wl(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function yo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function ek(t){return Object.prototype.hasOwnProperty.call(t,wc)&&t[wc]||(t[wc]=++tk)}var wc="closure_uid_"+(1e9*Math.random()>>>0),tk=0;function nk(t,e,n){return t.call.apply(t.bind,arguments)}function sk(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function vt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?vt=nk:vt=sk,vt.apply(null,arguments)}function Yo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function lt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function Ts(){this.s=this.s,this.o=this.o}var ik=0;Ts.prototype.s=!1;Ts.prototype.na=function(){!this.s&&(this.s=!0,this.M(),ik!=0)&&ek(this)};Ts.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Uv=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Ud(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Cp(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(wl(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function bt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}bt.prototype.h=function(){this.defaultPrevented=!0};var rk=function(){if(!ce.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ce.addEventListener("test",Da,e),ce.removeEventListener("test",Da,e)}catch{}return t}();function Pa(t){return/^[\s\xa0]*$/.test(t)}var xp=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function _c(t,e){return t<e?-1:t>e?1:0}function _l(){var t=ce.navigator;return t&&(t=t.userAgent)?t:""}function un(t){return _l().indexOf(t)!=-1}function Vd(t){return Vd[" "](t),t}Vd[" "]=Da;function ok(t){var e=ck;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var ak=un("Opera"),Li=un("Trident")||un("MSIE"),Vv=un("Edge"),mu=Vv||Li,jv=un("Gecko")&&!(_l().toLowerCase().indexOf("webkit")!=-1&&!un("Edge"))&&!(un("Trident")||un("MSIE"))&&!un("Edge"),lk=_l().toLowerCase().indexOf("webkit")!=-1&&!un("Edge");function zv(){var t=ce.document;return t?t.documentMode:void 0}var Ma;e:{var Tc="",Sc=function(){var t=_l();if(jv)return/rv:([^\);]+)(\)|;)/.exec(t);if(Vv)return/Edge\/([\d\.]+)/.exec(t);if(Li)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(lk)return/WebKit\/(\S+)/.exec(t);if(ak)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Sc&&(Tc=Sc?Sc[1]:""),Li){var Ec=zv();if(Ec!=null&&Ec>parseFloat(Tc)){Ma=String(Ec);break e}}Ma=Tc}var ck={};function uk(){return ok(function(){let t=0;const e=xp(String(Ma)).split("."),n=xp("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=_c(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||_c(i[2].length==0,r[2].length==0)||_c(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var gu;if(ce.document&&Li){var Ap=zv();gu=Ap||parseInt(Ma,10)||void 0}else gu=void 0;var dk=gu;function qr(t,e){if(bt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(jv){e:{try{Vd(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:hk[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&qr.X.h.call(this)}}lt(qr,bt);var hk={2:"touch",3:"pen",4:"mouse"};qr.prototype.h=function(){qr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var vo="closure_listenable_"+(1e6*Math.random()|0),fk=0;function pk(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++fk,this.ba=this.ea=!1}function Tl(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function jd(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function qv(t){const e={};for(const n in t)e[n]=t[n];return e}const kp="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Hv(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<kp.length;r++)n=kp[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Sl(t){this.src=t,this.g={},this.h=0}Sl.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=vu(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new pk(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function yu(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=Uv(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Tl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function vu(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var zd="closure_lm_"+(1e6*Math.random()|0),Ic={};function Gv(t,e,n,s,i){if(s&&s.once)return Wv(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Gv(t,e[r],n,s,i);return null}return n=Gd(n),t&&t[vo]?t.N(e,n,yo(s)?!!s.capture:!!s,i):Kv(t,e,n,!1,s,i)}function Kv(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=yo(i)?!!i.capture:!!i,a=Hd(t);if(a||(t[zd]=a=new Sl(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=mk(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)rk||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Qv(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function mk(){function t(n){return e.call(t.src,t.listener,n)}const e=gk;return t}function Wv(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Wv(t,e[r],n,s,i);return null}return n=Gd(n),t&&t[vo]?t.O(e,n,yo(s)?!!s.capture:!!s,i):Kv(t,e,n,!0,s,i)}function Yv(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)Yv(t,e[r],n,s,i);else s=yo(s)?!!s.capture:!!s,n=Gd(n),t&&t[vo]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=vu(r,n,s,i),-1<n&&(Tl(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Hd(t))&&(e=t.g[e.toString()],t=-1,e&&(t=vu(e,n,s,i)),(n=-1<t?e[t]:null)&&qd(n))}function qd(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[vo])yu(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Qv(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Hd(e))?(yu(n,t),n.h==0&&(n.src=null,e[zd]=null)):Tl(t)}}}function Qv(t){return t in Ic?Ic[t]:Ic[t]="on"+t}function gk(t,e){if(t.ba)t=!0;else{e=new qr(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&qd(t),t=n.call(s,e)}return t}function Hd(t){return t=t[zd],t instanceof Sl?t:null}var Cc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Gd(t){return typeof t=="function"?t:(t[Cc]||(t[Cc]=function(e){return t.handleEvent(e)}),t[Cc])}function nt(){Ts.call(this),this.i=new Sl(this),this.P=this,this.I=null}lt(nt,Ts);nt.prototype[vo]=!0;nt.prototype.removeEventListener=function(t,e,n,s){Yv(this,t,e,n,s)};function at(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new bt(e,t);else if(e instanceof bt)e.target=e.target||t;else{var i=e;e=new bt(s,t),Hv(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Qo(o,s,!0,e)&&i}if(o=e.g=t,i=Qo(o,s,!0,e)&&i,i=Qo(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Qo(o,s,!1,e)&&i}nt.prototype.M=function(){if(nt.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Tl(n[s]);delete t.g[e],t.h--}}this.I=null};nt.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};nt.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Qo(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&yu(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var Kd=ce.JSON.stringify;function yk(){var t=Zv;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class vk{constructor(){this.h=this.g=null}add(e,n){const s=Xv.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Xv=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new bk,t=>t.reset());class bk{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function wk(t){ce.setTimeout(()=>{throw t},0)}function Jv(t,e){bu||_k(),wu||(bu(),wu=!0),Zv.add(t,e)}var bu;function _k(){var t=ce.Promise.resolve(void 0);bu=function(){t.then(Tk)}}var wu=!1,Zv=new vk;function Tk(){for(var t;t=yk();){try{t.h.call(t.g)}catch(n){wk(n)}var e=Xv;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}wu=!1}function El(t,e){nt.call(this),this.h=t||1,this.g=e||ce,this.j=vt(this.lb,this),this.l=Date.now()}lt(El,nt);X=El.prototype;X.ca=!1;X.R=null;X.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),at(this,"tick"),this.ca&&(Wd(this),this.start()))}};X.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Wd(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}X.M=function(){El.X.M.call(this),Wd(this),delete this.g};function Yd(t,e,n){if(typeof t=="function")n&&(t=vt(t,n));else if(t&&typeof t.handleEvent=="function")t=vt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ce.setTimeout(t,e||0)}function eb(t){t.g=Yd(()=>{t.g=null,t.i&&(t.i=!1,eb(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Sk extends Ts{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:eb(this)}M(){super.M(),this.g&&(ce.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Hr(t){Ts.call(this),this.h=t,this.g={}}lt(Hr,Ts);var Rp=[];function tb(t,e,n,s){Array.isArray(n)||(n&&(Rp[0]=n.toString()),n=Rp);for(var i=0;i<n.length;i++){var r=Gv(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function nb(t){jd(t.g,function(e,n){this.g.hasOwnProperty(n)&&qd(e)},t),t.g={}}Hr.prototype.M=function(){Hr.X.M.call(this),nb(this)};Hr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Il(){this.g=!0}Il.prototype.Aa=function(){this.g=!1};function Ek(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var d=u.split("_");o=2<=d.length&&d[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function Ik(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function vi(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+xk(t,n)+(s?" "+s:"")})}function Ck(t,e){t.info(function(){return"TIMEOUT: "+e})}Il.prototype.info=function(){};function xk(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Kd(n)}catch{return e}}var ai={},Op=null;function Cl(){return Op=Op||new nt}ai.Pa="serverreachability";function sb(t){bt.call(this,ai.Pa,t)}lt(sb,bt);function Gr(t){const e=Cl();at(e,new sb(e))}ai.STAT_EVENT="statevent";function ib(t,e){bt.call(this,ai.STAT_EVENT,t),this.stat=e}lt(ib,bt);function St(t){const e=Cl();at(e,new ib(e,t))}ai.Qa="timingevent";function rb(t,e){bt.call(this,ai.Qa,t),this.size=e}lt(rb,bt);function bo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ce.setTimeout(function(){t()},e)}var xl={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},ob={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Qd(){}Qd.prototype.h=null;function Dp(t){return t.h||(t.h=t.i())}function ab(){}var wo={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Xd(){bt.call(this,"d")}lt(Xd,bt);function Jd(){bt.call(this,"c")}lt(Jd,bt);var _u;function Al(){}lt(Al,Qd);Al.prototype.g=function(){return new XMLHttpRequest};Al.prototype.i=function(){return{}};_u=new Al;function _o(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Hr(this),this.O=Ak,t=mu?125:void 0,this.T=new El(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new lb}function lb(){this.i=null,this.g="",this.h=!1}var Ak=45e3,Tu={},La={};X=_o.prototype;X.setTimeout=function(t){this.O=t};function Su(t,e,n){t.K=1,t.v=Rl(Fn(e)),t.s=n,t.P=!0,cb(t,null)}function cb(t,e){t.F=Date.now(),To(t),t.A=Fn(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),yb(n.i,"t",s),t.C=0,n=t.l.H,t.h=new lb,t.g=$b(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Sk(vt(t.La,t,t.g),t.N)),tb(t.S,t.g,"readystatechange",t.ib),e=t.H?qv(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Gr(),Ek(t.j,t.u,t.A,t.m,t.U,t.s)}X.ib=function(t){t=t.target;const e=this.L;e&&Rn(t)==3?e.l():this.La(t)};X.La=function(t){try{if(t==this.g)e:{const u=Rn(this.g);var e=this.g.Ea();const d=this.g.aa();if(!(3>u)&&(u!=3||mu||this.g&&(this.h.h||this.g.fa()||Np(this.g)))){this.I||u!=4||e==7||(e==8||0>=d?Gr(3):Gr(2)),kl(this);var n=this.g.aa();this.Y=n;t:if(ub(this)){var s=Np(this.g);t="";var i=s.length,r=Rn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ms(this),xr(this);var o="";break t}this.h.i=new ce.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Ik(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Pa(a)){var c=a;break t}}c=null}if(n=c)vi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Eu(this,n);else{this.i=!1,this.o=3,St(12),Ms(this),xr(this);break e}}this.P?(db(this,u,o),mu&&this.i&&u==3&&(tb(this.S,this.T,"tick",this.hb),this.T.start())):(vi(this.j,this.m,o,null),Eu(this,o)),u==4&&Ms(this),this.i&&!this.I&&(u==4?Mb(this.l,this):(this.i=!1,To(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,St(12)):(this.o=0,St(13)),Ms(this),xr(this)}}}catch{}finally{}};function ub(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function db(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=kk(t,n),i==La){e==4&&(t.o=4,St(14),s=!1),vi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Tu){t.o=4,St(15),vi(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else vi(t.j,t.m,i,null),Eu(t,i);ub(t)&&i!=La&&i!=Tu&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,St(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),rh(e),e.K=!0,St(11))):(vi(t.j,t.m,n,"[Invalid Chunked Response]"),Ms(t),xr(t))}X.hb=function(){if(this.g){var t=Rn(this.g),e=this.g.fa();this.C<e.length&&(kl(this),db(this,t,e),this.i&&t!=4&&To(this))}};function kk(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?La:(n=Number(e.substring(n,s)),isNaN(n)?Tu:(s+=1,s+n>e.length?La:(e=e.substr(s,n),t.C=s+n,e)))}X.cancel=function(){this.I=!0,Ms(this)};function To(t){t.V=Date.now()+t.O,hb(t,t.O)}function hb(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=bo(vt(t.gb,t),e)}function kl(t){t.B&&(ce.clearTimeout(t.B),t.B=null)}X.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Ck(this.j,this.A),this.K!=2&&(Gr(),St(17)),Ms(this),this.o=2,xr(this)):hb(this,this.V-t)};function xr(t){t.l.G==0||t.I||Mb(t.l,t)}function Ms(t){kl(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Wd(t.T),nb(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Eu(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Iu(n.h,t))){if(!t.J&&Iu(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)$a(n),Pl(n);else break e;ih(n),St(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=bo(vt(n.cb,n),6e3));if(1>=wb(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Ls(n,11)}else if((t.J||n.g==t)&&$a(n),!Pa(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const u=c[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const d=c[4];d!=null&&(n.Ca=d,n.j.info("SVER="+n.Ca));const h=c[5];h!=null&&typeof h=="number"&&0<h&&(s=1.5*h,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const f=t.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var r=s.h;r.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Zd(r,r.h),r.h=null))}if(s.D){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(s.za=y,Fe(s.F,s.D,y))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Fb(s,s.H?s.ka:null,s.V),o.J){_b(s.h,o);var a=o,l=s.J;l&&a.setTimeout(l),a.B&&(kl(a),To(a)),s.g=o}else Db(s);0<n.i.length&&Ml(n)}else c[0]!="stop"&&c[0]!="close"||Ls(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Ls(n,7):sh(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}Gr(4)}catch{}}function Rk(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(wl(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Ok(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(wl(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function fb(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(wl(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Ok(t),s=Rk(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var pb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Dk(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Vs(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Vs){this.h=e!==void 0?e:t.h,Na(this,t.j),this.s=t.s,this.g=t.g,Fa(this,t.m),this.l=t.l,e=t.i;var n=new Kr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Pp(this,n),this.o=t.o}else t&&(n=String(t).match(pb))?(this.h=!!e,Na(this,n[1]||"",!0),this.s=hr(n[2]||""),this.g=hr(n[3]||"",!0),Fa(this,n[4]),this.l=hr(n[5]||"",!0),Pp(this,n[6]||"",!0),this.o=hr(n[7]||"")):(this.h=!!e,this.i=new Kr(null,this.h))}Vs.prototype.toString=function(){var t=[],e=this.j;e&&t.push(fr(e,Mp,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(fr(e,Mp,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(fr(n,n.charAt(0)=="/"?Lk:Mk,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",fr(n,Fk)),t.join("")};function Fn(t){return new Vs(t)}function Na(t,e,n){t.j=n?hr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Fa(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Pp(t,e,n){e instanceof Kr?(t.i=e,$k(t.i,t.h)):(n||(e=fr(e,Nk)),t.i=new Kr(e,t.h))}function Fe(t,e,n){t.i.set(e,n)}function Rl(t){return Fe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function hr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function fr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Pk),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Pk(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Mp=/[#\/\?@]/g,Mk=/[#\?:]/g,Lk=/[#\?]/g,Nk=/[#\?@]/g,Fk=/#/g;function Kr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ss(t){t.g||(t.g=new Map,t.h=0,t.i&&Dk(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}X=Kr.prototype;X.add=function(t,e){Ss(this),this.i=null,t=Xi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function mb(t,e){Ss(t),e=Xi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function gb(t,e){return Ss(t),e=Xi(t,e),t.g.has(e)}X.forEach=function(t,e){Ss(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};X.oa=function(){Ss(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};X.W=function(t){Ss(this);let e=[];if(typeof t=="string")gb(this,t)&&(e=e.concat(this.g.get(Xi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};X.set=function(t,e){return Ss(this),this.i=null,t=Xi(this,t),gb(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};X.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function yb(t,e,n){mb(t,e),0<n.length&&(t.i=null,t.g.set(Xi(t,e),Ud(n)),t.h+=n.length)}X.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Xi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function $k(t,e){e&&!t.j&&(Ss(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(mb(this,s),yb(this,i,n))},t)),t.j=e}var Bk=class{constructor(e,n){this.h=e,this.g=n}};function vb(t){this.l=t||Uk,ce.PerformanceNavigationTiming?(t=ce.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ce.g&&ce.g.Ga&&ce.g.Ga()&&ce.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Uk=10;function bb(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function wb(t){return t.h?1:t.g?t.g.size:0}function Iu(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Zd(t,e){t.g?t.g.add(e):t.h=e}function _b(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}vb.prototype.cancel=function(){if(this.i=Tb(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Tb(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Ud(t.i)}function eh(){}eh.prototype.stringify=function(t){return ce.JSON.stringify(t,void 0)};eh.prototype.parse=function(t){return ce.JSON.parse(t,void 0)};function Vk(){this.g=new eh}function jk(t,e,n){const s=n||"";try{fb(t,function(i,r){let o=i;yo(i)&&(o=Kd(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function zk(t,e){const n=new Il;if(ce.Image){const s=new Image;s.onload=Yo(Xo,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Yo(Xo,n,s,"TestLoadImage: error",!1,e),s.onabort=Yo(Xo,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Yo(Xo,n,s,"TestLoadImage: timeout",!1,e),ce.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Xo(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function So(t){this.l=t.ac||null,this.j=t.jb||!1}lt(So,Qd);So.prototype.g=function(){return new Ol(this.l,this.j)};So.prototype.i=function(t){return function(){return t}}({});function Ol(t,e){nt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=th,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}lt(Ol,nt);var th=0;X=Ol.prototype;X.open=function(t,e){if(this.readyState!=th)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Wr(this)};X.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||ce).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};X.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Eo(this)),this.readyState=th};X.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Wr(this)),this.g&&(this.readyState=3,Wr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof ce.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Sb(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Sb(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}X.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Eo(this):Wr(this),this.readyState==3&&Sb(this)}};X.Va=function(t){this.g&&(this.response=this.responseText=t,Eo(this))};X.Ua=function(t){this.g&&(this.response=t,Eo(this))};X.ga=function(){this.g&&Eo(this)};function Eo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Wr(t)}X.setRequestHeader=function(t,e){this.v.append(t,e)};X.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};X.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Wr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ol.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var qk=ce.JSON.parse;function qe(t){nt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Eb,this.K=this.L=!1}lt(qe,nt);var Eb="",Hk=/^https?$/i,Gk=["POST","PUT"];X=qe.prototype;X.Ka=function(t){this.L=t};X.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():_u.g(),this.C=this.u?Dp(this.u):Dp(_u),this.g.onreadystatechange=vt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){Lp(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=ce.FormData&&t instanceof ce.FormData,!(0<=Uv(Gk,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{xb(this),0<this.B&&((this.K=Kk(this.g))?(this.g.timeout=this.B,this.g.ontimeout=vt(this.qa,this)):this.A=Yd(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Lp(this,r)}};function Kk(t){return Li&&uk()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}X.qa=function(){typeof Bd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,at(this,"timeout"),this.abort(8))};function Lp(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ib(t),Dl(t)}function Ib(t){t.D||(t.D=!0,at(t,"complete"),at(t,"error"))}X.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,at(this,"complete"),at(this,"abort"),Dl(this))};X.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Dl(this,!0)),qe.X.M.call(this)};X.Ha=function(){this.s||(this.F||this.v||this.l?Cb(this):this.fb())};X.fb=function(){Cb(this)};function Cb(t){if(t.h&&typeof Bd<"u"&&(!t.C[1]||Rn(t)!=4||t.aa()!=2)){if(t.v&&Rn(t)==4)Yd(t.Ha,0,t);else if(at(t,"readystatechange"),Rn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(pb)[1]||null;if(!i&&ce.self&&ce.self.location){var r=ce.self.location.protocol;i=r.substr(0,r.length-1)}s=!Hk.test(i?i.toLowerCase():"")}n=s}if(n)at(t,"complete"),at(t,"success");else{t.m=6;try{var o=2<Rn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Ib(t)}}finally{Dl(t)}}}}function Dl(t,e){if(t.g){xb(t);const n=t.g,s=t.C[0]?Da:null;t.g=null,t.C=null,e||at(t,"ready");try{n.onreadystatechange=s}catch{}}}function xb(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(ce.clearTimeout(t.A),t.A=null)}function Rn(t){return t.g?t.g.readyState:0}X.aa=function(){try{return 2<Rn(this)?this.g.status:-1}catch{return-1}};X.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};X.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),qk(e)}};function Np(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Eb:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}X.Ea=function(){return this.m};X.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Ab(t){let e="";return jd(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function nh(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Ab(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Fe(t,e,n))}function lr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function kb(t){this.Ca=0,this.i=[],this.j=new Il,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=lr("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=lr("baseRetryDelayMs",5e3,t),this.bb=lr("retryDelaySeedMs",1e4,t),this.$a=lr("forwardChannelMaxRetries",2,t),this.ta=lr("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new vb(t&&t.concurrentRequestLimit),this.Fa=new Vk,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}X=kb.prototype;X.ma=8;X.G=1;function sh(t){if(Rb(t),t.G==3){var e=t.U++,n=Fn(t.F);Fe(n,"SID",t.I),Fe(n,"RID",e),Fe(n,"TYPE","terminate"),Io(t,n),e=new _o(t,t.j,e,void 0),e.K=2,e.v=Rl(Fn(n)),n=!1,ce.navigator&&ce.navigator.sendBeacon&&(n=ce.navigator.sendBeacon(e.v.toString(),"")),!n&&ce.Image&&(new Image().src=e.v,n=!0),n||(e.g=$b(e.l,null),e.g.da(e.v)),e.F=Date.now(),To(e)}Nb(t)}function Pl(t){t.g&&(rh(t),t.g.cancel(),t.g=null)}function Rb(t){Pl(t),t.u&&(ce.clearTimeout(t.u),t.u=null),$a(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&ce.clearTimeout(t.m),t.m=null)}function Ml(t){bb(t.h)||t.m||(t.m=!0,Jv(t.Ja,t),t.C=0)}function Wk(t,e){return wb(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=bo(vt(t.Ja,t,e),Lb(t,t.C)),t.C++,!0)}X.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new _o(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=qv(r),Hv(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Ob(this,i,e),n=Fn(this.F),Fe(n,"RID",t),Fe(n,"CVER",22),this.D&&Fe(n,"X-HTTP-Session-Id",this.D),Io(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(Ab(r)))+"&"+e:this.o&&nh(n,this.o,r)),Zd(this.h,i),this.Ya&&Fe(n,"TYPE","init"),this.O?(Fe(n,"$req",e),Fe(n,"SID","null"),i.Z=!0,Su(i,n,null)):Su(i,n,e),this.G=2}}else this.G==3&&(t?Fp(this,t):this.i.length==0||bb(this.h)||Fp(this))};function Fp(t,e){var n;e?n=e.m:n=t.U++;const s=Fn(t.F);Fe(s,"SID",t.I),Fe(s,"RID",n),Fe(s,"AID",t.T),Io(t,s),t.o&&t.s&&nh(s,t.o,t.s),n=new _o(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Ob(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Zd(t.h,n),Su(n,s,e)}function Io(t,e){t.ia&&jd(t.ia,function(n,s){Fe(e,s,n)}),t.l&&fb({},function(n,s){Fe(e,s,n)})}function Ob(t,e,n){n=Math.min(t.i.length,n);var s=t.l?vt(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const u=i[l].g;if(c-=r,0>c)r=Math.max(0,i[l].h-100),a=!1;else try{jk(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Db(t){t.g||t.u||(t.Z=1,Jv(t.Ia,t),t.A=0)}function ih(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=bo(vt(t.Ia,t),Lb(t,t.A)),t.A++,!0)}X.Ia=function(){if(this.u=null,Pb(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=bo(vt(this.eb,this),t)}};X.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,St(10),Pl(this),Pb(this))};function rh(t){t.B!=null&&(ce.clearTimeout(t.B),t.B=null)}function Pb(t){t.g=new _o(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Fn(t.sa);Fe(e,"RID","rpc"),Fe(e,"SID",t.I),Fe(e,"CI",t.L?"0":"1"),Fe(e,"AID",t.T),Fe(e,"TYPE","xmlhttp"),Io(t,e),t.o&&t.s&&nh(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Rl(Fn(e)),n.s=null,n.P=!0,cb(n,t)}X.cb=function(){this.v!=null&&(this.v=null,Pl(this),ih(this),St(19))};function $a(t){t.v!=null&&(ce.clearTimeout(t.v),t.v=null)}function Mb(t,e){var n=null;if(t.g==e){$a(t),rh(t),t.g=null;var s=2}else if(Iu(t.h,e))n=e.D,_b(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=Cl(),at(s,new rb(s,n)),Ml(t)}else Db(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&Wk(t,e)||s==2&&ih(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Ls(t,5);break;case 4:Ls(t,10);break;case 3:Ls(t,6);break;default:Ls(t,2)}}}function Lb(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Ls(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=vt(t.kb,t);n||(n=new Vs("//www.google.com/images/cleardot.gif"),ce.location&&ce.location.protocol=="http"||Na(n,"https"),Rl(n)),zk(n.toString(),s)}else St(2);t.G=0,t.l&&t.l.va(e),Nb(t),Rb(t)}X.kb=function(t){t?(this.j.info("Successfully pinged google.com"),St(2)):(this.j.info("Failed to ping google.com"),St(1))};function Nb(t){if(t.G=0,t.la=[],t.l){const e=Tb(t.h);(e.length!=0||t.i.length!=0)&&(Cp(t.la,e),Cp(t.la,t.i),t.h.i.length=0,Ud(t.i),t.i.length=0),t.l.ua()}}function Fb(t,e,n){var s=n instanceof Vs?Fn(n):new Vs(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Fa(s,s.m);else{var i=ce.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new Vs(null,void 0);s&&Na(r,s),e&&(r.g=e),i&&Fa(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&Fe(s,n,e),Fe(s,"VER",t.ma),Io(t,s),s}function $b(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new qe(new So({jb:!0})):new qe(t.ra),e.Ka(t.H),e}function Bb(){}X=Bb.prototype;X.xa=function(){};X.wa=function(){};X.va=function(){};X.ua=function(){};X.Ra=function(){};function Ba(){if(Li&&!(10<=Number(dk)))throw Error("Environmental error: no available transport.")}Ba.prototype.g=function(t,e){return new qt(t,e)};function qt(t,e){nt.call(this),this.g=new kb(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Pa(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Pa(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ji(this)}lt(qt,nt);qt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;St(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Fb(t,null,t.V),Ml(t)};qt.prototype.close=function(){sh(this.g)};qt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Kd(t),t=n);e.i.push(new Bk(e.ab++,t)),e.G==3&&Ml(e)};qt.prototype.M=function(){this.g.l=null,delete this.j,sh(this.g),delete this.g,qt.X.M.call(this)};function Ub(t){Xd.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}lt(Ub,Xd);function Vb(){Jd.call(this),this.status=1}lt(Vb,Jd);function Ji(t){this.g=t}lt(Ji,Bb);Ji.prototype.xa=function(){at(this.g,"a")};Ji.prototype.wa=function(t){at(this.g,new Ub(t))};Ji.prototype.va=function(t){at(this.g,new Vb)};Ji.prototype.ua=function(){at(this.g,"b")};Ba.prototype.createWebChannel=Ba.prototype.g;qt.prototype.send=qt.prototype.u;qt.prototype.open=qt.prototype.m;qt.prototype.close=qt.prototype.close;xl.NO_ERROR=0;xl.TIMEOUT=8;xl.HTTP_ERROR=6;ob.COMPLETE="complete";ab.EventType=wo;wo.OPEN="a";wo.CLOSE="b";wo.ERROR="c";wo.MESSAGE="d";nt.prototype.listen=nt.prototype.N;qe.prototype.listenOnce=qe.prototype.O;qe.prototype.getLastError=qe.prototype.Oa;qe.prototype.getLastErrorCode=qe.prototype.Ea;qe.prototype.getStatus=qe.prototype.aa;qe.prototype.getResponseJson=qe.prototype.Sa;qe.prototype.getResponseText=qe.prototype.fa;qe.prototype.send=qe.prototype.da;qe.prototype.setWithCredentials=qe.prototype.Ka;var Yk=function(){return new Ba},Qk=function(){return Cl()},xc=xl,Xk=ob,Jk=ai,$p={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Zk=So,Jo=ab,eR=qe;const Bp="@firebase/firestore";/**
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
 */let ut=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};ut.UNAUTHENTICATED=new ut(null),ut.GOOGLE_CREDENTIALS=new ut("google-credentials-uid"),ut.FIRST_PARTY=new ut("first-party-uid"),ut.MOCK_USER=new ut("mock-user");/**
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
 */const Zs=new hl("@firebase/firestore");function Up(){return Zs.logLevel}function J(t,...e){if(Zs.logLevel<=Ie.DEBUG){const n=e.map(oh);Zs.debug(`Firestore (${Zi}): ${t}`,...n)}}function $n(t,...e){if(Zs.logLevel<=Ie.ERROR){const n=e.map(oh);Zs.error(`Firestore (${Zi}): ${t}`,...n)}}function Cu(t,...e){if(Zs.logLevel<=Ie.WARN){const n=e.map(oh);Zs.warn(`Firestore (${Zi}): ${t}`,...n)}}function oh(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function oe(t="Unexpected state"){const e=`FIRESTORE (${Zi}) INTERNAL ASSERTION FAILED: `+t;throw $n(e),new Error(e)}function Le(t,e){t||oe()}function fe(t,e){return t}/**
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
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends on{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class jb{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class tR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ut.UNAUTHENTICATED))}shutdown(){}}class nR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class sR{constructor(e){this.t=e,this.currentUser=ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new Pn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Pn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Pn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Le(typeof s.accessToken=="string"),new jb(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Le(e===null||typeof e=="string"),new ut(e)}}let iR=class{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=ut.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Le(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}};class rR{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new iR(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class oR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}let aR=class{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=r=>{r.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,J("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Le(typeof n.token=="string"),this.A=n.token,new oR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}};/**
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
 */function lR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */let zb=class{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=lR(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}};function Ce(t,e){return t<e?-1:t>e?1:0}function Ni(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
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
 */class Xe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new K(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Xe.fromMillis(Date.now())}static fromDate(e){return Xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Xe(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ce(this.nanoseconds,e.nanoseconds):Ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class he{constructor(e){this.timestamp=e}static fromTimestamp(e){return new he(e)}static min(){return new he(new Xe(0,0))}static max(){return new he(new Xe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Yr{constructor(e,n,s){n===void 0?n=0:n>e.length&&oe(),s===void 0?s=e.length-n:s>e.length-n&&oe(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Yr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Yr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ne extends Yr{construct(e,n,s){return new Ne(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new K(D.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new Ne(n)}static emptyPath(){return new Ne([])}}const cR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gt extends Yr{construct(e,n,s){return new gt(e,n,s)}static isValidIdentifier(e){return cR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new gt(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new K(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new K(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new K(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new K(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new gt(n)}static emptyPath(){return new gt([])}}/**
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
 */class ee{constructor(e){this.path=e}static fromPath(e){return new ee(Ne.fromString(e))}static fromName(e){return new ee(Ne.fromString(e).popFirst(5))}static empty(){return new ee(Ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ne.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ee(new Ne(e.slice()))}}function uR(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=he.fromTimestamp(s===1e9?new Xe(n+1,0):new Xe(n,s));return new vs(i,ee.empty(),e)}function dR(t){return new vs(t.readTime,t.key,-1)}class vs{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new vs(he.min(),ee.empty(),-1)}static max(){return new vs(he.max(),ee.empty(),-1)}}function hR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ee.comparator(t.documentKey,e.documentKey),n!==0?n:Ce(t.largestBatchId,e.largestBatchId))}/**
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
 */const fR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class pR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Co(t){if(t.code!==D.FAILED_PRECONDITION||t.message!==fR)throw t;J("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&oe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new N((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof N?n:N.resolve(n)}catch(n){return N.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):N.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):N.reject(n)}static resolve(e){return new N((n,s)=>{n(e)})}static reject(e){return new N((n,s)=>{s(e)})}static waitFor(e){return new N((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=N.resolve(!1);for(const s of e)n=n.next(i=>i?N.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new N((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new N((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function xo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ah{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}ah.at=-1;/**
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
 */class mR{constructor(e,n,s,i,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Qr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Qr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Qr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function Vp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function li(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function qb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */function Ll(t){return t==null}function Ua(t){return t===0&&1/t==-1/0}function gR(t){return typeof t=="number"&&Number.isInteger(t)&&!Ua(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class _t{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new _t(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new _t(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_t.EMPTY_BYTE_STRING=new _t("");const yR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bs(t){if(Le(!!t),typeof t=="string"){let e=0;const n=yR.exec(t);if(Le(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ye(t.seconds),nanos:Ye(t.nanos)}}function Ye(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Fi(t){return typeof t=="string"?_t.fromBase64String(t):_t.fromUint8Array(t)}/**
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
 */function Hb(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Gb(t){const e=t.mapValue.fields.__previous_value__;return Hb(e)?Gb(e):e}function Xr(t){const e=bs(t.mapValue.fields.__local_write_time__.timestampValue);return new Xe(e.seconds,e.nanos)}/**
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
 */const Zo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ei(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Hb(t)?4:vR(t)?9007199254740991:10:oe()}function wn(t,e){if(t===e)return!0;const n=ei(t);if(n!==ei(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Xr(t).isEqual(Xr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=bs(s.timestampValue),o=bs(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Fi(s.bytesValue).isEqual(Fi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ye(s.geoPointValue.latitude)===Ye(i.geoPointValue.latitude)&&Ye(s.geoPointValue.longitude)===Ye(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ye(s.integerValue)===Ye(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=Ye(s.doubleValue),o=Ye(i.doubleValue);return r===o?Ua(r)===Ua(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Ni(t.arrayValue.values||[],e.arrayValue.values||[],wn);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Vp(r)!==Vp(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!wn(r[a],o[a])))return!1;return!0}(t,e);default:return oe()}}function Jr(t,e){return(t.values||[]).find(n=>wn(n,e))!==void 0}function $i(t,e){if(t===e)return 0;const n=ei(t),s=ei(e);if(n!==s)return Ce(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ce(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=Ye(i.integerValue||i.doubleValue),a=Ye(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return jp(t.timestampValue,e.timestampValue);case 4:return jp(Xr(t),Xr(e));case 5:return Ce(t.stringValue,e.stringValue);case 6:return function(i,r){const o=Fi(i),a=Fi(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=Ce(o[l],a[l]);if(c!==0)return c}return Ce(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=Ce(Ye(i.latitude),Ye(r.latitude));return o!==0?o:Ce(Ye(i.longitude),Ye(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=$i(o[l],a[l]);if(c)return c}return Ce(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===Zo.mapValue&&r===Zo.mapValue)return 0;if(i===Zo.mapValue)return 1;if(r===Zo.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const d=Ce(a[u],c[u]);if(d!==0)return d;const h=$i(o[a[u]],l[c[u]]);if(h!==0)return h}return Ce(a.length,c.length)}(t.mapValue,e.mapValue);default:throw oe()}}function jp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ce(t,e);const n=bs(t),s=bs(e),i=Ce(n.seconds,s.seconds);return i!==0?i:Ce(n.nanos,s.nanos)}function Bi(t){return xu(t)}function xu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=bs(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Fi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,ee.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=xu(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${xu(s.fields[a])}`;return r+"}"}(t.mapValue):oe();var e,n}function zp(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Au(t){return!!t&&"integerValue"in t}function lh(t){return!!t&&"arrayValue"in t}function qp(t){return!!t&&"nullValue"in t}function Hp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ca(t){return!!t&&"mapValue"in t}function Ar(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return li(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Ar(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ar(t.arrayValue.values[n]);return e}return Object.assign({},t)}function vR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Va{constructor(e,n){this.position=e,this.inclusive=n}}function Gp(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=ee.comparator(ee.fromName(o.referenceValue),n.key):s=$i(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Kp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!wn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Kb{}class Qe extends Kb{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new wR(e,n,s):n==="array-contains"?new SR(e,s):n==="in"?new ER(e,s):n==="not-in"?new IR(e,s):n==="array-contains-any"?new CR(e,s):new Qe(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new _R(e,s):new TR(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison($i(n,this.value)):n!==null&&ei(this.value)===ei(n)&&this.matchesComparison($i(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return oe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}let Bn=class Wb extends Kb{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Wb(e,n)}matches(e){return Yb(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}};function Yb(t){return t.op==="and"}function Qb(t){return bR(t)&&Yb(t)}function bR(t){for(const e of t.filters)if(e instanceof Bn)return!1;return!0}function ku(t){if(t instanceof Qe)return t.field.canonicalString()+t.op.toString()+Bi(t.value);if(Qb(t))return t.filters.map(e=>ku(e)).join(",");{const e=t.filters.map(n=>ku(n)).join(",");return`${t.op}(${e})`}}function Xb(t,e){return t instanceof Qe?function(n,s){return s instanceof Qe&&n.op===s.op&&n.field.isEqual(s.field)&&wn(n.value,s.value)}(t,e):t instanceof Bn?function(n,s){return s instanceof Bn&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&Xb(r,s.filters[o]),!0):!1}(t,e):void oe()}function Jb(t){return t instanceof Qe?function(e){return`${e.field.canonicalString()} ${e.op} ${Bi(e.value)}`}(t):t instanceof Bn?function(e){return e.op.toString()+" {"+e.getFilters().map(Jb).join(" ,")+"}"}(t):"Filter"}class wR extends Qe{constructor(e,n,s){super(e,n,s),this.key=ee.fromName(s.referenceValue)}matches(e){const n=ee.comparator(e.key,this.key);return this.matchesComparison(n)}}class _R extends Qe{constructor(e,n){super(e,"in",n),this.keys=Zb("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}let TR=class extends Qe{constructor(e,n){super(e,"not-in",n),this.keys=Zb("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}};function Zb(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>ee.fromName(s.referenceValue))}class SR extends Qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return lh(n)&&Jr(n.arrayValue,this.value)}}class ER extends Qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Jr(this.value.arrayValue,n)}}class IR extends Qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Jr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Jr(this.value.arrayValue,n)}}class CR extends Qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!lh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Jr(this.value.arrayValue,s))}}/**
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
 */class kr{constructor(e,n="asc"){this.field=e,this.dir=n}}function xR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Ze{constructor(e,n){this.comparator=e,this.root=n||rt.EMPTY}insert(e,n){return new Ze(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new Ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ea(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ea(this.root,e,this.comparator,!1)}getReverseIterator(){return new ea(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ea(this.root,e,this.comparator,!0)}}class ea{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??rt.RED,this.left=i??rt.EMPTY,this.right=r??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new rt(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return rt.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw oe();const e=this.left.check();if(e!==this.right.check())throw oe();return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw oe()}get value(){throw oe()}get color(){throw oe()}get left(){throw oe()}get right(){throw oe()}copy(t,e,n,s,i){return this}insert(t,e,n){return new rt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Je{constructor(e){this.comparator=e,this.data=new Ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Wp(this.data.getIterator())}getIteratorFrom(e){return new Wp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Je)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Je(this.comparator);return n.data=e,n}}class Wp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Bt{constructor(e){this.fields=e,e.sort(gt.comparator)}static empty(){return new Bt([])}unionWith(e){let n=new Je(gt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ni(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class At{constructor(e){this.value=e}static empty(){return new At({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!ca(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ar(n)}setAll(e){let n=gt.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Ar(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());ca(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return wn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];ca(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){li(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new At(Ar(this.value))}}function ew(t){const e=[];return li(t.fields,(n,s)=>{const i=new gt([n]);if(ca(s)){const r=ew(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Bt(e)}/**
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
 */class pt{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new pt(e,0,he.min(),he.min(),he.min(),At.empty(),0)}static newFoundDocument(e,n,s,i){return new pt(e,1,n,he.min(),s,i,0)}static newNoDocument(e,n){return new pt(e,2,n,he.min(),he.min(),At.empty(),0)}static newUnknownDocument(e,n){return new pt(e,3,n,he.min(),he.min(),At.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof pt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class AR{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function Yp(t,e=null,n=[],s=[],i=null,r=null,o=null){return new AR(t,e,n,s,i,r,o)}function ch(t){const e=fe(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>ku(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Ll(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Bi(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Bi(s)).join(",")),e.ft=n}return e.ft}function uh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!xR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Xb(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Kp(t.startAt,e.startAt)&&Kp(t.endAt,e.endAt)}function Ru(t){return ee.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ao{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this._t=null,this.startAt,this.endAt}}function kR(t,e,n,s,i,r,o,a){return new Ao(t,e,n,s,i,r,o,a)}function dh(t){return new Ao(t)}function Qp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function tw(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function hh(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function nw(t){return t.collectionGroup!==null}function Ci(t){const e=fe(t);if(e.dt===null){e.dt=[];const n=hh(e),s=tw(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new kr(n)),e.dt.push(new kr(gt.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.dt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new kr(gt.keyField(),r))}}}return e.dt}function Un(t){const e=fe(t);if(!e._t)if(e.limitType==="F")e._t=Yp(e.path,e.collectionGroup,Ci(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of Ci(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new kr(r.field,o))}const s=e.endAt?new Va(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Va(e.startAt.position,e.startAt.inclusive):null;e._t=Yp(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e._t}function Ou(t,e){e.getFirstInequalityField(),hh(t);const n=t.filters.concat([e]);return new Ao(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Du(t,e,n){return new Ao(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Nl(t,e){return uh(Un(t),Un(e))&&t.limitType===e.limitType}function sw(t){return`${ch(Un(t))}|lt:${t.limitType}`}function Pu(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Jb(s)).join(", ")}]`),Ll(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Bi(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Bi(s)).join(",")),`Target(${n})`}(Un(t))}; limitType=${t.limitType})`}function Fl(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):ee.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of Ci(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Gp(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,Ci(n),s)||n.endAt&&!function(i,r,o){const a=Gp(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,Ci(n),s))}(t,e)}function RR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function iw(t){return(e,n)=>{let s=!1;for(const i of Ci(t)){const r=OR(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function OR(t,e,n){const s=t.field.isKeyField()?ee.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),l=o.data.field(i);return a!==null&&l!==null?$i(a,l):oe()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return oe()}}/**
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
 */function rw(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ua(e)?"-0":e}}function ow(t){return{integerValue:""+t}}function DR(t,e){return gR(e)?ow(e):rw(t,e)}/**
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
 */class $l{constructor(){this._=void 0}}function PR(t,e,n){return t instanceof ja?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof Ui?lw(t,e):t instanceof Vi?cw(t,e):function(s,i){const r=aw(s,i),o=Xp(r)+Xp(s.gt);return Au(r)&&Au(s.gt)?ow(o):rw(s.yt,o)}(t,e)}function MR(t,e,n){return t instanceof Ui?lw(t,e):t instanceof Vi?cw(t,e):n}function aw(t,e){return t instanceof za?Au(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class ja extends $l{}class Ui extends $l{constructor(e){super(),this.elements=e}}function lw(t,e){const n=uw(e);for(const s of t.elements)n.some(i=>wn(i,s))||n.push(s);return{arrayValue:{values:n}}}class Vi extends $l{constructor(e){super(),this.elements=e}}function cw(t,e){let n=uw(e);for(const s of t.elements)n=n.filter(i=>!wn(i,s));return{arrayValue:{values:n}}}class za extends $l{constructor(e,n){super(),this.yt=e,this.gt=n}}function Xp(t){return Ye(t.integerValue||t.doubleValue)}function uw(t){return lh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class dw{constructor(e,n){this.field=e,this.transform=n}}function LR(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Ui&&s instanceof Ui||n instanceof Vi&&s instanceof Vi?Ni(n.elements,s.elements,wn):n instanceof za&&s instanceof za?wn(n.gt,s.gt):n instanceof ja&&s instanceof ja}(t.transform,e.transform)}class NR{constructor(e,n){this.version=e,this.transformResults=n}}class mn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new mn}static exists(e){return new mn(void 0,e)}static updateTime(e){return new mn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ua(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Bl{}function hw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new pw(t.key,mn.none()):new ko(t.key,t.data,mn.none());{const n=t.data,s=At.empty();let i=new Je(gt.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Es(t.key,s,new Bt(i.toArray()),mn.none())}}function FR(t,e,n){t instanceof ko?function(s,i,r){const o=s.value.clone(),a=Zp(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Es?function(s,i,r){if(!ua(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Zp(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(fw(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function Rr(t,e,n,s){return t instanceof ko?function(i,r,o,a){if(!ua(i.precondition,r))return o;const l=i.value.clone(),c=em(i.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof Es?function(i,r,o,a){if(!ua(i.precondition,r))return o;const l=em(i.fieldTransforms,a,r),c=r.data;return c.setAll(fw(i)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(i,r,o){return ua(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function $R(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=aw(s.transform,i||null);r!=null&&(n===null&&(n=At.empty()),n.set(s.field,r))}return n||null}function Jp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Ni(n,s,(i,r)=>LR(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ko extends Bl{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Es extends Bl{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function fw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Zp(t,e,n){const s=new Map;Le(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,MR(o,a,n[i]))}return s}function em(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,PR(r,o,e))}return s}class pw extends Bl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class BR extends Bl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class UR{constructor(e){this.count=e}}/**
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
 */var We,_e;function VR(t){switch(t){default:return oe();case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0}}function mw(t){if(t===void 0)return $n("GRPC error has no .code"),D.UNKNOWN;switch(t){case We.OK:return D.OK;case We.CANCELLED:return D.CANCELLED;case We.UNKNOWN:return D.UNKNOWN;case We.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case We.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case We.INTERNAL:return D.INTERNAL;case We.UNAVAILABLE:return D.UNAVAILABLE;case We.UNAUTHENTICATED:return D.UNAUTHENTICATED;case We.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case We.NOT_FOUND:return D.NOT_FOUND;case We.ALREADY_EXISTS:return D.ALREADY_EXISTS;case We.PERMISSION_DENIED:return D.PERMISSION_DENIED;case We.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case We.ABORTED:return D.ABORTED;case We.OUT_OF_RANGE:return D.OUT_OF_RANGE;case We.UNIMPLEMENTED:return D.UNIMPLEMENTED;case We.DATA_LOSS:return D.DATA_LOSS;default:return oe()}}(_e=We||(We={}))[_e.OK=0]="OK",_e[_e.CANCELLED=1]="CANCELLED",_e[_e.UNKNOWN=2]="UNKNOWN",_e[_e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",_e[_e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",_e[_e.NOT_FOUND=5]="NOT_FOUND",_e[_e.ALREADY_EXISTS=6]="ALREADY_EXISTS",_e[_e.PERMISSION_DENIED=7]="PERMISSION_DENIED",_e[_e.UNAUTHENTICATED=16]="UNAUTHENTICATED",_e[_e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",_e[_e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",_e[_e.ABORTED=10]="ABORTED",_e[_e.OUT_OF_RANGE=11]="OUT_OF_RANGE",_e[_e.UNIMPLEMENTED=12]="UNIMPLEMENTED",_e[_e.INTERNAL=13]="INTERNAL",_e[_e.UNAVAILABLE=14]="UNAVAILABLE",_e[_e.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class er{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){li(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return qb(this.inner)}size(){return this.innerSize}}/**
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
 */const jR=new Ze(ee.comparator);function Vn(){return jR}const gw=new Ze(ee.comparator);function pr(...t){let e=gw;for(const n of t)e=e.insert(n.key,n);return e}function yw(t){let e=gw;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Ns(){return Or()}function vw(){return Or()}function Or(){return new er(t=>t.toString(),(t,e)=>t.isEqual(e))}const zR=new Ze(ee.comparator),qR=new Je(ee.comparator);function be(...t){let e=qR;for(const n of t)e=e.add(n);return e}const HR=new Je(Ce);function bw(){return HR}/**
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
 */class Ul{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,Ro.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Ul(he.min(),i,bw(),Vn(),be())}}class Ro{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Ro(s,n,be(),be(),be())}}/**
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
 */class da{constructor(e,n,s,i){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=i}}class ww{constructor(e,n){this.targetId=e,this.Et=n}}class _w{constructor(e,n,s=_t.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class tm{constructor(){this.At=0,this.Rt=sm(),this.bt=_t.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=be(),n=be(),s=be();return this.Rt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:oe()}}),new Ro(this.bt,this.Pt,e,n,s)}xt(){this.vt=!1,this.Rt=sm()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class GR{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=Vn(),this.qt=nm(),this.Ut=new Je(Ce)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const s=this.Wt(n);switch(e.state){case 0:this.zt(n)&&s.Dt(e.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(s.Ft(),s.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:oe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,i)=>{this.zt(i)&&n(i)})}Jt(e){const n=e.targetId,s=e.Et.count,i=this.Yt(n);if(i){const r=i.target;if(Ru(r))if(s===0){const o=new ee(r.path);this.Qt(n,o,pt.newNoDocument(o,he.min()))}else Le(s===1);else this.Xt(n)!==s&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((r,o)=>{const a=this.Yt(o);if(a){if(r.current&&Ru(a.target)){const l=new ee(a.target.path);this.Lt.get(l)!==null||this.te(o,l)||this.Qt(o,l,pt.newNoDocument(l,e))}r.St&&(n.set(o,r.Ct()),r.xt())}});let s=be();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Yt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Lt.forEach((r,o)=>o.setReadTime(e));const i=new Ul(e,n,this.Ut,this.Lt,s);return this.Lt=Vn(),this.qt=nm(),this.Ut=new Je(Ce),i}Gt(e,n){if(!this.zt(e))return;const s=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.zt(e))return;const i=this.Wt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new tm,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Je(Ce),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||J("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new tm),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function nm(){return new Ze(ee.comparator)}function sm(){return new Ze(ee.comparator)}/**
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
 */const KR=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),WR=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),YR=(()=>({and:"AND",or:"OR"}))();class QR{constructor(e,n){this.databaseId=e,this.wt=n}}function qa(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Tw(t,e){return t.wt?e.toBase64():e.toUint8Array()}function XR(t,e){return qa(t,e.toTimestamp())}function gn(t){return Le(!!t),he.fromTimestamp(function(e){const n=bs(e);return new Xe(n.seconds,n.nanos)}(t))}function fh(t,e){return function(n){return new Ne(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Sw(t){const e=Ne.fromString(t);return Le(xw(e)),e}function Mu(t,e){return fh(t.databaseId,e.path)}function Ac(t,e){const n=Sw(e);if(n.get(1)!==t.databaseId.projectId)throw new K(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ee(Ew(n))}function Lu(t,e){return fh(t.databaseId,e)}function JR(t){const e=Sw(t);return e.length===4?Ne.emptyPath():Ew(e)}function Nu(t){return new Ne(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ew(t){return Le(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function im(t,e,n){return{name:Mu(t,e),fields:n.value.mapValue.fields}}function ZR(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:oe()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(l,c){return l.wt?(Le(c===void 0||typeof c=="string"),_t.fromBase64String(c||"")):(Le(c===void 0||c instanceof Uint8Array),_t.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?D.UNKNOWN:mw(l.code);return new K(c,l.message||"")}(o);n=new _w(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Ac(t,s.document.name),r=gn(s.document.updateTime),o=s.document.createTime?gn(s.document.createTime):he.min(),a=new At({mapValue:{fields:s.document.fields}}),l=pt.newFoundDocument(i,r,o,a),c=s.targetIds||[],u=s.removedTargetIds||[];n=new da(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Ac(t,s.document),r=s.readTime?gn(s.readTime):he.min(),o=pt.newNoDocument(i,r),a=s.removedTargetIds||[];n=new da([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Ac(t,s.document),r=s.removedTargetIds||[];n=new da([],r,i,null)}else{if(!("filter"in e))return oe();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new UR(i),o=s.targetId;n=new ww(o,r)}}return n}function eO(t,e){let n;if(e instanceof ko)n={update:im(t,e.key,e.value)};else if(e instanceof pw)n={delete:Mu(t,e.key)};else if(e instanceof Es)n={update:im(t,e.key,e.data),updateMask:cO(e.fieldMask)};else{if(!(e instanceof BR))return oe();n={verify:Mu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof ja)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ui)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Vi)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof za)return{fieldPath:r.field.canonicalString(),increment:o.gt};throw oe()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:XR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:oe()}(t,e.precondition)),n}function tO(t,e){return t&&t.length>0?(Le(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?gn(s.updateTime):gn(i);return r.isEqual(he.min())&&(r=gn(i)),new NR(r,s.transformResults||[])}(n,e))):[]}function nO(t,e){return{documents:[Lu(t,e.path)]}}function sO(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Lu(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Lu(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length!==0)return Cw(Bn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:gi(u.field),direction:oO(u.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(l,c){return l.wt||Ll(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function iO(t){let e=JR(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Le(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const d=Iw(u);return d instanceof Bn&&Qb(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(d){return new kr(yi(d.field),function(h){switch(h){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(u)));let a=null;n.limit&&(a=function(u){let d;return d=typeof u=="object"?u.value:u,Ll(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(u){const d=!!u.before,h=u.values||[];return new Va(h,d)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const d=!u.before,h=u.values||[];return new Va(h,d)}(n.endAt)),kR(e,i,o,r,a,"F",l,c)}function rO(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return oe()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Iw(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=yi(e.unaryFilter.field);return Qe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=yi(e.unaryFilter.field);return Qe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=yi(e.unaryFilter.field);return Qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=yi(e.unaryFilter.field);return Qe.create(r,"!=",{nullValue:"NULL_VALUE"});default:return oe()}}(t):t.fieldFilter!==void 0?function(e){return Qe.create(yi(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return oe()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Bn.create(e.compositeFilter.filters.map(n=>Iw(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return oe()}}(e.compositeFilter.op))}(t):oe()}function oO(t){return KR[t]}function aO(t){return WR[t]}function lO(t){return YR[t]}function gi(t){return{fieldPath:t.canonicalString()}}function yi(t){return gt.fromServerFormat(t.fieldPath)}function Cw(t){return t instanceof Qe?function(e){if(e.op==="=="){if(Hp(e.value))return{unaryFilter:{field:gi(e.field),op:"IS_NAN"}};if(qp(e.value))return{unaryFilter:{field:gi(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Hp(e.value))return{unaryFilter:{field:gi(e.field),op:"IS_NOT_NAN"}};if(qp(e.value))return{unaryFilter:{field:gi(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:gi(e.field),op:aO(e.op),value:e.value}}}(t):t instanceof Bn?function(e){const n=e.getFilters().map(s=>Cw(s));return n.length===1?n[0]:{compositeFilter:{op:lO(e.op),filters:n}}}(t):oe()}function cO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function xw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class uO{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&FR(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Rr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Rr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=vw();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=hw(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(he.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),be())}isEqual(e){return this.batchId===e.batchId&&Ni(this.mutations,e.mutations,(n,s)=>Jp(n,s))&&Ni(this.baseMutations,e.baseMutations,(n,s)=>Jp(n,s))}}class ph{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){Le(e.mutations.length===s.length);let i=zR;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new ph(e,n,s,i)}}/**
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
 */class dO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class js{constructor(e,n,s,i,r=he.min(),o=he.min(),a=_t.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new js(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new js(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new js(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class hO{constructor(e){this.ie=e}}function fO(t){const e=iO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Du(e,e.limit,"L"):e}/**
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
 */class pO{constructor(){this.Je=new mO}addToCollectionParentIndex(e,n){return this.Je.add(n),N.resolve()}getCollectionParents(e,n){return N.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return N.resolve()}deleteFieldIndex(e,n){return N.resolve()}getDocumentsMatchingTarget(e,n){return N.resolve(null)}getIndexType(e,n){return N.resolve(0)}getFieldIndexes(e,n){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,n){return N.resolve(vs.min())}getMinOffsetFromCollectionGroup(e,n){return N.resolve(vs.min())}updateCollectionGroup(e,n,s){return N.resolve()}updateIndexEntries(e,n){return N.resolve()}}class mO{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new Je(Ne.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new Je(Ne.comparator)).toArray()}}/**
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
 */class ji{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new ji(0)}static vn(){return new ji(-1)}}/**
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
 */class gO{constructor(){this.changes=new er(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,pt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?N.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class yO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class vO{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&Rr(s.mutation,i,Bt.empty(),Xe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,be()).next(()=>s))}getLocalViewOfDocuments(e,n,s=be()){const i=Ns();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=pr();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Ns();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,be()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=Vn();const o=Or(),a=Or();return n.forEach((l,c)=>{const u=s.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof Es)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Rr(u.mutation,c,u.mutation.getFieldMask(),Xe.now())):o.set(c.key,Bt.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var d;return a.set(c,new yO(u,(d=o.get(c))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Or();let i=new Ze((o,a)=>o-a),r=be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||Bt.empty();u=a.applyToLocalView(c,u),s.set(l,u);const d=(i.get(a.batchId)||be()).add(l);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,d=vw();u.forEach(h=>{if(!r.has(h)){const f=hw(n.get(h),s.get(h));f!==null&&d.set(h,f),r=r.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,d))}return N.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return ee.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):nw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):N.resolve(Ns());let a=-1,l=r;return o.next(c=>N.forEach(c,(u,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),r.get(u)?N.resolve():this.remoteDocumentCache.getEntry(e,u).next(h=>{l=l.insert(u,h)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,be())).next(u=>({batchId:a,changes:yw(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ee(n)).next(s=>{let i=pr();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=pr();return this.indexManager.getCollectionParents(e,i).next(o=>N.forEach(o,a=>{const l=function(c,u){return new Ao(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((u,d)=>{r=r.insert(u,d)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,pt.newInvalidDocument(c)))});let o=pr();return r.forEach((a,l)=>{const c=i.get(a);c!==void 0&&Rr(c.mutation,l,Bt.empty(),Xe.now()),Fl(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class bO{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return N.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:gn(s.createTime)}),N.resolve()}getNamedQuery(e,n){return N.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:fO(s.bundledQuery),readTime:gn(s.readTime)}}(n)),N.resolve()}}/**
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
 */class wO{constructor(){this.overlays=new Ze(ee.comparator),this.es=new Map}getOverlay(e,n){return N.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Ns();return N.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.oe(e,n,r)}),N.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.es.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(s)),N.resolve()}getOverlaysForCollection(e,n,s){const i=Ns(),r=n.length+1,o=new ee(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return N.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new Ze((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=r.get(c.largestBatchId);u===null&&(u=Ns(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Ns(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return N.resolve(a)}oe(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(s.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new dO(n,s));let r=this.es.get(n);r===void 0&&(r=be(),this.es.set(n,r)),this.es.set(n,r.add(s.key))}}/**
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
 */class mh{constructor(){this.ns=new Je(et.ss),this.rs=new Je(et.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new et(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new et(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new ee(new Ne([])),s=new et(n,e),i=new et(n,e+1),r=[];return this.rs.forEachInRange([s,i],o=>{this.cs(o),r.push(o.key)}),r}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new ee(new Ne([])),s=new et(n,e),i=new et(n,e+1);let r=be();return this.rs.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new et(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class et{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return ee.comparator(e.key,n.key)||Ce(e._s,n._s)}static os(e,n){return Ce(e._s,n._s)||ee.comparator(e.key,n.key)}}/**
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
 */class _O{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Je(et.ss)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new uO(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new et(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return N.resolve(o)}lookupMutationBatch(e,n){return N.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ps(s),r=i<0?0:i;return N.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new et(n,0),i=new et(n,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([s,i],o=>{const a=this.ys(o._s);r.push(a)}),N.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Je(Ce);return n.forEach(i=>{const r=new et(i,0),o=new et(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,o],a=>{s=s.add(a._s)})}),N.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;ee.isDocumentKey(r)||(r=r.child(""));const o=new et(new ee(r),0);let a=new Je(Ce);return this.gs.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l._s)),!0)},o),N.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const i=this.ys(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Le(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return N.forEach(n.mutations,i=>{const r=new et(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new et(n,0),i=this.gs.firstAfterOrEqual(s);return N.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class TO{constructor(e){this.Es=e,this.docs=new Ze(ee.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return N.resolve(s?s.document.mutableCopy():pt.newInvalidDocument(n))}getEntries(e,n){let s=Vn();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():pt.newInvalidDocument(i))}),N.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=Vn();const o=n.path,a=new ee(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||hR(dR(u),s)<=0||(i.has(u.key)||Fl(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return N.resolve(r)}getAllFromCollectionGroup(e,n,s,i){oe()}As(e,n){return N.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new SO(this)}getSize(e){return N.resolve(this.size)}}class SO extends gO{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(s)}),N.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class EO{constructor(e){this.persistence=e,this.Rs=new er(n=>ch(n),uh),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.bs=0,this.Ps=new mh,this.targetCount=0,this.vs=ji.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,i)=>n(i)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),N.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new ji(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,N.resolve()}updateTargetData(e,n){return this.Dn(n),N.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),N.waitFor(r).next(()=>i)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return N.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),N.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),N.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),N.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return N.resolve(s)}containsKey(e,n){return N.resolve(this.Ps.containsKey(n))}}/**
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
 */class IO{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new ah(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new EO(this),this.indexManager=new pO,this.remoteDocumentCache=function(s){return new TO(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new hO(n),this.Ns=new bO(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new wO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new _O(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){J("MemoryPersistence","Starting transaction:",e);const i=new CO(this.Ss.next());return this.referenceDelegate.ks(),s(i).next(r=>this.referenceDelegate.Os(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ms(e,n){return N.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class CO extends pR{constructor(e){super(),this.currentSequenceNumber=e}}class gh{constructor(e){this.persistence=e,this.Fs=new mh,this.$s=null}static Bs(e){return new gh(e)}get Ls(){if(this.$s)return this.$s;throw oe()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),N.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),N.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),N.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Ls.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.Ls,s=>{const i=ee.fromPath(s);return this.qs(e,i).next(r=>{r||n.removeEntry(i,he.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return N.or([()=>N.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
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
 */class yh{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=i}static Ci(e,n){let s=be(),i=be();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new yh(e,n.fromCache,s,i)}}/**
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
 */class xO{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,i){return this.ki(e,n).next(r=>r||this.Oi(e,n,i,s)).next(r=>r||this.Mi(e,n))}ki(e,n){if(Qp(n))return N.resolve(null);let s=Un(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Du(n,null,"F"),s=Un(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=be(...r);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.Fi(n,a);return this.$i(n,c,o,l.readTime)?this.ki(e,Du(n,null,"F")):this.Bi(e,c,n,l)}))})))}Oi(e,n,s,i){return Qp(n)||i.isEqual(he.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(r=>{const o=this.Fi(n,r);return this.$i(n,o,s,i)?this.Mi(e,n):(Up()<=Ie.DEBUG&&J("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Pu(n)),this.Bi(e,o,n,uR(i,-1)))})}Fi(e,n){let s=new Je(iw(e));return n.forEach((i,r)=>{Fl(e,r)&&(s=s.add(r))}),s}$i(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Mi(e,n){return Up()<=Ie.DEBUG&&J("QueryEngine","Using full collection scan to execute query:",Pu(n)),this.Ni.getDocumentsMatchingQuery(e,n,vs.min())}Bi(e,n,s,i){return this.Ni.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class AO{constructor(e,n,s,i){this.persistence=e,this.Li=n,this.yt=i,this.qi=new Ze(Ce),this.Ui=new er(r=>ch(r),uh),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new vO(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function kO(t,e,n,s){return new AO(t,e,n,s)}async function Aw(t,e){const n=fe(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=be();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({ji:c,removedBatchIds:o,addedBatchIds:a}))})})}function RO(t,e){const n=fe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,d=u.keys();let h=N.resolve();return d.forEach(f=>{h=h.next(()=>c.getEntry(a,f)).next(g=>{const y=l.docVersions.get(f);Le(y!==null),g.version.compareTo(y)<0&&(u.applyToRemoteDocument(g,l),g.isValidDocument()&&(g.setReadTime(l.commitVersion),c.addEntry(g)))})}),h.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=be();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function kw(t){const e=fe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function OO(t,e){const n=fe(t),s=e.snapshotVersion;let i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;const a=[];e.targetChanges.forEach((u,d)=>{const h=i.get(d);if(!h)return;a.push(n.Cs.removeMatchingKeys(r,u.removedDocuments,d).next(()=>n.Cs.addMatchingKeys(r,u.addedDocuments,d)));let f=h.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(d)?f=f.withResumeToken(_t.EMPTY_BYTE_STRING,he.min()).withLastLimboFreeSnapshotVersion(he.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,s)),i=i.insert(d,f),function(g,y,_){return g.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(h,f,u)&&a.push(n.Cs.updateTargetData(r,f))});let l=Vn(),c=be();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(DO(r,o,e.documentUpdates).next(u=>{l=u.Wi,c=u.zi})),!s.isEqual(he.min())){const u=n.Cs.getLastRemoteSnapshotVersion(r).next(d=>n.Cs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return N.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.qi=i,r))}function DO(t,e,n){let s=be(),i=be();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=Vn();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(he.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):J("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function PO(t,e){const n=fe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function MO(t,e){const n=fe(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Cs.getTargetData(s,e).next(r=>r?(i=r,N.resolve(i)):n.Cs.allocateTargetId(s).next(o=>(i=new js(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.qi.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qi=n.qi.insert(s.targetId,s),n.Ui.set(e,s.targetId)),s})}async function Fu(t,e,n){const s=fe(t),i=s.qi.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!xo(o))throw o;J("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.qi=s.qi.remove(e),s.Ui.delete(i.target)}function rm(t,e,n){const s=fe(t);let i=he.min(),r=be();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=fe(a),d=u.Ui.get(c);return d!==void 0?N.resolve(u.qi.get(d)):u.Cs.getTargetData(l,c)}(s,o,Un(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?i:he.min(),n?r:be())).next(a=>(LO(s,RR(e),a),{documents:a,Hi:r})))}function LO(t,e,n){let s=t.Ki.get(e)||he.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Ki.set(e,s)}class om{constructor(){this.activeTargetIds=bw()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class NO{constructor(){this.Lr=new om,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,s){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new om,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class FO{Ur(e){}shutdown(){}}/**
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
 */class am{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){J("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){J("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const $O={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class BO{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class UO extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,i,r){const o=this.ho(e,n);J("RestConnection","Sending: ",o,s);const a={};return this.lo(a,i,r),this.fo(e,o,a,s).then(l=>(J("RestConnection","Received: ",l),l),l=>{throw Cu("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",s),l})}_o(e,n,s,i,r,o){return this.ao(e,n,s,i,r)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Zi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}ho(e,n){const s=$O[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,i){return new Promise((r,o)=>{const a=new eR;a.setWithCredentials(!0),a.listenOnce(Xk.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case xc.NO_ERROR:const c=a.getResponseJson();J("Connection","XHR received:",JSON.stringify(c)),r(c);break;case xc.TIMEOUT:J("Connection",'RPC "'+e+'" timed out'),o(new K(D.DEADLINE_EXCEEDED,"Request time out"));break;case xc.HTTP_ERROR:const u=a.getStatus();if(J("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let d=a.getResponseJson();Array.isArray(d)&&(d=d[0]);const h=d==null?void 0:d.error;if(h&&h.status&&h.message){const f=function(g){const y=g.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(y)>=0?y:D.UNKNOWN}(h.status);o(new K(f,h.message))}else o(new K(D.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new K(D.UNAVAILABLE,"Connection failed."));break;default:oe()}}finally{J("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,s,15)})}wo(e,n,s){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=Yk(),o=Qk(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Zk({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const l=i.join("");J("Connection","Creating WebChannel: "+l,a);const c=r.createWebChannel(l,a);let u=!1,d=!1;const h=new BO({Hr:g=>{d?J("Connection","Not sending because WebChannel is closed:",g):(u||(J("Connection","Opening WebChannel transport."),c.open(),u=!0),J("Connection","WebChannel sending:",g),c.send(g))},Jr:()=>c.close()}),f=(g,y,_)=>{g.listen(y,m=>{try{_(m)}catch(p){setTimeout(()=>{throw p},0)}})};return f(c,Jo.EventType.OPEN,()=>{d||J("Connection","WebChannel transport opened.")}),f(c,Jo.EventType.CLOSE,()=>{d||(d=!0,J("Connection","WebChannel transport closed"),h.io())}),f(c,Jo.EventType.ERROR,g=>{d||(d=!0,Cu("Connection","WebChannel transport errored:",g),h.io(new K(D.UNAVAILABLE,"The operation could not be completed")))}),f(c,Jo.EventType.MESSAGE,g=>{var y;if(!d){const _=g.data[0];Le(!!_);const m=_,p=m.error||((y=m[0])===null||y===void 0?void 0:y.error);if(p){J("Connection","WebChannel received error:",p);const v=p.status;let S=function(I){const C=We[I];if(C!==void 0)return mw(C)}(v),E=p.message;S===void 0&&(S=D.INTERNAL,E="Unknown error status: "+v+" with message "+p.message),d=!0,h.io(new K(S,E)),c.close()}else J("Connection","WebChannel received:",_),h.ro(_)}}),f(o,Jk.STAT_EVENT,g=>{g.stat===$p.PROXY?J("Connection","Detected buffering proxy"):g.stat===$p.NOPROXY&&J("Connection","Detected no buffering proxy")}),setTimeout(()=>{h.so()},0),h}}function kc(){return typeof document<"u"?document:null}/**
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
 */function Vl(t){return new QR(t,!0)}class Rw{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-s);i>0&&J("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class Ow{constructor(e,n,s,i,r,o,a,l){this.Hs=e,this.vo=s,this.Vo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Rw(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===D.RESOURCE_EXHAUSTED?($n(n.toString()),$n("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.So===n&&this.Go(s,i)},s=>{e(()=>{const i=new K(D.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(i)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{s(()=>this.Qo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return J("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(J("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class VO extends Ow{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.yt=r}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=ZR(this.yt,e),s=function(i){if(!("targetChange"in i))return he.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?he.min():r.readTime?gn(r.readTime):he.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=Nu(this.yt),n.addTarget=function(i,r){let o;const a=r.target;return o=Ru(a)?{documents:nO(i,a)}:{query:sO(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Tw(i,r.resumeToken):r.snapshotVersion.compareTo(he.min())>0&&(o.readTime=qa(i,r.snapshotVersion.toTimestamp())),o}(this.yt,e);const s=rO(this.yt,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=Nu(this.yt),n.removeTarget=e,this.Bo(n)}}class jO extends Ow{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.yt=r,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Le(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=tO(e.writeResults,e.commitTime),s=gn(e.commitTime);return this.listener.Zo(s,n)}return Le(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Nu(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>eO(this.yt,s))};this.Bo(n)}}/**
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
 */class zO extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.yt=i,this.nu=!1}su(){if(this.nu)throw new K(D.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.ao(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(D.UNKNOWN,i.toString())})}_o(e,n,s,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection._o(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new K(D.UNKNOWN,r.toString())})}terminate(){this.nu=!0}}class qO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?($n(n),this.ou=!1):J("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class HO{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=r,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{ci(this)&&(J("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=fe(a);l._u.add(4),await Oo(l),l.gu.set("Unknown"),l._u.delete(4),await jl(l)}(this))})}),this.gu=new qO(s,i)}}async function jl(t){if(ci(t))for(const e of t.wu)await e(!0)}async function Oo(t){for(const e of t.wu)await e(!1)}function Dw(t,e){const n=fe(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),wh(n)?bh(n):tr(n).ko()&&vh(n,e))}function Pw(t,e){const n=fe(t),s=tr(n);n.du.delete(e),s.ko()&&Mw(n,e),n.du.size===0&&(s.ko()?s.Fo():ci(n)&&n.gu.set("Unknown"))}function vh(t,e){t.yu.Ot(e.targetId),tr(t).zo(e)}function Mw(t,e){t.yu.Ot(e),tr(t).Ho(e)}function bh(t){t.yu=new GR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),tr(t).start(),t.gu.uu()}function wh(t){return ci(t)&&!tr(t).No()&&t.du.size>0}function ci(t){return fe(t)._u.size===0}function Lw(t){t.yu=void 0}async function GO(t){t.du.forEach((e,n)=>{vh(t,e)})}async function KO(t,e){Lw(t),wh(t)?(t.gu.hu(e),bh(t)):t.gu.set("Unknown")}async function WO(t,e,n){if(t.gu.set("Online"),e instanceof _w&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){J("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ha(t,s)}else if(e instanceof da?t.yu.Kt(e):e instanceof ww?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(he.min()))try{const s=await kw(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.yu.Zt(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=i.du.get(l);c&&i.du.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=i.du.get(a);if(!l)return;i.du.set(a,l.withResumeToken(_t.EMPTY_BYTE_STRING,l.snapshotVersion)),Mw(i,a);const c=new js(l.target,a,1,l.sequenceNumber);vh(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){J("RemoteStore","Failed to raise snapshot:",s),await Ha(t,s)}}async function Ha(t,e,n){if(!xo(e))throw e;t._u.add(1),await Oo(t),t.gu.set("Offline"),n||(n=()=>kw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{J("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await jl(t)})}function Nw(t,e){return e().catch(n=>Ha(t,n,e))}async function zl(t){const e=fe(t),n=ws(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;YO(e);)try{const i=await PO(e.localStore,s);if(i===null){e.fu.length===0&&n.Fo();break}s=i.batchId,QO(e,i)}catch(i){await Ha(e,i)}Fw(e)&&$w(e)}function YO(t){return ci(t)&&t.fu.length<10}function QO(t,e){t.fu.push(e);const n=ws(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function Fw(t){return ci(t)&&!ws(t).No()&&t.fu.length>0}function $w(t){ws(t).start()}async function XO(t){ws(t).eu()}async function JO(t){const e=ws(t);for(const n of t.fu)e.Xo(n.mutations)}async function ZO(t,e,n){const s=t.fu.shift(),i=ph.from(s,e,n);await Nw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await zl(t)}async function eD(t,e){e&&ws(t).Yo&&await async function(n,s){if(i=s.code,VR(i)&&i!==D.ABORTED){const r=n.fu.shift();ws(n).Mo(),await Nw(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await zl(n)}var i}(t,e),Fw(t)&&$w(t)}async function lm(t,e){const n=fe(t);n.asyncQueue.verifyOperationInProgress(),J("RemoteStore","RemoteStore received new credentials");const s=ci(n);n._u.add(3),await Oo(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await jl(n)}async function tD(t,e){const n=fe(t);e?(n._u.delete(2),await jl(n)):e||(n._u.add(2),await Oo(n),n.gu.set("Unknown"))}function tr(t){return t.pu||(t.pu=function(e,n,s){const i=fe(e);return i.su(),new VO(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,s)}(t.datastore,t.asyncQueue,{Yr:GO.bind(null,t),Zr:KO.bind(null,t),Wo:WO.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),wh(t)?bh(t):t.gu.set("Unknown")):(await t.pu.stop(),Lw(t))})),t.pu}function ws(t){return t.Iu||(t.Iu=function(e,n,s){const i=fe(e);return i.su(),new jO(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,s)}(t.datastore,t.asyncQueue,{Yr:XO.bind(null,t),Zr:eD.bind(null,t),tu:JO.bind(null,t),Zo:ZO.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await zl(t)):(await t.Iu.stop(),t.fu.length>0&&(J("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
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
 */class _h{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Pn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new _h(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Th(t,e){if($n("AsyncQueue",`${e}: ${t}`),xo(t))return new K(D.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class xi{constructor(e){this.comparator=e?(n,s)=>e(n,s)||ee.comparator(n.key,s.key):(n,s)=>ee.comparator(n.key,s.key),this.keyedMap=pr(),this.sortedSet=new Ze(this.comparator)}static emptySet(e){return new xi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof xi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new xi;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class cm{constructor(){this.Tu=new Ze(ee.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):oe():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class zi{constructor(e,n,s,i,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new zi(e,n,xi.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Nl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class nD{constructor(){this.Au=void 0,this.listeners=[]}}class sD{constructor(){this.queries=new er(e=>sw(e),Nl),this.onlineState="Unknown",this.Ru=new Set}}async function Bw(t,e){const n=fe(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new nD),i)try{r.Au=await n.onListen(s)}catch(o){const a=Th(o,`Initialization of query '${Pu(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.bu(n.onlineState),r.Au&&e.Pu(r.Au)&&Sh(n)}async function Uw(t,e){const n=fe(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function iD(t,e){const n=fe(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Pu(i)&&(s=!0);o.Au=i}}s&&Sh(n)}function rD(t,e,n){const s=fe(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Sh(t){t.Ru.forEach(e=>{e.next()})}class Vw{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new zi(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=zi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
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
 */class jw{constructor(e){this.key=e}}class zw{constructor(e){this.key=e}}class oD{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=be(),this.mutatedKeys=be(),this.Gu=iw(e),this.Qu=new xi(this.Gu)}get ju(){return this.qu}Wu(e,n){const s=n?n.zu:new cm,i=n?n.Qu:this.Qu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,d)=>{const h=i.get(u),f=Fl(this.query,d)?d:null,g=!!h&&this.mutatedKeys.has(h.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let _=!1;h&&f?h.data.isEqual(f.data)?g!==y&&(s.track({type:3,doc:f}),_=!0):this.Hu(h,f)||(s.track({type:2,doc:f}),_=!0,(l&&this.Gu(f,l)>0||c&&this.Gu(f,c)<0)&&(a=!0)):!h&&f?(s.track({type:0,doc:f}),_=!0):h&&!f&&(s.track({type:1,doc:h}),_=!0,(l||c)&&(a=!0)),_&&(f?(o=o.add(f),r=y?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{Qu:o,zu:s,$i:a,mutatedKeys:r}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const r=e.zu.Eu();r.sort((c,u)=>function(d,h){const f=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return oe()}};return f(d)-f(h)}(c.type,u.type)||this.Gu(c.doc,u.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.Uu;return this.Uu=a,r.length!==0||l?{snapshot:new zi(this.query,e.Qu,i,r,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new cm,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=be(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new zw(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new jw(s))}),n}tc(e){this.qu=e.Hi,this.Ku=be();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return zi.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class aD{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class lD{constructor(e){this.key=e,this.nc=!1}}class cD{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new er(a=>sw(a),Nl),this.rc=new Map,this.oc=new Set,this.uc=new Ze(ee.comparator),this.cc=new Map,this.ac=new mh,this.hc={},this.lc=new Map,this.fc=ji.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function uD(t,e){const n=wD(t);let s,i;const r=n.ic.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.ec();else{const o=await MO(n.localStore,Un(e));n.isPrimaryClient&&Dw(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await dD(n,e,s,a==="current",o.resumeToken)}return i}async function dD(t,e,n,s,i){t._c=(d,h,f)=>async function(g,y,_,m){let p=y.view.Wu(_);p.$i&&(p=await rm(g.localStore,y.query,!1).then(({documents:E})=>y.view.Wu(E,p)));const v=m&&m.targetChanges.get(y.targetId),S=y.view.applyChanges(p,g.isPrimaryClient,v);return dm(g,y.targetId,S.Xu),S.snapshot}(t,d,h,f);const r=await rm(t.localStore,e,!0),o=new oD(e,r.Hi),a=o.Wu(r.documents),l=Ro.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);dm(t,n,c.Xu);const u=new aD(e,n,o);return t.ic.set(e,u),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),c.snapshot}async function hD(t,e){const n=fe(t),s=n.ic.get(e),i=n.rc.get(s.targetId);if(i.length>1)return n.rc.set(s.targetId,i.filter(r=>!Nl(r,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Fu(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Pw(n.remoteStore,s.targetId),$u(n,s.targetId)}).catch(Co)):($u(n,s.targetId),await Fu(n.localStore,s.targetId,!0))}async function fD(t,e,n){const s=_D(t);try{const i=await function(r,o){const a=fe(r),l=Xe.now(),c=o.reduce((h,f)=>h.add(f.key),be());let u,d;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>{let f=Vn(),g=be();return a.Gi.getEntries(h,c).next(y=>{f=y,f.forEach((_,m)=>{m.isValidDocument()||(g=g.add(_))})}).next(()=>a.localDocuments.getOverlayedDocuments(h,f)).next(y=>{u=y;const _=[];for(const m of o){const p=$R(m,u.get(m.key).overlayedDocument);p!=null&&_.push(new Es(m.key,p,ew(p.value.mapValue),mn.exists(!0)))}return a.mutationQueue.addMutationBatch(h,l,_,o)}).next(y=>{d=y;const _=y.applyToLocalDocumentSet(u,g);return a.documentOverlayCache.saveOverlays(h,y.batchId,_)})}).then(()=>({batchId:d.batchId,changes:yw(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let l=r.hc[r.currentUser.toKey()];l||(l=new Ze(Ce)),l=l.insert(o,a),r.hc[r.currentUser.toKey()]=l}(s,i.batchId,n),await Do(s,i.changes),await zl(s.remoteStore)}catch(i){const r=Th(i,"Failed to persist write");n.reject(r)}}async function qw(t,e){const n=fe(t);try{const s=await OO(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.cc.get(r);o&&(Le(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?Le(o.nc):i.removedDocuments.size>0&&(Le(o.nc),o.nc=!1))}),await Do(n,s,e)}catch(s){await Co(s)}}function um(t,e,n){const s=fe(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.ic.forEach((r,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=fe(r);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const d of u.listeners)d.bu(o)&&(l=!0)}),l&&Sh(a)}(s.eventManager,e),i.length&&s.sc.Wo(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function pD(t,e,n){const s=fe(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.cc.get(e),r=i&&i.key;if(r){let o=new Ze(ee.comparator);o=o.insert(r,pt.newNoDocument(r,he.min()));const a=be().add(r),l=new Ul(he.min(),new Map,new Je(Ce),o,a);await qw(s,l),s.uc=s.uc.remove(r),s.cc.delete(e),Eh(s)}else await Fu(s.localStore,e,!1).then(()=>$u(s,e,n)).catch(Co)}async function mD(t,e){const n=fe(t),s=e.batch.batchId;try{const i=await RO(n.localStore,e);Gw(n,s,null),Hw(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Do(n,i)}catch(i){await Co(i)}}async function gD(t,e,n){const s=fe(t);try{const i=await function(r,o){const a=fe(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(Le(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(s.localStore,e);Gw(s,e,n),Hw(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Do(s,i)}catch(i){await Co(i)}}function Hw(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function Gw(t,e,n){const s=fe(t);let i=s.hc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.hc[s.currentUser.toKey()]=i}}function $u(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||Kw(t,s)})}function Kw(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(Pw(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Eh(t))}function dm(t,e,n){for(const s of n)s instanceof jw?(t.ac.addReference(s.key,e),yD(t,s)):s instanceof zw?(J("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||Kw(t,s.key)):oe()}function yD(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(J("SyncEngine","New document in limbo: "+n),t.oc.add(s),Eh(t))}function Eh(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new ee(Ne.fromString(e)),s=t.fc.next();t.cc.set(s,new lD(n)),t.uc=t.uc.insert(n,s),Dw(t.remoteStore,new js(Un(dh(n.path)),s,2,ah.at))}}async function Do(t,e,n){const s=fe(t),i=[],r=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,l)=>{o.push(s._c(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=yh.Ci(l.targetId,c);r.push(u)}}))}),await Promise.all(o),s.sc.Wo(i),await async function(a,l){const c=fe(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>N.forEach(l,d=>N.forEach(d.Si,h=>c.persistence.referenceDelegate.addReference(u,d.targetId,h)).next(()=>N.forEach(d.Di,h=>c.persistence.referenceDelegate.removeReference(u,d.targetId,h)))))}catch(u){if(!xo(u))throw u;J("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const d=u.targetId;if(!u.fromCache){const h=c.qi.get(d),f=h.snapshotVersion,g=h.withLastLimboFreeSnapshotVersion(f);c.qi=c.qi.insert(d,g)}}}(s.localStore,r))}async function vD(t,e){const n=fe(t);if(!n.currentUser.isEqual(e)){J("SyncEngine","User change. New user:",e.toKey());const s=await Aw(n.localStore,e);n.currentUser=e,function(i,r){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new K(D.CANCELLED,r))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Do(n,s.ji)}}function bD(t,e){const n=fe(t),s=n.cc.get(e);if(s&&s.nc)return be().add(s.key);{let i=be();const r=n.rc.get(e);if(!r)return i;for(const o of r){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function wD(t){const e=fe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=qw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=pD.bind(null,e),e.sc.Wo=iD.bind(null,e.eventManager),e.sc.wc=rD.bind(null,e.eventManager),e}function _D(t){const e=fe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=mD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=gD.bind(null,e),e}class TD{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=Vl(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return kO(this.persistence,new xO,e.initialUser,this.yt)}yc(e){return new IO(gh.Bs,this.yt)}gc(e){return new NO}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class SD{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>um(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=vD.bind(null,this.syncEngine),await tD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new sD}createDatastore(e){const n=Vl(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new UO(i));var i;return function(r,o,a,l){return new zO(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>um(this.syncEngine,a,0),o=am.C()?new am:new FO,new HO(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,l,c){const u=new cD(s,i,r,o,a,l);return c&&(u.dc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=fe(e);J("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Oo(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function Ww(t,e,n){if(!n)throw new K(D.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ED(t,e,n,s){if(e===!0&&s===!0)throw new K(D.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function hm(t){if(!ee.isDocumentKey(t))throw new K(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function fm(t){if(ee.isDocumentKey(t))throw new K(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ql(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":oe()}function jn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ql(t);throw new K(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const pm=new Map;class mm{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new K(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,ED("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Hl{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mm({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new K(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new K(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mm(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new tR;switch(n.type){case"gapi":const s=n.client;return new rR(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new K(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=pm.get(e);n&&(J("ComponentProvider","Removing Datastore"),pm.delete(e),n.terminate())}(this),Promise.resolve()}}function ID(t,e,n,s={}){var i;const r=(t=jn(t,Hl))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&Cu("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=ut.MOCK_USER;else{o=yI(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new K(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ut(l)}t._authCredentials=new nR(new jb(o,a))}}/**
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
 */class Et{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new hs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Et(this.firestore,e,this._key)}}class nr{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new nr(this.firestore,e,this._query)}}class hs extends nr{constructor(e,n,s){super(e,n,dh(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Et(this.firestore,null,new ee(e))}withConverter(e){return new hs(this.firestore,e,this._path)}}function Ih(t,e,...n){if(t=tt(t),Ww("collection","path",e),t instanceof Hl){const s=Ne.fromString(e,...n);return fm(s),new hs(t,null,s)}{if(!(t instanceof Et||t instanceof hs))throw new K(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ne.fromString(e,...n));return fm(s),new hs(t.firestore,null,s)}}function Zr(t,e,...n){if(t=tt(t),arguments.length===1&&(e=zb.R()),Ww("doc","path",e),t instanceof Hl){const s=Ne.fromString(e,...n);return hm(s),new Et(t,null,new ee(s))}{if(!(t instanceof Et||t instanceof hs))throw new K(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ne.fromString(e,...n));return hm(s),new Et(t.firestore,t instanceof hs?t.converter:null,new ee(s))}}/**
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
 */class Yw{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):$n("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class CD{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=ut.UNAUTHENTICATED,this.clientId=zb.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{J("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(J("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new K(D.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Th(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function xD(t,e){t.asyncQueue.verifyOperationInProgress(),J("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Aw(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function AD(t,e){t.asyncQueue.verifyOperationInProgress();const n=await kD(t);J("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>lm(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>lm(e.remoteStore,r)),t.onlineComponents=e}async function kD(t){return t.offlineComponents||(J("FirestoreClient","Using default OfflineComponentProvider"),await xD(t,new TD)),t.offlineComponents}async function Qw(t){return t.onlineComponents||(J("FirestoreClient","Using default OnlineComponentProvider"),await AD(t,new SD)),t.onlineComponents}function RD(t){return Qw(t).then(e=>e.syncEngine)}async function Xw(t){const e=await Qw(t),n=e.eventManager;return n.onListen=uD.bind(null,e.syncEngine),n.onUnlisten=hD.bind(null,e.syncEngine),n}function OD(t,e,n={}){const s=new Pn;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,l){const c=new Yw({next:d=>{r.enqueueAndForget(()=>Uw(i,u));const h=d.docs.has(o);!h&&d.fromCache?l.reject(new K(D.UNAVAILABLE,"Failed to get document because the client is offline.")):h&&d.fromCache&&a&&a.source==="server"?l.reject(new K(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),u=new Vw(dh(o.path),c,{includeMetadataChanges:!0,Nu:!0});return Bw(i,u)}(await Xw(t),t.asyncQueue,e,n,s)),s.promise}function DD(t,e,n={}){const s=new Pn;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,l){const c=new Yw({next:d=>{r.enqueueAndForget(()=>Uw(i,u)),d.fromCache&&a.source==="server"?l.reject(new K(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),u=new Vw(o,c,{includeMetadataChanges:!0,Nu:!0});return Bw(i,u)}(await Xw(t),t.asyncQueue,e,n,s)),s.promise}class PD{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Rw(this,"async_queue_retry"),this.Wc=()=>{const n=kc();n&&J("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=kc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=kc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new Pn;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!xo(e))throw e;J("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw $n("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=_h.createAndSchedule(this,e,n,s,r=>this.Yc(r));return this.Uc.push(i),i}zc(){this.Kc&&oe()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}class Po extends Hl{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new PD,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Jw(this),this._firestoreClient.terminate()}}function MD(t,e){const n=typeof t=="object"?t:Cd(),s=typeof t=="string"?t:e||"(default)",i=oi(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=pI("firestore");r&&ID(i,...r)}return i}function Ch(t){return t._firestoreClient||Jw(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Jw(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new mR(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new CD(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
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
 */class qi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new qi(_t.fromBase64String(e))}catch(n){throw new K(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new qi(_t.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Gl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class xh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ce(this._lat,e._lat)||Ce(this._long,e._long)}}/**
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
 */const LD=/^__.*__$/;class ND{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Es(e,this.data,this.fieldMask,n,this.fieldTransforms):new ko(e,this.data,n,this.fieldTransforms)}}class Zw{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Es(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function e0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw oe()}}class Kl{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.yt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.na(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Kl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.ua(e),i}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Ga(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(e0(this.sa)&&LD.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class FD{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=s||Vl(e)}da(e,n,s,i=!1){return new Kl({sa:e,methodName:n,fa:s,path:gt.emptyPath(),oa:!1,la:i},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function Ah(t){const e=t._freezeSettings(),n=Vl(t._databaseId);return new FD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function $D(t,e,n,s,i,r={}){const o=t.da(r.merge||r.mergeFields?2:0,e,n,i);kh("Data must be an object, but it was:",o,s);const a=n0(s,o);let l,c;if(r.merge)l=new Bt(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const d of r.mergeFields){const h=Bu(e,d,n);if(!o.contains(h))throw new K(D.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);i0(u,h)||u.push(h)}l=new Bt(u),c=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,c=o.fieldTransforms;return new ND(new At(a),l,c)}class Wl extends Mo{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Wl}}function t0(t,e,n){return new Kl({sa:3,fa:e.settings.fa,methodName:t._methodName,oa:n},e.databaseId,e.yt,e.ignoreUndefinedProperties)}class BD extends Mo{constructor(e,n){super(e),this._a=n}_toFieldTransform(e){const n=t0(this,e,!0),s=this._a.map(r=>ui(r,n)),i=new Ui(s);return new dw(e.path,i)}isEqual(e){return this===e}}class UD extends Mo{constructor(e,n){super(e),this._a=n}_toFieldTransform(e){const n=t0(this,e,!0),s=this._a.map(r=>ui(r,n)),i=new Vi(s);return new dw(e.path,i)}isEqual(e){return this===e}}function VD(t,e,n,s){const i=t.da(1,e,n);kh("Data must be an object, but it was:",i,s);const r=[],o=At.empty();li(s,(l,c)=>{const u=Rh(e,l,n);c=tt(c);const d=i.ca(u);if(c instanceof Wl)r.push(u);else{const h=ui(c,d);h!=null&&(r.push(u),o.set(u,h))}});const a=new Bt(r);return new Zw(o,a,i.fieldTransforms)}function jD(t,e,n,s,i,r){const o=t.da(1,e,n),a=[Bu(e,s,n)],l=[i];if(r.length%2!=0)throw new K(D.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<r.length;h+=2)a.push(Bu(e,r[h])),l.push(r[h+1]);const c=[],u=At.empty();for(let h=a.length-1;h>=0;--h)if(!i0(c,a[h])){const f=a[h];let g=l[h];g=tt(g);const y=o.ca(f);if(g instanceof Wl)c.push(f);else{const _=ui(g,y);_!=null&&(c.push(f),u.set(f,_))}}const d=new Bt(c);return new Zw(u,d,o.fieldTransforms)}function zD(t,e,n,s=!1){return ui(n,t.da(s?4:3,e))}function ui(t,e){if(s0(t=tt(t)))return kh("Unsupported field value:",e,t),n0(t,e);if(t instanceof Mo)return function(n,s){if(!e0(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=ui(o,s.aa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=tt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return DR(s.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Xe.fromDate(n);return{timestampValue:qa(s.yt,i)}}if(n instanceof Xe){const i=new Xe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:qa(s.yt,i)}}if(n instanceof xh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof qi)return{bytesValue:Tw(s.yt,n._byteString)};if(n instanceof Et){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:fh(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${ql(n)}`)}(t,e)}function n0(t,e){const n={};return qb(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):li(t,(s,i)=>{const r=ui(i,e.ra(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function s0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Xe||t instanceof xh||t instanceof qi||t instanceof Et||t instanceof Mo)}function kh(t,e,n){if(!s0(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=ql(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function Bu(t,e,n){if((e=tt(e))instanceof Gl)return e._internalPath;if(typeof e=="string")return Rh(t,e);throw Ga("Field path arguments must be of type string or ",t,!1,void 0,n)}const qD=new RegExp("[~\\*/\\[\\]]");function Rh(t,e,n){if(e.search(qD)>=0)throw Ga(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Gl(...e.split("."))._internalPath}catch{throw Ga(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ga(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new K(D.INVALID_ARGUMENT,a+t+l)}function i0(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class r0{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new HD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Oh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class HD extends r0{data(){return super.data()}}function Oh(t,e){return typeof e=="string"?Rh(t,e):e instanceof Gl?e._internalPath:e._delegate._internalPath}/**
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
 */function GD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Dh{}class KD extends Dh{}function WD(t,e,...n){let s=[];e instanceof Dh&&s.push(e),s=s.concat(n),function(i){const r=i.filter(a=>a instanceof Ph).length,o=i.filter(a=>a instanceof Yl).length;if(r>1||r>0&&o>0)throw new K(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)t=i._apply(t);return t}class Yl extends KD{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new Yl(e,n,s)}_apply(e){const n=this._parse(e);return o0(e._query,n),new nr(e.firestore,e.converter,Ou(e._query,n))}_parse(e){const n=Ah(e.firestore);return function(i,r,o,a,l,c,u){let d;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new K(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){ym(u,c);const h=[];for(const f of u)h.push(gm(a,i,f));d={arrayValue:{values:h}}}else d=gm(a,i,u)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||ym(u,c),d=zD(o,r,u,c==="in"||c==="not-in");return Qe.create(l,c,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function YD(t,e,n){const s=e,i=Oh("where",t);return Yl._create(i,s,n)}class Ph extends Dh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ph(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Bn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let r=s;const o=i.getFlattenedFilters();for(const a of o)o0(r,a),r=Ou(r,a)}(e._query,n),new nr(e.firestore,e.converter,Ou(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function gm(t,e,n){if(typeof(n=tt(n))=="string"){if(n==="")throw new K(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!nw(e)&&n.indexOf("/")!==-1)throw new K(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Ne.fromString(n));if(!ee.isDocumentKey(s))throw new K(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return zp(t,new ee(s))}if(n instanceof Et)return zp(t,n._key);throw new K(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ql(n)}.`)}function ym(t,e){if(!Array.isArray(t)||t.length===0)throw new K(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new K(D.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function o0(t,e){if(e.isInequality()){const s=hh(t),i=e.field;if(s!==null&&!s.isEqual(i))throw new K(D.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${i.toString()}'`);const r=tw(t);r!==null&&QD(t,i,r)}const n=function(s,i){for(const r of s)for(const o of r.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new K(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new K(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function QD(t,e,n){if(!n.isEqual(e))throw new K(D.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class XD{convertValue(e,n="none"){switch(ei(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Fi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw oe()}}convertObject(e,n){const s={};return li(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new xh(Ye(e.latitude),Ye(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Gb(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Xr(e));default:return null}}convertTimestamp(e){const n=bs(e);return new Xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ne.fromString(e);Le(xw(s));const i=new Qr(s.get(1),s.get(3)),r=new ee(s.popFirst(5));return i.isEqual(n)||$n(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */function JD(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class mr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class a0 extends r0{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ha(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Oh("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class ha extends a0{data(e={}){return super.data(e)}}class ZD{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new mr(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new ha(this._firestore,this._userDataWriter,s.key,s,new mr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new ha(s._firestore,s._userDataWriter,o.doc.key,o.doc,new mr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new ha(s._firestore,s._userDataWriter,o.doc.key,o.doc,new mr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,c=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:eP(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function eP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return oe()}}/**
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
 */function tP(t){t=jn(t,Et);const e=jn(t.firestore,Po);return OD(Ch(e),t._key).then(n=>nP(e,t,n))}class l0 extends XD{constructor(e){super(),this.firestore=e}convertBytes(e){return new qi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Et(this.firestore,null,n)}}function c0(t){t=jn(t,nr);const e=jn(t.firestore,Po),n=Ch(e),s=new l0(e);return GD(t._query),DD(n,t._query).then(i=>new ZD(e,s,t,i))}function u0(t,e,n){t=jn(t,Et);const s=jn(t.firestore,Po),i=JD(t.converter,e,n);return d0(s,[$D(Ah(s),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,mn.none())])}function vm(t,e,n,...s){t=jn(t,Et);const i=jn(t.firestore,Po),r=Ah(i);let o;return o=typeof(e=tt(e))=="string"||e instanceof Gl?jD(r,"updateDoc",t._key,e,n,s):VD(r,"updateDoc",t._key,e),d0(i,[o.toMutation(t._key,mn.exists(!0))])}function d0(t,e){return function(n,s){const i=new Pn;return n.asyncQueue.enqueueAndForget(async()=>fD(await RD(n),s,i)),i.promise}(Ch(t),e)}function nP(t,e,n){const s=n.docs.get(e._key),i=new l0(t);return new a0(t,i,e._key,s,new mr(n.hasPendingWrites,n.fromCache),e.converter)}function sP(...t){return new BD("arrayUnion",t)}function iP(...t){return new UD("arrayRemove",t)}(function(t,e=!0){(function(n){Zi=n})(fo),vn(new rn("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new Po(new sR(n.getProvider("auth-internal")),new aR(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new K(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qr(a.options.projectId,l)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Wt(Bp,"3.8.3",t),Wt(Bp,"3.8.3","esm2017")})();const rP={apiKey:"AIzaSyBWa7DHExtQ3KI_fAjy__BEKPh-HiJhwNU",authDomain:"arcadeasylum-46375.firebaseapp.com",projectId:"arcadeasylum-46375",storageBucket:"arcadeasylum-46375.appspot.com",messagingSenderId:"101550926492",appId:"1:101550926492:web:0d053dd8341f76b07b9b59",measurementId:"G-4YWLWLF3RB"},Mh=$y(rP);Jx(Mh);const Lh=JA(Mh),oP=new xn,zs=MD(Mh),_n=JS("asylumState",{state:()=>({userProfile:{},HomeState:[]}),getters:{count:function(){return this.userProfile.basket?this.userProfile.basket.length:void 0},logged:function(){return Object.keys(this.userProfile).length===0?void 0:this.userProfile}},actions:{init:async function(){const t=await c0(Ih(zs,"products")),e=[];t.forEach(n=>{e.push(n.data())}),this.HomeState=e},userInit:async function(t){t.basket=this.HomeState.filter(e=>t.basket.some(n=>n===e.id)),t.library=this.HomeState.filter(e=>t.library.some(n=>n===e.id)),this.userProfile=t},addTobasket:async function(t){const e=Zr(zs,"users",this.userProfile.userId);await vm(e,{basket:sP(t.id)}),this.userProfile.basket.push(t)},removefromBasket:async function(t){await vm(Zr(zs,"users",this.userProfile.userId),{basket:iP(t.id)}),this.userProfile.basket=this.userProfile.basket.filter(e=>e.id!==t.id)},getGenre:function(t){return this.HomeState.filter(e=>e.genres.includes(t))},getSearch:function(t){return this.HomeState.filter(e=>new RegExp(t).test(e.title.toLowerCase()))},getSale:function(){return this.HomeState.filter(t=>t.discount)}}}),bm=()=>{lA(Lh,oP).then(t=>{const e={userId:t.user.uid,username:t.user.displayName,email:t.user.email,photo:t.user.photoURL,library:[],basket:[]};aP(e)})},aP=async t=>{const e=Ih(zs,"users"),n=WD(e,YD("email","==",t.email)),s=await c0(n);let i=!1;if(s.forEach(()=>{i=!0}),!i){const o=Zr(zs,"users",t.userId);u0(o,t)}const r=_n();r.userProfile=t};const lP={class:"nav-wrapper w-[100vw] h-[10vh] lg:w-[15vw] lg:h-[100vh] flex items-center justify-center lg:sticky lg:top-0"},cP={class:"nav shadow h-full lg:h-[90%] w-full lg:w-[50%] lg:rounded-lg flex items-center justify-start lg:justify-between lg:flex-col"},uP={class:"nav-section w-[78%] lg:h-[40%] lg:w-fit"},dP=z("img",{src:nI},null,-1),hP=[dP],fP=z("img",{src:sI},null,-1),pP={key:0,class:"absolute -right-2 -top-2 bg-black rounded-full w-[20px] h-[20px] flex items-center justify-center"},mP={class:"text-xs"},gP=z("img",{src:iI},null,-1),yP=[gP],vP={key:0,class:"nav-section w-[35%] lg:h-[30%] lg:w-fit flex lg:flex-col justify-evenly"},bP=z("img",{src:rI},null,-1),wP=[bP],_P=z("img",{src:oI},null,-1),TP=[_P],SP={key:1,class:"nav-section lg:h-[35%]"},EP=z("img",{src:aI},null,-1),IP=[EP],CP={__name:"NavView",setup(t){const e=_n(),n=Ae(()=>e.logged);return(s,i)=>(ie(),pe("nav",lP,[z("div",cP,[z("div",uP,[z("div",{class:"nav-item w-[25px] h-[25px] lg:w-[30px] lg:h-[30px]",onClick:i[0]||(i[0]=()=>s.$router.push({path:"/"}))},hP),z("div",{class:"nav-item relative w-[25px] h-[25px] lg:w-[30px] lg:h-[30px]",onClick:i[1]||(i[1]=()=>s.$router.push({path:"/basket",replace:!0}))},[fP,Oe(e).count&&Oe(e).count>0?(ie(),pe("div",pP,[z("p",mP,dt(Oe(e).count),1)])):ns("",!0)]),z("div",{class:"nav-item w-[25px] h-[25px] lg:w-[30px] lg:h-[30px]",onClick:i[2]||(i[2]=()=>s.$router.push({path:"/library",replace:!0}))},yP)]),Oe(n)?(ie(),pe("div",vP,[z("div",{class:"nav-item w-[25px] h-[25px] lg:w-[30px] lg:h-[30px]",onClick:i[3]||(i[3]=()=>s.$router.push({path:"/",replace:!0}))},wP),z("div",{class:"nav-item w-[25px] h-[25px] lg:w-[30px] lg:h-[30px]",onClick:i[4]||(i[4]=()=>{s.auth.signOut(),Oe(e).userProfile={}})},TP)])):(ie(),pe("div",SP,[z("div",{class:"nav-item w-[25px] h-[25px] lg:w-[30px] lg:h-[30px]",onClick:i[5]||(i[5]=(...r)=>Oe(bm)&&Oe(bm)(...r))},IP)]))])]))}};function xP(t){return[(t>>16&255)/255,(t>>8&255)/255,(255&t)/255]}["SCREEN","LINEAR_LIGHT"].reduce((t,e,n)=>Object.assign(t,{[e]:n}),{});class AP{constructor(e,n,s,i=!1){const r=this,o=document.location.search.toLowerCase().indexOf("debug=webgl")!==-1;r.canvas=e,r.gl=r.canvas.getContext("webgl",{antialias:!0}),r.meshes=[];const a=r.gl;n&&s&&this.setSize(n,s),r.lastDebugMsg,r.debug=i&&o?function(c){const u=new Date;u-r.lastDebugMsg>1e3&&console.log("---"),console.log(u.toLocaleTimeString()+Array(Math.max(0,32-c.length)).join(" ")+c+": ",...Array.from(arguments).slice(1)),r.lastDebugMsg=u}:()=>{},Object.defineProperties(r,{Material:{enumerable:!1,value:class{constructor(c,u,d={}){const h=this;function f(_,m){const p=a.createShader(_);return a.shaderSource(p,m),a.compileShader(p),a.getShaderParameter(p,a.COMPILE_STATUS)||console.error(a.getShaderInfoLog(p)),r.debug("Material.compileShaderSource",{source:m}),p}function g(_,m){return Object.entries(_).map(([p,v])=>v.getDeclaration(p,m)).join(`
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
} ${c}${d>0?`[${d}]`:""};`}return`uniform ${h.type} ${c}${d>0?`[${d}]`:""};`}}}},PlaneGeometry:{enumerable:!1,value:class{constructor(c,u,d,h,f){a.createBuffer(),this.attributes={position:new r.Attribute({target:a.ARRAY_BUFFER,size:3}),uv:new r.Attribute({target:a.ARRAY_BUFFER,size:2}),uvNorm:new r.Attribute({target:a.ARRAY_BUFFER,size:2}),index:new r.Attribute({target:a.ELEMENT_ARRAY_BUFFER,size:3,type:a.UNSIGNED_SHORT})},this.setTopology(d,h),this.setSize(c,u,f)}setTopology(c=1,u=1){const d=this;d.xSegCount=c,d.ySegCount=u,d.vertexCount=(d.xSegCount+1)*(d.ySegCount+1),d.quadCount=d.xSegCount*d.ySegCount*2,d.attributes.uv.values=new Float32Array(2*d.vertexCount),d.attributes.uvNorm.values=new Float32Array(2*d.vertexCount),d.attributes.index.values=new Uint16Array(3*d.quadCount);for(let h=0;h<=d.ySegCount;h++)for(let f=0;f<=d.xSegCount;f++){const g=h*(d.xSegCount+1)+f;if(d.attributes.uv.values[2*g]=f/d.xSegCount,d.attributes.uv.values[2*g+1]=1-h/d.ySegCount,d.attributes.uvNorm.values[2*g]=f/d.xSegCount*2-1,d.attributes.uvNorm.values[2*g+1]=1-h/d.ySegCount*2,f<d.xSegCount&&h<d.ySegCount){const y=h*d.xSegCount+f;d.attributes.index.values[6*y]=g,d.attributes.index.values[6*y+1]=g+1+d.xSegCount,d.attributes.index.values[6*y+2]=g+1,d.attributes.index.values[6*y+3]=g+1,d.attributes.index.values[6*y+4]=g+1+d.xSegCount,d.attributes.index.values[6*y+5]=g+2+d.xSegCount}}d.attributes.uv.update(),d.attributes.uvNorm.update(),d.attributes.index.update(),r.debug("Geometry.setTopology",{uv:d.attributes.uv,uvNorm:d.attributes.uvNorm,index:d.attributes.index})}setSize(c=1,u=1,d="xz"){const h=this;h.width=c,h.height=u,h.orientation=d,h.attributes.position.values&&h.attributes.position.values.length===3*h.vertexCount||(h.attributes.position.values=new Float32Array(3*h.vertexCount));const f=c/-2,g=u/-2,y=c/h.xSegCount,_=u/h.ySegCount;for(let m=0;m<=h.ySegCount;m++){const p=g+m*_;for(let v=0;v<=h.xSegCount;v++){const S=f+v*y,E=m*(h.xSegCount+1)+v;h.attributes.position.values[3*E+"xyz".indexOf(d[0])]=S,h.attributes.position.values[3*E+"xyz".indexOf(d[1])]=-p}}h.attributes.position.update(),r.debug("Geometry.setSize",{position:h.attributes.position})}}},Mesh:{enumerable:!1,value:class{constructor(c,u){const d=this;d.geometry=c,d.material=u,d.wireframe=!1,d.attributeInstances=[],Object.entries(d.geometry.attributes).forEach(([h,f])=>{d.attributeInstances.push({attribute:f,location:f.attach(h,d.material.program)})}),r.meshes.push(d),r.debug("Mesh.constructor",{mesh:d})}draw(){a.useProgram(this.material.program),this.material.uniformInstances.forEach(({uniform:c,location:u})=>c.update(u)),this.attributeInstances.forEach(({attribute:c,location:u})=>c.use(u)),a.drawElements(this.wireframe?a.LINES:a.TRIANGLES,this.geometry.attributes.index.values.length,a.UNSIGNED_SHORT,0)}remove(){r.meshes=r.meshes.filter(c=>c!=this)}}},Attribute:{enumerable:!1,value:class{constructor(c){this.type=a.FLOAT,this.normalized=!1,this.buffer=a.createBuffer(),Object.assign(this,c),this.update()}update(){this.values!==void 0&&(a.bindBuffer(this.target,this.buffer),a.bufferData(this.target,this.values,a.STATIC_DRAW))}attach(c,u){const d=a.getAttribLocation(u,c);return this.target===a.ARRAY_BUFFER&&(a.enableVertexAttribArray(d),a.vertexAttribPointer(d,this.size,this.type,this.normalized,0,0)),d}use(c){a.bindBuffer(this.target,this.buffer),this.target===a.ARRAY_BUFFER&&(a.enableVertexAttribArray(c),a.vertexAttribPointer(c,this.size,this.type,this.normalized,0,0))}}}});const l=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];r.commonUniforms={projectionMatrix:new r.Uniform({type:"mat4",value:l}),modelViewMatrix:new r.Uniform({type:"mat4",value:l}),resolution:new r.Uniform({type:"vec2",value:[1,1]}),aspectRatio:new r.Uniform({type:"float",value:1})}}setSize(e=640,n=480){this.width=e,this.height=n,this.canvas.width=e,this.canvas.height=n,this.gl.viewport(0,0,e,n),this.commonUniforms.resolution.value=[e,n],this.commonUniforms.aspectRatio.value=e/n,this.debug("MiniGL.setSize",{width:e,height:n})}setOrthographicCamera(e=0,n=0,s=0,i=-2e3,r=2e3){this.commonUniforms.projectionMatrix.value=[2/this.width,0,0,0,0,2/this.height,0,0,0,0,2/(i-r),0,e,n,s,1],this.debug("setOrthographicCamera",this.commonUniforms.projectionMatrix.value)}render(){this.gl.clearColor(0,0,0,0),this.gl.clearDepth(1),this.meshes.forEach(e=>e.draw())}}function re(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class kP{constructor(...e){re(this,"el",void 0),re(this,"cssVarRetries",0),re(this,"maxCssVarRetries",200),re(this,"angle",0),re(this,"isLoadedClass",!1),re(this,"isScrolling",!1),re(this,"scrollingTimeout",void 0),re(this,"scrollingRefreshDelay",200),re(this,"isIntersecting",!1),re(this,"shaderFiles",void 0),re(this,"vertexShader",void 0),re(this,"sectionColors",void 0),re(this,"computedCanvasStyle",void 0),re(this,"conf",void 0),re(this,"uniforms",void 0),re(this,"t",1253106),re(this,"last",0),re(this,"width",void 0),re(this,"minWidth",1111),re(this,"height",600),re(this,"xSegCount",void 0),re(this,"ySegCount",void 0),re(this,"mesh",void 0),re(this,"material",void 0),re(this,"geometry",void 0),re(this,"minigl",void 0),re(this,"scrollObserver",void 0),re(this,"amp",320),re(this,"seed",5),re(this,"freqX",14e-5),re(this,"freqY",29e-5),re(this,"freqDelta",1e-5),re(this,"activeColors",[1,1,1,1]),re(this,"isMetaKey",!1),re(this,"isGradientLegendVisible",!1),re(this,"isMouseDown",!1),re(this,"handleScroll",()=>{clearTimeout(this.scrollingTimeout),this.scrollingTimeout=setTimeout(this.handleScrollEnd,this.scrollingRefreshDelay),this.isGradientLegendVisible&&this.hideGradientLegend(),this.conf.playing&&(this.isScrolling=!0,this.pause())}),re(this,"handleScrollEnd",()=>{this.isScrolling=!1,this.isIntersecting&&this.play()}),re(this,"resize",()=>{this.width=window.innerWidth,this.minigl.setSize(this.width,this.height),this.minigl.setOrthographicCamera(),this.xSegCount=Math.ceil(this.width*this.conf.density[0]),this.ySegCount=Math.ceil(this.height*this.conf.density[1]),this.mesh.geometry.setTopology(this.xSegCount,this.ySegCount),this.mesh.geometry.setSize(this.width,this.height),this.mesh.material.uniforms.u_shadow_power.value=this.width<600?5:6}),re(this,"handleMouseDown",n=>{this.isGradientLegendVisible&&(this.isMetaKey=n.metaKey,this.isMouseDown=!0,this.conf.playing===!1&&requestAnimationFrame(this.animate))}),re(this,"handleMouseUp",()=>{this.isMouseDown=!1}),re(this,"animate",n=>{if(!this.shouldSkipFrame(n)||this.isMouseDown){if(this.t+=Math.min(n-this.last,1e3/15),this.last=n,this.isMouseDown){let s=160;this.isMetaKey&&(s=-160),this.t+=s}this.mesh.material.uniforms.u_time.value=this.t,this.minigl.render()}if(this.last!==0&&this.isStatic)return this.minigl.render(),void this.disconnect();(this.conf.playing||this.isMouseDown)&&requestAnimationFrame(this.animate)}),re(this,"addIsLoadedClass",()=>{!this.isLoadedClass&&(this.isLoadedClass=!0,this.el.classList.add("isLoaded"),setTimeout(()=>{this.el.parentElement.classList.add("isLoaded")},3e3))}),re(this,"pause",()=>{this.conf.playing=!1}),re(this,"play",()=>{requestAnimationFrame(this.animate),this.conf.playing=!0}),re(this,"initGradient",n=>(this.el=document.querySelector(n),this.connect(),this))}async connect(){this.shaderFiles={vertex:`varying vec3 v_color;

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
}`},this.conf={presetName:"",wireframe:!1,density:[.06,.16],zoom:1,rotation:0,playing:!0},document.querySelectorAll("canvas").length<1?console.log("DID NOT LOAD HERO STRIPE CANVAS"):(this.minigl=new AP(this.el,null,null,!0),requestAnimationFrame(()=>{this.el&&(this.computedCanvasStyle=getComputedStyle(this.el),this.waitForCssVars())}))}disconnect(){this.scrollObserver&&(window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("mousedown",this.handleMouseDown),window.removeEventListener("mouseup",this.handleMouseUp),window.removeEventListener("keydown",this.handleKeyDown),this.scrollObserver.disconnect()),window.removeEventListener("resize",this.resize)}initMaterial(){this.uniforms={u_time:new this.minigl.Uniform({value:0}),u_shadow_power:new this.minigl.Uniform({value:5}),u_darken_top:new this.minigl.Uniform({value:this.el.dataset.jsDarkenTop===""?1:0}),u_active_colors:new this.minigl.Uniform({value:this.activeColors,type:"vec4"}),u_global:new this.minigl.Uniform({value:{noiseFreq:new this.minigl.Uniform({value:[this.freqX,this.freqY],type:"vec2"}),noiseSpeed:new this.minigl.Uniform({value:5e-6})},type:"struct"}),u_vertDeform:new this.minigl.Uniform({value:{incline:new this.minigl.Uniform({value:Math.sin(this.angle)/Math.cos(this.angle)}),offsetTop:new this.minigl.Uniform({value:-.5}),offsetBottom:new this.minigl.Uniform({value:-.5}),noiseFreq:new this.minigl.Uniform({value:[3,4],type:"vec2"}),noiseAmp:new this.minigl.Uniform({value:this.amp}),noiseSpeed:new this.minigl.Uniform({value:10}),noiseFlow:new this.minigl.Uniform({value:3}),noiseSeed:new this.minigl.Uniform({value:this.seed})},type:"struct",excludeFrom:"fragment"}),u_baseColor:new this.minigl.Uniform({value:this.sectionColors[0],type:"vec3",excludeFrom:"fragment"}),u_waveLayers:new this.minigl.Uniform({value:[],excludeFrom:"fragment",type:"array"})};for(let e=1;e<this.sectionColors.length;e+=1)this.uniforms.u_waveLayers.value.push(new this.minigl.Uniform({value:{color:new this.minigl.Uniform({value:this.sectionColors[e],type:"vec3"}),noiseFreq:new this.minigl.Uniform({value:[2+e/this.sectionColors.length,3+e/this.sectionColors.length],type:"vec2"}),noiseSpeed:new this.minigl.Uniform({value:11+.3*e}),noiseFlow:new this.minigl.Uniform({value:6.5+.3*e}),noiseSeed:new this.minigl.Uniform({value:this.seed+10*e}),noiseFloor:new this.minigl.Uniform({value:.1}),noiseCeil:new this.minigl.Uniform({value:.63+.07*e})},type:"struct"}));return this.vertexShader=[this.shaderFiles.noise,this.shaderFiles.blend,this.shaderFiles.vertex].join(`

`),new this.minigl.Material(this.vertexShader,this.shaderFiles.fragment,this.uniforms)}initMesh(){this.material=this.initMaterial(),this.geometry=new this.minigl.PlaneGeometry,this.mesh=new this.minigl.Mesh(this.geometry,this.material)}shouldSkipFrame(e){return!!window.document.hidden||!this.conf.playing||parseInt(e,10)%2==0||void 0}updateFrequency(e){this.freqX+=e,this.freqY+=e}toggleColor(e){this.activeColors[e]=this.activeColors[e]===0?1:0}showGradientLegend(){this.width>this.minWidth&&(this.isGradientLegendVisible=!0,document.body.classList.add("isGradientLegendVisible"))}hideGradientLegend(){this.isGradientLegendVisible=!1,document.body.classList.remove("isGradientLegendVisible")}init(){this.initGradientColors(),this.initMesh(),this.resize(),requestAnimationFrame(this.animate),window.addEventListener("resize",this.resize)}waitForCssVars(){if(this.computedCanvasStyle&&this.computedCanvasStyle.getPropertyValue("--gradient-color-1").indexOf("#")!==-1)this.init(),this.addIsLoadedClass();else{if(this.cssVarRetries+=1,this.cssVarRetries>this.maxCssVarRetries)return this.sectionColors=[16711680,16711680,16711935,65280,255],void this.init();requestAnimationFrame(()=>this.waitForCssVars())}}initGradientColors(){this.sectionColors=["--gradient-color-1","--gradient-color-2","--gradient-color-3","--gradient-color-4"].map(e=>{let n=this.computedCanvasStyle.getPropertyValue(e).trim();return n.length===4&&(n=`#${n.substr(1).split("").map(i=>i+i).join("")}`),n&&`0x${n.substr(1)}`}).filter(Boolean).map(xP)}}const Lo=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},RP={name:"app",data(){return{store:_n()}},components:{NavView:CP,RouterView:Iy},setup(){tn(()=>{new kP().initGradient("#gradient-canvas")})},mounted(){$1(Lh,async t=>{if(t){const e=t.uid,n=Ih(zs,"users"),s=await tP(Zr(n,e));if(s.exists()){const i={userId:s.data().userId,username:s.data().displayName,email:s.data().email,photo:s.data().photoURL,library:s.data().library,basket:s.data().basket};this.store.userInit(i)}}}),this.store.init()}},OP={class:"main-wrapper flex"},DP={class:"section-wrapper w-full lg:w-[85vw] p-4 lg:pt-[40px]"},PP=z("canvas",{id:"gradient-canvas","data-transition-in":""},null,-1);function MP(t,e,n,s,i,r){const o=ht("NavView"),a=ht("RouterView");return ie(),pe("main",OP,[se(o),z("div",DP,[se(a)]),PP])}const LP=Lo(RP,[["render",MP]]);const h0={__name:"SkeletonLoading",props:{height:{type:String},width:{type:String},borderRadius:{type:String},times:{type:String},marginRight:{type:String},marginLeft:{type:String}},setup(t){return Hg(e=>({"3ab68c07":t.height,"9fb55234":t.width,"768a7a2e":t.marginRight,"7c80c496":t.marginLeft,bd0d6284:t.borderRadius})),(e,n)=>(ie(!0),pe(Ue,null,Qi(Number(t.times),s=>(ie(),pe("div",{class:"skeletonLoading",key:s}))),128))}};const NP={name:"GameList",props:["gameList"],components:{SkeletonLoading:h0},methods:{handleSelectGame(t){this.$router.push({path:`/game/${t.id}`,replace:!0})}}},FP={class:"flex flex-wrap"},$P={key:0,class:"flex flex-wrap"},BP=["onClick"],UP={class:"w-full h-full"},VP={class:"w-full h-full"},jP=["src"],zP={class:"justify-between game-details w-full p-5"},qP={class:"text-sm invisible lg:visible"},HP={class:"flex text-sm"};function GP(t,e,n,s,i,r){const o=ht("SkeletonLoading");return ie(),pe("div",FP,[n.gameList.length>0?(ie(),pe("div",$P,[(ie(!0),pe(Ue,null,Qi(this.gameList,a=>(ie(),pe("div",{class:"game-item relative rounded-lg w-[150px] h-[200px] md:w-[230px] md:h-[300px] my-2 mx-[5px] lg:my-[15px] lg:mr-[15px] lg:w-[215px] lg:h-[280px]",key:a.Id,onClick:()=>r.handleSelectGame(a)},[z("div",UP,[z("figure",VP,[z("img",{class:"w-full h-full",src:a.imageCover},null,8,jP)]),z("div",zP,[z("p",qP,dt(a.title),1),z("div",HP,[a.discount?(ie(),pe("p",{key:0,class:xt(["mr-2 relative",a.discount&&"price font-bold"])}," -"+dt(a.discount)+"% ",3)):ns("",!0),z("p",null,dt(a.price),1)])])])],8,BP))),128))])):(ie(),Zt(o,{key:1,marginLeft:"5px",marginRight:"15px",height:"300px",width:"215px",borderRadius:"10px",times:"5"}))])}const sr=Lo(NP,[["render",GP]]);function Ql(t,e,...n){if(t in e){let i=e[t];return typeof i=="function"?i(...n):i}let s=new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(e).map(i=>`"${i}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(s,Ql),s}var Uu=(t=>(t[t.None=0]="None",t[t.RenderStrategy=1]="RenderStrategy",t[t.Static=2]="Static",t))(Uu||{}),KP=(t=>(t[t.Unmount=0]="Unmount",t[t.Hidden=1]="Hidden",t))(KP||{});function Xl({visible:t=!0,features:e=0,ourProps:n,theirProps:s,...i}){var r;let o=p0(s,n),a=Object.assign(i,{props:o});if(t||e&2&&o.static)return Rc(a);if(e&1){let l=(r=o.unmount)==null||r?0:1;return Ql(l,{[0](){return null},[1](){return Rc({...i,props:{...o,hidden:!0,style:{display:"none"}}})}})}return Rc(a)}function Rc({props:t,attrs:e,slots:n,slot:s,name:i}){var r,o;let{as:a,...l}=WP(t,["unmount","static"]),c=(r=n.default)==null?void 0:r.call(n,s),u={};if(s){let d=!1,h=[];for(let[f,g]of Object.entries(s))typeof g=="boolean"&&(d=!0),g===!0&&h.push(f);d&&(u["data-headlessui-state"]=h.join(" "))}if(a==="template"){if(c=f0(c??[]),Object.keys(l).length>0||Object.keys(e).length>0){let[d,...h]=c??[];if(!YP(d)||h.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${i} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(l).concat(Object.keys(e)).map(y=>y.trim()).filter((y,_,m)=>m.indexOf(y)===_).sort((y,_)=>y.localeCompare(_)).map(y=>`  - ${y}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(y=>`  - ${y}`).join(`
`)].join(`
`));let f=p0((o=d.props)!=null?o:{},l),g=nn(d,f);for(let y in f)y.startsWith("on")&&(g.props||(g.props={}),g.props[y]=f[y]);return g}return Array.isArray(c)&&c.length===1?c[0]:c}return ft(a,Object.assign({},l,u),{default:()=>c})}function f0(t){return t.flatMap(e=>e.type===Ue?f0(e.children):[e])}function p0(...t){if(t.length===0)return{};if(t.length===1)return t[0];let e={},n={};for(let s of t)for(let i in s)i.startsWith("on")&&typeof s[i]=="function"?(n[i]!=null||(n[i]=[]),n[i].push(s[i])):e[i]=s[i];if(e.disabled||e["aria-disabled"])return Object.assign(e,Object.fromEntries(Object.keys(n).map(s=>[s,void 0])));for(let s in n)Object.assign(e,{[s](i,...r){let o=n[s];for(let a of o){if(i instanceof Event&&i.defaultPrevented)return;a(i,...r)}}});return e}function WP(t,e=[]){let n=Object.assign({},t);for(let s of e)s in n&&delete n[s];return n}function YP(t){return t==null?!1:typeof t.type=="string"||typeof t.type=="object"||typeof t.type=="function"}let QP=0;function XP(){return++QP}function Nh(){return XP()}var it=(t=>(t.Space=" ",t.Enter="Enter",t.Escape="Escape",t.Backspace="Backspace",t.Delete="Delete",t.ArrowLeft="ArrowLeft",t.ArrowUp="ArrowUp",t.ArrowRight="ArrowRight",t.ArrowDown="ArrowDown",t.Home="Home",t.End="End",t.PageUp="PageUp",t.PageDown="PageDown",t.Tab="Tab",t))(it||{});function JP(t){throw new Error("Unexpected object: "+t)}var Ut=(t=>(t[t.First=0]="First",t[t.Previous=1]="Previous",t[t.Next=2]="Next",t[t.Last=3]="Last",t[t.Specific=4]="Specific",t[t.Nothing=5]="Nothing",t))(Ut||{});function ZP(t,e){let n=e.resolveItems();if(n.length<=0)return null;let s=e.resolveActiveIndex(),i=s??-1,r=(()=>{switch(t.focus){case 0:return n.findIndex(o=>!e.resolveDisabled(o));case 1:{let o=n.slice().reverse().findIndex((a,l,c)=>i!==-1&&c.length-l-1>=i?!1:!e.resolveDisabled(a));return o===-1?o:n.length-1-o}case 2:return n.findIndex((o,a)=>a<=i?!1:!e.resolveDisabled(o));case 3:{let o=n.slice().reverse().findIndex(a=>!e.resolveDisabled(a));return o===-1?o:n.length-1-o}case 4:return n.findIndex(o=>e.resolveId(o)===t.id);case 5:return null;default:JP(t)}})();return r===-1?s:r}function He(t){var e;return t==null||t.value==null?null:(e=t.value.$el)!=null?e:t.value}let m0=Symbol("Context");var eo=(t=>(t[t.Open=1]="Open",t[t.Closed=2]="Closed",t[t.Closing=4]="Closing",t[t.Opening=8]="Opening",t))(eo||{});function eM(){return Ot(m0,null)}function tM(t){Dn(m0,t)}function wm(t,e){if(t)return t;let n=e??"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function nM(t,e){let n=Ee(wm(t.value.type,t.value.as));return tn(()=>{n.value=wm(t.value.type,t.value.as)}),ao(()=>{var s;n.value||He(e)&&He(e)instanceof HTMLButtonElement&&!((s=He(e))!=null&&s.hasAttribute("type"))&&(n.value="button")}),n}class sM{constructor(){this.current=this.detect(),this.currentId=0}set(e){this.current!==e&&(this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let g0=new sM;function Fh(t){if(g0.isServer)return null;if(t instanceof Node)return t.ownerDocument;if(t!=null&&t.hasOwnProperty("value")){let e=He(t);if(e)return e.ownerDocument}return document}function iM({container:t,accept:e,walk:n,enabled:s}){ao(()=>{let i=t.value;if(!i||s!==void 0&&!s.value)return;let r=Fh(t);if(!r)return;let o=Object.assign(l=>e(l),{acceptNode:e}),a=r.createTreeWalker(i,NodeFilter.SHOW_ELEMENT,o,!1);for(;a.nextNode();)n(a.currentNode)})}let Vu=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(t=>`${t}:not([tabindex='-1'])`).join(",");var ju=(t=>(t[t.First=1]="First",t[t.Previous=2]="Previous",t[t.Next=4]="Next",t[t.Last=8]="Last",t[t.WrapAround=16]="WrapAround",t[t.NoScroll=32]="NoScroll",t))(ju||{}),rM=(t=>(t[t.Error=0]="Error",t[t.Overflow=1]="Overflow",t[t.Success=2]="Success",t[t.Underflow=3]="Underflow",t))(rM||{}),oM=(t=>(t[t.Previous=-1]="Previous",t[t.Next=1]="Next",t))(oM||{});function y0(t=document.body){return t==null?[]:Array.from(t.querySelectorAll(Vu)).sort((e,n)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var $h=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))($h||{});function Bh(t,e=0){var n;return t===((n=Fh(t))==null?void 0:n.body)?!1:Ql(e,{[0](){return t.matches(Vu)},[1](){let s=t;for(;s!==null;){if(s.matches(Vu))return!0;s=s.parentElement}return!1}})}function v0(t){let e=Fh(t);jt(()=>{e&&!Bh(e.activeElement,0)&&aM(t)})}function aM(t){t==null||t.focus({preventScroll:!0})}let lM=["textarea","input"].join(",");function cM(t){var e,n;return(n=(e=t==null?void 0:t.matches)==null?void 0:e.call(t,lM))!=null?n:!1}function b0(t,e=n=>n){return t.slice().sort((n,s)=>{let i=e(n),r=e(s);if(i===null||r===null)return 0;let o=i.compareDocumentPosition(r);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function uM(t,e){return dM(y0(),e,{relativeTo:t})}function dM(t,e,{sorted:n=!0,relativeTo:s=null,skipElements:i=[]}={}){var r;let o=(r=Array.isArray(t)?t.length>0?t[0].ownerDocument:document:t==null?void 0:t.ownerDocument)!=null?r:document,a=Array.isArray(t)?n?b0(t):t:y0(t);i.length>0&&a.length>1&&(a=a.filter(g=>!i.includes(g))),s=s??o.activeElement;let l=(()=>{if(e&5)return 1;if(e&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(e&1)return 0;if(e&2)return Math.max(0,a.indexOf(s))-1;if(e&4)return Math.max(0,a.indexOf(s))+1;if(e&8)return a.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=e&32?{preventScroll:!0}:{},d=0,h=a.length,f;do{if(d>=h||d+h<=0)return 0;let g=c+d;if(e&16)g=(g+h)%h;else{if(g<0)return 3;if(g>=h)return 1}f=a[g],f==null||f.focus(u),d+=l}while(f!==o.activeElement);return e&6&&cM(f)&&f.select(),f.hasAttribute("tabindex")||f.setAttribute("tabindex","0"),2}function Oc(t,e,n){g0.isServer||ao(s=>{document.addEventListener(t,e,n),s(()=>document.removeEventListener(t,e,n))})}function hM(t,e,n=Ae(()=>!0)){function s(r,o){if(!n.value||r.defaultPrevented)return;let a=o(r);if(a===null||!a.getRootNode().contains(a))return;let l=function c(u){return typeof u=="function"?c(u()):Array.isArray(u)||u instanceof Set?u:[u]}(t);for(let c of l){if(c===null)continue;let u=c instanceof HTMLElement?c:He(c);if(u!=null&&u.contains(a)||r.composed&&r.composedPath().includes(u))return}return!Bh(a,$h.Loose)&&a.tabIndex!==-1&&r.preventDefault(),e(r,a)}let i=Ee(null);Oc("mousedown",r=>{var o,a;n.value&&(i.value=((a=(o=r.composedPath)==null?void 0:o.call(r))==null?void 0:a[0])||r.target)},!0),Oc("click",r=>{i.value&&(s(r,()=>i.value),i.value=null)},!0),Oc("blur",r=>s(r,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function _m(t){return[t.screenX,t.screenY]}function fM(){let t=Ee([-1,-1]);return{wasMoved(e){let n=_m(e);return t.value[0]===n[0]&&t.value[1]===n[1]?!1:(t.value=n,!0)},update(e){t.value=_m(e)}}}var pM=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(pM||{}),mM=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(mM||{});function gM(t){requestAnimationFrame(()=>requestAnimationFrame(t))}let w0=Symbol("MenuContext");function Jl(t){let e=Ot(w0,null);if(e===null){let n=new Error(`<${t} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Jl),n}return e}let yM=zn({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(t,{slots:e,attrs:n}){let s=Ee(1),i=Ee(null),r=Ee(null),o=Ee([]),a=Ee(""),l=Ee(null),c=Ee(1);function u(h=f=>f){let f=l.value!==null?o.value[l.value]:null,g=b0(h(o.value.slice()),_=>He(_.dataRef.domRef)),y=f?g.indexOf(f):null;return y===-1&&(y=null),{items:g,activeItemIndex:y}}let d={menuState:s,buttonRef:i,itemsRef:r,items:o,searchQuery:a,activeItemIndex:l,activationTrigger:c,closeMenu:()=>{s.value=1,l.value=null},openMenu:()=>s.value=0,goToItem(h,f,g){let y=u(),_=ZP(h===Ut.Specific?{focus:Ut.Specific,id:f}:{focus:h},{resolveItems:()=>y.items,resolveActiveIndex:()=>y.activeItemIndex,resolveId:m=>m.id,resolveDisabled:m=>m.dataRef.disabled});a.value="",l.value=_,c.value=g??1,o.value=y.items},search(h){let f=a.value!==""?0:1;a.value+=h.toLowerCase();let g=(l.value!==null?o.value.slice(l.value+f).concat(o.value.slice(0,l.value+f)):o.value).find(_=>_.dataRef.textValue.startsWith(a.value)&&!_.dataRef.disabled),y=g?o.value.indexOf(g):-1;y===-1||y===l.value||(l.value=y,c.value=1)},clearSearch(){a.value=""},registerItem(h,f){let g=u(y=>[...y,{id:h,dataRef:f}]);o.value=g.items,l.value=g.activeItemIndex,c.value=1},unregisterItem(h){let f=u(g=>{let y=g.findIndex(_=>_.id===h);return y!==-1&&g.splice(y,1),g});o.value=f.items,l.value=f.activeItemIndex,c.value=1}};return hM([i,r],(h,f)=>{var g;d.closeMenu(),Bh(f,$h.Loose)||(h.preventDefault(),(g=He(i))==null||g.focus())},Ae(()=>s.value===0)),Dn(w0,d),tM(Ae(()=>Ql(s.value,{[0]:eo.Open,[1]:eo.Closed}))),()=>{let h={open:s.value===0,close:d.closeMenu};return Xl({ourProps:{},theirProps:t,slot:h,slots:e,attrs:n,name:"Menu"})}}}),vM=zn({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-menu-button-${Nh()}`}},setup(t,{attrs:e,slots:n,expose:s}){let i=Jl("MenuButton");s({el:i.buttonRef,$el:i.buttonRef});function r(c){switch(c.key){case it.Space:case it.Enter:case it.ArrowDown:c.preventDefault(),c.stopPropagation(),i.openMenu(),jt(()=>{var u;(u=He(i.itemsRef))==null||u.focus({preventScroll:!0}),i.goToItem(Ut.First)});break;case it.ArrowUp:c.preventDefault(),c.stopPropagation(),i.openMenu(),jt(()=>{var u;(u=He(i.itemsRef))==null||u.focus({preventScroll:!0}),i.goToItem(Ut.Last)});break}}function o(c){switch(c.key){case it.Space:c.preventDefault();break}}function a(c){t.disabled||(i.menuState.value===0?(i.closeMenu(),jt(()=>{var u;return(u=He(i.buttonRef))==null?void 0:u.focus({preventScroll:!0})})):(c.preventDefault(),i.openMenu(),gM(()=>{var u;return(u=He(i.itemsRef))==null?void 0:u.focus({preventScroll:!0})})))}let l=nM(Ae(()=>({as:t.as,type:e.type})),i.buttonRef);return()=>{var c;let u={open:i.menuState.value===0},{id:d,...h}=t,f={ref:i.buttonRef,id:d,type:l.value,"aria-haspopup":"menu","aria-controls":(c=He(i.itemsRef))==null?void 0:c.id,"aria-expanded":t.disabled?void 0:i.menuState.value===0,onKeydown:r,onKeyup:o,onClick:a};return Xl({ourProps:f,theirProps:h,slot:u,attrs:e,slots:n,name:"MenuButton"})}}}),bM=zn({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-menu-items-${Nh()}`}},setup(t,{attrs:e,slots:n,expose:s}){let i=Jl("MenuItems"),r=Ee(null);s({el:i.itemsRef,$el:i.itemsRef}),iM({container:Ae(()=>He(i.itemsRef)),enabled:Ae(()=>i.menuState.value===0),accept(u){return u.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:u.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(u){u.setAttribute("role","none")}});function o(u){var d;switch(r.value&&clearTimeout(r.value),u.key){case it.Space:if(i.searchQuery.value!=="")return u.preventDefault(),u.stopPropagation(),i.search(u.key);case it.Enter:if(u.preventDefault(),u.stopPropagation(),i.activeItemIndex.value!==null){let h=i.items.value[i.activeItemIndex.value];(d=He(h.dataRef.domRef))==null||d.click()}i.closeMenu(),v0(He(i.buttonRef));break;case it.ArrowDown:return u.preventDefault(),u.stopPropagation(),i.goToItem(Ut.Next);case it.ArrowUp:return u.preventDefault(),u.stopPropagation(),i.goToItem(Ut.Previous);case it.Home:case it.PageUp:return u.preventDefault(),u.stopPropagation(),i.goToItem(Ut.First);case it.End:case it.PageDown:return u.preventDefault(),u.stopPropagation(),i.goToItem(Ut.Last);case it.Escape:u.preventDefault(),u.stopPropagation(),i.closeMenu(),jt(()=>{var h;return(h=He(i.buttonRef))==null?void 0:h.focus({preventScroll:!0})});break;case it.Tab:u.preventDefault(),u.stopPropagation(),i.closeMenu(),jt(()=>uM(He(i.buttonRef),u.shiftKey?ju.Previous:ju.Next));break;default:u.key.length===1&&(i.search(u.key),r.value=setTimeout(()=>i.clearSearch(),350));break}}function a(u){switch(u.key){case it.Space:u.preventDefault();break}}let l=eM(),c=Ae(()=>l!==null?(l.value&eo.Open)===eo.Open:i.menuState.value===0);return()=>{var u,d;let h={open:i.menuState.value===0},{id:f,...g}=t,y={"aria-activedescendant":i.activeItemIndex.value===null||(u=i.items.value[i.activeItemIndex.value])==null?void 0:u.id,"aria-labelledby":(d=He(i.buttonRef))==null?void 0:d.id,id:f,onKeydown:o,onKeyup:a,role:"menu",tabIndex:0,ref:i.itemsRef};return Xl({ourProps:y,theirProps:g,slot:h,attrs:e,slots:n,features:Uu.RenderStrategy|Uu.Static,visible:c.value,name:"MenuItems"})}}}),wM=zn({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-menu-item-${Nh()}`}},setup(t,{slots:e,attrs:n,expose:s}){let i=Jl("MenuItem"),r=Ee(null);s({el:r,$el:r});let o=Ae(()=>i.activeItemIndex.value!==null?i.items.value[i.activeItemIndex.value].id===t.id:!1),a=Ae(()=>({disabled:t.disabled,textValue:"",domRef:r}));tn(()=>{var g,y;let _=(y=(g=He(r))==null?void 0:g.textContent)==null?void 0:y.toLowerCase().trim();_!==void 0&&(a.value.textValue=_)}),tn(()=>i.registerItem(t.id,a)),uo(()=>i.unregisterItem(t.id)),ao(()=>{i.menuState.value===0&&o.value&&i.activationTrigger.value!==0&&jt(()=>{var g,y;return(y=(g=He(r))==null?void 0:g.scrollIntoView)==null?void 0:y.call(g,{block:"nearest"})})});function l(g){if(t.disabled)return g.preventDefault();i.closeMenu(),v0(He(i.buttonRef))}function c(){if(t.disabled)return i.goToItem(Ut.Nothing);i.goToItem(Ut.Specific,t.id)}let u=fM();function d(g){u.update(g)}function h(g){u.wasMoved(g)&&(t.disabled||o.value||i.goToItem(Ut.Specific,t.id,0))}function f(g){u.wasMoved(g)&&(t.disabled||o.value&&i.goToItem(Ut.Nothing))}return()=>{let{disabled:g}=t,y={active:o.value,disabled:g,close:i.closeMenu},{id:_,...m}=t;return Xl({ourProps:{id:_,ref:r,role:"menuitem",tabIndex:g===!0?void 0:-1,"aria-disabled":g===!0?!0:void 0,disabled:void 0,onClick:l,onFocus:c,onPointerenter:d,onMouseenter:d,onPointermove:h,onMousemove:h,onPointerleave:f,onMouseleave:f},theirProps:{...n,...m},slot:y,attrs:n,slots:e,name:"MenuItem"})}}});function _M(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function s(){if(this instanceof s){var i=[null];i.push.apply(i,arguments);var r=Function.bind.apply(e,i);return new r}return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(s){var i=Object.getOwnPropertyDescriptor(t,s);Object.defineProperty(n,s,i.get?i:{enumerable:!0,get:function(){return t[s]}})}),n}const TM=_M(HS),{createElementVNode:SM,openBlock:EM,createElementBlock:IM}=TM;var CM=function(e,n){return EM(),IM("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[SM("path",{"fill-rule":"evenodd",d:"M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z","clip-rule":"evenodd"})])},xM=CM;const AM={components:{ChevronDownIcon:xM,CustomMenu:yM,MenuButton:vM,MenuItem:wM,MenuItems:bM},methods:{handleSearch:function(t){const{value:e}=t.currentTarget;e.length>0&&this.$router.push({path:`/search/${e}`})}}},kM={class:"search-wrapper w-full lg:w-[60%]"},RM={class:"rounded-lg bg-glass"},OM={class:"py-1"},DM={class:"py-1"},PM={class:"py-1"},MM={class:"py-1"};function LM(t,e,n,s,i,r){const o=ht("ChevronDownIcon"),a=ht("MenuButton"),l=ht("router-link"),c=ht("MenuItem"),u=ht("MenuItems"),d=ht("CustomMenu");return ie(),pe("div",kM,[z("label",RM,[z("input",{type:"text",onKeyup:e[0]||(e[0]=sy((...h)=>r.handleSearch&&r.handleSearch(...h),["enter"])),class:"rounded-lg bg-transparent pl-3 text-white w-[80%]",placeholder:"Search for a game"},null,32),se(d,{as:"div",class:"select w-[20%] relative inline-block text-left"},{default:Me(()=>[z("div",null,[se(a,{class:"inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium shadow-sm focus:outline-none"},{default:Me(()=>[Nt(" Genres "),se(o,{class:"-mr-1 ml-2 h-5 w-5","aria-hidden":"true"})]),_:1})]),se(cl,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:Me(()=>[se(u,{class:"absolute bg-white right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md shadow-lg"},{default:Me(()=>[z("div",OM,[se(c,null,{default:Me(({active:h})=>[se(l,{to:"/search/genre/Action",class:xt([h?"bg-gray-200 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"])},{default:Me(()=>[Nt("Action")]),_:2},1032,["class"])]),_:1}),se(c,null,{default:Me(({active:h})=>[se(l,{to:"/search/genre/Adventure",class:xt([h?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"])},{default:Me(()=>[Nt("Adventure")]),_:2},1032,["class"])]),_:1})]),z("div",DM,[se(c,null,{default:Me(({active:h})=>[se(l,{to:"/search/genre/Horror",class:xt([h?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"])},{default:Me(()=>[Nt("Horror")]),_:2},1032,["class"])]),_:1}),se(c,null,{default:Me(({active:h})=>[se(l,{to:"/search/genre/Driving",class:xt([h?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"])},{default:Me(()=>[Nt("Driving")]),_:2},1032,["class"])]),_:1})]),z("div",PM,[se(c,null,{default:Me(({active:h})=>[se(l,{to:"/search/genre/Strategy",class:xt([h?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"])},{default:Me(()=>[Nt("Strategy")]),_:2},1032,["class"])]),_:1}),se(c,null,{default:Me(({active:h})=>[se(l,{to:"/search/genre/Sport",class:xt([h?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"])},{default:Me(()=>[Nt("Sport")]),_:2},1032,["class"])]),_:1})]),z("div",MM,[se(c,null,{default:Me(({active:h})=>[se(l,{to:"/search/genre/Fighting",class:xt([h?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"])},{default:Me(()=>[Nt("Fighting")]),_:2},1032,["class"])]),_:1}),se(c,null,{default:Me(({active:h})=>[se(l,{to:"/search/genre/Fantasy",class:xt([h?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"])},{default:Me(()=>[Nt("Fantasy")]),_:2},1032,["class"])]),_:1})])]),_:1})]),_:1})]),_:1})])])}const NM=Lo(AM,[["render",LM]]);function Tm(t){return t!==null&&typeof t=="object"&&"constructor"in t&&t.constructor===Object}function Uh(t={},e={}){Object.keys(e).forEach(n=>{typeof t[n]>"u"?t[n]=e[n]:Tm(e[n])&&Tm(t[n])&&Object.keys(e[n]).length>0&&Uh(t[n],e[n])})}const _0={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function yn(){const t=typeof document<"u"?document:{};return Uh(t,_0),t}const FM={document:_0,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(t){return typeof setTimeout>"u"?(t(),null):setTimeout(t,0)},cancelAnimationFrame(t){typeof setTimeout>"u"||clearTimeout(t)}};function Ht(){const t=typeof window<"u"?window:{};return Uh(t,FM),t}function $M(t){const e=t;Object.keys(e).forEach(n=>{try{e[n]=null}catch{}try{delete e[n]}catch{}})}function zu(t,e=0){return setTimeout(t,e)}function to(){return Date.now()}function BM(t){const e=Ht();let n;return e.getComputedStyle&&(n=e.getComputedStyle(t,null)),!n&&t.currentStyle&&(n=t.currentStyle),n||(n=t.style),n}function UM(t,e="x"){const n=Ht();let s,i,r;const o=BM(t);return n.WebKitCSSMatrix?(i=o.transform||o.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(a=>a.replace(",",".")).join(", ")),r=new n.WebKitCSSMatrix(i==="none"?"":i)):(r=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),s=r.toString().split(",")),e==="x"&&(n.WebKitCSSMatrix?i=r.m41:s.length===16?i=parseFloat(s[12]):i=parseFloat(s[4])),e==="y"&&(n.WebKitCSSMatrix?i=r.m42:s.length===16?i=parseFloat(s[13]):i=parseFloat(s[5])),i||0}function ta(t){return typeof t=="object"&&t!==null&&t.constructor&&Object.prototype.toString.call(t).slice(8,-1)==="Object"}function VM(t){return typeof window<"u"&&typeof window.HTMLElement<"u"?t instanceof HTMLElement:t&&(t.nodeType===1||t.nodeType===11)}function Ft(...t){const e=Object(t[0]),n=["__proto__","constructor","prototype"];for(let s=1;s<t.length;s+=1){const i=t[s];if(i!=null&&!VM(i)){const r=Object.keys(Object(i)).filter(o=>n.indexOf(o)<0);for(let o=0,a=r.length;o<a;o+=1){const l=r[o],c=Object.getOwnPropertyDescriptor(i,l);c!==void 0&&c.enumerable&&(ta(e[l])&&ta(i[l])?i[l].__swiper__?e[l]=i[l]:Ft(e[l],i[l]):!ta(e[l])&&ta(i[l])?(e[l]={},i[l].__swiper__?e[l]=i[l]:Ft(e[l],i[l])):e[l]=i[l])}}}return e}function na(t,e,n){t.style.setProperty(e,n)}function T0({swiper:t,targetPosition:e,side:n}){const s=Ht(),i=-t.translate;let r=null,o;const a=t.params.speed;t.wrapperEl.style.scrollSnapType="none",s.cancelAnimationFrame(t.cssModeFrameID);const l=e>i?"next":"prev",c=(d,h)=>l==="next"&&d>=h||l==="prev"&&d<=h,u=()=>{o=new Date().getTime(),r===null&&(r=o);const d=Math.max(Math.min((o-r)/a,1),0),h=.5-Math.cos(d*Math.PI)/2;let f=i+h*(e-i);if(c(f,e)&&(f=e),t.wrapperEl.scrollTo({[n]:f}),c(f,e)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[n]:f})}),s.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=s.requestAnimationFrame(u)};u()}function Mn(t,e=""){return[...t.children].filter(n=>n.matches(e))}function S0(t,e=[]){const n=document.createElement(t);return n.classList.add(...Array.isArray(e)?e:[e]),n}function jM(t,e){const n=[];for(;t.previousElementSibling;){const s=t.previousElementSibling;e?s.matches(e)&&n.push(s):n.push(s),t=s}return n}function zM(t,e){const n=[];for(;t.nextElementSibling;){const s=t.nextElementSibling;e?s.matches(e)&&n.push(s):n.push(s),t=s}return n}function os(t,e){return Ht().getComputedStyle(t,null).getPropertyValue(e)}function _s(t){let e=t,n;if(e){for(n=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(n+=1);return n}}function E0(t,e){const n=[];let s=t.parentElement;for(;s;)e?s.matches(e)&&n.push(s):n.push(s),s=s.parentElement;return n}function qu(t,e,n){const s=Ht();return n?t[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(s.getComputedStyle(t,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(s.getComputedStyle(t,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom")):t.offsetWidth}let Dc;function qM(){const t=Ht(),e=yn();return{smoothScroll:e.documentElement&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in t||t.DocumentTouch&&e instanceof t.DocumentTouch)}}function I0(){return Dc||(Dc=qM()),Dc}let Pc;function HM({userAgent:t}={}){const e=I0(),n=Ht(),s=n.navigator.platform,i=t||n.navigator.userAgent,r={ios:!1,android:!1},o=n.screen.width,a=n.screen.height,l=i.match(/(Android);?[\s\/]+([\d.]+)?/);let c=i.match(/(iPad).*OS\s([\d_]+)/);const u=i.match(/(iPod)(.*OS\s([\d_]+))?/),d=!c&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),h=s==="Win32";let f=s==="MacIntel";const g=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!c&&f&&e.touch&&g.indexOf(`${o}x${a}`)>=0&&(c=i.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),f=!1),l&&!h&&(r.os="android",r.android=!0),(c||d||u)&&(r.os="ios",r.ios=!0),r}function GM(t={}){return Pc||(Pc=HM(t)),Pc}let Mc;function KM(){const t=Ht();let e=!1;function n(){const s=t.navigator.userAgent.toLowerCase();return s.indexOf("safari")>=0&&s.indexOf("chrome")<0&&s.indexOf("android")<0}if(n()){const s=String(t.navigator.userAgent);if(s.includes("Version/")){const[i,r]=s.split("Version/")[1].split(" ")[0].split(".").map(o=>Number(o));e=i<16||i===16&&r<2}}return{isSafari:e||n(),needPerspectiveFix:e,isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)}}function WM(){return Mc||(Mc=KM()),Mc}function YM({swiper:t,on:e,emit:n}){const s=Ht();let i=null,r=null;const o=()=>{!t||t.destroyed||!t.initialized||(n("beforeResize"),n("resize"))},a=()=>{!t||t.destroyed||!t.initialized||(i=new ResizeObserver(u=>{r=s.requestAnimationFrame(()=>{const{width:d,height:h}=t;let f=d,g=h;u.forEach(({contentBoxSize:y,contentRect:_,target:m})=>{m&&m!==t.el||(f=_?_.width:(y[0]||y).inlineSize,g=_?_.height:(y[0]||y).blockSize)}),(f!==d||g!==h)&&o()})}),i.observe(t.el))},l=()=>{r&&s.cancelAnimationFrame(r),i&&i.unobserve&&t.el&&(i.unobserve(t.el),i=null)},c=()=>{!t||t.destroyed||!t.initialized||n("orientationchange")};e("init",()=>{if(t.params.resizeObserver&&typeof s.ResizeObserver<"u"){a();return}s.addEventListener("resize",o),s.addEventListener("orientationchange",c)}),e("destroy",()=>{l(),s.removeEventListener("resize",o),s.removeEventListener("orientationchange",c)})}function QM({swiper:t,extendParams:e,on:n,emit:s}){const i=[],r=Ht(),o=(c,u={})=>{const d=r.MutationObserver||r.WebkitMutationObserver,h=new d(f=>{if(f.length===1){s("observerUpdate",f[0]);return}const g=function(){s("observerUpdate",f[0])};r.requestAnimationFrame?r.requestAnimationFrame(g):r.setTimeout(g,0)});h.observe(c,{attributes:typeof u.attributes>"u"?!0:u.attributes,childList:typeof u.childList>"u"?!0:u.childList,characterData:typeof u.characterData>"u"?!0:u.characterData}),i.push(h)},a=()=>{if(t.params.observer){if(t.params.observeParents){const c=E0(t.el);for(let u=0;u<c.length;u+=1)o(c[u])}o(t.el,{childList:t.params.observeSlideChildren}),o(t.wrapperEl,{attributes:!1})}},l=()=>{i.forEach(c=>{c.disconnect()}),i.splice(0,i.length)};e({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",a),n("destroy",l)}const XM={on(t,e,n){const s=this;if(!s.eventsListeners||s.destroyed||typeof e!="function")return s;const i=n?"unshift":"push";return t.split(" ").forEach(r=>{s.eventsListeners[r]||(s.eventsListeners[r]=[]),s.eventsListeners[r][i](e)}),s},once(t,e,n){const s=this;if(!s.eventsListeners||s.destroyed||typeof e!="function")return s;function i(...r){s.off(t,i),i.__emitterProxy&&delete i.__emitterProxy,e.apply(s,r)}return i.__emitterProxy=e,s.on(t,i,n)},onAny(t,e){const n=this;if(!n.eventsListeners||n.destroyed||typeof t!="function")return n;const s=e?"unshift":"push";return n.eventsAnyListeners.indexOf(t)<0&&n.eventsAnyListeners[s](t),n},offAny(t){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const n=e.eventsAnyListeners.indexOf(t);return n>=0&&e.eventsAnyListeners.splice(n,1),e},off(t,e){const n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||t.split(" ").forEach(s=>{typeof e>"u"?n.eventsListeners[s]=[]:n.eventsListeners[s]&&n.eventsListeners[s].forEach((i,r)=>{(i===e||i.__emitterProxy&&i.__emitterProxy===e)&&n.eventsListeners[s].splice(r,1)})}),n},emit(...t){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let n,s,i;return typeof t[0]=="string"||Array.isArray(t[0])?(n=t[0],s=t.slice(1,t.length),i=e):(n=t[0].events,s=t[0].data,i=t[0].context||e),s.unshift(i),(Array.isArray(n)?n:n.split(" ")).forEach(o=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(a=>{a.apply(i,[o,...s])}),e.eventsListeners&&e.eventsListeners[o]&&e.eventsListeners[o].forEach(a=>{a.apply(i,s)})}),e}};function JM(){const t=this;let e,n;const s=t.el;typeof t.params.width<"u"&&t.params.width!==null?e=t.params.width:e=s.clientWidth,typeof t.params.height<"u"&&t.params.height!==null?n=t.params.height:n=s.clientHeight,!(e===0&&t.isHorizontal()||n===0&&t.isVertical())&&(e=e-parseInt(os(s,"padding-left")||0,10)-parseInt(os(s,"padding-right")||0,10),n=n-parseInt(os(s,"padding-top")||0,10)-parseInt(os(s,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(n)&&(n=0),Object.assign(t,{width:e,height:n,size:t.isHorizontal()?e:n}))}function ZM(){const t=this;function e(x){return t.isHorizontal()?x:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[x]}function n(x,k){return parseFloat(x.getPropertyValue(e(k))||0)}const s=t.params,{wrapperEl:i,slidesEl:r,size:o,rtlTranslate:a,wrongRTL:l}=t,c=t.virtual&&s.virtual.enabled,u=c?t.virtual.slides.length:t.slides.length,d=Mn(r,`.${t.params.slideClass}, swiper-slide`),h=c?t.virtual.slides.length:d.length;let f=[];const g=[],y=[];let _=s.slidesOffsetBefore;typeof _=="function"&&(_=s.slidesOffsetBefore.call(t));let m=s.slidesOffsetAfter;typeof m=="function"&&(m=s.slidesOffsetAfter.call(t));const p=t.snapGrid.length,v=t.slidesGrid.length;let S=s.spaceBetween,E=-_,I=0,C=0;if(typeof o>"u")return;typeof S=="string"&&S.indexOf("%")>=0&&(S=parseFloat(S.replace("%",""))/100*o),t.virtualSize=-S,d.forEach(x=>{a?x.style.marginLeft="":x.style.marginRight="",x.style.marginBottom="",x.style.marginTop=""}),s.centeredSlides&&s.cssMode&&(na(i,"--swiper-centered-offset-before",""),na(i,"--swiper-centered-offset-after",""));const T=s.grid&&s.grid.rows>1&&t.grid;T&&t.grid.initSlides(h);let A;const $=s.slidesPerView==="auto"&&s.breakpoints&&Object.keys(s.breakpoints).filter(x=>typeof s.breakpoints[x].slidesPerView<"u").length>0;for(let x=0;x<h;x+=1){A=0;let k;if(d[x]&&(k=d[x]),T&&t.grid.updateSlide(x,k,h,e),!(d[x]&&os(k,"display")==="none")){if(s.slidesPerView==="auto"){$&&(d[x].style[e("width")]="");const U=getComputedStyle(k),F=k.style.transform,we=k.style.webkitTransform;if(F&&(k.style.transform="none"),we&&(k.style.webkitTransform="none"),s.roundLengths)A=t.isHorizontal()?qu(k,"width",!0):qu(k,"height",!0);else{const W=n(U,"width"),me=n(U,"padding-left"),de=n(U,"padding-right"),Ge=n(U,"margin-left"),Pt=n(U,"margin-right"),It=U.getPropertyValue("box-sizing");if(It&&It==="border-box")A=W+Ge+Pt;else{const{clientWidth:ct,offsetWidth:Gn}=k;A=W+me+de+Ge+Pt+(Gn-ct)}}F&&(k.style.transform=F),we&&(k.style.webkitTransform=we),s.roundLengths&&(A=Math.floor(A))}else A=(o-(s.slidesPerView-1)*S)/s.slidesPerView,s.roundLengths&&(A=Math.floor(A)),d[x]&&(d[x].style[e("width")]=`${A}px`);d[x]&&(d[x].swiperSlideSize=A),y.push(A),s.centeredSlides?(E=E+A/2+I/2+S,I===0&&x!==0&&(E=E-o/2-S),x===0&&(E=E-o/2-S),Math.abs(E)<1/1e3&&(E=0),s.roundLengths&&(E=Math.floor(E)),C%s.slidesPerGroup===0&&f.push(E),g.push(E)):(s.roundLengths&&(E=Math.floor(E)),(C-Math.min(t.params.slidesPerGroupSkip,C))%t.params.slidesPerGroup===0&&f.push(E),g.push(E),E=E+A+S),t.virtualSize+=A+S,I=A,C+=1}}if(t.virtualSize=Math.max(t.virtualSize,o)+m,a&&l&&(s.effect==="slide"||s.effect==="coverflow")&&(i.style.width=`${t.virtualSize+s.spaceBetween}px`),s.setWrapperSize&&(i.style[e("width")]=`${t.virtualSize+s.spaceBetween}px`),T&&t.grid.updateWrapperSize(A,f,e),!s.centeredSlides){const x=[];for(let k=0;k<f.length;k+=1){let U=f[k];s.roundLengths&&(U=Math.floor(U)),f[k]<=t.virtualSize-o&&x.push(U)}f=x,Math.floor(t.virtualSize-o)-Math.floor(f[f.length-1])>1&&f.push(t.virtualSize-o)}if(c&&s.loop){const x=y[0]+S;if(s.slidesPerGroup>1){const k=Math.ceil((t.virtual.slidesBefore+t.virtual.slidesAfter)/s.slidesPerGroup),U=x*s.slidesPerGroup;for(let F=0;F<k;F+=1)f.push(f[f.length-1]+U)}for(let k=0;k<t.virtual.slidesBefore+t.virtual.slidesAfter;k+=1)s.slidesPerGroup===1&&f.push(f[f.length-1]+x),g.push(g[g.length-1]+x),t.virtualSize+=x}if(f.length===0&&(f=[0]),s.spaceBetween!==0){const x=t.isHorizontal()&&a?"marginLeft":e("marginRight");d.filter((k,U)=>!s.cssMode||s.loop?!0:U!==d.length-1).forEach(k=>{k.style[x]=`${S}px`})}if(s.centeredSlides&&s.centeredSlidesBounds){let x=0;y.forEach(U=>{x+=U+(s.spaceBetween?s.spaceBetween:0)}),x-=s.spaceBetween;const k=x-o;f=f.map(U=>U<0?-_:U>k?k+m:U)}if(s.centerInsufficientSlides){let x=0;if(y.forEach(k=>{x+=k+(s.spaceBetween?s.spaceBetween:0)}),x-=s.spaceBetween,x<o){const k=(o-x)/2;f.forEach((U,F)=>{f[F]=U-k}),g.forEach((U,F)=>{g[F]=U+k})}}if(Object.assign(t,{slides:d,snapGrid:f,slidesGrid:g,slidesSizesGrid:y}),s.centeredSlides&&s.cssMode&&!s.centeredSlidesBounds){na(i,"--swiper-centered-offset-before",`${-f[0]}px`),na(i,"--swiper-centered-offset-after",`${t.size/2-y[y.length-1]/2}px`);const x=-t.snapGrid[0],k=-t.slidesGrid[0];t.snapGrid=t.snapGrid.map(U=>U+x),t.slidesGrid=t.slidesGrid.map(U=>U+k)}if(h!==u&&t.emit("slidesLengthChange"),f.length!==p&&(t.params.watchOverflow&&t.checkOverflow(),t.emit("snapGridLengthChange")),g.length!==v&&t.emit("slidesGridLengthChange"),s.watchSlidesProgress&&t.updateSlidesOffset(),!c&&!s.cssMode&&(s.effect==="slide"||s.effect==="fade")){const x=`${s.containerModifierClass}backface-hidden`,k=t.el.classList.contains(x);h<=s.maxBackfaceHiddenSlides?k||t.el.classList.add(x):k&&t.el.classList.remove(x)}}function eL(t){const e=this,n=[],s=e.virtual&&e.params.virtual.enabled;let i=0,r;typeof t=="number"?e.setTransition(t):t===!0&&e.setTransition(e.params.speed);const o=a=>s?e.slides.filter(l=>parseInt(l.getAttribute("data-swiper-slide-index"),10)===a)[0]:e.slides[a];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(a=>{n.push(a)});else for(r=0;r<Math.ceil(e.params.slidesPerView);r+=1){const a=e.activeIndex+r;if(a>e.slides.length&&!s)break;n.push(o(a))}else n.push(o(e.activeIndex));for(r=0;r<n.length;r+=1)if(typeof n[r]<"u"){const a=n[r].offsetHeight;i=a>i?a:i}(i||i===0)&&(e.wrapperEl.style.height=`${i}px`)}function tL(){const t=this,e=t.slides,n=t.isElement?t.isHorizontal()?t.wrapperEl.offsetLeft:t.wrapperEl.offsetTop:0;for(let s=0;s<e.length;s+=1)e[s].swiperSlideOffset=(t.isHorizontal()?e[s].offsetLeft:e[s].offsetTop)-n}function nL(t=this&&this.translate||0){const e=this,n=e.params,{slides:s,rtlTranslate:i,snapGrid:r}=e;if(s.length===0)return;typeof s[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let o=-t;i&&(o=t),s.forEach(a=>{a.classList.remove(n.slideVisibleClass)}),e.visibleSlidesIndexes=[],e.visibleSlides=[];for(let a=0;a<s.length;a+=1){const l=s[a];let c=l.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(c-=s[0].swiperSlideOffset);const u=(o+(n.centeredSlides?e.minTranslate():0)-c)/(l.swiperSlideSize+n.spaceBetween),d=(o-r[0]+(n.centeredSlides?e.minTranslate():0)-c)/(l.swiperSlideSize+n.spaceBetween),h=-(o-c),f=h+e.slidesSizesGrid[a];(h>=0&&h<e.size-1||f>1&&f<=e.size||h<=0&&f>=e.size)&&(e.visibleSlides.push(l),e.visibleSlidesIndexes.push(a),s[a].classList.add(n.slideVisibleClass)),l.progress=i?-u:u,l.originalProgress=i?-d:d}}function sL(t){const e=this;if(typeof t>"u"){const u=e.rtlTranslate?-1:1;t=e&&e.translate&&e.translate*u||0}const n=e.params,s=e.maxTranslate()-e.minTranslate();let{progress:i,isBeginning:r,isEnd:o,progressLoop:a}=e;const l=r,c=o;if(s===0)i=0,r=!0,o=!0;else{i=(t-e.minTranslate())/s;const u=Math.abs(t-e.minTranslate())<1,d=Math.abs(t-e.maxTranslate())<1;r=u||i<=0,o=d||i>=1,u&&(i=0),d&&(i=1)}if(n.loop){const u=_s(e.slides.filter(_=>_.getAttribute("data-swiper-slide-index")==="0")[0]),d=_s(e.slides.filter(_=>_.getAttribute("data-swiper-slide-index")*1===e.slides.length-1)[0]),h=e.slidesGrid[u],f=e.slidesGrid[d],g=e.slidesGrid[e.slidesGrid.length-1],y=Math.abs(t);y>=h?a=(y-h)/g:a=(y+g-f)/g,a>1&&(a-=1)}Object.assign(e,{progress:i,progressLoop:a,isBeginning:r,isEnd:o}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&e.updateSlidesProgress(t),r&&!l&&e.emit("reachBeginning toEdge"),o&&!c&&e.emit("reachEnd toEdge"),(l&&!r||c&&!o)&&e.emit("fromEdge"),e.emit("progress",i)}function iL(){const t=this,{slides:e,params:n,slidesEl:s,activeIndex:i}=t,r=t.virtual&&n.virtual.enabled,o=l=>Mn(s,`.${n.slideClass}${l}, swiper-slide${l}`)[0];e.forEach(l=>{l.classList.remove(n.slideActiveClass,n.slideNextClass,n.slidePrevClass)});let a;if(r)if(n.loop){let l=i-t.virtual.slidesBefore;l<0&&(l=t.virtual.slides.length+l),l>=t.virtual.slides.length&&(l-=t.virtual.slides.length),a=o(`[data-swiper-slide-index="${l}"]`)}else a=o(`[data-swiper-slide-index="${i}"]`);else a=e[i];if(a){a.classList.add(n.slideActiveClass);let l=zM(a,`.${n.slideClass}, swiper-slide`)[0];n.loop&&!l&&(l=e[0]),l&&l.classList.add(n.slideNextClass);let c=jM(a,`.${n.slideClass}, swiper-slide`)[0];n.loop&&!c===0&&(c=e[e.length-1]),c&&c.classList.add(n.slidePrevClass)}t.emitSlidesClasses()}function rL(t){const{slidesGrid:e,params:n}=t,s=t.rtlTranslate?t.translate:-t.translate;let i;for(let r=0;r<e.length;r+=1)typeof e[r+1]<"u"?s>=e[r]&&s<e[r+1]-(e[r+1]-e[r])/2?i=r:s>=e[r]&&s<e[r+1]&&(i=r+1):s>=e[r]&&(i=r);return n.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function oL(t){const e=this,n=e.rtlTranslate?e.translate:-e.translate,{snapGrid:s,params:i,activeIndex:r,realIndex:o,snapIndex:a}=e;let l=t,c;const u=h=>{let f=h-e.virtual.slidesBefore;return f<0&&(f=e.virtual.slides.length+f),f>=e.virtual.slides.length&&(f-=e.virtual.slides.length),f};if(typeof l>"u"&&(l=rL(e)),s.indexOf(n)>=0)c=s.indexOf(n);else{const h=Math.min(i.slidesPerGroupSkip,l);c=h+Math.floor((l-h)/i.slidesPerGroup)}if(c>=s.length&&(c=s.length-1),l===r){c!==a&&(e.snapIndex=c,e.emit("snapIndexChange")),e.params.loop&&e.virtual&&e.params.virtual.enabled&&(e.realIndex=u(l));return}let d;e.virtual&&i.virtual.enabled&&i.loop?d=u(l):e.slides[l]?d=parseInt(e.slides[l].getAttribute("data-swiper-slide-index")||l,10):d=l,Object.assign(e,{snapIndex:c,realIndex:d,previousIndex:r,activeIndex:l}),e.emit("activeIndexChange"),e.emit("snapIndexChange"),o!==d&&e.emit("realIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&e.emit("slideChange")}function aL(t){const e=this,n=e.params,s=t.closest(`.${n.slideClass}, swiper-slide`);let i=!1,r;if(s){for(let o=0;o<e.slides.length;o+=1)if(e.slides[o]===s){i=!0,r=o;break}}if(s&&i)e.clickedSlide=s,e.virtual&&e.params.virtual.enabled?e.clickedIndex=parseInt(s.getAttribute("data-swiper-slide-index"),10):e.clickedIndex=r;else{e.clickedSlide=void 0,e.clickedIndex=void 0;return}n.slideToClickedSlide&&e.clickedIndex!==void 0&&e.clickedIndex!==e.activeIndex&&e.slideToClickedSlide()}const lL={updateSize:JM,updateSlides:ZM,updateAutoHeight:eL,updateSlidesOffset:tL,updateSlidesProgress:nL,updateProgress:sL,updateSlidesClasses:iL,updateActiveIndex:oL,updateClickedSlide:aL};function cL(t=this.isHorizontal()?"x":"y"){const e=this,{params:n,rtlTranslate:s,translate:i,wrapperEl:r}=e;if(n.virtualTranslate)return s?-i:i;if(n.cssMode)return i;let o=UM(r,t);return s&&(o=-o),o||0}function uL(t,e){const n=this,{rtlTranslate:s,params:i,wrapperEl:r,progress:o}=n;let a=0,l=0;const c=0;n.isHorizontal()?a=s?-t:t:l=t,i.roundLengths&&(a=Math.floor(a),l=Math.floor(l)),i.cssMode?r[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-a:-l:i.virtualTranslate||(r.style.transform=`translate3d(${a}px, ${l}px, ${c}px)`),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?a:l;let u;const d=n.maxTranslate()-n.minTranslate();d===0?u=0:u=(t-n.minTranslate())/d,u!==o&&n.updateProgress(t),n.emit("setTranslate",n.translate,e)}function dL(){return-this.snapGrid[0]}function hL(){return-this.snapGrid[this.snapGrid.length-1]}function fL(t=0,e=this.params.speed,n=!0,s=!0,i){const r=this,{params:o,wrapperEl:a}=r;if(r.animating&&o.preventInteractionOnTransition)return!1;const l=r.minTranslate(),c=r.maxTranslate();let u;if(s&&t>l?u=l:s&&t<c?u=c:u=t,r.updateProgress(u),o.cssMode){const d=r.isHorizontal();if(e===0)a[d?"scrollLeft":"scrollTop"]=-u;else{if(!r.support.smoothScroll)return T0({swiper:r,targetPosition:-u,side:d?"left":"top"}),!0;a.scrollTo({[d?"left":"top"]:-u,behavior:"smooth"})}return!0}return e===0?(r.setTransition(0),r.setTranslate(u),n&&(r.emit("beforeTransitionStart",e,i),r.emit("transitionEnd"))):(r.setTransition(e),r.setTranslate(u),n&&(r.emit("beforeTransitionStart",e,i),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(h){!r||r.destroyed||h.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,n&&r.emit("transitionEnd"))}),r.wrapperEl.addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd))),!0}const pL={getTranslate:cL,setTranslate:uL,minTranslate:dL,maxTranslate:hL,translateTo:fL};function mL(t,e){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${t}ms`),n.emit("setTransition",t,e)}function C0({swiper:t,runCallbacks:e,direction:n,step:s}){const{activeIndex:i,previousIndex:r}=t;let o=n;if(o||(i>r?o="next":i<r?o="prev":o="reset"),t.emit(`transition${s}`),e&&i!==r){if(o==="reset"){t.emit(`slideResetTransition${s}`);return}t.emit(`slideChangeTransition${s}`),o==="next"?t.emit(`slideNextTransition${s}`):t.emit(`slidePrevTransition${s}`)}}function gL(t=!0,e){const n=this,{params:s}=n;s.cssMode||(s.autoHeight&&n.updateAutoHeight(),C0({swiper:n,runCallbacks:t,direction:e,step:"Start"}))}function yL(t=!0,e){const n=this,{params:s}=n;n.animating=!1,!s.cssMode&&(n.setTransition(0),C0({swiper:n,runCallbacks:t,direction:e,step:"End"}))}const vL={setTransition:mL,transitionStart:gL,transitionEnd:yL};function bL(t=0,e=this.params.speed,n=!0,s,i){typeof t=="string"&&(t=parseInt(t,10));const r=this;let o=t;o<0&&(o=0);const{params:a,snapGrid:l,slidesGrid:c,previousIndex:u,activeIndex:d,rtlTranslate:h,wrapperEl:f,enabled:g}=r;if(r.animating&&a.preventInteractionOnTransition||!g&&!s&&!i)return!1;const y=Math.min(r.params.slidesPerGroupSkip,o);let _=y+Math.floor((o-y)/r.params.slidesPerGroup);_>=l.length&&(_=l.length-1);const m=-l[_];if(a.normalizeSlideIndex)for(let v=0;v<c.length;v+=1){const S=-Math.floor(m*100),E=Math.floor(c[v]*100),I=Math.floor(c[v+1]*100);typeof c[v+1]<"u"?S>=E&&S<I-(I-E)/2?o=v:S>=E&&S<I&&(o=v+1):S>=E&&(o=v)}if(r.initialized&&o!==d&&(!r.allowSlideNext&&m<r.translate&&m<r.minTranslate()||!r.allowSlidePrev&&m>r.translate&&m>r.maxTranslate()&&(d||0)!==o))return!1;o!==(u||0)&&n&&r.emit("beforeSlideChangeStart"),r.updateProgress(m);let p;if(o>d?p="next":o<d?p="prev":p="reset",h&&-m===r.translate||!h&&m===r.translate)return r.updateActiveIndex(o),a.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),a.effect!=="slide"&&r.setTranslate(m),p!=="reset"&&(r.transitionStart(n,p),r.transitionEnd(n,p)),!1;if(a.cssMode){const v=r.isHorizontal(),S=h?m:-m;if(e===0){const E=r.virtual&&r.params.virtual.enabled;E&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),E&&!r._cssModeVirtualInitialSet&&r.params.initialSlide>0?(r._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{f[v?"scrollLeft":"scrollTop"]=S})):f[v?"scrollLeft":"scrollTop"]=S,E&&requestAnimationFrame(()=>{r.wrapperEl.style.scrollSnapType="",r._immediateVirtual=!1})}else{if(!r.support.smoothScroll)return T0({swiper:r,targetPosition:S,side:v?"left":"top"}),!0;f.scrollTo({[v?"left":"top"]:S,behavior:"smooth"})}return!0}return r.setTransition(e),r.setTranslate(m),r.updateActiveIndex(o),r.updateSlidesClasses(),r.emit("beforeTransitionStart",e,s),r.transitionStart(n,p),e===0?r.transitionEnd(n,p):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(S){!r||r.destroyed||S.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(n,p))}),r.wrapperEl.addEventListener("transitionend",r.onSlideToWrapperTransitionEnd)),!0}function wL(t=0,e=this.params.speed,n=!0,s){typeof t=="string"&&(t=parseInt(t,10));const i=this;let r=t;return i.params.loop&&(i.virtual&&i.params.virtual.enabled?r=r+i.virtual.slidesBefore:r=_s(i.slides.filter(o=>o.getAttribute("data-swiper-slide-index")*1===r)[0])),i.slideTo(r,e,n,s)}function _L(t=this.params.speed,e=!0,n){const s=this,{enabled:i,params:r,animating:o}=s;if(!i)return s;let a=r.slidesPerGroup;r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(a=Math.max(s.slidesPerViewDynamic("current",!0),1));const l=s.activeIndex<r.slidesPerGroupSkip?1:a,c=s.virtual&&r.virtual.enabled;if(r.loop){if(o&&!c&&r.loopPreventsSliding)return!1;s.loopFix({direction:"next"}),s._clientLeft=s.wrapperEl.clientLeft}return r.rewind&&s.isEnd?s.slideTo(0,t,e,n):s.slideTo(s.activeIndex+l,t,e,n)}function TL(t=this.params.speed,e=!0,n){const s=this,{params:i,snapGrid:r,slidesGrid:o,rtlTranslate:a,enabled:l,animating:c}=s;if(!l)return s;const u=s.virtual&&i.virtual.enabled;if(i.loop){if(c&&!u&&i.loopPreventsSliding)return!1;s.loopFix({direction:"prev"}),s._clientLeft=s.wrapperEl.clientLeft}const d=a?s.translate:-s.translate;function h(m){return m<0?-Math.floor(Math.abs(m)):Math.floor(m)}const f=h(d),g=r.map(m=>h(m));let y=r[g.indexOf(f)-1];if(typeof y>"u"&&i.cssMode){let m;r.forEach((p,v)=>{f>=p&&(m=v)}),typeof m<"u"&&(y=r[m>0?m-1:m])}let _=0;if(typeof y<"u"&&(_=o.indexOf(y),_<0&&(_=s.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(_=_-s.slidesPerViewDynamic("previous",!0)+1,_=Math.max(_,0))),i.rewind&&s.isBeginning){const m=s.params.virtual&&s.params.virtual.enabled&&s.virtual?s.virtual.slides.length-1:s.slides.length-1;return s.slideTo(m,t,e,n)}return s.slideTo(_,t,e,n)}function SL(t=this.params.speed,e=!0,n){const s=this;return s.slideTo(s.activeIndex,t,e,n)}function EL(t=this.params.speed,e=!0,n,s=.5){const i=this;let r=i.activeIndex;const o=Math.min(i.params.slidesPerGroupSkip,r),a=o+Math.floor((r-o)/i.params.slidesPerGroup),l=i.rtlTranslate?i.translate:-i.translate;if(l>=i.snapGrid[a]){const c=i.snapGrid[a],u=i.snapGrid[a+1];l-c>(u-c)*s&&(r+=i.params.slidesPerGroup)}else{const c=i.snapGrid[a-1],u=i.snapGrid[a];l-c<=(u-c)*s&&(r-=i.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,i.slidesGrid.length-1),i.slideTo(r,t,e,n)}function IL(){const t=this,{params:e,slidesEl:n}=t,s=e.slidesPerView==="auto"?t.slidesPerViewDynamic():e.slidesPerView;let i=t.clickedIndex,r;const o=t.isElement?"swiper-slide":`.${e.slideClass}`;if(e.loop){if(t.animating)return;r=parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?i<t.loopedSlides-s/2||i>t.slides.length-t.loopedSlides+s/2?(t.loopFix(),i=_s(Mn(n,`${o}[data-swiper-slide-index="${r}"]`)[0]),zu(()=>{t.slideTo(i)})):t.slideTo(i):i>t.slides.length-s?(t.loopFix(),i=_s(Mn(n,`${o}[data-swiper-slide-index="${r}"]`)[0]),zu(()=>{t.slideTo(i)})):t.slideTo(i)}else t.slideTo(i)}const CL={slideTo:bL,slideToLoop:wL,slideNext:_L,slidePrev:TL,slideReset:SL,slideToClosest:EL,slideToClickedSlide:IL};function xL(t){const e=this,{params:n,slidesEl:s}=e;if(!n.loop||e.virtual&&e.params.virtual.enabled)return;Mn(s,`.${n.slideClass}, swiper-slide`).forEach((r,o)=>{r.setAttribute("data-swiper-slide-index",o)}),e.loopFix({slideRealIndex:t,direction:n.centeredSlides?void 0:"next"})}function AL({slideRealIndex:t,slideTo:e=!0,direction:n,setTranslate:s,activeSlideIndex:i,byController:r,byMousewheel:o}={}){const a=this;if(!a.params.loop)return;a.emit("beforeLoopFix");const{slides:l,allowSlidePrev:c,allowSlideNext:u,slidesEl:d,params:h}=a;if(a.allowSlidePrev=!0,a.allowSlideNext=!0,a.virtual&&h.virtual.enabled){e&&(!h.centeredSlides&&a.snapIndex===0?a.slideTo(a.virtual.slides.length,0,!1,!0):h.centeredSlides&&a.snapIndex<h.slidesPerView?a.slideTo(a.virtual.slides.length+a.snapIndex,0,!1,!0):a.snapIndex===a.snapGrid.length-1&&a.slideTo(a.virtual.slidesBefore,0,!1,!0)),a.allowSlidePrev=c,a.allowSlideNext=u,a.emit("loopFix");return}const f=h.slidesPerView==="auto"?a.slidesPerViewDynamic():Math.ceil(parseFloat(h.slidesPerView,10));let g=h.loopedSlides||f;g%h.slidesPerGroup!==0&&(g+=h.slidesPerGroup-g%h.slidesPerGroup),a.loopedSlides=g;const y=[],_=[];let m=a.activeIndex;typeof i>"u"?i=_s(a.slides.filter(I=>I.classList.contains("swiper-slide-active"))[0]):m=i;const p=n==="next"||!n,v=n==="prev"||!n;let S=0,E=0;if(i<g){S=g-i;for(let I=0;I<g-i;I+=1){const C=I-Math.floor(I/l.length)*l.length;y.push(l.length-C-1)}}else if(i>a.slides.length-g*2){E=i-(a.slides.length-g*2);for(let I=0;I<E;I+=1){const C=I-Math.floor(I/l.length)*l.length;_.push(C)}}if(v&&y.forEach(I=>{d.prepend(a.slides[I])}),p&&_.forEach(I=>{d.append(a.slides[I])}),a.recalcSlides(),h.watchSlidesProgress&&a.updateSlidesOffset(),e){if(y.length>0&&v)if(typeof t>"u"){const I=a.slidesGrid[m],T=a.slidesGrid[m+S]-I;o?a.setTranslate(a.translate-T):(a.slideTo(m+S,0,!1,!0),s&&(a.touches[a.isHorizontal()?"startX":"startY"]+=T))}else s&&a.slideToLoop(t,0,!1,!0);else if(_.length>0&&p)if(typeof t>"u"){const I=a.slidesGrid[m],T=a.slidesGrid[m-E]-I;o?a.setTranslate(a.translate-T):(a.slideTo(m-E,0,!1,!0),s&&(a.touches[a.isHorizontal()?"startX":"startY"]+=T))}else a.slideToLoop(t,0,!1,!0)}if(a.allowSlidePrev=c,a.allowSlideNext=u,a.controller&&a.controller.control&&!r){const I={slideRealIndex:t,slideTo:!1,direction:n,setTranslate:s,activeSlideIndex:i,byController:!0};Array.isArray(a.controller.control)?a.controller.control.forEach(C=>{C.params.loop&&C.loopFix(I)}):a.controller.control instanceof a.constructor&&a.controller.control.params.loop&&a.controller.control.loopFix(I)}a.emit("loopFix")}function kL(){const t=this,{slides:e,params:n,slidesEl:s}=t;if(!n.loop||t.virtual&&t.params.virtual.enabled)return;t.recalcSlides();const i=[];e.forEach(r=>{const o=typeof r.swiperSlideIndex>"u"?r.getAttribute("data-swiper-slide-index")*1:r.swiperSlideIndex;i[o]=r}),e.forEach(r=>{r.removeAttribute("data-swiper-slide-index")}),i.forEach(r=>{s.append(r)}),t.recalcSlides(),t.slideTo(t.realIndex,0)}const RL={loopCreate:xL,loopFix:AL,loopDestroy:kL};function OL(t){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const n=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;n.style.cursor="move",n.style.cursor=t?"grabbing":"grab"}function DL(){const t=this;t.params.watchOverflow&&t.isLocked||t.params.cssMode||(t[t.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="")}const PL={setGrabCursor:OL,unsetGrabCursor:DL};function ML(t,e=this){function n(s){if(!s||s===yn()||s===Ht())return null;s.assignedSlot&&(s=s.assignedSlot);const i=s.closest(t);return!i&&!s.getRootNode?null:i||n(s.getRootNode().host)}return n(e)}function LL(t){const e=this,n=yn(),s=Ht(),i=e.touchEventsData;i.evCache.push(t);const{params:r,touches:o,enabled:a}=e;if(!a||!r.simulateTouch&&t.pointerType==="mouse"||e.animating&&r.preventInteractionOnTransition)return;!e.animating&&r.cssMode&&r.loop&&e.loopFix();let l=t;l.originalEvent&&(l=l.originalEvent);let c=l.target;if(r.touchEventsTarget==="wrapper"&&!e.wrapperEl.contains(c)||"which"in l&&l.which===3||"button"in l&&l.button>0||i.isTouched&&i.isMoved)return;const u=!!r.noSwipingClass&&r.noSwipingClass!=="",d=t.composedPath?t.composedPath():t.path;u&&l.target&&l.target.shadowRoot&&d&&(c=d[0]);const h=r.noSwipingSelector?r.noSwipingSelector:`.${r.noSwipingClass}`,f=!!(l.target&&l.target.shadowRoot);if(r.noSwiping&&(f?ML(h,c):c.closest(h))){e.allowClick=!0;return}if(r.swipeHandler&&!c.closest(r.swipeHandler))return;o.currentX=l.pageX,o.currentY=l.pageY;const g=o.currentX,y=o.currentY,_=r.edgeSwipeDetection||r.iOSEdgeSwipeDetection,m=r.edgeSwipeThreshold||r.iOSEdgeSwipeThreshold;if(_&&(g<=m||g>=s.innerWidth-m))if(_==="prevent")t.preventDefault();else return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=g,o.startY=y,i.touchStartTime=to(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,r.threshold>0&&(i.allowThresholdMove=!1);let p=!0;c.matches(i.focusableElements)&&(p=!1,c.nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==c&&n.activeElement.blur();const v=p&&e.allowTouchMove&&r.touchStartPreventDefault;(r.touchStartForcePreventDefault||v)&&!c.isContentEditable&&l.preventDefault(),e.params.freeMode&&e.params.freeMode.enabled&&e.freeMode&&e.animating&&!r.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",l)}function NL(t){const e=yn(),n=this,s=n.touchEventsData,{params:i,touches:r,rtlTranslate:o,enabled:a}=n;if(!a||!i.simulateTouch&&t.pointerType==="mouse")return;let l=t;if(l.originalEvent&&(l=l.originalEvent),!s.isTouched){s.startMoving&&s.isScrolling&&n.emit("touchMoveOpposite",l);return}const c=s.evCache.findIndex(I=>I.pointerId===l.pointerId);c>=0&&(s.evCache[c]=l);const u=s.evCache.length>1?s.evCache[0]:l,d=u.pageX,h=u.pageY;if(l.preventedByNestedSwiper){r.startX=d,r.startY=h;return}if(!n.allowTouchMove){l.target.matches(s.focusableElements)||(n.allowClick=!1),s.isTouched&&(Object.assign(r,{startX:d,startY:h,prevX:n.touches.currentX,prevY:n.touches.currentY,currentX:d,currentY:h}),s.touchStartTime=to());return}if(i.touchReleaseOnEdges&&!i.loop){if(n.isVertical()){if(h<r.startY&&n.translate<=n.maxTranslate()||h>r.startY&&n.translate>=n.minTranslate()){s.isTouched=!1,s.isMoved=!1;return}}else if(d<r.startX&&n.translate<=n.maxTranslate()||d>r.startX&&n.translate>=n.minTranslate())return}if(e.activeElement&&l.target===e.activeElement&&l.target.matches(s.focusableElements)){s.isMoved=!0,n.allowClick=!1;return}if(s.allowTouchCallbacks&&n.emit("touchMove",l),l.targetTouches&&l.targetTouches.length>1)return;r.currentX=d,r.currentY=h;const f=r.currentX-r.startX,g=r.currentY-r.startY;if(n.params.threshold&&Math.sqrt(f**2+g**2)<n.params.threshold)return;if(typeof s.isScrolling>"u"){let I;n.isHorizontal()&&r.currentY===r.startY||n.isVertical()&&r.currentX===r.startX?s.isScrolling=!1:f*f+g*g>=25&&(I=Math.atan2(Math.abs(g),Math.abs(f))*180/Math.PI,s.isScrolling=n.isHorizontal()?I>i.touchAngle:90-I>i.touchAngle)}if(s.isScrolling&&n.emit("touchMoveOpposite",l),typeof s.startMoving>"u"&&(r.currentX!==r.startX||r.currentY!==r.startY)&&(s.startMoving=!0),s.isScrolling||n.zoom&&n.params.zoom&&n.params.zoom.enabled&&s.evCache.length>1){s.isTouched=!1;return}if(!s.startMoving)return;n.allowClick=!1,!i.cssMode&&l.cancelable&&l.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&l.stopPropagation();let y=n.isHorizontal()?f:g,_=n.isHorizontal()?r.currentX-r.previousX:r.currentY-r.previousY;i.oneWayMovement&&(y=Math.abs(y)*(o?1:-1),_=Math.abs(_)*(o?1:-1)),r.diff=y,y*=i.touchRatio,o&&(y=-y,_=-_);const m=n.touchesDirection;n.swipeDirection=y>0?"prev":"next",n.touchesDirection=_>0?"prev":"next";const p=n.params.loop&&!i.cssMode;if(!s.isMoved){if(p&&n.loopFix({direction:n.swipeDirection}),s.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const I=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});n.wrapperEl.dispatchEvent(I)}s.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",l)}let v;s.isMoved&&m!==n.touchesDirection&&p&&Math.abs(y)>=1&&(n.loopFix({direction:n.swipeDirection,setTranslate:!0}),v=!0),n.emit("sliderMove",l),s.isMoved=!0,s.currentTranslate=y+s.startTranslate;let S=!0,E=i.resistanceRatio;if(i.touchReleaseOnEdges&&(E=0),y>0?(p&&!v&&s.currentTranslate>(i.centeredSlides?n.minTranslate()-n.size/2:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),s.currentTranslate>n.minTranslate()&&(S=!1,i.resistance&&(s.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+s.startTranslate+y)**E))):y<0&&(p&&!v&&s.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.size/2:n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),s.currentTranslate<n.maxTranslate()&&(S=!1,i.resistance&&(s.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-s.startTranslate-y)**E))),S&&(l.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&s.currentTranslate<s.startTranslate&&(s.currentTranslate=s.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&s.currentTranslate>s.startTranslate&&(s.currentTranslate=s.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(s.currentTranslate=s.startTranslate),i.threshold>0)if(Math.abs(y)>i.threshold||s.allowThresholdMove){if(!s.allowThresholdMove){s.allowThresholdMove=!0,r.startX=r.currentX,r.startY=r.currentY,s.currentTranslate=s.startTranslate,r.diff=n.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY;return}}else{s.currentTranslate=s.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),n.params.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(s.currentTranslate),n.setTranslate(s.currentTranslate))}function FL(t){const e=this,n=e.touchEventsData,s=n.evCache.findIndex(v=>v.pointerId===t.pointerId);if(s>=0&&n.evCache.splice(s,1),["pointercancel","pointerout","pointerleave"].includes(t.type))return;const{params:i,touches:r,rtlTranslate:o,slidesGrid:a,enabled:l}=e;if(!l||!i.simulateTouch&&t.pointerType==="mouse")return;let c=t;if(c.originalEvent&&(c=c.originalEvent),n.allowTouchCallbacks&&e.emit("touchEnd",c),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&i.grabCursor&&e.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}i.grabCursor&&n.isMoved&&n.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const u=to(),d=u-n.touchStartTime;if(e.allowClick){const v=c.path||c.composedPath&&c.composedPath();e.updateClickedSlide(v&&v[0]||c.target),e.emit("tap click",c),d<300&&u-n.lastClickTime<300&&e.emit("doubleTap doubleClick",c)}if(n.lastClickTime=to(),zu(()=>{e.destroyed||(e.allowClick=!0)}),!n.isTouched||!n.isMoved||!e.swipeDirection||r.diff===0||n.currentTranslate===n.startTranslate){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let h;if(i.followFinger?h=o?e.translate:-e.translate:h=-n.currentTranslate,i.cssMode)return;if(e.params.freeMode&&i.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:h});return}let f=0,g=e.slidesSizesGrid[0];for(let v=0;v<a.length;v+=v<i.slidesPerGroupSkip?1:i.slidesPerGroup){const S=v<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;typeof a[v+S]<"u"?h>=a[v]&&h<a[v+S]&&(f=v,g=a[v+S]-a[v]):h>=a[v]&&(f=v,g=a[a.length-1]-a[a.length-2])}let y=null,_=null;i.rewind&&(e.isBeginning?_=e.params.virtual&&e.params.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(y=0));const m=(h-a[f])/g,p=f<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;if(d>i.longSwipesMs){if(!i.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(m>=i.longSwipesRatio?e.slideTo(i.rewind&&e.isEnd?y:f+p):e.slideTo(f)),e.swipeDirection==="prev"&&(m>1-i.longSwipesRatio?e.slideTo(f+p):_!==null&&m<0&&Math.abs(m)>i.longSwipesRatio?e.slideTo(_):e.slideTo(f))}else{if(!i.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(c.target===e.navigation.nextEl||c.target===e.navigation.prevEl)?c.target===e.navigation.nextEl?e.slideTo(f+p):e.slideTo(f):(e.swipeDirection==="next"&&e.slideTo(y!==null?y:f+p),e.swipeDirection==="prev"&&e.slideTo(_!==null?_:f))}}let Sm;function Em(){const t=this,{params:e,el:n}=t;if(n&&n.offsetWidth===0)return;e.breakpoints&&t.setBreakpoint();const{allowSlideNext:s,allowSlidePrev:i,snapGrid:r}=t,o=t.virtual&&t.params.virtual.enabled;t.allowSlideNext=!0,t.allowSlidePrev=!0,t.updateSize(),t.updateSlides(),t.updateSlidesClasses();const a=o&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&t.isEnd&&!t.isBeginning&&!t.params.centeredSlides&&!a?t.slideTo(t.slides.length-1,0,!1,!0):t.params.loop&&!o?t.slideToLoop(t.realIndex,0,!1,!0):t.slideTo(t.activeIndex,0,!1,!0),t.autoplay&&t.autoplay.running&&t.autoplay.paused&&(clearTimeout(Sm),Sm=setTimeout(()=>{t.autoplay.resume()},500)),t.allowSlidePrev=i,t.allowSlideNext=s,t.params.watchOverflow&&r!==t.snapGrid&&t.checkOverflow()}function $L(t){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&t.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(t.stopPropagation(),t.stopImmediatePropagation())))}function BL(){const t=this,{wrapperEl:e,rtlTranslate:n,enabled:s}=t;if(!s)return;t.previousTranslate=t.translate,t.isHorizontal()?t.translate=-e.scrollLeft:t.translate=-e.scrollTop,t.translate===0&&(t.translate=0),t.updateActiveIndex(),t.updateSlidesClasses();let i;const r=t.maxTranslate()-t.minTranslate();r===0?i=0:i=(t.translate-t.minTranslate())/r,i!==t.progress&&t.updateProgress(n?-t.translate:t.translate),t.emit("setTranslate",t.translate,!1)}const fa=(t,e)=>{if(!t||t.destroyed||!t.params)return;const n=()=>t.isElement?"swiper-slide":`.${t.params.slideClass}`,s=e.closest(n());if(s){const i=s.querySelector(`.${t.params.lazyPreloaderClass}`);i&&i.remove()}};function UL(t){const e=this;fa(e,t.target),e.update()}let Im=!1;function VL(){}const x0=(t,e)=>{const n=yn(),{params:s,el:i,wrapperEl:r,device:o}=t,a=!!s.nested,l=e==="on"?"addEventListener":"removeEventListener",c=e;i[l]("pointerdown",t.onTouchStart,{passive:!1}),n[l]("pointermove",t.onTouchMove,{passive:!1,capture:a}),n[l]("pointerup",t.onTouchEnd,{passive:!0}),n[l]("pointercancel",t.onTouchEnd,{passive:!0}),n[l]("pointerout",t.onTouchEnd,{passive:!0}),n[l]("pointerleave",t.onTouchEnd,{passive:!0}),(s.preventClicks||s.preventClicksPropagation)&&i[l]("click",t.onClick,!0),s.cssMode&&r[l]("scroll",t.onScroll),s.updateOnWindowResize?t[c](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",Em,!0):t[c]("observerUpdate",Em,!0),i[l]("load",t.onLoad,{capture:!0})};function jL(){const t=this,e=yn(),{params:n}=t;t.onTouchStart=LL.bind(t),t.onTouchMove=NL.bind(t),t.onTouchEnd=FL.bind(t),n.cssMode&&(t.onScroll=BL.bind(t)),t.onClick=$L.bind(t),t.onLoad=UL.bind(t),Im||(e.addEventListener("touchstart",VL),Im=!0),x0(t,"on")}function zL(){x0(this,"off")}const qL={attachEvents:jL,detachEvents:zL},Cm=(t,e)=>t.grid&&e.grid&&e.grid.rows>1;function HL(){const t=this,{realIndex:e,initialized:n,params:s,el:i}=t,r=s.breakpoints;if(!r||r&&Object.keys(r).length===0)return;const o=t.getBreakpoint(r,t.params.breakpointsBase,t.el);if(!o||t.currentBreakpoint===o)return;const l=(o in r?r[o]:void 0)||t.originalParams,c=Cm(t,s),u=Cm(t,l),d=s.enabled;c&&!u?(i.classList.remove(`${s.containerModifierClass}grid`,`${s.containerModifierClass}grid-column`),t.emitContainerClasses()):!c&&u&&(i.classList.add(`${s.containerModifierClass}grid`),(l.grid.fill&&l.grid.fill==="column"||!l.grid.fill&&s.grid.fill==="column")&&i.classList.add(`${s.containerModifierClass}grid-column`),t.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach(y=>{const _=s[y]&&s[y].enabled,m=l[y]&&l[y].enabled;_&&!m&&t[y].disable(),!_&&m&&t[y].enable()});const h=l.direction&&l.direction!==s.direction,f=s.loop&&(l.slidesPerView!==s.slidesPerView||h);h&&n&&t.changeDirection(),Ft(t.params,l);const g=t.params.enabled;Object.assign(t,{allowTouchMove:t.params.allowTouchMove,allowSlideNext:t.params.allowSlideNext,allowSlidePrev:t.params.allowSlidePrev}),d&&!g?t.disable():!d&&g&&t.enable(),t.currentBreakpoint=o,t.emit("_beforeBreakpoint",l),f&&n&&(t.loopDestroy(),t.loopCreate(e),t.updateSlides()),t.emit("breakpoint",l)}function GL(t,e="window",n){if(!t||e==="container"&&!n)return;let s=!1;const i=Ht(),r=e==="window"?i.innerHeight:n.clientHeight,o=Object.keys(t).map(a=>{if(typeof a=="string"&&a.indexOf("@")===0){const l=parseFloat(a.substr(1));return{value:r*l,point:a}}return{value:a,point:a}});o.sort((a,l)=>parseInt(a.value,10)-parseInt(l.value,10));for(let a=0;a<o.length;a+=1){const{point:l,value:c}=o[a];e==="window"?i.matchMedia(`(min-width: ${c}px)`).matches&&(s=l):c<=n.clientWidth&&(s=l)}return s||"max"}const KL={setBreakpoint:HL,getBreakpoint:GL};function WL(t,e){const n=[];return t.forEach(s=>{typeof s=="object"?Object.keys(s).forEach(i=>{s[i]&&n.push(e+i)}):typeof s=="string"&&n.push(e+s)}),n}function YL(){const t=this,{classNames:e,params:n,rtl:s,el:i,device:r}=t,o=WL(["initialized",n.direction,{"free-mode":t.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:s},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:r.android},{ios:r.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);e.push(...o),i.classList.add(...e),t.emitContainerClasses()}function QL(){const t=this,{el:e,classNames:n}=t;e.classList.remove(...n),t.emitContainerClasses()}const XL={addClasses:YL,removeClasses:QL};function JL(){const t=this,{isLocked:e,params:n}=t,{slidesOffsetBefore:s}=n;if(s){const i=t.slides.length-1,r=t.slidesGrid[i]+t.slidesSizesGrid[i]+s*2;t.isLocked=t.size>r}else t.isLocked=t.snapGrid.length===1;n.allowSlideNext===!0&&(t.allowSlideNext=!t.isLocked),n.allowSlidePrev===!0&&(t.allowSlidePrev=!t.isLocked),e&&e!==t.isLocked&&(t.isEnd=!1),e!==t.isLocked&&t.emit(t.isLocked?"lock":"unlock")}const ZL={checkOverflow:JL},xm={init:!0,direction:"horizontal",oneWayMovement:!1,touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopedSlides:null,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",runCallbacksOnInit:!0,_emitClasses:!1};function eN(t,e){return function(s={}){const i=Object.keys(s)[0],r=s[i];if(typeof r!="object"||r===null){Ft(e,s);return}if(["navigation","pagination","scrollbar"].indexOf(i)>=0&&t[i]===!0&&(t[i]={auto:!0}),!(i in t&&"enabled"in r)){Ft(e,s);return}t[i]===!0&&(t[i]={enabled:!0}),typeof t[i]=="object"&&!("enabled"in t[i])&&(t[i].enabled=!0),t[i]||(t[i]={enabled:!1}),Ft(e,s)}}const Lc={eventsEmitter:XM,update:lL,translate:pL,transition:vL,slide:CL,loop:RL,grabCursor:PL,events:qL,breakpoints:KL,checkOverflow:ZL,classes:XL},Nc={};let no=class En{constructor(...e){let n,s;e.length===1&&e[0].constructor&&Object.prototype.toString.call(e[0]).slice(8,-1)==="Object"?s=e[0]:[n,s]=e,s||(s={}),s=Ft({},s),n&&!s.el&&(s.el=n);const i=yn();if(s.el&&typeof s.el=="string"&&i.querySelectorAll(s.el).length>1){const l=[];return i.querySelectorAll(s.el).forEach(c=>{const u=Ft({},s,{el:c});l.push(new En(u))}),l}const r=this;r.__swiper__=!0,r.support=I0(),r.device=GM({userAgent:s.userAgent}),r.browser=WM(),r.eventsListeners={},r.eventsAnyListeners=[],r.modules=[...r.__modules__],s.modules&&Array.isArray(s.modules)&&r.modules.push(...s.modules);const o={};r.modules.forEach(l=>{l({params:s,swiper:r,extendParams:eN(s,o),on:r.on.bind(r),once:r.once.bind(r),off:r.off.bind(r),emit:r.emit.bind(r)})});const a=Ft({},xm,o);return r.params=Ft({},a,Nc,s),r.originalParams=Ft({},r.params),r.passedParams=Ft({},s),r.params&&r.params.on&&Object.keys(r.params.on).forEach(l=>{r.on(l,r.params.on[l])}),r.params&&r.params.onAny&&r.onAny(r.params.onAny),Object.assign(r,{enabled:r.params.enabled,el:n,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return r.params.direction==="horizontal"},isVertical(){return r.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:r.params.focusableElements,lastClickTime:to(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,evCache:[]},allowClick:!0,allowTouchMove:r.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),r.emit("_swiper"),r.params.init&&r.init(),r}recalcSlides(){const e=this,{slidesEl:n,params:s}=e;e.slides=Mn(n,`.${s.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,n){const s=this;e=Math.min(Math.max(e,0),1);const i=s.minTranslate(),o=(s.maxTranslate()-i)*e+i;s.translateTo(o,typeof n>"u"?0:n),s.updateActiveIndex(),s.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const n=e.el.className.split(" ").filter(s=>s.indexOf("swiper")===0||s.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",n.join(" "))}getSlideClasses(e){const n=this;return n.destroyed?"":e.className.split(" ").filter(s=>s.indexOf("swiper-slide")===0||s.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const n=[];e.slides.forEach(s=>{const i=e.getSlideClasses(s);n.push({slideEl:s,classNames:i}),e.emit("_slideClass",s,i)}),e.emit("_slideClasses",n)}slidesPerViewDynamic(e="current",n=!1){const s=this,{params:i,slides:r,slidesGrid:o,slidesSizesGrid:a,size:l,activeIndex:c}=s;let u=1;if(i.centeredSlides){let d=r[c].swiperSlideSize,h;for(let f=c+1;f<r.length;f+=1)r[f]&&!h&&(d+=r[f].swiperSlideSize,u+=1,d>l&&(h=!0));for(let f=c-1;f>=0;f-=1)r[f]&&!h&&(d+=r[f].swiperSlideSize,u+=1,d>l&&(h=!0))}else if(e==="current")for(let d=c+1;d<r.length;d+=1)(n?o[d]+a[d]-o[c]<l:o[d]-o[c]<l)&&(u+=1);else for(let d=c-1;d>=0;d-=1)o[c]-o[d]<l&&(u+=1);return u}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:n,params:s}=e;s.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&fa(e,o)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function i(){const o=e.rtlTranslate?e.translate*-1:e.translate,a=Math.min(Math.max(o,e.maxTranslate()),e.minTranslate());e.setTranslate(a),e.updateActiveIndex(),e.updateSlidesClasses()}let r;e.params.freeMode&&e.params.freeMode.enabled?(i(),e.params.autoHeight&&e.updateAutoHeight()):((e.params.slidesPerView==="auto"||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?r=e.slideTo(e.slides.length-1,0,!1,!0):r=e.slideTo(e.activeIndex,0,!1,!0),r||i()),s.watchOverflow&&n!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,n=!0){const s=this,i=s.params.direction;return e||(e=i==="horizontal"?"vertical":"horizontal"),e===i||e!=="horizontal"&&e!=="vertical"||(s.el.classList.remove(`${s.params.containerModifierClass}${i}`),s.el.classList.add(`${s.params.containerModifierClass}${e}`),s.emitContainerClasses(),s.params.direction=e,s.slides.forEach(r=>{e==="vertical"?r.style.width="":r.style.height=""}),s.emit("changeDirection"),n&&s.update()),s}changeLanguageDirection(e){const n=this;n.rtl&&e==="rtl"||!n.rtl&&e==="ltr"||(n.rtl=e==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.el.classList.add(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.el.classList.remove(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(e){const n=this;if(n.mounted)return!0;let s=e||n.params.el;if(typeof s=="string"&&(s=document.querySelector(s)),!s)return!1;s.swiper=n,s.shadowEl&&(n.isElement=!0);const i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=(()=>s&&s.shadowRoot&&s.shadowRoot.querySelector?s.shadowRoot.querySelector(i()):Mn(s,i())[0])();return!o&&n.params.createElements&&(o=S0("div",n.params.wrapperClass),s.append(o),Mn(s,`.${n.params.slideClass}`).forEach(a=>{o.append(a)})),Object.assign(n,{el:s,wrapperEl:o,slidesEl:n.isElement?s:o,mounted:!0,rtl:s.dir.toLowerCase()==="rtl"||os(s,"direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(s.dir.toLowerCase()==="rtl"||os(s,"direction")==="rtl"),wrongRTL:os(o,"display")==="-webkit-box"}),!0}init(e){const n=this;return n.initialized||n.mount(e)===!1||(n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.loop&&n.virtual&&n.params.virtual.enabled?n.slideTo(n.params.initialSlide+n.virtual.slidesBefore,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.params.loop&&n.loopCreate(),n.attachEvents(),[...n.el.querySelectorAll('[loading="lazy"]')].forEach(i=>{i.complete?fa(n,i):i.addEventListener("load",r=>{fa(n,r.target)})}),n.initialized=!0,n.emit("init"),n.emit("afterInit")),n}destroy(e=!0,n=!0){const s=this,{params:i,el:r,wrapperEl:o,slides:a}=s;return typeof s.params>"u"||s.destroyed||(s.emit("beforeDestroy"),s.initialized=!1,s.detachEvents(),i.loop&&s.loopDestroy(),n&&(s.removeClasses(),r.removeAttribute("style"),o.removeAttribute("style"),a&&a.length&&a.forEach(l=>{l.classList.remove(i.slideVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),s.emit("destroy"),Object.keys(s.eventsListeners).forEach(l=>{s.off(l)}),e!==!1&&(s.el.swiper=null,$M(s)),s.destroyed=!0),null}static extendDefaults(e){Ft(Nc,e)}static get extendedDefaults(){return Nc}static get defaults(){return xm}static installModule(e){En.prototype.__modules__||(En.prototype.__modules__=[]);const n=En.prototype.__modules__;typeof e=="function"&&n.indexOf(e)<0&&n.push(e)}static use(e){return Array.isArray(e)?(e.forEach(n=>En.installModule(n)),En):(En.installModule(e),En)}};Object.keys(Lc).forEach(t=>{Object.keys(Lc[t]).forEach(e=>{no.prototype[e]=Lc[t][e]})});no.use([YM,QM]);function tN(t,e,n,s){return t.params.createElements&&Object.keys(s).forEach(i=>{if(!n[i]&&n.auto===!0){let r=Mn(t.el,`.${s[i]}`)[0];r||(r=S0("div",s[i]),r.className=s[i],t.el.append(r)),n[i]=r,e[i]=r}}),n}function cr(t=""){return`.${t.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}function nN({swiper:t,extendParams:e,on:n,emit:s}){const i="swiper-pagination";e({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:m=>m,formatFractionTotal:m=>m,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`,paginationDisabledClass:`${i}-disabled`}}),t.pagination={el:null,bullets:[]};let r,o=0;const a=m=>(Array.isArray(m)||(m=[m].filter(p=>!!p)),m);function l(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&t.pagination.el.length===0}function c(m,p){const{bulletActiveClass:v}=t.params.pagination;m&&(m=m[`${p==="prev"?"previous":"next"}ElementSibling`],m&&(m.classList.add(`${v}-${p}`),m=m[`${p==="prev"?"previous":"next"}ElementSibling`],m&&m.classList.add(`${v}-${p}-${p}`)))}function u(m){const p=m.target.closest(cr(t.params.pagination.bulletClass));if(!p)return;m.preventDefault();const v=_s(p)*t.params.slidesPerGroup;t.params.loop?t.slideToLoop(v):t.slideTo(v)}function d(){const m=t.rtl,p=t.params.pagination;if(l())return;let v=t.pagination.el;v=a(v);let S;const E=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,I=t.params.loop?Math.ceil(E/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?S=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex:typeof t.snapIndex<"u"?S=t.snapIndex:S=t.activeIndex||0,p.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){const C=t.pagination.bullets;let T,A,$;if(p.dynamicBullets&&(r=qu(C[0],t.isHorizontal()?"width":"height",!0),v.forEach(x=>{x.style[t.isHorizontal()?"width":"height"]=`${r*(p.dynamicMainBullets+4)}px`}),p.dynamicMainBullets>1&&t.previousIndex!==void 0&&(o+=S-(t.previousIndex||0),o>p.dynamicMainBullets-1?o=p.dynamicMainBullets-1:o<0&&(o=0)),T=Math.max(S-o,0),A=T+(Math.min(C.length,p.dynamicMainBullets)-1),$=(A+T)/2),C.forEach(x=>{x.classList.remove(...["","-next","-next-next","-prev","-prev-prev","-main"].map(k=>`${p.bulletActiveClass}${k}`))}),v.length>1)C.forEach(x=>{const k=_s(x);k===S&&x.classList.add(p.bulletActiveClass),p.dynamicBullets&&(k>=T&&k<=A&&x.classList.add(`${p.bulletActiveClass}-main`),k===T&&c(x,"prev"),k===A&&c(x,"next"))});else{const x=C[S];if(x&&x.classList.add(p.bulletActiveClass),p.dynamicBullets){const k=C[T],U=C[A];for(let F=T;F<=A;F+=1)C[F].classList.add(`${p.bulletActiveClass}-main`);c(k,"prev"),c(U,"next")}}if(p.dynamicBullets){const x=Math.min(C.length,p.dynamicMainBullets+4),k=(r*x-r)/2-$*r,U=m?"right":"left";C.forEach(F=>{F.style[t.isHorizontal()?U:"top"]=`${k}px`})}}v.forEach((C,T)=>{if(p.type==="fraction"&&(C.querySelectorAll(cr(p.currentClass)).forEach(A=>{A.textContent=p.formatFractionCurrent(S+1)}),C.querySelectorAll(cr(p.totalClass)).forEach(A=>{A.textContent=p.formatFractionTotal(I)})),p.type==="progressbar"){let A;p.progressbarOpposite?A=t.isHorizontal()?"vertical":"horizontal":A=t.isHorizontal()?"horizontal":"vertical";const $=(S+1)/I;let x=1,k=1;A==="horizontal"?x=$:k=$,C.querySelectorAll(cr(p.progressbarFillClass)).forEach(U=>{U.style.transform=`translate3d(0,0,0) scaleX(${x}) scaleY(${k})`,U.style.transitionDuration=`${t.params.speed}ms`})}p.type==="custom"&&p.renderCustom?(C.innerHTML=p.renderCustom(t,S+1,I),T===0&&s("paginationRender",C)):(T===0&&s("paginationRender",C),s("paginationUpdate",C)),t.params.watchOverflow&&t.enabled&&C.classList[t.isLocked?"add":"remove"](p.lockClass)})}function h(){const m=t.params.pagination;if(l())return;const p=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length;let v=t.pagination.el;v=a(v);let S="";if(m.type==="bullets"){let E=t.params.loop?Math.ceil(p/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&E>p&&(E=p);for(let I=0;I<E;I+=1)m.renderBullet?S+=m.renderBullet.call(t,I,m.bulletClass):S+=`<${m.bulletElement} class="${m.bulletClass}"></${m.bulletElement}>`}m.type==="fraction"&&(m.renderFraction?S=m.renderFraction.call(t,m.currentClass,m.totalClass):S=`<span class="${m.currentClass}"></span> / <span class="${m.totalClass}"></span>`),m.type==="progressbar"&&(m.renderProgressbar?S=m.renderProgressbar.call(t,m.progressbarFillClass):S=`<span class="${m.progressbarFillClass}"></span>`),v.forEach(E=>{m.type!=="custom"&&(E.innerHTML=S||""),m.type==="bullets"&&(t.pagination.bullets=[...E.querySelectorAll(cr(m.bulletClass))])}),m.type!=="custom"&&s("paginationRender",v[0])}function f(){t.params.pagination=tN(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const m=t.params.pagination;if(!m.el)return;let p;typeof m.el=="string"&&t.isElement&&(p=t.el.shadowRoot.querySelector(m.el)),!p&&typeof m.el=="string"&&(p=[...document.querySelectorAll(m.el)]),p||(p=m.el),!(!p||p.length===0)&&(t.params.uniqueNavElements&&typeof m.el=="string"&&Array.isArray(p)&&p.length>1&&(p=[...t.el.querySelectorAll(m.el)],p.length>1&&(p=p.filter(v=>E0(v,".swiper")[0]===t.el)[0])),Array.isArray(p)&&p.length===1&&(p=p[0]),Object.assign(t.pagination,{el:p}),p=a(p),p.forEach(v=>{m.type==="bullets"&&m.clickable&&v.classList.add(m.clickableClass),v.classList.add(m.modifierClass+m.type),v.classList.add(t.isHorizontal()?m.horizontalClass:m.verticalClass),m.type==="bullets"&&m.dynamicBullets&&(v.classList.add(`${m.modifierClass}${m.type}-dynamic`),o=0,m.dynamicMainBullets<1&&(m.dynamicMainBullets=1)),m.type==="progressbar"&&m.progressbarOpposite&&v.classList.add(m.progressbarOppositeClass),m.clickable&&v.addEventListener("click",u),t.enabled||v.classList.add(m.lockClass)}))}function g(){const m=t.params.pagination;if(l())return;let p=t.pagination.el;p&&(p=a(p),p.forEach(v=>{v.classList.remove(m.hiddenClass),v.classList.remove(m.modifierClass+m.type),v.classList.remove(t.isHorizontal()?m.horizontalClass:m.verticalClass),m.clickable&&v.removeEventListener("click",u)})),t.pagination.bullets&&t.pagination.bullets.forEach(v=>v.classList.remove(m.bulletActiveClass))}n("init",()=>{t.params.pagination.enabled===!1?_():(f(),h(),d())}),n("activeIndexChange",()=>{typeof t.snapIndex>"u"&&d()}),n("snapIndexChange",()=>{d()}),n("snapGridLengthChange",()=>{h(),d()}),n("destroy",()=>{g()}),n("enable disable",()=>{let{el:m}=t.pagination;m&&(m=a(m),m.forEach(p=>p.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass)))}),n("lock unlock",()=>{d()}),n("click",(m,p)=>{const v=p.target;let{el:S}=t.pagination;if(Array.isArray(S)||(S=[S].filter(E=>!!E)),t.params.pagination.el&&t.params.pagination.hideOnClick&&S&&S.length>0&&!v.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&v===t.navigation.nextEl||t.navigation.prevEl&&v===t.navigation.prevEl))return;const E=S[0].classList.contains(t.params.pagination.hiddenClass);s(E===!0?"paginationShow":"paginationHide"),S.forEach(I=>I.classList.toggle(t.params.pagination.hiddenClass))}});const y=()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:m}=t.pagination;m&&(m=a(m),m.forEach(p=>p.classList.remove(t.params.pagination.paginationDisabledClass))),f(),h(),d()},_=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:m}=t.pagination;m&&(m=a(m),m.forEach(p=>p.classList.add(t.params.pagination.paginationDisabledClass))),g()};Object.assign(t.pagination,{enable:y,disable:_,render:h,update:d,init:f,destroy:g})}function sN({swiper:t,extendParams:e,on:n,emit:s,params:i}){t.autoplay={running:!1,paused:!1,timeLeft:0},e({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let r,o,a=i&&i.autoplay?i.autoplay.delay:3e3,l=i&&i.autoplay?i.autoplay.delay:3e3,c,u=new Date().getTime,d,h,f,g,y,_;function m(W){!t||t.destroyed||!t.wrapperEl||W.target===t.wrapperEl&&(t.wrapperEl.removeEventListener("transitionend",m),T())}const p=()=>{if(t.destroyed||!t.autoplay.running)return;t.autoplay.paused?d=!0:d&&(l=c,d=!1);const W=t.autoplay.paused?c:u+l-new Date().getTime();t.autoplay.timeLeft=W,s("autoplayTimeLeft",W,W/a),o=requestAnimationFrame(()=>{p()})},v=()=>{let W;return t.virtual&&t.params.virtual.enabled?W=t.slides.filter(de=>de.classList.contains("swiper-slide-active"))[0]:W=t.slides[t.activeIndex],W?parseInt(W.getAttribute("data-swiper-autoplay"),10):void 0},S=W=>{if(t.destroyed||!t.autoplay.running)return;cancelAnimationFrame(o),p();let me=typeof W>"u"?t.params.autoplay.delay:W;a=t.params.autoplay.delay,l=t.params.autoplay.delay;const de=v();!Number.isNaN(de)&&de>0&&typeof W>"u"&&(me=de,a=de,l=de),c=me;const Ge=t.params.speed,Pt=()=>{!t||t.destroyed||(t.params.autoplay.reverseDirection?!t.isBeginning||t.params.loop||t.params.rewind?(t.slidePrev(Ge,!0,!0),s("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(t.slides.length-1,Ge,!0,!0),s("autoplay")):!t.isEnd||t.params.loop||t.params.rewind?(t.slideNext(Ge,!0,!0),s("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(0,Ge,!0,!0),s("autoplay")),t.params.cssMode&&(u=new Date().getTime(),requestAnimationFrame(()=>{S()})))};return me>0?(clearTimeout(r),r=setTimeout(()=>{Pt()},me)):requestAnimationFrame(()=>{Pt()}),me},E=()=>{t.autoplay.running=!0,S(),s("autoplayStart")},I=()=>{t.autoplay.running=!1,clearTimeout(r),cancelAnimationFrame(o),s("autoplayStop")},C=(W,me)=>{if(t.destroyed||!t.autoplay.running)return;clearTimeout(r),W||(_=!0);const de=()=>{s("autoplayPause"),t.params.autoplay.waitForTransition?t.wrapperEl.addEventListener("transitionend",m):T()};if(t.autoplay.paused=!0,me){y&&(c=t.params.autoplay.delay),y=!1,de();return}c=(c||t.params.autoplay.delay)-(new Date().getTime()-u),!(t.isEnd&&c<0&&!t.params.loop)&&(c<0&&(c=0),de())},T=()=>{t.isEnd&&c<0&&!t.params.loop||t.destroyed||!t.autoplay.running||(u=new Date().getTime(),_?(_=!1,S(c)):S(),t.autoplay.paused=!1,s("autoplayResume"))},A=()=>{if(t.destroyed||!t.autoplay.running)return;const W=yn();W.visibilityState==="hidden"&&(_=!0,C(!0)),W.visibilityState==="visible"&&T()},$=W=>{W.pointerType==="mouse"&&(_=!0,C(!0))},x=W=>{W.pointerType==="mouse"&&t.autoplay.paused&&T()},k=()=>{t.params.autoplay.pauseOnMouseEnter&&(t.el.addEventListener("pointerenter",$),t.el.addEventListener("pointerleave",x))},U=()=>{t.el.removeEventListener("pointerenter",$),t.el.removeEventListener("pointerleave",x)},F=()=>{yn().addEventListener("visibilitychange",A)},we=()=>{yn().removeEventListener("visibilitychange",A)};n("init",()=>{t.params.autoplay.enabled&&(k(),F(),u=new Date().getTime(),E())}),n("destroy",()=>{U(),we(),t.autoplay.running&&I()}),n("beforeTransitionStart",(W,me,de)=>{t.destroyed||!t.autoplay.running||(de||!t.params.autoplay.disableOnInteraction?C(!0,!0):I())}),n("sliderFirstMove",()=>{if(!(t.destroyed||!t.autoplay.running)){if(t.params.autoplay.disableOnInteraction){I();return}h=!0,f=!1,_=!1,g=setTimeout(()=>{_=!0,f=!0,C(!0)},200)}}),n("touchEnd",()=>{if(!(t.destroyed||!t.autoplay.running||!h)){if(clearTimeout(g),clearTimeout(r),t.params.autoplay.disableOnInteraction){f=!1,h=!1;return}f&&t.params.cssMode&&T(),f=!1,h=!1}}),n("slideChange",()=>{t.destroyed||!t.autoplay.running||(y=!0)}),Object.assign(t.autoplay,{start:E,stop:I,pause:C,resume:T})}function ti(t){return typeof t=="object"&&t!==null&&t.constructor&&Object.prototype.toString.call(t).slice(8,-1)==="Object"}function as(t,e){const n=["__proto__","constructor","prototype"];Object.keys(e).filter(s=>n.indexOf(s)<0).forEach(s=>{typeof t[s]>"u"?t[s]=e[s]:ti(e[s])&&ti(t[s])&&Object.keys(e[s]).length>0?e[s].__swiper__?t[s]=e[s]:as(t[s],e[s]):t[s]=e[s]})}function A0(t={}){return t.navigation&&typeof t.navigation.nextEl>"u"&&typeof t.navigation.prevEl>"u"}function k0(t={}){return t.pagination&&typeof t.pagination.el>"u"}function R0(t={}){return t.scrollbar&&typeof t.scrollbar.el>"u"}function O0(t=""){const e=t.split(" ").map(s=>s.trim()).filter(s=>!!s),n=[];return e.forEach(s=>{n.indexOf(s)<0&&n.push(s)}),n.join(" ")}function iN(t=""){return t?t.includes("swiper-wrapper")?t:`swiper-wrapper ${t}`:"swiper-wrapper"}const D0=["modules","init","_direction","oneWayMovement","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopedSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideNextClass","slidePrevClass","wrapperClass","lazyPreloaderClass","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control","injectStyles","injectStylesUrls"];function Am(t={},e=!0){const n={on:{}},s={},i={};as(n,no.defaults),as(n,no.extendedDefaults),n._emitClasses=!0,n.init=!1;const r={},o=D0.map(l=>l.replace(/_/,"")),a=Object.assign({},t);return Object.keys(a).forEach(l=>{typeof t[l]>"u"||(o.indexOf(l)>=0?ti(t[l])?(n[l]={},i[l]={},as(n[l],t[l]),as(i[l],t[l])):(n[l]=t[l],i[l]=t[l]):l.search(/on[A-Z]/)===0&&typeof t[l]=="function"?e?s[`${l[2].toLowerCase()}${l.substr(3)}`]=t[l]:n.on[`${l[2].toLowerCase()}${l.substr(3)}`]=t[l]:r[l]=t[l])}),["navigation","pagination","scrollbar"].forEach(l=>{n[l]===!0&&(n[l]={}),n[l]===!1&&delete n[l]}),{params:n,passedParams:i,rest:r,events:s}}function rN({el:t,nextEl:e,prevEl:n,paginationEl:s,scrollbarEl:i,swiper:r},o){A0(o)&&e&&n&&(r.params.navigation.nextEl=e,r.originalParams.navigation.nextEl=e,r.params.navigation.prevEl=n,r.originalParams.navigation.prevEl=n),k0(o)&&s&&(r.params.pagination.el=s,r.originalParams.pagination.el=s),R0(o)&&i&&(r.params.scrollbar.el=i,r.originalParams.scrollbar.el=i),r.init(t)}function oN(t,e,n,s,i){const r=[];if(!e)return r;const o=l=>{r.indexOf(l)<0&&r.push(l)};if(n&&s){const l=s.map(i),c=n.map(i);l.join("")!==c.join("")&&o("children"),s.length!==n.length&&o("children")}return D0.filter(l=>l[0]==="_").map(l=>l.replace(/_/,"")).forEach(l=>{if(l in t&&l in e)if(ti(t[l])&&ti(e[l])){const c=Object.keys(t[l]),u=Object.keys(e[l]);c.length!==u.length?o(l):(c.forEach(d=>{t[l][d]!==e[l][d]&&o(l)}),u.forEach(d=>{t[l][d]!==e[l][d]&&o(l)}))}else t[l]!==e[l]&&o(l)}),r}function Fc(t,e,n){t===void 0&&(t={});const s=[],i={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]},r=(o,a)=>{Array.isArray(o)&&o.forEach(l=>{const c=typeof l.type=="symbol";a==="default"&&(a="container-end"),c&&l.children?r(l.children,"default"):l.type&&(l.type.name==="SwiperSlide"||l.type.name==="AsyncComponentWrapper")?s.push(l):i[a]&&i[a].push(l)})};return Object.keys(t).forEach(o=>{if(typeof t[o]!="function")return;const a=t[o]();r(a,o)}),n.value=e.value,e.value=s,{slides:s,slots:i}}function aN({swiper:t,slides:e,passedParams:n,changedParams:s,nextEl:i,prevEl:r,scrollbarEl:o,paginationEl:a}){const l=s.filter(T=>T!=="children"&&T!=="direction"&&T!=="wrapperClass"),{params:c,pagination:u,navigation:d,scrollbar:h,virtual:f,thumbs:g}=t;let y,_,m,p,v,S,E,I;s.includes("thumbs")&&n.thumbs&&n.thumbs.swiper&&c.thumbs&&!c.thumbs.swiper&&(y=!0),s.includes("controller")&&n.controller&&n.controller.control&&c.controller&&!c.controller.control&&(_=!0),s.includes("pagination")&&n.pagination&&(n.pagination.el||a)&&(c.pagination||c.pagination===!1)&&u&&!u.el&&(m=!0),s.includes("scrollbar")&&n.scrollbar&&(n.scrollbar.el||o)&&(c.scrollbar||c.scrollbar===!1)&&h&&!h.el&&(p=!0),s.includes("navigation")&&n.navigation&&(n.navigation.prevEl||r)&&(n.navigation.nextEl||i)&&(c.navigation||c.navigation===!1)&&d&&!d.prevEl&&!d.nextEl&&(v=!0);const C=T=>{t[T]&&(t[T].destroy(),T==="navigation"?(t.isElement&&(t[T].prevEl.remove(),t[T].nextEl.remove()),c[T].prevEl=void 0,c[T].nextEl=void 0,t[T].prevEl=void 0,t[T].nextEl=void 0):(t.isElement&&t[T].el.remove(),c[T].el=void 0,t[T].el=void 0))};s.includes("loop")&&t.isElement&&(c.loop&&!n.loop?S=!0:!c.loop&&n.loop?E=!0:I=!0),l.forEach(T=>{if(ti(c[T])&&ti(n[T]))as(c[T],n[T]);else{const A=n[T];(A===!0||A===!1)&&(T==="navigation"||T==="pagination"||T==="scrollbar")?A===!1&&C(T):c[T]=n[T]}}),l.includes("controller")&&!_&&t.controller&&t.controller.control&&c.controller&&c.controller.control&&(t.controller.control=c.controller.control),s.includes("children")&&e&&f&&c.virtual.enabled&&(f.slides=e,f.update(!0)),s.includes("children")&&e&&c.loop&&(I=!0),y&&g.init()&&g.update(!0),_&&(t.controller.control=c.controller.control),m&&(t.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-pagination"),t.el.shadowEl.appendChild(a)),a&&(c.pagination.el=a),u.init(),u.render(),u.update()),p&&(t.isElement&&(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-scrollbar"),t.el.shadowEl.appendChild(o)),o&&(c.scrollbar.el=o),h.init(),h.updateSize(),h.setTranslate()),v&&(t.isElement&&((!i||typeof i=="string")&&(i=document.createElement("div"),i.classList.add("swiper-button-next"),t.el.shadowEl.appendChild(i)),(!r||typeof r=="string")&&(r=document.createElement("div"),r.classList.add("swiper-button-prev"),t.el.shadowEl.appendChild(r))),i&&(c.navigation.nextEl=i),r&&(c.navigation.prevEl=r),d.init(),d.update()),s.includes("allowSlideNext")&&(t.allowSlideNext=n.allowSlideNext),s.includes("allowSlidePrev")&&(t.allowSlidePrev=n.allowSlidePrev),s.includes("direction")&&t.changeDirection(n.direction,!1),(S||I)&&t.loopDestroy(),(E||I)&&t.loopCreate(),t.update()}function lN(t,e,n){if(!n)return null;const s=u=>{let d=u;return u<0?d=e.length+u:d>=e.length&&(d=d-e.length),d},i=t.value.isHorizontal()?{[t.value.rtlTranslate?"right":"left"]:`${n.offset}px`}:{top:`${n.offset}px`},{from:r,to:o}=n,a=t.value.params.loop?-e.length:0,l=t.value.params.loop?e.length*2:e.length,c=[];for(let u=a;u<l;u+=1)u>=r&&u<=o&&c.push(e[s(u)]);return c.map(u=>(u.props||(u.props={}),u.props.style||(u.props.style={}),u.props.swiperRef=t,u.props.style=i,ft(u.type,{...u.props},u.children)))}const cN=t=>{!t||t.destroyed||!t.params.virtual||t.params.virtual&&!t.params.virtual.enabled||(t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.parallax&&t.params.parallax&&t.params.parallax.enabled&&t.parallax.setTranslate())},uN={name:"Swiper",props:{tag:{type:String,default:"div"},wrapperTag:{type:String,default:"div"},modules:{type:Array,default:void 0},init:{type:Boolean,default:void 0},direction:{type:String,default:void 0},oneWayMovement:{type:Boolean,default:void 0},touchEventsTarget:{type:String,default:void 0},initialSlide:{type:Number,default:void 0},speed:{type:Number,default:void 0},cssMode:{type:Boolean,default:void 0},updateOnWindowResize:{type:Boolean,default:void 0},resizeObserver:{type:Boolean,default:void 0},nested:{type:Boolean,default:void 0},focusableElements:{type:String,default:void 0},width:{type:Number,default:void 0},height:{type:Number,default:void 0},preventInteractionOnTransition:{type:Boolean,default:void 0},userAgent:{type:String,default:void 0},url:{type:String,default:void 0},edgeSwipeDetection:{type:[Boolean,String],default:void 0},edgeSwipeThreshold:{type:Number,default:void 0},autoHeight:{type:Boolean,default:void 0},setWrapperSize:{type:Boolean,default:void 0},virtualTranslate:{type:Boolean,default:void 0},effect:{type:String,default:void 0},breakpoints:{type:Object,default:void 0},spaceBetween:{type:[Number,String],default:void 0},slidesPerView:{type:[Number,String],default:void 0},maxBackfaceHiddenSlides:{type:Number,default:void 0},slidesPerGroup:{type:Number,default:void 0},slidesPerGroupSkip:{type:Number,default:void 0},slidesPerGroupAuto:{type:Boolean,default:void 0},centeredSlides:{type:Boolean,default:void 0},centeredSlidesBounds:{type:Boolean,default:void 0},slidesOffsetBefore:{type:Number,default:void 0},slidesOffsetAfter:{type:Number,default:void 0},normalizeSlideIndex:{type:Boolean,default:void 0},centerInsufficientSlides:{type:Boolean,default:void 0},watchOverflow:{type:Boolean,default:void 0},roundLengths:{type:Boolean,default:void 0},touchRatio:{type:Number,default:void 0},touchAngle:{type:Number,default:void 0},simulateTouch:{type:Boolean,default:void 0},shortSwipes:{type:Boolean,default:void 0},longSwipes:{type:Boolean,default:void 0},longSwipesRatio:{type:Number,default:void 0},longSwipesMs:{type:Number,default:void 0},followFinger:{type:Boolean,default:void 0},allowTouchMove:{type:Boolean,default:void 0},threshold:{type:Number,default:void 0},touchMoveStopPropagation:{type:Boolean,default:void 0},touchStartPreventDefault:{type:Boolean,default:void 0},touchStartForcePreventDefault:{type:Boolean,default:void 0},touchReleaseOnEdges:{type:Boolean,default:void 0},uniqueNavElements:{type:Boolean,default:void 0},resistance:{type:Boolean,default:void 0},resistanceRatio:{type:Number,default:void 0},watchSlidesProgress:{type:Boolean,default:void 0},grabCursor:{type:Boolean,default:void 0},preventClicks:{type:Boolean,default:void 0},preventClicksPropagation:{type:Boolean,default:void 0},slideToClickedSlide:{type:Boolean,default:void 0},loop:{type:Boolean,default:void 0},loopedSlides:{type:Number,default:void 0},loopPreventsSliding:{type:Boolean,default:void 0},rewind:{type:Boolean,default:void 0},allowSlidePrev:{type:Boolean,default:void 0},allowSlideNext:{type:Boolean,default:void 0},swipeHandler:{type:Boolean,default:void 0},noSwiping:{type:Boolean,default:void 0},noSwipingClass:{type:String,default:void 0},noSwipingSelector:{type:String,default:void 0},passiveListeners:{type:Boolean,default:void 0},containerModifierClass:{type:String,default:void 0},slideClass:{type:String,default:void 0},slideActiveClass:{type:String,default:void 0},slideVisibleClass:{type:String,default:void 0},slideNextClass:{type:String,default:void 0},slidePrevClass:{type:String,default:void 0},wrapperClass:{type:String,default:void 0},lazyPreloaderClass:{type:String,default:void 0},runCallbacksOnInit:{type:Boolean,default:void 0},observer:{type:Boolean,default:void 0},observeParents:{type:Boolean,default:void 0},observeSlideChildren:{type:Boolean,default:void 0},a11y:{type:[Boolean,Object],default:void 0},autoplay:{type:[Boolean,Object],default:void 0},controller:{type:Object,default:void 0},coverflowEffect:{type:Object,default:void 0},cubeEffect:{type:Object,default:void 0},fadeEffect:{type:Object,default:void 0},flipEffect:{type:Object,default:void 0},creativeEffect:{type:Object,default:void 0},cardsEffect:{type:Object,default:void 0},hashNavigation:{type:[Boolean,Object],default:void 0},history:{type:[Boolean,Object],default:void 0},keyboard:{type:[Boolean,Object],default:void 0},mousewheel:{type:[Boolean,Object],default:void 0},navigation:{type:[Boolean,Object],default:void 0},pagination:{type:[Boolean,Object],default:void 0},parallax:{type:[Boolean,Object],default:void 0},scrollbar:{type:[Boolean,Object],default:void 0},thumbs:{type:Object,default:void 0},virtual:{type:[Boolean,Object],default:void 0},zoom:{type:[Boolean,Object],default:void 0},grid:{type:[Object],default:void 0},freeMode:{type:[Boolean,Object],default:void 0},enabled:{type:Boolean,default:void 0}},emits:["_beforeBreakpoint","_containerClasses","_slideClass","_slideClasses","_swiper","_freeModeNoMomentumRelease","activeIndexChange","afterInit","autoplay","autoplayStart","autoplayStop","autoplayPause","autoplayResume","autoplayTimeLeft","beforeDestroy","beforeInit","beforeLoopFix","beforeResize","beforeSlideChangeStart","beforeTransitionStart","breakpoint","changeDirection","click","disable","doubleTap","doubleClick","destroy","enable","fromEdge","hashChange","hashSet","init","keyPress","lock","loopFix","momentumBounce","navigationHide","navigationShow","navigationPrev","navigationNext","observerUpdate","orientationchange","paginationHide","paginationRender","paginationShow","paginationUpdate","progress","reachBeginning","reachEnd","realIndexChange","resize","scroll","scrollbarDragEnd","scrollbarDragMove","scrollbarDragStart","setTransition","setTranslate","slideChange","slideChangeTransitionEnd","slideChangeTransitionStart","slideNextTransitionEnd","slideNextTransitionStart","slidePrevTransitionEnd","slidePrevTransitionStart","slideResetTransitionStart","slideResetTransitionEnd","sliderMove","sliderFirstMove","slidesLengthChange","slidesGridLengthChange","snapGridLengthChange","snapIndexChange","swiper","tap","toEdge","touchEnd","touchMove","touchMoveOpposite","touchStart","transitionEnd","transitionStart","unlock","update","virtualUpdate","zoomChange"],setup(t,e){let{slots:n,emit:s}=e;const{tag:i,wrapperTag:r}=t,o=Ee("swiper"),a=Ee(null),l=Ee(!1),c=Ee(!1),u=Ee(null),d=Ee(null),h=Ee(null),f={value:[]},g={value:[]},y=Ee(null),_=Ee(null),m=Ee(null),p=Ee(null),{params:v,passedParams:S}=Am(t,!1);Fc(n,f,g),h.value=S,g.value=f.value;const E=()=>{Fc(n,f,g),l.value=!0};v.onAny=function(T){for(var A=arguments.length,$=new Array(A>1?A-1:0),x=1;x<A;x++)$[x-1]=arguments[x];s(T,...$)},Object.assign(v.on,{_beforeBreakpoint:E,_containerClasses(T,A){o.value=A}});const I={...v};if(delete I.wrapperClass,d.value=new no(I),d.value.virtual&&d.value.params.virtual.enabled){d.value.virtual.slides=f.value;const T={cache:!1,slides:f.value,renderExternal:A=>{a.value=A},renderExternalUpdate:!1};as(d.value.params.virtual,T),as(d.value.originalParams.virtual,T)}Wi(()=>{!c.value&&d.value&&(d.value.emitSlidesClasses(),c.value=!0);const{passedParams:T}=Am(t,!1),A=oN(T,h.value,f.value,g.value,$=>$.props&&$.props.key);h.value=T,(A.length||l.value)&&d.value&&!d.value.destroyed&&aN({swiper:d.value,slides:f.value,passedParams:T,changedParams:A,nextEl:y.value,prevEl:_.value,scrollbarEl:p.value,paginationEl:m.value}),l.value=!1}),Dn("swiper",d),hn(a,()=>{jt(()=>{cN(d.value)})}),tn(()=>{u.value&&(rN({el:u.value,nextEl:y.value,prevEl:_.value,paginationEl:m.value,scrollbarEl:p.value,swiper:d.value},v),s("swiper",d.value))}),Yi(()=>{d.value&&!d.value.destroyed&&d.value.destroy(!0,!1)});function C(T){return v.virtual?lN(d,T,a.value):(T.forEach((A,$)=>{A.props||(A.props={}),A.props.swiperRef=d,A.props.swiperSlideIndex=$}),T)}return()=>{const{slides:T,slots:A}=Fc(n,f,g);return ft(i,{ref:u,class:O0(o.value)},[A["container-start"],ft(r,{class:iN(v.wrapperClass)},[A["wrapper-start"],C(T),A["wrapper-end"]]),A0(t)&&[ft("div",{ref:_,class:"swiper-button-prev"}),ft("div",{ref:y,class:"swiper-button-next"})],R0(t)&&ft("div",{ref:p,class:"swiper-scrollbar"}),k0(t)&&ft("div",{ref:m,class:"swiper-pagination"}),A["container-end"]])}}},dN={name:"SwiperSlide",props:{tag:{type:String,default:"div"},swiperRef:{type:Object,required:!1},swiperSlideIndex:{type:Number,default:void 0,required:!1},zoom:{type:Boolean,default:void 0,required:!1},lazy:{type:Boolean,default:!1,required:!1},virtualIndex:{type:[String,Number],default:void 0}},setup(t,e){let{slots:n}=e,s=!1;const{swiperRef:i}=t,r=Ee(null),o=Ee("swiper-slide"),a=Ee(!1);function l(d,h,f){h===r.value&&(o.value=f)}tn(()=>{!i||!i.value||(i.value.on("_slideClass",l),s=!0)}),hd(()=>{s||!i||!i.value||(i.value.on("_slideClass",l),s=!0)}),Wi(()=>{!r.value||!i||!i.value||(typeof t.swiperSlideIndex<"u"&&(r.value.swiperSlideIndex=t.swiperSlideIndex),i.value.destroyed&&o.value!=="swiper-slide"&&(o.value="swiper-slide"))}),Yi(()=>{!i||!i.value||i.value.off("_slideClass",l)});const c=Ae(()=>({isActive:o.value.indexOf("swiper-slide-active")>=0,isVisible:o.value.indexOf("swiper-slide-visible")>=0,isPrev:o.value.indexOf("swiper-slide-prev")>=0,isNext:o.value.indexOf("swiper-slide-next")>=0}));Dn("swiperSlide",c);const u=()=>{a.value=!0};return()=>ft(t.tag,{class:O0(`${o.value}`),ref:r,"data-swiper-slide-index":typeof t.virtualIndex>"u"&&i&&i.value&&i.value.params.loop?t.swiperSlideIndex:t.virtualIndex,onLoadCapture:u},t.zoom?ft("div",{class:"swiper-zoom-container","data-swiper-zoom":typeof t.zoom=="number"?t.zoom:void 0},[n.default&&n.default(c.value),t.lazy&&!a.value&&ft("div",{class:"swiper-lazy-preloader"})]):[n.default&&n.default(c.value),t.lazy&&!a.value&&ft("div",{class:"swiper-lazy-preloader"})])}};const hN="/assets/sale-67b962ac.jpg";const fN={components:{GameList:sr,SearchComponent:NM,Swiper:uN,SwiperSlide:dN,SkeletonLoading:h0},data(){return{store:_n()}},setup(){return{modules:[nN,sN]}},computed:{gameData:function(){return this.store.HomeState}},methods:{handleSelectGame(t){this.$router.push({path:`/game/${t.id}`,replace:!0})}},mounted(){var t,e;(t=document.querySelector(".nav"))==null||t.classList.add("shadow"),(e=document.querySelector(".nav"))==null||e.classList.remove("bg-gradient")}},pN={class:"w-full h-full"},mN={class:"flex items-center justify-center flex-col lg:justify-start lg:flex-row"},gN={class:"swiper-hero cursor-pointer w-full h-[200px] md:h-[350px] lg:w-[670px] lg:h-[350px] my-3 lg:mr-3 rounded-lg overflow-hidden"},yN=["src"],vN={key:0},bN=z("img",{src:hN},null,-1),wN=[bN],_N={class:"home justify-center lg:justify-start mb-16 lg:m-0"};function TN(t,e,n,s,i,r){const o=ht("search-component"),a=ht("swiper-slide"),l=ht("swiper"),c=ht("SkeletonLoading"),u=ht("GameList");return ie(),pe("div",pN,[se(o),z("div",mN,[z("div",gN,[Object.keys(r.gameData).length>0?(ie(),Zt(l,{key:0,"slides-per-view":1,modules:s.modules,pagination:!0,loop:!0,autoplay:{delay:2500,disableOnInteraction:!1}},{default:Me(()=>[(ie(!0),pe(Ue,null,Qi(r.gameData.slice(0,3),d=>(ie(),Zt(a,{key:d.id,onClick:()=>r.handleSelectGame(d)},{default:Me(()=>[z("figure",null,[z("img",{src:d.imageBackground},null,8,yN)])]),_:2},1032,["onClick"]))),128))]),_:1},8,["modules"])):(ie(),Zt(c,{key:1,height:"100%",width:"100%",borderRadius:"10px",times:"1"}))]),z("div",{class:"w-full h-[200px] md:h-[350px] lg:w-[480px] lg:h-[350px] hover:ring ring-orange-400 rounded-lg overflow-hidden cursor-pointer",onClick:e[0]||(e[0]=()=>t.$router.push({path:"/search/sale",replace:!0}))},[Object.keys(r.gameData).length>0?(ie(),pe("figure",vN,wN)):(ie(),Zt(c,{key:1,height:"100%",width:"100%",borderRadius:"10px",times:"1"}))])]),z("div",_N,[se(u,{gameList:r.gameData},null,8,["gameList"])])])}const SN=Lo(fN,[["render",TN]]);async function EN(t,e){const s=await(await fetch("https://api.stripe.com/v1/checkout/sessions",{method:"POST",headers:{Authorization:"Bearer sk_test_51Mf0GxB2S7WCM7TJ67zQHgN9y7Oh6WiY5TaCuZua1Jp9c47Bs2E9E0AGCf5XFfbiD28lEIBqvL8tlPYs3Tz1d5kU00pwgVEBtf","Content-type":"application/x-www-form-urlencoded"},body:P0({payment_method_types:["card"],mode:"payment",success_url:"http://localhost:8081/api/success?id={CHECKOUT_SESSION_ID}",cancel_url:"http://localhost:8081/api/cancel?id={CHECKOUT_SESSION_ID}",line_items:t})})).json(),i=s.url.split("/").pop().split("#")[0];await IN(e,i),window.location.href=s.url}async function IN(t,e){var n;await u0(Zr(zs,"checkouts",e),{id:e,uid:(n=Lh.currentUser)==null?void 0:n.uid,items:t,payment:null})}function P0(t,e=""){const n=Object.prototype.toString.call(t).slice(8,-1).toLowerCase();return Object.keys(t).map(function(s,i){const r=t[s];return n==="array"?s=e+"["+i+"]":n==="object"&&(s=e?e+"["+s+"]":s),typeof r=="object"?P0(r,s):s+"="+encodeURIComponent(r)}).join("&")}const CN={class:"w-full h-full"},xN={key:0,class:"flex flex-col lg:flex-row"},AN={class:"w-[70%] h-fit"},kN={key:1,class:"w-[300px] h-[300px] flex items-center"},RN=z("img",{src:"https://media.tenor.com/CMpNQO7SBWIAAAAC/no-money-donald-duck.gif"},null,-1),ON=[RN],DN={class:"checkout-section rounded-lg w-full lg:w-[25%] h-[80%] shadow p-10 text-white flex flex-col justify-between"},PN={class:"checkout-list w-full relative z-10"},MN={class:"w-[70%]"},LN={class:"w-[25%] text-right"},NN={class:"flex justify-between border-t-2"},FN=z("p",{class:"w-[70%]"},"Total",-1),$N={class:"w-[25%] text-right"},BN={key:1,class:"w-full h-full flex items-center justify-center"},UN=z("h1",{class:"text-3xl text-white"}," Please log in to add items to your basket. ",-1),VN=[UN],jN={__name:"BasketView",setup(t){const e=_n(),n=Ae(()=>e.userProfile.basket),s=()=>{const i=n.value.map(o=>({price:o.priceId,quantity:1})),r=n.value.map(o=>o.id);EN(i,r)};return(i,r)=>(ie(),pe("div",CN,[Oe(n)?(ie(),pe("div",xN,[z("div",AN,[Oe(n).length>0?(ie(),Zt(sr,{key:0,gameList:Oe(n)},null,8,["gameList"])):(ie(),pe("div",kN,ON))]),z("div",DN,[z("div",PN,[(ie(!0),pe(Ue,null,Qi(Oe(n),o=>(ie(),pe("div",{class:"flex items-end justify-between my-3",key:o.id},[z("p",MN,dt(o.title),1),z("p",LN,dt(o.price),1)]))),128)),z("div",NN,[FN,z("p",$N," $"+dt(Oe(n).reduce((o,a)=>o+Number(a.price.substring(1)),0).toFixed(2)),1)])]),z("div",{class:"col s12 place-order-button-block"},[z("button",{class:"btn-shadow w-full p-3 mt-5",onClick:s}," Order ")])])])):(ie(),pe("div",BN,VN))]))}},zN={class:"w-full h-full"},qN={key:0},HN={key:1},GN=z("img",{src:"https://media.tenor.com/RxbXY3mB_KIAAAAi/winnie-the.gif",class:"w-[300px] h-[300px]"},null,-1),KN=[GN],WN={key:1,class:"w-full h-full flex items-center justify-center"},YN=z("h1",{class:"text-3xl text-white"},"Please log in to view your library.",-1),QN=[YN],XN={__name:"LibraryView",setup(t){const e=_n(),n=Ae(()=>e.userProfile.library);return(s,i)=>(ie(),pe("div",zN,[Oe(n)?(ie(),pe("div",qN,[Oe(n).length>0?(ie(),Zt(sr,{key:0,gameList:Oe(n)},null,8,["gameList"])):(ie(),pe("div",HN,KN))])):(ie(),pe("div",WN,QN))]))}},JN={class:"w-full h-full"},ZN={class:"text-3xl text-white"},eF={__name:"SearchView",setup(t){var e="";const n=Cy(),s=_n(),i=Ae(()=>s.getSearch(e));return hn(n,()=>{e=n.params.id},{immediate:!0,deep:!0}),(r,o)=>(ie(),pe("div",JN,[z("h1",ZN,"Search results for "+dt(Oe(e))+":",1),se(sr,{gameList:Oe(i)},null,8,["gameList"])]))}},tF={class:"w-full h-full"},nF={class:"text-3xl text-white"},sF={__name:"GenreView",setup(t){const e=Cy();var n="";const s=_n(),i=Ae(()=>s.getGenre(n));return hn(e,r=>{n=r.params.id},{immediate:!0,deep:!0}),(r,o)=>(ie(),pe("div",tF,[z("h1",nF,dt(Oe(n)),1),se(sr,{gameList:Oe(i)},null,8,["gameList"])]))}};const iF={data(){return{store:_n(),Id:void 0,basketStore:{}}},computed:{gameData:function(){const t=this.store.HomeState.find(e=>e.id===this.Id);return t||[]},inCart:function(){return this.store.userProfile.basket?this.store.userProfile.basket.some(t=>t.id===this.Id):void 0},inLibrary:function(){return this.store.userProfile.library&&this.store.userProfile.library.some(t=>t.id===this.Id)}},watch:{"$route.params.id":{handler:function(t){this.Id=t},deep:!0,immediate:!0}},mounted(){var t,e;this.basketStore=ZS(this.store),(t=document.querySelector(".nav"))==null||t.classList.remove("shadow"),(e=document.querySelector(".nav"))==null||e.classList.add("bg-glass")},methods:{AddToCart:function(){this.store.addTobasket(this.gameData)},RemoveFromCart:function(){this.store.removefromBasket(this.gameData)}}},rF={class:"w-full h-full"},oF={key:0,class:"game w-full h-full flex items-center"},aF=["src"],lF={class:"w-full h-[60%] relative z-10 lg:flex items-end mb-20"},cF={class:"w-[150px] lg:w-[300px] lg:h-[400px]"},uF=["src"],dF={class:"game-details lg:ml-5 mt-5 lg:mt-0 text-white flex flex-col w-full lg:w-[70%]"},hF={class:"flex flex-col lg:w-[70%]"},fF={class:"text-4xl"},pF={class:"text-1xl my-5"},mF={class:"flex my-1"},gF=z("p",null,"Developers:",-1),yF={class:"ml-2"},vF={class:"genre flex my-3"},bF=z("p",null,"Genre:",-1),wF={class:"ml-2"},_F={key:0},TF={key:0,class:"flex justify-between lg:w-[70%] my-3"},SF={key:0,class:"flex items-center"},EF={class:"ml-3"},IF={key:1},CF=z("h1",null,"Price: TBA",-1),xF=[CF],AF={key:2,class:"flex justify-between lg:w-[70%] my-3"},kF=z("div",{class:"flex items-center"},[z("p",{class:"p-2"},"Purchased")],-1),RF=[kF];function OF(t,e,n,s,i,r){const o=ht("router-link");return ie(),pe("div",rF,[r.gameData?(ie(),pe("div",oF,[z("img",{class:"background invisible lg:visible",src:r.gameData.imageBackground},null,8,aF),z("div",lF,[z("figure",cF,[z("img",{src:r.gameData.imageCover},null,8,uF)]),z("div",dF,[z("div",hF,[z("div",fF,dt(r.gameData.title),1),z("div",pF,dt(r.gameData.description),1)]),z("div",mF,[gF,z("p",yF,dt(r.gameData.developers),1)]),z("div",vF,[bF,z("div",wF,[(ie(!0),pe(Ue,null,Qi(r.gameData.genres,(a,l)=>(ie(),Zt(o,{class:"ml-1",key:l,to:`/search/genre/${a}`},{default:Me(()=>[Nt(dt(a),1),l<r.gameData.genres.length-1?(ie(),pe("span",_F,",")):ns("",!0)]),_:2},1032,["to"]))),128))])]),i.store.logged?(ie(),pe("div",TF,[r.gameData.price!=="TBA"&&!r.inLibrary?(ie(),pe("div",SF,[r.inCart?(ie(),pe("button",{key:0,class:"bg-gradient p-2 rounded ring-2",onClick:e[0]||(e[0]=()=>r.RemoveFromCart())}," Remove from Cart ")):(ie(),pe("button",{key:1,class:"bg-gradient p-2 rounded ring-2",onClick:e[1]||(e[1]=()=>r.AddToCart())}," Add To Cart ")),z("p",EF,dt(r.gameData.price),1)])):r.inLibrary?ns("",!0):(ie(),pe("div",IF,xF)),r.inLibrary?(ie(),pe("div",AF,RF)):ns("",!0),z("p",null,dt(r.gameData.released),1)])):ns("",!0)])])])):ns("",!0)])}const DF=Lo(iF,[["render",OF]]),PF=z("h1",{class:"text-3xl text-white"},"Games on sale",-1),MF={__name:"SaleView",setup(t){const n=_n().getSale();return(s,i)=>(ie(),pe("div",null,[PF,se(sr,{gameList:Oe(n)},null,8,["gameList"])]))}},LF=eI({history:yE("/"),routes:[{path:"/",name:"home",component:SN},{path:"/basket",name:"basket",component:jN},{path:"/library",name:"library",component:XN},{path:"/game/:id",name:"Game",component:DF},{path:"/search/",name:"search",children:[{path:"sale",name:"sale",component:MF},{path:":id",name:"search",component:eF},{path:"genre/:id",name:"genre",component:sF}]}]});const Vh=cy(LP);Vh.use(KS());Vh.use(LF);Vh.mount("#app");
