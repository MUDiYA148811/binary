$('.filter__tab').click(function(event) {
	$('.filter__tab').removeClass('active');
	$(this).addClass('active');

	return false;
})

$('.nav__link').click(function(event) {
	$('.nav__link').removeClass('active');
	$(this).addClass('active');

	return false;
})
