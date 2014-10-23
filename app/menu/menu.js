'use strict';

angular.module('sodalabs.menu', ['ngRoute'])

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
                                "item": "mission",
                                "route": "/view1"
                            },
                            {
                                "item": "vision",
                                "route": "/view1"
                            },
                            {
                                "item": "technologies",
                                "route": "/view1"
                            },
                            {
                                "item": "alliances",
                                "route": "/view1"
                            }
                        ]
                    },
                    {
                        "item": "services",
                        "route": null,
                        "submenu1": [
                            {
                                "item": "development",
                                "route": "/view1"
                            },
                            {
                                "item": "factory",
                                "route": "/view1"
                            },
                            {
                                "item": "training",
                                "route": "/view1"
                            },
                            {
                                "item": "consulting",
                                "route": "/view1"
                            },
                            {
                                "item": "architectures",
                                "route": "/view1"
                            },
                            {
                                "item": "products",
                                "route": "/view1"
                            }
                        ]
                    },
                    {
                        "item": "products",
                        "route": null,
                        "submenu1": [
                            {
                                "item": "activos",
                                "route": "/view1"
                            }
                        ]
                    },
                    {
                        "item": "clients",
                        "route": null,
                        "submenu1": null
                    },
                    {
                        "item": "contact",
                        "route": "/view1",
                        "submenu1": null
                    }
                ];
            }])

        .controller('footer', ['$scope', function($scope) {
                
            }]);