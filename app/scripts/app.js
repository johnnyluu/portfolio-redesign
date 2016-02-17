'use strict';

/**
 * @ngdoc overview
 * @name repoApp
 * @description
 * # repoApp
 *
 * Main module of the application.
 */
angular
  .module('repoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .controller('AppCtrl', function ($scope, $timeout) {
    $scope.expand = function(id){
      console.log('expanding '+id);
      $(id).addClass('expanded');
    }
    $scope.back = function(id){
      if(currentstep(id) <= 1){
        $(id).removeClass('expanded');
      } else if (currentstep(id) == 2){
        $(id + ' .image').first().css('margin-left', '32px');
        $(id).addClass('bounce-reverse');
        $timeout(function(){
          $(id).removeClass('bounce-reverse');
        }, 600);
      } else {
        $(id + ' .image').first().css('margin-left', '-' + ($(id + ' .image').first().width() + 64) * (currentstep(id) - 2) + 'px');
        $(id).addClass('bounce-reverse');
        $timeout(function(){
          $(id).removeClass('bounce-reverse');
        }, 600);
      }
      
    }
    $scope.next = function(id){
      var last_right = $(window).width() - ($(id + ' .image').last().offset().left + $(id + ' .image').last().outerWidth());
      if (last_right < 0) {
        $(id + ' .image').first().css('margin-left', '-' + (($(id + ' .image').first().width() + 64) * currentstep(id)) + 'px');
      }
      $(id).addClass('bounce');
      $timeout(function(){
        $(id).removeClass('bounce');
      }, 600);
      
    }
    function currentstep(id){
      var width = $(id + ' .image').first().width() + 32;
      var left = -$(id + ' .image').first().css('margin-left').slice(0, -2);
      var n = ~~(left / width);
      return n + 1;
    }
    $scope.expanded = function(id){
      return $(id).hasClass('expanded');
    }

    //show big image lightbox when clicking on .image
    $(document).on("click", ".images .image", function(event) {
      event.stopPropagation();
      if($(this).parent().hasClass('expanded')){
        $('.bigimg').removeClass('hidden');
        $('.bigimg').addClass('show');
        $scope.imgurl = $(this).find('img').attr("src");
        $scope.imgcaption = $(this).find('.caption').html();
        $scope.$apply();
      } else {
        var id = '#' + $(this).parent().attr('id')
        $scope.expand(id);
      }
      
    });

    $scope.hideBigImg = function(){
      $('.bigimg').removeClass('show');
      $timeout(function(){
        $('.bigimg').addClass('hidden');
        $scope.imgurl = '';
        $scope.imgcaption = '';
        $scope.$apply();
      }, 500);
    }
  });
