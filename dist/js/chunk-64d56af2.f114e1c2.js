(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64d56af2"],{"0eb4":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main",class:{showToast:t.toast.toast}},[a("span",{staticClass:"text"},[t._v(t._s(t.toast.text))])])},s=[],r={name:"Toast",props:{toast:Object}},i=r,o=(a("ac55"),a("2877")),c=Object(o["a"])(i,n,s,!1,null,"db7eef46",null);e["a"]=c.exports},"218e":function(t,e,a){},"26a0":function(t,e,a){t.exports=a.p+"img/delete.8631e990.svg"},"2d07":function(t,e,a){t.exports=a.p+"img/pencil.9ff78e98.svg"},ac55:function(t,e,a){"use strict";a("d342")},ba76:function(t,e,a){"use strict";a("218e")},d342:function(t,e,a){},e4bb:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("transition",{attrs:{name:"fade"}},[t.toast.toast?n("div",{staticClass:"overlay"}):t._e()]),n("Toast",{attrs:{toast:t.toast}}),n("link",{attrs:{href:"https://cdn.jsdelivr.net/npm/animate.css@3.5.1",rel:"stylesheet",type:"text/css"}}),n("transition",{attrs:{name:"fade"}},[t.$root.user_2.isShow?n("div",{staticClass:"cards cards_first"},[t.loading?n("Loader"):t._e(),t._l(t.notesAndrey,(function(e,s){return n("div",{key:s,staticClass:"card card_first",class:{mh0:!e.enable,op1:!t.loading}},[n("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated fadeInDown","leave-active-class":"animated fadeOutDown",mode:"out-in"}},[t.delOverlay&&t.edit_1==s?n("div",{staticClass:"del-overlay"}):t._e()]),n("transition",{attrs:{name:"fade"}},[e.enable?n("div",{staticClass:"card__wrap"},[n("div",{staticClass:"pen",on:{click:function(e){return t.toEdit_1(s)}}},[n("img",{attrs:{src:a("2d07"),alt:""}})]),n("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated bounceInRight","leave-active-class":"animated bounceOutLeft"}},[t.edit_1==s?n("div",{staticClass:"delete",on:{click:function(a){return t.del(e.id,t.$root.current.month.name,t.$root.current.year.name)}}},[n("img",{attrs:{src:a("26a0"),alt:""}})]):t._e()]),n("div",{staticClass:"desc"},[n("div",{staticClass:"smile"},[n("img",{attrs:{src:t.$root.user_1.avatar||a("1242"),alt:""}})])]),n("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated bounceInLeft","leave-active-class":"animated bounceOutLeft"}},[t.edit_1!=s?n("div",{staticClass:"date"},[t._v(t._s(e.date))]):t._e()]),n("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated bounceInRight","leave-active-class":"animated bounceOutRight"}},[t.edit_1==s?n("input",{directives:[{name:"model",rawName:"v-model",value:e.date,expression:"note.date"}],staticClass:"input",attrs:{type:"text"},domProps:{value:e.date},on:{input:function(a){a.target.composing||t.$set(e,"date",a.target.value)}}}):t._e()]),n("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated bounceInLeft","leave-active-class":"animated bounceOutLeft"}},[t.edit_1!=s?n("div",{staticClass:"text",domProps:{innerHTML:t._s(e.textHTML)}}):t._e()]),n("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated bounceInRight","leave-active-class":"animated bounceOutRight"}},[t.edit_1==s?n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"note.text"}],staticClass:"textarea",attrs:{name:"",id:""},domProps:{textContent:t._s(e.text),value:e.text},on:{input:function(a){a.target.composing||t.$set(e,"text",a.target.value)}}}):t._e()]),n("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated bounceInLeft","leave-active-class":"animated bounceOutLeft"}},[t.edit_1==s?n("button",{staticClass:"btn btn_white btn_add",on:{click:function(a){return t.update(e.id,e.text,e.date,t.$root.current.month.name,t.$root.current.year.name)}}},[t._v(" "+t._s(t.btnLoading?"":"Сохранить")+" "),t.btnLoading?n("Loader",{class:{"btn-loader":t.btnLoading}}):t._e()],1):t._e()])],1):t._e()])],1)}))],2):t._e()]),n("transition",{attrs:{name:"fade"}},[t.$root.user_1.isShow?n("div",{staticClass:"cards cards_second"},[t.loading?n("Loader"):t._e(),t._l(t.notesNyuta,(function(e,s){return n("div",{key:s,staticClass:"card card_second",class:{mh0:!e.enable,op1:!t.loading}},[n("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated fadeInDown","leave-active-class":"animated fadeOutDown",mode:"out-in"}},[t.delOverlay&&t.edit_2==s?n("div",{staticClass:"del-overlay"}):t._e()]),n("transition",{attrs:{name:"fade"}},[e.enable?n("div",{staticClass:"card__wrap"},[n("div",{staticClass:"pen",on:{click:function(e){return t.toEdit_2(s)}}},[n("img",{attrs:{src:a("2d07"),alt:""}})]),n("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated bounceInRight","leave-active-class":"animated bounceOutLeft"}},[t.edit_2==s?n("div",{staticClass:"delete",on:{click:function(a){return t.del(e.id,t.$root.current.month.name,t.$root.current.year.name)}}},[n("img",{attrs:{src:a("26a0"),alt:""}})]):t._e()]),n("div",{staticClass:"desc"},[n("div",{staticClass:"smile"},[n("img",{attrs:{src:t.$root.user_2.avatar||a("65c0"),alt:""}})])]),n("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated bounceInLeft","leave-active-class":"animated bounceOutLeft"}},[t.edit_2!=s?n("div",{staticClass:"date text-rose"},[t._v(" "+t._s(e.date)+" ")]):t._e()]),n("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated bounceInRight","leave-active-class":"animated bounceOutRight"}},[t.edit_2==s?n("input",{directives:[{name:"model",rawName:"v-model",value:e.date,expression:"note.date"}],staticClass:"input",attrs:{type:"text"},domProps:{value:e.date},on:{input:function(a){a.target.composing||t.$set(e,"date",a.target.value)}}}):t._e()]),n("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated bounceInLeft","leave-active-class":"animated bounceOutLeft"}},[t.edit_2!=s?n("div",{staticClass:"text text-rose",domProps:{innerHTML:t._s(e.textHTML)}}):t._e()]),n("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated bounceInRight","leave-active-class":"animated bounceOutRight"}},[t.edit_2==s?n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"note.text"}],staticClass:"textarea",attrs:{name:"",id:""},domProps:{textContent:t._s(e.text),value:e.text},on:{input:function(a){a.target.composing||t.$set(e,"text",a.target.value)}}}):t._e()]),n("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated bounceInLeft","leave-active-class":"animated bounceOutLeft"}},[t.edit_2==s?n("button",{staticClass:"btn btn_white btn_add",on:{click:function(a){return t.update(e.id,e.text,e.date,t.$root.current.month.name,t.$root.current.year.name)}}},[t._v(" Сохранить ")]):t._e()])],1):t._e()])],1)}))],2):t._e()])],1)},s=[],r=a("1da1"),i=a("5530"),o=(a("96cf"),a("b0c0"),a("4de4"),a("159b"),a("ac1f"),a("5319"),a("2f62")),c=a("0eb4"),u=a("555f"),d={components:{Toast:c["a"],Loader:u["a"]},data:function(){return{notes:[],notesAndrey:[],notesNyuta:[],edit_1:null,edit_2:null,text:"",toast:{toast:!1,text:"Сохранено"},loading:!0,btnLoading:!1,delOverlay:!1,date:new Date}},mounted:function(){this.start(this.$root.current.month.name,this.$root.current.year.name)},methods:Object(i["a"])(Object(i["a"])({},Object(o["b"])(["fetchNotes","updateNote","disableNote"])),{},{start:function(t,e){var a=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return s={month:t,year:e},n.next=3,a.fetchNotes(s);case 3:a.notes=n.sent,console.log("history notes -",a.notes),a.notesAndrey=a.notes.filter((function(t){return"Andrey"==t.name})).reverse(),a.notesNyuta=a.notes.filter((function(t){return"Nyuta"==t.name})).reverse(),a.notesAndrey.forEach((function(t){t.textHTML=t.text.replace(/(\r\n|\n|\r)/gm,"<br>")})),a.notesNyuta.forEach((function(t){t.textHTML=t.text.replace(/(\r\n|\n|\r)/gm,"<br>")})),setTimeout((function(){a.loading=!1}),1e3);case 10:case"end":return n.stop()}}),n)})))()},toEdit_1:function(t){this.edit_1!=t?this.edit_1=t:this.edit_1=null},toEdit_2:function(t){this.edit_2!=t?this.edit_2=t:this.edit_2=null},update:function(t,e,a,n,s){var i=this;return Object(r["a"])(regeneratorRuntime.mark((function o(){var c;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:try{c={id:t,text:e,date:a,month:n,year:s},i.btnLoading=!0,setTimeout(Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i.updateNote(c);case 2:i.start(i.$root.current.month.name,i.$root.current.year.name),i.$root.user_1.counter=0,i.$root.user_2.counter=0,i.edit_1=null,i.edit_2=null,i.toast.toast=!0,setTimeout((function(){i.toast.toast=!1,i.btnLoading=!1}),3e3);case 9:case"end":return t.stop()}}),t)}))),1e3)}catch(u){console.log("updateNote e -",u)}case 1:case"end":return o.stop()}}),o)})))()},del:function(t,e,a){var n=arguments,s=this;return Object(r["a"])(regeneratorRuntime.mark((function r(){var i,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return i=n.length>3&&void 0!==n[3]&&n[3],s.delOverlay=!0,r.prev=2,o={id:t,enable:i,month:e,year:a},r.next=6,s.disableNote(o);case 6:s.$root.user_1.counter=0,s.$root.user_2.counter=0,s.start(s.$root.current.month.name,s.$root.current.year.name),setTimeout((function(){s.delOverlay=!1}),3e3),r.next=15;break;case 12:r.prev=12,r.t0=r["catch"](2),console.log("updateNote e -",r.t0);case 15:case"end":return r.stop()}}),r,null,[[2,12]])})))()}}),watch:{"$root.current.month":function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.start(this.$root.current.month.name,this.$root.current.year.name);case 2:this.edit_1=null,this.edit_2=null;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),"$root.current.year":function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.start(this.$root.current.month.name,this.$root.current.year.name);case 2:this.edit_1=null,this.edit_2=null;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},l=d,m=(a("ba76"),a("2877")),v=Object(m["a"])(l,n,s,!1,null,"55ee2f4b",null);e["default"]=v.exports}}]);
//# sourceMappingURL=chunk-64d56af2.f114e1c2.js.map