$(document).ready(function () {
    $('h1').each(function (i, obj) {
        let base = $(this);
        let link = $("<a page-link></a>").text(base.text())
        link.click(function () {
            $([document.documentElement, document.body]).animate({
                scrollTop: base.offset().top -  $('nav').height()
            }, 1000)
        })
        $('nav').append(link)
    });
});