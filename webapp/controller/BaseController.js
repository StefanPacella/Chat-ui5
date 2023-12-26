var oBaseController;
var oComponent;
var oRouter;
var i18n;


sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
    "use strict";
    return Controller.extend("chat.controller.BaseController", {
        baseInit: function () {
            oBaseController = this;
            oComponent = this.getOwnerComponent();
            oRouter = this.oRouter = oComponent.getRouter();
            i18n = oComponent.getModel("i18n");
        },
        getRouter: function () {
            return oRouter;
        },

        getI18n: function () {
            return i18n;
        }
    });
});