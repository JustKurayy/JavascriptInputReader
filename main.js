document.addEventListener('keydown', function(event) {
    document.querySelector('.console').innerHTML += event.key + " ";
});