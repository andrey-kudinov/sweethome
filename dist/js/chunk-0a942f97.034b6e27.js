(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a942f97"],{"08bd":function(s,t,e){s.exports=e.p+"img/key.9b47196f.svg"},"0eb4":function(s,t,e){"use strict";var a=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"main",class:{showToast:s.toast.toast}},[e("span",{staticClass:"text"},[s._v(s._s(s.toast.text))])])},i=[],r={name:"Toast",props:{toast:Object}},o=r,n=(e("ac55"),e("2877")),l=Object(n["a"])(o,a,i,!1,null,"db7eef46",null);t["a"]=l.exports},7252:function(s,t,e){},a3b6:function(s,t,e){"use strict";e("7252")},a55b:function(s,t,e){"use strict";e.r(t);var a=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"login"},[a("div",{staticClass:"btn btn_white btn_test",on:{click:s.loginTestUser}},[s._v(" Войти за тестового пользователя ")]),a("link",{attrs:{href:"https://cdn.jsdelivr.net/npm/animate.css@3.5.1",rel:"stylesheet",type:"text/css"}}),a("Toast",{class:{showToast:s.toast.toast},attrs:{toast:s.toast}}),a("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated tada","leave-active-class":"animated bounceOutRight"}},[s.isReg?s._e():a("form",{staticClass:"form",class:{"check-false":s.shake}},[s.loading?a("div",{staticClass:"loader-wrap"},[s.loading?a("Loader"):s._e()],1):s._e(),a("div",{staticClass:"input-wrap"},[a("input",{directives:[{name:"model",rawName:"v-model",value:s.email,expression:"email"}],staticClass:"email",attrs:{type:"email",placeholder:"электронная почта",autocomplete:"email",name:"email",id:"email"},domProps:{value:s.email},on:{blur:s.checkEmail,input:function(t){t.target.composing||(s.email=t.target.value)}}}),a("hr",{staticClass:"hr",class:{"hr-false":!s.isEmail},attrs:{"hr-false":""}})]),a("span",{staticClass:"email-false",class:{"text-false":!s.isEmail}},[s._v("Введите валидную электронную почту")]),a("div",{staticClass:"input-wrap"},[a("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"}],staticClass:"password",attrs:{type:"password",placeholder:"пароль",autocomplete:"current-password",name:"password",id:"password"},domProps:{value:s.password},on:{blur:s.checkPassword,input:function(t){t.target.composing||(s.password=t.target.value)}}}),a("hr",{staticClass:"hr",class:{"hr-false":!s.isPassword},attrs:{"hr-false":""}}),a("div",{staticClass:"img"},[a("img",{attrs:{src:e("08bd"),alt:""},on:{mouseover:s.mouseoverPass,mouseleave:s.mouseoutPass}})])]),a("span",{staticClass:"email-false",class:{"text-false":!s.isPassword}},[s._v("Введите пароль (минимум 8 символов)")]),a("button",{staticClass:"btn btn_ligth-blue submit",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),s.auth(t)}}},[s._v(" Войти ")]),a("button",{staticClass:"btn btn_white submit",on:{click:function(t){s.isReg=!s.isReg}}},[s._v(" Перейти к регистрации ")])])]),a("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated tada","leave-active-class":"animated bounceOutRight"}},[s.isReg?a("section",{staticClass:"form"},[a("div",{staticClass:"input-wrap"},[a("input",{directives:[{name:"model",rawName:"v-model",value:s.regEmail,expression:"regEmail"}],staticClass:"email",attrs:{type:"email",placeholder:"электронная почта"},domProps:{value:s.regEmail},on:{blur:s.checkRegEmail,input:function(t){t.target.composing||(s.regEmail=t.target.value)}}}),a("hr",{staticClass:"hr",class:{"hr-false":!s.isRegEmail},attrs:{"hr-false":""}})]),a("span",{staticClass:"email-false",class:{"text-false":!s.isRegEmail}},[s._v("Введите валидную электронную почту")]),a("div",{staticClass:"input-wrap"},[a("input",{directives:[{name:"model",rawName:"v-model",value:s.regPassword,expression:"regPassword"}],staticClass:"password",attrs:{type:"password",placeholder:"пароль"},domProps:{value:s.regPassword},on:{blur:s.checkRegPassword,input:function(t){t.target.composing||(s.regPassword=t.target.value)}}}),a("hr",{staticClass:"hr",class:{"hr-false":!s.isRegPassword},attrs:{"hr-false":""}}),a("div",{staticClass:"img"},[a("img",{attrs:{src:e("08bd"),alt:""},on:{mouseover:s.mouseoverPass,mouseleave:s.mouseoutPass}})])]),a("span",{staticClass:"email-false",class:{"text-false":!s.isRegPassword}},[s._v("Введите пароль (минимум 8 символов)")]),a("button",{staticClass:"btn btn_ligth-blue submit",on:{click:s.reg}},[s._v("Создать")]),a("button",{staticClass:"btn btn_white submit",on:{click:function(t){s.isReg=!s.isReg}}},[s._v(" Назад ")])]):s._e()])],1)},i=[],r=e("1da1"),o=e("5530"),n=(e("96cf"),e("ac1f"),e("466d"),e("2f62")),l=e("0eb4"),c=e("555f"),u={name:"Login",components:{Toast:l["a"],Loader:c["a"]},data:function(){return{isReg:!1,email:"",password:"",regEmail:"",regPassword:"",isEmail:!0,isPassword:!0,isRegEmail:!0,isRegPassword:!0,shake:!1,toast:{toast:!1},loading:!1}},methods:Object(o["a"])(Object(o["a"])({},Object(n["b"])(["logIn","register"])),{},{checkEmail:function(){this.email.length?this.isEmail=!!(this.email.length>7&&this.email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)):this.isEmail=!0},checkPassword:function(){this.password.length?this.isPassword=this.password.length>7:this.isPassword=!0},auth:function(){var s=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(s.email.length&&s.isEmail||(s.isEmail=!1,s.shake=!0,setTimeout((function(){s.shake=!1}),1e3),setTimeout((function(){s.isEmail=!0}),3e3)),s.password.length&&s.isPassword){t.next=7;break}return s.isPassword=!1,s.shake=!0,setTimeout((function(){s.shake=!1}),1e3),setTimeout((function(){s.isPassword=!0}),3e3),t.abrupt("return");case 7:if(s.checkEmail(),s.checkPassword(),!s.isEmail||!s.isEmail){t.next=28;break}return e={email:s.email,password:s.password},t.prev=11,s.loading=!0,t.next=15,s.logIn(e);case 15:sessionStorage.setItem("email",s.email),s.$router.push("/"),t.next=26;break;case 19:t.prev=19,t.t0=t["catch"](11),s.loading=!1,s.toast.toast=!0,s.toast.text=t.t0.code,setTimeout((function(){s.toast.toast=!1}),5e3),console.log("auth e -",t.t0);case 26:t.next=30;break;case 28:s.shake=!0,setTimeout((function(){s.shake=!1}),1e3);case 30:case"end":return t.stop()}}),t,null,[[11,19]])})))()},checkRegEmail:function(){this.regEmail.length?this.isRegEmail=!!(this.regEmail.length>5&&this.regEmail.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)):this.isRegEmail=!0},checkRegPassword:function(){this.regPassword.length?this.isRegPassword=this.regPassword.length>7:this.isRegPassword=!0},reg:function(){var s=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(s.regEmail.length&&s.isRegEmail||(s.isRegEmail=!1,s.shake=!0,setTimeout((function(){s.shake=!1}),1e3),setTimeout((function(){s.isRegEmail=!0}),3e3)),s.regPassword.length&&s.isRegPassword){t.next=7;break}return s.isRegPassword=!1,s.shake=!0,setTimeout((function(){s.shake=!1}),1e3),setTimeout((function(){s.isRegPassword=!0}),3e3),t.abrupt("return");case 7:return s.checkRegEmail(),s.checkRegPassword(),e={email:s.regEmail,password:s.regPassword},t.prev=10,s.loading=!0,t.next=14,s.register(e);case 14:sessionStorage.setItem("email",s.regEmail),s.$router.push("/"),t.next=25;break;case 18:t.prev=18,t.t0=t["catch"](10),s.loading=!1,s.toast.toast=!0,s.toast.text=t.t0.code,setTimeout((function(){s.toast.toast=!1}),5e3),console.log("reg e -",t.t0);case 25:case"end":return t.stop()}}),t,null,[[10,18]])})))()},mouseoverPass:function(){document.querySelector(".password").type="text"},mouseoutPass:function(){document.querySelector(".password").type="password"},loginTestUser:function(){var s=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var e,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e="9277949997@bk.ru",a="test1234",i={email:e,password:a},t.prev=3,s.loading=!0,t.next=7,s.logIn(i);case 7:sessionStorage.setItem("email",e),s.$router.push("/"),t.next=17;break;case 11:t.prev=11,t.t0=t["catch"](3),s.toast.toast=!0,s.toast.text=t.t0.code,setTimeout((function(){s.toast.toast=!1}),5e3),console.log("auth e -",t.t0);case 17:case"end":return t.stop()}}),t,null,[[3,11]])})))()}})},m=u,d=(e("a3b6"),e("2877")),g=Object(d["a"])(m,a,i,!1,null,"5fb92f9a",null);t["default"]=g.exports},ac55:function(s,t,e){"use strict";e("d342")},d342:function(s,t,e){}}]);
//# sourceMappingURL=chunk-0a942f97.034b6e27.js.map