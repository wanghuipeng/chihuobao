webpackJsonp([34],{Ov26:function(e,t,i){t=e.exports=i("FZ+f")(!1),t.push([e.i,"\n.el-header[data-v-0d22cd47] {\n  height: 50px !important;\n  line-height: 50px;\n  background: #404040;\n}\n.el-container[data-v-0d22cd47] {\n  height: 100%;\n}\n.el-aside[data-v-0d22cd47] {\n  background: #404040;\n  width: 230px !important;\n}\n.el-aside .el-menu[data-v-0d22cd47] {\n    border-right: none;\n}\n.el-submenu .el-menu-item[data-v-0d22cd47] {\n  text-indent: 14px;\n}\n.el-main[data-v-0d22cd47] {\n  background: #eee;\n  padding: 0;\n}\n.container[data-v-0d22cd47] {\n  width: 100%;\n  height: 100%;\n}\n",""])},YUTp:function(e,t,i){var a=i("Ov26");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i("rjj0")("75639aa6",a,!0)},xGHU:function(e,t,i){"use strict";function a(e){i("YUTp")}Object.defineProperty(t,"__esModule",{value:!0});var n=i("Dd8w"),s=i.n(n),c=i("pN2o"),d=i("NYxO"),o={data:function(){return{defaultActive:"2"}},computed:s()({},Object(d.c)("admin",["adminInfo","reLogin"])),watch:{reLogin:function(e){e&&(this.$router.push("/admin"),this.setReLogin(!1))}},created:function(){switch(this.$router.currentRoute.path.split("/")[2]){case"home":this.defaultActive="1";break;case"user":this.defaultActive="2";break;case"audit":this.defaultActive="3-1";break;case"shops":this.defaultActive="3-2";break;case"classification":this.defaultActive="4";break;case"shopsClassification":this.defaultActive="4-1";break;case"goodsClassification":this.defaultActive="4-2";break;case"statistics":this.defaultActive="5";break;case"administrator":this.defaultActive="6";break;default:this.defaultActive="2"}},methods:s()({},Object(d.d)({setShopType:"admin/SET_SHOPTYPE",setReLogin:"admin/SET_RE_LOGIN"}),{getShopType:function(){var e=this;Object(c.h)().then(function(t){e.setShopType(t.data)})},close:function(){this.loginVisible=!1}})},r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-container",[i("el-aside",[i("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":e.defaultActive,"background-color":"#404040","active-text-color":"#108ee9","text-color":"#fff",router:!0}},[i("el-menu-item",{attrs:{index:"2",route:"user"}},[i("i",{staticClass:"el-icon-menu"}),e._v(" "),i("span",[e._v("用户管理")])]),e._v(" "),i("el-submenu",{attrs:{index:"3"}},[i("template",{slot:"title"},[i("i",{staticClass:"el-icon-setting"}),e._v(" "),i("span",[e._v("商铺管理")])]),e._v(" "),i("el-menu-item",{attrs:{index:"3-1",route:"audit"}},[e._v("商铺审核")]),e._v(" "),i("el-menu-item",{attrs:{index:"3-2",route:"shops"}},[e._v("全部商铺")])],2),e._v(" "),i("el-menu-item",{attrs:{index:"4",route:"classification"}},[i("i",{staticClass:"el-icon-setting"}),e._v(" "),i("span",[e._v("分类管理")])]),e._v(" "),1===e.adminInfo.flagSuper?i("el-menu-item",{attrs:{index:"6",route:"administrator"}},[i("i",{staticClass:"el-icon-setting"}),e._v(" "),i("span",[e._v("管理员")])]):e._e()],1)],1),e._v(" "),i("el-main",[i("router-view")],1)],1)},l=[],u={render:r,staticRenderFns:l},v=u,h=i("VU/8"),f=a,p=h(o,v,!1,f,"data-v-0d22cd47",null);t.default=p.exports}});