'use strict';

/**
 * @ngdoc function
 * @name repoApp.controller:PortfolioCtrl
 * @description
 * # PortfolioCtrl
 * Controller of the repoApp
 */
angular.module('repoApp')
  .controller('PortfolioCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
