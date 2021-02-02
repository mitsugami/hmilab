$(function() {
var Expand = (function() {
	var tile = $('.strip');
	var tileLink = $('.strip > .strip__content');
	var tileText = tileLink.find('.strip__inner-text');
	var stripClose = $('.strip__close');

	var expanded  = false;

	var open = function() {
	var tile = $(this).parent();

		if (!expanded) {
			tile.addClass('strip--expanded');
			// add delay to inner text
			tileText.css('transition', 'all .6s 1s cubic-bezier(0.23, 1, 0.32, 1)');
			stripClose.addClass('strip__close--show');
			stripClose.css('transition', 'all .6s 1s cubic-bezier(0.23, 1, 0.32, 1)');
			expanded = true;
		} 
	};

	var close = function() {
		if (expanded) {
			tile.removeClass('strip--expanded');
			// remove delay from inner text
			tileText.css('transition', 'all 0.15s 0 cubic-bezier(0.23, 1, 0.32, 1)');
			stripClose.removeClass('strip__close--show');
			stripClose.css('transition', 'all 0.2s 0s cubic-bezier(0.23, 1, 0.32, 1)')
			expanded = false;
		}
	}

	var bindActions = function() {
		tileLink.on('click', open);
		stripClose.on('click', close);
	};

	var init = function() {
		bindActions();
	};

	return {
		init: init
	};

}());
Expand.init();
});
