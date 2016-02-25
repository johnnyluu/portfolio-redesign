'use strict';

describe('Controller: WaterbottleCtrl', function () {

  // load the controller's module
  beforeEach(module('repoApp'));

  var WaterbottleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WaterbottleCtrl = $controller('WaterbottleCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
