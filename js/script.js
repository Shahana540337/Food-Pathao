$(".slider_picture").slick({
	dots: true,
	arrows: false,
	infinite: true,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
});
$(".slider_details").slick({
	dots: false,
	arrows: false,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
});
 $('.counter').counterUp({
	delay: 10,
	time: 1000
});