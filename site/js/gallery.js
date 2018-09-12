$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
        // Can add title by using the following:
        // item.el.attr('title') + '<small>Crafted with care by Adventure Bound Crafts</small>'
				return '<small>Crafted with care by Adventure Bound Crafts</small>';
			}
		}
	});
});