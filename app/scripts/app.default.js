'use strict';

/**
 * @ngdoc overview
 * @name crudBoilerApp
 * @description
 * # crudBoilerApp
 *
 * Main module of the application.
 */
angular
    .module('crudBoilerApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'Models',
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/item/', {
                templateUrl: 'views/singleItem.html',
                controller: 'SingleitemCtrl'
            })
            .when('/item/:id', {
                templateUrl: 'views/singleItem.html',
                controller: 'SingleitemCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .run(function(){
        Parse.initialize(API_KEY, JAVASCRIPT_KEY);
    })
;
