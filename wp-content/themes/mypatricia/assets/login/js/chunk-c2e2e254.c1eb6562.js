(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c2e2e254"],{"032f":function(t,e,a){},8187:function(t,e,a){"use strict";var i=a("032f"),s=a.n(i);s.a},af7d:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"multiple-upload-modal",staticClass:"modal fade",attrs:{id:t.id}},[a("div",{staticClass:"modal-dialog",class:t.modalSize},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-body p-20 mr-10 ml-10"},[t._m(0),a("div",{staticClass:"upload-header"},[a("h2",{staticClass:"text-bold text-default mt-20"},[t._v(t._s(this.headers.mainHeading))]),a("h6",{staticClass:"text-grey"},[t._v(t._s(this.headers.subHeading))])]),a("div",{staticClass:"row mb-20"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.uploadFiles(e)}}},[a("div",{staticClass:"col-sm-12"},[a("vue-upload-multiple-image",{staticClass:"insi",attrs:{"data-images":t.files,dropText:t.options.dropText||"Upload your "+t.uploadType,dragText:t.options.dragText||"Drag your "+t.uploadType+"s here",browseText:t.options.browseText||"Click to add your "+t.uploadType,primaryText:t.options.primaryText||"Upload",markIsPrimaryText:t.options.markIsPrimaryText||"",popupText:t.options.popupText||t.uploadType+" to be uploaded",idUpload:t.options.idUpload||t.idUpload,editUpload:t.options.idUpload||t.editUpload,accept:t.acceptMimes,maxNoFiles:t.maxUploads},on:{"upload-success":t.uploadImageSuccess,"before-remove":t.beforeRemove,"edit-image":t.editImage,"mark-is-primary":t.markIsPrimary,"limit-exceeded":t.limitExceeded}}),t.maxSizeHit||t.filesCount>t.maxUploads?a("small",{staticClass:"inline-block pt-5 text-danger"},[t._v("The maximum number of "+t._s(t.uploadType)+"s that can be uploaded is "+t._s(t.maxUploads))]):t._e()],1),a("div",{staticClass:"col-sm-12 mt-20 mt-25"},[a("button",{ref:"upload-button",staticClass:"btn btn-block btn-primary btn-patricia text-bold",class:t.button.className,attrs:{type:"submit",disabled:!t.canUpload}},[t._v("\n                                    "+t._s(t.button.text)+"\n                                    "),t.button.icon?a("i",{staticClass:"position-right ml-20",class:t.button.icon}):t._e(),a("i",{directives:[{name:"show",rawName:"v-show",value:t.processUpload,expression:"processUpload"}],staticClass:"icon-spinner2 spinner position-right ml-20"})])])])])])])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[a("i",{staticClass:"fa fa-times fa-2x",attrs:{"aria-hidden":"true"}})])])}],o=(a("a481"),a("c5f6"),a("fc5c")),l={name:"MultipleUpload",components:{VueUploadMultipleImage:o["a"]},props:{id:{type:String,default:"upload-files"},uploadType:{type:String,default:"file"},modalSize:{type:String,default:"modal-lg"},maxUploads:{type:Number,default:5,validator:function(t){return t%1===0}},acceptMimes:{type:String,default:"image/gif,image/jpeg,image/png,image/bmp,image/jpg"},options:{type:Object,default:function(){return{}}},headers:{type:Object,default:function(){return{mainHeading:"Upload file",subHeading:"Please upload your file(s)"}}},button:{type:Object,default:function(){return{className:"",text:"Upload",icon:""}}},processUpload:{type:Boolean,default:!1}},data:function(){return{files:[],uploadedfileData:null,maxSizeHit:!1,filesCount:0}},computed:{idUpload:function(){return"upload_"+this.id.replace(/[-_]/g,"")+"_id"},editUpload:function(){return"edit_"+this.id.replace(/[-_]/g,"")+"_id"},canUpload:function(){return this.filesCount>0&&this.filesCount<=this.maxUploads}},watch:{uploadedfileData:{handler:function(t){this.filesCount=t.fileList.length},deep:!0}},methods:{uploadFiles:function(){this.canUpload&&this.$emit("upload-files",this.uploadedfileData)},openModal:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=t?document.getElementById(this.id):this.$refs["multiple-upload-modal"];$(e).modal("show")},closeModal:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=t?document.getElementById(this.id):this.$refs["multiple-upload-modal"];$(e).modal("hide")},uploadImageSuccess:function(t,e,a){this.filesCount<this.maxUploads&&(this.maxSizeHit=!1,this.uploadedfileData={formData:t,index:e,fileList:a})},beforeRemove:function(t,e,a){e(),this.uploadedfileData.fileList=a},editImage:function(t,e,a){},markIsPrimary:function(t,e){},limitExceeded:function(t){this.maxSizeHit=!0}}},d=l,n=(a("8187"),a("2877")),p=Object(n["a"])(d,i,s,!1,null,"402d0f4e",null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-c2e2e254.c1eb6562.js.map