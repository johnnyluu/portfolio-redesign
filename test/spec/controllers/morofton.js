'use strict';

describe('Controller: MoroftonCtrl', function () {

  // load the controller's module
  beforeEach(module('repoApp'));

  var MoroftonCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MoroftonCtrl = $controller('MoroftonCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
