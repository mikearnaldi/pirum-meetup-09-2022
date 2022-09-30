(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(r){if(r.ep)return;r.ep=!0;const l=o(r);fetch(r.href,l)}})();function Qs(t,n){const o=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)o[s[r]]=!0;return n?r=>!!o[r.toLowerCase()]:r=>!!o[r]}const ad="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",cd=Qs(ad);function ip(t){return!!t||t===""}function Ze(t){if(se(t)){const n={};for(let o=0;o<t.length;o++){const s=t[o],r=He(s)?ud(s):Ze(s);if(r)for(const l in r)n[l]=r[l]}return n}else{if(He(t))return t;if(Oe(t))return t}}const id=/;(?![^(]*\))/g,pd=/:(.+)/;function ud(t){const n={};return t.split(id).forEach(o=>{if(o){const s=o.split(pd);s.length>1&&(n[s[0].trim()]=s[1].trim())}}),n}function Le(t){let n="";if(He(t))n=t;else if(se(t))for(let o=0;o<t.length;o++){const s=Le(t[o]);s&&(n+=s+" ")}else if(Oe(t))for(const o in t)t[o]&&(n+=o+" ");return n.trim()}function ge(t){if(!t)return null;let{class:n,style:o}=t;return n&&!He(n)&&(t.class=Le(n)),o&&(t.style=Ze(o)),t}const fd="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",dd=Qs(fd),On=t=>He(t)?t:t==null?"":se(t)||Oe(t)&&(t.toString===dp||!ce(t.toString))?JSON.stringify(t,pp,2):String(t),pp=(t,n)=>n&&n.__v_isRef?pp(t,n.value):Qn(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((o,[s,r])=>(o[`${s} =>`]=r,o),{})}:up(n)?{[`Set(${n.size})`]:[...n.values()]}:Oe(n)&&!se(n)&&!yp(n)?String(n):n,Se={},Zn=[],xt=()=>{},yd=()=>!1,md=/^on[^a-z]/,Xs=t=>md.test(t),Kl=t=>t.startsWith("onUpdate:"),rt=Object.assign,Yl=(t,n)=>{const o=t.indexOf(n);o>-1&&t.splice(o,1)},hd=Object.prototype.hasOwnProperty,ve=(t,n)=>hd.call(t,n),se=Array.isArray,Qn=t=>er(t)==="[object Map]",up=t=>er(t)==="[object Set]",ce=t=>typeof t=="function",He=t=>typeof t=="string",Gl=t=>typeof t=="symbol",Oe=t=>t!==null&&typeof t=="object",fp=t=>Oe(t)&&ce(t.then)&&ce(t.catch),dp=Object.prototype.toString,er=t=>dp.call(t),gd=t=>er(t).slice(8,-1),yp=t=>er(t)==="[object Object]",Zl=t=>He(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ts=Qs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),tr=t=>{const n=Object.create(null);return o=>n[o]||(n[o]=t(o))},vd=/-(\w)/g,Nt=tr(t=>t.replace(vd,(n,o)=>o?o.toUpperCase():"")),Ed=/\B([A-Z])/g,Ln=tr(t=>t.replace(Ed,"-$1").toLowerCase()),nr=tr(t=>t.charAt(0).toUpperCase()+t.slice(1)),_r=tr(t=>t?`on${nr(t)}`:""),zo=(t,n)=>!Object.is(t,n),Xn=(t,n)=>{for(let o=0;o<t.length;o++)t[o](n)},Fs=(t,n,o)=>{Object.defineProperty(t,n,{configurable:!0,enumerable:!1,value:o})},el=t=>{const n=parseFloat(t);return isNaN(n)?t:n};let Za;const Ad=()=>Za||(Za=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let ut;class mp{constructor(n=!1){this.active=!0,this.effects=[],this.cleanups=[],!n&&ut&&(this.parent=ut,this.index=(ut.scopes||(ut.scopes=[])).push(this)-1)}run(n){if(this.active){const o=ut;try{return ut=this,n()}finally{ut=o}}}on(){ut=this}off(){ut=this.parent}stop(n){if(this.active){let o,s;for(o=0,s=this.effects.length;o<s;o++)this.effects[o].stop();for(o=0,s=this.cleanups.length;o<s;o++)this.cleanups[o]();if(this.scopes)for(o=0,s=this.scopes.length;o<s;o++)this.scopes[o].stop(!0);if(this.parent&&!n){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function Bd(t){return new mp(t)}function Dd(t,n=ut){n&&n.active&&n.effects.push(t)}function hp(){return ut}function gp(t){ut&&ut.cleanups.push(t)}const Ql=t=>{const n=new Set(t);return n.w=0,n.n=0,n},vp=t=>(t.w&un)>0,Ep=t=>(t.n&un)>0,_d=({deps:t})=>{if(t.length)for(let n=0;n<t.length;n++)t[n].w|=un},Cd=t=>{const{deps:n}=t;if(n.length){let o=0;for(let s=0;s<n.length;s++){const r=n[s];vp(r)&&!Ep(r)?r.delete(t):n[o++]=r,r.w&=~un,r.n&=~un}n.length=o}},tl=new WeakMap;let Po=0,un=1;const nl=30;let Ct;const Sn=Symbol(""),ol=Symbol("");class Xl{constructor(n,o=null,s){this.fn=n,this.scheduler=o,this.active=!0,this.deps=[],this.parent=void 0,Dd(this,s)}run(){if(!this.active)return this.fn();let n=Ct,o=rn;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=Ct,Ct=this,rn=!0,un=1<<++Po,Po<=nl?_d(this):Qa(this),this.fn()}finally{Po<=nl&&Cd(this),un=1<<--Po,Ct=this.parent,rn=o,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ct===this?this.deferStop=!0:this.active&&(Qa(this),this.onStop&&this.onStop(),this.active=!1)}}function Qa(t){const{deps:n}=t;if(n.length){for(let o=0;o<n.length;o++)n[o].delete(t);n.length=0}}let rn=!0;const Ap=[];function ho(){Ap.push(rn),rn=!1}function go(){const t=Ap.pop();rn=t===void 0?!0:t}function ht(t,n,o){if(rn&&Ct){let s=tl.get(t);s||tl.set(t,s=new Map);let r=s.get(o);r||s.set(o,r=Ql()),Bp(r)}}function Bp(t,n){let o=!1;Po<=nl?Ep(t)||(t.n|=un,o=!vp(t)):o=!t.has(Ct),o&&(t.add(Ct),Ct.deps.push(t))}function Kt(t,n,o,s,r,l){const a=tl.get(t);if(!a)return;let c=[];if(n==="clear")c=[...a.values()];else if(o==="length"&&se(t))a.forEach((i,p)=>{(p==="length"||p>=s)&&c.push(i)});else switch(o!==void 0&&c.push(a.get(o)),n){case"add":se(t)?Zl(o)&&c.push(a.get("length")):(c.push(a.get(Sn)),Qn(t)&&c.push(a.get(ol)));break;case"delete":se(t)||(c.push(a.get(Sn)),Qn(t)&&c.push(a.get(ol)));break;case"set":Qn(t)&&c.push(a.get(Sn));break}if(c.length===1)c[0]&&sl(c[0]);else{const i=[];for(const p of c)p&&i.push(...p);sl(Ql(i))}}function sl(t,n){const o=se(t)?t:[...t];for(const s of o)s.computed&&Xa(s);for(const s of o)s.computed||Xa(s)}function Xa(t,n){(t!==Ct||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const bd=Qs("__proto__,__v_isRef,__isVue"),Dp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Gl)),wd=ea(),xd=ea(!1,!0),Td=ea(!0),ec=Sd();function Sd(){const t={};return["includes","indexOf","lastIndexOf"].forEach(n=>{t[n]=function(...o){const s=Be(this);for(let l=0,a=this.length;l<a;l++)ht(s,"get",l+"");const r=s[n](...o);return r===-1||r===!1?s[n](...o.map(Be)):r}}),["push","pop","shift","unshift","splice"].forEach(n=>{t[n]=function(...o){ho();const s=Be(this)[n].apply(this,o);return go(),s}}),t}function ea(t=!1,n=!1){return function(s,r,l){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return n;if(r==="__v_raw"&&l===(t?n?Vd:xp:n?wp:bp).get(s))return s;const a=se(s);if(!t&&a&&ve(ec,r))return Reflect.get(ec,r,l);const c=Reflect.get(s,r,l);return(Gl(r)?Dp.has(r):bd(r))||(t||ht(s,"get",r),n)?c:_e(c)?a&&Zl(r)?c:c.value:Oe(c)?t?Yn(c):$e(c):c}}const kd=_p(),Rd=_p(!0);function _p(t=!1){return function(o,s,r,l){let a=o[s];if(ro(a)&&_e(a)&&!_e(r))return!1;if(!t&&(!Ms(r)&&!ro(r)&&(a=Be(a),r=Be(r)),!se(o)&&_e(a)&&!_e(r)))return a.value=r,!0;const c=se(o)&&Zl(s)?Number(s)<o.length:ve(o,s),i=Reflect.set(o,s,r,l);return o===Be(l)&&(c?zo(r,a)&&Kt(o,"set",s,r):Kt(o,"add",s,r)),i}}function Pd(t,n){const o=ve(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&o&&Kt(t,"delete",n,void 0),s}function $d(t,n){const o=Reflect.has(t,n);return(!Gl(n)||!Dp.has(n))&&ht(t,"has",n),o}function Od(t){return ht(t,"iterate",se(t)?"length":Sn),Reflect.ownKeys(t)}const Cp={get:wd,set:kd,deleteProperty:Pd,has:$d,ownKeys:Od},Fd={get:Td,set(t,n){return!0},deleteProperty(t,n){return!0}},Md=rt({},Cp,{get:xd,set:Rd}),ta=t=>t,or=t=>Reflect.getPrototypeOf(t);function hs(t,n,o=!1,s=!1){t=t.__v_raw;const r=Be(t),l=Be(n);o||(n!==l&&ht(r,"get",n),ht(r,"get",l));const{has:a}=or(r),c=s?ta:o?sa:Ko;if(a.call(r,n))return c(t.get(n));if(a.call(r,l))return c(t.get(l));t!==r&&t.get(n)}function gs(t,n=!1){const o=this.__v_raw,s=Be(o),r=Be(t);return n||(t!==r&&ht(s,"has",t),ht(s,"has",r)),t===r?o.has(t):o.has(t)||o.has(r)}function vs(t,n=!1){return t=t.__v_raw,!n&&ht(Be(t),"iterate",Sn),Reflect.get(t,"size",t)}function tc(t){t=Be(t);const n=Be(this);return or(n).has.call(n,t)||(n.add(t),Kt(n,"add",t,t)),this}function nc(t,n){n=Be(n);const o=Be(this),{has:s,get:r}=or(o);let l=s.call(o,t);l||(t=Be(t),l=s.call(o,t));const a=r.call(o,t);return o.set(t,n),l?zo(n,a)&&Kt(o,"set",t,n):Kt(o,"add",t,n),this}function oc(t){const n=Be(this),{has:o,get:s}=or(n);let r=o.call(n,t);r||(t=Be(t),r=o.call(n,t)),s&&s.call(n,t);const l=n.delete(t);return r&&Kt(n,"delete",t,void 0),l}function sc(){const t=Be(this),n=t.size!==0,o=t.clear();return n&&Kt(t,"clear",void 0,void 0),o}function Es(t,n){return function(s,r){const l=this,a=l.__v_raw,c=Be(a),i=n?ta:t?sa:Ko;return!t&&ht(c,"iterate",Sn),a.forEach((p,u)=>s.call(r,i(p),i(u),l))}}function As(t,n,o){return function(...s){const r=this.__v_raw,l=Be(r),a=Qn(l),c=t==="entries"||t===Symbol.iterator&&a,i=t==="keys"&&a,p=r[t](...s),u=o?ta:n?sa:Ko;return!n&&ht(l,"iterate",i?ol:Sn),{next(){const{value:f,done:d}=p.next();return d?{value:f,done:d}:{value:c?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Xt(t){return function(...n){return t==="delete"?!1:this}}function Ld(){const t={get(l){return hs(this,l)},get size(){return vs(this)},has:gs,add:tc,set:nc,delete:oc,clear:sc,forEach:Es(!1,!1)},n={get(l){return hs(this,l,!1,!0)},get size(){return vs(this)},has:gs,add:tc,set:nc,delete:oc,clear:sc,forEach:Es(!1,!0)},o={get(l){return hs(this,l,!0)},get size(){return vs(this,!0)},has(l){return gs.call(this,l,!0)},add:Xt("add"),set:Xt("set"),delete:Xt("delete"),clear:Xt("clear"),forEach:Es(!0,!1)},s={get(l){return hs(this,l,!0,!0)},get size(){return vs(this,!0)},has(l){return gs.call(this,l,!0)},add:Xt("add"),set:Xt("set"),delete:Xt("delete"),clear:Xt("clear"),forEach:Es(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(l=>{t[l]=As(l,!1,!1),o[l]=As(l,!0,!1),n[l]=As(l,!1,!0),s[l]=As(l,!0,!0)}),[t,o,n,s]}const[Hd,Id,Nd,jd]=Ld();function na(t,n){const o=n?t?jd:Nd:t?Id:Hd;return(s,r,l)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(ve(o,r)&&r in s?o:s,r,l)}const qd={get:na(!1,!1)},Ud={get:na(!1,!0)},Jd={get:na(!0,!1)},bp=new WeakMap,wp=new WeakMap,xp=new WeakMap,Vd=new WeakMap;function Wd(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zd(t){return t.__v_skip||!Object.isExtensible(t)?0:Wd(gd(t))}function $e(t){return ro(t)?t:oa(t,!1,Cp,qd,bp)}function Kd(t){return oa(t,!1,Md,Ud,wp)}function Yn(t){return oa(t,!0,Fd,Jd,xp)}function oa(t,n,o,s,r){if(!Oe(t)||t.__v_raw&&!(n&&t.__v_isReactive))return t;const l=r.get(t);if(l)return l;const a=zd(t);if(a===0)return t;const c=new Proxy(t,a===2?s:o);return r.set(t,c),c}function eo(t){return ro(t)?eo(t.__v_raw):!!(t&&t.__v_isReactive)}function ro(t){return!!(t&&t.__v_isReadonly)}function Ms(t){return!!(t&&t.__v_isShallow)}function Tp(t){return eo(t)||ro(t)}function Be(t){const n=t&&t.__v_raw;return n?Be(n):t}function sr(t){return Fs(t,"__v_skip",!0),t}const Ko=t=>Oe(t)?$e(t):t,sa=t=>Oe(t)?Yn(t):t;function ra(t){rn&&Ct&&(t=Be(t),Bp(t.dep||(t.dep=Ql())))}function la(t,n){t=Be(t),t.dep&&sl(t.dep)}function _e(t){return!!(t&&t.__v_isRef===!0)}function N(t){return Sp(t,!1)}function kt(t){return Sp(t,!0)}function Sp(t,n){return _e(t)?t:new Yd(t,n)}class Yd{constructor(n,o){this.__v_isShallow=o,this.dep=void 0,this.__v_isRef=!0,this._rawValue=o?n:Be(n),this._value=o?n:Ko(n)}get value(){return ra(this),this._value}set value(n){const o=this.__v_isShallow||Ms(n)||ro(n);n=o?n:Be(n),zo(n,this._rawValue)&&(this._rawValue=n,this._value=o?n:Ko(n),la(this))}}function C(t){return _e(t)?t.value:t}const Gd={get:(t,n,o)=>C(Reflect.get(t,n,o)),set:(t,n,o,s)=>{const r=t[n];return _e(r)&&!_e(o)?(r.value=o,!0):Reflect.set(t,n,o,s)}};function kp(t){return eo(t)?t:new Proxy(t,Gd)}class Zd{constructor(n){this.dep=void 0,this.__v_isRef=!0;const{get:o,set:s}=n(()=>ra(this),()=>la(this));this._get=o,this._set=s}get value(){return this._get()}set value(n){this._set(n)}}function Rp(t){return new Zd(t)}function Qd(t){const n=se(t)?new Array(t.length):{};for(const o in t)n[o]=ey(t,o);return n}class Xd{constructor(n,o,s){this._object=n,this._key=o,this._defaultValue=s,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}}function ey(t,n,o){const s=t[n];return _e(s)?s:new Xd(t,n,o)}var Pp;class ty{constructor(n,o,s,r){this._setter=o,this.dep=void 0,this.__v_isRef=!0,this[Pp]=!1,this._dirty=!0,this.effect=new Xl(n,()=>{this._dirty||(this._dirty=!0,la(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const n=Be(this);return ra(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}Pp="__v_isReadonly";function ny(t,n,o=!1){let s,r;const l=ce(t);return l?(s=t,r=xt):(s=t.get,r=t.set),new ty(s,r,l||!r,o)}function ln(t,n,o,s){let r;try{r=s?t(...s):t()}catch(l){rr(l,n,o)}return r}function Tt(t,n,o,s){if(ce(t)){const l=ln(t,n,o,s);return l&&fp(l)&&l.catch(a=>{rr(a,n,o)}),l}const r=[];for(let l=0;l<t.length;l++)r.push(Tt(t[l],n,o,s));return r}function rr(t,n,o,s=!0){const r=n?n.vnode:null;if(n){let l=n.parent;const a=n.proxy,c=o;for(;l;){const p=l.ec;if(p){for(let u=0;u<p.length;u++)if(p[u](t,a,c)===!1)return}l=l.parent}const i=n.appContext.config.errorHandler;if(i){ln(i,null,10,[t,a,c]);return}}oy(t,o,r,s)}function oy(t,n,o,s=!0){console.error(t)}let Yo=!1,rl=!1;const ze=[];let Mt=0;const to=[];let Vt=null,Bn=0;const $p=Promise.resolve();let aa=null;function ot(t){const n=aa||$p;return t?n.then(this?t.bind(this):t):n}function sy(t){let n=Mt+1,o=ze.length;for(;n<o;){const s=n+o>>>1;Go(ze[s])<t?n=s+1:o=s}return n}function ca(t){(!ze.length||!ze.includes(t,Yo&&t.allowRecurse?Mt+1:Mt))&&(t.id==null?ze.push(t):ze.splice(sy(t.id),0,t),Op())}function Op(){!Yo&&!rl&&(rl=!0,aa=$p.then(Mp))}function ry(t){const n=ze.indexOf(t);n>Mt&&ze.splice(n,1)}function ly(t){se(t)?to.push(...t):(!Vt||!Vt.includes(t,t.allowRecurse?Bn+1:Bn))&&to.push(t),Op()}function rc(t,n=Yo?Mt+1:0){for(;n<ze.length;n++){const o=ze[n];o&&o.pre&&(ze.splice(n,1),n--,o())}}function Fp(t){if(to.length){const n=[...new Set(to)];if(to.length=0,Vt){Vt.push(...n);return}for(Vt=n,Vt.sort((o,s)=>Go(o)-Go(s)),Bn=0;Bn<Vt.length;Bn++)Vt[Bn]();Vt=null,Bn=0}}const Go=t=>t.id==null?1/0:t.id,ay=(t,n)=>{const o=Go(t)-Go(n);if(o===0){if(t.pre&&!n.pre)return-1;if(n.pre&&!t.pre)return 1}return o};function Mp(t){rl=!1,Yo=!0,ze.sort(ay);const n=xt;try{for(Mt=0;Mt<ze.length;Mt++){const o=ze[Mt];o&&o.active!==!1&&ln(o,null,14)}}finally{Mt=0,ze.length=0,Fp(),Yo=!1,aa=null,(ze.length||to.length)&&Mp()}}function cy(t,n,...o){if(t.isUnmounted)return;const s=t.vnode.props||Se;let r=o;const l=n.startsWith("update:"),a=l&&n.slice(7);if(a&&a in s){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:d}=s[u]||Se;d&&(r=o.map(y=>y.trim())),f&&(r=o.map(el))}let c,i=s[c=_r(n)]||s[c=_r(Nt(n))];!i&&l&&(i=s[c=_r(Ln(n))]),i&&Tt(i,t,6,r);const p=s[c+"Once"];if(p){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Tt(p,t,6,r)}}function Lp(t,n,o=!1){const s=n.emitsCache,r=s.get(t);if(r!==void 0)return r;const l=t.emits;let a={},c=!1;if(!ce(t)){const i=p=>{const u=Lp(p,n,!0);u&&(c=!0,rt(a,u))};!o&&n.mixins.length&&n.mixins.forEach(i),t.extends&&i(t.extends),t.mixins&&t.mixins.forEach(i)}return!l&&!c?(Oe(t)&&s.set(t,null),null):(se(l)?l.forEach(i=>a[i]=null):rt(a,l),Oe(t)&&s.set(t,a),a)}function lr(t,n){return!t||!Xs(n)?!1:(n=n.slice(2).replace(/Once$/,""),ve(t,n[0].toLowerCase()+n.slice(1))||ve(t,Ln(n))||ve(t,n))}let Ke=null,ar=null;function Ls(t){const n=Ke;return Ke=t,ar=t&&t.type.__scopeId||null,n}function nw(t){ar=t}function ow(){ar=null}function Q(t,n=Ke,o){if(!n||t._n)return t;const s=(...r)=>{s._d&&gc(-1);const l=Ls(n),a=t(...r);return Ls(l),s._d&&gc(1),a};return s._n=!0,s._c=!0,s._d=!0,s}function Cr(t){const{type:n,vnode:o,proxy:s,withProxy:r,props:l,propsOptions:[a],slots:c,attrs:i,emit:p,render:u,renderCache:f,data:d,setupState:y,ctx:m,inheritAttrs:g}=t;let A,B;const D=Ls(t);try{if(o.shapeFlag&4){const _=r||s;A=Ft(u.call(_,_,f,l,y,d,m)),B=i}else{const _=n;A=Ft(_.length>1?_(l,{attrs:i,slots:c,emit:p}):_(l,null)),B=n.props?i:iy(i)}}catch(_){Fo.length=0,rr(_,t,1),A=Y(fn)}let E=A;if(B&&g!==!1){const _=Object.keys(B),{shapeFlag:S}=E;_.length&&S&7&&(a&&_.some(Kl)&&(B=py(B,a)),E=Mn(E,B))}return o.dirs&&(E=Mn(E),E.dirs=E.dirs?E.dirs.concat(o.dirs):o.dirs),o.transition&&(E.transition=o.transition),A=E,Ls(D),A}const iy=t=>{let n;for(const o in t)(o==="class"||o==="style"||Xs(o))&&((n||(n={}))[o]=t[o]);return n},py=(t,n)=>{const o={};for(const s in t)(!Kl(s)||!(s.slice(9)in n))&&(o[s]=t[s]);return o};function uy(t,n,o){const{props:s,children:r,component:l}=t,{props:a,children:c,patchFlag:i}=n,p=l.emitsOptions;if(n.dirs||n.transition)return!0;if(o&&i>=0){if(i&1024)return!0;if(i&16)return s?lc(s,a,p):!!a;if(i&8){const u=n.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(a[d]!==s[d]&&!lr(p,d))return!0}}}else return(r||c)&&(!c||!c.$stable)?!0:s===a?!1:s?a?lc(s,a,p):!0:!!a;return!1}function lc(t,n,o){const s=Object.keys(n);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const l=s[r];if(n[l]!==t[l]&&!lr(o,l))return!0}return!1}function fy({vnode:t,parent:n},o){for(;n&&n.subTree===t;)(t=n.vnode).el=o,n=n.parent}const Hp=t=>t.__isSuspense;function dy(t,n){n&&n.pendingBranch?se(t)?n.effects.push(...t):n.effects.push(t):ly(t)}function dt(t,n){if(Ve){let o=Ve.provides;const s=Ve.parent&&Ve.parent.provides;s===o&&(o=Ve.provides=Object.create(s)),o[t]=n}}function H(t,n,o=!1){const s=Ve||Ke;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return o&&ce(n)?n.call(s.proxy):n}}function vo(t,n){return ia(t,null,n)}const ac={};function ue(t,n,o){return ia(t,n,o)}function ia(t,n,{immediate:o,deep:s,flush:r,onTrack:l,onTrigger:a}=Se){const c=Ve;let i,p=!1,u=!1;if(_e(t)?(i=()=>t.value,p=Ms(t)):eo(t)?(i=()=>t,s=!0):se(t)?(u=!0,p=t.some(B=>eo(B)||Ms(B)),i=()=>t.map(B=>{if(_e(B))return B.value;if(eo(B))return bn(B);if(ce(B))return ln(B,c,2)})):ce(t)?n?i=()=>ln(t,c,2):i=()=>{if(!(c&&c.isUnmounted))return f&&f(),Tt(t,c,3,[d])}:i=xt,n&&s){const B=i;i=()=>bn(B())}let f,d=B=>{f=A.onStop=()=>{ln(B,c,4)}};if(Qo)return d=xt,n?o&&Tt(n,c,3,[i(),u?[]:void 0,d]):i(),xt;let y=u?[]:ac;const m=()=>{if(!!A.active)if(n){const B=A.run();(s||p||(u?B.some((D,E)=>zo(D,y[E])):zo(B,y)))&&(f&&f(),Tt(n,c,3,[B,y===ac?void 0:y,d]),y=B)}else A.run()};m.allowRecurse=!!n;let g;r==="sync"?g=m:r==="post"?g=()=>We(m,c&&c.suspense):(m.pre=!0,c&&(m.id=c.uid),g=()=>ca(m));const A=new Xl(i,g);return n?o?m():y=A.run():r==="post"?We(A.run.bind(A),c&&c.suspense):A.run(),()=>{A.stop(),c&&c.scope&&Yl(c.scope.effects,A)}}function yy(t,n,o){const s=this.proxy,r=He(t)?t.includes(".")?Ip(s,t):()=>s[t]:t.bind(s,s);let l;ce(n)?l=n:(l=n.handler,o=n);const a=Ve;ao(this);const c=ia(r,l.bind(s),o);return a?ao(a):kn(),c}function Ip(t,n){const o=n.split(".");return()=>{let s=t;for(let r=0;r<o.length&&s;r++)s=s[o[r]];return s}}function bn(t,n){if(!Oe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),_e(t))bn(t.value,n);else if(se(t))for(let o=0;o<t.length;o++)bn(t[o],n);else if(up(t)||Qn(t))t.forEach(o=>{bn(o,n)});else if(yp(t))for(const o in t)bn(t[o],n);return t}function Np(t,n){t.shapeFlag&6&&t.component?Np(t.component.subTree,n):t.shapeFlag&128?(t.ssContent.transition=n.clone(t.ssContent),t.ssFallback.transition=n.clone(t.ssFallback)):t.transition=n}function De(t){return ce(t)?{setup:t,name:t.name}:t}const no=t=>!!t.type.__asyncLoader,jp=t=>t.type.__isKeepAlive,my={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:n}){const o=Hn(),s=o.ctx;if(!s.renderer)return()=>{const D=n.default&&n.default();return D&&D.length===1?D[0]:D};const r=new Map,l=new Set;let a=null;const c=o.suspense,{renderer:{p:i,m:p,um:u,o:{createElement:f}}}=s,d=f("div");s.activate=(D,E,_,S,R)=>{const $=D.component;p(D,E,_,0,c),i($.vnode,D,E,_,$,c,S,D.slotScopeIds,R),We(()=>{$.isDeactivated=!1,$.a&&Xn($.a);const J=D.props&&D.props.onVnodeMounted;J&&vt(J,$.parent,D)},c)},s.deactivate=D=>{const E=D.component;p(D,d,null,1,c),We(()=>{E.da&&Xn(E.da);const _=D.props&&D.props.onVnodeUnmounted;_&&vt(_,E.parent,D),E.isDeactivated=!0},c)};function y(D){br(D),u(D,o,c,!0)}function m(D){r.forEach((E,_)=>{const S=fl(E.type);S&&(!D||!D(S))&&g(_)})}function g(D){const E=r.get(D);!a||E.type!==a.type?y(E):a&&br(a),r.delete(D),l.delete(D)}ue(()=>[t.include,t.exclude],([D,E])=>{D&&m(_=>$o(D,_)),E&&m(_=>!$o(E,_))},{flush:"post",deep:!0});let A=null;const B=()=>{A!=null&&r.set(A,wr(o.subTree))};return Eo(B),pa(B),ir(()=>{r.forEach(D=>{const{subTree:E,suspense:_}=o,S=wr(E);if(D.type===S.type){br(S);const R=S.component.da;R&&We(R,_);return}y(D)})}),()=>{if(A=null,!n.default)return null;const D=n.default(),E=D[0];if(D.length>1)return a=null,D;if(!Fn(E)||!(E.shapeFlag&4)&&!(E.shapeFlag&128))return a=null,E;let _=wr(E);const S=_.type,R=fl(no(_)?_.type.__asyncResolved||{}:S),{include:$,exclude:J,max:te}=t;if($&&(!R||!$o($,R))||J&&R&&$o(J,R))return a=_,E;const ne=_.key==null?S:_.key,pe=r.get(ne);return _.el&&(_=Mn(_),E.shapeFlag&128&&(E.ssContent=_)),A=ne,pe?(_.el=pe.el,_.component=pe.component,_.transition&&Np(_,_.transition),_.shapeFlag|=512,l.delete(ne),l.add(ne)):(l.add(ne),te&&l.size>parseInt(te,10)&&g(l.values().next().value)),_.shapeFlag|=256,a=_,Hp(E.type)?E:_}}},qp=my;function $o(t,n){return se(t)?t.some(o=>$o(o,n)):He(t)?t.split(",").includes(n):t.test?t.test(n):!1}function hy(t,n){Up(t,"a",n)}function gy(t,n){Up(t,"da",n)}function Up(t,n,o=Ve){const s=t.__wdc||(t.__wdc=()=>{let r=o;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(cr(n,s,o),o){let r=o.parent;for(;r&&r.parent;)jp(r.parent.vnode)&&vy(s,n,o,r),r=r.parent}}function vy(t,n,o,s){const r=cr(n,t,s,!0);pr(()=>{Yl(s[n],r)},o)}function br(t){let n=t.shapeFlag;n&256&&(n-=256),n&512&&(n-=512),t.shapeFlag=n}function wr(t){return t.shapeFlag&128?t.ssContent:t}function cr(t,n,o=Ve,s=!1){if(o){const r=o[t]||(o[t]=[]),l=n.__weh||(n.__weh=(...a)=>{if(o.isUnmounted)return;ho(),ao(o);const c=Tt(n,o,t,a);return kn(),go(),c});return s?r.unshift(l):r.push(l),l}}const Gt=t=>(n,o=Ve)=>(!Qo||t==="sp")&&cr(t,(...s)=>n(...s),o),Ey=Gt("bm"),Eo=Gt("m"),Ay=Gt("bu"),pa=Gt("u"),ir=Gt("bum"),pr=Gt("um"),By=Gt("sp"),Dy=Gt("rtg"),_y=Gt("rtc");function Cy(t,n=Ve){cr("ec",t,n)}function ur(t,n){const o=Ke;if(o===null)return t;const s=dr(o)||o.proxy,r=t.dirs||(t.dirs=[]);for(let l=0;l<n.length;l++){let[a,c,i,p=Se]=n[l];ce(a)&&(a={mounted:a,updated:a}),a.deep&&bn(c),r.push({dir:a,instance:s,value:c,oldValue:void 0,arg:i,modifiers:p})}return t}function mn(t,n,o,s){const r=t.dirs,l=n&&n.dirs;for(let a=0;a<r.length;a++){const c=r[a];l&&(c.oldValue=l[a].value);let i=c.dir[s];i&&(ho(),Tt(i,o,8,[t.el,c,t,n]),go())}}const Jp="components",by="directives";function lo(t,n){return Vp(Jp,t,!0,n)||t}const wy=Symbol();function cc(t){return Vp(by,t)}function Vp(t,n,o=!0,s=!1){const r=Ke||Ve;if(r){const l=r.type;if(t===Jp){const c=fl(l,!1);if(c&&(c===n||c===Nt(n)||c===nr(Nt(n))))return l}const a=ic(r[t]||l[t],n)||ic(r.appContext[t],n);return!a&&s?l:a}}function ic(t,n){return t&&(t[n]||t[Nt(n)]||t[nr(Nt(n))])}function cs(t,n,o,s){let r;const l=o&&o[s];if(se(t)||He(t)){r=new Array(t.length);for(let a=0,c=t.length;a<c;a++)r[a]=n(t[a],a,void 0,l&&l[a])}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=n(a+1,a,void 0,l&&l[a])}else if(Oe(t))if(t[Symbol.iterator])r=Array.from(t,(a,c)=>n(a,c,void 0,l&&l[c]));else{const a=Object.keys(t);r=new Array(a.length);for(let c=0,i=a.length;c<i;c++){const p=a[c];r[c]=n(t[p],p,c,l&&l[c])}}else r=[];return o&&(o[s]=r),r}function jt(t,n,o={},s,r){if(Ke.isCE||Ke.parent&&no(Ke.parent)&&Ke.parent.isCE)return Y("slot",n==="default"?null:{name:n},s&&s());let l=t[n];l&&l._c&&(l._d=!1),b();const a=l&&Wp(l(o)),c=V(xe,{key:o.key||a&&a.key||`_${n}`},a||(s?s():[]),a&&t._===1?64:-2);return!r&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),l&&l._c&&(l._d=!0),c}function Wp(t){return t.some(n=>Fn(n)?!(n.type===fn||n.type===xe&&!Wp(n.children)):!0)?t:null}const ll=t=>t?nu(t)?dr(t)||t.proxy:ll(t.parent):null,Hs=rt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ll(t.parent),$root:t=>ll(t.root),$emit:t=>t.emit,$options:t=>ua(t),$forceUpdate:t=>t.f||(t.f=()=>ca(t.update)),$nextTick:t=>t.n||(t.n=ot.bind(t.proxy)),$watch:t=>yy.bind(t)}),xy={get({_:t},n){const{ctx:o,setupState:s,data:r,props:l,accessCache:a,type:c,appContext:i}=t;let p;if(n[0]!=="$"){const y=a[n];if(y!==void 0)switch(y){case 1:return s[n];case 2:return r[n];case 4:return o[n];case 3:return l[n]}else{if(s!==Se&&ve(s,n))return a[n]=1,s[n];if(r!==Se&&ve(r,n))return a[n]=2,r[n];if((p=t.propsOptions[0])&&ve(p,n))return a[n]=3,l[n];if(o!==Se&&ve(o,n))return a[n]=4,o[n];al&&(a[n]=0)}}const u=Hs[n];let f,d;if(u)return n==="$attrs"&&ht(t,"get",n),u(t);if((f=c.__cssModules)&&(f=f[n]))return f;if(o!==Se&&ve(o,n))return a[n]=4,o[n];if(d=i.config.globalProperties,ve(d,n))return d[n]},set({_:t},n,o){const{data:s,setupState:r,ctx:l}=t;return r!==Se&&ve(r,n)?(r[n]=o,!0):s!==Se&&ve(s,n)?(s[n]=o,!0):ve(t.props,n)||n[0]==="$"&&n.slice(1)in t?!1:(l[n]=o,!0)},has({_:{data:t,setupState:n,accessCache:o,ctx:s,appContext:r,propsOptions:l}},a){let c;return!!o[a]||t!==Se&&ve(t,a)||n!==Se&&ve(n,a)||(c=l[0])&&ve(c,a)||ve(s,a)||ve(Hs,a)||ve(r.config.globalProperties,a)},defineProperty(t,n,o){return o.get!=null?t._.accessCache[n]=0:ve(o,"value")&&this.set(t,n,o.value,null),Reflect.defineProperty(t,n,o)}};let al=!0;function Ty(t){const n=ua(t),o=t.proxy,s=t.ctx;al=!1,n.beforeCreate&&pc(n.beforeCreate,t,"bc");const{data:r,computed:l,methods:a,watch:c,provide:i,inject:p,created:u,beforeMount:f,mounted:d,beforeUpdate:y,updated:m,activated:g,deactivated:A,beforeDestroy:B,beforeUnmount:D,destroyed:E,unmounted:_,render:S,renderTracked:R,renderTriggered:$,errorCaptured:J,serverPrefetch:te,expose:ne,inheritAttrs:pe,components:Fe,directives:Ce,filters:Me}=n;if(p&&Sy(p,s,null,t.appContext.config.unwrapInjectedRef),a)for(const z in a){const oe=a[z];ce(oe)&&(s[z]=oe.bind(o))}if(r){const z=r.call(o,o);Oe(z)&&(t.data=$e(z))}if(al=!0,l)for(const z in l){const oe=l[z],de=ce(oe)?oe.bind(o,o):ce(oe.get)?oe.get.bind(o,o):xt,be=!ce(oe)&&ce(oe.set)?oe.set.bind(o):xt,Xe=T({get:de,set:be});Object.defineProperty(s,z,{enumerable:!0,configurable:!0,get:()=>Xe.value,set:Ie=>Xe.value=Ie})}if(c)for(const z in c)zp(c[z],s,o,z);if(i){const z=ce(i)?i.call(o):i;Reflect.ownKeys(z).forEach(oe=>{dt(oe,z[oe])})}u&&pc(u,t,"c");function Pe(z,oe){se(oe)?oe.forEach(de=>z(de.bind(o))):oe&&z(oe.bind(o))}if(Pe(Ey,f),Pe(Eo,d),Pe(Ay,y),Pe(pa,m),Pe(hy,g),Pe(gy,A),Pe(Cy,J),Pe(_y,R),Pe(Dy,$),Pe(ir,D),Pe(pr,_),Pe(By,te),se(ne))if(ne.length){const z=t.exposed||(t.exposed={});ne.forEach(oe=>{Object.defineProperty(z,oe,{get:()=>o[oe],set:de=>o[oe]=de})})}else t.exposed||(t.exposed={});S&&t.render===xt&&(t.render=S),pe!=null&&(t.inheritAttrs=pe),Fe&&(t.components=Fe),Ce&&(t.directives=Ce)}function Sy(t,n,o=xt,s=!1){se(t)&&(t=cl(t));for(const r in t){const l=t[r];let a;Oe(l)?"default"in l?a=H(l.from||r,l.default,!0):a=H(l.from||r):a=H(l),_e(a)&&s?Object.defineProperty(n,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:c=>a.value=c}):n[r]=a}}function pc(t,n,o){Tt(se(t)?t.map(s=>s.bind(n.proxy)):t.bind(n.proxy),n,o)}function zp(t,n,o,s){const r=s.includes(".")?Ip(o,s):()=>o[s];if(He(t)){const l=n[t];ce(l)&&ue(r,l)}else if(ce(t))ue(r,t.bind(o));else if(Oe(t))if(se(t))t.forEach(l=>zp(l,n,o,s));else{const l=ce(t.handler)?t.handler.bind(o):n[t.handler];ce(l)&&ue(r,l,t)}}function ua(t){const n=t.type,{mixins:o,extends:s}=n,{mixins:r,optionsCache:l,config:{optionMergeStrategies:a}}=t.appContext,c=l.get(n);let i;return c?i=c:!r.length&&!o&&!s?i=n:(i={},r.length&&r.forEach(p=>Is(i,p,a,!0)),Is(i,n,a)),Oe(n)&&l.set(n,i),i}function Is(t,n,o,s=!1){const{mixins:r,extends:l}=n;l&&Is(t,l,o,!0),r&&r.forEach(a=>Is(t,a,o,!0));for(const a in n)if(!(s&&a==="expose")){const c=ky[a]||o&&o[a];t[a]=c?c(t[a],n[a]):n[a]}return t}const ky={data:uc,props:En,emits:En,methods:En,computed:En,beforeCreate:et,created:et,beforeMount:et,mounted:et,beforeUpdate:et,updated:et,beforeDestroy:et,beforeUnmount:et,destroyed:et,unmounted:et,activated:et,deactivated:et,errorCaptured:et,serverPrefetch:et,components:En,directives:En,watch:Py,provide:uc,inject:Ry};function uc(t,n){return n?t?function(){return rt(ce(t)?t.call(this,this):t,ce(n)?n.call(this,this):n)}:n:t}function Ry(t,n){return En(cl(t),cl(n))}function cl(t){if(se(t)){const n={};for(let o=0;o<t.length;o++)n[t[o]]=t[o];return n}return t}function et(t,n){return t?[...new Set([].concat(t,n))]:n}function En(t,n){return t?rt(rt(Object.create(null),t),n):n}function Py(t,n){if(!t)return n;if(!n)return t;const o=rt(Object.create(null),t);for(const s in n)o[s]=et(t[s],n[s]);return o}function $y(t,n,o,s=!1){const r={},l={};Fs(l,fr,1),t.propsDefaults=Object.create(null),Kp(t,n,r,l);for(const a in t.propsOptions[0])a in r||(r[a]=void 0);o?t.props=s?r:Kd(r):t.type.props?t.props=r:t.props=l,t.attrs=l}function Oy(t,n,o,s){const{props:r,attrs:l,vnode:{patchFlag:a}}=t,c=Be(r),[i]=t.propsOptions;let p=!1;if((s||a>0)&&!(a&16)){if(a&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(lr(t.emitsOptions,d))continue;const y=n[d];if(i)if(ve(l,d))y!==l[d]&&(l[d]=y,p=!0);else{const m=Nt(d);r[m]=il(i,c,m,y,t,!1)}else y!==l[d]&&(l[d]=y,p=!0)}}}else{Kp(t,n,r,l)&&(p=!0);let u;for(const f in c)(!n||!ve(n,f)&&((u=Ln(f))===f||!ve(n,u)))&&(i?o&&(o[f]!==void 0||o[u]!==void 0)&&(r[f]=il(i,c,f,void 0,t,!0)):delete r[f]);if(l!==c)for(const f in l)(!n||!ve(n,f)&&!0)&&(delete l[f],p=!0)}p&&Kt(t,"set","$attrs")}function Kp(t,n,o,s){const[r,l]=t.propsOptions;let a=!1,c;if(n)for(let i in n){if(Ts(i))continue;const p=n[i];let u;r&&ve(r,u=Nt(i))?!l||!l.includes(u)?o[u]=p:(c||(c={}))[u]=p:lr(t.emitsOptions,i)||(!(i in s)||p!==s[i])&&(s[i]=p,a=!0)}if(l){const i=Be(o),p=c||Se;for(let u=0;u<l.length;u++){const f=l[u];o[f]=il(r,i,f,p[f],t,!ve(p,f))}}return a}function il(t,n,o,s,r,l){const a=t[o];if(a!=null){const c=ve(a,"default");if(c&&s===void 0){const i=a.default;if(a.type!==Function&&ce(i)){const{propsDefaults:p}=r;o in p?s=p[o]:(ao(r),s=p[o]=i.call(null,n),kn())}else s=i}a[0]&&(l&&!c?s=!1:a[1]&&(s===""||s===Ln(o))&&(s=!0))}return s}function Yp(t,n,o=!1){const s=n.propsCache,r=s.get(t);if(r)return r;const l=t.props,a={},c=[];let i=!1;if(!ce(t)){const u=f=>{i=!0;const[d,y]=Yp(f,n,!0);rt(a,d),y&&c.push(...y)};!o&&n.mixins.length&&n.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!l&&!i)return Oe(t)&&s.set(t,Zn),Zn;if(se(l))for(let u=0;u<l.length;u++){const f=Nt(l[u]);fc(f)&&(a[f]=Se)}else if(l)for(const u in l){const f=Nt(u);if(fc(f)){const d=l[u],y=a[f]=se(d)||ce(d)?{type:d}:d;if(y){const m=mc(Boolean,y.type),g=mc(String,y.type);y[0]=m>-1,y[1]=g<0||m<g,(m>-1||ve(y,"default"))&&c.push(f)}}}const p=[a,c];return Oe(t)&&s.set(t,p),p}function fc(t){return t[0]!=="$"}function dc(t){const n=t&&t.toString().match(/^\s*function (\w+)/);return n?n[1]:t===null?"null":""}function yc(t,n){return dc(t)===dc(n)}function mc(t,n){return se(n)?n.findIndex(o=>yc(o,t)):ce(n)&&yc(n,t)?0:-1}const Gp=t=>t[0]==="_"||t==="$stable",fa=t=>se(t)?t.map(Ft):[Ft(t)],Fy=(t,n,o)=>{if(n._n)return n;const s=Q((...r)=>fa(n(...r)),o);return s._c=!1,s},Zp=(t,n,o)=>{const s=t._ctx;for(const r in t){if(Gp(r))continue;const l=t[r];if(ce(l))n[r]=Fy(r,l,s);else if(l!=null){const a=fa(l);n[r]=()=>a}}},Qp=(t,n)=>{const o=fa(n);t.slots.default=()=>o},My=(t,n)=>{if(t.vnode.shapeFlag&32){const o=n._;o?(t.slots=Be(n),Fs(n,"_",o)):Zp(n,t.slots={})}else t.slots={},n&&Qp(t,n);Fs(t.slots,fr,1)},Ly=(t,n,o)=>{const{vnode:s,slots:r}=t;let l=!0,a=Se;if(s.shapeFlag&32){const c=n._;c?o&&c===1?l=!1:(rt(r,n),!o&&c===1&&delete r._):(l=!n.$stable,Zp(n,r)),a=n}else n&&(Qp(t,n),a={default:1});if(l)for(const c in r)!Gp(c)&&!(c in a)&&delete r[c]};function Xp(){return{app:null,config:{isNativeTag:yd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Hy=0;function Iy(t,n){return function(s,r=null){ce(s)||(s=Object.assign({},s)),r!=null&&!Oe(r)&&(r=null);const l=Xp(),a=new Set;let c=!1;const i=l.app={_uid:Hy++,_component:s,_props:r,_container:null,_context:l,_instance:null,version:sm,get config(){return l.config},set config(p){},use(p,...u){return a.has(p)||(p&&ce(p.install)?(a.add(p),p.install(i,...u)):ce(p)&&(a.add(p),p(i,...u))),i},mixin(p){return l.mixins.includes(p)||l.mixins.push(p),i},component(p,u){return u?(l.components[p]=u,i):l.components[p]},directive(p,u){return u?(l.directives[p]=u,i):l.directives[p]},mount(p,u,f){if(!c){const d=Y(s,r);return d.appContext=l,u&&n?n(d,p):t(d,p,f),c=!0,i._container=p,p.__vue_app__=i,dr(d.component)||d.component.proxy}},unmount(){c&&(t(null,i._container),delete i._container.__vue_app__)},provide(p,u){return l.provides[p]=u,i}};return i}}function pl(t,n,o,s,r=!1){if(se(t)){t.forEach((d,y)=>pl(d,n&&(se(n)?n[y]:n),o,s,r));return}if(no(s)&&!r)return;const l=s.shapeFlag&4?dr(s.component)||s.component.proxy:s.el,a=r?null:l,{i:c,r:i}=t,p=n&&n.r,u=c.refs===Se?c.refs={}:c.refs,f=c.setupState;if(p!=null&&p!==i&&(He(p)?(u[p]=null,ve(f,p)&&(f[p]=null)):_e(p)&&(p.value=null)),ce(i))ln(i,c,12,[a,u]);else{const d=He(i),y=_e(i);if(d||y){const m=()=>{if(t.f){const g=d?u[i]:i.value;r?se(g)&&Yl(g,l):se(g)?g.includes(l)||g.push(l):d?(u[i]=[l],ve(f,i)&&(f[i]=u[i])):(i.value=[l],t.k&&(u[t.k]=i.value))}else d?(u[i]=a,ve(f,i)&&(f[i]=a)):y&&(i.value=a,t.k&&(u[t.k]=a))};a?(m.id=-1,We(m,o)):m()}}}const We=dy;function Ny(t){return jy(t)}function jy(t,n){const o=Ad();o.__VUE__=!0;const{insert:s,remove:r,patchProp:l,createElement:a,createText:c,createComment:i,setText:p,setElementText:u,parentNode:f,nextSibling:d,setScopeId:y=xt,insertStaticContent:m}=t,g=(h,v,w,x=null,P=null,M=null,q=!1,F=null,L=!!v.dynamicChildren)=>{if(h===v)return;h&&!Co(h,v)&&(x=I(h),Ie(h,P,M,!0),h=null),v.patchFlag===-2&&(L=!1,v.dynamicChildren=null);const{type:O,ref:X,shapeFlag:K}=v;switch(O){case ya:A(h,v,w,x);break;case fn:B(h,v,w,x);break;case xr:h==null&&D(v,w,x,q);break;case xe:Fe(h,v,w,x,P,M,q,F,L);break;default:K&1?S(h,v,w,x,P,M,q,F,L):K&6?Ce(h,v,w,x,P,M,q,F,L):(K&64||K&128)&&O.process(h,v,w,x,P,M,q,F,L,ye)}X!=null&&P&&pl(X,h&&h.ref,M,v||h,!v)},A=(h,v,w,x)=>{if(h==null)s(v.el=c(v.children),w,x);else{const P=v.el=h.el;v.children!==h.children&&p(P,v.children)}},B=(h,v,w,x)=>{h==null?s(v.el=i(v.children||""),w,x):v.el=h.el},D=(h,v,w,x)=>{[h.el,h.anchor]=m(h.children,v,w,x,h.el,h.anchor)},E=({el:h,anchor:v},w,x)=>{let P;for(;h&&h!==v;)P=d(h),s(h,w,x),h=P;s(v,w,x)},_=({el:h,anchor:v})=>{let w;for(;h&&h!==v;)w=d(h),r(h),h=w;r(v)},S=(h,v,w,x,P,M,q,F,L)=>{q=q||v.type==="svg",h==null?R(v,w,x,P,M,q,F,L):te(h,v,P,M,q,F,L)},R=(h,v,w,x,P,M,q,F)=>{let L,O;const{type:X,props:K,shapeFlag:ee,transition:re,dirs:me}=h;if(L=h.el=a(h.type,M,K&&K.is,K),ee&8?u(L,h.children):ee&16&&J(h.children,L,null,x,P,M&&X!=="foreignObject",q,F),me&&mn(h,null,x,"created"),K){for(const Te in K)Te!=="value"&&!Ts(Te)&&l(L,Te,null,K[Te],M,h.children,x,P,j);"value"in K&&l(L,"value",null,K.value),(O=K.onVnodeBeforeMount)&&vt(O,x,h)}$(L,h,h.scopeId,q,x),me&&mn(h,null,x,"beforeMount");const ke=(!P||P&&!P.pendingBranch)&&re&&!re.persisted;ke&&re.beforeEnter(L),s(L,v,w),((O=K&&K.onVnodeMounted)||ke||me)&&We(()=>{O&&vt(O,x,h),ke&&re.enter(L),me&&mn(h,null,x,"mounted")},P)},$=(h,v,w,x,P)=>{if(w&&y(h,w),x)for(let M=0;M<x.length;M++)y(h,x[M]);if(P){let M=P.subTree;if(v===M){const q=P.vnode;$(h,q,q.scopeId,q.slotScopeIds,P.parent)}}},J=(h,v,w,x,P,M,q,F,L=0)=>{for(let O=L;O<h.length;O++){const X=h[O]=F?tn(h[O]):Ft(h[O]);g(null,X,v,w,x,P,M,q,F)}},te=(h,v,w,x,P,M,q)=>{const F=v.el=h.el;let{patchFlag:L,dynamicChildren:O,dirs:X}=v;L|=h.patchFlag&16;const K=h.props||Se,ee=v.props||Se;let re;w&&hn(w,!1),(re=ee.onVnodeBeforeUpdate)&&vt(re,w,v,h),X&&mn(v,h,w,"beforeUpdate"),w&&hn(w,!0);const me=P&&v.type!=="foreignObject";if(O?ne(h.dynamicChildren,O,F,w,x,me,M):q||oe(h,v,F,null,w,x,me,M,!1),L>0){if(L&16)pe(F,v,K,ee,w,x,P);else if(L&2&&K.class!==ee.class&&l(F,"class",null,ee.class,P),L&4&&l(F,"style",K.style,ee.style,P),L&8){const ke=v.dynamicProps;for(let Te=0;Te<ke.length;Te++){const Ne=ke[Te],Bt=K[Ne],qn=ee[Ne];(qn!==Bt||Ne==="value")&&l(F,Ne,Bt,qn,P,h.children,w,x,j)}}L&1&&h.children!==v.children&&u(F,v.children)}else!q&&O==null&&pe(F,v,K,ee,w,x,P);((re=ee.onVnodeUpdated)||X)&&We(()=>{re&&vt(re,w,v,h),X&&mn(v,h,w,"updated")},x)},ne=(h,v,w,x,P,M,q)=>{for(let F=0;F<v.length;F++){const L=h[F],O=v[F],X=L.el&&(L.type===xe||!Co(L,O)||L.shapeFlag&70)?f(L.el):w;g(L,O,X,null,x,P,M,q,!0)}},pe=(h,v,w,x,P,M,q)=>{if(w!==x){if(w!==Se)for(const F in w)!Ts(F)&&!(F in x)&&l(h,F,w[F],null,q,v.children,P,M,j);for(const F in x){if(Ts(F))continue;const L=x[F],O=w[F];L!==O&&F!=="value"&&l(h,F,O,L,q,v.children,P,M,j)}"value"in x&&l(h,"value",w.value,x.value)}},Fe=(h,v,w,x,P,M,q,F,L)=>{const O=v.el=h?h.el:c(""),X=v.anchor=h?h.anchor:c("");let{patchFlag:K,dynamicChildren:ee,slotScopeIds:re}=v;re&&(F=F?F.concat(re):re),h==null?(s(O,w,x),s(X,w,x),J(v.children,w,X,P,M,q,F,L)):K>0&&K&64&&ee&&h.dynamicChildren?(ne(h.dynamicChildren,ee,w,P,M,q,F),(v.key!=null||P&&v===P.subTree)&&da(h,v,!0)):oe(h,v,w,X,P,M,q,F,L)},Ce=(h,v,w,x,P,M,q,F,L)=>{v.slotScopeIds=F,h==null?v.shapeFlag&512?P.ctx.activate(v,w,x,q,L):Me(v,w,x,P,M,q,L):Re(h,v,L)},Me=(h,v,w,x,P,M,q)=>{const F=h.component=Zy(h,x,P);if(jp(h)&&(F.ctx.renderer=ye),Qy(F),F.asyncDep){if(P&&P.registerDep(F,Pe),!h.el){const L=F.subTree=Y(fn);B(null,L,v,w)}return}Pe(F,h,v,w,P,M,q)},Re=(h,v,w)=>{const x=v.component=h.component;if(uy(h,v,w))if(x.asyncDep&&!x.asyncResolved){z(x,v,w);return}else x.next=v,ry(x.update),x.update();else v.el=h.el,x.vnode=v},Pe=(h,v,w,x,P,M,q)=>{const F=()=>{if(h.isMounted){let{next:X,bu:K,u:ee,parent:re,vnode:me}=h,ke=X,Te;hn(h,!1),X?(X.el=me.el,z(h,X,q)):X=me,K&&Xn(K),(Te=X.props&&X.props.onVnodeBeforeUpdate)&&vt(Te,re,X,me),hn(h,!0);const Ne=Cr(h),Bt=h.subTree;h.subTree=Ne,g(Bt,Ne,f(Bt.el),I(Bt),h,P,M),X.el=Ne.el,ke===null&&fy(h,Ne.el),ee&&We(ee,P),(Te=X.props&&X.props.onVnodeUpdated)&&We(()=>vt(Te,re,X,me),P)}else{let X;const{el:K,props:ee}=v,{bm:re,m:me,parent:ke}=h,Te=no(v);if(hn(h,!1),re&&Xn(re),!Te&&(X=ee&&ee.onVnodeBeforeMount)&&vt(X,ke,v),hn(h,!0),K&&le){const Ne=()=>{h.subTree=Cr(h),le(K,h.subTree,h,P,null)};Te?v.type.__asyncLoader().then(()=>!h.isUnmounted&&Ne()):Ne()}else{const Ne=h.subTree=Cr(h);g(null,Ne,w,x,h,P,M),v.el=Ne.el}if(me&&We(me,P),!Te&&(X=ee&&ee.onVnodeMounted)){const Ne=v;We(()=>vt(X,ke,Ne),P)}(v.shapeFlag&256||ke&&no(ke.vnode)&&ke.vnode.shapeFlag&256)&&h.a&&We(h.a,P),h.isMounted=!0,v=w=x=null}},L=h.effect=new Xl(F,()=>ca(O),h.scope),O=h.update=()=>L.run();O.id=h.uid,hn(h,!0),O()},z=(h,v,w)=>{v.component=h;const x=h.vnode.props;h.vnode=v,h.next=null,Oy(h,v.props,x,w),Ly(h,v.children,w),ho(),rc(),go()},oe=(h,v,w,x,P,M,q,F,L=!1)=>{const O=h&&h.children,X=h?h.shapeFlag:0,K=v.children,{patchFlag:ee,shapeFlag:re}=v;if(ee>0){if(ee&128){be(O,K,w,x,P,M,q,F,L);return}else if(ee&256){de(O,K,w,x,P,M,q,F,L);return}}re&8?(X&16&&j(O,P,M),K!==O&&u(w,K)):X&16?re&16?be(O,K,w,x,P,M,q,F,L):j(O,P,M,!0):(X&8&&u(w,""),re&16&&J(K,w,x,P,M,q,F,L))},de=(h,v,w,x,P,M,q,F,L)=>{h=h||Zn,v=v||Zn;const O=h.length,X=v.length,K=Math.min(O,X);let ee;for(ee=0;ee<K;ee++){const re=v[ee]=L?tn(v[ee]):Ft(v[ee]);g(h[ee],re,w,null,P,M,q,F,L)}O>X?j(h,P,M,!0,!1,K):J(v,w,x,P,M,q,F,L,K)},be=(h,v,w,x,P,M,q,F,L)=>{let O=0;const X=v.length;let K=h.length-1,ee=X-1;for(;O<=K&&O<=ee;){const re=h[O],me=v[O]=L?tn(v[O]):Ft(v[O]);if(Co(re,me))g(re,me,w,null,P,M,q,F,L);else break;O++}for(;O<=K&&O<=ee;){const re=h[K],me=v[ee]=L?tn(v[ee]):Ft(v[ee]);if(Co(re,me))g(re,me,w,null,P,M,q,F,L);else break;K--,ee--}if(O>K){if(O<=ee){const re=ee+1,me=re<X?v[re].el:x;for(;O<=ee;)g(null,v[O]=L?tn(v[O]):Ft(v[O]),w,me,P,M,q,F,L),O++}}else if(O>ee)for(;O<=K;)Ie(h[O],P,M,!0),O++;else{const re=O,me=O,ke=new Map;for(O=me;O<=ee;O++){const ct=v[O]=L?tn(v[O]):Ft(v[O]);ct.key!=null&&ke.set(ct.key,O)}let Te,Ne=0;const Bt=ee-me+1;let qn=!1,Ka=0;const _o=new Array(Bt);for(O=0;O<Bt;O++)_o[O]=0;for(O=re;O<=K;O++){const ct=h[O];if(Ne>=Bt){Ie(ct,P,M,!0);continue}let Ot;if(ct.key!=null)Ot=ke.get(ct.key);else for(Te=me;Te<=ee;Te++)if(_o[Te-me]===0&&Co(ct,v[Te])){Ot=Te;break}Ot===void 0?Ie(ct,P,M,!0):(_o[Ot-me]=O+1,Ot>=Ka?Ka=Ot:qn=!0,g(ct,v[Ot],w,null,P,M,q,F,L),Ne++)}const Ya=qn?qy(_o):Zn;for(Te=Ya.length-1,O=Bt-1;O>=0;O--){const ct=me+O,Ot=v[ct],Ga=ct+1<X?v[ct+1].el:x;_o[O]===0?g(null,Ot,w,Ga,P,M,q,F,L):qn&&(Te<0||O!==Ya[Te]?Xe(Ot,w,Ga,2):Te--)}}},Xe=(h,v,w,x,P=null)=>{const{el:M,type:q,transition:F,children:L,shapeFlag:O}=h;if(O&6){Xe(h.component.subTree,v,w,x);return}if(O&128){h.suspense.move(v,w,x);return}if(O&64){q.move(h,v,w,ye);return}if(q===xe){s(M,v,w);for(let K=0;K<L.length;K++)Xe(L[K],v,w,x);s(h.anchor,v,w);return}if(q===xr){E(h,v,w);return}if(x!==2&&O&1&&F)if(x===0)F.beforeEnter(M),s(M,v,w),We(()=>F.enter(M),P);else{const{leave:K,delayLeave:ee,afterLeave:re}=F,me=()=>s(M,v,w),ke=()=>{K(M,()=>{me(),re&&re()})};ee?ee(M,me,ke):ke()}else s(M,v,w)},Ie=(h,v,w,x=!1,P=!1)=>{const{type:M,props:q,ref:F,children:L,dynamicChildren:O,shapeFlag:X,patchFlag:K,dirs:ee}=h;if(F!=null&&pl(F,null,w,h,!0),X&256){v.ctx.deactivate(h);return}const re=X&1&&ee,me=!no(h);let ke;if(me&&(ke=q&&q.onVnodeBeforeUnmount)&&vt(ke,v,h),X&6)k(h.component,w,x);else{if(X&128){h.suspense.unmount(w,x);return}re&&mn(h,null,v,"beforeUnmount"),X&64?h.type.remove(h,v,w,P,ye,x):O&&(M!==xe||K>0&&K&64)?j(O,v,w,!1,!0):(M===xe&&K&384||!P&&X&16)&&j(L,v,w),x&&Qt(h)}(me&&(ke=q&&q.onVnodeUnmounted)||re)&&We(()=>{ke&&vt(ke,v,h),re&&mn(h,null,v,"unmounted")},w)},Qt=h=>{const{type:v,el:w,anchor:x,transition:P}=h;if(v===xe){jn(w,x);return}if(v===xr){_(h);return}const M=()=>{r(w),P&&!P.persisted&&P.afterLeave&&P.afterLeave()};if(h.shapeFlag&1&&P&&!P.persisted){const{leave:q,delayLeave:F}=P,L=()=>q(w,M);F?F(h.el,M,L):L()}else M()},jn=(h,v)=>{let w;for(;h!==v;)w=d(h),r(h),h=w;r(v)},k=(h,v,w)=>{const{bum:x,scope:P,update:M,subTree:q,um:F}=h;x&&Xn(x),P.stop(),M&&(M.active=!1,Ie(q,h,v,w)),F&&We(F,v),We(()=>{h.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},j=(h,v,w,x=!1,P=!1,M=0)=>{for(let q=M;q<h.length;q++)Ie(h[q],v,w,x,P)},I=h=>h.shapeFlag&6?I(h.component.subTree):h.shapeFlag&128?h.suspense.next():d(h.anchor||h.el),G=(h,v,w)=>{h==null?v._vnode&&Ie(v._vnode,null,null,!0):g(v._vnode||null,h,v,null,null,null,w),rc(),Fp(),v._vnode=h},ye={p:g,um:Ie,m:Xe,r:Qt,mt:Me,mc:J,pc:oe,pbc:ne,n:I,o:t};let Ee,le;return n&&([Ee,le]=n(ye)),{render:G,hydrate:Ee,createApp:Iy(G,Ee)}}function hn({effect:t,update:n},o){t.allowRecurse=n.allowRecurse=o}function da(t,n,o=!1){const s=t.children,r=n.children;if(se(s)&&se(r))for(let l=0;l<s.length;l++){const a=s[l];let c=r[l];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=r[l]=tn(r[l]),c.el=a.el),o||da(a,c))}}function qy(t){const n=t.slice(),o=[0];let s,r,l,a,c;const i=t.length;for(s=0;s<i;s++){const p=t[s];if(p!==0){if(r=o[o.length-1],t[r]<p){n[s]=r,o.push(s);continue}for(l=0,a=o.length-1;l<a;)c=l+a>>1,t[o[c]]<p?l=c+1:a=c;p<t[o[l]]&&(l>0&&(n[s]=o[l-1]),o[l]=s)}}for(l=o.length,a=o[l-1];l-- >0;)o[l]=a,a=n[a];return o}const Uy=t=>t.__isTeleport,Oo=t=>t&&(t.disabled||t.disabled===""),hc=t=>typeof SVGElement<"u"&&t instanceof SVGElement,ul=(t,n)=>{const o=t&&t.to;return He(o)?n?n(o):null:o},Jy={__isTeleport:!0,process(t,n,o,s,r,l,a,c,i,p){const{mc:u,pc:f,pbc:d,o:{insert:y,querySelector:m,createText:g,createComment:A}}=p,B=Oo(n.props);let{shapeFlag:D,children:E,dynamicChildren:_}=n;if(t==null){const S=n.el=g(""),R=n.anchor=g("");y(S,o,s),y(R,o,s);const $=n.target=ul(n.props,m),J=n.targetAnchor=g("");$&&(y(J,$),a=a||hc($));const te=(ne,pe)=>{D&16&&u(E,ne,pe,r,l,a,c,i)};B?te(o,R):$&&te($,J)}else{n.el=t.el;const S=n.anchor=t.anchor,R=n.target=t.target,$=n.targetAnchor=t.targetAnchor,J=Oo(t.props),te=J?o:R,ne=J?S:$;if(a=a||hc(R),_?(d(t.dynamicChildren,_,te,r,l,a,c),da(t,n,!0)):i||f(t,n,te,ne,r,l,a,c,!1),B)J||Bs(n,o,S,p,1);else if((n.props&&n.props.to)!==(t.props&&t.props.to)){const pe=n.target=ul(n.props,m);pe&&Bs(n,pe,null,p,0)}else J&&Bs(n,R,$,p,1)}},remove(t,n,o,s,{um:r,o:{remove:l}},a){const{shapeFlag:c,children:i,anchor:p,targetAnchor:u,target:f,props:d}=t;if(f&&l(u),(a||!Oo(d))&&(l(p),c&16))for(let y=0;y<i.length;y++){const m=i[y];r(m,n,o,!0,!!m.dynamicChildren)}},move:Bs,hydrate:Vy};function Bs(t,n,o,{o:{insert:s},m:r},l=2){l===0&&s(t.targetAnchor,n,o);const{el:a,anchor:c,shapeFlag:i,children:p,props:u}=t,f=l===2;if(f&&s(a,n,o),(!f||Oo(u))&&i&16)for(let d=0;d<p.length;d++)r(p[d],n,o,2);f&&s(c,n,o)}function Vy(t,n,o,s,r,l,{o:{nextSibling:a,parentNode:c,querySelector:i}},p){const u=n.target=ul(n.props,i);if(u){const f=u._lpa||u.firstChild;if(n.shapeFlag&16)if(Oo(n.props))n.anchor=p(a(t),n,c(t),o,s,r,l),n.targetAnchor=f;else{n.anchor=a(t);let d=f;for(;d;)if(d=a(d),d&&d.nodeType===8&&d.data==="teleport anchor"){n.targetAnchor=d,u._lpa=n.targetAnchor&&a(n.targetAnchor);break}p(f,n,u,o,s,r,l)}}return n.anchor&&a(n.anchor)}const Wy=Jy,xe=Symbol(void 0),ya=Symbol(void 0),fn=Symbol(void 0),xr=Symbol(void 0),Fo=[];let bt=null;function b(t=!1){Fo.push(bt=t?null:[])}function zy(){Fo.pop(),bt=Fo[Fo.length-1]||null}let Zo=1;function gc(t){Zo+=t}function eu(t){return t.dynamicChildren=Zo>0?bt||Zn:null,zy(),Zo>0&&bt&&bt.push(t),t}function U(t,n,o,s,r,l){return eu(e(t,n,o,s,r,l,!0))}function V(t,n,o,s,r){return eu(Y(t,n,o,s,r,!0))}function Fn(t){return t?t.__v_isVNode===!0:!1}function Co(t,n){return t.type===n.type&&t.key===n.key}const fr="__vInternal",tu=({key:t})=>t!=null?t:null,Ss=({ref:t,ref_key:n,ref_for:o})=>t!=null?He(t)||_e(t)||ce(t)?{i:Ke,r:t,k:n,f:!!o}:t:null;function e(t,n=null,o=null,s=0,r=null,l=t===xe?0:1,a=!1,c=!1){const i={__v_isVNode:!0,__v_skip:!0,type:t,props:n,key:n&&tu(n),ref:n&&Ss(n),scopeId:ar,slotScopeIds:null,children:o,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return c?(ma(i,o),l&128&&t.normalize(i)):o&&(i.shapeFlag|=He(o)?8:16),Zo>0&&!a&&bt&&(i.patchFlag>0||l&6)&&i.patchFlag!==32&&bt.push(i),i}const Y=Ky;function Ky(t,n=null,o=null,s=0,r=null,l=!1){if((!t||t===wy)&&(t=fn),Fn(t)){const c=Mn(t,n,!0);return o&&ma(c,o),Zo>0&&!l&&bt&&(c.shapeFlag&6?bt[bt.indexOf(t)]=c:bt.push(c)),c.patchFlag|=-2,c}if(tm(t)&&(t=t.__vccOpts),n){n=fe(n);let{class:c,style:i}=n;c&&!He(c)&&(n.class=Le(c)),Oe(i)&&(Tp(i)&&!se(i)&&(i=rt({},i)),n.style=Ze(i))}const a=He(t)?1:Hp(t)?128:Uy(t)?64:Oe(t)?4:ce(t)?2:0;return e(t,n,o,s,r,a,l,!0)}function fe(t){return t?Tp(t)||fr in t?rt({},t):t:null}function Mn(t,n,o=!1){const{props:s,ref:r,patchFlag:l,children:a}=t,c=n?dn(s||{},n):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&tu(c),ref:n&&n.ref?o&&r?se(r)?r.concat(Ss(n)):[r,Ss(n)]:Ss(n):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:n&&t.type!==xe?l===-1?16:l|16:l,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Mn(t.ssContent),ssFallback:t.ssFallback&&Mn(t.ssFallback),el:t.el,anchor:t.anchor}}function Z(t=" ",n=0){return Y(ya,null,t,n)}function he(t="",n=!1){return n?(b(),V(fn,null,t)):Y(fn,null,t)}function Ft(t){return t==null||typeof t=="boolean"?Y(fn):se(t)?Y(xe,null,t.slice()):typeof t=="object"?tn(t):Y(ya,null,String(t))}function tn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Mn(t)}function ma(t,n){let o=0;const{shapeFlag:s}=t;if(n==null)n=null;else if(se(n))o=16;else if(typeof n=="object")if(s&65){const r=n.default;r&&(r._c&&(r._d=!1),ma(t,r()),r._c&&(r._d=!0));return}else{o=32;const r=n._;!r&&!(fr in n)?n._ctx=Ke:r===3&&Ke&&(Ke.slots._===1?n._=1:(n._=2,t.patchFlag|=1024))}else ce(n)?(n={default:n,_ctx:Ke},o=32):(n=String(n),s&64?(o=16,n=[Z(n)]):o=8);t.children=n,t.shapeFlag|=o}function dn(...t){const n={};for(let o=0;o<t.length;o++){const s=t[o];for(const r in s)if(r==="class")n.class!==s.class&&(n.class=Le([n.class,s.class]));else if(r==="style")n.style=Ze([n.style,s.style]);else if(Xs(r)){const l=n[r],a=s[r];a&&l!==a&&!(se(l)&&l.includes(a))&&(n[r]=l?[].concat(l,a):a)}else r!==""&&(n[r]=s[r])}return n}function vt(t,n,o,s=null){Tt(t,n,7,[o,s])}const Yy=Xp();let Gy=0;function Zy(t,n,o){const s=t.type,r=(n?n.appContext:t.appContext)||Yy,l={uid:Gy++,vnode:t,type:s,parent:n,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new mp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Yp(s,r),emitsOptions:Lp(s,r),emit:null,emitted:null,propsDefaults:Se,inheritAttrs:s.inheritAttrs,ctx:Se,data:Se,props:Se,attrs:Se,slots:Se,refs:Se,setupState:Se,setupContext:null,suspense:o,suspenseId:o?o.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=n?n.root:l,l.emit=cy.bind(null,l),t.ce&&t.ce(l),l}let Ve=null;const Hn=()=>Ve||Ke,ao=t=>{Ve=t,t.scope.on()},kn=()=>{Ve&&Ve.scope.off(),Ve=null};function nu(t){return t.vnode.shapeFlag&4}let Qo=!1;function Qy(t,n=!1){Qo=n;const{props:o,children:s}=t.vnode,r=nu(t);$y(t,o,r,n),My(t,s);const l=r?Xy(t,n):void 0;return Qo=!1,l}function Xy(t,n){const o=t.type;t.accessCache=Object.create(null),t.proxy=sr(new Proxy(t.ctx,xy));const{setup:s}=o;if(s){const r=t.setupContext=s.length>1?su(t):null;ao(t),ho();const l=ln(s,t,0,[t.props,r]);if(go(),kn(),fp(l)){if(l.then(kn,kn),n)return l.then(a=>{vc(t,a,n)}).catch(a=>{rr(a,t,0)});t.asyncDep=l}else vc(t,l,n)}else ou(t,n)}function vc(t,n,o){ce(n)?t.type.__ssrInlineRender?t.ssrRender=n:t.render=n:Oe(n)&&(t.setupState=kp(n)),ou(t,o)}let Ec;function ou(t,n,o){const s=t.type;if(!t.render){if(!n&&Ec&&!s.render){const r=s.template||ua(t).template;if(r){const{isCustomElement:l,compilerOptions:a}=t.appContext.config,{delimiters:c,compilerOptions:i}=s,p=rt(rt({isCustomElement:l,delimiters:c},a),i);s.render=Ec(r,p)}}t.render=s.render||xt}ao(t),ho(),Ty(t),go(),kn()}function em(t){return new Proxy(t.attrs,{get(n,o){return ht(t,"get","$attrs"),n[o]}})}function su(t){const n=s=>{t.exposed=s||{}};let o;return{get attrs(){return o||(o=em(t))},slots:t.slots,emit:t.emit,expose:n}}function dr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(kp(sr(t.exposed)),{get(n,o){if(o in n)return n[o];if(o in Hs)return Hs[o](t)}}))}function fl(t,n=!0){return ce(t)?t.displayName||t.name:t.name||n&&t.__name}function tm(t){return ce(t)&&"__vccOpts"in t}const T=(t,n)=>ny(t,n,Qo);function nm(){return om().slots}function om(){const t=Hn();return t.setupContext||(t.setupContext=su(t))}function Ye(t,n,o){const s=arguments.length;return s===2?Oe(n)&&!se(n)?Fn(n)?Y(t,null,[n]):Y(t,n):Y(t,null,n):(s>3?o=Array.prototype.slice.call(arguments,2):s===3&&Fn(o)&&(o=[o]),Y(t,n,o))}const sm="3.2.40",rm="http://www.w3.org/2000/svg",Dn=typeof document<"u"?document:null,Ac=Dn&&Dn.createElement("template"),lm={insert:(t,n,o)=>{n.insertBefore(t,o||null)},remove:t=>{const n=t.parentNode;n&&n.removeChild(t)},createElement:(t,n,o,s)=>{const r=n?Dn.createElementNS(rm,t):Dn.createElement(t,o?{is:o}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Dn.createTextNode(t),createComment:t=>Dn.createComment(t),setText:(t,n)=>{t.nodeValue=n},setElementText:(t,n)=>{t.textContent=n},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Dn.querySelector(t),setScopeId(t,n){t.setAttribute(n,"")},insertStaticContent(t,n,o,s,r,l){const a=o?o.previousSibling:n.lastChild;if(r&&(r===l||r.nextSibling))for(;n.insertBefore(r.cloneNode(!0),o),!(r===l||!(r=r.nextSibling)););else{Ac.innerHTML=s?`<svg>${t}</svg>`:t;const c=Ac.content;if(s){const i=c.firstChild;for(;i.firstChild;)c.appendChild(i.firstChild);c.removeChild(i)}n.insertBefore(c,o)}return[a?a.nextSibling:n.firstChild,o?o.previousSibling:n.lastChild]}};function am(t,n,o){const s=t._vtc;s&&(n=(n?[n,...s]:[...s]).join(" ")),n==null?t.removeAttribute("class"):o?t.setAttribute("class",n):t.className=n}function cm(t,n,o){const s=t.style,r=He(o);if(o&&!r){for(const l in o)dl(s,l,o[l]);if(n&&!He(n))for(const l in n)o[l]==null&&dl(s,l,"")}else{const l=s.display;r?n!==o&&(s.cssText=o):n&&t.removeAttribute("style"),"_vod"in t&&(s.display=l)}}const Bc=/\s*!important$/;function dl(t,n,o){if(se(o))o.forEach(s=>dl(t,n,s));else if(o==null&&(o=""),n.startsWith("--"))t.setProperty(n,o);else{const s=im(t,n);Bc.test(o)?t.setProperty(Ln(s),o.replace(Bc,""),"important"):t[s]=o}}const Dc=["Webkit","Moz","ms"],Tr={};function im(t,n){const o=Tr[n];if(o)return o;let s=Nt(n);if(s!=="filter"&&s in t)return Tr[n]=s;s=nr(s);for(let r=0;r<Dc.length;r++){const l=Dc[r]+s;if(l in t)return Tr[n]=l}return n}const _c="http://www.w3.org/1999/xlink";function pm(t,n,o,s,r){if(s&&n.startsWith("xlink:"))o==null?t.removeAttributeNS(_c,n.slice(6,n.length)):t.setAttributeNS(_c,n,o);else{const l=cd(n);o==null||l&&!ip(o)?t.removeAttribute(n):t.setAttribute(n,l?"":o)}}function um(t,n,o,s,r,l,a){if(n==="innerHTML"||n==="textContent"){s&&a(s,r,l),t[n]=o==null?"":o;return}if(n==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=o;const i=o==null?"":o;(t.value!==i||t.tagName==="OPTION")&&(t.value=i),o==null&&t.removeAttribute(n);return}let c=!1;if(o===""||o==null){const i=typeof t[n];i==="boolean"?o=ip(o):o==null&&i==="string"?(o="",c=!0):i==="number"&&(o=0,c=!0)}try{t[n]=o}catch{}c&&t.removeAttribute(n)}const[ru,fm]=(()=>{let t=Date.now,n=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const o=navigator.userAgent.match(/firefox\/(\d+)/i);n=!!(o&&Number(o[1])<=53)}return[t,n]})();let yl=0;const dm=Promise.resolve(),ym=()=>{yl=0},mm=()=>yl||(dm.then(ym),yl=ru());function Wn(t,n,o,s){t.addEventListener(n,o,s)}function hm(t,n,o,s){t.removeEventListener(n,o,s)}function gm(t,n,o,s,r=null){const l=t._vei||(t._vei={}),a=l[n];if(s&&a)a.value=s;else{const[c,i]=vm(n);if(s){const p=l[n]=Em(s,r);Wn(t,c,p,i)}else a&&(hm(t,c,a,i),l[n]=void 0)}}const Cc=/(?:Once|Passive|Capture)$/;function vm(t){let n;if(Cc.test(t)){n={};let s;for(;s=t.match(Cc);)t=t.slice(0,t.length-s[0].length),n[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ln(t.slice(2)),n]}function Em(t,n){const o=s=>{const r=s.timeStamp||ru();(fm||r>=o.attached-1)&&Tt(Am(s,o.value),n,5,[s])};return o.value=t,o.attached=mm(),o}function Am(t,n){if(se(n)){const o=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{o.call(t),t._stopped=!0},n.map(s=>r=>!r._stopped&&s&&s(r))}else return n}const bc=/^on[a-z]/,Bm=(t,n,o,s,r=!1,l,a,c,i)=>{n==="class"?am(t,s,r):n==="style"?cm(t,o,s):Xs(n)?Kl(n)||gm(t,n,o,s,a):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):Dm(t,n,s,r))?um(t,n,s,l,a,c,i):(n==="true-value"?t._trueValue=s:n==="false-value"&&(t._falseValue=s),pm(t,n,s,r))};function Dm(t,n,o,s){return s?!!(n==="innerHTML"||n==="textContent"||n in t&&bc.test(n)&&ce(o)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&t.tagName==="INPUT"||n==="type"&&t.tagName==="TEXTAREA"||bc.test(n)&&He(o)?!1:n in t}const wc=t=>{const n=t.props["onUpdate:modelValue"]||!1;return se(n)?o=>Xn(n,o):n};function _m(t){t.target.composing=!0}function xc(t){const n=t.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const Cm={created(t,{modifiers:{lazy:n,trim:o,number:s}},r){t._assign=wc(r);const l=s||r.props&&r.props.type==="number";Wn(t,n?"change":"input",a=>{if(a.target.composing)return;let c=t.value;o&&(c=c.trim()),l&&(c=el(c)),t._assign(c)}),o&&Wn(t,"change",()=>{t.value=t.value.trim()}),n||(Wn(t,"compositionstart",_m),Wn(t,"compositionend",xc),Wn(t,"change",xc))},mounted(t,{value:n}){t.value=n==null?"":n},beforeUpdate(t,{value:n,modifiers:{lazy:o,trim:s,number:r}},l){if(t._assign=wc(l),t.composing||document.activeElement===t&&t.type!=="range"&&(o||s&&t.value.trim()===n||(r||t.type==="number")&&el(t.value)===n))return;const a=n==null?"":n;t.value!==a&&(t.value=a)}},bm={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Tc=(t,n)=>o=>{if(!("key"in o))return;const s=Ln(o.key);if(n.some(r=>r===s||bm[r]===s))return t(o)},lu={beforeMount(t,{value:n},{transition:o}){t._vod=t.style.display==="none"?"":t.style.display,o&&n?o.beforeEnter(t):bo(t,n)},mounted(t,{value:n},{transition:o}){o&&n&&o.enter(t)},updated(t,{value:n,oldValue:o},{transition:s}){!n!=!o&&(s?n?(s.beforeEnter(t),bo(t,!0),s.enter(t)):s.leave(t,()=>{bo(t,!1)}):bo(t,n))},beforeUnmount(t,{value:n}){bo(t,n)}};function bo(t,n){t.style.display=n?t._vod:"none"}const wm=rt({patchProp:Bm},lm);let Sc;function xm(){return Sc||(Sc=Ny(wm))}const Tm=(...t)=>{const n=xm().createApp(...t),{mount:o}=n;return n.mount=s=>{const r=Sm(s);if(!r)return;const l=n._component;!ce(l)&&!l.render&&!l.template&&(l.template=r.innerHTML),r.innerHTML="";const a=o(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},n};function Sm(t){return He(t)?document.querySelector(t):t}var au="usehead",kc="head:count",Sr="data-head-attrs",cu="data-meta-body",km=(t,n,o)=>{const s=o.createElement(t);for(const r of Object.keys(n))if(r==="body"&&n.body===!0)s.setAttribute(cu,"true");else{let l=n[r];if(r==="renderPriority"||r==="key"||l===!1)continue;r==="children"?s.textContent=l:s.setAttribute(r,l)}return s};function Rc(t,n){if(t instanceof HTMLElement&&n instanceof HTMLElement){const o=n.getAttribute("nonce");if(o&&!t.getAttribute("nonce")){const s=n.cloneNode(!0);return s.setAttribute("nonce",""),s.nonce=o,o===t.nonce&&t.isEqualNode(s)}}return t.isEqualNode(n)}var Rm=t=>{if(!["meta","base","script","link"].includes(t.tag))return!1;const{props:n,tag:o}=t;if(o==="base")return!0;if(o==="link"&&n.rel==="canonical")return{propValue:"canonical"};if(n.charset)return{propKey:"charset"};const s=["key","id","name","property","http-equiv"];for(const r of s){let l;if(typeof n.getAttribute=="function"&&n.hasAttribute(r)?l=n.getAttribute(r):l=n[r],l!==void 0)return{propValue:r}}return!1},Pm=()=>{const t=H(au);if(!t)throw new Error("You may forget to apply app.use(head)");return t},$m=["title","meta","link","base","style","script","noscript","htmlAttrs","bodyAttrs"],Om=(t,n)=>t==null?"":typeof t=="string"?t.replace("%s",n!=null?n:""):t(C(n)),Fm=t=>{const n=[],o=Object.keys(t);for(const s of o)if(t[s]!=null)switch(s){case"title":n.push({tag:s,props:{children:t[s]}});break;case"titleTemplate":break;case"base":n.push({tag:s,props:{key:"default",...t[s]}});break;default:if($m.includes(s)){const r=t[s];Array.isArray(r)?r.forEach(l=>{n.push({tag:s,props:C(l)})}):r&&n.push({tag:s,props:r})}break}return n},Pc=(t,n)=>{const o=t.getAttribute(Sr);if(o)for(const r of o.split(","))r in n||t.removeAttribute(r);const s=[];for(const r in n){const l=n[r];l!=null&&(l===!1?t.removeAttribute(r):t.setAttribute(r,l),s.push(r))}s.length?t.setAttribute(Sr,s.join(",")):t.removeAttribute(Sr)},Mm=(t=window.document,n,o)=>{var s,r;const l=t.head,a=t.body;let c=l.querySelector(`meta[name="${kc}"]`),i=a.querySelectorAll(`[${cu}]`);const p=c?Number(c.getAttribute("content")):0,u=[],f=[];if(i)for(let y=0;y<i.length;y++)i[y]&&((s=i[y].tagName)==null?void 0:s.toLowerCase())===n&&f.push(i[y]);if(c)for(let y=0,m=c.previousElementSibling;y<p;y++,m=(m==null?void 0:m.previousElementSibling)||null)((r=m==null?void 0:m.tagName)==null?void 0:r.toLowerCase())===n&&u.push(m);else c=t.createElement("meta"),c.setAttribute("name",kc),c.setAttribute("content","0"),l.append(c);let d=o.map(y=>{var m;return{element:km(y.tag,y.props,t),body:(m=y.props.body)!=null?m:!1}});d=d.filter(y=>{for(let m=0;m<u.length;m++){const g=u[m];if(Rc(g,y.element))return u.splice(m,1),!1}for(let m=0;m<f.length;m++){const g=f[m];if(Rc(g,y.element))return f.splice(m,1),!1}return!0}),f.forEach(y=>{var m;return(m=y.parentNode)==null?void 0:m.removeChild(y)}),u.forEach(y=>{var m;return(m=y.parentNode)==null?void 0:m.removeChild(y)}),d.forEach(y=>{y.body===!0?a.insertAdjacentElement("beforeend",y.element):l.insertBefore(y.element,c)}),c.setAttribute("content",""+(p-u.length+d.filter(y=>!y.body).length))},Lm=t=>{let n=[],o=new Set;t&&n.push(kt(t));const s={install(r){r.config.globalProperties.$head=s,r.provide(au,s)},get headTags(){const r=[],l=n.map(a=>C(a).titleTemplate).reverse().find(a=>a!=null);return n.forEach(a=>{Fm(C(a)).forEach(i=>{const p=Rm(i);if(p){let u=-1;for(let f=0;f<r.length;f++){const d=r[f];if(d.tag===i.tag&&((p===!0||p.propValue&&C(d.props[p.propValue])===C(i.props[p.propValue])||p.propKey&&d.props[p.propKey]&&i.props[p.propKey])&&(u=f),u!==-1))break}u!==-1&&r.splice(u,1)}l&&i.tag==="title"&&(i.props.children=Om(l,i.props.children)),r.push(i)})}),r},addHeadObjs(r){n.push(r)},removeHeadObjs(r){n=n.filter(l=>l!==r)},updateDOM(r=window.document){let l,a={},c={};const i={};for(const u of s.headTags.sort(Nm)){if(u.tag==="title"){l=u.props.children;continue}if(u.tag==="htmlAttrs"){Object.assign(a,u.props);continue}if(u.tag==="bodyAttrs"){Object.assign(c,u.props);continue}i[u.tag]=i[u.tag]||[],i[u.tag].push(u)}l!==void 0&&(r.title=l),Pc(r.documentElement,a),Pc(r.body,c);const p=new Set([...Object.keys(i),...o]);for(const u of p)Mm(r,u,i[u]||[]);o.clear(),Object.keys(i).forEach(u=>o.add(u))}};return s},Hm=typeof window<"u",Im=t=>{const n=Pm(),o=N(t);n.addHeadObjs(o),Hm&&(vo(()=>{n.updateDOM()}),ir(()=>{n.removeHeadObjs(o),n.updateDOM()}))},Nm=(t,n)=>{const o=s=>{if(s.props.renderPriority)return s.props.renderPriority;switch(s.tag){case"base":return-1;case"meta":return s.props.charset?-2:s.props["http-equiv"]==="content-security-policy"?0:10;default:return 10}};return o(t)-o(n)};const Mo=Symbol("v-click-clicks"),_n=Symbol("v-click-clicks-elements"),ml=Symbol("v-click-clicks-order-map"),Lo=Symbol("v-click-clicks-disabled"),iu=Symbol("slidev-slide-scale"),W=Symbol("slidev-slidev-context"),jm=Symbol("slidev-route"),qm=Symbol("slidev-slide-context"),An="slidev-vclick-target",kr="slidev-vclick-hidden",Um="slidev-vclick-fade",Rr="slidev-vclick-hidden-explicitly",wo="slidev-vclick-current",Ds="slidev-vclick-prior";function Jm(t){return t=t||[],Array.isArray(t)?t:[t]}function hl(t,n){if(!t)return!1;const o=t.indexOf(n);return o>=0?(t.splice(o,1),!0):!1}function Vm(...t){let n,o,s;t.length===1?(n=0,s=1,[o]=t):[n,o,s=1]=t;const r=[];let l=n;for(;l<o;)r.push(l),l+=s||1;return r}function Wm(t){return t!=null}function zm(t,n){return Object.fromEntries(Object.entries(t).map(([o,s])=>n(o,s)).filter(Wm))}const wn={theme:"default",title:"TypeSafe Development with TypeScript",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,info:!1,highlighter:"prism",lineNumbers:!0,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:1024,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Avenir Next"','"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Avenir Next","Nunito Sans","Fira Code"],provider:"google",local:["Avenir Next"],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"windicss"},Ae=wn;var ap;const an=(ap=Ae.aspectRatio)!=null?ap:16/9;var cp;const Rn=(cp=Ae.canvasWidth)!=null?cp:980,pu=Math.round(Rn/an),uu=T(()=>zm(Ae.themeConfig||{},(t,n)=>[`--slidev-theme-${t}`,n]));function At(t,n,o){Object.defineProperty(t,n,{value:o,writable:!0,enumerable:!1})}const In=$e({page:0,clicks:0});let Km=[],Ym=[];At(In,"$syncUp",!0);At(In,"$syncDown",!0);At(In,"$paused",!1);At(In,"$onSet",t=>Km.push(t));At(In,"$onPatch",t=>Ym.push(t));At(In,"$patch",async()=>!1);function fu(t,n,o=!1){const s=[];let r=!1,l=!1,a,c;const i=$e(n);function p(y){s.push(y)}function u(y,m){clearTimeout(a),r=!0,i[y]=m,a=setTimeout(()=>r=!1,0)}function f(y){r||(clearTimeout(c),l=!0,Object.entries(y).forEach(([m,g])=>{i[m]=g}),c=setTimeout(()=>l=!1,0))}function d(y){let m;o?o&&window.addEventListener("storage",A=>{A&&A.key===y&&A.newValue&&f(JSON.parse(A.newValue))}):(m=new BroadcastChannel(y),m.addEventListener("message",A=>f(A.data)));function g(){!o&&m&&!l?m.postMessage(Be(i)):o&&!l&&window.localStorage.setItem(y,JSON.stringify(i)),r||s.forEach(A=>A(i))}if(ue(i,g,{deep:!0}),o){const A=window.localStorage.getItem(y);A&&f(JSON.parse(A))}}return{init:d,onPatch:p,patch:u,state:i}}const{init:Gm,onPatch:Zm,patch:$c,state:Pr}=fu(In,{page:1,clicks:0}),Nn=$e({});let Qm=[],Xm=[];At(Nn,"$syncUp",!0);At(Nn,"$syncDown",!0);At(Nn,"$paused",!1);At(Nn,"$onSet",t=>Qm.push(t));At(Nn,"$onPatch",t=>Xm.push(t));At(Nn,"$patch",async()=>!1);const{init:eh,onPatch:th,patch:du,state:Ns}=fu(Nn,{},!1),nh="modulepreload",oh=function(t){return"/pirum-meetup-09-2022/"+t},Oc={},Ao=function(n,o,s){return!o||o.length===0?n():Promise.all(o.map(r=>{if(r=oh(r),r in Oc)return;Oc[r]=!0;const l=r.endsWith(".css"),a=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=l?"stylesheet":nh,l||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),l)return new Promise((i,p)=>{c.addEventListener("load",i),c.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>n())};var Fc;const Rt=typeof window<"u",sh=t=>typeof t<"u",rh=Object.prototype.toString,js=t=>typeof t=="function",lh=t=>typeof t=="number",yu=t=>typeof t=="string",gl=t=>rh.call(t)==="[object Object]",vl=()=>+Date.now(),Pn=()=>{};Rt&&((Fc=window==null?void 0:window.navigator)==null?void 0:Fc.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function nt(t){return typeof t=="function"?t():C(t)}function ah(t,n){function o(...s){t(()=>n.apply(this,s),{fn:n,thisArg:this,args:s})}return o}const mu=t=>t();function ch(t=mu){const n=N(!0);function o(){n.value=!1}function s(){n.value=!0}return{isActive:n,pause:o,resume:s,eventFilter:(...l)=>{n.value&&t(...l)}}}function ih(t){return t}function ph(t,n){var o;if(typeof t=="number")return t+n;const s=((o=t.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:o[0])||"",r=t.slice(s.length),l=parseFloat(s)+n;return Number.isNaN(l)?t:l+r}function uh(t,n){let o,s,r;const l=N(!0),a=()=>{l.value=!0,r()};ue(t,a,{flush:"sync"});const c=js(n)?n:n.get,i=js(n)?void 0:n.set,p=Rp((u,f)=>(s=u,r=f,{get(){return l.value&&(o=c(),l.value=!1),s(),o},set(d){i==null||i(d)}}));return Object.isExtensible(p)&&(p.trigger=a),p}function Yt(t){return hp()?(gp(t),!0):!1}function fh(t){if(!_e(t))return $e(t);const n=new Proxy({},{get(o,s,r){return C(Reflect.get(t.value,s,r))},set(o,s,r){return _e(t.value[s])&&!_e(r)?t.value[s].value=r:t.value[s]=r,!0},deleteProperty(o,s){return Reflect.deleteProperty(t.value,s)},has(o,s){return Reflect.has(t.value,s)},ownKeys(){return Object.keys(t.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return $e(n)}function hu(t){return typeof t=="function"?T(t):N(t)}var dh=Object.defineProperty,yh=Object.defineProperties,mh=Object.getOwnPropertyDescriptors,Mc=Object.getOwnPropertySymbols,hh=Object.prototype.hasOwnProperty,gh=Object.prototype.propertyIsEnumerable,Lc=(t,n,o)=>n in t?dh(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,vh=(t,n)=>{for(var o in n||(n={}))hh.call(n,o)&&Lc(t,o,n[o]);if(Mc)for(var o of Mc(n))gh.call(n,o)&&Lc(t,o,n[o]);return t},Eh=(t,n)=>yh(t,mh(n));function Ah(t){if(!_e(t))return Qd(t);const n=Array.isArray(t.value)?new Array(t.value.length):{};for(const o in t.value)n[o]=Rp(()=>({get(){return t.value[o]},set(s){if(Array.isArray(t.value)){const r=[...t.value];r[o]=s,t.value=r}else{const r=Eh(vh({},t.value),{[o]:s});Object.setPrototypeOf(r,t.value),t.value=r}}}));return n}function gu(t,n=!0){Hn()?Eo(t):n?t():ot(t)}function Bh(t){Hn()&&pr(t)}function Dh(t,n=1e3,o={}){const{immediate:s=!0,immediateCallback:r=!1}=o;let l=null;const a=N(!1);function c(){l&&(clearInterval(l),l=null)}function i(){a.value=!1,c()}function p(){C(n)<=0||(a.value=!0,r&&t(),c(),l=setInterval(t,nt(n)))}if(s&&Rt&&p(),_e(n)){const u=ue(n,()=>{a.value&&Rt&&p()});Yt(u)}return Yt(i),{isActive:a,pause:i,resume:p}}function _h(t,n,o={}){const{immediate:s=!0}=o,r=N(!1);let l=null;function a(){l&&(clearTimeout(l),l=null)}function c(){r.value=!1,a()}function i(...p){a(),r.value=!0,l=setTimeout(()=>{r.value=!1,l=null,t(...p)},nt(n))}return s&&(r.value=!0,Rt&&i()),Yt(c),{isPending:r,start:i,stop:c}}function vu(t=!1,n={}){const{truthyValue:o=!0,falsyValue:s=!1}=n,r=_e(t),l=N(t);function a(c){if(arguments.length)return l.value=c,l.value;{const i=nt(o);return l.value=l.value===i?nt(s):i,l.value}}return r?a:[l,a]}var Hc=Object.getOwnPropertySymbols,Ch=Object.prototype.hasOwnProperty,bh=Object.prototype.propertyIsEnumerable,wh=(t,n)=>{var o={};for(var s in t)Ch.call(t,s)&&n.indexOf(s)<0&&(o[s]=t[s]);if(t!=null&&Hc)for(var s of Hc(t))n.indexOf(s)<0&&bh.call(t,s)&&(o[s]=t[s]);return o};function xh(t,n,o={}){const s=o,{eventFilter:r=mu}=s,l=wh(s,["eventFilter"]);return ue(t,ah(r,n),l)}var Th=Object.defineProperty,Sh=Object.defineProperties,kh=Object.getOwnPropertyDescriptors,qs=Object.getOwnPropertySymbols,Eu=Object.prototype.hasOwnProperty,Au=Object.prototype.propertyIsEnumerable,Ic=(t,n,o)=>n in t?Th(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,Rh=(t,n)=>{for(var o in n||(n={}))Eu.call(n,o)&&Ic(t,o,n[o]);if(qs)for(var o of qs(n))Au.call(n,o)&&Ic(t,o,n[o]);return t},Ph=(t,n)=>Sh(t,kh(n)),$h=(t,n)=>{var o={};for(var s in t)Eu.call(t,s)&&n.indexOf(s)<0&&(o[s]=t[s]);if(t!=null&&qs)for(var s of qs(t))n.indexOf(s)<0&&Au.call(t,s)&&(o[s]=t[s]);return o};function Oh(t,n,o={}){const s=o,{eventFilter:r}=s,l=$h(s,["eventFilter"]),{eventFilter:a,pause:c,resume:i,isActive:p}=ch(r);return{stop:xh(t,n,Ph(Rh({},l),{eventFilter:a})),pause:c,resume:i,isActive:p}}function wt(t){var n;const o=nt(t);return(n=o==null?void 0:o.$el)!=null?n:o}const Qe=Rt?window:void 0,Fh=Rt?window.document:void 0,Mh=Rt?window.navigator:void 0;function ie(...t){let n,o,s,r;if(yu(t[0])?([o,s,r]=t,n=Qe):[n,o,s,r]=t,!n)return Pn;let l=Pn;const a=ue(()=>wt(n),i=>{l(),i&&(i.addEventListener(o,s,r),l=()=>{i.removeEventListener(o,s,r),l=Pn})},{immediate:!0,flush:"post"}),c=()=>{a(),l()};return Yt(c),c}function Lh(t,n,o={}){const{window:s=Qe,ignore:r,capture:l=!0,detectIframe:a=!1}=o;if(!s)return;const c=N(!0);let i;const p=y=>{s.clearTimeout(i);const m=wt(t);!m||m===y.target||y.composedPath().includes(m)||!c.value||n(y)},u=y=>r&&r.some(m=>{const g=wt(m);return g&&(y.target===g||y.composedPath().includes(g))}),f=[ie(s,"click",p,{passive:!0,capture:l}),ie(s,"pointerdown",y=>{const m=wt(t);c.value=!!m&&!y.composedPath().includes(m)&&!u(y)},{passive:!0}),ie(s,"pointerup",y=>{if(y.button===0){const m=y.composedPath();y.composedPath=()=>m,i=s.setTimeout(()=>p(y),50)}},{passive:!0}),a&&ie(s,"blur",y=>{var m;const g=wt(t);((m=document.activeElement)==null?void 0:m.tagName)==="IFRAME"&&!(g!=null&&g.contains(document.activeElement))&&n(y)})].filter(Boolean);return()=>f.forEach(y=>y())}const Hh=t=>typeof t=="function"?t:typeof t=="string"?n=>n.key===t:Array.isArray(t)?n=>t.includes(n.key):()=>!0;function Ih(...t){let n,o,s={};t.length===3?(n=t[0],o=t[1],s=t[2]):t.length===2?typeof t[1]=="object"?(n=!0,o=t[0],s=t[1]):(n=t[0],o=t[1]):(n=!0,o=t[0]);const{target:r=Qe,eventName:l="keydown",passive:a=!1}=s,c=Hh(n);return ie(r,l,p=>{c(p)&&o(p)},a)}function Nh(t={}){const{window:n=Qe}=t,o=uh(()=>null,()=>n==null?void 0:n.document.activeElement);return n&&(ie(n,"blur",o.trigger,!0),ie(n,"focus",o.trigger,!0)),o}function is(t,n=!1){const o=N(),s=()=>o.value=Boolean(t());return s(),gu(s,n),o}function zn(t,n={}){const{window:o=Qe}=n,s=is(()=>o&&"matchMedia"in o&&typeof o.matchMedia=="function");let r;const l=N(!1),a=()=>{!r||("removeEventListener"in r?r.removeEventListener("change",c):r.removeListener(c))},c=()=>{!s.value||(a(),r=o.matchMedia(hu(t).value),l.value=r.matches,"addEventListener"in r?r.addEventListener("change",c):r.addListener(c))};return vo(c),Yt(()=>a()),l}const jh={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var qh=Object.defineProperty,Nc=Object.getOwnPropertySymbols,Uh=Object.prototype.hasOwnProperty,Jh=Object.prototype.propertyIsEnumerable,jc=(t,n,o)=>n in t?qh(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,Vh=(t,n)=>{for(var o in n||(n={}))Uh.call(n,o)&&jc(t,o,n[o]);if(Nc)for(var o of Nc(n))Jh.call(n,o)&&jc(t,o,n[o]);return t};function Wh(t,n={}){function o(c,i){let p=t[c];return i!=null&&(p=ph(p,i)),typeof p=="number"&&(p=`${p}px`),p}const{window:s=Qe}=n;function r(c){return s?s.matchMedia(c).matches:!1}const l=c=>zn(`(min-width: ${o(c)})`,n),a=Object.keys(t).reduce((c,i)=>(Object.defineProperty(c,i,{get:()=>l(i),enumerable:!0,configurable:!0}),c),{});return Vh({greater(c){return zn(`(min-width: ${o(c,.1)})`,n)},greaterOrEqual:l,smaller(c){return zn(`(max-width: ${o(c,-.1)})`,n)},smallerOrEqual(c){return zn(`(max-width: ${o(c)})`,n)},between(c,i){return zn(`(min-width: ${o(c)}) and (max-width: ${o(i,-.1)})`,n)},isGreater(c){return r(`(min-width: ${o(c,.1)})`)},isGreaterOrEqual(c){return r(`(min-width: ${o(c)})`)},isSmaller(c){return r(`(max-width: ${o(c,-.1)})`)},isSmallerOrEqual(c){return r(`(max-width: ${o(c)})`)},isInBetween(c,i){return r(`(min-width: ${o(c)}) and (max-width: ${o(i,-.1)})`)}},a)}function zh(t={}){const{navigator:n=Mh,read:o=!1,source:s,copiedDuring:r=1500}=t,l=["copy","cut"],a=is(()=>n&&"clipboard"in n),c=N(""),i=N(!1),p=_h(()=>i.value=!1,r);function u(){n.clipboard.readText().then(d=>{c.value=d})}if(a.value&&o)for(const d of l)ie(d,u);async function f(d=nt(s)){a.value&&d!=null&&(await n.clipboard.writeText(d),c.value=d,i.value=!0,p.start())}return{isSupported:a,text:c,copied:i,copy:f}}function Kh(t){return JSON.parse(JSON.stringify(t))}const El=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Al="__vueuse_ssr_handlers__";El[Al]=El[Al]||{};const Yh=El[Al];function Gh(t,n){return Yh[t]||n}function Zh(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"||Array.isArray(t)?"object":Number.isNaN(t)?"any":"number"}var Qh=Object.defineProperty,qc=Object.getOwnPropertySymbols,Xh=Object.prototype.hasOwnProperty,e5=Object.prototype.propertyIsEnumerable,Uc=(t,n,o)=>n in t?Qh(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,Jc=(t,n)=>{for(var o in n||(n={}))Xh.call(n,o)&&Uc(t,o,n[o]);if(qc)for(var o of qc(n))e5.call(n,o)&&Uc(t,o,n[o]);return t};const t5={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}};function $t(t,n,o,s={}){var r;const{flush:l="pre",deep:a=!0,listenToStorageChanges:c=!0,writeDefaults:i=!0,mergeDefaults:p=!1,shallow:u,window:f=Qe,eventFilter:d,onError:y=$=>{console.error($)}}=s,m=(u?kt:N)(n);if(!o)try{o=Gh("getDefaultStorage",()=>{var $;return($=Qe)==null?void 0:$.localStorage})()}catch($){y($)}if(!o)return m;const g=nt(n),A=Zh(g),B=(r=s.serializer)!=null?r:t5[A],{pause:D,resume:E}=Oh(m,()=>_(m.value),{flush:l,deep:a,eventFilter:d});return f&&c&&ie(f,"storage",R),R(),m;function _($){try{$==null?o.removeItem(t):o.setItem(t,B.write($))}catch(J){y(J)}}function S($){if(!($&&$.key!==t)){D();try{const J=$?$.newValue:o.getItem(t);if(J==null)return i&&g!==null&&o.setItem(t,B.write(g)),g;if(!$&&p){const te=B.read(J);return js(p)?p(te,g):A==="object"&&!Array.isArray(te)?Jc(Jc({},g),te):te}else return typeof J!="string"?J:B.read(J)}catch(J){y(J)}finally{E()}}}function R($){$&&$.key!==t||(m.value=S($))}}function n5(t){return zn("(prefers-color-scheme: dark)",t)}var o5=Object.defineProperty,s5=Object.defineProperties,r5=Object.getOwnPropertyDescriptors,Vc=Object.getOwnPropertySymbols,l5=Object.prototype.hasOwnProperty,a5=Object.prototype.propertyIsEnumerable,Wc=(t,n,o)=>n in t?o5(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,c5=(t,n)=>{for(var o in n||(n={}))l5.call(n,o)&&Wc(t,o,n[o]);if(Vc)for(var o of Vc(n))a5.call(n,o)&&Wc(t,o,n[o]);return t},i5=(t,n)=>s5(t,r5(n));function sw(t,n={}){var o,s,r;const l=(o=n.draggingElement)!=null?o:Qe,a=(s=n.handle)!=null?s:t,c=N((r=nt(n.initialValue))!=null?r:{x:0,y:0}),i=N(),p=m=>n.pointerTypes?n.pointerTypes.includes(m.pointerType):!0,u=m=>{nt(n.preventDefault)&&m.preventDefault(),nt(n.stopPropagation)&&m.stopPropagation()},f=m=>{var g;if(!p(m)||nt(n.exact)&&m.target!==nt(t))return;const A=nt(t).getBoundingClientRect(),B={x:m.pageX-A.left,y:m.pageY-A.top};((g=n.onStart)==null?void 0:g.call(n,B,m))!==!1&&(i.value=B,u(m))},d=m=>{var g;!p(m)||!i.value||(c.value={x:m.pageX-i.value.x,y:m.pageY-i.value.y},(g=n.onMove)==null||g.call(n,c.value,m),u(m))},y=m=>{var g;!p(m)||!i.value||(i.value=void 0,(g=n.onEnd)==null||g.call(n,c.value,m),u(m))};return Rt&&(ie(a,"pointerdown",f,!0),ie(l,"pointermove",d,!0),ie(l,"pointerup",y,!0)),i5(c5({},Ah(c)),{position:c,isDragging:T(()=>!!i.value),style:T(()=>`left:${c.value.x}px;top:${c.value.y}px;`)})}var zc=Object.getOwnPropertySymbols,p5=Object.prototype.hasOwnProperty,u5=Object.prototype.propertyIsEnumerable,f5=(t,n)=>{var o={};for(var s in t)p5.call(t,s)&&n.indexOf(s)<0&&(o[s]=t[s]);if(t!=null&&zc)for(var s of zc(t))n.indexOf(s)<0&&u5.call(t,s)&&(o[s]=t[s]);return o};function d5(t,n,o={}){const s=o,{window:r=Qe}=s,l=f5(s,["window"]);let a;const c=is(()=>r&&"ResizeObserver"in r),i=()=>{a&&(a.disconnect(),a=void 0)},p=ue(()=>wt(t),f=>{i(),c.value&&r&&f&&(a=new ResizeObserver(n),a.observe(f,l))},{immediate:!0,flush:"post"}),u=()=>{i(),p()};return Yt(u),{isSupported:c,stop:u}}function y5(t,n={}){const{immediate:o=!0,window:s=Qe}=n,r=N(!1);let l=null;function a(){!r.value||!s||(t(),l=s.requestAnimationFrame(a))}function c(){!r.value&&s&&(r.value=!0,a())}function i(){r.value=!1,l!=null&&s&&(s.cancelAnimationFrame(l),l=null)}return o&&c(),Yt(i),{isActive:r,pause:i,resume:c}}function m5(t,n={width:0,height:0},o={}){const{box:s="content-box"}=o,r=N(n.width),l=N(n.height);return d5(t,([a])=>{const c=s==="border-box"?a.borderBoxSize:s==="content-box"?a.contentBoxSize:a.devicePixelContentBoxSize;c?(r.value=c.reduce((i,{inlineSize:p})=>i+p,0),l.value=c.reduce((i,{blockSize:p})=>i+p,0)):(r.value=a.contentRect.width,l.value=a.contentRect.height)},o),ue(()=>wt(t),a=>{r.value=a?n.width:0,l.value=a?n.height:0}),{width:r,height:l}}const Kc=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function h5(t,n={}){const{document:o=Fh,autoExit:s=!1}=n,r=t||(o==null?void 0:o.querySelector("html")),l=N(!1);let a=Kc[0];const c=is(()=>{if(o){for(const g of Kc)if(g[1]in o)return a=g,!0}else return!1;return!1}),[i,p,u,,f]=a;async function d(){!c.value||(o!=null&&o[u]&&await o[p](),l.value=!1)}async function y(){if(!c.value)return;await d();const g=wt(r);g&&(await g[i](),l.value=!0)}async function m(){l.value?await d():await y()}return o&&ie(o,f,()=>{l.value=!!(o!=null&&o[u])},!1),s&&Yt(d),{isSupported:c,isFullscreen:l,enter:y,exit:d,toggle:m}}function g5(t,n,o={}){const{root:s,rootMargin:r="0px",threshold:l=.1,window:a=Qe}=o,c=is(()=>a&&"IntersectionObserver"in a);let i=Pn;const p=c.value?ue(()=>({el:wt(t),root:wt(s)}),({el:f,root:d})=>{if(i(),!f)return;const y=new IntersectionObserver(n,{root:d,rootMargin:r,threshold:l});y.observe(f),i=()=>{y.disconnect(),i=Pn}},{immediate:!0,flush:"post"}):Pn,u=()=>{i(),p()};return Yt(u),{isSupported:c,stop:u}}const v5={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function E5(t={}){const{reactive:n=!1,target:o=Qe,aliasMap:s=v5,passive:r=!0,onEventFired:l=Pn}=t,a=$e(new Set),c={toJSON(){return{}},current:a},i=n?$e(c):c,p=new Set,u=new Set;function f(g,A){g in i&&(n?i[g]=A:i[g].value=A)}function d(){for(const g of u)f(g,!1)}function y(g,A){var B,D;const E=(B=g.key)==null?void 0:B.toLowerCase(),S=[(D=g.code)==null?void 0:D.toLowerCase(),E].filter(Boolean);E&&(A?a.add(E):a.delete(E));for(const R of S)u.add(R),f(R,A);E==="meta"&&!A?(p.forEach(R=>{a.delete(R),f(R,!1)}),p.clear()):typeof g.getModifierState=="function"&&g.getModifierState("Meta")&&A&&[...a,...S].forEach(R=>p.add(R))}ie(o,"keydown",g=>(y(g,!0),l(g)),{passive:r}),ie(o,"keyup",g=>(y(g,!1),l(g)),{passive:r}),ie("blur",d,{passive:!0}),ie("focus",d,{passive:!0});const m=new Proxy(i,{get(g,A,B){if(typeof A!="string")return Reflect.get(g,A,B);if(A=A.toLowerCase(),A in s&&(A=s[A]),!(A in i))if(/[+_-]/.test(A)){const E=A.split(/[+_-]/g).map(_=>_.trim());i[A]=T(()=>E.every(_=>C(m[_])))}else i[A]=N(!1);const D=Reflect.get(g,A,B);return n?C(D):D}});return m}function rw(t={}){const{type:n="page",touch:o=!0,resetOnTouchEnds:s=!1,initialValue:r={x:0,y:0},window:l=Qe,eventFilter:a}=t,c=N(r.x),i=N(r.y),p=N(null),u=g=>{n==="page"?(c.value=g.pageX,i.value=g.pageY):n==="client"&&(c.value=g.clientX,i.value=g.clientY),p.value="mouse"},f=()=>{c.value=r.x,i.value=r.y},d=g=>{if(g.touches.length>0){const A=g.touches[0];n==="page"?(c.value=A.pageX,i.value=A.pageY):n==="client"&&(c.value=A.clientX,i.value=A.clientY),p.value="touch"}},y=g=>a===void 0?u(g):a(()=>u(g),{}),m=g=>a===void 0?d(g):a(()=>d(g),{});return l&&(ie(l,"mousemove",y,{passive:!0}),ie(l,"dragover",y,{passive:!0}),o&&(ie(l,"touchstart",m,{passive:!0}),ie(l,"touchmove",m,{passive:!0}),s&&ie(l,"touchend",f,{passive:!0}))),{x:c,y:i,sourceType:p}}var zt;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(zt||(zt={}));function A5(t,n={}){const o=hu(t),{threshold:s=50,onSwipe:r,onSwipeEnd:l,onSwipeStart:a}=n,c=$e({x:0,y:0}),i=(R,$)=>{c.x=R,c.y=$},p=$e({x:0,y:0}),u=(R,$)=>{p.x=R,p.y=$},f=T(()=>c.x-p.x),d=T(()=>c.y-p.y),{max:y,abs:m}=Math,g=T(()=>y(m(f.value),m(d.value))>=s),A=N(!1),B=N(!1),D=T(()=>g.value?m(f.value)>m(d.value)?f.value>0?zt.LEFT:zt.RIGHT:d.value>0?zt.UP:zt.DOWN:zt.NONE),E=R=>n.pointerTypes?n.pointerTypes.includes(R.pointerType):!0,_=[ie(t,"pointerdown",R=>{var $,J;if(!E(R))return;B.value=!0,(J=($=o.value)==null?void 0:$.style)==null||J.setProperty("touch-action","none");const te=R.target;te==null||te.setPointerCapture(R.pointerId);const{clientX:ne,clientY:pe}=R;i(ne,pe),u(ne,pe),a==null||a(R)}),ie(t,"pointermove",R=>{if(!E(R)||!B.value)return;const{clientX:$,clientY:J}=R;u($,J),!A.value&&g.value&&(A.value=!0),A.value&&(r==null||r(R))}),ie(t,"pointerup",R=>{var $,J;!E(R)||(A.value&&(l==null||l(R,D.value)),B.value=!1,A.value=!1,(J=($=o.value)==null?void 0:$.style)==null||J.setProperty("touch-action","initial"))})],S=()=>_.forEach(R=>R());return{isSwiping:Yn(A),direction:Yn(D),posStart:Yn(c),posEnd:Yn(p),distanceX:f,distanceY:d,stop:S}}var B5=Object.defineProperty,Yc=Object.getOwnPropertySymbols,D5=Object.prototype.hasOwnProperty,_5=Object.prototype.propertyIsEnumerable,Gc=(t,n,o)=>n in t?B5(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,C5=(t,n)=>{for(var o in n||(n={}))D5.call(n,o)&&Gc(t,o,n[o]);if(Yc)for(var o of Yc(n))_5.call(n,o)&&Gc(t,o,n[o]);return t};function lw(t={}){const{controls:n=!1,offset:o=0,immediate:s=!0,interval:r="requestAnimationFrame",callback:l}=t,a=N(vl()+o),c=()=>a.value=vl()+o,i=l?()=>{c(),l(a.value)}:c,p=r==="requestAnimationFrame"?y5(i,{immediate:s}):Dh(i,r,{immediate:s});return n?C5({timestamp:a},p):a}var b5=Object.defineProperty,Zc=Object.getOwnPropertySymbols,w5=Object.prototype.hasOwnProperty,x5=Object.prototype.propertyIsEnumerable,Qc=(t,n,o)=>n in t?b5(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,T5=(t,n)=>{for(var o in n||(n={}))w5.call(n,o)&&Qc(t,o,n[o]);if(Zc)for(var o of Zc(n))x5.call(n,o)&&Qc(t,o,n[o]);return t};const S5={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};T5({linear:ih},S5);function Ht(t,n,o,s={}){var r,l,a;const{clone:c=!1,passive:i=!1,eventName:p,deep:u=!1,defaultValue:f}=s,d=Hn(),y=o||(d==null?void 0:d.emit)||((r=d==null?void 0:d.$emit)==null?void 0:r.bind(d))||((a=(l=d==null?void 0:d.proxy)==null?void 0:l.$emit)==null?void 0:a.bind(d==null?void 0:d.proxy));let m=p;n||(n="modelValue"),m=p||m||`update:${n.toString()}`;const g=B=>c?js(c)?c(B):Kh(B):B,A=()=>sh(t[n])?g(t[n]):f;if(i){const B=A(),D=N(B);return ue(()=>t[n],E=>D.value=g(E)),ue(D,E=>{(E!==t[n]||u)&&y(m,E)},{deep:u}),D}else return T({get(){return A()},set(B){y(m,B)}})}function aw({window:t=Qe}={}){if(!t)return N(!1);const n=N(t.document.hasFocus());return ie(t,"blur",()=>{n.value=!1}),ie(t,"focus",()=>{n.value=!0}),n}function k5(t={}){const{window:n=Qe,initialWidth:o=1/0,initialHeight:s=1/0,listenOrientation:r=!0,includeScrollbar:l=!0}=t,a=N(o),c=N(s),i=()=>{n&&(l?(a.value=n.innerWidth,c.value=n.innerHeight):(a.value=n.document.documentElement.clientWidth,c.value=n.document.documentElement.clientHeight))};return i(),gu(i),ie("resize",i,{passive:!0}),r&&ie("orientationchange",i,{passive:!0}),{width:a,height:c}}/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Kn=typeof window<"u";function R5(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const we=Object.assign;function $r(t,n){const o={};for(const s in n){const r=n[s];o[s]=Pt(r)?r.map(t):t(r)}return o}const Ho=()=>{},Pt=Array.isArray,P5=/\/$/,$5=t=>t.replace(P5,"");function Or(t,n,o="/"){let s,r={},l="",a="";const c=n.indexOf("#");let i=n.indexOf("?");return c<i&&c>=0&&(i=-1),i>-1&&(s=n.slice(0,i),l=n.slice(i+1,c>-1?c:n.length),r=t(l)),c>-1&&(s=s||n.slice(0,c),a=n.slice(c,n.length)),s=L5(s!=null?s:n,o),{fullPath:s+(l&&"?")+l+a,path:s,query:r,hash:a}}function O5(t,n){const o=n.query?t(n.query):"";return n.path+(o&&"?")+o+(n.hash||"")}function Xc(t,n){return!n||!t.toLowerCase().startsWith(n.toLowerCase())?t:t.slice(n.length)||"/"}function F5(t,n,o){const s=n.matched.length-1,r=o.matched.length-1;return s>-1&&s===r&&co(n.matched[s],o.matched[r])&&Bu(n.params,o.params)&&t(n.query)===t(o.query)&&n.hash===o.hash}function co(t,n){return(t.aliasOf||t)===(n.aliasOf||n)}function Bu(t,n){if(Object.keys(t).length!==Object.keys(n).length)return!1;for(const o in t)if(!M5(t[o],n[o]))return!1;return!0}function M5(t,n){return Pt(t)?ei(t,n):Pt(n)?ei(n,t):t===n}function ei(t,n){return Pt(n)?t.length===n.length&&t.every((o,s)=>o===n[s]):t.length===1&&t[0]===n}function L5(t,n){if(t.startsWith("/"))return t;if(!t)return n;const o=n.split("/"),s=t.split("/");let r=o.length-1,l,a;for(l=0;l<s.length;l++)if(a=s[l],a!==".")if(a==="..")r>1&&r--;else break;return o.slice(0,r).join("/")+"/"+s.slice(l-(l===s.length?1:0)).join("/")}var Xo;(function(t){t.pop="pop",t.push="push"})(Xo||(Xo={}));var Io;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Io||(Io={}));function H5(t){if(!t)if(Kn){const n=document.querySelector("base");t=n&&n.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),$5(t)}const I5=/^[^#]+#/;function N5(t,n){return t.replace(I5,"#")+n}function j5(t,n){const o=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:n.behavior,left:s.left-o.left-(n.left||0),top:s.top-o.top-(n.top||0)}}const yr=()=>({left:window.pageXOffset,top:window.pageYOffset});function q5(t){let n;if("el"in t){const o=t.el,s=typeof o=="string"&&o.startsWith("#"),r=typeof o=="string"?s?document.getElementById(o.slice(1)):document.querySelector(o):o;if(!r)return;n=j5(r,t)}else n=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.pageXOffset,n.top!=null?n.top:window.pageYOffset)}function ti(t,n){return(history.state?history.state.position-n:-1)+t}const Bl=new Map;function U5(t,n){Bl.set(t,n)}function J5(t){const n=Bl.get(t);return Bl.delete(t),n}let V5=()=>location.protocol+"//"+location.host;function Du(t,n){const{pathname:o,search:s,hash:r}=n,l=t.indexOf("#");if(l>-1){let c=r.includes(t.slice(l))?t.slice(l).length:1,i=r.slice(c);return i[0]!=="/"&&(i="/"+i),Xc(i,"")}return Xc(o,t)+s+r}function W5(t,n,o,s){let r=[],l=[],a=null;const c=({state:d})=>{const y=Du(t,location),m=o.value,g=n.value;let A=0;if(d){if(o.value=y,n.value=d,a&&a===m){a=null;return}A=g?d.position-g.position:0}else s(y);r.forEach(B=>{B(o.value,m,{delta:A,type:Xo.pop,direction:A?A>0?Io.forward:Io.back:Io.unknown})})};function i(){a=o.value}function p(d){r.push(d);const y=()=>{const m=r.indexOf(d);m>-1&&r.splice(m,1)};return l.push(y),y}function u(){const{history:d}=window;!d.state||d.replaceState(we({},d.state,{scroll:yr()}),"")}function f(){for(const d of l)d();l=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",u),{pauseListeners:i,listen:p,destroy:f}}function ni(t,n,o,s=!1,r=!1){return{back:t,current:n,forward:o,replaced:s,position:window.history.length,scroll:r?yr():null}}function z5(t){const{history:n,location:o}=window,s={value:Du(t,o)},r={value:n.state};r.value||l(s.value,{back:null,current:s.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function l(i,p,u){const f=t.indexOf("#"),d=f>-1?(o.host&&document.querySelector("base")?t:t.slice(f))+i:V5()+t+i;try{n[u?"replaceState":"pushState"](p,"",d),r.value=p}catch(y){console.error(y),o[u?"replace":"assign"](d)}}function a(i,p){const u=we({},n.state,ni(r.value.back,i,r.value.forward,!0),p,{position:r.value.position});l(i,u,!0),s.value=i}function c(i,p){const u=we({},r.value,n.state,{forward:i,scroll:yr()});l(u.current,u,!0);const f=we({},ni(s.value,i,null),{position:u.position+1},p);l(i,f,!1),s.value=i}return{location:s,state:r,push:c,replace:a}}function K5(t){t=H5(t);const n=z5(t),o=W5(t,n.state,n.location,n.replace);function s(l,a=!0){a||o.pauseListeners(),history.go(l)}const r=we({location:"",base:t,go:s,createHref:N5.bind(null,t)},n,o);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>n.state.value}),r}function Y5(t){return typeof t=="string"||t&&typeof t=="object"}function _u(t){return typeof t=="string"||typeof t=="symbol"}const en={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Cu=Symbol("");var oi;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(oi||(oi={}));function io(t,n){return we(new Error,{type:t,[Cu]:!0},n)}function Ut(t,n){return t instanceof Error&&Cu in t&&(n==null||!!(t.type&n))}const si="[^/]+?",G5={sensitive:!1,strict:!1,start:!0,end:!0},Z5=/[.+*?^${}()[\]/\\]/g;function Q5(t,n){const o=we({},G5,n),s=[];let r=o.start?"^":"";const l=[];for(const p of t){const u=p.length?[]:[90];o.strict&&!p.length&&(r+="/");for(let f=0;f<p.length;f++){const d=p[f];let y=40+(o.sensitive?.25:0);if(d.type===0)f||(r+="/"),r+=d.value.replace(Z5,"\\$&"),y+=40;else if(d.type===1){const{value:m,repeatable:g,optional:A,regexp:B}=d;l.push({name:m,repeatable:g,optional:A});const D=B||si;if(D!==si){y+=10;try{new RegExp(`(${D})`)}catch(_){throw new Error(`Invalid custom RegExp for param "${m}" (${D}): `+_.message)}}let E=g?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;f||(E=A&&p.length<2?`(?:/${E})`:"/"+E),A&&(E+="?"),r+=E,y+=20,A&&(y+=-8),g&&(y+=-20),D===".*"&&(y+=-50)}u.push(y)}s.push(u)}if(o.strict&&o.end){const p=s.length-1;s[p][s[p].length-1]+=.7000000000000001}o.strict||(r+="/?"),o.end?r+="$":o.strict&&(r+="(?:/|$)");const a=new RegExp(r,o.sensitive?"":"i");function c(p){const u=p.match(a),f={};if(!u)return null;for(let d=1;d<u.length;d++){const y=u[d]||"",m=l[d-1];f[m.name]=y&&m.repeatable?y.split("/"):y}return f}function i(p){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const y of d)if(y.type===0)u+=y.value;else if(y.type===1){const{value:m,repeatable:g,optional:A}=y,B=m in p?p[m]:"";if(Pt(B)&&!g)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const D=Pt(B)?B.join("/"):B;if(!D)if(A)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${m}"`);u+=D}}return u||"/"}return{re:a,score:s,keys:l,parse:c,stringify:i}}function X5(t,n){let o=0;for(;o<t.length&&o<n.length;){const s=n[o]-t[o];if(s)return s;o++}return t.length<n.length?t.length===1&&t[0]===40+40?-1:1:t.length>n.length?n.length===1&&n[0]===40+40?1:-1:0}function eg(t,n){let o=0;const s=t.score,r=n.score;for(;o<s.length&&o<r.length;){const l=X5(s[o],r[o]);if(l)return l;o++}if(Math.abs(r.length-s.length)===1){if(ri(s))return 1;if(ri(r))return-1}return r.length-s.length}function ri(t){const n=t[t.length-1];return t.length>0&&n[n.length-1]<0}const tg={type:0,value:""},ng=/[a-zA-Z0-9_]/;function og(t){if(!t)return[[]];if(t==="/")return[[tg]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function n(y){throw new Error(`ERR (${o})/"${p}": ${y}`)}let o=0,s=o;const r=[];let l;function a(){l&&r.push(l),l=[]}let c=0,i,p="",u="";function f(){!p||(o===0?l.push({type:0,value:p}):o===1||o===2||o===3?(l.length>1&&(i==="*"||i==="+")&&n(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:p,regexp:u,repeatable:i==="*"||i==="+",optional:i==="*"||i==="?"})):n("Invalid state to consume buffer"),p="")}function d(){p+=i}for(;c<t.length;){if(i=t[c++],i==="\\"&&o!==2){s=o,o=4;continue}switch(o){case 0:i==="/"?(p&&f(),a()):i===":"?(f(),o=1):d();break;case 4:d(),o=s;break;case 1:i==="("?o=2:ng.test(i)?d():(f(),o=0,i!=="*"&&i!=="?"&&i!=="+"&&c--);break;case 2:i===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+i:o=3:u+=i;break;case 3:f(),o=0,i!=="*"&&i!=="?"&&i!=="+"&&c--,u="";break;default:n("Unknown state");break}}return o===2&&n(`Unfinished custom RegExp for param "${p}"`),f(),a(),r}function sg(t,n,o){const s=Q5(og(t.path),o),r=we(s,{record:t,parent:n,children:[],alias:[]});return n&&!r.record.aliasOf==!n.record.aliasOf&&n.children.push(r),r}function rg(t,n){const o=[],s=new Map;n=ci({strict:!1,end:!0,sensitive:!1},n);function r(u){return s.get(u)}function l(u,f,d){const y=!d,m=lg(u);m.aliasOf=d&&d.record;const g=ci(n,u),A=[m];if("alias"in u){const E=typeof u.alias=="string"?[u.alias]:u.alias;for(const _ of E)A.push(we({},m,{components:d?d.record.components:m.components,path:_,aliasOf:d?d.record:m}))}let B,D;for(const E of A){const{path:_}=E;if(f&&_[0]!=="/"){const S=f.record.path,R=S[S.length-1]==="/"?"":"/";E.path=f.record.path+(_&&R+_)}if(B=sg(E,f,g),d?d.alias.push(B):(D=D||B,D!==B&&D.alias.push(B),y&&u.name&&!ai(B)&&a(u.name)),m.children){const S=m.children;for(let R=0;R<S.length;R++)l(S[R],B,d&&d.children[R])}d=d||B,i(B)}return D?()=>{a(D)}:Ho}function a(u){if(_u(u)){const f=s.get(u);f&&(s.delete(u),o.splice(o.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=o.indexOf(u);f>-1&&(o.splice(f,1),u.record.name&&s.delete(u.record.name),u.children.forEach(a),u.alias.forEach(a))}}function c(){return o}function i(u){let f=0;for(;f<o.length&&eg(u,o[f])>=0&&(u.record.path!==o[f].record.path||!bu(u,o[f]));)f++;o.splice(f,0,u),u.record.name&&!ai(u)&&s.set(u.record.name,u)}function p(u,f){let d,y={},m,g;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw io(1,{location:u});g=d.record.name,y=we(li(f.params,d.keys.filter(D=>!D.optional).map(D=>D.name)),u.params&&li(u.params,d.keys.map(D=>D.name))),m=d.stringify(y)}else if("path"in u)m=u.path,d=o.find(D=>D.re.test(m)),d&&(y=d.parse(m),g=d.record.name);else{if(d=f.name?s.get(f.name):o.find(D=>D.re.test(f.path)),!d)throw io(1,{location:u,currentLocation:f});g=d.record.name,y=we({},f.params,u.params),m=d.stringify(y)}const A=[];let B=d;for(;B;)A.unshift(B.record),B=B.parent;return{name:g,path:m,params:y,matched:A,meta:cg(A)}}return t.forEach(u=>l(u)),{addRoute:l,resolve:p,removeRoute:a,getRoutes:c,getRecordMatcher:r}}function li(t,n){const o={};for(const s of n)s in t&&(o[s]=t[s]);return o}function lg(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:ag(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function ag(t){const n={},o=t.props||!1;if("component"in t)n.default=o;else for(const s in t.components)n[s]=typeof o=="boolean"?o:o[s];return n}function ai(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function cg(t){return t.reduce((n,o)=>we(n,o.meta),{})}function ci(t,n){const o={};for(const s in t)o[s]=s in n?n[s]:t[s];return o}function bu(t,n){return n.children.some(o=>o===t||bu(t,o))}const wu=/#/g,ig=/&/g,pg=/\//g,ug=/=/g,fg=/\?/g,xu=/\+/g,dg=/%5B/g,yg=/%5D/g,Tu=/%5E/g,mg=/%60/g,Su=/%7B/g,hg=/%7C/g,ku=/%7D/g,gg=/%20/g;function ha(t){return encodeURI(""+t).replace(hg,"|").replace(dg,"[").replace(yg,"]")}function vg(t){return ha(t).replace(Su,"{").replace(ku,"}").replace(Tu,"^")}function Dl(t){return ha(t).replace(xu,"%2B").replace(gg,"+").replace(wu,"%23").replace(ig,"%26").replace(mg,"`").replace(Su,"{").replace(ku,"}").replace(Tu,"^")}function Eg(t){return Dl(t).replace(ug,"%3D")}function Ag(t){return ha(t).replace(wu,"%23").replace(fg,"%3F")}function Bg(t){return t==null?"":Ag(t).replace(pg,"%2F")}function Us(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Dg(t){const n={};if(t===""||t==="?")return n;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const l=s[r].replace(xu," "),a=l.indexOf("="),c=Us(a<0?l:l.slice(0,a)),i=a<0?null:Us(l.slice(a+1));if(c in n){let p=n[c];Pt(p)||(p=n[c]=[p]),p.push(i)}else n[c]=i}return n}function ii(t){let n="";for(let o in t){const s=t[o];if(o=Eg(o),s==null){s!==void 0&&(n+=(n.length?"&":"")+o);continue}(Pt(s)?s.map(l=>l&&Dl(l)):[s&&Dl(s)]).forEach(l=>{l!==void 0&&(n+=(n.length?"&":"")+o,l!=null&&(n+="="+l))})}return n}function _g(t){const n={};for(const o in t){const s=t[o];s!==void 0&&(n[o]=Pt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return n}const Cg=Symbol(""),pi=Symbol(""),ga=Symbol(""),Ru=Symbol(""),_l=Symbol("");function xo(){let t=[];function n(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function o(){t=[]}return{add:n,list:()=>t,reset:o}}function nn(t,n,o,s,r){const l=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((a,c)=>{const i=f=>{f===!1?c(io(4,{from:o,to:n})):f instanceof Error?c(f):Y5(f)?c(io(2,{from:n,to:f})):(l&&s.enterCallbacks[r]===l&&typeof f=="function"&&l.push(f),a())},p=t.call(s&&s.instances[r],n,o,i);let u=Promise.resolve(p);t.length<3&&(u=u.then(i)),u.catch(f=>c(f))})}function Fr(t,n,o,s){const r=[];for(const l of t)for(const a in l.components){let c=l.components[a];if(!(n!=="beforeRouteEnter"&&!l.instances[a]))if(bg(c)){const p=(c.__vccOpts||c)[n];p&&r.push(nn(p,o,s,l,a))}else{let i=c();r.push(()=>i.then(p=>{if(!p)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${l.path}"`));const u=R5(p)?p.default:p;l.components[a]=u;const d=(u.__vccOpts||u)[n];return d&&nn(d,o,s,l,a)()}))}}return r}function bg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ui(t){const n=H(ga),o=H(Ru),s=T(()=>n.resolve(C(t.to))),r=T(()=>{const{matched:i}=s.value,{length:p}=i,u=i[p-1],f=o.matched;if(!u||!f.length)return-1;const d=f.findIndex(co.bind(null,u));if(d>-1)return d;const y=fi(i[p-2]);return p>1&&fi(u)===y&&f[f.length-1].path!==y?f.findIndex(co.bind(null,i[p-2])):d}),l=T(()=>r.value>-1&&Sg(o.params,s.value.params)),a=T(()=>r.value>-1&&r.value===o.matched.length-1&&Bu(o.params,s.value.params));function c(i={}){return Tg(i)?n[C(t.replace)?"replace":"push"](C(t.to)).catch(Ho):Promise.resolve()}return{route:s,href:T(()=>s.value.href),isActive:l,isExactActive:a,navigate:c}}const wg=De({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ui,setup(t,{slots:n}){const o=$e(ui(t)),{options:s}=H(ga),r=T(()=>({[di(t.activeClass,s.linkActiveClass,"router-link-active")]:o.isActive,[di(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:o.isExactActive}));return()=>{const l=n.default&&n.default(o);return t.custom?l:Ye("a",{"aria-current":o.isExactActive?t.ariaCurrentValue:null,href:o.href,onClick:o.navigate,class:r.value},l)}}}),xg=wg;function Tg(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const n=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return t.preventDefault&&t.preventDefault(),!0}}function Sg(t,n){for(const o in n){const s=n[o],r=t[o];if(typeof s=="string"){if(s!==r)return!1}else if(!Pt(r)||r.length!==s.length||s.some((l,a)=>l!==r[a]))return!1}return!0}function fi(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const di=(t,n,o)=>t!=null?t:n!=null?n:o,kg=De({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:n,slots:o}){const s=H(_l),r=T(()=>t.route||s.value),l=H(pi,0),a=T(()=>{let p=C(l);const{matched:u}=r.value;let f;for(;(f=u[p])&&!f.components;)p++;return p}),c=T(()=>r.value.matched[a.value]);dt(pi,T(()=>a.value+1)),dt(Cg,c),dt(_l,r);const i=N();return ue(()=>[i.value,c.value,t.name],([p,u,f],[d,y,m])=>{u&&(u.instances[f]=p,y&&y!==u&&p&&p===d&&(u.leaveGuards.size||(u.leaveGuards=y.leaveGuards),u.updateGuards.size||(u.updateGuards=y.updateGuards))),p&&u&&(!y||!co(u,y)||!d)&&(u.enterCallbacks[f]||[]).forEach(g=>g(p))},{flush:"post"}),()=>{const p=r.value,u=t.name,f=c.value,d=f&&f.components[u];if(!d)return yi(o.default,{Component:d,route:p});const y=f.props[u],m=y?y===!0?p.params:typeof y=="function"?y(p):y:null,A=Ye(d,we({},m,n,{onVnodeUnmounted:B=>{B.component.isUnmounted&&(f.instances[u]=null)},ref:i}));return yi(o.default,{Component:A,route:p})||A}}});function yi(t,n){if(!t)return null;const o=t(n);return o.length===1?o[0]:o}const Rg=kg;function Pg(t){const n=rg(t.routes,t),o=t.parseQuery||Dg,s=t.stringifyQuery||ii,r=t.history,l=xo(),a=xo(),c=xo(),i=kt(en);let p=en;Kn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=$r.bind(null,k=>""+k),f=$r.bind(null,Bg),d=$r.bind(null,Us);function y(k,j){let I,G;return _u(k)?(I=n.getRecordMatcher(k),G=j):G=k,n.addRoute(G,I)}function m(k){const j=n.getRecordMatcher(k);j&&n.removeRoute(j)}function g(){return n.getRoutes().map(k=>k.record)}function A(k){return!!n.getRecordMatcher(k)}function B(k,j){if(j=we({},j||i.value),typeof k=="string"){const h=Or(o,k,j.path),v=n.resolve({path:h.path},j),w=r.createHref(h.fullPath);return we(h,v,{params:d(v.params),hash:Us(h.hash),redirectedFrom:void 0,href:w})}let I;if("path"in k)I=we({},k,{path:Or(o,k.path,j.path).path});else{const h=we({},k.params);for(const v in h)h[v]==null&&delete h[v];I=we({},k,{params:f(k.params)}),j.params=f(j.params)}const G=n.resolve(I,j),ye=k.hash||"";G.params=u(d(G.params));const Ee=O5(s,we({},k,{hash:vg(ye),path:G.path})),le=r.createHref(Ee);return we({fullPath:Ee,hash:ye,query:s===ii?_g(k.query):k.query||{}},G,{redirectedFrom:void 0,href:le})}function D(k){return typeof k=="string"?Or(o,k,i.value.path):we({},k)}function E(k,j){if(p!==k)return io(8,{from:j,to:k})}function _(k){return $(k)}function S(k){return _(we(D(k),{replace:!0}))}function R(k){const j=k.matched[k.matched.length-1];if(j&&j.redirect){const{redirect:I}=j;let G=typeof I=="function"?I(k):I;return typeof G=="string"&&(G=G.includes("?")||G.includes("#")?G=D(G):{path:G},G.params={}),we({query:k.query,hash:k.hash,params:"path"in G?{}:k.params},G)}}function $(k,j){const I=p=B(k),G=i.value,ye=k.state,Ee=k.force,le=k.replace===!0,h=R(I);if(h)return $(we(D(h),{state:typeof h=="object"?we({},ye,h.state):ye,force:Ee,replace:le}),j||I);const v=I;v.redirectedFrom=j;let w;return!Ee&&F5(s,G,I)&&(w=io(16,{to:v,from:G}),be(G,G,!0,!1)),(w?Promise.resolve(w):te(v,G)).catch(x=>Ut(x)?Ut(x,2)?x:de(x):z(x,v,G)).then(x=>{if(x){if(Ut(x,2))return $(we({replace:le},D(x.to),{state:typeof x.to=="object"?we({},ye,x.to.state):ye,force:Ee}),j||v)}else x=pe(v,G,!0,le,ye);return ne(v,G,x),x})}function J(k,j){const I=E(k,j);return I?Promise.reject(I):Promise.resolve()}function te(k,j){let I;const[G,ye,Ee]=$g(k,j);I=Fr(G.reverse(),"beforeRouteLeave",k,j);for(const h of G)h.leaveGuards.forEach(v=>{I.push(nn(v,k,j))});const le=J.bind(null,k,j);return I.push(le),Un(I).then(()=>{I=[];for(const h of l.list())I.push(nn(h,k,j));return I.push(le),Un(I)}).then(()=>{I=Fr(ye,"beforeRouteUpdate",k,j);for(const h of ye)h.updateGuards.forEach(v=>{I.push(nn(v,k,j))});return I.push(le),Un(I)}).then(()=>{I=[];for(const h of k.matched)if(h.beforeEnter&&!j.matched.includes(h))if(Pt(h.beforeEnter))for(const v of h.beforeEnter)I.push(nn(v,k,j));else I.push(nn(h.beforeEnter,k,j));return I.push(le),Un(I)}).then(()=>(k.matched.forEach(h=>h.enterCallbacks={}),I=Fr(Ee,"beforeRouteEnter",k,j),I.push(le),Un(I))).then(()=>{I=[];for(const h of a.list())I.push(nn(h,k,j));return I.push(le),Un(I)}).catch(h=>Ut(h,8)?h:Promise.reject(h))}function ne(k,j,I){for(const G of c.list())G(k,j,I)}function pe(k,j,I,G,ye){const Ee=E(k,j);if(Ee)return Ee;const le=j===en,h=Kn?history.state:{};I&&(G||le?r.replace(k.fullPath,we({scroll:le&&h&&h.scroll},ye)):r.push(k.fullPath,ye)),i.value=k,be(k,j,I,le),de()}let Fe;function Ce(){Fe||(Fe=r.listen((k,j,I)=>{if(!jn.listening)return;const G=B(k),ye=R(G);if(ye){$(we(ye,{replace:!0}),G).catch(Ho);return}p=G;const Ee=i.value;Kn&&U5(ti(Ee.fullPath,I.delta),yr()),te(G,Ee).catch(le=>Ut(le,12)?le:Ut(le,2)?($(le.to,G).then(h=>{Ut(h,20)&&!I.delta&&I.type===Xo.pop&&r.go(-1,!1)}).catch(Ho),Promise.reject()):(I.delta&&r.go(-I.delta,!1),z(le,G,Ee))).then(le=>{le=le||pe(G,Ee,!1),le&&(I.delta&&!Ut(le,8)?r.go(-I.delta,!1):I.type===Xo.pop&&Ut(le,20)&&r.go(-1,!1)),ne(G,Ee,le)}).catch(Ho)}))}let Me=xo(),Re=xo(),Pe;function z(k,j,I){de(k);const G=Re.list();return G.length?G.forEach(ye=>ye(k,j,I)):console.error(k),Promise.reject(k)}function oe(){return Pe&&i.value!==en?Promise.resolve():new Promise((k,j)=>{Me.add([k,j])})}function de(k){return Pe||(Pe=!k,Ce(),Me.list().forEach(([j,I])=>k?I(k):j()),Me.reset()),k}function be(k,j,I,G){const{scrollBehavior:ye}=t;if(!Kn||!ye)return Promise.resolve();const Ee=!I&&J5(ti(k.fullPath,0))||(G||!I)&&history.state&&history.state.scroll||null;return ot().then(()=>ye(k,j,Ee)).then(le=>le&&q5(le)).catch(le=>z(le,k,j))}const Xe=k=>r.go(k);let Ie;const Qt=new Set,jn={currentRoute:i,listening:!0,addRoute:y,removeRoute:m,hasRoute:A,getRoutes:g,resolve:B,options:t,push:_,replace:S,go:Xe,back:()=>Xe(-1),forward:()=>Xe(1),beforeEach:l.add,beforeResolve:a.add,afterEach:c.add,onError:Re.add,isReady:oe,install(k){const j=this;k.component("RouterLink",xg),k.component("RouterView",Rg),k.config.globalProperties.$router=j,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>C(i)}),Kn&&!Ie&&i.value===en&&(Ie=!0,_(r.location).catch(ye=>{}));const I={};for(const ye in en)I[ye]=T(()=>i.value[ye]);k.provide(ga,j),k.provide(Ru,$e(I)),k.provide(_l,i);const G=k.unmount;Qt.add(k),k.unmount=function(){Qt.delete(k),Qt.size<1&&(p=en,Fe&&Fe(),Fe=null,i.value=en,Ie=!1,Pe=!1),G()}}};return jn}function Un(t){return t.reduce((n,o)=>n.then(()=>o()),Promise.resolve())}function $g(t,n){const o=[],s=[],r=[],l=Math.max(n.matched.length,t.matched.length);for(let a=0;a<l;a++){const c=n.matched[a];c&&(t.matched.find(p=>co(p,c))?s.push(c):o.push(c));const i=t.matched[a];i&&(n.matched.find(p=>co(p,i))||r.push(i))}return[o,s,r]}const Mr=N(!1),No=N(!1),Gn=N(!1),Og=N(!0),Cl=Wh({xs:460,...jh}),$n=k5(),Pu=E5(),Fg=T(()=>$n.height.value-$n.width.value/an>180),$u=h5(Rt?document.body:null),oo=Nh(),Mg=T(()=>{var t,n;return["INPUT","TEXTAREA"].includes(((t=oo.value)==null?void 0:t.tagName)||"")||((n=oo.value)==null?void 0:n.classList.contains("CodeMirror-code"))}),Lg=T(()=>{var t;return["BUTTON","A"].includes(((t=oo.value)==null?void 0:t.tagName)||"")});$t("slidev-camera","default");$t("slidev-mic","default");const ks=$t("slidev-scale",0),tt=$t("slidev-show-overview",!1),Lr=$t("slidev-presenter-cursor",!0),mi=$t("slidev-show-editor",!1);$t("slidev-editor-width",Rt?window.innerWidth*.4:100);const Ou=vu(tt);function hi(t,n,o,s=r=>r){return t*s(.5-n*(.5-o))}function Hg(t){return[-t[0],-t[1]]}function _t(t,n){return[t[0]+n[0],t[1]+n[1]]}function Et(t,n){return[t[0]-n[0],t[1]-n[1]]}function Dt(t,n){return[t[0]*n,t[1]*n]}function Ig(t,n){return[t[0]/n,t[1]/n]}function To(t){return[t[1],-t[0]]}function gi(t,n){return t[0]*n[0]+t[1]*n[1]}function Ng(t,n){return t[0]===n[0]&&t[1]===n[1]}function jg(t){return Math.hypot(t[0],t[1])}function qg(t){return t[0]*t[0]+t[1]*t[1]}function vi(t,n){return qg(Et(t,n))}function Fu(t){return Ig(t,jg(t))}function Ug(t,n){return Math.hypot(t[1]-n[1],t[0]-n[0])}function So(t,n,o){let s=Math.sin(o),r=Math.cos(o),l=t[0]-n[0],a=t[1]-n[1],c=l*r-a*s,i=l*s+a*r;return[c+n[0],i+n[1]]}function bl(t,n,o){return _t(t,Dt(Et(n,t),o))}function Ei(t,n,o){return _t(t,Dt(n,o))}var{min:Jn,PI:Jg}=Math,Ai=.275,ko=Jg+1e-4;function Vg(t,n={}){let{size:o=16,smoothing:s=.5,thinning:r=.5,simulatePressure:l=!0,easing:a=z=>z,start:c={},end:i={},last:p=!1}=n,{cap:u=!0,easing:f=z=>z*(2-z)}=c,{cap:d=!0,easing:y=z=>--z*z*z+1}=i;if(t.length===0||o<=0)return[];let m=t[t.length-1].runningLength,g=c.taper===!1?0:c.taper===!0?Math.max(o,m):c.taper,A=i.taper===!1?0:i.taper===!0?Math.max(o,m):i.taper,B=Math.pow(o*s,2),D=[],E=[],_=t.slice(0,10).reduce((z,oe)=>{let de=oe.pressure;if(l){let be=Jn(1,oe.distance/o),Xe=Jn(1,1-be);de=Jn(1,z+(Xe-z)*(be*Ai))}return(z+de)/2},t[0].pressure),S=hi(o,r,t[t.length-1].pressure,a),R,$=t[0].vector,J=t[0].point,te=J,ne=J,pe=te,Fe=!1;for(let z=0;z<t.length;z++){let{pressure:oe}=t[z],{point:de,vector:be,distance:Xe,runningLength:Ie}=t[z];if(z<t.length-1&&m-Ie<3)continue;if(r){if(l){let Ee=Jn(1,Xe/o),le=Jn(1,1-Ee);oe=Jn(1,_+(le-_)*(Ee*Ai))}S=hi(o,r,oe,a)}else S=o/2;R===void 0&&(R=S);let Qt=Ie<g?f(Ie/g):1,jn=m-Ie<A?y((m-Ie)/A):1;S=Math.max(.01,S*Math.min(Qt,jn));let k=(z<t.length-1?t[z+1]:t[z]).vector,j=z<t.length-1?gi(be,k):1,I=gi(be,$)<0&&!Fe,G=j!==null&&j<0;if(I||G){let Ee=Dt(To($),S);for(let le=1/13,h=0;h<=1;h+=le)ne=So(Et(de,Ee),de,ko*h),D.push(ne),pe=So(_t(de,Ee),de,ko*-h),E.push(pe);J=ne,te=pe,G&&(Fe=!0);continue}if(Fe=!1,z===t.length-1){let Ee=Dt(To(be),S);D.push(Et(de,Ee)),E.push(_t(de,Ee));continue}let ye=Dt(To(bl(k,be,j)),S);ne=Et(de,ye),(z<=1||vi(J,ne)>B)&&(D.push(ne),J=ne),pe=_t(de,ye),(z<=1||vi(te,pe)>B)&&(E.push(pe),te=pe),_=oe,$=be}let Ce=t[0].point.slice(0,2),Me=t.length>1?t[t.length-1].point.slice(0,2):_t(t[0].point,[1,1]),Re=[],Pe=[];if(t.length===1){if(!(g||A)||p){let z=Ei(Ce,Fu(To(Et(Ce,Me))),-(R||S)),oe=[];for(let de=1/13,be=de;be<=1;be+=de)oe.push(So(z,Ce,ko*2*be));return oe}}else{if(!(g||A&&t.length===1))if(u)for(let oe=1/13,de=oe;de<=1;de+=oe){let be=So(E[0],Ce,ko*de);Re.push(be)}else{let oe=Et(D[0],E[0]),de=Dt(oe,.5),be=Dt(oe,.51);Re.push(Et(Ce,de),Et(Ce,be),_t(Ce,be),_t(Ce,de))}let z=To(Hg(t[t.length-1].vector));if(A||g&&t.length===1)Pe.push(Me);else if(d){let oe=Ei(Me,z,S);for(let de=1/29,be=de;be<1;be+=de)Pe.push(So(oe,Me,ko*3*be))}else Pe.push(_t(Me,Dt(z,S)),_t(Me,Dt(z,S*.99)),Et(Me,Dt(z,S*.99)),Et(Me,Dt(z,S)))}return D.concat(Pe,E.reverse(),Re)}function Wg(t,n={}){var o;let{streamline:s=.5,size:r=16,last:l=!1}=n;if(t.length===0)return[];let a=.15+(1-s)*.85,c=Array.isArray(t[0])?t:t.map(({x:y,y:m,pressure:g=.5})=>[y,m,g]);if(c.length===2){let y=c[1];c=c.slice(0,-1);for(let m=1;m<5;m++)c.push(bl(c[0],y,m/4))}c.length===1&&(c=[...c,[..._t(c[0],[1,1]),...c[0].slice(2)]]);let i=[{point:[c[0][0],c[0][1]],pressure:c[0][2]>=0?c[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],p=!1,u=0,f=i[0],d=c.length-1;for(let y=1;y<c.length;y++){let m=l&&y===d?c[y].slice(0,2):bl(f.point,c[y],a);if(Ng(f.point,m))continue;let g=Ug(m,f.point);if(u+=g,y<d&&!p){if(u<r)continue;p=!0}f={point:m,pressure:c[y][2]>=0?c[y][2]:.5,vector:Fu(Et(f.point,m)),distance:g,runningLength:u},i.push(f)}return i[0].vector=((o=i[1])==null?void 0:o.vector)||[0,0],i}function zg(t,n={}){return Vg(Wg(t,n),n)}var Kg=()=>({events:{},emit(t,...n){let o=this.events[t]||[];for(let s=0,r=o.length;s<r;s++)o[s](...n)},on(t,n){var o;return(o=this.events[t])!=null&&o.push(n)||(this.events[t]=[n]),()=>{var s;this.events[t]=(s=this.events[t])==null?void 0:s.filter(r=>n!==r)}}});function Js(t,n){return t-n}function Yg(t){return t<0?-1:1}function Vs(t){return[Math.abs(t),Yg(t)]}function Mu(){const t=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${t()+t()}-${t()}-${t()}-${t()}-${t()}${t()}${t()}`}var Gg=2,Wt=Gg,Bo=class{constructor(t){this.drauu=t,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(t){}onUnselected(){}onStart(t){}onMove(t){return!1}onEnd(t){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(t){var r;var n;const o=this.drauu.el,s=(r=this.drauu.options.coordinateScale)!=null?r:1;if(this.drauu.options.coordinateTransform===!1){const l=this.drauu.el.getBoundingClientRect();return{x:(t.pageX-l.left)*s,y:(t.pageY-l.top)*s,pressure:t.pressure}}else{const l=this.drauu.svgPoint;l.x=t.clientX,l.y=t.clientY;const a=l.matrixTransform((n=o.getScreenCTM())==null?void 0:n.inverse());return{x:a.x*s,y:a.y*s,pressure:t.pressure}}}createElement(t,n){var r;const o=document.createElementNS("http://www.w3.org/2000/svg",t),s=n?{...this.brush,...n}:this.brush;return o.setAttribute("fill",(r=s.fill)!=null?r:"transparent"),o.setAttribute("stroke",s.color),o.setAttribute("stroke-width",s.size.toString()),o.setAttribute("stroke-linecap","round"),s.dasharray&&o.setAttribute("stroke-dasharray",s.dasharray),o}attr(t,n){this.el.setAttribute(t,typeof n=="string"?n:n.toFixed(Wt))}_setEvent(t){this.event=t,this.point=this.getMousePosition(t)}_eventDown(t){return this._setEvent(t),this.start=this.point,this.onStart(this.point)}_eventMove(t){return this._setEvent(t),this.onMove(this.point)}_eventUp(t){return this._setEvent(t),this.onEnd(this.point)}},Zg=class extends Bo{constructor(){super(...arguments),this.points=[]}onStart(t){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[t],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(t){return this.el||this.onStart(t),this.points[this.points.length-1]!==t&&this.points.push(t),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const t=this.el;return this.el=null,!!t}getSvgData(t){const n=zg(t,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!n.length)return"";const o=n.reduce((s,[r,l],a,c)=>{const[i,p]=c[(a+1)%c.length];return s.push(r,l,(r+i)/2,(l+p)/2),s},["M",...n[0],"Q"]);return o.push("Z"),o.map(s=>typeof s=="number"?s.toFixed(2):s).join(" ")}},Qg=class extends Bo{onStart(t){return this.el=this.createElement("ellipse"),this.attr("cx",t.x),this.attr("cy",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[n,o]=Vs(t.x-this.start.x),[s,r]=Vs(t.y-this.start.y);if(this.shiftPressed){const l=Math.min(n,s);n=l,s=l}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",n),this.attr("ry",s);else{const[l,a]=[this.start.x,this.start.x+n*o].sort(Js),[c,i]=[this.start.y,this.start.y+s*r].sort(Js);this.attr("cx",(l+a)/2),this.attr("cy",(c+i)/2),this.attr("rx",(a-l)/2),this.attr("ry",(i-c)/2)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function Lu(t,n){const o=document.createElementNS("http://www.w3.org/2000/svg","defs"),s=document.createElementNS("http://www.w3.org/2000/svg","marker"),r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttribute("fill",n),s.setAttribute("id",t),s.setAttribute("viewBox","0 -5 10 10"),s.setAttribute("refX","5"),s.setAttribute("refY","0"),s.setAttribute("markerWidth","4"),s.setAttribute("markerHeight","4"),s.setAttribute("orient","auto"),r.setAttribute("d","M0,-5L10,0L0,5"),s.appendChild(r),o.appendChild(s),o}var Xg=class extends Bo{onStart(t){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",t.x),this.attr("y1",t.y),this.attr("x2",t.x),this.attr("y2",t.y),this.brush.arrowEnd){const n=Mu(),o=document.createElementNS("http://www.w3.org/2000/svg","g");return o.append(Lu(n,this.brush.color)),o.append(this.el),this.attr("marker-end",`url(#${n})`),o}return this.el}onMove(t){if(!this.el)return!1;let{x:n,y:o}=t;if(this.shiftPressed){const s=t.x-this.start.x,r=t.y-this.start.y;if(r!==0){let l=s/r;l=Math.round(l),Math.abs(l)<=1?(n=this.start.x+r*l,o=this.start.y+r):(n=this.start.x+s,o=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-n),this.attr("y1",this.start.y*2-o),this.attr("x2",n),this.attr("y2",o)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",n),this.attr("y2",o)),!0}onEnd(){const t=this.el;return this.el=null,!(!t||t.getTotalLength()<5)}},ev=class extends Bo{onStart(t){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",t.x),this.attr("y",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[n,o]=Vs(t.x-this.start.x),[s,r]=Vs(t.y-this.start.y);if(this.shiftPressed){const l=Math.min(n,s);n=l,s=l}if(this.altPressed)this.attr("x",this.start.x-n),this.attr("y",this.start.y-s),this.attr("width",n*2),this.attr("height",s*2);else{const[l,a]=[this.start.x,this.start.x+n*o].sort(Js),[c,i]=[this.start.y,this.start.y+s*r].sort(Js);this.attr("x",l),this.attr("y",c),this.attr("width",a-l),this.attr("height",i-c)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function tv(t,n){const o=t.x-n.x,s=t.y-n.y;return o*o+s*s}function nv(t,n,o){let s=n.x,r=n.y,l=o.x-s,a=o.y-r;if(l!==0||a!==0){const c=((t.x-s)*l+(t.y-r)*a)/(l*l+a*a);c>1?(s=o.x,r=o.y):c>0&&(s+=l*c,r+=a*c)}return l=t.x-s,a=t.y-r,l*l+a*a}function ov(t,n){let o=t[0];const s=[o];let r;for(let l=1,a=t.length;l<a;l++)r=t[l],tv(r,o)>n&&(s.push(r),o=r);return o!==r&&r&&s.push(r),s}function wl(t,n,o,s,r){let l=s,a=0;for(let c=n+1;c<o;c++){const i=nv(t[c],t[n],t[o]);i>l&&(a=c,l=i)}l>s&&(a-n>1&&wl(t,n,a,s,r),r.push(t[a]),o-a>1&&wl(t,a,o,s,r))}function sv(t,n){const o=t.length-1,s=[t[0]];return wl(t,0,o,n,s),s.push(t[o]),s}function Bi(t,n,o=!1){if(t.length<=2)return t;const s=n!==void 0?n*n:1;return t=o?t:ov(t,s),t=sv(t,s),t}var rv=class extends Bo{constructor(){super(...arguments),this.points=[],this.count=0}onStart(t){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[t],this.brush.arrowEnd){this.arrowId=Mu();const n=Lu(this.arrowId,this.brush.color);this.el.appendChild(n)}return this.el}onMove(t){return this.el||this.onStart(t),this.points[this.points.length-1]!==t&&(this.points.push(t),this.count+=1),this.count>5&&(this.points=Bi(this.points,1,!0),this.count=0),this.attr("d",_i(this.points)),!0}onEnd(){const t=this.el;return this.el=null,!(!t||(t.setAttribute("d",_i(Bi(this.points,1,!0))),!t.getTotalLength()))}};function lv(t,n){const o=n.x-t.x,s=n.y-t.y;return{length:Math.sqrt(o**2+s**2),angle:Math.atan2(s,o)}}function Di(t,n,o,s){const r=n||t,l=o||t,a=.2,c=lv(r,l),i=c.angle+(s?Math.PI:0),p=c.length*a,u=t.x+Math.cos(i)*p,f=t.y+Math.sin(i)*p;return{x:u,y:f}}function av(t,n,o){const s=Di(o[n-1],o[n-2],t),r=Di(t,o[n-1],o[n+1],!0);return`C ${s.x.toFixed(Wt)},${s.y.toFixed(Wt)} ${r.x.toFixed(Wt)},${r.y.toFixed(Wt)} ${t.x.toFixed(Wt)},${t.y.toFixed(Wt)}`}function _i(t){return t.reduce((n,o,s,r)=>s===0?`M ${o.x.toFixed(Wt)},${o.y.toFixed(Wt)}`:`${n} ${av(o,s,r)}`,"")}var cv=class extends Bo{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(t){const n=(o,s)=>{if(o&&o.length)for(let r=0;r<o.length;r++){const l=o[r];if(l.getTotalLength){const a=l.getTotalLength();for(let c=0;c<this.pathSubFactor;c++){const i=l.getPointAtLength(a*c/this.pathSubFactor),p=l.getPointAtLength(a*(c+1)/this.pathSubFactor);this.pathFragments.push({x1:i.x,x2:p.x,y1:i.y,y2:p.y,segment:c,element:s||l})}}else l.children&&n(l.children,l)}};t&&n(t.children)}onUnselected(){this.pathFragments=[]}onStart(t){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=t.x,this.svgPointPrevious.y=t.y}onMove(t){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=t.x,this.svgPointCurrent.y=t.y;const n=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,n}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const t=[];if(this.pathFragments.length)for(let n=0;n<this.pathFragments.length;n++){const o=this.pathFragments[n],s={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(o,s)&&(o.element.remove(),t.push(n))}return t.length&&(this.pathFragments=this.pathFragments.filter((n,o)=>!t.includes(o))),t.length>0}lineLineIntersect(t,n){const o=t.x1,s=t.x2,r=n.x1,l=n.x2,a=t.y1,c=t.y2,i=n.y1,p=n.y2,u=(o-s)*(i-p)-(a-c)*(r-l),f=(o*c-a*s)*(r-l)-(o-s)*(r*p-i*l),d=(o*c-a*s)*(i-p)-(a-c)*(r*p-i*l),y=(m,g,A)=>m>=g&&m<=A?!0:m>=A&&m<=g;if(u===0)return!1;{const m={x:f/u,y:d/u};return y(m.x,o,s)&&y(m.y,a,c)&&y(m.x,r,l)&&y(m.y,i,p)}}};function iv(t){return{draw:new rv(t),stylus:new Zg(t),line:new Xg(t),rectangle:new ev(t),ellipse:new Qg(t),eraseLine:new cv(t)}}var pv=class{constructor(t={}){this.options=t,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=Kg(),this._models=iv(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),t.el&&this.mount(t.el,t.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(t){this._models[this.mode].onUnselected(),this.options.brush.mode=t,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(t){this.options.brush=t}resolveSelector(t){return typeof t=="string"?document.querySelector(t):t||null}mount(t,n){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(t),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const o=this.resolveSelector(n)||this.el,s=this.eventStart.bind(this),r=this.eventMove.bind(this),l=this.eventEnd.bind(this),a=this.eventKeyboard.bind(this);o.addEventListener("pointerdown",s,{passive:!1}),window.addEventListener("pointermove",r,{passive:!1}),window.addEventListener("pointerup",l,{passive:!1}),window.addEventListener("pointercancel",l,{passive:!1}),window.addEventListener("keydown",a,!1),window.addEventListener("keyup",a,!1),this._disposables.push(()=>{o.removeEventListener("pointerdown",s),window.removeEventListener("pointermove",r),window.removeEventListener("pointerup",l),window.removeEventListener("pointercancel",l),window.removeEventListener("keydown",a,!1),window.removeEventListener("keyup",a,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(t=>t()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(t,n){return this._emitter.on(t,n)}undo(){const t=this.el;return t.lastElementChild?(this._undoStack.push(t.lastElementChild.cloneNode(!0)),t.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var t;return!!((t=this.el)!=null&&t.lastElementChild)}eventMove(t){!this.acceptsInput(t)||!this.drawing||this.model._eventMove(t)&&(t.stopPropagation(),t.preventDefault(),this._emitter.emit("changed"))}eventStart(t){!this.acceptsInput(t)||(t.stopPropagation(),t.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(t),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(t){if(!this.acceptsInput(t)||!this.drawing)return;const n=this.model._eventUp(t);n?(n instanceof Element&&n!==this._currentNode&&(this._currentNode=n),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(t){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(t.pointerType)}eventKeyboard(t){this.shiftPressed===t.shiftKey&&this.altPressed===t.altKey||(this.shiftPressed=t.shiftKey,this.altPressed=t.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const t=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",t)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(t){this.clear(),this.el.innerHTML=t}};function uv(t){return new pv(t)}const xl=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],It=$t("slidev-drawing-enabled",!1),cw=$t("slidev-drawing-pinned",!1),fv=N(!1),dv=N(!1),yv=N(!1),es=N(!1),xn=fh($t("slidev-drawing-brush",{color:xl[0],size:4,mode:"stylus"})),Ci=N("stylus"),Hu=T(()=>Ae.drawings.syncAll||Lt.value);let ts=!1;const Ro=T({get(){return Ci.value},set(t){Ci.value=t,t==="arrow"?(xn.mode="line",xn.arrowEnd=!0):(xn.mode=t,xn.arrowEnd=!1)}}),mv=$e({brush:xn,acceptsInputTypes:T(()=>It.value?void 0:["pen"]),coordinateTransform:!1}),st=sr(uv(mv));function hv(){st.clear(),Hu.value&&du(Je.value,"")}function Iu(){var t;dv.value=st.canRedo(),fv.value=st.canUndo(),yv.value=!!((t=st.el)!=null&&t.children.length)}function gv(t){ts=!0;const n=Ns[t||Je.value];n!=null?st.load(n):st.clear(),ts=!1}st.on("changed",()=>{if(Iu(),!ts){const t=st.dump(),n=Je.value;(Ns[n]||"")!==t&&Hu.value&&du(n,st.dump())}});th(t=>{ts=!0,t[Je.value]!=null&&st.load(t[Je.value]||""),ts=!1,Iu()});ot(()=>{ue(Je,()=>{!st.mounted||gv()},{immediate:!0})});st.on("start",()=>es.value=!0);st.on("end",()=>es.value=!1);window.addEventListener("keydown",t=>{if(!It.value)return;const n=!t.ctrlKey&&!t.altKey&&!t.shiftKey&&!t.metaKey;let o=!0;t.code==="KeyZ"&&(t.ctrlKey||t.metaKey)?t.shiftKey?st.redo():st.undo():t.code==="Escape"?It.value=!1:t.code==="KeyL"&&n?Ro.value="line":t.code==="KeyA"&&n?Ro.value="arrow":t.code==="KeyS"&&n?Ro.value="stylus":t.code==="KeyR"&&n?Ro.value="rectangle":t.code==="KeyE"&&n?Ro.value="ellipse":t.code==="KeyC"&&n?hv():t.code.startsWith("Digit")&&n&&+t.code[5]<=xl.length?xn.color=xl[+t.code[5]-1]:o=!1,o&&(t.preventDefault(),t.stopPropagation())},!1);function qe(...t){return T(()=>t.every(n=>nt(n)))}function pt(t){return T(()=>!nt(t))}const bi=n5(),Hr=$t("slidev-color-schema","auto"),Tl=T(()=>Ae.colorSchema!=="auto"),va=T({get(){return Tl.value?Ae.colorSchema==="dark":Hr.value==="auto"?bi.value:Hr.value==="dark"},set(t){Tl.value||(Hr.value=t===bi.value?"auto":t?"dark":"light")}}),Nu=vu(va);Rt&&ue(va,t=>{const n=document.querySelector("html");n.classList.toggle("dark",t),n.classList.toggle("light",!t)},{immediate:!0});const Rs=N(1),Ps=T(()=>Ue.length-1),yt=N(0),Ea=N(0);function vv(){yt.value>Rs.value&&(yt.value-=1)}function Ev(){yt.value<Ps.value&&(yt.value+=1)}function Av(){if(yt.value>Rs.value){let t=yt.value-Ea.value;t<Rs.value&&(t=Rs.value),yt.value=t}}function Bv(){if(yt.value<Ps.value){let t=yt.value+Ea.value;t>Ps.value&&(t=Ps.value),yt.value=t}}function Dv(){const{escape:t,space:n,shift:o,left:s,right:r,up:l,down:a,enter:c,d:i,g:p,o:u}=Pu;let f=[{name:"next_space",key:qe(n,pt(o)),fn:cn,autoRepeat:!0},{name:"prev_space",key:qe(n,o),fn:pn,autoRepeat:!0},{name:"next_right",key:qe(r,pt(o),pt(tt)),fn:cn,autoRepeat:!0},{name:"prev_left",key:qe(s,pt(o),pt(tt)),fn:pn,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:cn,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:pn,autoRepeat:!0},{name:"next_down",key:qe(a,pt(tt)),fn:ss,autoRepeat:!0},{name:"prev_up",key:qe(l,pt(tt)),fn:()=>rs(!1),autoRepeat:!0},{name:"next_shift",key:qe(r,o),fn:ss,autoRepeat:!0},{name:"prev_shift",key:qe(s,o),fn:()=>rs(!1),autoRepeat:!0},{name:"toggle_dark",key:qe(i,pt(It)),fn:Nu},{name:"toggle_overview",key:qe(u,pt(It)),fn:Ou},{name:"hide_overview",key:qe(t,pt(It)),fn:()=>tt.value=!1},{name:"goto",key:qe(p,pt(It)),fn:()=>Gn.value=!Gn.value},{name:"next_overview",key:qe(r,tt),fn:Ev},{name:"prev_overview",key:qe(s,tt),fn:vv},{name:"up_overview",key:qe(l,tt),fn:Av},{name:"down_overview",key:qe(a,tt),fn:Bv},{name:"goto_from_overview",key:qe(c,tt),fn:()=>{mo(yt.value),tt.value=!1}}];const d=new Set(f.map(m=>m.name));if(f.filter(m=>m.name&&d.has(m.name)).length===0){const m=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(m),console.warn(m)}return f}const ju=qe(pt(Mg),pt(Lg),Og);function _v(t,n,o=!1){typeof t=="string"&&(t=Pu[t]);const s=qe(t,ju);let r=0,l;const a=()=>{if(clearTimeout(l),!s.value){r=0;return}o&&(l=setTimeout(a,Math.max(1e3-r*250,150)),r++),n()};return ue(s,a,{flush:"sync"})}function Cv(t,n){return Ih(t,o=>{!ju.value||o.repeat||n()})}function bv(){const t=Dv();new Map(t.map(o=>[o.key,o])).forEach(o=>{o.fn&&_v(o.key,o.fn,o.autoRepeat)}),Cv("f",()=>$u.toggle())}const wv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},xv=e("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),Tv=[xv];function Sv(t,n){return b(),U("svg",wv,Tv)}const kv={name:"carbon-close",render:Sv};function Aa(t){var o,s;const n=(s=(o=t==null?void 0:t.meta)==null?void 0:o.slide)==null?void 0:s.no;return n!=null?`slidev-page-${n}`:""}const qu=De({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(t){const n=t;H(W);const o=N(),s=m5(o),r=T(()=>n.width?n.width:s.width.value),l=T(()=>n.width?n.width/an:s.height.value);n.width&&vo(()=>{o.value&&(o.value.style.width=`${r.value}px`,o.value.style.height=`${l.value}px`)});const a=T(()=>r.value/l.value),c=T(()=>n.scale?n.scale:a.value<an?r.value/Rn:l.value*an/Rn),i=T(()=>({height:`${pu}px`,width:`${Rn}px`,transform:`translate(-50%, -50%) scale(${c.value})`})),p=T(()=>({"select-none":!Ae.selectable,"slidev-code-line-numbers":Ae.lineNumbers}));return dt(iu,c),(u,f)=>(b(),U("div",{id:"slide-container",ref_key:"root",ref:o,class:Le(C(p))},[e("div",{id:"slide-content",style:Ze(C(i))},[jt(u.$slots,"default")],4),jt(u.$slots,"controls")],2))}});const Ba=De({props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(t,{emit:n}){const o=Ht(t,"clicks",n),s=Ht(t,"clicksElements",n),r=Ht(t,"clicksDisabled",n),l=Ht(t,"clicksOrderMap",n);s.value.length=0,dt(jm,t.route),dt(qm,t.context),dt(Mo,o),dt(Lo,r),dt(_n,s),dt(ml,l)},render(){var t,n;return this.$props.is?Ye(this.$props.is):(n=(t=this.$slots)==null?void 0:t.default)==null?void 0:n.call(t)}}),Rv=["innerHTML"],Pv=De({__name:"DrawingPreview",props:{page:null},setup(t){return H(W),(n,o)=>C(Ns)[t.page]?(b(),U("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:C(Ns)[t.page]},null,8,Rv)):he("v-if",!0)}}),$v={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},Ov=["onClick"],Fv=De({__name:"SlidesOverview",props:{modelValue:{type:Boolean}},emits:[],setup(t,{emit:n}){const o=t;H(W);const s=Ht(o,"modelValue",n);function r(){s.value=!1}function l(y){mo(y),r()}function a(y){return y===yt.value}const c=Cl.smaller("xs"),i=Cl.smaller("sm"),p=4*16*2,u=2*16,f=T(()=>c.value?$n.width.value-p:i.value?($n.width.value-p-u)/2:300),d=T(()=>Math.floor(($n.width.value-p)/(f.value+u)));return vo(()=>{yt.value=Je.value,Ea.value=d.value}),(y,m)=>{const g=kv;return b(),U(xe,null,[ur(e("div",$v,[e("div",{class:"grid gap-y-4 gap-x-8 w-full",style:Ze(`grid-template-columns: repeat(auto-fit,minmax(${C(f)}px,1fr))`)},[(b(!0),U(xe,null,cs(C(Ue).slice(0,-1),(A,B)=>(b(),U("div",{key:A.path,class:"relative"},[e("div",{class:Le(["inline-block border border-gray-400 rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":a(B+1)}]),onClick:D=>l(+A.path)},[(b(),V(qu,{key:A.path,width:C(f),"clicks-disabled":!0,class:"pointer-events-none"},{default:Q(()=>[Y(C(Ba),{is:A==null?void 0:A.component,"clicks-disabled":!0,class:Le(C(Aa)(A)),route:A,context:"overview"},null,8,["is","class","route"]),Y(Pv,{page:+A.path},null,8,["page"])]),_:2},1032,["width"]))],10,Ov),e("div",{class:"absolute top-0 opacity-50",style:Ze(`left: ${C(f)+5}px`)},On(B+1),5)]))),128))],4)],512),[[lu,C(s)]]),C(s)?(b(),U("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:r},[Y(g)])):he("v-if",!0)],64)}}});const Mv="/pirum-meetup-09-2022/assets/logo.b72bde5d.png",Lv={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},Hv=De({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(t,{emit:n}){const o=t;H(W);const s=Ht(o,"modelValue",n);function r(){s.value=!1}return(l,a)=>(b(),V(qp,null,[C(s)?(b(),U("div",Lv,[e("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:a[0]||(a[0]=c=>r())}),e("div",{class:Le(["m-auto rounded-md bg-main shadow",o.class]),"dark:border":"~ gray-400 opacity-10"},[jt(l.$slots,"default")],2)])):he("v-if",!0)],1024))}}),Iv={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},Nv=["innerHTML"],jv=e("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[e("div",{class:"flex gap-1 children:my-auto"},[e("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),e("img",{class:"w-5 h-5",src:Mv,alt:"Slidev"}),e("div",{style:{color:"#2082A6"}},[e("b",null,"Sli"),Z("dev ")])])],-1),qv=De({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(t,{emit:n}){const o=t;H(W);const s=Ht(o,"modelValue",n),r=T(()=>typeof Ae.info=="string");return(l,a)=>(b(),V(Hv,{modelValue:C(s),"onUpdate:modelValue":a[0]||(a[0]=c=>_e(s)?s.value=c:null),class:"px-6 py-4"},{default:Q(()=>[e("div",Iv,[C(r)?(b(),U("div",{key:0,class:"mb-4",innerHTML:C(Ae).info},null,8,Nv)):he("v-if",!0),jv])]),_:1},8,["modelValue"]))}});const Uv=["disabled","onKeydown"],Jv=De({__name:"Goto",setup(t){H(W);const n=N(),o=N(""),s=T(()=>{if(o.value.startsWith("/"))return!!Ue.find(a=>a.path===o.value.substring(1));{const a=+o.value;return!isNaN(a)&&a>0&&a<=hf.value}});function r(){s.value&&(o.value.startsWith("/")?mo(o.value.substring(1)):mo(+o.value)),l()}function l(){Gn.value=!1}return ue(Gn,async a=>{var c,i;a?(await ot(),o.value="",(c=n.value)==null||c.focus()):(i=n.value)==null||i.blur()}),ue(o,a=>{a.match(/^[^0-9/]/)&&(o.value=o.value.substring(1))}),(a,c)=>(b(),U("div",{id:"slidev-goto-dialog",class:Le(["fixed right-5 bg-main transform transition-all",C(Gn)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[ur(e("input",{ref_key:"input",ref:n,"onUpdate:modelValue":c[0]||(c[0]=i=>o.value=i),type:"text",disabled:!C(Gn),class:Le(["outline-none bg-transparent",{"text-red-400":!C(s)&&o.value}]),placeholder:"Goto...",onKeydown:[Tc(r,["enter"]),Tc(l,["escape"])],onBlur:l},null,42,Uv),[[Cm,o.value]])],2))}}),Vv=De({__name:"Controls",setup(t){H(W);const n=kt(),o=kt();return(s,r)=>(b(),U(xe,null,[Y(Fv,{modelValue:C(tt),"onUpdate:modelValue":r[0]||(r[0]=l=>_e(tt)?tt.value=l:null)},null,8,["modelValue"]),Y(Jv),C(n)?(b(),V(C(n),{key:0})):he("v-if",!0),C(o)?(b(),V(C(o),{key:1,modelValue:C(Mr),"onUpdate:modelValue":r[1]||(r[1]=l=>_e(Mr)?Mr.value=l:null)},null,8,["modelValue"])):he("v-if",!0),C(Ae).info?(b(),V(qv,{key:2,modelValue:C(No),"onUpdate:modelValue":r[2]||(r[2]=l=>_e(No)?No.value=l:null)},null,8,["modelValue"])):he("v-if",!0)],64))}}),Wv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},zv=e("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),Kv=[zv];function Yv(t,n){return b(),U("svg",Wv,Kv)}const Gv={name:"carbon-settings-adjust",render:Yv},Zv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Qv=e("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),Xv=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),e8=[Qv,Xv];function t8(t,n){return b(),U("svg",Zv,e8)}const n8={name:"carbon-information",render:t8},o8={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},s8=e("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),r8=[s8];function l8(t,n){return b(),U("svg",o8,r8)}const a8={name:"carbon-download",render:l8},c8={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},i8=e("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),p8=e("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),u8=[i8,p8];function f8(t,n){return b(),U("svg",c8,u8)}const d8={name:"carbon-user-speaker",render:f8},y8={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},m8=e("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),h8=e("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),g8=[m8,h8];function v8(t,n){return b(),U("svg",y8,g8)}const E8={name:"carbon-presentation-file",render:v8},A8={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},B8=e("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),D8=[B8];function _8(t,n){return b(),U("svg",A8,D8)}const C8={name:"carbon-pen",render:_8},b8={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},w8=e("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),x8=e("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),T8=[w8,x8];function S8(t,n){return b(),U("svg",b8,T8)}const k8={name:"ph-cursor-duotone",render:S8},R8={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},P8=e("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),$8=[P8];function O8(t,n){return b(),U("svg",R8,$8)}const Uu={name:"ph-cursor-fill",render:O8},F8={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},M8=e("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),L8=[M8];function H8(t,n){return b(),U("svg",F8,L8)}const I8={name:"carbon-sun",render:H8},N8={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},j8=e("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),q8=[j8];function U8(t,n){return b(),U("svg",N8,q8)}const J8={name:"carbon-moon",render:U8},V8={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},W8=e("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),z8=[W8];function K8(t,n){return b(),U("svg",V8,z8)}const Y8={name:"carbon-apps",render:K8},G8={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Z8=e("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),Q8=[Z8];function X8(t,n){return b(),U("svg",G8,Q8)}const e0={name:"carbon-arrow-right",render:X8},t0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},n0=e("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),o0=[n0];function s0(t,n){return b(),U("svg",t0,o0)}const r0={name:"carbon-arrow-left",render:s0},l0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},a0=e("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),c0=[a0];function i0(t,n){return b(),U("svg",l0,c0)}const p0={name:"carbon-maximize",render:i0},u0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},f0=e("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),d0=[f0];function y0(t,n){return b(),U("svg",u0,d0)}const m0={name:"carbon-minimize",render:y0},h0={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},g0=e("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),v0=[g0];function E0(t,n){return b(),U("svg",h0,v0)}const A0={name:"carbon-checkmark",render:E0},B0={class:"select-list"},D0={class:"title"},_0={class:"items"},C0=["onClick"],b0=De({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(t,{emit:n}){const o=t;H(W);const s=Ht(o,"modelValue",n,{passive:!0});return(r,l)=>{const a=A0;return b(),U("div",B0,[e("div",D0,On(t.title),1),e("div",_0,[(b(!0),U(xe,null,cs(t.items,c=>(b(),U("div",{key:c.value,class:Le(["item",{active:C(s)===c.value}]),onClick:()=>{var i;s.value=c.value,(i=c.onClick)==null||i.call(c)}},[Y(a,{class:Le(["text-green-500",{"opacity-0":C(s)!==c.value}])},null,8,["class"]),Z(" "+On(c.display||c.value),1)],10,C0))),128))])])}}});const Da=(t,n)=>{const o=t.__vccOpts||t;for(const[s,r]of n)o[s]=r;return o},w0=Da(b0,[["__scopeId","data-v-7dd0eaca"]]),x0={class:"text-sm"},T0=De({__name:"Settings",setup(t){H(W);const n=[{display:"Fit",value:0},{display:"1:1",value:1}];return(o,s)=>(b(),U("div",x0,[Y(w0,{modelValue:C(ks),"onUpdate:modelValue":s[0]||(s[0]=r=>_e(ks)?ks.value=r:null),title:"Scale",items:n},null,8,["modelValue"])]))}}),S0={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},k0=De({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(t,{emit:n}){const o=t;H(W);const s=Ht(o,"modelValue",n,{passive:!0}),r=N();return Lh(r,()=>{s.value=!1}),(l,a)=>(b(),U("div",{ref_key:"el",ref:r,class:"flex relative"},[e("button",{class:Le({disabled:t.disabled}),onClick:a[0]||(a[0]=c=>s.value=!C(s))},[jt(l.$slots,"button",{class:Le({disabled:t.disabled})})],2),(b(),V(qp,null,[C(s)?(b(),U("div",S0,[jt(l.$slots,"menu")])):he("v-if",!0)],1024))],512))}}),R0={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},_s={__name:"VerticalDivider",setup(t){return H(W),(n,o)=>(b(),U("div",R0))}},P0={render(){return[]}},$0={class:"icon-btn"},O0={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},F0={class:"my-auto"},M0={class:"opacity-50"},L0=De({__name:"NavControls",props:{persist:{default:!1}},setup(t){const n=t;H(W);const o=Cl.smaller("md"),{isFullscreen:s,toggle:r}=$u,l=T(()=>Ol.value?`?password=${Ol.value}`:""),a=T(()=>`/presenter/${Je.value}${l.value}`),c=T(()=>`/${Je.value}${l.value}`),i=N(),p=()=>{i.value&&oo.value&&i.value.contains(oo.value)&&oo.value.blur()},u=T(()=>n.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),f=kt(),d=kt();return Ao(()=>import("./DrawingControls.8ed96dab.js"),["assets/DrawingControls.8ed96dab.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.7b3fd237.js"]).then(y=>d.value=y.default),(y,m)=>{const g=m0,A=p0,B=r0,D=e0,E=Y8,_=J8,S=I8,R=Uu,$=k8,J=C8,te=E8,ne=lo("RouterLink"),pe=d8,Fe=a8,Ce=n8,Me=Gv;return b(),U("nav",{ref_key:"root",ref:i,class:"flex flex-col"},[e("div",{class:Le(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",C(u)]),onMouseleave:p},[C(Jt)?he("v-if",!0):(b(),U("button",{key:0,class:"icon-btn",onClick:m[0]||(m[0]=(...Re)=>C(r)&&C(r)(...Re))},[C(s)?(b(),V(g,{key:0})):(b(),V(A,{key:1}))])),e("button",{class:Le(["icon-btn",{disabled:!C(S_)}]),onClick:m[1]||(m[1]=(...Re)=>C(pn)&&C(pn)(...Re))},[Y(B)],2),e("button",{class:Le(["icon-btn",{disabled:!C(T_)}]),title:"Next",onClick:m[2]||(m[2]=(...Re)=>C(cn)&&C(cn)(...Re))},[Y(D)],2),C(Jt)?he("v-if",!0):(b(),U("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:m[3]||(m[3]=Re=>C(Ou)())},[Y(E)])),C(Tl)?he("v-if",!0):(b(),U("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:m[4]||(m[4]=Re=>C(Nu)())},[C(va)?(b(),V(_,{key:0})):(b(),V(S,{key:1}))])),Y(_s),C(Jt)?he("v-if",!0):(b(),U(xe,{key:3},[!C(Lt)&&!C(o)&&C(f)?(b(),U(xe,{key:0},[Y(C(f)),Y(_s)],64)):he("v-if",!0),C(Lt)?(b(),U("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:m[5]||(m[5]=Re=>Lr.value=!C(Lr))},[C(Lr)?(b(),V(R,{key:0})):(b(),V($,{key:1,class:"opacity-50"}))])):he("v-if",!0)],64)),!C(Ae).drawings.presenterOnly&&!C(Jt)?(b(),U(xe,{key:4},[e("button",{class:"icon-btn relative",title:"Drawing",onClick:m[6]||(m[6]=Re=>It.value=!C(It))},[Y(J),C(It)?(b(),U("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:Ze({background:C(xn).color})},null,4)):he("v-if",!0)]),Y(_s)],64)):he("v-if",!0),C(Jt)?he("v-if",!0):(b(),U(xe,{key:5},[C(Lt)?(b(),V(ne,{key:0,to:C(c),class:"icon-btn",title:"Play Mode"},{default:Q(()=>[Y(te)]),_:1},8,["to"])):he("v-if",!0),C(b_)?(b(),V(ne,{key:1,to:C(a),class:"icon-btn",title:"Presenter Mode"},{default:Q(()=>[Y(pe)]),_:1},8,["to"])):he("v-if",!0),he("v-if",!0)],64)),(b(),U(xe,{key:6},[C(Ae).download?(b(),U("button",{key:0,class:"icon-btn",onClick:m[8]||(m[8]=(...Re)=>C(Fl)&&C(Fl)(...Re))},[Y(Fe)])):he("v-if",!0)],64)),!C(Lt)&&C(Ae).info&&!C(Jt)?(b(),U("button",{key:7,class:"icon-btn",onClick:m[9]||(m[9]=Re=>No.value=!C(No))},[Y(Ce)])):he("v-if",!0),!C(Lt)&&!C(Jt)?(b(),V(k0,{key:8},{button:Q(()=>[e("button",$0,[Y(Me)])]),menu:Q(()=>[Y(T0)]),_:1})):he("v-if",!0),C(Jt)?he("v-if",!0):(b(),V(_s,{key:9})),e("div",O0,[e("div",F0,[Z(On(C(Je))+" ",1),e("span",M0,"/ "+On(C(hf)),1)])]),Y(C(P0))],34)],512)}}}),Ju={render(){return[]}},Vu={render(){return[]}},H0={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},I0=De({__name:"PresenterMouse",setup(t){return H(W),(n,o)=>{const s=Uu;return C(Pr).cursor?(b(),U("div",H0,[Y(s,{class:"absolute",style:Ze({left:`${C(Pr).cursor.x}%`,top:`${C(Pr).cursor.y}%`})},null,8,["style"])])):he("v-if",!0)}}}),N0=De({__name:"SlidesShow",props:{context:null},setup(t){H(W),ue(ft,()=>{var o,s;((o=ft.value)==null?void 0:o.meta)&&ft.value.meta.preload!==!1&&(ft.value.meta.__preloaded=!0),((s=Jr.value)==null?void 0:s.meta)&&Jr.value.meta.preload!==!1&&(Jr.value.meta.__preloaded=!0)},{immediate:!0});const n=kt();return Ao(()=>import("./DrawingLayer.5c3ab4c8.js"),[]).then(o=>n.value=o.default),(o,s)=>(b(),U(xe,null,[he(" Global Bottom "),Y(C(Vu)),he(" Slides "),(b(!0),U(xe,null,cs(C(Ue),r=>{var l,a;return b(),U(xe,{key:r.path},[((l=r.meta)==null?void 0:l.__preloaded)||r===C(ft)?ur((b(),V(C(Ba),{key:0,is:r==null?void 0:r.component,clicks:r===C(ft)?C(St):0,"clicks-elements":((a=r.meta)==null?void 0:a.__clicksElements)||[],"clicks-disabled":!1,class:Le(C(Aa)(r)),route:r,context:t.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[lu,r===C(ft)]]):he("v-if",!0)],64)}),128)),he(" Global Top "),Y(C(Ju)),C(n)?(b(),V(C(n),{key:0})):he("v-if",!0),C(Lt)?he("v-if",!0):(b(),V(I0,{key:1}))],64))}}),j0=De({__name:"Play",setup(t){H(W),bv();const n=N();function o(l){var a;mi.value||((a=l.target)==null?void 0:a.id)==="slide-container"&&(l.screenX/window.innerWidth>.6?cn():pn())}P_(n);const s=T(()=>Fg.value||mi.value);kt();const r=kt();return Ao(()=>import("./DrawingControls.8ed96dab.js"),["assets/DrawingControls.8ed96dab.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.7b3fd237.js"]).then(l=>r.value=l.default),(l,a)=>(b(),U(xe,null,[e("div",{id:"page-root",ref_key:"root",ref:n,class:"grid grid-cols-[1fr_max-content]",style:Ze(C(uu))},[Y(qu,{class:"w-full h-full",style:Ze({background:"var(--slidev-slide-container-background, black)"}),width:C(Pa)?C($n).width.value:void 0,scale:C(ks),onPointerdown:o},{default:Q(()=>[Y(N0,{context:"slide"})]),controls:Q(()=>[e("div",{class:Le(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[C(s)?"opacity-100 right-0":"opacity-0 p-2",C(es)?"pointer-events-none":""]])},[Y(L0,{class:"m-auto",persist:C(s)},null,8,["persist"])],2),!C(Ae).drawings.presenterOnly&&!C(Jt)&&C(r)?(b(),V(C(r),{key:0,class:"ml-0"})):he("v-if",!0)]),_:1},8,["style","width","scale"]),he("v-if",!0)],4),Y(Vv)],64))}});function Wu(t){const n=T(()=>t.value.path),o=T(()=>Ue.length-1),s=T(()=>parseInt(n.value.split(/\//g).slice(-1)[0])||1),r=T(()=>Ar(s.value)),l=T(()=>Ue.find(d=>d.path===`${s.value}`)),a=T(()=>{var d,y,m;return(m=(y=(d=l.value)==null?void 0:d.meta)==null?void 0:y.slide)==null?void 0:m.id}),c=T(()=>{var d,y;return(y=(d=l.value)==null?void 0:d.meta)==null?void 0:y.layout}),i=T(()=>Ue.find(d=>d.path===`${Math.min(Ue.length,s.value+1)}`)),p=T(()=>Ue.filter(d=>{var y,m;return(m=(y=d.meta)==null?void 0:y.slide)==null?void 0:m.title}).reduce((d,y)=>($a(d,y),d),[])),u=T(()=>Oa(p.value,l.value)),f=T(()=>Fa(u.value));return{route:t,path:n,total:o,currentPage:s,currentPath:r,currentRoute:l,currentSlideId:a,currentLayout:c,nextRoute:i,rawTree:p,treeWithActiveStatuses:u,tree:f}}function zu(t,n,o){const s=N(0);ot(()=>{mt.afterEach(async()=>{await ot(),s.value+=1})});const r=T(()=>{var i,p;return s.value,((p=(i=n.value)==null?void 0:i.meta)==null?void 0:p.__clicksElements)||[]}),l=T(()=>{var i,p,u;return+((u=(p=(i=n.value)==null?void 0:i.meta)==null?void 0:p.clicks)!=null?u:r.value.length)}),a=T(()=>o.value<Ue.length-1||t.value<l.value),c=T(()=>o.value>1||t.value>0);return{clicks:t,clicksElements:r,clicksTotal:l,hasNext:a,hasPrev:c}}const q0=["id"],wi=De({__name:"PrintSlideClick",props:{clicks:null,clicksElements:null,nav:null,route:null},emits:["update:clicksElements"],setup(t,{emit:n}){const o=t,s=Ht(o,"clicksElements",n),r=T(()=>({height:`${pu}px`,width:`${Rn}px`})),l=kt();Ao(()=>import("./DrawingPreview.75c023e3.js"),[]).then(p=>l.value=p.default);const a=T(()=>o.clicks),c=zu(a,o.nav.currentRoute,o.nav.currentPage),i=T(()=>`${o.route.path.toString().padStart(3,"0")}-${(a.value+1).toString().padStart(2,"0")}`);return dt(W,$e({nav:{...o.nav,...c},configs:Ae,themeConfigs:T(()=>Ae.themeConfig)})),(p,u)=>{var f;return b(),U("div",{id:C(i),class:"slide-container",style:Ze(C(r))},[Y(C(Vu)),Y(C(Ba),{is:(f=t.route)==null?void 0:f.component,"clicks-elements":C(s),"onUpdate:clicks-elements":u[0]||(u[0]=d=>_e(s)?s.value=d:null),clicks:C(a),"clicks-disabled":!1,class:Le(C(Aa)(t.route)),route:t.route},null,8,["is","clicks-elements","clicks","class","route"]),C(l)?(b(),V(C(l),{key:0,page:+t.route.path},null,8,["page"])):he("v-if",!0),Y(C(Ju))],12,q0)}}}),U0=De({__name:"PrintSlide",props:{route:null},setup(t){var l;const n=t;H(W);const o=$e(((l=n.route.meta)==null?void 0:l.__clicksElements)||[]),s=T(()=>n.route),r=Wu(s);return(a,c)=>(b(),U(xe,null,[Y(wi,{"clicks-elements":o,"onUpdate:clicks-elements":c[0]||(c[0]=i=>_e(o)?o.value=i:null),clicks:0,nav:C(r),route:C(s)},null,8,["clicks-elements","nav","route"]),C(qo)?he("v-if",!0):(b(!0),U(xe,{key:0},cs(o.length,i=>(b(),V(wi,{key:i,clicks:i,nav:C(r),route:C(s)},null,8,["clicks","nav","route"]))),128))],64))}}),J0={id:"print-content"},V0=De({__name:"PrintContainer",props:{width:null},setup(t){const n=t;H(W);const o=T(()=>n.width),s=T(()=>n.width/an),r=T(()=>o.value/s.value),l=T(()=>r.value<an?o.value/Rn:s.value*an/Rn),a=Ue.slice(0,-1),c=T(()=>({"select-none":!Ae.selectable,"slidev-code-line-numbers":Ae.lineNumbers}));return dt(iu,l),(i,p)=>(b(),U("div",{id:"print-container",class:Le(C(c))},[e("div",J0,[(b(!0),U(xe,null,cs(C(a),u=>(b(),V(U0,{key:u.path,route:u},null,8,["route"]))),128))]),jt(i.$slots,"controls")],2))}});const W0=De({__name:"Print",setup(t){H(W);const n=wn.canvasWidth,o=Math.round(n/wn.aspectRatio)+1;function s(r,{slots:l}){if(l.default)return Ye("style",l.default())}return vo(()=>{Pa?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(r,l)=>(b(),U(xe,null,[Y(s,null,{default:Q(()=>[Z(" @page { size: "+On(C(n))+"px "+On(o)+"px; margin: 0px; } ",1)]),_:1}),e("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:Ze(C(uu))},[Y(V0,{class:"w-full h-full",style:Ze({background:"var(--slidev-slide-container-background, black)"}),width:C($n).width.value},null,8,["style","width"])],4)],64))}});const z0={class:"slidev-layout end"},K0={__name:"end",setup(t){return H(W),(n,o)=>(b(),U("div",z0," END "))}},Y0=Da(K0,[["__scopeId","data-v-ab32435f"]]);function xi(t){return t.startsWith("/")?"/pirum-meetup-09-2022/"+t.slice(1):t}function G0(t,n=!1){const o=t&&["#","rgb","hsl"].some(r=>t.indexOf(r)===0),s={background:o?t:void 0,color:t&&!o?"white":void 0,backgroundImage:o?void 0:t?n?`linear-gradient(#0005, #0008), url(${xi(t)})`:`url("${xi(t)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return s.background||delete s.background,s}const Z0={class:"my-auto w-full"},Q0=De({__name:"cover",props:{background:{default:""}},setup(t){const n=t;H(W);const o=T(()=>G0(n.background,!0));return(s,r)=>(b(),U("div",{class:"slidev-layout cover",style:Ze(C(o))},[e("div",Z0,[jt(s.$slots,"default")])],4))}}),X0=e("h1",null,"TypeSafe Development with TypeScript",-1),eE=e("h2",null,"A quick overview",-1),tE=e("p",null,"Michael Arnaldi - CEO @ MATECHS",-1),nE=e("p",null,"Pirum Internal Meetup",-1),oE={__name:"1",setup(t){const n={layout:"cover",lineNumbers:!0,canvasWidth:1024,srcSequence:"./slides/01-cover.md"};return H(W),(o,s)=>(b(),V(Q0,ge(fe(n)),{default:Q(()=>[X0,eE,tE,nE]),_:1},16))}},sE={class:"slidev-layout center h-full grid place-content-center"},rE={class:"my-auto"},je={__name:"center",setup(t){return H(W),(n,o)=>(b(),U("div",sE,[e("div",rE,[jt(n.$slots,"default")])]))}},lE=e("h1",null,"What is a Language?",-1),aE={__name:"2",setup(t){const n={layout:"center",srcSequence:"./slides/02-motivation.md"};return H(W),(o,s)=>(b(),V(je,ge(fe(n)),{default:Q(()=>[lE]),_:1},16))}},cE=e("h2",null,"From Wikipedia",-1),iE=e("p",null,[Z("A language is a "),e("strong",null,"structured system"),Z(" of communication. The structure of a language is its "),e("strong",null,"grammar"),Z(" and the free components are its "),e("strong",null,"vocabulary"),Z(".")],-1),pE=e("p",null,[Z("Human languages differ from animal communication systems in that they employ "),e("strong",null,"grammatical and semantic categories"),Z(", such as noun and verb, present and past, which may be used to express "),e("strong",null,"exceedingly complex meanings"),Z(".")],-1),uE={__name:"3",setup(t){const n={layout:"center",srcSequence:"./slides/02-motivation.md"};return H(W),(o,s)=>(b(),V(je,ge(fe(n)),{default:Q(()=>[cE,iE,pE]),_:1},16))}},fE=e("h1",null,"If a sentence is grammatically correct, does it make sense?",-1),dE={__name:"4",setup(t){const n={layout:"center",srcSequence:"./slides/02-motivation.md"};return H(W),(o,s)=>(b(),V(je,ge(fe(n)),{default:Q(()=>[fE]),_:1},16))}},yE=e("h1",null,"Time flies like an arrow; fruit flies like a banana.",-1),mE={__name:"5",setup(t){const n={layout:"center",srcSequence:"./slides/02-motivation.md"};return H(W),(o,s)=>(b(),V(je,ge(fe(n)),{default:Q(()=>[yE]),_:1},16))}},hE=e("h1",null,"Type Checking English",-1),gE=e("h2",null,[e("u",null,"Time flies"),Z(" like an arrow; "),e("u",null,"fruit flies"),Z(" like a banana.")],-1),vE=e("p",null,[Z("Error: "),e("u",null,"Fly"),Z(" cannot be applied to "),e("u",null,"Time")],-1),EE=e("p",null,[Z("Error: "),e("u",null,"Fly"),Z(" cannot be applied to "),e("u",null,"Fruit")],-1),AE={__name:"6",setup(t){const n={layout:"center",srcSequence:"./slides/02-motivation.md"};return H(W),(o,s)=>(b(),V(je,ge(fe(n)),{default:Q(()=>[hE,gE,vE,EE]),_:1},16))}},BE=e("h1",null,"Can we Type-Check JavaScript?",-1),DE={__name:"7",setup(t){const n={layout:"center",srcSequence:"./slides/02-motivation.md"};return H(W),(o,s)=>(b(),V(je,ge(fe(n)),{default:Q(()=>[BE]),_:1},16))}},_E=e("h1",null,"Can we Type-Check JavaScript?",-1),CE=e("h2",null,"Kind of\u2026 In some simple cases, yes.",-1),bE=e("br",null,null,-1),wE=e("div",{style:{width:"700px"}},[e("pre",{class:"shiki vitesse-dark twoslash lsp",style:{"background-color":"#121212",color:"#dbd7ca"}},[e("div",{class:"language-id"},"ts"),e("div",{class:"code-container"},[e("code",null,[e("div",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:'const hello: "hello"'},"hello")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"hello"')]),e("div",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:'const world: "world"'},"world")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"world"')]),e("div",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const sentence: string"},"sentence")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:'const hello: "hello"'},"hello")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:'const world: "world"'},"world")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},[e("data-lsp",{lsp:"var Symbol: SymbolConstructor"},"Symbol")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(method) SymbolConstructor.for(key: string): symbol"},"for")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"ok"'),e("span",{style:{color:"#858585"}},")")]),e("span",{class:"error"},[e("span",null,"The '+' operator cannot be applied to type 'symbol'."),e("span",{class:"code"},"2469")]),e("span",{class:"error-behind"},"The '+' operator cannot be applied to type 'symbol'.")])])])],-1),xE={__name:"8",setup(t){const n={layout:"center",srcSequence:"./slides/02-motivation.md"};return H(W),(o,s)=>(b(),V(je,ge(fe(n)),{default:Q(()=>[_E,CE,bE,wE]),_:1},16))}},TE={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},SE=e("path",{fill:"currentColor",d:"M200 32h-36.3a47.8 47.8 0 0 0-71.4 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32.1 32.1 0 0 1 32 32H96a32.1 32.1 0 0 1 32-32Zm72 184H56V48h26.8A47.2 47.2 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.2 47.2 0 0 0-2.8-16H200Z"},null,-1),kE=[SE];function RE(t,n){return b(),U("svg",TE,kE)}const PE={name:"ph-clipboard",render:RE},$E={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},OE=e("path",{fill:"currentColor",d:"M177.8 98.5a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3ZM232 128A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),FE=[OE];function ME(t,n){return b(),U("svg",$E,FE)}const LE={name:"ph-check-circle",render:ME};/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function Ku(t){return typeof t>"u"||t===null}function HE(t){return typeof t=="object"&&t!==null}function IE(t){return Array.isArray(t)?t:Ku(t)?[]:[t]}function NE(t,n){var o,s,r,l;if(n)for(l=Object.keys(n),o=0,s=l.length;o<s;o+=1)r=l[o],t[r]=n[r];return t}function jE(t,n){var o="",s;for(s=0;s<n;s+=1)o+=t;return o}function qE(t){return t===0&&Number.NEGATIVE_INFINITY===1/t}var UE=Ku,JE=HE,VE=IE,WE=jE,zE=qE,KE=NE,_a={isNothing:UE,isObject:JE,toArray:VE,repeat:WE,isNegativeZero:zE,extend:KE};function Yu(t,n){var o="",s=t.reason||"(unknown reason)";return t.mark?(t.mark.name&&(o+='in "'+t.mark.name+'" '),o+="("+(t.mark.line+1)+":"+(t.mark.column+1)+")",!n&&t.mark.snippet&&(o+=`

`+t.mark.snippet),s+" "+o):s}function ns(t,n){Error.call(this),this.name="YAMLException",this.reason=t,this.mark=n,this.message=Yu(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}ns.prototype=Object.create(Error.prototype);ns.prototype.constructor=ns;ns.prototype.toString=function(n){return this.name+": "+Yu(this,n)};var Cn=ns,YE=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],GE=["scalar","sequence","mapping"];function ZE(t){var n={};return t!==null&&Object.keys(t).forEach(function(o){t[o].forEach(function(s){n[String(s)]=o})}),n}function QE(t,n){if(n=n||{},Object.keys(n).forEach(function(o){if(YE.indexOf(o)===-1)throw new Cn('Unknown option "'+o+'" is met in definition of "'+t+'" YAML type.')}),this.options=n,this.tag=t,this.kind=n.kind||null,this.resolve=n.resolve||function(){return!0},this.construct=n.construct||function(o){return o},this.instanceOf=n.instanceOf||null,this.predicate=n.predicate||null,this.represent=n.represent||null,this.representName=n.representName||null,this.defaultStyle=n.defaultStyle||null,this.multi=n.multi||!1,this.styleAliases=ZE(n.styleAliases||null),GE.indexOf(this.kind)===-1)throw new Cn('Unknown kind "'+this.kind+'" is specified for "'+t+'" YAML type.')}var Ge=QE;function Ti(t,n){var o=[];return t[n].forEach(function(s){var r=o.length;o.forEach(function(l,a){l.tag===s.tag&&l.kind===s.kind&&l.multi===s.multi&&(r=a)}),o[r]=s}),o}function XE(){var t={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},n,o;function s(r){r.multi?(t.multi[r.kind].push(r),t.multi.fallback.push(r)):t[r.kind][r.tag]=t.fallback[r.tag]=r}for(n=0,o=arguments.length;n<o;n+=1)arguments[n].forEach(s);return t}function Sl(t){return this.extend(t)}Sl.prototype.extend=function(n){var o=[],s=[];if(n instanceof Ge)s.push(n);else if(Array.isArray(n))s=s.concat(n);else if(n&&(Array.isArray(n.implicit)||Array.isArray(n.explicit)))n.implicit&&(o=o.concat(n.implicit)),n.explicit&&(s=s.concat(n.explicit));else throw new Cn("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");o.forEach(function(l){if(!(l instanceof Ge))throw new Cn("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(l.loadKind&&l.loadKind!=="scalar")throw new Cn("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(l.multi)throw new Cn("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),s.forEach(function(l){if(!(l instanceof Ge))throw new Cn("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var r=Object.create(Sl.prototype);return r.implicit=(this.implicit||[]).concat(o),r.explicit=(this.explicit||[]).concat(s),r.compiledImplicit=Ti(r,"implicit"),r.compiledExplicit=Ti(r,"explicit"),r.compiledTypeMap=XE(r.compiledImplicit,r.compiledExplicit),r};var eA=Sl,tA=new Ge("tag:yaml.org,2002:str",{kind:"scalar",construct:function(t){return t!==null?t:""}}),nA=new Ge("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(t){return t!==null?t:[]}}),oA=new Ge("tag:yaml.org,2002:map",{kind:"mapping",construct:function(t){return t!==null?t:{}}}),sA=new eA({explicit:[tA,nA,oA]});function rA(t){if(t===null)return!0;var n=t.length;return n===1&&t==="~"||n===4&&(t==="null"||t==="Null"||t==="NULL")}function lA(){return null}function aA(t){return t===null}var cA=new Ge("tag:yaml.org,2002:null",{kind:"scalar",resolve:rA,construct:lA,predicate:aA,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function iA(t){if(t===null)return!1;var n=t.length;return n===4&&(t==="true"||t==="True"||t==="TRUE")||n===5&&(t==="false"||t==="False"||t==="FALSE")}function pA(t){return t==="true"||t==="True"||t==="TRUE"}function uA(t){return Object.prototype.toString.call(t)==="[object Boolean]"}var fA=new Ge("tag:yaml.org,2002:bool",{kind:"scalar",resolve:iA,construct:pA,predicate:uA,represent:{lowercase:function(t){return t?"true":"false"},uppercase:function(t){return t?"TRUE":"FALSE"},camelcase:function(t){return t?"True":"False"}},defaultStyle:"lowercase"});function dA(t){return 48<=t&&t<=57||65<=t&&t<=70||97<=t&&t<=102}function yA(t){return 48<=t&&t<=55}function mA(t){return 48<=t&&t<=57}function hA(t){if(t===null)return!1;var n=t.length,o=0,s=!1,r;if(!n)return!1;if(r=t[o],(r==="-"||r==="+")&&(r=t[++o]),r==="0"){if(o+1===n)return!0;if(r=t[++o],r==="b"){for(o++;o<n;o++)if(r=t[o],r!=="_"){if(r!=="0"&&r!=="1")return!1;s=!0}return s&&r!=="_"}if(r==="x"){for(o++;o<n;o++)if(r=t[o],r!=="_"){if(!dA(t.charCodeAt(o)))return!1;s=!0}return s&&r!=="_"}if(r==="o"){for(o++;o<n;o++)if(r=t[o],r!=="_"){if(!yA(t.charCodeAt(o)))return!1;s=!0}return s&&r!=="_"}}if(r==="_")return!1;for(;o<n;o++)if(r=t[o],r!=="_"){if(!mA(t.charCodeAt(o)))return!1;s=!0}return!(!s||r==="_")}function gA(t){var n=t,o=1,s;if(n.indexOf("_")!==-1&&(n=n.replace(/_/g,"")),s=n[0],(s==="-"||s==="+")&&(s==="-"&&(o=-1),n=n.slice(1),s=n[0]),n==="0")return 0;if(s==="0"){if(n[1]==="b")return o*parseInt(n.slice(2),2);if(n[1]==="x")return o*parseInt(n.slice(2),16);if(n[1]==="o")return o*parseInt(n.slice(2),8)}return o*parseInt(n,10)}function vA(t){return Object.prototype.toString.call(t)==="[object Number]"&&t%1===0&&!_a.isNegativeZero(t)}var EA=new Ge("tag:yaml.org,2002:int",{kind:"scalar",resolve:hA,construct:gA,predicate:vA,represent:{binary:function(t){return t>=0?"0b"+t.toString(2):"-0b"+t.toString(2).slice(1)},octal:function(t){return t>=0?"0o"+t.toString(8):"-0o"+t.toString(8).slice(1)},decimal:function(t){return t.toString(10)},hexadecimal:function(t){return t>=0?"0x"+t.toString(16).toUpperCase():"-0x"+t.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),AA=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function BA(t){return!(t===null||!AA.test(t)||t[t.length-1]==="_")}function DA(t){var n,o;return n=t.replace(/_/g,"").toLowerCase(),o=n[0]==="-"?-1:1,"+-".indexOf(n[0])>=0&&(n=n.slice(1)),n===".inf"?o===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:n===".nan"?NaN:o*parseFloat(n,10)}var _A=/^[-+]?[0-9]+e/;function CA(t,n){var o;if(isNaN(t))switch(n){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===t)switch(n){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===t)switch(n){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(_a.isNegativeZero(t))return"-0.0";return o=t.toString(10),_A.test(o)?o.replace("e",".e"):o}function bA(t){return Object.prototype.toString.call(t)==="[object Number]"&&(t%1!==0||_a.isNegativeZero(t))}var wA=new Ge("tag:yaml.org,2002:float",{kind:"scalar",resolve:BA,construct:DA,predicate:bA,represent:CA,defaultStyle:"lowercase"}),xA=sA.extend({implicit:[cA,fA,EA,wA]}),TA=xA,Gu=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),Zu=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function SA(t){return t===null?!1:Gu.exec(t)!==null||Zu.exec(t)!==null}function kA(t){var n,o,s,r,l,a,c,i=0,p=null,u,f,d;if(n=Gu.exec(t),n===null&&(n=Zu.exec(t)),n===null)throw new Error("Date resolve error");if(o=+n[1],s=+n[2]-1,r=+n[3],!n[4])return new Date(Date.UTC(o,s,r));if(l=+n[4],a=+n[5],c=+n[6],n[7]){for(i=n[7].slice(0,3);i.length<3;)i+="0";i=+i}return n[9]&&(u=+n[10],f=+(n[11]||0),p=(u*60+f)*6e4,n[9]==="-"&&(p=-p)),d=new Date(Date.UTC(o,s,r,l,a,c,i)),p&&d.setTime(d.getTime()-p),d}function RA(t){return t.toISOString()}var PA=new Ge("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:SA,construct:kA,instanceOf:Date,represent:RA});function $A(t){return t==="<<"||t===null}var OA=new Ge("tag:yaml.org,2002:merge",{kind:"scalar",resolve:$A}),Ca=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function FA(t){if(t===null)return!1;var n,o,s=0,r=t.length,l=Ca;for(o=0;o<r;o++)if(n=l.indexOf(t.charAt(o)),!(n>64)){if(n<0)return!1;s+=6}return s%8===0}function MA(t){var n,o,s=t.replace(/[\r\n=]/g,""),r=s.length,l=Ca,a=0,c=[];for(n=0;n<r;n++)n%4===0&&n&&(c.push(a>>16&255),c.push(a>>8&255),c.push(a&255)),a=a<<6|l.indexOf(s.charAt(n));return o=r%4*6,o===0?(c.push(a>>16&255),c.push(a>>8&255),c.push(a&255)):o===18?(c.push(a>>10&255),c.push(a>>2&255)):o===12&&c.push(a>>4&255),new Uint8Array(c)}function LA(t){var n="",o=0,s,r,l=t.length,a=Ca;for(s=0;s<l;s++)s%3===0&&s&&(n+=a[o>>18&63],n+=a[o>>12&63],n+=a[o>>6&63],n+=a[o&63]),o=(o<<8)+t[s];return r=l%3,r===0?(n+=a[o>>18&63],n+=a[o>>12&63],n+=a[o>>6&63],n+=a[o&63]):r===2?(n+=a[o>>10&63],n+=a[o>>4&63],n+=a[o<<2&63],n+=a[64]):r===1&&(n+=a[o>>2&63],n+=a[o<<4&63],n+=a[64],n+=a[64]),n}function HA(t){return Object.prototype.toString.call(t)==="[object Uint8Array]"}var IA=new Ge("tag:yaml.org,2002:binary",{kind:"scalar",resolve:FA,construct:MA,predicate:HA,represent:LA}),NA=Object.prototype.hasOwnProperty,jA=Object.prototype.toString;function qA(t){if(t===null)return!0;var n=[],o,s,r,l,a,c=t;for(o=0,s=c.length;o<s;o+=1){if(r=c[o],a=!1,jA.call(r)!=="[object Object]")return!1;for(l in r)if(NA.call(r,l))if(!a)a=!0;else return!1;if(!a)return!1;if(n.indexOf(l)===-1)n.push(l);else return!1}return!0}function UA(t){return t!==null?t:[]}var JA=new Ge("tag:yaml.org,2002:omap",{kind:"sequence",resolve:qA,construct:UA}),VA=Object.prototype.toString;function WA(t){if(t===null)return!0;var n,o,s,r,l,a=t;for(l=new Array(a.length),n=0,o=a.length;n<o;n+=1){if(s=a[n],VA.call(s)!=="[object Object]"||(r=Object.keys(s),r.length!==1))return!1;l[n]=[r[0],s[r[0]]]}return!0}function zA(t){if(t===null)return[];var n,o,s,r,l,a=t;for(l=new Array(a.length),n=0,o=a.length;n<o;n+=1)s=a[n],r=Object.keys(s),l[n]=[r[0],s[r[0]]];return l}var KA=new Ge("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:WA,construct:zA}),YA=Object.prototype.hasOwnProperty;function GA(t){if(t===null)return!0;var n,o=t;for(n in o)if(YA.call(o,n)&&o[n]!==null)return!1;return!0}function ZA(t){return t!==null?t:{}}var QA=new Ge("tag:yaml.org,2002:set",{kind:"mapping",resolve:GA,construct:ZA});TA.extend({implicit:[PA,OA],explicit:[IA,JA,KA,QA]});function Si(t){return t===48?"\0":t===97?"\x07":t===98?"\b":t===116||t===9?"	":t===110?`
`:t===118?"\v":t===102?"\f":t===114?"\r":t===101?"\x1B":t===32?" ":t===34?'"':t===47?"/":t===92?"\\":t===78?"\x85":t===95?"\xA0":t===76?"\u2028":t===80?"\u2029":""}var XA=new Array(256),e1=new Array(256);for(var Vn=0;Vn<256;Vn++)XA[Vn]=Si(Vn)?1:0,e1[Vn]=Si(Vn);function t1(t){return Array.from(new Set(t))}function ki(...t){let n,o,s;t.length===1?(n=0,s=1,[o]=t):[n,o,s=1]=t;const r=[];let l=n;for(;l<o;)r.push(l),l+=s||1;return r}function n1(t,n){if(!n||n==="all"||n==="*")return ki(1,t+1);const o=[];for(const s of n.split(/[,;]/g))if(!s.includes("-"))o.push(+s);else{const[r,l]=s.split("-",2);o.push(...ki(+r,l?+l+1:t+1))}return t1(o).filter(s=>s<=t).sort((s,r)=>s-r)}const o1=["title"],mr=De({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(t){const n=t;H(W);const o=H(Mo),s=H(_n),r=H(Lo);function l(f=5){const d=[],y="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",m=y.length;for(let g=0;g<f;g++)d.push(y.charAt(Math.floor(Math.random()*m)));return d.join("")}const a=N(),c=Hn();Eo(()=>{const f=n.at==null?s==null?void 0:s.value.length:n.at,d=T(()=>r!=null&&r.value?n.ranges.length-1:Math.min(Math.max(0,((o==null?void 0:o.value)||0)-(f||0)),n.ranges.length-1)),y=T(()=>n.ranges[d.value]||"");if(n.ranges.length>=2&&!(r!=null&&r.value)){const m=l(),g=Vm(n.ranges.length-1).map(A=>m+A);s!=null&&s.value&&(s.value.push(...g),pr(()=>g.forEach(A=>hl(s.value,A)),c))}vo(()=>{if(!a.value)return;const g=a.value.querySelector(".shiki-dark")?Array.from(a.value.querySelectorAll(".shiki")):[a.value];for(const A of g){const B=Array.from(A.querySelectorAll(".line")),D=n1(B.length,y.value);if(B.forEach((E,_)=>{const S=D.includes(_+1);E.classList.toggle(An,!0),E.classList.toggle("highlighted",S),E.classList.toggle("dishonored",!S)}),n.maxHeight){const E=A.querySelector(".line.highlighted");E&&E.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:i,copy:p}=zh();function u(){var d,y;const f=(y=(d=a.value)==null?void 0:d.querySelector(".slidev-code"))==null?void 0:y.textContent;f&&p(f)}return(f,d)=>{const y=LE,m=PE;return b(),U("div",{ref_key:"el",ref:a,class:"slidev-code-wrapper relative group",style:Ze({"max-height":n.maxHeight,"overflow-y":n.maxHeight?"scroll":void 0})},[jt(f.$slots,"default"),C(Ae).codeCopy?(b(),U("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:C(i)?"Copied":"Copy",onClick:d[0]||(d[0]=g=>u())},[C(i)?(b(),V(y,{key:0,class:"p-2 w-8 h-8"})):(b(),V(m,{key:1,class:"p-2 w-8 h-8"}))],8,o1)):he("v-if",!0)],4)}}}),s1=e("h1",null,"How would we Type-Check the following?",-1),r1=e("pre",{class:"shiki vitesse-dark",style:{"background-color":"#121212",color:"#dbd7ca"}},[e("div",{class:"language-id"},"ts"),e("div",{class:"code-container"},[e("code",null,[e("div",{class:"line"},[e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"sum"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"a"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"b"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"a"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"b")]),e("div",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])])],-1),l1=e("p",null,[Z("Without knowing something about "),e("code",null,"a"),Z(" and "),e("code",null,"b"),Z(" there isn\u2019t much we can say\u2026")],-1),a1={__name:"9",setup(t){const n={layout:"center",srcSequence:"./slides/02-motivation.md"};return H(W),(o,s)=>{const r=mr;return b(),V(je,ge(fe(n)),{default:Q(()=>[s1,Y(r,dn({},{ranges:[""]}),{default:Q(()=>[r1]),_:1},16),l1]),_:1},16)}}},c1=e("h1",null,"Welcome to TypeScript",-1),i1=e("h2",null,"TypeScript extends the JavaScript grammar to support type definitions",-1),p1=e("br",null,null,-1),u1=e("pre",{class:"shiki vitesse-dark twoslash lsp",style:{"background-color":"#121212",color:"#dbd7ca"}},[e("div",{class:"language-id"},"ts"),e("div",{class:"code-container"},[e("code",null,[e("div",{class:"line"},[e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function sum(a: number, b: number): number"},"sum")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) a: number"},"a")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"number"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) b: number"},"b")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"number"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) a: number"},"a")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"+"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) b: number"},"b")])]),e("div",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])])],-1),f1=e("p",null,[Z("Now the TS compiler knows that "),e("code",null,"a"),Z(" and "),e("code",null,"b"),Z(" are numbers and can safely check that "),e("code",null,"+"),Z(" is valid between numbers.")],-1),d1=e("pre",{class:"shiki vitesse-dark twoslash lsp",style:{"background-color":"#121212",color:"#dbd7ca"}},[e("div",{class:"language-id"},"ts"),e("div",{class:"code-container"},[e("code",null,[e("div",{class:"line"},[e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function sum(a: number, b: number): number"},"sum")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"2"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"3"),e("span",{style:{color:"#858585"}},")")]),e("div",{class:"line"},[e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function sum(a: number, b: number): number"},"sum")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"2"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},[e("data-err",null,'"not good"')]),e("span",{style:{color:"#858585"}},")")]),e("span",{class:"error"},[e("span",null,"Argument of type 'string' is not assignable to parameter of type 'number'."),e("span",{class:"code"},"2345")]),e("span",{class:"error-behind"},"Argument of type 'string' is not assignable to parameter of type 'number'.")])])],-1),y1=e("p",null,"It can even check call sites notifying us about wrong function invocations.",-1),m1={__name:"10",setup(t){const n={layout:"center",srcSequence:"./slides/02-motivation.md"};return H(W),(o,s)=>(b(),V(je,ge(fe(n)),{default:Q(()=>[c1,i1,p1,u1,f1,d1,y1]),_:1},16))}},h1=e("h1",null,"How Expressive is TypeScript\u2019s Type-System?",-1),g1=e("h2",null,"Amazing to say, a lot. One of the most expressive.",-1),v1=e("p",null,"Namely TypeScript has:",-1),E1=e("ul",null,[e("li",null,"Primitive types (string, number, symbol, object, record, etc)"),e("li",null,"Literal types (string literals, number literals)"),e("li",null,"Template literal types (literals intertwined with types)"),e("li",null,"Union types (A | B)"),e("li",null,"Intersection types (A & B)"),e("li",null,"Conditional types (if P then X else Y)"),e("li",null,"Generic types, with variance")],-1),A1={__name:"11",setup(t){const n={layout:"center",srcSequence:"./slides/02-motivation.md"};return H(W),(o,s)=>(b(),V(je,ge(fe(n)),{default:Q(()=>[h1,g1,v1,E1]),_:1},16))}},B1=e("h1",null,"A powerful example, ADTs",-1),D1=e("pre",{class:"shiki vitesse-dark twoslash lsp",style:{"background-color":"#121212",color:"#dbd7ca"}},[e("div",{class:"language-id"},"ts"),e("div",{class:"code-container"},[e("code",null,[e("div",{class:"line"},[e("span",{style:{color:"#CB7676"}},"interface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"interface Failure<out E>"},"Failure")]),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#A1B567"}},"out"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) E in Failure<out E>"},"E")]),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"readonly"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:'(property) Failure<out E>._tag: "Failure"'},"_tag")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Failure"')]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"readonly"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(property) Failure<out E>.failure: out E"},"failure")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) E in Failure<out E>"},"E")])]),e("div",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#CB7676"}},"interface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"interface Success<out A>"},"Success")]),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#A1B567"}},"out"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) A in Success<out A>"},"A")]),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"readonly"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:'(property) Success<out A>._tag: "Success"'},"_tag")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Success"')]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"readonly"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(property) Success<out A>.success: out A"},"success")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) A in Success<out A>"},"A")])]),e("div",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#CB7676"}},"type"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"type Result<E, A> = Failure<E> | Success<A>"},"Result")]),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) E in type Result<E, A>"},"E")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) A in type Result<E, A>"},"A")]),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"interface Failure<out E>"},"Failure")]),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) E in type Result<E, A>"},"E")]),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"interface Success<out A>"},"Success")]),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) A in type Result<E, A>"},"A")]),e("span",{style:{color:"#858585"}},">")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const success: <A>(a: A) => Result<never, A>"},"success")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) A in <A>(a: A): Result<never, A>"},"A")]),e("span",{style:{color:"#858585"}},">("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) a: A"},"a")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) A in <A>(a: A): Result<never, A>"},"A")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"type Result<E, A> = Failure<E> | Success<A>"},"Result")]),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#E0A569"}},"never"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) A in <A>(a: A): Result<never, A>"},"A")]),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"({"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},[e("data-lsp",{lsp:'(property) Success<out A>._tag: "Success"'},"_tag")]),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Success"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},[e("data-lsp",{lsp:"(property) Success<A>.success: A"},"success")]),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) a: A"},"a")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"})")]),e("div",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const failure: <E>(e: E) => Result<E, never>"},"failure")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) E in <E>(e: E): Result<E, never>"},"E")]),e("span",{style:{color:"#858585"}},">("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) e: E"},"e")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) E in <E>(e: E): Result<E, never>"},"E")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"type Result<E, A> = Failure<E> | Success<A>"},"Result")]),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) E in <E>(e: E): Result<E, never>"},"E")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"never"),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"({"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},[e("data-lsp",{lsp:'(property) Failure<out E>._tag: "Failure"'},"_tag")]),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Failure"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},[e("data-lsp",{lsp:"(property) Failure<E>.failure: E"},"failure")]),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) e: E"},"e")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"})")])])])],-1),_1={__name:"12",setup(t){const n={layout:"center",srcSequence:"./slides/02-motivation.md"};return H(W),(o,s)=>(b(),V(je,ge(fe(n)),{default:Q(()=>[B1,D1]),_:1},16))}},C1=e("h1",null,"Using ADTs",-1),b1=e("pre",{class:"shiki vitesse-dark twoslash lsp",style:{"background-color":"#121212",color:"#dbd7ca"}},[e("div",{class:"language-id"},"ts"),e("div",{class:"code-container"},[e("code",null,[e("div",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const mapResult: <E, A, B>(result: Result<E, A>, f: (a: A) => B) => Result<E, B>"},"mapResult")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) E in <E, A, B>(result: Result<E, A>, f: (a: A) => B): Result<E, B>"},"E")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) A in <E, A, B>(result: Result<E, A>, f: (a: A) => B): Result<E, B>"},"A")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) B in <E, A, B>(result: Result<E, A>, f: (a: A) => B): Result<E, B>"},"B")]),e("span",{style:{color:"#858585"}},">("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) result: Result<E, A>"},"result")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"type Result<E, A> = Failure<E> | Success<A>"},"Result")]),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) E in <E, A, B>(result: Result<E, A>, f: (a: A) => B): Result<E, B>"},"E")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) A in <E, A, B>(result: Result<E, A>, f: (a: A) => B): Result<E, B>"},"A")]),e("span",{style:{color:"#858585"}},">,"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(parameter) f: (a: A) => B"},"f")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) a: A"},"a")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) A in <E, A, B>(result: Result<E, A>, f: (a: A) => B): Result<E, B>"},"A")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) B in <E, A, B>(result: Result<E, A>, f: (a: A) => B): Result<E, B>"},"B")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"type Result<E, A> = Failure<E> | Success<A>"},"Result")]),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) E in <E, A, B>(result: Result<E, A>, f: (a: A) => B): Result<E, B>"},"E")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) B in <E, A, B>(result: Result<E, A>, f: (a: A) => B): Result<E, B>"},"B")]),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"switch"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) result: Result<E, A>"},"result")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:'(property) _tag: "Failure" | "Success"'},"_tag")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"case"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Success"'),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const success: <B>(a: B) => Result<never, B>"},"success")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(parameter) f: (a: A) => B"},"f")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) result: Success<A>"},"result")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(property) Success<A>.success: A"},"success")]),e("span",{style:{color:"#858585"}},"))")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"}")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"case"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Failure"'),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const failure: <E>(e: E) => Result<E, never>"},"failure")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) result: Failure<E>"},"result")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(property) Failure<E>.failure: E"},"failure")]),e("span",{style:{color:"#858585"}},")")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"}")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),e("div",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const program: Result<never, string>"},"program")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const mapResult: <never, string, string>(result: Result<never, string>, f: (a: string) => string) => Result<never, string>"},"mapResult")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const success: <string>(a: string) => Result<never, string>"},"success")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"hello"'),e("span",{style:{color:"#858585"}},"),"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) s: string"},"s")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"`"),e("span",{style:{color:"#858585"}},"${"),e("span",{style:{color:"#C98A7D"}},[e("data-lsp",{lsp:"(parameter) s: string"},"s")]),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}}," world`"),e("span",{style:{color:"#858585"}},")")])])])],-1),w1={__name:"13",setup(t){const n={layout:"center",srcSequence:"./slides/02-motivation.md"};return H(W),(o,s)=>(b(),V(je,ge(fe(n)),{default:Q(()=>[C1,b1]),_:1},16))}},x1=e("h1",null,"Exhaustive Matching",-1),T1=e("pre",{class:"shiki vitesse-dark twoslash lsp",style:{"background-color":"#121212",color:"#dbd7ca"}},[e("div",{class:"language-id"},"ts"),e("div",{class:"code-container"},[e("code",null,[e("div",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const absurd: (_: never) => never"},"absurd")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) _: never"},"_")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"never"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"never"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"throw"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},[e("data-lsp",{lsp:`var Error: ErrorConstructor
new (message?: string | undefined) => Error`},"Error")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"Bug!"'),e("span",{style:{color:"#858585"}},")")]),e("div",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const mapResult: <E, A, B>(result: Result<E, A>, f: (a: A) => B) => Result<E, B>"},"mapResult")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) E in <E, A, B>(result: Result<E, A>, f: (a: A) => B): Result<E, B>"},"E")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) A in <E, A, B>(result: Result<E, A>, f: (a: A) => B): Result<E, B>"},"A")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) B in <E, A, B>(result: Result<E, A>, f: (a: A) => B): Result<E, B>"},"B")]),e("span",{style:{color:"#858585"}},">("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) result: Result<E, A>"},"result")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"type Result<E, A> = Failure<E> | Success<A>"},"Result")]),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) E in <E, A, B>(result: Result<E, A>, f: (a: A) => B): Result<E, B>"},"E")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) A in <E, A, B>(result: Result<E, A>, f: (a: A) => B): Result<E, B>"},"A")]),e("span",{style:{color:"#858585"}},">,"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(parameter) f: (a: A) => B"},"f")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) a: A"},"a")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) A in <E, A, B>(result: Result<E, A>, f: (a: A) => B): Result<E, B>"},"A")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) B in <E, A, B>(result: Result<E, A>, f: (a: A) => B): Result<E, B>"},"B")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"type Result<E, A> = Failure<E> | Success<A>"},"Result")]),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) E in <E, A, B>(result: Result<E, A>, f: (a: A) => B): Result<E, B>"},"E")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) B in <E, A, B>(result: Result<E, A>, f: (a: A) => B): Result<E, B>"},"B")]),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"switch"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) result: Result<E, A>"},"result")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:'(property) _tag: "Failure" | "Success"'},"_tag")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"case"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Success"'),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const success: <B>(a: B) => Result<never, B>"},"success")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(parameter) f: (a: A) => B"},"f")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) result: Success<A>"},"result")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(property) Success<A>.success: A"},"success")]),e("span",{style:{color:"#858585"}},"))")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"}")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"default"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const absurd: (_: never) => never"},"absurd")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-err",null,[e("data-lsp",{lsp:"(parameter) result: Failure<E>"},"result")])]),e("span",{style:{color:"#858585"}},")")]),e("span",{class:"error"},[e("span",null,"Argument of type 'Failure<E>' is not assignable to parameter of type 'never'."),e("span",{class:"code"},"2345")]),e("span",{class:"error-behind"},"Argument of type 'Failure<E>' is not assignable to parameter of type 'never'."),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"}")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),e("div",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])])],-1),S1={__name:"14",setup(t){const n={layout:"center",srcSequence:"./slides/02-motivation.md"};return H(W),(o,s)=>(b(),V(je,ge(fe(n)),{default:Q(()=>[x1,T1]),_:1},16))}},k1=e("h1",null,"Pipeable APIs",-1),R1=e("pre",{class:"shiki vitesse-dark twoslash lsp",style:{"background-color":"#121212",color:"#dbd7ca"}},[e("div",{class:"language-id"},"ts"),e("div",{class:"code-container"},[e("code",null,[e("div",{class:"line"},[e("span",{style:{color:"#CB7676"}},"declare"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function pipe<A, B, C, D>(a: A, ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D): D (+3 overloads)"},"pipe")]),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) A in pipe<A, B, C, D>(a: A, ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D): D"},"A")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) B in pipe<A, B, C, D>(a: A, ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D): D"},"B")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) C in pipe<A, B, C, D>(a: A, ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D): D"},"C")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) D in pipe<A, B, C, D>(a: A, ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D): D"},"D")]),e("span",{style:{color:"#858585"}},">("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) a: A"},"a")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) A in pipe<A, B, C, D>(a: A, ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D): D"},"A")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(parameter) ab: (a: A) => B"},"ab")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) a: A"},"a")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) A in pipe<A, B, C, D>(a: A, ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D): D"},"A")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) B in pipe<A, B, C, D>(a: A, ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D): D"},"B")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(parameter) bc: (b: B) => C"},"bc")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) b: B"},"b")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) B in pipe<A, B, C, D>(a: A, ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D): D"},"B")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) C in pipe<A, B, C, D>(a: A, ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D): D"},"C")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(parameter) cd: (c: C) => D"},"cd")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) c: C"},"c")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) C in pipe<A, B, C, D>(a: A, ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D): D"},"C")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) D in pipe<A, B, C, D>(a: A, ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D): D"},"D")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) D in pipe<A, B, C, D>(a: A, ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D): D"},"D")])]),e("div",{class:"line"},[e("span",{style:{color:"#CB7676"}},"declare"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function pipe<A, B, C>(a: A, ab: (a: A) => B, bc: (b: B) => C): C (+3 overloads)"},"pipe")]),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) A in pipe<A, B, C>(a: A, ab: (a: A) => B, bc: (b: B) => C): C"},"A")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) B in pipe<A, B, C>(a: A, ab: (a: A) => B, bc: (b: B) => C): C"},"B")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) C in pipe<A, B, C>(a: A, ab: (a: A) => B, bc: (b: B) => C): C"},"C")]),e("span",{style:{color:"#858585"}},">("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) a: A"},"a")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) A in pipe<A, B, C>(a: A, ab: (a: A) => B, bc: (b: B) => C): C"},"A")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(parameter) ab: (a: A) => B"},"ab")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) a: A"},"a")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) A in pipe<A, B, C>(a: A, ab: (a: A) => B, bc: (b: B) => C): C"},"A")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) B in pipe<A, B, C>(a: A, ab: (a: A) => B, bc: (b: B) => C): C"},"B")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(parameter) bc: (b: B) => C"},"bc")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) b: B"},"b")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) B in pipe<A, B, C>(a: A, ab: (a: A) => B, bc: (b: B) => C): C"},"B")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) C in pipe<A, B, C>(a: A, ab: (a: A) => B, bc: (b: B) => C): C"},"C")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) C in pipe<A, B, C>(a: A, ab: (a: A) => B, bc: (b: B) => C): C"},"C")])]),e("div",{class:"line"},[e("span",{style:{color:"#CB7676"}},"declare"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function pipe<A, B>(a: A, ab: (a: A) => B): B (+3 overloads)"},"pipe")]),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) A in pipe<A, B>(a: A, ab: (a: A) => B): B"},"A")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) B in pipe<A, B>(a: A, ab: (a: A) => B): B"},"B")]),e("span",{style:{color:"#858585"}},">("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) a: A"},"a")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) A in pipe<A, B>(a: A, ab: (a: A) => B): B"},"A")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(parameter) ab: (a: A) => B"},"ab")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) a: A"},"a")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) A in pipe<A, B>(a: A, ab: (a: A) => B): B"},"A")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) B in pipe<A, B>(a: A, ab: (a: A) => B): B"},"B")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) B in pipe<A, B>(a: A, ab: (a: A) => B): B"},"B")])]),e("div",{class:"line"},[e("span",{style:{color:"#CB7676"}},"declare"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function pipe<A>(a: A): A (+3 overloads)"},"pipe")]),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) A in pipe<A>(a: A): A"},"A")]),e("span",{style:{color:"#858585"}},">("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) a: A"},"a")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) A in pipe<A>(a: A): A"},"A")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) A in pipe<A>(a: A): A"},"A")])]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const mapResult: <A, B>(f: (a: A) => B) => <E>(result: Result<E, A>) => Result<E, B>"},"mapResult")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) A in <A, B>(f: (a: A) => B): <E>(result: Result<E, A>) => Result<E, B>"},"A")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) B in <A, B>(f: (a: A) => B): <E>(result: Result<E, A>) => Result<E, B>"},"B")]),e("span",{style:{color:"#858585"}},">("),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(parameter) f: (a: A) => B"},"f")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) a: A"},"a")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) A in <A, B>(f: (a: A) => B): <E>(result: Result<E, A>) => Result<E, B>"},"A")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) B in <A, B>(f: (a: A) => B): <E>(result: Result<E, A>) => Result<E, B>"},"B")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) E in <E>(result: Result<E, A>): Result<E, B>"},"E")]),e("span",{style:{color:"#858585"}},">("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) result: Result<E, A>"},"result")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"type Result<E, A> = Failure<E> | Success<A>"},"Result")]),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) E in <E>(result: Result<E, A>): Result<E, B>"},"E")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) A in <A, B>(f: (a: A) => B): <E>(result: Result<E, A>) => Result<E, B>"},"A")]),e("span",{style:{color:"#858585"}},">)"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"type Result<E, A> = Failure<E> | Success<A>"},"Result")]),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) E in <E>(result: Result<E, A>): Result<E, B>"},"E")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(type parameter) B in <A, B>(f: (a: A) => B): <E>(result: Result<E, A>) => Result<E, B>"},"B")]),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"switch"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) result: Result<E, A>"},"result")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:'(property) _tag: "Failure" | "Success"'},"_tag")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"case"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Success"'),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const success: <B>(a: B) => Result<never, B>"},"success")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(parameter) f: (a: A) => B"},"f")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) result: Success<A>"},"result")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(property) Success<A>.success: A"},"success")]),e("span",{style:{color:"#858585"}},"))")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"}")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"case"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"Failure"'),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const failure: <E>(e: E) => Result<E, never>"},"failure")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) result: Failure<E>"},"result")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(property) Failure<E>.failure: E"},"failure")]),e("span",{style:{color:"#858585"}},")")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"}")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),e("div",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const program: Result<never, number>"},"program")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function pipe<Result<never, string>, Result<never, string>, Result<never, string>, Result<never, number>>(a: Result<never, string>, ab: (a: Result<never, string>) => Result<...>, bc: (b: Result<...>) => Result<...>, cd: (c: Result<...>) => Result<...>): Result<...> (+3 overloads)"},"pipe")]),e("span",{style:{color:"#858585"}},"(")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const success: <string>(a: string) => Result<never, string>"},"success")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"hello"'),e("span",{style:{color:"#858585"}},"),")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const mapResult: <string, string>(f: (a: string) => string) => <E>(result: Result<E, string>) => Result<E, string>"},"mapResult")]),e("span",{style:{color:"#858585"}},"(("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) s: string"},"s")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"`"),e("span",{style:{color:"#858585"}},"${"),e("span",{style:{color:"#C98A7D"}},[e("data-lsp",{lsp:"(parameter) s: string"},"s")]),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}}," world`"),e("span",{style:{color:"#858585"}},"),")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const mapResult: <string, string>(f: (a: string) => string) => <E>(result: Result<E, string>) => Result<E, string>"},"mapResult")]),e("span",{style:{color:"#858585"}},"(("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) s: string"},"s")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"`"),e("span",{style:{color:"#858585"}},"${"),e("span",{style:{color:"#C98A7D"}},[e("data-lsp",{lsp:"(parameter) s: string"},"s")]),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}}," nice!`"),e("span",{style:{color:"#858585"}},"),")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const mapResult: <string, number>(f: (a: string) => number) => <E>(result: Result<E, string>) => Result<E, number>"},"mapResult")]),e("span",{style:{color:"#858585"}},"(("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) s: string"},"s")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) s: string"},"s")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#429988"}},[e("data-lsp",{lsp:"(property) String.length: number"},"length")]),e("span",{style:{color:"#858585"}},")")]),e("div",{class:"line"},[e("span",{style:{color:"#858585"}},")")])])])],-1),P1={__name:"15",setup(t){const n={layout:"center",srcSequence:"./slides/02-motivation.md"};return H(W),(o,s)=>(b(),V(je,ge(fe(n)),{default:Q(()=>[k1,R1]),_:1},16))}},$1=e("h1",null,"Taking TypeScript to it\u2019s limits (and beyond)",-1),O1={__name:"16",setup(t){const n={layout:"center",srcSequence:"./slides/03-intro-to-effect.md"};return H(W),(o,s)=>(b(),V(je,ge(fe(n)),{default:Q(()=>[$1]),_:1},16))}},F1=e("h1",null,"Welcome to Effect",-1),M1=e("h2",null,"A fiber-based, structured concurrency primitive for general purpose programming with type safe requirements and errors",-1),L1={__name:"17",setup(t){const n={layout:"center",srcSequence:"./slides/03-intro-to-effect.md"};return H(W),(o,s)=>(b(),V(je,ge(fe(n)),{default:Q(()=>[F1,M1]),_:1},16))}},H1={class:"slidev-layout full w-full h-full"},lt={__name:"full",setup(t){return H(W),(n,o)=>(b(),U("div",H1,[jt(n.$slots,"default",{class:"w-full h-full"})]))}},I1=e("h1",null,[Z("Creating a "),e("code",null,"fetch"),Z(" wrapper")],-1),N1=e("pre",{class:"shiki vitesse-dark twoslash lsp",style:{"background-color":"#121212",color:"#dbd7ca"}},[e("div",{class:"language-id"},"ts"),e("div",{class:"code-container"},[e("code",null,[e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"as"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Eff"},"Eff")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"@effect/core/io/Effect"'),e("span",{style:{color:"#858585"}},";")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"class FetchError"},"FetchError")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#CB7676"}},"readonly"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:'(property) FetchError._tag: "FetchError"'},"_tag")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"FetchError"'),e("span",{style:{color:"#858585"}},";")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#CB7676"}},"constructor"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"readonly"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(property) FetchError.error: unknown"},"error")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"unknown"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{}")]),e("div",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const request: (input: RequestInfo | URL, init?: RequestInit | undefined) => Eff.Effect<never, FetchError, Response>"},"request")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) input: RequestInfo | URL"},"input")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"type RequestInfo = string | Request"},"RequestInfo")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"interface URL"},"URL")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) init: RequestInit | undefined"},"init")]),e("span",{style:{color:"#CB7676"}},"?:"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"interface RequestInit"},"RequestInit")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"undefined"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Eff"},"Eff")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function tryCatchPromise<FetchError, Response>(promise: LazyArg<Promise<Response>>, onReject: (reason: unknown) => FetchError): Eff.Effect<never, FetchError, Response>"},"tryCatchPromise")]),e("span",{style:{color:"#858585"}},"(")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function fetch(input: RequestInfo | URL, init?: RequestInit | undefined): Promise<Response>"},"fetch")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) input: RequestInfo | URL"},"input")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) init: RequestInit | undefined"},"init")]),e("span",{style:{color:"#858585"}},"),")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) error: unknown"},"error")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"constructor FetchError(error: unknown): FetchError"},"FetchError")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) error: unknown"},"error")]),e("span",{style:{color:"#858585"}},")")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},");")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"class JsonBodyError"},"JsonBodyError")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#CB7676"}},"readonly"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:'(property) JsonBodyError._tag: "JsonBodyError"'},"_tag")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"JsonBodyError"'),e("span",{style:{color:"#858585"}},";")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#CB7676"}},"constructor"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"readonly"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(property) JsonBodyError.error: unknown"},"error")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"unknown"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{}")]),e("div",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const jsonBody: (input: Response) => Eff.Effect<never, JsonBodyError, unknown>"},"jsonBody")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) input: Response"},"input")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"interface Response"},"Response")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Eff"},"Eff")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function tryCatchPromise<JsonBodyError, unknown>(promise: LazyArg<Promise<unknown>>, onReject: (reason: unknown) => JsonBodyError): Eff.Effect<never, JsonBodyError, unknown>"},"tryCatchPromise")]),e("span",{style:{color:"#858585"}},"(")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"interface Promise<T>"},"Promise")]),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#E0A569"}},"unknown"),e("span",{style:{color:"#858585"}},">"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) input: Response"},"input")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(method) Body.json(): Promise<any>"},"json")]),e("span",{style:{color:"#858585"}},"(),")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) error: unknown"},"error")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"constructor JsonBodyError(error: unknown): JsonBodyError"},"JsonBodyError")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) error: unknown"},"error")]),e("span",{style:{color:"#858585"}},")")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},");")])])])],-1),j1={__name:"18",setup(t){const n={layout:"full",srcSequence:"./slides/03-intro-to-effect.md"};return H(W),(o,s)=>(b(),V(lt,ge(fe(n)),{default:Q(()=>[I1,N1]),_:1},16))}},q1=e("h1",null,[Z("Using the "),e("code",null,"fetch"),Z(" wrapper")],-1),U1=e("pre",{class:"shiki vitesse-dark twoslash lsp",style:{"background-color":"#121212",color:"#dbd7ca"}},[e("div",{class:"language-id"},"ts"),e("div",{class:"code-container"},[e("code",null,[e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Http"},"Http")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:`(alias) function pipe<A>(a: A): A (+19 overloads)
import pipe`},"pipe")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"./common"'),e("span",{style:{color:"#858585"}},";")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const getTodo: (id: number) => Effect.Effect<never, Http.FetchError | Http.JsonBodyError, unknown>"},"getTodo")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) id: number"},"id")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"number"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`(alias) pipe<Effect.Effect<never, Http.FetchError, Response>, Effect.Effect<never, Http.FetchError | Http.JsonBodyError, unknown>>(a: Effect.Effect<never, Http.FetchError, Response>, ab: (a: Effect.Effect<...>) => Effect.Effect<...>): Effect.Effect<...> (+19 overloads)
import pipe`},"pipe")]),e("span",{style:{color:"#858585"}},"(")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Http"},"Http")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const request: (input: RequestInfo, init?: RequestInit | undefined) => Effect.Effect<never, Http.FetchError, Response>"},"request")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"`https://jsonplaceholder.typicode.com/todos/"),e("span",{style:{color:"#858585"}},"${"),e("span",{style:{color:"#C98A7D"}},[e("data-lsp",{lsp:"(parameter) id: number"},"id")]),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},"`"),e("span",{style:{color:"#858585"}},"),")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function flatMap<Response, never, Http.JsonBodyError, unknown>(f: (a: Response) => Effect.Effect<never, Http.JsonBodyError, unknown>): <R, E>(self: Effect.Effect<R, E, Response>) => Effect.Effect<...>"},"flatMap")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Http"},"Http")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const jsonBody: (input: Response) => Effect.Effect<never, Http.JsonBodyError, unknown>"},"jsonBody")]),e("span",{style:{color:"#858585"}},")")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},");")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const getTodos: (ids: number[]) => Effect.Effect<never, Http.FetchError | Http.JsonBodyError, Chunk<unknown>>"},"getTodos")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) ids: number[]"},"ids")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"number"),e("span",{style:{color:"#858585"}},"[])"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," ")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`(alias) collectAll<never, Http.FetchError | Http.JsonBodyError, unknown>(as: Collection<Effect.Effect<never, Http.FetchError | Http.JsonBodyError, unknown>>): Effect.Effect<...>
export collectAll`},"collectAll")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) ids: number[]"},"ids")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(method) Array<number>.map<Effect.Effect<never, Http.FetchError | Http.JsonBodyError, unknown>>(callbackfn: (value: number, index: number, array: number[]) => Effect.Effect<never, Http.FetchError | Http.JsonBodyError, unknown>, thisArg?: any): Effect.Effect<...>[]"},"map")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const getTodo: (id: number) => Effect.Effect<never, Http.FetchError | Http.JsonBodyError, unknown>"},"getTodo")]),e("span",{style:{color:"#858585"}},"))"),e("span",{style:{color:"#DBD7CA"}}," ")])])])],-1),J1=e("p",null,[Z("Looking at the types inferred from TS we can explicitely see "),e("code",null,"getTodo"),Z(" may returns:")],-1),V1=e("pre",{class:"shiki vitesse-dark",style:{"background-color":"#121212",color:"#dbd7ca"}},[e("div",{class:"language-id"},"ts"),e("div",{class:"code-container"},[e("code",null,[e("div",{class:"line"},[e("span",{style:{color:"#B8A965"}},"Effect"),e("span",{style:{color:"#CB7676"}},"<"),e("span",{style:{color:"#B8A965"}},"never"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"FetchError"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"JsonBodyError"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"Chunk"),e("span",{style:{color:"#CB7676"}},"<"),e("span",{style:{color:"#B8A965"}},"unknown"),e("span",{style:{color:"#CB7676"}},">>")])])])],-1),W1=e("p",null,[Z("Which can be read as: "),e("strong",null,"one operation that has no requirements, and when performed may fail for either a FetchError or for a JsonBodyError and when succesful returns unknown")],-1),z1={__name:"19",setup(t){const n={layout:"full",srcSequence:"./slides/03-intro-to-effect.md"};return H(W),(o,s)=>{const r=mr;return b(),V(lt,ge(fe(n)),{default:Q(()=>[q1,U1,J1,Y(r,dn({},{ranges:[""]}),{default:Q(()=>[V1]),_:1},16),W1]),_:1},16)}}},K1=e("h1",null,"Composing further",-1),Y1=e("pre",{class:"shiki vitesse-dark twoslash lsp",style:{"background-color":"#121212",color:"#dbd7ca"}},[e("div",{class:"language-id"},"ts"),e("div",{class:"code-container"},[e("code",null,[e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"interface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"interface Todo"},"Todo")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(property) Todo.id: number"},"id")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"number"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"class ParseTodoError"},"ParseTodoError")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"readonly"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:'(property) ParseTodoError._tag: "ParseTodoError"'},"_tag")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"ParseTodoError"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"declare"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const parseTodo: (u: unknown) => Effect.Effect<never, ParseTodoError, Todo>"},"parseTodo")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) u: unknown"},"u")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"unknown"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`interface Effect<R, E, A>
namespace Effect`},"Effect")]),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#E0A569"}},"never"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"class ParseTodoError"},"ParseTodoError")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"interface Todo"},"Todo")]),e("span",{style:{color:"#858585"}},">")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const getTodo: (id: number) => Effect.Effect<never, ParseTodoError | Http.FetchError | Http.JsonBodyError, Todo>"},"getTodo")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) id: number"},"id")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"number"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`(alias) pipe<Effect.Effect<never, Http.FetchError, Response>, Effect.Effect<never, Http.FetchError | Http.JsonBodyError, unknown>, Effect.Effect<never, ParseTodoError | ... 1 more ... | Http.JsonBodyError, Todo>>(a: Effect.Effect<...>, ab: (a: Effect.Effect<...>) => Effect.Effect<...>, bc: (b: Effect.Effect<...>) => Effect.Effect<...>): Effect.Effect<...> (+19 overloads)
import pipe`},"pipe")]),e("span",{style:{color:"#858585"}},"(")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Http"},"Http")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const request: (input: RequestInfo, init?: RequestInit | undefined) => Effect.Effect<never, Http.FetchError, Response>"},"request")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"`https://jsonplaceholder.typicode.com/todos/"),e("span",{style:{color:"#858585"}},"${"),e("span",{style:{color:"#C98A7D"}},[e("data-lsp",{lsp:"(parameter) id: number"},"id")]),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},"`"),e("span",{style:{color:"#858585"}},"),")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function flatMap<Response, never, Http.JsonBodyError, unknown>(f: (a: Response) => Effect.Effect<never, Http.JsonBodyError, unknown>): <R, E>(self: Effect.Effect<R, E, Response>) => Effect.Effect<...>"},"flatMap")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Http"},"Http")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const jsonBody: (input: Response) => Effect.Effect<never, Http.JsonBodyError, unknown>"},"jsonBody")]),e("span",{style:{color:"#858585"}},"),")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function flatMap<unknown, never, ParseTodoError, Todo>(f: (a: unknown) => Effect.Effect<never, ParseTodoError, Todo>): <R, E>(self: Effect.Effect<R, E, unknown>) => Effect.Effect<...>"},"flatMap")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const parseTodo: (u: unknown) => Effect.Effect<never, ParseTodoError, Todo>"},"parseTodo")]),e("span",{style:{color:"#858585"}},"),")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},");")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const getTodos: (ids: number[]) => Effect.Effect<never, ParseTodoError | Http.FetchError | Http.JsonBodyError, Chunk<Todo>>"},"getTodos")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) ids: number[]"},"ids")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"number"),e("span",{style:{color:"#858585"}},"[])"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," ")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`(alias) collectAll<never, ParseTodoError | Http.FetchError | Http.JsonBodyError, Todo>(as: Collection<Effect.Effect<never, ParseTodoError | Http.FetchError | Http.JsonBodyError, Todo>>): Effect.Effect<...>
export collectAll`},"collectAll")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) ids: number[]"},"ids")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(method) Array<number>.map<Effect.Effect<never, ParseTodoError | Http.FetchError | Http.JsonBodyError, Todo>>(callbackfn: (value: number, index: number, array: number[]) => Effect.Effect<...>, thisArg?: any): Effect.Effect<...>[]"},"map")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const getTodo: (id: number) => Effect.Effect<never, ParseTodoError | Http.FetchError | Http.JsonBodyError, Todo>"},"getTodo")]),e("span",{style:{color:"#858585"}},"))"),e("span",{style:{color:"#DBD7CA"}}," ")])])])],-1),G1=e("p",null,[Z("Looking at the types inferred from TS we can explicitely see "),e("code",null,"getTodo"),Z(" may returns:")],-1),Z1=e("pre",{class:"shiki vitesse-dark",style:{"background-color":"#121212",color:"#dbd7ca"}},[e("div",{class:"language-id"},"ts"),e("div",{class:"code-container"},[e("code",null,[e("div",{class:"line"},[e("span",{style:{color:"#B8A965"}},"Effect"),e("span",{style:{color:"#CB7676"}},"<"),e("span",{style:{color:"#B8A965"}},"never"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"FetchError"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"JsonBodyError"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ParseTodoError"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"Chunk"),e("span",{style:{color:"#CB7676"}},"<"),e("span",{style:{color:"#B8A965"}},"Todo"),e("span",{style:{color:"#CB7676"}},">>")])])])],-1),Q1={__name:"20",setup(t){const n={layout:"full",srcSequence:"./slides/03-intro-to-effect.md"};return H(W),(o,s)=>{const r=mr;return b(),V(lt,ge(fe(n)),{default:Q(()=>[K1,Y1,G1,Y(r,dn({},{ranges:[""]}),{default:Q(()=>[Z1]),_:1},16)]),_:1},16)}}},X1=e("h1",null,"Handling Errors",-1),eB=e("pre",{class:"shiki vitesse-dark twoslash lsp",style:{"background-color":"#121212",color:"#dbd7ca"}},[e("div",{class:"language-id"},"ts"),e("div",{class:"code-container"},[e("code",null,[e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"interface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"interface Todo"},"Todo")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(property) Todo.id: number"},"id")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"number"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"class ParseTodoError"},"ParseTodoError")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"readonly"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:'(property) ParseTodoError._tag: "ParseTodoError"'},"_tag")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"ParseTodoError"'),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"declare"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const parseTodo: (u: unknown) => Effect.Effect<never, ParseTodoError, Todo>"},"parseTodo")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) u: unknown"},"u")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"unknown"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`interface Effect<R, E, A>
namespace Effect`},"Effect")]),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#E0A569"}},"never"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"class ParseTodoError"},"ParseTodoError")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"interface Todo"},"Todo")]),e("span",{style:{color:"#858585"}},">")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const getTodo: (id: number) => Effect.Effect<never, ParseTodoError | Http.JsonBodyError | Http.FetchError, Todo>"},"getTodo")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) id: number"},"id")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"number"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`(alias) pipe<Effect.Effect<never, Http.FetchError, Response>, Effect.Effect<never, Http.JsonBodyError | Http.FetchError, unknown>, Effect.Effect<never, ParseTodoError | ... 1 more ... | Http.FetchError, Todo>>(a: Effect.Effect<...>, ab: (a: Effect.Effect<...>) => Effect.Effect<...>, bc: (b: Effect.Effect<...>) => Effect.Effect<...>): Effect.Effect<...> (+19 overloads)
import pipe`},"pipe")]),e("span",{style:{color:"#858585"}},"(")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Http"},"Http")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const request: (input: RequestInfo, init?: RequestInit | undefined) => Effect.Effect<never, Http.FetchError, Response>"},"request")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"`https://jsonplaceholder.typicode.com/todos/"),e("span",{style:{color:"#858585"}},"${"),e("span",{style:{color:"#C98A7D"}},[e("data-lsp",{lsp:"(parameter) id: number"},"id")]),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},"`"),e("span",{style:{color:"#858585"}},"),")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function flatMap<Response, never, Http.JsonBodyError, unknown>(f: (a: Response) => Effect.Effect<never, Http.JsonBodyError, unknown>): <R, E>(self: Effect.Effect<R, E, Response>) => Effect.Effect<...>"},"flatMap")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Http"},"Http")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const jsonBody: (input: Response) => Effect.Effect<never, Http.JsonBodyError, unknown>"},"jsonBody")]),e("span",{style:{color:"#858585"}},"),")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function flatMap<unknown, never, ParseTodoError, Todo>(f: (a: unknown) => Effect.Effect<never, ParseTodoError, Todo>): <R, E>(self: Effect.Effect<R, E, unknown>) => Effect.Effect<...>"},"flatMap")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const parseTodo: (u: unknown) => Effect.Effect<never, ParseTodoError, Todo>"},"parseTodo")]),e("span",{style:{color:"#858585"}},"),")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},");")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const getTodos: (ids: number[]) => Effect.Effect<never, ParseTodoError | Http.JsonBodyError | Http.FetchError, Chunk.Chunk<Todo>>"},"getTodos")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) ids: number[]"},"ids")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"number"),e("span",{style:{color:"#858585"}},"[])"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," ")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`(alias) collectAll<never, ParseTodoError | Http.JsonBodyError | Http.FetchError, Todo>(as: Collection<Effect.Effect<never, ParseTodoError | Http.JsonBodyError | Http.FetchError, Todo>>): Effect.Effect<...>
export collectAll`},"collectAll")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) ids: number[]"},"ids")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(method) Array<number>.map<Effect.Effect<never, ParseTodoError | Http.JsonBodyError | Http.FetchError, Todo>>(callbackfn: (value: number, index: number, array: number[]) => Effect.Effect<...>, thisArg?: any): Effect.Effect<...>[]"},"map")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const getTodo: (id: number) => Effect.Effect<never, ParseTodoError | Http.JsonBodyError | Http.FetchError, Todo>"},"getTodo")]),e("span",{style:{color:"#858585"}},"))")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const getTodosWhenPossible: (ids: number[]) => Effect.Effect<never, Http.JsonBodyError | ParseTodoError, Chunk.Chunk<Todo>>"},"getTodosWhenPossible")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," ")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) ids: number[]"},"ids")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"number"),e("span",{style:{color:"#858585"}},"[])"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`interface Effect<R, E, A>
namespace Effect`},"Effect")]),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#E0A569"}},"never"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"import Http"},"Http")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"class JsonBodyError"},"JsonBodyError")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"class ParseTodoError"},"ParseTodoError")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"import Chunk"},"Chunk")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`interface Chunk<A>
namespace Chunk`},"Chunk")]),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"interface Todo"},"Todo")]),e("span",{style:{color:"#858585"}},">>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," ")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`(alias) pipe<number[], Effect.Effect<never, ParseTodoError | Http.JsonBodyError | Http.FetchError, Chunk.Chunk<Todo>>, Effect.Effect<never, ParseTodoError | Http.JsonBodyError, Chunk.Chunk<...> | Chunk.Chunk<...>>>(a: number[], ab: (a: number[]) => Effect.Effect<...>, bc: (b: Effect.Effect<...>) => Effect.Effect<...>): Effect.Effect<...> (+19 overloads)
import pipe`},"pipe")]),e("span",{style:{color:"#858585"}},"(")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) ids: number[]"},"ids")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," ")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const getTodos: (ids: number[]) => Effect.Effect<never, ParseTodoError | Http.JsonBodyError | Http.FetchError, Chunk.Chunk<Todo>>"},"getTodos")]),e("span",{style:{color:"#858585"}},",")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:'function catchTag<"FetchError", ParseTodoError | Http.JsonBodyError | Http.FetchError, never, never, Chunk.Chunk<never>>(k: "FetchError", f: (e: Http.FetchError) => Effect.Effect<...>): <R, A>(self: Effect.Effect<...>) => Effect.Effect<...>'},"catchTag")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"FetchError"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function succeed<Chunk.Chunk<never>>(value: Chunk.Chunk<never>): Effect.Effect<never, never, Chunk.Chunk<never>>"},"succeed")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Chunk"},"Chunk")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function empty<never>(): Chunk.Chunk<never>"},"empty")]),e("span",{style:{color:"#858585"}},"()))")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},")")])])])],-1),tB={__name:"21",setup(t){const n={layout:"full",srcSequence:"./slides/03-intro-to-effect.md"};return H(W),(o,s)=>(b(),V(lt,ge(fe(n)),{default:Q(()=>[X1,eB]),_:1},16))}},nB=e("h1",null,"Resilience on failures",-1),oB=e("pre",{class:"shiki vitesse-dark twoslash lsp",style:{"background-color":"#121212",color:"#dbd7ca"}},[e("div",{class:"language-id"},"ts"),e("div",{class:"code-container"},[e("code",null,[e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Schedule"},"Schedule")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Http"},"Http")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Duration"},"Duration")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:`(alias) function pipe<A>(a: A): A (+19 overloads)
import pipe`},"pipe")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"./common"'),e("span",{style:{color:"#858585"}},";")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"type"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"type HttpError = Http.JsonBodyError | Http.FetchError"},"HttpError")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"import Http"},"Http")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"class JsonBodyError"},"JsonBodyError")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"import Http"},"Http")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"class FetchError"},"FetchError")])]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const retrySchedule: Schedule.Schedule<Tuple<[Tuple<[number, number]>, Maybe<number>]>, never, HttpError, Duration.Duration>"},"retrySchedule")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`(alias) pipe<Schedule.Schedule<number, never, unknown, Duration.Duration>, Schedule.Schedule<Tuple<[number, number]>, never, unknown, Tuple<[Duration.Duration, number]>>, Schedule.Schedule<...>, Schedule.Schedule<...>, Schedule.Schedule<...>>(a: Schedule.Schedule<...>, ab: (a: Schedule.Schedule<...>) => Schedule.Schedule<...>, bc: (b: Schedule.Schedule<...>) => Schedule.Schedule<...>, cd: (c: Schedule.Schedule<...>) => Schedule.Schedule<...>, de: (d: Schedule.Schedule<...>) => Schedule.Schedule<...>): Schedule.Schedule<...> (+19 overloads)
import pipe`},"pipe")]),e("span",{style:{color:"#858585"}},"(")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Schedule"},"Schedule")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function exponential(base: Duration.Duration, factor?: number | undefined): Schedule.Schedule<number, never, unknown, Duration.Duration>"},"exponential")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Duration"},"Duration")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function millis<10>(self: 10): Duration.DurationInternal"},"millis")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"10"),e("span",{style:{color:"#858585"}},"),"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"2.0"),e("span",{style:{color:"#858585"}},"),")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Schedule"},"Schedule")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function either<number, never, unknown, number>(that: Schedule.Schedule<number, never, unknown, number>): <State, Env_1, In, Out>(self: Schedule.Schedule<State, Env_1, In, Out>) => Schedule.Schedule<...>"},"either")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Schedule"},"Schedule")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function spaced(duration: Duration.Duration): Schedule.Schedule<number, never, unknown, number>"},"spaced")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Duration"},"Duration")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function seconds<1>(self: 1): Duration.DurationInternal"},"seconds")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},"))),")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Schedule"},"Schedule")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function compose<unknown, Maybe<number>, never, Duration.Duration>(that: Schedule.Schedule<Maybe<number>, never, unknown, Duration.Duration>): <State, Env_1, In>(self: Schedule.Schedule<...>) => Schedule.Schedule<...>"},"compose")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Schedule"},"Schedule")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const elapsed: Schedule.Schedule<Maybe<number>, never, unknown, Duration.Duration>"},"elapsed")]),e("span",{style:{color:"#858585"}},"),")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Schedule"},"Schedule")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function whileOutput<Duration.Duration>(f: Predicate<Duration.Duration>): <State, Env_1, In>(self: Schedule.Schedule<State, Env_1, In, Duration.Duration>) => Schedule.Schedule<...>"},"whileOutput")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Duration"},"Duration")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function lowerThenOrEqual(that: Duration.Duration): (self: Duration.Duration) => boolean"},"lowerThenOrEqual")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Duration"},"Duration")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function seconds<30>(self: 30): Duration.DurationInternal"},"seconds")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"30"),e("span",{style:{color:"#858585"}},"))),")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Schedule"},"Schedule")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function whileInput<HttpError>(f: Predicate<HttpError>): <State, Env_1, Out>(self: Schedule.Schedule<State, Env_1, HttpError, Out>) => Schedule.Schedule<...>"},"whileInput")]),e("span",{style:{color:"#858585"}},"(("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) error: HttpError"},"error")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"type HttpError = Http.JsonBodyError | Http.FetchError"},"HttpError")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) error: HttpError"},"error")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:'(property) _tag: "JsonBodyError" | "FetchError"'},"_tag")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"!=="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"JsonBodyError"'),e("span",{style:{color:"#858585"}},")")]),e("div",{class:"line"},[e("span",{style:{color:"#858585"}},");")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const getTodo: (id: number) => Effect.Effect<never, HttpError, unknown>"},"getTodo")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) id: number"},"id")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"number"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`(alias) pipe<Effect.Effect<never, Http.FetchError, Response>, Effect.Effect<never, Http.JsonBodyError | Http.FetchError, unknown>, Effect.Effect<never, HttpError, unknown>>(a: Effect.Effect<...>, ab: (a: Effect.Effect<...>) => Effect.Effect<...>, bc: (b: Effect.Effect<...>) => Effect.Effect<...>): Effect.Effect<...> (+19 overloads)
import pipe`},"pipe")]),e("span",{style:{color:"#858585"}},"(")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Http"},"Http")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const request: (input: RequestInfo, init?: RequestInit | undefined) => Effect.Effect<never, Http.FetchError, Response>"},"request")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"`https://jsonplaceholder.typicode.com/todos/"),e("span",{style:{color:"#858585"}},"${"),e("span",{style:{color:"#C98A7D"}},[e("data-lsp",{lsp:"(parameter) id: number"},"id")]),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},"`"),e("span",{style:{color:"#858585"}},"),")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function flatMap<Response, never, Http.JsonBodyError, unknown>(f: (a: Response) => Effect.Effect<never, Http.JsonBodyError, unknown>): <R, E>(self: Effect.Effect<R, E, Response>) => Effect.Effect<...>"},"flatMap")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Http"},"Http")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const jsonBody: (input: Response) => Effect.Effect<never, Http.JsonBodyError, unknown>"},"jsonBody")]),e("span",{style:{color:"#858585"}},"),")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function retry<Tuple<[Tuple<[number, number]>, Maybe<number>]>, never, HttpError, Duration.Duration>(policy: Schedule.Schedule<Tuple<[Tuple<[number, number]>, Maybe<...>]>, never, HttpError, Duration.Duration>): <R, A>(self: Effect.Effect<...>) => Effect.Effect<...>"},"retry")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const retrySchedule: Schedule.Schedule<Tuple<[Tuple<[number, number]>, Maybe<number>]>, never, HttpError, Duration.Duration>"},"retrySchedule")]),e("span",{style:{color:"#858585"}},")")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},");")])])])],-1),sB=e("p",null,[Z("Note how the default schedule is composed with "),e("code",null,"Schedule.whileInput"),Z(" in order to refine its behaviour.")],-1),rB={__name:"22",setup(t){const n={layout:"full",srcSequence:"./slides/03-intro-to-effect.md"};return H(W),(o,s)=>(b(),V(lt,ge(fe(n)),{default:Q(()=>[nB,oB,sB]),_:1},16))}},lB=e("h1",null,"Failure escalation",-1),aB=e("pre",{class:"shiki vitesse-dark twoslash lsp",style:{"background-color":"#121212",color:"#dbd7ca"}},[e("div",{class:"language-id"},"ts"),e("div",{class:"code-container"},[e("code",null,[e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"type"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"type HttpError = Http.JsonBodyError | Http.FetchError"},"HttpError")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"import Http"},"Http")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"class JsonBodyError"},"JsonBodyError")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"import Http"},"Http")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"class FetchError"},"FetchError")])]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const retrySchedule: Schedule.Schedule<Tuple<[Tuple<[number, number]>, Maybe<number>]>, never, HttpError, Duration.Duration>"},"retrySchedule")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`(alias) pipe<Schedule.Schedule<number, never, unknown, Duration.Duration>, Schedule.Schedule<Tuple<[number, number]>, never, unknown, Tuple<[Duration.Duration, number]>>, Schedule.Schedule<...>, Schedule.Schedule<...>, Schedule.Schedule<...>>(a: Schedule.Schedule<...>, ab: (a: Schedule.Schedule<...>) => Schedule.Schedule<...>, bc: (b: Schedule.Schedule<...>) => Schedule.Schedule<...>, cd: (c: Schedule.Schedule<...>) => Schedule.Schedule<...>, de: (d: Schedule.Schedule<...>) => Schedule.Schedule<...>): Schedule.Schedule<...> (+19 overloads)
import pipe`},"pipe")]),e("span",{style:{color:"#858585"}},"(")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Schedule"},"Schedule")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function exponential(base: Duration.Duration, factor?: number | undefined): Schedule.Schedule<number, never, unknown, Duration.Duration>"},"exponential")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Duration"},"Duration")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function millis<10>(self: 10): Duration.DurationInternal"},"millis")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"10"),e("span",{style:{color:"#858585"}},"),"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"2.0"),e("span",{style:{color:"#858585"}},"),")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Schedule"},"Schedule")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function either<number, never, unknown, number>(that: Schedule.Schedule<number, never, unknown, number>): <State, Env_1, In, Out>(self: Schedule.Schedule<State, Env_1, In, Out>) => Schedule.Schedule<...>"},"either")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Schedule"},"Schedule")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function spaced(duration: Duration.Duration): Schedule.Schedule<number, never, unknown, number>"},"spaced")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Duration"},"Duration")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function seconds<1>(self: 1): Duration.DurationInternal"},"seconds")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},"))),")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Schedule"},"Schedule")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function compose<unknown, Maybe<number>, never, Duration.Duration>(that: Schedule.Schedule<Maybe<number>, never, unknown, Duration.Duration>): <State, Env_1, In>(self: Schedule.Schedule<...>) => Schedule.Schedule<...>"},"compose")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Schedule"},"Schedule")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const elapsed: Schedule.Schedule<Maybe<number>, never, unknown, Duration.Duration>"},"elapsed")]),e("span",{style:{color:"#858585"}},"),")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Schedule"},"Schedule")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function whileOutput<Duration.Duration>(f: Predicate<Duration.Duration>): <State, Env_1, In>(self: Schedule.Schedule<State, Env_1, In, Duration.Duration>) => Schedule.Schedule<...>"},"whileOutput")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Duration"},"Duration")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function lowerThenOrEqual(that: Duration.Duration): (self: Duration.Duration) => boolean"},"lowerThenOrEqual")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Duration"},"Duration")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function seconds<30>(self: 30): Duration.DurationInternal"},"seconds")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"30"),e("span",{style:{color:"#858585"}},"))),")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Schedule"},"Schedule")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function whileInput<HttpError>(f: Predicate<HttpError>): <State, Env_1, Out>(self: Schedule.Schedule<State, Env_1, HttpError, Out>) => Schedule.Schedule<...>"},"whileInput")]),e("span",{style:{color:"#858585"}},"(("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) error: HttpError"},"error")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"type HttpError = Http.JsonBodyError | Http.FetchError"},"HttpError")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) error: HttpError"},"error")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:'(property) _tag: "JsonBodyError" | "FetchError"'},"_tag")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"!=="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"JsonBodyError"'),e("span",{style:{color:"#858585"}},")")]),e("div",{class:"line"},[e("span",{style:{color:"#858585"}},");")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const getTodo: (id: number) => Effect.Effect<never, never, unknown>"},"getTodo")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) id: number"},"id")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"number"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`(alias) pipe<Effect.Effect<never, Http.FetchError, Response>, Effect.Effect<never, Http.JsonBodyError | Http.FetchError, unknown>, Effect.Effect<never, HttpError, unknown>, Effect.Effect<...>>(a: Effect.Effect<...>, ab: (a: Effect.Effect<...>) => Effect.Effect<...>, bc: (b: Effect.Effect<...>) => Effect.Effect<...>, cd: (c: Effect.Effect<...>) => Effect.Effect<...>): Effect.Effect<...> (+19 overloads)
import pipe`},"pipe")]),e("span",{style:{color:"#858585"}},"(")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Http"},"Http")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const request: (input: RequestInfo, init?: RequestInit | undefined) => Effect.Effect<never, Http.FetchError, Response>"},"request")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"`https://jsonplaceholder.typicode.com/todos/"),e("span",{style:{color:"#858585"}},"${"),e("span",{style:{color:"#C98A7D"}},[e("data-lsp",{lsp:"(parameter) id: number"},"id")]),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},"`"),e("span",{style:{color:"#858585"}},"),")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function flatMap<Response, never, Http.JsonBodyError, unknown>(f: (a: Response) => Effect.Effect<never, Http.JsonBodyError, unknown>): <R, E>(self: Effect.Effect<R, E, Response>) => Effect.Effect<...>"},"flatMap")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Http"},"Http")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const jsonBody: (input: Response) => Effect.Effect<never, Http.JsonBodyError, unknown>"},"jsonBody")]),e("span",{style:{color:"#858585"}},"),")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function retry<Tuple<[Tuple<[number, number]>, Maybe<number>]>, never, HttpError, Duration.Duration>(policy: Schedule.Schedule<Tuple<[Tuple<[number, number]>, Maybe<...>]>, never, HttpError, Duration.Duration>): <R, A>(self: Effect.Effect<...>) => Effect.Effect<...>"},"retry")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const retrySchedule: Schedule.Schedule<Tuple<[Tuple<[number, number]>, Maybe<number>]>, never, HttpError, Duration.Duration>"},"retrySchedule")]),e("span",{style:{color:"#858585"}},"),")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"function orDie<R, E, A>(self: Effect.Effect<R, E, A>): Effect.Effect<R, never, A>"},"orDie")])]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},");")])])])],-1),cB=e("p",null,[Z("We can see by looking at the types that the error type has now disappeared. You can recover from ALL failures including defects by using functions like "),e("code",null,"Effect.catchAllCause"),Z(" or turn the error into a full "),e("code",null,"Cause<E>"),Z(" using "),e("code",null,"Effect.sandbox"),Z(".")],-1),iB={__name:"23",setup(t){const n={layout:"full",srcSequence:"./slides/03-intro-to-effect.md"};return H(W),(o,s)=>(b(),V(lt,ge(fe(n)),{default:Q(()=>[lB,aB,cB]),_:1},16))}},pB=e("h1",null,"Interruption",-1),uB=e("pre",{class:"shiki vitesse-dark twoslash lsp",style:{"background-color":"#121212",color:"#dbd7ca"}},[e("div",{class:"language-id"},"ts"),e("div",{class:"code-container"},[e("code",null,[e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"as"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"@effect/core/io/Effect"'),e("span",{style:{color:"#858585"}},";")]),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"as"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Either"},"Either")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"@tsplus/stdlib/data/Either"'),e("span",{style:{color:"#858585"}},";")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const request: (input: RequestInfo | URL, init?: RequestInit | undefined) => Effect.Effect<never, FetchError, Response>"},"request")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) input: RequestInfo | URL"},"input")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"type RequestInfo = string | Request"},"RequestInfo")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"interface URL"},"URL")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) init: RequestInit | undefined"},"init")]),e("span",{style:{color:"#CB7676"}},"?:"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"interface RequestInit"},"RequestInit")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"undefined"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`(alias) asyncInterrupt<never, FetchError, Response>(register: (callback: (_: Effect.Effect<never, FetchError, Response>) => void) => Either.Either<Effect.Effect<never, never, void>, Effect.Effect<...>>): Effect.Effect<...>
export asyncInterrupt`},"asyncInterrupt")]),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#E0A569"}},"never"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"class FetchError"},"FetchError")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"interface Response"},"Response")]),e("span",{style:{color:"#858585"}},">(("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) resume: (_: Effect.Effect<never, FetchError, Response>) => void"},"resume")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const controller: AbortController"},"controller")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"var AbortController: new () => AbortController"},"AbortController")]),e("span",{style:{color:"#858585"}},"();")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function fetch(input: RequestInfo | URL, init?: RequestInit | undefined): Promise<Response>"},"fetch")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) input: RequestInfo | URL"},"input")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"..."),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) init: RequestInit | undefined"},"init")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"??"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{}),"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},[e("data-lsp",{lsp:"(property) RequestInit.signal?: AbortSignal | null | undefined"},"signal")]),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const controller: AbortController"},"controller")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(property) AbortController.signal: AbortSignal"},"signal")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"})."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(method) Promise<Response>.then<void, never>(onfulfilled?: ((value: Response) => void | PromiseLike<void>) | null | undefined, onrejected?: ((reason: any) => PromiseLike<never>) | null | undefined): Promise<...>"},"then")]),e("span",{style:{color:"#858585"}},"(("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) response: Response"},"response")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(parameter) resume: (_: Effect.Effect<never, FetchError, Response>) => void"},"resume")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function succeed<Response>(value: Response): Effect.Effect<never, never, Response>"},"succeed")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) response: Response"},"response")]),e("span",{style:{color:"#858585"}},"));")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"})."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(method) Promise<void>.catch<void>(onrejected?: ((reason: any) => void | PromiseLike<void>) | null | undefined): Promise<void>"},"catch")]),e("span",{style:{color:"#858585"}},"(("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) error: any"},"error")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(parameter) resume: (_: Effect.Effect<never, FetchError, Response>) => void"},"resume")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function failSync<FetchError>(error: LazyArg<FetchError>): Effect.Effect<never, FetchError, never>"},"failSync")]),e("span",{style:{color:"#858585"}},"(()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"new"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"constructor FetchError(error: unknown): FetchError"},"FetchError")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) error: any"},"error")]),e("span",{style:{color:"#858585"}},")));")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"});")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Either"},"Either")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function left<Effect.Effect<never, never, void>>(e: Effect.Effect<never, never, void>): Either.Either<Effect.Effect<never, never, void>, never>"},"left")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function sync<void>(f: LazyArg<void>): Effect.Effect<never, never, void>"},"sync")]),e("span",{style:{color:"#858585"}},"(()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const controller: AbortController"},"controller")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(method) AbortController.abort(): void (+2 overloads)"},"abort")]),e("span",{style:{color:"#858585"}},"();")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}));")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"});")])])])],-1),fB=e("p",null,"Effects can describe interruptible computations with a very rich semantic, in fact differently from most of the frameworks that deal with cancelation in Effect cancellation is itself an effect and is, by nature, asyncronious.",-1),dB=e("p",null,"That\u2019s it interruption is propagated through program execution without explicitly passing signals or controllers.",-1),yB={__name:"24",setup(t){const n={layout:"full",srcSequence:"./slides/03-intro-to-effect.md"};return H(W),(o,s)=>(b(),V(lt,ge(fe(n)),{default:Q(()=>[pB,uB,fB,dB]),_:1},16))}},mB=e("h1",null,"Controlled concurrency",-1),hB=e("pre",{class:"shiki vitesse-dark twoslash lsp",style:{"background-color":"#121212",color:"#dbd7ca"}},[e("div",{class:"language-id"},"ts"),e("div",{class:"code-container"},[e("code",null,[e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const getTodos: (ids: number[]) => Effect.Effect<never, ParseTodoError | Http.FetchError | Http.JsonBodyError, Chunk<Todo>>"},"getTodos")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) ids: number[]"},"ids")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"number"),e("span",{style:{color:"#858585"}},"[])"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`(alias) collectAllPar<never, ParseTodoError | Http.FetchError | Http.JsonBodyError, Todo>(as: Collection<Effect.Effect<never, ParseTodoError | Http.FetchError | Http.JsonBodyError, Todo>>): Effect.Effect<...>
export collectAllPar`},"collectAllPar")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) ids: number[]"},"ids")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(method) Array<number>.map<Effect.Effect<never, ParseTodoError | Http.FetchError | Http.JsonBodyError, Todo>>(callbackfn: (value: number, index: number, array: number[]) => Effect.Effect<...>, thisArg?: any): Effect.Effect<...>[]"},"map")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const getTodo: (id: number) => Effect.Effect<never, Http.FetchError | Http.JsonBodyError | ParseTodoError, Todo>"},"getTodo")]),e("span",{style:{color:"#858585"}},"));")])])])],-1),gB=e("p",null,[Z("Controlling how many operations are allowed to run in parallel is done by using the "),e("code",null,"Effect.withParallelism"),Z(" aspect.")],-1),vB=e("pre",{class:"shiki vitesse-dark twoslash lsp",style:{"background-color":"#121212",color:"#dbd7ca"}},[e("div",{class:"language-id"},"ts"),e("div",{class:"code-container"},[e("code",null,[e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const getTodos: (ids: number[]) => Effect.Effect<never, ParseTodoError | Http.FetchError | Http.JsonBodyError, Chunk<Todo>>"},"getTodos")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) ids: number[]"},"ids")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"number"),e("span",{style:{color:"#858585"}},"[])"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`(alias) pipe<Effect.Effect<never, ParseTodoError | Http.FetchError | Http.JsonBodyError, Chunk<Todo>>, Effect.Effect<never, ParseTodoError | Http.FetchError | Http.JsonBodyError, Chunk<...>>>(a: Effect.Effect<...>, ab: (a: Effect.Effect<...>) => Effect.Effect<...>): Effect.Effect<...> (+19 overloads)
import pipe`},"pipe")]),e("span",{style:{color:"#858585"}},"(")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`(alias) collectAllPar<never, ParseTodoError | Http.FetchError | Http.JsonBodyError, Todo>(as: Collection<Effect.Effect<never, ParseTodoError | Http.FetchError | Http.JsonBodyError, Todo>>): Effect.Effect<...>
export collectAllPar`},"collectAllPar")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) ids: number[]"},"ids")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(method) Array<number>.map<Effect.Effect<never, ParseTodoError | Http.FetchError | Http.JsonBodyError, Todo>>(callbackfn: (value: number, index: number, array: number[]) => Effect.Effect<...>, thisArg?: any): Effect.Effect<...>[]"},"map")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const getTodo: (id: number) => Effect.Effect<never, Http.FetchError | Http.JsonBodyError | ParseTodoError, Todo>"},"getTodo")]),e("span",{style:{color:"#858585"}},")),")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function withParallelism(n: number): <R, E, A>(self: Effect.Effect<R, E, A>) => Effect.Effect<R, E, A>"},"withParallelism")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"15"),e("span",{style:{color:"#858585"}},")")]),e("div",{class:"line"},[e("span",{style:{color:"#858585"}},");")])])])],-1),EB=e("p",null,"Or leave it to the caller:",-1),AB=e("pre",{class:"shiki vitesse-dark twoslash lsp",style:{"background-color":"#121212",color:"#dbd7ca"}},[e("div",{class:"language-id"},"ts"),e("div",{class:"code-container"},[e("code",null,[e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const getTodos: (ids: number[]) => Effect.Effect<never, ParseTodoError | Http.FetchError | Http.JsonBodyError, Chunk<Todo>>"},"getTodos")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) ids: number[]"},"ids")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"number"),e("span",{style:{color:"#858585"}},"[])"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`(alias) collectAllPar<never, ParseTodoError | Http.FetchError | Http.JsonBodyError, Todo>(as: Collection<Effect.Effect<never, ParseTodoError | Http.FetchError | Http.JsonBodyError, Todo>>): Effect.Effect<...>
export collectAllPar`},"collectAllPar")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) ids: number[]"},"ids")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(method) Array<number>.map<Effect.Effect<never, ParseTodoError | Http.FetchError | Http.JsonBodyError, Todo>>(callbackfn: (value: number, index: number, array: number[]) => Effect.Effect<...>, thisArg?: any): Effect.Effect<...>[]"},"map")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const getTodo: (id: number) => Effect.Effect<never, Http.FetchError | Http.JsonBodyError | ParseTodoError, Todo>"},"getTodo")]),e("span",{style:{color:"#858585"}},"));")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const program: Effect.Effect<never, ParseTodoError | Http.FetchError | Http.JsonBodyError, Chunk<Todo>>"},"program")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`(alias) pipe<Effect.Effect<never, ParseTodoError | Http.FetchError | Http.JsonBodyError, Chunk<Todo>>, Effect.Effect<never, ParseTodoError | Http.FetchError | Http.JsonBodyError, Chunk<...>>>(a: Effect.Effect<...>, ab: (a: Effect.Effect<...>) => Effect.Effect<...>): Effect.Effect<...> (+19 overloads)
import pipe`},"pipe")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const getTodos: (ids: number[]) => Effect.Effect<never, ParseTodoError | Http.FetchError | Http.JsonBodyError, Chunk<Todo>>"},"getTodos")]),e("span",{style:{color:"#858585"}},"(["),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"2"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"3"),e("span",{style:{color:"#858585"}},"]),"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function withParallelism(n: number): <R, E, A>(self: Effect.Effect<R, E, A>) => Effect.Effect<R, E, A>"},"withParallelism")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"3"),e("span",{style:{color:"#858585"}},"))")])])])],-1),BB={__name:"25",setup(t){const n={layout:"full",srcSequence:"./slides/03-intro-to-effect.md"};return H(W),(o,s)=>(b(),V(lt,ge(fe(n)),{default:Q(()=>[mB,hB,gB,vB,EB,AB]),_:1},16))}},DB=e("h1",null,"Metrics",-1),_B=e("pre",{class:"shiki vitesse-dark twoslash lsp",style:{"background-color":"#121212",color:"#dbd7ca"}},[e("div",{class:"language-id"},"ts"),e("div",{class:"code-container"},[e("code",null,[e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:`(alias) function pipe<A>(a: A): A (+19 overloads)
import pipe`},"pipe")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"./common"'),e("span",{style:{color:"#858585"}},";")]),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"as"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Metrics"},"Metrics")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"@effect/core/io/Metrics"')]),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"as"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Todos"},"Todos")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"./todos"'),e("span",{style:{color:"#858585"}},";")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const GetTodoCount: Metrics.Metric.Counter<number>"},"GetTodoCount")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Metrics"},"Metrics")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function counter(name: string): Metrics.Metric<Type, In, Out>.Counter<number>"},"counter")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"GetTodoCount"'),e("span",{style:{color:"#858585"}},")")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const getTodo: (id: number) => Effect.Effect<never, FetchError | JsonBodyError, unknown>"},"getTodo")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) id: number"},"id")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"number"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`(alias) pipe<Effect.Effect<never, FetchError | JsonBodyError, unknown>, Effect.Effect<never, FetchError | JsonBodyError, unknown>>(a: Effect.Effect<...>, ab: (a: Effect.Effect<...>) => Effect.Effect<...>): Effect.Effect<...> (+19 overloads)
import pipe`},"pipe")]),e("span",{style:{color:"#858585"}},"(")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Todos"},"Todos")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const getTodo: (id: number) => Effect.Effect<never, FetchError | JsonBodyError, unknown>"},"getTodo")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) id: number"},"id")]),e("span",{style:{color:"#858585"}},"),")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function tap<unknown, never, never, void>(f: (a: unknown) => Effect.Effect<never, never, void>): <R, E>(self: Effect.Effect<R, E, unknown>) => Effect.Effect<R, E, unknown>"},"tap")]),e("span",{style:{color:"#858585"}},"(()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Metrics"},"Metrics")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function increment(self: Metrics.Metric<Type, In, Out>.Counter<number>): Effect.Effect<never, never, void>"},"increment")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const GetTodoCount: Metrics.Metric.Counter<number>"},"GetTodoCount")]),e("span",{style:{color:"#858585"}},"))")]),e("div",{class:"line"},[e("span",{style:{color:"#858585"}},")")])])])],-1),CB=e("p",null,"Defining prometheus-compatible metrics for your program becomes painless, Metrics are native to Effect and we have our own representations for them that is independent of third parties, multiple exporters will be provided as ecosystem packages. As we can see below metrics are also composable!",-1),bB=e("pre",{class:"shiki vitesse-dark twoslash lsp",style:{"background-color":"#121212",color:"#dbd7ca"}},[e("div",{class:"language-id"},"ts"),e("div",{class:"code-container"},[e("code",null,[e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const GetTodoCount: Metrics.Metric<Metrics.MetricKeyType.CounterKey, unknown, Metrics.MetricState.CounterState>"},"GetTodoCount")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`(alias) pipe<Metrics.Metric<Type, In, Out>.Counter<number>, Metrics.Metric<Metrics.MetricKeyType.CounterKey, unknown, Metrics.MetricState.CounterState>>(a: Metrics.Metric.Counter<number>, ab: (a: Metrics.Metric.Counter<...>) => Metrics.Metric<...>): Metrics.Metric<...> (+19 overloads)
import pipe`},"pipe")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Metrics"},"Metrics")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function counter(name: string): Metrics.Metric<Type, In, Out>.Counter<number>"},"counter")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"GetTodoCount"'),e("span",{style:{color:"#858585"}},"),"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Metrics"},"Metrics")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function fromConst<number>(input: LazyArg<number>): <Type, Out>(self: Metrics.Metric<Type, number, Out>) => Metrics.Metric<Type, unknown, Out>"},"fromConst")]),e("span",{style:{color:"#858585"}},"(()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},"))")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const getTodo: (id: number) => Effect.Effect<never, FetchError | JsonBodyError, unknown>"},"getTodo")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) id: number"},"id")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"number"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`const GetTodoCount: Metrics.Metric
<never, FetchError | JsonBodyError, unknown>(effect: Effect.Effect<never, FetchError | JsonBodyError, unknown>) => Effect.Effect<never, FetchError | JsonBodyError, unknown>`},"GetTodoCount")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Todos"},"Todos")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const getTodo: (id: number) => Effect.Effect<never, FetchError | JsonBodyError, unknown>"},"getTodo")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) id: number"},"id")]),e("span",{style:{color:"#858585"}},"))")])])])],-1),wB={__name:"26",setup(t){const n={layout:"full",srcSequence:"./slides/03-intro-to-effect.md"};return H(W),(o,s)=>(b(),V(lt,ge(fe(n)),{default:Q(()=>[DB,_B,CB,bB]),_:1},16))}},xB=e("h1",null,"Tracing",-1),TB=e("h2",null,null,-1),SB=e("p",null,[Z("We are currently integrating with OpenTelemetry via the ecosystem package "),e("code",null,"@effect/otel"),Z(" but we are working on a native representation of spans and tracing following the same principles applied for "),e("code",null,"Metrics")],-1),kB=e("pre",{class:"shiki vitesse-dark",style:{"background-color":"#121212",color:"#dbd7ca"}},[e("div",{class:"language-id"},"ts"),e("div",{class:"code-container"},[e("code",null,[e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"Effect"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"pipe"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"./common"'),e("span",{style:{color:"#858585"}},";")]),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"as"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"Todos"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"./todos"'),e("span",{style:{color:"#858585"}},";")]),e("div",{class:"line"}),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"getTodo"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"id"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"number"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"pipe"),e("span",{style:{color:"#858585"}},"(")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},"Todos"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"getTodo"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"id"),e("span",{style:{color:"#858585"}},"),")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},"Effect"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"withSpanAttribute"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"id"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"id"),e("span",{style:{color:"#858585"}},"),")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},"Effect"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"withSpan"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"GetTodo"'),e("span",{style:{color:"#858585"}},")")]),e("div",{class:"line"},[e("span",{style:{color:"#858585"}},")")]),e("div",{class:"line"}),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"getTodos"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"ids"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"number"),e("span",{style:{color:"#858585"}},"[])"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"pipe"),e("span",{style:{color:"#858585"}},"(")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},"Todos"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"getTodos"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"ids"),e("span",{style:{color:"#858585"}},"),")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},"Effect"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"withSpanAttribute"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"ids"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"ids"),e("span",{style:{color:"#858585"}},"),")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},"Effect"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"withSpan"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},'"GetTodos"'),e("span",{style:{color:"#858585"}},")")]),e("div",{class:"line"},[e("span",{style:{color:"#858585"}},")")])])])],-1),RB=e("p",null,[Z("Note: This isn\u2019t yet ready but we are actively working on it! for the time being you\u2019ll find "),e("code",null,"withSpan"),Z(" in the otel ecosystem package.")],-1),PB={__name:"27",setup(t){const n={layout:"full",srcSequence:"./slides/03-intro-to-effect.md"};return H(W),(o,s)=>{const r=mr;return b(),V(lt,ge(fe(n)),{default:Q(()=>[xB,TB,SB,Y(r,dn({},{ranges:[""]}),{default:Q(()=>[kB]),_:1},16),RB]),_:1},16)}}},$B=e("h1",null,"Tracing, A real life view",-1),OB=e("img",{src:"https://i.imgur.com/lR5lC5C.png",style:{width:"600px"}},null,-1),FB={__name:"28",setup(t){const n={layout:"center",srcSequence:"./slides/03-intro-to-effect.md"};return H(W),(o,s)=>(b(),V(je,ge(fe(n)),{default:Q(()=>[$B,OB]),_:1},16))}},MB=e("h1",null,"Dependency Injection",-1),LB=e("h2",null,null,-1),HB=e("p",null,"Effect has native support for Context propagation, think of it like the React context on type-safe steroids.",-1),IB=e("pre",{class:"shiki vitesse-dark twoslash lsp",style:{"background-color":"#121212",color:"#dbd7ca"}},[e("div",{class:"language-id"},"ts"),e("div",{class:"code-container"},[e("code",null,[e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Chunk"},"Chunk")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"./common"'),e("span",{style:{color:"#858585"}},";")]),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:`(alias) interface Tag<in out S>
(alias) namespace Tag
(alias) const Tag: TagOps
import Tag`},"Tag")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"@tsplus/stdlib/service/Tag"'),e("span",{style:{color:"#858585"}},";")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"interface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"interface TodoRepo"},"TodoRepo")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#CB7676"}},"readonly"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(property) TodoRepo.getTodo: (id: number) => Effect.Effect<never, never, Todo>"},"getTodo")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) id: number"},"id")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"number"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`interface Effect<R, E, A>
namespace Effect`},"Effect")]),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#E0A569"}},"never"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"never"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"interface Todo"},"Todo")]),e("span",{style:{color:"#858585"}},">")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#CB7676"}},"readonly"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(property) TodoRepo.getTodos: (ids: number[]) => Effect.Effect<never, never, Chunk.Chunk<Todo>>"},"getTodos")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) ids: number[]"},"ids")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"number"),e("span",{style:{color:"#858585"}},"[])"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`interface Effect<R, E, A>
namespace Effect`},"Effect")]),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#E0A569"}},"never"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"never"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"import Chunk"},"Chunk")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`interface Chunk<A>
namespace Chunk`},"Chunk")]),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"interface Todo"},"Todo")]),e("span",{style:{color:"#858585"}},">>")]),e("div",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const TodoRepo: Tag<TodoRepo>"},"TodoRepo")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`(alias) Tag<TodoRepo>(): Tag<TodoRepo>
import Tag`},"Tag")]),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"interface TodoRepo"},"TodoRepo")]),e("span",{style:{color:"#858585"}},">()")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const program: Effect.Effect<TodoRepo, never, number>"},"program")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function gen<Effect.GenEffect<TodoRepo, never, TodoRepo> | Effect.GenEffect<never, never, Chunk.Chunk<Todo>> | Effect.GenEffect<never, never, void>, number>(f: (i: Effect.Adapter) => Generator<...>): Effect.Effect<...>"},"gen")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#4D9375"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) $: Effect.Adapter"},"$")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const Todos: TodoRepo"},"Todos")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"yield*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`(parameter) $: Effect.Adapter
<TodoRepo>(_: Tag<TodoRepo>) => Effect.GenEffect<TodoRepo, never, TodoRepo> (+4 overloads)`},"$")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const TodoRepo: Tag<TodoRepo>"},"TodoRepo")]),e("span",{style:{color:"#858585"}},")")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const todos: Chunk.Chunk<Todo>"},"todos")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"yield*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`(parameter) $: Effect.Adapter
<never, never, Chunk.Chunk<Todo>>(_: Effect.Effect<never, never, Chunk.Chunk<Todo>>) => Effect.GenEffect<never, never, Chunk.Chunk<Todo>> (+4 overloads)`},"$")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const Todos: TodoRepo"},"Todos")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(property) TodoRepo.getTodos: (ids: number[]) => Effect.Effect<never, never, Chunk.Chunk<Todo>>"},"getTodos")]),e("span",{style:{color:"#858585"}},"(["),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"2"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"3"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"4"),e("span",{style:{color:"#858585"}},"]))")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"for"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const todo: Todo"},"todo")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"of"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const todos: Chunk.Chunk<Todo>"},"todos")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"yield*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`(parameter) $: Effect.Adapter
<never, never, void>(_: Effect.Effect<never, never, void>) => Effect.GenEffect<never, never, void> (+4 overloads)`},"$")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function log(message: string): Effect.Effect<never, never, void>"},"log")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"`todo: "),e("span",{style:{color:"#858585"}},"${"),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"var JSON: JSON"},"JSON")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#E0A569"}},[e("data-lsp",{lsp:"(method) JSON.stringify(value: any, replacer?: ((this: any, key: string, value: any) => any) | undefined, space?: string | number | undefined): string (+1 overload)"},"stringify")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},[e("data-lsp",{lsp:"const todo: Todo"},"todo")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},"`"),e("span",{style:{color:"#858585"}},"))")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"}")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  ")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Chunk"},"Chunk")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function size<Todo>(self: Chunk.Chunk<Todo>): number"},"size")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const todos: Chunk.Chunk<Todo>"},"todos")]),e("span",{style:{color:"#858585"}},")")]),e("div",{class:"line"},[e("span",{style:{color:"#858585"}},"})")])])])],-1),NB={__name:"29",setup(t){const n={layout:"full",srcSequence:"./slides/03-intro-to-effect.md"};return H(W),(o,s)=>(b(),V(lt,ge(fe(n)),{default:Q(()=>[MB,LB,HB,IB]),_:1},16))}},jB=e("h1",null,"Dependency Injection",-1),qB=e("h2",null,null,-1),UB=e("p",null,[Z("Running a program requires all dependencies to be provided into the Context, a smart way of constructing dependency trees of potentially interdependent services is by using "),e("code",null,"Layer")],-1),JB=e("pre",{class:"shiki vitesse-dark twoslash lsp",style:{"background-color":"#121212",color:"#dbd7ca"}},[e("div",{class:"language-id"},"ts"),e("div",{class:"code-container"},[e("code",null,[e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"as"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Layer"},"Layer")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"@effect/core/io/Layer"')]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const LiveTodoRepo: Layer.Layer<never, never, TodoRepo>"},"LiveTodoRepo")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Layer"},"Layer")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`function fromEffect<TodoRepo, never, never, {
    getTodo: (id: number) => Effect.Effect<never, never, Impl.Todo>;
    getTodos: (ids: number[]) => Effect.Effect<never, never, Chunk.Chunk<Impl.Todo>>;
}>(tag: Tag<...>, effect: Effect.Effect<...>): Layer.Layer<...>`},"fromEffect")]),e("span",{style:{color:"#858585"}},"(")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const TodoRepo: Tag<TodoRepo>"},"TodoRepo")]),e("span",{style:{color:"#858585"}},",")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`function sync<{
    getTodo: (id: number) => Effect.Effect<never, never, Impl.Todo>;
    getTodos: (ids: number[]) => Effect.Effect<never, never, Chunk.Chunk<Impl.Todo>>;
}>(f: LazyArg<...>): Effect.Effect<...>`},"sync")]),e("span",{style:{color:"#858585"}},"(()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"({")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#E0A569"}},[e("data-lsp",{lsp:"(property) getTodo: (id: number) => Effect.Effect<never, never, Impl.Todo>"},"getTodo")]),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Impl"},"Impl")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const getTodo: (id: number) => Effect.Effect<never, never, Impl.Todo>"},"getTodo")]),e("span",{style:{color:"#858585"}},",")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#E0A569"}},[e("data-lsp",{lsp:"(property) getTodos: (ids: number[]) => Effect.Effect<never, never, Chunk.Chunk<Impl.Todo>>"},"getTodos")]),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Impl"},"Impl")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const getTodos: (ids: number[]) => Effect.Effect<never, never, Chunk.Chunk<Impl.Todo>>"},"getTodos")])]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"}))")]),e("div",{class:"line"},[e("span",{style:{color:"#858585"}},")")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const main: Effect.Effect<never, never, number>"},"main")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`(alias) pipe<Effect.Effect<TodoRepo, never, number>, Effect.Effect<never, never, number>>(a: Effect.Effect<TodoRepo, never, number>, ab: (a: Effect.Effect<...>) => Effect.Effect<...>): Effect.Effect<...> (+19 overloads)
import pipe`},"pipe")]),e("span",{style:{color:"#858585"}},"(")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const program: Effect.Effect<TodoRepo, never, number>"},"program")]),e("span",{style:{color:"#858585"}},",")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function provideSomeLayer<never, never, TodoRepo>(layer: Layer.Layer<never, never, TodoRepo>): <R, E, A>(self: Effect.Effect<R, E, A>) => Effect.Effect<Exclude<R, TodoRepo>, E, A>"},"provideSomeLayer")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const LiveTodoRepo: Layer.Layer<never, never, TodoRepo>"},"LiveTodoRepo")]),e("span",{style:{color:"#858585"}},")")]),e("div",{class:"line"},[e("span",{style:{color:"#858585"}},")")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const unsafeRunAsyncWith: <never, number>(effect: Effect.Effect<never, never, number>, k: (exit: Exit.Exit<never, number>) => void) => void"},"unsafeRunAsyncWith")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const main: Effect.Effect<never, never, number>"},"main")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) exit: Exit.Exit<never, number>"},"exit")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Exit"},"Exit")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function isFailure<never, number>(self: Exit.Exit<never, number>): self is Exit.Failure<never>"},"isFailure")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) exit: Exit.Exit<never, number>"},"exit")]),e("span",{style:{color:"#858585"}},"))"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:`namespace console
var console: Console`},"console")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(method) Console.error(message?: any, ...optionalParams: any[]): void (+2 overloads)"},"error")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"`Unexpected failure: "),e("span",{style:{color:"#858585"}},"${"),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"var JSON: JSON"},"JSON")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#E0A569"}},[e("data-lsp",{lsp:"(method) JSON.stringify(value: any, replacer?: ((this: any, key: string, value: any) => any) | undefined, space?: string | number | undefined): string (+1 overload)"},"stringify")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},[e("data-lsp",{lsp:"(parameter) exit: Exit.Failure<never>"},"exit")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#C98A7D"}},[e("data-lsp",{lsp:"(property) IFailure<never>.cause: Cause<never>"},"cause")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},"`"),e("span",{style:{color:"#858585"}},")")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"}")]),e("div",{class:"line"},[e("span",{style:{color:"#858585"}},"})")])])])],-1),VB={__name:"30",setup(t){const n={layout:"full",srcSequence:"./slides/03-intro-to-effect.md"};return H(W),(o,s)=>(b(),V(lt,ge(fe(n)),{default:Q(()=>[jB,qB,UB,JB]),_:1},16))}},WB=e("h1",null,"Dependency Injection",-1),zB=e("h2",null,null,-1),KB=e("p",null,[Z("Layers represents modules of your application and they compose very well, you could imagine having a service "),e("code",null,"TodoRepo"),Z(" which constructors depends on "),e("code",null,"Http"),Z(" and we have a program that uses both "),e("code",null,"TodoRepo | Http")],-1),YB=e("pre",{class:"shiki vitesse-dark twoslash lsp",style:{"background-color":"#121212",color:"#dbd7ca"}},[e("div",{class:"language-id"},"ts"),e("div",{class:"code-container"},[e("code",null,[e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"declare"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const LiveHttp: Layer.Layer<never, never, Http>"},"LiveHttp")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"import Layer"},"Layer")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"interface Layer<RIn, E, ROut>"},"Layer")]),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#E0A569"}},"never"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"never"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"interface Http"},"Http")]),e("span",{style:{color:"#858585"}},">")]),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"declare"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const LiveTodoRepo: Layer.Layer<Http, never, TodoRepo>"},"LiveTodoRepo")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"import Layer"},"Layer")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"interface Layer<RIn, E, ROut>"},"Layer")]),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"interface Http"},"Http")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"never"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"interface TodoRepo"},"TodoRepo")]),e("span",{style:{color:"#858585"}},">")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const AppContext: Layer.Layer<never, never, TodoRepo | Http>"},"AppContext")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`(alias) pipe<Layer.Layer<never, never, Http>, Layer.Layer<never, never, TodoRepo | Http>>(a: Layer.Layer<never, never, Http>, ab: (a: Layer.Layer<...>) => Layer.Layer<...>): Layer.Layer<...> (+19 overloads)
import pipe`},"pipe")]),e("span",{style:{color:"#858585"}},"(")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const LiveHttp: Layer.Layer<never, never, Http>"},"LiveHttp")]),e("span",{style:{color:"#858585"}},",")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Layer"},"Layer")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function provideToAndMerge<Http, never, TodoRepo>(that: Layer.Layer<Http, never, TodoRepo>): <RIn, E, ROut>(self: Layer.Layer<RIn, E, ROut>) => Layer.Layer<...>"},"provideToAndMerge")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const LiveTodoRepo: Layer.Layer<Http, never, TodoRepo>"},"LiveTodoRepo")]),e("span",{style:{color:"#858585"}},")")]),e("div",{class:"line"},[e("span",{style:{color:"#858585"}},")")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"declare"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const program: Effect.Effect<TodoRepo | Http, never, void>"},"program")]),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`interface Effect<R, E, A>
namespace Effect`},"Effect")]),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"interface Http"},"Http")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"|"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"interface TodoRepo"},"TodoRepo")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"never"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"void"),e("span",{style:{color:"#858585"}},">")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"const main: Effect.Effect<never, never, void>"},"main")]),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:`(alias) pipe<Effect.Effect<TodoRepo | Http, never, void>, Effect.Effect<never, never, void>>(a: Effect.Effect<TodoRepo | Http, never, void>, ab: (a: Effect.Effect<...>) => Effect.Effect<...>): Effect.Effect<...> (+19 overloads)
import pipe`},"pipe")]),e("span",{style:{color:"#858585"}},"(")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const program: Effect.Effect<TodoRepo | Http, never, void>"},"program")]),e("span",{style:{color:"#858585"}},",")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function provideSomeLayer<never, never, TodoRepo | Http>(layer: Layer.Layer<never, never, TodoRepo | Http>): <R, E, A>(self: Effect.Effect<R, E, A>) => Effect.Effect<...>"},"provideSomeLayer")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const AppContext: Layer.Layer<never, never, TodoRepo | Http>"},"AppContext")]),e("span",{style:{color:"#858585"}},")")]),e("div",{class:"line"},[e("span",{style:{color:"#858585"}},")")]),e("div",{class:"line"},"\xA0"),e("div",{class:"line"},[e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Effect"},"Effect")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"const unsafeRunAsyncWith: <never, void>(effect: Effect.Effect<never, never, void>, k: (exit: Exit.Exit<never, void>) => void) => void"},"unsafeRunAsyncWith")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"const main: Effect.Effect<never, never, void>"},"main")]),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) exit: Exit.Exit<never, void>"},"exit")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"import Exit"},"Exit")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"function isFailure<never, void>(self: Exit.Exit<never, void>): self is Exit.Failure<never>"},"isFailure")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:"(parameter) exit: Exit.Exit<never, void>"},"exit")]),e("span",{style:{color:"#858585"}},"))"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},[e("data-lsp",{lsp:`namespace console
var console: Console`},"console")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},[e("data-lsp",{lsp:"(method) Console.error(message?: any, ...optionalParams: any[]): void (+2 overloads)"},"error")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"`Unexpected failure: "),e("span",{style:{color:"#858585"}},"${"),e("span",{style:{color:"#D4976C"}},[e("data-lsp",{lsp:"var JSON: JSON"},"JSON")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#E0A569"}},[e("data-lsp",{lsp:"(method) JSON.stringify(value: any, replacer?: ((this: any, key: string, value: any) => any) | undefined, space?: string | number | undefined): string (+1 overload)"},"stringify")]),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},[e("data-lsp",{lsp:"(parameter) exit: Exit.Failure<never>"},"exit")]),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#C98A7D"}},[e("data-lsp",{lsp:"(property) IFailure<never>.cause: Cause<never>"},"cause")]),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#C98A7D"}},"`"),e("span",{style:{color:"#858585"}},")")]),e("div",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"}")]),e("div",{class:"line"},[e("span",{style:{color:"#858585"}},"})")])])])],-1),GB={__name:"31",setup(t){const n={layout:"full",srcSequence:"./slides/03-intro-to-effect.md"};return H(W),(o,s)=>(b(),V(lt,ge(fe(n)),{default:Q(()=>[WB,zB,KB,YB]),_:1},16))}},ba=De({props:{every:{type:Number,default:1},at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){var l,a;const t=cc("click"),n=cc("after"),o=(c,i,p)=>ur(c,[[i,this.at!=null?+this.at+p:null,"",{hide:this.hide,fade:this.fade}]]);let s=(a=(l=this.$slots).default)==null?void 0:a.call(l);if(!s)return;s=Jm(s);const r=c=>c.map((i,p)=>Fn(i)?o(Ye(i),p%this.every===0?t:n,Math.floor(p/this.every)):i);return s.length===1&&["ul","ol"].includes(s[0].type)&&Array.isArray(s[0].children)?Ye(s[0],{},[r(s[0].children)]):r(s)}}),ZB=e("h1",null,"Recap!",-1),QB=e("h2",null,null,-1),XB=e("p",null,"we\u2019ve been only scratching the surface of Effect and a lot of its power hasn\u2019t made it to this presentation but we\u2019ve seen how to deal with:",-1),eD=e("ul",null,[e("li",null,"Errors"),e("li",null,"Retries"),e("li",null,"Concurrency"),e("li",null,"Interruption"),e("li",null,"Logging"),e("li",null,"Tracing"),e("li",null,"Metrics"),e("li",null,"Dependencies")],-1),tD={__name:"32",setup(t){const n={layout:"center",srcSequence:"./slides/03-intro-to-effect.md"};return H(W),(o,s)=>{const r=ba;return b(),V(je,ge(fe(n)),{default:Q(()=>[ZB,QB,XB,Y(r,null,{default:Q(()=>[eD]),_:1})]),_:1},16)}}},nD=e("h1",null,"What\u2019s in the Box?",-1),oD=e("h2",null,null,-1),sD=e("p",null,[Z("When looking into Effect you\u2019ll find a rich set of modules to deal with much more than what we\u2019ve seen, just in "),e("code",null,"@effect/core"),Z(" you\u2019ll find:")],-1),rD=e("ul",null,[e("li",null,"Effect: Generic Program Definition"),e("li",null,"Cause: Representing potentially multiple failure causes of different kinds"),e("li",null,"Scope: Safe Resource Management to model things like database connections"),e("li",null,"Fiber: Low Level Concurrency Primitives"),e("li",null,"Queue: Work-Stealing Concurrent & Backpressured Queues"),e("li",null,"Hub: Like a Pub/Sub for Effects"),e("li",null,"Layer: Context Construction"),e("li",null,"Metrics: Prometheus Compatible Metrics"),e("li",null,"Tracing: OpenTelemetry Compatible Tracing")],-1),lD={__name:"33",setup(t){const n={layout:"full",srcSequence:"./slides/03-intro-to-effect.md"};return H(W),(o,s)=>{const r=ba;return b(),V(lt,ge(fe(n)),{default:Q(()=>[nD,oD,sD,Y(r,null,{default:Q(()=>[rD]),_:1})]),_:1},16)}}},aD=e("h1",null,"What\u2019s in the Box?",-1),cD=e("h2",null,null,-1),iD=e("p",null,[Z("When looking into Effect you\u2019ll find a rich set of modules to deal with much more than what we\u2019ve seen, just in "),e("code",null,"@effect/core"),Z(" you\u2019ll find:")],-1),pD=e("ul",null,[e("li",null,"Logger: Multi-Level & Abstract Logger"),e("li",null,"Ref: Mutable Reference to immutable State with potentially Syncronized access and updates"),e("li",null,"Schedule: Time-based Scheduling Policies"),e("li",null,"Stream: Pull Based Effectful Streams (like an Effect that can produce 0 - infinite values)"),e("li",null,"Deferred: Like a Promise of an Effect that may be fulfilled at a later point"),e("li",null,"STM: Transactional Data Structures & Coordination"),e("li",null,"Semaphore: Concurrency Control"),e("li",null,"Clock: System Clock & Time Utilities"),e("li",null,"Random: Deterministic Seeded Random Utilities"),e("li",null,"Runtime: Runtime Configuration and Runner"),e("li",null,"Supervisor: Fiber Monitoring")],-1),uD={__name:"34",setup(t){const n={layout:"full",srcSequence:"./slides/03-intro-to-effect.md"};return H(W),(o,s)=>{const r=ba;return b(),V(lt,ge(fe(n)),{default:Q(()=>[aD,cD,iD,Y(r,null,{default:Q(()=>[pD]),_:1})]),_:1},16)}}},fD=e("h1",null,"Early adopters feedback",-1),dD=e("br",null,null,-1),yD=e("img",{src:"https://i.imgur.com/ZUKacox.png",style:{width:"500px"}},null,-1),mD={__name:"35",setup(t){const n={layout:"center",srcSequence:"./slides/03-intro-to-effect.md"};return H(W),(o,s)=>(b(),V(je,ge(fe(n)),{default:Q(()=>[fD,dD,yD]),_:1},16))}};function wa(t,n){var o={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&n.indexOf(s)<0&&(o[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)n.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(o[s[r]]=t[s[r]]);return o}var ps={},hD=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},Qu={},gt={};let xa;const gD=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];gt.getSymbolSize=function(n){if(!n)throw new Error('"version" cannot be null or undefined');if(n<1||n>40)throw new Error('"version" should be in range from 1 to 40');return n*4+17};gt.getSymbolTotalCodewords=function(n){return gD[n]};gt.getBCHDigit=function(t){let n=0;for(;t!==0;)n++,t>>>=1;return n};gt.setToSJISFunction=function(n){if(typeof n!="function")throw new Error('"toSJISFunc" is not a valid function.');xa=n};gt.isKanjiModeEnabled=function(){return typeof xa<"u"};gt.toSJIS=function(n){return xa(n)};var hr={};(function(t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2};function n(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+o)}}t.isValid=function(s){return s&&typeof s.bit<"u"&&s.bit>=0&&s.bit<4},t.from=function(s,r){if(t.isValid(s))return s;try{return n(s)}catch{return r}}})(hr);function Xu(){this.buffer=[],this.length=0}Xu.prototype={get:function(t){const n=Math.floor(t/8);return(this.buffer[n]>>>7-t%8&1)===1},put:function(t,n){for(let o=0;o<n;o++)this.putBit((t>>>n-o-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(t){const n=Math.floor(this.length/8);this.buffer.length<=n&&this.buffer.push(0),t&&(this.buffer[n]|=128>>>this.length%8),this.length++}};var vD=Xu;function us(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}us.prototype.set=function(t,n,o,s){const r=t*this.size+n;this.data[r]=o,s&&(this.reservedBit[r]=!0)};us.prototype.get=function(t,n){return this.data[t*this.size+n]};us.prototype.xor=function(t,n,o){this.data[t*this.size+n]^=o};us.prototype.isReserved=function(t,n){return this.reservedBit[t*this.size+n]};var ED=us,ef={};(function(t){const n=gt.getSymbolSize;t.getRowColCoords=function(s){if(s===1)return[];const r=Math.floor(s/7)+2,l=n(s),a=l===145?26:Math.ceil((l-13)/(2*r-2))*2,c=[l-7];for(let i=1;i<r-1;i++)c[i]=c[i-1]-a;return c.push(6),c.reverse()},t.getPositions=function(s){const r=[],l=t.getRowColCoords(s),a=l.length;for(let c=0;c<a;c++)for(let i=0;i<a;i++)c===0&&i===0||c===0&&i===a-1||c===a-1&&i===0||r.push([l[c],l[i]]);return r}})(ef);var tf={};const AD=gt.getSymbolSize,Ri=7;tf.getPositions=function(n){const o=AD(n);return[[0,0],[o-Ri,0],[0,o-Ri]]};var nf={};(function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const n={N1:3,N2:3,N3:40,N4:10};t.isValid=function(r){return r!=null&&r!==""&&!isNaN(r)&&r>=0&&r<=7},t.from=function(r){return t.isValid(r)?parseInt(r,10):void 0},t.getPenaltyN1=function(r){const l=r.size;let a=0,c=0,i=0,p=null,u=null;for(let f=0;f<l;f++){c=i=0,p=u=null;for(let d=0;d<l;d++){let y=r.get(f,d);y===p?c++:(c>=5&&(a+=n.N1+(c-5)),p=y,c=1),y=r.get(d,f),y===u?i++:(i>=5&&(a+=n.N1+(i-5)),u=y,i=1)}c>=5&&(a+=n.N1+(c-5)),i>=5&&(a+=n.N1+(i-5))}return a},t.getPenaltyN2=function(r){const l=r.size;let a=0;for(let c=0;c<l-1;c++)for(let i=0;i<l-1;i++){const p=r.get(c,i)+r.get(c,i+1)+r.get(c+1,i)+r.get(c+1,i+1);(p===4||p===0)&&a++}return a*n.N2},t.getPenaltyN3=function(r){const l=r.size;let a=0,c=0,i=0;for(let p=0;p<l;p++){c=i=0;for(let u=0;u<l;u++)c=c<<1&2047|r.get(p,u),u>=10&&(c===1488||c===93)&&a++,i=i<<1&2047|r.get(u,p),u>=10&&(i===1488||i===93)&&a++}return a*n.N3},t.getPenaltyN4=function(r){let l=0;const a=r.data.length;for(let i=0;i<a;i++)l+=r.data[i];return Math.abs(Math.ceil(l*100/a/5)-10)*n.N4};function o(s,r,l){switch(s){case t.Patterns.PATTERN000:return(r+l)%2===0;case t.Patterns.PATTERN001:return r%2===0;case t.Patterns.PATTERN010:return l%3===0;case t.Patterns.PATTERN011:return(r+l)%3===0;case t.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(l/3))%2===0;case t.Patterns.PATTERN101:return r*l%2+r*l%3===0;case t.Patterns.PATTERN110:return(r*l%2+r*l%3)%2===0;case t.Patterns.PATTERN111:return(r*l%3+(r+l)%2)%2===0;default:throw new Error("bad maskPattern:"+s)}}t.applyMask=function(r,l){const a=l.size;for(let c=0;c<a;c++)for(let i=0;i<a;i++)l.isReserved(i,c)||l.xor(i,c,o(r,i,c))},t.getBestMask=function(r,l){const a=Object.keys(t.Patterns).length;let c=0,i=1/0;for(let p=0;p<a;p++){l(p),t.applyMask(p,r);const u=t.getPenaltyN1(r)+t.getPenaltyN2(r)+t.getPenaltyN3(r)+t.getPenaltyN4(r);t.applyMask(p,r),u<i&&(i=u,c=p)}return c}})(nf);var gr={};const on=hr,Cs=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],bs=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];gr.getBlocksCount=function(n,o){switch(o){case on.L:return Cs[(n-1)*4+0];case on.M:return Cs[(n-1)*4+1];case on.Q:return Cs[(n-1)*4+2];case on.H:return Cs[(n-1)*4+3];default:return}};gr.getTotalCodewordsCount=function(n,o){switch(o){case on.L:return bs[(n-1)*4+0];case on.M:return bs[(n-1)*4+1];case on.Q:return bs[(n-1)*4+2];case on.H:return bs[(n-1)*4+3];default:return}};var of={},vr={};const jo=new Uint8Array(512),Ws=new Uint8Array(256);(function(){let n=1;for(let o=0;o<255;o++)jo[o]=n,Ws[n]=o,n<<=1,n&256&&(n^=285);for(let o=255;o<512;o++)jo[o]=jo[o-255]})();vr.log=function(n){if(n<1)throw new Error("log("+n+")");return Ws[n]};vr.exp=function(n){return jo[n]};vr.mul=function(n,o){return n===0||o===0?0:jo[Ws[n]+Ws[o]]};(function(t){const n=vr;t.mul=function(s,r){const l=new Uint8Array(s.length+r.length-1);for(let a=0;a<s.length;a++)for(let c=0;c<r.length;c++)l[a+c]^=n.mul(s[a],r[c]);return l},t.mod=function(s,r){let l=new Uint8Array(s);for(;l.length-r.length>=0;){const a=l[0];for(let i=0;i<r.length;i++)l[i]^=n.mul(r[i],a);let c=0;for(;c<l.length&&l[c]===0;)c++;l=l.slice(c)}return l},t.generateECPolynomial=function(s){let r=new Uint8Array([1]);for(let l=0;l<s;l++)r=t.mul(r,new Uint8Array([1,n.exp(l)]));return r}})(of);const sf=of;function Ta(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}Ta.prototype.initialize=function(n){this.degree=n,this.genPoly=sf.generateECPolynomial(this.degree)};Ta.prototype.encode=function(n){if(!this.genPoly)throw new Error("Encoder not initialized");const o=new Uint8Array(n.length+this.degree);o.set(n);const s=sf.mod(o,this.genPoly),r=this.degree-s.length;if(r>0){const l=new Uint8Array(this.degree);return l.set(s,r),l}return s};var BD=Ta,rf={},yn={},Sa={};Sa.isValid=function(n){return!isNaN(n)&&n>=1&&n<=40};var qt={};const lf="[0-9]+",DD="[A-Z $%*+\\-./:]+";let os="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";os=os.replace(/u/g,"\\u");const _D="(?:(?![A-Z0-9 $%*+\\-./:]|"+os+`)(?:.|[\r
]))+`;qt.KANJI=new RegExp(os,"g");qt.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");qt.BYTE=new RegExp(_D,"g");qt.NUMERIC=new RegExp(lf,"g");qt.ALPHANUMERIC=new RegExp(DD,"g");const CD=new RegExp("^"+os+"$"),bD=new RegExp("^"+lf+"$"),wD=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");qt.testKanji=function(n){return CD.test(n)};qt.testNumeric=function(n){return bD.test(n)};qt.testAlphanumeric=function(n){return wD.test(n)};(function(t){const n=Sa,o=qt;t.NUMERIC={id:"Numeric",bit:1<<0,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:1<<1,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:1<<2,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:1<<3,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(l,a){if(!l.ccBits)throw new Error("Invalid mode: "+l);if(!n.isValid(a))throw new Error("Invalid version: "+a);return a>=1&&a<10?l.ccBits[0]:a<27?l.ccBits[1]:l.ccBits[2]},t.getBestModeForData=function(l){return o.testNumeric(l)?t.NUMERIC:o.testAlphanumeric(l)?t.ALPHANUMERIC:o.testKanji(l)?t.KANJI:t.BYTE},t.toString=function(l){if(l&&l.id)return l.id;throw new Error("Invalid mode")},t.isValid=function(l){return l&&l.bit&&l.ccBits};function s(r){if(typeof r!="string")throw new Error("Param is not a string");switch(r.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+r)}}t.from=function(l,a){if(t.isValid(l))return l;try{return s(l)}catch{return a}}})(yn);(function(t){const n=gt,o=gr,s=hr,r=yn,l=Sa,a=1<<12|1<<11|1<<10|1<<9|1<<8|1<<5|1<<2|1<<0,c=n.getBCHDigit(a);function i(d,y,m){for(let g=1;g<=40;g++)if(y<=t.getCapacity(g,m,d))return g}function p(d,y){return r.getCharCountIndicator(d,y)+4}function u(d,y){let m=0;return d.forEach(function(g){m+=p(g.mode,y)+g.getBitsLength()}),m}function f(d,y){for(let m=1;m<=40;m++)if(u(d,m)<=t.getCapacity(m,y,r.MIXED))return m}t.from=function(y,m){return l.isValid(y)?parseInt(y,10):m},t.getCapacity=function(y,m,g){if(!l.isValid(y))throw new Error("Invalid QR Code version");typeof g>"u"&&(g=r.BYTE);const A=n.getSymbolTotalCodewords(y),B=o.getTotalCodewordsCount(y,m),D=(A-B)*8;if(g===r.MIXED)return D;const E=D-p(g,y);switch(g){case r.NUMERIC:return Math.floor(E/10*3);case r.ALPHANUMERIC:return Math.floor(E/11*2);case r.KANJI:return Math.floor(E/13);case r.BYTE:default:return Math.floor(E/8)}},t.getBestVersionForData=function(y,m){let g;const A=s.from(m,s.M);if(Array.isArray(y)){if(y.length>1)return f(y,A);if(y.length===0)return 1;g=y[0]}else g=y;return i(g.mode,g.getLength(),A)},t.getEncodedBits=function(y){if(!l.isValid(y)||y<7)throw new Error("Invalid QR Code version");let m=y<<12;for(;n.getBCHDigit(m)-c>=0;)m^=a<<n.getBCHDigit(m)-c;return y<<12|m}})(rf);var af={};const kl=gt,cf=1<<10|1<<8|1<<5|1<<4|1<<2|1<<1|1<<0,xD=1<<14|1<<12|1<<10|1<<4|1<<1,Pi=kl.getBCHDigit(cf);af.getEncodedBits=function(n,o){const s=n.bit<<3|o;let r=s<<10;for(;kl.getBCHDigit(r)-Pi>=0;)r^=cf<<kl.getBCHDigit(r)-Pi;return(s<<10|r)^xD};var pf={};const TD=yn;function po(t){this.mode=TD.NUMERIC,this.data=t.toString()}po.getBitsLength=function(n){return 10*Math.floor(n/3)+(n%3?n%3*3+1:0)};po.prototype.getLength=function(){return this.data.length};po.prototype.getBitsLength=function(){return po.getBitsLength(this.data.length)};po.prototype.write=function(n){let o,s,r;for(o=0;o+3<=this.data.length;o+=3)s=this.data.substr(o,3),r=parseInt(s,10),n.put(r,10);const l=this.data.length-o;l>0&&(s=this.data.substr(o),r=parseInt(s,10),n.put(r,l*3+1))};var SD=po;const kD=yn,Ir=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function uo(t){this.mode=kD.ALPHANUMERIC,this.data=t}uo.getBitsLength=function(n){return 11*Math.floor(n/2)+6*(n%2)};uo.prototype.getLength=function(){return this.data.length};uo.prototype.getBitsLength=function(){return uo.getBitsLength(this.data.length)};uo.prototype.write=function(n){let o;for(o=0;o+2<=this.data.length;o+=2){let s=Ir.indexOf(this.data[o])*45;s+=Ir.indexOf(this.data[o+1]),n.put(s,11)}this.data.length%2&&n.put(Ir.indexOf(this.data[o]),6)};var RD=uo,PD=function(n){for(var o=[],s=n.length,r=0;r<s;r++){var l=n.charCodeAt(r);if(l>=55296&&l<=56319&&s>r+1){var a=n.charCodeAt(r+1);a>=56320&&a<=57343&&(l=(l-55296)*1024+a-56320+65536,r+=1)}if(l<128){o.push(l);continue}if(l<2048){o.push(l>>6|192),o.push(l&63|128);continue}if(l<55296||l>=57344&&l<65536){o.push(l>>12|224),o.push(l>>6&63|128),o.push(l&63|128);continue}if(l>=65536&&l<=1114111){o.push(l>>18|240),o.push(l>>12&63|128),o.push(l>>6&63|128),o.push(l&63|128);continue}o.push(239,191,189)}return new Uint8Array(o).buffer};const $D=PD,OD=yn;function fo(t){this.mode=OD.BYTE,typeof t=="string"&&(t=$D(t)),this.data=new Uint8Array(t)}fo.getBitsLength=function(n){return n*8};fo.prototype.getLength=function(){return this.data.length};fo.prototype.getBitsLength=function(){return fo.getBitsLength(this.data.length)};fo.prototype.write=function(t){for(let n=0,o=this.data.length;n<o;n++)t.put(this.data[n],8)};var FD=fo;const MD=yn,LD=gt;function yo(t){this.mode=MD.KANJI,this.data=t}yo.getBitsLength=function(n){return n*13};yo.prototype.getLength=function(){return this.data.length};yo.prototype.getBitsLength=function(){return yo.getBitsLength(this.data.length)};yo.prototype.write=function(t){let n;for(n=0;n<this.data.length;n++){let o=LD.toSJIS(this.data[n]);if(o>=33088&&o<=40956)o-=33088;else if(o>=57408&&o<=60351)o-=49472;else throw new Error("Invalid SJIS character: "+this.data[n]+`
Make sure your charset is UTF-8`);o=(o>>>8&255)*192+(o&255),t.put(o,13)}};var HD=yo,uf={exports:{}};(function(t){var n={single_source_shortest_paths:function(o,s,r){var l={},a={};a[s]=0;var c=n.PriorityQueue.make();c.push(s,0);for(var i,p,u,f,d,y,m,g,A;!c.empty();){i=c.pop(),p=i.value,f=i.cost,d=o[p]||{};for(u in d)d.hasOwnProperty(u)&&(y=d[u],m=f+y,g=a[u],A=typeof a[u]>"u",(A||g>m)&&(a[u]=m,c.push(u,m),l[u]=p))}if(typeof r<"u"&&typeof a[r]>"u"){var B=["Could not find a path from ",s," to ",r,"."].join("");throw new Error(B)}return l},extract_shortest_path_from_predecessor_list:function(o,s){for(var r=[],l=s;l;)r.push(l),o[l],l=o[l];return r.reverse(),r},find_path:function(o,s,r){var l=n.single_source_shortest_paths(o,s,r);return n.extract_shortest_path_from_predecessor_list(l,r)},PriorityQueue:{make:function(o){var s=n.PriorityQueue,r={},l;o=o||{};for(l in s)s.hasOwnProperty(l)&&(r[l]=s[l]);return r.queue=[],r.sorter=o.sorter||s.default_sorter,r},default_sorter:function(o,s){return o.cost-s.cost},push:function(o,s){var r={value:o,cost:s};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};t.exports=n})(uf);(function(t){const n=yn,o=SD,s=RD,r=FD,l=HD,a=qt,c=gt,i=uf.exports;function p(B){return unescape(encodeURIComponent(B)).length}function u(B,D,E){const _=[];let S;for(;(S=B.exec(E))!==null;)_.push({data:S[0],index:S.index,mode:D,length:S[0].length});return _}function f(B){const D=u(a.NUMERIC,n.NUMERIC,B),E=u(a.ALPHANUMERIC,n.ALPHANUMERIC,B);let _,S;return c.isKanjiModeEnabled()?(_=u(a.BYTE,n.BYTE,B),S=u(a.KANJI,n.KANJI,B)):(_=u(a.BYTE_KANJI,n.BYTE,B),S=[]),D.concat(E,_,S).sort(function($,J){return $.index-J.index}).map(function($){return{data:$.data,mode:$.mode,length:$.length}})}function d(B,D){switch(D){case n.NUMERIC:return o.getBitsLength(B);case n.ALPHANUMERIC:return s.getBitsLength(B);case n.KANJI:return l.getBitsLength(B);case n.BYTE:return r.getBitsLength(B)}}function y(B){return B.reduce(function(D,E){const _=D.length-1>=0?D[D.length-1]:null;return _&&_.mode===E.mode?(D[D.length-1].data+=E.data,D):(D.push(E),D)},[])}function m(B){const D=[];for(let E=0;E<B.length;E++){const _=B[E];switch(_.mode){case n.NUMERIC:D.push([_,{data:_.data,mode:n.ALPHANUMERIC,length:_.length},{data:_.data,mode:n.BYTE,length:_.length}]);break;case n.ALPHANUMERIC:D.push([_,{data:_.data,mode:n.BYTE,length:_.length}]);break;case n.KANJI:D.push([_,{data:_.data,mode:n.BYTE,length:p(_.data)}]);break;case n.BYTE:D.push([{data:_.data,mode:n.BYTE,length:p(_.data)}])}}return D}function g(B,D){const E={},_={start:{}};let S=["start"];for(let R=0;R<B.length;R++){const $=B[R],J=[];for(let te=0;te<$.length;te++){const ne=$[te],pe=""+R+te;J.push(pe),E[pe]={node:ne,lastCount:0},_[pe]={};for(let Fe=0;Fe<S.length;Fe++){const Ce=S[Fe];E[Ce]&&E[Ce].node.mode===ne.mode?(_[Ce][pe]=d(E[Ce].lastCount+ne.length,ne.mode)-d(E[Ce].lastCount,ne.mode),E[Ce].lastCount+=ne.length):(E[Ce]&&(E[Ce].lastCount=ne.length),_[Ce][pe]=d(ne.length,ne.mode)+4+n.getCharCountIndicator(ne.mode,D))}}S=J}for(let R=0;R<S.length;R++)_[S[R]].end=0;return{map:_,table:E}}function A(B,D){let E;const _=n.getBestModeForData(B);if(E=n.from(D,_),E!==n.BYTE&&E.bit<_.bit)throw new Error('"'+B+'" cannot be encoded with mode '+n.toString(E)+`.
 Suggested mode is: `+n.toString(_));switch(E===n.KANJI&&!c.isKanjiModeEnabled()&&(E=n.BYTE),E){case n.NUMERIC:return new o(B);case n.ALPHANUMERIC:return new s(B);case n.KANJI:return new l(B);case n.BYTE:return new r(B)}}t.fromArray=function(D){return D.reduce(function(E,_){return typeof _=="string"?E.push(A(_,null)):_.data&&E.push(A(_.data,_.mode)),E},[])},t.fromString=function(D,E){const _=f(D,c.isKanjiModeEnabled()),S=m(_),R=g(S,E),$=i.find_path(R.map,"start","end"),J=[];for(let te=1;te<$.length-1;te++)J.push(R.table[$[te]].node);return t.fromArray(y(J))},t.rawSplit=function(D){return t.fromArray(f(D,c.isKanjiModeEnabled()))}})(pf);const Er=gt,Nr=hr,ID=vD,ND=ED,jD=ef,qD=tf,Rl=nf,Pl=gr,UD=BD,zs=rf,JD=af,VD=yn,jr=pf;function WD(t,n){const o=t.size,s=qD.getPositions(n);for(let r=0;r<s.length;r++){const l=s[r][0],a=s[r][1];for(let c=-1;c<=7;c++)if(!(l+c<=-1||o<=l+c))for(let i=-1;i<=7;i++)a+i<=-1||o<=a+i||(c>=0&&c<=6&&(i===0||i===6)||i>=0&&i<=6&&(c===0||c===6)||c>=2&&c<=4&&i>=2&&i<=4?t.set(l+c,a+i,!0,!0):t.set(l+c,a+i,!1,!0))}}function zD(t){const n=t.size;for(let o=8;o<n-8;o++){const s=o%2===0;t.set(o,6,s,!0),t.set(6,o,s,!0)}}function KD(t,n){const o=jD.getPositions(n);for(let s=0;s<o.length;s++){const r=o[s][0],l=o[s][1];for(let a=-2;a<=2;a++)for(let c=-2;c<=2;c++)a===-2||a===2||c===-2||c===2||a===0&&c===0?t.set(r+a,l+c,!0,!0):t.set(r+a,l+c,!1,!0)}}function YD(t,n){const o=t.size,s=zs.getEncodedBits(n);let r,l,a;for(let c=0;c<18;c++)r=Math.floor(c/3),l=c%3+o-8-3,a=(s>>c&1)===1,t.set(r,l,a,!0),t.set(l,r,a,!0)}function qr(t,n,o){const s=t.size,r=JD.getEncodedBits(n,o);let l,a;for(l=0;l<15;l++)a=(r>>l&1)===1,l<6?t.set(l,8,a,!0):l<8?t.set(l+1,8,a,!0):t.set(s-15+l,8,a,!0),l<8?t.set(8,s-l-1,a,!0):l<9?t.set(8,15-l-1+1,a,!0):t.set(8,15-l-1,a,!0);t.set(s-8,8,1,!0)}function GD(t,n){const o=t.size;let s=-1,r=o-1,l=7,a=0;for(let c=o-1;c>0;c-=2)for(c===6&&c--;;){for(let i=0;i<2;i++)if(!t.isReserved(r,c-i)){let p=!1;a<n.length&&(p=(n[a]>>>l&1)===1),t.set(r,c-i,p),l--,l===-1&&(a++,l=7)}if(r+=s,r<0||o<=r){r-=s,s=-s;break}}}function ZD(t,n,o){const s=new ID;o.forEach(function(i){s.put(i.mode.bit,4),s.put(i.getLength(),VD.getCharCountIndicator(i.mode,t)),i.write(s)});const r=Er.getSymbolTotalCodewords(t),l=Pl.getTotalCodewordsCount(t,n),a=(r-l)*8;for(s.getLengthInBits()+4<=a&&s.put(0,4);s.getLengthInBits()%8!==0;)s.putBit(0);const c=(a-s.getLengthInBits())/8;for(let i=0;i<c;i++)s.put(i%2?17:236,8);return QD(s,t,n)}function QD(t,n,o){const s=Er.getSymbolTotalCodewords(n),r=Pl.getTotalCodewordsCount(n,o),l=s-r,a=Pl.getBlocksCount(n,o),c=s%a,i=a-c,p=Math.floor(s/a),u=Math.floor(l/a),f=u+1,d=p-u,y=new UD(d);let m=0;const g=new Array(a),A=new Array(a);let B=0;const D=new Uint8Array(t.buffer);for(let $=0;$<a;$++){const J=$<i?u:f;g[$]=D.slice(m,m+J),A[$]=y.encode(g[$]),m+=J,B=Math.max(B,J)}const E=new Uint8Array(s);let _=0,S,R;for(S=0;S<B;S++)for(R=0;R<a;R++)S<g[R].length&&(E[_++]=g[R][S]);for(S=0;S<d;S++)for(R=0;R<a;R++)E[_++]=A[R][S];return E}function XD(t,n,o,s){let r;if(Array.isArray(t))r=jr.fromArray(t);else if(typeof t=="string"){let p=n;if(!p){const u=jr.rawSplit(t);p=zs.getBestVersionForData(u,o)}r=jr.fromString(t,p||40)}else throw new Error("Invalid data");const l=zs.getBestVersionForData(r,o);if(!l)throw new Error("The amount of data is too big to be stored in a QR Code");if(!n)n=l;else if(n<l)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+l+`.
`);const a=ZD(n,o,r),c=Er.getSymbolSize(n),i=new ND(c);return WD(i,n),zD(i),KD(i,n),qr(i,o,0),n>=7&&YD(i,n),GD(i,a),isNaN(s)&&(s=Rl.getBestMask(i,qr.bind(null,i,o))),Rl.applyMask(s,i),qr(i,o,s),{modules:i,version:n,errorCorrectionLevel:o,maskPattern:s,segments:r}}Qu.create=function(n,o){if(typeof n>"u"||n==="")throw new Error("No input text");let s=Nr.M,r,l;return typeof o<"u"&&(s=Nr.from(o.errorCorrectionLevel,Nr.M),r=zs.from(o.version),l=Rl.from(o.maskPattern),o.toSJISFunc&&Er.setToSJISFunction(o.toSJISFunc)),XD(n,r,s,l)};var ff={},ka={};(function(t){function n(o){if(typeof o=="number"&&(o=o.toString()),typeof o!="string")throw new Error("Color should be defined as hex string");let s=o.slice().replace("#","").split("");if(s.length<3||s.length===5||s.length>8)throw new Error("Invalid hex color: "+o);(s.length===3||s.length===4)&&(s=Array.prototype.concat.apply([],s.map(function(l){return[l,l]}))),s.length===6&&s.push("F","F");const r=parseInt(s.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:r&255,hex:"#"+s.slice(0,6).join("")}}t.getOptions=function(s){s||(s={}),s.color||(s.color={});const r=typeof s.margin>"u"||s.margin===null||s.margin<0?4:s.margin,l=s.width&&s.width>=21?s.width:void 0,a=s.scale||4;return{width:l,scale:l?4:a,margin:r,color:{dark:n(s.color.dark||"#000000ff"),light:n(s.color.light||"#ffffffff")},type:s.type,rendererOpts:s.rendererOpts||{}}},t.getScale=function(s,r){return r.width&&r.width>=s+r.margin*2?r.width/(s+r.margin*2):r.scale},t.getImageWidth=function(s,r){const l=t.getScale(s,r);return Math.floor((s+r.margin*2)*l)},t.qrToImageData=function(s,r,l){const a=r.modules.size,c=r.modules.data,i=t.getScale(a,l),p=Math.floor((a+l.margin*2)*i),u=l.margin*i,f=[l.color.light,l.color.dark];for(let d=0;d<p;d++)for(let y=0;y<p;y++){let m=(d*p+y)*4,g=l.color.light;if(d>=u&&y>=u&&d<p-u&&y<p-u){const A=Math.floor((d-u)/i),B=Math.floor((y-u)/i);g=f[c[A*a+B]?1:0]}s[m++]=g.r,s[m++]=g.g,s[m++]=g.b,s[m]=g.a}}})(ka);(function(t){const n=ka;function o(r,l,a){r.clearRect(0,0,l.width,l.height),l.style||(l.style={}),l.height=a,l.width=a,l.style.height=a+"px",l.style.width=a+"px"}function s(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}t.render=function(l,a,c){let i=c,p=a;typeof i>"u"&&(!a||!a.getContext)&&(i=a,a=void 0),a||(p=s()),i=n.getOptions(i);const u=n.getImageWidth(l.modules.size,i),f=p.getContext("2d"),d=f.createImageData(u,u);return n.qrToImageData(d.data,l,i),o(f,p,u),f.putImageData(d,0,0),p},t.renderToDataURL=function(l,a,c){let i=c;typeof i>"u"&&(!a||!a.getContext)&&(i=a,a=void 0),i||(i={});const p=t.render(l,a,i),u=i.type||"image/png",f=i.rendererOpts||{};return p.toDataURL(u,f.quality)}})(ff);var df={};const e_=ka;function $i(t,n){const o=t.a/255,s=n+'="'+t.hex+'"';return o<1?s+" "+n+'-opacity="'+o.toFixed(2).slice(1)+'"':s}function Ur(t,n,o){let s=t+n;return typeof o<"u"&&(s+=" "+o),s}function t_(t,n,o){let s="",r=0,l=!1,a=0;for(let c=0;c<t.length;c++){const i=Math.floor(c%n),p=Math.floor(c/n);!i&&!l&&(l=!0),t[c]?(a++,c>0&&i>0&&t[c-1]||(s+=l?Ur("M",i+o,.5+p+o):Ur("m",r,0),r=0,l=!1),i+1<n&&t[c+1]||(s+=Ur("h",a),a=0)):r++}return s}df.render=function(n,o,s){const r=e_.getOptions(o),l=n.modules.size,a=n.modules.data,c=l+r.margin*2,i=r.color.light.a?"<path "+$i(r.color.light,"fill")+' d="M0 0h'+c+"v"+c+'H0z"/>':"",p="<path "+$i(r.color.dark,"stroke")+' d="'+t_(a,l,r.margin)+'"/>',u='viewBox="0 0 '+c+" "+c+'"',f=r.width?'width="'+r.width+'" height="'+r.width+'" ':"",d='<svg xmlns="http://www.w3.org/2000/svg" '+f+u+' shape-rendering="crispEdges">'+i+p+`</svg>
`;return typeof s=="function"&&s(null,d),d};const n_=hD,$l=Qu,yf=ff,o_=df;function Ra(t,n,o,s,r){const l=[].slice.call(arguments,1),a=l.length,c=typeof l[a-1]=="function";if(!c&&!n_())throw new Error("Callback required as last argument");if(c){if(a<2)throw new Error("Too few arguments provided");a===2?(r=o,o=n,n=s=void 0):a===3&&(n.getContext&&typeof r>"u"?(r=s,s=void 0):(r=s,s=o,o=n,n=void 0))}else{if(a<1)throw new Error("Too few arguments provided");return a===1?(o=n,n=s=void 0):a===2&&!n.getContext&&(s=o,o=n,n=void 0),new Promise(function(i,p){try{const u=$l.create(o,s);i(t(u,n,s))}catch(u){p(u)}})}try{const i=$l.create(o,s);r(null,t(i,n,s))}catch(i){r(i)}}ps.create=$l.create;ps.toCanvas=Ra.bind(null,yf.render);ps.toDataURL=Ra.bind(null,yf.renderToDataURL);ps.toString=Ra.bind(null,function(t,n,o){return o_.render(t,o)});const s_=["low","medium","quartile","high","L","M","Q","H"],r_=[0,1,2,3,4,5,6,7],l_=["alphanumeric","numeric","kanji","byte"],a_=["image/png","image/jpeg","image/webp"],c_=40,i_=De({props:{version:{type:Number,validator:t=>t===Number.parseInt(String(t),10)&&t>=1&&t<=c_},errorCorrectionLevel:{type:String,validator:t=>s_.includes(t)},maskPattern:{type:Number,validator:t=>r_.includes(t)},toSJISFunc:Function,margin:Number,scale:Number,width:Number,color:{type:Object,validator:t=>["dark","light"].every(n=>["string","undefined"].includes(typeof t[n])),required:!0},type:{type:String,validator:t=>a_.includes(t),required:!0},quality:{type:Number,validator:t=>t===Number.parseFloat(String(t))&&t>=0&&t<=1,required:!1},value:{type:[String,Array],required:!0,validator(t){return typeof t=="string"?!0:t.every(n=>typeof n.data=="string"&&"mode"in n&&l_.includes(n.mode))}}},setup(t,{attrs:n,emit:o}){const s=N();return ue(t,()=>{const{quality:l,value:a}=t,c=wa(t,["quality","value"]);ps.toDataURL(a,Object.assign(c,l==null||{renderOptions:{quality:l}})).then(i=>{s.value=i,o("change",i)}).catch(i=>o("error",i))},{immediate:!0}),()=>Ye("img",Object.assign(Object.assign({},n),{src:s.value}))}}),p_={inject:{$slidev:{from:W}},data(){return{dataUrl:null}},components:{VueQrcode:i_},methods:{onDataUrlChange(t){this.dataUrl=t}}};function u_(t,n,o,s,r,l){const a=lo("vue-qrcode");return b(),V(a,{value:"https://mikearnaldi.github.io/pirum-meetup-09-2022",onChange:l.onDataUrlChange},null,8,["onChange"])}const f_=Da(p_,[["render",u_]]),d_=e("h1",null,"Thank you!",-1),y_=e("p",null,"Where to go next?",-1),m_=e("p",null,[e("a",{href:"https://github.com/mikearnaldi/pirum-meetup-09-2022",target:"_blank",rel:"noopener"},"Slides Code"),Z(),e("a",{href:"https://www.effect.website/",target:"_blank",rel:"noopener"},"Website"),Z(),e("a",{href:"https://discord.gg/cWtHKdAXwC",target:"_blank",rel:"noopener"},"Discord Community")],-1),h_=e("hr",null,null,-1),g_=e("p",null,"We offer:",-1),v_=e("p",null,"Training, Team Extension, Design & Development, Accessibility Audits, Recruitment.",-1),E_=e("p",null,[e("a",{href:"contact@matechs.com",target:"_blank",rel:"noopener"},"contact@matechs.com")],-1),A_={__name:"36",setup(t){const n={layout:"center",srcSequence:"./slides/03-intro-to-effect.md"};return H(W),(o,s)=>{const r=f_,l=lo("center");return b(),V(je,ge(fe(n)),{default:Q(()=>[Y(l,null,{default:Q(()=>[d_,y_,Y(r),m_,h_,g_,v_,E_]),_:1})]),_:1},16)}}},B_=[{path:"1",name:"page-1",component:oE,meta:{layout:"cover",title:"TypeSafe Development with TypeScript",lineNumbers:!0,canvasWidth:1024,srcSequence:"./slides/01-cover.md",slide:{raw:null,title:"TypeSafe Development with TypeScript",level:1,content:`# TypeSafe Development with TypeScript

## A quick overview

Michael Arnaldi - CEO @ MATECHS

Pirum Internal Meetup`,frontmatter:{layout:"cover",title:"TypeSafe Development with TypeScript",lineNumbers:!0,canvasWidth:1024,srcSequence:"./slides/01-cover.md"},index:0,start:0,end:13,source:{filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/01-cover.md",raw:`---
layout: cover
title: TypeSafe Development with TypeScript
---

# TypeSafe Development with TypeScript

## A quick overview

Michael Arnaldi - CEO @ MATECHS

Pirum Internal Meetup
`,title:"TypeSafe Development with TypeScript",level:1,content:`# TypeSafe Development with TypeScript

## A quick overview

Michael Arnaldi - CEO @ MATECHS

Pirum Internal Meetup`,frontmatter:{layout:"cover",title:"TypeSafe Development with TypeScript"},index:0,start:0,end:13},inline:{raw:`---
title: TypeSafe Development with TypeScript
lineNumbers: true
canvasWidth: 1024
src: ./slides/01-cover.md
---
`,title:"TypeSafe Development with TypeScript",level:1,content:"",frontmatter:{title:"TypeSafe Development with TypeScript",lineNumbers:!0,canvasWidth:1024},index:0,start:0,end:7},filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/01-cover.md",notesHTML:"",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:aE,meta:{layout:"center",title:"What is a Language?",srcSequence:"./slides/02-motivation.md",slide:{raw:null,title:"What is a Language?",level:1,content:"# What is a Language?",frontmatter:{layout:"center",title:"What is a Language?",srcSequence:"./slides/02-motivation.md"},index:1,start:0,end:6,source:{filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/02-motivation.md",raw:`---
layout: center
---

# What is a Language?
`,title:"What is a Language?",level:1,content:"# What is a Language?",frontmatter:{layout:"center",title:"What is a Language?"},index:0,start:0,end:6},inline:{raw:`---
src: ./slides/02-motivation.md
---
`,content:"",frontmatter:{},index:1,start:7,end:11},filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/02-motivation.md",notesHTML:"",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:uE,meta:{layout:"center",srcSequence:"./slides/02-motivation.md",slide:{raw:`---
layout: center
---

## From Wikipedia

A language is a **structured system** of communication. The structure of a language is its **grammar** and the free components are its **vocabulary**.

Human languages differ from animal communication systems in that they employ **grammatical and semantic categories**, such as noun and verb, present and past, which may be used to express **exceedingly complex meanings**.
`,title:"From Wikipedia",level:2,content:`## From Wikipedia

A language is a **structured system** of communication. The structure of a language is its **grammar** and the free components are its **vocabulary**.

Human languages differ from animal communication systems in that they employ **grammatical and semantic categories**, such as noun and verb, present and past, which may be used to express **exceedingly complex meanings**.`,frontmatter:{layout:"center",srcSequence:"./slides/02-motivation.md"},index:2,start:6,end:16,source:{filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/02-motivation.md",raw:`---
layout: center
---

## From Wikipedia

A language is a **structured system** of communication. The structure of a language is its **grammar** and the free components are its **vocabulary**.

Human languages differ from animal communication systems in that they employ **grammatical and semantic categories**, such as noun and verb, present and past, which may be used to express **exceedingly complex meanings**.
`,title:"From Wikipedia",level:2,content:`## From Wikipedia

A language is a **structured system** of communication. The structure of a language is its **grammar** and the free components are its **vocabulary**.

Human languages differ from animal communication systems in that they employ **grammatical and semantic categories**, such as noun and verb, present and past, which may be used to express **exceedingly complex meanings**.`,frontmatter:{layout:"center"},index:1,start:6,end:16},filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/02-motivation.md",notesHTML:"",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:dE,meta:{layout:"center",srcSequence:"./slides/02-motivation.md",slide:{raw:`---
layout: center
---

# If a sentence is grammatically correct, does it make sense?
`,title:"If a sentence is grammatically correct, does it make sense?",level:1,content:"# If a sentence is grammatically correct, does it make sense?",frontmatter:{layout:"center",srcSequence:"./slides/02-motivation.md"},index:3,start:16,end:22,source:{filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/02-motivation.md",raw:`---
layout: center
---

# If a sentence is grammatically correct, does it make sense?
`,title:"If a sentence is grammatically correct, does it make sense?",level:1,content:"# If a sentence is grammatically correct, does it make sense?",frontmatter:{layout:"center"},index:2,start:16,end:22},filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/02-motivation.md",notesHTML:"",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:mE,meta:{layout:"center",srcSequence:"./slides/02-motivation.md",slide:{raw:`---
layout: center
---

# Time flies like an arrow; fruit flies like a banana.
`,title:"Time flies like an arrow; fruit flies like a banana.",level:1,content:"# Time flies like an arrow; fruit flies like a banana.",frontmatter:{layout:"center",srcSequence:"./slides/02-motivation.md"},index:4,start:22,end:28,source:{filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/02-motivation.md",raw:`---
layout: center
---

# Time flies like an arrow; fruit flies like a banana.
`,title:"Time flies like an arrow; fruit flies like a banana.",level:1,content:"# Time flies like an arrow; fruit flies like a banana.",frontmatter:{layout:"center"},index:3,start:22,end:28},filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/02-motivation.md",notesHTML:"",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:AE,meta:{layout:"center",srcSequence:"./slides/02-motivation.md",slide:{raw:`---
layout: center
---

# Type Checking English

## <u>Time flies</u> like an arrow; <u>fruit flies</u> like a banana.

Error: <u>Fly</u> cannot be applied to <u>Time</u>

Error: <u>Fly</u> cannot be applied to <u>Fruit</u>
`,title:"Type Checking English",level:1,content:`# Type Checking English

## <u>Time flies</u> like an arrow; <u>fruit flies</u> like a banana.

Error: <u>Fly</u> cannot be applied to <u>Time</u>

Error: <u>Fly</u> cannot be applied to <u>Fruit</u>`,frontmatter:{layout:"center",srcSequence:"./slides/02-motivation.md"},index:5,start:28,end:40,source:{filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/02-motivation.md",raw:`---
layout: center
---

# Type Checking English

## <u>Time flies</u> like an arrow; <u>fruit flies</u> like a banana.

Error: <u>Fly</u> cannot be applied to <u>Time</u>

Error: <u>Fly</u> cannot be applied to <u>Fruit</u>
`,title:"Type Checking English",level:1,content:`# Type Checking English

## <u>Time flies</u> like an arrow; <u>fruit flies</u> like a banana.

Error: <u>Fly</u> cannot be applied to <u>Time</u>

Error: <u>Fly</u> cannot be applied to <u>Fruit</u>`,frontmatter:{layout:"center"},index:4,start:28,end:40},filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/02-motivation.md",notesHTML:"",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:DE,meta:{layout:"center",srcSequence:"./slides/02-motivation.md",slide:{raw:`---
layout: center
---

# Can we Type-Check JavaScript?
`,title:"Can we Type-Check JavaScript?",level:1,content:"# Can we Type-Check JavaScript?",frontmatter:{layout:"center",srcSequence:"./slides/02-motivation.md"},index:6,start:40,end:46,source:{filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/02-motivation.md",raw:`---
layout: center
---

# Can we Type-Check JavaScript?
`,title:"Can we Type-Check JavaScript?",level:1,content:"# Can we Type-Check JavaScript?",frontmatter:{layout:"center"},index:5,start:40,end:46},filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/02-motivation.md",notesHTML:"",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:xE,meta:{layout:"center",srcSequence:"./slides/02-motivation.md",slide:{raw:`---
layout: center
---

# Can we Type-Check JavaScript?
## Kind of.. In some simple cases, yes.

<br />

<div style="width: 700px;">

\`\`\`ts twoslash
// @errors: 2469
const hello = "hello"
const world = "world"
const sentence = hello + world + Symbol.for("ok")
\`\`\`

</div>
`,title:"Can we Type-Check JavaScript?",level:1,content:`# Can we Type-Check JavaScript?
## Kind of.. In some simple cases, yes.

<br />

<div style="width: 700px;">

\`\`\`ts twoslash
// @errors: 2469
const hello = "hello"
const world = "world"
const sentence = hello + world + Symbol.for("ok")
\`\`\`

</div>`,frontmatter:{layout:"center",srcSequence:"./slides/02-motivation.md"},index:7,start:46,end:66,source:{filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/02-motivation.md",raw:`---
layout: center
---

# Can we Type-Check JavaScript?
## Kind of.. In some simple cases, yes.

<br />

<div style="width: 700px;">

\`\`\`ts twoslash
// @errors: 2469
const hello = "hello"
const world = "world"
const sentence = hello + world + Symbol.for("ok")
\`\`\`

</div>
`,title:"Can we Type-Check JavaScript?",level:1,content:`# Can we Type-Check JavaScript?
## Kind of.. In some simple cases, yes.

<br />

<div style="width: 700px;">

\`\`\`ts twoslash
// @errors: 2469
const hello = "hello"
const world = "world"
const sentence = hello + world + Symbol.for("ok")
\`\`\`

</div>`,frontmatter:{layout:"center"},index:6,start:46,end:66},filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/02-motivation.md",notesHTML:"",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:a1,meta:{layout:"center",srcSequence:"./slides/02-motivation.md",slide:{raw:`---
layout: center
---

# How would we Type-Check the following?

\`\`\`ts
function sum(a, b) {
    return a + b
}
\`\`\`

Without knowing something about \`a\` and \`b\` there isn't much we can say...
`,title:"How would we Type-Check the following?",level:1,content:"# How would we Type-Check the following?\n\n```ts\nfunction sum(a, b) {\n    return a + b\n}\n```\n\nWithout knowing something about `a` and `b` there isn't much we can say...",frontmatter:{layout:"center",srcSequence:"./slides/02-motivation.md"},index:8,start:66,end:80,source:{filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/02-motivation.md",raw:`---
layout: center
---

# How would we Type-Check the following?

\`\`\`ts
function sum(a, b) {
    return a + b
}
\`\`\`

Without knowing something about \`a\` and \`b\` there isn't much we can say...
`,title:"How would we Type-Check the following?",level:1,content:"# How would we Type-Check the following?\n\n```ts\nfunction sum(a, b) {\n    return a + b\n}\n```\n\nWithout knowing something about `a` and `b` there isn't much we can say...",frontmatter:{layout:"center"},index:7,start:66,end:80},filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/02-motivation.md",notesHTML:"",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:m1,meta:{layout:"center",srcSequence:"./slides/02-motivation.md",slide:{raw:`---
layout: center
---

# Welcome to TypeScript

## TypeScript extends the JavaScript grammar to support type definitions

<br />

\`\`\`ts twoslash
function sum(a: number, b: number) {
    return a + b
}
\`\`\`

Now the TS compiler knows that \`a\` and \`b\` are numbers and can safely check that \`+\` is valid between numbers.

\`\`\`ts twoslash
// @errors: 2345
function sum(a: number, b: number) {
    return a + b
}
// ---cut---
sum(2, 3)
sum(2, "not good")
\`\`\`

It can even check call sites notifying us about wrong function invocations.
`,title:"Welcome to TypeScript",level:1,content:`# Welcome to TypeScript

## TypeScript extends the JavaScript grammar to support type definitions

<br />

\`\`\`ts twoslash
function sum(a: number, b: number) {
    return a + b
}
\`\`\`

Now the TS compiler knows that \`a\` and \`b\` are numbers and can safely check that \`+\` is valid between numbers.

\`\`\`ts twoslash
// @errors: 2345
function sum(a: number, b: number) {
    return a + b
}
// ---cut---
sum(2, 3)
sum(2, "not good")
\`\`\`

It can even check call sites notifying us about wrong function invocations.`,frontmatter:{layout:"center",srcSequence:"./slides/02-motivation.md"},index:9,start:80,end:110,source:{filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/02-motivation.md",raw:`---
layout: center
---

# Welcome to TypeScript

## TypeScript extends the JavaScript grammar to support type definitions

<br />

\`\`\`ts twoslash
function sum(a: number, b: number) {
    return a + b
}
\`\`\`

Now the TS compiler knows that \`a\` and \`b\` are numbers and can safely check that \`+\` is valid between numbers.

\`\`\`ts twoslash
// @errors: 2345
function sum(a: number, b: number) {
    return a + b
}
// ---cut---
sum(2, 3)
sum(2, "not good")
\`\`\`

It can even check call sites notifying us about wrong function invocations.
`,title:"Welcome to TypeScript",level:1,content:`# Welcome to TypeScript

## TypeScript extends the JavaScript grammar to support type definitions

<br />

\`\`\`ts twoslash
function sum(a: number, b: number) {
    return a + b
}
\`\`\`

Now the TS compiler knows that \`a\` and \`b\` are numbers and can safely check that \`+\` is valid between numbers.

\`\`\`ts twoslash
// @errors: 2345
function sum(a: number, b: number) {
    return a + b
}
// ---cut---
sum(2, 3)
sum(2, "not good")
\`\`\`

It can even check call sites notifying us about wrong function invocations.`,frontmatter:{layout:"center"},index:8,start:80,end:110},filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/02-motivation.md",notesHTML:"",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:A1,meta:{layout:"center",srcSequence:"./slides/02-motivation.md",slide:{raw:`---
layout: center
---

# How Expressive is TypeScript's Type-System?

## Amazing to say, a lot. One of the most expressive.

Namely TypeScript has:

- Primitive types (string, number, symbol, object, record, etc)
- Literal types (string literals, number literals)
- Template literal types (literals intertwined with types)
- Union types (A | B)
- Intersection types (A & B)
- Conditional types (if P then X else Y)
- Generic types, with variance
`,title:"How Expressive is TypeScript's Type-System?",level:1,content:`# How Expressive is TypeScript's Type-System?

## Amazing to say, a lot. One of the most expressive.

Namely TypeScript has:

- Primitive types (string, number, symbol, object, record, etc)
- Literal types (string literals, number literals)
- Template literal types (literals intertwined with types)
- Union types (A | B)
- Intersection types (A & B)
- Conditional types (if P then X else Y)
- Generic types, with variance`,frontmatter:{layout:"center",srcSequence:"./slides/02-motivation.md"},index:10,start:110,end:128,source:{filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/02-motivation.md",raw:`---
layout: center
---

# How Expressive is TypeScript's Type-System?

## Amazing to say, a lot. One of the most expressive.

Namely TypeScript has:

- Primitive types (string, number, symbol, object, record, etc)
- Literal types (string literals, number literals)
- Template literal types (literals intertwined with types)
- Union types (A | B)
- Intersection types (A & B)
- Conditional types (if P then X else Y)
- Generic types, with variance
`,title:"How Expressive is TypeScript's Type-System?",level:1,content:`# How Expressive is TypeScript's Type-System?

## Amazing to say, a lot. One of the most expressive.

Namely TypeScript has:

- Primitive types (string, number, symbol, object, record, etc)
- Literal types (string literals, number literals)
- Template literal types (literals intertwined with types)
- Union types (A | B)
- Intersection types (A & B)
- Conditional types (if P then X else Y)
- Generic types, with variance`,frontmatter:{layout:"center"},index:9,start:110,end:128},filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/02-motivation.md",notesHTML:"",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:_1,meta:{layout:"center",srcSequence:"./slides/02-motivation.md",slide:{raw:`---
layout: center
---

# A powerful example, ADTs

\`\`\`ts twoslash
interface Failure<out E> {
    readonly _tag: "Failure"
    readonly failure: E
}

interface Success<out A> {
    readonly _tag: "Success"
    readonly success: A
}

type Result<E, A> = Failure<E> | Success<A>

const success = <A>(a: A): Result<never, A> => ({ _tag: "Success", success: a })
const failure = <E>(e: E): Result<E, never> => ({ _tag: "Failure", failure: e })
\`\`\`
`,title:"A powerful example, ADTs",level:1,content:`# A powerful example, ADTs

\`\`\`ts twoslash
interface Failure<out E> {
    readonly _tag: "Failure"
    readonly failure: E
}

interface Success<out A> {
    readonly _tag: "Success"
    readonly success: A
}

type Result<E, A> = Failure<E> | Success<A>

const success = <A>(a: A): Result<never, A> => ({ _tag: "Success", success: a })
const failure = <E>(e: E): Result<E, never> => ({ _tag: "Failure", failure: e })
\`\`\``,frontmatter:{layout:"center",srcSequence:"./slides/02-motivation.md"},index:11,start:128,end:151,source:{filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/02-motivation.md",raw:`---
layout: center
---

# A powerful example, ADTs

\`\`\`ts twoslash
interface Failure<out E> {
    readonly _tag: "Failure"
    readonly failure: E
}

interface Success<out A> {
    readonly _tag: "Success"
    readonly success: A
}

type Result<E, A> = Failure<E> | Success<A>

const success = <A>(a: A): Result<never, A> => ({ _tag: "Success", success: a })
const failure = <E>(e: E): Result<E, never> => ({ _tag: "Failure", failure: e })
\`\`\`
`,title:"A powerful example, ADTs",level:1,content:`# A powerful example, ADTs

\`\`\`ts twoslash
interface Failure<out E> {
    readonly _tag: "Failure"
    readonly failure: E
}

interface Success<out A> {
    readonly _tag: "Success"
    readonly success: A
}

type Result<E, A> = Failure<E> | Success<A>

const success = <A>(a: A): Result<never, A> => ({ _tag: "Success", success: a })
const failure = <E>(e: E): Result<E, never> => ({ _tag: "Failure", failure: e })
\`\`\``,frontmatter:{layout:"center"},index:10,start:128,end:151},filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/02-motivation.md",notesHTML:"",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:w1,meta:{layout:"center",srcSequence:"./slides/02-motivation.md",slide:{raw:`---
layout: center
---

# Using ADTs

\`\`\`ts twoslash
interface Failure<out E> {
    readonly _tag: "Failure"
    readonly failure: E
}

interface Success<out A> {
    readonly _tag: "Success"
    readonly success: A
}

type Result<E, A> = Failure<E> | Success<A>

const success = <A>(a: A): Result<never, A> => ({ _tag: "Success", success: a })
const failure = <E>(e: E): Result<E, never> => ({ _tag: "Failure", failure: e })

// ---cut---

const mapResult = <E, A, B>(result: Result<E, A>, f: (a: A) => B): Result<E, B> => {
    switch(result._tag) {
        case "Success": {
            return success(f(result.success))
        }
        case "Failure": {
            return failure(result.failure)
        }
    }
}

const program = mapResult(success("hello"), (s) => \`\${s} world\`)
\`\`\`
`,title:"Using ADTs",level:1,content:`# Using ADTs

\`\`\`ts twoslash
interface Failure<out E> {
    readonly _tag: "Failure"
    readonly failure: E
}

interface Success<out A> {
    readonly _tag: "Success"
    readonly success: A
}

type Result<E, A> = Failure<E> | Success<A>

const success = <A>(a: A): Result<never, A> => ({ _tag: "Success", success: a })
const failure = <E>(e: E): Result<E, never> => ({ _tag: "Failure", failure: e })

// ---cut---

const mapResult = <E, A, B>(result: Result<E, A>, f: (a: A) => B): Result<E, B> => {
    switch(result._tag) {
        case "Success": {
            return success(f(result.success))
        }
        case "Failure": {
            return failure(result.failure)
        }
    }
}

const program = mapResult(success("hello"), (s) => \`\${s} world\`)
\`\`\``,frontmatter:{layout:"center",srcSequence:"./slides/02-motivation.md"},index:12,start:151,end:189,source:{filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/02-motivation.md",raw:`---
layout: center
---

# Using ADTs

\`\`\`ts twoslash
interface Failure<out E> {
    readonly _tag: "Failure"
    readonly failure: E
}

interface Success<out A> {
    readonly _tag: "Success"
    readonly success: A
}

type Result<E, A> = Failure<E> | Success<A>

const success = <A>(a: A): Result<never, A> => ({ _tag: "Success", success: a })
const failure = <E>(e: E): Result<E, never> => ({ _tag: "Failure", failure: e })

// ---cut---

const mapResult = <E, A, B>(result: Result<E, A>, f: (a: A) => B): Result<E, B> => {
    switch(result._tag) {
        case "Success": {
            return success(f(result.success))
        }
        case "Failure": {
            return failure(result.failure)
        }
    }
}

const program = mapResult(success("hello"), (s) => \`\${s} world\`)
\`\`\`
`,title:"Using ADTs",level:1,content:`# Using ADTs

\`\`\`ts twoslash
interface Failure<out E> {
    readonly _tag: "Failure"
    readonly failure: E
}

interface Success<out A> {
    readonly _tag: "Success"
    readonly success: A
}

type Result<E, A> = Failure<E> | Success<A>

const success = <A>(a: A): Result<never, A> => ({ _tag: "Success", success: a })
const failure = <E>(e: E): Result<E, never> => ({ _tag: "Failure", failure: e })

// ---cut---

const mapResult = <E, A, B>(result: Result<E, A>, f: (a: A) => B): Result<E, B> => {
    switch(result._tag) {
        case "Success": {
            return success(f(result.success))
        }
        case "Failure": {
            return failure(result.failure)
        }
    }
}

const program = mapResult(success("hello"), (s) => \`\${s} world\`)
\`\`\``,frontmatter:{layout:"center"},index:11,start:151,end:189},filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/02-motivation.md",notesHTML:"",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:S1,meta:{layout:"center",srcSequence:"./slides/02-motivation.md",slide:{raw:`---
layout: center
---

# Exhaustive Matching

\`\`\`ts twoslash
// @errors: 2345
interface Failure<out E> {
    readonly _tag: "Failure"
    readonly failure: E
}

interface Success<out A> {
    readonly _tag: "Success"
    readonly success: A
}

type Result<E, A> = Failure<E> | Success<A>

const success = <A>(a: A): Result<never, A> => ({ _tag: "Success", success: a })
const failure = <E>(e: E): Result<E, never> => ({ _tag: "Failure", failure: e })

// ---cut---

const absurd = (_: never): never => {
    throw new Error("Bug!")
}

const mapResult = <E, A, B>(result: Result<E, A>, f: (a: A) => B): Result<E, B> => {
    switch(result._tag) {
        case "Success": {
            return success(f(result.success))
        }
        default: {
            return absurd(result)
        }
    }
}
\`\`\`
`,title:"Exhaustive Matching",level:1,content:`# Exhaustive Matching

\`\`\`ts twoslash
// @errors: 2345
interface Failure<out E> {
    readonly _tag: "Failure"
    readonly failure: E
}

interface Success<out A> {
    readonly _tag: "Success"
    readonly success: A
}

type Result<E, A> = Failure<E> | Success<A>

const success = <A>(a: A): Result<never, A> => ({ _tag: "Success", success: a })
const failure = <E>(e: E): Result<E, never> => ({ _tag: "Failure", failure: e })

// ---cut---

const absurd = (_: never): never => {
    throw new Error("Bug!")
}

const mapResult = <E, A, B>(result: Result<E, A>, f: (a: A) => B): Result<E, B> => {
    switch(result._tag) {
        case "Success": {
            return success(f(result.success))
        }
        default: {
            return absurd(result)
        }
    }
}
\`\`\``,frontmatter:{layout:"center",srcSequence:"./slides/02-motivation.md"},index:13,start:189,end:230,source:{filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/02-motivation.md",raw:`---
layout: center
---

# Exhaustive Matching

\`\`\`ts twoslash
// @errors: 2345
interface Failure<out E> {
    readonly _tag: "Failure"
    readonly failure: E
}

interface Success<out A> {
    readonly _tag: "Success"
    readonly success: A
}

type Result<E, A> = Failure<E> | Success<A>

const success = <A>(a: A): Result<never, A> => ({ _tag: "Success", success: a })
const failure = <E>(e: E): Result<E, never> => ({ _tag: "Failure", failure: e })

// ---cut---

const absurd = (_: never): never => {
    throw new Error("Bug!")
}

const mapResult = <E, A, B>(result: Result<E, A>, f: (a: A) => B): Result<E, B> => {
    switch(result._tag) {
        case "Success": {
            return success(f(result.success))
        }
        default: {
            return absurd(result)
        }
    }
}
\`\`\`
`,title:"Exhaustive Matching",level:1,content:`# Exhaustive Matching

\`\`\`ts twoslash
// @errors: 2345
interface Failure<out E> {
    readonly _tag: "Failure"
    readonly failure: E
}

interface Success<out A> {
    readonly _tag: "Success"
    readonly success: A
}

type Result<E, A> = Failure<E> | Success<A>

const success = <A>(a: A): Result<never, A> => ({ _tag: "Success", success: a })
const failure = <E>(e: E): Result<E, never> => ({ _tag: "Failure", failure: e })

// ---cut---

const absurd = (_: never): never => {
    throw new Error("Bug!")
}

const mapResult = <E, A, B>(result: Result<E, A>, f: (a: A) => B): Result<E, B> => {
    switch(result._tag) {
        case "Success": {
            return success(f(result.success))
        }
        default: {
            return absurd(result)
        }
    }
}
\`\`\``,frontmatter:{layout:"center"},index:12,start:189,end:230},filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/02-motivation.md",notesHTML:"",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:P1,meta:{layout:"center",srcSequence:"./slides/02-motivation.md",slide:{raw:`---
layout: center
---

# Pipeable APIs

\`\`\`ts twoslash
interface Failure<out E> {
    readonly _tag: "Failure"
    readonly failure: E
}

interface Success<out A> {
    readonly _tag: "Success"
    readonly success: A
}

type Result<E, A> = Failure<E> | Success<A>

const success = <A>(a: A): Result<never, A> => ({ _tag: "Success", success: a })
const failure = <E>(e: E): Result<E, never> => ({ _tag: "Failure", failure: e })

// ---cut---

declare function pipe<A, B, C, D>(a: A, ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D): D
declare function pipe<A, B, C>(a: A, ab: (a: A) => B, bc: (b: B) => C): C
declare function pipe<A, B>(a: A, ab: (a: A) => B): B
declare function pipe<A>(a: A): A

const mapResult = <A, B>(f: (a: A) => B) => <E>(result: Result<E, A>): Result<E, B> => {
    switch(result._tag) {
        case "Success": {
            return success(f(result.success))
        }
        case "Failure": {
            return failure(result.failure)
        }
    }
}

const program = pipe(
    success("hello"),
    mapResult((s) => \`\${s} world\`),
    mapResult((s) => \`\${s} nice!\`),
    mapResult((s) => s.length)
)
\`\`\`
`,title:"Pipeable APIs",level:1,content:`# Pipeable APIs

\`\`\`ts twoslash
interface Failure<out E> {
    readonly _tag: "Failure"
    readonly failure: E
}

interface Success<out A> {
    readonly _tag: "Success"
    readonly success: A
}

type Result<E, A> = Failure<E> | Success<A>

const success = <A>(a: A): Result<never, A> => ({ _tag: "Success", success: a })
const failure = <E>(e: E): Result<E, never> => ({ _tag: "Failure", failure: e })

// ---cut---

declare function pipe<A, B, C, D>(a: A, ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D): D
declare function pipe<A, B, C>(a: A, ab: (a: A) => B, bc: (b: B) => C): C
declare function pipe<A, B>(a: A, ab: (a: A) => B): B
declare function pipe<A>(a: A): A

const mapResult = <A, B>(f: (a: A) => B) => <E>(result: Result<E, A>): Result<E, B> => {
    switch(result._tag) {
        case "Success": {
            return success(f(result.success))
        }
        case "Failure": {
            return failure(result.failure)
        }
    }
}

const program = pipe(
    success("hello"),
    mapResult((s) => \`\${s} world\`),
    mapResult((s) => \`\${s} nice!\`),
    mapResult((s) => s.length)
)
\`\`\``,frontmatter:{layout:"center",srcSequence:"./slides/02-motivation.md"},index:14,start:230,end:278,source:{filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/02-motivation.md",raw:`---
layout: center
---

# Pipeable APIs

\`\`\`ts twoslash
interface Failure<out E> {
    readonly _tag: "Failure"
    readonly failure: E
}

interface Success<out A> {
    readonly _tag: "Success"
    readonly success: A
}

type Result<E, A> = Failure<E> | Success<A>

const success = <A>(a: A): Result<never, A> => ({ _tag: "Success", success: a })
const failure = <E>(e: E): Result<E, never> => ({ _tag: "Failure", failure: e })

// ---cut---

declare function pipe<A, B, C, D>(a: A, ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D): D
declare function pipe<A, B, C>(a: A, ab: (a: A) => B, bc: (b: B) => C): C
declare function pipe<A, B>(a: A, ab: (a: A) => B): B
declare function pipe<A>(a: A): A

const mapResult = <A, B>(f: (a: A) => B) => <E>(result: Result<E, A>): Result<E, B> => {
    switch(result._tag) {
        case "Success": {
            return success(f(result.success))
        }
        case "Failure": {
            return failure(result.failure)
        }
    }
}

const program = pipe(
    success("hello"),
    mapResult((s) => \`\${s} world\`),
    mapResult((s) => \`\${s} nice!\`),
    mapResult((s) => s.length)
)
\`\`\`
`,title:"Pipeable APIs",level:1,content:`# Pipeable APIs

\`\`\`ts twoslash
interface Failure<out E> {
    readonly _tag: "Failure"
    readonly failure: E
}

interface Success<out A> {
    readonly _tag: "Success"
    readonly success: A
}

type Result<E, A> = Failure<E> | Success<A>

const success = <A>(a: A): Result<never, A> => ({ _tag: "Success", success: a })
const failure = <E>(e: E): Result<E, never> => ({ _tag: "Failure", failure: e })

// ---cut---

declare function pipe<A, B, C, D>(a: A, ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D): D
declare function pipe<A, B, C>(a: A, ab: (a: A) => B, bc: (b: B) => C): C
declare function pipe<A, B>(a: A, ab: (a: A) => B): B
declare function pipe<A>(a: A): A

const mapResult = <A, B>(f: (a: A) => B) => <E>(result: Result<E, A>): Result<E, B> => {
    switch(result._tag) {
        case "Success": {
            return success(f(result.success))
        }
        case "Failure": {
            return failure(result.failure)
        }
    }
}

const program = pipe(
    success("hello"),
    mapResult((s) => \`\${s} world\`),
    mapResult((s) => \`\${s} nice!\`),
    mapResult((s) => s.length)
)
\`\`\``,frontmatter:{layout:"center"},index:13,start:230,end:278},filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/02-motivation.md",notesHTML:"",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:O1,meta:{layout:"center",title:"Taking TypeScript to it's limits (and beyond)",srcSequence:"./slides/03-intro-to-effect.md",slide:{raw:null,title:"Taking TypeScript to it's limits (and beyond)",level:1,content:"# Taking TypeScript to it's limits (and beyond)",frontmatter:{layout:"center",title:"Taking TypeScript to it's limits (and beyond)",srcSequence:"./slides/03-intro-to-effect.md"},index:15,start:0,end:6,source:{filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/03-intro-to-effect.md",raw:`---
layout: center
---

# Taking TypeScript to it's limits (and beyond)
`,title:"Taking TypeScript to it's limits (and beyond)",level:1,content:"# Taking TypeScript to it's limits (and beyond)",frontmatter:{layout:"center",title:"Taking TypeScript to it's limits (and beyond)"},index:0,start:0,end:6},inline:{raw:`---
src: ./slides/03-intro-to-effect.md
---
`,content:"",frontmatter:{},index:2,start:11,end:15},filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/03-intro-to-effect.md",notesHTML:"",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:L1,meta:{layout:"center",srcSequence:"./slides/03-intro-to-effect.md",slide:{raw:`---
layout: center
---

# Welcome to Effect

## A fiber-based, structured concurrency primitive for general purpose programming with type safe requirements and errors
`,title:"Welcome to Effect",level:1,content:`# Welcome to Effect

## A fiber-based, structured concurrency primitive for general purpose programming with type safe requirements and errors`,frontmatter:{layout:"center",srcSequence:"./slides/03-intro-to-effect.md"},index:16,start:6,end:14,source:{filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/03-intro-to-effect.md",raw:`---
layout: center
---

# Welcome to Effect

## A fiber-based, structured concurrency primitive for general purpose programming with type safe requirements and errors
`,title:"Welcome to Effect",level:1,content:`# Welcome to Effect

## A fiber-based, structured concurrency primitive for general purpose programming with type safe requirements and errors`,frontmatter:{layout:"center"},index:1,start:6,end:14},filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/03-intro-to-effect.md",notesHTML:"",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:j1,meta:{layout:"full",srcSequence:"./slides/03-intro-to-effect.md",slide:{raw:`---
layout: full
---

# Creating a \`fetch\` wrapper

\`\`\`ts twoslash
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />

// ---cut---
import * as Eff from "@effect/core/io/Effect";

export class FetchError {
  readonly _tag = "FetchError";
  constructor(readonly error: unknown) {}
}

export const request = (input: RequestInfo | URL, init?: RequestInit | undefined) =>
  Eff.tryCatchPromise(
    () => fetch(input, init),
    (error) => new FetchError(error)
  );

export class JsonBodyError {
  readonly _tag = "JsonBodyError";
  constructor(readonly error: unknown) {}
}

export const jsonBody = (input: Response) =>
  Eff.tryCatchPromise(
    (): Promise<unknown> => input.json(),
    (error) => new JsonBodyError(error)
  );
\`\`\`
`,title:"Creating a `fetch` wrapper",level:1,content:`# Creating a \`fetch\` wrapper

\`\`\`ts twoslash
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />

// ---cut---
import * as Eff from "@effect/core/io/Effect";

export class FetchError {
  readonly _tag = "FetchError";
  constructor(readonly error: unknown) {}
}

export const request = (input: RequestInfo | URL, init?: RequestInit | undefined) =>
  Eff.tryCatchPromise(
    () => fetch(input, init),
    (error) => new FetchError(error)
  );

export class JsonBodyError {
  readonly _tag = "JsonBodyError";
  constructor(readonly error: unknown) {}
}

export const jsonBody = (input: Response) =>
  Eff.tryCatchPromise(
    (): Promise<unknown> => input.json(),
    (error) => new JsonBodyError(error)
  );
\`\`\``,frontmatter:{layout:"full",srcSequence:"./slides/03-intro-to-effect.md"},index:17,start:14,end:50,source:{filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/03-intro-to-effect.md",raw:`---
layout: full
---

# Creating a \`fetch\` wrapper

\`\`\`ts twoslash
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />

// ---cut---
import * as Eff from "@effect/core/io/Effect";

export class FetchError {
  readonly _tag = "FetchError";
  constructor(readonly error: unknown) {}
}

export const request = (input: RequestInfo | URL, init?: RequestInit | undefined) =>
  Eff.tryCatchPromise(
    () => fetch(input, init),
    (error) => new FetchError(error)
  );

export class JsonBodyError {
  readonly _tag = "JsonBodyError";
  constructor(readonly error: unknown) {}
}

export const jsonBody = (input: Response) =>
  Eff.tryCatchPromise(
    (): Promise<unknown> => input.json(),
    (error) => new JsonBodyError(error)
  );
\`\`\`
`,title:"Creating a `fetch` wrapper",level:1,content:`# Creating a \`fetch\` wrapper

\`\`\`ts twoslash
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />

// ---cut---
import * as Eff from "@effect/core/io/Effect";

export class FetchError {
  readonly _tag = "FetchError";
  constructor(readonly error: unknown) {}
}

export const request = (input: RequestInfo | URL, init?: RequestInit | undefined) =>
  Eff.tryCatchPromise(
    () => fetch(input, init),
    (error) => new FetchError(error)
  );

export class JsonBodyError {
  readonly _tag = "JsonBodyError";
  constructor(readonly error: unknown) {}
}

export const jsonBody = (input: Response) =>
  Eff.tryCatchPromise(
    (): Promise<unknown> => input.json(),
    (error) => new JsonBodyError(error)
  );
\`\`\``,frontmatter:{layout:"full"},index:2,start:14,end:50},filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/03-intro-to-effect.md",notesHTML:"",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:z1,meta:{layout:"full",srcSequence:"./slides/03-intro-to-effect.md",slide:{raw:`---
layout: full
---

# Using the \`fetch\` wrapper

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: index.ts
// ---cut---
import { Effect, Http, pipe } from "./common";

export const getTodo = (id: number) =>
  pipe(
    Http.request(\`https://jsonplaceholder.typicode.com/todos/\${id}\`),
    Effect.flatMap(Http.jsonBody)
  );

export const getTodos = (ids: number[]) => 
  Effect.collectAll(ids.map(getTodo)) 
\`\`\`

Looking at the types inferred from TS we can explicitely see \`getTodo\` may returns: 

\`\`\`ts
Effect<never, FetchError | JsonBodyError, Chunk<unknown>>
\`\`\`

Which can be read as: **one operation that has no requirements, and when performed may fail for either a FetchError or for a JsonBodyError and when succesful returns unknown**
`,title:"Using the `fetch` wrapper",level:1,content:`# Using the \`fetch\` wrapper

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: index.ts
// ---cut---
import { Effect, Http, pipe } from "./common";

export const getTodo = (id: number) =>
  pipe(
    Http.request(\`https://jsonplaceholder.typicode.com/todos/\${id}\`),
    Effect.flatMap(Http.jsonBody)
  );

export const getTodos = (ids: number[]) => 
  Effect.collectAll(ids.map(getTodo)) 
\`\`\`

Looking at the types inferred from TS we can explicitely see \`getTodo\` may returns: 

\`\`\`ts
Effect<never, FetchError | JsonBodyError, Chunk<unknown>>
\`\`\`

Which can be read as: **one operation that has no requirements, and when performed may fail for either a FetchError or for a JsonBodyError and when succesful returns unknown**`,frontmatter:{layout:"full",srcSequence:"./slides/03-intro-to-effect.md"},index:18,start:50,end:84,source:{filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/03-intro-to-effect.md",raw:`---
layout: full
---

# Using the \`fetch\` wrapper

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: index.ts
// ---cut---
import { Effect, Http, pipe } from "./common";

export const getTodo = (id: number) =>
  pipe(
    Http.request(\`https://jsonplaceholder.typicode.com/todos/\${id}\`),
    Effect.flatMap(Http.jsonBody)
  );

export const getTodos = (ids: number[]) => 
  Effect.collectAll(ids.map(getTodo)) 
\`\`\`

Looking at the types inferred from TS we can explicitely see \`getTodo\` may returns: 

\`\`\`ts
Effect<never, FetchError | JsonBodyError, Chunk<unknown>>
\`\`\`

Which can be read as: **one operation that has no requirements, and when performed may fail for either a FetchError or for a JsonBodyError and when succesful returns unknown**
`,title:"Using the `fetch` wrapper",level:1,content:`# Using the \`fetch\` wrapper

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: index.ts
// ---cut---
import { Effect, Http, pipe } from "./common";

export const getTodo = (id: number) =>
  pipe(
    Http.request(\`https://jsonplaceholder.typicode.com/todos/\${id}\`),
    Effect.flatMap(Http.jsonBody)
  );

export const getTodos = (ids: number[]) => 
  Effect.collectAll(ids.map(getTodo)) 
\`\`\`

Looking at the types inferred from TS we can explicitely see \`getTodo\` may returns: 

\`\`\`ts
Effect<never, FetchError | JsonBodyError, Chunk<unknown>>
\`\`\`

Which can be read as: **one operation that has no requirements, and when performed may fail for either a FetchError or for a JsonBodyError and when succesful returns unknown**`,frontmatter:{layout:"full"},index:3,start:50,end:84},filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/03-intro-to-effect.md",notesHTML:"",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:Q1,meta:{layout:"full",srcSequence:"./slides/03-intro-to-effect.md",slide:{raw:`---
layout: full
---

# Composing further

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: index.ts
import { Effect, Http, pipe } from "./common";

// ---cut---
export interface Todo { id: number }

export class ParseTodoError { readonly _tag = "ParseTodoError" }

export declare const parseTodo: (u: unknown) => Effect.Effect<never, ParseTodoError, Todo>

export const getTodo = (id: number) =>
  pipe(
    Http.request(\`https://jsonplaceholder.typicode.com/todos/\${id}\`),
    Effect.flatMap(Http.jsonBody),
    Effect.flatMap(parseTodo),
  );

export const getTodos = (ids: number[]) => 
  Effect.collectAll(ids.map(getTodo)) 
\`\`\`

Looking at the types inferred from TS we can explicitely see \`getTodo\` may returns: 

\`\`\`ts
Effect<never, FetchError | JsonBodyError | ParseTodoError, Chunk<Todo>>
\`\`\`
`,title:"Composing further",level:1,content:`# Composing further

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: index.ts
import { Effect, Http, pipe } from "./common";

// ---cut---
export interface Todo { id: number }

export class ParseTodoError { readonly _tag = "ParseTodoError" }

export declare const parseTodo: (u: unknown) => Effect.Effect<never, ParseTodoError, Todo>

export const getTodo = (id: number) =>
  pipe(
    Http.request(\`https://jsonplaceholder.typicode.com/todos/\${id}\`),
    Effect.flatMap(Http.jsonBody),
    Effect.flatMap(parseTodo),
  );

export const getTodos = (ids: number[]) => 
  Effect.collectAll(ids.map(getTodo)) 
\`\`\`

Looking at the types inferred from TS we can explicitely see \`getTodo\` may returns: 

\`\`\`ts
Effect<never, FetchError | JsonBodyError | ParseTodoError, Chunk<Todo>>
\`\`\``,frontmatter:{layout:"full",srcSequence:"./slides/03-intro-to-effect.md"},index:19,start:84,end:123,source:{filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/03-intro-to-effect.md",raw:`---
layout: full
---

# Composing further

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: index.ts
import { Effect, Http, pipe } from "./common";

// ---cut---
export interface Todo { id: number }

export class ParseTodoError { readonly _tag = "ParseTodoError" }

export declare const parseTodo: (u: unknown) => Effect.Effect<never, ParseTodoError, Todo>

export const getTodo = (id: number) =>
  pipe(
    Http.request(\`https://jsonplaceholder.typicode.com/todos/\${id}\`),
    Effect.flatMap(Http.jsonBody),
    Effect.flatMap(parseTodo),
  );

export const getTodos = (ids: number[]) => 
  Effect.collectAll(ids.map(getTodo)) 
\`\`\`

Looking at the types inferred from TS we can explicitely see \`getTodo\` may returns: 

\`\`\`ts
Effect<never, FetchError | JsonBodyError | ParseTodoError, Chunk<Todo>>
\`\`\`
`,title:"Composing further",level:1,content:`# Composing further

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: index.ts
import { Effect, Http, pipe } from "./common";

// ---cut---
export interface Todo { id: number }

export class ParseTodoError { readonly _tag = "ParseTodoError" }

export declare const parseTodo: (u: unknown) => Effect.Effect<never, ParseTodoError, Todo>

export const getTodo = (id: number) =>
  pipe(
    Http.request(\`https://jsonplaceholder.typicode.com/todos/\${id}\`),
    Effect.flatMap(Http.jsonBody),
    Effect.flatMap(parseTodo),
  );

export const getTodos = (ids: number[]) => 
  Effect.collectAll(ids.map(getTodo)) 
\`\`\`

Looking at the types inferred from TS we can explicitely see \`getTodo\` may returns: 

\`\`\`ts
Effect<never, FetchError | JsonBodyError | ParseTodoError, Chunk<Todo>>
\`\`\``,frontmatter:{layout:"full"},index:4,start:84,end:123},filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/03-intro-to-effect.md",notesHTML:"",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:tB,meta:{layout:"full",srcSequence:"./slides/03-intro-to-effect.md",slide:{raw:`---
layout: full
---

# Handling Errors

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: index.ts
import { Effect, Http, pipe, Chunk } from "./common";

// ---cut---
export interface Todo { id: number }

export class ParseTodoError { readonly _tag = "ParseTodoError" }

export declare const parseTodo: (u: unknown) => Effect.Effect<never, ParseTodoError, Todo>

export const getTodo = (id: number) =>
  pipe(
    Http.request(\`https://jsonplaceholder.typicode.com/todos/\${id}\`),
    Effect.flatMap(Http.jsonBody),
    Effect.flatMap(parseTodo),
  );

export const getTodos = (ids: number[]) => 
  Effect.collectAll(ids.map(getTodo))

export const getTodosWhenPossible = 
  (ids: number[]): Effect.Effect<never, Http.JsonBodyError | ParseTodoError, Chunk.Chunk<Todo>> => 
    pipe(
      ids, 
      getTodos,
      Effect.catchTag("FetchError", () => Effect.succeed(Chunk.empty()))
    )
\`\`\`
`,title:"Handling Errors",level:1,content:`# Handling Errors

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: index.ts
import { Effect, Http, pipe, Chunk } from "./common";

// ---cut---
export interface Todo { id: number }

export class ParseTodoError { readonly _tag = "ParseTodoError" }

export declare const parseTodo: (u: unknown) => Effect.Effect<never, ParseTodoError, Todo>

export const getTodo = (id: number) =>
  pipe(
    Http.request(\`https://jsonplaceholder.typicode.com/todos/\${id}\`),
    Effect.flatMap(Http.jsonBody),
    Effect.flatMap(parseTodo),
  );

export const getTodos = (ids: number[]) => 
  Effect.collectAll(ids.map(getTodo))

export const getTodosWhenPossible = 
  (ids: number[]): Effect.Effect<never, Http.JsonBodyError | ParseTodoError, Chunk.Chunk<Todo>> => 
    pipe(
      ids, 
      getTodos,
      Effect.catchTag("FetchError", () => Effect.succeed(Chunk.empty()))
    )
\`\`\``,frontmatter:{layout:"full",srcSequence:"./slides/03-intro-to-effect.md"},index:20,start:123,end:164,source:{filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/03-intro-to-effect.md",raw:`---
layout: full
---

# Handling Errors

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: index.ts
import { Effect, Http, pipe, Chunk } from "./common";

// ---cut---
export interface Todo { id: number }

export class ParseTodoError { readonly _tag = "ParseTodoError" }

export declare const parseTodo: (u: unknown) => Effect.Effect<never, ParseTodoError, Todo>

export const getTodo = (id: number) =>
  pipe(
    Http.request(\`https://jsonplaceholder.typicode.com/todos/\${id}\`),
    Effect.flatMap(Http.jsonBody),
    Effect.flatMap(parseTodo),
  );

export const getTodos = (ids: number[]) => 
  Effect.collectAll(ids.map(getTodo))

export const getTodosWhenPossible = 
  (ids: number[]): Effect.Effect<never, Http.JsonBodyError | ParseTodoError, Chunk.Chunk<Todo>> => 
    pipe(
      ids, 
      getTodos,
      Effect.catchTag("FetchError", () => Effect.succeed(Chunk.empty()))
    )
\`\`\`
`,title:"Handling Errors",level:1,content:`# Handling Errors

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: index.ts
import { Effect, Http, pipe, Chunk } from "./common";

// ---cut---
export interface Todo { id: number }

export class ParseTodoError { readonly _tag = "ParseTodoError" }

export declare const parseTodo: (u: unknown) => Effect.Effect<never, ParseTodoError, Todo>

export const getTodo = (id: number) =>
  pipe(
    Http.request(\`https://jsonplaceholder.typicode.com/todos/\${id}\`),
    Effect.flatMap(Http.jsonBody),
    Effect.flatMap(parseTodo),
  );

export const getTodos = (ids: number[]) => 
  Effect.collectAll(ids.map(getTodo))

export const getTodosWhenPossible = 
  (ids: number[]): Effect.Effect<never, Http.JsonBodyError | ParseTodoError, Chunk.Chunk<Todo>> => 
    pipe(
      ids, 
      getTodos,
      Effect.catchTag("FetchError", () => Effect.succeed(Chunk.empty()))
    )
\`\`\``,frontmatter:{layout:"full"},index:5,start:123,end:164},filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/03-intro-to-effect.md",notesHTML:"",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:rB,meta:{layout:"full",srcSequence:"./slides/03-intro-to-effect.md",slide:{raw:`---
layout: full
---

# Resilience on failures

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: index.ts
// ---cut---
import { Schedule, Effect, Http, Duration, pipe } from "./common";

export type HttpError = Http.JsonBodyError | Http.FetchError

export const retrySchedule = pipe(
  Schedule.exponential(Duration.millis(10), 2.0),
  Schedule.either(Schedule.spaced(Duration.seconds(1))),
  Schedule.compose(Schedule.elapsed),
  Schedule.whileOutput(Duration.lowerThenOrEqual(Duration.seconds(30))),
  Schedule.whileInput((error: HttpError) => error._tag !== "JsonBodyError")
);

export const getTodo = (id: number) =>
  pipe(
    Http.request(\`https://jsonplaceholder.typicode.com/todos/\${id}\`),
    Effect.flatMap(Http.jsonBody),
    Effect.retry(retrySchedule)
  );
\`\`\`

Note how the default schedule is composed with \`Schedule.whileInput\` in order to refine its behaviour.
`,title:"Resilience on failures",level:1,content:`# Resilience on failures

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: index.ts
// ---cut---
import { Schedule, Effect, Http, Duration, pipe } from "./common";

export type HttpError = Http.JsonBodyError | Http.FetchError

export const retrySchedule = pipe(
  Schedule.exponential(Duration.millis(10), 2.0),
  Schedule.either(Schedule.spaced(Duration.seconds(1))),
  Schedule.compose(Schedule.elapsed),
  Schedule.whileOutput(Duration.lowerThenOrEqual(Duration.seconds(30))),
  Schedule.whileInput((error: HttpError) => error._tag !== "JsonBodyError")
);

export const getTodo = (id: number) =>
  pipe(
    Http.request(\`https://jsonplaceholder.typicode.com/todos/\${id}\`),
    Effect.flatMap(Http.jsonBody),
    Effect.retry(retrySchedule)
  );
\`\`\`

Note how the default schedule is composed with \`Schedule.whileInput\` in order to refine its behaviour.`,frontmatter:{layout:"full",srcSequence:"./slides/03-intro-to-effect.md"},index:21,start:164,end:200,source:{filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/03-intro-to-effect.md",raw:`---
layout: full
---

# Resilience on failures

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: index.ts
// ---cut---
import { Schedule, Effect, Http, Duration, pipe } from "./common";

export type HttpError = Http.JsonBodyError | Http.FetchError

export const retrySchedule = pipe(
  Schedule.exponential(Duration.millis(10), 2.0),
  Schedule.either(Schedule.spaced(Duration.seconds(1))),
  Schedule.compose(Schedule.elapsed),
  Schedule.whileOutput(Duration.lowerThenOrEqual(Duration.seconds(30))),
  Schedule.whileInput((error: HttpError) => error._tag !== "JsonBodyError")
);

export const getTodo = (id: number) =>
  pipe(
    Http.request(\`https://jsonplaceholder.typicode.com/todos/\${id}\`),
    Effect.flatMap(Http.jsonBody),
    Effect.retry(retrySchedule)
  );
\`\`\`

Note how the default schedule is composed with \`Schedule.whileInput\` in order to refine its behaviour.
`,title:"Resilience on failures",level:1,content:`# Resilience on failures

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: index.ts
// ---cut---
import { Schedule, Effect, Http, Duration, pipe } from "./common";

export type HttpError = Http.JsonBodyError | Http.FetchError

export const retrySchedule = pipe(
  Schedule.exponential(Duration.millis(10), 2.0),
  Schedule.either(Schedule.spaced(Duration.seconds(1))),
  Schedule.compose(Schedule.elapsed),
  Schedule.whileOutput(Duration.lowerThenOrEqual(Duration.seconds(30))),
  Schedule.whileInput((error: HttpError) => error._tag !== "JsonBodyError")
);

export const getTodo = (id: number) =>
  pipe(
    Http.request(\`https://jsonplaceholder.typicode.com/todos/\${id}\`),
    Effect.flatMap(Http.jsonBody),
    Effect.retry(retrySchedule)
  );
\`\`\`

Note how the default schedule is composed with \`Schedule.whileInput\` in order to refine its behaviour.`,frontmatter:{layout:"full"},index:6,start:164,end:200},filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/03-intro-to-effect.md",notesHTML:"",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:iB,meta:{layout:"full",srcSequence:"./slides/03-intro-to-effect.md",slide:{raw:`---
layout: full
---

# Failure escalation

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: index.ts
import { Schedule, Effect, Http, Duration, pipe } from "./common";
// ---cut---

export type HttpError = Http.JsonBodyError | Http.FetchError

export const retrySchedule = pipe(
  Schedule.exponential(Duration.millis(10), 2.0),
  Schedule.either(Schedule.spaced(Duration.seconds(1))),
  Schedule.compose(Schedule.elapsed),
  Schedule.whileOutput(Duration.lowerThenOrEqual(Duration.seconds(30))),
  Schedule.whileInput((error: HttpError) => error._tag !== "JsonBodyError")
);

export const getTodo = (id: number) =>
  pipe(
    Http.request(\`https://jsonplaceholder.typicode.com/todos/\${id}\`),
    Effect.flatMap(Http.jsonBody),
    Effect.retry(retrySchedule),
    Effect.orDie
  );
\`\`\`

We can see by looking at the types that the error type has now disappeared. You can recover from ALL failures including defects by using functions like \`Effect.catchAllCause\` or turn the error into a full \`Cause<E>\` using \`Effect.sandbox\`.
`,title:"Failure escalation",level:1,content:`# Failure escalation

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: index.ts
import { Schedule, Effect, Http, Duration, pipe } from "./common";
// ---cut---

export type HttpError = Http.JsonBodyError | Http.FetchError

export const retrySchedule = pipe(
  Schedule.exponential(Duration.millis(10), 2.0),
  Schedule.either(Schedule.spaced(Duration.seconds(1))),
  Schedule.compose(Schedule.elapsed),
  Schedule.whileOutput(Duration.lowerThenOrEqual(Duration.seconds(30))),
  Schedule.whileInput((error: HttpError) => error._tag !== "JsonBodyError")
);

export const getTodo = (id: number) =>
  pipe(
    Http.request(\`https://jsonplaceholder.typicode.com/todos/\${id}\`),
    Effect.flatMap(Http.jsonBody),
    Effect.retry(retrySchedule),
    Effect.orDie
  );
\`\`\`

We can see by looking at the types that the error type has now disappeared. You can recover from ALL failures including defects by using functions like \`Effect.catchAllCause\` or turn the error into a full \`Cause<E>\` using \`Effect.sandbox\`.`,frontmatter:{layout:"full",srcSequence:"./slides/03-intro-to-effect.md"},index:22,start:200,end:237,source:{filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/03-intro-to-effect.md",raw:`---
layout: full
---

# Failure escalation

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: index.ts
import { Schedule, Effect, Http, Duration, pipe } from "./common";
// ---cut---

export type HttpError = Http.JsonBodyError | Http.FetchError

export const retrySchedule = pipe(
  Schedule.exponential(Duration.millis(10), 2.0),
  Schedule.either(Schedule.spaced(Duration.seconds(1))),
  Schedule.compose(Schedule.elapsed),
  Schedule.whileOutput(Duration.lowerThenOrEqual(Duration.seconds(30))),
  Schedule.whileInput((error: HttpError) => error._tag !== "JsonBodyError")
);

export const getTodo = (id: number) =>
  pipe(
    Http.request(\`https://jsonplaceholder.typicode.com/todos/\${id}\`),
    Effect.flatMap(Http.jsonBody),
    Effect.retry(retrySchedule),
    Effect.orDie
  );
\`\`\`

We can see by looking at the types that the error type has now disappeared. You can recover from ALL failures including defects by using functions like \`Effect.catchAllCause\` or turn the error into a full \`Cause<E>\` using \`Effect.sandbox\`.
`,title:"Failure escalation",level:1,content:`# Failure escalation

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: index.ts
import { Schedule, Effect, Http, Duration, pipe } from "./common";
// ---cut---

export type HttpError = Http.JsonBodyError | Http.FetchError

export const retrySchedule = pipe(
  Schedule.exponential(Duration.millis(10), 2.0),
  Schedule.either(Schedule.spaced(Duration.seconds(1))),
  Schedule.compose(Schedule.elapsed),
  Schedule.whileOutput(Duration.lowerThenOrEqual(Duration.seconds(30))),
  Schedule.whileInput((error: HttpError) => error._tag !== "JsonBodyError")
);

export const getTodo = (id: number) =>
  pipe(
    Http.request(\`https://jsonplaceholder.typicode.com/todos/\${id}\`),
    Effect.flatMap(Http.jsonBody),
    Effect.retry(retrySchedule),
    Effect.orDie
  );
\`\`\`

We can see by looking at the types that the error type has now disappeared. You can recover from ALL failures including defects by using functions like \`Effect.catchAllCause\` or turn the error into a full \`Cause<E>\` using \`Effect.sandbox\`.`,frontmatter:{layout:"full"},index:7,start:200,end:237},filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/03-intro-to-effect.md",notesHTML:"",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:yB,meta:{layout:"full",srcSequence:"./slides/03-intro-to-effect.md",slide:{raw:`---
layout: full
---

# Interruption

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export class FetchError {
  readonly _tag = "FetchError";
  constructor(readonly error: unknown) {}
}
// ---cut---
import * as Effect from "@effect/core/io/Effect";
import * as Either from "@tsplus/stdlib/data/Either";

export const request = (input: RequestInfo | URL, init?: RequestInit | undefined) =>
  Effect.asyncInterrupt<never, FetchError, Response>((resume) => {
    const controller = new AbortController();
    fetch(input, { ...(init ?? {}), signal: controller.signal }).then((response) => {
      resume(Effect.succeed(response));
    }).catch((error) => {
      resume(Effect.failSync(() => new FetchError(error)));
    });
    return Either.left(Effect.sync(() => {
      controller.abort();
    }));
  });
\`\`\`

Effects can describe interruptible computations with a very rich semantic, in fact differently from most of the frameworks that deal with cancelation in Effect cancellation is itself an effect and is, by nature, asyncronious.

That's it interruption is propagated through program execution without explicitly passing signals or controllers.
`,title:"Interruption",level:1,content:`# Interruption

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export class FetchError {
  readonly _tag = "FetchError";
  constructor(readonly error: unknown) {}
}
// ---cut---
import * as Effect from "@effect/core/io/Effect";
import * as Either from "@tsplus/stdlib/data/Either";

export const request = (input: RequestInfo | URL, init?: RequestInit | undefined) =>
  Effect.asyncInterrupt<never, FetchError, Response>((resume) => {
    const controller = new AbortController();
    fetch(input, { ...(init ?? {}), signal: controller.signal }).then((response) => {
      resume(Effect.succeed(response));
    }).catch((error) => {
      resume(Effect.failSync(() => new FetchError(error)));
    });
    return Either.left(Effect.sync(() => {
      controller.abort();
    }));
  });
\`\`\`

Effects can describe interruptible computations with a very rich semantic, in fact differently from most of the frameworks that deal with cancelation in Effect cancellation is itself an effect and is, by nature, asyncronious.

That's it interruption is propagated through program execution without explicitly passing signals or controllers.`,frontmatter:{layout:"full",srcSequence:"./slides/03-intro-to-effect.md"},index:23,start:237,end:274,source:{filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/03-intro-to-effect.md",raw:`---
layout: full
---

# Interruption

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export class FetchError {
  readonly _tag = "FetchError";
  constructor(readonly error: unknown) {}
}
// ---cut---
import * as Effect from "@effect/core/io/Effect";
import * as Either from "@tsplus/stdlib/data/Either";

export const request = (input: RequestInfo | URL, init?: RequestInit | undefined) =>
  Effect.asyncInterrupt<never, FetchError, Response>((resume) => {
    const controller = new AbortController();
    fetch(input, { ...(init ?? {}), signal: controller.signal }).then((response) => {
      resume(Effect.succeed(response));
    }).catch((error) => {
      resume(Effect.failSync(() => new FetchError(error)));
    });
    return Either.left(Effect.sync(() => {
      controller.abort();
    }));
  });
\`\`\`

Effects can describe interruptible computations with a very rich semantic, in fact differently from most of the frameworks that deal with cancelation in Effect cancellation is itself an effect and is, by nature, asyncronious.

That's it interruption is propagated through program execution without explicitly passing signals or controllers.
`,title:"Interruption",level:1,content:`# Interruption

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export class FetchError {
  readonly _tag = "FetchError";
  constructor(readonly error: unknown) {}
}
// ---cut---
import * as Effect from "@effect/core/io/Effect";
import * as Either from "@tsplus/stdlib/data/Either";

export const request = (input: RequestInfo | URL, init?: RequestInit | undefined) =>
  Effect.asyncInterrupt<never, FetchError, Response>((resume) => {
    const controller = new AbortController();
    fetch(input, { ...(init ?? {}), signal: controller.signal }).then((response) => {
      resume(Effect.succeed(response));
    }).catch((error) => {
      resume(Effect.failSync(() => new FetchError(error)));
    });
    return Either.left(Effect.sync(() => {
      controller.abort();
    }));
  });
\`\`\`

Effects can describe interruptible computations with a very rich semantic, in fact differently from most of the frameworks that deal with cancelation in Effect cancellation is itself an effect and is, by nature, asyncronious.

That's it interruption is propagated through program execution without explicitly passing signals or controllers.`,frontmatter:{layout:"full"},index:8,start:237,end:274},filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/03-intro-to-effect.md",notesHTML:"",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:BB,meta:{layout:"full",srcSequence:"./slides/03-intro-to-effect.md",slide:{raw:`---
layout: full
---

# Controlled concurrency

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/06-lib";
// @module: esnext
// @filename: http.ts
export * from "./examples/effect/04-http";
// @filename: todos.ts
import { Effect, pipe } from "./common";
import * as Http from "./http";
export interface Todo { id: number }
export class ParseTodoError { readonly _tag = "ParseTodoError" }
export declare const getTodo: (id: number) => Effect.Effect<never, Http.FetchError | Http.JsonBodyError | ParseTodoError, Todo>
// ---cut---
export const getTodos = (ids: number[]) => Effect.collectAllPar(ids.map(getTodo));
\`\`\`

Controlling how many operations are allowed to run in parallel is done by using the \`Effect.withParallelism\` aspect.

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/06-lib";
// @module: esnext
// @filename: http.ts
export * from "./examples/effect/04-http";
// @filename: todos.ts
import { Effect, pipe } from "./common";
import * as Http from "./http";
export interface Todo { id: number }
export class ParseTodoError { readonly _tag = "ParseTodoError" }
export declare const getTodo: (id: number) => Effect.Effect<never, Http.FetchError | Http.JsonBodyError | ParseTodoError, Todo>
// ---cut---
export const getTodos = (ids: number[]) => pipe(
  Effect.collectAllPar(ids.map(getTodo)),
  Effect.withParallelism(15)
);
\`\`\`

Or leave it to the caller:


\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/06-lib";
// @module: esnext
// @filename: http.ts
export * from "./examples/effect/04-http";
// @filename: todos.ts
import { Effect, pipe } from "./common";
import * as Http from "./http";
export interface Todo { id: number }
export class ParseTodoError { readonly _tag = "ParseTodoError" }
export declare const getTodo: (id: number) => Effect.Effect<never, Http.FetchError | Http.JsonBodyError | ParseTodoError, Todo>
// ---cut---
export const getTodos = (ids: number[]) => Effect.collectAllPar(ids.map(getTodo));

export const program = pipe(getTodos([0, 1, 2, 3]), Effect.withParallelism(3))
\`\`\`
`,title:"Controlled concurrency",level:1,content:`# Controlled concurrency

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/06-lib";
// @module: esnext
// @filename: http.ts
export * from "./examples/effect/04-http";
// @filename: todos.ts
import { Effect, pipe } from "./common";
import * as Http from "./http";
export interface Todo { id: number }
export class ParseTodoError { readonly _tag = "ParseTodoError" }
export declare const getTodo: (id: number) => Effect.Effect<never, Http.FetchError | Http.JsonBodyError | ParseTodoError, Todo>
// ---cut---
export const getTodos = (ids: number[]) => Effect.collectAllPar(ids.map(getTodo));
\`\`\`

Controlling how many operations are allowed to run in parallel is done by using the \`Effect.withParallelism\` aspect.

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/06-lib";
// @module: esnext
// @filename: http.ts
export * from "./examples/effect/04-http";
// @filename: todos.ts
import { Effect, pipe } from "./common";
import * as Http from "./http";
export interface Todo { id: number }
export class ParseTodoError { readonly _tag = "ParseTodoError" }
export declare const getTodo: (id: number) => Effect.Effect<never, Http.FetchError | Http.JsonBodyError | ParseTodoError, Todo>
// ---cut---
export const getTodos = (ids: number[]) => pipe(
  Effect.collectAllPar(ids.map(getTodo)),
  Effect.withParallelism(15)
);
\`\`\`

Or leave it to the caller:


\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/06-lib";
// @module: esnext
// @filename: http.ts
export * from "./examples/effect/04-http";
// @filename: todos.ts
import { Effect, pipe } from "./common";
import * as Http from "./http";
export interface Todo { id: number }
export class ParseTodoError { readonly _tag = "ParseTodoError" }
export declare const getTodo: (id: number) => Effect.Effect<never, Http.FetchError | Http.JsonBodyError | ParseTodoError, Todo>
// ---cut---
export const getTodos = (ids: number[]) => Effect.collectAllPar(ids.map(getTodo));

export const program = pipe(getTodos([0, 1, 2, 3]), Effect.withParallelism(3))
\`\`\``,frontmatter:{layout:"full",srcSequence:"./slides/03-intro-to-effect.md"},index:24,start:274,end:347,source:{filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/03-intro-to-effect.md",raw:`---
layout: full
---

# Controlled concurrency

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/06-lib";
// @module: esnext
// @filename: http.ts
export * from "./examples/effect/04-http";
// @filename: todos.ts
import { Effect, pipe } from "./common";
import * as Http from "./http";
export interface Todo { id: number }
export class ParseTodoError { readonly _tag = "ParseTodoError" }
export declare const getTodo: (id: number) => Effect.Effect<never, Http.FetchError | Http.JsonBodyError | ParseTodoError, Todo>
// ---cut---
export const getTodos = (ids: number[]) => Effect.collectAllPar(ids.map(getTodo));
\`\`\`

Controlling how many operations are allowed to run in parallel is done by using the \`Effect.withParallelism\` aspect.

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/06-lib";
// @module: esnext
// @filename: http.ts
export * from "./examples/effect/04-http";
// @filename: todos.ts
import { Effect, pipe } from "./common";
import * as Http from "./http";
export interface Todo { id: number }
export class ParseTodoError { readonly _tag = "ParseTodoError" }
export declare const getTodo: (id: number) => Effect.Effect<never, Http.FetchError | Http.JsonBodyError | ParseTodoError, Todo>
// ---cut---
export const getTodos = (ids: number[]) => pipe(
  Effect.collectAllPar(ids.map(getTodo)),
  Effect.withParallelism(15)
);
\`\`\`

Or leave it to the caller:


\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/06-lib";
// @module: esnext
// @filename: http.ts
export * from "./examples/effect/04-http";
// @filename: todos.ts
import { Effect, pipe } from "./common";
import * as Http from "./http";
export interface Todo { id: number }
export class ParseTodoError { readonly _tag = "ParseTodoError" }
export declare const getTodo: (id: number) => Effect.Effect<never, Http.FetchError | Http.JsonBodyError | ParseTodoError, Todo>
// ---cut---
export const getTodos = (ids: number[]) => Effect.collectAllPar(ids.map(getTodo));

export const program = pipe(getTodos([0, 1, 2, 3]), Effect.withParallelism(3))
\`\`\`
`,title:"Controlled concurrency",level:1,content:`# Controlled concurrency

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/06-lib";
// @module: esnext
// @filename: http.ts
export * from "./examples/effect/04-http";
// @filename: todos.ts
import { Effect, pipe } from "./common";
import * as Http from "./http";
export interface Todo { id: number }
export class ParseTodoError { readonly _tag = "ParseTodoError" }
export declare const getTodo: (id: number) => Effect.Effect<never, Http.FetchError | Http.JsonBodyError | ParseTodoError, Todo>
// ---cut---
export const getTodos = (ids: number[]) => Effect.collectAllPar(ids.map(getTodo));
\`\`\`

Controlling how many operations are allowed to run in parallel is done by using the \`Effect.withParallelism\` aspect.

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/06-lib";
// @module: esnext
// @filename: http.ts
export * from "./examples/effect/04-http";
// @filename: todos.ts
import { Effect, pipe } from "./common";
import * as Http from "./http";
export interface Todo { id: number }
export class ParseTodoError { readonly _tag = "ParseTodoError" }
export declare const getTodo: (id: number) => Effect.Effect<never, Http.FetchError | Http.JsonBodyError | ParseTodoError, Todo>
// ---cut---
export const getTodos = (ids: number[]) => pipe(
  Effect.collectAllPar(ids.map(getTodo)),
  Effect.withParallelism(15)
);
\`\`\`

Or leave it to the caller:


\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/06-lib";
// @module: esnext
// @filename: http.ts
export * from "./examples/effect/04-http";
// @filename: todos.ts
import { Effect, pipe } from "./common";
import * as Http from "./http";
export interface Todo { id: number }
export class ParseTodoError { readonly _tag = "ParseTodoError" }
export declare const getTodo: (id: number) => Effect.Effect<never, Http.FetchError | Http.JsonBodyError | ParseTodoError, Todo>
// ---cut---
export const getTodos = (ids: number[]) => Effect.collectAllPar(ids.map(getTodo));

export const program = pipe(getTodos([0, 1, 2, 3]), Effect.withParallelism(3))
\`\`\``,frontmatter:{layout:"full"},index:9,start:274,end:347},filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/03-intro-to-effect.md",notesHTML:"",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:wB,meta:{layout:"full",srcSequence:"./slides/03-intro-to-effect.md",slide:{raw:`---
layout: full
---

# Metrics

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: todos.ts
export * from "./examples/effect/03-todos";
// @filename: index.ts
// ---cut---
import { Effect, pipe } from "./common";
import * as Metrics from "@effect/core/io/Metrics"
import * as Todos from "./todos";

export const GetTodoCount = Metrics.counter("GetTodoCount")

export const getTodo = (id: number) => pipe(
  Todos.getTodo(id),
  Effect.tap(() => Metrics.increment(GetTodoCount))
)
\`\`\`
Defining prometheus-compatible metrics for your program becomes painless, Metrics are native to Effect and we have our own representations for them that is independent of third parties, multiple exporters will be provided as ecosystem packages. As we can see below metrics are also composable!

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: todos.ts
export * from "./examples/effect/03-todos";
// @filename: index.ts
import { Effect, pipe } from "./common";
import * as Metrics from "@effect/core/io/Metrics"
import * as Todos from "./todos";

// ---cut---
export const GetTodoCount = pipe(Metrics.counter("GetTodoCount"), Metrics.fromConst(() => 1))

export const getTodo = (id: number) => GetTodoCount(Todos.getTodo(id))
\`\`\`
`,title:"Metrics",level:1,content:`# Metrics

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: todos.ts
export * from "./examples/effect/03-todos";
// @filename: index.ts
// ---cut---
import { Effect, pipe } from "./common";
import * as Metrics from "@effect/core/io/Metrics"
import * as Todos from "./todos";

export const GetTodoCount = Metrics.counter("GetTodoCount")

export const getTodo = (id: number) => pipe(
  Todos.getTodo(id),
  Effect.tap(() => Metrics.increment(GetTodoCount))
)
\`\`\`
Defining prometheus-compatible metrics for your program becomes painless, Metrics are native to Effect and we have our own representations for them that is independent of third parties, multiple exporters will be provided as ecosystem packages. As we can see below metrics are also composable!

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: todos.ts
export * from "./examples/effect/03-todos";
// @filename: index.ts
import { Effect, pipe } from "./common";
import * as Metrics from "@effect/core/io/Metrics"
import * as Todos from "./todos";

// ---cut---
export const GetTodoCount = pipe(Metrics.counter("GetTodoCount"), Metrics.fromConst(() => 1))

export const getTodo = (id: number) => GetTodoCount(Todos.getTodo(id))
\`\`\``,frontmatter:{layout:"full",srcSequence:"./slides/03-intro-to-effect.md"},index:25,start:347,end:395,source:{filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/03-intro-to-effect.md",raw:`---
layout: full
---

# Metrics

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: todos.ts
export * from "./examples/effect/03-todos";
// @filename: index.ts
// ---cut---
import { Effect, pipe } from "./common";
import * as Metrics from "@effect/core/io/Metrics"
import * as Todos from "./todos";

export const GetTodoCount = Metrics.counter("GetTodoCount")

export const getTodo = (id: number) => pipe(
  Todos.getTodo(id),
  Effect.tap(() => Metrics.increment(GetTodoCount))
)
\`\`\`
Defining prometheus-compatible metrics for your program becomes painless, Metrics are native to Effect and we have our own representations for them that is independent of third parties, multiple exporters will be provided as ecosystem packages. As we can see below metrics are also composable!

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: todos.ts
export * from "./examples/effect/03-todos";
// @filename: index.ts
import { Effect, pipe } from "./common";
import * as Metrics from "@effect/core/io/Metrics"
import * as Todos from "./todos";

// ---cut---
export const GetTodoCount = pipe(Metrics.counter("GetTodoCount"), Metrics.fromConst(() => 1))

export const getTodo = (id: number) => GetTodoCount(Todos.getTodo(id))
\`\`\`
`,title:"Metrics",level:1,content:`# Metrics

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: todos.ts
export * from "./examples/effect/03-todos";
// @filename: index.ts
// ---cut---
import { Effect, pipe } from "./common";
import * as Metrics from "@effect/core/io/Metrics"
import * as Todos from "./todos";

export const GetTodoCount = Metrics.counter("GetTodoCount")

export const getTodo = (id: number) => pipe(
  Todos.getTodo(id),
  Effect.tap(() => Metrics.increment(GetTodoCount))
)
\`\`\`
Defining prometheus-compatible metrics for your program becomes painless, Metrics are native to Effect and we have our own representations for them that is independent of third parties, multiple exporters will be provided as ecosystem packages. As we can see below metrics are also composable!

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: todos.ts
export * from "./examples/effect/03-todos";
// @filename: index.ts
import { Effect, pipe } from "./common";
import * as Metrics from "@effect/core/io/Metrics"
import * as Todos from "./todos";

// ---cut---
export const GetTodoCount = pipe(Metrics.counter("GetTodoCount"), Metrics.fromConst(() => 1))

export const getTodo = (id: number) => GetTodoCount(Todos.getTodo(id))
\`\`\``,frontmatter:{layout:"full"},index:10,start:347,end:395},filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/03-intro-to-effect.md",notesHTML:"",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:PB,meta:{layout:"full",srcSequence:"./slides/03-intro-to-effect.md",slide:{raw:`---
layout: full
---

# Tracing
##
We are currently integrating with OpenTelemetry via the ecosystem package \`@effect/otel\` but we are working on a native representation of spans and tracing following the same principles applied for \`Metrics\`

\`\`\`ts
import { Effect, pipe } from "./common";
import * as Todos from "./todos";

export const getTodo = (id: number) => pipe(
  Todos.getTodo(id),
  Effect.withSpanAttribute("id", id),
  Effect.withSpan("GetTodo")
)

export const getTodos = (ids: number[]) => pipe(
  Todos.getTodos(ids),
  Effect.withSpanAttribute("ids", ids),
  Effect.withSpan("GetTodos")
)
\`\`\`

Note: This isn't yet ready but we are actively working on it! for the time being you'll find \`withSpan\` in the otel ecosystem package.
`,title:"Tracing",level:1,content:`# Tracing
##
We are currently integrating with OpenTelemetry via the ecosystem package \`@effect/otel\` but we are working on a native representation of spans and tracing following the same principles applied for \`Metrics\`

\`\`\`ts
import { Effect, pipe } from "./common";
import * as Todos from "./todos";

export const getTodo = (id: number) => pipe(
  Todos.getTodo(id),
  Effect.withSpanAttribute("id", id),
  Effect.withSpan("GetTodo")
)

export const getTodos = (ids: number[]) => pipe(
  Todos.getTodos(ids),
  Effect.withSpanAttribute("ids", ids),
  Effect.withSpan("GetTodos")
)
\`\`\`

Note: This isn't yet ready but we are actively working on it! for the time being you'll find \`withSpan\` in the otel ecosystem package.`,frontmatter:{layout:"full",srcSequence:"./slides/03-intro-to-effect.md"},index:26,start:395,end:422,source:{filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/03-intro-to-effect.md",raw:`---
layout: full
---

# Tracing
##
We are currently integrating with OpenTelemetry via the ecosystem package \`@effect/otel\` but we are working on a native representation of spans and tracing following the same principles applied for \`Metrics\`

\`\`\`ts
import { Effect, pipe } from "./common";
import * as Todos from "./todos";

export const getTodo = (id: number) => pipe(
  Todos.getTodo(id),
  Effect.withSpanAttribute("id", id),
  Effect.withSpan("GetTodo")
)

export const getTodos = (ids: number[]) => pipe(
  Todos.getTodos(ids),
  Effect.withSpanAttribute("ids", ids),
  Effect.withSpan("GetTodos")
)
\`\`\`

Note: This isn't yet ready but we are actively working on it! for the time being you'll find \`withSpan\` in the otel ecosystem package.
`,title:"Tracing",level:1,content:`# Tracing
##
We are currently integrating with OpenTelemetry via the ecosystem package \`@effect/otel\` but we are working on a native representation of spans and tracing following the same principles applied for \`Metrics\`

\`\`\`ts
import { Effect, pipe } from "./common";
import * as Todos from "./todos";

export const getTodo = (id: number) => pipe(
  Todos.getTodo(id),
  Effect.withSpanAttribute("id", id),
  Effect.withSpan("GetTodo")
)

export const getTodos = (ids: number[]) => pipe(
  Todos.getTodos(ids),
  Effect.withSpanAttribute("ids", ids),
  Effect.withSpan("GetTodos")
)
\`\`\`

Note: This isn't yet ready but we are actively working on it! for the time being you'll find \`withSpan\` in the otel ecosystem package.`,frontmatter:{layout:"full"},index:11,start:395,end:422},filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/03-intro-to-effect.md",notesHTML:"",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:FB,meta:{layout:"center",srcSequence:"./slides/03-intro-to-effect.md",slide:{raw:`---
layout: center
---

# Tracing, A real life view

<img src="https://i.imgur.com/lR5lC5C.png" style="width: 600px" />
`,title:"Tracing, A real life view",level:1,content:`# Tracing, A real life view

<img src="https://i.imgur.com/lR5lC5C.png" style="width: 600px" />`,frontmatter:{layout:"center",srcSequence:"./slides/03-intro-to-effect.md"},index:27,start:422,end:430,source:{filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/03-intro-to-effect.md",raw:`---
layout: center
---

# Tracing, A real life view

<img src="https://i.imgur.com/lR5lC5C.png" style="width: 600px" />
`,title:"Tracing, A real life view",level:1,content:`# Tracing, A real life view

<img src="https://i.imgur.com/lR5lC5C.png" style="width: 600px" />`,frontmatter:{layout:"center"},index:12,start:422,end:430},filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/03-intro-to-effect.md",notesHTML:"",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:NB,meta:{layout:"full",srcSequence:"./slides/03-intro-to-effect.md",slide:{raw:`---
layout: full
---

# Dependency Injection
##
Effect has native support for Context propagation, think of it like the React context on type-safe steroids.

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: todos.ts
export interface Todo { id: number }
// ---cut---
import { Effect, Chunk } from "./common";
import { Tag } from "@tsplus/stdlib/service/Tag";

export interface TodoRepo {
  readonly getTodo: (id: number) => Effect.Effect<never, never, Todo>
  readonly getTodos: (ids: number[]) => Effect.Effect<never, never, Chunk.Chunk<Todo>>
}

export const TodoRepo = Tag<TodoRepo>()

export const program = Effect.gen(function* ($) {
  const Todos = yield* $(TodoRepo)
  const todos = yield* $(Todos.getTodos([1, 2, 3, 4]))

  for (const todo of todos) {
    yield* $(Effect.log(\`todo: \${JSON.stringify(todo)}\`))
  }
  
  return Chunk.size(todos)
})
\`\`\`
`,title:"Dependency Injection",level:1,content:`# Dependency Injection
##
Effect has native support for Context propagation, think of it like the React context on type-safe steroids.

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: todos.ts
export interface Todo { id: number }
// ---cut---
import { Effect, Chunk } from "./common";
import { Tag } from "@tsplus/stdlib/service/Tag";

export interface TodoRepo {
  readonly getTodo: (id: number) => Effect.Effect<never, never, Todo>
  readonly getTodos: (ids: number[]) => Effect.Effect<never, never, Chunk.Chunk<Todo>>
}

export const TodoRepo = Tag<TodoRepo>()

export const program = Effect.gen(function* ($) {
  const Todos = yield* $(TodoRepo)
  const todos = yield* $(Todos.getTodos([1, 2, 3, 4]))

  for (const todo of todos) {
    yield* $(Effect.log(\`todo: \${JSON.stringify(todo)}\`))
  }
  
  return Chunk.size(todos)
})
\`\`\``,frontmatter:{layout:"full",srcSequence:"./slides/03-intro-to-effect.md"},index:28,start:430,end:469,source:{filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/03-intro-to-effect.md",raw:`---
layout: full
---

# Dependency Injection
##
Effect has native support for Context propagation, think of it like the React context on type-safe steroids.

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: todos.ts
export interface Todo { id: number }
// ---cut---
import { Effect, Chunk } from "./common";
import { Tag } from "@tsplus/stdlib/service/Tag";

export interface TodoRepo {
  readonly getTodo: (id: number) => Effect.Effect<never, never, Todo>
  readonly getTodos: (ids: number[]) => Effect.Effect<never, never, Chunk.Chunk<Todo>>
}

export const TodoRepo = Tag<TodoRepo>()

export const program = Effect.gen(function* ($) {
  const Todos = yield* $(TodoRepo)
  const todos = yield* $(Todos.getTodos([1, 2, 3, 4]))

  for (const todo of todos) {
    yield* $(Effect.log(\`todo: \${JSON.stringify(todo)}\`))
  }
  
  return Chunk.size(todos)
})
\`\`\`
`,title:"Dependency Injection",level:1,content:`# Dependency Injection
##
Effect has native support for Context propagation, think of it like the React context on type-safe steroids.

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: todos.ts
export interface Todo { id: number }
// ---cut---
import { Effect, Chunk } from "./common";
import { Tag } from "@tsplus/stdlib/service/Tag";

export interface TodoRepo {
  readonly getTodo: (id: number) => Effect.Effect<never, never, Todo>
  readonly getTodos: (ids: number[]) => Effect.Effect<never, never, Chunk.Chunk<Todo>>
}

export const TodoRepo = Tag<TodoRepo>()

export const program = Effect.gen(function* ($) {
  const Todos = yield* $(TodoRepo)
  const todos = yield* $(Todos.getTodos([1, 2, 3, 4]))

  for (const todo of todos) {
    yield* $(Effect.log(\`todo: \${JSON.stringify(todo)}\`))
  }
  
  return Chunk.size(todos)
})
\`\`\``,frontmatter:{layout:"full"},index:13,start:430,end:469},filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/03-intro-to-effect.md",notesHTML:"",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:VB,meta:{layout:"full",srcSequence:"./slides/03-intro-to-effect.md",slide:{raw:`---
layout: full
---

# Dependency Injection
##
Running a program requires all dependencies to be provided into the Context, a smart way of constructing dependency trees of potentially interdependent services is by using \`Layer\`

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: todos-impl.ts
export * from "./examples/effect/09-todos-orDie";
// @filename: todos.ts
import { Effect, Chunk, Exit, pipe } from "./common";
import { Tag } from "@tsplus/stdlib/service/Tag";

export interface Todo { id: number }

export interface TodoRepo {
  readonly getTodo: (id: number) => Effect.Effect<never, never, Todo>
  readonly getTodos: (ids: number[]) => Effect.Effect<never, never, Chunk.Chunk<Todo>>
}

export const TodoRepo = Tag<TodoRepo>()

export const program = Effect.gen(function* ($) {
  const Todos = yield* $(TodoRepo)

  const todos = yield* $(Todos.getTodos([1, 2, 3, 4]))

  for (const todo of todos) {
    yield* $(Effect.log(\`todo: \${JSON.stringify(todo)}\`))
  }

  return Chunk.size(todos)
})

import * as Impl from "./todos-impl";

// ---cut---
import * as Layer from "@effect/core/io/Layer"

export const LiveTodoRepo = Layer.fromEffect(
  TodoRepo,
  Effect.sync(() => ({
    getTodo: Impl.getTodo,
    getTodos: Impl.getTodos
  }))
)

export const main = pipe(
  program,
  Effect.provideSomeLayer(LiveTodoRepo)
)

Effect.unsafeRunAsyncWith(main, (exit) => {
  if (Exit.isFailure(exit)) {
    console.error(\`Unexpected failure: \${JSON.stringify(exit.cause)}\`)
  }
})
\`\`\`
`,title:"Dependency Injection",level:1,content:`# Dependency Injection
##
Running a program requires all dependencies to be provided into the Context, a smart way of constructing dependency trees of potentially interdependent services is by using \`Layer\`

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: todos-impl.ts
export * from "./examples/effect/09-todos-orDie";
// @filename: todos.ts
import { Effect, Chunk, Exit, pipe } from "./common";
import { Tag } from "@tsplus/stdlib/service/Tag";

export interface Todo { id: number }

export interface TodoRepo {
  readonly getTodo: (id: number) => Effect.Effect<never, never, Todo>
  readonly getTodos: (ids: number[]) => Effect.Effect<never, never, Chunk.Chunk<Todo>>
}

export const TodoRepo = Tag<TodoRepo>()

export const program = Effect.gen(function* ($) {
  const Todos = yield* $(TodoRepo)

  const todos = yield* $(Todos.getTodos([1, 2, 3, 4]))

  for (const todo of todos) {
    yield* $(Effect.log(\`todo: \${JSON.stringify(todo)}\`))
  }

  return Chunk.size(todos)
})

import * as Impl from "./todos-impl";

// ---cut---
import * as Layer from "@effect/core/io/Layer"

export const LiveTodoRepo = Layer.fromEffect(
  TodoRepo,
  Effect.sync(() => ({
    getTodo: Impl.getTodo,
    getTodos: Impl.getTodos
  }))
)

export const main = pipe(
  program,
  Effect.provideSomeLayer(LiveTodoRepo)
)

Effect.unsafeRunAsyncWith(main, (exit) => {
  if (Exit.isFailure(exit)) {
    console.error(\`Unexpected failure: \${JSON.stringify(exit.cause)}\`)
  }
})
\`\`\``,frontmatter:{layout:"full",srcSequence:"./slides/03-intro-to-effect.md"},index:29,start:469,end:535,source:{filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/03-intro-to-effect.md",raw:`---
layout: full
---

# Dependency Injection
##
Running a program requires all dependencies to be provided into the Context, a smart way of constructing dependency trees of potentially interdependent services is by using \`Layer\`

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: todos-impl.ts
export * from "./examples/effect/09-todos-orDie";
// @filename: todos.ts
import { Effect, Chunk, Exit, pipe } from "./common";
import { Tag } from "@tsplus/stdlib/service/Tag";

export interface Todo { id: number }

export interface TodoRepo {
  readonly getTodo: (id: number) => Effect.Effect<never, never, Todo>
  readonly getTodos: (ids: number[]) => Effect.Effect<never, never, Chunk.Chunk<Todo>>
}

export const TodoRepo = Tag<TodoRepo>()

export const program = Effect.gen(function* ($) {
  const Todos = yield* $(TodoRepo)

  const todos = yield* $(Todos.getTodos([1, 2, 3, 4]))

  for (const todo of todos) {
    yield* $(Effect.log(\`todo: \${JSON.stringify(todo)}\`))
  }

  return Chunk.size(todos)
})

import * as Impl from "./todos-impl";

// ---cut---
import * as Layer from "@effect/core/io/Layer"

export const LiveTodoRepo = Layer.fromEffect(
  TodoRepo,
  Effect.sync(() => ({
    getTodo: Impl.getTodo,
    getTodos: Impl.getTodos
  }))
)

export const main = pipe(
  program,
  Effect.provideSomeLayer(LiveTodoRepo)
)

Effect.unsafeRunAsyncWith(main, (exit) => {
  if (Exit.isFailure(exit)) {
    console.error(\`Unexpected failure: \${JSON.stringify(exit.cause)}\`)
  }
})
\`\`\`
`,title:"Dependency Injection",level:1,content:`# Dependency Injection
##
Running a program requires all dependencies to be provided into the Context, a smart way of constructing dependency trees of potentially interdependent services is by using \`Layer\`

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: todos-impl.ts
export * from "./examples/effect/09-todos-orDie";
// @filename: todos.ts
import { Effect, Chunk, Exit, pipe } from "./common";
import { Tag } from "@tsplus/stdlib/service/Tag";

export interface Todo { id: number }

export interface TodoRepo {
  readonly getTodo: (id: number) => Effect.Effect<never, never, Todo>
  readonly getTodos: (ids: number[]) => Effect.Effect<never, never, Chunk.Chunk<Todo>>
}

export const TodoRepo = Tag<TodoRepo>()

export const program = Effect.gen(function* ($) {
  const Todos = yield* $(TodoRepo)

  const todos = yield* $(Todos.getTodos([1, 2, 3, 4]))

  for (const todo of todos) {
    yield* $(Effect.log(\`todo: \${JSON.stringify(todo)}\`))
  }

  return Chunk.size(todos)
})

import * as Impl from "./todos-impl";

// ---cut---
import * as Layer from "@effect/core/io/Layer"

export const LiveTodoRepo = Layer.fromEffect(
  TodoRepo,
  Effect.sync(() => ({
    getTodo: Impl.getTodo,
    getTodos: Impl.getTodos
  }))
)

export const main = pipe(
  program,
  Effect.provideSomeLayer(LiveTodoRepo)
)

Effect.unsafeRunAsyncWith(main, (exit) => {
  if (Exit.isFailure(exit)) {
    console.error(\`Unexpected failure: \${JSON.stringify(exit.cause)}\`)
  }
})
\`\`\``,frontmatter:{layout:"full"},index:14,start:469,end:535},filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/03-intro-to-effect.md",notesHTML:"",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:GB,meta:{layout:"full",srcSequence:"./slides/03-intro-to-effect.md",slide:{raw:`---
layout: full
---

# Dependency Injection
##
Layers represents modules of your application and they compose very well, you could imagine having a service \`TodoRepo\` which constructors depends on \`Http\` and we have a program that uses both \`TodoRepo | Http\`

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: todos-impl.ts
export * from "./examples/effect/09-todos-orDie";
// @filename: todos.ts
import { Effect, Chunk, Exit, Http as HttpImpl, pipe } from "./common";
import { Tag } from "@tsplus/stdlib/service/Tag";

export interface Todo { id: number }

export interface TodoRepo {
  readonly getTodo: (id: number) => Effect.Effect<never, never, Todo>
  readonly getTodos: (ids: number[]) => Effect.Effect<never, never, Chunk.Chunk<Todo>>
}

export const TodoRepo = Tag<TodoRepo>()

export interface Http {
  readonly request: typeof HttpImpl.request
}

export const Http = Tag<Http>()


import * as Layer from "@effect/core/io/Layer"

// ---cut---
export declare const LiveHttp: Layer.Layer<never, never, Http>
export declare const LiveTodoRepo: Layer.Layer<Http, never, TodoRepo>

export const AppContext = pipe(
  LiveHttp,
  Layer.provideToAndMerge(LiveTodoRepo)
)

export declare const program: Effect.Effect<Http | TodoRepo, never, void>

export const main = pipe(
  program,
  Effect.provideSomeLayer(AppContext)
)

Effect.unsafeRunAsyncWith(main, (exit) => {
  if (Exit.isFailure(exit)) {
    console.error(\`Unexpected failure: \${JSON.stringify(exit.cause)}\`)
  }
})
\`\`\`

`,title:"Dependency Injection",level:1,content:`# Dependency Injection
##
Layers represents modules of your application and they compose very well, you could imagine having a service \`TodoRepo\` which constructors depends on \`Http\` and we have a program that uses both \`TodoRepo | Http\`

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: todos-impl.ts
export * from "./examples/effect/09-todos-orDie";
// @filename: todos.ts
import { Effect, Chunk, Exit, Http as HttpImpl, pipe } from "./common";
import { Tag } from "@tsplus/stdlib/service/Tag";

export interface Todo { id: number }

export interface TodoRepo {
  readonly getTodo: (id: number) => Effect.Effect<never, never, Todo>
  readonly getTodos: (ids: number[]) => Effect.Effect<never, never, Chunk.Chunk<Todo>>
}

export const TodoRepo = Tag<TodoRepo>()

export interface Http {
  readonly request: typeof HttpImpl.request
}

export const Http = Tag<Http>()


import * as Layer from "@effect/core/io/Layer"

// ---cut---
export declare const LiveHttp: Layer.Layer<never, never, Http>
export declare const LiveTodoRepo: Layer.Layer<Http, never, TodoRepo>

export const AppContext = pipe(
  LiveHttp,
  Layer.provideToAndMerge(LiveTodoRepo)
)

export declare const program: Effect.Effect<Http | TodoRepo, never, void>

export const main = pipe(
  program,
  Effect.provideSomeLayer(AppContext)
)

Effect.unsafeRunAsyncWith(main, (exit) => {
  if (Exit.isFailure(exit)) {
    console.error(\`Unexpected failure: \${JSON.stringify(exit.cause)}\`)
  }
})
\`\`\``,frontmatter:{layout:"full",srcSequence:"./slides/03-intro-to-effect.md"},index:30,start:535,end:597,source:{filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/03-intro-to-effect.md",raw:`---
layout: full
---

# Dependency Injection
##
Layers represents modules of your application and they compose very well, you could imagine having a service \`TodoRepo\` which constructors depends on \`Http\` and we have a program that uses both \`TodoRepo | Http\`

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: todos-impl.ts
export * from "./examples/effect/09-todos-orDie";
// @filename: todos.ts
import { Effect, Chunk, Exit, Http as HttpImpl, pipe } from "./common";
import { Tag } from "@tsplus/stdlib/service/Tag";

export interface Todo { id: number }

export interface TodoRepo {
  readonly getTodo: (id: number) => Effect.Effect<never, never, Todo>
  readonly getTodos: (ids: number[]) => Effect.Effect<never, never, Chunk.Chunk<Todo>>
}

export const TodoRepo = Tag<TodoRepo>()

export interface Http {
  readonly request: typeof HttpImpl.request
}

export const Http = Tag<Http>()


import * as Layer from "@effect/core/io/Layer"

// ---cut---
export declare const LiveHttp: Layer.Layer<never, never, Http>
export declare const LiveTodoRepo: Layer.Layer<Http, never, TodoRepo>

export const AppContext = pipe(
  LiveHttp,
  Layer.provideToAndMerge(LiveTodoRepo)
)

export declare const program: Effect.Effect<Http | TodoRepo, never, void>

export const main = pipe(
  program,
  Effect.provideSomeLayer(AppContext)
)

Effect.unsafeRunAsyncWith(main, (exit) => {
  if (Exit.isFailure(exit)) {
    console.error(\`Unexpected failure: \${JSON.stringify(exit.cause)}\`)
  }
})
\`\`\`

`,title:"Dependency Injection",level:1,content:`# Dependency Injection
##
Layers represents modules of your application and they compose very well, you could imagine having a service \`TodoRepo\` which constructors depends on \`Http\` and we have a program that uses both \`TodoRepo | Http\`

\`\`\`ts twoslash
// @module: esnext
// @filename: common.ts
/// <reference path="node_modules/@types/node/index.d.ts" />
/// <reference path="node_modules/@effect/core/index.d.ts" />
export * from "./examples/effect/03-lib";
// @filename: todos-impl.ts
export * from "./examples/effect/09-todos-orDie";
// @filename: todos.ts
import { Effect, Chunk, Exit, Http as HttpImpl, pipe } from "./common";
import { Tag } from "@tsplus/stdlib/service/Tag";

export interface Todo { id: number }

export interface TodoRepo {
  readonly getTodo: (id: number) => Effect.Effect<never, never, Todo>
  readonly getTodos: (ids: number[]) => Effect.Effect<never, never, Chunk.Chunk<Todo>>
}

export const TodoRepo = Tag<TodoRepo>()

export interface Http {
  readonly request: typeof HttpImpl.request
}

export const Http = Tag<Http>()


import * as Layer from "@effect/core/io/Layer"

// ---cut---
export declare const LiveHttp: Layer.Layer<never, never, Http>
export declare const LiveTodoRepo: Layer.Layer<Http, never, TodoRepo>

export const AppContext = pipe(
  LiveHttp,
  Layer.provideToAndMerge(LiveTodoRepo)
)

export declare const program: Effect.Effect<Http | TodoRepo, never, void>

export const main = pipe(
  program,
  Effect.provideSomeLayer(AppContext)
)

Effect.unsafeRunAsyncWith(main, (exit) => {
  if (Exit.isFailure(exit)) {
    console.error(\`Unexpected failure: \${JSON.stringify(exit.cause)}\`)
  }
})
\`\`\``,frontmatter:{layout:"full"},index:15,start:535,end:597},filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/03-intro-to-effect.md",notesHTML:"",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:tD,meta:{layout:"center",srcSequence:"./slides/03-intro-to-effect.md",slide:{raw:`---
layout: center
---

# Recap!
##
we've been only scratching the surface of Effect and a lot of its power hasn't made it to this presentation but we've seen how to deal with:

<v-clicks>

- Errors
- Retries
- Concurrency
- Interruption
- Logging
- Tracing
- Metrics
- Dependencies

</v-clicks>
`,title:"Recap!",level:1,content:`# Recap!
##
we've been only scratching the surface of Effect and a lot of its power hasn't made it to this presentation but we've seen how to deal with:

<v-clicks>

- Errors
- Retries
- Concurrency
- Interruption
- Logging
- Tracing
- Metrics
- Dependencies

</v-clicks>`,frontmatter:{layout:"center",srcSequence:"./slides/03-intro-to-effect.md"},index:31,start:597,end:618,source:{filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/03-intro-to-effect.md",raw:`---
layout: center
---

# Recap!
##
we've been only scratching the surface of Effect and a lot of its power hasn't made it to this presentation but we've seen how to deal with:

<v-clicks>

- Errors
- Retries
- Concurrency
- Interruption
- Logging
- Tracing
- Metrics
- Dependencies

</v-clicks>
`,title:"Recap!",level:1,content:`# Recap!
##
we've been only scratching the surface of Effect and a lot of its power hasn't made it to this presentation but we've seen how to deal with:

<v-clicks>

- Errors
- Retries
- Concurrency
- Interruption
- Logging
- Tracing
- Metrics
- Dependencies

</v-clicks>`,frontmatter:{layout:"center"},index:16,start:597,end:618},filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/03-intro-to-effect.md",notesHTML:"",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:lD,meta:{layout:"full",srcSequence:"./slides/03-intro-to-effect.md",slide:{raw:`---
layout: full
---

# What's in the Box?
##
When looking into Effect you'll find a rich set of modules to deal with much more than what we've seen, just in \`@effect/core\` you'll find:

<v-clicks>

- Effect: Generic Program Definition
- Cause: Representing potentially multiple failure causes of different kinds
- Scope: Safe Resource Management to model things like database connections
- Fiber: Low Level Concurrency Primitives
- Queue: Work-Stealing Concurrent & Backpressured Queues
- Hub: Like a Pub/Sub for Effects
- Layer: Context Construction
- Metrics: Prometheus Compatible Metrics
- Tracing: OpenTelemetry Compatible Tracing

</v-clicks>
`,title:"What's in the Box?",level:1,content:`# What's in the Box?
##
When looking into Effect you'll find a rich set of modules to deal with much more than what we've seen, just in \`@effect/core\` you'll find:

<v-clicks>

- Effect: Generic Program Definition
- Cause: Representing potentially multiple failure causes of different kinds
- Scope: Safe Resource Management to model things like database connections
- Fiber: Low Level Concurrency Primitives
- Queue: Work-Stealing Concurrent & Backpressured Queues
- Hub: Like a Pub/Sub for Effects
- Layer: Context Construction
- Metrics: Prometheus Compatible Metrics
- Tracing: OpenTelemetry Compatible Tracing

</v-clicks>`,frontmatter:{layout:"full",srcSequence:"./slides/03-intro-to-effect.md"},index:32,start:618,end:640,source:{filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/03-intro-to-effect.md",raw:`---
layout: full
---

# What's in the Box?
##
When looking into Effect you'll find a rich set of modules to deal with much more than what we've seen, just in \`@effect/core\` you'll find:

<v-clicks>

- Effect: Generic Program Definition
- Cause: Representing potentially multiple failure causes of different kinds
- Scope: Safe Resource Management to model things like database connections
- Fiber: Low Level Concurrency Primitives
- Queue: Work-Stealing Concurrent & Backpressured Queues
- Hub: Like a Pub/Sub for Effects
- Layer: Context Construction
- Metrics: Prometheus Compatible Metrics
- Tracing: OpenTelemetry Compatible Tracing

</v-clicks>
`,title:"What's in the Box?",level:1,content:`# What's in the Box?
##
When looking into Effect you'll find a rich set of modules to deal with much more than what we've seen, just in \`@effect/core\` you'll find:

<v-clicks>

- Effect: Generic Program Definition
- Cause: Representing potentially multiple failure causes of different kinds
- Scope: Safe Resource Management to model things like database connections
- Fiber: Low Level Concurrency Primitives
- Queue: Work-Stealing Concurrent & Backpressured Queues
- Hub: Like a Pub/Sub for Effects
- Layer: Context Construction
- Metrics: Prometheus Compatible Metrics
- Tracing: OpenTelemetry Compatible Tracing

</v-clicks>`,frontmatter:{layout:"full"},index:17,start:618,end:640},filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/03-intro-to-effect.md",notesHTML:"",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:uD,meta:{layout:"full",srcSequence:"./slides/03-intro-to-effect.md",slide:{raw:`---
layout: full
---

# What's in the Box?
##
When looking into Effect you'll find a rich set of modules to deal with much more than what we've seen, just in \`@effect/core\` you'll find:

<v-clicks>

- Logger: Multi-Level & Abstract Logger
- Ref: Mutable Reference to immutable State with potentially Syncronized access and updates
- Schedule: Time-based Scheduling Policies
- Stream: Pull Based Effectful Streams (like an Effect that can produce 0 - infinite values)
- Deferred: Like a Promise of an Effect that may be fulfilled at a later point
- STM: Transactional Data Structures & Coordination 
- Semaphore: Concurrency Control
- Clock: System Clock & Time Utilities
- Random: Deterministic Seeded Random Utilities
- Runtime: Runtime Configuration and Runner
- Supervisor: Fiber Monitoring

</v-clicks>
`,title:"What's in the Box?",level:1,content:`# What's in the Box?
##
When looking into Effect you'll find a rich set of modules to deal with much more than what we've seen, just in \`@effect/core\` you'll find:

<v-clicks>

- Logger: Multi-Level & Abstract Logger
- Ref: Mutable Reference to immutable State with potentially Syncronized access and updates
- Schedule: Time-based Scheduling Policies
- Stream: Pull Based Effectful Streams (like an Effect that can produce 0 - infinite values)
- Deferred: Like a Promise of an Effect that may be fulfilled at a later point
- STM: Transactional Data Structures & Coordination 
- Semaphore: Concurrency Control
- Clock: System Clock & Time Utilities
- Random: Deterministic Seeded Random Utilities
- Runtime: Runtime Configuration and Runner
- Supervisor: Fiber Monitoring

</v-clicks>`,frontmatter:{layout:"full",srcSequence:"./slides/03-intro-to-effect.md"},index:33,start:640,end:664,source:{filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/03-intro-to-effect.md",raw:`---
layout: full
---

# What's in the Box?
##
When looking into Effect you'll find a rich set of modules to deal with much more than what we've seen, just in \`@effect/core\` you'll find:

<v-clicks>

- Logger: Multi-Level & Abstract Logger
- Ref: Mutable Reference to immutable State with potentially Syncronized access and updates
- Schedule: Time-based Scheduling Policies
- Stream: Pull Based Effectful Streams (like an Effect that can produce 0 - infinite values)
- Deferred: Like a Promise of an Effect that may be fulfilled at a later point
- STM: Transactional Data Structures & Coordination 
- Semaphore: Concurrency Control
- Clock: System Clock & Time Utilities
- Random: Deterministic Seeded Random Utilities
- Runtime: Runtime Configuration and Runner
- Supervisor: Fiber Monitoring

</v-clicks>
`,title:"What's in the Box?",level:1,content:`# What's in the Box?
##
When looking into Effect you'll find a rich set of modules to deal with much more than what we've seen, just in \`@effect/core\` you'll find:

<v-clicks>

- Logger: Multi-Level & Abstract Logger
- Ref: Mutable Reference to immutable State with potentially Syncronized access and updates
- Schedule: Time-based Scheduling Policies
- Stream: Pull Based Effectful Streams (like an Effect that can produce 0 - infinite values)
- Deferred: Like a Promise of an Effect that may be fulfilled at a later point
- STM: Transactional Data Structures & Coordination 
- Semaphore: Concurrency Control
- Clock: System Clock & Time Utilities
- Random: Deterministic Seeded Random Utilities
- Runtime: Runtime Configuration and Runner
- Supervisor: Fiber Monitoring

</v-clicks>`,frontmatter:{layout:"full"},index:18,start:640,end:664},filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/03-intro-to-effect.md",notesHTML:"",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:mD,meta:{layout:"center",srcSequence:"./slides/03-intro-to-effect.md",slide:{raw:`---
layout: center
---

# Early adopters feedback

<br />

<img src="https://i.imgur.com/ZUKacox.png" style="width: 500px" />
`,title:"Early adopters feedback",level:1,content:`# Early adopters feedback

<br />

<img src="https://i.imgur.com/ZUKacox.png" style="width: 500px" />`,frontmatter:{layout:"center",srcSequence:"./slides/03-intro-to-effect.md"},index:34,start:664,end:674,source:{filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/03-intro-to-effect.md",raw:`---
layout: center
---

# Early adopters feedback

<br />

<img src="https://i.imgur.com/ZUKacox.png" style="width: 500px" />
`,title:"Early adopters feedback",level:1,content:`# Early adopters feedback

<br />

<img src="https://i.imgur.com/ZUKacox.png" style="width: 500px" />`,frontmatter:{layout:"center"},index:19,start:664,end:674},filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/03-intro-to-effect.md",notesHTML:"",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:A_,meta:{layout:"center",srcSequence:"./slides/03-intro-to-effect.md",slide:{raw:`---
layout: center
---

<center>

# Thank you!

Where to go next?

<qr-slides />

[Slides Code](https://github.com/mikearnaldi/pirum-meetup-09-2022) [Website](https://www.effect.website/) [Discord Community](https://discord.gg/cWtHKdAXwC)

<hr />


We offer:

Training, Team Extension, Design & Development, Accessibility Audits, Recruitment.

[contact@matechs.com](contact@matechs.com)

</center>
`,title:"Thank you!",level:1,content:`<center>

# Thank you!

Where to go next?

<qr-slides />

[Slides Code](https://github.com/mikearnaldi/pirum-meetup-09-2022) [Website](https://www.effect.website/) [Discord Community](https://discord.gg/cWtHKdAXwC)

<hr />


We offer:

Training, Team Extension, Design & Development, Accessibility Audits, Recruitment.

[contact@matechs.com](contact@matechs.com)

</center>`,frontmatter:{layout:"center",srcSequence:"./slides/03-intro-to-effect.md"},index:35,start:674,end:699,source:{filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/03-intro-to-effect.md",raw:`---
layout: center
---

<center>

# Thank you!

Where to go next?

<qr-slides />

[Slides Code](https://github.com/mikearnaldi/pirum-meetup-09-2022) [Website](https://www.effect.website/) [Discord Community](https://discord.gg/cWtHKdAXwC)

<hr />


We offer:

Training, Team Extension, Design & Development, Accessibility Audits, Recruitment.

[contact@matechs.com](contact@matechs.com)

</center>
`,title:"Thank you!",level:1,content:`<center>

# Thank you!

Where to go next?

<qr-slides />

[Slides Code](https://github.com/mikearnaldi/pirum-meetup-09-2022) [Website](https://www.effect.website/) [Discord Community](https://discord.gg/cWtHKdAXwC)

<hr />


We offer:

Training, Team Extension, Design & Development, Accessibility Audits, Recruitment.

[contact@matechs.com](contact@matechs.com)

</center>`,frontmatter:{layout:"center"},index:20,start:674,end:699},filepath:"/home/runner/work/pirum-meetup-09-2022/pirum-meetup-09-2022/slides/03-intro-to-effect.md",notesHTML:"",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",component:Y0,meta:{layout:"end"}}],Ue=B_,D_=[{name:"play",path:"/",component:j0,children:[...Ue]},{name:"print",path:"/print",component:W0},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}},{name:"presenter",path:"/presenter/:no",component:()=>Ao(()=>import("./Presenter.51114370.js"),["assets/Presenter.51114370.js","assets/Presenter.1ea605f8.css","assets/DrawingControls.vue_vue_type_script_setup_true_lang.7b3fd237.js"]),beforeEnter:t=>{if(!wn.remote||wn.remote===t.query.password)return!0;if(wn.remote&&t.query.password===void 0){const n=prompt("Enter password");if(wn.remote===n)return!0}return t.params.no?{path:`/${t.params.no}`}:{path:""}}},{path:"/presenter",redirect:{path:"/presenter/1"}}],mt=Pg({history:K5("/pirum-meetup-09-2022/"),routes:D_});function __(t,n,{mode:o="replace"}={}){return T({get(){const s=mt.currentRoute.value.query[t];return s==null?n!=null?n:null:Array.isArray(s)?s.filter(Boolean):s},set(s){ot(()=>{mt[C(o)]({query:{...mt.currentRoute.value.query,[t]:s}})})}})}const mf=N(0);ot(()=>{mt.afterEach(async()=>{await ot(),mf.value+=1})});const Zt=T(()=>mt.currentRoute.value),Pa=T(()=>Zt.value.query.print!==void 0),C_=T(()=>Zt.value.query.print==="clicks"),Jt=T(()=>Zt.value.query.embedded!==void 0),Lt=T(()=>Zt.value.path.startsWith("/presenter")),qo=T(()=>Pa.value&&!C_.value),Ol=T(()=>Zt.value.query.password),b_=T(()=>!Lt.value&&(!Ae.remote||Ol.value===Ae.remote)),Oi=__("clicks","0"),hf=T(()=>Ue.length-1),w_=T(()=>Zt.value.path),Je=T(()=>parseInt(w_.value.split(/\//g).slice(-1)[0])||1);T(()=>Ar(Je.value));const ft=T(()=>Ue.find(t=>t.path===`${Je.value}`));T(()=>{var t,n,o;return(o=(n=(t=ft.value)==null?void 0:t.meta)==null?void 0:n.slide)==null?void 0:o.id});T(()=>{var t,n;return(n=(t=ft.value)==null?void 0:t.meta)==null?void 0:n.layout});const Jr=T(()=>Ue.find(t=>t.path===`${Math.min(Ue.length,Je.value+1)}`)),x_=T(()=>{var t,n;return mf.value,((n=(t=ft.value)==null?void 0:t.meta)==null?void 0:n.__clicksElements)||[]}),St=T({get(){if(qo.value)return 99999;let t=+(Oi.value||0);return isNaN(t)&&(t=0),t},set(t){Oi.value=t.toString()}}),Ks=T(()=>{var t,n,o;return+((o=(n=(t=ft.value)==null?void 0:t.meta)==null?void 0:n.clicks)!=null?o:x_.value.length)}),T_=T(()=>Je.value<Ue.length-1||St.value<Ks.value),S_=T(()=>Je.value>1||St.value>0),k_=T(()=>Ue.filter(t=>{var n,o;return(o=(n=t.meta)==null?void 0:n.slide)==null?void 0:o.title}).reduce((t,n)=>($a(t,n),t),[])),R_=T(()=>Oa(k_.value,ft.value));T(()=>Fa(R_.value));function cn(){Ks.value<=St.value?ss():St.value+=1}async function pn(){St.value<=0?await rs():St.value-=1}function Ar(t){return Lt.value?`/presenter/${t}`:`/${t}`}function ss(){const t=Math.min(Ue.length,Je.value+1);return mo(t)}async function rs(t=!0){const n=Math.max(1,Je.value-1);await mo(n),t&&Ks.value&&mt.replace({query:{...Zt.value.query,clicks:Ks.value}})}function mo(t,n){return mt.push({path:Ar(t),query:{...Zt.value.query,clicks:n}})}function P_(t){const n=N(0),{direction:o,distanceX:s,distanceY:r}=A5(t,{onSwipeStart(l){l.pointerType==="touch"&&(es.value||(n.value=vl()))},onSwipeEnd(l){if(l.pointerType!=="touch"||!n.value||es.value)return;const a=Math.abs(s.value),c=Math.abs(r.value);a/window.innerWidth>.3||a>100?o.value===zt.LEFT?cn():pn():(c/window.innerHeight>.4||c>200)&&(o.value===zt.DOWN?rs():ss())}})}async function Fl(){const{saveAs:t}=await Ao(()=>import("./FileSaver.min.7f56e709.js").then(n=>n.F),[]);t(yu(Ae.download)?Ae.download:Ae.exportFilename?`${Ae.exportFilename}.pdf`:"/pirum-meetup-09-2022/slidev-exported.pdf",`${Ae.title}.pdf`)}async function $_(t){var n,o;if(t==null){const s=(o=(n=ft.value)==null?void 0:n.meta)==null?void 0:o.slide;if(!(s!=null&&s.filepath))return!1;t=`${s.filepath}:${s.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(t)}`),!0}function $a(t,n,o=1){var r,l,a,c,i;const s=(l=(r=n.meta)==null?void 0:r.slide)==null?void 0:l.level;s&&s>o&&t.length>0?$a(t[t.length-1].children,n,o+1):t.push({children:[],level:o,path:n.path,hideInToc:Boolean((a=n.meta)==null?void 0:a.hideInToc),title:(i=(c=n.meta)==null?void 0:c.slide)==null?void 0:i.title})}function Oa(t,n,o=!1,s){return t.map(r=>{const l={...r,active:r.path===(n==null?void 0:n.path),hasActiveParent:o};return l.children.length>0&&(l.children=Oa(l.children,n,l.active||l.hasActiveParent,l)),s&&(l.active||l.activeParent)&&(s.activeParent=!0),l})}function Fa(t,n=1){return t.filter(o=>!o.hideInToc).map(o=>({...o,children:Fa(o.children,n+1)}))}function O_(){const t=Ae.titleTemplate.replace("%s",Ae.title||"Slidev");Im({title:t}),Gm(`${t} - shared`),eh(`${t} - drawings`);function n(){Lt.value&&($c("page",+Je.value),$c("clicks",St.value))}mt.afterEach(n),ue(St,n),Zm(o=>{(+o.page!=+Je.value||St.value!==o.clicks)&&mt.replace({path:Ar(o.page),query:{...mt.currentRoute.value.query,clicks:o.clicks||0}})})}const F_=De({__name:"App",setup(t){return H(W),O_(),(n,o)=>{const s=lo("RouterView"),r=lo("StarportCarrier");return b(),U(xe,null,[Y(s),Y(r)],64)}}});function Vr(t){return t!==null&&typeof t=="object"}function Ml(t,n,o=".",s){if(!Vr(n))return Ml(t,{},o,s);const r=Object.assign({},n);for(const l in t){if(l==="__proto__"||l==="constructor")continue;const a=t[l];a!=null&&(s&&s(r,l,a,o)||(Array.isArray(a)&&Array.isArray(r[l])?r[l]=a.concat(r[l]):Vr(a)&&Vr(r[l])?r[l]=Ml(a,r[l],(o?`${o}.`:"")+l.toString(),s):r[l]=a))}return r}function M_(t){return(...n)=>n.reduce((o,s)=>Ml(o,s,"",t),{})}const L_=M_(),gf=1/60*1e3,H_=typeof performance<"u"?()=>performance.now():()=>Date.now(),vf=typeof window<"u"?t=>window.requestAnimationFrame(t):t=>setTimeout(()=>t(H_()),gf);function I_(t){let n=[],o=[],s=0,r=!1,l=!1;const a=new WeakSet,c={schedule:(i,p=!1,u=!1)=>{const f=u&&r,d=f?n:o;return p&&a.add(i),d.indexOf(i)===-1&&(d.push(i),f&&r&&(s=n.length)),i},cancel:i=>{const p=o.indexOf(i);p!==-1&&o.splice(p,1),a.delete(i)},process:i=>{if(r){l=!0;return}if(r=!0,[n,o]=[o,n],o.length=0,s=n.length,s)for(let p=0;p<s;p++){const u=n[p];u(i),a.has(u)&&(c.schedule(u),t())}r=!1,l&&(l=!1,c.process(i))}};return c}const N_=40;let Ll=!0,ls=!1,Hl=!1;const so={delta:0,timestamp:0},fs=["read","update","preRender","render","postRender"],Br=fs.reduce((t,n)=>(t[n]=I_(()=>ls=!0),t),{}),Il=fs.reduce((t,n)=>{const o=Br[n];return t[n]=(s,r=!1,l=!1)=>(ls||U_(),o.schedule(s,r,l)),t},{}),j_=fs.reduce((t,n)=>(t[n]=Br[n].cancel,t),{});fs.reduce((t,n)=>(t[n]=()=>Br[n].process(so),t),{});const q_=t=>Br[t].process(so),Ef=t=>{ls=!1,so.delta=Ll?gf:Math.max(Math.min(t-so.timestamp,N_),1),so.timestamp=t,Hl=!0,fs.forEach(q_),Hl=!1,ls&&(Ll=!1,vf(Ef))},U_=()=>{ls=!0,Ll=!0,Hl||vf(Ef)},Af=()=>so;var J_=function(){},Fi=function(){};const Nl=(t,n,o)=>Math.min(Math.max(o,t),n),Wr=.001,V_=.01,Mi=10,W_=.05,z_=1;function K_({duration:t=800,bounce:n=.25,velocity:o=0,mass:s=1}){let r,l;J_(t<=Mi*1e3);let a=1-n;a=Nl(W_,z_,a),t=Nl(V_,Mi,t/1e3),a<1?(r=p=>{const u=p*a,f=u*t,d=u-o,y=jl(p,a),m=Math.exp(-f);return Wr-d/y*m},l=p=>{const f=p*a*t,d=f*o+o,y=Math.pow(a,2)*Math.pow(p,2)*t,m=Math.exp(-f),g=jl(Math.pow(p,2),a);return(-r(p)+Wr>0?-1:1)*((d-y)*m)/g}):(r=p=>{const u=Math.exp(-p*t),f=(p-o)*t+1;return-Wr+u*f},l=p=>{const u=Math.exp(-p*t),f=(o-p)*(t*t);return u*f});const c=5/t,i=G_(r,l,c);if(t=t*1e3,isNaN(i))return{stiffness:100,damping:10,duration:t};{const p=Math.pow(i,2)*s;return{stiffness:p,damping:a*2*Math.sqrt(s*p),duration:t}}}const Y_=12;function G_(t,n,o){let s=o;for(let r=1;r<Y_;r++)s=s-t(s)/n(s);return s}function jl(t,n){return t*Math.sqrt(1-n*n)}const Z_=["duration","bounce"],Q_=["stiffness","damping","mass"];function Li(t,n){return n.some(o=>t[o]!==void 0)}function X_(t){let n=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},t);if(!Li(t,Q_)&&Li(t,Z_)){const o=K_(t);n=Object.assign(Object.assign(Object.assign({},n),o),{velocity:0,mass:1}),n.isResolvedFromDuration=!0}return n}function Ma(t){var{from:n=0,to:o=1,restSpeed:s=2,restDelta:r}=t,l=wa(t,["from","to","restSpeed","restDelta"]);const a={done:!1,value:n};let{stiffness:c,damping:i,mass:p,velocity:u,duration:f,isResolvedFromDuration:d}=X_(l),y=Hi,m=Hi;function g(){const A=u?-(u/1e3):0,B=o-n,D=i/(2*Math.sqrt(c*p)),E=Math.sqrt(c/p)/1e3;if(r===void 0&&(r=Math.min(Math.abs(o-n)/100,.4)),D<1){const _=jl(E,D);y=S=>{const R=Math.exp(-D*E*S);return o-R*((A+D*E*B)/_*Math.sin(_*S)+B*Math.cos(_*S))},m=S=>{const R=Math.exp(-D*E*S);return D*E*R*(Math.sin(_*S)*(A+D*E*B)/_+B*Math.cos(_*S))-R*(Math.cos(_*S)*(A+D*E*B)-_*B*Math.sin(_*S))}}else if(D===1)y=_=>o-Math.exp(-E*_)*(B+(A+E*B)*_);else{const _=E*Math.sqrt(D*D-1);y=S=>{const R=Math.exp(-D*E*S),$=Math.min(_*S,300);return o-R*((A+D*E*B)*Math.sinh($)+_*B*Math.cosh($))/_}}}return g(),{next:A=>{const B=y(A);if(d)a.done=A>=f;else{const D=m(A)*1e3,E=Math.abs(D)<=s,_=Math.abs(o-B)<=r;a.done=E&&_}return a.value=a.done?o:B,a},flipTarget:()=>{u=-u,[n,o]=[o,n],g()}}}Ma.needsInterpolation=(t,n)=>typeof t=="string"||typeof n=="string";const Hi=t=>0,Bf=(t,n,o)=>{const s=n-t;return s===0?1:(o-t)/s},La=(t,n,o)=>-o*t+o*n+t,Df=(t,n)=>o=>Math.max(Math.min(o,n),t),Uo=t=>t%1?Number(t.toFixed(5)):t,as=/(-)?([\d]*\.?[\d])+/g,ql=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,eC=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function ds(t){return typeof t=="string"}const ys={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Jo=Object.assign(Object.assign({},ys),{transform:Df(0,1)}),ws=Object.assign(Object.assign({},ys),{default:1}),Ha=t=>({test:n=>ds(n)&&n.endsWith(t)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${t}`}),gn=Ha("deg"),Vo=Ha("%"),ae=Ha("px"),Ii=Object.assign(Object.assign({},Vo),{parse:t=>Vo.parse(t)/100,transform:t=>Vo.transform(t*100)}),Ia=(t,n)=>o=>Boolean(ds(o)&&eC.test(o)&&o.startsWith(t)||n&&Object.prototype.hasOwnProperty.call(o,n)),_f=(t,n,o)=>s=>{if(!ds(s))return s;const[r,l,a,c]=s.match(as);return{[t]:parseFloat(r),[n]:parseFloat(l),[o]:parseFloat(a),alpha:c!==void 0?parseFloat(c):1}},Tn={test:Ia("hsl","hue"),parse:_f("hue","saturation","lightness"),transform:({hue:t,saturation:n,lightness:o,alpha:s=1})=>"hsla("+Math.round(t)+", "+Vo.transform(Uo(n))+", "+Vo.transform(Uo(o))+", "+Uo(Jo.transform(s))+")"},tC=Df(0,255),zr=Object.assign(Object.assign({},ys),{transform:t=>Math.round(tC(t))}),sn={test:Ia("rgb","red"),parse:_f("red","green","blue"),transform:({red:t,green:n,blue:o,alpha:s=1})=>"rgba("+zr.transform(t)+", "+zr.transform(n)+", "+zr.transform(o)+", "+Uo(Jo.transform(s))+")"};function nC(t){let n="",o="",s="",r="";return t.length>5?(n=t.substr(1,2),o=t.substr(3,2),s=t.substr(5,2),r=t.substr(7,2)):(n=t.substr(1,1),o=t.substr(2,1),s=t.substr(3,1),r=t.substr(4,1),n+=n,o+=o,s+=s,r+=r),{red:parseInt(n,16),green:parseInt(o,16),blue:parseInt(s,16),alpha:r?parseInt(r,16)/255:1}}const Ul={test:Ia("#"),parse:nC,transform:sn.transform},at={test:t=>sn.test(t)||Ul.test(t)||Tn.test(t),parse:t=>sn.test(t)?sn.parse(t):Tn.test(t)?Tn.parse(t):Ul.parse(t),transform:t=>ds(t)?t:t.hasOwnProperty("red")?sn.transform(t):Tn.transform(t)},Cf="${c}",bf="${n}";function oC(t){var n,o,s,r;return isNaN(t)&&ds(t)&&((o=(n=t.match(as))===null||n===void 0?void 0:n.length)!==null&&o!==void 0?o:0)+((r=(s=t.match(ql))===null||s===void 0?void 0:s.length)!==null&&r!==void 0?r:0)>0}function wf(t){typeof t=="number"&&(t=`${t}`);const n=[];let o=0;const s=t.match(ql);s&&(o=s.length,t=t.replace(ql,Cf),n.push(...s.map(at.parse)));const r=t.match(as);return r&&(t=t.replace(as,bf),n.push(...r.map(ys.parse))),{values:n,numColors:o,tokenised:t}}function xf(t){return wf(t).values}function Tf(t){const{values:n,numColors:o,tokenised:s}=wf(t),r=n.length;return l=>{let a=s;for(let c=0;c<r;c++)a=a.replace(c<o?Cf:bf,c<o?at.transform(l[c]):Uo(l[c]));return a}}const sC=t=>typeof t=="number"?0:t;function rC(t){const n=xf(t);return Tf(t)(n.map(sC))}const ms={test:oC,parse:xf,createTransformer:Tf,getAnimatableNone:rC},lC=new Set(["brightness","contrast","saturate","opacity"]);function aC(t){let[n,o]=t.slice(0,-1).split("(");if(n==="drop-shadow")return t;const[s]=o.match(as)||[];if(!s)return t;const r=o.replace(s,"");let l=lC.has(n)?1:0;return s!==o&&(l*=100),n+"("+l+r+")"}const cC=/([a-z-]*)\(.*?\)/g,Jl=Object.assign(Object.assign({},ms),{getAnimatableNone:t=>{const n=t.match(cC);return n?n.map(aC).join(" "):t}});function Kr(t,n,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?t+(n-t)*6*o:o<1/2?n:o<2/3?t+(n-t)*(2/3-o)*6:t}function Ni({hue:t,saturation:n,lightness:o,alpha:s}){t/=360,n/=100,o/=100;let r=0,l=0,a=0;if(!n)r=l=a=o;else{const c=o<.5?o*(1+n):o+n-o*n,i=2*o-c;r=Kr(i,c,t+1/3),l=Kr(i,c,t),a=Kr(i,c,t-1/3)}return{red:Math.round(r*255),green:Math.round(l*255),blue:Math.round(a*255),alpha:s}}const iC=(t,n,o)=>{const s=t*t,r=n*n;return Math.sqrt(Math.max(0,o*(r-s)+s))},pC=[Ul,sn,Tn],ji=t=>pC.find(n=>n.test(t)),Sf=(t,n)=>{let o=ji(t),s=ji(n),r=o.parse(t),l=s.parse(n);o===Tn&&(r=Ni(r),o=sn),s===Tn&&(l=Ni(l),s=sn);const a=Object.assign({},r);return c=>{for(const i in a)i!=="alpha"&&(a[i]=iC(r[i],l[i],c));return a.alpha=La(r.alpha,l.alpha,c),o.transform(a)}},uC=t=>typeof t=="number",fC=(t,n)=>o=>n(t(o)),kf=(...t)=>t.reduce(fC);function Rf(t,n){return uC(t)?o=>La(t,n,o):at.test(t)?Sf(t,n):$f(t,n)}const Pf=(t,n)=>{const o=[...t],s=o.length,r=t.map((l,a)=>Rf(l,n[a]));return l=>{for(let a=0;a<s;a++)o[a]=r[a](l);return o}},dC=(t,n)=>{const o=Object.assign(Object.assign({},t),n),s={};for(const r in o)t[r]!==void 0&&n[r]!==void 0&&(s[r]=Rf(t[r],n[r]));return r=>{for(const l in s)o[l]=s[l](r);return o}};function qi(t){const n=ms.parse(t),o=n.length;let s=0,r=0,l=0;for(let a=0;a<o;a++)s||typeof n[a]=="number"?s++:n[a].hue!==void 0?l++:r++;return{parsed:n,numNumbers:s,numRGB:r,numHSL:l}}const $f=(t,n)=>{const o=ms.createTransformer(n),s=qi(t),r=qi(n);return s.numHSL===r.numHSL&&s.numRGB===r.numRGB&&s.numNumbers>=r.numNumbers?kf(Pf(s.parsed,r.parsed),o):a=>`${a>0?n:t}`},yC=(t,n)=>o=>La(t,n,o);function mC(t){if(typeof t=="number")return yC;if(typeof t=="string")return at.test(t)?Sf:$f;if(Array.isArray(t))return Pf;if(typeof t=="object")return dC}function hC(t,n,o){const s=[],r=o||mC(t[0]),l=t.length-1;for(let a=0;a<l;a++){let c=r(t[a],t[a+1]);if(n){const i=Array.isArray(n)?n[a]:n;c=kf(i,c)}s.push(c)}return s}function gC([t,n],[o]){return s=>o(Bf(t,n,s))}function vC(t,n){const o=t.length,s=o-1;return r=>{let l=0,a=!1;if(r<=t[0]?a=!0:r>=t[s]&&(l=s-1,a=!0),!a){let i=1;for(;i<o&&!(t[i]>r||i===s);i++);l=i-1}const c=Bf(t[l],t[l+1],r);return n[l](c)}}function Of(t,n,{clamp:o=!0,ease:s,mixer:r}={}){const l=t.length;Fi(l===n.length),Fi(!s||!Array.isArray(s)||s.length===l-1),t[0]>t[l-1]&&(t=[].concat(t),n=[].concat(n),t.reverse(),n.reverse());const a=hC(n,s,r),c=l===2?gC(t,a):vC(t,a);return o?i=>c(Nl(t[0],t[l-1],i)):c}const Dr=t=>n=>1-t(1-n),Na=t=>n=>n<=.5?t(2*n)/2:(2-t(2*(1-n)))/2,EC=t=>n=>Math.pow(n,t),Ff=t=>n=>n*n*((t+1)*n-t),AC=t=>{const n=Ff(t);return o=>(o*=2)<1?.5*n(o):.5*(2-Math.pow(2,-10*(o-1)))},Mf=1.525,BC=4/11,DC=8/11,_C=9/10,Lf=t=>t,ja=EC(2),CC=Dr(ja),Hf=Na(ja),If=t=>1-Math.sin(Math.acos(t)),Nf=Dr(If),bC=Na(Nf),qa=Ff(Mf),wC=Dr(qa),xC=Na(qa),TC=AC(Mf),SC=4356/361,kC=35442/1805,RC=16061/1805,Ys=t=>{if(t===1||t===0)return t;const n=t*t;return t<BC?7.5625*n:t<DC?9.075*n-9.9*t+3.4:t<_C?SC*n-kC*t+RC:10.8*t*t-20.52*t+10.72},PC=Dr(Ys),$C=t=>t<.5?.5*(1-Ys(1-t*2)):.5*Ys(t*2-1)+.5;function OC(t,n){return t.map(()=>n||Hf).splice(0,t.length-1)}function FC(t){const n=t.length;return t.map((o,s)=>s!==0?s/(n-1):0)}function MC(t,n){return t.map(o=>o*n)}function $s({from:t=0,to:n=1,ease:o,offset:s,duration:r=300}){const l={done:!1,value:t},a=Array.isArray(n)?n:[t,n],c=MC(s&&s.length===a.length?s:FC(a),r);function i(){return Of(c,a,{ease:Array.isArray(o)?o:OC(a,o)})}let p=i();return{next:u=>(l.value=p(u),l.done=u>=r,l),flipTarget:()=>{a.reverse(),p=i()}}}function LC({velocity:t=0,from:n=0,power:o=.8,timeConstant:s=350,restDelta:r=.5,modifyTarget:l}){const a={done:!1,value:n};let c=o*t;const i=n+c,p=l===void 0?i:l(i);return p!==i&&(c=p-n),{next:u=>{const f=-c*Math.exp(-u/s);return a.done=!(f>r||f<-r),a.value=a.done?p:p+f,a},flipTarget:()=>{}}}const Ui={keyframes:$s,spring:Ma,decay:LC};function HC(t){if(Array.isArray(t.to))return $s;if(Ui[t.type])return Ui[t.type];const n=new Set(Object.keys(t));return n.has("ease")||n.has("duration")&&!n.has("dampingRatio")?$s:n.has("dampingRatio")||n.has("stiffness")||n.has("mass")||n.has("damping")||n.has("restSpeed")||n.has("restDelta")?Ma:$s}function jf(t,n,o=0){return t-n-o}function IC(t,n,o=0,s=!0){return s?jf(n+-t,n,o):n-(t-n)+o}function NC(t,n,o,s){return s?t>=n+o:t<=-o}const jC=t=>{const n=({delta:o})=>t(o);return{start:()=>Il.update(n,!0),stop:()=>j_.update(n)}};function qf(t){var n,o,{from:s,autoplay:r=!0,driver:l=jC,elapsed:a=0,repeat:c=0,repeatType:i="loop",repeatDelay:p=0,onPlay:u,onStop:f,onComplete:d,onRepeat:y,onUpdate:m}=t,g=wa(t,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:A}=g,B,D=0,E=g.duration,_,S=!1,R=!0,$;const J=HC(g);!((o=(n=J).needsInterpolation)===null||o===void 0)&&o.call(n,s,A)&&($=Of([0,100],[s,A],{clamp:!1}),s=0,A=100);const te=J(Object.assign(Object.assign({},g),{from:s,to:A}));function ne(){D++,i==="reverse"?(R=D%2===0,a=IC(a,E,p,R)):(a=jf(a,E,p),i==="mirror"&&te.flipTarget()),S=!1,y&&y()}function pe(){B.stop(),d&&d()}function Fe(Me){if(R||(Me=-Me),a+=Me,!S){const Re=te.next(Math.max(0,a));_=Re.value,$&&(_=$(_)),S=R?Re.done:a<=0}m==null||m(_),S&&(D===0&&(E!=null||(E=a)),D<c?NC(a,E,p,R)&&ne():pe())}function Ce(){u==null||u(),B=l(Fe),B.start()}return r&&Ce(),{stop:()=>{f==null||f(),B.stop()}}}function Uf(t,n){return n?t*(1e3/n):0}function qC({from:t=0,velocity:n=0,min:o,max:s,power:r=.8,timeConstant:l=750,bounceStiffness:a=500,bounceDamping:c=10,restDelta:i=1,modifyTarget:p,driver:u,onUpdate:f,onComplete:d,onStop:y}){let m;function g(E){return o!==void 0&&E<o||s!==void 0&&E>s}function A(E){return o===void 0?s:s===void 0||Math.abs(o-E)<Math.abs(s-E)?o:s}function B(E){m==null||m.stop(),m=qf(Object.assign(Object.assign({},E),{driver:u,onUpdate:_=>{var S;f==null||f(_),(S=E.onUpdate)===null||S===void 0||S.call(E,_)},onComplete:d,onStop:y}))}function D(E){B(Object.assign({type:"spring",stiffness:a,damping:c,restDelta:i},E))}if(g(t))D({from:t,velocity:n,to:A(t)});else{let E=r*n+t;typeof p<"u"&&(E=p(E));const _=A(E),S=_===o?-1:1;let R,$;const J=te=>{R=$,$=te,n=Uf(te-R,Af().delta),(S===1&&te>_||S===-1&&te<_)&&D({from:te,to:_,velocity:n})};B({type:"decay",from:t,velocity:n,timeConstant:l,power:r,restDelta:i,modifyTarget:p,onUpdate:g(E)?J:void 0})}return{stop:()=>m==null?void 0:m.stop()}}const Jf=(t,n)=>1-3*n+3*t,Vf=(t,n)=>3*n-6*t,Wf=t=>3*t,Gs=(t,n,o)=>((Jf(n,o)*t+Vf(n,o))*t+Wf(n))*t,zf=(t,n,o)=>3*Jf(n,o)*t*t+2*Vf(n,o)*t+Wf(n),UC=1e-7,JC=10;function VC(t,n,o,s,r){let l,a,c=0;do a=n+(o-n)/2,l=Gs(a,s,r)-t,l>0?o=a:n=a;while(Math.abs(l)>UC&&++c<JC);return a}const WC=8,zC=.001;function KC(t,n,o,s){for(let r=0;r<WC;++r){const l=zf(n,o,s);if(l===0)return n;n-=(Gs(n,o,s)-t)/l}return n}const Os=11,xs=1/(Os-1);function YC(t,n,o,s){if(t===n&&o===s)return Lf;const r=new Float32Array(Os);for(let a=0;a<Os;++a)r[a]=Gs(a*xs,t,o);function l(a){let c=0,i=1;const p=Os-1;for(;i!==p&&r[i]<=a;++i)c+=xs;--i;const u=(a-r[i])/(r[i+1]-r[i]),f=c+u*xs,d=zf(f,t,o);return d>=zC?KC(a,f,t,o):d===0?f:VC(a,c,c+xs,t,o)}return a=>a===0||a===1?a:Gs(l(a),n,s)}const Yr={};class GC{constructor(){this.subscriptions=new Set}add(n){return this.subscriptions.add(n),()=>this.subscriptions.delete(n)}notify(n,o,s){if(!!this.subscriptions.size)for(const r of this.subscriptions)r(n,o,s)}clear(){this.subscriptions.clear()}}const Ji=t=>!isNaN(parseFloat(t));class ZC{constructor(n){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new GC,this.canTrackVelocity=!1,this.updateAndNotify=o=>{this.prev=this.current,this.current=o;const{delta:s,timestamp:r}=Af();this.lastUpdated!==r&&(this.timeDelta=s,this.lastUpdated=r),Il.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>Il.postRender(this.velocityCheck),this.velocityCheck=({timestamp:o})=>{this.canTrackVelocity||(this.canTrackVelocity=Ji(this.current)),o!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=n,this.canTrackVelocity=Ji(this.current)}onChange(n){return this.updateSubscribers.add(n)}clearListeners(){this.updateSubscribers.clear()}set(n){this.updateAndNotify(n)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Uf(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(n){return this.stop(),new Promise(o=>{const{stop:s}=n(o);this.stopAnimation=s}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function QC(t){return new ZC(t)}const{isArray:XC}=Array;function eb(){const t=N({}),n=s=>{const r=l=>{!t.value[l]||(t.value[l].stop(),t.value[l].destroy(),delete t.value[l])};s?XC(s)?s.forEach(r):r(s):Object.keys(t.value).forEach(r)},o=(s,r,l)=>{if(t.value[s])return t.value[s];const a=QC(r);return a.onChange(c=>l[s]=c),t.value[s]=a,a};return Bh(n),{motionValues:t,get:o,stop:n}}const tb=t=>Array.isArray(t),vn=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),Gr=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),nb=t=>({type:"spring",stiffness:550,damping:t===0?100:30,restDelta:.01,restSpeed:10}),Zr=()=>({type:"keyframes",ease:"linear",duration:300}),ob=t=>({type:"keyframes",duration:800,values:t}),Vi={default:nb,x:vn,y:vn,z:vn,rotate:vn,rotateX:vn,rotateY:vn,rotateZ:vn,scaleX:Gr,scaleY:Gr,scale:Gr,backgroundColor:Zr,color:Zr,opacity:Zr},Kf=(t,n)=>{let o;return tb(n)?o=ob:o=Vi[t]||Vi.default,{to:n,...o(n)}},Wi={...ys,transform:Math.round},Yf={color:at,backgroundColor:at,outlineColor:at,fill:at,stroke:at,borderColor:at,borderTopColor:at,borderRightColor:at,borderBottomColor:at,borderLeftColor:at,borderWidth:ae,borderTopWidth:ae,borderRightWidth:ae,borderBottomWidth:ae,borderLeftWidth:ae,borderRadius:ae,radius:ae,borderTopLeftRadius:ae,borderTopRightRadius:ae,borderBottomRightRadius:ae,borderBottomLeftRadius:ae,width:ae,maxWidth:ae,height:ae,maxHeight:ae,size:ae,top:ae,right:ae,bottom:ae,left:ae,padding:ae,paddingTop:ae,paddingRight:ae,paddingBottom:ae,paddingLeft:ae,margin:ae,marginTop:ae,marginRight:ae,marginBottom:ae,marginLeft:ae,rotate:gn,rotateX:gn,rotateY:gn,rotateZ:gn,scale:ws,scaleX:ws,scaleY:ws,scaleZ:ws,skew:gn,skewX:gn,skewY:gn,distance:ae,translateX:ae,translateY:ae,translateZ:ae,x:ae,y:ae,z:ae,perspective:ae,transformPerspective:ae,opacity:Jo,originX:Ii,originY:Ii,originZ:ae,zIndex:Wi,filter:Jl,WebkitFilter:Jl,fillOpacity:Jo,strokeOpacity:Jo,numOctaves:Wi},Ua=t=>Yf[t],Gf=(t,n)=>n&&typeof t=="number"&&n.transform?n.transform(t):t;function sb(t,n){let o=Ua(t);return o!==Jl&&(o=ms),o.getAnimatableNone?o.getAnimatableNone(n):void 0}const rb={linear:Lf,easeIn:ja,easeInOut:Hf,easeOut:CC,circIn:If,circInOut:bC,circOut:Nf,backIn:qa,backInOut:xC,backOut:wC,anticipate:TC,bounceIn:PC,bounceInOut:$C,bounceOut:Ys},zi=t=>{if(Array.isArray(t)){const[n,o,s,r]=t;return YC(n,o,s,r)}else if(typeof t=="string")return rb[t];return t},lb=t=>Array.isArray(t)&&typeof t[0]!="number",Ki=(t,n)=>t==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&ms.test(n)&&!n.startsWith("url("));function ab(t){return Array.isArray(t.to)&&t.to[0]===null&&(t.to=[...t.to],t.to[0]=t.from),t}function cb({ease:t,times:n,delay:o,...s}){const r={...s};return n&&(r.offset=n),t&&(r.ease=lb(t)?t.map(zi):zi(t)),o&&(r.elapsed=-o),r}function ib(t,n,o){return Array.isArray(n.to)&&(t.duration||(t.duration=800)),ab(n),pb(t)||(t={...t,...Kf(o,n.to)}),{...n,...cb(t)}}function pb({delay:t,repeat:n,repeatType:o,repeatDelay:s,from:r,...l}){return!!Object.keys(l).length}function ub(t,n){return t[n]||t.default||t}function fb(t,n,o,s,r){const l=ub(s,t);let a=l.from===null||l.from===void 0?n.get():l.from;const c=Ki(t,o);a==="none"&&c&&typeof o=="string"&&(a=sb(t,o));const i=Ki(t,a);function p(f){const d={from:a,to:o,velocity:s.velocity?s.velocity:n.getVelocity(),onUpdate:y=>n.set(y)};return l.type==="inertia"||l.type==="decay"?qC({...d,...l}):qf({...ib(l,d,t),onUpdate:y=>{d.onUpdate(y),l.onUpdate&&l.onUpdate(y)},onComplete:()=>{s.onComplete&&s.onComplete(),r&&r(),f&&f()}})}function u(f){return n.set(o),s.onComplete&&s.onComplete(),r&&r(),f&&f(),{stop:()=>{}}}return!i||!c||l.type===!1?u:p}function db(){const{motionValues:t,stop:n,get:o}=eb();return{motionValues:t,stop:n,push:(r,l,a,c={},i)=>{const p=a[r],u=o(r,p,a);if(c&&c.immediate){u.set(l);return}const f=fb(r,u,l,c,i);u.start(f)}}}function yb(t,n={},{motionValues:o,push:s,stop:r}=db()){const l=C(n),a=N(!1);ue(o,f=>{a.value=Object.values(f).filter(d=>d.isAnimating()).length>0},{immediate:!0,deep:!0});const c=f=>{if(!l||!l[f])throw new Error(`The variant ${f} does not exist.`);return l[f]},i=f=>(typeof f=="string"&&(f=c(f)),Promise.all(Object.entries(f).map(([d,y])=>{if(d!=="transition")return new Promise(m=>{s(d,y,t,f.transition||Kf(d,f[d]),m)})}).filter(Boolean)));return{isAnimating:a,apply:i,set:f=>{const d=gl(f)?f:c(f);Object.entries(d).forEach(([y,m])=>{y!=="transition"&&s(y,m,t,{immediate:!0})})},leave:async f=>{let d;if(l&&(l.leave&&(d=l.leave),!l.leave&&l.initial&&(d=l.initial)),!d){f();return}await i(d),f()},stop:r}}const Ja=typeof window<"u",mb=()=>Ja&&window.onpointerdown===null,hb=()=>Ja&&window.ontouchstart===null,gb=()=>Ja&&window.onmousedown===null;function vb({target:t,state:n,variants:o,apply:s}){const r=C(o),l=N(!1),a=N(!1),c=N(!1),i=T(()=>{let u=[];return r&&(r.hovered&&(u=[...u,...Object.keys(r.hovered)]),r.tapped&&(u=[...u,...Object.keys(r.tapped)]),r.focused&&(u=[...u,...Object.keys(r.focused)])),u}),p=T(()=>{const u={};Object.assign(u,n.value),l.value&&r.hovered&&Object.assign(u,r.hovered),a.value&&r.tapped&&Object.assign(u,r.tapped),c.value&&r.focused&&Object.assign(u,r.focused);for(const f in u)i.value.includes(f)||delete u[f];return u});r.hovered&&(ie(t,"mouseenter",()=>l.value=!0),ie(t,"mouseleave",()=>{l.value=!1,a.value=!1}),ie(t,"mouseout",()=>{l.value=!1,a.value=!1})),r.tapped&&(gb()&&(ie(t,"mousedown",()=>a.value=!0),ie(t,"mouseup",()=>a.value=!1)),mb()&&(ie(t,"pointerdown",()=>a.value=!0),ie(t,"pointerup",()=>a.value=!1)),hb()&&(ie(t,"touchstart",()=>a.value=!0),ie(t,"touchend",()=>a.value=!1))),r.focused&&(ie(t,"focus",()=>c.value=!0),ie(t,"blur",()=>c.value=!1)),ue(p,s)}function Eb({set:t,target:n,apply:o,variants:s,variant:r}){const l=C(s);ue(()=>n,()=>{!l||(l.initial&&t("initial"),l.enter&&(r.value="enter"))},{immediate:!0,flush:"pre"})}function Ab({state:t,apply:n}){ue(t,o=>{o&&n(o)},{immediate:!0})}function Bb({target:t,variants:n,variant:o}){const s=C(n);s&&(s.visible||s.visibleOnce)&&g5(t,([{isIntersecting:r}])=>{s.visible?r?o.value="visible":o.value="initial":s.visibleOnce&&(r&&o.value!=="visibleOnce"?o.value="visibleOnce":o.value||(o.value="initial"))})}function Db(t,n={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){n.lifeCycleHooks&&Eb(t),n.syncVariants&&Ab(t),n.visibilityHooks&&Bb(t),n.eventListeners&&vb(t)}function Zf(t={}){const n=$e({...t}),o=N({});return ue(n,()=>{const s={};for(const[r,l]of Object.entries(n)){const a=Ua(r),c=Gf(l,a);s[r]=c}o.value=s},{immediate:!0,deep:!0}),{state:n,style:o}}function Va(t,n){ue(()=>wt(t),o=>{!o||n(o)},{immediate:!0})}const _b={x:"translateX",y:"translateY",z:"translateZ"};function Qf(t={},n=!0){const o=$e({...t}),s=N("");return ue(o,r=>{let l="",a=!1;n&&(r.x||r.y||r.z)&&(l+=`translate3d(${[r.x||0,r.y||0,r.z||0].map(ae.transform).join(",")}) `,a=!0);for(const[c,i]of Object.entries(r)){if(n&&(c==="x"||c==="y"||c==="z"))continue;const p=Ua(c),u=Gf(i,p);l+=`${_b[c]||c}(${u}) `}n&&!a&&(l+="translateZ(0px) "),s.value=l.trim()},{immediate:!0,deep:!0}),{state:o,transform:s}}const Cb=["","X","Y","Z"],bb=["perspective","translate","scale","rotate","skew"],Xf=["transformPerspective","x","y","z"];bb.forEach(t=>{Cb.forEach(n=>{const o=t+n;Xf.push(o)})});const wb=new Set(Xf);function Wa(t){return wb.has(t)}const xb=new Set(["originX","originY","originZ"]);function ed(t){return xb.has(t)}function Tb(t){const n={},o={};return Object.entries(t).forEach(([s,r])=>{Wa(s)||ed(s)?n[s]=r:o[s]=r}),{transform:n,style:o}}function td(t){const{transform:n,style:o}=Tb(t),{transform:s}=Qf(n),{style:r}=Zf(o);return s.value&&(r.value.transform=s.value),r.value}function Sb(t,n){let o,s;const{state:r,style:l}=Zf();return Va(t,a=>{s=a;for(const c of Object.keys(Yf))a.style[c]===null||a.style[c]===""||Wa(c)||ed(c)||(r[c]=a.style[c]);o&&Object.entries(o).forEach(([c,i])=>a.style[c]=i),n&&n(r)}),ue(l,a=>{if(!s){o=a;return}for(const c in a)s.style[c]=a[c]},{immediate:!0}),{style:r}}function kb(t){const n=t.trim().split(/\) |\)/);if(n.length===1)return{};const o=s=>s.endsWith("px")||s.endsWith("deg")?parseFloat(s):isNaN(Number(s))?Number(s):s;return n.reduce((s,r)=>{if(!r)return s;const[l,a]=r.split("("),i=a.split(",").map(u=>o(u.endsWith(")")?u.replace(")",""):u.trim())),p=i.length===1?i[0]:i;return{...s,[l]:p}},{})}function Rb(t,n){Object.entries(kb(n)).forEach(([o,s])=>{const r=["x","y","z"];if(o==="translate3d"){if(s===0){r.forEach(l=>t[l]=0);return}s.forEach((l,a)=>t[r[a]]=l);return}if(s=parseFloat(s),o==="translateX"){t.x=s;return}if(o==="translateY"){t.y=s;return}if(o==="translateZ"){t.z=s;return}t[o]=s})}function Pb(t,n){let o,s;const{state:r,transform:l}=Qf();return Va(t,a=>{s=a,a.style.transform&&Rb(r,a.style.transform),o&&(a.style.transform=o),n&&n(r)}),ue(l,a=>{if(!s){o=a;return}s.style.transform=a},{immediate:!0}),{transform:r}}function $b(t,n){const o=$e({}),s=a=>Object.entries(a).forEach(([c,i])=>o[c]=i),{style:r}=Sb(t,s),{transform:l}=Pb(t,s);return ue(o,a=>{Object.entries(a).forEach(([c,i])=>{const p=Wa(c)?l:r;p[c]&&p[c]===i||(p[c]=i)})},{immediate:!0,deep:!0}),Va(t,()=>n&&s(n)),{motionProperties:o,style:r,transform:l}}function Ob(t={}){const n=C(t),o=N();return{state:T(()=>{if(!!o.value)return n[o.value]}),variant:o}}function nd(t,n={},o){const{motionProperties:s}=$b(t),{variant:r,state:l}=Ob(n),a=yb(s,n),c={target:t,variant:r,variants:n,state:l,motionProperties:s,...a};return Db(c,o),c}const Fb=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],Mb=(t,n)=>{const o=t.props?t.props:t.data&&t.data.attrs?t.data.attrs:{};o&&(o.variants&&gl(o.variants)&&(n.value={...n.value,...o.variants}),Fb.forEach(s=>{if(s==="delay"){if(o&&o[s]&&lh(o[s])){const r=o[s];n&&n.value&&(n.value.enter&&(n.value.enter.transition||(n.value.enter.transition={}),n.value.enter.transition={delay:r,...n.value.enter.transition}),n.value.visible&&(n.value.visible.transition||(n.value.visible.transition={}),n.value.visible.transition={delay:r,...n.value.visible.transition}),n.value.visibleOnce&&(n.value.visibleOnce.transition||(n.value.visibleOnce.transition={}),n.value.visibleOnce.transition={delay:r,...n.value.visibleOnce.transition}))}return}s==="visible-once"&&(s="visibleOnce"),o&&o[s]&&gl(o[s])&&(n.value[s]=o[s])}))},Qr=t=>({created:(s,r,l)=>{const a=r.value&&typeof r.value=="string"?r.value:l.key;a&&Yr[a]&&Yr[a].stop();const c=N(t||{});typeof r.value=="object"&&(c.value=r.value),Mb(l,c);const i=nd(s,c);s.motionInstance=i,a&&(Yr[a]=i)},unmounted:s=>{s.motionInstance&&s.motionInstance.stop()},getSSRProps(s,r){let{initial:l}=s.value||r&&(r==null?void 0:r.props)||{};l=C(l);const a=L_((t==null?void 0:t.initial)||{},l||{});return!a||Object.keys(a).length===0?void 0:{style:td(a)}}}),Lb={initial:{opacity:0},enter:{opacity:1}},Hb={initial:{opacity:0},visible:{opacity:1}},Ib={initial:{opacity:0},visibleOnce:{opacity:1}},Nb={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},jb={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},qb={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},Ub={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},Jb={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},Vb={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},Wb={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},zb={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},Kb={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},Yb={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},Gb={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},Zb={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},Qb={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},Xb={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},e7={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},t7={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},n7={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},o7={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},s7={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},r7={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},l7={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},a7={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},c7={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},i7={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},p7={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},u7={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},f7={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},Vl={__proto__:null,fade:Lb,fadeVisible:Hb,fadeVisibleOnce:Ib,pop:Nb,popVisible:jb,popVisibleOnce:qb,rollBottom:Qb,rollLeft:Ub,rollRight:Wb,rollTop:Yb,rollVisibleBottom:Xb,rollVisibleLeft:Jb,rollVisibleRight:zb,rollVisibleTop:Gb,rollVisibleOnceBottom:e7,rollVisibleOnceLeft:Vb,rollVisibleOnceRight:Kb,rollVisibleOnceTop:Zb,slideBottom:p7,slideLeft:t7,slideRight:s7,slideTop:a7,slideVisibleBottom:u7,slideVisibleLeft:n7,slideVisibleRight:r7,slideVisibleTop:c7,slideVisibleOnceBottom:f7,slideVisibleOnceLeft:o7,slideVisibleOnceRight:l7,slideVisibleOnceTop:i7},d7=De({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(t){var c;const n=nm(),o=$e({});if(!t.is&&!n.default)return()=>Ye("div",{});const s=T(()=>{let i;return t.preset&&(i=Vl[t.preset]),i}),r=T(()=>({initial:t.initial,enter:t.enter,leave:t.leave,visible:t.visible,visibleOnce:t.visibleOnce,hovered:t.hovered,tapped:t.tapped,focused:t.focused})),l=T(()=>{const i={...r.value,...s.value||{},...t.variants||{}};return t.delay&&(i.enter.transition={...i.enter.transition},i.enter.transition.delay=parseInt(t.delay)),i}),a=T(()=>{if(!t.is)return;let i=t.is;return typeof a.value=="string"&&!dd(i)&&(i=lo(i)),i});if(((c=process==null?void 0:process.env)==null?void 0:c.NODE_ENV)==="development"||(process==null?void 0:process.dev)){const i=p=>{var u;(u=p.variants)!=null&&u.initial&&p.set("initial"),setTimeout(()=>{var f,d,y;(f=p.variants)!=null&&f.enter&&p.apply("enter"),(d=p.variants)!=null&&d.visible&&p.apply("visible"),(y=p.variants)!=null&&y.visibleOnce&&p.apply("visibleOnce")},10)};pa(()=>Object.entries(o).forEach(([p,u])=>i(u)))}return{slots:n,component:a,motionConfig:l,instances:o}},render({slots:t,motionConfig:n,instances:o,component:s}){var c;const r=td(n.initial||{}),l=(i,p)=>(i.props||(i.props={}),i.props.style=r,i.props.onVnodeMounted=({el:u})=>{const f=nd(u,n);o[p]=f},i);if(s){const i=Ye(s,void 0,t);return l(i,0),i}return(((c=t.default)==null?void 0:c.call(t))||[]).map((i,p)=>l(i,p))}});function y7(t){const n="\xE0\xE1\xE2\xE4\xE6\xE3\xE5\u0101\u0103\u0105\xE7\u0107\u010D\u0111\u010F\xE8\xE9\xEA\xEB\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xEE\xEF\xED\u012B\u012F\xEC\u0142\u1E3F\xF1\u0144\u01F9\u0148\xF4\xF6\xF2\xF3\u0153\xF8\u014D\xF5\u0151\u1E55\u0155\u0159\xDF\u015B\u0161\u015F\u0219\u0165\u021B\xFB\xFC\xF9\xFA\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xFF\xFD\u017E\u017A\u017C\xB7/_,:;",o="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",s=new RegExp(n.split("").join("|"),"g");return t.toString().replace(/[A-Z]/g,r=>`-${r}`).toLowerCase().replace(/\s+/g,"-").replace(s,r=>o.charAt(n.indexOf(r))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const m7={install(t,n){if(t.directive("motion",Qr()),t.component("Motion",d7),!n||n&&!n.excludePresets)for(const o in Vl){const s=Vl[o];t.directive(`motion-${y7(o)}`,Qr(s))}if(n&&n.directives)for(const o in n.directives){const s=n.directives[o];s.initial,t.directive(`motion-${o}`,Qr(s))}}};function h7(t){return hp()?(gp(t),!0):!1}var Yi;const Wo=typeof window<"u",g7=Object.prototype.toString,v7=t=>g7.call(t)==="[object Object]";Wo&&((Yi=window==null?void 0:window.navigator)==null?void 0:Yi.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function E7(t){var n;const o=C(t);return(n=o==null?void 0:o.$el)!=null?n:o}const A7=Wo?window:void 0,Wl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},zl="__vueuse_ssr_handlers__";Wl[zl]=Wl[zl]||{};Wl[zl];function B7(t,n={}){const{immediate:o=!0,window:s=A7}=n,r=N(!1);let l=null;function a(){!r.value||!s||(t(),l=s.requestAnimationFrame(a))}function c(){!r.value&&s&&(r.value=!0,a())}function i(){r.value=!1,l!=null&&s&&(s.cancelAnimationFrame(l),l=null)}return o&&c(),h7(i),{isActive:r,pause:i,resume:c}}var Gi;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(Gi||(Gi={}));const za="vue-starport-injection",od="vue-starport-options",D7={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},sd={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var _7=Object.defineProperty,Zs=Object.getOwnPropertySymbols,rd=Object.prototype.hasOwnProperty,ld=Object.prototype.propertyIsEnumerable,Zi=(t,n,o)=>n in t?_7(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,C7=(t,n)=>{for(var o in n||(n={}))rd.call(n,o)&&Zi(t,o,n[o]);if(Zs)for(var o of Zs(n))ld.call(n,o)&&Zi(t,o,n[o]);return t},Qi=(t,n)=>{var o={};for(var s in t)rd.call(t,s)&&n.indexOf(s)<0&&(o[s]=t[s]);if(t!=null&&Zs)for(var s of Zs(t))n.indexOf(s)<0&&ld.call(t,s)&&(o[s]=t[s]);return o};const b7=De({name:"StarportProxy",props:C7({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},sd),setup(t,n){const o=H(za),s=T(()=>o.getInstance(t.port,t.component)),r=N(),l=s.value.generateId(),a=N(!1);return s.value.isVisible||(s.value.land(),a.value=!0),Eo(async()=>{s.value.el||(s.value.el=r.value,await ot(),a.value=!0,s.value.rect.update())}),ir(async()=>{s.value.rect.update(),s.value.liftOff(),s.value.el=void 0,a.value=!1,!s.value.options.keepAlive&&(await ot(),await ot(),!s.value.el&&o.dispose(s.value.port))}),ue(()=>t,async()=>{s.value.props&&await ot();const c=t,{props:i}=c,p=Qi(c,["props"]);s.value.props=i||{},s.value.setLocalOptions(p)},{deep:!0,immediate:!0}),()=>{const c=t,{initialProps:i,mountedProps:p}=c,u=Qi(c,["initialProps","mountedProps"]),f=dn(u,(a.value?p:i)||{});return Ye("div",dn(f,{id:l,ref:r,"data-starport-proxy":s.value.componentId,"data-starport-landed":s.value.isLanded?"true":void 0,"data-starport-floating":s.value.isLanded?void 0:"true"}),n.slots.default?Ye(n.slots.default):void 0)}}});var w7=Object.defineProperty,x7=Object.defineProperties,T7=Object.getOwnPropertyDescriptors,Xi=Object.getOwnPropertySymbols,S7=Object.prototype.hasOwnProperty,k7=Object.prototype.propertyIsEnumerable,ep=(t,n,o)=>n in t?w7(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,R7=(t,n)=>{for(var o in n||(n={}))S7.call(n,o)&&ep(t,o,n[o]);if(Xi)for(var o of Xi(n))k7.call(n,o)&&ep(t,o,n[o]);return t},P7=(t,n)=>x7(t,T7(n));const $7=De({name:"Starport",inheritAttrs:!0,props:sd,setup(t,n){const o=N(!1);return Eo(()=>{o.value=!0}),()=>{var a,c;const s=(c=(a=n.slots).default)==null?void 0:c.call(a);if(!s)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(s.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${s.length}`);const r=s[0];let l=r.type;return(!v7(l)||Fn(l))&&(l={render(){return s}}),Ye(b7,P7(R7({},t),{key:t.port,component:sr(l),props:r.props}))}}});function O7(t){const n=$e({height:0,width:0,left:0,top:0,update:s,listen:l,pause:a,margin:"0px",padding:"0px"}),o=Wo?document.documentElement||document.body:void 0;function s(){if(!Wo)return;const c=E7(t);if(!c)return;const{height:i,width:p,left:u,top:f}=c.getBoundingClientRect(),d=window.getComputedStyle(c),y=d.margin,m=d.padding;Object.assign(n,{height:i,width:p,left:u,top:o.scrollTop+f,margin:y,padding:m})}const r=B7(s,{immediate:!1});function l(){!Wo||(s(),r.resume())}function a(){r.pause()}return n}let F7=(t,n=21)=>(o=n)=>{let s="",r=o;for(;r--;)s+=t[Math.random()*t.length|0];return s};const tp=F7("abcdefghijklmnopqrstuvwxyz",5);function np(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function M7(t){var n;return t.name||((n=t.__file)==null?void 0:n.split(/[\/\\.]/).slice(-2)[0])||""}var L7=Object.defineProperty,op=Object.getOwnPropertySymbols,H7=Object.prototype.hasOwnProperty,I7=Object.prototype.propertyIsEnumerable,sp=(t,n,o)=>n in t?L7(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,Xr=(t,n)=>{for(var o in n||(n={}))H7.call(n,o)&&sp(t,o,n[o]);if(op)for(var o of op(n))I7.call(n,o)&&sp(t,o,n[o]);return t};function N7(t,n,o={}){const s=M7(n),r=np(s)||tp(),l=N(),a=N(null),c=N(!1),i=N(!1),p=Bd(!0),u=N({}),f=T(()=>Xr(Xr(Xr({},D7),o),u.value)),d=N(0);let y;p.run(()=>{y=O7(l),ue(l,async B=>{B&&(i.value=!0),await ot(),l.value||(i.value=!1)})});const m=np(t);function g(){return`starport-${r}-${m}-${tp()}`}const A=g();return $e({el:l,id:A,port:t,props:a,rect:y,scope:p,isLanded:c,isVisible:i,options:f,liftOffTime:d,component:n,componentName:s,componentId:r,generateId:g,setLocalOptions(B={}){u.value=JSON.parse(JSON.stringify(B))},elRef(){return l},liftOff(){!c.value||(c.value=!1,d.value=Date.now(),y.listen())},land(){c.value||(c.value=!0,y.pause())}})}function j7(t){const n=$e(new Map);function o(r,l){let a=n.get(r);return a||(a=N7(r,l,t),n.set(r,a)),a.component=l,a}function s(r){var l;(l=n.get(r))==null||l.scope.stop(),n.delete(r)}return{portMap:n,dispose:s,getInstance:o}}var q7=Object.defineProperty,U7=Object.defineProperties,J7=Object.getOwnPropertyDescriptors,rp=Object.getOwnPropertySymbols,V7=Object.prototype.hasOwnProperty,W7=Object.prototype.propertyIsEnumerable,lp=(t,n,o)=>n in t?q7(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,z7=(t,n)=>{for(var o in n||(n={}))V7.call(n,o)&&lp(t,o,n[o]);if(rp)for(var o of rp(n))W7.call(n,o)&&lp(t,o,n[o]);return t},K7=(t,n)=>U7(t,J7(n));const Y7=De({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(t){const n=H(za);if(!n)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const o=T(()=>n.getInstance(t.port,t.component)),s=T(()=>{var a;return((a=o.value.el)==null?void 0:a.id)||o.value.id}),r=T(()=>{const a=Date.now()-o.value.liftOffTime,c=Math.max(0,o.value.options.duration-a),i=o.value.rect,p={position:"absolute",left:0,top:0,width:`${i.width}px`,height:`${i.height}px`,margin:i.margin,padding:i.padding,transform:`translate3d(${i.left}px,${i.top}px,0px)`};return!o.value.isVisible||!o.value.el?K7(z7({},p),{zIndex:-1,display:"none"}):(o.value.isLanded?p.display="none":Object.assign(p,{transitionProperty:"all",transitionDuration:`${c}ms`,transitionTimingFunction:o.value.options.easing}),p)}),l={};return()=>{const a=!!(o.value.isLanded&&o.value.el);return Ye("div",{style:r.value,"data-starport-craft":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true",onTransitionend:o.value.land},Ye(Wy,{to:a?`#${s.value}`:"body",disabled:!a},Ye(o.value.component,dn(l,o.value.props))))}}}),G7=De({name:"StarportCarrier",setup(t,{slots:n}){const o=j7(H(od,{}));return Hn().appContext.app.provide(za,o),()=>{var r;return[(r=n.default)==null?void 0:r.call(n),Array.from(o.portMap.entries()).map(([l,{component:a}])=>Ye(Y7,{key:l,port:l,component:a}))]}}});function Z7(t={}){return{install(n){n.provide(od,t),n.component("Starport",$7),n.component("StarportCarrier",G7)}}}function Q7(t){function n(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}n(),window.addEventListener("resize",n),t.app.use(m7),t.app.use(Z7({keepAlive:!0}))}function it(t,n,o){var s,r;return(r=((s=t.instance)==null?void 0:s.$).provides[n])!=null?r:o}function X7(){return{install(t){t.directive("click",{name:"v-click",mounted(n,o){var u,f,d,y;if(qo.value||((u=it(o,Lo))==null?void 0:u.value))return;const s=it(o,_n),r=it(o,Mo),l=it(o,ml),a=o.modifiers.hide!==!1&&o.modifiers.hide!=null,c=o.modifiers.fade!==!1&&o.modifiers.fade!=null,i=((f=s==null?void 0:s.value)==null?void 0:f.length)||0,p=c?Um:kr;if(s&&!((d=s==null?void 0:s.value)!=null&&d.includes(n))&&s.value.push(n),o.value===null&&(o.value=s==null?void 0:s.value.length),!(l!=null&&l.value.has(o.value)))l==null||l.value.set(o.value,[n]);else if(!((y=l==null?void 0:l.value.get(o.value))!=null&&y.includes(n))){const m=(l==null?void 0:l.value.get(o.value))||[];l==null||l.value.set(o.value,[n].concat(m))}n==null||n.classList.toggle(An,!0),r&&ue(r,()=>{var B;const m=(B=r==null?void 0:r.value)!=null?B:0,g=o.value!=null?m>=o.value:m>i;n.classList.contains(Rr)||n.classList.toggle(p,!g),a!==!1&&a!==void 0&&n.classList.toggle(p,g),n.classList.toggle(wo,!1);const A=l==null?void 0:l.value.get(m);A==null||A.forEach((D,E)=>{D.classList.toggle(Ds,!1),E===A.length-1?D.classList.toggle(wo,!0):D.classList.toggle(Ds,!0)}),n.classList.contains(wo)||n.classList.toggle(Ds,g)},{immediate:!0})},unmounted(n,o){n==null||n.classList.toggle(An,!1);const s=it(o,_n);s!=null&&s.value&&hl(s.value,n)}}),t.directive("after",{name:"v-after",mounted(n,o){var c,i;if(qo.value||((c=it(o,Lo))==null?void 0:c.value))return;const s=it(o,_n),r=it(o,Mo),l=it(o,ml),a=s==null?void 0:s.value.length;o.value===void 0&&(o.value=s==null?void 0:s.value.length),l!=null&&l.value.has(o.value)?(i=l==null?void 0:l.value.get(o.value))==null||i.push(n):l==null||l.value.set(o.value,[n]),n==null||n.classList.toggle(An,!0),r&&ue(r,()=>{var u,f,d;const p=((u=r.value)!=null?u:0)>=((d=(f=o.value)!=null?f:a)!=null?d:0);n.classList.contains(Rr)||n.classList.toggle(kr,!p),n.classList.toggle(wo,!1),n.classList.contains(wo)||n.classList.toggle(Ds,p)},{immediate:!0})},unmounted(n){n==null||n.classList.toggle(An,!0)}}),t.directive("click-hide",{name:"v-click-hide",mounted(n,o){var a,c,i;if(qo.value||((a=it(o,Lo))==null?void 0:a.value))return;const s=it(o,_n),r=it(o,Mo),l=((c=s==null?void 0:s.value)==null?void 0:c.length)||0;s&&!((i=s==null?void 0:s.value)!=null&&i.includes(n))&&s.value.push(n),n==null||n.classList.toggle(An,!0),r&&ue(r,()=>{var f;const p=(f=r==null?void 0:r.value)!=null?f:0,u=o.value!=null?p>=o.value:p>l;n.classList.toggle(kr,u),n.classList.toggle(Rr,u)},{immediate:!0})},unmounted(n,o){n==null||n.classList.toggle(An,!1);const s=it(o,_n);s!=null&&s.value&&hl(s.value,n)}})}}}function ew(t,n){const o=Wu(t),s=zu(n,o.currentRoute,o.currentPage);return{nav:{...o,...s,downloadPDF:Fl,next:cn,nextSlide:ss,openInEditor:$_,prev:pn,prevSlide:rs},configs:Ae,themeConfigs:T(()=>Ae.themeConfig)}}function tw(){return{install(t){const n=ew(Zt,St);t.provide(W,$e(n))}}}const Do=Tm(F_);Do.use(mt);Do.use(Lm());Do.use(X7());Do.use(tw());Q7({app:Do,router:mt});Do.mount("#app");export{Ro as $,he as A,_e as B,tt as C,Fv as D,nw as E,xe as F,ow as G,St as H,Ks as I,T_ as J,Jr as K,Pr as L,es as M,Lr as N,uu as O,N0 as P,Aa as Q,L0 as R,Ba as S,Je as T,hf as U,Jv as V,Da as W,$t as X,sw as Y,jt as Z,qu as _,e as a,_s as a0,cs as a1,xn as a2,It as a3,xl as a4,fv as a5,dv as a6,yv as a7,hv as a8,ur as a9,lu as aa,cw as ab,st as ac,C8 as ad,iu as ae,gv as af,ir as ag,Pv as ah,T as b,U as c,De as d,W as e,ft as f,V as g,C as h,H as i,bv as j,P_ as k,Ae as l,Im as m,Le as n,b as o,Eo as p,$e as q,N as r,rw as s,On as t,lw as u,aw as v,ue as w,Y as x,Ze as y,Q as z};
