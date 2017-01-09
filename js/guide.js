$(function(){
	var body = $("body");
	var page = $("#slide .swrip-pan");
	var num = $(".w-wrap");
	var txtOne = $(".w-txt1");
	var txtTwo = $(".w-txt2");
	var txtThree = $(".w-txt3");
	
	var giftOne = $(".w-gift1");
	var giftTwo = $(".w-gift2");
	var giftThree = $(".w-gift3");
	
	var phoneOne = $(".w-iphone1");
	var phoneTwo = $(".w-iphone2");
	var phoneThree = $(".w-iphone3");
	
	var onLine = $(".w-new");
	var present = $(".w-hot");
	var intr = $(".w-dujia");
	
	var index = 0;
	//配置touch
	var config = {
		    tap: true,                  //tap类事件开关, 默认为true
		    doubleTap: false,            //doubleTap事件开关， 默认为true
		    hold: true,                 //hold事件开关, 默认为true
		    holdTime: 650,              //hold时间长度
		    swipe: true,                //swipe事件开关
		    swipeTime: 300,             //触发swipe事件的最大时长
		    swipeMinDistance: 20,       //swipe移动最小距离
		    swipeFactor: 200,             //加速因子, 值越大变化速率越快
		    drag: false,                 //drag事件开关
		    pinch: false               //pinch类事件开关
	}
	touch.config = config
	//动画函数
	function pageMove(index,obj){
		if(index == 0){
			obj.css({
				left:-100*index+"%"
			});
			txtOne.animate({
					left:20+"%"
				},600,"linear");
			giftOne.animate({
					right:50-giftOne.offset().width/body.offset().width*100/2+"%"
				},600,"linear",function(){
					phoneOne.animate({
						opacity:1
					},300,"linear")
				})
		}else if(index == 1){
			var ph = phoneTwo.offset();
			onLine.css("top",(ph.top+ph.height/4));
			intr.css("top",(ph.top+ph.height/1.7));
			present.css("top",(ph.top+ph.height/2.2))
			obj.css({
				left:-100*index+"%"
			});
			txtTwo.animate({
					left:18+"%"
				},600,"linear");
			giftTwo.animate({
					right:50-giftTwo.offset().width/body.offset().width*100/2+"%"
			},600,"linear",function(){
					onLine.css("opacity",0);
					intr.css("opacity",0);
					present.css("opacity",0);
					phoneTwo.animate({
						opacity:1
					},300,"linear",function(){
						onLine.css("opacity",1);
						intr.css("opacity",1);
						present.css("opacity",1);
					})
				})
		}else if(index == 2){
			obj.css({
				left:-100*index+"%"
			});
			txtThree.animate({
					left:18+"%"
				},600,"linear");
			giftThree.animate({
					right:50-giftOne.offset().width/body.offset().width*100/2+"%"
			},600,"linear",function(){
					phoneThree.animate({
						opacity:1
					},300,"linear")
				})
		}else{
			obj.animate({
				opacity:0
			},500,"linear",function(){
				window.location.href = "index.html"
			})
		}
	}
	pageMove(0,page);
	touch.on(page,"swipestart swiping swipeend",function(event){
		event.preventDefault();
//		console.log(event.distanceX)
		if (event.distanceX<0) {
			if(event.type == "swipestart"){
				index++;
			}
			if(event.type == "swiping"){
				var dis = page.offset().left;
				if(index>2){
					return;
				}else{
					page.css({
						left:dis+event.distanceX
					})
				}
				
			}
			else if(event.type == "swipeend"&&event.distanceX<-100){
//				console.log(event.type);
//				console.log(index);
				pageMove(index,page);
			}else if(event.type == "swipeend"&&event.distanceX>-100){
				page.css({
					left:-100*(--index)+"%"
				});
			}
		} 
	})
})