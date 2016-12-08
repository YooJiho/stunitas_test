// JavaScript Document
$(document).ready(function(e) {
    
	$(".banner>ul").find("li").click(function(e) {
        
		var sts = $(this).index();
		console.log(sts);
		
		$(this).css({border:"3px solid #f00",boxSizing:"border-box"}).siblings().css({border:"0"});
		$(".banner>div").css({background:"url(img/sBan0"+sts+".jpg) no-repeat center/cover"});
    });
	
	$(".video").find("li").click(function(e) {
        
		$(this).children("p").css({color:"#cf0000"}).parent().siblings().children("p").css({color:"#000"});
    });
});