define(function (require, exports, module) {
    'use strict';

    var ComponentModule = {};

    ComponentModule.Field = function (form, editor) {
        this.form = form;
        this.editor = editor;
    };

    ComponentModule.Field.prototype = {
        // actual callbacks
        toggleCheckbox: function () {
            console.log('toggle checkbox', this.getValue());
            return (this.getValue()) ? this.showTarget() : this.hideTarget();
        },

        toggleRadio: function () {
            return (_.isEqual(this.getValue(),this.getCondition()[0])) ? this.showTarget() : this.hideTarget();
        },

        toggleRadios: function () {
            //return (_.isEqual(this.getValue(),this.getCondition()[0])) ? this.showTarget() : this.hideTarget();
        },

        toggleHelp: function () {
            return (_.isEqual(this.getValue(),this.getCondition()[0])) ? this.showHelp() : this.hideHelp();
        },


        // helper funcntions
        getTarget: function () {
            return this.editor.$el.data('target').split(',');
        },

        getCondition: function () {
            return this.editor.$el.data('condition').split(',');
        },

        getValue: function () {
            return this.editor.getValue();
        },

        showHelp: function () {
            this.editor.$el.find('.' + this.getTarget() + '-block').slideDown(200).addClass('warning');
        },

        hideHelp: function () {
            this.editor.$el.find('.' + this.getTarget() + '-block').hide();
        },

        hideTarget: function () {
            _.each(this.getTarget(), function (field) {
                this.form.fields[field].$el.hide();
            },this);
        },

        showTarget: function () {
            _.each(this.getTarget(), function (field) {
                this.form.fields[field].$el.slideDown(200);
            }, this);
        },

        bind: function (callback) {
            this.form.on(this.editor.key + ':change', function () {
                this[callback]();
            }, this);
        },

        init: function (callback) {
            if(_.isFunction(this[callback])) {
                this[callback]();
                this.bind(callback);
            };

        }
    };



    //ComponentModule.Field = function(form, editor) {
    //    this.form = form;
    //    this.editor = editor;
    //    this.$el = this.editor.$el;
    //    this.condition = this.$el.data('condition');
    //    this.$target = _.isEmpty(this.$el.data('target')) ? this.$el.next() : this.$el.find('.' + this.$el.data('target')).addClass('warning');
    //};
    //
    //ComponentModule.Field.prototype = {
    //    toggle: function () {
    //        var value;
    //
    //        if (_.isArray(this.editor.getValue())) {
    //            value = this.editor.getValue()[0];
    //        } else if (_.isString(this.editor.getValue())) {
    //            value = this.editor.getValue();
    //        } else {
    //            return false;
    //        }
    //
    //        if (value === this.$el.data('condition')) {
    //            this.$target.slideDown(300);
    //
    //        } else {
    //            this.$target.slideUp(300);
    //        }
    //    },
    //
    //    bind: function () {
    //        this.$target.hide();
    //
    //        this.form.on(this.editor.key + ':change', function () {
    //            this.toggle();
    //        }, this);
    //    }
    //};


    //ComponentModule.SaveData = function (form, editor) {
    //    this.form =  form;
    //    this.editor = editor;
    //};
    //
    //ComponentModule.SaveData.prototype = {
    //
    //    save: function () {
    //        this.form.commit();
    //        console.log('auto save data function', this.form.model.toJSON());
    //
    //        this.model.set({
    //            data: this.form.model.toJSON()
    //        });
    //
    //        msgBus.commands.execute('form:update', this.model);
    //    }
    //};



    /// TODO POC dynamic calculations.

    //ComponentModule.Field2 = function(form, editor) {
    //
    //
    //};
    //
    //ComponentModule.Field2.prototype.bind = function() {
    //    this.$target.hide();
    //
    //    this.form.on(this.editor.key + ':change', function () {
    //        this.toggle();
    //    }, this);
    //};




    module.exports = ComponentModule;
});