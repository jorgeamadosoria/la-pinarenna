$(document).ready(function($) {

	"use strict";
	
	var carousel = function() {
		$('.owl-carousel').owlCarousel({
			loop: true,
			margin: 10,
			nav: true,
			stagePadding: 5,
			nav: false,
			navText: ['<span class="icon-chevron-left">', '<span class="icon-chevron-right">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 3
				}
			}
		});
	};
	
	function fillMenuCategory(id,array){
		array.map((it,idx) => 
		
				$(id).find((idx%2)?"#odd":"#even").append($("#menu-item").clone().attr("id","").toggleClass("d-none")
					.find("#pic").attr("src",it.pic).end()
					.find("#price").text(it.price).end()
					.find("#name").text(it.name).end()
					.find("#description").text(it.description).end())
			
		);
	};
		
	
	var htmlBuilder = function() {		
		galleryPics.map(it => $("#gallery-picture").clone().attr("id","").toggleClass("d-none").find("a").attr("href",it)
		.find("img").attr("src",it).end().end().insertAfter($("#gallery-picture")));
		
		offers.map(it => 
			
				$("#offer-item").clone().attr("id","").toggleClass("d-none")
					.find("#pic").attr("src",it.pic).end()
					.find("#price").text(it.price).end()
					.find("#name").text(it.name).end()
					.find("#description").text(it.description).end().insertAfter($("#offer-item"))
		);
		$("#offer-item").remove();
		carousel();
		fillMenuCategory("#pills-carnes",carnes);
		fillMenuCategory("#pills-frutos-del-mar",frutosDelMar);
		fillMenuCategory("#pills-guarniciones",guarniciones);
		fillMenuCategory("#pills-bebidas",bebidas);
		fillMenuCategory("#pills-cervezas",cervezas);
		fillMenuCategory("#pills-entradas",entradas);
		fillMenuCategory("#pills-aves",aves);
		fillMenuCategory("#pills-cerdo",cerdo);
		fillMenuCategory("#pills-postres",postres);
		
		
		
		
	};
	htmlBuilder();

//---------------------------------------------------------------------------------------------	
	
	
	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#site-loader').length > 0) {
				$('#site-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.site_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	var counter = function() {
		
		$('#section-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('site-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.site-number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();
	
	

	var contentWayPoint = function() {
		var i = 0;
		$('.site-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('site-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .site-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn site-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft site-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight site-animated');
							} else {
								el.addClass('fadeInUp site-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	// navigation
	var OnePageNav = function() {
		$(".smoothscroll[href^='#'], #site-nav ul li a[href^='#']").on('click', function(e) {
		 	e.preventDefault();

		 	var hash = this.hash,
		 			navToggler = $('.navbar-toggler');
		 	$('html, body').animate({
		    scrollTop: $(hash).offset().top
		  }, 700, 'easeInOutExpo', function(){
		    window.location.hash = hash;
		  });


		  if ( navToggler.is(':visible') ) {
		  	navToggler.click();
		  }
		});
		$('body').on('activate.bs.scrollspy', function () {
		  console.log('nice');
		})
	};
	OnePageNav();


	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('#m_date').datepicker({
	  'format': 'm/d/yyyy',
	  'autoclose': true
	});
	$('#m_time').timepicker();



});

