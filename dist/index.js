(()=>{var e,t,r,n,o,a,i={},s={};function c(e){var t=s[e];if(void 0!==t)return t.exports;var r=s[e]={id:e,loaded:!1,exports:{}};return i[e](r,r.exports,c),r.loaded=!0,r.exports}c.m=i,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",r="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",n=e=>{e&&!e.d&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},c.a=(o,a,i)=>{var s;i&&((s=[]).d=1);var c,l,u,d=new Set,p=o.exports,m=new Promise(((e,t)=>{u=t,l=e}));m[t]=p,m[e]=e=>(s&&e(s),d.forEach(e),m.catch((e=>{}))),o.exports=m,a((o=>{var a;c=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[e])return o;if(o.then){var a=[];a.d=0,o.then((e=>{i[t]=e,n(a)}),(e=>{i[r]=e,n(a)}));var i={};return i[e]=e=>e(a),i}}var s={};return s[e]=e=>{},s[t]=o,s})))(o);var i=()=>c.map((e=>{if(e[r])throw e[r];return e[t]})),l=new Promise((t=>{(a=()=>t(i)).r=0;var r=e=>e!==s&&!d.has(e)&&(d.add(e),e&&!e.d&&(a.r++,e.push(a)));c.map((t=>t[e](r)))}));return a.r?l:i()}),(e=>(e?u(m[r]=e):l(p),n(s)))),s&&(s.d=0)},c.d=(e,t)=>{for(var r in t)c.o(t,r)&&!c.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((t,r)=>(c.f[r](e,t),t)),[])),c.u=e=>e+".index.js",c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},a="wasm:",c.l=(e,t,r,n)=>{if(o[e])o[e].push(t);else{var i,s;if(void 0!==r)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==a+r){i=d;break}}i||(s=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.setAttribute("data-webpack",a+r),i.src=e),o[e]=[t];var p=(t,r)=>{i.onerror=i.onload=null,clearTimeout(m);var n=o[e];if(delete o[e],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(r))),t)return t(r)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),s&&document.head.appendChild(i)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.v=(e,t,r,n)=>{var o=fetch(c.p+""+r+".module.wasm");return"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(o,n).then((t=>Object.assign(e,t.instance.exports))):o.then((e=>e.arrayBuffer())).then((e=>WebAssembly.instantiate(e,n))).then((t=>Object.assign(e,t.instance.exports)))},(()=>{var e;c.g.importScripts&&(e=c.g.location+"");var t=c.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),c.p=e})(),(()=>{var e={179:0};c.f.j=(t,r)=>{var n=c.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=o);var a=c.p+c.u(t),i=new Error;c.l(a,(r=>{if(c.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,o,[a,i,s]=r,l=0;if(a.some((t=>0!==e[t]))){for(n in i)c.o(i,n)&&(c.m[n]=i[n]);s&&s(c)}for(t&&t(r);l<a.length;l++)o=a[l],c.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self.webpackChunkwasm=self.webpackChunkwasm||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),async function(){let e=null;try{e=await c.e(235).then(c.bind(c,235))}catch(e){return void console.error(e)}console.log(e);const t=document.getElementById("upload"),r=new FileReader;t.addEventListener("change",(()=>{r.readAsDataURL(t.files[0]),r.onloadend=()=>{const t=r.result.replace(/^data:image\/(png|jpeg|jpg);base64,/,"");let n=e.grayscale(t);document.getElementById("new-img").setAttribute("src",n)}}))}()})();