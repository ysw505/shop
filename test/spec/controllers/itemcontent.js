'use strict';

describe('Controller: ItemcontentCtrl', function () {

  // load the controller's module
  beforeEach(module('shopApp'));

  var ItemcontentCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ItemcontentCtrl = $controller('ItemcontentCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
