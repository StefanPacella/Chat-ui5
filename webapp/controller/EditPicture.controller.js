var oControllerAuth;

sap.ui.define(["./BaseController", "sap/ui/core/routing/History"], function (BaseController, History) {
    "use strict";

    return BaseController.extend("chat.controller.EditPicture", {

        onInit: function () {
            this.baseInit();
            oControllerAuth = this;
            let modelLogin = new sap.ui.model.json.JSONModel({});
            this.getView().setModel(modelLogin, "modelLogin");
        },

        handleClickGoToBack: function (oEvent) {
            let oHistory = History.getInstance();
            let sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            }
        },
        handleClickGoToChat: function (oEvent) {
            this.getRouter().navTo("chat");
        }
    })
});