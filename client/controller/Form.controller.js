
sap.ui.define([
		'sap/ui/core/mvc/Controller'
	],
	function (Controller) {

		return Controller.extend('ui5.dev.controller.Form', {

			onInit : function () {
			},

			onSendPress : function(oEvent) {
				var data = this.getView().byId("newTweetForm").getContent();

				var tweet = data[1].getValue();
				var date = data[3].getValue();

				var payload = {
					"tweet" : tweet,
					"date" : date
				};

				jQuery.ajax({
					type : "POST",
					url : "/",
					data : payload,
					success : this.onPostSuccess
				});
			},

			onPostSuccess : function(){
				debugger;
			}

		})

	});