function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,e,n){t.insertBefore(e,n||null)}function s(t){t.parentNode.removeChild(t)}function c(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function l(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function f(){return u(" ")}function p(){return u("")}function d(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function h(t){return Array.from(t.childNodes)}function m(t,e,n,r){for(let o=0;o<t.length;o+=1){const r=t[o];if(r.nodeName===e){let e=0;const i=[];for(;e<r.attributes.length;){const t=r.attributes[e++];n[t.name]||i.push(t.name)}for(let t=0;t<i.length;t++)r.removeAttribute(i[t]);return t.splice(o,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):l(e)}function g(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return u(e)}function y(t){return g(t," ")}let v;function b(t){v=t}const $=[],w=[],x=[],O=[],E=Promise.resolve();let _=!1;function j(t){x.push(t)}let k=!1;const S=new Set;function A(){if(!k){k=!0;do{for(let t=0;t<$.length;t+=1){const e=$[t];b(e),D(e.$$)}for(b(null),$.length=0;w.length;)w.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];S.has(e)||(S.add(e),e())}x.length=0}while($.length);for(;O.length;)O.pop()();_=!1,k=!1,S.clear()}}function D(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}const P=new Set;let L,N;function M(){L={r:0,c:[],p:L}}function B(){L.r||r(L.c),L=L.p}function W(t,e){t&&t.i&&(P.delete(t),t.i(e))}function T(t,e,n,r){if(t&&t.o){if(P.has(t))return;P.add(t),L.c.push((()=>{P.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function C(t){t&&t.c()}function H(t,e){t&&t.l(e)}function R(t,n,i,a){const{fragment:s,on_mount:c,on_destroy:l,after_update:u}=t.$$;s&&s.m(n,i),a||j((()=>{const n=c.map(e).filter(o);l?l.push(...n):r(n),t.$$.on_mount=[]})),u.forEach(j)}function q(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function z(t,e){-1===t.$$.dirty[0]&&($.push(t),_||(_=!0,E.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function I(e,o,i,a,c,l,u=[-1]){const f=v;b(e);const p=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:o.context||[]),callbacks:n(),dirty:u,skip_bound:!1};let d=!1;if(p.ctx=i?i(e,o.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&c(p.ctx[t],p.ctx[t]=o)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](o),d&&z(e,t)),n})):[],p.update(),d=!0,r(p.before_update),p.fragment=!!a&&a(p.ctx),o.target){if(o.hydrate){const t=h(o.target);p.fragment&&p.fragment.l(t),t.forEach(s)}else p.fragment&&p.fragment.c();o.intro&&W(e.$$.fragment),R(e,o.target,o.anchor,o.customElement),A()}b(f)}class V{$destroy(){q(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function X(){}function Y(t){return t()}function F(){return Object.create(null)}function G(t){t.forEach(Y)}function J(t){return"function"==typeof t}function K(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function Q(t,e,n,r){if(t){const o=U(t,e,n,r);return t[0](o)}}function U(t,e,n,r){return t[1]&&r?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](r(e))):n.ctx}function Z(t,e,n,r,o,i,a){const s=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,i);if(s){const o=U(e,n,r,a);t.p(o,s)}}function tt(t,e){t.appendChild(e)}function et(t,e,n){t.insertBefore(e,n||null)}function nt(t){t.parentNode.removeChild(t)}function rt(t){return document.createElement(t)}function ot(t){return document.createTextNode(t)}function it(){return ot(" ")}function at(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function st(t){return Array.from(t.childNodes)}function ct(t,e,n,r){for(let i=0;i<t.length;i+=1){const r=t[i];if(r.nodeName===e){let e=0;const o=[];for(;e<r.attributes.length;){const t=r.attributes[e++];n[t.name]||o.push(t.name)}for(let t=0;t<o.length;t++)r.removeAttribute(o[t]);return t.splice(i,1)[0]}}return r?(o=e,document.createElementNS("http://www.w3.org/2000/svg",o)):rt(e);var o}function lt(t){return function(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return ot(e)}(t," ")}function ut(t){N=t}function ft(){const t=function(){if(!N)throw new Error("Function called outside component initialization");return N}();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const o=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);r.slice().forEach((e=>{e.call(t,o)}))}}}const pt=[],dt=[],ht=[],mt=[],gt=Promise.resolve();let yt=!1;function vt(t){ht.push(t)}let bt=!1;const $t=new Set;function wt(){if(!bt){bt=!0;do{for(let t=0;t<pt.length;t+=1){const e=pt[t];ut(e),xt(e.$$)}for(ut(null),pt.length=0;dt.length;)dt.pop()();for(let t=0;t<ht.length;t+=1){const e=ht[t];$t.has(e)||($t.add(e),e())}ht.length=0}while(pt.length);for(;mt.length;)mt.pop()();yt=!1,bt=!1,$t.clear()}}function xt(t){if(null!==t.fragment){t.update(),G(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(vt)}}const Ot=new Set;let Et;function _t(){Et={r:0,c:[],p:Et}}function jt(){Et.r||G(Et.c),Et=Et.p}function kt(t,e){t&&t.i&&(Ot.delete(t),t.i(e))}function St(t,e,n,r){if(t&&t.o){if(Ot.has(t))return;Ot.add(t),Et.c.push((()=>{Ot.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function At(t,e,n,r,o,i,a=[-1]){const s=N;ut(t);const c=t.$$={fragment:null,ctx:null,props:i,update:X,not_equal:o,bound:F(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s?s.$$.context:e.context||[]),callbacks:F(),dirty:a,skip_bound:!1};let l=!1;if(c.ctx=n?n(t,e.props||{},((e,n,...r)=>{const i=r.length?r[0]:n;return c.ctx&&o(c.ctx[e],c.ctx[e]=i)&&(!c.skip_bound&&c.bound[e]&&c.bound[e](i),l&&(s=e,-1===(a=t).$$.dirty[0]&&(pt.push(a),yt||(yt=!0,gt.then(wt)),a.$$.dirty.fill(0)),a.$$.dirty[s/31|0]|=1<<s%31)),n;var a,s})):[],c.update(),l=!0,G(c.before_update),c.fragment=!!r&&r(c.ctx),e.target){if(e.hydrate){const t=st(e.target);c.fragment&&c.fragment.l(t),t.forEach(nt)}else c.fragment&&c.fragment.c();e.intro&&kt(t.$$.fragment),function(t,e,n,r){const{fragment:o,on_mount:i,on_destroy:a,after_update:s}=t.$$;o&&o.m(e,n),r||vt((()=>{const e=i.map(Y).filter(J);a?a.push(...e):G(e),t.$$.on_mount=[]})),s.forEach(vt)}(t,e.target,e.anchor,e.customElement),wt()}ut(s)}class Dt{$destroy(){(function(t,e){const n=t.$$;null!==n.fragment&&(G(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])})(this,1),this.$destroy=X}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var Pt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Lt(t){var e={exports:{}};return t(e,e.exports),e.exports}var Nt=Lt((function(t,e){var n,r=Pt&&Pt.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0}),e.ArgumentError=void 0;var o=function(t){function e(e){var n=t.call(this,e)||this;return n.name="ArgumentError",n}return r(e,t),e}(Error);e.ArgumentError=o})),Mt=Lt((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.array2string=void 0,e.array2string=function(t){if(!t||0===t.length)return null;for(var e="",n=0,r=t;n<r.length;n++){var o=r[n];if("string"!=typeof o){if(o instanceof Array){var i=o[0];if("string"!=typeof i)throw new Nt.ArgumentError("Error type of 1st argument.");if(1===o.length){i&&(e&&(e+=" "),e+=i);continue}if(i&&o[1]){e&&(e+=" "),e+=i;continue}}}else o&&(e&&(e+=" "),e+=o)}return e}})),Bt=Lt((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.noPxStyleList=void 0,e.noPxStyleList=["z-index"]})),Wt=Lt((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.array2StyleString=void 0,e.array2StyleString=function(t){if(!t||0===t.length)return null;for(var e="",n=0,r=t;n<r.length;n++){var o=r[n];if("string"!=typeof o){if(!(o.length>2)||o[2]){var i=o[0],a=o[1];null!=a&&("string"!=typeof a||a)&&("number"==typeof a&&a&&!Bt.noPxStyleList.includes(i)&&(a+="px"),(e+=i+":"+a).endsWith(";")||(e+=";"))}}else(e+=o).endsWith(";")||(e+=";")}return e||null}})),Tt=Lt((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.array2StyleString=e.array2string=void 0,Object.defineProperty(e,"array2string",{enumerable:!0,get:function(){return Mt.array2string}}),Object.defineProperty(e,"array2StyleString",{enumerable:!0,get:function(){return Wt.array2StyleString}})}));function Ct(t){let e,n;const r=t[3].default,o=Q(r,t,t[2],null);return{c(){e=rt("section"),o&&o.c(),this.h()},l(t){e=ct(t,"SECTION",{class:!0});var n=st(e);o&&o.l(n),n.forEach(nt),this.h()},h(){at(e,"class",t[0])},m(t,r){et(t,e,r),o&&o.m(e,null),n=!0},p(t,[i]){o&&o.p&&4&i&&Z(o,r,t,t[2],i,null,null),(!n||1&i)&&at(e,"class",t[0])},i(t){n||(kt(o,t),n=!0)},o(t){St(o,t),n=!1},d(t){t&&nt(e),o&&o.d(t)}}}function Ht(t,e,n){let r,{$$slots:o={},$$scope:i}=e,{direction:a="horizontal"}=e;return t.$$set=t=>{"direction"in t&&n(1,a=t.direction),"$$scope"in t&&n(2,i=t.$$scope)},t.$$.update=()=>{2&t.$$.dirty&&n(0,r=Tt.array2string(["seu-container",["is-vertical","vertical"===a]]))},[r,a,i,o]}class Rt extends Dt{constructor(t){super(),At(this,t,Ht,Ct,K,{direction:1})}}function qt(t){let e,n;const r=t[1].default,o=Q(r,t,t[0],null);return{c(){e=rt("main"),o&&o.c(),this.h()},l(t){e=ct(t,"MAIN",{class:!0});var n=st(e);o&&o.l(n),n.forEach(nt),this.h()},h(){at(e,"class","seu-main")},m(t,r){et(t,e,r),o&&o.m(e,null),n=!0},p(t,[e]){o&&o.p&&1&e&&Z(o,r,t,t[0],e,null,null)},i(t){n||(kt(o,t),n=!0)},o(t){St(o,t),n=!1},d(t){t&&nt(e),o&&o.d(t)}}}function zt(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,r]}class It extends Dt{constructor(t){super(),At(this,t,zt,qt,K,{})}}function Vt(t){let e,n,r;const o=t[2].default,i=Q(o,t,t[1],null);return{c(){e=rt("header"),i&&i.c(),this.h()},l(t){e=ct(t,"HEADER",{class:!0,style:!0});var n=st(e);i&&i.l(n),n.forEach(nt),this.h()},h(){at(e,"class","seu-header"),at(e,"style",n=`height:${t[0]}`)},m(t,n){et(t,e,n),i&&i.m(e,null),r=!0},p(t,[a]){i&&i.p&&2&a&&Z(i,o,t,t[1],a,null,null),(!r||1&a&&n!==(n=`height:${t[0]}`))&&at(e,"style",n)},i(t){r||(kt(i,t),r=!0)},o(t){St(i,t),r=!1},d(t){t&&nt(e),i&&i.d(t)}}}function Xt(t,e,n){let{$$slots:r={},$$scope:o}=e,{height:i="60px"}=e;return t.$$set=t=>{"height"in t&&n(0,i=t.height),"$$scope"in t&&n(1,o=t.$$scope)},[i,o,r]}class Yt extends Dt{constructor(t){super(),At(this,t,Xt,Vt,K,{height:0})}}function Ft(t){let e,n,r;const o=t[2].default,i=Q(o,t,t[1],null);return{c(){e=rt("aside"),i&&i.c(),this.h()},l(t){e=ct(t,"ASIDE",{class:!0,style:!0});var n=st(e);i&&i.l(n),n.forEach(nt),this.h()},h(){at(e,"class","seu-aside"),at(e,"style",n=`width:${t[0]}`)},m(t,n){et(t,e,n),i&&i.m(e,null),r=!0},p(t,[a]){i&&i.p&&2&a&&Z(i,o,t,t[1],a,null,null),(!r||1&a&&n!==(n=`width:${t[0]}`))&&at(e,"style",n)},i(t){r||(kt(i,t),r=!0)},o(t){St(i,t),r=!1},d(t){t&&nt(e),i&&i.d(t)}}}function Gt(t,e,n){let{$$slots:r={},$$scope:o}=e,{width:i="300px"}=e;return t.$$set=t=>{"width"in t&&n(0,i=t.width),"$$scope"in t&&n(1,o=t.$$scope)},[i,o,r]}class Jt extends Dt{constructor(t){super(),At(this,t,Gt,Ft,K,{width:0})}}const Kt=t=>({}),Qt=t=>({});function Ut(t){let e;return{c(){e=rt("i"),this.h()},l(t){e=ct(t,"I",{class:!0}),st(e).forEach(nt),this.h()},h(){at(e,"class",t[2])},m(t,n){et(t,e,n)},p(t,n){4&n&&at(e,"class",t[2])},d(t){t&&nt(e)}}}function Zt(t){let e,n;const r=t[9].default,o=Q(r,t,t[8],null);return{c(){e=rt("span"),o&&o.c(),this.h()},l(t){e=ct(t,"SPAN",{class:!0});var n=st(e);o&&o.l(n),n.forEach(nt),this.h()},h(){at(e,"class","seu-link--inner")},m(t,r){et(t,e,r),o&&o.m(e,null),n=!0},p(t,e){o&&o.p&&256&e&&Z(o,r,t,t[8],e,null,null)},i(t){n||(kt(o,t),n=!0)},o(t){St(o,t),n=!1},d(t){t&&nt(e),o&&o.d(t)}}}function te(t){let e;const n=t[9].icon,r=Q(n,t,t[8],Qt);return{c(){r&&r.c()},l(t){r&&r.l(t)},m(t,n){r&&r.m(t,n),e=!0},p(t,e){r&&r.p&&256&e&&Z(r,n,t,t[8],e,Kt,Qt)},i(t){e||(kt(r,t),e=!0)},o(t){St(r,t),e=!1},d(t){r&&r.d(t)}}}function ee(t){let e,n,r,o,i,a,s,c=t[2]&&Ut(t),l=t[5].default&&Zt(t),u=t[5].icon&&te(t);return{c(){e=rt("a"),c&&c.c(),n=it(),l&&l.c(),r=it(),u&&u.c(),this.h()},l(t){e=ct(t,"A",{class:!0,href:!0});var o=st(e);c&&c.l(o),n=lt(o),l&&l.l(o),r=lt(o),u&&u.l(o),o.forEach(nt),this.h()},h(){at(e,"class",t[3]),at(e,"href",o=t[0]?null:t[1]?t[1]:null)},m(o,f){et(o,e,f),c&&c.m(e,null),tt(e,n),l&&l.m(e,null),tt(e,r),u&&u.m(e,null),i=!0,a||(s=function(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}(e,"click",t[4]),a=!0)},p(t,[a]){t[2]?c?c.p(t,a):(c=Ut(t),c.c(),c.m(e,n)):c&&(c.d(1),c=null),t[5].default?l?(l.p(t,a),32&a&&kt(l,1)):(l=Zt(t),l.c(),kt(l,1),l.m(e,r)):l&&(_t(),St(l,1,1,(()=>{l=null})),jt()),t[5].icon?u?(u.p(t,a),32&a&&kt(u,1)):(u=te(t),u.c(),kt(u,1),u.m(e,null)):u&&(_t(),St(u,1,1,(()=>{u=null})),jt()),(!i||8&a)&&at(e,"class",t[3]),(!i||3&a&&o!==(o=t[0]?null:t[1]?t[1]:null))&&at(e,"href",o)},i(t){i||(kt(l),kt(u),i=!0)},o(t){St(l),St(u),i=!1},d(t){t&&nt(e),c&&c.d(),l&&l.d(),u&&u.d(),a=!1,s()}}}function ne(t,e,n){let r,{$$slots:o={},$$scope:i}=e;const a=function(t){const e={};for(const n in t)e[n]=!0;return e}(o);let{type:s="default"}=e,{underline:c=!0}=e,{disabled:l=!1}=e,{href:u=""}=e,{icon:f=""}=e;const p=ft();return t.$$set=t=>{"type"in t&&n(6,s=t.type),"underline"in t&&n(7,c=t.underline),"disabled"in t&&n(0,l=t.disabled),"href"in t&&n(1,u=t.href),"icon"in t&&n(2,f=t.icon),"$$scope"in t&&n(8,i=t.$$scope)},t.$$.update=()=>{193&t.$$.dirty&&n(3,r=Tt.array2string(["seu-link",`seu-link--${s}`,["is-disabled",l],["is-underline",c&&!l]]))},[l,u,f,r,function(t){l||u||p("click",t)},a,s,c,i,o]}class re extends Dt{constructor(t){super(),At(this,t,ne,ee,K,{type:6,underline:7,disabled:0,href:1,icon:2})}}var oe,ie,ae,se;(ie=oe||(oe={}))[ie.hover=0]="hover",ie[ie.click=1]="click",(se=ae||(ae={}))[se.horizontal=0]="horizontal",se[se.vertical=1]="vertical";var ce="top",le="bottom",ue="right",fe="left",pe=[ce,le,ue,fe],de=pe.reduce((function(t,e){return t.concat([e+"-start",e+"-end"])}),[]),he=[].concat(pe,["auto"]).reduce((function(t,e){return t.concat([e,e+"-start",e+"-end"])}),[]);function me(t){return t?(t.nodeName||"").toLowerCase():null}function ge(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function ye(t){return t instanceof ge(t).Element||t instanceof Element}function ve(t){return t instanceof ge(t).HTMLElement||t instanceof HTMLElement}function be(t){return"undefined"!=typeof ShadowRoot&&(t instanceof ge(t).ShadowRoot||t instanceof ShadowRoot)}var $e={name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var n=e.styles[t]||{},r=e.attributes[t]||{},o=e.elements[t];ve(o)&&me(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(t){var e=r[t];!1===e?o.removeAttribute(t):o.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach((function(t){var r=e.elements[t],o=e.attributes[t]||{},i=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:n[t]).reduce((function(t,e){return t[e]="",t}),{});ve(r)&&me(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(t){r.removeAttribute(t)})))}))}},requires:["computeStyles"]};function we(t){return t.split("-")[0]}function xe(t){var e=t.getBoundingClientRect();return{width:e.width,height:e.height,top:e.top,right:e.right,bottom:e.bottom,left:e.left,x:e.left,y:e.top}}function Oe(t){var e=xe(t),n=t.offsetWidth,r=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:r}}function Ee(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&be(n)){var r=e;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function _e(t){return ge(t).getComputedStyle(t)}function je(t){return["table","td","th"].indexOf(me(t))>=0}function ke(t){return((ye(t)?t.ownerDocument:t.document)||window.document).documentElement}function Se(t){return"html"===me(t)?t:t.assignedSlot||t.parentNode||(be(t)?t.host:null)||ke(t)}function Ae(t){return ve(t)&&"fixed"!==_e(t).position?t.offsetParent:null}function De(t){for(var e=ge(t),n=Ae(t);n&&je(n)&&"static"===_e(n).position;)n=Ae(n);return n&&("html"===me(n)||"body"===me(n)&&"static"===_e(n).position)?e:n||function(t){for(var e=-1!==navigator.userAgent.toLowerCase().indexOf("firefox"),n=Se(t);ve(n)&&["html","body"].indexOf(me(n))<0;){var r=_e(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||e&&"filter"===r.willChange||e&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(t)||e}function Pe(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}var Le=Math.max,Ne=Math.min,Me=Math.round;function Be(t,e,n){return Le(t,Ne(e,n))}function We(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},t)}function Te(t,e){return e.reduce((function(e,n){return e[n]=t,e}),{})}var Ce={top:"auto",right:"auto",bottom:"auto",left:"auto"};function He(t){var e,n,r,o,i,a=t.popper,s=t.popperRect,c=t.placement,l=t.offsets,u=t.position,f=t.gpuAcceleration,p=t.adaptive,d=t.roundOffsets,h=!0===d?(r=(n=l).x,o=n.y,i=window.devicePixelRatio||1,{x:Me(Me(r*i)/i)||0,y:Me(Me(o*i)/i)||0}):"function"==typeof d?d(l):l,m=h.x,g=void 0===m?0:m,y=h.y,v=void 0===y?0:y,b=l.hasOwnProperty("x"),$=l.hasOwnProperty("y"),w=fe,x=ce,O=window;if(p){var E=De(a),_="clientHeight",j="clientWidth";E===ge(a)&&"static"!==_e(E=ke(a)).position&&(_="scrollHeight",j="scrollWidth"),E=E,c===ce&&(x=le,v-=E[_]-s.height,v*=f?1:-1),c===fe&&(w=ue,g-=E[j]-s.width,g*=f?1:-1)}var k,S=Object.assign({position:u},p&&Ce);return f?Object.assign({},S,((k={})[x]=$?"0":"",k[w]=b?"0":"",k.transform=(O.devicePixelRatio||1)<2?"translate("+g+"px, "+v+"px)":"translate3d("+g+"px, "+v+"px, 0)",k)):Object.assign({},S,((e={})[x]=$?v+"px":"",e[w]=b?g+"px":"",e.transform="",e))}var Re={passive:!0},qe={left:"right",right:"left",bottom:"top",top:"bottom"};function ze(t){return t.replace(/left|right|bottom|top/g,(function(t){return qe[t]}))}var Ie={start:"end",end:"start"};function Ve(t){return t.replace(/start|end/g,(function(t){return Ie[t]}))}function Xe(t){var e=ge(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Ye(t){return xe(ke(t)).left+Xe(t).scrollLeft}function Fe(t){var e=_e(t),n=e.overflow,r=e.overflowX,o=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function Ge(t){return["html","body","#document"].indexOf(me(t))>=0?t.ownerDocument.body:ve(t)&&Fe(t)?t:Ge(Se(t))}function Je(t,e){var n;void 0===e&&(e=[]);var r=Ge(t),o=r===(null==(n=t.ownerDocument)?void 0:n.body),i=ge(r),a=o?[i].concat(i.visualViewport||[],Fe(r)?r:[]):r,s=e.concat(a);return o?s:s.concat(Je(Se(a)))}function Ke(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Qe(t,e){return"viewport"===e?Ke((r=ge(n=t),o=ke(n),i=r.visualViewport,a=o.clientWidth,s=o.clientHeight,c=0,l=0,i&&(a=i.width,s=i.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(c=i.offsetLeft,l=i.offsetTop)),{width:a,height:s,x:c+Ye(n),y:l})):ve(e)?function(t){var e=xe(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}(e):Ke(function(t){var e,n=ke(t),r=Xe(t),o=null==(e=t.ownerDocument)?void 0:e.body,i=Le(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=Le(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+Ye(t),c=-r.scrollTop;return"rtl"===_e(o||n).direction&&(s+=Le(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:c}}(ke(t)));var n,r,o,i,a,s,c,l}function Ue(t){return t.split("-")[1]}function Ze(t){var e,n=t.reference,r=t.element,o=t.placement,i=o?we(o):null,a=o?Ue(o):null,s=n.x+n.width/2-r.width/2,c=n.y+n.height/2-r.height/2;switch(i){case ce:e={x:s,y:n.y-r.height};break;case le:e={x:s,y:n.y+n.height};break;case ue:e={x:n.x+n.width,y:c};break;case fe:e={x:n.x-r.width,y:c};break;default:e={x:n.x,y:n.y}}var l=i?Pe(i):null;if(null!=l){var u="y"===l?"height":"width";switch(a){case"start":e[l]=e[l]-(n[u]/2-r[u]/2);break;case"end":e[l]=e[l]+(n[u]/2-r[u]/2)}}return e}function tn(t,e){void 0===e&&(e={});var n=e,r=n.placement,o=void 0===r?t.placement:r,i=n.boundary,a=void 0===i?"clippingParents":i,s=n.rootBoundary,c=void 0===s?"viewport":s,l=n.elementContext,u=void 0===l?"popper":l,f=n.altBoundary,p=void 0!==f&&f,d=n.padding,h=void 0===d?0:d,m=We("number"!=typeof h?h:Te(h,pe)),g="popper"===u?"reference":"popper",y=t.elements.reference,v=t.rects.popper,b=t.elements[p?g:u],$=function(t,e,n){var r,o,i,a="clippingParents"===e?(o=Je(Se(r=t)),ye(i=["absolute","fixed"].indexOf(_e(r).position)>=0&&ve(r)?De(r):r)?o.filter((function(t){return ye(t)&&Ee(t,i)&&"body"!==me(t)})):[]):[].concat(e),s=[].concat(a,[n]),c=s[0],l=s.reduce((function(e,n){var r=Qe(t,n);return e.top=Le(r.top,e.top),e.right=Ne(r.right,e.right),e.bottom=Ne(r.bottom,e.bottom),e.left=Le(r.left,e.left),e}),Qe(t,c));return l.width=l.right-l.left,l.height=l.bottom-l.top,l.x=l.left,l.y=l.top,l}(ye(b)?b:b.contextElement||ke(t.elements.popper),a,c),w=xe(y),x=Ze({reference:w,element:v,strategy:"absolute",placement:o}),O=Ke(Object.assign({},v,x)),E="popper"===u?O:w,_={top:$.top-E.top+m.top,bottom:E.bottom-$.bottom+m.bottom,left:$.left-E.left+m.left,right:E.right-$.right+m.right},j=t.modifiersData.offset;if("popper"===u&&j){var k=j[o];Object.keys(_).forEach((function(t){var e=[ue,le].indexOf(t)>=0?1:-1,n=[ce,le].indexOf(t)>=0?"y":"x";_[t]+=k[n]*e}))}return _}function en(t,e,n){return void 0===n&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function nn(t){return[ce,ue,le,fe].some((function(e){return t[e]>=0}))}var rn={placement:"bottom",modifiers:[],strategy:"absolute"};!function(t){void 0===t&&(t={});var e=t,n=e.defaultModifiers,r=void 0===n?[]:n,o=e.defaultOptions,i=void 0===o?rn:o}({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,n=t.instance,r=t.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,c=ge(e.elements.popper),l=[].concat(e.scrollParents.reference,e.scrollParents.popper);return i&&l.forEach((function(t){t.addEventListener("scroll",n.update,Re)})),s&&c.addEventListener("resize",n.update,Re),function(){i&&l.forEach((function(t){t.removeEventListener("scroll",n.update,Re)})),s&&c.removeEventListener("resize",n.update,Re)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,n=t.name;e.modifiersData[n]=Ze({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,n=t.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,c=void 0===s||s,l={placement:we(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:o};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,He(Object.assign({},l,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:a,roundOffsets:c})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,He(Object.assign({},l,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}},$e,{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,n=t.options,r=t.name,o=n.offset,i=void 0===o?[0,0]:o,a=he.reduce((function(t,n){return t[n]=(r=n,o=e.rects,a=i,s=we(r),c=[fe,ce].indexOf(s)>=0?-1:1,l="function"==typeof a?a(Object.assign({},o,{placement:r})):a,u=l[0],f=l[1],u=u||0,f=(f||0)*c,[fe,ue].indexOf(s)>=0?{x:f,y:u}:{x:u,y:f}),t;var r,o,a,s,c,l,u,f}),{}),s=a[e.placement],c=s.x,l=s.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=c,e.modifiersData.popperOffsets.y+=l),e.modifiersData[r]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,n=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,c=n.fallbackPlacements,l=n.padding,u=n.boundary,f=n.rootBoundary,p=n.altBoundary,d=n.flipVariations,h=void 0===d||d,m=n.allowedAutoPlacements,g=e.options.placement,y=we(g),v=c||(y!==g&&h?function(t){if("auto"===we(t))return[];var e=ze(t);return[Ve(t),e,Ve(e)]}(g):[ze(g)]),b=[g].concat(v).reduce((function(t,n){return t.concat("auto"===we(n)?function(t,e){void 0===e&&(e={});var n=e,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,l=void 0===c?he:c,u=Ue(r),f=u?s?de:de.filter((function(t){return Ue(t)===u})):pe,p=f.filter((function(t){return l.indexOf(t)>=0}));0===p.length&&(p=f);var d=p.reduce((function(e,n){return e[n]=tn(t,{placement:n,boundary:o,rootBoundary:i,padding:a})[we(n)],e}),{});return Object.keys(d).sort((function(t,e){return d[t]-d[e]}))}(e,{placement:n,boundary:u,rootBoundary:f,padding:l,flipVariations:h,allowedAutoPlacements:m}):n)}),[]),$=e.rects.reference,w=e.rects.popper,x=new Map,O=!0,E=b[0],_=0;_<b.length;_++){var j=b[_],k=we(j),S="start"===Ue(j),A=[ce,le].indexOf(k)>=0,D=A?"width":"height",P=tn(e,{placement:j,boundary:u,rootBoundary:f,altBoundary:p,padding:l}),L=A?S?ue:fe:S?le:ce;$[D]>w[D]&&(L=ze(L));var N=ze(L),M=[];if(i&&M.push(P[k]<=0),s&&M.push(P[L]<=0,P[N]<=0),M.every((function(t){return t}))){E=j,O=!1;break}x.set(j,M)}if(O)for(var B=function(t){var e=b.find((function(e){var n=x.get(e);if(n)return n.slice(0,t).every((function(t){return t}))}));if(e)return E=e,"break"},W=h?3:1;W>0&&"break"!==B(W);W--);e.placement!==E&&(e.modifiersData[r]._skip=!0,e.placement=E,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,n=t.options,r=t.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,c=n.boundary,l=n.rootBoundary,u=n.altBoundary,f=n.padding,p=n.tether,d=void 0===p||p,h=n.tetherOffset,m=void 0===h?0:h,g=tn(e,{boundary:c,rootBoundary:l,padding:f,altBoundary:u}),y=we(e.placement),v=Ue(e.placement),b=!v,$=Pe(y),w="x"===$?"y":"x",x=e.modifiersData.popperOffsets,O=e.rects.reference,E=e.rects.popper,_="function"==typeof m?m(Object.assign({},e.rects,{placement:e.placement})):m,j={x:0,y:0};if(x){if(i||s){var k="y"===$?ce:fe,S="y"===$?le:ue,A="y"===$?"height":"width",D=x[$],P=x[$]+g[k],L=x[$]-g[S],N=d?-E[A]/2:0,M="start"===v?O[A]:E[A],B="start"===v?-E[A]:-O[A],W=e.elements.arrow,T=d&&W?Oe(W):{width:0,height:0},C=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},H=C[k],R=C[S],q=Be(0,O[A],T[A]),z=b?O[A]/2-N-q-H-_:M-q-H-_,I=b?-O[A]/2+N+q+R+_:B+q+R+_,V=e.elements.arrow&&De(e.elements.arrow),X=V?"y"===$?V.clientTop||0:V.clientLeft||0:0,Y=e.modifiersData.offset?e.modifiersData.offset[e.placement][$]:0,F=x[$]+z-Y-X,G=x[$]+I-Y;if(i){var J=Be(d?Ne(P,F):P,D,d?Le(L,G):L);x[$]=J,j[$]=J-D}if(s){var K="x"===$?ce:fe,Q="x"===$?le:ue,U=x[w],Z=U+g[K],tt=U-g[Q],et=Be(d?Ne(Z,F):Z,U,d?Le(tt,G):tt);x[w]=et,j[w]=et-U}}e.modifiersData[r]=j}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,n,r,o=t.state,i=t.name,a=t.options,s=o.elements.arrow,c=o.modifiersData.popperOffsets,l=we(o.placement),u=Pe(l),f=[fe,ue].indexOf(l)>=0?"height":"width";if(s&&c){var p=(n=a.padding,r=o,We("number"!=typeof(n="function"==typeof n?n(Object.assign({},r.rects,{placement:r.placement})):n)?n:Te(n,pe))),d=Oe(s),h="y"===u?ce:fe,m="y"===u?le:ue,g=o.rects.reference[f]+o.rects.reference[u]-c[u]-o.rects.popper[f],y=c[u]-o.rects.reference[u],v=De(s),b=v?"y"===u?v.clientHeight||0:v.clientWidth||0:0,$=g/2-y/2,w=p[h],x=b-d[f]-p[m],O=b/2-d[f]/2+$,E=Be(w,O,x),_=u;o.modifiersData[i]=((e={})[_]=E,e.centerOffset=E-O,e)}},effect:function(t){var e=t.state,n=t.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=e.elements.popper.querySelector(r)))&&Ee(e.elements.popper,r)&&(e.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,n=t.name,r=e.rects.reference,o=e.rects.popper,i=e.modifiersData.preventOverflow,a=tn(e,{elementContext:"reference"}),s=tn(e,{altBoundary:!0}),c=en(a,r),l=en(s,o,i),u=nn(c),f=nn(l);e.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:f},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":f})}}]});export{Jt as D,Yt as L,V as S,It as T,a,C as b,g as c,s as d,l as e,m as f,h as g,H as h,I as i,W as j,T as k,q as l,R as m,t as n,re as o,f as p,y as q,M as r,i as s,u as t,B as u,c as v,p as w,d as x,r as y,Rt as z};
