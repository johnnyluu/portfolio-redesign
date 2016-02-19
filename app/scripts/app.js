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
      // console.log('expanding '+id);
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

    var currentImg;
    //show big image lightbox when clicking on .image
    $(document).on("click", ".images .image", function(event) {
      event.stopPropagation();
      if($( window ).width() <= 960 || $(this).parent().hasClass('expanded')){
        $('body').addClass('noscroll');
        $('.bigimg').removeClass('hidden');
        $('.bigimg').addClass('show');
        setSlide($(this));
      } else {
        var id = '#' + $(this).parent().attr('id')
        $scope.expand(id);
      }
      
    });

    $scope.hideBigImg = function(){
      $('.bigimg').removeClass('show');
      $('body').removeClass('noscroll');
      $timeout(function(){
        $('.bigimg').addClass('hidden');
        $scope.imgurl = '';
        $scope.imgcaption = '';
        $('.bigimg').scrollTop(0);
        $scope.$apply();
      }, 500);
    }

    //move to the next slide or back to the first
    $scope.nextSlide = function(){
      $('.bigimg').addClass('changing');
      $timeout(function(){
        if(currentImg.next().hasClass('image')){
          setSlide(currentImg.next());
        } else {
          var id = '#' + currentImg.parent().attr('id');
          setSlide($(id + ' .image').first());
        };
        $('.bigimg').scrollTop(0);
        $('.bigimg').removeClass('changing');
      }, 500);
    }

    //move to the previous slide or straight to the last
    $scope.lastSlide = function(){
      $('.bigimg').addClass('changing');
      $timeout(function(){
        if(currentImg.prev().hasClass('image')){
          setSlide(currentImg.prev());
        } else {
          var id = '#' + currentImg.parent().attr('id');
          setSlide($(id + ' .image').last());
        };
        $('.bigimg').scrollTop(0);
        $('.bigimg').removeClass('changing');
      }, 500);
    }

    //change the slide and caption
    function setSlide(img){
        currentImg = img;
        $scope.imgurl = currentImg.find('img').attr("src");
        $scope.imgcaption = currentImg.find('.caption').html();
        $scope.$apply();
    }
  });
