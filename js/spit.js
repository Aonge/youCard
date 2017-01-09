$(function() {
	var btn = document.getElementsByTagName("button")[0];
	var cont = $(".cont");
	var cons = $(".cons input");
	cons.blur(function() {
		var phone = /^1(3|5|7|8)[0-9]{9}$/;
		var consts = cons.val();
		if(phone.test(consts)) {
			touch.on(btn, "tap", function() {
				if(cont.val() == "" || cons.val() == "") {
					alert("请输入内容")
				} else {
					alert("吐槽成功,谢谢支持!");

				}
				cont.val("");
				cons.val("");
			});

		}
	})

})