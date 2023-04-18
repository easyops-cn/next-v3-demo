"use strict";(self.webpackChunk_next_bricks_basic=self.webpackChunk_next_bricks_basic||[]).push([[4512,353],{353:(e,r,t)=>{function n(e){return class extends HTMLElement{get $$typeof(){return"provider"}resolve(){return e(...arguments)}}}function o(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return function(n,o){if(n.name===r){for(var i=[],s=1;s<=t;s++){var a=o[o.length-s];if("MemberExpression"===(null==a?void 0:a.node.type)&&"object"===a.key){var c=a.node;c.computed||"Identifier"!==c.property.type?c.computed&&"Literal"===c.property.type&&"string"==typeof c.property.value?i.push(c.property.value):e.hasNonStaticUsage=!0:i.push(c.property.name)}else e.hasNonStaticUsage=!0}i.length===t&&e.usedProperties.add(i.join("."))}}}t.r(r),t.d(r,{beforeVisitGlobalMember:()=>o,collectMemberUsage:()=>u,collectMemberUsageInFunction:()=>v,createProviderClass:()=>n,scanPermissionActionsInAny:()=>b,scanPermissionActionsInStoryboard:()=>g,strictCollectMemberUsage:()=>c,strictCollectMemberUsageInFunction:()=>d,track:()=>l,traverseStoryboardExpressions:()=>a,traverseStoryboardFunction:()=>f,traverseStoryboardFunctions:()=>p,unwrapProvider:()=>w});var i=t(9530),s=t(628);function a(e,r,t){var n=new WeakSet,{matchExpressionString:o,visitNotMatchedExpressionString:a,visitNonExpressionString:c,visitObject:u}="string"==typeof t?{matchExpressionString:e=>e.includes(t)}:t;!function e(t){if("string"==typeof t)if((0,i.isEvaluable)(t))if(o(t))try{(0,i.preevaluate)(t,{withParent:!0,hooks:{beforeVisitGlobal(e,n){r(e,n,t)}}})}catch(e){console.error("Parse storyboard expression failed:",e)}else null==a||a(t);else null==c||c(t);else if((0,s.isObject)(t)){if(n.has(t))return;for(var l of(n.add(t),null==u||u(t),Array.isArray(t)?t:Object.values(t)))e(l)}}(e)}function c(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,{hasNonStaticUsage:n,nonStaticUsage:o,usedProperties:i}=u(e,r,t);if(n)throw new Error("Non-static usage of ".concat(r,' is prohibited, check your expression: "').concat(o,'"'));return i}function u(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n={usedProperties:new Set,hasNonStaticUsage:!1},i=o(n,r,t);return a(e,((e,r,t)=>{i(e,r),n.hasNonStaticUsage&&(n.nonStaticUsage=t)}),r),n}function l(e,r,t){if(e.includes(r)){var n,s={usedProperties:new Set,hasNonStaticUsage:!1},{expression:a}=(0,i.preevaluate)(e,{withParent:!0,hooks:{beforeVisitGlobal:o(s,t)}});if("SequenceExpression"===a.type&&(n=a.expressions[0])&&"Literal"===n.type&&n.value===r){if(s.usedProperties.size>0)return s.usedProperties;console.warn('You are using "'.concat(r,'" but no `').concat(t,"` usage found in your expression: ").concat(JSON.stringify(e)))}}return!1}function p(e,r){if(Array.isArray(e))for(var t of e)f(t,r)}function f(e,r){try{(0,i.precookFunction)(e.source,{typescript:e.typescript,withParent:!0,hooks:{beforeVisitGlobal:r}})}catch(r){console.error('Parse storyboard function "'.concat(e.name,'" failed:'),r)}}function d(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,{hasNonStaticUsage:n,usedProperties:o}=v(e,r,t);if(n)throw new Error("Non-static usage of ".concat(r,' is prohibited, check your function: "').concat(e.name,'"'));return o}function v(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n={usedProperties:new Set,hasNonStaticUsage:!1};return f(e,o(n,r,t)),n.usedProperties.delete(e.name),n}var y="PERMISSIONS",h="check";function g(e){var r,t=new Set,n=m(t),{customTemplates:o,functions:i}=null!==(r=e.meta)&&void 0!==r?r:{};return a([e.routes,o],n,y),p(i,n),Array.from(t)}function b(e){var r=new Set;return a(e,m(r),y),Array.from(r)}function m(e){return function(r,t){if(r.name===y){var n=t[t.length-1],o=t[t.length-2];if("CallExpression"===(null==o?void 0:o.node.type)&&"callee"===(null==o?void 0:o.key)&&"MemberExpression"===(null==n?void 0:n.node.type)&&"object"===n.key&&(n.node.computed?"Literal"===n.node.property.type&&n.node.property.value===h:"Identifier"===n.node.property.type&&n.node.property.name===h))for(var i of o.node.arguments)"Literal"===i.type&&"string"==typeof i.value&&e.add(i.value)}}}var S=new Map;function w(e){return function(){for(var r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];var o=function(e){var r=S.get(e);return r||(r=document.createElement(e),S.set(e,r),r)}(e);return o.resolve(...t)}}}}]);
//# sourceMappingURL=4512.29063f9c.js.map