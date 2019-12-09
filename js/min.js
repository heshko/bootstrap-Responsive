$(function(){
    var winh  =  $(window).height(),
    upperh    =  $(".upper-bar").innerHeight();
    navh      =    $(".navbar").innerHeight();
    $(".slider,.slider .carousel-inner").height(winh-(upperh+navh));

    $(".featured-Work .nav-item").on("click",function(){
        $(this).addClass("active").siblings().removeClass("active");
       if($(this).data("class")==="all"){
           $(".img-work .im").css("opacity",1);
       }else{
        $(".img-work .im").css("opacity",0.1);
        $($(this).data("class")).parent().css("opacity",1);
       }
    })
})