'use strict';

describe('Controller: AnemuCtrl', function () {

  // load the controller's module
  beforeEach(module('repoApp'));

  var AnemuCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AnemuCtrl = $controller('AnemuCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
