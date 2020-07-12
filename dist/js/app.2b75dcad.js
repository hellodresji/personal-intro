(function(t){function e(e){for(var n,r,o=e[0],c=e[1],l=e[2],u=0,v=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&v.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);f&&f(e);while(v.length)v.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var c=a[r];0!==s[c]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={app:0},i=[];function r(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"943fba17"}[t]+".js"}function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=s[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=s[t]=[e,n]}));e.push(a[2]=n);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=r(t);var l=new Error;i=function(e){c.onerror=c.onload=null,clearTimeout(u);var a=s[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",l.name="ChunkLoadError",l.type=n,l.request=i,a[1](l)}s[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="dist/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var f=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"0cea":function(t,e,a){},"2b02":function(t,e,a){},"2cee":function(t,e,a){"use strict";var n=a("bdaa"),s=a.n(n);s.a},"2ea5":function(t,e,a){},8366:function(t,e,a){"use strict";var n=a("0cea"),s=a.n(n);s.a},"986e":function(t,e,a){"use strict";var n=a("eb4a"),s=a.n(n);s.a},"9b19":function(t,e,a){t.exports=a.p+"img/logo.63a7d78d.svg"},bdaa:function(t,e,a){},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticClass:"app"},[a("router-view")],1)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{staticClass:"text-center"},[n("v-col",{attrs:{cols:"12"}},[n("v-img",{staticClass:"my-3",attrs:{src:a("9b19"),contain:"",height:"200"}})],1),n("v-col",{staticClass:"mb-4"},[n("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),n("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),n("br"),t._v("please join our online "),n("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),n("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,a){return n("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),n("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,a){return n("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),n("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,a){return n("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},o=[],c=n["default"].extend({name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}}),l=c,u=a("2877"),f=a("6544"),v=a.n(f),d=a("62ad"),p=a("a523"),h=a("adda"),m=a("0fd9"),b=Object(u["a"])(l,r,o,!1,null,null,null),y=b.exports;v()(b,{VCol:d["a"],VContainer:p["a"],VImg:h["a"],VRow:m["a"]});var g=n["default"].extend({name:"App",components:{HelloWorld:y},data:function(){return{}}}),C=g,_=(a("986e"),a("7496")),j=Object(u["a"])(C,s,i,!1,null,"6a78b336",null),w=j.exports;v()(j,{VApp:_["a"]});a("d3b7");var x=a("8c4f"),O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("HomeComponent"),a("Profile"),a("Experience"),t._m(0)],1)},k=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"scroll-hint"},[a("div",{staticClass:"hint-direc"})])}],E=a("d4ec"),A=a("262e"),P=a("2caf"),I=a("9ab4"),V=a("60a3"),$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("div",{staticClass:"bkg"}),a("div",{staticClass:"content"},[a("div",{staticClass:"avatar"},[t._v(" GH ")]),a("p",{staticClass:"greetings"},[t._v(" GUANGHUI JI ")]),a("p",{staticClass:"desc"},[t._v("A frontend developer, who can bring all your innovation ideas into reality!")]),a("v-icon",{staticClass:"external",attrs:{dark:""}},[t._v("fab fa-xing")]),a("v-icon",{staticClass:"external",attrs:{dark:""}},[t._v("fab fa-linkedin-in")]),a("v-icon",{staticClass:"external",attrs:{dark:""}},[t._v("fab fa-google")])],1)])},H=[],S=function(t){Object(A["a"])(a,t);var e=Object(P["a"])(a);function a(){return Object(E["a"])(this,a),e.apply(this,arguments)}return a}(n["default"]);S=Object(I["a"])([V["a"]],S);var T=S,q=T,L=(a("2cee"),a("132d")),M=Object(u["a"])(q,$,H,!1,null,"5bc68c3e",null),D=M.exports;v()(M,{VIcon:L["a"]});var G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("v-container",{staticClass:"profile-container"},[a("section",{staticClass:"title-section mb-5"},[a("p",{staticClass:"section-title mb-0"},[t._v("Profile")]),a("span",{staticClass:"desc"},[t._v(" Always stay hungry for better designing and user interaction. ")])]),a("v-divider"),a("section",{staticClass:"content-section"},[a("section",{staticClass:"about-me"},[a("p",{staticClass:"sub-title mt-4"},[t._v("About Me")]),a("div",{staticClass:"desc"},[t._v(" I am an allround web developer. I am a senior programmer with good knowledge of front-end techniques. I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps. Also I like working in a team, you'll learn faster and much more. As the saying goes: 'two heads are better than one'. ")])]),a("section",{staticClass:"avatar"},[a("div",{staticClass:"img"})]),a("section",{staticClass:"basic-info"},[a("p",{staticClass:"sub-title mt-4"},[t._v("Details")]),a("div",{staticClass:"info-container"},[a("div",{staticClass:"info-item"},[a("div",{staticClass:"info-title"},[t._v("Lastname:")]),a("div",{staticClass:"info-content"},[t._v("Guanghui")])]),a("div",{staticClass:"info-item"},[a("div",{staticClass:"info-title"},[t._v("Firstname:")]),a("div",{staticClass:"info-content"},[t._v("Ji")])]),a("div",{staticClass:"info-item"},[a("div",{staticClass:"info-title"},[t._v("Birthday:")]),a("div",{staticClass:"info-content"},[t._v("12.1991")])]),a("div",{staticClass:"info-item"},[a("div",{staticClass:"info-title"},[t._v("Email:")]),a("div",{staticClass:"info-content"},[t._v("aaron.guanghui.ji@gmail.com")])]),a("div",{staticClass:"info-item"},[a("div",{staticClass:"info-title"},[t._v("Tel.:")]),a("div",{staticClass:"info-content"},[t._v("017661847604")])]),a("div",{staticClass:"info-item"},[a("div",{staticClass:"info-title"},[t._v("Address:")]),a("div",{staticClass:"info-content"},[t._v("Reitbahnstr. 35, 01069, Dresden")])])])])])],1)],1)},J=[],W=function(t){Object(A["a"])(a,t);var e=Object(P["a"])(a);function a(){return Object(E["a"])(this,a),e.apply(this,arguments)}return a}(n["default"]);W=Object(I["a"])([V["a"]],W);var F=W,N=F,R=(a("e160"),a("ce7e")),U=Object(u["a"])(N,G,J,!1,null,"d021fcf0",null),z=U.exports;v()(U,{VContainer:p["a"],VDivider:R["a"]});var B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"})},Q=[],K=function(t){Object(A["a"])(a,t);var e=Object(P["a"])(a);function a(){return Object(E["a"])(this,a),e.apply(this,arguments)}return a}(n["default"]);K=Object(I["a"])([V["a"]],K);var X=K,Y=X,Z=Object(u["a"])(Y,B,Q,!1,null,null,null),tt=Z.exports,et=function(t){Object(A["a"])(a,t);var e=Object(P["a"])(a);function a(){return Object(E["a"])(this,a),e.apply(this,arguments)}return a}(n["default"]);et=Object(I["a"])([Object(V["a"])({components:{HomeComponent:D,Profile:z,Experience:tt}})],et);var at=et,nt=at,st=(a("8366"),Object(u["a"])(nt,O,k,!1,null,"0b12c7bd",null)),it=st.exports;n["default"].use(x["a"]);var rt=[{path:"/",name:"Home",component:it},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],ot=new x["a"]({base:"dist/",routes:rt}),ct=ot,lt=a("2f62");n["default"].use(lt["a"]);var ut=new lt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),ft=a("ce5b"),vt=a.n(ft);n["default"].use(vt.a);var dt=new vt.a({});a("2ea5"),a("15f5"),a("d1e78");n["default"].config.productionTip=!1,new n["default"]({router:ct,store:ut,vuetify:dt,render:function(t){return t(w)}}).$mount("#app")},e160:function(t,e,a){"use strict";var n=a("2b02"),s=a.n(n);s.a},eb4a:function(t,e,a){}});
//# sourceMappingURL=app.2b75dcad.js.map