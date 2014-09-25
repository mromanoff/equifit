define(function (require, exports, module) {
    'use strict';

    var Backbone = require('backbone');
    var LoadingView = require('views/loading');
    var loadinglModule = {};

    var layout = new Backbone.Layout({
        el: 'body'
    });

    loadinglModule.show = function (options) {
        options = options || {message: 'Loading...'};
        layout.insertView('', new LoadingView({
            model: new Backbone.Model(options)
        })).render();
    };

    loadinglModule.hide = function () {
        layout.removeView(function(nestedView){
            nestedView.remove();
        });
    };

    module.exports = loadinglModule;
});
