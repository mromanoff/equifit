// Utilities module
define([
    "utilities/cookie"
],

// Map dependencies from above array.
    function (Cookie) {
    	"use strict";

    	var Nav = {};
    	/* Nav.$navCollapse = $('#navCollapse');
		 Nav.$btnNavbar = $('.btn-navbar');*/

    	Nav.init = function () {

    		// hack for IEMobile 10 on windows 8
    		if ("-ms-user-select" in document.documentElement.style && navigator.userAgent.match(/IEMobile\/10\.0/)) {
    			var msViewportStyle = document.createElement("style");
    			msViewportStyle.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}"));
    			document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
    		}

    		// update main header
    		var data = JSON.parse(Cookie.readCookie('TrainerDetails'));

    		if (!_.isNull(data)) {
    			$('#TrainerId').val(data.trainerId);
    			$('#spnShowFirstName, #spnFirstName').html(data.firstName);
    			$('#spnLastName').html(data.lastName);
    			$('#spnEmail').html(data.email);
    			$('#user-avatar').css("background:url('" + data.imageUrl + "') no-repeat;");
    		}
    	};
    	// Return the module for AMD compliance.
    	return Nav;
    });