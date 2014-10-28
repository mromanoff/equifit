define(function (require, exports, module) {
	'use strict';

	var CookieComponent = require('components/cookie');
	var ComponentModule = {};

	ComponentModule.TrainerNav = function(){};
	ComponentModule.TrainerNav.prototype = {
		init: function () {
			// hack for IEMobile 10 on windows 8
			this.ieMobileHack();
			this.updateUI(this.getTrainerCookie());
		},

		getTrainerCookie: function () {
			var cookie = new CookieComponent.Cookie();
			return JSON.parse(cookie.readCookie('TrainerDetails'));
		},

		updateUI: function (data) {
			if (!_.isNull(data)) {
				$('#TrainerId').val(data.trainerId);
				$('#spnShowFirstName, #spnFirstName').html(data.firstName);
				$('#spnLastName').html(data.lastName);
				$('#spnEmail').html(data.email);
				$('#user-avatar').css("background:url('" + data.imageUrl + "') no-repeat;");
			}
		},

		ieMobileHack: function () {
			var msViewportStyle;
			if ("-ms-user-select" in document.documentElement.style && navigator.userAgent.match(/IEMobile\/10\.0/)) {
				msViewportStyle = document.createElement("style");
				msViewportStyle.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}"));
				document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
			}
		}
	};

	module.exports = ComponentModule;
});