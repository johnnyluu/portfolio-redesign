'use strict';

/**
 * @ngdoc function
 * @name repoApp.controller:MiscCtrl
 * @description
 * # MiscCtrl
 * Controller of the repoApp
 */
angular.module('repoApp')
  .controller('MiscCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
