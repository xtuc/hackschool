
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
					"content" : tweet
				};

				jQuery.ajax({
					type : "POST",
					url : "http://10.142.113.55:3000/",
					data : payload,
					success : this.onPostSuccess.bind(this)
				});
			},

			onPostSuccess : function(){
				this.getOwnerComponent().getRouter().navTo("allTweets");
				this.getModel().loadData("http://10.142.113.55:3000/");
			},

			onNavBack : function() {
				window.history.go(-1);
			}

		})

	});