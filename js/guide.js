$(function(){
	var body = $("body");
	var page = $("#slide");
	
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
	
	var index = -1;
	//动画函数
	function pageMove(obj){
		index++;
		if(index == 0){
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
			obj.animate({
				left:0+"%"
			},300,"linear");
		}else if(index == 1){
			var ph = phoneTwo.offset();
			onLine.css("top",(ph.top+ph.height/4));
			intr.css("top",(ph.top+ph.height/1.7));
			present.css("top",(ph.top+ph.height/2.2))
			obj.animate({
				left:-100+"%"
			},300,"linear",function(){
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
			});
		}else if(index == 2){
			obj.animate({
				left:-200+"%"
			},300,"linear",function(){
				txtThree.animate({
					left:18+"%"
				},600,"linear");
			giftThree.animate({
					right:50-giftOne.offset().width/body.offset().width*100/2+2+"%"
			},600,"linear",function(){
					phoneThree.animate({
						opacity:1
					},300,"linear")
				})
			});
		}else{
			obj.animate({
				opacity:0
			},500,"linear",function(){
				window.location.href = "index.html"
			})
		}
		
	}
	pageMove(page);
	touch.on(body,"swipeleft",function(){
		pageMove(page);
	})
})