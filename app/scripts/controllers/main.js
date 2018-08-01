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

    //show navbar after scroll through the first screen
    $(document).scroll(function(){
        // console.log('scrolling');
        if($(document).scrollTop() >= $(window).height() && $('.navbar').hasClass('hidden')){
            $('.navbar').removeClass('hidden');
        } else if ($(document).scrollTop() < $(window).height() && !$('.navbar').hasClass('hidden')){
            $('.navbar').addClass('hidden');
        }
    });

    //the eyes follow the cursor, not working property in firefox
    $( ".landing" ).mousemove(function( event ) {
    	var w = $('.landing').width();
        var h = $('.landing').height();
        var eye_w = $('.eye')[0].getBoundingClientRect().width;
        //move 30% of the size of the pupils based on where the cursor is in relation to the center point of the screen
    	$('.eye').css('transform', 'translate(' + (((event.pageX - w / 2 ) / (w / 2))*5)*eye_w + 'px,' + (((event.pageY - h / 2) / (h / 2))*5)*eye_w + 'px)');
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
        $('#scrolltext').addClass('animate');
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
