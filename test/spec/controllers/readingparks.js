'use strict';

describe('Controller: ReadingparksCtrl', function () {

  // load the controller's module
  beforeEach(module('repoApp'));

  var ReadingparksCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReadingparksCtrl = $controller('ReadingparksCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
