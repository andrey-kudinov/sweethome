(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e663769"],{"0cb2":function(t,e,r){var n=r("7b0b"),a=Math.floor,o="".replace,c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,i=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,r,u,s,l){var f=r+t.length,d=u.length,v=i;return void 0!==s&&(s=n(s),v=c),o.call(l,v,(function(n,o){var c;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(f);case"<":c=s[o.slice(1,-1)];break;default:var i=+o;if(0===i)return n;if(i>d){var l=a(i/10);return 0===l?n:l<=d?void 0===u[l-1]?o.charAt(1):u[l-1]+o.charAt(1):n}c=u[i-1]}return void 0===c?"":c}))}},"14c3":function(t,e,r){var n=r("c6b6"),a=r("9263");t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var o=r.call(t,e);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"466d":function(t,e,r){"use strict";var n=r("d784"),a=r("825a"),o=r("50c4"),c=r("1d80"),i=r("8aa5"),u=r("14c3");n("match",1,(function(t,e,r){return[function(e){var r=c(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,r):new RegExp(e)[t](String(r))},function(t){var n=r(e,t,this);if(n.done)return n.value;var c=a(t),s=String(this);if(!c.global)return u(c,s);var l=c.unicode;c.lastIndex=0;var f,d=[],v=0;while(null!==(f=u(c,s))){var h=String(f[0]);d[v]=h,""===h&&(c.lastIndex=i(s,o(c.lastIndex),l)),v++}return 0===v?null:d}]}))},5319:function(t,e,r){"use strict";var n=r("d784"),a=r("825a"),o=r("50c4"),c=r("a691"),i=r("1d80"),u=r("8aa5"),s=r("0cb2"),l=r("14c3"),f=Math.max,d=Math.min,v=function(t){return void 0===t?t:String(t)};n("replace",2,(function(t,e,r,n){var h=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,p=n.REPLACE_KEEPS_$0,g=h?"$":"$0";return[function(r,n){var a=i(this),o=void 0==r?void 0:r[t];return void 0!==o?o.call(r,a,n):e.call(String(a),r,n)},function(t,n){if(!h&&p||"string"===typeof n&&-1===n.indexOf(g)){var i=r(e,t,this,n);if(i.done)return i.value}var x=a(t),_=String(this),E="function"===typeof n;E||(n=String(n));var b=x.global;if(b){var y=x.unicode;x.lastIndex=0}var $=[];while(1){var m=l(x,_);if(null===m)break;if($.push(m),!b)break;var R=String(m[0]);""===R&&(x.lastIndex=u(_,o(x.lastIndex),y))}for(var S="",I=0,T=0;T<$.length;T++){m=$[T];for(var w=String(m[0]),A=f(d(c(m.index),_.length),0),C=[],N=1;N<m.length;N++)C.push(v(m[N]));var P=m.groups;if(E){var M=[w].concat(C,A,_);void 0!==P&&M.push(P);var O=String(n.apply(void 0,M))}else O=s(w,_,A,C,P,n);A>=I&&(S+=_.slice(I,A)+O,I=A+w.length)}return S+_.slice(I)}]}))},"8aa5":function(t,e,r){"use strict";var n=r("6547").charAt;t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},9263:function(t,e,r){"use strict";var n=r("ad6d"),a=r("9f7f"),o=r("5692"),c=RegExp.prototype.exec,i=o("native-string-replace",String.prototype.replace),u=c,s=function(){var t=/a/,e=/b*/g;return c.call(t,"a"),c.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=a.UNSUPPORTED_Y||a.BROKEN_CARET,f=void 0!==/()??/.exec("")[1],d=s||f||l;d&&(u=function(t){var e,r,a,o,u=this,d=l&&u.sticky,v=n.call(u),h=u.source,p=0,g=t;return d&&(v=v.replace("y",""),-1===v.indexOf("g")&&(v+="g"),g=String(t).slice(u.lastIndex),u.lastIndex>0&&(!u.multiline||u.multiline&&"\n"!==t[u.lastIndex-1])&&(h="(?: "+h+")",g=" "+g,p++),r=new RegExp("^(?:"+h+")",v)),f&&(r=new RegExp("^"+h+"$(?!\\s)",v)),s&&(e=u.lastIndex),a=c.call(d?r:u,g),d?a?(a.input=a.input.slice(p),a[0]=a[0].slice(p),a.index=u.lastIndex,u.lastIndex+=a[0].length):u.lastIndex=0:s&&a&&(u.lastIndex=u.global?a.index+a[0].length:e),f&&a&&a.length>1&&i.call(a[0],r,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(a[o]=void 0)})),a}),t.exports=u},"9f7f":function(t,e,r){"use strict";var n=r("d039");function a(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},aa4e:function(t,e,r){"use strict";r("f47a")},ac1f:function(t,e,r){"use strict";var n=r("23e7"),a=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(t,e,r){"use strict";var n=r("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},d784:function(t,e,r){"use strict";r("ac1f");var n=r("6eeb"),a=r("d039"),o=r("b622"),c=r("9112"),i=o("species"),u=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),s=function(){return"$0"==="a".replace(/./,"$0")}(),l=o("replace"),f=function(){return!!/./[l]&&""===/./[l]("a","$0")}(),d=!a((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,e,r,l){var v=o(t),h=!a((function(){var e={};return e[v]=function(){return 7},7!=""[t](e)})),p=h&&!a((function(){var e=!1,r=/a/;return"split"===t&&(r={},r.constructor={},r.constructor[i]=function(){return r},r.flags="",r[v]=/./[v]),r.exec=function(){return e=!0,null},r[v](""),!e}));if(!h||!p||"replace"===t&&(!u||!s||f)||"split"===t&&!d){var g=/./[v],x=r(v,""[t],(function(t,e,r,n,a){return e.exec===RegExp.prototype.exec?h&&!a?{done:!0,value:g.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:s,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),_=x[0],E=x[1];n(String.prototype,t,_),n(RegExp.prototype,v,2==e?function(t,e){return E.call(t,this,e)}:function(t){return E.call(t,this)})}l&&c(RegExp.prototype[v],"sham",!0)}},ed93:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"stats"},[t._m(0),r("div",{staticClass:"counter"},[t._v(" "+t._s(Math.round(t.$root.user_1.counter/t.$root.user_1.goal*100))+"% ("+t._s(t.$root.user_1.counter)+" из "+t._s(t.$root.user_1.goal)+") ")]),t._m(1),r("div",{staticClass:"counter"},[t._v(" "+t._s(Math.round(t.$root.user_2.counter/t.$root.user_2.goal*100))+"% ("+t._s(t.$root.user_2.counter)+" из "+t._s(t.$root.user_2.goal)+") ")])])},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bar_1"},[r("div",{staticClass:"bar_1-line"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bar_2"},[r("div",{staticClass:"bar_2-line"})])}],o=r("1da1"),c=r("5530"),i=(r("96cf"),r("4de4"),r("b0c0"),r("159b"),r("ac1f"),r("5319"),r("466d"),r("2f62")),u={mounted:function(){this.start(),this.bar()},methods:Object(c["a"])(Object(c["a"])({},Object(i["b"])(["fetchNotes"])),{},{start:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fetchNotes();case 2:t.notes=e.sent,t.notesAndrey=t.notes.filter((function(t){return"Andrey"==t.name})),t.notesNyuta=t.notes.filter((function(t){return"Nyuta"==t.name})),t.notesAndrey.forEach((function(t){t.textHTML=t.text.replace(/(\r\n|\n|\r)/gm,"<br>")})),t.notesNyuta.forEach((function(t){t.textHTML=t.text.replace(/(\r\n|\n|\r)/gm,"<br>")})),t.$root.user_1.counter=t.notesAndrey.filter((function(t){return t.enable})).length,t.notesAndrey.filter((function(t){return t.enable})).forEach((function(e){e.textHTML.match("<br>")&&(t.$root.user_1.counter+=e.textHTML.match(/<br>/g).length)})),t.$root.user_2.counter=t.notesNyuta.filter((function(t){return t.enable})).length,t.notesNyuta.filter((function(t){return t.enable})).forEach((function(e){e.textHTML.match("<br>")&&(t.$root.user_2.counter+=e.textHTML.match(/<br>/g).length)}));case 11:case"end":return e.stop()}}),e)})))()},bar:function(){document.querySelector(".bar_1-line").style.width="".concat(Math.round(this.$root.user_1.counter/this.$root.user_1.goal*100),"%"),document.querySelector(".bar_2-line").style.width="".concat(Math.round(this.$root.user_2.counter/this.$root.user_2.goal*100),"%")}})},s=u,l=(r("aa4e"),r("2877")),f=Object(l["a"])(s,n,a,!1,null,"1e56ff22",null);e["default"]=f.exports},f47a:function(t,e,r){}}]);
//# sourceMappingURL=chunk-7e663769.cc67f2a6.js.map