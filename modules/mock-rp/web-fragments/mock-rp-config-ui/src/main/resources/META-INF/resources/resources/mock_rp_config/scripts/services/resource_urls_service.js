'use strict';

/**
 * @ngdoc service
 * @name resourceUrlsService
 * @description
 * # resourceUrlsService
 * Resource URLs Service for Mock RP Config UI
 */
angular
    .module('mock_rp_config')
    .service('resourceUrlsService',
        function resourceUrlsService() {
            this.resourceUrls = {};
            this.init = function(resourcesUrl) {
                this.resourceUrls.pagination = {};
                this.resourceUrls.pagination.template =
                    resourcesUrl + "pagination/html/pagination.html";
                this.resourceUrls.pagination.smallTemplate =
                    resourcesUrl + "pagination/html/pagination-small.html";
                this.resourceUrls.pagination.firstIcon =
                    resourcesUrl + "pagination/images/first-page-small.png";
                this.resourceUrls.pagination.previousIcon =
                    resourcesUrl + "pagination/images/previous-page-small.png";
                this.resourceUrls.pagination.nextIcon =
                    resourcesUrl + "pagination/images/next-page-small.png";
                this.resourceUrls.pagination.lastIcon =
                    resourcesUrl + "pagination/images/last-page-small.png";

                this.resourceUrls.mockRP =
                    resourcesUrl + "mock_rp/html/mock_rp.html";

                this.resourceUrls.mockRPConfig = {};
                this.resourceUrls.mockRPConfig.attributeModify =
                    resourcesUrl + "mock_rp_config/html/views/attribute_modify.html";
            };
        }
    );