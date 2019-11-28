$(document).ready(function () {
    $('#top-nav-bar a').each(function (i, obj) {

        if ($(this).text().toLowerCase().includes(document.title.toLowerCase())) {
            $(this).attr("select", '')
        }
    });
});