(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["notifications.routes","chunk-39915385"],{"0373":function(t,a,e){t.exports=e.p+"img/airtime_to_cash.2a222e34.svg"},"0c6f":function(t,a,e){},"277f":function(t,a,e){"use strict";e.d(a,"a",(function(){return s})),e.d(a,"e",(function(){return r})),e.d(a,"b",(function(){return o})),e.d(a,"d",(function(){return c})),e.d(a,"c",(function(){return l}));e("96cf");var n=e("3b8d"),i=e("adb5");function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return new Promise((function(a,e){try{i["a"].get(t||"/user/allNotification").then((function(t){a(t)})).catch((function(t){e(t.response)})).finally((function(){}))}catch(n){console.log("error",n)}}))}function r(t){return new Promise((function(t,a){try{i["a"].get("/user/unreadNotification").then((function(a){t(a)})).catch((function(t){a(t.response)})).finally((function(){}))}catch(e){console.log("error",e)}}))}function c(t){return new Promise((function(a,e){try{i["a"].post("/user/readNotification/"+t).then((function(t){a(t)})).catch((function(t){e(t.response)})).finally((function(){}))}catch(n){console.log("error",n)}}))}function o(){return new Promise((function(t,a){try{i["a"].get("/user/notificationSummary").then((function(a){t(a)})).catch((function(t){a(t.response)})).finally((function(){}))}catch(e){console.log("error",e)}}))}function l(){return d.apply(this,arguments)}function d(){return d=Object(n["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i["a"].get("/user/readallnotification");case 2:return a=t.sent,t.abrupt("return",a);case 4:case"end":return t.stop()}}),t)}))),d.apply(this,arguments)}},"2d63":function(t,a,e){t.exports=e.p+"img/Dispute.83e51c98.svg"},"45df":function(t,a,e){"use strict";var n=e("7a4b"),i=e.n(n);i.a},"47de":function(t,a,e){t.exports=e.p+"img/Patricia_icon.97ad3c0c.svg"},"504c":function(t,a,e){var n=e("9e1e"),i=e("0d58"),s=e("6821"),r=e("52a7").f;t.exports=function(t){return function(a){var e,c=s(a),o=i(c),l=o.length,d=0,u=[];while(l>d)e=o[d++],n&&!r.call(c,e)||u.push(t?[e,c[e]]:c[e]);return u}}},"5fd4":function(t,a,e){"use strict";e.d(a,"a",(function(){return s})),e.d(a,"c",(function(){return c})),e.d(a,"b",(function(){return l}));e("96cf");var n=e("3b8d"),i=e("adb5");function s(){return r.apply(this,arguments)}function r(){return r=Object(n["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i["a"].get("/dashboard");case 2:return a=t.sent,t.abrupt("return",a);case 4:case"end":return t.stop()}}),t)}))),r.apply(this,arguments)}function c(){return o.apply(this,arguments)}function o(){return o=Object(n["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i["a"].get("/card/sell/itunes/uuid");case 2:return a=t.sent,t.abrupt("return",a);case 4:case"end":return t.stop()}}),t)}))),o.apply(this,arguments)}function l(){return d.apply(this,arguments)}function d(){return d=Object(n["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i["a"].get("/card/sell/all");case 2:return a=t.sent,t.abrupt("return",a);case 4:case"end":return t.stop()}}),t)}))),d.apply(this,arguments)}},"6f9c":function(t,a,e){t.exports=e.p+"img/withdraw.b34d8e48.svg"},7776:function(t,a,e){"use strict";var n=e("a0d3"),i=e.n(n);i.a},"7a4b":function(t,a,e){},8615:function(t,a,e){var n=e("5ca1"),i=e("504c")(!1);n(n.S,"Object",{values:function(t){return i(t)}})},"8bef":function(t,a,e){t.exports=e.p+"img/Naira_withdraw.02687708.svg"},"9edd":function(t,a,e){t.exports=e.p+"img/dataair.f031de89.svg"},a0d3:function(t,a,e){},aa45:function(t,a,e){"use strict";var n=e("0c6f"),i=e.n(n);i.a},b006:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"no-margin",attrs:{id:"refillPage"}},[n("br"),n("br"),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-1"}),n("div",{staticClass:"col-md-10 mb-20"},[n("div",{staticClass:"dashboard-wallet primary-bg pt-0 pb-20 pr-20 pl-20"},[n("div",{staticClass:"row cards p-20"},[n("h2",{staticClass:"text-primary text-bold pt-10"},[t._v("Refill")]),n("br"),n("gift-card",{attrs:{to:"/refill/airtime",name:"Airtime & Data Subscription",btnText:"Buy Now",src:e("9edd")}}),n("gift-card",{attrs:{to:"/refill/cable-payment",name:"Cable TV / Internet Subscription",btnText:"Buy Now",src:e("de207")}}),n("gift-card",{attrs:{to:"/refill/airtime-to-cash",name:"Airtime To Cash",src:e("0373")}}),n("gift-card",{attrs:{to:"/refill/cable-payment",name:"Electricity / Utility Bills Payment",src:e("9edd"),isUnavailable:!0}})],1)])]),n("br")]),n("div",{staticClass:"col-md-1"})])},i=[],s=e("d16b"),r=(e("5fd4"),function(){return e.e("chunk-0e11cead").then(e.bind(null,"ac74"))}),c=function(){return e.e("chunk-145cffda").then(e.bind(null,"6b3b"))},o={components:{"p-button-svg":r,"p-button":c,"gift-card":s["default"]},mounted:function(){document.getElementById("refillPage").scrollIntoView(!0)}},l=o,d=(e("aa45"),e("2877")),u=Object(d["a"])(l,n,i,!1,null,"30173285",null);a["default"]=u.exports},d16b:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-md-4 col-sm-6 animated zoomIn delay-5s"},[e("div",{staticClass:"panel text-center",class:{unavailable:t.isUnavailable}},[e("div",{staticClass:"unavailable-text"},[t._v("Coming Soon!")]),e("div",{staticClass:"panel-body"},[e("router-link",{attrs:{to:t.to}},[e("div",{staticClass:"content-group-sm position-relative"},[e("img",{staticClass:"img-responsive",attrs:{src:t.src,alt:""}}),e("br"),e("h2",{staticClass:"mt-20 mb-10 text-bold"},[t._v(t._s(t.name))]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-8 col-xs-offset-2 mt-20"},[t.to?[e("router-link",{staticClass:"btn btn-primary btn-trade",attrs:{to:t.to}},[t._v("\n                                    "+t._s(t.btnText?t.btnText:"Trade Now")+"\n                                ")])]:t._e(),t.onSelect?[e("a",{staticClass:"btn btn-primary btn-trade",on:{click:t.start}},[t._v("Get Started")])]:t._e()],2)])])])],1)])])},i=[],s=function(){return e.e("chunk-145cffda").then(e.bind(null,"6b3b"))},r={props:["src","name","to","isUnavailable","onSelect","btnText"],methods:{start:function(){this.onSelect()}},components:{"p-button":s}},c=r,o=(e("45df"),e("2877")),l=Object(o["a"])(c,n,i,!1,null,"68ca68a3",null);a["default"]=l.exports},d2da:function(t,a,e){t.exports=e.p+"img/crypto.9b557e9e.svg"},d5f7:function(t,a,e){t.exports=e.p+"img/deposit.ed1f0806.svg"},de207:function(t,a,e){t.exports=e.p+"img/cable-internet.81215b12.svg"},e297:function(t,a,e){t.exports=e.p+"img/Gift_card.1b70ddd8.svg"},fda7:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-sm-12 mt-20"},[e("div",{staticClass:"dashboard-transactions p-20 pb-5"},[t._m(0),e("div",{staticClass:"row pt-20"},t._l(t.list,(function(a){return e("div",{key:a.id,staticClass:"card-deck mb-2 animated fadeInLeft",attrs:{in:"",items:""}},[e("div",{staticClass:"card mb-2",attrs:{"data-target":"#trans_modal","data-toggle":"modal"},on:{click:function(e){return t.readNotification(a.id,a)}}},[e("div",{staticClass:"card-body post-module"},[e("div",{staticClass:"row card-margin"},[e("div",{staticClass:"col-sm-1"},[e("div",{staticClass:"panel-body media"},[e("div",{staticClass:"media-left",staticStyle:{padding:"20px !important"}},[e("img",{staticClass:"img-circle img-sm",attrs:{src:t.imgType(a),alt:""}}),e("span",{directives:[{name:"show",rawName:"v-show",value:null==a.read_at,expression:"n.read_at == null"}],staticClass:"badge bg-danger-400 media-badge"},[t._v("1")])])])]),e("div",{staticClass:"col-sm-3"},[e("div",{staticClass:"panel-body",staticStyle:{padding:"20px !important"}},[e("h2",{staticClass:"text-bold",staticStyle:{margin:"4px  !important"}},[t._v(t._s(a.data.subject))]),e("h6",{staticClass:"text-grey",staticStyle:{margin:"4px  !important"}},[t._v(t._s(a.created_at))])])]),e("div",{staticClass:"col-sm-7"},[e("div",{staticClass:"panel-body",staticStyle:{padding:"20px !important"}},[e("h6",{staticClass:"text-bold",staticStyle:{margin:"4px  !important"},domProps:{innerHTML:t._s(a.data.user_message)}})])]),t._m(1,!0)])])])])})),0)]),e("div",{staticClass:"modal fade",attrs:{id:"trans_modal"}},[e("div",{staticClass:"modal-dialog"},[e("div",{staticClass:"modal-content p-20"},[t._m(2),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12"},[e("div",[e("h2",{staticClass:"modal-title"},[e("b",[t._v(t._s(this.currentNotification.data.subject))])])])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12"},[e("p",{staticClass:"text-grey no-margin",staticStyle:{padding:"20px"}},[t._v(t._s(this.currentNotification.data.user_message))])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12"},[e("hr",{staticClass:"no-margin mb-10"}),e("p",{staticClass:"text-grey no-margin"},[t._v("Sent: "+t._s(this.currentNotification.created_at))])])])])])])])])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("h2",{staticClass:"col-sm-6 text-primary text-bold pt-10"},[t._v("Notification Center")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-sm-1"},[e("div",{staticClass:"panel-body",staticStyle:{padding:"20px !important"}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header"},[e("h2",{staticClass:"modal-title"},[e("b",[t._v("Notification details")])]),e("button",{staticClass:"close text-bold",attrs:{type:"button","data-dismiss":"modal"}},[e("b",[e("i",{staticClass:"fa fa-times fa-2x",attrs:{"aria-hidden":"true"}})])])])}],s=(e("ac6a"),e("8615"),e("adb5"),e("277f")),r={name:"notifications",components:{},data:function(){return{icons:{crypto:e("d2da"),patricia:e("47de"),withdraw:e("d5f7"),deposit:e("6f9c"),card:e("e297"),transferRecieve:e("feb1"),transferSend:e("8bef"),dispute:e("2d63")},list:[],allNotify:{},pagination:{},currentNotification:{data:{}},totalScrollHeight:550}},computed:{shouldPaginate:function(){return this.pagination.total>this.list.length}},methods:{selectNotification:function(t){this.currentNotification=t},imgType:function(t){var a=t.type,e=a.lastIndexOf("\\"),n=a.substring(e+1);return this.checkImage(n)},checkImage:function(t){switch(t){case"TransactionProcessed":return this.icons.dispute;case"DisputeAdmin":return this.icons.dispute;case"CardSalesCredited":return this.icons.card;case"InitialCardSale":return this.icons.card;case"CryptoSaleStatus":return this.icons.crypto;case"CryptoCurrencySale":return this.icons.crypto;case"WelcomeNotify":return this.icons.patricia;case"InitialFundWithdraw":return this.icons.withdraw;case"TransferFundNotify":return this.icons.transferSend;case"ReceiveFundNotify":return this.icons.transferRecieve;case"CreditUser":return this.icons.deposit;default:return this.icons.dispute}},makePagination:function(t){this.pagination={from:t.from,to:t.to,perPage:t.per_page,total:t.total,current:t.current_page,nextPageUrl:t.next_page_url,previousPageUrl:t.prev_page_url}},allNotification:function(t){var a=this,e=this;Object.values(this.pagination).length>0&&null===t||(this.$root.showLoader(),Object(s["a"])(t).then((function(t){a.$root.hideLoader(),a.makePagination(t.data),a.allNotify=t.data.data,$.each(t.data.data,(function(t,a){e.list.push(a)}))})).catch((function(t){})))},handleScroll:function(){this.allNotification(this.pagination.nextPageUrl)},handleScrollEvent:function(){var t=document.getElementsByClassName("dashboard-transactions")[0].offsetHeight,a=window.screen.height;document.documentElement.scrollTop>=t-a&&this.handleScroll()},readNotification:function(t,a){a.read_at=new Date,this.selectNotification(a),Object(s["d"])(t).then((function(t){})).catch((function(t){}))}},mounted:function(){window.addEventListener("scroll",this.handleScrollEvent,!1),this.allNotification()},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScrollEvent,!1)}},c=r,o=(e("7776"),e("2877")),l=Object(o["a"])(c,n,i,!1,null,"df9db2fc",null);a["default"]=l.exports},feb1:function(t,a,e){t.exports=e.p+"img/Naira_deposit.a2c21b66.svg"}}]);
//# sourceMappingURL=notifications.routes.60292dc4.js.map