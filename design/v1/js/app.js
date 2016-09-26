;(function () {

	'use strict';



	// iPad and iPod detection
	// var isiPad = function(){
	// 	return (navigator.platform.indexOf("iPad") != -1);
	// };
	//
	// var isiPhone = function(){
	//     return (
	// 		(navigator.platform.indexOf("iPhone") != -1) ||
	// 		(navigator.platform.indexOf("iPod") != -1)
	//     );
	// };


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};

	var drawModal = function() {

		$('.js-fh5co-draw-toggle').on('click', function(event) {
			event.preventDefault();
			console.log('event', event);
			var $this = $(this);
			if( $('body').hasClass('draw-show') ) {
				$('body').removeClass('draw-show');
				$('#fh5co-draw-window > .js-fh5co-draw-toggle').removeClass('show');
			} else {
				$('body').addClass('draw-show');
				setTimeout(function(){
					$('#fh5co-draw-window > .js-fh5co-draw-toggle').addClass('show');
				}, 900);


				// $('body').addClass('menu-show');
				// setTimeout(function(){
				// 	$('#fh5co-main-nav > .js-fh5co-nav-toggle').addClass('show');
				// }, 900);
			}
		})
	};

	var resultModal = function() {

		$('.js-fh5co-result-toggle').on('click', function(event) {
			event.preventDefault();
			var $this = $(this);
			if( $('body').hasClass('result-show') ) {
				$('body').removeClass('result-show');
				$('#fh5co-result-window > .js-fh5co-result-toggle').removeClass('show');
			} else {
				$('body').addClass('result-show');
				setTimeout(function(){
					$('#fh5co-result-window > .js-fh5co-result-toggle').addClass('show');
				}, 900);
			}
		})
	};

	// Animations

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated');
							} else {
								el.addClass('fadeInUp animated');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});

				}, 100);

			}

		} , { offset: '85%' } );
	};
	//
	// var counter = function() {
	// 	$('.js-counter').countTo({
	// 		formatter: function (value, options) {
	//       	return value.toFixed(options.decimals);
	//     	}
	// 	});
	// };

	// var counterWayPoint = function() {
	// 	if ($('#counter-animate').length > 0 ) {
	// 		$('#counter-animate').waypoint( function( direction ) {
	//
	// 			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
	// 				setTimeout( counter , 400);
	// 				$(this.element).addClass('animated');
	//
	// 			}
	// 		} , { offset: '90%' } );
	// 	}
	// };


	// var imgPopup = function() {
	//
	//
	// 	$('body').on('click', '.img-popup', function(event){
	// 		event.preventDefault();
	// 		var src = $(this).attr('href');
	// 		$.magnificPopup.open({
	// 	      items: {
	// 		      src: src
	// 		   },
	// 		   type: 'image'
	// 	  	});
	//
	// 	});
	//
	// };


	// Document on load.
	$(function(){
		fullHeight();
		drawModal();
		resultModal();
		// counter();
		contentWayPoint();
// counterWayPoint();
		// imgPopup();

		// $('[data-toggle="offcanvas"]').click(function(){
    //     $("#navigation").toggleClass("hidden-xs");
    // });
	});


	var alert = $('#alert-1');
        alert.appendTo('.page-alerts');
        alert.slideDown();

				//Close alert
				    $('.page-alert .close').click(function(e) {
				        e.preventDefault();
				        $(this).closest('.page-alert').slideUp();
				    });

						$('.clear-page-alerts').click(function(e) {
						        e.preventDefault();
						        $('.page-alert').slideUp();
						    });
}());
