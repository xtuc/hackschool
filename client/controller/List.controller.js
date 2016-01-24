sap.ui.define([
		'sap/ui/core/mvc/Controller'
	],
	function (Controller) {

		return Controller.extend('ui5.dev.controller.List', {

			onInit : function () {
			},

			onNavBack : function() {
				window.history.go(-1);
			}

		})

	});