var oControllerAuth;

sap.ui.define(["./BaseController"], function (BaseController) {
    "use strict";

    return BaseController.extend("chat.controller.Login", {

        onInit: function () {
            this.baseInit();
            oControllerAuth = this;

            var modelLogin = new sap.ui.model.json.JSONModel({});
            this.getView().setModel(modelLogin, "modelLogin");
        },

        loginAction: function () {
            var modelLog = this.getView().getModel("modelLogin");
            var dataLogg = modelLog.getData();
            var email = dataLogg.username;
            var password = dataLogg.password;
            this.getRouter().navTo("chat");
        },

        handleClickGoToSignin: function(){
            this.getRouter().navTo("signin");
        }

    })
});