$(function(){
	var tag = $("#footer li");
	tag.eq(0).addClass("page-active");
	var strstegyDetail = $("#contain .conts");
	var config = {
		tap:true,
		swipeMinDistance: 50, //swipe移动最小距离
		swipeFactor: 200, //加速因子, 值越大变化速率越快
	}
	touch.config = config;
	touch.on(strstegyDetail,"tap",function(){
		window.location.href = "Raiders.html"
	})
})