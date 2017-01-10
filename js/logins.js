$(function(){
	var tag = $("#footer li");
	tag.eq(3).addClass("page-active");
	var login = $(".cont button");
	var level = $(".content-txt1 u:nth-of-type(2)");
	var signed = $(".content-txt1 u:nth-of-type(3)");
	var divArr = $(".content-txt2");
	var qinDao = $(".content-txt1>u");
	var num = $(".content-txt1>span>u");
	var myBag = $(divArr[0]);
	var myOrders = $(divArr[1]);
	var myCollection = $(divArr[2]);
	var usInfo = $(divArr[3]);
	var close = $(".alert_con i");
	var divObj = [login,signed,myBag,myOrders];
	var day = 0;
	//配置touch
	var config = {
		    swipeFactor: 200,             //加速因子, 值越大变化速率越快
		    drag: false,                 //drag事件开关
		    pinch: false               //pinch类事件开关
	}
	touch.config = config;
	function local(){
		window.location.href = "w-login.html";
	}
	divObj.map(function(item){
		touch.on(item,"tap",local);
	})
	touch.on(usInfo,"tap",function(){
		$(".alert_wrap").css("display","block");
		$(".alert_con").css("display","block");
	});
	touch.on(close,"tap",function(){
		$(".alert_wrap").css("display","none");
		$(".alert_con").css("display","none");
	});
	touch.on(myCollection,"tap",function(){
		window.location.href = "w-myCollect.html";
	});
	touch.on($(qinDao[1]),"tap",function(){
		day++;
		$(num).html(day)
	});
});