var num = 1;
var btn = document.getElementsByTagName("button")[0];
$(function(){
	touch.on(btn,"touchstart",function(){
		num++;
	if((num%2 == 0)){
	$("button").css("background","white");
	$("button").css("color","red");
	$("button i").css("color","red");
	}else{
	$("button").css("background","red");
	$("button").css("color","white");
	$("button i").css("color","white");	
	}
	})
})
