'use strict';

/**
 * @ngdoc function
 * @name whateverCtrl
 * @description
 * # whateverCtrl
 * Controller for Mock RP Config UI
 */
angular
    .module('mock_rp_config')
    .controller('mockRPConfigCtrl',
            ['$scope', '$filter', '$timeout', 'moPaginationService', 'corePopupService', 'resourceUrlsService', 'dataService',
                'attributeModificationService', 'errorService', 'mockRPDataService',
        function ($scope, $filter, $timeout, moPaginationService, corePopupService, resourceUrlsService, dataService,
                  attributeModificationService, errorService, mockRPDataService) {

            // Copy JS variables set up by the JSP into the scope
            $scope.baseUrl = baseUrl;
            $scope.parameters = parameters;

            // Initialize services
            $scope.resourceUrlsService = resourceUrlsService;
            $scope.resourceUrlsService.init($scope.baseUrl + "resources/");
            $scope.dataService = dataService;
            $scope.dataService.init($scope.baseUrl + "resources/");
            $scope.attributeModificationService = attributeModificationService;
            $scope.errorService = errorService;
            $scope.errorService.init();

            $scope.mockRPDataService = mockRPDataService;

            $scope.modifyAttribute = function(attributeGroups, attributeGroup) {
                $scope.attributeModificationService.startModifying(false, attributeGroups, attributeGroup);
/*                var scope = $scope.$new();
                if (attributeGroup) {
                    scope.attributeGroup = attributeGroup;
                }
                else {
                    scope.attributeGroup = {};
                }
                scope.attributeGroups = attributeGroups;

                corePopupService.displayPopup(resourceUrlsService.resourceUrls.mockRPConfig.attributeModify, scope,
                    {"windowClass":"modify-modal","backdrop":"static","keyboard":false});*/
            };
        }
    ]);
