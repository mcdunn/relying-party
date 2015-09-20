'use strict';

/**
 * @ngdoc service
 * @name dataService
 * @description
 * # dataService
 * Data Service for Mock RP Config UI
 */
angular
    .module('mock_rp_config')
    .service('dataService',
            ['$q', '$templateCache', 'coreDataService', 'restService', 'errorService', 'validationService',
                'mockRPDataService',
        function dataService($q, $templateCache, coreDataService, restService, errorService, validationService,
                             mockRPDataService) {

            this.pageHeader = {};
            this.contentHeader = {};
            this.intro = {};
            this.attributeGroups = {};
            this.actions = {};
            this.contentFooter = {};
            this.pageFooter = {};

            this.toggleExpanded = function(section) {
                section.expanded = !section.expanded;
            };

            this.updateTemplate = function(div) {
                mockRPDataService.updateTemplate(div);
            };

            this.addSubSection = function(section) {
                if (!section.divs) {
                    section.divs = [];
                }
                var template = Math.random();
                section.divs.push({'html':'','template':template,'class':''});
            };

            this.addAttribute = function(attributes) {
                attributes.push(
                    {
                        'id':'full_name_group',
                        'groupLabel':'Full Name',
                        'selectLabel':'Select Full Name:',
                        'addLabel':'Add New Full Name',
                        'inputLabel':'Full Name:',
                        'values':[
                            {'value':'MCD', 'label':'Maxxx C. Dxxxxxx'}
                        ],
                        'value':'MCD',
                        'template':'group',
                        'class':'attribute-group name',
                        'attributes':[
                            {
                                'id':'full_name_first',
                                'template':'text',
                                'class':'inline first-name',
                                'labelClass':'inline-block',
                                'inputClass':'inline',
                                'placeholder':'First',
                                'value':'',
                                'name':'fname'
                            },
                            {
                                'id':'full_name_middle',
                                'template':'text',
                                'class':'inline middle-name',
                                'labelClass':'hidden',
                                'inputClass':'inline',
                                'placeholder':'Middle',
                                'value':'',
                                'name':'mname'
                            },
                            {
                                'id':'full_name_last',
                                'template':'text',
                                'class':'inline last-name',
                                'labelClass':'hidden',
                                'inputClass':'inline',
                                'placeholder':'Last',
                                'value':'',
                                'name':'lname'
                            }
                        ]
                    }
                );
            };

            this.init = function(resourcesUrl) {
                this.resourcesUrl = resourcesUrl;
                this.templatesUrl = this.resourcesUrl + 'mock_rp/html/templates/';
            };

            this.data = coreDataService;
            this.fieldList = [['id'], ['field1'], ['field2']];

            this.init = function() {
                coreDataService.init();
                this.searchObjects();
            };

            this.appendObject = function(object) {
                coreDataService.appendObject(object);
            };

            this.insertObject = function(object, index) {
                coreDataService.insertObject(object, index);
            };

            this.searchObjects = function() {
                restService.searchWhatevers().then(
                    function (results) {
                        coreDataService.setObjects(results.whatevers);
                        for (var i = 0; i < coreDataService.objects.length; i++) {
                            var whatever = coreDataService.objects[i];
                            whatever.originalData = angular.copy(whatever);
                        }
                        errorService.setErrors(validationService.validate(coreDataService.objects));
                    }
                    , function (httpErrorCode) {
                    }
                );
            };

            this.saveNewObject = function(whatever) {
                var deferred = $q.defer();
// TODO: validate whatever here
                restService.addWhatever(whatever).then(
                    function(addResponse) {
                        var whatever = addResponse.whateverCreateResponse.whatever;
                        coreDataService.appendObject(whatever);
                        deferred.resolve(whatever);
                    }
                    , function (httpErrorCode) {
                        deferred.reject(httpErrorCode);
                    }
                );
                return deferred.promise;
            };

            this.modifyObject = function(whatever) {
                var deferred = $q.defer();
// TODO: validate whatever here
                var index = whatever.index;
                delete whatever.index;
                restService.modifyWhatever(whatever, whatever.id).then(
                    function(modifyResponse) {
                        var whatever = modifyResponse.whateverModifyResponse.whatever;
                        whatever.index = index;
                        coreDataService.replace(whatever);
                        deferred.resolve(whatever);
                    }
                    , function(httpErrorCode) {
                        deferred.reject(httpErrorCode);
                    }
                );
                return deferred.promise;
            };

            this.deleteObject = function(whatever) {
                restService.deleteWhatever(whatever.id).then(
                    function(deleteResponse) {
                        coreDataService.removeObject(whatever);
                    }
                    , function(httpErrorCode) {
                    }
                );
            };

            this.saveObjects = function(objects) {
                restService.saveWhatevers(objects).then(
                    function(saveResponse) {
                        coreDataService.setObjects(saveResponse.whatevers);
                    }
                    , function(httpErrorCode) {
                    }
                );
            };
        }
    ]);