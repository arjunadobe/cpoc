(this["webpackJsonpCentral-Barcode-QrCode-Scanner"]=this["webpackJsonpCentral-Barcode-QrCode-Scanner"]||[]).push([[0],[,,,,function(e,n,t){e.exports=t(12)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),r=t(3),c=t.n(r),i=(t(9),t(10),t(2)),l=(t(11),Object(o.lazy)((function(){return Promise.all([t.e(2),t.e(4)]).then(t.bind(null,186))}))),s=function(){var e=Object(o.useState)(!1),n=Object(i.a)(e,2),t=n[0],r=n[1];return Object(o.useEffect)((function(){navigator.mediaDevices&&navigator.mediaDevices.getUserMedia&&r(!0),console.log("did mounted")}),[]),a.a.createElement(a.a.Fragment,null,t?a.a.createElement(o.Suspense,{fallback:a.a.createElement("div",null,"Loading...")},a.a.createElement(l,null)):"",t?"":a.a.createElement("div",{className:"cameraHandler__unsopported"},a.a.createElement("div",null,a.a.createElement("p",null,"Your device does not support/enabled camera access or something went wrong"," ",a.a.createElement("span",{role:"img","aria-label":"thinking-face"},"\ud83e\udd14")),a.a.createElement("p",null,"You can enter the barcode below"))))},u=function(){return a.a.createElement(s,null)},d=function(){return a.a.createElement("div",null,a.a.createElement(u,null))},f=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(d,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/cpoc",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/cpoc","/service-worker.js");f?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):v(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):v(n,e)}))}}()}],[[4,1,3]]]);
//# sourceMappingURL=main.6c422805.chunk.js.map