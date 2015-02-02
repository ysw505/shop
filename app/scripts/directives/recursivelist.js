'use strict';

/**
 * @ngdoc directive
 * @name shopApp.directive:recursiveList
 * @description
 * # recursiveList
 */
angular.module('shopApp')
  .directive('recursiveList', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the recursiveList directive');
      }
    };
  });
