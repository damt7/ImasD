'use strict';

angular.module('imasd.menu', ['ngRoute'])

        .config(['$routeProvider', function($routeProvider) {
                $routeProvider.when('/menu', {
                    templateUrl: 'menu/menu.html',
                    controller: 'menu'
                });
            }])

        .controller('menu', ['$scope', function($scope) {
                $scope.menus = [
                    {
                        "item": "home",
                        "route": "/home",
                        "submenu1": null
                    },
                    {
                        "item": "about",
                        "route": null,
                        "submenu1": [
                            {
                                "item": "AboutUs",
                                "route": "/about"
                            },
                            {
                                "item": "misionVision",
                                "route": "/misionVision"
                            },
                            {
                                "item": "technologies",
                                "route": "/technologies"
                            },
                            {
                                "item": "alliances",
                                "route": "/alliances"
                            }
                        ]
                    },
                    {
                        "item": "services",
                        "route": null,
                        "submenu1": [
                            {
                                "item": "development",
                                "route": "/development"
                            },
                            {
                                "item": "factory",
                                "route": "/factory"
                            },
                            {
                                "item": "training",
                                "route": "/training"
                            },
                            {
                                "item": "consulting",
                                "route": "/consulting"
                            },
                            {
                                "item": "architectures",
                                "route": "/architectures"
                            }
                        ]
                    },
                    {
                        "item": "clients",
                        "route": "/clients",
                        "submenu1": null
                    },
                    {
                        "item": "contact",
                        "route": "/contact",
                        "submenu1": null
                    }
                ];
            }])

        .controller('footer', ['$scope', function($scope) {

            }]);
