'use strict';

/**
 * @ngdoc service
 * @name restConfigService
 * @description
 * # restConfigService
 * Rest Config Service for Mock RP UI
 */
angular
    .module('mock_rp')
    .service('mockRPRestConfigService',
        function restConfigService() {
            var config = {
                whateverSearch: baseUrl + "whatevers",
                whateverAdd: baseUrl + "whatevers",
                whateverRetrieve: baseUrl + "whatever/{0}",
                whateverModify: baseUrl + "whatever/{0}",
                whateverDelete:baseUrl + "whatever/{0}",
                whateversSave:baseUrl + "whatever/modifications"
            };

            this.getUrlConfiguration = function () {
                return config;
            };
        }
    );