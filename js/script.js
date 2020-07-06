//loading design while page is loading
$(window).on('load', function(){
    $(".loading .h1").fadeOut(2500,function(){
        $(this).parent().fadeOut(1500,function(){
            $(this).remove();
            $("body").css("overflow","auto");
            //Nice Scroll Plugin
            $("html, body").niceScroll({
                cursorcolor:"#666",
                cursorwidth:"10px",
                cursorborder:"1px solid #666"
            });
        });
    });
});
//When Page Get Ready
$(function(){
    $(".carousel").carousel({
        interval: 5000
    });
    
    // Setting up option icon when clicked the option box be visibile
    $(".option-icon").click(function(){
        $(this).parent().toggleClass("is-visible");
        if ($(this).parent().hasClass("is-visible")){
            $(this).parent().animate({
                left: "0"
            },750);
        }else{
            $(this).parent().animate({
                left: "-221px"
            },750);
        }
    });
     
    //Change Theme Color
    $(".option-box .color-option ul li").click(function(){
        $("link[href*='theme']").attr("href",$(this).data("value"));
    });
    
    //Show Up Button When Screen Go Down
    $(window).scroll(function(){
        if($(this).scrollTop() > 300){
            $(".up-button").fadeIn(350);
        }else{
            $(".up-button").fadeOut(350);
        }
    });
    
    //Make The Selected Link Active 
    $("#ournav ul > li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        if( !$(this).is(":nth-of-type(4)") && !$(this).is(".dropdown ul li") ){
            $(".dropdown ul li").removeClass("active");
        }
    });
    
    //Scroll To The Section Position When Clicked Its link
    $("#ournav li").click(function(){
        $(".navbar-header button").addClass("collapsed");
        $(".navbar-collapse").removeClass("in");
        $("html, body").animate({
            scrollTop: $("." + $(this).data("scrl")).offset().top - 30
        },1500);
    });
    
    //Click Up Button To Go To The Start Of The Page
    $(".up-button").click(function(){
        $("html, body").animate({
            scrollTop: 0
        },1500);
    });
    
    
});
