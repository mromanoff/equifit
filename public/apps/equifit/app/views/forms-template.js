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

    Form.template.PersonalInformation = _.template('\
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

    Form.template.InformedConsent = _.template('\
            <div><h3>Informed Consent</h3>\
            <p>The Equifit is a measure of your overall fitness level. It is not intended as a formal “stress test.”</p>\
            <h3>Explanation of the fitness evaluation</h3>\
            <p>The Equifit includes measurements of weight, percent body fat, resting heart rate, blood pressure, flexibility, muscle strength and muscle endurance. You will also be performing the following: a functional movement screen (FMS), a passive range of motion screen, and an estimated VO2Max test. We may stop any test at any time because of signs of fatigue or discomfort. During the performance of the test, a personal trainer will monitor your heart rate.</p>\
            <h3>Risks and discomfort</h3>\
            <p>here exists the possibility of certain changes during the Equifit. They include abnormal blood pressure, fainting, disorders of the heart beat, and in very rare instances, heart attack. Every effort will be made to minimize these discomforts by a preliminary screen and by observation during the testing.</p>\
            <h3>Benefits to be expected</h3>\
            <p>The information obtained during this test will help you gauge your fitness level and will be used to develop effective, goal-directed fitness programs.</p>\
            <h3>Inquiries</h3>\
            <p>If you have any concerns or questions, please ask us for further explanations</p>\
            <h3>Freedom of consent</h3>\
            <p>Your permission to perform the Equifit is voluntary. You are free to decline consent or participation if you so desire</p>\
            <form>\
                <div class="odd"\
                    <p>I have read this form, and I understand the test procedures I will perform. I consent to participate in the Equifit and understand that the information obtained during this evaluation may be used for statistical purposes</p>\
                    <div data-fields="consent01"></div>\
                </div>\
            </form>\
            </div>\
    ');

});
