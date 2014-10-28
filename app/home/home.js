/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var home = angular.module('imasd.home', []);

home.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home',
                {
                    templateUrl: 'home/home.html',
                    controller: 'home'
                });
    }]);

home.controller('home', ['$scope', function($scope) {

        /*===Carousel===*/
        //Intervalo de espera entre slideshows
        $scope.myInterval = 3000;
        $scope.slides = [
            {
                image: 'assets/carousel/slides-home/Imagen1.png',
                title:'quality',
                content:'quality'
            },
            {
                image: 'assets/carousel/slides-home/Imagen2.png',
                title:'whyWeb',
                content:'whyWeb'
            },
            {
                image: 'assets/carousel/slides-home/Imagen3.png',
                title:'tecnology',
                content:'tecnology'
            }
        ];
        
        /*Thumbnails*/
        $scope.thumbs=[
            {
                image:'assets/img-thumbs/thumbs-home/brackets.jpg',
                title:'metodology',
                content:'metodology'
            },
            {
                image:'assets/img-thumbs/thumbs-home/developer.png',
                title:'appModern',
                content:'appModern'
            },
            {
                image:'assets/img-thumbs/thumbs-home/polymer.png',
                title:'metodology',
                content:'metodology'
            }
        ];
        
    }]);

