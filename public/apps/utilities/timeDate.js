// Utilities module
define([],

// Map dependencies from above array.
function() {
    "use strict";

    var TimeDate = {
        days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],

        // helper functions
        shortDay: function (d) {
            return this.shortDays[d.getDay()];
        },

        month: function (d) {
            return this.months[d.getMonth()];
        },

        shortMonth: function (d) {
            return this.shortMonths[d.getMonth()];
        },

        shortMonthPrev: function (d) {
            return this.shortMonths[_.isEqual(d.getMonth(), 0) ? 11 : d.getMonth() - 1];
        },

        // week starts on sunday
        startDate: function (d) {
            d = new Date(d);
            var day = d.getDay(),
                diff = d.getDate() - day;
            return new Date(d.setDate(diff));
        },

        // week ends on saturday
        endDate: function (d) {
            d = new Date(d);
            var day = d.getDay(),
                diff = d.getDate() - day + 6;
            return new Date(d.setDate(diff));
        },

        // today date in 2013-6-24 format
        todayDate: function () {
            //var d = new Date();
            //return d.getFullYear() + '-' + (_.isEqual(d.getMonth(), 11) ? 12 : d.getMonth() + 1) + '-' + d.getDate();
            return this.iso8601(new Date());
        },

        newProjectionRollOutDate: '2013-6-23',

        // Date formats
        // 2013-12-01  used for URLs
        iso8601: function (d) {
            return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
        },

        // these are used for UI only.
        // AM/PM
        meridiemIndicator: function (d) {
            return ((d.getHours() >= 12) ? 'PM' : 'AM');
        },

        // 3:25 AM or 3:25 PM
        period: function (d) {
            return (((d.getHours() % 12) === 0) ? 12 : d.getHours() % 12) + ':' + ((d.getMinutes() < 10) ? ('0' + d.getMinutes()) : d.getMinutes()) + ' ' + this.meridiemIndicator(d);
        },

        //JAN 2012 Used for Month View
        shortDate: function (d) {
            return "<strong>" + this.shortMonth(d) + "</strong> " + d.getFullYear();
        },

        //  [Last Updated] Jun 13 @ 3:16 AM
        updatedOn: function (d) {
            return this.shortMonth(d) + ' ' + d.getDate() + ' @ ' + this.period(d);
        },

        // MON, Jan 21 - SUN, Jan 27 used in Week view
        weekRange: function (d) {
            var startDate = "<div><strong>" + this.shortDay(this.startDate(d)).toUpperCase() + "<span class='hidden-phone'>,&nbsp;</span></strong><div> " + this.shortMonth(this.startDate(d)) + " " + this.startDate(d).getDate() + "</div></div> <div>-</div>",
                endDate = "<div><strong>" + this.shortDay(this.endDate(d)).toUpperCase() + "<span class='hidden-phone'>,&nbsp;</span></strong><div>" + this.shortMonth(this.endDate(d)) + " " + this.endDate(d).getDate() + "</div></div>";
            return startDate + " " + endDate;
        },

        convertToAMPM: function (h, m) {
            //  if there is only one argument sent - it is time ex:1630  ( not hour and min)
            //   therefore h and m has to be extracted here  #1#
            if (arguments.length === 1) {
                m = h % 100;
                h = parseInt(h / 100, 10);
                m = (m === 0) ? '0' + m : m;
            }
            var hour = (h % 12);
            hour = (hour === 0) ? 12 : hour;
            var ap = (h >= 12) ? ' PM' : ' AM';
            return hour + ':' + m + ap;
        }
    };

    // Return the module for AMD compliance.
    return TimeDate;
});
