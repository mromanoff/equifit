require([
  "../app/app",
  "router"
],

function(app, Router) {
   "use strict";

  // Define your master router on the application namespace and trigger all
  // navigation from this instance.
  app.router = new Router();

  // Trigger the initial route and enable HTML5 History API support, set the
  // root folder to '/' by default.  Change in app.js.
  Backbone.history.start({ pushState: true, root: app.root });

  // All navigation that is relative should be passed through the navigate
  // method, to be processed by the router. If the link has a `data-bypass`
  // attribute, bypass the delegation completely.
  $(document).on("click", "a[href]:not([data-bypass])", function(evt) {
    // Get the absolute anchor href.
    var href = { prop: $(this).prop("href"), attr: $(this).attr("href") };
    // Get the absolute root.
    var root = location.protocol + "//" + location.host + app.root;

    // Ensure the root is part of the anchor href, meaning it's relative.
    if (href.prop.slice(0, root.length) === root) {
      // Stop the default event to ensure the link will not cause a page
      // refresh.
      evt.preventDefault();

      // `Backbone.history.navigate` is sufficient for all Routers and will
      // trigger the correct events. The Router's internal `navigate` method
      // calls this anyways.  The fragment is sliced from the root.
      Backbone.history.navigate(href.attr, true);
    }
 });
    if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
        $('#warningPopupUpgrade').modal('show');
    }

    /* Hack for header on mobile browsers */

    var mainNavHeight = $('.navbar.main-nav').height() - 1;
    
    function posAbsolute() {
        $('.navbar.main-nav, .projections-header').css({
            position: 'absolute', 
            top: 0
        });
    }

    function posFixed() {
        $('.navbar.main-nav, .projections-header').css({
            position: 'fixed'
        });
        
        $('.projections-header').css({
             top: mainNavHeight
        });
     }
    
    if (app.device.isMobile.iOS()) {
        $('body').on('focus click', 'textarea, input, select', function(e) {
            e.stopPropagation();
            posAbsolute();
        });

        $('body').on('blur', 'textarea, input, select', function() {
            posFixed();
        });

        $('body').on('click', function() {
            posFixed();
        });
    } else if (app.device.isMobile.Android()) { // This is only for android default browser
        $(window).load(function() {
            posFixed();
        });

        $(window).scroll(function() {
            posFixed();
        });
    }
});
