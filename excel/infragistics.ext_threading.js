/*!@license
* Infragistics.Web.ClientUI infragistics.ext_threading.js 18.1.20181.198
*
* Copyright (c) 2011-2018 Infragistics Inc.
*
* http://www.infragistics.com/
*
* Depends:
*     jquery-1.4.4.js
*     jquery.ui.core.js
*     jquery.ui.widget.js
*     infragistics.util.js
*     infragistics.ext_core.js
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["./infragistics.util","./infragistics.ext_core"],factory)}else{factory(igRoot)}})(function($){$.ig=$.ig||{};var $$t={};$.ig.globalDefs=$.ig.globalDefs||{};$.ig.globalDefs.$$9=$$t;$$0=$.ig.globalDefs.$$0;$$1=$.ig.globalDefs.$$1;$$6=$.ig.globalDefs.$$6;$.ig.$currDefinitions=$$t;$.ig.util.bulkDefine(["Task$1:a","Task:b","TaskCompletionSource$1:c"]);var $a=$.ig.intDivide,$b=$.ig.util.cast,$c=$.ig.util.defType,$d=$.ig.util.defEnum,$e=$.ig.util.getBoxIfEnum,$f=$.ig.util.getDefaultValue,$g=$.ig.util.getEnumValue,$h=$.ig.util.getValue,$i=$.ig.util.intSToU,$j=$.ig.util.nullableEquals,$k=$.ig.util.nullableIsNull,$l=$.ig.util.nullableNotEquals,$m=$.ig.util.toNullable,$n=$.ig.util.toString$1,$o=$.ig.util.u32BitwiseAnd,$p=$.ig.util.u32BitwiseOr,$q=$.ig.util.u32BitwiseXor,$r=$.ig.util.u32LS,$s=$.ig.util.unwrapNullable,$t=$.ig.util.wrapNullable,$u=String.fromCharCode,$v=$.ig.util.castObjTo$t;$d("TaskStatus:e",false,false,{Created:0,RanToCompletion:5,Canceled:6,Faulted:7});$c("Task:b","Object",{_c:null,_b:false,_a:null,init:function(a,b){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$t.$b.init1.call(this,1,b,null)},init1:function(a,b,c){var $self=this;$.ig.$op.init.call(this);var d=function(){};var e=function(f){if(f==null){$self._b=true}else{$self._a=new $$6.c(2,"Exception occurred during task execution",f)}};this._c=b.done(d).fail(e);this._d=c},g:function(){if(this._b){return 6}switch(this._c.state()){case"pending":return 0;case"resolved":return 5;case"rejected":return 7;default:return 0}},_d:null,e:function(a){var $self=this;var b=function(){a($self)};var c=function(d){a($self)};var d=this._c.done(b).fail(c);return new $$t.b(0,d)},f:function($tNewResult,a){var $self=this;var b=new $$t.c($tNewResult,0);var c=function(){try{var d=a($self);b.e(d)}catch(e_){b.d(e_)}};var d=function(e){c()};var e=function(f){c()};this._c.done(d).fail(e);return b._b},$type:new $.ig.Type("Task",$.ig.$ot)},true);$c("Task$1:a","Task",{$tResult:null,init:function($tResult,a,b){var $self=this;this.$tResult=$tResult;if(!this.hasOwnProperty("$type")){this.$type=this.$type.specialize(this.$tResult)}this.h=false;$$t.$b.init1.call(this,1,a,b);var c=function(d){var e=$v($self.$tResult,d);$self.l=e;$self.h=true};var d=function(e){$self.h=true};this._c.done(c).fail(d)},h:false,l:null,m:function(){if(!this.h){throw"Result is not ready yet"}if(this._a!=null){throw this._a}return this.l},i:function(a){return $$t.$b.e.call(this,function(b){a(b)})},j:function($tNewResult,a){var b=function(c){return $e($tNewResult,a(c))};return this.k($.ig.$op.$type,b).k($tNewResult,function(c){return $v($tNewResult,c.m())})},k:function($tNewResult,a){return $$t.$b.f.call(this,$tNewResult,a)},$type:new $.ig.Type("Task$1",$$t.$b.$type)},true);$c("TaskCompletionSource$1:c","Object",{$tResult:null,_a:null,init:function($tResult,a){this.$tResult=$tResult;if(!this.hasOwnProperty("$type")){this.$type=this.$type.specialize(this.$tResult)}if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$t.$c.init1.call(this,this.$tResult,1,null)},init1:function($tResult,a,b){this.$tResult=$tResult;if(!this.hasOwnProperty("$type")){this.$type=this.$type.specialize(this.$tResult)}$.ig.$op.init.call(this);this._a=$.Deferred();this._b=new $$t.a(this.$tResult,this._a.promise(),b)},c:function(){this._a.reject(null)},d:function(a){this._a.reject(a)},e:function(a){this._a.resolve($e(this.$tResult,a))},_b:null,$type:new $.ig.Type("TaskCompletionSource$1",$.ig.$ot)},true);$c("TaskFactory:d","Object",{init:function(){$.ig.$op.init.call(this)},c:function(a,b){return new $$t.b(0,this.b(this.a(a)).always(function(){b(a)}))},d:function($tResult,a,b){var c=new $$t.c($tResult,0);this.b(this.a(a)).always(function(){try{var d=b(a);c.e(d)}catch(e_){c.d(e_)}});return c._b},e:function($tAntecedentResult,$tResult,a,b){var c=function(d){return $e($tResult,b(d))};return this.d($.ig.$op.$type,a,c).j($tResult,function(d){return $v($tResult,d.m())})},a:function(a){var b=new Array(a.length);for(var c=0;c<a.length;c++){b[c]=a[c]._c}return b},b:function(a){var promises_=a;var b=null;b=function(p){function whenAll(){var whenDeffered=$.Deferred();if(arguments.length===0){whenDeffered.resolve();return whenDeffered}var count=arguments.length;var resolve=true;for(var i=0;i<arguments.length;i++){arguments[i].done(function(){resolve=resolve&&true}).fail(function(){resolve=resolve&&false}).always(function(){count--;if(count<=0){if(resolve){whenDeffered.resolve()}else{whenDeffered.reject()}}})}return whenDeffered}return whenAll.apply($,p)}(promises_);return b},$type:new $.ig.Type("TaskFactory",$.ig.$ot)},true)});(function(factory){if(typeof define==="function"&&define.amd){define("watermark",["jquery"],factory)}else{factory(jQuery)}})(function($){$(document).ready(function(){var wm=$("#__ig_wm__").length>0?$("#__ig_wm__"):$("<div id='__ig_wm__'></div>").appendTo(document.body);wm.css({position:"fixed",bottom:0,right:0,zIndex:1e3}).addClass("ui-igtrialwatermark")})});