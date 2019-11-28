$(document).click(function (e) {
    if (e.button == 0 && ($(e.target).attr('class'))) {
        if ($(e.target).attr('class') == "menuButton") {
            $('.menuButton').each(function (i, obj) {
                toggle($('#top-nav-bar'))
                toggle($(this))
            });
        } else {
            $('.menuButton').each(function (i, obj) {
                toggle($('#top-nav-bar'), false)
                toggle($(this), false)
            });
        }
    }
});

$(document).keyup(function (e) {
    if (e.key === "Escape") { // escape key maps to keycode `27`
        $('.menuButton').each(function (i, obj) {
            toggle($('#top-nav-bar'), false)
            toggle($(this), false)
        });
    }
});

function toggle(element, override) {
    if (element.attr('show') == '' || override != undefined) {
        element.removeAttr('show')
        return true
    } else {
        element.attr('show', '')
        return false
    }
}

function check(element) {
    if (element.attr('show') == '') {
        return true
    } else {
        return false
    }
}
