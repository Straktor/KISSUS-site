;(function( $, window, document, undefined ) {

	"use strict";

	var _win = $( window ), 

		ticking = false, 

		lastScrollTop = 0, 

		parallaxInstances = [], 

		windowHeight = _win.height(), 

		reqAnimFrame = window.requestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame || 
			function( func ) { func(); }, 

		Parallax = function( element, options ) {
			this._init( element, options );
		}, 

		getScrollTop = function() {
			return ( window.pageYOffset !== undefined ) ? window.pageYOffset : ( document.documentElement || document.body.parentNode || document.body ).scrollTop;
		}, 

		scrollHandler = function() {
			if( ! ticking ) {
				lastScrollTop = getScrollTop();
				reqAnimFrame( updateHandler );
				ticking = true;
			}
		}, 
		
		updateHandler = function() {
			var i;
			for( i = 0; i < parallaxInstances.length; i++ ) {
				parallaxInstances[ i ].update( lastScrollTop );
			}
			ticking = false;
		};

	_win.on( 'orientationchange.parallax resize.parallax', function() {
		windowHeight = _win.height();
		scrollHandler();
	}).on( 'scroll.parallax', scrollHandler );

	Parallax.prototype = {
		defaults: {
			breakpoints: { // responsive breakpoints to compare against screen.width
				xs: 768, 
				md: 992, 
				lg: 1200
			}, 
			attribute: 'background', // the data attribute name used to fetch background image
			xpos: '50%', // the background-x position
			mode: 'parallax', // parallax, fixed none
			activeClass: 'has-bg', 
			parallaxClass: 'parallax-bg fixed-bg', 
			fixedBgClass: 'fixed-bg', 
			speedFactor: 0.4, // the scrolling speed relative to the window
			loadingText: 'loading...' // the loading text to display on the target element
		}, 

		_init: function( element, options ) {
			var t = this;

			this.element = $( element );
			this.options = $.extend( true, {}, this.defaults, options, $( element ).data() );

			this.element.addClass( this.options.activeClass );
			this._loadBackground();
			this._activate();
		}, 

		_loadBackground: function() {

			var backgroundAttribute = this.options.attribute;

			if( this.options.breakpoints && screen && screen.width ) {

				var passedBreakpoint;

				// Convert breakpoints into an array with descending size
				$.each( $.map( this.options.breakpoints, function( size, key ) {
					return { key: key, size: size };
				}).sort(function( a, b ) {
					return a.size < b.size ? -1 : 1;
				}), function() {
					if( screen.width >= this.size ) {
						passedBreakpoint = this;
					}
				});

				if( passedBreakpoint && this.element.data( this.options.attribute + '-' + passedBreakpoint.key )  ) {
					backgroundAttribute = this.options.attribute + '-' + passedBreakpoint.key;
				}
			}

			this.element[0].style.backgroundImage = 'url(' + this.element.data( backgroundAttribute ) + ')';

		}, 

		_activate: function() {
			var t = this;

			t.refresh();
			t.update( getScrollTop() );

			if( 'parallax' == this.options.mode ) {
				t.element.addClass( this.options.parallaxClass );
			} else if( 'fixed' == this.options.mode ) {
				t.element.addClass( this.options.fixedBgClass );
			}
		}, 

		update: function( scrollTop ) {
			if( 'parallax' == this.options.mode && this.elementBottom >= scrollTop && this.elementTop <= scrollTop + windowHeight ) {
				this.element[0].style.backgroundPosition = this.options.xpos + " " + Math.round( (this.elementTop - scrollTop) * this.options.speedFactor ) + "px";
			}
		}, 

		refresh: function() {
			this.elementTop = this.element.offset().top;
			this.elementBottom = this.elementTop + this.element.outerHeight();
		}
	};

	$.fn.parallax = function( options ) {
		return this.each(function() {
			var data = $.data( this, 'parallax' ), 
				opts = typeof options == 'object' && options;

			if( ! data ) {
				$.data( this, 'parallax', ( data = new Parallax( this, opts ) ) );
				parallaxInstances.push( data );
			}
			if( typeof options == 'string' ) data[options]();
		});
	};

}) ( jQuery, window, document );