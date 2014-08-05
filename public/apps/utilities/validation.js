// Utilities module
define([],

// Map dependencies from above array.
function () {
    "use strict";
    var Validate = {};

    // Validation regex
    Validate.phone =  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return Validate;
});
