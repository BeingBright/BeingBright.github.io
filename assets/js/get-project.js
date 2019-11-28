$(document).ready(function () {
    $('.project').each(function () {
        let projectType = $(this).attr("project-type");
        let el = $(this);
        el.load("assets/template/project-template.html");
        switch (projectType) {
            case 'itch':
                projectTypeItch(el);
                break;
            case 'github':
                projectTypeGithub(el);
                break;

            default:
                projectTypeDefault(el);
                break;
        }

    });
});


function projectTypeItch(element) {
    console.log(element);
}

function projectTypeGithub(element) {
    console.log("GITHUB: " + element);

}

function projectTypeDefault(element) {
    console.log("DEFAULT: " + element);
}