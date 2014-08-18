/*
 define(function (require, exports, module) {
 'use strict';

 var app = require('app');
 var msgBus = require('msgBus');
 var ConsentFormView = require('views/consent-form');
 var HeaderView = require('views/header');
 var BreadcrumbView = require('views/breadcrumb');
 var ConsentFormModule = {};

 ConsentFormModule.init = function () {
 app.useLayout('layouts/main').setViews({
 '.header': new HeaderView(),
 '.breadcrumb-container': new BreadcrumbView(),
 '.main-container': new ConsentFormView()
 }).render();

 msgBus.trigger('equifit:title:update', app.store.get('title'));
 };

 module.exports = ConsentFormModule;
 });
 */
