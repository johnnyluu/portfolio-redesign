'use strict';

describe('Controller: MystoriesCtrl', function () {

  // load the controller's module
  beforeEach(module('repoApp'));

  var MystoriesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MystoriesCtrl = $controller('MystoriesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
