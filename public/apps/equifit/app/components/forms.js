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
            return (_.isEqual(this.getValue(), this.getCondition())) ? this.showTarget() : this.hideTarget();
        },

        toggleRadio: function () {
            return (_.isEqual(this.getValue(), this.getCondition()[0])) ? this.showTarget() : this.hideTarget();
        },

        toggleHelp: function () {
            return (_.isEqual(this.getValue(), this.getCondition()[0])) ? this.showHelp() : this.hideHelp();
        },
        getWaisteToHipRatio: function () {
            console.group('getWaisteToHipRatio');
            console.log('%cvalues to devide: %o', 'color: lime; background: #444', this.getTarget());
            console.groupEnd();
            var fields = this.getTarget();

            this.form.on(this.getEvents(), function (form, editor) {
                var a = +form.fields[fields[0]].getValue();
                var b = +form.fields[fields[1]].getValue();
                var result = _.isNaN(this.divide(a, b)) ? '' : this.divide(a, b).toFixed(2);
                this.editor.setValue(result);
            }, this);
        },

        getSumOfSkinFolds: function () {
            console.group('getSumOfSkinFolds');
            console.log('%cvalues to sum: %o', 'color: lime; background: #444', this.getTarget());
            console.groupEnd();

            var fields = this.getTarget();

            //TODO do it better with _.values() + _.reduce()
            this.form.on(this.getEvents(), function (form, editor) {
                var a = +form.fields[fields[0]].getValue();
                var b = +form.fields[fields[1]].getValue();
                var c = +form.fields[fields[2]].getValue();
                var d = +form.fields[fields[3]].getValue();
                var sum = _.reduce([a, b, c, d], function (memo, num) {
                    return memo + num;
                }, 0);

                var result = _.isNaN(sum) ? '' : sum.toFixed();
                this.editor.setValue(result);
            }, this);
        },

        getLeanBodyMass: function () {
            console.group('getLeanBodyMass');
            console.log('%cCalculation = Body Weight - (Body Weight x Body Fat%) %o', 'color: lime; background: #444', this.getTarget());
            console.groupEnd();

            var fields = this.getTarget();

            //TODO do it better with _.values() + _.reduce()
            this.form.on(this.getEvents(), function (form, editor) {
                var a = +form.fields[fields[0]].getValue();
                var b = +form.fields[fields[1]].getValue();

                //Calculation = Body Weight - (Body Weight x Body Fat%)    Body Fat = 0.0(5)
                var result =  this.subtract(a, this.multiply(a, this.divide(b, 100)).toFixed(2));
                this.editor.setValue( _.isNaN(result) ? '' : result);
            }, this);
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

        getEvents: function () {
            return _.map(this.getTarget(), function (field) {
                return field + ':change'
            }).join(' ');
        },

        showHelp: function () {
            // easy to have class name here then update all record in database. 'help-block'
            this.editor.$el.find('.' + this.getTarget() + '-block').slideDown(200);
        },

        hideHelp: function () {
            // easy to have class name here then update all record in database. 'help-block'
            this.editor.$el.find('.' + this.getTarget() + '-block').slideUp(200);
        },

        hideTarget: function () {
            _.each(this.getTarget(), function (field) {
                this.form.fields[field].$el.hide();  //TODO: slideDown() doesn't work. fix it.
            }, this);
        },

        showTarget: function () {
            _.each(this.getTarget(), function (field) {
                this.form.fields[field].$el.slideDown(200);
            }, this);
        },

        subtract: function (x, y) {
            return x - y;
        },

        multiply: function (x, y) {
            return x * y;
        },

        divide: function (a, b) {
            return (b === 0) ? a : (a / b);
        },

        bind: function (callback) {
            this.form.on(this.editor.key + ':change', function () {
                this[callback]();
            }, this);
        },

        init: function (callback) {
            if (_.isFunction(this[callback])) {
                this[callback]();
                this.bind(callback);
            }
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