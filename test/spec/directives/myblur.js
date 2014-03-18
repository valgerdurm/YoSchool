'use strict';

describe('Directive: myBlur', function () {

  // load the directive's module
  beforeEach(module('yoSchoolApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<my-blur></my-blur>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('');
  }));
});
