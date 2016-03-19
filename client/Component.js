sap.ui.define([
        'sap/ui/core/UIComponent',
        'sap/m/routing/Router',
        'sap/ui/model/json/JSONModel',
        'sap/ui/Device'
    ],
    function (UIComponent, Router, JSONModel, Device) {
        "use strict";

        return UIComponent.extend("ui5.dev.Component", {

            metadata : {
                manifest : "json"
            },

            init : function () {
                var deviceModel = new JSONModel(Device);
                deviceModel.setDefaultBindingMode("OneWay");
                this.setModel(deviceModel, "device");
                UIComponent.prototype.init.apply(this, arguments);
                this.getRouter().initialize();

                var tweetModel = new JSONModel("http://localhost:3000/");
                this.setModel(tweetModel, "tweets");
            }
        });

    }, /* bExport= */ true);