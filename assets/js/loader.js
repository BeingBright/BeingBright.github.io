$(document).ready(function () {
    $('.load').each(function () {
        let path = $(this).attr("html")
        $(this).load(path);
    });
});