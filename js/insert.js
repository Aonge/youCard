
var vMore = $(".v-more");
var dl = $(".vd-contain dl");
var txt = /\r\n\t/g;
var str1 = dl[0].outerHTML.replace(txt, "");

function tap(more, str) {
	touch.on(more, "tap", function() {
		if($(this).html() == "查看更多") {
			var ul = $(this).parent().prev();
			insert(str, ul);
		} else {
			var ul = $(this).prev()
			insert(str, ul);
		}
	});
}

function insert(str, ul) {
	Mock.mock("http://localhost:3000/youCard/", {
		"nodes|2": [{
			"nodeName": str
		}]
	});
	$.ajax({
		type: "get",
		url: "http://localhost:3000/youCard/",
		async: true,
		dataType: "json",
		success: function(data) {
			var li = data.nodes;
			li.map(function(item, index) {
				ul.append(item.nodeName)
			})
		}
	});
}