(function(t){function e(e){for(var n,a,c=e[0],i=e[1],u=e[2],l=0,h=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&h.push(s[a][0]),s[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);d&&d(e);while(h.length)h.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,a=1;a<r.length;a++){var c=r[a];0!==s[c]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},a={app:0},s={app:0},o=[];function c(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-05f2feab":"fd5abe0d","chunk-0958ca2a":"82b6f630","chunk-1c75402e":"808ffdb3","chunk-30a542af":"d982aeb9","chunk-3dfc26fc":"50bca558","chunk-464555e4":"7c44e5c0"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(t){var e=[],r={"chunk-05f2feab":1,"chunk-0958ca2a":1,"chunk-1c75402e":1,"chunk-30a542af":1,"chunk-3dfc26fc":1,"chunk-464555e4":1};a[t]?e.push(a[t]):0!==a[t]&&r[t]&&e.push(a[t]=new Promise((function(e,r){for(var n="css/"+({}[t]||t)+"."+{"chunk-05f2feab":"465ed805","chunk-0958ca2a":"9d0aea0e","chunk-1c75402e":"bf472e08","chunk-30a542af":"a48020c7","chunk-3dfc26fc":"4a0a172e","chunk-464555e4":"b9640587"}[t]+".css",s=i.p+n,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var u=o[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===s))return e()}var h=document.getElementsByTagName("style");for(c=0;c<h.length;c++){u=h[c],l=u.getAttribute("data-href");if(l===n||l===s)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var n=e&&e.target&&e.target.src||s,o=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete a[t],d.parentNode.removeChild(d),r(o)},d.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){a[t]=0})));var n=s[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,r){n=s[t]=[e,r]}));e.push(n[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(t);var h=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var r=s[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;h.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",h.name="ChunkLoadError",h.type=n,h.request=a,r[1](h)}s[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/sweethome/",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var h=0;h<u.length;h++)e(u[h]);var d=l;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"03d1":function(t,e,r){},"08ff":function(t,e,r){},"0d7a":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyRTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyRjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJDOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJEOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+FYrpWAAABrNJREFUeNrkW2ls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"},1242:function(t,e,r){t.exports=r.p+"img/circle_blue.d3dd4eb0.svg"},"1d1b":function(t,e,r){t.exports=r.p+"img/close.0a10646f.svg"},"3c75":function(t,e,r){"use strict";r("43bd")},"43bd":function(t,e,r){},4958:function(t,e,r){"use strict";r("e965")},"4b82":function(t,e,r){"use strict";r("03d1")},"4cb0":function(t,e,r){t.exports=r.p+"img/heart.482d393f.png"},"501b":function(t,e,r){"use strict";r("70be")},"555f":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"lds-heart"},[r("div")])}],s=(r("c020"),r("2877")),o={},c=Object(s["a"])(o,n,a,!1,null,"4b07ea68",null);e["a"]=c.exports},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("4de4");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("transition",{attrs:{name:"fade"}},[r(t.layout,{tag:"component"},[r("router-view")],1)],1)],1)},s=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main"},[r("router-view")],1)},c=[],i={},u=i,l=(r("7346"),r("2877")),h=Object(l["a"])(u,o,c,!1,null,"31d1b41f",null),d=h.exports,m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main"},[r("Header",{staticClass:"header"}),r("main",{staticClass:"content"},[r("Sidebar",{staticClass:"sidebar",class:{"sidebar-hide":t.isFull},attrs:{isFull:t.isFull},on:{expand:t.expand}}),r("div",{staticClass:"page",class:{"page-full":t.isFull}},[r("transition",{attrs:{name:"fade",mode:"out-in"}},[r("router-view")],1)],1)],1),r("Footer",{staticClass:"footer"})],1)},f=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"time"},[t._v(" "+t._s(t._f("date")(t.date,"datetime"))+", "),t.isMobile?n("br"):t._e(),t._v(t._s(t.userEmail)+" ")]),n("div",{staticClass:"profiles"},[n("div",{staticClass:"profile"},[n("div",{staticClass:"name"},[t._v(" "+t._s(t.$root.user_1.name?t.$root.user_1.name:"User_1")+" ")]),t.loading_1?n("Loader",{staticClass:"img-loader"}):t._e(),t.loading_1?t._e():n("div",{staticClass:"bar_1"},[n("svg",{attrs:{height:"60",width:"60"}},[n("circle",{attrs:{cx:"30",cy:"30",r:"25",stroke:"#428bca","stroke-width":"6",fill:"transparent"}})])]),t.loading_1?t._e():n("div",{staticClass:"avatar avatar_1",on:{click:function(e){t.modal.src=t.$root.user_1.avatar||r("1242"),t.modal.modal=!0}}},[n("img",{attrs:{src:t.$root.user_1.avatar?t.$root.user_1.avatar:r("1242"),alt:""}})])],1),n("div",{staticClass:"profile"},[n("div",{staticClass:"name"},[t._v(" "+t._s(t.$root.user_2.name?t.$root.user_2.name:"User_2")+" ")]),t.loading_2?n("Loader",{staticClass:"img-loader"}):t._e(),t.loading_2?t._e():n("div",{staticClass:"bar_2"},[n("svg",{attrs:{height:"60",width:"60"}},[n("circle",{attrs:{cx:"30",cy:"30",r:"25",stroke:"#428bca","stroke-width":"6",fill:"transparent"}})])]),t.loading_2?t._e():n("div",{staticClass:"avatar avatar_2",on:{click:function(e){t.modal.src=t.$root.user_2.avatar||r("65c0"),t.modal.modal=!0}}},[n("img",{attrs:{src:t.$root.user_2.avatar?t.$root.user_2.avatar:r("65c0"),alt:""}})])],1)]),n("div",{staticClass:"switchs"},[n("div",{staticClass:"switch switch_1"},[n("div",{staticClass:"switch__selection-controls__input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.$root.user_2.isShow,expression:"$root.user_2.isShow"}],staticClass:"switch__check",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.$root.user_2.isShow)?t._i(t.$root.user_2.isShow,null)>-1:t.$root.user_2.isShow},on:{click:function(e){t.$root.user_2.isShow=!t.$root.user_2.isShow},change:function(e){var r=t.$root.user_2.isShow,n=e.target,a=!!n.checked;if(Array.isArray(r)){var s=null,o=t._i(r,s);n.checked?o<0&&t.$set(t.$root.user_2,"isShow",r.concat([s])):o>-1&&t.$set(t.$root.user_2,"isShow",r.slice(0,o).concat(r.slice(o+1)))}else t.$set(t.$root.user_2,"isShow",a)}}}),n("div",{staticClass:"switch__track",class:{"is-actived":t.$root.user_2.isShow}}),n("div",{staticClass:"switch__thumb",class:{"is-actived":t.$root.user_2.isShow}},[t._v(" "+t._s(t.$root.user_2.isShow?"Вкл":"Выкл")+" ")])])]),n("div",{staticClass:"switch switch_2"},[n("div",{staticClass:"switch__selection-controls__input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.$root.user_1.isShow,expression:"$root.user_1.isShow"}],staticClass:"switch__check",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.$root.user_1.isShow)?t._i(t.$root.user_1.isShow,null)>-1:t.$root.user_1.isShow},on:{click:function(e){t.$root.user_1.isShow=!t.$root.user_1.isShow},change:function(e){var r=t.$root.user_1.isShow,n=e.target,a=!!n.checked;if(Array.isArray(r)){var s=null,o=t._i(r,s);n.checked?o<0&&t.$set(t.$root.user_1,"isShow",r.concat([s])):o>-1&&t.$set(t.$root.user_1,"isShow",r.slice(0,o).concat(r.slice(o+1)))}else t.$set(t.$root.user_1,"isShow",a)}}}),n("div",{staticClass:"switch__track",class:{"is-actived":t.$root.user_1.isShow}}),n("div",{staticClass:"switch__thumb",class:{"is-actived":t.$root.user_1.isShow}},[t._v(" "+t._s(t.$root.user_1.isShow?"Вкл":"Выкл")+" ")])])])]),n("div",{staticClass:"buttons"},[n("button",{staticClass:"btn btn_white btn_out",on:{click:t.exit}},[t._v("Выйти")])]),n("Modal",{attrs:{modal:t.modal}}),n("transition",{attrs:{name:"fade"}},[t.modal.modal?n("div",{staticClass:"overlay",on:{click:function(e){t.modal.modal=!1}}}):t._e()])],1)},v=[],g=r("5530"),w=r("1da1"),b=(r("96cf"),r("b0c0"),r("159b"),r("ac1f"),r("5319"),r("466d"),r("555f")),x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[t.modal.modal?n("div",{staticClass:"main"},[n("div",{staticClass:"close",on:{click:function(e){t.modal.modal=!1}}},[n("img",{attrs:{src:r("1d1b"),alt:""}})]),n("div",{staticClass:"img"},[n("img",{attrs:{src:t.modal.src,alt:""}})])]):t._e()])},_=[],k={props:{modal:Object}},y=k,A=(r("4958"),Object(l["a"])(y,x,_,!1,null,"c6d5f63e",null)),C=A.exports,S=r("2f62"),j={components:{Loader:b["a"],Modal:C},data:function(){return{date:new Date,interval_1:null,interval_2:null,switch_1:!0,switch_2:!0,userName:{user_1:null,user_2:null},userEmail:"",isMobile:!1,loading_1:!0,loading_2:!0,modal:{modal:!1,src:""}}},mounted:function(){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.start();case 2:return e.next=4,t.bar(t.$root.current.month.name,t.$root.current.year.name);case 4:t.changeFavicon(),t.interval_1=setInterval((function(){t.date=new Date}),1e3),t.interval_2=setInterval((function(){t.changeFavicon()}),1e4),t.userEmail=sessionStorage.getItem("user")||"",t.isMobile=window.innerWidth<768;case 9:case"end":return e.stop()}}),e)})))()},beforeDestroy:function(){clearInterval(this.interval_1),clearInterval(this.interval_2)},methods:Object(g["a"])(Object(g["a"])({},Object(S["b"])(["fetchUserInfo","fetchUserAvatar","fetchNotes"])),{},{start:function(){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fetchUserInfo("user_1");case 2:return t.userName.user_1=e.sent,e.next=5,t.fetchUserInfo("user_2");case 5:return t.userName.user_2=e.sent,t.$root.user_1.name=t.userName.user_1.filter((function(t){return"name"==t.id}))[0].name||"",t.$root.user_2.name=t.userName.user_2.filter((function(t){return"name"==t.id}))[0].name||"",e.next=10,t.fetchUserAvatar("user_1");case 10:if(e.t0=e.sent,e.t0){e.next=13;break}e.t0="";case 13:return t.$root.user_1.avatar=e.t0,e.next=16,t.fetchUserAvatar("user_2");case 16:if(e.t1=e.sent,e.t1){e.next=19;break}e.t1="";case 19:t.$root.user_2.avatar=e.t1,t.loading_1=!1,t.loading_2=!1;case 22:case"end":return e.stop()}}),e)})))()},bar:function(t,e){var r=this;return Object(w["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a={month:t,year:e},n.next=3,r.fetchNotes(a);case 3:r.notes=n.sent,r.notesAndrey=r.notes.filter((function(t){return"Andrey"==t.name})),r.notesNyuta=r.notes.filter((function(t){return"Nyuta"==t.name})),r.notesAndrey.forEach((function(t){t.textHTML=t.text.replace(/(\r\n|\n|\r)/gm,"<br>")})),r.notesNyuta.forEach((function(t){t.textHTML=t.text.replace(/(\r\n|\n|\r)/gm,"<br>")})),r.$root.user_1.counter=r.notesAndrey.filter((function(t){return t.enable})).length,r.notesAndrey.filter((function(t){return t.enable})).forEach((function(t){t.textHTML.match("<br>")&&(r.$root.user_1.counter+=t.textHTML.match(/<br>/g).length)})),r.$root.user_2.counter=r.notesNyuta.filter((function(t){return t.enable})).length,r.notesNyuta.filter((function(t){return t.enable})).forEach((function(t){t.textHTML.match("<br>")&&(r.$root.user_2.counter+=t.textHTML.match(/<br>/g).length)})),setTimeout((function(){document.querySelector(".bar_1 svg").style.strokeDashoffset=157-r.$root.user_1.counter/r.$root.user_1.goal*157,document.querySelector(".bar_2 svg").style.strokeDashoffset=157-r.$root.user_2.counter/r.$root.user_2.goal*157}),100);case 13:case"end":return n.stop()}}),n)})))()},changeFavicon:function(){var t=document.getElementById("favicon"),e=["/sweethome/orange.svg","/sweethome/cherry.svg","/sweethome/chock.svg","/sweethome/ice.svg","/sweethome/laptop.svg","/sweethome/balloon.svg","/sweethome/teddy.svg","/sweethome/present.svg","/sweethome/pie.svg","/sweethome/bird.svg","/sweethome/photo.svg","/sweethome/home.svg"];t.href=e[Math.floor(Math.random()*e.length)]},exit:function(){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.$root.user_1.avatar=null,t.$root.user_1.name="",t.$root.user_1.isShow=!0,t.$root.user_1.counter=0,t.$root.user_2.name="",t.$root.user_2.isShow=!0,t.$root.user_2.counter=0,t.$root.user_2.avatar="",localStorage.clear(),sessionStorage.clear(),e.next=5,t.$store.dispatch("logout");case 5:t.$router.push("/login");case 6:case"end":return e.stop()}}),e)})))()}}),watch:{"$root.user_1.counter":function(){var t=Object(w["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.bar(this.$root.current.month.name,this.$root.current.year.name);case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),"$root.user_2.counter":function(){var t=Object(w["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.bar(this.$root.current.month.name,this.$root.current.year.name);case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),"$root.current.month":function(){var t=Object(w["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.bar(this.$root.current.month.name,this.$root.current.year.name);case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),"$root.current.year":function(){var t=Object(w["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.bar(this.$root.current.month.name,this.$root.current.year.name);case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},E=j,O=(r("4b82"),Object(l["a"])(E,p,v,!1,null,"1377b77e",null)),R=O.exports,L=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrap"},[t._l(t.links,(function(e){return r("router-link",{key:e.url,class:{"router-link-hide":t.isFull},attrs:{tag:"li","active-class":"active",to:e.url,exact:e.exact}},[r("a",{attrs:{href:"#"}},[t._v(t._s(e.title))])])})),r("div",{staticClass:"items",class:{"router-link-hide":t.isFull}},[r("div",{staticClass:"prev arrow-sm",on:{click:t.prevMonth}},[r("svg",{staticStyle:{"enable-background":"new 0 0 512 512"},attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512","xml:space":"preserve"}},[r("g",[r("g",[r("path",{staticClass:"svg",attrs:{d:"M203.6,491.6L203.6,491.6c-18.8-18.8-18.8-49.3,0-68l121.9-121.9c25.4-25.4,25.4-66.5,0-91.8l-122-122\n\t\t\tc-18.8-18.8-18.8-49.2,0-68l0,0c18.8-18.8,49.2-18.8,68,0l206.6,206.6c16.2,16.2,16.2,42.5,0,58.7L271.6,491.6\n\t\t\tC252.9,510.4,222.4,510.4,203.6,491.6z"}})]),r("g",[r("path",{staticClass:"svg",attrs:{d:"M35.1,395.9L35.1,395.9c-18.8-18.8-18.8-49.2,0-68l39.2-39.2c18.2-18.2,18.2-47.7,0-65.9l-39.2-39.2\n\t\t\tc-18.8-18.8-18.8-49.2,0-68h0c18.8-18.8,49.2-18.8,68,0L214,226.3c16.2,16.2,16.2,42.5,0,58.7L103.2,395.9\n\t\t\tC84.4,414.7,53.9,414.7,35.1,395.9z"}})])])])]),t._l(t.months,(function(e){return r("div",{key:e.name,staticClass:"item",class:{"item-show":t.counterMonth==e.id}},[t._v(" "+t._s(e.name)+" ")])})),r("div",{staticClass:"next arrow-sm",on:{click:t.nextMonth}},[r("svg",{staticStyle:{"enable-background":"new 0 0 512 512"},attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512","xml:space":"preserve"}},[r("g",[r("g",[r("path",{staticClass:"svg",attrs:{d:"M203.6,491.6L203.6,491.6c-18.8-18.8-18.8-49.3,0-68l121.9-121.9c25.4-25.4,25.4-66.5,0-91.8l-122-122\n\t\t\tc-18.8-18.8-18.8-49.2,0-68l0,0c18.8-18.8,49.2-18.8,68,0l206.6,206.6c16.2,16.2,16.2,42.5,0,58.7L271.6,491.6\n\t\t\tC252.9,510.4,222.4,510.4,203.6,491.6z"}})]),r("g",[r("path",{staticClass:"svg",attrs:{d:"M35.1,395.9L35.1,395.9c-18.8-18.8-18.8-49.2,0-68l39.2-39.2c18.2-18.2,18.2-47.7,0-65.9l-39.2-39.2\n\t\t\tc-18.8-18.8-18.8-49.2,0-68h0c18.8-18.8,49.2-18.8,68,0L214,226.3c16.2,16.2,16.2,42.5,0,58.7L103.2,395.9\n\t\t\tC84.4,414.7,53.9,414.7,35.1,395.9z"}})])])])])],2),r("div",{staticClass:"items",class:{"router-link-hide":t.isFull}},[r("div",{staticClass:"prev arrow-sm",on:{click:t.prevYear}},[r("svg",{staticStyle:{"enable-background":"new 0 0 512 512"},attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512","xml:space":"preserve"}},[r("g",[r("g",[r("path",{staticClass:"svg",attrs:{d:"M203.6,491.6L203.6,491.6c-18.8-18.8-18.8-49.3,0-68l121.9-121.9c25.4-25.4,25.4-66.5,0-91.8l-122-122\n\t\t\tc-18.8-18.8-18.8-49.2,0-68l0,0c18.8-18.8,49.2-18.8,68,0l206.6,206.6c16.2,16.2,16.2,42.5,0,58.7L271.6,491.6\n\t\t\tC252.9,510.4,222.4,510.4,203.6,491.6z"}})]),r("g",[r("path",{staticClass:"svg",attrs:{d:"M35.1,395.9L35.1,395.9c-18.8-18.8-18.8-49.2,0-68l39.2-39.2c18.2-18.2,18.2-47.7,0-65.9l-39.2-39.2\n\t\t\tc-18.8-18.8-18.8-49.2,0-68h0c18.8-18.8,49.2-18.8,68,0L214,226.3c16.2,16.2,16.2,42.5,0,58.7L103.2,395.9\n\t\t\tC84.4,414.7,53.9,414.7,35.1,395.9z"}})])])])]),t._l(t.years,(function(e){return r("div",{key:e.name,staticClass:"item",class:{"item-show":t.counterYear==e.id}},[t._v(" "+t._s(e.name)+" ")])})),r("div",{staticClass:"next arrow-sm",on:{click:t.nextYear}},[r("svg",{staticStyle:{"enable-background":"new 0 0 512 512"},attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512","xml:space":"preserve"}},[r("g",[r("g",[r("path",{staticClass:"svg",attrs:{d:"M203.6,491.6L203.6,491.6c-18.8-18.8-18.8-49.3,0-68l121.9-121.9c25.4-25.4,25.4-66.5,0-91.8l-122-122\n\t\t\tc-18.8-18.8-18.8-49.2,0-68l0,0c18.8-18.8,49.2-18.8,68,0l206.6,206.6c16.2,16.2,16.2,42.5,0,58.7L271.6,491.6\n\t\t\tC252.9,510.4,222.4,510.4,203.6,491.6z"}})]),r("g",[r("path",{staticClass:"svg",attrs:{d:"M35.1,395.9L35.1,395.9c-18.8-18.8-18.8-49.2,0-68l39.2-39.2c18.2-18.2,18.2-47.7,0-65.9l-39.2-39.2\n\t\t\tc-18.8-18.8-18.8-49.2,0-68h0c18.8-18.8,49.2-18.8,68,0L214,226.3c16.2,16.2,16.2,42.5,0,58.7L103.2,395.9\n\t\t\tC84.4,414.7,53.9,414.7,35.1,395.9z"}})])])])])],2),r("div",{staticClass:"arrow",class:{rotate:t.isFull},on:{click:function(e){return t.$emit("expand")}}},[r("svg",{staticStyle:{"enable-background":"new 0 0 512 512"},attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512","xml:space":"preserve"}},[r("g",[r("g",[r("path",{staticClass:"svg",attrs:{d:"M203.6,491.6L203.6,491.6c-18.8-18.8-18.8-49.3,0-68l121.9-121.9c25.4-25.4,25.4-66.5,0-91.8l-122-122\n\t\t\tc-18.8-18.8-18.8-49.2,0-68l0,0c18.8-18.8,49.2-18.8,68,0l206.6,206.6c16.2,16.2,16.2,42.5,0,58.7L271.6,491.6\n\t\t\tC252.9,510.4,222.4,510.4,203.6,491.6z"}})]),r("g",[r("path",{staticClass:"svg",attrs:{d:"M35.1,395.9L35.1,395.9c-18.8-18.8-18.8-49.2,0-68l39.2-39.2c18.2-18.2,18.2-47.7,0-65.9l-39.2-39.2\n\t\t\tc-18.8-18.8-18.8-49.2,0-68h0c18.8-18.8,49.2-18.8,68,0L214,226.3c16.2,16.2,16.2,42.5,0,58.7L103.2,395.9\n\t\t\tC84.4,414.7,53.9,414.7,35.1,395.9z"}})])])])])],2)},M=[],$={props:{isFull:Boolean},data:function(){return{links:[{title:"Добавить",url:"/",exact:!0},{title:"История",url:"/history"},{title:"Профиль",url:"/profile"},{title:"Статистика",url:"/stats"},{title:"Описание",url:"/info"}],months:[{name:"январь",id:1},{name:"февраль",id:2},{name:"март",id:3},{name:"апрель",id:4},{name:"май",id:5},{name:"июнь",id:6},{name:"июль",id:7},{name:"август",id:8},{name:"сентябрь",id:9},{name:"октябрь",id:10},{name:"ноябрь",id:11},{name:"декабрь",id:12}],years:[{name:2021,id:1},{name:2022,id:2}],counterMonth:1,counterYear:1}},methods:{prevMonth:function(){this.counterMonth<=1||(this.counterMonth--,this.$root.current.month=this.months[this.counterMonth-1])},nextMonth:function(){this.counterMonth>=12||(this.counterMonth++,this.$root.current.month=this.months[this.counterMonth-1])},prevYear:function(){this.counterYear<=1||(this.counterYear--,this.$root.current.year=this.years[this.counterYear-1])},nextYear:function(){this.counterYear>=2||(this.counterYear++,this.$root.current.year=this.years[this.counterYear-1])}},mounted:function(){this.counterMonth=this.$root.current.month.id,this.counterYear=this.$root.current.year.id}},I=$,U=(r("67d8"),Object(l["a"])(I,L,M,!1,null,"0a0ba792",null)),D=U.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("div",{staticClass:"text"},[n("div",{staticClass:"text_2"},[n("span",[t._v("Сделано для меня и Нюты ")]),n("div",{staticClass:"img"},[n("img",{attrs:{src:r("4cb0"),alt:""}})])])]),n("div",{staticClass:"social"},[n("a",{staticClass:"github",attrs:{href:"https://github.com/AndreyKudinov63",target:"_blank",rel:"noopener noreferrer"}},[n("div",{staticClass:"img"},[n("img",{attrs:{src:r("0d7a"),alt:""}})])]),n("a",{staticClass:"twitter",attrs:{href:"https://twitter.com/andrey__kudinov",target:"_blank",rel:"noopener noreferrer"}},[n("div",{staticClass:"img"},[n("img",{attrs:{src:r("b988"),alt:""}})])]),n("a",{staticClass:"gitlab",attrs:{href:"https://gitlab.com/andreykudinov",target:"_blank",rel:"noopener noreferrer"}},[n("div",{staticClass:"img"},[n("img",{attrs:{src:r("5cab"),alt:""}})])]),n("a",{staticClass:"instagram",attrs:{href:"https://instagram.com/andrey__kudinov",target:"_blank",rel:"noopener noreferrer"}},[n("div",{staticClass:"img"},[n("img",{attrs:{src:r("79f6"),alt:""}})])])])])},B=[],T=(r("501b"),{}),Y=Object(l["a"])(T,N,B,!1,null,"309e0ed4",null),P=Y.exports,J={name:"main-layout",components:{Header:R,Sidebar:D,Footer:P},data:function(){return{isFull:!1}},methods:{expand:function(){this.isFull=!this.isFull}}},F=J,Q=(r("3c75"),Object(l["a"])(F,m,f,!1,null,"5c66499a",null)),H=Q.exports,W={components:{EmptyLayout:d,MainLayout:H},computed:{layout:function(){return(this.$route.meta.layout||"empty")+"-layout"}}},z=W,G=(r("5c0b"),Object(l["a"])(z,a,s,!1,null,null,null)),Z=G.exports,V=r("260b"),X={actions:{logIn:function(t,e){return Object(w["a"])(regeneratorRuntime.mark((function r(){var n,a,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=t.commit,a=e.email,s=e.password,r.prev=2,r.next=5,V["a"].auth().signInWithEmailAndPassword(a,s);case 5:sessionStorage.setItem("user",a),r.next=12;break;case 8:throw r.prev=8,r.t0=r["catch"](2),n("setError",r.t0),r.t0;case 12:case"end":return r.stop()}}),r,null,[[2,8]])})))()},getUid:function(){var t=V["a"].auth().currentUser;return t?t.uid:null},logout:function(){return Object(w["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,V["a"].auth().signOut();case 2:case"end":return t.stop()}}),t)})))()},register:function(t,e){return Object(w["a"])(regeneratorRuntime.mark((function r(){var n,a,s,o,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=t.dispatch,a=t.commit,s=e.email,o=e.password,r.prev=2,r.next=5,V["a"].auth().createUserWithEmailAndPassword(s,o);case 5:return r.next=7,n("getUid");case 7:return c=r.sent,r.next=10,V["a"].database().ref("/users/".concat(c,"/user_1")).set({avatar:"",name:""});case 10:return r.next=12,V["a"].database().ref("/users/".concat(c,"/user_2")).set({avatar:"",name:""});case 12:sessionStorage.setItem("user",s),r.next=19;break;case 15:throw r.prev=15,r.t0=r["catch"](2),a("setError",r.t0),r.t0;case 19:case"end":return r.stop()}}),r,null,[[2,15]])})))()}}},K=(r("99af"),r("d81d"),r("b64b"),r("588e"),{actions:{fetchUserInfo:function(t,e){return Object(w["a"])(regeneratorRuntime.mark((function r(){var n,a,s,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=t.commit,a=t.dispatch,r.prev=1,r.next=4,a("getUid");case 4:return s=r.sent,r.next=7,V["a"].database().ref("/users/".concat(s,"/").concat(e)).once("value");case 7:if(r.t0=r.sent.val(),r.t0){r.next=10;break}r.t0={};case 10:return o=r.t0,r.abrupt("return",Object.keys(o).map((function(t){return Object(g["a"])(Object(g["a"])({},o[t]),{},{id:t})})));case 14:throw r.prev=14,r.t1=r["catch"](1),n("setError",r.t1),r.t1;case 18:case"end":return r.stop()}}),r,null,[[1,14]])})))()},updateUserName:function(t,e){return Object(w["a"])(regeneratorRuntime.mark((function r(){var n,a,s,o,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=t.commit,a=t.dispatch,s=e.user,o=e.name,r.prev=2,r.next=5,a("getUid");case 5:return c=r.sent,r.next=8,V["a"].database().ref("/users/".concat(c,"/").concat(s,"/name")).update({name:o});case 8:r.next=14;break;case 10:throw r.prev=10,r.t0=r["catch"](2),n("setError",r.t0),r.t0;case 14:case"end":return r.stop()}}),r,null,[[2,10]])})))()},loadUserAvatar:function(t,e){return Object(w["a"])(regeneratorRuntime.mark((function r(){var n,a,s,o,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=t.commit,a=t.dispatch,s=e.user,o=e.avatar,r.prev=2,r.next=5,a("getUid");case 5:return c=r.sent,r.next=8,V["a"].storage().ref("".concat(c)).child("".concat(s)).putString(o,"data_url",{contentType:"image/jpg"});case 8:r.next=14;break;case 10:throw r.prev=10,r.t0=r["catch"](2),n("setError",r.t0),r.t0;case 14:case"end":return r.stop()}}),r,null,[[2,10]])})))()},fetchUserAvatar:function(t,e){return Object(w["a"])(regeneratorRuntime.mark((function r(){var n,a,s,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=t.commit,a=t.dispatch,r.prev=1,r.next=4,a("getUid");case 4:return s=r.sent,r.next=7,V["a"].storage().ref("".concat(s)).listAll();case 7:if(r.t0=r.sent.items,!r.t0){r.next=13;break}return r.next=11,V["a"].storage().ref("".concat(s)).listAll();case 11:r.t1=r.sent.items.length,r.t0=r.t1>1;case 13:if(!r.t0){r.next=18;break}return r.next=16,V["a"].storage().ref("".concat(s,"/").concat(e)).getDownloadURL();case 16:return o=r.sent,r.abrupt("return",o);case 18:r.next=24;break;case 20:throw r.prev=20,r.t2=r["catch"](1),n("setError",r.t2),r.t2;case 24:case"end":return r.stop()}}),r,null,[[1,20]])})))()}}}),q={actions:{createNote:function(t,e){return Object(w["a"])(regeneratorRuntime.mark((function r(){var n,a,s,o,c,i,u,l,h,d,m;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=t.commit,a=t.dispatch,s=e.name,o=e.text,c=e.date,i=e.month,u=e.year,l=e.enable,h=void 0===l||l,r.prev=2,r.next=5,a("getUid");case 5:return d=r.sent,r.next=8,V["a"].database().ref("/users/".concat(d,"/notes/").concat(u,"/").concat(i)).push({name:s,text:o,date:c,enable:h});case 8:return m=r.sent,r.abrupt("return",{name:s,text:o,date:c,enable:h,id:m.key});case 12:throw r.prev=12,r.t0=r["catch"](2),n("setError",r.t0),r.t0;case 16:case"end":return r.stop()}}),r,null,[[2,12]])})))()},fetchNotes:function(t,e){return Object(w["a"])(regeneratorRuntime.mark((function r(){var n,a,s,o,c,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=t.commit,a=t.dispatch,s=e.month,o=e.year,r.prev=2,r.next=5,a("getUid");case 5:return c=r.sent,r.next=8,V["a"].database().ref("/users/".concat(c,"/notes/").concat(o,"/").concat(s)).once("value");case 8:if(r.t0=r.sent.val(),r.t0){r.next=11;break}r.t0={};case 11:return i=r.t0,r.abrupt("return",Object.keys(i).map((function(t){return Object(g["a"])(Object(g["a"])({},i[t]),{},{id:t})})));case 15:throw r.prev=15,r.t1=r["catch"](2),n("setError",r.t1),r.t1;case 19:case"end":return r.stop()}}),r,null,[[2,15]])})))()},updateNote:function(t,e){return Object(w["a"])(regeneratorRuntime.mark((function r(){var n,a,s,o,c,i,u,l;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=t.commit,a=t.dispatch,s=e.text,o=e.date,c=e.id,i=e.month,u=e.year,r.prev=2,r.next=5,a("getUid");case 5:return l=r.sent,r.next=8,V["a"].database().ref("/users/".concat(l,"/notes/").concat(u,"/").concat(i)).child(c).update({text:s,date:o});case 8:r.next=14;break;case 10:throw r.prev=10,r.t0=r["catch"](2),n("setError",r.t0),r.t0;case 14:case"end":return r.stop()}}),r,null,[[2,10]])})))()},disableNote:function(t,e){return Object(w["a"])(regeneratorRuntime.mark((function r(){var n,a,s,o,c,i,u,l;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=t.commit,a=t.dispatch,s=e.enable,o=void 0!==s&&s,c=e.id,i=e.month,u=e.year,r.prev=2,r.next=5,a("getUid");case 5:return l=r.sent,r.next=8,V["a"].database().ref("/users/".concat(l,"/notes/").concat(u,"/").concat(i)).child(c).update({enable:o});case 8:r.next=14;break;case 10:throw r.prev=10,r.t0=r["catch"](2),n("setError",r.t0),r.t0;case 14:case"end":return r.stop()}}),r,null,[[2,10]])})))()}}};n["default"].use(S["a"]);var tt=new S["a"].Store({state:{error:null},mutations:{setError:function(t,e){t.error=e},clearError:function(t){t.error=null}},actions:{},getters:{error:function(t){return t.error}},modules:{auth:X,notes:q,user:K}}),et=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f"));n["default"].use(et["a"]);var rt=[{path:"/",name:"Add",meta:{layout:"main",log:!0},component:function(){return r.e("chunk-0958ca2a").then(r.bind(null,"7e55"))}},{path:"/history",name:"History",meta:{layout:"main",log:!0},component:function(){return r.e("chunk-3dfc26fc").then(r.bind(null,"e4bb"))}},{path:"/profile",name:"Profile",meta:{layout:"main",log:!0},component:function(){return r.e("chunk-464555e4").then(r.bind(null,"c66d"))}},{path:"/info",name:"Info",meta:{layout:"main",log:!0},component:function(){return r.e("chunk-30a542af").then(r.bind(null,"2469"))}},{path:"/stats",name:"Stats",meta:{layout:"main",log:!0},component:function(){return r.e("chunk-05f2feab").then(r.bind(null,"ed93"))}},{path:"/login",name:"Login",meta:{layout:"empty"},component:function(){return r.e("chunk-1c75402e").then(r.bind(null,"a55b"))}}],nt=new et["a"]({mode:"history",base:"/sweethome/",scrollBehavior:function(t,e,r){return r||new Promise((function(t){setTimeout((function(){t({x:0,y:0})}),500)}))},routes:rt});nt.beforeEach(function(){var t=Object(w["a"])(regeneratorRuntime.mark((function t(e,r,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.matched.some((function(t){return t.meta.log}))){t.next=3;break}if(sessionStorage.getItem("user")){t.next=3;break}return t.abrupt("return",n({path:"/login"}));case 3:return t.abrupt("return",n());case 4:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}());var at=nt,st=r("ce5b"),ot=r.n(st),ct=r("9115"),it=r("7399");r("bf40"),r("08ff"),r("dee1"),r("ea7b"),r("66ce");n["default"].config.productionTip=!1,n["default"].use(it["a"]),n["default"].filter("date",ct["a"]);var ut,lt={apiKey:"AIzaSyBNnu_cP9p67yVXRatnH3WUC0nmfdOCjbY",authDomain:"sweethome-km12.firebaseapp.com",databaseURL:"https://sweethome-km12-default-rtdb.firebaseio.com",projectId:"sweethome-km12",storageBucket:"sweethome-km12.appspot.com",messagingSenderId:"562209642420",appId:"1:562209642420:web:d598a900cdebf6cacd04e1",measurementId:"G-82HRYSQ442"};V["a"].initializeApp(lt);var ht=new Date;V["a"].auth().onAuthStateChanged((function(){ut||(ut=new n["default"]({data:function(){return{current:{month:{name:Object(ct["a"])(ht,"month"),id:+Object(ct["a"])(ht,"mShort")},year:{name:Object(ct["a"])(ht,"year"),id:+Object(ct["a"])(ht,"year")-2020}},user_1:{avatar:null,name:"",isShow:!0,counter:0,goal:40},user_2:{avatar:null,name:"",isShow:!0,counter:0,goal:40}}},router:at,store:tt,Vuetify:ot.a,render:function(t){return t(Z)}}).$mount("#app"))}))},"5c0b":function(t,e,r){"use strict";r("9c0c")},"5cab":function(t,e,r){t.exports=r.p+"img/gitlab.d8fe0705.svg"},"65c0":function(t,e,r){t.exports=r.p+"img/cat.12447925.svg"},"67d8":function(t,e,r){"use strict";r("714a")},"70be":function(t,e,r){},"714a":function(t,e,r){},"721d":function(t,e,r){},7346:function(t,e,r){"use strict";r("895b")},"79f6":function(t,e,r){t.exports=r.p+"img/instagram.b7075ce3.png"},"895b":function(t,e,r){},9115:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));r("caad"),r("2532");function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"date",r={};return e.includes("date")&&(r.day="2-digit",r.month="long",r.year="numeric"),e.includes("time")&&(r.hour="2-digit",r.minute="2-digit",r.second="2-digit"),e.includes("month")&&(r.month="long"),e.includes("year")&&(r.year="numeric"),e.includes("mShort")&&(r.month="2-digit"),new Intl.DateTimeFormat("ru-RU",r).format(new Date(t))}},"9c0c":function(t,e,r){},b988:function(t,e,r){t.exports=r.p+"img/twitter.7e1a6d15.svg"},c020:function(t,e,r){"use strict";r("721d")},e965:function(t,e,r){}});
//# sourceMappingURL=app.5f36be87.js.map