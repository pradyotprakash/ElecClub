/// <reference path="jquery-1.8.3.min.js" />

$(function () {

    // Animate on page load
    $.each($(".personas > li"), function (idx) {
        var $item = $(this);

        $item.find(".icon-persona").css({ "margin-top": "-70px", "opacity": "0" });
        $item.find(".desc, .desc-btn, .title").hide();


        $item.find(".icon-persona").delay(idx * 50).animate({ "margin-top": "10px", "opacity": "1" }, function () {
            $item.find(".title").fadeIn(200);
        });

        
    });

    // Animate on hover
    $(".personas > li").hover(function () {
        var $this = $(this);
        $this.find(".icon-persona").stop().animate({ "margin-top": "-70px", "opacity": "0" });
        $this.find(".desc").stop().fadeIn(200, function () {
            $this.find(".desc-btn").stop().delay(100).fadeIn(200);
        });

    }, function () {
        var $this = $(this);
        $this.find(".desc-btn").stop().fadeOut(200, function () {
            $this.find(".desc-btn, .desc").stop().fadeOut(200);
            $this.find(".icon-persona").stop().animate({ "margin-top": "10px", "opacity": "1" });
        });
    });
});