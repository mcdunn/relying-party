'use strict';

/**
 * @ngdoc function
 * @name mockRPCtrl
 * @description
 * # mockRPCtrl
 * Controller for Mock RP UI
 */
angular
    .module('mock_rp')
    .controller('mockRPCtrl',
            ['$scope', '$filter', '$timeout', 'moPaginationService', 'mockRPResourceUrlsService', 'mockRPDataService',
                'mockRPModificationService', 'mockRPErrorService',
        function ($scope, $filter, $timeout, moPaginationService, mockRPResourceUrlsService, mockRPDataService,
                  mockRPModificationService, mockRPErrorService) {

            // Copy JS variables set up by the JSP into the scope
            $scope.baseUrl = baseUrl;
            $scope.parameters = parameters;

            // Initialize services
            $scope.resourceUrlsService = mockRPResourceUrlsService;
            $scope.resourceUrlsService.init($scope.baseUrl + "resources/");
            $scope.dataService = mockRPDataService;
            $scope.dataService.init($scope.baseUrl + "resources/");
            $scope.modificationService = mockRPModificationService;
            $scope.modificationService.init();
            $scope.errorService = mockRPErrorService;
            $scope.errorService.init();

            $scope.add = function(attributeGroup) {
                attributeGroup.adding = true;
            };

            $scope.confirm = function() {
                console.log("confirm called");
            }
        }
    ]);
