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
    'imasd.about',
    'imasd.contact',
    'imasd.servicios',
    'imasd.clients'
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

        .directive("float", function() {
            return function(scope, element, attrs) {

                var top, bottom, y, page;

                var left = $('.tofix').offset().left;
                tofixwidth();

                $(window).scroll(function(event) {

                    // what the y position of the scroll is
                    controlArticlePositions();

                    // whether that's below the form
                    if (y >= top && y <= bottom && y > page) {
                        $('.tofix').addClass('fixed');

                        //control horizontal scroll
                        tofixl = left - x;
                        $('.tofix').css('left', tofixl);

                    } else {
                        $('.tofix').removeClass('fixed');
                    }
                });

                $(window).resize(function() {
                    tofixwidth();
                });

                function controlArticlePositions() {
                    page = $('.page').offset().top;
                    pageb = $('.tofix').height();

                    top = $('.tofix').offset().top;

                    bottom = page + $('.page').height() - pageb;

                    y = $(window).scrollTop();
                    x = $(window).scrollLeft();
                }

                function tofixwidth() {
                    $('.tofix').css('width', '');
                    var sidebarW = $('.tofix').closest('.sidebar').css('width');
                    $('.tofix').css('width', sidebarW);
                }

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
                transclude: true
            };
        })

        .directive('menuFloat', function() {
            return {
                restrict: 'E',
                template: '<div class="float-menu fixed">Menu</div>',
                link: function($scope, elem, attrs) {
                    $scope.initialOffset=parseInt($('.main.border-right').css('height'));
                    
                    $scope.$watch(function() {

                        $scope.heigthContainer;
                        $scope.offsetTop;
                        $scope.heightMenu;
                        $scope.maxHeight;

                        metrics();
//                    Calcular altura de contenedor y offset top y bot
                        function metrics() {
                            $scope.heigthContainer = parseInt($('.main.border-right').css('height'));
                            $scope.offsetTop = $('.float-menu').offset().top;
                            $scope.heightMenu =parseInt($('.float-menu').css('height'));
                            
                            
                            console.log("Metrics");
                            console.log("Ofset Top");

                            console.log($scope.offsetTop);
                            console.log("Height Container");

                            console.log($scope.heigthContainer);

                            console.log("Height Menu");

                            console.log($scope.heightMenu);
                            
                            $scope.maxHeight=$scope.initialOffset+$scope.heigthContainer-$scope.heightMenu-400;
                            console.log('Max Height');
                            console.log($scope.maxHeight);

                        }

                        if ($scope.offsetTop>$scope.maxHeight) {
                            console.log("se paso");
                            $('.float-menu').removeClass('fixed');
                            $('.float-menu').css('margin-top',$scope.heigthContainer-100);
                        }
                    });


                },
                transclude: true
            };
        })

        .directive('panelMain', function() {
            return {
                restrict: 'E',
                templateUrl: 'templates/panel/partial-panel.html',
                transclude: true
            };
        })

        .directive('banner', function() {
            return {
                restrict: 'E',
                scope: {
                    title: '@',
                    paragrap: '@',
                    img: '@'
                },
                templateUrl: 'templates/banner-templates/banner.html'
            };
        })

        .directive('container', function() {
            return {
                restrict: 'E',
                templateUrl: 'templates/panel/container.html',
                transclude: true
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

