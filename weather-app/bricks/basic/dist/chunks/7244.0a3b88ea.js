"use strict";(self.webpackChunk_next_bricks_basic=self.webpackChunk_next_bricks_basic||[]).push([[7244],{7244:(e,t,r)=>{function s(e){var t=Object.getOwnPropertyNames(e);for(var r of t){var n=e[r];n&&"object"==typeof n&&s(n)}return Object.freeze(e)}function n(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function i(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}r.r(t),r.d(t,{JsonStorage:()=>o,deepFreeze:()=>s,hasOwnProperty:()=>n,isObject:()=>i});class o{constructor(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"brick-next-";this.storage=e,this.prefix=t}setItem(e,t){this.storage.setItem(this.prefix+e,JSON.stringify(t))}getItem(e){var t;return JSON.parse(null!==(t=this.storage.getItem(this.prefix+e))&&void 0!==t?t:"null")}removeItem(e){return this.storage.removeItem(this.prefix+e)}clear(){return this.storage.clear()}}}}]);
//# sourceMappingURL=7244.0a3b88ea.js.map