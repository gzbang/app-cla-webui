(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b1194072"],{"0054":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-row",[r("el-col",{staticStyle:{padding:"3rem"},attrs:{span:8,offset:8}},[r("el-row",{attrs:{gutter:20}},[r("el-col",[r("svg-icon",{staticClass:"loginIcon",attrs:{"icon-class":"giteelogin"},on:{click:function(e){return t.login("gitee")}}}),r("svg-icon",{staticClass:"loginIcon",attrs:{"icon-class":"githublogin"},on:{click:function(e){return t.login("github")}}})],1)],1),r("el-row",{staticStyle:{margin:"3rem 0"},attrs:{gutter:20}},[t._v(" Select the platform you want to authorize to log in ")])],1)],1)],1)},o=[],i=r("5530"),c=r("2f62"),a={name:"RepoSelect",data:function(){return{platform:"",platformOption:[{value:"gitee",label:"gitee"},{value:"github",label:"github"}],org:"",orgOption:[{value:"gitee",label:"gitee"},{value:"github",label:"github"}],repo:"",repoOption:[{value:"gitee",label:"gitee"},{value:"github",label:"github"}]}},methods:Object(i["a"])(Object(i["a"])({},Object(c["b"])(["setPlatformAct"])),{},{submit:function(){console.log("submit")},login:function(t){console.log(t),"gitee"===t?(this.setPlatformAct("gitee"),window.location.href="https://gitee.com/oauth/authorize?client_id=2632e89d3dfb17ce941d2d2b45efc6f235afb4941ddb67578adda83aa33ab6a2&redirect_uri=http://139.159.224.207:60031/api/v1/login?platform=gitee&response_type=code&scope=user_info%20groups%20emails"):(this.setPlatformAct("github"),window.location.href="https://github.com/login/oauth/authorize?client_id=d86f4915398dad23bffc&redirect_uri=http://localhost:8080/home&scope=user,user:email")}})},f=a,u=(r("5150"),r("2877")),s=Object(u["a"])(f,n,o,!1,null,"23302c5a",null);e["default"]=s.exports},"057f":function(t,e,r){var n=r("fc6a"),o=r("241c").f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return o(t)}catch(e){return c.slice()}};t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?a(t):o(n(t))}},"4de4":function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").filter,i=r("1dde"),c=r("ae40"),a=i("filter"),f=c("filter");n({target:"Array",proto:!0,forced:!a||!f},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},5150:function(t,e,r){"use strict";var n=r("f09a"),o=r.n(n);o.a},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"746f":function(t,e,r){var n=r("428f"),o=r("5135"),i=r("e538"),c=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||c(e,t,{value:i.f(t)})}},a4d3:function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),i=r("d066"),c=r("c430"),a=r("83ab"),f=r("4930"),u=r("fdbf"),s=r("d039"),l=r("5135"),b=r("e8b5"),g=r("861d"),p=r("825a"),d=r("7b0b"),h=r("fc6a"),y=r("c04e"),v=r("5c6c"),m=r("7c73"),O=r("df75"),w=r("241c"),j=r("057f"),P=r("7418"),S=r("06cf"),k=r("9bf2"),_=r("d1e7"),D=r("9112"),E=r("6eeb"),N=r("5692"),A=r("f772"),J=r("d012"),x=r("90e3"),z=r("b622"),C=r("e538"),I=r("746f"),F=r("d44e"),T=r("69f3"),Q=r("b727").forEach,R=A("hidden"),W="Symbol",$="prototype",q=z("toPrimitive"),B=T.set,G=T.getterFor(W),H=Object[$],K=o.Symbol,L=i("JSON","stringify"),M=S.f,U=k.f,V=j.f,X=_.f,Y=N("symbols"),Z=N("op-symbols"),tt=N("string-to-symbol-registry"),et=N("symbol-to-string-registry"),rt=N("wks"),nt=o.QObject,ot=!nt||!nt[$]||!nt[$].findChild,it=a&&s((function(){return 7!=m(U({},"a",{get:function(){return U(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=M(H,e);n&&delete H[e],U(t,e,r),n&&t!==H&&U(H,e,n)}:U,ct=function(t,e){var r=Y[t]=m(K[$]);return B(r,{type:W,tag:t,description:e}),a||(r.description=e),r},at=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof K},ft=function(t,e,r){t===H&&ft(Z,e,r),p(t);var n=y(e,!0);return p(r),l(Y,n)?(r.enumerable?(l(t,R)&&t[R][n]&&(t[R][n]=!1),r=m(r,{enumerable:v(0,!1)})):(l(t,R)||U(t,R,v(1,{})),t[R][n]=!0),it(t,n,r)):U(t,n,r)},ut=function(t,e){p(t);var r=h(e),n=O(r).concat(pt(r));return Q(n,(function(e){a&&!lt.call(r,e)||ft(t,e,r[e])})),t},st=function(t,e){return void 0===e?m(t):ut(m(t),e)},lt=function(t){var e=y(t,!0),r=X.call(this,e);return!(this===H&&l(Y,e)&&!l(Z,e))&&(!(r||!l(this,e)||!l(Y,e)||l(this,R)&&this[R][e])||r)},bt=function(t,e){var r=h(t),n=y(e,!0);if(r!==H||!l(Y,n)||l(Z,n)){var o=M(r,n);return!o||!l(Y,n)||l(r,R)&&r[R][n]||(o.enumerable=!0),o}},gt=function(t){var e=V(h(t)),r=[];return Q(e,(function(t){l(Y,t)||l(J,t)||r.push(t)})),r},pt=function(t){var e=t===H,r=V(e?Z:h(t)),n=[];return Q(r,(function(t){!l(Y,t)||e&&!l(H,t)||n.push(Y[t])})),n};if(f||(K=function(){if(this instanceof K)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=x(t),r=function(t){this===H&&r.call(Z,t),l(this,R)&&l(this[R],e)&&(this[R][e]=!1),it(this,e,v(1,t))};return a&&ot&&it(H,e,{configurable:!0,set:r}),ct(e,t)},E(K[$],"toString",(function(){return G(this).tag})),E(K,"withoutSetter",(function(t){return ct(x(t),t)})),_.f=lt,k.f=ft,S.f=bt,w.f=j.f=gt,P.f=pt,C.f=function(t){return ct(z(t),t)},a&&(U(K[$],"description",{configurable:!0,get:function(){return G(this).description}}),c||E(H,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!f,sham:!f},{Symbol:K}),Q(O(rt),(function(t){I(t)})),n({target:W,stat:!0,forced:!f},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=K(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),n({target:"Object",stat:!0,forced:!f,sham:!a},{create:st,defineProperty:ft,defineProperties:ut,getOwnPropertyDescriptor:bt}),n({target:"Object",stat:!0,forced:!f},{getOwnPropertyNames:gt,getOwnPropertySymbols:pt}),n({target:"Object",stat:!0,forced:s((function(){P.f(1)}))},{getOwnPropertySymbols:function(t){return P.f(d(t))}}),L){var dt=!f||s((function(){var t=K();return"[null]"!=L([t])||"{}"!=L({a:t})||"{}"!=L(Object(t))}));n({target:"JSON",stat:!0,forced:dt},{stringify:function(t,e,r){var n,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(n=e,(g(e)||void 0!==t)&&!at(t))return b(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!at(e))return e}),o[1]=e,L.apply(null,o)}})}K[$][q]||D(K[$],q,K[$].valueOf),F(K,W),J[R]=!0},b64b:function(t,e,r){var n=r("23e7"),o=r("7b0b"),i=r("df75"),c=r("d039"),a=c((function(){i(1)}));n({target:"Object",stat:!0,forced:a},{keys:function(t){return i(o(t))}})},dbb4:function(t,e,r){var n=r("23e7"),o=r("83ab"),i=r("56ef"),c=r("fc6a"),a=r("06cf"),f=r("8418");n({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,r,n=c(t),o=a.f,u=i(n),s={},l=0;while(u.length>l)r=o(n,e=u[l++]),void 0!==r&&f(s,e,r);return s}})},e439:function(t,e,r){var n=r("23e7"),o=r("d039"),i=r("fc6a"),c=r("06cf").f,a=r("83ab"),f=o((function(){c(1)})),u=!a||f;n({target:"Object",stat:!0,forced:u,sham:!a},{getOwnPropertyDescriptor:function(t,e){return c(i(t),e)}})},e538:function(t,e,r){var n=r("b622");e.f=n},f09a:function(t,e,r){}}]);
//# sourceMappingURL=chunk-b1194072.ef31a4f2.js.map