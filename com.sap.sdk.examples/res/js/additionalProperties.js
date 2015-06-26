sap.designstudio.sdk.Component.subclass("com.sap.sdk.examples.AdditionalProperties", function() {

	var that = this;
	var _text=null;
	var _backgroundColor=null;

	this.init = function() {

	};
	
	this.afterUpdate=function(){
		this.$().empty();
		this.$().append($("<div></div>"))
			.find("div")
				.attr("style","background-color:"+_backgroundColor)
				.text(_text);
	};
	
	this.changeDefaultText=function(addText){
		return _text+" "+addText+" Changed!!";
	};
	
	this.exText=function(value){
		if(value===undefined){
			return _text;
		}else{
			_text=value;
			return this;
		}
	};
	
	this.backgroundColor=function(value){
		if(value===undefined){
			return _backgroundColor;
		}else{
			_backgroundColor=value;
			return this;
		}
	};
});