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
      .when('/styleguide', {
        templateUrl: 'views/styleguide.html',
        controller: 'StyleguideCtrl'
      })
      .when('/portfolio', {
        templateUrl: 'views/portfolio.html',
        controller: 'PortfolioCtrl'
      })
      .when('/work', {
        templateUrl: 'views/work.html',
        controller: 'WorkCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/lacasarosa', {
        templateUrl: 'views/lacasarosa.html',
        controller: 'LacasarosaCtrl'
      })
      .when('/1ring', {
        templateUrl: 'views/1ring.html',
        controller: '1ringCtrl'
      })
      .when('/readingparks', {
        templateUrl: 'views/readingparks.html',
        controller: 'ReadingparksCtrl'
      })
      .when('/1linepitch', {
        templateUrl: 'views/1linepitch.html',
        controller: '1linepitchCtrl'
      })
      .when('/merchantwarriors', {
        templateUrl: 'views/merchantwarriors.html',
        controller: 'MerchantwarriorsCtrl'
      })
      .when('/anemu', {
        templateUrl: 'views/anemu.html',
        controller: 'AnemuCtrl'
      })
      .when('/misale', {
        templateUrl: 'views/misale.html',
        controller: 'MisaleCtrl'
      })
      .when('/morofton', {
        templateUrl: 'views/morofton.html',
        controller: 'MoroftonCtrl'
      })
      .when('/thenewscloud', {
        templateUrl: 'views/thenewscloud.html',
        controller: 'ThenewscloudCtrl'
      })
      .when('/waterbottle', {
        templateUrl: 'views/waterbottle.html',
        controller: 'WaterbottleCtrl'
      })
      .when('/tuition', {
        templateUrl: 'views/tuition.html',
        controller: 'TuitionCtrl'
      })
      .when('/mystories', {
        templateUrl: 'views/mystories.html',
        controller: 'MystoriesCtrl'
      })
      .when('/brisaccess', {
        templateUrl: 'views/brisaccess.html',
        controller: 'BrisaccessCtrl'
      })
      .when('/wildlifeausmag', {
        templateUrl: 'views/wildlifeausmag.html',
        controller: 'WildlifeausmagCtrl'
      })
      .when('/misc', {
        templateUrl: 'views/misc.html',
        controller: 'MiscCtrl'
      })
      .when('/trademarkvision', {
        templateUrl: 'views/trademarkvision.html',
        controller: 'TrademarkvisionCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .directive('updates', function(){
    return{
      restrict: 'AE',
      templateUrl: 'views/updates.html',
      transclude: 'true',
    }
  })
  .directive('update', function(){
    return{
      restrict: 'E',
      templateUrl: 'views/update_template.html',
      scope: {
        project: '@',
        title: '@',
        description: '@',
        date: '@',
        image: '@',
        tags: '=',
        type: '@',
        gallery: '='
      },
      transclude: 'true'
    }
  })
  .directive('gallery', function(){
    return{
      restrict: 'E',
      templateUrl: 'views/gallery_template.html',
      scope: {
        images: '='
      },
      transclude: 'true',
      link: function(scope, element, attrs){
        scope.element = $(element[0].querySelector('.images'));
        // console.log(scope.element);
        //show big image lightbox when clicking on .image
        element.on("click", ".images .image", function(event) {
          event.stopPropagation();
          if($( window ).width() <= 960 || $(this).parent().hasClass('expanded')){
            //prevents the webpage in the background from scrolling
            $('body').addClass('noscroll');
            $('.bigimg').removeClass('hidden');
            $('.bigimg').addClass('show');
            scope.setSlide($(this));
          } else {
            var id = '#' + $(this).parent().attr('id')
            $(this).parent().addClass('expanded');
          }
          
        });

      },
      controller: function($scope, $rootScope, $timeout){
        $scope.element;
        $scope.currentImg;
        $scope.firstimg;
        //change the slide and caption
        $scope.setSlide = function(img){
            $scope.currentImg = img;
            $rootScope.imgurl = $scope.currentImg.find('img').attr("src");
            $rootScope.imgcaption = $scope.currentImg.find('.caption').html();
            $scope.$apply();
        }

        var currentstep = 1;
        $scope.back = function(){
          // var element = $(event.target);
          if(currentstep <= 1){
            $scope.element.removeClass('expanded');
          } else {
            $scope.firstimg.css('margin-left', $scope.firstimg.css('margin-left').slice(0, -2) - ($scope.element.find('.image:nth-child(' + (currentstep - 1) +')')[0].getBoundingClientRect().left) +32 + 'px');
            $scope.element.addClass('bounce-reverse');
            $timeout(function(){
              $scope.element.removeClass('bounce-reverse');
            }, 600);
            currentstep --;
          }
          
        }

        //scroll the gallery to the right
        $scope.next = function(){
          // var last_right = $(window).width() - ($scope.element.find('.image').last().offset().left + $scope.element.find('.image').last().outerWidth());
          if($scope.firstimg === undefined){
            $scope.firstimg = $scope.element.find('.image').first();
          }
          var size = $scope.element.find('.image').size();
          // console.log($scope.firstimg);
          var trimmargin;
          if(currentstep === 1){
            trimmargin = 64;
          } else {
            trimmargin = 64;
          }
          if (currentstep < size) {
            $scope.firstimg.css('margin-left', ($scope.firstimg.css('margin-left').slice(0, -2) - ($scope.element.find('.image:nth-child(' + (currentstep + 1) +')')[0].getBoundingClientRect().left) +32) + 'px');
              currentstep ++;
          }
          $scope.element.addClass('bounce');
          $timeout(function(){
            $scope.element.removeClass('bounce');
          }, 600);
          
        }

        // //detect the position of the gallery
        // function currentstep(){
        //   var width = $scope.element.find(' .image').first().width() + 32;
        //   var left = -$scope.element.find(' .image').first().css('margin-left').slice(0, -2);
        //   var n = ~~(left / width);
        //   return n + 1;
        // }

        //check if the gallery is expanded
        // $scope.expanded = function(id){
        //   return $(id).hasClass('expanded');
        // }

      }
    }
  })
  .directive('ptitle', function($location){
    return{
      restrict: 'E',
      templateUrl: 'views/project_title_template.html',
      scope: {
        title: '@',
        description: '@',
        award: '@',
        isphone: '=',
        image: '@',
        video: '@'
      },
      controller: function($scope, $location){
        var projects = ['1ring', 'readingparks', '1linepitch', 'merchantwarriors', 'anemu', 'lacasarosa', 'misale', 'trademarkvision', 'morofton', 'thenewscloud', 'waterbottle', 'tuition', 'brisaccess', 'wildlifeausmag', 'portfolio', 'misc'];
        // console.log($scope.video);
        var p = $location.path().slice(1);
        var index = projects.indexOf(p);
        $scope.nextProject = function(){
          var next = projects[projects.indexOf(p) + 1] || projects[0];
          $location.path('/' + next);
        }

        $scope.lastProject = function(){
          var last = projects[projects.indexOf(p) - 1] || projects[project.length - 1];
          $location.path('/' + last);
        }
      },
      link: function(scope, element, attrs){
        //when element is created, add video src to the iframe or remove the iframe because add src in html doesn't work
        if(attrs.video){
          $(element[0].querySelector('.preview .video')).attr('src', attrs.video);
        } else {
          $(element[0].querySelector('.preview .video')).remove();
        }
        
      }
    }
  })
  .controller('AppCtrl', function ($scope, $timeout, $route, $location, $rootScope) {



    // console.log($scope.currentImg);
    

    //allow body to scroll, fade out image then add hidden class to move it behind the page.
    $scope.hideBigImg = function(){
      $('.bigimg').removeClass('show');
      $('body').removeClass('noscroll');
      $timeout(function(){
        $('.bigimg').addClass('hidden');
        $rootScope.imgurl = '';
        $rootScope.imgcaption = '';
        $('.bigimg').scrollTop(0);
        $scope.$apply();
      }, 500);
    }

    //move to the next slide or back to the first
    $scope.nextSlide = function(){
      $('.bigimg').addClass('changing');
      $timeout(function(){
        if($scope.currentImg.next().hasClass('image')){
          setSlide($scope.currentImg.next());
        } else {
          var id = '#' + $scope.currentImg.parent().attr('id');
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
        if($scope.currentImg.prev().hasClass('image')){
          setSlide($scope.currentImg.prev());
        } else {
          var id = '#' + $scope.currentImg.parent().attr('id');
          setSlide($(id + ' .image').last());
        };
        $('.bigimg').scrollTop(0);
        $('.bigimg').removeClass('changing');
      }, 500);
    }

    //change the slide and caption
    function setSlide(img){
        $scope.currentImg = img;
        $rootScope.imgurl = $scope.currentImg.find('img').attr("src");
        $rootScope.imgcaption = $scope.currentImg.find('.caption').html();
        $scope.$apply();
    }

    //scroll back to top when changing routes
    $scope.$on('$routeChangeStart', function(event, next, current){
      // console.log(next);
      //fadeout animation
      $('body').css('opacity', '0');
      $timeout(function(){
        $('body').scrollTop(0);
        $('body').css('opacity', '1');
      }, 200);

      //show navbar if not showing
      if($('.navbar').hasClass('hidden')){
        $('.navbar').removeClass('hidden');
      }
    })

    var path;
    //for showing more content
    var step = 1;
    //filter posts based on current route
    $scope.$on('$routeChangeSuccess', function(event, current, previous){
      path = $location.path().slice(1);
      step = 1;
      // console.log(path);
      if(path === '' || path === 'about' || path === 'contact' || path === 'work'){
        $('.loadmore').show();
        $('.update').hide();
        $('.update:lt(5)').show();
        showTitle();
      }else{
        hideTitle();
        $('.loadmore').hide();
        $('.update').each(function(){
          if($(this).attr('project') === path){
            $(this).show();
          } else {
            $(this).hide();
          }
        });
      }
    })

    function hideTitle(){
      $('p.proj-des').hide();
      $('h2.proj-title').parent().hide();
    }

    function showTitle(){
      $('p.proj-des').show();
      $('h2.proj-title').parent().show();
    }


    // show more posts
    $scope.showmore = function(){
      $('.update:lt(' + (step*5 + 5) + ')').show();
      if((step*5+5) >= $('.update').size()){
        $('.loadmore').hide();
      }
      step ++;
    }
  });
