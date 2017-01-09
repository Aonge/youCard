$(function(){
//	var imgArr = [
//		"img/video_img/L_1.png",
//		"img/video_img/L_2.png",
//		"img/video_img/L_2.png",
//		"img/video_img/L_1.png"
//	]
//	var img = $(".slide-pan img");
//	img.map(function(index,item){
//		$(item).attr("src",imgArr[index]);
//	});
	var tag = $("#footer li");
	tag.eq(1).addClass("page-active");
	
	var links = $(".linkSonPage");
	touch.on(links,"tap",function(){
		window.location.href="video_zz.html";
	});
	
		
	var more = $(".more");
	touch.on(more,"tap",function(){
		Mock.mock("",{
			"nodes|2":[{}]
		})
	});	
});