sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/ui/core/HTML'
], function(Controller, HTML) {
	"use strict";

	return Controller.extend("chat.controller.Message", {
		getPicture: function() {
            return sap.ui.require.toUrl("chat/assets/picture/profile/" + "avatar.png");
		},
		onInit: function () {
			var oHtml = this.byId("htmlControl");
            var picture = this.getPicture();
			if (!oHtml) {
				oHtml = new HTML({
					content:
						"<img src="+ "\"" + picture + "\""  + "style='border-radius: 50%;max-width: 75px; '>" +
						"</img>"
				});
				var oLayout = this.byId("pictureProfile");
				oLayout.addContent(oHtml);
			}
		},
		myf: function(){
			alert("ok");
		}
	});
});