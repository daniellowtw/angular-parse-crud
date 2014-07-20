'use strict';

/**
 * @ngdoc function
 * @name crudBoilerApp.controller:SingleitemCtrl
 * @description
 * # SingleitemCtrl
 * Controller of the crudBoilerApp
 */
angular.module('crudBoilerApp')
    .controller('SingleitemCtrl', function ($scope, $location, $routeParams, Product) {
        if($routeParams.id){
            Product.get($routeParams.id,function(e){
                $scope.item = e;
                window.it =e;
            });
        }
        else{
            console.log("new");
            $scope.item = new Product();
            window.it = $scope.item;
        }
        $scope.save = function () {
            $scope.item.save().then(function (e) {
                console.log('saved successfully', e);
                $location.path('#/item/' + item.id);
            });
        };

    });
