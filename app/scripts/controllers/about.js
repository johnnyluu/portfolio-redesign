'use strict';

/**
 * @ngdoc function
 * @name repoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the repoApp
 */
angular.module('repoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
