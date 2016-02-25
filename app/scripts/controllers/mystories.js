'use strict';

/**
 * @ngdoc function
 * @name repoApp.controller:MystoriesCtrl
 * @description
 * # MystoriesCtrl
 * Controller of the repoApp
 */
angular.module('repoApp')
  .controller('MystoriesCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
