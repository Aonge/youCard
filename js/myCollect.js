$(function() {
	var video = $(".topTxt1");
	var stra = $(".topTxt2");
	var line = $(".bottomLine");
	touch.on(video, "tap", function() {
		video.css("color", "red");
		stra.css("color", "#000000");
		line.css("left", "10%");
	});

	touch.on(stra, "tap", function() {
		video.css("color", "#000000");
		stra.css("color", "red");
		line.css("left", "60%");
	});

	//	勾选前后颜色
	var colorBef = "darkgray";
	var colorAft = "green";
	//点击单个勾选框
	//点击一键取消收藏

	var content = $("#content");
	var rightBotton = $(".rightBotton");
	var icon = $(".icon-xuankuang");
	//点击编辑
	var edit = $(".edits");
	var buttons = $(".bottomButton");
	touch.on(edit, "tap", function() {
		var txt = edit.html();
		if(txt == "取消编辑") {
			edit.html("编辑");
			buttons.css("display", "none");

		} else {
			edit.html("取消编辑");
			buttons.css("display", "inline-flex");

		}
	});
	//点击单个勾选框
	//点击一键取消收藏 
	icon.each(function(i, e) {
		touch.on(e, "tap", function() {
			if(e.style.color == colorAft) {
				e.style.color = colorBef;
			} else {
				touch.on(rightBotton, "tap", function() {
					buttons.css("display", "none");
					edit.html("编辑");
					e.parentElement.parentElement.parentElement.remove();
				})
				e.style.color = colorAft;
			}
		})
	})

	//侧滑取消收藏
	var lis = document.getElementsByClassName("txt-wrap");

	$(".txt-wrap").each(function(i, e) {
		touch.on(e, "swipeleft", function() {
			console.log(e);
			e.style.marginLeft = "-30%";
		});
	});
	$(".txt-wrap").each(function(i, e) {
		touch.on(e, "swiperight", function() {
			console.log(e);
			e.style.marginLeft = "0%";
		})
	})

	//点击取消收藏,删除本条信息
	$(".cancel").each(function(i, e) {
		touch.on(e, "tap", function() {
			e.parentElement.remove();
		});
	});

	//一键取消选择
	var leftBtn = $(".leftBottton");
	touch.on(leftBtn, "tap", function() {
		if(icon.css("color", colorAft)) {
			icon.css("color", colorBef);
		};
	});

})