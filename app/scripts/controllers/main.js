'use strict';

/**
 * @ngdoc function
 * @name repoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the repoApp
 */
angular.module('repoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $( ".landing" ).mousemove(function( event ) {
    	var w = $('.landing').width();
    	var h = $('.landing').height();
    	$('.eye').css('transform', 'translate(' + (((event.pageX - w / 2 ) / (w / 2))*30) + '%,' + (((event.pageY - h / 2) / (h / 2))*30) + '%)');
    });
  });
