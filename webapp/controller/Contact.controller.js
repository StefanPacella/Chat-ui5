var oControllerAuth;

sap.ui.define(["./BaseController", "sap/m/MessageBox"], function (BaseController) {
    "use strict";

    return BaseController.extend("chat.controller.Contact", {

        onInit: function () {
            this.baseInit();
            oControllerAuth = this;
        },
        resolveUrl: function (sUrl) {
            return sap.ui.require.toUrl("chat/assets/picture/profile/" + sUrl);
        }

    })
});