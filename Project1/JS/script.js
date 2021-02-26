// header are start
$(function(){
   $(document).on("scroll", window, function(){
       if($(window).scrollTop()>80){
           $(".nav-menu").css({
               "position":"fixed",
               "background-color":"white",
           })
       }else{
        $(".nav-menu").css({
            "position":"absolute",
            "background-color":"transparent",
        })
       }
   })
})
//header are end
