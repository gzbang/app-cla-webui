(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41ce1963"],{"399d":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-tabs",{model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[a("el-tab-pane",{staticStyle:{"margin-top":"1rem"},attrs:{label:"inactive",name:"first"}},[a("div",{staticClass:"tableStyle",staticStyle:{"margin-bottom":"1rem"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.inactiveData,align:"center"}},[a("el-table-column",{attrs:{prop:"name",label:"Name"}}),a("el-table-column",{attrs:{prop:"email",label:"Email"}}),a("el-table-column",{attrs:{label:"status",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-row",{staticClass:"mySwitch"},[a("el-switch",{staticClass:"mySwitch",attrs:{disabled:t.row.enabled,width:"3rem","active-color":"#409EFF","active-text":"active","inactive-text":"inactive","inactive-color":"#EBEEF5"},on:{change:function(a){return e.changeActtive(t.row.cla_org_id,t.row.email,t.row.enabled)}},model:{value:t.row.enabled,callback:function(a){e.$set(t.row,"enabled",a)},expression:"scope.row.enabled"}}),a("el-button",{staticStyle:{"margin-left":"1rem"},attrs:{type:"danger",size:"mini"},on:{click:function(a){return e.deleteEmployee(t.row.cla_org_id,t.row.email,t.row.enabled)}}},[e._v("Delete ")])],1)]}}])})],1)],1)]),a("el-tab-pane",{staticStyle:{"margin-top":"1rem"},attrs:{label:"active",name:"second"}},[a("div",{staticClass:"tableStyle",staticStyle:{"margin-bottom":"1rem"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.activeData,align:"center"}},[a("el-table-column",{attrs:{prop:"name",label:"Name"}}),a("el-table-column",{attrs:{prop:"email",label:"Email"}}),a("el-table-column",{attrs:{label:"status",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-row",{staticClass:"mySwitch"},[a("el-switch",{staticClass:"mySwitch",attrs:{width:"3rem","active-color":"#409EFF","active-text":"active","inactive-text":"inactive","inactive-color":"#EBEEF5"},on:{change:function(a){return e.changeActtive(t.row.cla_org_id,t.row.email,t.row.enabled)}},model:{value:t.row.enabled,callback:function(a){e.$set(t.row,"enabled",a)},expression:"scope.row.enabled"}}),a("el-button",{staticStyle:{"margin-left":"1rem"},attrs:{type:"danger",size:"mini"},on:{click:function(a){return e.deleteEmployee(t.row.cla_org_id,t.row.email,t.row.enabled)}}},[e._v("删除 ")])],1)]}}])})],1)],1)])],1)],1)},l=[],n=(a("4160"),a("159b"),a("221d")),i={name:"EmployeeList",data:function(){return{active:"first",inactiveData:[],activeData:[]}},computed:{orgValue:function(){return console.log(this.$store.state.loginInfo.orgValue),this.$store.state.loginInfo.orgValue},userInfo:function(){return console.log(this.$store.state.loginInfo.userInfo),this.$store.state.loginInfo.userInfo}},methods:{deleteEmployee:function(e,t,a){var o=this,l={cla_org_id:e,email:t,enabled:a};this.$axios({url:"/api".concat(n["enableEmployee"]),method:"delete",data:l,headers:{token:this.userInfo[this.orgValue].token}}).then((function(e){console.log(e),o.getEmployee()})).catch((function(e){console.log(e)}))},changeActtive:function(e,t,a){var o=this;console.log(e,t,a);var l={cla_org_id:e,email:t,enabled:a};this.$axios({url:"/api".concat(n["enableEmployee"]),method:"put",data:l,headers:{token:this.userInfo[this.orgValue].token}}).then((function(e){console.log(e),o.getEmployee()})).catch((function(e){console.log(e)}))},getEmployee:function(){var e=this,t={platform:this.userInfo[this.orgValue].platform,repo_id:this.userInfo[this.orgValue].repo_id,org_id:this.userInfo[this.orgValue].org_id,corporation_email:this.userInfo[this.orgValue].email};this.$axios({url:"/api"+n["queryEmployee"],params:t,headers:{token:this.userInfo[this.orgValue].token}}).then((function(t){e.inactiveData=[],e.activeData=[],console.log(t),t.data.forEach((function(t,a){!1===t.enabled?e.inactiveData.push(t):e.activeData.push(t)}))})).catch((function(e){console.log(e)}))}},created:function(){this.getEmployee()}},c=i,r=(a("d81a"),a("2877")),s=Object(r["a"])(c,o,l,!1,null,null,null);t["default"]=s.exports},d6da:function(e,t,a){},d81a:function(e,t,a){"use strict";var o=a("d6da"),l=a.n(o);l.a}}]);
//# sourceMappingURL=chunk-41ce1963.5cbff9ce.js.map