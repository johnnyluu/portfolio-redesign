'use strict';

/**
 * @ngdoc function
 * @name repoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the repoApp
 */
angular.module('repoApp')
  .controller('MainCtrl', function ($scope, $interval) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $('.navbar').addClass('hidden');


    $(document).scroll(function(){
        console.log('scrolling');
        if($(document).scrollTop() >= $(window).height() && $('.navbar').hasClass('hidden')){
            $('.navbar').removeClass('hidden');
        } else if ($(document).scrollTop() < $(window).height() && !$('.navbar').hasClass('hidden')){
            $('.navbar').addClass('hidden');
        }
    });

    //the eyes follow the cursor
    $( ".landing" ).mousemove(function( event ) {
    	var w = $('.landing').width();
    	var h = $('.landing').height();
    	$('.eye').css('transform', 'translate(' + (((event.pageX - w / 2 ) / (w / 2))*30) + '%,' + (((event.pageY - h / 2) / (h / 2))*30) + '%)');
    });

    //typewritter animation
    var skills = ['UX', 'WEB', 'DESIGN', 'CODING'];
    var current_skill = 0;
    var count = 0;
    var interval = $interval(function(){
    	count = skills[current_skill].length;
    	if(current_skill < (skills.length - 1)){
    		current_skill ++;
    	} else {
    		current_skill = 0;
    	}
    	count = 0;
    	$interval(function(){
    		count ++;
    		$('#scrolltext').html(skills[current_skill].substr(0, count));
    		// console.log(skills[current_skill].substr(0, count));
    	}, 100, (skills[current_skill].length))
    }, 3000);
   
    //terminates the interval when scope is destroyed 
    $scope.$on('$destroy', function(){
        $interval.cancel(interval);
        $(document).unbind('scroll');
    })
  });
