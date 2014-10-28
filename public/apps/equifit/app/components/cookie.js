define(function (require, exports, module) {
	'use strict';
	var ComponentModule = {};

	ComponentModule.Cookie = function(){};
	ComponentModule.Cookie.prototype = {
		readCookie: function (name) {
			var n = name + "=";
			var ca = document.cookie.split(';');
			for (var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) == ' ') {
					c = c.substring(1, c.length);
				}
				if (c.indexOf(n) == 0) {
					return c.substring(n.length, c.length);
				}
			}
			return null;
		}
	};

	module.exports = ComponentModule;
});
