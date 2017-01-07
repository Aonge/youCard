$(function() {
	var tag = $("#footer li");
	tag.eq(0).addClass("page-active");
})
var btn = document.getElementsByTagName("button");
$(function() {
	touch.on(btn, "tap", function() {
		if(this.innerHTML == "取消关注") {
			this.style.color = "white";
			this.style.background = "#f56243";
			this.innerHTML = "关注";
		}else{
			this.style.color = "#f56243";
			this.style.background = "white";
			this.innerHTML = "取消关注";
		}
	})
})