(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d60b3d3"],{"0c2e":function(t,s,i){"use strict";var a=i("bfbc"),n=i.n(a);n.a},"14e2":function(t,s,i){t.exports=i.p+"img/transactions_icon.852711eb.svg"},"393c":function(t,s,i){t.exports=i.p+"img/settings_icon.0e8c5d1a.svg"},7875:function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"sidebar-category sidebar-category-visible"},[a("div",{staticClass:"category-content no-padding"},[a("br"),a("ul",{staticClass:"navigation navigation-main navigation-accordion"},[a("li",{class:{active:t.isActive("dashboard")},attrs:{id:"dash-nav"},on:{click:t.closePanel}},[a("router-link",{attrs:{to:"/"}},[a("img",{staticClass:"nav-menu-icon",attrs:{src:i("b4fc")}}),a("span",[t._v("Dashboard")])])],1),a("li",{class:{active:t.isActive("transactions")},on:{click:t.closePanel}},[a("router-link",{attrs:{to:"/transactions"}},[a("img",{staticClass:"nav-menu-icon",attrs:{src:i("14e2")}}),a("span",[t._v("Transactions")])])],1),a("li",{class:{active:t.isActive("wallet")},on:{click:t.closePanel}},[a("router-link",{attrs:{to:"/wallet"}},[a("img",{staticClass:"nav-menu-icon",attrs:{src:i("e0da")}}),a("span",[t._v("Wallet")])])],1),a("li",{class:{active:t.isActive("products")},on:{click:t.closePanel}},[a("router-link",{attrs:{to:"/products"}},[a("img",{staticClass:"nav-menu-icon",attrs:{src:i("bc79")}}),a("span",[t._v("Products")])])],1),a("li",{class:{active:t.isActive("rates")},on:{click:t.closePanel}},[a("router-link",{attrs:{to:"/rates"}},[a("img",{staticClass:"nav-menu-icon",attrs:{src:i("ed5b")}}),a("span",[t._v("Rates")])])],1),a("li",{class:{active:t.isActive("settings")},on:{click:t.closePanel}},[a("router-link",{attrs:{to:"/settings"}},[a("img",{staticClass:"nav-menu-icon",attrs:{src:i("393c")}}),a("span",[t._v("Settings")])])],1),a("li",{class:{active:t.isActive("logout")},on:{click:t.logout}},[a("router-link",{attrs:{to:"/"}},[a("i",{staticClass:"nav-menu-icon icon-switch2 logout-icon-custom-fix"}),a("span",[t._v("Logout")])])],1)])])])])},n=[],c={name:"slide-out-panel",data:function(){return{}},methods:{closePanel:function(){this.$emit("closePanel",{})},isActive:function(t){if("/"!==this.$route.path&&-1===this.$route.path.indexOf("trade"))return $("#dash-nav").removeClass("active"),-1!==this.$route.path.indexOf(t);$("#dash-nav").addClass("active")},logout:function(){this.$store.dispatch("SET_TOKEN",null),this.$store.dispatch("SET_USER",null),this.$cookies.remove("token"),this.$cookies.remove("user"),this.$router.push("/login")}}},e=c,o=(i("0c2e"),i("2877")),r=Object(o["a"])(e,a,n,!1,null,"ff87f5e4",null);s["default"]=r.exports},b4fc:function(t,s,i){t.exports=i.p+"img/overview_icon.54d22558.svg"},bc79:function(t,s,i){t.exports=i.p+"img/products_icon.faadf56f.svg"},bfbc:function(t,s,i){},e0da:function(t,s,i){t.exports=i.p+"img/wallet_icon.0f016446.svg"},ed5b:function(t,s,i){t.exports=i.p+"img/rates_icon.2ae7673d.svg"}}]);
//# sourceMappingURL=chunk-4d60b3d3.3b5507cf.js.map