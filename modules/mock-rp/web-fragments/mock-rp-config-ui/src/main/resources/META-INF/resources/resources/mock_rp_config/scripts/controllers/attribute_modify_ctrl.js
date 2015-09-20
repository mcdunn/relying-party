'use strict';

/**
 * @ngdoc function
 * @name attributeModifyCtrl
 * @description
 * # attributeAddCtrl
 * Controller for Modifying Attributes
 */
angular
    .module('mock_rp_config')
    .controller('attributeModifyCtrl',
            ['$scope', 'attributeModificationService',
        function ($scope, attributeModificationService) {

            $scope.done = function() {
                attributeModificationService.done();
                if (attributeModificationService.popover) {
                    $scope.$dismiss();
                }
            };

            $scope.cancel = function() {
                attributeModificationService.cancel();
                if (attributeModificationService.popover) {
                    this.$dismiss();
                }
            };

            $scope.toggleExpanded = function(section, field) {
                if (field) {
                    section[field] = !section[field];
                }
                else {
                    section.expanded = !section.expanded;
                }
            };
        }
    ]);
