(function(n){function e(e){for(var c,u,o=e[0],d=e[1],h=e[2],i=0,f=[];i<o.length;i++)u=o[i],a[u]&&f.push(a[u][0]),a[u]=0;for(c in d)Object.prototype.hasOwnProperty.call(d,c)&&(n[c]=d[c]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,h||[]),t()}function t(){for(var n,e=0;e<r.length;e++){for(var t=r[e],c=!0,u=1;u<t.length;u++){var o=t[u];0!==a[o]&&(c=!1)}c&&(r.splice(e--,1),n=d(d.s=t[0]))}return n}var c={},u={app:0},a={app:0},r=[];function o(n){return d.p+"js/"+({}[n]||n)+"."+{"chunk-22faa80c":"771e193f","chunk-2aff2a77":"a792f0cc","chunk-2d0a400c":"7ff7fc25","chunk-2d0a443e":"bfc94d73","chunk-2d0ab2eb":"1988f182","chunk-2d0ae5e6":"6b001982","chunk-2d0ae943":"223c559d","chunk-2d0b1bf6":"387940c3","chunk-2d0b59e9":"da7c2689","chunk-2d0ba708":"4953d25d","chunk-2d0aab88":"bb257689","chunk-2d0bdf1e":"96f577cb","chunk-2d0c4303":"2de64040","chunk-2d0d3e27":"7e5f5bbd","chunk-2d0de2d9":"9d43460b","chunk-2d0de6aa":"2823df12","chunk-2d0e1d93":"09306802","chunk-2d0e8c24":"52ba8e85","chunk-2d0f06bd":"57db6eb9","chunk-2d208124":"9e94aa53","chunk-2d2131a8":"a5856014","chunk-2d21444c":"114282a7","chunk-2d2183eb":"edd66693","chunk-2d21e6d0":"e2e7ac74","chunk-2d21eae7":"067f9617","chunk-2d222779":"68e5ee5d","chunk-2d224eb7":"35ef2990","chunk-2d226319":"611de3a2","chunk-2d22c303":"e116aa4c","chunk-2d22d610":"16a75e9e","chunk-2d23777b":"15ac4f5e","chunk-3525d9bb":"3939caf3","chunk-2d0d093a":"44322165","chunk-380f0973":"64486059","chunk-6b36182e":"ba8285e4","chunk-c7051a8e":"940d20b9","chunk-2d0f0c1b":"6c345fe7","chunk-a9adb17c":"868a5d75","chunk-66e944aa":"074b5740","chunk-6c745bc3":"edc45112","chunk-8efa499c":"ecb759b7","chunk-9e5feaa2":"784c36fb","chunk-b2ddbeea":"185384d7","chunk-bbb78ca0":"3ecb2311","chunk-c79fadfe":"37dec598"}[n]+".js"}function d(e){if(c[e])return c[e].exports;var t=c[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.e=function(n){var e=[],t={"chunk-22faa80c":1,"chunk-6b36182e":1,"chunk-6c745bc3":1,"chunk-8efa499c":1,"chunk-b2ddbeea":1,"chunk-bbb78ca0":1};u[n]?e.push(u[n]):0!==u[n]&&t[n]&&e.push(u[n]=new Promise(function(e,t){for(var c="css/"+({}[n]||n)+"."+{"chunk-22faa80c":"28a1c86e","chunk-2aff2a77":"31d6cfe0","chunk-2d0a400c":"31d6cfe0","chunk-2d0a443e":"31d6cfe0","chunk-2d0ab2eb":"31d6cfe0","chunk-2d0ae5e6":"31d6cfe0","chunk-2d0ae943":"31d6cfe0","chunk-2d0b1bf6":"31d6cfe0","chunk-2d0b59e9":"31d6cfe0","chunk-2d0ba708":"31d6cfe0","chunk-2d0aab88":"31d6cfe0","chunk-2d0bdf1e":"31d6cfe0","chunk-2d0c4303":"31d6cfe0","chunk-2d0d3e27":"31d6cfe0","chunk-2d0de2d9":"31d6cfe0","chunk-2d0de6aa":"31d6cfe0","chunk-2d0e1d93":"31d6cfe0","chunk-2d0e8c24":"31d6cfe0","chunk-2d0f06bd":"31d6cfe0","chunk-2d208124":"31d6cfe0","chunk-2d2131a8":"31d6cfe0","chunk-2d21444c":"31d6cfe0","chunk-2d2183eb":"31d6cfe0","chunk-2d21e6d0":"31d6cfe0","chunk-2d21eae7":"31d6cfe0","chunk-2d222779":"31d6cfe0","chunk-2d224eb7":"31d6cfe0","chunk-2d226319":"31d6cfe0","chunk-2d22c303":"31d6cfe0","chunk-2d22d610":"31d6cfe0","chunk-2d23777b":"31d6cfe0","chunk-3525d9bb":"31d6cfe0","chunk-2d0d093a":"31d6cfe0","chunk-380f0973":"31d6cfe0","chunk-6b36182e":"961fb5da","chunk-c7051a8e":"31d6cfe0","chunk-2d0f0c1b":"31d6cfe0","chunk-a9adb17c":"31d6cfe0","chunk-66e944aa":"31d6cfe0","chunk-6c745bc3":"1d99d6cd","chunk-8efa499c":"603305bb","chunk-9e5feaa2":"31d6cfe0","chunk-b2ddbeea":"755beef8","chunk-bbb78ca0":"f9208b90","chunk-c79fadfe":"31d6cfe0"}[n]+".css",a=d.p+c,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var h=r[o],i=h.getAttribute("data-href")||h.getAttribute("href");if("stylesheet"===h.rel&&(i===c||i===a))return e()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){h=f[o],i=h.getAttribute("data-href");if(i===c||i===a)return e()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=e,l.onerror=function(e){var c=e&&e.target&&e.target.src||a,r=new Error("Loading CSS chunk "+n+" failed.\n("+c+")");r.request=c,delete u[n],l.parentNode.removeChild(l),t(r)},l.href=a;var s=document.getElementsByTagName("head")[0];s.appendChild(l)}).then(function(){u[n]=0}));var c=a[n];if(0!==c)if(c)e.push(c[2]);else{var r=new Promise(function(e,t){c=a[n]=[e,t]});e.push(c[2]=r);var h,i=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,d.nc&&f.setAttribute("nonce",d.nc),f.src=o(n),h=function(e){f.onerror=f.onload=null,clearTimeout(l);var t=a[n];if(0!==t){if(t){var c=e&&("load"===e.type?"missing":e.type),u=e&&e.target&&e.target.src,r=new Error("Loading chunk "+n+" failed.\n("+c+": "+u+")");r.type=c,r.request=u,t[1](r)}a[n]=void 0}};var l=setTimeout(function(){h({type:"timeout",target:f})},12e4);f.onerror=f.onload=h,i.appendChild(f)}return Promise.all(e)},d.m=n,d.c=c,d.d=function(n,e,t){d.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},d.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},d.t=function(n,e){if(1&e&&(n=d(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(d.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var c in n)d.d(t,c,function(e){return n[e]}.bind(null,c));return t},d.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return d.d(e,"a",e),e},d.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},d.p="/",d.oe=function(n){throw console.error(n),n};var h=window["webpackJsonp"]=window["webpackJsonp"]||[],i=h.push.bind(h);h.push=e,h=h.slice();for(var f=0;f<h.length;f++)e(h[f]);var l=i;r.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"56d7":function(n,e,t){"use strict";t.r(e);t("cadf"),t("551c"),t("097d"),t("f466"),t("579f"),t("587a");var c=t("a026"),u=t("bc3a"),a=t.n(u),r={},o=a.a.create(r);o.interceptors.request.use(function(n){return n},function(n){return Promise.reject(n)}),o.interceptors.response.use(function(n){return n},function(n){return Promise.reject(n)}),Plugin.install=function(n,e){n.axios=o,window.axios=o,Object.defineProperties(n.prototype,{axios:{get:function(){return o}},$axios:{get:function(){return o}}})},c["default"].use(Plugin);Plugin;var d=t("9f7b"),h=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("router-view")},i=[],f={name:"app"},l=f,s=(t("5c0b"),t("2877")),b=Object(s["a"])(l,h,i,!1,null,null,null);b.options.__file="App.vue";var p=b.exports,m=t("8c4f"),k=function(){return Promise.all([t.e("chunk-380f0973"),t.e("chunk-a9adb17c")]).then(t.bind(null,"e8c5"))},g=function(){return Promise.all([t.e("chunk-3525d9bb"),t.e("chunk-380f0973"),t.e("chunk-2d0ba708"),t.e("chunk-6b36182e")]).then(t.bind(null,"7277"))},v=function(){return Promise.all([t.e("chunk-2d0ba708"),t.e("chunk-2d0aab88")]).then(t.bind(null,"11e7"))},w=function(){return t.e("chunk-2d0de2d9").then(t.bind(null,"8517"))},y=function(){return Promise.all([t.e("chunk-3525d9bb"),t.e("chunk-2d0ba708"),t.e("chunk-2d0d093a")]).then(t.bind(null,"6923"))},P=function(){return Promise.all([t.e("chunk-3525d9bb"),t.e("chunk-c7051a8e")]).then(t.bind(null,"37cc"))},j=function(){return t.e("chunk-66e944aa").then(t.bind(null,"f502"))},B=function(){return t.e("chunk-9e5feaa2").then(t.bind(null,"3f49"))},C=function(){return t.e("chunk-c79fadfe").then(t.bind(null,"ee17"))},T=function(){return t.e("chunk-bbb78ca0").then(t.bind(null,"1292"))},x=function(){return t.e("chunk-8efa499c").then(t.bind(null,"da19"))},O=function(){return Promise.all([t.e("chunk-380f0973"),t.e("chunk-2d0f0c1b")]).then(t.bind(null,"9e70"))},A=function(){return t.e("chunk-2d0bdf1e").then(t.bind(null,"2dc9"))},S=function(){return t.e("chunk-2d22d610").then(t.bind(null,"f6f0"))},_=function(){return t.e("chunk-2d224eb7").then(t.bind(null,"e1d9"))},E=function(){return t.e("chunk-2d0b1bf6").then(t.bind(null,"20bd"))},N=function(){return t.e("chunk-2d0ae943").then(t.bind(null,"0b50"))},M=function(){return t.e("chunk-2d208124").then(t.bind(null,"a2da"))},L=function(){return t.e("chunk-2d0a443e").then(t.bind(null,"0668"))},I=function(){return t.e("chunk-2d21eae7").then(t.bind(null,"d731"))},U=function(){return t.e("chunk-2d0de6aa").then(t.bind(null,"860f"))},q=function(){return t.e("chunk-2d0ab2eb").then(t.bind(null,"13d7"))},D=function(){return t.e("chunk-2d0d3e27").then(t.bind(null,"5f55"))},F=function(){return t.e("chunk-2d0f06bd").then(t.bind(null,"9bfd"))},J=function(){return t.e("chunk-2d21444c").then(t.bind(null,"afe6"))},G=function(){return t.e("chunk-22faa80c").then(t.bind(null,"c3fc"))},$=function(){return t.e("chunk-2d222779").then(t.bind(null,"cf77"))},H=function(){return t.e("chunk-2d2183eb").then(t.bind(null,"c9ba"))},R=function(){return t.e("chunk-6c745bc3").then(t.bind(null,"261a"))},W=function(){return t.e("chunk-2d0a400c").then(t.bind(null,"051b"))},z=function(){return t.e("chunk-2d21e6d0").then(t.bind(null,"d608"))},K=function(){return t.e("chunk-2d0e1d93").then(t.bind(null,"7bd6"))},Q=function(){return t.e("chunk-2d0ae5e6").then(t.bind(null,"0a87"))},V=function(){return t.e("chunk-2d226319").then(t.bind(null,"e82b"))},X=function(){return t.e("chunk-2d0b59e9").then(t.bind(null,"1a58"))},Y=function(){return t.e("chunk-2d23777b").then(t.bind(null,"faf0"))},Z=function(){return t.e("chunk-2d0c4303").then(t.bind(null,"3a87"))},nn=function(){return t.e("chunk-2d22c303").then(t.bind(null,"f1bd"))},en=function(){return t.e("chunk-2d0e8c24").then(t.bind(null,"8b48"))},tn=function(){return t.e("chunk-2d2131a8").then(t.bind(null,"aaf8"))},cn=function(){return t.e("chunk-b2ddbeea").then(t.bind(null,"dc02"))},un=function(){return t.e("chunk-2aff2a77").then(t.bind(null,"eeca"))};c["default"].use(m["a"]);var an=new m["a"]({mode:"hash",linkActiveClass:"open active",scrollBehavior:function(){return{y:0}},routes:[{path:"/pages",redirect:"/pages/productos/list",name:"Home",component:k,children:[{path:"productos/create",name:"Crear Producto",component:j},{path:"productos/list",name:"Mis Productos",component:B},{path:"boleta/create",name:"Crear boleta",component:C},{path:"dashboard",name:"Dashboard",component:g},{path:"theme",redirect:"/theme/colors",name:"Theme",component:{render:function(n){return n("router-view")}},children:[{path:"colors",name:"Colors",component:v},{path:"typography",name:"Typography",component:w}]},{path:"charts",name:"Charts",component:y},{path:"widgets",name:"Widgets",component:P},{path:"users",meta:{label:"Users"},component:{render:function(n){return n("router-view")}},children:[{path:"",component:cn},{path:":id",meta:{label:"User Details"},name:"User",component:un}]},{path:"base",redirect:"/base/cards",name:"Base",component:{render:function(n){return n("router-view")}},children:[{path:"cards",name:"Cards",component:T},{path:"forms",name:"Forms",component:x},{path:"switches",name:"Switches",component:O},{path:"tables",name:"Tables",component:A},{path:"tabs",name:"Tabs",component:S},{path:"breadcrumbs",name:"Breadcrumbs",component:_},{path:"carousels",name:"Carousels",component:E},{path:"collapses",name:"Collapses",component:N},{path:"jumbotrons",name:"Jumbotrons",component:M},{path:"list-groups",name:"List Groups",component:L},{path:"navs",name:"Navs",component:I},{path:"navbars",name:"Navbars",component:U},{path:"paginations",name:"Paginations",component:q},{path:"popovers",name:"Popovers",component:D},{path:"progress-bars",name:"Progress Bars",component:F},{path:"tooltips",name:"Tooltips",component:J}]},{path:"buttons",redirect:"/buttons/standard-buttons",name:"Buttons",component:{render:function(n){return n("router-view")}},children:[{path:"standard-buttons",name:"Standard Buttons",component:G},{path:"button-groups",name:"Button Groups",component:$},{path:"dropdowns",name:"Dropdowns",component:H},{path:"brand-buttons",name:"Brand Buttons",component:R}]},{path:"icons",redirect:"/icons/font-awesome",name:"Icons",component:{render:function(n){return n("router-view")}},children:[{path:"coreui-icons",name:"CoreUI Icons",component:Q},{path:"flags",name:"Flags",component:W},{path:"font-awesome",name:"Font Awesome",component:z},{path:"simple-line-icons",name:"Simple Line Icons",component:K}]},{path:"notifications",redirect:"/notifications/alerts",name:"Notifications",component:{render:function(n){return n("router-view")}},children:[{path:"alerts",name:"Alerts",component:V},{path:"badges",name:"Badges",component:X},{path:"modals",name:"Modals",component:Y}]}]},{path:"/",redirect:"/login",name:"Pages",component:{render:function(n){return n("router-view")}},children:[{path:"404",name:"Page404",component:Z},{path:"500",name:"Page500",component:nn},{path:"login",name:"Login",component:en},{path:"register",name:"Register",component:tn}]}]}),rn=t("0628"),on=t.n(rn);window.toastr=t("854a"),c["default"].use(on.a),c["default"].use(d["a"]),new c["default"]({el:"#app",router:an,template:"<App/>",components:{App:p}})},"5c0b":function(n,e,t){"use strict";var c=t("5e27"),u=t.n(c);u.a},"5e27":function(n,e,t){}});
//# sourceMappingURL=app.2411abed.js.map