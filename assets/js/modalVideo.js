/// <reference path="jquery-1.9.0.min.js" />
/// <reference path="froogaloop2.min.js" />

$(function () {
    var productVideo;
    $("[data-video=product-demo]").click(function () {
        if (!productVideo) {
            productVideo = $('<section class="modal hide fade video" tabindex="-1" role="dialog" aria-hidden="true">' +
                                 '<a href="#" class="icon-close" data-dismiss="modal" aria-hidden="true"></a>' +
                                 '<iframe src="http://player.vimeo.com/video/58920304?title=0&amp;byline=0&amp&amp;portrait=0&amp;color=309fc9&amp;api=1" width="600" height="337" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>' +
                             '</section>').appendTo("body").modal().on('hidden', function () {
                                 var iframe = $(this).parent().find("iframe")[0];
                                 if (iframe) {
                                     $f(iframe).api("pause");
                                 }
                             });
        }
        else {
            productVideo.modal('show');
        }
    });
});