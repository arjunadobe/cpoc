(this["webpackJsonpCentral-Barcode-QrCode-Scanner"]=this["webpackJsonpCentral-Barcode-QrCode-Scanner"]||[]).push([[4],{185:function(e,t,a){},186:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a(0),c=a.n(i),d=a(67),o=(a(185),function(){var e=Object(i.useState)(""),t=Object(n.a)(e,2),a=t[0],o=t[1],r=new Map;r.set(d.DecodeHintType.TRY_HARDER,!0);var s=new d.BrowserMultiFormatReader(r,1e3);return Object(i.useEffect)((function(){!function e(){new Promise((function(e,t){s.decodeOnceFromVideoDevice(null,document.getElementById("video")).then(e).catch(t)})).then((function(t){document.getElementById("idcanvas").style.display="none",alert(t.getText()),e(),document.getElementById("video").addEventListener("loadedmetadata",(function(e){document.getElementById("idcanvas").style.display="block"}))})).catch((function(e){o(e.message)})).catch((function(e){o(e.message)}))}()})),navigator.mediaDevices.getUserMedia&&navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}}).then((function(e){document.getElementById("video").addEventListener("loadedmetadata",(function(e){!function(){var e=document.querySelector("#idcanvas");if(null!==e){var t=e.getContext("2d");t.beginPath(),e.width=window.screen.width,e.height=window.screen.height,e.style.width="100%",e.style.height="100%";var a=e.width/2-150,n=e.height/2-150;t.clearRect(0,0,e.width,e.height),t.rect(a,n,300,300),t.lineWidth="6",t.strokeStyle="#fe8e14",t.stroke()}}()}))})),c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"dynam-info"},c.a.createElement("img",{src:"https://www.centralgroup.com/themes/default/assets/static/images/logo/logo-white-gray.svg",alt:"logo"})),c.a.createElement("div",{id:"loading"},c.a.createElement("img",{id:"loading-image",src:"/cpoc/bike_loader.gif",alt:"Loading..."})),c.a.createElement("div",{className:"w-100 row align-items-center"},c.a.createElement("div",{className:"row"},a),c.a.createElement("div",{className:"video "},c.a.createElement("video",{id:"video"}),c.a.createElement("canvas",{id:"idcanvas"}))))});t.default=o}}]);
//# sourceMappingURL=4.9a26a26d.chunk.js.map