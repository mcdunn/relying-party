'use strict';

/**
 * @ngdoc service
 * @name dataService
 * @description
 * # dataService
 * Data Service for Mock RP UI
 */
angular
    .module('mock_rp')
    .service('mockRPDataService',
            ['$q', '$templateCache', 'coreDataService', 'mockRPRestService', 'mockRPErrorService',
                'mockRPValidationService',
        function dataService($q, $templateCache, coreDataService, mockRPRestService, mockRPErrorService,
                             mockRPValidationService) {

            var restService = mockRPRestService;
            var errorService = mockRPErrorService;
            var validationService = mockRPValidationService;
            var fieldList = [['id'], ['field1'], ['field2']];

            this.data = coreDataService;

            // TODO: use the resourceUrlsService...
            this.resourcesUrl = "";
            this.templatesUrl = "";
            this.pageHeader = {};
            this.contentHeader = {};
            this.intro = {};
            this.attributeGroups = {};
            this.actions = {};
            this.contentFooter = {};
            this.pageFooter = {};

            this.templates = {};

            this.stateList = [
                {'value':'AL','label':'Alabama - AL'},
                {'value':'AK','label':'Alaska - AK'},
                {'value':'AZ','label':'Arizona - AZ'},
                {'value':'AR','label':'Arkansas - AR'},
                {'value':'CA','label':'California - CA'},
                {'value':'CO','label':'Colorado - CO'},
                {'value':'CT','label':'Connecticut - CT'},
                {'value':'DE','label':'Delaware - DE'},
                {'value':'FL','label':'Florida - FL'},
                {'value':'GA','label':'Georgia - GA'},
                {'value':'HI','label':'Hawaii - HI'},
                {'value':'ID','label':'Idaho - ID'},
                {'value':'IL','label':'Illinois - IL'},
                {'value':'IN','label':'Indiana - IN'},
                {'value':'IA','label':'Iowa - IA'},
                {'value':'KS','label':'Kansas - KS'},
                {'value':'KY','label':'Kentucky - KY'},
                {'value':'LA','label':'Louisiana - LA'},
                {'value':'ME','label':'Maine - ME'},
                {'value':'MD','label':'Maryland - MD'},
                {'value':'MA','label':'Massachusetts - MA'},
                {'value':'MI','label':'Michigan - MI'},
                {'value':'MN','label':'Minnesota - MN'},
                {'value':'MS','label':'Mississippi - MS'},
                {'value':'MO','label':'Missouri - MO'},
                {'value':'MT','label':'Montana - MT'},
                {'value':'NE','label':'Nebraska - NE'},
                {'value':'NV','label':'Nevada - NV'},
                {'value':'NH','label':'New Hampshire - NH'},
                {'value':'NJ','label':'New Jersey - NJ'},
                {'value':'NM','label':'New Mexico - NM'},
                {'value':'NY','label':'New York - NY'},
                {'value':'NC','label':'North Carolina - NC'},
                {'value':'ND','label':'North Dakota - ND'},
                {'value':'OH','label':'Ohio - OH'},
                {'value':'OK','label':'Oklahoma - OK'},
                {'value':'OR','label':'Oregon - OR'},
                {'value':'PA','label':'Pennsylvania - PA'},
                {'value':'RI','label':'Rhode Island - RI'},
                {'value':'SC','label':'South Carolina - SC'},
                {'value':'SD','label':'South Dakota - SD'},
                {'value':'TN','label':'Tennessee - TN'},
                {'value':'TX','label':'Texas - TX'},
                {'value':'UT','label':'Utah - UT'},
                {'value':'VT','label':'Vermont - VT'},
                {'value':'VA','label':'Virginia - VA'},
                {'value':'WA','label':'Washington - WA'},
                {'value':'WV','label':'West Virginia - WV'},
                {'value':'WI','label':'Wisconsin - WI'},
                {'value':'WY','label':'Wyoming - WY'}
            ];

            this.setPageHeader = function() {
                this.pageHeader = {};
            };

            this.setContentHeader = function() {
                this.contentHeader = {
                    'divs':[
                        {
                            'html':'',
                            'class':'bank-online-logo logo-big',
                            'template':this.templatesUrl + 'logo'
                        }
                    ]
                };
            };

            this.setIntro = function() {
                this.intro = {
                    'divs':[
                        {
                            'html':'MAX Connect is a service which allows online product and service providers to verify ' +
                                    'the information that you provide to create an account or conduct a transaction. Your ' +
                                    'data submission is compared to records maintained by trusted third parties including ' +
                                    'your telephone service provider. By proceeding you are consenting to having ' +
                                    'MAX Connect quickly verify your data as described. More information on this process ' +
                                    'is available <a href="http://www.iddataweb.com/?page_id=409">here</a>',
                            'class':'',
                            'template':this.templatesUrl + 'intro'
                        }
                    ]
                };
            };

            this.setActions = function() {
                this.actions = {
                    'divs':[
                        {
                            'html': '<div class="confirm-button">' +
                                        '<button class="btn btn-success" ng-click="confirm()">Confirm Information</button>' +
                                    '</div>',
                            'class':'',
                            'template':this.templatesUrl + 'confirm-button'
                        }
                    ]
                };
            };

            this.setContentFooter = function() {
                this.contentFooter = {};
            };

            this.setPageFooter = function() {
                this.pageFooter = {
                    'divs':[
                        {
                            'html': '<a href="http://www.iddataweb.com/">Powered by <img src="' +
                                        this.resourcesUrl +'mock_rp/images/max-sm.png"/> Connector</a>',
                            'class':'powered-by-max-connector',
                            'template':this.templatesUrl + 'powered-by-max-connector'
                        }
                    ]
                };
            };

            this.setAttributeGroups = function() {
                this.attributeGroups = [
                    {
                        'type':'FULL_NAME',
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
                        'class':'name',
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
                                'inputClass':'inline-block',
                                'placeholder':'Middle',
                                'value':'',
                                'name':'mname'
                            },
                            {
                                'id':'full_name_last',
                                'template':'text',
                                'class':'inline last-name',
                                'labelClass':'hidden',
                                'inputClass':'inline-block',
                                'placeholder':'Last',
                                'value':'',
                                'name':'lname'
                            }
                        ]
                    },
                    {
                        'type':'ADDRESS',
                        'id':'address_group',
                        'groupLabel':'Address',
                        'selectLabel':'Select Address:',
                        'addLabel':'Add New Address',
                        'values':[
                            {'value':'BWD', 'label':'#### Burling Wood Drive'}
                        ],
                        'value':'BWD',
                        'template':'group',
                        'class':'address',
                        'attributes':[
                            {
                                'id':'address_street',
                                'label':'Street Address',
                                'template':'text',
                                'class':'street-address',
                                'labelClass':'inline-block',
                                'inputClass':'inline-block',
                                'value':'',
                                'name':'ADDRESS_STREET'
                            },
                            {
                                'id':'address_street_2',
                                'label':' ',
                                'template':'text',
                                'class':'street-address',
                                'labelClass':'inline-block',
                                'inputClass':'inline-block',
                                'value':'',
                                'name':'ADDRESS_STREET_2'
                            },
                            {
                                'id':'address_city',
                                'label':'City:',
                                'template':'text',
                                'class':'city',
                                'labelClass':'inline-block',
                                'inputClass':'inline-block',
                                'value':'',
                                'name':'ADDRESS_CITY'
                            },
                            {
                                'id':'address_state',
                                'label':'State',
                                'template':'dropdown',
                                'class':'inline state',
                                'labelClass':'inline',
                                'inputClass':'inline',
                                'values':this.stateList,
                                'value':'',
                                'name':'ADDRESS_STATE'
                            },
                            {
                                'id':'address_zip',
                                'label':'Zip',
                                'template':'text',
                                'class':'inline zip',
                                'labelClass':'inline',
                                'inputClass':'inline',
                                'value':'',
                                'name':'ADDRESS_ZIP'
                            }
                        ]
                    },
                    {
                        'type':'PHONE',
                        'id':'mobile_phone_group',
                        'groupLabel':'Mobile Phone',
                        'selectLabel':'Select Mobile Phone:',
                        'addLabel':'Add New Mobile Phone',
                        'inputLabel':'Mobile Phone:',
                        'values':[
                            {'value':'7327', 'label':'(###) ###-7327'}
                        ],
                        'value':'7327',
                        'template':'group',
                        'class':'phone',
                        'attributes':[
                            {
                                'id':'mobile_phone_area_code',
                                'template':'text',
                                'class':'inline area-code',
                                'labelClass':'inline-block',
                                'inputClass':'inline-block',
                                'placeholder':'000',
                                'value':'',
                                'name':'MOBILE_PHONE_AREA_CODE'
                            },
                            {
                                'id':'mobile_phone_number',
                                'template':'text',
                                'class':'inline phone-number',
                                'labelClass':'hidden',
                                'inputClass':'inline-block',
                                'placeholder':'000-0000',
                                'value':'',
                                'name':'MOBILE_PHONE_NUMBER'
                            }
                        ]
                    },
                    {
                        'type':'SELECT_ONE',
                        'id':'pin_delivery_preference_group',
                        'groupLabel':'PIN Delivery Preference',
                        'selectLabel':'Select PIN Delivery Preference:',
                        'addLabel':'Add New PIN Delivery Preference',
                        'inputLabel':'PIN Delivery Preference:',
                        'values':[
                            {'value':'SMS', 'label':'SMS'}
                        ],
                        'value':'SMS',
                        'template':'group',
                        'class':'pin-delivery-preference',
                        'attributes':[
                            {
                                'id':'pin_delivery_preference',
                                'template':'radio',
                                'class':'inline-block pin-delivery-preference',
                                'labelClass':'inline-block',
                                'inputClass':'inline-block',
                                'value':'SMS',
                                'values':[
                                    {'value':'SMS','label':'SMS','message':'(Standard Rates Apply)',
                                        'class':'inline-block', 'messageClass':'inline-block right'},
                                    {'value':'voice','label':'Voice','class':'block'}
                                ],
                                'name':'PIN_DELIVERY_PREFERENCE'
                            }
                        ]
                    },
                    {
                        'type':'COLOR',
                        'id':'select_a_color_group',
                        'groupLabel':'Select a Color',
                        'selectLabel':'Select a Color:',
                        'addLabel':'Add New Color',
                        'inputLabel':'Select a Color:',
                        'values':[
                            {'value':'#008800', 'label':'Green'}
                        ],
                        'value':'#008800',
                        'template':'group',
                        'class':'select-a-color',
                        'attributes':[
                            {
                                'id':'select_a_color',
                                'template':'color',
                                'class':'inline-block select-a-color',
                                'labelClass':'inline-block',
                                'inputClass':'inline-block',
                                'value':'',
                                'values':[
                                    {'value':'#000000','label':'Black','id':'select_a_color_black',
                                        'class':'inline-block color black','labelClass':'color-label'},
                                    {'value':'#FFFF00','label':'Yellow','id':'select_a_color_yellow',
                                        'class':'inline-block color yellow', 'labelClass':'color-label'},
                                    {'value':'##FF9900','label':'Orange','id':'select_a_color_orange',
                                        'class':'inline-block color orange', 'labelClass':'color-label'},
                                    {'value':'#FF0000','label':'Red','id':'select_a_color_red',
                                        'class':'inline-block color red', 'labelClass':'color-label'},
                                    {'value':'#008800','label':'Green','id':'select_a_color_green',
                                        'class':'inline-block color green', 'labelClass':'color-label'},
                                    {'value':'#0000FF','label':'Blue','id':'select_a_color_blue',
                                        'class':'inline-block color blue', 'labelClass':'color-label'},
                                    {'value':'#9933FF','label':'Purple','id':'select_a_color_purple',
                                        'class':'inline-block color purple','labelClass':'color-label'},
                                    {'value':'#FEFEFE','label':'White','id':'select_a_color_white2',
                                        'class':'inline-block color white', 'labelClass':'color-label'},
                                    {'value':'#A9A9A9','label':'Grey','id':'select_a_color_grey2',
                                        'class':'inline-block color grey', 'labelClass':'color-label'},
                                    {'value':'#00FFFF','label':'Aqua','id':'select_a_color_Aqua',
                                        'class':'inline-block color aqua', 'labelClass':'color-label'},
                                    {'value':'#FFCCFF','label':'Pink','id':'select_a_color_pink',
                                        'class':'inline-block color pink', 'labelClass':'color-label'},
                                    {'value':'#0099FF','label':'Light Blue','id':'select_a_color_light_blue',
                                        'class':'inline-block color light-blue', 'labelClass':'color-label'}
                                ],
                                'name':'SELECT_A_COLOR'
                            }
                        ]
                    },
                    {
                        'type':'EMAIL',
                        'id':'corporate_email_group',
                        'groupLabel':'Corporate Email',
                        'selectLabel':'Select Corporate Email:',
                        'addLabel':'Add New Corporate Email',
                        'inputLabel':'Email:',
                        'values':[
                            {'value':'gmail', 'label':'maxxx@gmail.com'}
                        ],
                        'value':'gmail',
                        'template':'group',
                        'class':'email',
                        'attributes':[
                            {
                                'id':'corporate_email',
                                'template':'text',
                                'class':'inline-block email',
                                'labelClass':'inline-block',
                                'inputClass':'inline-block',
                                'placeholder':'user@domain',
                                'value':'',
                                'name':'WORK_EMAIL'
                            }
                        ]
                    }
                ];
            };

            this.generateTemplates = function() {
                if (this.pageHeader && this.pageHeader.divs) {
                    for (var i = 0; i < this.pageHeader.divs.length; i++) {
                        if (this.pageHeader.divs[i].template) {
                            $templateCache.put(this.pageHeader.divs[i].template, this.pageHeader.divs[i].html);
                        }
                    }
                }

                if (this.contentHeader && this.contentHeader.divs) {
                    for (var i = 0; i < this.contentHeader.divs.length; i++) {
                        if (this.contentHeader.divs[i].template) {
                            $templateCache.put(this.contentHeader.divs[i].template, this.contentHeader.divs[i].html);
                        }
                    }
                }

                if (this.intro && this.intro.divs) {
                    for (var i = 0; i < this.intro.divs.length; i++) {
                        if (this.intro.divs[i].template) {
                            $templateCache.put(this.intro.divs[i].template, this.intro.divs[i].html);
                        }
                    }
                }

                if (this.actions && this.actions.divs) {
                    for (var i = 0; i < this.actions.divs.length; i++) {
                        if (this.actions.divs[i].template) {
                            $templateCache.put(this.actions.divs[i].template, this.actions.divs[i].html);
                        }
                    }
                }

                if (this.contentFooter && this.contentFooter.divs) {
                    for (var i = 0; i < this.contentFooter.divs.length; i++) {
                        if (this.contentFooter.divs[i].template) {
                            $templateCache.put(this.contentFooter.divs[i].template, this.contentFooter.divs[i].html);
                        }
                    }
                }

                if (this.pageFooter && this.pageFooter.divs) {
                    for (var i = 0; i < this.pageFooter.divs.length; i++) {
                        if (this.pageFooter.divs[i].template) {
                            $templateCache.put(this.pageFooter.divs[i].template, this.pageFooter.divs[i].html);
                        }
                    }
                }
            };

            // TODO: this is very messy and could consume tons of resources!
            this.updateTemplate = function(div) {
                if (!div.revision) {
                    div.originalTemplate = div.template;
                    div.revision = 0;
                }
                div.revision++;
                $templateCache.remove(div.template);
                div.template = div.originalTemplate + div.revision;
                $templateCache.put(div.template, div.html);
            };

            this.init = function(resourcesUrl) {
                this.resourcesUrl = resourcesUrl;
                this.templatesUrl = this.resourcesUrl + 'mock_rp/html/templates/';
                this.templates.group = this.templatesUrl + 'group.html';
                this.templates.text = this.templatesUrl + 'text.html';
                this.templates.radio = this.templatesUrl + 'radio.html';
                this.templates.dropdown = this.templatesUrl + 'dropdown.html';
                this.templates.color = this.templatesUrl + 'color.html';

                this.setPageHeader();
                this.setContentHeader();
                this.setIntro();
                this.setAttributeGroups();
                this.setActions();
                this.setContentFooter();
                this.setPageFooter();
                this.generateTemplates();

//                coreDataService.init();
//                this.searchObjects();
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