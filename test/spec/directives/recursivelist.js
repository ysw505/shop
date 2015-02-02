'use strict';

describe('Directive: recursiveList', function () {

  // load the directive's module
  beforeEach(module('shopApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<recursive-list></recursive-list>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the recursiveList directive');
  }));
});
