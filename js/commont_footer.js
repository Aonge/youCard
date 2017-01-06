$(function(){
	$.ajax({
			type:"get",
			url:"common_footer.html",
			async:false,
			success:function(data){
				$("#contain").after(data);
			}
	});
	var tag = $("#footer li");
	//配置touch
	var config = {
		    tap: true,                  //tap类事件开关, 默认为true
		    doubleTap: false,            //doubleTap事件开关， 默认为true
		    hold: true,                 //hold事件开关, 默认为true
		    holdTime: 650,              //hold时间长度
		    swipe: true,                //swipe事件开关
		    swipeTime: 300,             //触发swipe事件的最大时长
		    swipeMinDistance: 50,       //swipe移动最小距离
		    swipeFactor: 200,             //加速因子, 值越大变化速率越快
		    drag: false,                 //drag事件开关
		    pinch: false               //pinch类事件开关
	}
	touch.config = config
	touch.on($(tag[0]),"tap",function(event){
		event.preventDefault();
		window.location.href = "index.html";
	});
	touch.on($(tag[1]),"tap",function(event){
		event.preventDefault();
		window.location.href = "video.html";
	});
	touch.on($(tag[2]),"tap",function(event){
		event.preventDefault();
		window.location.href = "w-shop.html";
	});
	touch.on($(tag[3]),"tap",function(event){
		event.preventDefault();
		window.location.href = "Login.html";
	});
})
