'use strict';

/**
 * @ngdoc function
 * @name shopApp.controller:ItemcontentCtrl
 * @description
 * # ItemcontentCtrl
 * Controller of the shopApp
 */
angular.module('shopApp')
  .controller('ItemcontentCtrl', function ($scope , $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('/items/categorys').success(function(data, status, headers, config) {
    	console.log(data);

    	$scope.categorys = data;
  	});
  });
