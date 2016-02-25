'use strict';

describe('Controller: MiscCtrl', function () {

  // load the controller's module
  beforeEach(module('repoApp'));

  var MiscCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MiscCtrl = $controller('MiscCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
