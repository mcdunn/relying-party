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

            // TODO: create attributeDragService and move this there
            $scope.attributeDragOver = function(index, object, event) {
                if (object.id != event.data.id) {
                    $scope.mockRPDataService.removeAttributeGroup(event.data);
                    $scope.mockRPDataService.insertAttributeGroup(event.data, index);
                }
            };

            // TODO: create attributeDragService and move this there
            $scope.attributeDrop = function(index, object, event) {
                $scope.mockRPDataService.removeAttributeGroup(event.data);
                $scope.mockRPDataService.insertAttributeGroup(event.data, index);
            };

            // TODO: move this to attributeModificationService
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
