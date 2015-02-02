'use strict';

/**
 * @ngdoc function
 * @name shopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the shopApp
 */
angular.module('shopApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
