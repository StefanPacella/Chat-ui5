var oControllerAuth;

sap.ui.define(["./BaseController"], function (BaseController) {
    "use strict";

    return BaseController.extend("chat.controller.Login", {

        onInit: function () {
            this.baseInit();
            oControllerAuth = this;

            let modelLogin = new sap.ui.model.json.JSONModel({});
            this.getView().setModel(modelLogin, "modelLogin");
        },

        loginAction: function () {
            let modelLog = this.getView().getModel("modelLogin");
            let dataLogg = modelLog.getData();
            let email = dataLogg.username;
            let password = dataLogg.password;
            this.getRouter().navTo("chat");
        },

        handleClickGoToSignin: function(){
            this.getRouter().navTo("signin");
        }

    })
});