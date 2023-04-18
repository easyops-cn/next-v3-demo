"use strict";(self.webpackChunk_next_bricks_containers=self.webpackChunk_next_bricks_containers||[]).push([[802,628],{8862:(e,t,r)=>{r.r(t),r.d(t,{MicroView:()=>u});var n,i,a,o,s,c,l,u,f=r(5866),p=r(6234),d=r(3395),v=r(6171),h=r(381),g=r(687),m=r(5303),w=r(8657),y=r.n(w),b=r(1785),Z=r(4949),E=r(8530),{defineElement:T,property:k}=(0,b.createDecorators)();i=T("containers.micro-view",{styleTexts:[E.Z]}),a=k(),s=k();var x=new WeakMap,S=new WeakMap,j=new WeakSet;class z extends Z.ReactNextElement{constructor(){super(...arguments),(0,f.Z)(this,j),(0,d.Z)(this,x,{writable:!0,value:(l(this),o(this))}),(0,d.Z)(this,S,{writable:!0,value:c(this)}),(0,p.Z)(this,"renderCallback",(()=>{var e=(0,v.Z)(this,j,N).call(this,"slot[name='toolbar']");null==e||e.addEventListener("slotchange",(()=>{this.hasToolbar=e.assignedElements().length>0}))}))}get pageTitle(){return(0,g.Z)(this,x)}set pageTitle(e){(0,h.Z)(this,x,e)}get hasToolbar(){return(0,g.Z)(this,S)}set hasToolbar(e){(0,h.Z)(this,S,e)}render(){return y().createElement(P,{pageTitle:this.pageTitle,callback:this.renderCallback})}}function N(e){var t;return null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(e)}function P(e){var{pageTitle:t,callback:r}=e;return y().createElement("div",{className:"micro-view-wrapper",ref:r},y().createElement("div",{className:"header"},t&&y().createElement("div",{className:"page-title"},t),y().createElement("div",{className:"toolbar"},y().createElement("slot",{name:"toolbar"}))),y().createElement("div",{className:"body"},y().createElement("slot",null)))}({e:[o,c,l],c:[u,n]}=(0,m.Z)(z,[[a,1,"pageTitle"],[s,1,"hasToolbar"]],[i])),n()},8530:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(9601),i=r.n(n),a=r(2609),o=r.n(a)()(i());o.push([e.id,":host([has-toolbar]) .micro-view-wrapper{padding-top:var(--page-title-margin-top)}:host([has-toolbar]) .header{margin:9px 0}.micro-view-wrapper{padding:var(--page-padding)}.header{display:flex;justify-content:space-between;align-items:center}.page-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:var(--page-title-font-size);font-weight:var(--page-title-font-weight);line-height:32px}.toolbar{display:flex;justify-content:flex-end}",""]);const s=o.toString()},2609:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,i,a){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(o[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);n&&o[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),i&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=i):u[4]="".concat(i)),t.push(u))}},t}},9601:e=>{e.exports=function(e){return e[1]}},5303:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(6522);function i(e,t,r){return(i=function(){function e(e,t){return function(n){!function(e,t){if(e.v)throw new Error("attempted to call addInitializer after decoration was finished")}(t),r(n,"An initializer"),e.push(n)}}function t(t,r,n,i,a,o,s,c){var l;switch(a){case 1:l="accessor";break;case 2:l="method";break;case 3:l="getter";break;case 4:l="setter";break;default:l="field"}var u,f,p={kind:l,name:s?"#"+r:r,static:o,private:s},d={v:!1};0!==a&&(p.addInitializer=e(i,d)),0===a?s?(u=n.get,f=n.set):(u=function(){return this[r]},f=function(e){this[r]=e}):2===a?u=function(){return n.value}:(1!==a&&3!==a||(u=function(){return n.get.call(this)}),1!==a&&4!==a||(f=function(e){n.set.call(this,e)})),p.access=u&&f?{get:u,set:f}:u?{get:u}:{set:f};try{return t(c,p)}finally{d.v=!0}}function r(e,t){if("function"!=typeof e)throw new TypeError(t+" must be a function")}function i(e,t){var i=(0,n.Z)(t);if(1===e){if("object"!==i||null===t)throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");void 0!==t.get&&r(t.get,"accessor.get"),void 0!==t.set&&r(t.set,"accessor.set"),void 0!==t.init&&r(t.init,"accessor.init")}else if("function"!==i)throw new TypeError((0===e?"field":10===e?"class":"method")+" decorators must return a function or void 0")}function a(e,r,n,a,o,s,c,l){var u,f,p,d,v,h,g=n[0];if(c?u=0===o||1===o?{get:n[3],set:n[4]}:3===o?{get:n[3]}:4===o?{set:n[3]}:{value:n[3]}:0!==o&&(u=Object.getOwnPropertyDescriptor(r,a)),1===o?p={get:u.get,set:u.set}:2===o?p=u.value:3===o?p=u.get:4===o&&(p=u.set),"function"==typeof g)void 0!==(d=t(g,a,u,l,o,s,c,p))&&(i(o,d),0===o?f=d:1===o?(f=d.init,v=d.get||p.get,h=d.set||p.set,p={get:v,set:h}):p=d);else for(var m=g.length-1;m>=0;m--){var w;void 0!==(d=t(g[m],a,u,l,o,s,c,p))&&(i(o,d),0===o?w=d:1===o?(w=d.init,v=d.get||p.get,h=d.set||p.set,p={get:v,set:h}):p=d,void 0!==w&&(void 0===f?f=w:"function"==typeof f?f=[f,w]:f.push(w)))}if(0===o||1===o){if(void 0===f)f=function(e,t){return t};else if("function"!=typeof f){var y=f;f=function(e,t){for(var r=t,n=0;n<y.length;n++)r=y[n].call(e,r);return r}}else{var b=f;f=function(e,t){return b.call(e,t)}}e.push(f)}0!==o&&(1===o?(u.get=p.get,u.set=p.set):2===o?u.value=p:3===o?u.get=p:4===o&&(u.set=p),c?1===o?(e.push((function(e,t){return p.get.call(e,t)})),e.push((function(e,t){return p.set.call(e,t)}))):2===o?e.push(p):e.push((function(e,t){return p.call(e,t)})):Object.defineProperty(r,a,u))}function o(e,t){for(var r,n,i=[],o=new Map,c=new Map,l=0;l<t.length;l++){var u=t[l];if(Array.isArray(u)){var f,p,d=u[1],v=u[2],h=u.length>3,g=d>=5;if(g?(f=e,0!=(d-=5)&&(p=n=n||[])):(f=e.prototype,0!==d&&(p=r=r||[])),0!==d&&!h){var m=g?c:o,w=m.get(v)||0;if(!0===w||3===w&&4!==d||4===w&&3!==d)throw new Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: "+v);!w&&d>2?m.set(v,d):m.set(v,!0)}a(i,f,u,v,d,g,h,p)}}return s(i,r),s(i,n),i}function s(e,t){t&&e.push((function(e){for(var r=0;r<t.length;r++)t[r].call(e);return e}))}return function(t,r,n){return{e:o(t,r),get c(){return function(t,r){if(r.length>0){for(var n=[],a=t,o=t.name,s=r.length-1;s>=0;s--){var c={v:!1};try{var l=r[s](a,{kind:"class",name:o,addInitializer:e(n,c)})}finally{c.v=!0}void 0!==l&&(i(10,l),a=l)}return[a,function(){for(var e=0;e<n.length;e++)n[e].call(a)}]}}(t,n)}}}}())(e,t,r)}},5863:(e,t,r)=>{function n(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}r.d(t,{Z:()=>n})},175:(e,t,r)=>{function n(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}r.d(t,{Z:()=>n})},687:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(175);function i(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,(0,n.Z)(e,t,"get"))}},3395:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(5863);function i(e,t,r){(0,n.Z)(e,t),t.set(e,r)}},381:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(175);function i(e,t,r){return function(e,t,r){if(t.set)t.set.call(e,r);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=r}}(e,(0,n.Z)(e,t,"set"),r),r}},6171:(e,t,r)=>{function n(e,t,r){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return r}r.d(t,{Z:()=>n})},5866:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(5863);function i(e,t){(0,n.Z)(e,t),t.add(e)}},6234:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(6522);function i(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==(0,n.Z)(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,"string");if("object"!==(0,n.Z)(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===(0,n.Z)(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},6522:(e,t,r)=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}r.d(t,{Z:()=>n})}}]);
//# sourceMappingURL=micro-view.433281dc.js.map