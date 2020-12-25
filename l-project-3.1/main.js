var app = document.getElementById('typing');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('BizLand')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Bootstrap.')
    .pauseFor(2500)
    .deleteAll()
     .typeString('Wonderland')
     .pauseFor(2500)
    .start();