'use strict';

/**
 * @ngdoc service
 * @name attributeModificationService
 * @description
 * # attributeModificationService
 * Attribute Modification Service for Mock RP Config UI
 */
angular
    .module('mock_rp_config')
    .service('attributeModificationService',
            ['coreUtils', 'lookupService',
        function modificationService(coreUtils, lookupService) {

            this.lookupService = lookupService;
            this.lookupService.init();
            this.popover = true;
            this.attributeGroups = null;
            this.attributeGroup = null;
            this.originalAttributeGroup = null;
            this.modifying = false;

            this.init = function() {
            };

            this.startModifying = function(popover, attributeGroups, attributeGroup) {
                this.popover = popover;
                this.attributeGroups = attributeGroups;
                if (attributeGroup) {
                    this.newAttribute = false;
                    this.attributeGroup = attributeGroup;
                    this.originalAttributeGroup = angular.copy(this.attributeGroup);
                }
                else {
                    this.newAttribute = true;
                    this.attributeGroup = {};
                    this.originalAttributeGroup = {};
                    this.attributeGroup.index = this.attributeGroups.length;
                    this.attributeGroups.push(this.attributeGroup);
                }
                this.modifying = true;
            };

            this.endModifying = function() {
                this.modifying = false;
            };

            this.updateAttributeGroupFields = function() {
                angular.extend(this.attributeGroup, lookupService.attributeGroupFields[this.attributeGroup.type]);
            };

            this.addSelectValue = function(attribute) {
                attribute.values.push({});
            };

            this.isDoneButtonEnabled = function() {
                return true;
            };

            this.done = function() {
                this.attributeGroup = null;
                this.endModifying();
            };

            this.cancel = function() {
                if (this.originalAttributeGroup.type) {
                    var index = this.attributeGroups.indexOf(this.attributeGroup);
                    this.attributeGroups[index] = this.originalAttributeGroup;
                }
                else {
                    this.attributeGroups.length = this.attributeGroups.length - 1;
                }
                this.attributeGroup = null;
                this.endModifying();
            };
        }
    ]);