sap.designstudio.sdk.PropertyPage.subclass("com.sap.sdk.examples.AdditionalPropertiesPropertyPage",  function() {

	var that = this;

	this.init = function() {
		var text=this.callRuntimeHandler("changeDefaultText", "test string");
		$("#form").find("#changedText").val(text);
		$("#colorButton").click(function(){
			that.openPropertyDialog("backgroundColor");
		});
		$("#form").submit(function() {
			that.firePropertiesChanged(["exText"]);
			return false;
		});
	};
	
	this.componentSelected=function(){
		$("#form").find("#testComponentSelected").empty();
		$("#form").find("#testComponentSelected").append($("<td colspan=\"3\"></td>"))
			.find("td")
				.text("I'm here because you clicked me:)");
	};

	this.exText=function(value){
		if(value===undefined){
			return $("#text2Change").val();
		}else{
			$("#text2Change").val(value);
			return this;
		}
	};
});