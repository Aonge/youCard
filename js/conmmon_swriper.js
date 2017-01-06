$(function(){
//	$.ajax({
//			type:"get",
//			url:"common_swriper.html",
//			async:false,
//			success:function(data){
//				$("#contain").prepend(data);
//			}
//	});
	var slidePan = $(".slide-pan");
	var img = $(".slide-pan>img");
	var pagePoint = $(".sw-ponit span");
	slidePan.css({
		width:img.length*100 + "%"
	});
	img.css({
		width: 100/img.length + "%"
	});
	//记录图片位置
	var imgIndex = -1;//为了防止第一次执行动画没有过渡效果
	//动画
	function move(index){
		slidePan.animate({
			left:-100*index+"%"
		},350,"linear",function(){
			pagePoint.removeClass("active");
			if (index == 3) {
				pagePoint.eq(0).addClass("active");
			}else{
				pagePoint.eq(index).addClass("active");	
			}
		})
	}
	//左滑
	pagePoint.eq(0).addClass("active")
	function left(){
		imgIndex++;
		if (imgIndex == 4) {
			imgIndex = 1;
			slidePan.css('left',0);
		}
		move(imgIndex);
	}
	left();
	//右滑
	function right(){
		imgIndex--;
		if (imgIndex == -1) {
			imgIndex = 3;
			slidePan.css("left",-100*imgIndex+"%");
			move(--imgIndex);
		}else{
			slidePan.animate({
				left:-100*imgIndex+"%"
			},350,"linear",function(){
				pagePoint.removeClass("active");
				if (imgIndex == 3) {
					pagePoint.eq(0).addClass("active");
				}else{
					pagePoint.eq(imgIndex).addClass("active");	
				}
			})
		}
	}
	var timer = setInterval(left,2500);
	var config = {
		    tap: true,                  //tap类事件开关, 默认为true
		    doubleTap: false,            //doubleTap事件开关， 默认为true
		    hold: true,                 //hold事件开关, 默认为true
		    holdTime: 650,              //hold时间长度
		    swipe: true,                //swipe事件开关
		    swipeTime: 100,             //触发swipe事件的最大时长
		    swipeMinDistance: 50,       //swipe移动最小距离
		    swipeFactor: 200,             //加速因子, 值越大变化速率越快
		    drag: false,                 //drag事件开关
		    pinch: false               //pinch类事件开关
	}
	touch.config = config
	touch.on(img,"swipeleft swiperight",function(event){
		event.preventDefault();
		clearInterval(timer);
		switch(event.type){
			case "swipeleft":
				left();
				timer = setInterval(left,2500);
				break;
			case	 "swiperight":
				right();
				timer = setInterval(left,2500);
				break;
		}
	})
})