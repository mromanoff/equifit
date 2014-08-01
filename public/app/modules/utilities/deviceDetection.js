define([], function(){
	var device = {};
	
	device.isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i) ? true : false;
		},
		BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i) ? true : false;
		},
		iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
		},
		Windows: function() {
			return navigator.userAgent.match(/IEMobile/i) ? true : false;
		},
		any: function() {
			return (EQUINOX.isMobile.Android() || EQUINOX.isMobile.BlackBerry() || EQUINOX.isMobile.iOS() || EQUINOX.isMobile.Windows());
		}
	};
	
	return device;
});