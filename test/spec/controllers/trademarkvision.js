'use strict';

describe('Controller: TrademarkvisionCtrl', function () {

  // load the controller's module
  beforeEach(module('repoApp'));

  var TrademarkvisionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TrademarkvisionCtrl = $controller('TrademarkvisionCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
