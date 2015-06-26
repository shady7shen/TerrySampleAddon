sap.designstudio.sdk.Component.subclass("com.sap.sdk.examples.ResponsiveIssue", function() {

	var that = this;
	var width;
	var height;

	this.init = function() {
//		var t=setInterval(function(){
			width=that.$().width();
			height=that.$().height();
//			if(width!=0&&height!=0){
//				clearInterval(t);
				that.$().append($("<div id=\"myDiv\"></div>")).find("#myDiv")
					.attr("style","width:"+width+"px;height:"+height+"px;display:block;background-color:red");
//			}
//		},50);			
	};
	
	
	this.afterUpdate=function(){
		
	};
});