(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0fdf7b66"],{"0418":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("el-col",{attrs:{span:8}},[n("div",{staticStyle:{display:"flex"}},[n("img",{staticClass:"pointer",staticStyle:{width:"2rem"},attrs:{src:this.$store.state.user.userImg,alt:""},on:{click:function(e){return t.newWindow()}}}),n("div",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center","margin-left":".5rem"}},[n("span",[t._v("Hi, "),n("span",{staticClass:"pointer",staticStyle:{"font-weight":"bold"}},[t._v(t._s(this.$store.state.user.userName)+"!")])])])])]),n("el-col",{attrs:{span:8}},[n("div",[n("svg-icon",{staticClass:"pointer",attrs:{id:"svg_logo","icon-class":"logo_b"},on:{click:function(e){return t.toHome()}}})],1)]),n("el-col",{attrs:{span:8}},[n("div",[n("el-tooltip",{attrs:{effect:"dark",content:"Sign out",placement:"left"}},[n("svg-icon",{staticClass:"pointer",attrs:{id:"svg_loginOut","icon-class":"loginOut"},on:{click:function(e){return t.loginOut()}}})],1)],1)])],1)},i=[],a={name:"Header",computed:{},data:function(){return{}},created:function(){},methods:{toHome:function(){this.$router.push("/home")},loginOut:function(){this.$router.push("/")},newWindow:function(){window.open("https://github.com/ouchengle")}}},o=a,c=(n("a9cc"),n("2877")),s=Object(c["a"])(o,r,i,!1,null,"763af51e",null);e["a"]=s.exports},1460:function(t,e,n){"use strict";var r=n("cf23"),i=n.n(r);i.a},"14c3":function(t,e,n){var r=n("c6b6"),i=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var a=n.call(t,e);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"159b":function(t,e,n){var r=n("da84"),i=n("fdbc"),a=n("17c2"),o=n("9112");for(var c in i){var s=r[c],l=s&&s.prototype;if(l&&l.forEach!==a)try{o(l,"forEach",a)}catch(u){l.forEach=a}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,i=n("a640"),a=n("ae40"),o=i("forEach"),c=a("forEach");t.exports=o&&c?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"19d8":function(t,e,n){"use strict";var r=n("d47b"),i=n.n(r);i.a},"221d":function(t,e,n){"use strict";n.d(e,"g",(function(){return r})),n.d(e,"k",(function(){return i})),n.d(e,"a",(function(){return a})),n.d(e,"e",(function(){return o})),n.d(e,"h",(function(){return c})),n.d(e,"j",(function(){return s})),n.d(e,"i",(function(){return l})),n.d(e,"d",(function(){return u})),n.d(e,"f",(function(){return f})),n.d(e,"c",(function(){return h})),n.d(e,"b",(function(){return d}));var r="https://gitee.com/api/v5/user",i="/v1/cla",a="/v1/cla",o="https://gitee.com/api/v5/user/orgs",c="/v1/org-repo",s="/v1/unLinkRepository",l="/v1/signCla",u="/v1/getLinkedRepositories",f="/v1/getPersonalRepositories",h="/v1/getCompanyRepositories",d="/v1/getCompanyPersonRepositories"},4160:function(t,e,n){"use strict";var r=n("23e7"),i=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},"498a":function(t,e,n){"use strict";var r=n("23e7"),i=n("58a8").trim,a=n("c8d2");r({target:"String",proto:!0,forced:a("trim")},{trim:function(){return i(this)}})},5319:function(t,e,n){"use strict";var r=n("d784"),i=n("825a"),a=n("7b0b"),o=n("50c4"),c=n("a691"),s=n("1d80"),l=n("8aa5"),u=n("14c3"),f=Math.max,h=Math.min,d=Math.floor,p=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g,g=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,n,r){var m=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,y=r.REPLACE_KEEPS_$0,x=m?"$":"$0";return[function(n,r){var i=s(this),a=void 0==n?void 0:n[t];return void 0!==a?a.call(n,i,r):e.call(String(i),n,r)},function(t,r){if(!m&&y||"string"===typeof r&&-1===r.indexOf(x)){var a=n(e,t,this,r);if(a.done)return a.value}var s=i(t),d=String(this),p="function"===typeof r;p||(r=String(r));var v=s.global;if(v){var b=s.unicode;s.lastIndex=0}var E=[];while(1){var C=u(s,d);if(null===C)break;if(E.push(C),!v)break;var _=String(C[0]);""===_&&(s.lastIndex=l(d,o(s.lastIndex),b))}for(var L="",A=0,N=0;N<E.length;N++){C=E[N];for(var T=String(C[0]),S=f(h(c(C.index),d.length),0),k=[],O=1;O<C.length;O++)k.push(g(C[O]));var R=C.groups;if(p){var F=[T].concat(k,S,d);void 0!==R&&F.push(R);var $=String(r.apply(void 0,F))}else $=w(T,d,S,k,R,r);S>=A&&(L+=d.slice(A,S)+$,A=S+T.length)}return L+d.slice(A)}];function w(t,n,r,i,o,c){var s=r+t.length,l=i.length,u=v;return void 0!==o&&(o=a(o),u=p),e.call(c,u,(function(e,a){var c;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(s);case"<":c=o[a.slice(1,-1)];break;default:var u=+a;if(0===u)return e;if(u>l){var f=d(u/10);return 0===f?e:f<=l?void 0===i[f-1]?a.charAt(1):i[f-1]+a.charAt(1):e}c=i[u-1]}return void 0===c?"":c}))}}))},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("1d80"),i=n("5899"),a="["+i+"]",o=RegExp("^"+a+a+"*"),c=RegExp(a+a+"*$"),s=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:s(1),end:s(2),trim:s(3)}},"5d42":function(t,e,n){},"615a":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(){return window.innerHeight}},6547:function(t,e,n){var r=n("a691"),i=n("1d80"),a=function(t){return function(e,n){var a,o,c=String(i(e)),s=r(n),l=c.length;return s<0||s>=l?t?"":void 0:(a=c.charCodeAt(s),a<55296||a>56319||s+1===l||(o=c.charCodeAt(s+1))<56320||o>57343?t?c.charAt(s):a:t?c.slice(s,s+2):o-56320+(a-55296<<10)+65536)}};t.exports={codeAt:a(!1),charAt:a(!0)}},8418:function(t,e,n){"use strict";var r=n("c04e"),i=n("9bf2"),a=n("5c6c");t.exports=function(t,e,n){var o=r(e);o in t?i.f(t,o,a(0,n)):t[o]=n}},8996:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:t.createCLAClass,attrs:{id:"createCLA"}},[n("v-header"),n("div",{attrs:{id:"section"}},[n("el-col",{attrs:{offset:6,span:12}},[n("div",{staticStyle:{display:"flex","justify-content":"space-between",padding:"1rem 0"}},[n("span",[t._v("Edit your CLA")])]),n("div",t._l(t.claTags,(function(e,r){return n("el-tag",{key:e,staticClass:"pointer",attrs:{closable:"","disable-transitions":!1},on:{click:function(e){return t.chooseCla(r)},close:function(n){return t.handleClose(e)}}},[t._v(" "+t._s(e)+" ")])})),1),t.addNewFile?n("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[n("el-input",{staticStyle:{"margin-bottom":"0.5rem","margin-right":"2rem"},attrs:{size:"small",placeholder:"please input file name"},model:{value:t.newClaFileName,callback:function(e){t.newClaFileName=e},expression:"newClaFileName"}})],1):n("div",[n("el-button",{staticClass:"pointer",attrs:{size:"mini"},on:{click:function(e){return t.clickAddNewClaFile()}}},[t._v("+ add new file")])],1),n("div",[n("el-input",{staticClass:"textAreaClass",attrs:{rows:"10",readonly:!t.isEdit,type:"textarea"},on:{change:t.claTextChange},model:{value:t.claText,callback:function(e){t.claText=e},expression:"claText"}})],1),n("p",[t._v("Edit your metaData")]),n("div",t._l(t.metaTags,(function(e,r){return n("el-tag",{key:e,staticClass:"pointer",attrs:{closable:"","disable-transitions":!1},on:{click:function(e){return t.chooseMeta(r)},close:function(n){return t.closeMetaTag(e)}}},[t._v(" "+t._s(e)+" ")])})),1),t.isAddNewMetaFile?n("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[n("el-input",{staticStyle:{"margin-bottom":"0.5rem","margin-right":"2rem"},attrs:{size:"small",placeholder:"please input file name"},model:{value:t.newClaFileName,callback:function(e){t.newClaFileName=e},expression:"newClaFileName"}}),n("el-select",{staticStyle:{width:"8rem"},attrs:{size:"small",value:""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.languageOptions,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1):n("div",[n("el-button",{staticClass:"pointer",attrs:{size:"mini"},on:{click:function(e){return t.clickAddNewMetaFile()}}},[t._v("+ add new file")])],1),n("el-input",{staticClass:"textAreaClass",attrs:{rows:"10",type:"textarea"},model:{value:t.metaData,callback:function(e){t.metaData=e},expression:"metaData"}}),n("div",{staticStyle:{"margin-top":"1rem",display:"flex","justify-content":"space-between"}},[n("el-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],attrs:{size:"medium",disabled:!t.verifyNotNull(),type:"primary"},on:{click:function(e){return t.uploadCla()}}},[t._v("create CLA ")])],1)],1)],1),n("v-footer")],1)},i=[];n("99af"),n("4160"),n("c975"),n("a434"),n("b0c0"),n("ac1f"),n("5319"),n("498a"),n("159b"),n("96cf"),n("d3b7"),n("e6cf");function a(t,e,n,r,i,a,o){try{var c=t[a](o),s=c.value}catch(l){return void n(l)}c.done?e(s):Promise.resolve(s).then(r,i)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function c(t){a(o,r,i,c,s,"next",t)}function s(t){a(o,r,i,c,s,"throw",t)}c(void 0)}))}}var c=n("0418"),s=n("fd2d"),l=n("615a"),u=n("221d"),f={name:"CreateCLA",components:{"v-header":c["a"],"v-footer":s["a"]},data:function(){return{isAddNewMetaFile:!1,isEditMeta:!1,metaText:"",newMetaFileName:"",metaTags:["test","myMeta","test1","myTest","test2","test3","test4","test5","test6","test7","internationalMetadata","openLooKeng","test8"],newClaFileName:"",addNewFile:!1,isEdit:!1,claTags:[],claOptions:[],metaOptions:[{value:0,text:"{userName:{type:string,require:true},email:{type:string,require:true},}"}],fullscreenLoading:!1,claName:"",value:0,languageOptions:[{value:0,label:"english"},{value:1,label:"chinese"}],claText:"",metaData:"",createCLAClass:{height:""},platform:this.$store.state.platform,user:{userName:this.$store.state.user.userName,userId:this.$store.state.user.userId}}},methods:{clickAddNewClaFile:function(){this.addNewFile=!0,this.claText="",this.isEdit=!0},clickAddNewMetaFile:function(){this.isAddNewMetaFile=!0,this.metaText="",this.isEditMeta=!0},chooseMeta:function(t){console.log("chooseMeta",t),this.metaData=this.metaOptions[0].text,this.isEditMeta=!1,this.isAddNewMetaFile=!1,this.newMetaFileName=""},chooseCla:function(t){console.log("chooseCla",t),this.claText=this.claOptions[t].text,this.isEdit=!1,this.addNewFile=!1,this.newClaFileName=""},handleClose:function(t){this.claTags.splice(this.claTags.indexOf(t),1)},closeMetaTag:function(t){this.metaTags.splice(this.metaTags.indexOf(t),1)},getCLA:function(){var t=this;console.log("getCLA"),this.$axios({url:"/api"+u["a"],headers:{access_token:this.$store.state.access_token,refresh_token:this.$store.state.refresh_token}}).then((function(e){console.log(e),e.data.length&&(t.claOptions=[],t.claTags=[],e.data.forEach((function(e,n){t.claTags.push(e.name),t.claOptions.push({value:n,label:e.name,id:e.id,text:e.text,language:e.language})})))})).catch((function(t){console.log(t)}))},claTextChange:function(t){console.log(t)},verifyNotNull:function(){return!this.addNewFile||""!==this.newClaFileName.trim()&&""!==this.claText.trim()},uploadCla:function(){var t=this;return o(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.fullscreenLoading=!0,n={name:t.claName,text:t.claText,language:t.languageOptions[t.value].label,submitter:"".concat(t.platform,"/").concat(t.user.userName)},console.log(n),t.$axios({url:"/api"+u["k"],method:"post",data:n}).then((function(e){console.log(e),200===e.status?(t.fullscreenLoading=!1,t.$message.success("succeed"),setTimeout((function(){t.$router.replace("/home")}),2e3)):(t.fullscreenLoading=!1,t.$message.error("failed"))})).catch((function(t){console.log(t)}));case 4:case"end":return e.stop()}}),e)})))()},setClientHeight:function(){var t=this;this.$nextTick((function(){console.log(l["a"]()),console.log(document.getElementById("createCLA").offsetHeight),l["a"]()>document.getElementById("createCLA").offsetHeight?t.createCLAClass.height=l["a"]()+"px":t.createCLAClass.height=document.getElementById("createCLA").offsetHeight}))},copy:function(){console.log(this.claText),this.init()},init:function(){var t=this.claText.replace(/\r\n/g,"<br/>").replace(/\n/g,"<br/>").replace(/\s/g," ");console.log(t),this.metaData=t}},created:function(){this.getCLA()},mounted:function(){this.setClientHeight()}};window.onresize=function(){l["a"]()>document.getElementById("createCLA").offsetHeight&&(document.getElementById("createCLA").style.height=l["a"]()+"px")};var h=f,d=(n("19d8"),n("2877")),p=Object(d["a"])(h,r,i,!1,null,"8eae6486",null);e["default"]=p.exports},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9263:function(t,e,n){"use strict";var r=n("ad6d"),i=n("9f7f"),a=RegExp.prototype.exec,o=String.prototype.replace,c=a,s=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=i.UNSUPPORTED_Y||i.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],f=s||u||l;f&&(c=function(t){var e,n,i,c,f=this,h=l&&f.sticky,d=r.call(f),p=f.source,v=0,g=t;return h&&(d=d.replace("y",""),-1===d.indexOf("g")&&(d+="g"),g=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(p="(?: "+p+")",g=" "+g,v++),n=new RegExp("^(?:"+p+")",d)),u&&(n=new RegExp("^"+p+"$(?!\\s)",d)),s&&(e=f.lastIndex),i=a.call(h?n:f,g),h?i?(i.input=i.input.slice(v),i[0]=i[0].slice(v),i.index=f.lastIndex,f.lastIndex+=i[0].length):f.lastIndex=0:s&&i&&(f.lastIndex=f.global?i.index+i[0].length:e),u&&i&&i.length>1&&o.call(i[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(i[c]=void 0)})),i}),t.exports=c},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag",l="object"===typeof t,u=e.regeneratorRuntime;if(u)l&&(t.exports=u);else{u=e.regeneratorRuntime=l?t.exports:{},u.wrap=w;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",v={},g={};g[o]=function(){return this};var m=Object.getPrototypeOf,y=m&&m(m(R([])));y&&y!==r&&i.call(y,o)&&(g=y);var x=_.prototype=E.prototype=Object.create(g);C.prototype=x.constructor=_,_.constructor=C,_[s]=C.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===C||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(x),t},u.awrap=function(t){return{__await:t}},L(A.prototype),A.prototype[c]=function(){return this},u.AsyncIterator=A,u.async=function(t,e,n,r){var i=new A(w(t,e,n,r));return u.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(x),x[s]="Generator",x[o]=function(){return this},x.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},u.values=R,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,i){return c.type="throw",c.arg=t,e.next=r,i&&(e.method="next",e.arg=n),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=i.call(o,"catchLoc"),l=i.call(o,"finallyLoc");if(s&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;k(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:R(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function w(t,e,n,r){var i=e&&e.prototype instanceof E?e:E,a=Object.create(i.prototype),o=new O(r||[]);return a._invoke=N(t,n,o),a}function b(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function E(){}function C(){}function _(){}function L(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function A(t){function e(n,r,a,o){var c=b(t[n],t,r);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"===typeof l&&i.call(l,"__await")?Promise.resolve(l.__await).then((function(t){e("next",t,a,o)}),(function(t){e("throw",t,a,o)})):Promise.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,o)}))}o(c.arg)}var n;function r(t,r){function i(){return new Promise((function(n,i){e(t,r,n,i)}))}return n=n?n.then(i,i):i()}this._invoke=r}function N(t,e,n){var r=f;return function(i,a){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw a;return F()}n.method=i,n.arg=a;while(1){var o=n.delegate;if(o){var c=T(o,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var s=b(t,e,n);if("normal"===s.type){if(r=n.done?p:h,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=p,n.method="throw",n.arg=s.arg)}}}function T(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,T(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=b(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,v;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function R(t){if(t){var e=t[o];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){while(++r<t.length)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}return{next:F}}function F(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},"99af":function(t,e,n){"use strict";var r=n("23e7"),i=n("d039"),a=n("e8b5"),o=n("861d"),c=n("7b0b"),s=n("50c4"),l=n("8418"),u=n("65f0"),f=n("1dde"),h=n("b622"),d=n("2d00"),p=h("isConcatSpreadable"),v=9007199254740991,g="Maximum allowed index exceeded",m=d>=51||!i((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),y=f("concat"),x=function(t){if(!o(t))return!1;var e=t[p];return void 0!==e?!!e:a(t)},w=!m||!y;r({target:"Array",proto:!0,forced:w},{concat:function(t){var e,n,r,i,a,o=c(this),f=u(o,0),h=0;for(e=-1,r=arguments.length;e<r;e++)if(a=-1===e?o:arguments[e],x(a)){if(i=s(a.length),h+i>v)throw TypeError(g);for(n=0;n<i;n++,h++)n in a&&l(f,h,a[n])}else{if(h>=v)throw TypeError(g);l(f,h++,a)}return f.length=h,f}})},"9f7f":function(t,e,n){"use strict";var r=n("d039");function i(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a434:function(t,e,n){"use strict";var r=n("23e7"),i=n("23cb"),a=n("a691"),o=n("50c4"),c=n("7b0b"),s=n("65f0"),l=n("8418"),u=n("1dde"),f=n("ae40"),h=u("splice"),d=f("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,v=Math.min,g=9007199254740991,m="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!h||!d},{splice:function(t,e){var n,r,u,f,h,d,y=c(this),x=o(y.length),w=i(t,x),b=arguments.length;if(0===b?n=r=0:1===b?(n=0,r=x-w):(n=b-2,r=v(p(a(e),0),x-w)),x+n-r>g)throw TypeError(m);for(u=s(y,r),f=0;f<r;f++)h=w+f,h in y&&l(u,f,y[h]);if(u.length=r,n<r){for(f=w;f<x-r;f++)h=f+r,d=f+n,h in y?y[d]=y[h]:delete y[d];for(f=x;f>x-r+n;f--)delete y[f-1]}else if(n>r)for(f=x-r;f>w;f--)h=f+r-1,d=f+n-1,h in y?y[d]=y[h]:delete y[d];for(f=0;f<n;f++)y[f+w]=arguments[f+2];return y.length=x-r+n,u}})},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},a9cc:function(t,e,n){"use strict";var r=n("5d42"),i=n.n(r);i.a},ac1f:function(t,e,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b0c0:function(t,e,n){var r=n("83ab"),i=n("9bf2").f,a=Function.prototype,o=a.toString,c=/^\s*function ([^ (]*)/,s="name";r&&!(s in a)&&i(a,s,{configurable:!0,get:function(){try{return o.call(this).match(c)[1]}catch(t){return""}}})},c8d2:function(t,e,n){var r=n("d039"),i=n("5899"),a="​᠎";t.exports=function(t){return r((function(){return!!i[t]()||a[t]()!=a||i[t].name!==t}))}},c975:function(t,e,n){"use strict";var r=n("23e7"),i=n("4d64").indexOf,a=n("a640"),o=n("ae40"),c=[].indexOf,s=!!c&&1/[1].indexOf(1,-0)<0,l=a("indexOf"),u=o("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:s||!l||!u},{indexOf:function(t){return s?c.apply(this,arguments)||0:i(this,t,arguments.length>1?arguments[1]:void 0)}})},cf23:function(t,e,n){},d47b:function(t,e,n){},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),i=n("d039"),a=n("b622"),o=n("9263"),c=n("9112"),s=a("species"),l=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),f=a("replace"),h=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),d=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,f){var p=a(t),v=!i((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),g=v&&!i((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return e=!0,null},n[p](""),!e}));if(!v||!g||"replace"===t&&(!l||!u||h)||"split"===t&&!d){var m=/./[p],y=n(p,""[t],(function(t,e,n,r,i){return e.exec===o?v&&!i?{done:!0,value:m.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:h}),x=y[0],w=y[1];r(String.prototype,t,x),r(RegExp.prototype,p,2==e?function(t,e){return w.call(t,this,e)}:function(t){return w.call(t,this)})}f&&c(RegExp.prototype[p],"sham",!0)}},fd2d:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",{staticClass:"footer"},[n("el-col",{staticClass:"left",attrs:{span:8}},[n("span",[t._v("© 2020 HUAWEI SE")])]),n("el-col",{staticClass:"center",attrs:{span:8}},[n("span",[t._v("Made with "),n("svg-icon",{attrs:{"icon-class":"heart"}}),t._v(" from the GitHub team at HUAWEI ")],1)]),n("el-col",{staticClass:"right",attrs:{span:8}},[n("div",[n("span",{staticClass:"pointer"},[t._v("Terms of Service & Privacy Policy")]),n("span",{staticClass:"pointer"},[n("svg-icon",{attrs:{id:"github_logo","icon-class":"github"}}),t._v("Open an issue")],1)])])],1)},i=[],a={name:"Footer"},o=a,c=(n("1460"),n("2877")),s=Object(c["a"])(o,r,i,!1,null,"bc0631b2",null);e["a"]=s.exports}}]);
//# sourceMappingURL=chunk-0fdf7b66.9bede07a.js.map