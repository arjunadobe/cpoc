(this["webpackJsonpCentral-Barcode-QrCode-Scanner"]=this["webpackJsonpCentral-Barcode-QrCode-Scanner"]||[]).push([[0],{134:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),c=n.n(r),l=(n(70),n(135)),i=n(136),s=n(137),u=(n(71),n(140)),d=n(16),m=n(138),g=(n(72),Object(a.lazy)((function(){return Promise.all([n.e(2),n.e(4)]).then(n.bind(null,318))}))),f=function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){navigator.mediaDevices&&navigator.mediaDevices.getUserMedia&&r(!0),console.log("did mounted")}),[]),o.a.createElement(o.a.Fragment,null,n?o.a.createElement(a.Suspense,{fallback:o.a.createElement("div",null,"Loading...")},o.a.createElement(g,null)):"",n?"":o.a.createElement("div",{className:"cameraHandler__unsopported"},o.a.createElement("div",null,o.a.createElement("p",null,"Your device does not support/enabled camera access or something went wrong"," ",o.a.createElement("span",{role:"img","aria-label":"thinking-face"},"\ud83e\udd14")),o.a.createElement("p",null,"You can enter the barcode below"))))},p=o.a.createContext({code:"",type:"",setCode:function(e){},setType:function(e){}}),h=n(139),v=m.a.TabPane,E=function(){var e=Object(a.useState)(1),t=Object(d.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),l=Object(d.a)(c,2),i=l[0],s=l[1],u=Object(a.useState)(""),g=Object(d.a)(u,2),E=g[0],b=g[1];return o.a.createElement(p.Provider,{value:{code:i,setCode:function(e){s(e)},type:E,setType:function(e){b(e)}}},o.a.createElement("div",{className:"card-container"},o.a.createElement(m.a,{type:"card",defaultActiveKey:"1",onChange:function(e){console.log(e),r(+e)}},o.a.createElement(v,{tab:o.a.createElement("span",null,o.a.createElement(h.a,null),"Barcode/Qrcode Scanner"),key:"1"},1===n?o.a.createElement(f,null):null))))},b=l.a.Header,w=l.a.Content,y=l.a.Footer,k=l.a.Sider,S=function(){return o.a.createElement("div",null,o.a.createElement(l.a,{style:{height:"100vh"}},o.a.createElement(k,{breakpoint:"lg",collapsedWidth:"0",onBreakpoint:function(e){console.log(e)},onCollapse:function(e,t){console.log(e,t)}},o.a.createElement("section",{style:{textAlign:"center",margin:16}},o.a.createElement(i.a,{align:"start"},o.a.createElement("img",{style:{height:36},src:"https://www.centralgroup.com/themes/default/assets/static/images/logo/logo-white-gray.svg",alt:"Centra Group"}))),o.a.createElement(s.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["1"]},o.a.createElement(s.a.Item,{key:"1",icon:o.a.createElement(u.a,null)},"Scan"))),o.a.createElement(l.a,null,o.a.createElement(b,{className:"site-layout-sub-header-background",style:{padding:0}}),o.a.createElement(w,{style:{margin:"0px 16px 0"}},o.a.createElement("div",{className:"site-layout-background",style:{padding:24,minHeight:360}},o.a.createElement(E,null))),o.a.createElement(y,{style:{textAlign:"center"}}))))},C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(S,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/cpoc",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/cpoc","/service-worker.js");C?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):j(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):j(t,e)}))}}()},65:function(e,t,n){e.exports=n(134)},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){}},[[65,1,3]]]);
//# sourceMappingURL=main.b9bab1e8.chunk.js.map