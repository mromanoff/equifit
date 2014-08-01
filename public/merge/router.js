define([
// Application.
        '../app/app',
        'modules/utilities/localStorage',
        'modules/utilities/timeDate'
    ],

    function (app, LocalStorage, TimeDate) {
        'use strict';

        // Defining the application router, you can attach sub routers here.
        var Router = Backbone.Router.extend({
            routes: {
                'projections(/)': 'projectionsDefaultPage',
                'projections/:week(/)': 'projectionsDefaultPage',
                'projections/:month(/)': 'projectionsDefaultPage',
                'projections/:week/:date(/)': 'projections',
                'projections/:month/:date(/)': 'projections',
                'settings(/)': 'settings',
                'settings/availability(/)': 'availability',
                'settings/availability/:query': 'availability',
                'settings/contact(/)': 'contact',
                'clients/client/:query': 'clientDetail',
//                'equifit(/)': 'equifit',
//                'equifit/:id': 'equifit',
//                'equifit/:id/forms/:id': 'equifit',
                'equifit(/)': 'equifit',
                'equifit/create(/)': 'equifitCreate',
                'equifit/create/forms/:id': 'equifitCreate',
                'equifit/edit/:id': 'equifitEdit',
                'equifit/edit/:id/forms/:id': 'equifitEdit'
            },

            projectionsDefaultPage: function (query) {
                // strip '/' from url fix routing issues
                var url = LocalStorage.projections.getUrl();
                if (!_.isEmpty(url)) {
                    url = url + TimeDate.iso8601(new Date());
                    this.navigate(url, { trigger: true });
                } else {
                    var urlFix = location.pathname.replace(/\/$/, '');
                    url = _.isUndefined(query) ? '/projections/week/' + TimeDate.iso8601(new Date()) : urlFix + '/' + TimeDate.iso8601(new Date());
                    this.navigate(url, { trigger: true });
                    //location.href = url;
                }
            },

            projections: function (query, date) {
                // for week view do not show data before 2012-06-23 as per business rule.
                if (_.isEqual(query, 'week')) {
                    var requestedDate = new Date(date.replace(/-/g, '/')),
                        newProjectionRollOutDate = new Date(TimeDate.newProjectionRollOutDate.replace(/-/g, '/'));

                    if (requestedDate < newProjectionRollOutDate) {
                        var url = '/projections/week/' + TimeDate.newProjectionRollOutDate;
                        this.navigate(url, { trigger: true });
                        //location.href = url;
                    }
                }
                require(['modules/projections'],
                    function (Projections) {
                        Projections.renderLayout(query, date);
                    });
            },

            availability: function (query) {
                if (!_.isEmpty(query)) {
                    this.navigate('settings/availability', { trigger: true });
                    return false;
                }

                require(['modules/availability'],
                    function (Availability) {
                        Availability.renderLayout();
                    });
            },

            settings: function () {
                require(['modules/settings'],
                    function (Settings) {
                        Settings.renderLayout();
                    });
            },

            contact: function () {
                require(['modules/contact'],
                    function (Contact) {
                        Contact.renderLayout();
                    });
            },

            clientDetail: function (query) {
                require(['modules/clientDetail'],
                    function (ClientDetail) {
                        ClientDetail.renderLayout(query);
                    });
            },

            equifit: function () {
                app.subApp = 'equifit';

                require(['modules/equifit/index'],
                    function (Equifit) {
                        Equifit.renderLayout();
                });
            },

            equifitCreate: function (formId) {
                app.subApp = 'equifit';
                app.flow = 'create';

                if (_.isUndefined(formId)) {
                    require(['modules/equifit/forms'],
                        function (Equifit) {
                            Equifit.renderLayout();
                        });
                }
                else {
                    require(['modules/equifit/' + formId],
                        function (Equifit) {
                            Equifit.renderLayout();
                        });
                }
            },

            equifitEdit: function (equifitId, formId) {
                app.subApp = 'equifit';
                app.flow = 'edit';
                app.equifitId = equifitId;
                app.formId = formId;

                if (_.isUndefined(formId)) {
                    console.log('render forms collection for equifit id ', equifitId);
                    require(['modules/equifit/forms'],
                        function (Equifit) {
                            Equifit.renderLayout(equifitId);
                        });
                }
                else {
                    //require(['modules/equifit/' + formId],
                    require(['modules/equifit/form'],
                        function (Equifit) {
                            Equifit.renderLayout(equifitId, formId);
                        });
                }
            }
        });

        return Router;
    });