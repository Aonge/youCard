$(function() {
	var inputArr = $(".inputWrap input");
	var signBtn = $(".button1");
	var verifyBtn = $(".input3");
	var verifyBool = false;
	var signBool = false;
	var noRepeat = true;
	function rand(a, b) {
		return Math.floor(Math.random() * (b - a + 1) + a);
	}
	$(inputArr[0]).blur(function() {
		var phone = /^1(3|5|7|8)[0-9]{9}$/;
		var phoneInput = $(this).val();
		if(phone.test(phoneInput)) {
			verifyBtn.css({
				background: "#f25454"
			});
			verifyBtn.removeAttr("disabled");
			touch.on(verifyBtn, "tap", function() {
				if(noRepeat) {
					noRepeat = false;
					verifyBtn.css({
						background: "#888"
					});
					var num = rand(100000, 999999);
					$(inputArr[1]).val(num);
					var s = 5;
					var timer = setInterval(function() {
						s--;
						verifyBtn.html(s + "秒后获取");
						if(s <= 0) {
							clearInterval(timer);
							verifyBtn.css({
								background: "#f25454"
							});
							noRepeat = true;
							verifyBtn.html("获取验证码");
						}
					}, 1000);
				} else {
					return;
				}
				if($(inputArr[1]).val() == num){
					verifyBool = true;
					if(verifyBool) {
						signBtn.css({
							background: "#f25454"
						});
						touch.on(signBtn, "tap", function() {
							//存储用户手机号码
							localStorage.setItem("phone", $(inputArr[0]).val());
							alert("这里换成Ajax");
						})
					}
				}else{
					verifyBool = false;
				}
				//				console.log(verifyBool)
			});
		} else {
			$(this).val("");
			$(this).attr("placeholder", "手机号码有误");
			noRepeat = false;
			verifyBtn.css({
				background: "#888"
			});
		}
	});
})