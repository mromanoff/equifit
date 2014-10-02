define(function (require, exports, module) {
    'use strict';

    var ComponentModule = {};

    ComponentModule.Field = function(form, editor) {
        this.form = form;
        this.editor = editor;
        this.$el = this.editor.$el;
        this.condition = this.$el.data('condition');
        this.$target = _.isEmpty(this.$el.data('target')) ? this.$el.next() : this.$el.find('.' + this.$el.data('target')).addClass('warning');
    };

    ComponentModule.Field.prototype.toggle = function() {
        console.log('editor', this.editor.getValue(), 'condition', this.condition, '$target', this.$target);


        var value;

        if (_.isArray(this.editor.getValue())) {
            value = this.editor.getValue()[0];
        } else if (_.isString(this.editor.getValue())) {
            value = this.editor.getValue();
        } else {
            return false;
        }

        if (value === this.$el.data('condition')) {
            console.log('condition: true');
            this.$target.slideDown(300);

        } else {
            console.log('condition: false');
            this.$target.slideUp(300);
        }
    };

    ComponentModule.Field.prototype.bind = function() {
        this.$target.hide();

        this.form.on(this.editor.key + ':change', function () {
            this.toggle();
        }, this);
    };




    /// TODO POC dynamic calculations.

    ComponentModule.Field2 = function(form, editor) {


    };

    ComponentModule.Field2.prototype.bind = function() {
        this.$target.hide();

        this.form.on(this.editor.key + ':change', function () {
            this.toggle();
        }, this);
    };




    module.exports = ComponentModule;
});