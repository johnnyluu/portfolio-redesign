'use strict';

describe('Controller: MisaleCtrl', function () {

  // load the controller's module
  beforeEach(module('repoApp'));

  var MisaleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MisaleCtrl = $controller('MisaleCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
