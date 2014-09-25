/**
 * Include this template file after backbone-forms.amd.js to override the default templates
 *
 * 'data-*' attributes control where elements are placed
 */
define(['jquery', '../../bower_components/lodash/dist/lodash.underscore', 'backbone', 'backbone-forms'], function($, _, Backbone) {
    'use strict';

    var Form = Backbone.Form;


    /**
     * Bootstrap 2 templates
     */
    Form.template = _.template('\
    <form class="form-inline" data-fieldsets></form>\
  ');


    Form.Fieldset.template = _.template('\
    <fieldset data-fields>\
      <% if (legend) { %>\
        <legend><%= legend %></legend>\
      <% } %>\
    </fieldset>\
  ');


    Form.Field.template = _.template('\
    <div class="control-group field-<%= key %>">\
      <label class="control-label" for="<%= editorId %>"><%= title %></label>\
      <div class="controls">\
        <span data-editor></span>\
        <div class="help-inline" data-error></div>\
        <div class="help-block"><%= help %></div>\
      </div>\
    </div>\
  ');


    Form.NestedField.template = _.template('\
    <div class="field-<%= key %>">\
      <div title="<%= title %>" class="input-xlarge">\
        <span data-editor></span>\
        <div class="help-inline" data-error></div>\
      </div>\
      <div class="help-block"><%= help %></div>\
    </div>\
  ');

});
