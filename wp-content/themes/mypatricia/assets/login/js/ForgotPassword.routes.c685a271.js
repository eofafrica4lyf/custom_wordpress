(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ForgotPassword.routes"],{"64b6":function(t,e,r){},7966:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=_;var o=s(r("d887")),n=s(r("e409")),a=s(r("f754")),u=s(r("7f64")),i=s(r("8476"));function s(t){return t&&t.__esModule?t:{default:t}}var l={allow_display_name:!1,require_display_name:!1,allow_utf8_local_part:!0,require_tld:!0},f=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i,c=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,d=/^[a-z\d]+$/,p=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,m=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,x=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;function _(t,e){if((0,o.default)(t),e=(0,n.default)(e,l),e.require_display_name||e.allow_display_name){var r=t.match(f);if(r)t=r[1];else if(e.require_display_name)return!1}var s=t.split("@"),_=s.pop(),v=s.join("@"),g=_.toLowerCase();if(e.domain_specific_validation&&("gmail.com"===g||"googlemail.com"===g)){v=v.toLowerCase();var h=v.split("+")[0];if(!(0,a.default)(h.replace(".",""),{min:6,max:30}))return!1;for(var b=h.split("."),F=0;F<b.length;F++)if(!d.test(b[F]))return!1}if(!(0,a.default)(v,{max:64})||!(0,a.default)(_,{max:254}))return!1;if(!(0,u.default)(_,{require_tld:e.require_tld})){if(!e.allow_ip_domain)return!1;if(!(0,i.default)(_)){if(!_.startsWith("[")||!_.endsWith("]"))return!1;var y=_.substr(1,_.length-2);if(0===y.length||!(0,i.default)(y))return!1}}if('"'===v[0])return v=v.slice(1,v.length-1),e.allow_utf8_local_part?x.test(v):p.test(v);for(var w=e.allow_utf8_local_part?m:c,C=v.split("."),$=0;$<C.length;$++)if(!w.test(C[$]))return!1;return!0}t.exports=e.default,t.exports.default=e.default},"7f64":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var o=a(r("d887")),n=a(r("e409"));function a(t){return t&&t.__esModule?t:{default:t}}var u={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1};function i(t,e){(0,o.default)(t),e=(0,n.default)(e,u),e.allow_trailing_dot&&"."===t[t.length-1]&&(t=t.substring(0,t.length-1));for(var r=t.split("."),a=0;a<r.length;a++)if(r[a].length>63)return!1;if(e.require_tld){var i=r.pop();if(!r.length||!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(i))return!1;if(/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(i))return!1}for(var s,l=0;l<r.length;l++){if(s=r[l],e.allow_underscores&&(s=s.replace(/_/g,"")),!/^[a-z\u00a1-\uffff0-9-]+$/i.test(s))return!1;if(/[\uff01-\uff5e]/.test(s))return!1;if("-"===s[0]||"-"===s[s.length-1])return!1}return!0}t.exports=e.default,t.exports.default=e.default},8476:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var o=n(r("d887"));function n(t){return t&&t.__esModule?t:{default:t}}var a=/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/,u=/^[0-9A-F]{1,4}$/i;function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if((0,o.default)(t),e=String(e),!e)return i(t,4)||i(t,6);if("4"===e){if(!a.test(t))return!1;var r=t.split(".").sort((function(t,e){return t-e}));return r[3]<=255}if("6"===e){var n=t.split(":"),s=!1,l=i(n[n.length-1],4),f=l?7:8;if(n.length>f)return!1;if("::"===t)return!0;"::"===t.substr(0,2)?(n.shift(),n.shift(),s=!0):"::"===t.substr(t.length-2)&&(n.pop(),n.pop(),s=!0);for(var c=0;c<n.length;++c)if(""===n[c]&&c>0&&c<n.length-1){if(s)return!1;s=!0}else if(l&&c===n.length-1);else if(!u.test(n[c]))return!1;return s?n.length>=1:n.length===f}return!1}t.exports=e.default,t.exports.default=e.default},cddd:function(t,e,r){"use strict";var o=r("64b6"),n=r.n(o);n.a},d887:function(t,e,r){"use strict";function o(t){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function n(t){var e,r="string"===typeof t||t instanceof String;if(!r)throw null===t?e="null":(e=o(t),e="object"===e&&t.constructor&&t.constructor.hasOwnProperty("name")?t.constructor.name:"a ".concat(e)),new TypeError("Expected string but received ".concat(e,"."))}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n,t.exports=e.default,t.exports.default=e.default},da8d:function(t,e,r){t.exports=r.p+"img/email.c8cb4009.svg"},e409:function(t,e,r){"use strict";function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;for(var r in e)"undefined"===typeof t[r]&&(t[r]=e[r]);return t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o,t.exports=e.default,t.exports.default=e.default},f754:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;var o=n(r("d887"));function n(t){return t&&t.__esModule?t:{default:t}}function a(t){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function u(t,e){var r,n;(0,o.default)(t),"object"===a(e)?(r=e.min||0,n=e.max):(r=arguments[1],n=arguments[2]);var u=encodeURI(t).split(/%..|./).length-1;return u>=r&&("undefined"===typeof n||u<=n)}t.exports=e.default,t.exports.default=e.default},fa67:function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-fluid",on:{submit:function(e){return e.preventDefault(),t.forgetPassword(e)}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 image-con visible-md visible-lg text-white"},[r("img",{staticClass:"img-responsive",attrs:{src:t.forgotPImage,alt:""}}),t._m(0)]),r("div",{staticClass:"col-md-6 row text-center"},[r("div",{staticClass:"auth text-center col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xs-10 col-xs-offset-1"},[r("h4",{staticClass:"text-primary text-bold"},[t._v("Forgot Password")]),r("p",{staticClass:"text-grey2"},[t._v("Let’s help you get right back in!")]),r("br"),r("p-textbox",{attrs:{type:"text",placeholder:"Email",icon:"icon-envelop5",iconimage:this.emailIcon},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),r("div",{directives:[{name:"show",rawName:"v-show",value:t.error,expression:"error"}],staticClass:"help-block text-danger text-left"},[t._v(t._s(t.error))]),r("br"),r("br"),r("p-button",{attrs:{type:"submit",text:"Reset Password",classNames:"mt-20"},on:{click:t.forgetPassword}}),r("div",{staticClass:"pt-20"},[r("p",[t._v("Remember your password? "),r("router-link",{staticClass:"text-primary text-bold",attrs:{to:"/login"}},[t._v("Login here")])],1)])],1)])])])])])},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"image-con-text text-primary"},[r("h1",[t._v("\n          Giftcard Trading Redefined\n        ")]),r("h6",[t._v("SIGN UP . TRADE CARDS . GET PAID")])])}],a=(r("a481"),r("96cf"),r("3b8d")),u=r("adb5");function i(t){return s.apply(this,arguments)}function s(){return s=Object(a["a"])(regeneratorRuntime.mark((function t(e){var r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=String("https://app.mypatricia.co").replace(/\/*$/,"")+"/resetpassword",o=u["a"].post("/password/email?callback_url=".concat(r),{email:e}),t.abrupt("return",o);case 3:case"end":return t.stop()}}),t)}))),s.apply(this,arguments)}var l=r("7966"),f=r.n(l),c=function(){return r.e("chunk-145cffda").then(r.bind(null,"6b3b"))},d=function(){return r.e("chunk-28cbbf04").then(r.bind(null,"2b7a"))},p=function(){return r.e("chunk-0c8eba2c").then(r.bind(null,"c148"))},m={components:{"p-button":c,"p-textbox":d,BackButton:p},data:function(){return{email:"",forgotPImage:"https://storage.googleapis.com/patricia-website-assets/forgotP_page_img.svg",emailIcon:r("da8d"),error:""}},methods:{forgetPassword:function(){var t=this;this.error="",f()(this.email)?(this.$root.showLoader(),i(this.email).then((function(e){t.$root.hideLoader(),t.$swal({type:"success",title:"Success",text:e.data.message}).then((function(){t.$router.push({name:"Login"})}))})).catch((function(e){t.$root.hideLoader();var r=e.response.data;t.error=Array.isArray(r.data.errors)?r.data.errors[0]:r.data.errors}))):this.error="Your email address is not valid"}}},x=m,_=(r("cddd"),r("2877")),v=Object(_["a"])(x,o,n,!1,null,"1f9fafc8",null);e["default"]=v.exports}}]);
//# sourceMappingURL=ForgotPassword.routes.c685a271.js.map