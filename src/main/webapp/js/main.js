// NCI Web Project
//
// Filename: main.js
//
// Author: Alan O'Neill|Jonas Stein|Mark Hanlon
//
// Javascript functionality for Aurora Ireland web-site
//
//

// Function that docks the Navbar to the top of the screen when the page
// scrolls beyond a  certain point 
$(document).ready(
		function() {

			// Variables
			var $nav = $(".nav"), $window = $(window), $body = $("body"),
			// returns the offset coordinates in px for the top element .nav
			navOffsetTop = $nav.offset().top

			function init() {
				// Add event listeners on scroll and resize
				$window.on('scroll', onScroll)
				$window.on('resize', resize)
			}

			function resize() {
				$body.removeClass('has-docked-nav')
				navOffsetTop = $nav.offset().top
				onScroll()
			}

			// $window.scrollTop(): Get the current vertical position of the
			// scroll bar
			// for the first element in the set of matched elements

			function onScroll() {
				if (navOffsetTop < $window.scrollTop()
						&& !$body.hasClass('has-docked-nav')) {
					$body.addClass('has-docked-nav')
				}

				if (navOffsetTop > $window.scrollTop()
						&& $body.hasClass('has-docked-nav')) {
					$body.removeClass('has-docked-nav')
				}
			}

			init();

		});

// Function to show the responsive menu
function openNav() {
	document.getElementById("sidenav").style.width = "14em";
	document.getElementById("toggle").className = document
			.getElementById("toggle").className.replace(/\btoggle\b/, '');
};

// Function to hide the responsive menu
function closeNav() {
	document.getElementById("sidenav").style.width = "0";
	document.getElementById("toggle").className = document
			.getElementById("toggle").className.replace('', 'toggle');
};

// Functions to toggle blog posts when the user clicks 
// the Read More/Read Less buttons
function showHide(shID) {
	if (document.getElementById(shID)) {
		if (document.getElementById(shID + '-show').style.display != 'none') {
			document.getElementById(shID + '-show').style.display = 'none';
			document.getElementById(shID).style.display = 'block';
		} else {
			document.getElementById(shID + '-show').style.display = 'inline';
			document.getElementById(shID).style.display = 'none';
		}

	}
};

// Function to gives the illusion to use that their 
// registration has been sent via the form in the contact.html page
function sendMsg() {
	alert("Message sent!");
}

// Function that scrolls the page onClick. Used in index.html to scroll 
// the page to the marketing section
$(function() {
	$('a[href="#smoothScroll"]').click(function(event) {
		if (this.hash !== "") {

			// prevent the default action (href) from executing
			event.preventDefault();

			// this.hash reads the href attribute
			// in this case hash will be #smoothScroll
			var hash = this.hash;

			$('html, body').animate({
				// return the vertical scrollbar position
				// and assigns it to scrollTop
				scrollTop : $(hash).offset().top - 50
			},
			// .9 seconds for the transition
			900);
		}
	});
});
