var app = document.getElementById('typing');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('the God of Mischief')
    .pauseFor(2500)
    .deleteAll()
    // .typeString('Strings can be removed')
    // .pauseFor(2500)
    // .deleteChars(7)
    // .typeString('<strong>altered!</strong>')
    // .pauseFor(2500)
    .start();