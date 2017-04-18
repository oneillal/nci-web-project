$(document).ready(function() {

  // Variables
  var $nav = $( ".nav" ),
      $window = $( window ),
      $body = $( "body" ),
      // returns the offset coordinates in px for the top element .nav
      navOffsetTop = $nav.offset().top
  
  function init() {
      // Add event listeners on scroll and resize
      $window.on('scroll', onScroll)
      $window.on('resize', resize)
  }

  function resize() {
  //  if($window.width() >= 840){
      $body.removeClass('has-docked-nav')
      //$body.removeClass('banner')
      //$body.removeClass('header')
      navOffsetTop = $nav.offset().top
      onScroll()
   // }
  }

  // $window.scrollTop(): Get the current vertical position of the scroll bar
    // for the first element in the set of matched elements

  function onScroll() {
    //if(navOffsetTop < $window.scrollTop() && !$body.hasClass('has-docked-nav') && $window.width() >= 840) {
    if(navOffsetTop < $window.scrollTop() && !$body.hasClass('has-docked-nav')) {
      $body.addClass('has-docked-nav')
      //$body.addClass('banner')
      //$body.addClass('header')
    }

    if(navOffsetTop > $window.scrollTop() && $body.hasClass('has-docked-nav')) {
      $body.removeClass('has-docked-nav')
      //$body.removeClass('banner')
     // $body.removeClass('header')
    }
  }

    init();

});

