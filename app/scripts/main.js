'use strict';
$(document).ready(function(){
	$('.main').onepage_scroll({
		sectionContainer: 'section'
	});
	$('.nav>li>a').on('click',function(e){
		e.preventDefault();
		var selected = $(this);
		$('.onepage-pagination>li>a[data-index='+ selected.data('index') +']').trigger('click');
	});
	$('.toPage').on('click',function(e){
		e.preventDefault();
		$('.onepage-pagination>li>a[data-index='+ $(this).data('index') +']').trigger('click');
	});
	$('#ajax-contact-form').submit(function(e) {
		e.preventDefault();
		$('#note').html('<div> Please wait </div>');
		$('#ajax-contact-form').css('opacity',.4);
		Parse.initialize('6qhUFEXtzdSTLwzG9VMeCU5oFaTWtgelh61unUiw', 'cTi3fECgna7cBjeYdyNIA6qnjehp1O8Ldrs8c5pe');
		var Message = Parse.Object.extend('WeagleContact');
		var message = new Message();
		message.save({
			name: $('#inputName').val(),
			email: $('#inputEmail').val(),
			subject: $('#inputSubject').val(),
			message: $('#inputMessage').val(),
		 },{
		  success: function(object) {
		    $('#note').html('<div>Your message has been sent. Thank you!</div>');
		    $('#ajax-contact-form').hide();
		  },error: function() {
		  	$('#note').html('<div class="notification_error">Sorry, there is some technical issue with the server <br> Please Try again later</div>');
		  }
		});
	});
	$('.carousel').carousel({
	  interval: 4000
	})
});