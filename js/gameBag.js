$(function () {
//任务攻略跳转新手攻略	
	var cell = $(".cell");
	touch.on(cell,"tap",function(){
		window.location.href="firstLessons.html";
	});

//视频 资讯 攻略标题滑动效果
	var title = $(".topTxt");
	var title1 = $(".topTxt1");
	var title2 = $(".topTxt2");
	var title3 = $(".topTxt3");
	var line = $(".bottomLine");	
	touch.on(title1,"tap",function(){
		line.css("left","6%");
	});
	touch.on(title2,"tap",function(){
		line.css("left","39.3%");
	});
	touch.on(title3,"tap",function(){
		line.css("left","72.6%");
	});

	for(var i=0;i<title.length;i++){
		touch.on(title[i],"tap",function () {
			console.log(this);
			title.css("color","#000000");
			this.style.color = "red";			
		});
	};
		
});

