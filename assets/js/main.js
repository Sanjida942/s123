$(document).ready(function(){
    
    

    $(window).scroll(function(){
        var sc = $(window).scrollTop();
            if(sc > 100){
                $(".nav").addClass("stiky")
            }
            else{
                $(".nav").removeClass("stiky")
            }
    });

});