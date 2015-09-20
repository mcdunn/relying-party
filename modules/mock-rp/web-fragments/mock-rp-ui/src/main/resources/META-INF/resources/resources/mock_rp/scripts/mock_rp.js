'use strict';

/**
 * @ngdoc overview
 * @name mock_rp
 * @description
 * # mock_rp_ui
 *
 * Main module of the Mock RP UI.
 */
angular
    .module('mock_rp', [
        'ui.bootstrap',
        'moPagination',
        'core'
    ])
    .config(
        function($httpProvider, moPaginationConfig) {
            $httpProvider.defaults.headers.common.Pragma = 'no-cache';
            moPaginationConfig.pageSize = 10;
            moPaginationConfig.paginationControlTemplateUrl = baseUrl + "/resources/" + "/core/html/pagination.html";
        }
    );
