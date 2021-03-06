'use strict';

/**
 * @ngdoc filter
 * @name mockRPFilters
 * @description
 * # mockRPFilters
 * Filters for Mock RP Config UI
 */
angular
    .module('mock_rp')
    .filter('truncate',
        function () {
            return function (input, length) {
            	if(input === null || typeof input === 'undefined'){
            		return null;
            	}
            	else if(input.length > length){
            		return input.substring(0, length) + "...";
            	}
            	else return input;
            }
        }
    )
    .filter('blank',
        function() {
            return function(input) {
                if ((input == null) || (input == undefined) || (input == "")) {
                    return "*BLANK*";
                }
                return input;
            }
        }
    )
    .filter('TBD',
        function() {
            return function(input) {
                if ((input == null) || (input == undefined) || (input == "")) {
                    return "TBD";
                }
                return input;
            }
        }
    )
;