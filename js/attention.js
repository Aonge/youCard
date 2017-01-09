$(function() {
	var tag = $("#footer li");
	tag.eq(0).addClass("page-active");
	var care = $(".w-attentionList button");
	var star = $(".favorite");
	//	star.map(function(index,item){
	////		console.log(item)
	//		item.firm = false;
	//		item.index = index;
	//	})
	touch.on(care, "tap", function() {
		if($(this).html() === "取消关注") {
			$(this).html("关注");
		} else {
			$(this).html("取消关注")
		}
		var parent = this.parentNode;
	});
	touch.on(star, "swipestart swiping swipeend", function(event) {
		event.preventDefault();
		if($(this).prev().html() != "游戏评级：") {
			if($(this).parent().attr("firm") =="true") {
				var fillStart = $(this).parent().next()
				fillStart.width(event.distanceX);
			} else {
				return;
			}
			if(event.type == "swipeend") {
				if(confirm("确定提交评分?")) {
					$(this).parent().attr("firm","false");
				} else {
					return;
				}
			}
		}else{
			return;
		}
	});
})
