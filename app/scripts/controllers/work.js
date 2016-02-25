'use strict';

/**
 * @ngdoc function
 * @name repoApp.controller:WorkCtrl
 * @description
 * # WorkCtrl
 * Controller of the repoApp
 */
angular.module('repoApp')
  .controller('WorkCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
