sap.designstudio.sdk.Component.subclass("com.sap.sdk.examples.APButton", function() {

	var that = this;
	var _text=null;

	this.init = function() {

	};
	
	this.afterUpdate=function(){
		this.$().empty();
		this.$().append($("<div></div>"))
			.find("div")
				.text(_text);
	};
	
	
	this.exText=function(value){
		if(value===undefined){
			return _text;
		}else{
			_text=value;
			return this;
		}
	};
});