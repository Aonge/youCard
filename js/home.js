$(function() {
	//	var imgArr = [
	//		"img/home_pic/swrip01.png",
	//		"img/home_pic/swrip02.png",
	//		"img/home_pic/swrip03.png",
	//		"img/home_pic/swrip01.png"
	//	]
	//	var img = $(".slide-pan img");
	//	img.map(function(index,item){
	//		$(item).attr("src",imgArr[index]);
	//	});
	
	var tag = $("#footer li");
	tag.eq(0).addClass("page-active");
	var list = $(".gm-list li");
	var more = $(".mores");
	var str = list[0].outerHTML.replace(txt, "");
	tap(more,str);
	tap(vMore,str1);
})