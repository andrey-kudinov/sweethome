(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04dfb250"],{4877:function(e,t,a){},5214:function(e,t,a){"use strict";a("c51e")},acf1:function(e,t,a){"use strict";a("e62d")},c51e:function(e,t,a){},c66d:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"profiles"},[a("ProfileData",{staticClass:"profile profile_first",attrs:{user_1:e.user_1}}),a("ProfileData",{staticClass:"profile profile_second",attrs:{user_2:e.user_2}})],1)},s=[],n=a("1da1"),i=a("5530"),o=(a("b0c0"),a("96cf"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{},[e.imageSelected?e._e():r("div",{staticClass:"avatar no_photo",on:{click:function(t){return e.showFileChooser()}}},[r("img",{attrs:{src:a("f6e1"),alt:""}})]),e.cropped&&e.imageSelected?r("div",{staticClass:"avatar"},[r("img",{staticClass:"result",attrs:{src:e.cropped}})]):e._e(),r("input",{ref:"input",staticClass:"file",attrs:{type:"file"},on:{change:e.croppie}}),r("vue-croppie",{directives:[{name:"show",rawName:"v-show",value:e.imageSelected&&!e.cropped,expression:"imageSelected && !cropped"}],ref:"croppieRef",attrs:{customClass:"croppie",showZoomer:!1,enableResize:!1,boundary:{width:300,height:300},viewport:{width:300,height:300,type:"square"}}}),r("div",{staticClass:"buttons"},[r("button",{staticClass:"btn btn_white btn_open",on:{click:function(t){return e.showFileChooser()}}},[e._v(" Открыть ")]),r("transition",{attrs:{name:"fade",mode:"in-out"}},[r("button",{directives:[{name:"show",rawName:"v-show",value:e.imageSelected&&!e.cropped,expression:"imageSelected && !cropped"}],staticClass:"btn btn_white btn_crop",on:{click:function(t){return e.crop()}}},[e._v(" Обрезать ")])]),r("transition",{attrs:{name:"fade",mode:"in-out"}},[r("button",{directives:[{name:"show",rawName:"v-show",value:e.imageSelected&&!e.cropped,expression:"imageSelected && !cropped"}],staticClass:"btn btn_white btn_rotate",on:{click:function(t){return e.rotate(90)}}},[e._v(" Повернуть ")])])],1),r("div",{staticClass:"inputs"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"name",attrs:{type:"text",placeholder:"Имя"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),r("button",{staticClass:"btn btn_white btn_save",on:{click:e.changeName}},[e._v(" Сохранить ")])],1)}),c=[],u={props:{user_1:Object,user_2:Object},data:function(){return{cropped:null,croppieImage:"",imageSelected:!1,avatarBlob:"",options:{format:"jpeg",circle:!0},name:""}},methods:{croppie:function(e){var t=this,a=e.target.files||e.dataTransfer.files;if(a.length){this.imageSelected=!0;var r=new FileReader;r.onload=function(e){t.$refs.croppieRef.bind({url:e.target.result})},r.readAsDataURL(a[0])}},crop:function(){var e=this,t={type:"base64",size:"original",format:"jpeg"};this.$refs.croppieRef.result(t,(function(t){e.cropped=e.croppieImage=t,e.user_1&&(e.user_1.avatar=e.cropped||""),e.user_2&&(e.user_2.avatar=e.cropped||"")}))},rotate:function(e){this.$refs.croppieRef.rotate(e)},showFileChooser:function(){this.imageSelected="",this.cropped="",this.$refs.input.click()},changeName:function(){this.user_1&&(this.user_1.name=this.name||""),this.user_2&&(this.user_2.name=this.name||"")}}},l=u,p=(a("c723"),a("5214"),a("2877")),d=Object(p["a"])(l,o,c,!1,null,"453abdee",null),h=d.exports,m=a("2f62"),f={components:{ProfileData:h},data:function(){return{user_1:{avatar:null,name:""},user_2:{avatar:null,name:""}}},methods:Object(i["a"])(Object(i["a"])({},Object(m["b"])(["updateUserName","loadUserAvatar"])),{},{updateName:function(e,t){var a=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return s={user:e,name:t},r.prev=1,r.next=4,a.updateUserName(s);case 4:r.next=9;break;case 6:r.prev=6,r.t0=r["catch"](1),console.log("reg e -",r.t0);case 9:case"end":return r.stop()}}),r,null,[[1,6]])})))()},loadAvatar:function(e,t){var a=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return s={user:e,avatar:t},r.prev=1,console.log(s),r.next=5,a.loadUserAvatar(s);case 5:r.next=10;break;case 7:r.prev=7,r.t0=r["catch"](1),console.log("reg e -",r.t0);case 10:case"end":return r.stop()}}),r,null,[[1,7]])})))()}}),watch:{"user_1.avatar":function(){var e=this;this.$root.user_1.avatar=this.user_1.avatar,localStorage.avatar_1=this.user_1.avatar,setTimeout((function(){e.loadAvatar("user_1",e.user_1.avatar)}),1e3)},"user_2.avatar":function(){this.$root.user_2.avatar=this.user_2.avatar,localStorage.avatar_2=this.user_2.avatar,this.loadAvatar("user_2",this.user_2.avatar)},"user_1.name":function(){this.$root.user_1.name=this.user_1.name,console.log(this.user_1.name),this.updateName("user_1",this.user_1.name)},"user_2.name":function(){this.$root.user_2.name=this.user_2.name,this.updateName("user_2",this.user_2.name)}}},v=f,_=(a("acf1"),Object(p["a"])(v,r,s,!1,null,"3aedd122",null));t["default"]=_.exports},c723:function(e,t,a){"use strict";a("4877")},e62d:function(e,t,a){},f6e1:function(e,t,a){e.exports=a.p+"img/photo.d430a5e0.svg"}}]);
//# sourceMappingURL=chunk-04dfb250.974c0e24.js.map