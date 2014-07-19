'use strict';

/**
 * @ngdoc function
 * @name crudBoilerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the crudBoilerApp
 */
angular.module('crudBoilerApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
