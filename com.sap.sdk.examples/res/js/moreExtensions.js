sap.designstudio.sdk.Component.subclass("com.sap.sdk.examples.MoreExtensionsCrash", function() {

	var that = this;
	this.init = function() {
		this.$().append($("<div id=\"myDiv\"></div>"))
		$("#myDiv").attr("style","width:100%;height:100%;display:block;background-color:red");
		
	};
	
	
	this.afterUpdate=function(){
		
	};
});