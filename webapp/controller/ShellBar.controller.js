sap.ui.define([
	"./BaseController",
	"sap/m/MessageToast",
	'sap/ui/core/Fragment',
	"sap/m/MenuItem"
], function (BaseController, MessageToast, Fragment, MenuItem) {
	"use strict";

	return BaseController.extend("chat.controller.ShellBar", {
		handleHomeIconPress: function (oEvent) {
			MessageToast.show("Home icon pressed");
		},
		onPress: function () {
			var oView = this.getView(),
			oButton = oView.byId("idbutton");
			if (!this._oMenuFragment) {
				this._oMenuFragment = Fragment.load({
					id: oView.getId(),
					name: "chat.view.Menu",
					controller: this
				}).then(function (oMenu) {
					oMenu.openBy(oButton);
					this._oMenuFragment = oMenu;
					return this._oMenuFragment;
				}.bind(this));
			} else {
				this._oMenuFragment.openBy(oButton);
			}
		},
		onMenuAction: function (oEvent) {
			var oItem = oEvent.getParameter("item"), sItemPath = "";

			while (oItem instanceof MenuItem) {
				sItemPath = oItem.getText() + sItemPath;
				oItem = oItem.getParent();
			}
			if (sItemPath === "Sing out") {
				MessageToast.show("Sing out");
			}
			if (sItemPath === "Chat") {
				this.getRouter().navTo("chat");
			}
			if (sItemPath === "Edit profile") {
				this.getRouter().navTo("edit");
			}
			if (sItemPath === "Edit picture profile") {
				this.getRouter().navTo("editpicture");
			}
		}
	});
});