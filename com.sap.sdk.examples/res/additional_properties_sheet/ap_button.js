sap.designstudio.sdk.PropertyPage.subclass("com.sap.sdk.examples.ButtonPropertyPage",  function() {

	var that = this;
	var _text=null;

	this.init = function() {
		$("#form").submit(function() {
			_text=$("#text2Change").val();
			_text=_text+" by submit";
			that.firePropertiesChanged(["exText"]);
			return false;
		});
		$("#form").find("#normalButton").click(function(){
			_text=$("#text2Change").val();
			_text=_text+" by click";
			that.firePropertiesChanged(["exText"]);
		});
	};
	
	this.componentSelected=function(){
		
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