function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function s(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(n,e,o){n.$$.on_destroy.push(function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(e,o))}function u(t,n,e,o){if(t){const r=f(t,n,e,o);return t[0](r)}}function f(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function a(t,n,e,o,r,s,i){const c=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,s);if(c){const r=f(n,e,o,i);t.p(r,c)}}function l(t,n){t.appendChild(n)}function h(t,n,e){t.insertBefore(n,e||null)}function d(t){t.parentNode.removeChild(t)}function p(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function $(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function m(){return g(" ")}function b(){return g("")}function y(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function x(t){return Array.from(t.childNodes)}function _(t,n,e,o){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===n){let n=0;const s=[];for(;n<o.attributes.length;){const t=o.attributes[n++];e[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):$(n)}function w(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=""+n,t.splice(e,1)[0]}return g(n)}function v(t){return w(t," ")}function E(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function k(t,n,e){t.classList[e?"add":"remove"](n)}function A(t,n=document.body){return Array.from(n.querySelectorAll(t))}class N{constructor(t=null){this.a=t,this.e=this.n=null}m(t,n,e=null){this.e||(this.e=$(n.nodeName),this.t=n,this.h(t)),this.i(e)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let n=0;n<this.n.length;n+=1)h(this.t,this.n[n],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(d)}}let j;function S(t){j=t}function M(){if(!j)throw new Error("Function called outside component initialization");return j}function O(t){M().$$.on_mount.push(t)}function T(t){M().$$.after_update.push(t)}function q(t,n){M().$$.context.set(t,n)}function C(t){return M().$$.context.get(t)}const L=[],z=[],B=[],F=[],H=Promise.resolve();let D=!1;function G(t){B.push(t)}let I=!1;const J=new Set;function K(){if(!I){I=!0;do{for(let t=0;t<L.length;t+=1){const n=L[t];S(n),P(n.$$)}for(S(null),L.length=0;z.length;)z.pop()();for(let t=0;t<B.length;t+=1){const n=B[t];J.has(n)||(J.add(n),n())}B.length=0}while(L.length);for(;F.length;)F.pop()();D=!1,I=!1,J.clear()}}function P(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(G)}}const Q=new Set;let R;function U(){R={r:0,c:[],p:R}}function V(){R.r||r(R.c),R=R.p}function W(t,n){t&&t.i&&(Q.delete(t),t.i(n))}function X(t,n,e,o){if(t&&t.o){if(Q.has(t))return;Q.add(t),R.c.push((()=>{Q.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function Y(t,n){const e={},o={},r={$$scope:1};let s=t.length;for(;s--;){const i=t[s],c=n[s];if(c){for(const t in i)t in c||(o[t]=1);for(const t in c)r[t]||(e[t]=c[t],r[t]=1);t[s]=c}else for(const t in i)r[t]=1}for(const i in o)i in e||(e[i]=void 0);return e}function Z(t){return"object"==typeof t&&null!==t?t:{}}function tt(t){t&&t.c()}function nt(t,n){t&&t.l(n)}function et(t,n,o,i){const{fragment:c,on_mount:u,on_destroy:f,after_update:a}=t.$$;c&&c.m(n,o),i||G((()=>{const n=u.map(e).filter(s);f?f.push(...n):r(n),t.$$.on_mount=[]})),a.forEach(G)}function ot(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function rt(t,n){-1===t.$$.dirty[0]&&(L.push(t),D||(D=!0,H.then(K)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function st(n,e,s,i,c,u,f=[-1]){const a=j;S(n);const l=n.$$={fragment:null,ctx:null,props:u,update:t,not_equal:c,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:e.context||[]),callbacks:o(),dirty:f,skip_bound:!1};let h=!1;if(l.ctx=s?s(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return l.ctx&&c(l.ctx[t],l.ctx[t]=r)&&(!l.skip_bound&&l.bound[t]&&l.bound[t](r),h&&rt(n,t)),e})):[],l.update(),h=!0,r(l.before_update),l.fragment=!!i&&i(l.ctx),e.target){if(e.hydrate){const t=x(e.target);l.fragment&&l.fragment.l(t),t.forEach(d)}else l.fragment&&l.fragment.c();e.intro&&W(n.$$.fragment),et(n,e.target,e.anchor,e.customElement),K()}S(a)}class it{$destroy(){ot(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ct=[];function ut(n,e=t){let o;const r=[];function s(t){if(i(n,t)&&(n=t,o)){const t=!ct.length;for(let e=0;e<r.length;e+=1){const t=r[e];t[1](),ct.push(t,n)}if(t){for(let t=0;t<ct.length;t+=2)ct[t][0](ct[t+1]);ct.length=0}}}return{set:s,update:function(t){s(t(n))},subscribe:function(i,c=t){const u=[i,c];return r.push(u),1===r.length&&(o=e(s)||t),i(n),()=>{const t=r.indexOf(u);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}export{n as A,U as B,ut as C,k as D,l as E,u as F,A as G,a as H,p as I,c as J,C as K,t as L,N as M,it as S,x as a,y as b,_ as c,d,$ as e,h as f,w as g,E as h,st as i,tt as j,m as k,b as l,nt as m,v as n,et as o,Y as p,Z as q,X as r,i as s,g as t,V as u,W as v,ot as w,q as x,T as y,O as z};
