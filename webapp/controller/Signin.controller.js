var oControllerAuth;

sap.ui.define(["./BaseController"], function (BaseController) {
    "use strict";

    return BaseController.extend("chat.controller.Auth", {

        onInit: function () {
            this.baseInit();
            oControllerAuth = this;
            var signin = new sap.ui.model.json.JSONModel({});
            this.getView().setModel(signin, "signin");
        },

        signinAction: function () {
            this.getRouter().navTo("chat");
        },

        handleClickGoToBack: function () {
            this.getRouter().navTo("login");
        }
    })
});