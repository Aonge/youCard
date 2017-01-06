$(function() {
		$.ajax({
		type:"get",
		url:"slide_move.html",
		async:false,
		success:function(data){
			$("body").append(data);
		}
	});
	var config = {
		tap: true, //tap类事件开关, 默认为true
		doubleTap: true, //doubleTap事件开关， 默认为true
		hold: false, //hold事件开关, 默认为true
		holdTime: 650, //hold时间长度
		swipe: true, //swipe事件开关
		swipeTime: 300, //触发swipe事件的最大时长
		swipeMinDistance: 50, //swipe移动最小距离
		swipeFactor: 200, //加速因子, 值越大变化速率越快
		drag: false, //drag事件开关
		pinch: false //pinch类事件开关
	}
	var head = $("#head");
	var contain = $("#contain");
	var footer = $("#footer");
	var pageTwo = $("#page-two");
	var tabs = $("#head .title i");
	var body = $("body");
	pageTwo.css({
		display: "block",
		left: "-80%"
	});
	head.css({
		left: "0%"
	});
	contain.css({
		left: "0%"
	});
	footer.css({
		left: "0%"
	});
	touch.on(tabs, "tap", function(event) {
		event.preventDefault();
		body.css({
			overflow:"hidden"
		});
		pageTwo.css({
			display: "block",
		});
		setTimeout(function() {
			pageTwo.css({
				display: "block",
				left: 0
			});
			head.css({
				left: "70%"
			});
			contain.css({
				left: "70%"
			});
			footer.css({
				left: "70%"
			});
		}, 10)

	})
	touch.on(document, "swipeleft", function(event) {
		event.preventDefault();
		pageTwo.css({
			left: "-80%"
		});
		head.css({
			left: "0%"
		});
		contain.css({
			left: "0%"
		});
		footer.css({
			left: "0%"
		});
		setTimeout(function() {
			pageTwo.css({
				display: "none"
			});
			body.css("overflow", "auto");
		}, 300)
	})
})