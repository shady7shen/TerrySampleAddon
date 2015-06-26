sap.designstudio.sdk.Component.subclass("com.sap.sdk.examples.Lifecycle", function() {

	var that = this;

	this.init = function() {
		alert("this.init");
	};
	
	this.beforeUpdate=function(){
		alert("this.beforeUpdate");
	};
	
	this.afterUpdate=function(){
		alert("this.afterUpdate");
	};
	
	this.componentDeleted=function(){
		alert("this.componentDeleted");
	};
});