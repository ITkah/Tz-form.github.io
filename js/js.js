$(document).ready(function(){
    $(".checked-box").on("click", function(){
        $(".checked-box").removeClass("active");
        $(this).addClass("active");
    });
});