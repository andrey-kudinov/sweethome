(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a90bf74"],{"08bd":function(s,e,a){s.exports=a.p+"img/key.9b47196f.svg"},"2b41":function(s,e,a){"use strict";a("b363")},a55b:function(s,e,a){"use strict";a.r(e);var t=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{},[t("link",{attrs:{href:"https://cdn.jsdelivr.net/npm/animate.css@3.5.1",rel:"stylesheet",type:"text/css"}}),t("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated tada","leave-active-class":"animated bounceOutRight"}},[s.isReg?s._e():t("section",{staticClass:"form",class:{"check-false":s.shake}},[t("div",{staticClass:"input-wrap"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.email,expression:"email"}],staticClass:"email",attrs:{type:"email",placeholder:"электронная почта"},domProps:{value:s.email},on:{blur:s.checkEmail,input:function(e){e.target.composing||(s.email=e.target.value)}}}),t("hr",{staticClass:"hr",class:{"hr-false":!s.isEmail},attrs:{"hr-false":""}})]),t("span",{staticClass:"email-false",class:{"text-false":!s.isEmail}},[s._v("Введите валидную электронную почту")]),t("div",{staticClass:"input-wrap"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"}],staticClass:"password",attrs:{type:"password",placeholder:"пароль"},domProps:{value:s.password},on:{blur:s.checkPassword,input:function(e){e.target.composing||(s.password=e.target.value)}}}),t("hr",{staticClass:"hr",class:{"hr-false":!s.isPassword},attrs:{"hr-false":""}}),t("div",{staticClass:"img"},[t("img",{attrs:{src:a("08bd"),alt:""},on:{mouseover:s.mouseoverPass,mouseleave:s.mouseoutPass}})])]),t("span",{staticClass:"email-false",class:{"text-false":!s.isPassword}},[s._v("Введите пароль (минимум 8 символов)")]),t("button",{staticClass:"btn btn_ligth-blue submit",on:{click:s.auth}},[s._v("Войти")]),t("button",{staticClass:"btn btn_white submit",on:{click:function(e){s.isReg=!s.isReg}}},[s._v(" Перейти к регистрации ")])])]),t("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated tada","leave-active-class":"animated bounceOutRight"}},[s.isReg?t("section",{staticClass:"form"},[t("div",{staticClass:"input-wrap"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.regEmail,expression:"regEmail"}],staticClass:"email",attrs:{type:"email",placeholder:"электронная почта"},domProps:{value:s.regEmail},on:{blur:s.checkRegEmail,input:function(e){e.target.composing||(s.regEmail=e.target.value)}}}),t("hr",{staticClass:"hr",class:{"hr-false":!s.isRegEmail},attrs:{"hr-false":""}})]),t("span",{staticClass:"email-false",class:{"text-false":!s.isRegEmail}},[s._v("Введите валидную электронную почту")]),t("div",{staticClass:"input-wrap"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.regPassword,expression:"regPassword"}],staticClass:"password",attrs:{type:"password",placeholder:"пароль"},domProps:{value:s.regPassword},on:{blur:s.checkRegPassword,input:function(e){e.target.composing||(s.regPassword=e.target.value)}}}),t("hr",{staticClass:"hr",class:{"hr-false":!s.isRegPassword},attrs:{"hr-false":""}}),t("div",{staticClass:"img"},[t("img",{attrs:{src:a("08bd"),alt:""},on:{mouseover:s.mouseoverPass,mouseleave:s.mouseoutPass}})])]),t("span",{staticClass:"email-false",class:{"text-false":!s.isRegPassword}},[s._v("Введите пароль (минимум 8 символов)")]),t("button",{staticClass:"btn btn_ligth-blue submit",on:{click:s.reg}},[s._v("Создать")]),t("button",{staticClass:"btn btn_white submit",on:{click:function(e){s.isReg=!s.isReg}}},[s._v(" Назад ")])]):s._e()])],1)},i=[],r=a("1da1"),n=a("5530"),l=(a("96cf"),a("ac1f"),a("466d"),a("2f62")),o={name:"Login",data:function(){return{isReg:!1,email:"",password:"",regEmail:"",regPassword:"",isEmail:!0,isPassword:!0,isRegEmail:!0,isRegPassword:!0,shake:!1}},methods:Object(n["a"])(Object(n["a"])({},Object(l["b"])(["logIn","register"])),{},{checkEmail:function(){this.email.length?this.isEmail=!!(this.email.length>7&&this.email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)):this.isEmail=!0},checkPassword:function(){this.password.length?this.isPassword=this.password.length>7:this.isPassword=!0},auth:function(){var s=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(s.email.length&&s.isEmail||(s.isEmail=!1,s.shake=!0,setTimeout((function(){s.shake=!1}),1e3),setTimeout((function(){s.isEmail=!0}),3e3)),s.password.length&&s.isPassword){e.next=7;break}return s.isPassword=!1,s.shake=!0,setTimeout((function(){s.shake=!1}),1e3),setTimeout((function(){s.isPassword=!0}),3e3),e.abrupt("return");case 7:if(s.checkEmail(),s.checkPassword(),!s.isEmail||!s.isEmail){e.next=23;break}return a={email:s.email,password:s.password},e.prev=11,e.next=14,s.logIn(a);case 14:localStorage.email=s.regEmail,s.$router.push("/"),e.next=21;break;case 18:e.prev=18,e.t0=e["catch"](11),console.log("auth e -",e.t0);case 21:e.next=25;break;case 23:s.shake=!0,setTimeout((function(){s.shake=!1}),1e3);case 25:case"end":return e.stop()}}),e,null,[[11,18]])})))()},checkRegEmail:function(){this.regEmail.length?this.isRegEmail=!!(this.regEmail.length>5&&this.regEmail.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)):this.isRegEmail=!0},checkRegPassword:function(){this.regPassword.length?this.isRegPassword=this.regPassword.length>7:this.isRegPassword=!0},reg:function(){var s=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(s.email.length&&s.isRegEmail||(s.isRegEmail=!1,s.shake=!0,setTimeout((function(){s.shake=!1}),1e3),setTimeout((function(){s.isRegEmail=!0}),3e3)),s.password.length&&s.isRegPassword){e.next=7;break}return s.isRegPassword=!1,s.shake=!0,setTimeout((function(){s.shake=!1}),1e3),setTimeout((function(){s.isRegPassword=!0}),3e3),e.abrupt("return");case 7:return s.checkRegEmail(),s.checkRegPassword(),a={email:s.regEmail,password:s.regPassword},e.prev=10,e.next=13,s.register(a);case 13:localStorage.email=s.regEmail,s.$router.push("/"),e.next=20;break;case 17:e.prev=17,e.t0=e["catch"](10),console.log("reg e -",e.t0);case 20:case"end":return e.stop()}}),e,null,[[10,17]])})))()},mouseoverPass:function(){document.querySelector(".password").type="text"},mouseoutPass:function(){document.querySelector(".password").type="password"}})},c=o,u=(a("2b41"),a("2877")),m=Object(u["a"])(c,t,i,!1,null,"7e7a09c7",null);e["default"]=m.exports},b363:function(s,e,a){}}]);
//# sourceMappingURL=chunk-3a90bf74.8516729a.js.map