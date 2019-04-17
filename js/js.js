$(document).ready(function(){
    $(".checked-box").on("click", ".checked-room", function(){
        $(".checked-box .checked-room").removeClass("active");
        $(this).addClass("active");
    });
});