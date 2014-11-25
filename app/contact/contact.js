var contact = angular.module('imasd.contact', []);

contact.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/contact', {
            templateUrl: 'contact/contact.html',
            controller: 'contact'
        });
    }]);

contact.controller('contact', ['$scope', function($scope) {
        //Mensaje
        $scope.message={
            'email':null,
            'issue':null,
            'message':null
        };

        //Enviar mensaje 
        $scope.sendMessage=function (){
            console.log($scope.message);
        };
    }]);