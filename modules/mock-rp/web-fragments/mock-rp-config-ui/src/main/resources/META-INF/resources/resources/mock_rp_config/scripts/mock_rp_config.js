'use strict';

/**
 * @ngdoc overview
 * @name mock_rp_config_ui
 * @description
 * # mock_rp_config_ui
 *
 * Main module of the Mock RP Config UI.
 */
angular
    .module('mock_rp_config', [
        'ui.bootstrap',
        'moPagination',
        'core',
        'mock_rp',
        'ngAnimate',
        'ngDraggable'
    ])
    .config(
        function($httpProvider, moPaginationConfig) {
            $httpProvider.defaults.headers.common.Pragma = 'no-cache';
            moPaginationConfig.pageSize = 10;
            moPaginationConfig.paginationControlTemplateUrl = baseUrl + "/resources/" + "/form471/html/pagination.html";
        }
    );
