var oControllerAuth;

sap.ui.define(["./BaseController", "sap/ui/core/routing/History"], function (BaseController, History) {
    "use strict";

    return BaseController.extend("chat.controller.EditPicture", {

        onInit: function () {
            this.baseInit();
            oControllerAuth = this;
            var modelLogin = new sap.ui.model.json.JSONModel({});
            this.getView().setModel(modelLogin, "modelLogin");
        },

        handleClickGoToBack: function (oEvent) {
            var oHistory = History.getInstance();
            var sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            }
        },
        handleClickGoToChat: function (oEvent) {
            this.getRouter().navTo("chat");
        }
    })
});