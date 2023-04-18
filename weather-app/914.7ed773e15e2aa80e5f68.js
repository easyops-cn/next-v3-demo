"use strict";(self.webpackChunkweather_app=self.webpackChunkweather_app||[]).push([[914],{5202:(r,e,t)=>{t.r(e),t.d(e,{HttpAbortError:()=>m,HttpFetchError:()=>d,HttpParseError:()=>v,HttpResponseError:()=>f,createHttpInstance:()=>D,defaultAdapter:()=>C,fetch:()=>s,getUrlWithParams:()=>S,http:()=>q,isHttpAbortError:()=>P});var s=(r,e)=>{var t=new Request(r,Object.assign({credentials:"same-origin"},e));return self.fetch(t)},n=t(5866),a=t(3395),o=t(6666),i=t(687),h=t(6171),c=t(381),u=t(3028),p=t(2159),l=t(4795);class d extends Error{constructor(r){super(r),this.name="HttpFetchError",Error.captureStackTrace&&Error.captureStackTrace(this,d)}}class f extends Error{constructor(r,e){super(r.statusText),(0,o.Z)(this,"response",void 0),(0,o.Z)(this,"responseJson",void 0),this.name="HttpResponseError",Error.captureStackTrace&&Error.captureStackTrace(this,f),this.response=r,this.responseJson=e}}class v extends Error{constructor(r){super(r.statusText),(0,o.Z)(this,"response",void 0),this.name="HttpParseError",Error.captureStackTrace&&Error.captureStackTrace(this,v),this.response=r}}class m extends Error{constructor(r){super(r),this.name="HttpAbortError"}}class E{constructor(){(0,o.Z)(this,"handlers",[])}use(r,e){return this.handlers.push({fulfilled:r,rejected:e}),this.handlers.length-1}eject(r){this.handlers[r]&&(this.handlers[r]=null)}forEach(r){this.handlers.forEach((e=>{null!==e&&r(e)}))}}var Z=["params","responseType","interceptorParams","observe","noAbortOnRouteChange","useCache"],y=["params","responseType","interceptorParams","observe","noAbortOnRouteChange","useCache","headers"],g=["body","method"];function T(r){return null==r}var w=document.querySelector("base"),b=w?w.href:location.origin+"/",P=r=>r instanceof DOMException&&20===r.code,H=(r,e)=>({error:r,config:e}),A=function(){var r=(0,l.Z)((function*(r,e,t){return new Promise(function(){var n=(0,l.Z)((function*(n,a){var o;t.url=r;var{responseType:i}=t.options||{};i||(i="json");try{o=yield s(r,e)}catch(r){return void a(H(P(r)?new m(r.toString()):new d(r.toString()),t))}if(o.ok){var h;try{h=yield o[i]()}catch(r){return void a(H(P(r)?new m(r.toString()):new v(o),t))}n({config:t,status:o.status,statusText:o.statusText,headers:o.headers,data:h})}else{var c;try{c=yield o.json()}catch(r){}a(H(new f(o,c),t))}}));return function(r,e){return n.apply(this,arguments)}}())}));return function(e,t,s){return r.apply(this,arguments)}}(),S=(r,e)=>{if(e){var t=new URL(r,b);e instanceof URLSearchParams?e.forEach((function(r,e){t.searchParams.append(e,r)})):Object.entries(e).forEach((r=>{var[e,s]=r;Array.isArray(s)?s.forEach((r=>{t.searchParams.append(e,T(r)?"":r)})):t.searchParams.append(e,T(s)?"":s)}));var{href:s}=t;return s.startsWith(b)?s.substr(b.length):s}return r},k=(r,e)=>{if(void 0!==r){var t=new Headers(e||{}),s="Content-Type",n=r;return t.has(s)||("string"==typeof r?t.set(s,"application/x-www-form-urlencoded"):r instanceof FormData||(t.set(s,"application/json"),n=JSON.stringify(r))),{body:n,headers:t}}return{headers:e}},C=r=>{var{url:e,method:t,data:s}=r;return["DELETE","GET","HEAD"].includes(r.method)?((r,e,t)=>{var s=t.options||{},{params:n,responseType:a,interceptorParams:o,observe:i,noAbortOnRouteChange:h,useCache:c}=s,l=(0,p.Z)(s,Z);return A(S(e,n),(0,u.Z)((0,u.Z)({},l),{},{method:r}),t)})(t,e,r):((r,e,t,s)=>{var n=s.options||{},{params:a,responseType:o,interceptorParams:i,observe:h,noAbortOnRouteChange:c,useCache:l,headers:d}=n,f=(0,p.Z)(n,y);return A(S(e,a),(0,u.Z)((0,u.Z)({},f),{},{method:r},k(t,d)),s)})(t,e,s,r)},j=new WeakMap,x=new WeakSet;class R{constructor(r){var e=this;(0,n.Z)(this,x),(0,o.Z)(this,"interceptors",void 0),(0,a.Z)(this,j,{writable:!0,value:C}),(0,o.Z)(this,"request",function(){var r=(0,l.Z)((function*(r,t,s){var n=t||{},{body:a,method:o}=n,i=(0,p.Z)(n,g);return(0,h.Z)(e,x,O).call(e,{url:r,data:a,method:o||"GET",options:(0,u.Z)((0,u.Z)({},s||{}),i)})}));return function(e,t,s){return r.apply(this,arguments)}}()),(0,o.Z)(this,"simpleRequest",(function(r,t){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return(0,h.Z)(e,x,O).call(e,{url:t,method:r,options:s})})),(0,o.Z)(this,"requestWithBody",(function(r,t,s){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return(0,h.Z)(e,x,O).call(e,{url:t,method:r,data:s,options:n})})),this.interceptors={request:new E,response:new E},null!=r&&r.adapter&&(0,c.Z)(this,j,r.adapter)}getUrlWithParams(r,e){return S(r,e)}getBodyAndHeaders(r,e){return k(r,e)}get(r,e){return(0,h.Z)(this,x,O).call(this,{url:r,method:"GET",options:e})}delete(r,e){return(0,h.Z)(this,x,O).call(this,{url:r,method:"DELETE",options:e})}head(r,e){return(0,h.Z)(this,x,O).call(this,{url:r,method:"HEAD",options:e})}post(r,e,t){return(0,h.Z)(this,x,O).call(this,{url:r,method:"POST",data:e,options:t})}put(r,e,t){return(0,h.Z)(this,x,O).call(this,{url:r,method:"PUT",data:e,options:t})}patch(r,e,t){return(0,h.Z)(this,x,O).call(this,{url:r,method:"PATCH",data:e,options:t})}}function O(r){var e=[],t=Promise.resolve(r);for(this.interceptors.request.forEach((r=>{e.push(r.fulfilled,r.rejected)})),e.push((r=>(0,i.Z)(this,j).call(this,r)),void 0),this.interceptors.response.forEach((r=>{e.push(r.fulfilled,r.rejected)})),e.push((r=>{var e;return"response"===(null===(e=r.config.options)||void 0===e?void 0:e.observe)?r:r.data}),(r=>Promise.reject(r.error)));e.length;)t=t.then(e.shift(),e.shift());return t}var q=new R;function D(r){q=new R(r)}}}]);