'use strict';

/**
 * @ngdoc function
 * @name shopApp.controller:SidebarCtrl
 * @description
 * # SidebarCtrl
 * Controller of the shopApp
 */
angular.module('shopApp')
  .controller('SidebarCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
