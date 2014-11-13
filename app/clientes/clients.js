var clients = angular.module('imasd.clients', []);

clients.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/clients',{
            templateUrl:'clientes/clients.html',
            controller:'clients'
        });
    }]);

clients.controller('clients', ['$scope', function($scope) {
        
    }]);