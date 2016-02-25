'use strict';

describe('Controller: 1linepitchCtrl', function () {

  // load the controller's module
  beforeEach(module('repoApp'));

  var 1linepitchCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    1linepitchCtrl = $controller('1linepitchCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
