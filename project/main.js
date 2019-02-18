$(document).ready(function() {
	var modal = $('.modal'),
		overlay = $('.overlay'),
		link = $('.text_top');
	link.on('click', function() {
		modal.show();
		overlay.show();
	overlay.on('click', function() {
		modal.hide();
		overlay.hide();
});
});
});

$(document).ready(function() {
	var $toggleButton = $('.toggle-button');
	$toggleButton.on('click', function() {
	  $(this).toggleClass('button-open');
	});
  });