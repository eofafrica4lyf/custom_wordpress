(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23da21cd"],{"0aef":function(t,s,i){"use strict";i.r(s);var n=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"countdown"},[i("div",{staticClass:"block"},[i("p",{staticClass:"digit"},[t._v(t._s(t._f("two_digits")(t.days)))]),i("p",{staticClass:"text"},[t._v("Days")])]),i("div",{staticClass:"block"},[i("p",{staticClass:"digit"},[t._v(t._s(t._f("two_digits")(t.hours)))]),i("p",{staticClass:"text"},[t._v("Hours")])]),i("div",{staticClass:"block"},[i("p",{staticClass:"digit"},[t._v(t._s(t._f("two_digits")(t.minutes)))]),i("p",{staticClass:"text"},[t._v("Minutes")])]),i("div",{staticClass:"block"},[i("p",{staticClass:"digit"},[t._v(t._s(t._f("two_digits")(t.seconds)))]),i("p",{staticClass:"text"},[t._v("Seconds")])])])},e=[],c=(i("6b54"),i("84b4"),i("c1df")),a=i.n(c),o={created:function(){this.checkTime()},mounted:function(){var t=this;window.setInterval((function(){t.now=Math.trunc((new Date).getTime()/1e3)}),1e3),this.checkTime()},props:{date:{type:String}},data:function(){return{now:Math.trunc((new Date).getTime()/1e3)}},computed:{dateInMilliseconds:function(){return Math.trunc(a()(this.date,"YYYY-MM-DD HH:mm").format("x")/1e3)},seconds:function(){return(this.dateInMilliseconds-this.now)%60},minutes:function(){return Math.trunc((this.dateInMilliseconds-this.now)/60)%60},hours:function(){return Math.trunc((this.dateInMilliseconds-this.now)/60/60)%24},days:function(){return Math.trunc((this.dateInMilliseconds-this.now)/60/60/24)}},methods:{checkTime:function(){this.days<=0&&this.minutes<=0&&this.hours<=0&&this.seconds<=0&&this.$emit("showPage",!0)}},updated:function(){this.checkTime()},filters:{two_digits:function(t){return t<0?"00":t.toString().length<=1?"0".concat(t):t}}},u=o,d=(i("c6ed"),i("2877")),r=Object(d["a"])(u,n,e,!1,null,"4ca20cfa",null);s["default"]=r.exports},"49ee":function(t,s,i){},"84b4":function(t,s,i){var n=i("5ca1");n(n.S,"Math",{trunc:function(t){return(t>0?Math.floor:Math.ceil)(t)}})},c6ed:function(t,s,i){"use strict";var n=i("49ee"),e=i.n(n);e.a}}]);
//# sourceMappingURL=chunk-23da21cd.b5f8883a.js.map