(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-37dbe56d"],{"0418":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("el-col",{attrs:{span:8}},[n("div",{staticStyle:{display:"flex"}},[n("img",{staticClass:"pointer",staticStyle:{width:"2rem"},attrs:{src:this.$store.state.user.userImg,alt:""},on:{click:function(t){return e.newWindow()}}}),n("div",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center","margin-left":".5rem"}},[n("span",[e._v("Hi, "),n("span",{staticClass:"pointer",staticStyle:{"font-weight":"bold"}},[e._v(e._s(this.$store.state.user.userName)+"!")])])])])]),n("el-col",{attrs:{span:8}},[n("div",[n("svg-icon",{staticClass:"pointer",attrs:{id:"svg_logo","icon-class":"logo_b"},on:{click:function(t){return e.toHome()}}})],1)]),n("el-col",{attrs:{span:8}},[n("div",[n("el-tooltip",{attrs:{effect:"dark",content:"Sign out",placement:"left"}},[n("svg-icon",{staticClass:"pointer",attrs:{id:"svg_loginOut","icon-class":"loginOut"},on:{click:function(t){return e.loginOut()}}})],1)],1)])],1)},i=[],o={name:"Header",computed:{},data:function(){return{}},created:function(){},methods:{toHome:function(){this.$router.push("/home")},loginOut:function(){this.$router.push("/")},newWindow:function(){window.open("https://github.com/ouchengle")}}},a=o,s=(n("316c"),n("2877")),c=Object(s["a"])(a,r,i,!1,null,"867df164",null);t["a"]=c.exports},"057f":function(e,t,n){var r=n("fc6a"),i=n("241c").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(e){try{return i(e)}catch(t){return a.slice()}};e.exports.f=function(e){return a&&"[object Window]"==o.call(e)?s(e):i(r(e))}},1276:function(e,t,n){"use strict";var r=n("d784"),i=n("44e7"),o=n("825a"),a=n("1d80"),s=n("4840"),c=n("8aa5"),l=n("50c4"),u=n("14c3"),f=n("9263"),d=n("d039"),g=[].push,h=Math.min,p=4294967295,m=!d((function(){return!RegExp(p,"y")}));r("split",2,(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=String(a(this)),o=void 0===n?p:n>>>0;if(0===o)return[];if(void 0===e)return[r];if(!i(e))return t.call(r,e,o);var s,c,l,u=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),h=0,m=new RegExp(e.source,d+"g");while(s=f.call(m,r)){if(c=m.lastIndex,c>h&&(u.push(r.slice(h,s.index)),s.length>1&&s.index<r.length&&g.apply(u,s.slice(1)),l=s[0].length,h=c,u.length>=o))break;m.lastIndex===s.index&&m.lastIndex++}return h===r.length?!l&&m.test("")||u.push(""):u.push(r.slice(h)),u.length>o?u.slice(0,o):u}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var i=a(this),o=void 0==t?void 0:t[e];return void 0!==o?o.call(t,i,n):r.call(String(i),t,n)},function(e,i){var a=n(r,e,this,i,r!==t);if(a.done)return a.value;var f=o(e),d=String(this),g=s(f,RegExp),v=f.unicode,b=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(m?"y":"g"),y=new g(m?f:"^(?:"+f.source+")",b),x=void 0===i?p:i>>>0;if(0===x)return[];if(0===d.length)return null===u(y,d)?[d]:[];var C=0,_=0,O=[];while(_<d.length){y.lastIndex=m?_:0;var w,k=u(y,m?d:d.slice(_));if(null===k||(w=h(l(y.lastIndex+(m?0:_)),d.length))===C)_=c(d,_,v);else{if(O.push(d.slice(C,_)),O.length===x)return O;for(var E=1;E<=k.length-1;E++)if(O.push(k[E]),O.length===x)return O;_=C=w}}return O.push(d.slice(C)),O}]}),!m)},"14c3":function(e,t,n){var r=n("c6b6"),i=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var o=n.call(e,t);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(e,t)}},1936:function(e,t,n){},"316c":function(e,t,n){"use strict";var r=n("1936"),i=n.n(r);i.a},"44e7":function(e,t,n){var r=n("861d"),i=n("c6b6"),o=n("b622"),a=o("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[a])?!!t:"RegExp"==i(e))}},"4de4":function(e,t,n){"use strict";var r=n("23e7"),i=n("b727").filter,o=n("1dde"),a=n("ae40"),s=o("filter"),c=a("filter");r({target:"Array",proto:!0,forced:!s||!c},{filter:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},5530:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");var r=n("ade3");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(r["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},"615a":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(){return window.innerHeight}},6547:function(e,t,n){var r=n("a691"),i=n("1d80"),o=function(e){return function(t,n){var o,a,s=String(i(t)),c=r(n),l=s.length;return c<0||c>=l?e?"":void 0:(o=s.charCodeAt(c),o<55296||o>56319||c+1===l||(a=s.charCodeAt(c+1))<56320||a>57343?e?s.charAt(c):o:e?s.slice(c,c+2):a-56320+(o-55296<<10)+65536)}};e.exports={codeAt:o(!1),charAt:o(!0)}},"746f":function(e,t,n){var r=n("428f"),i=n("5135"),o=n("e538"),a=n("9bf2").f;e.exports=function(e){var t=r.Symbol||(r.Symbol={});i(t,e)||a(t,e,{value:o.f(e)})}},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},9263:function(e,t,n){"use strict";var r=n("ad6d"),i=n("9f7f"),o=RegExp.prototype.exec,a=String.prototype.replace,s=o,c=function(){var e=/a/,t=/b*/g;return o.call(e,"a"),o.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),l=i.UNSUPPORTED_Y||i.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],f=c||u||l;f&&(s=function(e){var t,n,i,s,f=this,d=l&&f.sticky,g=r.call(f),h=f.source,p=0,m=e;return d&&(g=g.replace("y",""),-1===g.indexOf("g")&&(g+="g"),m=String(e).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==e[f.lastIndex-1])&&(h="(?: "+h+")",m=" "+m,p++),n=new RegExp("^(?:"+h+")",g)),u&&(n=new RegExp("^"+h+"$(?!\\s)",g)),c&&(t=f.lastIndex),i=o.call(d?n:f,m),d?i?(i.input=i.input.slice(p),i[0]=i[0].slice(p),i.index=f.lastIndex,f.lastIndex+=i[0].length):f.lastIndex=0:c&&i&&(f.lastIndex=f.global?i.index+i[0].length:t),u&&i&&i.length>1&&a.call(i[0],n,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(i[s]=void 0)})),i}),e.exports=s},"9f7f":function(e,t,n){"use strict";var r=n("d039");function i(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a4d3:function(e,t,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("d066"),a=n("c430"),s=n("83ab"),c=n("4930"),l=n("fdbf"),u=n("d039"),f=n("5135"),d=n("e8b5"),g=n("861d"),h=n("825a"),p=n("7b0b"),m=n("fc6a"),v=n("c04e"),b=n("5c6c"),y=n("7c73"),x=n("df75"),C=n("241c"),_=n("057f"),O=n("7418"),w=n("06cf"),k=n("9bf2"),E=n("d1e7"),A=n("9112"),$=n("6eeb"),S=n("5692"),I=n("f772"),F=n("d012"),T=n("90e3"),P=n("b622"),j=n("e538"),R=n("746f"),D=n("d44e"),N=n("69f3"),L=n("b727").forEach,H=I("hidden"),U="Symbol",q="prototype",z=P("toPrimitive"),M=N.set,B=N.getterFor(U),K=Object[q],V=i.Symbol,W=o("JSON","stringify"),J=w.f,Y=k.f,G=_.f,Z=E.f,Q=S("symbols"),X=S("op-symbols"),ee=S("string-to-symbol-registry"),te=S("symbol-to-string-registry"),ne=S("wks"),re=i.QObject,ie=!re||!re[q]||!re[q].findChild,oe=s&&u((function(){return 7!=y(Y({},"a",{get:function(){return Y(this,"a",{value:7}).a}})).a}))?function(e,t,n){var r=J(K,t);r&&delete K[t],Y(e,t,n),r&&e!==K&&Y(K,t,r)}:Y,ae=function(e,t){var n=Q[e]=y(V[q]);return M(n,{type:U,tag:e,description:t}),s||(n.description=t),n},se=l?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof V},ce=function(e,t,n){e===K&&ce(X,t,n),h(e);var r=v(t,!0);return h(n),f(Q,r)?(n.enumerable?(f(e,H)&&e[H][r]&&(e[H][r]=!1),n=y(n,{enumerable:b(0,!1)})):(f(e,H)||Y(e,H,b(1,{})),e[H][r]=!0),oe(e,r,n)):Y(e,r,n)},le=function(e,t){h(e);var n=m(t),r=x(n).concat(he(n));return L(r,(function(t){s&&!fe.call(n,t)||ce(e,t,n[t])})),e},ue=function(e,t){return void 0===t?y(e):le(y(e),t)},fe=function(e){var t=v(e,!0),n=Z.call(this,t);return!(this===K&&f(Q,t)&&!f(X,t))&&(!(n||!f(this,t)||!f(Q,t)||f(this,H)&&this[H][t])||n)},de=function(e,t){var n=m(e),r=v(t,!0);if(n!==K||!f(Q,r)||f(X,r)){var i=J(n,r);return!i||!f(Q,r)||f(n,H)&&n[H][r]||(i.enumerable=!0),i}},ge=function(e){var t=G(m(e)),n=[];return L(t,(function(e){f(Q,e)||f(F,e)||n.push(e)})),n},he=function(e){var t=e===K,n=G(t?X:m(e)),r=[];return L(n,(function(e){!f(Q,e)||t&&!f(K,e)||r.push(Q[e])})),r};if(c||(V=function(){if(this instanceof V)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=T(e),n=function(e){this===K&&n.call(X,e),f(this,H)&&f(this[H],t)&&(this[H][t]=!1),oe(this,t,b(1,e))};return s&&ie&&oe(K,t,{configurable:!0,set:n}),ae(t,e)},$(V[q],"toString",(function(){return B(this).tag})),$(V,"withoutSetter",(function(e){return ae(T(e),e)})),E.f=fe,k.f=ce,w.f=de,C.f=_.f=ge,O.f=he,j.f=function(e){return ae(P(e),e)},s&&(Y(V[q],"description",{configurable:!0,get:function(){return B(this).description}}),a||$(K,"propertyIsEnumerable",fe,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:V}),L(x(ne),(function(e){R(e)})),r({target:U,stat:!0,forced:!c},{for:function(e){var t=String(e);if(f(ee,t))return ee[t];var n=V(t);return ee[t]=n,te[n]=t,n},keyFor:function(e){if(!se(e))throw TypeError(e+" is not a symbol");if(f(te,e))return te[e]},useSetter:function(){ie=!0},useSimple:function(){ie=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!s},{create:ue,defineProperty:ce,defineProperties:le,getOwnPropertyDescriptor:de}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:ge,getOwnPropertySymbols:he}),r({target:"Object",stat:!0,forced:u((function(){O.f(1)}))},{getOwnPropertySymbols:function(e){return O.f(p(e))}}),W){var pe=!c||u((function(){var e=V();return"[null]"!=W([e])||"{}"!=W({a:e})||"{}"!=W(Object(e))}));r({target:"JSON",stat:!0,forced:pe},{stringify:function(e,t,n){var r,i=[e],o=1;while(arguments.length>o)i.push(arguments[o++]);if(r=t,(g(t)||void 0!==e)&&!se(e))return d(t)||(t=function(e,t){if("function"==typeof r&&(t=r.call(this,e,t)),!se(t))return t}),i[1]=t,W.apply(null,i)}})}V[q][z]||A(V[q],z,V[q].valueOf),D(V,U),F[H]=!0},a8f8:function(e,t,n){},ac1f:function(e,t,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},ade3:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},b3eb:function(e,t,n){"use strict";var r=n("a8f8"),i=n.n(r);i.a},b64b:function(e,t,n){var r=n("23e7"),i=n("7b0b"),o=n("df75"),a=n("d039"),s=a((function(){o(1)}));r({target:"Object",stat:!0,forced:s},{keys:function(e){return o(i(e))}})},d32f:function(e,t,n){"use strict";var r=n("e35a"),i=n.n(r);i.a},d784:function(e,t,n){"use strict";n("ac1f");var r=n("6eeb"),i=n("d039"),o=n("b622"),a=n("9263"),s=n("9112"),c=o("species"),l=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),f=o("replace"),d=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),g=!i((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,f){var h=o(e),p=!i((function(){var t={};return t[h]=function(){return 7},7!=""[e](t)})),m=p&&!i((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[h]=/./[h]),n.exec=function(){return t=!0,null},n[h](""),!t}));if(!p||!m||"replace"===e&&(!l||!u||d)||"split"===e&&!g){var v=/./[h],b=n(h,""[e],(function(e,t,n,r,i){return t.exec===a?p&&!i?{done:!0,value:v.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),y=b[0],x=b[1];r(String.prototype,e,y),r(RegExp.prototype,h,2==t?function(e,t){return x.call(e,this,t)}:function(e){return x.call(e,this)})}f&&s(RegExp.prototype[h],"sham",!0)}},dbb4:function(e,t,n){var r=n("23e7"),i=n("83ab"),o=n("56ef"),a=n("fc6a"),s=n("06cf"),c=n("8418");r({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(e){var t,n,r=a(e),i=s.f,l=o(r),u={},f=0;while(l.length>f)n=i(r,t=l[f++]),void 0!==n&&c(u,t,n);return u}})},e35a:function(e,t,n){},e439:function(e,t,n){var r=n("23e7"),i=n("d039"),o=n("fc6a"),a=n("06cf").f,s=n("83ab"),c=i((function(){a(1)})),l=!s||c;r({target:"Object",stat:!0,forced:l,sham:!s},{getOwnPropertyDescriptor:function(e,t){return a(o(e),t)}})},e538:function(e,t,n){var r=n("b622");t.f=r},ea3a:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{style:e.checkCLAClass,attrs:{id:"checkCLA"}},[n("div",{staticClass:"header"},[n("el-col",{attrs:{offset:8,span:8}},[n("div",[n("svg-icon",{staticClass:"pointer",attrs:{id:"svg_logo","icon-class":"logo_b"},on:{click:function(e){}}})],1)])],1),n("div",{attrs:{id:"section"}},[e.isSendCode?e.isVerify?n("div",{staticClass:"content"},[n("el-col",{staticClass:"verifyClass",attrs:{offset:6,span:12}},[n("p",{staticStyle:{"text-align":"center"}},[e._v(" "+e._s(e.passContent)+" ")])])],1):n("div",{staticClass:"content "},[n("el-col",{staticClass:"verifyClass",attrs:{offset:6,span:12}},[n("p",[e._v("请输入6位数验证码完成验证")]),n("el-row",[n("el-col",{staticStyle:{"margin-right":"2rem"},attrs:{span:6}},[n("el-input",{attrs:{size:"medium"},model:{value:e.verifyCode,callback:function(t){e.verifyCode=t},expression:"verifyCode"}})],1),n("el-col",{attrs:{span:6}},[n("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(t){return e.verify()}}},[e._v("确定")])],1)],1)],1)],1):n("div",{staticClass:"content"},[n("el-col",{attrs:{offset:6,span:12}},[n("p",{staticClass:"contentTitle"},[e._v("Please sign the CLA for "),n("span",[e._v(e._s(e.repo))])]),n("el-row",[n("span",{staticClass:"size_s"},[e._v("Version: 2020-06-17")]),n("el-select",{staticStyle:{width:"6rem","margin-left":"2rem"},attrs:{size:"small",value:""},on:{change:e.changeLanguage},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.languageOptions,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),n("div",{staticClass:"marginTop1rem",staticStyle:{"white-space":"pre-wrap"},attrs:{id:"claBox"}}),n("el-divider"),n("el-row",{staticClass:"marginTop1rem"},[n("el-col",{attrs:{span:16}},[n("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-position":"left","label-width":"30%"}},[e._l(e.fields,(function(t,r){return n("el-form-item",{attrs:{label:t.title,required:t.required,prop:t.type}},["email"===t.type?n("el-input",{attrs:{type:"email",size:"small"},model:{value:e.ruleForm[t.type],callback:function(n){e.$set(e.ruleForm,t.type,n)},expression:"ruleForm[item.type]"}}):"date"===t.type?n("el-input",{attrs:{readonly:"",size:"small"},model:{value:e.ruleForm[t.type],callback:function(n){e.$set(e.ruleForm,t.type,n)},expression:"ruleForm[item.type]"}}):n("el-input",{attrs:{size:"small"},model:{value:e.ruleForm[t.type],callback:function(n){e.$set(e.ruleForm,t.type,n)},expression:"ruleForm[item.type]"}})],1)})),n("p",{staticClass:"borderClass",staticStyle:{"font-size":".9rem"}},[e._v(e._s(e.desc.metadataDesc))]),n("div",{staticClass:"marginTop1rem"},[n("el-checkbox",{model:{value:e.isRead,callback:function(t){e.isRead=t},expression:"isRead"}},[e._v('I have read the Privacy Policy and hereby consent to the processing of my data by openLooKeng in Hong Kong"')])],1),n("el-form-item",{staticClass:"marginTop1rem",attrs:{"label-width":"0"}},[n("el-button",{attrs:{disabled:!e.isRead,type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v(e._s(e.desc.sign)+" ")]),n("el-button",{on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v(e._s(e.desc.reset))])],1)],2)],1)],1)],1)],1)]),n("Footer"),n("el-dialog",{attrs:{title:"",top:"5vh",visible:e.dialogVisible,width:"50%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("div",{staticStyle:{"margin-bottom":"2rem"}},[e._v(" 请在48小时内输入邮箱"+e._s(e.ruleForm.email)+"中的验证码进行验证 ")]),n("div",[n("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("确定")])],1)])],1)},i=[],o=(n("99af"),n("4160"),n("b0c0"),n("ac1f"),n("1276"),n("159b"),n("ade3")),a=n("5530"),s=n("0418"),c=n("fd2d"),l=n("615a"),u=n("221d"),f=n("2f62"),d={name:"CheckCLA",components:{Header:s["a"],Footer:c["a"]},data:function(){var e=function(e,t,n){var r=t;console.log(r);var i=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;i.test(r)?n():n(new Error("邮箱格式有误"))},t=function(e,t,n){if(t){var r=/^1[3456789]\d{9}$/;r.test(t)?n():n(new Error("电话号码有误")),n()}else n()},n=function(e,t,n){t||n(new Error("请输入地址")),n()},r=function(e,t,n){t||n(new Error("请输入日期")),n()};return{claOrgIdArr:[],fields:[],claIdArr:[],desc:"",enDesc:{personalContributor:"Individual Contributor",comContributor:"Legal Entity Contributor",metadataDesc:"* require field. Please make sure the E-Mail is related with your gitee account.",sign:"SIGN",reset:"RESET"},cnDesc:{personalContributor:"个人贡献者",comContributor:"企业贡献者",metadataDesc:"*为必填项，请确保你的邮箱与gitee账号绑定",sign:"签署",reset:"重置"},passContent:"",isVerify:!1,isSendCode:!1,verifyCode:"",platform:this.$store.state.platform,dialogVisible:!1,repositoryOptions:[],repo:"",role:"0",ruleForm:{adminEmail:"",corporationName:"",name:"",email:"",telephone:"",date:"",fax:"",address:""},rules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"},{min:2,max:10,message:"长度在 2 到 10 个字符",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{validator:e,trigger:"blur"}],telephone:[{validator:t,trigger:"blur"}],address:[{validator:n,trigger:"blur"}],date:[{validator:r,trigger:"blur"}]},isRead:!1,value:0,languageOptions:[{value:0,label:"english"},{value:1,label:"chinese"}],metadata:{name:{title:"Name",type:"string",githubKey:"name",required:!0},email:{title:"E-Mail",type:"string",githubKey:"email",required:!0},phone:{title:"Telephone",type:"string",required:!1},faxnumber:{title:"Fax",type:"string",required:!1},address:{title:"Address",type:"string",required:!0},date:{title:"Date",type:"string",required:!0},category:{title:"I have read the Privacy Policy and hereby consent to the processing of my data by openLooKeng in Hong Kong",type:"boolean",required:!0}},metadataArr:[],checkCLAClass:{height:""}}},methods:Object(a["a"])(Object(a["a"])({},Object(f["b"])(["setTokenAct","setRepoInfoAct"])),{},{getNowDate:function(){var e,t,n,r=new Date;e=r.getFullYear(),console.log(r.getFullYear(),r.getMonth()+1,r.getDate()),t=r.getMonth()<9?"0".concat(r.getMonth()+1):r.getMonth()+1,n=r.getDate()<10?"0".concat(r.getDate()):r.getDate(),this.ruleForm.date=e+"-"+t+"-"+n},getCookieData:function(){if(""!==document.cookie){var e,t=document.cookie.split("; "),n="";t.forEach((function(t,r){var i=t.split("=");"access_token"===i[0]?e=i[1]:n="refresh_token"===i[0]?i[1]:""}));var r={access_token:e,refresh_token:n};this.setTokenAct(r)}},changeLanguage:function(e){this.changeDesc(this.languageOptions[this.value].label),this.getClaText(this.claIdArr[e])},changeDesc:function(e){"english"===e?this.desc=this.enDesc:"chinese"===e&&(this.desc=this.cnDesc)},getSignPage:function(){var e=this;console.log("getSignPage"),this.changeDesc("english");var t="";t="individual"===this.$store.state.loginType||"employee"===this.$store.state.loginType?"individual":"corporation",this.$axios({url:"/api"+u["o"],params:{platform:"gitee",org_id:this.$store.state.repoInfo.org_id,repo_id:this.$store.state.repoInfo.repo_id,apply_to:t}}).then((function(t){console.log(t),t.data.length&&(e.languageOptions=[],e.claIdArr=[],e.claOrgIdArr=[],t.data.forEach((function(t,n){"english"===t.cla_language&&(e.value=n,console.log("查找clatext"),e.getClaText(t.cla_id)),e.languageOptions.push({value:n,label:t.cla_language}),e.claIdArr.push(t.cla_id),e.claOrgIdArr.push(t.id)})))})).catch((function(e){console.log(e)}))},getClaText:function(e){var t=this;this.$axios({url:"/api".concat(u["h"],"/").concat(e)}).then((function(e){console.log(e),document.getElementById("claBox").innerHTML=e.data.text,t.fields=e.data.fields})).catch((function(e){console.log(e)}))},getCompanyMetaAndCla:function(){this.$axios({url:"/api"+u["h"],headers:{"Access-Token":this.$store.state.access_token,"Refresh-Token":this.$store.state.refresh_token,User:"".concat(this.platform,"/").concat(this.$store.state.user.userName)}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},roleChange:function(){switch(console.log(this.role),this.role){case"0":break;case"1":this.getCompanyMetaAndCla();break}},toHome:function(){this.$router.push("/home")},verify:function(){var e=this;this.isVerify=!0;var t={code:this.verifyCode};this.$axios({url:"/api"+u["w"],method:"post",data:t,headers:{"Access-Token":this.$store.state.access_token,"Refresh-Token":this.$store.state.refresh_token,User:"".concat(this.platform,"/").concat(this.$store.state.user.userName)}}).then((function(t){console.log(t),200===t.data.code?e.isVerify=!0:e.$message.error("验证码错误")})).catch((function(e){console.log(e)}))},signCla:function(){var e=this,t={},n="",r={};for(var i in this.ruleForm)console.log(i),""!==this.ruleForm[i]&&Object.assign(t,Object(o["a"])({},i,this.ruleForm[i]));console.log(t),"individual"===this.$store.state.loginType?(n=u["q"],r={cla_org_id:this.claOrgIdArr[this.value],email:this.ruleForm.email,info:t}):"corporation"===this.$store.state.loginType?(n=u["c"],r={cla_org_id:this.claOrgIdArr[this.value],corporation_name:this.ruleForm.corporationName,admin_name:this.ruleForm.name,admin_email:this.ruleForm.adminEmail,enabled:!0,info:t}):"employee"===this.$store.state.loginType&&(n=u["g"],r={cla_org_id:this.claOrgIdArr[this.value],email:this.ruleForm.email,info:t}),this.$axios({url:"/api"+n,method:"post",data:r,headers:{"Access-Token":this.$store.state.access_token,"Refresh-Token":this.$store.state.refresh_token,User:"".concat(this.platform,"/").concat(this.$store.state.user.userName)}}).then((function(t){console.log(t),e.$message.closeAll(),e.$message.success("sign successfully"),e.resetForm("ruleForm"),e.isRead=!1})).catch((function(e){console.log(e)}))},submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;t.signCla(),console.log(t.$store.state.loginType)}))},getRepositoriesOfOrg:function(e,t){var n=this,r={access_token:this.$store.state.access_token,org:e,page:1,per_page:10};console.log("getRepositoriesOfOrg",r),this.$axios({url:"https://gitee.com/api/v5/orgs/".concat(e,"/repos"),params:r,headers:{"Access-Token":this.$store.state.access_token,"Refresh-Token":this.$store.state.refresh_token,User:"".concat(this.platform,"/").concat(this.$store.state.user.userName)}}).then((function(r){console.log(r),200===r.status&&(n.repositoryOptions=[],r.data.forEach((function(r,i){n.repositoryOptions.push({value:i,org:e,org_id:t,repoName:r.name,label:"".concat(e,"/").concat(r.name),id:r.id})})))})).catch((function(e){console.log(e)}))},resetForm:function(e){this.$refs[e].resetFields()},setClientHeight:function(){var e=this;this.$nextTick((function(){l["a"]()>document.getElementById("checkCLA").offsetHeight?e.checkCLAClass.height=l["a"]()+"px":e.checkCLAClass.height=document.getElementById("checkCLA").offsetHeight})),console.log(document.getElementById("checkCLA").offsetHeight)},loadMetadata:function(){for(var e in console.log(this.metadata),this.metadataArr=[],this.metadata)console.log(e),"category"!==e&&(Object.assign(this.metadata[e],{githubKey:e}),this.metadataArr.push(this.metadata[e]));console.log(this.metadataArr)}}),created:function(){this.getCookieData(),this.getSignPage(),this.loadMetadata(),this.getNowDate()},mounted:function(){this.setClientHeight()}};window.onresize=function(){l["a"]()>document.getElementById("checkCLA").offsetHeight&&(document.getElementById("checkCLA").style.height=l["a"]()+"px")};var g=d,h=(n("b3eb"),n("2877")),p=Object(h["a"])(g,r,i,!1,null,"f09c162c",null);t["default"]=p.exports},fd2d:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",{staticClass:"footer"},[n("el-col",{staticClass:"left",attrs:{span:8}},[n("span",[e._v("© 2020 HUAWEI SE")])]),n("el-col",{staticClass:"center",attrs:{span:8}},[n("span",[e._v("Made with "),n("svg-icon",{attrs:{"icon-class":"heart"}}),e._v(" from the GitHub team at HUAWEI ")],1)]),n("el-col",{staticClass:"right",attrs:{span:8}},[n("div",[n("span",{staticClass:"pointer"},[e._v("Terms of Service & Privacy Policy")]),n("span",{staticClass:"pointer"},[n("svg-icon",{attrs:{id:"github_logo","icon-class":"github"}}),e._v("Open an issue")],1)])])],1)},i=[],o={name:"Footer"},a=o,s=(n("d32f"),n("2877")),c=Object(s["a"])(a,r,i,!1,null,"023530e2",null);t["a"]=c.exports}}]);
//# sourceMappingURL=chunk-37dbe56d.c155cff1.js.map