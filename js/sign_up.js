$(function() {
	var inputArr = $(".inputWrap input");
	var verifyBtn = $(".input3");
	var signBtn = $(".button1");
	var btn = document.getElementById("btn");
	var verifyBool = false;
	var signBool = false;
	var noRepeat = true;
	$(inputArr[0]).blur(function() {
		var phone = /^1(3|5|7|8)[0-9]{9}$/;
		var phoneInput = $(this).val();
		//		console.log(this)
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
				}else{
					return;
				}
				if($(inputArr[1]).val() == num) {
					verifyBool = true;
				}
//				console.log(verifyBool)
			});
		} else {
			$(this).val("");
			$(this).attr("placeholder", "手机号码有误")
		}
	});

	function rand(a, b) {
		return Math.floor(Math.random() * (b - a + 1) + a);
	}

	$(inputArr[2]).blur(function() {
		var reg1 = /^[a-zA-z]+(?=[0-9]+)/;
		var reg2 = /[a-zA-z0-9]{8}$/;
		var pass = $(this).val();
		//      console.log(reg2.test(pass))
		if((!reg1.test(pass)) || (!reg2.test(pass))) {
			$(this).val("");
			$(this).attr("placeholder", "密码字母开头,最少8位");
		}
	});
	$(inputArr[3]).blur(function() {
		var pass = $(this).val();
		if(pass === $(inputArr[2]).val()) {
			signBool = true;
		} else {
			$(this).val("");
			$(this).attr("placeholder", "两次密码不一致");
		}
		if(signBool && verifyBool) {
			signBtn.css({
				background: "#f25454"
			});
			touch.on(signBtn, "tap", function() {
				//存储用户手机号码
				localStorage.setItem("phone", $(inputArr[0]).val());
				alert("这里换成Ajax");
			})
		}
	});
})