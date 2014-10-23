/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var home = angular.module('sodalabs.home', []);

home.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home',
                {
                    templateUrl: 'home/home.html',
                    controller: 'home'
                });
    }]);

home.controller('home', ['$scope', function($scope) {

        /*===Carousel===*/
        $scope.myInterval = 3000;
        $scope.slides = [
            {
                image: 'assets/carousel/slides-home/Imagen1.png'
            },
            {
                image: 'assets/carousel/slides-home/Imagen2.png'
            },
            {
                image: 'assets/carousel/slides-home/Imagen3.png'
            }
        ];

    }]);

