'use strict';

describe('Controller: WildlifeausmagCtrl', function () {

  // load the controller's module
  beforeEach(module('repoApp'));

  var WildlifeausmagCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WildlifeausmagCtrl = $controller('WildlifeausmagCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
