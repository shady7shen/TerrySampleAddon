sap.designstudio.sdk.Component.subclass("com.sap.sdk.examples.PropertiesEx", function() {

	var that = this;
	var _color=null;
	var _borderWidth=2;

	this.init = function() {
		this.$().attr("class","coloredBox");
		this.firePropertiesChanged(["borderWidth"]);
	};
	
	
	this.afterUpdate=function(){
		this.$().css("background-color",_color);
		this.$().css("border-width",_borderWidth+"px");	
	};
	
	this.color=function(value){
		if(value===undefined){
			return _color;
		}else{
			_color=value;
			return this;
		}
	};
	
	this.borderWidth=function(value){
		if(value===undefined){
			return _borderWidth;
		}else{
			_borderWidth=value;
			return this;
		}
	};
});