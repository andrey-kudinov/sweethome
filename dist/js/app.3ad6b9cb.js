(function(e){function t(t){for(var n,a,c=t[0],i=t[1],u=t[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);h&&h(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,a=1;a<r.length;a++){var c=r[a];0!==s[c]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},s={app:0},o=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2c4914fc":"31cd1489","chunk-3a90bf74":"8516729a","chunk-42a60381":"65b46cfd","chunk-53b48176":"d28ad9b2","chunk-5d478d15":"6311b063","chunk-a204994e":"e5900ba3"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={"chunk-2c4914fc":1,"chunk-3a90bf74":1,"chunk-42a60381":1,"chunk-53b48176":1,"chunk-5d478d15":1,"chunk-a204994e":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-2c4914fc":"e51105ae","chunk-3a90bf74":"366c8da6","chunk-42a60381":"66165a18","chunk-53b48176":"d4254b48","chunk-5d478d15":"7b21c295","chunk-a204994e":"f7fa6072"}[e]+".css",s=i.p+n,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var u=o[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===s))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===n||l===s)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var n=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete a[e],h.parentNode.removeChild(h),r(o)},h.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){a[e]=0})));var n=s[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,r){n=s[e]=[t,r]}));t.push(n[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(h);var r=s[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}s[e]=void 0}};var h=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/sweethome/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var h=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"08ff":function(e,t,r){},"0d7a":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyRTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyRjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJDOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJEOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+FYrpWAAABrNJREFUeNrkW2ls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"},1242:function(e,t,r){e.exports=r.p+"img/circle_blue.d3dd4eb0.svg"},"1bec":function(e,t,r){"use strict";r("c4bd")},"2ee1":function(e,t,r){"use strict";r("ff4f")},"3c75":function(e,t,r){"use strict";r("43bd")},"43bd":function(e,t,r){},"4cb0":function(e,t,r){e.exports=r.p+"img/heart.482d393f.png"},"501b":function(e,t,r){"use strict";r("70be")},"555f":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"lds-heart"},[r("div")])}],s=(r("c020"),r("2877")),o={},c=Object(s["a"])(o,n,a,!1,null,"4b07ea68",null);t["a"]=c.exports},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("4de4");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("transition",{attrs:{name:"fade"}},[r(e.layout,{tag:"component"},[r("router-view")],1)],1)],1)},s=[],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"main"},[r("router-view")],1)},c=[],i={},u=i,l=(r("5c42"),r("2877")),d=Object(l["a"])(u,o,c,!1,null,"0dc34e14",null),h=d.exports,f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"main"},[r("Header",{staticClass:"header"}),r("main",{staticClass:"content"},[r("Sidebar",{staticClass:"sidebar",class:{"sidebar-hide":e.isFull},attrs:{isFull:e.isFull},on:{expand:e.expand}}),r("div",{staticClass:"page",class:{"page-full":e.isFull}},[r("transition",{attrs:{name:"fade",mode:"out-in"}},[r("router-view")],1)],1)],1),r("Footer",{staticClass:"footer"})],1)},m=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("div",{staticClass:"time"},[e._v(" "+e._s(e._f("date")(e.date,"datetime"))+", "),e.isMobile?n("br"):e._e(),e._v(e._s(e.userEmail)+" ")]),n("div",{staticClass:"profiles"},[n("div",{staticClass:"profile"},[n("div",{staticClass:"name"},[e._v(" "+e._s(e.$root.user_1.name?e.$root.user_1.name:"User_1")+" ")]),e.loading_1?n("Loader",{staticClass:"img-loader"}):e._e(),e.loading_1?e._e():n("div",{staticClass:"bar_1"},[n("svg",{attrs:{height:"60",width:"60"}},[n("circle",{attrs:{cx:"30",cy:"30",r:"25",stroke:"#428bca","stroke-width":"6",fill:"transparent"}})])]),e.loading_1?e._e():n("div",{staticClass:"avatar avatar_1"},[n("img",{attrs:{src:e.$root.user_1.avatar?e.$root.user_1.avatar:r("1242"),alt:""}}),n("div",{staticClass:"tooltip tooltip_1"},[n("img",{attrs:{src:e.$root.user_1.avatar||r("1242"),alt:""}})])])],1),n("div",{staticClass:"profile"},[n("div",{staticClass:"name"},[e._v(" "+e._s(e.$root.user_2.name?e.$root.user_2.name:"User_2")+" ")]),e.loading_2?n("Loader",{staticClass:"img-loader"}):e._e(),e.loading_2?e._e():n("div",{staticClass:"bar_2"},[n("svg",{attrs:{height:"60",width:"60"}},[n("circle",{attrs:{cx:"30",cy:"30",r:"25",stroke:"#428bca","stroke-width":"6",fill:"transparent"}})])]),e.loading_2?e._e():n("div",{staticClass:"avatar avatar_2"},[n("img",{attrs:{src:e.$root.user_2.avatar?e.$root.user_2.avatar:r("65c0"),alt:""}}),n("div",{staticClass:"tooltip tooltip_2"},[n("img",{attrs:{src:e.$root.user_2.avatar||r("65c0"),alt:""}})])])],1)]),n("div",{staticClass:"switchs"},[n("div",{staticClass:"switch switch_1"},[n("div",{staticClass:"switch__selection-controls__input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.$root.user_2.isShow,expression:"$root.user_2.isShow"}],staticClass:"switch__check",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.$root.user_2.isShow)?e._i(e.$root.user_2.isShow,null)>-1:e.$root.user_2.isShow},on:{click:function(t){e.$root.user_2.isShow=!e.$root.user_2.isShow},change:function(t){var r=e.$root.user_2.isShow,n=t.target,a=!!n.checked;if(Array.isArray(r)){var s=null,o=e._i(r,s);n.checked?o<0&&e.$set(e.$root.user_2,"isShow",r.concat([s])):o>-1&&e.$set(e.$root.user_2,"isShow",r.slice(0,o).concat(r.slice(o+1)))}else e.$set(e.$root.user_2,"isShow",a)}}}),n("div",{staticClass:"switch__track",class:{"is-actived":e.$root.user_2.isShow}}),n("div",{staticClass:"switch__thumb",class:{"is-actived":e.$root.user_2.isShow}},[e._v(" "+e._s(e.$root.user_2.isShow?"Вкл":"Выкл")+" ")])])]),n("div",{staticClass:"switch switch_2"},[n("div",{staticClass:"switch__selection-controls__input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.$root.user_1.isShow,expression:"$root.user_1.isShow"}],staticClass:"switch__check",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.$root.user_1.isShow)?e._i(e.$root.user_1.isShow,null)>-1:e.$root.user_1.isShow},on:{click:function(t){e.$root.user_1.isShow=!e.$root.user_1.isShow},change:function(t){var r=e.$root.user_1.isShow,n=t.target,a=!!n.checked;if(Array.isArray(r)){var s=null,o=e._i(r,s);n.checked?o<0&&e.$set(e.$root.user_1,"isShow",r.concat([s])):o>-1&&e.$set(e.$root.user_1,"isShow",r.slice(0,o).concat(r.slice(o+1)))}else e.$set(e.$root.user_1,"isShow",a)}}}),n("div",{staticClass:"switch__track",class:{"is-actived":e.$root.user_1.isShow}}),n("div",{staticClass:"switch__thumb",class:{"is-actived":e.$root.user_1.isShow}},[e._v(" "+e._s(e.$root.user_1.isShow?"Вкл":"Выкл")+" ")])])])]),n("div",{staticClass:"buttons"},[n("button",{staticClass:"btn btn_white btn_out",on:{click:e.exit}},[e._v("Выйти")])])])},v=[],g=r("5530"),b=r("1da1"),w=(r("b0c0"),r("159b"),r("ac1f"),r("5319"),r("466d"),r("96cf"),r("555f")),_=r("2f62"),x={components:{Loader:w["a"]},data:function(){return{date:new Date,interval_1:null,interval_2:null,switch_1:!0,switch_2:!0,userName:{user_1:null,user_2:null},userEmail:"",isMobile:!1,loading_1:!0,loading_2:!0}},mounted:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.start();case 2:return t.next=4,e.bar();case 4:e.changeFavicon(),e.interval_1=setInterval((function(){e.date=new Date}),1e3),e.interval_2=setInterval((function(){e.changeFavicon()}),1e4),localStorage.avatar_1&&(e.$root.user_1.avatar=localStorage.avatar_1),localStorage.avatar_2&&(e.$root.user_2.avatar=localStorage.avatar_2),e.userEmail=localStorage.getItem("user")||"",e.isMobile=window.innerWidth<768;case 11:case"end":return t.stop()}}),t)})))()},beforeDestroy:function(){clearInterval(this.interval_1),clearInterval(this.interval_2)},methods:Object(g["a"])(Object(g["a"])({},Object(_["b"])(["fetchUserInfo","fetchUserAvatar","fetchNotes"])),{},{start:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchUserInfo("user_1");case 2:return e.userName.user_1=t.sent,t.next=5,e.fetchUserInfo("user_2");case 5:if(e.userName.user_2=t.sent,e.$root.user_1.name=e.userName.user_1.filter((function(e){return"name"==e.id}))[0].name||"",e.$root.user_2.name=e.userName.user_2.filter((function(e){return"name"==e.id}))[0].name||"",localStorage.avatar_1){t.next=18;break}return t.next=11,e.fetchUserAvatar("user_1");case 11:if(t.t0=t.sent,t.t0){t.next=14;break}t.t0="";case 14:localStorage.avatar_1=t.t0,e.loading_1=!1,t.next=19;break;case 18:e.loading_1=!1;case 19:if(localStorage.avatar_2){t.next=29;break}return t.next=22,e.fetchUserAvatar("user_2");case 22:if(t.t1=t.sent,t.t1){t.next=25;break}t.t1="";case 25:localStorage.avatar_2=t.t1,e.loading_2=!1,t.next=30;break;case 29:e.loading_2=!1;case 30:case"end":return t.stop()}}),t)})))()},bar:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchNotes();case 2:e.notes=t.sent,e.notesAndrey=e.notes.filter((function(e){return"Andrey"==e.name})),e.notesNyuta=e.notes.filter((function(e){return"Nyuta"==e.name})),e.notesAndrey.forEach((function(e){e.textHTML=e.text.replace(/(\r\n|\n|\r)/gm,"<br>")})),e.notesNyuta.forEach((function(e){e.textHTML=e.text.replace(/(\r\n|\n|\r)/gm,"<br>")})),e.$root.user_1.counter=e.notesAndrey.filter((function(e){return e.enable})).length,e.notesAndrey.filter((function(e){return e.enable})).forEach((function(t){t.textHTML.match("<br>")&&(e.$root.user_1.counter+=t.textHTML.match(/<br>/g).length)})),e.$root.user_2.counter=e.notesNyuta.filter((function(e){return e.enable})).length,e.notesNyuta.filter((function(e){return e.enable})).forEach((function(t){t.textHTML.match("<br>")&&(e.$root.user_2.counter+=t.textHTML.match(/<br>/g).length)})),setTimeout((function(){document.querySelector(".bar_1 svg").style.strokeDashoffset=251-e.$root.user_1.counter/e.$root.user_1.goal*251,document.querySelector(".bar_2 svg").style.strokeDashoffset=251-e.$root.user_2.counter/e.$root.user_2.goal*251}),1e3);case 12:case"end":return t.stop()}}),t)})))()},changeFavicon:function(){var e=document.getElementById("favicon"),t=["/sweethome/orange.svg","/sweethome/cherry.svg","/sweethome/chock.svg","/sweethome/ice.svg","/sweethome/laptop.svg","/sweethome/balloon.svg","/sweethome/teddy.svg","/sweethome/present.svg","/sweethome/pie.svg","/sweethome/bird.svg","/sweethome/photo.svg","/sweethome/home.svg"];e.href=t[Math.floor(Math.random()*t.length)]},exit:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("logout");case 2:e.$root.user_1.avatar="",e.$root.user_2.avatar="",localStorage.clear(),e.$router.push("/login");case 6:case"end":return t.stop()}}),t)})))()}}),watch:{"$root.user_1.counter":function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.bar();case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),"$root.user_2.counter":function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.bar();case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},k=x,A=(r("2ee1"),Object(l["a"])(k,p,v,!1,null,"c25e1f84",null)),y=A.exports,S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrap"},[e._l(e.links,(function(t){return r("router-link",{key:t.url,class:{"router-link-hide":e.isFull},attrs:{tag:"li","active-class":"active",to:t.url,exact:t.exact}},[r("a",{attrs:{href:"#"}},[e._v(e._s(t.title))])])})),r("div",{staticClass:"arrow",class:{rotate:e.isFull},on:{click:function(t){return e.$emit("expand")}}},[r("svg",{staticStyle:{"enable-background":"new 0 0 512 512"},attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512","xml:space":"preserve"}},[r("g",[r("g",[r("path",{staticClass:"svg",attrs:{d:"M203.6,491.6L203.6,491.6c-18.8-18.8-18.8-49.3,0-68l121.9-121.9c25.4-25.4,25.4-66.5,0-91.8l-122-122\n\t\t\tc-18.8-18.8-18.8-49.2,0-68l0,0c18.8-18.8,49.2-18.8,68,0l206.6,206.6c16.2,16.2,16.2,42.5,0,58.7L271.6,491.6\n\t\t\tC252.9,510.4,222.4,510.4,203.6,491.6z"}})]),r("g",[r("path",{staticClass:"svg",attrs:{d:"M35.1,395.9L35.1,395.9c-18.8-18.8-18.8-49.2,0-68l39.2-39.2c18.2-18.2,18.2-47.7,0-65.9l-39.2-39.2\n\t\t\tc-18.8-18.8-18.8-49.2,0-68h0c18.8-18.8,49.2-18.8,68,0L214,226.3c16.2,16.2,16.2,42.5,0,58.7L103.2,395.9\n\t\t\tC84.4,414.7,53.9,414.7,35.1,395.9z"}})])])])])],2)},C=[],E={props:{isFull:Boolean},data:function(){return{links:[{title:"Добавить",url:"/",exact:!0},{title:"История",url:"/history"},{title:"Профиль",url:"/profile"},{title:"Статистика",url:"/stats"},{title:"Описание",url:"/info"}]}}},j=E,R=(r("1bec"),Object(l["a"])(j,S,C,!1,null,"628aa683",null)),O=R.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer"},[n("div",{staticClass:"text"},[n("div",{staticClass:"text_2"},[n("span",[e._v("Сделано для меня и Нюты ")]),n("div",{staticClass:"img"},[n("img",{attrs:{src:r("4cb0"),alt:""}})])])]),n("div",{staticClass:"social"},[n("a",{staticClass:"github",attrs:{href:"https://github.com/AndreyKudinov63",target:"_blank",rel:"noopener noreferrer"}},[n("div",{staticClass:"img"},[n("img",{attrs:{src:r("0d7a"),alt:""}})])]),n("a",{staticClass:"twitter",attrs:{href:"https://twitter.com/andrey__kudinov",target:"_blank",rel:"noopener noreferrer"}},[n("div",{staticClass:"img"},[n("img",{attrs:{src:r("b988"),alt:""}})])]),n("a",{staticClass:"gitlab",attrs:{href:"https://gitlab.com/andreykudinov",target:"_blank",rel:"noopener noreferrer"}},[n("div",{staticClass:"img"},[n("img",{attrs:{src:r("5cab"),alt:""}})])]),n("a",{staticClass:"instagram",attrs:{href:"https://instagram.com/andrey__kudinov",target:"_blank",rel:"noopener noreferrer"}},[n("div",{staticClass:"img"},[n("img",{attrs:{src:r("79f6"),alt:""}})])])])])},U=[],D=(r("501b"),{}),N=Object(l["a"])(D,I,U,!1,null,"309e0ed4",null),L=N.exports,M={name:"main-layout",components:{Header:y,Sidebar:O,Footer:L},data:function(){return{isFull:!1}},methods:{expand:function(){this.isFull=!this.isFull}}},B=M,T=(r("3c75"),Object(l["a"])(B,f,m,!1,null,"5c66499a",null)),$=T.exports,P={components:{EmptyLayout:h,MainLayout:$},computed:{layout:function(){return(this.$route.meta.layout||"empty")+"-layout"}}},J=P,Y=(r("5c0b"),Object(l["a"])(J,a,s,!1,null,null,null)),F=Y.exports,Q=r("260b"),H={actions:{logIn:function(e,t){return Object(b["a"])(regeneratorRuntime.mark((function r(){var n,a,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,a=t.email,s=t.password,r.prev=2,r.next=5,Q["a"].auth().signInWithEmailAndPassword(a,s);case 5:localStorage.setItem("user",a),r.next=12;break;case 8:throw r.prev=8,r.t0=r["catch"](2),n("setError",r.t0),r.t0;case 12:case"end":return r.stop()}}),r,null,[[2,8]])})))()},getUid:function(){var e=Q["a"].auth().currentUser;return e?e.uid:null},logout:function(){return Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Q["a"].auth().signOut();case 2:case"end":return e.stop()}}),e)})))()},register:function(e,t){return Object(b["a"])(regeneratorRuntime.mark((function r(){var n,a,s,o,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.dispatch,a=e.commit,s=t.email,o=t.password,r.prev=2,r.next=5,Q["a"].auth().createUserWithEmailAndPassword(s,o);case 5:return r.next=7,n("getUid");case 7:return c=r.sent,r.next=10,Q["a"].database().ref("/users/".concat(c,"/user_1")).set({avatar:"",name:""});case 10:return r.next=12,Q["a"].database().ref("/users/".concat(c,"/user_2")).set({avatar:"",name:""});case 12:localStorage.setItem("user",s),r.next=19;break;case 15:throw r.prev=15,r.t0=r["catch"](2),a("setError",r.t0),r.t0;case 19:case"end":return r.stop()}}),r,null,[[2,15]])})))()}}},W=(r("99af"),r("d81d"),r("b64b"),r("588e"),{actions:{fetchUserInfo:function(e,t){return Object(b["a"])(regeneratorRuntime.mark((function r(){var n,a,s,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,a=e.dispatch,r.prev=1,r.next=4,a("getUid");case 4:return s=r.sent,r.next=7,Q["a"].database().ref("/users/".concat(s,"/").concat(t)).once("value");case 7:if(r.t0=r.sent.val(),r.t0){r.next=10;break}r.t0={};case 10:return o=r.t0,r.abrupt("return",Object.keys(o).map((function(e){return Object(g["a"])(Object(g["a"])({},o[e]),{},{id:e})})));case 14:throw r.prev=14,r.t1=r["catch"](1),n("setError",r.t1),r.t1;case 18:case"end":return r.stop()}}),r,null,[[1,14]])})))()},updateUserName:function(e,t){return Object(b["a"])(regeneratorRuntime.mark((function r(){var n,a,s,o,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,a=e.dispatch,s=t.user,o=t.name,r.prev=2,r.next=5,a("getUid");case 5:return c=r.sent,r.next=8,Q["a"].database().ref("/users/".concat(c,"/").concat(s,"/name")).update({name:o});case 8:r.next=14;break;case 10:throw r.prev=10,r.t0=r["catch"](2),n("setError",r.t0),r.t0;case 14:case"end":return r.stop()}}),r,null,[[2,10]])})))()},loadUserAvatar:function(e,t){return Object(b["a"])(regeneratorRuntime.mark((function r(){var n,a,s,o,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,a=e.dispatch,s=t.user,o=t.avatar,r.prev=2,r.next=5,a("getUid");case 5:return c=r.sent,r.next=8,Q["a"].storage().ref("".concat(c)).child("".concat(s)).putString(o,"data_url",{contentType:"image/jpg"});case 8:r.next=14;break;case 10:throw r.prev=10,r.t0=r["catch"](2),n("setError",r.t0),r.t0;case 14:case"end":return r.stop()}}),r,null,[[2,10]])})))()},fetchUserAvatar:function(e,t){return Object(b["a"])(regeneratorRuntime.mark((function r(){var n,a,s,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,a=e.dispatch,r.prev=1,r.next=4,a("getUid");case 4:return s=r.sent,r.next=7,Q["a"].storage().ref("".concat(s)).listAll();case 7:if(r.t0=r.sent.items,!r.t0){r.next=13;break}return r.next=11,Q["a"].storage().ref("".concat(s)).listAll();case 11:r.t1=r.sent.items.length,r.t0=r.t1>1;case 13:if(!r.t0){r.next=18;break}return r.next=16,Q["a"].storage().ref("".concat(s,"/").concat(t)).getDownloadURL();case 16:return o=r.sent,r.abrupt("return",o);case 18:r.next=24;break;case 20:throw r.prev=20,r.t2=r["catch"](1),n("setError",r.t2),r.t2;case 24:case"end":return r.stop()}}),r,null,[[1,20]])})))()}}}),G={actions:{createNote:function(e,t){return Object(b["a"])(regeneratorRuntime.mark((function r(){var n,a,s,o,c,i,u,l,d;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,a=e.dispatch,s=t.name,o=t.text,c=t.date,i=t.enable,u=void 0===i||i,r.prev=2,r.next=5,a("getUid");case 5:return l=r.sent,r.next=8,Q["a"].database().ref("/users/".concat(l,"/notes")).push({name:s,text:o,date:c,enable:u});case 8:return d=r.sent,r.abrupt("return",{name:s,text:o,date:c,enable:u,id:d.key});case 12:throw r.prev=12,r.t0=r["catch"](2),n("setError",r.t0),r.t0;case 16:case"end":return r.stop()}}),r,null,[[2,12]])})))()},fetchNotes:function(e){return Object(b["a"])(regeneratorRuntime.mark((function t(){var r,n,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,n=e.dispatch,t.prev=1,t.next=4,n("getUid");case 4:return a=t.sent,t.next=7,Q["a"].database().ref("/users/".concat(a,"/notes")).once("value");case 7:if(t.t0=t.sent.val(),t.t0){t.next=10;break}t.t0={};case 10:return s=t.t0,t.abrupt("return",Object.keys(s).map((function(e){return Object(g["a"])(Object(g["a"])({},s[e]),{},{id:e})})));case 14:throw t.prev=14,t.t1=t["catch"](1),r("setError",t.t1),t.t1;case 18:case"end":return t.stop()}}),t,null,[[1,14]])})))()},updateNote:function(e,t){return Object(b["a"])(regeneratorRuntime.mark((function r(){var n,a,s,o,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,a=e.dispatch,s=t.text,o=t.id,r.prev=2,r.next=5,a("getUid");case 5:return c=r.sent,r.next=8,Q["a"].database().ref("/users/".concat(c,"/notes")).child(o).update({text:s});case 8:r.next=14;break;case 10:throw r.prev=10,r.t0=r["catch"](2),n("setError",r.t0),r.t0;case 14:case"end":return r.stop()}}),r,null,[[2,10]])})))()},disableNote:function(e,t){return Object(b["a"])(regeneratorRuntime.mark((function r(){var n,a,s,o,c,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,a=e.dispatch,s=t.enable,o=void 0!==s&&s,c=t.id,r.prev=2,r.next=5,a("getUid");case 5:return i=r.sent,r.next=8,Q["a"].database().ref("/users/".concat(i,"/notes")).child(c).update({enable:o});case 8:r.next=14;break;case 10:throw r.prev=10,r.t0=r["catch"](2),n("setError",r.t0),r.t0;case 14:case"end":return r.stop()}}),r,null,[[2,10]])})))()}}};n["default"].use(_["a"]);var Z=new _["a"].Store({state:{error:null},mutations:{setError:function(e,t){e.error=t},clearError:function(e){e.error=null}},actions:{},getters:{error:function(e){return e.error}},modules:{auth:H,notes:G,user:W}}),V=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f"));n["default"].use(V["a"]);var X=[{path:"/",name:"Add",meta:{layout:"main",log:!0},component:function(){return r.e("chunk-42a60381").then(r.bind(null,"7e55"))}},{path:"/history",name:"History",meta:{layout:"main",log:!0},component:function(){return r.e("chunk-53b48176").then(r.bind(null,"e4bb"))}},{path:"/profile",name:"Profile",meta:{layout:"main",log:!0},component:function(){return r.e("chunk-2c4914fc").then(r.bind(null,"c66d"))}},{path:"/info",name:"Info",meta:{layout:"main",log:!0},component:function(){return r.e("chunk-5d478d15").then(r.bind(null,"2469"))}},{path:"/stats",name:"Stats",meta:{layout:"main",log:!0},component:function(){return r.e("chunk-a204994e").then(r.bind(null,"ed93"))}},{path:"/login",name:"Login",meta:{layout:"empty"},component:function(){return r.e("chunk-3a90bf74").then(r.bind(null,"a55b"))}}],z=new V["a"]({mode:"history",base:"/sweethome/",scrollBehavior:function(e,t,r){return r||new Promise((function(e){setTimeout((function(){e({x:0,y:0})}),500)}))},routes:X});z.beforeEach(function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t,r,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.matched.some((function(e){return e.meta.log}))){e.next=3;break}if(localStorage.getItem("user")){e.next=3;break}return e.abrupt("return",n({path:"/login"}));case 3:return e.abrupt("return",n());case 4:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}());var K=z,q=r("ce5b"),ee=r.n(q),te=r("9115"),re=r("7399");r("bf40"),r("08ff"),r("dee1"),r("ea7b"),r("66ce");n["default"].config.productionTip=!1,n["default"].use(re["a"]),n["default"].filter("date",te["a"]);var ne,ae={apiKey:"AIzaSyBNnu_cP9p67yVXRatnH3WUC0nmfdOCjbY",authDomain:"sweethome-km12.firebaseapp.com",databaseURL:"https://sweethome-km12-default-rtdb.firebaseio.com",projectId:"sweethome-km12",storageBucket:"sweethome-km12.appspot.com",messagingSenderId:"562209642420",appId:"1:562209642420:web:d598a900cdebf6cacd04e1",measurementId:"G-82HRYSQ442"};Q["a"].initializeApp(ae),Q["a"].auth().onAuthStateChanged((function(){ne||(ne=new n["default"]({data:function(){return{user_1:{avatar:null,name:"",isShow:!0,counter:0,goal:40},user_2:{avatar:null,name:"",isShow:!0,counter:0,goal:40}}},router:K,store:Z,Vuetify:ee.a,render:function(e){return e(F)}}).$mount("#app"))}))},"5c0b":function(e,t,r){"use strict";r("9c0c")},"5c42":function(e,t,r){"use strict";r("9eb9")},"5cab":function(e,t,r){e.exports=r.p+"img/gitlab.d8fe0705.svg"},"65c0":function(e,t,r){e.exports=r.p+"img/cat.12447925.svg"},"70be":function(e,t,r){},"721d":function(e,t,r){},"79f6":function(e,t,r){e.exports=r.p+"img/instagram.b7075ce3.png"},9115:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r("caad"),r("2532");function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"date",r={};return t.includes("date")&&(r.day="2-digit",r.month="long",r.year="numeric"),t.includes("time")&&(r.hour="2-digit",r.minute="2-digit",r.second="2-digit"),new Intl.DateTimeFormat("ru-RU",r).format(new Date(e))}},"9c0c":function(e,t,r){},"9eb9":function(e,t,r){},b988:function(e,t,r){e.exports=r.p+"img/twitter.b4d7c717.svg"},c020:function(e,t,r){"use strict";r("721d")},c4bd:function(e,t,r){},ff4f:function(e,t,r){}});
//# sourceMappingURL=app.3ad6b9cb.js.map