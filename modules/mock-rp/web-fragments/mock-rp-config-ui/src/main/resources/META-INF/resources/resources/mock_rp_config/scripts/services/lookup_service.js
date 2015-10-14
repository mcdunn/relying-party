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
    .service('lookupService',
            ['$q', 'restService', 'errorService',
        function dataService($q, restService, errorService) {

            this.init = function() {
            };

            this.attributeGroupTypes = [
                {'label':'ADDRESS', 'value':'ADDRESS'},
                {'label':'COLOR', 'value':'COLOR'},
                {'label':'EMAIL', 'value':'EMAIL'},
                {'label':'FULL_NAME', 'value':'FULL_NAME'},
                {'label':'PHONE', 'value':'PHONE'},
                {'label':'SELECT', 'value':'SELECT'},
                {'label':'SELECT_ONE', 'value':'SELECT_ONE'},
                {'label':'TEXT', 'value':'TEXT'}
            ];

            this.attributeTypes = [
                {'label':'CHECKBOX', 'value':'checkbox'},
                {'label':'COLOR', 'value':'color'},
                {'label':'DROPDOWN', 'value':'dropdown'},
                {'label':'RADIO', 'value':'radio'},
                {'label':'TEXT', 'value':'text'},
                {'label':'TEXTAREA', 'value':'textarea'}
            ];

            var stateList = [
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

            this.attributeGroupFields = {
                'ADDRESS':{
                    'type':'ADDRESS',
                    'id':'address_group',
                    'groupLabel':'Address',
                    'selectLabel':'Select Address:',
                    'addLabel':'Add New Address',
                    'values':[
                        {'value':'sample', 'label':'#### Main Street'}
                    ],
                    'value':'sample',
                    'template':'group',
                    'class':'address',
                    'attributes':[
                        {
                            'type':'TEXT',
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
                            'type':'TEXT',
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
                            'type':'TEXT',
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
                            'type':'SELECT_ONE',
                            'id':'address_state',
                            'label':'State',
                            'template':'dropdown',
                            'class':'inline state',
                            'labelClass':'inline',
                            'inputClass':'inline',
                            'values':stateList,
                            'value':'',
                            'name':'ADDRESS_STATE'
                        },
                        {
                            'type':'TEXT',
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
                'COLOR':{
                    'type':'COLOR',
                    'id':'select_a_color_group',
                    'groupLabel':'Select a Color',
                    'selectLabel':'Select a Color:',
                    'addLabel':'Add New Color',
                    'inputLabel':'Select a Color:',
                    'values':[
                        {'value':'sample', 'label':'Green'}
                    ],
                    'value':'sample',
                    'template':'group',
                    'class':'select-a-color',
                    'attributes':[
                        {
                            'type':'COLOR',
                            'id':'select_a_color',
                            'template':'color',
                            'class':'inline select-a-color',
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
                'EMAIL':{
                    'type':'EMAIL',
                    'id':'email_group',
                    'groupLabel':'Email',
                    'selectLabel':'Select Email:',
                    'addLabel':'Add New Email',
                    'inputLabel':'Email:',
                    'values':[
                        {'value':'sample', 'label':'someone@some.domain'}
                    ],
                    'value':'sample',
                    'template':'group',
                    'class':'email',
                    'attributes':[
                        {
                            'type':'TEXT',
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
                },
                'FULL_NAME':{
                    'type':'FULL_NAME',
                    'id':'full_name_group',
                    'groupLabel':'Full Name',
                    'selectLabel':'Select Full Name:',
                    'addLabel':'Add New Full Name',
                    'inputLabel':'Full Name:',
                    'values':[
                        {'value':'sample', 'label':'Jxxxxx Sxxxxx'}
                    ],
                    'value':'sample',
                    'template':'group',
                    'class':'name',
                    'attributes':[
                        {
                            'type':'TEXT',
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
                            'type':'TEXT',
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
                            'type':'TEXT',
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
                },
                'PHONE':{
                    'type':'PHONE',
                    'id':'phone_group',
                    'groupLabel':'Phone',
                    'selectLabel':'Select Phone:',
                    'addLabel':'Add New Phone',
                    'inputLabel':'Phone:',
                    'values':[
                        {'value':'sample', 'label':'(###) ###-1234'}
                    ],
                    'value':'sample',
                    'template':'group',
                    'class':'phone',
                    'attributes':[
                        {
                            'type':'TEXT',
                            'id':'phone_area_code',
                            'template':'text',
                            'class':'inline area-code',
                            'labelClass':'inline-block',
                            'inputClass':'inline',
                            'placeholder':'000',
                            'value':'',
                            'name':'PHONE_AREA_CODE'
                        },
                        {
                            'type':'TEXT',
                            'id':'phone_number',
                            'template':'text',
                            'class':'inline phone-number',
                            'labelClass':'hidden',
                            'inputClass':'inline',
                            'placeholder':'000-0000',
                            'value':'',
                            'name':'PHONE_NUMBER'
                        }
                    ]
                },
                'SELECT':{
                    'type':'SELECT',
                    'id':'select_group',
                    'groupLabel':'Select',
                    'selectLabel':'Select:',
                    'addLabel':'Add New Selection',
                    'inputLabel':'Select:',
                    'values':[
                        {'value':'Sample', 'label':'SAMPLE'}
                    ],
                    'value':'Sample',
                    'template':'group',
                    'class':'select',
                    'attributes':[
                        {
                            'type':'SELECT',
                            'id':'select',
                            'template':'checkbox',
                            'class':'inline-block',
                            'labelClass':'inline-block',
                            'inputClass':'inline-block',
                            'value':'',
                            'values':[
                                {
                                    'value':'Sample',
                                    'label':'SAMPLE',
                                    'class':'inline-block'
                                }
                            ],
                            'name':'SELECT'
                        }
                    ]
                },
                'SELECT_ONE':{
                    'type':'SELECT_ONE',
                    'id':'select_one_group',
                    'groupLabel':'Select One',
                    'selectLabel':'Select One:',
                    'addLabel':'Add New Select One',
                    'inputLabel':'Select One:',
                    'values':[
                        {'value':'Sample', 'label':'SAMPLE'}
                    ],
                    'value':'Sample',
                    'template':'group',
                    'class':'select-one',
                    'attributes':[
                        {
                            'type':'SELECT_ONE',
                            'id':'select_one',
                            'template':'radio',
                            'class':'inline-block',
                            'labelClass':'inline-block',
                            'inputClass':'inline-block',
                            'value':'',
                            'values':[
                                {
                                    'value':'Sample',
                                    'label':'SAMPLE',
                                    'class':'inline-block'
                                }
                            ],
                            'name':'SELECT_ONE'
                        }
                    ]
                },
                'TEXT':{
                    'type':'TEXT',
                    'id':'text_group',
                    'groupLabel':'Text',
                    'selectLabel':'Text:',
                    'addLabel':'Add New Text',
                    'inputLabel':'Text:',
                    'values':[
                        {'value':'Sample', 'label':'SAMPLE'}
                    ],
                    'value':'Sample',
                    'template':'group',
                    'class':'text',
                    'attributes':[
                        {
                            'type':'TEXT',
                            'id':'text',
                            'template':'text',
                            'class':'inline',
                            'labelClass':'inline-block',
                            'inputClass':'inline-block',
                            'value':'',
                            'name':'TEXT'
                        }
                    ]
                },
                'CUSTOM':{
                    'type':'CUSTOM',
                    'id':'custom_group',
                    'groupLabel':'Custom',
                    'selectLabel':'Custom:',
                    'addLabel':'Add New Custom',
                    'inputLabel':'Custom:',
                    'values':[
                        {'value':'Sample', 'label':'SAMPLE'}
                    ],
                    'value':'Sample',
                    'template':'group',
                    'class':'custom',
                    'attributes':[
                    ]
                }
            };
        }
    ]);