"use strict";(self.webpackChunk_next_bricks_shoelace=self.webpackChunk_next_bricks_shoelace||[]).push([[7571],{9745:(t,e,n)=>{n.d(e,{GH:()=>l,RA:()=>r,U_:()=>s,nk:()=>a,nv:()=>o});var i=n(453);function o(t,e,n){return new Promise((o=>{if((null==n?void 0:n.duration)===1/0)throw new Error("Promise-based animations must be finite.");const r=t.animate(e,(0,i.EZ)((0,i.ih)({},n),{duration:a()?0:n.duration}));r.addEventListener("cancel",o,{once:!0}),r.addEventListener("finish",o,{once:!0})}))}function r(t){return(t=t.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?1e3*parseFloat(t):parseFloat(t)}function a(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function s(t){return Promise.all(t.getAnimations().map((t=>new Promise((e=>{const n=requestAnimationFrame(e);t.addEventListener("cancel",(()=>n),{once:!0}),t.addEventListener("finish",(()=>n),{once:!0}),t.cancel()})))))}function l(t,e){return t.map((t=>(0,i.EZ)((0,i.ih)({},t),{height:"auto"===t.height?`${e}px`:t.height})))}},4867:(t,e,n)=>{function i(t,e){return new Promise((n=>{t.addEventListener(e,(function i(o){o.target===t&&(t.removeEventListener(e,i),n())}))}))}n.d(e,{m:()=>i})},2486:(t,e,n)=>{n.d(e,{O8:()=>s,jx:()=>a}),n(453);var i=new Map,o=new WeakMap;function r(t,e){return"rtl"===e.toLowerCase()?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function a(t,e){i.set(t,function(t){return null!=t?t:{keyframes:[],options:{duration:0}}}(e))}function s(t,e,n){const a=o.get(t);if(null==a?void 0:a[e])return r(a[e],n.dir);const s=i.get(e);return s?r(s,n.dir):{keyframes:[],options:{duration:0}}}},6789:(t,e,n)=>{var i=n(1732),o=n(5381),r=n(8424),a=n(5954),s=n(453);function l(t){return t.split("-")[1]}function c(t){return"y"===t?"height":"width"}function f(t){return t.split("-")[0]}function p(t){return["top","bottom"].includes(f(t))?"x":"y"}function u(t,e,n){let{reference:i,floating:o}=t;const r=i.x+i.width/2-o.width/2,a=i.y+i.height/2-o.height/2,s=p(e),u=c(s),h=i[u]/2-o[u]/2,d="x"===s;let m;switch(f(e)){case"top":m={x:r,y:i.y-o.height};break;case"bottom":m={x:r,y:i.y+i.height};break;case"right":m={x:i.x+i.width,y:a};break;case"left":m={x:i.x-o.width,y:a};break;default:m={x:i.x,y:i.y}}switch(l(e)){case"start":m[s]-=h*(n&&d?-1:1);break;case"end":m[s]+=h*(n&&d?-1:1)}return m}function h(t){return"number"!=typeof t?(e=t,(0,s.ih)({top:0,right:0,bottom:0,left:0},e)):{top:t,right:t,bottom:t,left:t};var e}function d(t){return(0,s.EZ)((0,s.ih)({},t),{top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height})}async function m(t,e){var n;void 0===e&&(e={});const{x:i,y:o,platform:r,rects:a,elements:l,strategy:c}=t,{boundary:f="clippingAncestors",rootBoundary:p="viewport",elementContext:u="floating",altBoundary:m=!1,padding:g=0}=e,y=h(g),w=l[m?"floating"===u?"reference":"floating":u],v=d(await r.getClippingRect({element:null==(n=await(null==r.isElement?void 0:r.isElement(w)))||n?w:w.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(l.floating)),boundary:f,rootBoundary:p,strategy:c})),b="floating"===u?(0,s.EZ)((0,s.ih)({},a.floating),{x:i,y:o}):a.reference,x=await(null==r.getOffsetParent?void 0:r.getOffsetParent(l.floating)),E=await(null==r.isElement?void 0:r.isElement(x))&&await(null==r.getScale?void 0:r.getScale(x))||{x:1,y:1},P=d(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:b,offsetParent:x,strategy:c}):b);return{top:(v.top-P.top+y.top)/E.y,bottom:(P.bottom-v.bottom+y.bottom)/E.y,left:(v.left-P.left+y.left)/E.x,right:(P.right-v.right+y.right)/E.x}}var g=Math.min,y=Math.max;function w(t,e,n){return y(t,g(e,n))}["top","right","bottom","left"].reduce(((t,e)=>t.concat(e,e+"-start",e+"-end")),[]);var v={left:"right",right:"left",bottom:"top",top:"bottom"};function b(t){return t.replace(/left|right|bottom|top/g,(t=>v[t]))}var x={start:"end",end:"start"};function E(t){return t.replace(/start|end/g,(t=>x[t]))}var P=function(t){return void 0===t&&(t={}),{name:"size",options:t,async fn(e){const{placement:n,rects:i,platform:o,elements:r}=e,a=t,{apply:c=(()=>{})}=a,u=(0,s.S0)(a,["apply"]),h=await m(e,u),d=f(n),w=l(n),v="x"===p(n),{width:b,height:x}=i.floating;let E,P;"top"===d||"bottom"===d?(E=d,P=w===(await(null==o.isRTL?void 0:o.isRTL(r.floating))?"start":"end")?"left":"right"):(P=d,E="end"===w?"top":"bottom");const k=x-h[E],A=b-h[P];let z=k,L=A;if(v?L=g(b-h.right-h.left,A):z=g(x-h.bottom-h.top,k),!e.middlewareData.shift&&!w){const t=y(h.left,0),e=y(h.right,0),n=y(h.top,0),i=y(h.bottom,0);v?L=b-2*(0!==t||0!==e?t+e:y(h.left,h.right)):z=x-2*(0!==n||0!==i?n+i:y(h.top,h.bottom))}await c((0,s.EZ)((0,s.ih)({},e),{availableWidth:L,availableHeight:z}));const R=await o.getDimensions(r.floating);return b!==R.width||x!==R.height?{reset:{rects:!0}}:{}}}};function k(t){var e;return(null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function A(t){return k(t).getComputedStyle(t)}var z,L=Math.min,R=Math.max,S=Math.round;function T(t){const e=A(t);let n=parseFloat(e.width),i=parseFloat(e.height);const o=t.offsetWidth,r=t.offsetHeight,a=S(n)!==o||S(i)!==r;return a&&(n=o,i=r),{width:n,height:i,fallback:a}}function C(t){return D(t)?(t.nodeName||"").toLowerCase():""}function F(){if(z)return z;const t=navigator.userAgentData;return t&&Array.isArray(t.brands)?z=t.brands.map((t=>t.brand+"/"+t.version)).join(" "):navigator.userAgent}function O(t){return t instanceof k(t).HTMLElement}function B(t){return t instanceof k(t).Element}function D(t){return t instanceof k(t).Node}function N(t){return"undefined"!=typeof ShadowRoot&&(t instanceof k(t).ShadowRoot||t instanceof ShadowRoot)}function $(t){const{overflow:e,overflowX:n,overflowY:i,display:o}=A(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+n)&&!["inline","contents"].includes(o)}function _(t){return["table","td","th"].includes(C(t))}function W(t){const e=/firefox/i.test(F()),n=A(t),i=n.backdropFilter||n.WebkitBackdropFilter;return"none"!==n.transform||"none"!==n.perspective||!!i&&"none"!==i||e&&"filter"===n.willChange||e&&!!n.filter&&"none"!==n.filter||["transform","perspective"].some((t=>n.willChange.includes(t)))||["paint","layout","strict","content"].some((t=>{const e=n.contain;return null!=e&&e.includes(t)}))}function H(){return/^((?!chrome|android).)*safari/i.test(F())}function M(t){return["html","body","#document"].includes(C(t))}function Z(t){return B(t)?t:t.contextElement}var V={x:1,y:1};function j(t){const e=Z(t);if(!O(e))return V;const n=e.getBoundingClientRect(),{width:i,height:o,fallback:r}=T(e);let a=(r?S(n.width):n.width)/i,s=(r?S(n.height):n.height)/o;return a&&Number.isFinite(a)||(a=1),s&&Number.isFinite(s)||(s=1),{x:a,y:s}}function q(t,e,n,i){var o,r;void 0===e&&(e=!1),void 0===n&&(n=!1);const a=t.getBoundingClientRect(),s=Z(t);let l=V;e&&(i?B(i)&&(l=j(i)):l=j(t));const c=s?k(s):window,f=H()&&n;let p=(a.left+(f&&(null==(o=c.visualViewport)?void 0:o.offsetLeft)||0))/l.x,u=(a.top+(f&&(null==(r=c.visualViewport)?void 0:r.offsetTop)||0))/l.y,h=a.width/l.x,d=a.height/l.y;if(s){const t=k(s),e=i&&B(i)?k(i):i;let n=t.frameElement;for(;n&&i&&e!==t;){const t=j(n),e=n.getBoundingClientRect(),i=getComputedStyle(n);e.x+=(n.clientLeft+parseFloat(i.paddingLeft))*t.x,e.y+=(n.clientTop+parseFloat(i.paddingTop))*t.y,p*=t.x,u*=t.y,h*=t.x,d*=t.y,p+=e.x,u+=e.y,n=k(n).frameElement}}return{width:h,height:d,top:u,right:p+h,bottom:u+d,left:p,x:p,y:u}}function Y(t){return((D(t)?t.ownerDocument:t.document)||window.document).documentElement}function I(t){return B(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function X(t){return q(Y(t)).left+I(t).scrollLeft}function G(t){if("html"===C(t))return t;const e=t.assignedSlot||t.parentNode||N(t)&&t.host||Y(t);return N(e)?e.host:e}function K(t){const e=G(t);return M(e)?e.ownerDocument.body:O(e)&&$(e)?e:K(e)}function U(t,e){var n;void 0===e&&(e=[]);const i=K(t),o=i===(null==(n=t.ownerDocument)?void 0:n.body),r=k(i);return o?e.concat(r,r.visualViewport||[],$(i)?i:[]):e.concat(i,U(i))}function J(t,e,n){let i;if("viewport"===e)i=function(t,e){const n=k(t),i=Y(t),o=n.visualViewport;let r=i.clientWidth,a=i.clientHeight,s=0,l=0;if(o){r=o.width,a=o.height;const t=H();(!t||t&&"fixed"===e)&&(s=o.offsetLeft,l=o.offsetTop)}return{width:r,height:a,x:s,y:l}}(t,n);else if("document"===e)i=function(t){const e=Y(t),n=I(t),i=t.ownerDocument.body,o=R(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),r=R(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let a=-n.scrollLeft+X(t);const s=-n.scrollTop;return"rtl"===A(i).direction&&(a+=R(e.clientWidth,i.clientWidth)-o),{width:o,height:r,x:a,y:s}}(Y(t));else if(B(e))i=function(t,e){const n=q(t,!0,"fixed"===e),i=n.top+t.clientTop,o=n.left+t.clientLeft,r=O(t)?j(t):{x:1,y:1};return{width:t.clientWidth*r.x,height:t.clientHeight*r.y,x:o*r.x,y:i*r.y}}(e,n);else{const n=(0,s.ih)({},e);if(H()){var o,r;const e=k(t);n.x-=(null==(o=e.visualViewport)?void 0:o.offsetLeft)||0,n.y-=(null==(r=e.visualViewport)?void 0:r.offsetTop)||0}i=n}return d(i)}function Q(t,e){return O(t)&&"fixed"!==A(t).position?e?e(t):t.offsetParent:null}function tt(t,e){const n=k(t);let i=Q(t,e);for(;i&&_(i)&&"static"===A(i).position;)i=Q(i,e);return i&&("html"===C(i)||"body"===C(i)&&"static"===A(i).position&&!W(i))?n:i||function(t){let e=G(t);for(;O(e)&&!M(e);){if(W(e))return e;e=G(e)}return null}(t)||n}function et(t,e,n){const i=O(e),o=Y(e),r=q(t,!0,"fixed"===n,e);let a={scrollLeft:0,scrollTop:0};const s={x:0,y:0};if(i||!i&&"fixed"!==n)if(("body"!==C(e)||$(o))&&(a=I(e)),O(e)){const t=q(e,!0);s.x=t.x+e.clientLeft,s.y=t.y+e.clientTop}else o&&(s.x=X(o));return{x:r.left+a.scrollLeft-s.x,y:r.top+a.scrollTop-s.y,width:r.width,height:r.height}}var nt={getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:i,strategy:o}=t;const r=[..."clippingAncestors"===n?function(t,e){const n=e.get(t);if(n)return n;let i=U(t).filter((t=>B(t)&&"body"!==C(t))),o=null;const r="fixed"===A(t).position;let a=r?G(t):t;for(;B(a)&&!M(a);){const t=A(a),e=W(a);"fixed"===t.position?o=null:(r?e||o:e||"static"!==t.position||!o||!["absolute","fixed"].includes(o.position))?o=t:i=i.filter((t=>t!==a)),a=G(a)}return e.set(t,i),i}(e,this._c):[].concat(n),i],a=r[0],s=r.reduce(((t,n)=>{const i=J(e,n,o);return t.top=R(i.top,t.top),t.right=L(i.right,t.right),t.bottom=L(i.bottom,t.bottom),t.left=R(i.left,t.left),t}),J(e,a,o));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:n,strategy:i}=t;const o=O(n),r=Y(n);if(n===r)return e;let a={scrollLeft:0,scrollTop:0},s={x:1,y:1};const l={x:0,y:0};if((o||!o&&"fixed"!==i)&&(("body"!==C(n)||$(r))&&(a=I(n)),O(n))){const t=q(n);s=j(n),l.x=t.x+n.clientLeft,l.y=t.y+n.clientTop}return{width:e.width*s.x,height:e.height*s.y,x:e.x*s.x-a.scrollLeft*s.x+l.x,y:e.y*s.y-a.scrollTop*s.y+l.y}},isElement:B,getDimensions:function(t){return O(t)?T(t):t.getBoundingClientRect()},getOffsetParent:tt,getDocumentElement:Y,getScale:j,async getElementRects(t){let{reference:e,floating:n,strategy:i}=t;const o=this.getOffsetParent||tt,r=this.getDimensions;return{reference:et(e,await o(n),i),floating:(0,s.ih)({x:0,y:0},await r(n))}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>"rtl"===A(t).direction};function it(t){return function(t){for(let e=t;e;e=ot(e))if(e instanceof Element&&"none"===getComputedStyle(e).display)return null;for(let e=ot(t);e;e=ot(e)){if(!(e instanceof Element))continue;const t=getComputedStyle(e);if("contents"!==t.display){if("static"!==t.position||"none"!==t.filter)return e;if("BODY"===e.tagName)return e}}return null}(t)}function ot(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}var rt=class extends r.P{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');if(this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),!this.anchorEl)throw new Error("Invalid anchor element: no anchor could be found using the anchor slot or the anchor attribute.");this.start()}start(){this.anchorEl&&(this.cleanup=function(t,e,n,i){void 0===i&&(i={});const{ancestorScroll:o=!0,ancestorResize:r=!0,elementResize:a=!0,animationFrame:s=!1}=i,l=o&&!s,c=l||r?[...B(t)?U(t):t.contextElement?U(t.contextElement):[],...U(e)]:[];c.forEach((t=>{l&&t.addEventListener("scroll",n,{passive:!0}),r&&t.addEventListener("resize",n)}));let f,p=null;if(a){let i=!0;p=new ResizeObserver((()=>{i||n(),i=!1})),B(t)&&!s&&p.observe(t),B(t)||!t.contextElement||s||p.observe(t.contextElement),p.observe(e)}let u=s?q(t):null;return s&&function e(){const i=q(t);!u||i.x===u.x&&i.y===u.y&&i.width===u.width&&i.height===u.height||n(),u=i,f=requestAnimationFrame(e)}(),n(),()=>{var t;c.forEach((t=>{l&&t.removeEventListener("scroll",n),r&&t.removeEventListener("resize",n)})),null==(t=p)||t.disconnect(),p=null,s&&cancelAnimationFrame(f)}}(this.anchorEl,this.popup,(()=>{this.reposition()})))}async stop(){return new Promise((t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame((()=>t()))):t()}))}reposition(){if(!this.active||!this.anchorEl)return;const t=[(e={mainAxis:this.distance,crossAxis:this.skidding},void 0===e&&(e=0),{name:"offset",options:e,async fn(t){const{x:n,y:i}=t,o=await async function(t,e){const{placement:n,platform:i,elements:o}=t,r=await(null==i.isRTL?void 0:i.isRTL(o.floating)),a=f(n),c=l(n),u="x"===p(n),h=["left","top"].includes(a)?-1:1,d=r&&u?-1:1,m="function"==typeof e?e(t):e;let{mainAxis:g,crossAxis:y,alignmentAxis:w}="number"==typeof m?{mainAxis:m,crossAxis:0,alignmentAxis:null}:(0,s.ih)({mainAxis:0,crossAxis:0,alignmentAxis:null},m);return c&&"number"==typeof w&&(y="end"===c?-1*w:w),u?{x:y*d,y:g*h}:{x:g*h,y:y*d}}(t,e);return{x:n+o.x,y:i+o.y,data:o}}})];var e,n,i;this.sync?t.push(P({apply:({rects:t})=>{const e="width"===this.sync||"both"===this.sync,n="height"===this.sync||"both"===this.sync;this.popup.style.width=e?`${t.reference.width}px`:"",this.popup.style.height=n?`${t.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var n;const{placement:i,middlewareData:o,rects:r,initialPlacement:a,platform:u,elements:h}=e,d=t,{mainAxis:g=!0,crossAxis:y=!0,fallbackPlacements:w,fallbackStrategy:v="bestFit",fallbackAxisSideDirection:x="none",flipAlignment:P=!0}=d,k=(0,s.S0)(d,["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","fallbackAxisSideDirection","flipAlignment"]),A=f(i),z=f(a)===a,L=await(null==u.isRTL?void 0:u.isRTL(h.floating)),R=w||(z||!P?[b(a)]:function(t){const e=b(t);return[E(t),e,E(e)]}(a));w||"none"===x||R.push(...function(t,e,n,i){const o=l(t);let r=function(t,e,n){const i=["left","right"],o=["right","left"],r=["top","bottom"],a=["bottom","top"];switch(t){case"top":case"bottom":return n?e?o:i:e?i:o;case"left":case"right":return e?r:a;default:return[]}}(f(t),"start"===n,i);return o&&(r=r.map((t=>t+"-"+o)),e&&(r=r.concat(r.map(E)))),r}(a,P,x,L));const S=[a,...R],T=await m(e,k),C=[];let F=(null==(n=o.flip)?void 0:n.overflows)||[];if(g&&C.push(T[A]),y){const{main:t,cross:e}=function(t,e,n){void 0===n&&(n=!1);const i=l(t),o=p(t),r=c(o);let a="x"===o?i===(n?"end":"start")?"right":"left":"start"===i?"bottom":"top";return e.reference[r]>e.floating[r]&&(a=b(a)),{main:a,cross:b(a)}}(i,r,L);C.push(T[t],T[e])}if(F=[...F,{placement:i,overflows:C}],!C.every((t=>t<=0))){var O,B;const t=((null==(O=o.flip)?void 0:O.index)||0)+1,e=S[t];if(e)return{data:{index:t,overflows:F},reset:{placement:e}};let n=null==(B=F.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:B.placement;if(!n)switch(v){case"bestFit":{var D;const t=null==(D=F.map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:D[0];t&&(n=t);break}case"initialPlacement":n=a}if(i!==n)return{reset:{placement:n}}}return{}}}}({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push((void 0===(n={boundary:this.shiftBoundary,padding:this.shiftPadding})&&(n={}),{name:"shift",options:n,async fn(t){const{x:e,y:i,placement:o}=t,r=n,{mainAxis:a=!0,crossAxis:l=!1,limiter:c={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}}}=r,u=(0,s.S0)(r,["mainAxis","crossAxis","limiter"]),h={x:e,y:i},d=await m(t,u),g=p(f(o)),y=function(t){return"x"===t?"y":"x"}(g);let v=h[g],b=h[y];if(a){const t="y"===g?"bottom":"right";v=w(v+d["y"===g?"top":"left"],v,v-d[t])}if(l){const t="y"===y?"bottom":"right";b=w(b+d["y"===y?"top":"left"],b,b-d[t])}const x=c.fn((0,s.EZ)((0,s.ih)({},t),{[g]:v,[y]:b}));return(0,s.EZ)((0,s.ih)({},x),{data:{x:x.x-e,y:x.y-i}})}})),this.autoSize?t.push(P({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:t,availableHeight:e})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${e}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${t}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push({name:"arrow",options:i={element:this.arrowEl,padding:this.arrowPadding},async fn(t){const{element:e,padding:n=0}=i||{},{x:o,y:r,placement:a,rects:s,platform:f}=t;if(null==e)return{};const u=h(n),d={x:o,y:r},m=p(a),g=c(m),y=await f.getDimensions(e),v="y"===m?"top":"left",b="y"===m?"bottom":"right",x=s.reference[g]+s.reference[m]-d[m]-s.floating[g],E=d[m]-s.reference[m],P=await(null==f.getOffsetParent?void 0:f.getOffsetParent(e));let k=P?"y"===m?P.clientHeight||0:P.clientWidth||0:0;0===k&&(k=s.floating[g]);const A=x/2-E/2,z=u[v],L=k-y[g]-u[b],R=k/2-y[g]/2+A,S=w(z,R,L),T=null!=l(a)&&R!=S&&s.reference[g]/2-(R<z?u[v]:u[b])-y[g]/2<0;return{[m]:d[m]-(T?R<z?z-R:L-R:0),data:{[m]:S,centerOffset:R-S}}}});const o="absolute"===this.strategy?t=>nt.getOffsetParent(t,it):nt.getOffsetParent;((t,e,n)=>{const i=new Map,o=(0,s.ih)({platform:nt},n),r=(0,s.EZ)((0,s.ih)({},o.platform),{_c:i});return(async(t,e,n)=>{const{placement:i="bottom",strategy:o="absolute",middleware:r=[],platform:a}=n,l=r.filter(Boolean),c=await(null==a.isRTL?void 0:a.isRTL(e));let f=await a.getElementRects({reference:t,floating:e,strategy:o}),{x:p,y:h}=u(f,i,c),d=i,m={},g=0;for(let n=0;n<l.length;n++){const{name:r,fn:y}=l[n],{x:w,y:v,data:b,reset:x}=await y({x:p,y:h,initialPlacement:i,placement:d,strategy:o,middlewareData:m,rects:f,platform:a,elements:{reference:t,floating:e}});p=null!=w?w:p,h=null!=v?v:h,m=(0,s.EZ)((0,s.ih)({},m),{[r]:(0,s.ih)((0,s.ih)({},m[r]),b)}),x&&g<=50&&(g++,"object"==typeof x&&(x.placement&&(d=x.placement),x.rects&&(f=!0===x.rects?await a.getElementRects({reference:t,floating:e,strategy:o}):x.rects),({x:p,y:h}=u(f,d,c))),n=-1)}return{x:p,y:h,placement:d,strategy:o,middlewareData:m}})(t,e,(0,s.EZ)((0,s.ih)({},o),{platform:r}))})(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:(0,s.EZ)((0,s.ih)({},nt),{getOffsetParent:o})}).then((({x:t,y:e,middlewareData:n,placement:i})=>{const o="rtl"===getComputedStyle(this).direction,r={top:"bottom",right:"left",bottom:"top",left:"right"}[i.split("-")[0]];if(this.setAttribute("data-current-placement",i),Object.assign(this.popup.style,{left:`${t}px`,top:`${e}px`}),this.arrow){const t=n.arrow.x,e=n.arrow.y;let i="",a="",s="",l="";if("start"===this.arrowPlacement){const n="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";i="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",a=o?n:"",l=o?"":n}else if("end"===this.arrowPlacement){const n="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";a=o?"":n,l=o?n:"",s="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(l="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":"",i="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":""):(l="number"==typeof t?`${t}px`:"",i="number"==typeof e?`${e}px`:"");Object.assign(this.arrowEl.style,{top:i,right:a,bottom:s,left:l,[r]:"calc(var(--arrow-size-diagonal) * -1)"})}})),this.emit("sl-reposition")}render(){return a.y`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="popup"
        class=${(0,o.o)({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?a.y`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};rt.styles=i.a,(0,s.u2)([(0,r.i)(".popup")],rt.prototype,"popup",2),(0,s.u2)([(0,r.i)(".popup__arrow")],rt.prototype,"arrowEl",2),(0,s.u2)([(0,r.e2)()],rt.prototype,"anchor",2),(0,s.u2)([(0,r.e2)({type:Boolean,reflect:!0})],rt.prototype,"active",2),(0,s.u2)([(0,r.e2)({reflect:!0})],rt.prototype,"placement",2),(0,s.u2)([(0,r.e2)({reflect:!0})],rt.prototype,"strategy",2),(0,s.u2)([(0,r.e2)({type:Number})],rt.prototype,"distance",2),(0,s.u2)([(0,r.e2)({type:Number})],rt.prototype,"skidding",2),(0,s.u2)([(0,r.e2)({type:Boolean})],rt.prototype,"arrow",2),(0,s.u2)([(0,r.e2)({attribute:"arrow-placement"})],rt.prototype,"arrowPlacement",2),(0,s.u2)([(0,r.e2)({attribute:"arrow-padding",type:Number})],rt.prototype,"arrowPadding",2),(0,s.u2)([(0,r.e2)({type:Boolean})],rt.prototype,"flip",2),(0,s.u2)([(0,r.e2)({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map((t=>t.trim())).filter((t=>""!==t)),toAttribute:t=>t.join(" ")}})],rt.prototype,"flipFallbackPlacements",2),(0,s.u2)([(0,r.e2)({attribute:"flip-fallback-strategy"})],rt.prototype,"flipFallbackStrategy",2),(0,s.u2)([(0,r.e2)({type:Object})],rt.prototype,"flipBoundary",2),(0,s.u2)([(0,r.e2)({attribute:"flip-padding",type:Number})],rt.prototype,"flipPadding",2),(0,s.u2)([(0,r.e2)({type:Boolean})],rt.prototype,"shift",2),(0,s.u2)([(0,r.e2)({type:Object})],rt.prototype,"shiftBoundary",2),(0,s.u2)([(0,r.e2)({attribute:"shift-padding",type:Number})],rt.prototype,"shiftPadding",2),(0,s.u2)([(0,r.e2)({attribute:"auto-size"})],rt.prototype,"autoSize",2),(0,s.u2)([(0,r.e2)()],rt.prototype,"sync",2),(0,s.u2)([(0,r.e2)({type:Object})],rt.prototype,"autoSizeBoundary",2),(0,s.u2)([(0,r.e2)({attribute:"auto-size-padding",type:Number})],rt.prototype,"autoSizePadding",2),rt=(0,s.u2)([(0,r.e)("sl-popup")],rt)},1732:(t,e,n)=>{n.d(e,{a:()=>o});var i=n(6281),o=n(5954).i`
  ${i.N}

  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }
`}}]);
//# sourceMappingURL=7571.732d4bf2.js.map