<!DOCTYPE html>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
        <title>Verification by ID Checker </title>

        <!--c:set var="idCheckerUri" value="https://prodplatform.idchecker.nl/"/-->
        <!--c:set var="idCheckerUri" value="https://accplatform.idchecker.nl/"/-->
        <c:set var="idCheckerUri" value="https://demo.idchecker.com/"/>
    </head>
    <body>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        <link href="${idCheckerUri}IdChecker.uploadwidget/IdCheckerUploadWidget.css" rel="stylesheet" type="text/css">
        <script src="${idCheckerUri}IdChecker.uploadwidget/IdCheckerUploadWidget.js"></script>
        <script>
            (function () {
                'use strict';
                angular.module('idCheckerApp').factory('CONSTS', [
                    function() {
                        return {
                            IDCHECKER_BASE_URL: '${idCheckerUri}/idchecker.webapi.strongid/api/v2/',
                            EXAMPLES_PHOTOS_URL: '${idCheckerUri}/idchecker.uploadwidget/images/'
                        };
                    }
                ]);

            }());
        </script>
        <div id="idCheckerUploadWidget" class="idCheckerDirective"></div>
        <div id="idCheckerVerify" ng-controller="idCheckerVerifyCtrl">
            scope = {{getScope()}}
            injector = {{getInjector()}}
            controller = {{getController()}}
            something = {{something}}
        </div>
        <script>
            'use strict';
            var uploadWidget = document.getElementById('idCheckerUploadWidget');
            var idCheckerVerify = document.getElementById('idCheckerVerify');

            angular.module('idCheckerVerify', []);
            angular
                    .module('idCheckerVerify')
                    .controller('idCheckerVerifyCtrl',['$scope',
                        function ($scope) {
                            console.log("in idCheckerVerify");

                            $scope.something = 'nothing';

                            $scope.getScope = function() {
                                var scope = angular.element(document.getElementById('idCheckerUploadWidget')).scope();
                                console.log("scope = " + scope);
                                return scope;
                            };

                            $scope.getInjector = function() {
                                var injector = angular.element(document.getElementById('idCheckerUploadWidget')).injector();
                                console.log("injector = " + injector);
                                return injector;
                            };

                            $scope.getController = function() {
                                var controller = angular.element(document.getElementById('idCheckerUploadWidget')).controller();
                                console.log("controller = " + controller);
                                return controller;
                            };
                        }
                    ]);
            console.log("idCheckerVerify = " + angular.toJson(idCheckerVerify));
            angular.bootstrap(idCheckerVerify,['idCheckerVerify']);
            angular.bootstrap(uploadWidget,['idCheckerApp']);

            document.addEventListener('idchecker-finish', function(e) {
                console.log("idchecker-finish true")
            });
        </script>
    </body>
</html>
