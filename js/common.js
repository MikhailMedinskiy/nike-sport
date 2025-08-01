(function ($) {
    console.log('common.js loaded');
    $(document).ready(function () {

        $(".list-color__item").on( "click", function(){
            $(".list-color__item").removeClass("list-color__item--active");
            $(this).addClass("list-color__item--active");
            var bgcolor = $(this).css('background');
            $(".product").css("background", bgcolor);

        });
    });

})(jQuery);