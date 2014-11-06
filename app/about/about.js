var about = angular.module('imasd.about', ['ngRoute']);

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
        //Clave de diccionario.
        $scope.dictionary_key = 'aboutUs';
    }]);

about.controller('mision', ['$scope', function($scope) {
        //Clave de diccionario.
        $scope.dictionary_key = 'mision';
    }]);

about.controller('vision', ['$scope', function($scope) {
        //Clave de diccionario.
        $scope.dictionary_key = 'vision';
    }]);

about.controller('technologies', ['$scope', function($scope) {
        //Clave de diccionario.
        $scope.dictionary_key = 'technologies';
    }]);

about.controller('alliances', ['$scope', function($scope) {
        //Clave de diccionario.
        $scope.dictionary_key = 'alliances';
    }]);