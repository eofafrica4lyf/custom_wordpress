(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21840d"],{c9cd:function(t,i,s){"use strict";s.r(i);var n=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"modal fade",attrs:{id:"otpModal"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-body text-center"},[s("h2",{staticClass:"text-bold",staticStyle:{"margin-top":"50px"}},[t._v("Input Pin to confirm Transaction")]),t._m(0),s("br"),s("br"),s("div",{staticClass:"form-group row"},[s("div",{staticClass:"col-xs-3 col-sm-2 col-sm-offset-2 pin-div"},[s("div",{staticClass:"input-group"},[s("input",{ref:"first",staticClass:"form-control pin",attrs:{type:"text",maxlength:"1",autofocus:"",id:"first"},on:{keyup:function(i){return t.keymonitor(1)}}})])]),s("div",{staticClass:"col-xs-3 col-sm-2 pin-div no-margin"},[s("div",{staticClass:"input-group"},[s("input",{ref:"second",staticClass:"form-control pin",attrs:{type:"text",maxlength:"1",id:"second"},on:{keyup:function(i){return t.keymonitor(2)}}})])]),s("div",{staticClass:"col-xs-3 col-sm-2 pin-div no-margin"},[s("div",{staticClass:"input-group"},[s("input",{ref:"third",staticClass:"form-control pin",attrs:{type:"text",maxlength:"1",id:"third"},on:{keyup:function(i){return t.keymonitor(3)}}})])]),s("div",{staticClass:"col-xs-3 col-sm-2 pin-div no-margin"},[s("div",{staticClass:"input-group"},[s("input",{ref:"fourth",staticClass:"form-control pin",attrs:{type:"text",maxlength:"1",id:"forth"},on:{keyup:[function(i){return t.keymonitor(4)},t.confirm]}})])])]),s("a",{directives:[{name:"show",rawName:"v-show",value:t.containsPinDigit,expression:"containsPinDigit"}],staticClass:"text-danger",attrs:{id:"clearPin"},on:{click:function(i){return t.clearOTP()}}},[t._v("Clear")]),s("br"),s("br"),s("a",{staticClass:"text-primary",attrs:{href:"#"}},[t._v("Resend pin in 60 seconds")]),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-10 col-xs-offset-1"},[s("button",{staticClass:"btn btn-block btn-primary btn-patricia text-bold",attrs:{type:"button"},on:{click:t.confirm}},[t._v("\n                                          Confirm\n                                    ")]),s("br"),s("span",{staticStyle:{color:"red"}},[t._v(t._s(this.incorrect))])])]),t._m(1)])])])])},o=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("h4",{staticClass:"text-grey"},[t._v("Enter the 4 - digits OTP sent to"),s("br"),t._v("\n                              your phone and email.")])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"modal-footer"},[s("br"),s("button",{staticClass:"btn btn-link",attrs:{type:"button","data-dismiss":"modal"}},[s("i",{staticClass:"fa fa-times"})])])}],a=function(){return s.e("chunk-145cffda").then(s.bind(null,"6b3b"))},r={props:["openModal","confirmClick"],components:{"p-button":a},data:function(){return{incorrect:"",containsPinDigit:!1}},methods:{keymonitor:function(t){var i=["first","second","third","fourth"],s=i[t];t<4&&this.$refs[s].focus(),this.containsPinDigit||(this.containsPinDigit=!0)},clearOTP:function(){var t=$(".pin");t.val(""),this.containsPinDigit=!1,t[0].focus()},confirm:function(){var t=$("#first").val(),i=$("#second").val(),s=$("#third").val(),n=$("#forth").val(),o=t+i+s+n;o===this.$store.getters.getUser.google2fa_secret?(this.confirmClick(),this.clearOTP(),$("#otpModal").modal("toggle")):(this.incorrect="Chief, the OTP you entered is not correct",this.clearOTP())}}},e=r,c=s("2877"),l=Object(c["a"])(e,n,o,!1,null,null,null);i["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d21840d.4ed018aa.js.map