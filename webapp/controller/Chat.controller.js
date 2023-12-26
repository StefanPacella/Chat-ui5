sap.ui.define(["./BaseController",
    "sap/m/MessageToast",
    "sap/ui/core/mvc/XMLView"], function (BaseController, MessageToast, XMLView) {
        "use strict";

        return BaseController.extend("chat.controller.Chat", {

            onBeforeRendering: function () {

            },

            onInit: function () {
                this.baseInit();
                let modelLogin = new sap.ui.model.json.JSONModel({});
                this.getView().setModel(modelLogin, "modelLogin");
                this.initRichTextEditor();
                let scrollContainerid = this.byId("scrollContainerid");

                let oDelegate = {
                    // onclick: function(){
                    ///  alert("dudud");
                    //   }
                };

                scrollContainerid.addEventDelegate(oDelegate);
                scrollContainerid.onAfterRendering = function () {
                    let b = false;
                    this.$().on("scroll", function () {
                        if (b === false) {
                            MessageToast.show("scroll");
                            b = true;
                        }
                    });
                }
                this.loadMessage(scrollContainerid, "chat.view.MessageReceived");
                this.loadMessage(scrollContainerid, "chat.view.MessageSent");
                this.loadMessage(scrollContainerid, "chat.view.MessageSent");
            },
            initRichTextEditor: function () {
                let that = this,
                    sHtmlValue = '';

                sap.ui.require(["sap/ui/richtexteditor/RichTextEditor"],
                    function (RTE) {
                        that.oRichTextEditor = new RTE("myRTE", {
                            width: "100%",
                            height: "10%",
                            customToolbar: true,
                            ready: function () {
                                this.setValue(sHtmlValue);
                                this.removeButtonGroup("font-style");
                                this.addButtonGroup({
                                    name: "font-style",
                                    visible: true,
                                    priority: 10,
                                    customToolbarPriority: 10,
                                    buttons: [
                                        "bold", "italic"
                                    ]
                                });
                            }
                        });
                        that.getView().byId("idRichTextEditor").addContent(that.oRichTextEditor);
                    });
            },
            loadMessage(scrollContainerid, viewNameFileName) {
                let f = XMLView.create({
                    viewName: viewNameFileName
                });
                f.then(function (xml) {
                    console.log(xml);
                    scrollContainerid.addContent(xml);
                });
            }
        })
    });