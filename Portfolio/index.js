
/*Skills animation*/
let skillsContent = select(".skills-content");
if (skillsContent) {
    new Waypoint({
        element: skillsContent,
        offset: '80%',
        handler: function (direction) {
            let progress = select('.progress .progress-bar', true);
            progress.forEach((el) => {
                el.style.width = el.getAttribute('aria-valuenow') + '%'
            });
        }
    })
}
