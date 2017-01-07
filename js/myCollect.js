$(function  () {
	var video = $(".topTxt1");
	var stra = $(".topTxt2");
	var line = $(".bottomLine");
	touch.on(video,"tap",function(){
		video.css("color","red");
		stra.css("color","#000000");
		line.css("left","10%");
	});
	
	touch.on(stra,"tap",function(){
		video.css("color","#000000");
		stra.css("color","red");
		line.css("left","60%");
	});
	
})