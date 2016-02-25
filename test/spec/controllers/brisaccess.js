'use strict';

describe('Controller: BrisaccessCtrl', function () {

  // load the controller's module
  beforeEach(module('repoApp'));

  var BrisaccessCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BrisaccessCtrl = $controller('BrisaccessCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
