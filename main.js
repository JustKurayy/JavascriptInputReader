let osname = window.navigator.platform;
document.querySelector('.console').innerHTML += osname + "<br>";

document.addEventListener('keydown', function(event) {
    document.querySelector('.console').innerHTML += event.key + " ";
});