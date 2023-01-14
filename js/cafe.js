// let nav_bar = document.querySelector(".nav");
// let bars = document.querySelector('.bars-icon');

// bars.addEventListener('click',function(){
//     if(nav_bar.style.display == "block") {
//         nav_bar.style.display = "none";
//     } else{
//         nav_bar.style.display = "block";
//     }
// })


$(function(){
    if(window.innerWidth > 767) {
        $(".nav-bar").show();
    }else{
        $(".nav-bar").hide();
    }
    $(window).resize(function() {
        if(window.innerWidth > 767 ){
            $(".nav-bar").show();
        } else {
            $(".nav-bar").hide();
        }
    })
    $("#arrow-up").hide();
    $(".bars-icon").click(function() {
        $(".nav-bar").slideToggle();
    })
    $(window).scroll(function() {
        if($(this).scrollTop() > 50 ){
            $("#arrow-up").fadeIn("slow");
        } else {
            $("#arrow-up").fadeOut("slow");
        }
    })
    $("#arrow-up").bind("click",function() {
        $("html,body").animate( {scrollTop: 0 },1000);
        return false;
    })
})
