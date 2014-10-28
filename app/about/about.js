var about = angular.module('imasd.about', []);

about.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/about', {
            templateUrl: 'about/about.html',
            controller: 'about'
        });
//        $routeProvider.when('/about', {
//            templateUrl: 'about/about.html',
//            controller: 'about'
//        });
//        $routeProvider.when('/about', {
//            templateUrl: 'about/about.html',
//            controller: 'about'
//        });
//        $routeProvider.when('/about', {
//            templateUrl: 'about/about.html',
//            controller: 'about'
//        });
//        $routeProvider.when('/about', {
//            templateUrl: 'about/about.html',
//            controller: 'about'
//        });
        
    }]);

about.controller('about', ['$scope', function($scope) {
        
    }]);