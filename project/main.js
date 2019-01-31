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