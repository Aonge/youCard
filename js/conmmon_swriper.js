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