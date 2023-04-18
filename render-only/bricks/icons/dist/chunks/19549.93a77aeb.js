"use strict";(self.webpackChunk_next_bricks_icons=self.webpackChunk_next_bricks_icons||[]).push([[19549,24717],{85863:(t,e,r)=>{function n(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}r.d(e,{Z:()=>n})},70175:(t,e,r)=>{function n(t,e,r){if(!e.has(t))throw new TypeError("attempted to "+r+" private field on non-instance");return e.get(t)}r.d(e,{Z:()=>n})},70687:(t,e,r)=>{r.d(e,{Z:()=>i});var n=r(70175);function i(t,e){return function(t,e){return e.get?e.get.call(t):e.value}(t,(0,n.Z)(t,e,"get"))}},53395:(t,e,r)=>{r.d(e,{Z:()=>i});var n=r(85863);function i(t,e,r){(0,n.Z)(t,e),e.set(t,r)}},40381:(t,e,r)=>{r.d(e,{Z:()=>i});var n=r(70175);function i(t,e,r){return function(t,e,r){if(e.set)e.set.call(t,r);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=r}}(t,(0,n.Z)(t,e,"set"),r),r}},46234:(t,e,r)=>{r.d(e,{Z:()=>i});var n=r(86522);function i(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==(0,n.Z)(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,"string");if("object"!==(0,n.Z)(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===(0,n.Z)(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},33028:(t,e,r)=>{r.d(e,{Z:()=>o});var n=r(46234);function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},2159:(t,e,r)=>{function n(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}r.d(e,{Z:()=>n})},86522:(t,e,r)=>{function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}r.d(e,{Z:()=>n})},19549:(t,e,r)=>{r.r(e),r.d(e,{NextElement:()=>g,createDecorators:()=>u,supportsAdoptingStyleSheets:()=>Z});var n=r(2159),i=r(33028),o=Symbol("attributeHasBeenSet"),a=Symbol("stopAttributeChangedCallback"),s=["type"],l={attribute:!0,type:String,converter:{toAttribute:(t,e)=>e===Boolean?t?"":null:t,fromAttribute(t,e){switch(e){case Boolean:return null!==t&&"false"!==t;case Number:return null===t?null:Number(t)}return t}},reflect:!0,hasChanged:(t,e)=>e!==t&&(e==e||t==t)};function u(){var t=new Map,e=new Set,r=new Set,u=new Set;return{defineElement:function(n,o){return(a,s)=>{var{kind:l,name:f,addInitializer:v}=s;v((function(){var a,s,l,f,v,p=Object.getPrototypeOf(this);c(this,"observedAttributes",d(null!==(a=p.observedAttributes)&&void 0!==a?a:[],t.keys())),c(this,"__attributeReflections",new Map([...null!==(s=p.__attributeReflections)&&void 0!==s?s:[],...t])),c(this,"styleTexts",null==o?void 0:o.styleTexts),c(this,"shadowOptions",!1!==(null==o?void 0:o.shadowOptions)?(0,i.Z)({mode:"open"},null==o?void 0:o.shadowOptions):null),c(this,"__tagName",n),c(this,"_dev_only_definedProperties",d(null!==(l=p._dev_only_definedProperties)&&void 0!==l?l:[],e)),c(this,"_dev_only_definedMethods",d(null!==(f=p._dev_only_definedMethods)&&void 0!==f?f:[],r)),c(this,"_dev_only_definedEvents",d(null!==(v=p._dev_only_definedEvents)&&void 0!==v?v:[],u)),customElements.define(n,this)}))}},property:function(r){return function(n,s){var{get:u,set:c}=n,{kind:d,name:f,static:v,private:p}=s;e.add(f);var h=Object.assign({},l,r),b=function(t,e){var r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.replace(/[A-Z]/g,(t=>"-".concat(t.toLowerCase()))):void 0}(f,h);return void 0!==b&&t.set(b,(0,i.Z)((0,i.Z)({},h),{},{property:f})),{get(){return void 0!==b&&this[o](b)?h.converter.fromAttribute(this.getAttribute(b),h.type):u.call(this)},set(t){var e=u.call(this);if(c.call(this,t),h.hasChanged(t,e)){if(void 0!==b){var r=h.converter.toAttribute(t,h.type);this[a](!0),null==r?this.removeAttribute(b):this.setAttribute(b,r),this[a](!1)}this._requestRender()}},init(t){if(void 0!==b&&h.hasChanged(t,void 0)){var e=h.converter.toAttribute(t,h.type);null!=e&&requestAnimationFrame((()=>{this[o](b)||(this[a](!0),this.setAttribute(b,e),this[a](!1))}))}return t}}}},method:function(t){return function(e,n){var{kind:i,name:o,static:a,private:s,addInitializer:l}=n;null!=t&&t.bound&&l((function(){this[o]=this[o].bind(this)})),r.add(o)}},event:function(t){return function(e,r){var{get:o}=e,{kind:a,name:l,static:c,private:d}=r,{type:f}=t,v=(0,n.Z)(t,s);return u.add(f),{get(){return o.call(this)},set(){throw new Error("Decorated events are readonly")},init(t){return Object.freeze({emit:t=>this.dispatchEvent(new CustomEvent(f,(0,i.Z)((0,i.Z)({},v),{},{detail:t})))})}}}}}}function c(t,e,r){Object.defineProperty(t,e,{get:()=>r,configurable:!0})}function d(t,e){var r=new Set(t);for(var n of e)r.add(n);return[...r]}new Set(["prefix"]);var f,v=r(53395),p=r(46234),h=r(70687),b=r(40381),y=new WeakMap,m=new WeakMap,w=new WeakMap,_=new WeakMap;class g extends HTMLElement{constructor(){super(...arguments),(0,v.Z)(this,y,{writable:!0,value:!1}),(0,v.Z)(this,m,{writable:!0,value:!1}),(0,v.Z)(this,w,{writable:!0,value:!1}),(0,v.Z)(this,_,{writable:!0,value:new Set})}_markConnectedCallbackCalled(){(0,b.Z)(this,m,!0)}connectedCallback(){this._markConnectedCallbackCalled(),this._render()}[o](t){return(0,h.Z)(this,_).has(t)}[a](t){(0,b.Z)(this,w,t)}attributeChangedCallback(t,e,r){if((0,h.Z)(this,_).add(t),!(0,h.Z)(this,w)&&e!==r){var n=this.constructor.__attributeReflections.get(t),i=n.converter.fromAttribute(r,n.type);this[n.property]=i}}_requestRender(){this.isConnected&&(0,h.Z)(this,m)&&!(0,h.Z)(this,y)&&((0,b.Z)(this,y,!0),Promise.resolve().then((()=>{(0,b.Z)(this,y,!1),this._render()})))}}function Z(){return void 0===f&&(f=!!(window.ShadowRoot&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype)),f}(0,p.Z)(g,"styleTexts",void 0),(0,p.Z)(g,"shadowOptions",void 0),(0,p.Z)(g,"__attributeReflections",void 0),(0,p.Z)(g,"__tagName",void 0)}}]);
//# sourceMappingURL=19549.93a77aeb.js.map