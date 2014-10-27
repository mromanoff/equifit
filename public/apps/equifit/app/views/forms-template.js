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
    <form class="form-inline">\
      <div data-fieldsets></div>\
      <% if (submitButton) { %>\
        <button type="submit" class="btn"><%= submitButton %></button>\
      <% } %>\
    </form>\
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
      <label class="control-label" for="<%= editorId %>">\
        <% if (titleHTML){ %><%= titleHTML %>\
        <% } else { %><%- title %><% } %>\
      </label>\
      <div class="controls">\
        <span data-editor></span>\
        <div class="help-inline" data-error></div>\
        <div class="help-block"><%= help %></div>\
      </div>\
    </div>\
  ');

    Form.NestedField.template = _.template('\
    <div class="field-<%= key %>">\
      <div title="<% if (titleHTML){ %><%= titleHTML %><% } else { %><%- title %><% } %>" class="input-xlarge">\
        <span data-editor></span>\
        <div class="help-inline" data-error></div>\
      </div>\
      <div class="help-block"><%= help %></div>\
    </div>\
  ');


    // Custom templates
    Form.template.PerformanceTesting = _.template('\
        <form class="form-horizontal">\
            <fieldset data-fields="performancetesting01,performancetesting02,performancetesting03"></fieldset>\
            <table class="table table-striped">\
                <tr>\
                    <th>Stage</th>\
                    <th>Time</th>\
                    <th>Speed</th>\
                    <th>Speed</th>\
                    <th></th>\
                </tr>\
                <tr>\
                    <td>1</td>\
                    <td>0-3 mins</td>\
                    <td>1.7 mph</td>\
                    <td>10%</td>\
                    <td><div data-fields="performancetesting04"></div></td>\
                </tr>\
                <tr>\
                    <td>2</td>\
                    <td>3-6 mins</td>\
                    <td>2.5 mph</td>\
                    <td>12%</td>\
                    <td><div data-fields="performancetesting05"></div></td>\
                </tr>\
                <tr>\
                    <td>3</td>\
                    <td>6-9 mins</td>\
                    <td>3.4 mph</td>\
                    <td>14%</td>\
                    <td><div data-fields="performancetesting06"></div></td>\
                </tr>\
                <tr>\
                    <td>4</td>\
                    <td>9-12 mins</td>\
                    <td>4.5 mph</td>\
                    <td>15%</td>\
                    <td><div data-fields="performancetesting07"></div></td>\
                </tr>\
                <tr>\
                    <td>5</td>\
                    <td>12-15 mins</td>\
                    <td>5.5 mph</td>\
                    <td>15%</td>\
                    <td><div data-fields="performancetesting08"></div></td>\
                </tr>\
                <tr>\
                    <td>6</td>\
                    <td>15-18 mins</td>\
                    <td>6.5 mph</td>\
                    <td>15%</td>\
                    <td><div data-fields="performancetesting09"></div></td>\
                </tr>\
            </table>\
            <fieldset data-fields="performancetesting10,performancetesting11"></fieldset>\
        </form>\
        ');

    Form.template.PersonalInformation= _.template('\
        <form>\
            <legend>Client Information</legend>\
            <div class="row-fluid">\
                <div class="span6">\
                    <div class="gender" data-fields="personal01"></div>\
                </div>\
                <div class="span6">\
                    <div class="age" data-fields="personal02"></div>\
                </div>\
            </div>\
            <legend>Equifit Information</legend>\
            <div class="row-fluid">\
                <div class="span6">\
                    <div class="date" data-fields="personal03"></div>\
                </div>\
                <div class="span6">\
                    <div class="club" data-fields="personal04"></div>\
                </div>\
            </div>\
        </form>\
    ');

});
