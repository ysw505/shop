'use strict';

/**
 * @ngdoc function
 * @name shopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the shopApp
 */
angular.module('shopApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
