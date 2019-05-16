// JavaScript Document

$(document).ready(function(){
	jQuery.fn.exists = function(){return this.length>0;}
	
	if ($('.MainTabs').exists()) {
		$('.MainTabs').tabs();
	}

	// scroll effect
	new WOW().init();
	// END scroll effect

	// $.getJSON('http://freegeoip.net/json/', function (location) {
 //         console.log('Your country code is ' + location.country_code);
 //    ); 
	
	
});