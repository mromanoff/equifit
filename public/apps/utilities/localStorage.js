// Localstorage module
define([
    "../../bower_components/jquery/jquery",
    "cookie"
],
// Map dependencies from above array.
    function ($, Cookie) {
        "use strict";

        // Private
        var config = {
            version: "ver2.4",
            trainerDetails: $.parseJSON(Cookie.readCookie('TrainerDetails')),
            appId: 'PTTrainer',
            projections: {
                prefix: 'projections'
            },
            calender: {
                prefix: 'calender'
            },
            clients: {
                prefix:'client'
            }
        };

        var checkAndSaveTrainerInfo = function (obj) {
            if (supportBrowser) {
                if (getItem(obj.key) !== obj.TrainerId || getItem("versionInfo") !== config.version) {
                    clear();
                    saveItem(obj.key, obj.TrainerId);
                    saveItem("versionInfo", config.version);
                }
            }
        };

        var getItem = function (key) {
            if (supportBrowser) {
                var store = window.localStorage;
                try {
                    return $.parseJSON(store.getItem(key));
                } catch (e) {
                    if (e === DOMException.QUOTA_EXCEEDED_ERR) {
                        console.log('Quota exceeded!'); //data wasn't successfully saved due to quota exceed so throw an error
                    }
                }
            }
            return null;
        };

        var saveItem = function (key, value) {
            if (supportBrowser) {
                var store = window.localStorage;
                try {
                    store.setItem(key, JSON.stringify(value));
                } catch (e) {
                    if (e === DOMException.QUOTA_EXCEEDED_ERR) {
                        console.log('Quota exceeded!'); //data wasn't successfully saved due to quota exceed so throw an error
                    }
                }
            }
        };

        var clear = function () {
            if (supportBrowser) {
                window.localStorage.clear();
            }
        };

        var getKey = function (dynamic) {
            var keyGen = config.appId + ':' + config.trainerDetails.trainerId + ':' + dynamic.prefix + ':';
            // console.log(keyGen);
            return keyGen;
        };

        var refreshLocalStorage = function (prefix, data) {
            if (supportBrowser) {
                var dates = data.split(',');
                for (var i = 0; i < dates.length; i++) {
                    window.localStorage.removeItem(getKey(prefix) + dates[i]);
                }
            }
        };

        var supportBrowser = function () {
            return !!(window.localStorage !== null);
        };


        // Public methods
        var LocalStorage = {
            refreshData: function (prefix, data) {
                refreshLocalStorage(prefix, data);
            }
        }; //app.module();

        LocalStorage.projections = {
            getUrl: function () {

                // alert('new app get');

                var keyGen = getKey(config.projections) + 'url';
                checkAndSaveTrainerInfo({ "TrainerId": config.trainerDetails.trainerId, "key": "TrainerId" });
                var data = getItem(keyGen);
                if (data !== null) {
                    return data;
                }
                return null;
            },

            saveUrl: function (url) {

                // alert('new app set');

                var keyGen = getKey(config.projections) + 'url';
                checkAndSaveTrainerInfo({ "TrainerId": config.trainerDetails.trainerId, "key": "TrainerId" });
                if (supportBrowser()) {
                    saveItem(keyGen, url);
                }
            }
        };

        LocalStorage.calender = {
            getUrl: function () {
                var keyGen = getKey(config.calender) + 'url';
                checkAndSaveTrainerInfo({ "TrainerId": config.trainerDetails.trainerId, "key": "TrainerId" });
                var data = getItem(keyGen);
                if (data !== null) {
                    return data;
                }
                return null;
            }
        };

        LocalStorage.clients = {
            saveClients: function (data) {
                var keygen = getKey(config.clients) + 'List';
                checkAndSaveTrainerInfo({ "TrainerId": config.trainerDetails.trainerId, "key": "TrainerId" });
                if (supportBrowser()) {
                    var model = {
                        timestamp: new Date().getTime(),
                        clients: data
                    };
                    saveItem(keygen, model);
                }
                
            }
        };


        // Return the module for AMD compliance.
        return LocalStorage;
    });
