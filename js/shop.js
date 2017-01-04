$(function() {
	var imgArr = [
		"img/shop/swiper1.png",
		"img/shop/swiper2.png",
		"img/shop/swiper3.png",
		"img/shop/swiper1.png",

	]
	var img = $(".slide-pan img");
	img.map(function(index, item) {
		$(item).attr("src", imgArr[index]);
	});
	var tag = $("#footer li");
	tag.eq(2).addClass("page-active");
})