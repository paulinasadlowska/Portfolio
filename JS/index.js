$(".a-about").on("click", function ()
    {
        $("body,html").animate(
            {scrollTop: $("#about").offset().top}, 500
        )
    })
    $(".a-skills").on("click", function ()
    {
        $("body,html").animate(
            {scrollTop: $("#skills").offset().top}, 500
        )
    })
    $(".a-contact").on("click", function ()
    {
        $("body,html").animate(
            {scrollTop: $("#contact").offset().top}, 500
        )
    })

    const hamburger = document.querySelector(".hamburger");
    const iconBurger = document.querySelector(".fa-bars");
    const iconX = document.querySelector(".fa-times");
    const row = document.querySelector(".main-nav");

    hamburger.addEventListener("click", function(){
        iconBurger.classList.toggle("show");
        iconX.classList.toggle("show");
        row.classList.toggle("show");
    })



