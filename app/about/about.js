var about = angular.module('imasd.about', ['ngRoute']);

about.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/about', {
            templateUrl: 'about/about.html',
            controller: 'about'
        });
        $routeProvider.when('/misionVision', {
            templateUrl: 'about/misionVision.html',
            controller: 'misionVision'
        });
        $routeProvider.when('/technologies', {
            templateUrl: 'about/technologies.html',
            controller: 'technologies'
        });
        $routeProvider.when('/alliances', {
            templateUrl: 'about/alliances.html',
            controller: 'alliances'
        });
    }]);

about.controller('about', ['$scope', function($scope) {
        //Clave de diccionario.
        $scope.dictionary_key = 'aboutUs';
    }]);

about.controller('misionVision', ['$scope', function($scope) {
        //Clave de diccionario.
        $scope.dictionary_key = 'mision';
    }]);

about.controller('technologies', ['$scope', function($scope) {
        //Clave de diccionario.
        $scope.dictionary_key = 'technologies';
        
        //Tecnologias
        $scope.technologies=[
        'Ajax','AngularJs','Bootflat','Botstrap','Bower','CSS3','Dojo','Git','Hibernate',        
        'HTML5','Java','JPA','Yeoman','JQuery','JSON','Jstl-Jsp','Maven','MongoDB',
        'MsSQL','MySQL','Node','PHP','Spring Roo','Spring Security','Spring tool suite',
        'Spring','Subversion','XML','Javascript'
        ];
        
    }]);

about.controller('alliances', ['$scope', function($scope) {
        //Clave de diccionario.
        $scope.dictionary_key = 'alliances';
    }]);