sap.ui.define([
		'sap/ui/core/mvc/Controller'
	],
	function (Controller) {

		return Controller.extend('ui5.dev.controller.Home', {

			onInit : function () {
			},

			toList : function(){
				this.getOwnerComponent().getRouter().navTo("allTweets")
			},


			toNewTweet : function(){
				this.getOwnerComponent().getRouter().navTo("newTweet")
			}

		})

	});