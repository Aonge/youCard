$(function(){
	var back = $("#head .title i");
	var config = {
		    swipeFactor: 200,             //加速因子, 值越大变化速率越快
		    drag: false,                 //drag事件开关
		    pinch: false               //pinch类事件开关
	}
	touch.config = config;
	touch.on(back,"tap",function(){
		window.history.back();
	});
})