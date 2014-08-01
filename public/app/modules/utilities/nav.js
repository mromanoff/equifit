// Utilities module
define([
    "localStorage",
    "modules/utilities/cookie"
],

// Map dependencies from above array.
    function (LocalStorage,Cookie) {
    	  "use strict";

    	  var Nav = {};
    	 /* Nav.$navCollapse = $('#navCollapse');
    	  Nav.$btnNavbar = $('.btn-navbar');*/

    	  Nav.init = function () {


    	  	  // hack for IEMobile 10 on windows 8
    	  	  if ("-ms-user-select" in document.documentElement.style && navigator.userAgent.match(/IEMobile\/10\.0/)) {
    	  	  	  var msViewportStyle = document.createElement("style");
    	  	  	  msViewportStyle.appendChild(
                document.createTextNode("@-ms-viewport{width:auto!important}")
            );
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

    	  	  $('#jqCalenderNav').click(function (e) {
    	  	  	  e.preventDefault();
    	  	  	  var url = LocalStorage.calender.getUrl();
    	  	  	  if (!_.isEmpty(url)) {
    	  	  	  	  window.history.replaceState({}, document.title, url);
    	  	  	  	  location.href = url;
    	  	  	  }
    	  	  	  else {
    	  	  	  	  location.href = $(this).find('a').attr('href');
    	  	  	 }
		            return false;
		        });

    	  	/*  Nav.$navCollapse.on('click', 'li', function () {
    	  	  	  Nav.$navCollapse.find('.active').removeClass('active');
	    	  	  $(this).addClass('active');
    	  	  	  Nav.$btnNavbar.trigger('click');
    	  	  });*/

    	  };
    	  // Return the module for AMD compliance.
    	  return Nav;
    });