$(document).ready(function () {
    $('.content').each(function (i, obj) {
        let base = $(this);
        let link = $("<a page-link></a>").text(base.attr("name"))
        link.attr("id", base.attr("id"))
        link.click(function () {
            $([document.documentElement, document.body]).animate({
                scrollTop: base.offset().top - $('nav').height()
            }, 1000)
        })
        $('nav').append(link)
    });
});

$(window).scroll(function () {
    var current = 9999999999;
    var obj;
    $('.content').each(function () {
        var c = -($(this).offset().top - $(window).scrollTop())
        $('#' + $(this).attr("id")).removeAttr("select", "")
        if (c < current && c >= 0) {
            current = c
            obj = $('#' + $(this).attr("id"))
        }
    });
    obj.attr("select", "")
});
