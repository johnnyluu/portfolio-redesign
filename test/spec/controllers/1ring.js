'use strict';

describe('Controller: 1ringCtrl', function () {

  // load the controller's module
  beforeEach(module('repoApp'));

  var 1ringCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    1ringCtrl = $controller('1ringCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
