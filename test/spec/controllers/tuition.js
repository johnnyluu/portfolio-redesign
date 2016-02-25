'use strict';

describe('Controller: TuitionCtrl', function () {

  // load the controller's module
  beforeEach(module('repoApp'));

  var TuitionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TuitionCtrl = $controller('TuitionCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
