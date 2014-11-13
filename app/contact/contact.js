var contact = angular.module('imasd.contact', []);

contact.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/contact', {
            templateUrl: 'contact/contact.html',
            controller: 'contact'
        });
    }]);

contact.controller('contact', ['$scope', function($scope) {
        
    }]);