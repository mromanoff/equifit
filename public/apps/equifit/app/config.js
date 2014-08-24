require.config({
    paths: {
        'underscore': '../bower_components/lodash/dist/lodash.underscore',
        'lodash': '../bower_components/lodash/dist/lodash',
        'template': '../bower_components/lodash-template-loader/loader',
        'jquery': '../bower_components/jquery/dist/jquery',
        'backbone': '../bower_components/backbone/backbone',
        'backbone.layoutmanager': '../bower_components/layoutmanager/backbone.layoutmanager',
        'backbone-forms': '../bower_components/backbone-forms/distribution.amd/backbone-forms',
        'moment': '../bower_components/moment/moment',
        'spin': '../bower_components/spin.js/spin',
        //'bootstrap': '../../../dist/bootstrap.min'
        'bootstrap': '../bower_components/bootstrap.min'
    },

    shim: {
        'bootstrap': ['jquery']
    },

    // This will help with cache issues related to development.
    //urlArgs: 'bust=' + Number(new Date()),

    deps: ['main']
});
