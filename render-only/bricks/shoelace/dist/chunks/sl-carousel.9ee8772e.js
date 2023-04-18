/*! For license information please see sl-carousel.9ee8772e.js.LICENSE.txt */
"use strict";(self.webpackChunk_next_bricks_shoelace=self.webpackChunk_next_bricks_shoelace||[]).push([[2361],{4803:(t,e,n)=>{n.r(e),n(2411),n(9628),n(5517)},5517:(t,e,n)=>{n(2969),n(3467);var r=n(4124);function i(t){document.documentElement.classList["dark"===t||"dark-v2"===t?"add":"remove"]("sl-theme-dark")}n(1744),(0,r.t)(n.p),i(document.documentElement.dataset.theme),window.addEventListener("theme.change",(t=>{i(t.detail)}))},738:(t,e,n)=>{n.d(e,{Z:()=>l});var r=n(9601),i=n.n(r),s=n(2609),a=n.n(s)()(i());a.push([t.id,":root,\n.sl-theme-dark{--sl-z-index-drawer:1000;--sl-z-index-dialog:1000;--sl-z-index-dropdown:1050;--sl-z-index-toast:1000;--sl-z-index-tooltip:1070}",""]);const l=a},1744:(t,e,n)=>{var r=n(6062),i=n.n(r),s=n(4036),a=n.n(s),l=n(6793),o=n.n(l),c=n(7892),d=n.n(c),h=n(1173),u=n.n(h),g=n(2464),v=n.n(g),w=n(738),m={};m.styleTagTransform=v(),m.setAttributes=d(),m.insert=o().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=u(),i()(w.Z,m),w.Z&&w.Z.locals&&w.Z.locals},9745:(t,e,n)=>{n.d(e,{GH:()=>o,RA:()=>s,U_:()=>l,nk:()=>a,nv:()=>i});var r=n(453);function i(t,e,n){return new Promise((i=>{if((null==n?void 0:n.duration)===1/0)throw new Error("Promise-based animations must be finite.");const s=t.animate(e,(0,r.EZ)((0,r.ih)({},n),{duration:a()?0:n.duration}));s.addEventListener("cancel",i,{once:!0}),s.addEventListener("finish",i,{once:!0})}))}function s(t){return(t=t.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?1e3*parseFloat(t):parseFloat(t)}function a(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function l(t){return Promise.all(t.getAnimations().map((t=>new Promise((e=>{const n=requestAnimationFrame(e);t.addEventListener("cancel",(()=>n),{once:!0}),t.addEventListener("finish",(()=>n),{once:!0}),t.cancel()})))))}function o(t,e){return t.map((t=>(0,r.EZ)((0,r.ih)({},t),{height:"auto"===t.height?`${e}px`:t.height})))}},9940:(t,e,n)=>{var r,i=n(9191),s=n(1939),a=n(5710),l=n(8424),o=n(453),c=Symbol(),d=Symbol(),h=new Map,u=class extends l.P{constructor(){super(...arguments),this.svg=null,this.label="",this.library="default"}static async resolveIcon(t){var e;let n;try{if(n=await fetch(t,{mode:"cors"}),!n.ok)return 410===n.status?c:d}catch(t){return d}try{const t=document.createElement("div");t.innerHTML=await n.text();const i=t.firstElementChild;if("svg"!==(null==(e=null==i?void 0:i.tagName)?void 0:e.toLowerCase()))return c;r||(r=new DOMParser);const s=r.parseFromString(i.outerHTML,"text/html").body.querySelector("svg");return s?(s.part.add("svg"),document.adoptNode(s)):c}catch(t){return c}}connectedCallback(){super.connectedCallback(),(0,i.E4)(this)}firstUpdated(){this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),(0,i.Sw)(this)}getUrl(){const t=(0,i.Tb)(this.library);return this.name&&t?t.resolver(this.name):this.src}handleLabelChange(){"string"==typeof this.label&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const e=(0,i.Tb)(this.library),n=this.getUrl();if(!n)return void(this.svg=null);let r=h.get(n);r||(r=u.resolveIcon(n),h.set(n,r));const s=await r;if(s===d&&h.delete(n),n===this.getUrl())switch(s){case d:case c:this.svg=null,this.emit("sl-error");break;default:this.svg=s.cloneNode(!0),null==(t=null==e?void 0:e.mutator)||t.call(e,this.svg),this.emit("sl-load")}}render(){return this.svg}};u.styles=s.W,(0,o.u2)([(0,l.t)()],u.prototype,"svg",2),(0,o.u2)([(0,l.e2)({reflect:!0})],u.prototype,"name",2),(0,o.u2)([(0,l.e2)()],u.prototype,"src",2),(0,o.u2)([(0,l.e2)()],u.prototype,"label",2),(0,o.u2)([(0,l.e2)({reflect:!0})],u.prototype,"library",2),(0,o.u2)([(0,a.Y)("label")],u.prototype,"handleLabelChange",1),(0,o.u2)([(0,a.Y)(["name","src","library"])],u.prototype,"setIcon",1),u=(0,o.u2)([(0,l.e)("sl-icon")],u)},4867:(t,e,n)=>{function r(t,e){return new Promise((n=>{t.addEventListener(e,(function r(i){i.target===t&&(t.removeEventListener(e,r),n())}))}))}n.d(e,{m:()=>r})},1939:(t,e,n)=>{n.d(e,{W:()=>i});var r=n(6281),i=n(5954).i`
  ${r.N}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`},1807:(t,e,n)=>{function r(t,e,n){return r=t<e?e:t>n?n:t,Object.is(r,-0)?0:r;var r}n.d(e,{u:()=>r})},2759:(t,e,n)=>{n.d(e,{J:()=>i});var r={caret:'\n    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n      <polyline points="6 9 12 15 18 9"></polyline>\n    </svg>\n  ',check:'\n    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor" stroke-width="2">\n          <g transform="translate(3.428571, 3.428571)">\n            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>\n            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"chevron-down":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',"chevron-left":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>\n    </svg>\n  ',"chevron-right":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',eye:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">\n      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>\n      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>\n    </svg>\n  ',"eye-slash":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">\n      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>\n      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>\n      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>\n    </svg>\n  ',eyedropper:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">\n      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>\n    </svg>\n  ',"grip-vertical":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">\n      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>\n    </svg>\n  ',indeterminate:'\n    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor" stroke-width="2">\n          <g transform="translate(2.285714, 6.857143)">\n            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"person-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">\n      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>\n    </svg>\n  ',"play-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">\n      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>\n    </svg>\n  ',"pause-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">\n      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>\n    </svg>\n  ',radio:'\n    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g fill="currentColor">\n          <circle cx="8" cy="8" r="3.42857143"></circle>\n        </g>\n      </g>\n    </svg>\n  ',"star-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">\n      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>\n    </svg>\n  ',"x-lg":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">\n      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>\n    </svg>\n  ',"x-circle-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">\n      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>\n    </svg>\n  '},i={name:"system",resolver:t=>t in r?`data:image/svg+xml,${encodeURIComponent(r[t])}`:""}},1862:(t,e,n)=>{n.d(e,{P:()=>c,V:()=>h});var r,i=new Set,s=new MutationObserver(d),a=new Map,l=document.documentElement.dir||"ltr",o=document.documentElement.lang||navigator.language;function c(...t){t.map((t=>{const e=t.$code.toLowerCase();a.has(e)?a.set(e,Object.assign(Object.assign({},a.get(e)),t)):a.set(e,t),r||(r=t)})),d()}function d(){l=document.documentElement.dir||"ltr",o=document.documentElement.lang||navigator.language,[...i.keys()].map((t=>{"function"==typeof t.requestUpdate&&t.requestUpdate()}))}s.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});var h=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){i.add(this.host)}hostDisconnected(){i.delete(this.host)}dir(){return`${this.host.dir||l}`.toLowerCase()}lang(){return`${this.host.lang||o}`.toLowerCase()}getTranslationData(t){var e,n;const r=new Intl.Locale(t),i=null==r?void 0:r.language.toLowerCase(),s=null!==(n=null===(e=null==r?void 0:r.region)||void 0===e?void 0:e.toLowerCase())&&void 0!==n?n:"";return{locale:r,language:i,region:s,primary:a.get(`${i}-${s}`),secondary:a.get(i)}}exists(t,e){var n;const{primary:i,secondary:s}=this.getTranslationData(null!==(n=e.lang)&&void 0!==n?n:this.lang());return e=Object.assign({includeFallback:!1},e),!!(i&&i[t]||s&&s[t]||e.includeFallback&&r&&r[t])}term(t,...e){const{primary:n,secondary:i}=this.getTranslationData(this.lang());let s;if(n&&n[t])s=n[t];else if(i&&i[t])s=i[t];else{if(!r||!r[t])return console.error(`No translation found for: ${String(t)}`),String(t);s=r[t]}return"function"==typeof s?s(...e):s}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(t,e)}}},5381:(t,e,n)=>{n.d(e,{o:()=>s});var r=n(4370),i=n(5954),s=(0,r.e)(class extends r.i{constructor(t){var e;if(super(t),t.type!==r.t.ATTRIBUTE||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var n,r;if(void 0===this.nt){this.nt=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(n=this.st)||void 0===n?void 0:n.has(t))&&this.nt.add(t);return this.render(e)}const s=t.element.classList;this.nt.forEach((t=>{t in e||(s.remove(t),this.nt.delete(t))}));for(const t in e){const n=!!e[t];n===this.nt.has(t)||(null===(r=this.st)||void 0===r?void 0:r.has(t))||(n?(s.add(t),this.nt.add(t)):(s.remove(t),this.nt.delete(t)))}return i.x}})},836:(t,e,n)=>{n.d(e,{Z:()=>i});var r=n(9264),i={name:"default",resolver:t=>(0,r.b)(`assets/icons/${t}.svg`)}},4370:(t,e,n)=>{n.d(e,{e:()=>i,i:()=>s,t:()=>r});var r={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},i=t=>(...e)=>({_$litDirective$:t,values:e}),s=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},9191:(t,e,n)=>{n.d(e,{E4:()=>l,Sw:()=>o,Tb:()=>c});var r=n(836),i=n(2759),s=[r.Z,i.J],a=[];function l(t){a.push(t)}function o(t){a=a.filter((e=>e!==t))}function c(t){return s.find((e=>e.name===t))}},5710:(t,e,n)=>{n.d(e,{Y:()=>i});var r=n(453);function i(t,e){const n=(0,r.ih)({waitUntilFirstUpdate:!1},e);return(e,r)=>{const{update:i}=e,s=Array.isArray(t)?t:[t];e.update=function(t){s.forEach((e=>{const i=e;if(t.has(i)){const e=t.get(i),s=this[i];e!==s&&(n.waitUntilFirstUpdate&&!this.hasUpdated||this[r](e,s))}})),i.call(this,t)}}}}}]);
//# sourceMappingURL=sl-carousel.9ee8772e.js.map