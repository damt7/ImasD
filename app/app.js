'use strict';

// Declare app level module which depends on views, and components
angular.module('imasd', [
    'ngRoute',
    'imasd.menu',
    'myApp.view1',
    'myApp.view2',
    'myApp.version',
    'imasd.home',
    'pascalprecht.translate',
    'imasd.translate',
    'ui.bootstrap',
    'imasd.about'
])
        .config(['$routeProvider', function($routeProvider) {
                $routeProvider.otherwise({redirectTo: '/home'});
            }])

        /*Directivas*/
        .directive("scroll", function($window) {
            return function(scope, element, attrs) {
                angular.element($window).bind("scroll", function() {
                    if (this.pageYOffset >= 90) {
                        scope.hideMenu = true;
                    } else {
                        scope.hideMenu = false;
                    }
                    scope.$apply();
                });
            };
        })

        .directive('panelLeft', function() {
            return {
                restrict: 'E',
                template: '<div class="col-md-3 panel-nav border-left" ng-transclude></div>',
                link: function(scope, elem, attrs) {
                    scope.$watch(function() {
                        scope.height = $('.main.border-right').css('height');
                        $('.panel-nav.border-left').css('height', scope.height);
                    });

                },
                transclude:true
            };
        })

        .directive('panelMain', function() {
            return {
                restrict: 'E',
                templateUrl: 'templates/panel/partial-panel.html',
                transclude:true
            };
        })
        
        .directive('container', function() {
            return {
                restrict: 'E',
                templateUrl: 'templates/panel/container.html',
                transclude:true
            };
        })
        
        /*Controladores*/
        .controller('load', ['$scope', '$timeout', function($scope, $timeout) {
                $scope.load = false;
                $scope.display = true;
                $timeout(function() {
                    $scope.load = true;
                }, 2500);
                $timeout(function() {
                    $scope.display = false;
                }, 3000);
            }]);

