sap.designstudio.sdk.Component.subclass("com.sap.sdk.examples.ClassConflict", function() {

	var that = this;

	this.init = function() {
		this.$().append($("<div></div>")).find("div")
			.attr("style","width:100%;height:100%;display:block;background-color:red");
		
	};
	
	
	this.afterUpdate=function(){
		
	};
});