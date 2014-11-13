var servicios = angular.module('imasd.servicios', []);

servicios.config(['$routeProvider', function($routeProvider) {
           $routeProvider.when('/development',{
               templateUrl:'services/development.html',
               controller:'development'
           });
           
           $routeProvider.when('/factory',{
               templateUrl:'services/factory.html',
               controller:'factory'
           });
           
           $routeProvider.when('/training',{
               templateUrl:'services/training.html',
               controller:'training'
           });
           
           $routeProvider.when('/consulting',{
               templateUrl:'services/consulting.html',
               controller:'consulting'
           });
           
           $routeProvider.when('/architectures',{
               templateUrl:'services/architectures.html',
               controller:'architectures'
           });
           
    }]);

servicios.controller('development', ['$scope', function($scope) {
        
    }]);

servicios.controller('factory', ['$scope', function($scope) {
        
    }]);

servicios.controller('training', ['$scope', function($scope) {
        
    }]);

servicios.controller('consulting', ['$scope', function($scope) {
        
    }]);

servicios.controller('architectures', ['$scope', function($scope) {
        
    }]);