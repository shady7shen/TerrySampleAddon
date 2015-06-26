sap.designstudio.sdk.PropertyPage.subclass("com.sap.sdk.examples.AdditionalPropertiesDebugPropertyPage",  function() {

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
		alert("Initialization done!");
	};
	
	this.componentSelected=function(){
		alert("you select me! Empty the content first");
		$("#form").find("#testComponentSelected").empty();
//		alert("you are now testing JSON parsing. If successful, you can see a congratulation message")
//		var testJSON='{"x":1}';
//		JSON.parse(testJSON); //uncomment me to reproduce error
//		jQuery.parseJSON(testJSON);
//		alert("if you see me, congratulations, no error until now!")
		alert("you select me! Add text then");
		$("#form").find("#testComponentSelected").append($("<td colspan=\"3\"></td>"))
			.find("td")
				.text("I'm here because you clicked me:)");
	};

	this.exText=function(value){
		alert("In property function");
		if(value===undefined){
			return $("#text2Change").val();
		}else{
			$("#text2Change").val(value);
			return this;
		}
	};
});