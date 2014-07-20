'use strict';

/**
 * @ngdoc function
 * @name crudBoilerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the crudBoilerApp
 */
angular.module('crudBoilerApp')
    .controller('MainCtrl', function ($scope, Product, Company) {

        Product.find(function (products) {
            $scope.products = products;
            window.pds = products;
        });
        $scope.remove = function (index, item) {
            item.destroy().then(function (e) {
                window.pds = $scope.products;
                $scope.products.splice(index, 1);
                console.log('delete successful',index,  e);
            });
        };


    });
