(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8ec1c4b8"],{"00a8":function(t,e,n){},"280a":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return s}));n("96cf");var a=n("3b8d"),i=n("adb5");function r(){return o.apply(this,arguments)}function o(){return o=Object(a["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i["a"].post("/recover_funds");case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)}))),o.apply(this,arguments)}function s(t){return c.apply(this,arguments)}function c(){return c=Object(a["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i["a"].get("/recover_funds/details?reference_code=".concat(e));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)}))),c.apply(this,arguments)}},"32fcd":function(t,e,n){"use strict";n("c5f6"),n("ac6a");var a=n("c1df"),i=n.n(a),r=n("280a");function o(t,e,n){var a=this;this.instance=t,this.err=e,this.data=e.response.data,this.callBack=n||null,this.showResolveDebt=function(){var t="";a.instance.$swal({imageUrl:"".concat("https://storage.googleapis.com/patricia-website-assets","/sad1.svg"),title:"Slight Problem Chief,",html:'<div class="p-10">'.concat(a.data.message,"</div>"),confirmButtonText:"View Details",showCancelButton:!0,cancelButtonText:"Later",allowOutsideClick:!1,preConfirm:function(){t="true"}}).then((function(){"true"===t&&a.showDebtSummary()}))},this.showDebtSummary=function(){var t="",e="",n=a.data.data,i="";n.flagged_transaction_details.forEach((function(t){var e='<div class="flag-trans-swal mt-5 mb-20 text-left swal-line-height"><b>Message:</b> '.concat(t.flag_message," <br><blockquote>Transaction Type: <b>").concat(t.transaction_type,"</b><br>Transaction Amount: <b>").concat(a.formatAmount(Number(t.amount)),"</b> <br>Reference Code: <b>").concat(t.reference_code,"</b> <br>Transaction Date: <b>").concat(a.formatDate(t.transaction_date),"</b></blockquote></div>");i+=e})),a.instance.$swal({title:"Transaction(s) Summary",html:i,confirmButtonText:"Resolve Now",showCancelButton:!0,cancelButtonText:"Contact Support",allowOutsideClick:!1,showLoaderOnConfirm:!0,preConfirm:function(){return Object(r["b"])().then((function(e){t="success"})).catch((function(n){402==n.response.data.status?t="insufficientBalance":(t="error",e=n.response.data.message?n.response.data.message:n.response.data.data.message)})).finally((function(){a.instance.$root.showLoader(),a.instance.$root.hideLoader()}))}}).then((function(n){n.dismiss===a.instance.$swal.DismissReason.cancel||n.dismiss===a.instance.$swal.DismissReason.esc?a.openLiveChat():"success"===t?a.instance.$swal({type:"success",title:"Resolved",text:"You can proceed now",allowOutsideClick:!1,preConfirm:function(){a.callBack()}}):"insufficientBalance"===t?a.instance.$swal({type:"error",title:"Insufficient Balance",text:"Please deposit in your wallet and try again...",confirmButtonText:"Deposit Now",showCancelButton:!0,cancelButtonText:"Later",allowOutsideClick:!1,preConfirm:function(){a.instance.$router.push("/wallet/naira")}}):e&&a.instance.$swal({type:"error",text:e})}))},this.formatAmount=function(t){var e=Intl.NumberFormat("en-US",{minimumFractionDigits:2,maximumFractionDigits:2});return e.format(Number(t))},this.formatDate=function(t){return i()(t).format("MMMM Do YYYY, h:mm a")},this.openLiveChat=function(){window.tidioChatApi.messageFromVisitor("Hi")}}e["a"]=o},5118:function(t,e,n){(function(t){var a="undefined"!==typeof t&&t||"undefined"!==typeof self&&self||window,i=Function.prototype.apply;function r(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new r(i.call(setTimeout,a,arguments),clearTimeout)},e.setInterval=function(){return new r(i.call(setInterval,a,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(a,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout((function(){t._onTimeout&&t._onTimeout()}),e))},n("6017"),e.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof t&&t.clearImmediate||this&&this.clearImmediate}).call(this,n("c8ba"))},6017:function(t,e,n){(function(t,e){(function(t,n){"use strict";if(!t.setImmediate){var a,i=1,r={},o=!1,s=t.document,c=Object.getPrototypeOf&&Object.getPrototypeOf(t);c=c&&c.setTimeout?c:t,"[object process]"==={}.toString.call(t.process)?m():p()?h():t.MessageChannel?b():s&&"onreadystatechange"in s.createElement("script")?v():w(),c.setImmediate=u,c.clearImmediate=l}function u(t){"function"!==typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var o={callback:t,args:e};return r[i]=o,a(i),i++}function l(t){delete r[t]}function d(t){var e=t.callback,a=t.args;switch(a.length){case 0:e();break;case 1:e(a[0]);break;case 2:e(a[0],a[1]);break;case 3:e(a[0],a[1],a[2]);break;default:e.apply(n,a);break}}function f(t){if(o)setTimeout(f,0,t);else{var e=r[t];if(e){o=!0;try{d(e)}finally{l(t),o=!1}}}}function m(){a=function(t){e.nextTick((function(){f(t)}))}}function p(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}function h(){var e="setImmediate$"+Math.random()+"$",n=function(n){n.source===t&&"string"===typeof n.data&&0===n.data.indexOf(e)&&f(+n.data.slice(e.length))};t.addEventListener?t.addEventListener("message",n,!1):t.attachEvent("onmessage",n),a=function(n){t.postMessage(e+n,"*")}}function b(){var t=new MessageChannel;t.port1.onmessage=function(t){var e=t.data;f(e)},a=function(e){t.port2.postMessage(e)}}function v(){var t=s.documentElement;a=function(e){var n=s.createElement("script");n.onreadystatechange=function(){f(e),n.onreadystatechange=null,t.removeChild(n),n=null},t.appendChild(n)}}function w(){a=function(t){setTimeout(f,0,t)}}})("undefined"===typeof self?"undefined"===typeof t?this:t:self)}).call(this,n("c8ba"),n("f28c"))},"6c21":function(t,e,n){"use strict";var a=n("00a8"),i=n.n(a);i.a},c7c0:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row d-flex space-between"},[n("div",{directives:[{name:"show",rawName:"v-show",value:!1===t.confirmTransaction,expression:"confirmTransaction === false"}],staticClass:"col-lg-6 col-md-12 m-20 p-20 w-100 panel main-sm animated",attrs:{id:"main"}},[n("div",["Buy"===t.activeTab?n("p",{staticClass:"text-blue text-center text-md"},[t._v("Buy Bitcoin")]):n("p",{staticClass:"text-blue text-center text-md"},[t._v("Sell Bitcoin")])]),n("div",{staticClass:"tabbable buy-sell pb-20"},[n("ul",{staticClass:"nav nav-tabs nav-tabs-highlight nav-justified"},[n("li",{class:{active:"Sell"===t.activeTab},on:{click:function(e){return t.toggleStat("Sell")}}},[n("a",{staticClass:"text-primary text-bold sell"},[t._v("Sell")])]),n("li",{class:{active:"Buy"===t.activeTab},on:{click:function(e){return t.toggleStat("Buy")}}},[n("a",{staticClass:"text-primary text-bold buy"},[t._v("Buy")])])]),n("div",{staticClass:"tab-content"},["Buy"===t.activeTab?n("Buy",{attrs:{rates:t.rates,naira:t.naira,btc:t.btc},on:{click:function(e){return t.proceedTransaction()},inputBtcAmt:function(e){return t.buyBtcAmt(e)},inputBtcUsd:function(e){return t.buyBtcUsd(e)},inputPayAmt:function(e){return t.payAmt(e)}}}):n("Sell",{attrs:{rates:t.rates,naira:t.naira,btc:t.btc},on:{click:function(e){return t.proceedTransaction()},showBtcRates:function(e){return t.showSellInfo()},inputBtcSell:function(e){return t.inputSellBtcAmt(e)},inputUsdSell:function(e){return t.inputSellBtcUsd(e)},amountSell:function(e){return t.inputAmountBtc(e)},change:function(e){return t.changeUsdRate(e)}}})],1)])]),n("div",{staticClass:"col-lg-6 col-md-12 m-25 w-80 p-20 d-flex center panel relative"},[n("TransactionStat",{staticClass:"animated",attrs:{id:"stat",active:t.activeTab,rates:t.rates,buyAmountBtc:t.buyAmountBtc,buyAmountUsd:t.buyAmountUsd,payAmount:t.payAmount,sellBtcAmt:t.sellBtcAmt,sellBtcUsd:t.sellBtcUsd,amountBtc:t.amountBtc,usdrate:t.usdrate}}),n("div",{staticClass:"arrowDown"},[n("a",{directives:[{name:"show",rawName:"v-show",value:t.confirmTransaction,expression:"confirmTransaction"}],attrs:{href:"#confirmTransaction"}},[n("i",{staticClass:"fas fa-arrow-down"})])])],1),n("div",{directives:[{name:"show",rawName:"v-show",value:t.confirmTransaction,expression:"confirmTransaction"}],staticClass:"col-lg-6 col-md-12 p-20 w-100",attrs:{id:"confirmTransaction"}},[n("ConfirmTransaction",{attrs:{action:"Confirm "+("Buy"==t.activeTab?"Purchase":t.activeTab)},on:{click:function(e){return t.showModal()}}})],1),n("PinInput",{on:{"pin-verified":function(e){return t.confirmTrans()}}}),n("TransactionSuccess",{attrs:{activeTab:t.activeTab,amountBuy:t.payAmount,amountSell:t.sellBtcAmt,redirectSec:t.redirectSec}})],1)])},i=[],r=(n("c5f6"),n("280a"),n("c881")),o=n("5118"),s=n("32fcd"),c=function(){return n.e("chunk-d3da1670").then(n.bind(null,"191d"))},u=function(){return n.e("chunk-39ad6f7b").then(n.bind(null,"de77"))},l=function(){return n.e("chunk-0a9e7790").then(n.bind(null,"cf25"))},d=function(){return n.e("chunk-09248ac6").then(n.bind(null,"6e49"))},f=function(){return Promise.all([n.e("chunk-2d0ac39a"),n.e("chunk-542e087e")]).then(n.bind(null,"73f8"))},m=function(){return n.e("chunk-7fadacdb").then(n.bind(null,"9688"))},p=function(){return n.e("chunk-11f8755c").then(n.bind(null,"9f89"))},h={props:["activeTab","rates","wallet","naira","btc"],components:{Buy:c,Sell:u,TransactionStat:l,ConfirmTransaction:d,PinInput:f,TransactionSuccess:m,SellInfoModal:p},data:function(){return{confirmTransaction:!1,buyAmountBtc:"",buyAmountUsd:"",payAmount:"",redirectSec:5,sellBtcAmt:"",sellBtcUsd:"",amountBtc:"",usdrate:""}},methods:{showSellInfo:function(){$("#sell-info-modal").modal("show")},toggleStat:function(t){this.activeTab=t,"Sell"===t&&$("#sell-info-modal").modal("show")},goBack:function(){!1===this.confirmTransaction?this.$router.go():!0===this.confirmTransaction&&(this.confirmTransaction=!1),$("#stat").removeClass("fadeInRight"),$("#stat").addClass("fadeInRight"),$("#main").addClass("fadeInLeft")},proceedTransaction:function(){this.confirmTransaction=!0,$("#stat").addClass("fadeInRight")},showModal:function(){$("#pin-modal").modal("show")},confimedTranaction:function(){$("#pin-modal").modal("hide"),$("#transaction-successful").modal("show"),this.$root.hideLoader(),setTimeout(this.goToDashboard,"5000"),Object(o["setInterval"])(this.countdown,"1000")},confirmTrans:function(){var t=this;this.$root.showLoader(),"Buy"===this.activeTab?Object(r["a"])(this.payAmount).then((function(e){t.confimedTranaction()})).catch((function(e){if(t.$root.hideLoader(),400===e.response.data.status)if("flagged_transaction_naira"===e.response.data.error_code||"flagged_transaction_naira_btc"===e.response.data.error_code){var n=new s["a"](t,e);n.showResolveDebt()}else if("kyc_upload_one_time_exceeded"===e.response.data.error_code||"kyc_bvn_one_time_exceeded"===e.response.data.error_code||"kyc_bvn_daily_limit_exceeded"===e.response.data.error_code||"kyc_upload_daily_limit_exceeded"===e.response.data.error_code){var a='<div class="p-10 spacing-1">'.concat(e.response.data.message," <br><h5>(kindly upgrade your account.)</h5></div>");t.$swal({type:"warning",html:a,confirmButtonText:"Upgrade Account",showCancelButton:!0,cancelButtonText:"Not Now",allowOutsideClick:!1,preConfirm:function(){return t.$router.push("/settings?kyc=true")}})}else t.$swal({type:"error",title:"Chief",text:e.response.data.data.message});else 422===e.response.data.status?t.$swal({type:"error",title:"Validation Failed",text:e.response.data.data.error.amount[0]}):t.$swal({type:"error",title:"Oops",text:e.response.data.message?e.response.data.message:e.response.data.data.message})})):"Sell"===this.activeTab&&Object(r["b"])(this.sellBtcAmt).then((function(e){t.confimedTranaction()})).catch((function(e){t.$root.hideLoader(),422===e.response.data.status?t.$swal({type:"error",title:"Validation Failed",text:e.response.data.data.error.amount[0]}):t.$swal({type:"error",title:"Oops",text:e.response.data.message?e.response.data.message:e.response.data.data.message})}))},formatAmount:function(t){var e=Intl.NumberFormat("en-US",{minimumFractionDigits:2,maximumFractionDigits:2});return e.format(Number(t))},countdown:function(){this.redirectSec=this.redirectSec-1},goToDashboard:function(){this.$router.go(),$("#transaction-successful").modal("hide")},buyBtcAmt:function(t){this.buyAmountBtc=t},buyBtcUsd:function(t){this.buyAmountUsd=t},payAmt:function(t){this.payAmount=t},inputSellBtcAmt:function(t){this.sellBtcAmt=t},inputSellBtcUsd:function(t){this.sellBtcUsd=t},inputAmountBtc:function(t){this.amountBtc=t},changeUsdRate:function(t){this.usdrate=t}}},b=h,v=(n("6c21"),n("2877")),w=Object(v["a"])(b,a,i,!1,null,"d95d0b70",null);e["default"]=w.exports},c881:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return u}));n("96cf");var a=n("3b8d"),i=n("adb5");function r(t){return o.apply(this,arguments)}function o(){return o=Object(a["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i["a"].post("bitcoin/buy",{amount:e});case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)}))),o.apply(this,arguments)}function s(t){return c.apply(this,arguments)}function c(){return c=Object(a["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i["a"].post("bitcoin/sell",{amount:e});case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)}))),c.apply(this,arguments)}function u(t,e,n){return l.apply(this,arguments)}function l(){return l=Object(a["a"])(regeneratorRuntime.mark((function t(e,n,a){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i["a"].post("bitcoin/send",{amount:e,identifier:a,message:n});case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)}))),l.apply(this,arguments)}}}]);
//# sourceMappingURL=chunk-8ec1c4b8.a034ad58.js.map