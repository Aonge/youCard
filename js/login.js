$(function(){
	var phone = $(".inputBox").eq(0);
    var password = $(".inputBox").eq(1);
    var btn = $(".loginButton");
    var btnBool = false;
    phone.blur(function () {
        var reg = /^1(3|5|7|8)[0-9]{9}$/;
        var num = $(this).val();
        if(reg.test(num)){
            btnBool = true;
        }else{
            $(this).val("");
            $(this).attr("placeholder", "手机号码有误");
        }
    });
    touch.on(btn,"tap",function (event) {
        event.preventDefault();
        if(btnBool){
            $.ajax({
                method:"get",
                url:"http://localhost:8000/get",
                sync:true,
                dataType: "json",
                data:{
                    act:"login",
                    phone:phone.val(),
                    password:password.val()
                },
                success:function (data) {
                    if(data.err == 0){
                        alert(data.msg);
                        window.location.href = data.href;
                    }else if(data.err == 1){
                        password.val('');
                        password.attr("placeholder",data.msg);
                    }else if(data.err == 2){
                        // console.log(data);
                        phone.val('');
                        phone.attr("placeholder",data.msg);
                    }
                }
            });
        }
    })
});