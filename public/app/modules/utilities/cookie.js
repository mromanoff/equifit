// Utilities module
define([],

// Map dependencies from above array.
function () {
    "use strict";

    var Cookie = {
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
    // Return the module for AMD compliance.
    return Cookie;
});