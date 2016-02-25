'use strict';

describe('Controller: ThenewscloudCtrl', function () {

  // load the controller's module
  beforeEach(module('repoApp'));

  var ThenewscloudCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ThenewscloudCtrl = $controller('ThenewscloudCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
