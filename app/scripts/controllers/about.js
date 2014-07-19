'use strict';

/**
 * @ngdoc function
 * @name crudBoilerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the crudBoilerApp
 */
angular.module('crudBoilerApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
