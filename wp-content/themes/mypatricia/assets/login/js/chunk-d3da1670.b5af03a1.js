(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d3da1670"],{"02ad":function(t,s,a){},"170b":function(t,s,a){t.exports=a.p+"img/Vtransarrow.f6048c99.svg"},"191d":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"tab-pane active",attrs:{id:"buy"}},[i("div",{staticClass:"row"},[i("div",[i("div",[i("p",{staticClass:"text-blue text-center text-md mb-20"},[t._v("Exchange Rate: "+t._s(t.rates.usdToNairaSellRates[4].rate)+"/$")])]),t._m(0),i("div",{staticClass:"pr-20 pl-20 pt-15 pb-15 mt-20 d-flex space-between flex-wrap bg-grey br-5"},[i("div",{staticClass:"pull-left d-flex"},[i("img",{attrs:{src:t.nairaSvg,alt:"naira Icon"}}),i("p",{staticClass:"text-md ml-10 text-black"},[t._v("Naira Wallet")])]),i("div",{staticClass:"pull-right"},[i("p",{staticClass:"text-sm text-grey txt-sm"},[t._v("BALANCE: ₦ "+t._s(t._f("formatAmount")(t.naira)))])])])]),i("div",[t._m(1),i("div",{staticClass:"pr-20 pl-20 pt-15 pb-15 mt-15 d-flex space-between flex-wrap bg-grey br-5"},[i("div",{staticClass:"pull-left d-flex"},[i("img",{attrs:{src:t.btcSvg,alt:"naira Icon"}}),i("p",{staticClass:"text-md ml-10 text-black"},[t._v("Bitcoin Wallet")])]),i("div",{staticClass:"pull-right"},[i("p",{staticClass:"text-sm text-grey txt-sm"},[t._v("BALANCE: "+t._s(t._f("formatAmountBtc")(t.btc))+" BTC")])])])]),t._m(2),i("div",[i("div",{staticClass:"d-flex space-between"},[i("div",{staticClass:"d-flex-col center mt-20"},[i("div",{staticClass:"input-group"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.buyAmountUsd,expression:"buyAmountUsd"}],staticClass:"input-control pl-10",attrs:{type:"number",placeholder:"0.00"},domProps:{value:t.buyAmountUsd},on:{input:[function(s){s.target.composing||(t.buyAmountUsd=s.target.value)},function(s){return t.buyBtcUsd(s)}]}}),i("span",{staticClass:"input-group-addon"},[t._v("USD")])]),t._m(3)]),t._m(4),i("div",{staticClass:"d-flex-col center mt-20"},[i("div",{staticClass:"input-group"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.payAmount,expression:"payAmount"}],staticClass:"input-control pl-10",attrs:{type:"number",placeholder:"0.00"},domProps:{value:t.payAmount},on:{input:[function(s){s.target.composing||(t.payAmount=s.target.value)},function(s){return t.payAmt(s)}]}}),i("span",{staticClass:"input-group-addon"},[t._v("₦")])]),t._m(5)])]),i("div",[i("div",{staticClass:"input-group mt-15"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.buyAmountBtc,expression:"buyAmountBtc"}],staticClass:"input-control pl-10",attrs:{type:"number",placeholder:"0.00"},domProps:{value:t.buyAmountBtc},on:{input:[function(s){s.target.composing||(t.buyAmountBtc=s.target.value)},function(s){return t.buyBtcAmt(s)}]}}),i("span",{staticClass:"input-group-addon"},[t._v("BTC")])])])])]),i("button",{staticClass:"mt-15 pt-15 btn btn-block btn-primary btn-patricia big",class:t.disableBuyBtn?" btn-disabled":"",attrs:{disabled:t.disableBuyBtn},on:{click:function(s){return t.proceedTransaction()}}},[i("span",{staticClass:"text-white text-bold w-100"},[t._v("Buy Bitcoin Now")]),i("img",{staticClass:"icon-arrow-right pull-right mt-5 pr-20",attrs:{src:a("d4d9"),alt:"proceeding arrow"}})]),i("button",{staticClass:"mt-15 pt-15 btn btn-block btn-primary btn-patricia small",attrs:{disabled:t.disableBuyBtn},on:{click:function(s){return t.proceedTransaction()}}},[i("span",{staticClass:"txt-sm text-white text-bold w-100"},[t._v("Buy Bitcoin Now")])]),t.hasEnoughFunds?t._e():[i("h6",{staticClass:"text-danger text-center"},[t._v("\n      Chief, you don't have enough funds for this transaction,\n      "),i("br"),i("router-link",{attrs:{to:"/wallet/naira"}},[t._v("click here to fund your wallet")])],1)]],2)},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("p",{staticClass:"text-primary text-bold text-sm"},[t._v("Buy Bitcoin From")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("p",{staticClass:"text-primary text-bold text-sm mt-25"},[t._v("Deposit Bitcoin To")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"border-bottom"},[a("p",{staticClass:"text-primary text-bold text-sm mt-25"},[t._v("Amount")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("img",{staticClass:"mt-10",attrs:{src:a("170b"),alt:""}})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"space-sm"},[i("img",{attrs:{src:a("6052"),alt:""}})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"m-auto"},[i("img",{staticClass:"mt-10",attrs:{src:a("170b"),alt:""}})])}],n=(a("28a5"),a("c5f6"),a("d7c2")),r={filters:{formatAmount:n["a"],formatAmountBtc:n["b"]},props:["rates","btc","naira"],data:function(){return{nairaSvg:"https://storage.googleapis.com/patricia-website-assets/naira.dd8aec3e.svg",btcSvg:"https://storage.googleapis.com/patricia-website-assets/btc.5e913a68.svg",buyAmountBtc:"",buyAmountUsd:"",payAmount:"",disableBuyBtn:!1,hasEnoughFunds:!0}},methods:{isBalanceEnough:function(){return btc>=this.buyAmountBtc},verifyFunds:function(){var t=this.$store.getters.getUser,s=t.wallet.actual_amount;return s=Number(s.split(",").join("")),Number(this.payAmount)>=0&&s>=Number(this.payAmount)?(this.hasEnoughFunds=!0,this.disableBuyBtn=!1,!0):(this.hasEnoughFunds=!1,this.disableBuyBtn=!0,!1)},proceedTransaction:function(){""!==this.buyAmountBtc&&""!=this.buyAmountUsd&&""!=this.payAmount?this.$emit("click"):this.$swal({title:"Incomplete fields",text:"Please fill in the required fields"})},buyBtcAmt:function(t){this.$emit("inputBtcAmt",this.buyAmountBtc),this.buyAmountUsd=(this.buyAmountBtc*this.rates.btcToUsd.rate_float).toFixed(5),this.payAmount=this.buyAmountUsd*this.rates.usdToNairaSellRates[4].rate,this.$emit("inputPayAmt",this.payAmount),this.verifyFunds()},buyBtcUsd:function(t){this.$emit("inputBtcUsd",this.buyAmountUsd),this.buyAmountBtc=(this.buyAmountUsd/this.rates.btcToUsd.rate_float).toFixed(5),this.payAmount=this.buyAmountUsd*this.rates.usdToNairaSellRates[4].rate,this.$emit("inputPayAmt",this.payAmount),this.$emit("inputBtcAmt",this.buyAmountBtc),this.verifyFunds()},payAmt:function(t){this.$emit("inputPayAmt",this.payAmount),this.buyAmountUsd=(this.payAmount/this.rates.usdToNairaSellRates[4].rate).toFixed(5),this.buyAmountBtc=(this.buyAmountUsd/this.rates.btcToUsd.rate_float).toFixed(5),this.$emit("inputBtcAmt",this.buyAmountBtc),this.verifyFunds()}}},u=r,o=(a("a5b1"),a("2877")),c=Object(o["a"])(u,i,e,!1,null,"65d156a0",null);s["default"]=c.exports},6052:function(t,s,a){t.exports=a.p+"img/transarrow.fb5442cc.svg"},a5b1:function(t,s,a){"use strict";var i=a("02ad"),e=a.n(i);e.a},d4d9:function(t,s,a){t.exports=a.p+"img/arrow.24aaa2a2.svg"},d7c2:function(t,s,a){"use strict";a.d(s,"a",(function(){return i})),a.d(s,"b",(function(){return e}));a("c5f6");function i(t){var s=Intl.NumberFormat("en-US",{minimumFractionDigits:2,maximumFractionDigits:2});return s.format(Number(t))}function e(t){var s=Intl.NumberFormat("en-US",{minimumFractionDigits:5,maximumFractionDigits:5});return s.format(Number(t))}}}]);
//# sourceMappingURL=chunk-d3da1670.b5af03a1.js.map